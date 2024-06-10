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
        
        <p>[Quick overview of how the tracker works…]</p>

        <p>The values for certain metrics were cross-referenced where possible.</p>

        <h3>Transfer size and emissions</h3>

        <p>For each site, we check for the number of requests, the total transfer size of these requests, how long the page took to load, and the associated emissions.</p>

        <table class={styles.tablepadded}>
          <caption>Emissions Tracker</caption>
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
              <td class={styles.textRight}>59</td>
              <td class={styles.textRight}>255</td>
              <td class={styles.textRight}>848</td>
              <td class={styles.textRight}>62</td>              
            </tr>
            <tr>
              <td>theguardian.com/uk</td>              
              <td class={styles.textRight}>108</td>
              <td class={styles.textRight}>2072</td>
              <td class={styles.textRight}>1163</td>
              <td class={styles.textRight}>313</td>              
            </tr>
          </tbody>
        </table>

        <p>We can compare the bytes transferred value fo the Emissions Tracker with Chrome DevTools (DT) and Lighthouse (LH).</p>

        <table class={styles.tablepadded}>
          <caption>Bytes transferred</caption>
          <thead>
          <tr>
            <th>URL</th>
            <th colSpan={3} class={styles.textRight}>Kilobytes</th>
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
              <td>the-public-good.com</td>
              <td class={styles.textRight}>255</td>
              <td class={styles.textRight}>245</td>
              <td class={styles.textRight}>169</td>                     
            </tr>
            <tr>
              <td>theguardian.com/uk</td>
              <td class={styles.textRight}>2072</td>
              <td class={styles.textRight}>2100</td>
              <td class={styles.textRight}>2206</td>   
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
            <th colSpan={2} class={styles.textCentre}>Load (ms)</th>
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
              <td>the-public-good.com</td>
              <td class={styles.textRight}>59</td>          
              <td class={styles.textRight}>46</td>          
              <td class={styles.textRight}>62</td>          
              <td class={styles.textRight}>-</td>
              <td class={styles.textRight}>-</td>            
              <td class={styles.textRight}>848</td>                           
            </tr>
            <tr>
              <td>theguardian.com/uk</td>
              <td class={styles.textRight}>108</td>          
              <td class={styles.textRight}>111</td>          
              <td class={styles.textRight}>-</td>          
              <td class={styles.textRight}>1163</td>      
              <td class={styles.textRight}>-</td>
              <td class={styles.textRight}>1250</td>
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
