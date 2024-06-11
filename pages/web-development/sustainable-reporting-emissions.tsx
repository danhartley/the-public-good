import Links from 'components/links/Links'
import Accordion from 'components/accordion/accordion'
import Layout from 'components/layout/layout'
import Published from 'components/published/published'
import Top from 'components/top/top'
import styles from 'pages/pages.module.scss'

const SustainableReportingEmissions = () => {
  const externalLinks = [
    {
      name: 'Estimating Digital Emissions | Sustainable Web Design',
      source: 'https://sustainablewebdesign.org/estimating-digital-emissions/',
    },
    {
      name: 'CO2.js - Overview | The Green Web Foundation',
      source: 'https://developers.thegreenwebfoundation.org/co2js/overview/',
    },
    {
      name: 'Web Performance Recipes With Puppeteer | Addy OsmaniDesign',
      source: 'https://addyosmani.com/blog/puppeteer-recipes/',
    },
  ]

  return (    
    <Layout
      header="Sustainable Reporting - Emissions"
      rt="2 to 3"
      title="Sustainable web development"
      description={
        'Tracking emissions from websites and web apps when running end-to-end test.'
      }
      image="https://live.staticflickr.com/65535/51143928462_2fec2d283e_z_d.jpg"
    >
      <section class={styles.report}>
        <h2 class={styles.mt0}>
          A quick and easy way to track carbon emissions during tests.
        </h2>

        <p>To measure carbon emissions for a website or web app, we need to know two things:</p>
        <ul>
          <li>The number of bytes of data transferred</li>
          <li>Whether or not the site is green hosted</li>
        </ul>

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
          <tbody class={styles.bgbodyblue}>
            <tr>
              <td>the-public-good.com</td>
              <td class={styles.textRight}>24</td>
              <td class={styles.textRight}>462</td>
              <td class={styles.textRight}>983</td>
              <td class={styles.textRight}>99</td>              
            </tr>
            <tr>
              <td>theguardian.com/uk</td>              
              <td class={styles.textRight}>110</td>
              <td class={styles.textRight}>2092</td>
              <td class={styles.textRight}>1533</td>
              <td class={styles.textRight}>320</td>              
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
            <th>ET</th>
            <th>EG</th>
            <th>CN</th>
            <th>WC</th>
          </tr>
          </thead>
          <tbody class={styles.bgbodyblue}>
            <tr>
              <td>thegreenwebfoundation.org</td>
              <td class={styles.textRight}>49</td>
              <td class={styles.textRight}><Links.EL link={{source:'https://ecograder.com/report/wZaeBWX7zR9ktdPm7Ps4rcVc'}}>50</Links.EL></td>
              <td class={styles.textRight}>14</td>
              <td class={styles.textRight}>4<Links.EL link={{source:'https://www.websitecarbon.com/website/the-public-good-com/'}}>60</Links.EL></td>
            </tr>
            <tr>
              <td>the-public-good.com</td>
              <td class={styles.textRight}>99</td>
              <td class={styles.textRight}><Links.EL link={{source:'https://ecograder.com/report/6sC1v7QNPIhoAsVrXeVzgDFf'}}>90</Links.EL></td>
              <td class={styles.textRight}>9</td>
              <td class={styles.textRight}><Links.EL link={{source:'https://www.websitecarbon.com/website/the-public-good-com/'}}>60</Links.EL></td>
            </tr>
            <tr>
              <td>theguardian.com/uk</td>
              <td class={styles.textRight}>320</td>
              <td class={styles.textRight}><Links.EL link={{source:'https://ecograder.com/report/624S3IReW0M3HhgAUNm5wkB2'}}>1069</Links.EL></td>
              <td class={styles.textRight}>296</td>
              <td class={styles.textRight}><Links.EL link={{source:'https://www.websitecarbon.com/website/theguardian-com-uk/'}}>1060</Links.EL></td>  
            </tr>
          </tbody>
        </table>

        <div class={`${styles.small} ${styles.textCentre}`}>
          ET: Emissions Tracker, EC: Ecograder, CN: Carbon Neutral Website, WC: Website Carbon
        </div>

        <p>We can compare the bytes transferred value fo the Emissions Tracker with Chrome DevTools (DT) and Lighthouse (LH).</p>

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
          <tbody class={styles.bgbodybrown}>
            <tr>
              <td>thegreenwebfoundation.org</td>
              <td class={styles.textRight}>457</td>
              <td class={styles.textRight}>417</td>
              <td class={styles.textRight}>141</td>        
            </tr>
            <tr>
              <td>the-public-good.com</td>
              <td class={styles.textRight}>462</td>
              <td class={styles.textRight}>224</td>
              <td class={styles.textRight}>169</td>                     
            </tr>
            <tr>
              <td>theguardian.com/uk</td>
              <td class={styles.textRight}>2092</td>
              <td class={styles.textRight}>2200</td>
              <td class={styles.textRight}>2259</td>   
            </tr>
          </tbody>
        </table>

        <div class={`${styles.small} ${styles.textCentre}`}>
          ET: Emissions Tracker, DT: Chrome DevTools, LH: lighthouse API
        </div>

        <p>We can compare the number of requests value for the Emissions Tracker with Chrome DevTools (DT) and Lighthouse (LH).</p>

        <table class={styles.tablepadded}>
          <caption>Request count and load time</caption>
          <thead>
          <tr>
            <th>URL</th>
            <th colSpan={3} class={styles.textCentre}>Requests</th>            
            <th colSpan={3} class={styles.textCentre}>Load (ms)</th>
          </tr>
          <tr>
            <th class={styles.hideheader}>-</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>ET</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>DT</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>LH</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>ET</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>DT</th>
            <th class={`${styles.subheader} ${styles.textRight}`}>LH</th>
          </tr>
          </thead>
          <tbody class={styles.bgbodybrown}>
            <tr>
            <td>thegreenwebfoundation.org</td>
              <td class={styles.textRight}>24</td>          
              <td class={styles.textRight}>21</td>          
              <td class={styles.textRight}>23</td>          
              <td class={styles.textRight}>938</td>
              <td class={styles.textRight}>1002</td>            
              <td class={styles.textRight}>983</td>                           
            </tr>
            <tr>
              <td>the-public-good.com</td>
              <td class={styles.textRight}>66</td>          
              <td class={styles.textRight}>56</td>          
              <td class={styles.textRight}>49</td>          
              <td class={styles.textRight}>983</td>
              <td class={styles.textRight}>877</td>            
              <td class={styles.textRight}>1345</td>                           
            </tr>
            <tr>
              <td>theguardian.com/uk</td>
              <td class={styles.textRight}>110</td> 
              <td class={styles.textRight}>114</td>          
              <td class={styles.textRight}>123</td>          
              <td class={styles.textRight}>1533</td>      
              <td class={styles.textRight}>1240</td>
              <td class={styles.textRight}>1480</td>
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
