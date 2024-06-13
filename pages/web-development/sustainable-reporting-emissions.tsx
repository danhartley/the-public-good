import Links from 'components/links/Links'
import Accordion from 'components/accordion/accordion'
import Layout from 'components/layout/layout'
import Published from 'components/published/published'
import Top from 'components/top/top'
import styles from 'pages/pages.module.scss'

const SustainableReportingEmissions = () => {
  const externalLinks = [
    {
      name: 'Sustainability | HTTP Archive',
      source: 'https://almanac.httparchive.org/en/2022/sustainability#carbon-emissions',
    },
    {
      name: 'Digital Carbon Footprint: The Current State of Measuring Tools | marmelab',
      source: 'https://marmelab.com/blog/2022/04/05/greenframe-compare.html',
    },
    {
      name: 'Estimating Digital Emissions | Sustainable Web Design',
      source: 'https://sustainablewebdesign.org/estimating-digital-emissions/',
    },
    {
      name: 'CO2.js - Overview | The Green Web Foundation',
      source: 'https://developers.thegreenwebfoundation.org/co2js/overview/',
    },
    {
      name: 'Web Performance Recipes With Puppeteer | Addy Osmani',
      source: 'https://addyosmani.com/blog/puppeteer-recipes/',
    },
    {
      name: 'Digital Life Cycle Assessments | Mightybytes',
      source: 'https://www.mightybytes.com/blog/digital-life-cycle-assessment/',
    },
    {
      name: 'Why We Don’t Report Website Carbon Emissions | DebugBear',
      source: 'https://www.debugbear.com/blog/website-carbon-emissions',
    },
    {
      name: 'Measure and reduce your website\'s CO2 emissions | GreenFrame',
      source: 'https://greenframe.io/',
    },
    {
      name: 'Why web perf tools should be reporting website carbon emissions | Fershad Irani',
      source: 'https://calendar.perfplanet.com/2023/why-web-perf-tools-should-be-reporting-website-carbon-emissions/',
    },
  ]

  return (    
    <Layout
      header="Sustainable Reporting - Emissions"
      rt="2 to 3"
      title="Sustainable web development"
      description={
        'Tracking emissions from websites and web apps when running end-to-end tests.'
      }
      image="https://live.staticflickr.com/65535/51143928462_2fec2d283e_z_d.jpg"
    >
      <section class={styles.report}>
        <h2 class={styles.mt0}>
          Tracking carbon emissions in end-to-end tests.
        </h2>

        <p>Measuring carbon emissions associated with websites and apps is in its infancy but there are benefits to doing so.</p>

        <p>The first is an appreciation for how emissions relate to bytes transferred.</p>

        <p>The second is seeing how emissions fluctuate in response to changes in design and code. This can be done by recording emissions during end-to-end (E2E) tests.</p>

        <p>Emissions created on the server, the network, and devices, as well as the emissions resulting from manufacture are beyond developers immediate control but we can elect to host our sites on servers running on renewable energy.</p>

        <p>But emissions reflect only part of a website's impact. For a profound assessment, a Digital Life Cycle Assessment (DCLA) is necessary. This will take into account many other factors including water and land usage.</p>      

        <h3>Don't hide in the IDE</h3>

        <p>The greatest benefit to me from measuring bytes and emissions was that I paid more attention to code running where others see and interact with it, in the browser.</p>

        <p>The Information Architecture (IA) of a web site and how individuals navigate it affects bytes transferred and processing time and resources.</p>

        <p>For example, this blog uses a static site generator (netlify) which preloads linked pages. The home page has a lot of internal links which significantly increase its page weight (a mix of the number of bytes transferred and the number of requests).</p>

        <p>But if you click on a visible link (above the fold) to internal content, you will see that page loads almost instantly with very few bytes being transferred. Reload the page, and you will see its true page weight. The difference is between a few kilobytes (kBs) to more than a hundred depending on the article.</p>

        <p>I also cache pages. If you return to a page (without reloading) it is served from a local cache and the only network traffic will be to third parties (such as cabin analytics).</p>

        <p>The efficacy of this strategy depends on how people use the site; whether they move between pages, or indeed whether they read more than one article in a single session. It's quite possible they won't read more than one but they may jump from page to page.</p>

        <p>To observe this behaviour, open the Network tab in the developer tools of any browser.</p>

        <p>Knowing how and when bytes are transferred and emissions accrued helps developers make good decisions about their <abbr class={styles.abbr} title="Information Architecture">IA</abbr>, especially as a site is modified, extended, and refactored.</p>

        <p>I'm less convinced displaying emissions is useful for site visitors. They may gain a feeling for what causes emissions but sources of very high emissions such as watching YouTube videos or streaming Netflix could make savings elsewhere appear trivial.</p>

        <p>On the other hand, if was easy to set budgets, we'd see the deleterious effect of devious or deceptive patterns such as Facebook's infinite scroll.</p>

        <h3>Emissions per byte</h3>

        <p>In order to measure carbon emissions for this website, I'm using <Links.EL link={{source:'https://developers.thegreenwebfoundation.org/co2js/overview/'}}>CO2.js</Links.EL> from The Green Web Foundation (GWF). The simplest call to their API needs only a byte value.</p>

        <p>If the site is hosted on servers running on renewable energy the emissions will be lower. The <abbr class={styles.abbr} title='The Green Web Foundation'>GBF</abbr> provides a helper function for <Links.EL link={{source:'https://developers.thegreenwebfoundation.org/co2js/tutorials/check-hosting/'}}>checking if a site is hosted green</Links.EL>.</p>

        <p>For a website of median <Links.EL link={{source:'https://almanac.httparchive.org/en/2022/page-weight'}}>page weight</Links.EL>, the simplest request is a few lines:</p>

        <pre>
          <code>
            <div>const green = hosting.check('median-website.com').green</div>
            <div>const co2Emission = new co2()</div>
            <div>const bytes = 2299</div>
            <div>const emissions = co2Emission.perByte(bytes, green)</div>
            <br />
            <div>// emissions is ~783mg/CO<sub>2</sub> for a site running on renewable energy</div>
            <div>// emissions is ~905mg/CO<sub>2</sub> for a site not running on renewable energy</div>
          </code>
        </pre>
        
        <h3>End-to-end testing</h3>

        <p>I created a simple helper class, <Links.EL link={{source:'https://github.com/danhartley/the-public-good/blob/main/public/emissions-tracker/emissions-tracker.js'}}>EmissionsTracker</Links.EL>, which returns a summary of page metrics relevant to its emissions. The data include: the total transfer size of these requests in kilobytes (kBs), how long the page took to load in milliseconds (ms), and the associated emissions in milligrammes of carbon dioxide.</p>

        <p>I record these values whilst running an end-to-end test. This allows me to monitor the effect of changes to pages.</p>

        <p>I also created a <Links.EL link={{source:'https://github.com/danhartley/the-public-good/blob/main/public/emissions-tracker/emissions-by-url.js'}}>generic test</Links.EL> which takes a URL passed to it on the command line. This is an additional boolean flag for verbosity and another which, if included, generates <Links.EL link={{source:'https://github.com/GoogleChrome/lighthouse'}}>Lighthouse</Links.EL> metrics.</p>

        <p>The test environment is Chrome under the control of <Links.EL link={{source:'https://github.com/puppeteer/puppeteer'}}>Puppeteer</Links.EL>.</p>

        <pre>
          <code>
          node public/emissions-tracker/emissions-by-url.js -u https://www.theguardian.com/uk -v -lh
          </code>
        </pre>

        <h3>Report</h3>

        <p>Here are the results from a few sites including this one.</p>

        <table class={styles.tablepadded}>
          <caption>Emissions Tracker Summary</caption>
          <thead>
          <tr>
            <th>Domain</th>
            <th class={styles.textRight}>Requests</th>
            <th class={styles.textRight}>kBs</th>
            <th class={styles.textRight}>ms</th>
            <th class={styles.textRight}>mg/CO<sub>2</sub></th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td class={styles.bgbodydomain}>thegreenwebfoundation.org</td>
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>24</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>457</td>
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>938</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>49</td>              
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>the-public-good.com</td>
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>66</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>462</td>
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>983</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>99</td>              
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>theguardian.com/uk</td>              
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>110</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>2092</td>
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>1533</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>320</td>              
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>inaturalist.org</td>       
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>59</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>1930</td>
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>3906</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>771</td>              
            </tr>
          </tbody>
        </table>

        <p>Here is a comparison with the results of some popular online tools.</p>

        <table class={styles.tablepadded}>
          <caption>Emissions</caption>
          <thead>
          <tr>
            <th>Domain</th>
            <th colSpan={4} class={styles.textCentre}>mg/CO<sub>2</sub></th>
          </tr>
          <tr>
            <th class={styles.hideheader}>-</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>ET</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>EG</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>CN</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>WC</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td class={styles.bgbodydomain}>thegreenwebfoundation.org</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>49</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://ecograder.com/report/wZaeBWX7zR9ktdPm7Ps4rcVc'}}>50</Links.EL></td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>14</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://www.websitecarbon.com/website/the-public-good-com/'}}>460</Links.EL></td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://www.ecoindex.fr/resultat/?id=6d3cf8ca-c529-43c1-a300-49c1a4e6ae64'}}>1640</Links.EL></td>
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>the-public-good.com</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>99</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://ecograder.com/report/6sC1v7QNPIhoAsVrXeVzgDFf'}}>90</Links.EL></td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>9</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://www.websitecarbon.com/website/the-public-good-com/'}}>60</Links.EL></td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://www.ecoindex.fr/resultat/?id=4e4a80c3-3419-493b-b399-093de3b14667'}}>1620</Links.EL></td>
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>theguardian.com/uk</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>320</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://ecograder.com/report/624S3IReW0M3HhgAUNm5wkB2'}}>1069</Links.EL></td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>296</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://www.websitecarbon.com/website/theguardian-com-uk/'}}>1060</Links.EL></td>  
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://www.ecoindex.fr/resultat/?id=ffaa8359-f00d-4b38-b4ad-221183bdf6df'}}>2780</Links.EL></td>  
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>inaturalist.org</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>771</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://ecograder.com/report/cX5zkGvSYFOt8j7c1FnloAfp'}}>570</Links.EL></td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}>259</td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://www.websitecarbon.com/website/inaturalist-org/'}}>630</Links.EL></td>
              <td class={`${styles.textRight} ${styles.bgbodyemissions}`}><Links.EL link={{source:'https://www.ecoindex.fr/resultat/?id=0b8ba74d-4a68-46cc-ad1a-a6862b254d23'}}>1980</Links.EL></td>
            </tr>
          </tbody>
        </table>

        <div class={`${styles.small} ${styles.textCentre}`}>
          ET: Emissions Tracker, EC: Ecograder, CN: Carbon Neutral Website, WC: Website Carbon
        </div>

        <p>We can compare the bytes transferred value of the Emissions Tracker with Chrome DevTools (DT) and Lighthouse (LH).</p>

        <table class={styles.tablepadded}>
          <caption>Bytes transferred</caption>
          <thead>
          <tr>
            <th>URL</th>
            <th colSpan={3} class={styles.textCentre}>Kilobytes</th>
          </tr>
          <tr>
            <th class={styles.hideheader}>-</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>ET</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>DT</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>LH</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td class={styles.bgbodydomain}>thegreenwebfoundation.org</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>457</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>417</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>141</td>        
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>the-public-good.com</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>462</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>224</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>169</td>                     
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>theguardian.com/uk</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>2092</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>2200</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>2259</td>   
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>inaturalist.org</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>1930</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>2400</td>
              <td class={`${styles.textRight} ${styles.bgbodybytes}`}>2925</td>   
            </tr>
          </tbody>
        </table>

        <div class={`${styles.small} ${styles.textCentre}`}>
          ET: Emissions Tracker, DT: Chrome DevTools, LH: lighthouse API
        </div>

        <p>We can compare the number of requests value for the Emissions Tracker with Chrome DevTools (DT) and Lighthouse (LH).</p>

        <table class={styles.tablepadded}>
          <caption>Request count</caption>
          <thead>
          <tr>
            <th>URL</th>
            <th colSpan={3} class={styles.textCentre}>Requests</th>            
          </tr>
          <tr>
            <th class={styles.hideheader}>-</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>ET</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>DT</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>LH</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td class={styles.bgbodydomain}>thegreenwebfoundation.org</td>
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>24</td>          
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>21</td>          
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>23</td>                              
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>the-public-good.com</td>
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>66</td>          
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>56</td>          
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>49</td>                              
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>theguardian.com/uk</td>
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>110</td> 
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>114</td>          
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>123</td>          
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>inaturalist.org</td>
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>59</td> 
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>44</td>          
              <td class={`${styles.textRight} ${styles.bgbodyrequests}`}>57</td>          
            </tr>
          </tbody>
        </table>

        <div class={`${styles.small} ${styles.textCentre}`}>
          ET: Emissions Tracker, DT: Chrome DevTools, LH: lighthouse API
        </div>

        <table class={styles.tablepadded}>
          <caption>Load time</caption>
          <thead>
          <tr>
            <th>URL</th>   
            <th colSpan={3} class={styles.textCentre}>Load (ms)</th>
          </tr>
          <tr>
            <th class={styles.hideheader}>-</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>ET</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>DT</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>LH</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td class={styles.bgbodydomain}>thegreenwebfoundation.org</td>
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>938</td>
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>1002</td>            
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>983</td>                           
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>the-public-good.com</td>      
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>983</td>
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>877</td>            
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>1345</td>                           
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>theguardian.com/uk</td>    
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>1533</td>      
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>1240</td>
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>1480</td>
            </tr>
            <tr>
              <td class={styles.bgbodydomain}>inaturalist.org</td>      
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>3906</td>      
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>6000</td>
              <td class={`${styles.textRight} ${styles.bgbodytime}`}>3931</td>
            </tr>
          </tbody>
        </table>

        <div class={`${styles.small} ${styles.textCentre}`}>
          ET: Emissions Tracker, DT: Chrome DevTools, LH: lighthouse API
        </div>

        <h3>Performance API</h3>

        <p>I initially used values from the <Links.EL link={{source:'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API'}}>Performance API</Links.EL> (a more recent alternative is the PerformanceObserver API) but this returns a value of 0 bytes for requests to third parties.</p>

        <Top></Top>
      </section>      

      <Published strDate="Wed 12 June 2024"></Published>


      <section>
        <h2>Appendix</h2>

        <p>Internally, the Sustainable Web Design Model (SWDM) uses a value of 494g/kWh for carbon intensity.</p>

        <h3>System Segments</h3>
        <blockquote cite='https://sustainablewebdesign.org/estimating-digital-emissions/'>
        <dl>
          <dt><strong>Data centers</strong></dt>
          <dd>Energy required to house and serve data - 22%</dd>
          <dt><strong>Networks</strong></dt>
          <dd>An allocation of energy used by networks to transfer data - 24%</dd>
          <dt><strong>User devices</strong></dt>
          <dd>Energy used by end users interacting with a product or service - 54%</dd>
        </dl>
        </blockquote>

        <h3>Operational and embodied emissions</h3>

        <p>Each system segment is further broken down into two categories:</p>

        <blockquote cite='https://sustainablewebdesign.org/estimating-digital-emissions/'>
        <dl>
          <dt><strong>Operational</strong></dt>
          <dd>The emissions attributed to the use of the devices in a segment.</dd>
          <dt><strong>Embodied</strong></dt>
          <dd>The emissions attributed to the production of the devices in a segment.</dd>
        </dl>

        <table><tbody><tr><td></td><td><strong>Data centers</strong></td><td><strong>Networks</strong></td><td><strong>User devices</strong></td></tr><tr><td><strong>Operational</strong></td><td>82%</td><td>82%</td><td>49%</td></tr><tr><td><strong>Embodied</strong></td><td>18%</td><td>18%</td><td>51%</td></tr></tbody></table>
        </blockquote>
      </section>

      <section>
        <h2>Links to external references</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section>

      <Links.RelatedLinks
        links={[
          {
            value: 'web-development/sustainable-reporting-and-tooling',
            text: 'Sustainable Reporting And Tooling',
          },
          {
            value: 'web-development/sustainable-practices',
            text: 'Sustainable practices',
          },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default SustainableReportingEmissions
