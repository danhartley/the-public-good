import puppeteer from 'puppeteer'

import { sortBy, pause } from './test-utils.js'
import { getDomainFromURL, getLighthouseReport } from './emissions-tracker-utils.js'
import { EmissionsTracker } from './emissions-tracker.js'

import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'

const testSite = async ({byteOptions = null, visitOptions = null}) => {

  let emissionsTracker, url, domain, verbose = false, report, summary, runLighthouse = false

  const verboseArgs = ['-v', '--verbose']
  const urlArgs = ['-u', '--url']
  const lighthouseArgs = ['-lh', '--lighthouse']

  process.argv.forEach((val, index) => { 
      if(verboseArgs.includes(val)) verbose = true
      if(lighthouseArgs.includes(val)) runLighthouse = true
      if(urlArgs.includes(val)) {
        const nextArg = index + 1
        if(nextArg < process.argv.length) {
          url = process.argv[nextArg].includes('http') ? process.argv[nextArg] : `https://${process.argv[nextArg]}`
          domain = getDomainFromURL({url})
        }
      }
  })

  if(!domain) {
    console.log('Please check your command line flags:')
    console.log('Correct: -u {url value} -v {verbose}')
    console.log('Correct: --url {url value} --verbose {verbose}')
    console.log('Incorrect: -url {url value} --v {verbose}')
    return
  }

  if(runLighthouse) {
    const lhReport = await getLighthouseReport({
        lighthouse
      , chromeLauncher
      , url
    })

    report = lhReport.report
    summary = lhReport.summary
  }

  // Launch the browser in headless mode with support for Chrome DevTools
  // The viewport default is overridden so that we can scroll to the bottom of the page
  const browser = await puppeteer.launch({
        headless: false
      , devtools: true
      , defaultViewport: null
  })

  // Create a page
  const page = await browser.newPage()

  // Set the viewport dimensions
  // await page.setViewport({ width: 1280, height: 1024 })

  try {
      // Create instance of emissions tracker 
      emissionsTracker = new EmissionsTracker({
        page
      , options: {
            domain
          , reportGreenHosting: true
          , countryCode: 'PRT'
          , includeThirdPartyResources: true
          , sort: {
              sortBy
            , direction: 'desc'
          }
          , verbose
          , lighthouse: { log: runLighthouse, report, summary }    
          , markDOMLoaded: 'DOM loaded'
          , markStart: 'fetch-field-notes: start'
          , markEnd: 'fetch-field-notes: end'      
        }
        , byteOptions
        , visitOptions
      })

      // Navigate to site
      await page.goto(url)
      
      const footer = await page.$('footer')      
      await footer.scrollIntoView({behavior: 'smooth'})

      // Get performance report
      await pause({
        func: async () => {
          const { summary, details } = await emissionsTracker.getReport()
        }
      }, 0)
  } catch(e) {
    console.log(e)
  } finally {
    // await browser.close()
  }
}

testSite({})