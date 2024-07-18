/* eslint-disable no-console */
import { browser } from '@danhartley/emissions';

import { useEffect } from 'preact/hooks';

const Emissions = () => {

  useEffect(() => {
    (async () => {      
      await browser.registerServiceWorker()
    
      const url = window.location.origin
      const options = {
        hostingOptions: {
          verbose: true,
          forceGreen: true,
        }
      }

      const { pageWeight, count, greenHosting, emissions, mgCO2 } = await browser.getPageEmissions(url, options)
      
      console.log(`Report for ${url}`)
      console.log('Page weight: ', `${pageWeight / 1000} Kbs`)
      console.log('Requests ', count)  
      console.log('Emissions: ', `${mgCO2} mg of CO2`)
      console.log(greenHosting ? 'Hosting: green hosting' : 'Hosting: not green hosting')
  
      await browser.clearPageEmissions()
    })() 
  })
  
  return (
      <div></div>
  )
}

export default Emissions