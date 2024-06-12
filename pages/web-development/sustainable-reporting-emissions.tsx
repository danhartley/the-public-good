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

        <p>Measuring carbon emissions associated with websites and apps is in its infancy but there are immediate benefits to doing so.</p>

        <p>The first is an appreciation for how emissions relate to bytes transferred.</p>

        <p>The second is seeing how emissions change over time. This can be done by recording emissions during end to end tests.</p>

        <p>It's also an opportunity for developers to pay attention to code running in the browser which is where others interact with it and to consider factors beyond their control but which they can influence: the emissions created on the server, the network, and devices, as well as the emissions resulting from manufacture.</p>

        <p>In addition, developers, or the companies they work for, can elect to host their sites on servers running on renewable energy.</p>

        <p>And finally there are uncosted resources such as water and land which are typically excluded because reliable figures are hard to come by. Only a Digital Life Cycle Assessment (DCLA) can capture the full impact on the planet.</p>

        <h3>Emissions per byte</h3>

        <p>In order to measure carbon emissions for this website, I'm using <Links.EL link={{source:'https://developers.thegreenwebfoundation.org/co2js/overview/'}}>CO2.js</Links.EL> from The Green Web Foundation (GWF). The simplest call to their API needs only a byte value.</p>

        <p>If the site is hosted on servers running on renewable energy the emissions will be lower. The <abbr class={styles.abbr} title='The Green Web Foundation'>GBF</abbr> provides a helper function for checking if your site is hosted green.</p>

        <p>The code looks something like this:</p>

        <pre>
          <code>
            <div>const green = hosting.check('the-public-good.com').green</div>
            <div>const co2Emission = new co2()</div>
            <div>const bytes = 2299</div>
            <div>const emissions = co2Emission.perByte(bytes, green)</div>
            <br />
            <div>// emissions is ~783mg/CO<sub>2</sub> for a site running on renewable energy</div>
            <div>// emissions is ~905mg/CO<sub>2</sub> for a site not running on renewable energy</div>
          </code>
        </pre>
        
        <h3>End-to-end testing</h3>

        <h3>Transfer size and emissions</h3>

        <p>For each site, we check for the number of requests, the total transfer size of these requests in kilobytes (kBs), how long the page took to load in milliseconds (ms), and the associated emissions in milligrammes of carbon dioxide.</p>

        <p>I record these values whilst running an end-to-end test. This allows me to monitor the effect of changes to pages.</p>

        <p>I also created a test which takes a URL passed to it on the command line. This is an additional boolean flag for verbosity and another which, if included, gets <Links.EL link={{source:'https://github.com/GoogleChrome/lighthouse'}}>Lighthouse</Links.EL> metrics.</p>

        <p>The test environment is Chrome or Firefox under the control of <Links.EL link={{source:'https://github.com/puppeteer/puppeteer'}}>Puppeteer</Links.EL>.</p>

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

        <p>We can compare emissions with online tools</p>

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

        <section>
          <h2>Appendix</h2>

          <h3>CO<sub>2</sub></h3>

          <Accordion header="Sustainable Web Design Model">
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

          <p>EaDT system segment is further broken down into two categories:</p>

          <blockquote cite='https://sustainablewebdesign.org/estimating-digital-emissions/'>
          <dl>
            <dt><strong>Operational</strong></dt>
            <dd>The emissions attributed to the use of the devices in a segment.</dd>
            <dt><strong>Embodied</strong></dt>
            <dd>The emissions attributed to the production of the devices in a segment.</dd>
          </dl>

          <table><tbody><tr><td></td><td><strong>Data centers</strong></td><td><strong>Networks</strong></td><td><strong>User devices</strong></td></tr><tr><td><strong>Operational</strong></td><td>82%</td><td>82%</td><td>49%</td></tr><tr><td><strong>Embodied</strong></td><td>18%</td><td>18%</td><td>51%</td></tr></tbody></table>
          </blockquote>

        </Accordion>

          <h3>DevTools</h3>

          <p>
          DevTools can be run simulataneously with the emissions tracker in Puppeteer:
          <pre>
              <code>
                const browser = await puppeteer.launDT(&#123; devtools: true &#125;)
              </code>
            </pre>
          </p>

          <h3>Running the Emssions Tracker from an end-to-end test</h3>

          <p>I run the Emissions Tracker (ET) from a simple test.</p>

          <pre>
            <code>
            node public/emissions-tracker/emissions-tests.js -u https://www.theguardian.com/uk -v -lh
            </code>
          </pre>

          <p>There are 3 flags:
            <ul>
              <li><code>-u or --url</code> for the website url (or domain)</li>
              <li><code>-v or --verbose</code> when set logs all tracking data to the console (the default log out only the summarised report)</li>
              <li><code>-lh or --lighthouse</code> when set runs a query against the lighthouse API</li>
            </ul>
          </p>
        </section>

        <Top></Top>
      </section>      

      <Published strDate="Wed 12 June 2024"></Published>

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
