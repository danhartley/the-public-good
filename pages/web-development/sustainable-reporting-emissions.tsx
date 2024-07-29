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
      name: "Measure and reduce your website's CO2 emissions | GreenFrame",
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
      rt="4 to 5"
      title="Sustainable web development"
      description={'Tracking emissions from websites and web apps when running end-to-end tests.'}
      image="https://live.staticflickr.com/65535/51143928462_2fec2d283e_z_d.jpg"
    >
      <section className={styles.report}>
        <h2 className={styles.mt0}>Tracking carbon emissions in end-to-end tests.</h2>

        <p><em>This tooling used in this report has been superseded by the npm package <Links.EL link={{source:'https://github.com/danhartley/emissions'}}>@danhartley/emissions</Links.EL> [24 July 2024].</em></p>

        <p>
          Measuring carbon emissions associated with websites and apps is in its infancy but there are benefits to doing
          so.
        </p>

        <p>The first is an appreciation of how emissions relate to bytes transferred.</p>

        <p>
          The second is seeing how emissions fluctuate in response to changes in design and code. This can be done by
          recording emissions during end-to-end (E2E) tests.
        </p>

        <h3>Emissions per byte</h3>

        <p>
          In order to measure carbon emissions for this website, I'm using{' '}
          <Links.EL link={{ source: 'https://developers.thegreenwebfoundation.org/co2js/overview/' }}>CO2.js</Links.EL>{' '}
          from The Green Web Foundation (GWF). The simplest call to their API needs only a byte value.
        </p>

        <p>
          If the site is hosted on servers running on renewable energy the emissions will be lower. The{' '}
          <abbr className={styles.abbr} title="The Green Web Foundation">
            GBF
          </abbr>{' '}
          provides a helper function for{' '}
          <Links.EL link={{ source: 'https://developers.thegreenwebfoundation.org/co2js/tutorials/check-hosting/' }}>
            checking if a site is green hosted
          </Links.EL>
          .
        </p>

        <p>
          Here is an example for a website of median{' '}
          <Links.EL link={{ source: 'https://almanac.httparchive.org/en/2022/page-weight' }}>page weight</Links.EL>.
        </p>

        <pre>
          <code>
            <div>import &#123; hosting, co2 &#125; from "@tgwf/co2"</div>
            <br />
            <div>const green = hosting.check('median-website.com').green</div>
            <div>const bytes = 2299</div>
            <div>const emissions = new co2().perByte(bytes, green)</div>
          </code>
        </pre>

        <table className={styles.tablepadded}>
          <caption>Emissions Comparison Green Hosting</caption>
          <thead>
            <th>Green web host</th>
            <th>Carbon dioxide emissions</th>
          </thead>
          <tbody>
            <tr>
              <td className={styles.bgbodydomain}>Yes</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>
                ~783 mg/CO<sub>2</sub>
              </td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>No</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>
                ~905 mg/CO<sub>2</sub>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>End-to-end testing</h3>

        <p>
          In order to record requests and calculate emissions, I created a simple helper class{' '}
          <Links.EL
            link={{
              source: 'https://github.com/danhartley/the-public-good/blob/main/emissions-tracker/emissions-tracker.js',
            }}
          >
            EmissionsTracker
          </Links.EL>
          .
        </p>
        <p>
          A call to the instance's single public method returns a summary of page metrics relevant to its emissions
          including:
        </p>

        <ul>
          <li>The number of requests</li>
          <li>Whether the site uses green hosting</li>
          <li>The grid intensity (either calculated from the request or set manually)</li>
          <li>The total transfer size of requests in kilobytes (kBs)</li>
          <li>How long the page took to load in milliseconds (ms)</li>
          <li>Emissions in milligrams of carbon dioxide</li>
        </ul>

        <p>These values can be persisted and used to monitor the effect of code or design changes.</p>

        <p>
          I also created a{' '}
          <Links.EL
            link={{
              source: 'https://github.com/danhartley/the-public-good/blob/main/emissions-tracker/emissions-by-url.js',
            }}
          >
            test
          </Links.EL>{' '}
          that can report on any website (it simply loads the given page). By default I scroll to the bottom of the page
          which may give a more honest account of what is happening.
        </p>

        <pre>
          <div>
            <code>node emissions-tracker/emissions-by-url.js -u https://www.theguardian.com/uk -v -lh</code>
          </div>
          <br />
          <div>// -u website url or domain</div>
          <div>// -v: verbosity</div>
          <div>
            // -lh: to also run a{' '}
            <Links.EL link={{ source: 'https://github.com/GoogleChrome/lighthouse' }}>Lighthouse</Links.EL> report
          </div>
        </pre>

        <p>
          The test environment is Chrome under the control of{' '}
          <Links.EL link={{ source: 'https://github.com/puppeteer/puppeteer' }}>Puppeteer</Links.EL>.
        </p>

        <h3>Report</h3>

        <p>Here are the results from a few sites including this one.</p>

        <Accordion header={'Websites'}>
          <dl>
            <dt>The GWF</dt>
            <dd>The Green Web Foundation</dd>
            <dt>The PG</dt>
            <dd>The Public Good</dd>
            <dt>The Guardian</dt>
            <dd>The Guardian newspaper</dd>
            <dt>iNaturalist</dt>
            <dd>iNaturalist</dd>
          </dl>
        </Accordion>

        <table className={styles.tablepadded}>
          <caption>Emissions Tracker Summary</caption>
          <thead>
            <tr>
              <th>Wesbite</th>
              <th className={styles.textRight}>Requests</th>
              <th className={styles.textRight}>kBs</th>
              <th className={styles.textRight}>ms</th>
              <th className={styles.textRight}>
                mg/CO<sub>2</sub>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.thegreenwebfoundation.org/' }}>The GWF</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>24</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>533</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>938</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>137 (45)</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.the-public-good.com/' }}>The PG</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>86</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>343</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>983</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>99 (35)</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.theguardian.com/' }}>The Guardian</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>110</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>2291</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>1533</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>897 (828)</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.inaturalist.org/' }}>iNaturalist</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>59</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>2798</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>3906</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>771 (664)</td>
            </tr>
          </tbody>
        </table>

        <p>
          Here is a comparison with the results of some popular online carbon calculators. All the values given using
          the Emissions Tracker are based on an automated scroll to the bottom of the page. The emissions values without
          scrolling are given in brackets. This distinction is important and one often ignored or not explored.
        </p>

        <Accordion header="Website carbon calculators">
          <ul>
            <li>
              <Links.EL link={{ source: 'https://www.websitecarbon.com/' }}>Website Carbon Calculator</Links.EL>
            </li>
            <li>
              <Links.EL link={{ source: 'https://ecograder.com/' }}>Ecograder</Links.EL>
            </li>
            <li>
              <Links.EL link={{ source: 'https://carbonneutralwebsite.org/calculate' }}>
                Carbon Neutral Website
              </Links.EL>
            </li>
          </ul>

          <div>
            For more website carbon evaluation tools see{' '}
            <Links.EL
              link={{
                source:
                  'https://docs.google.com/spreadsheets/d/1zNBeu9C-I4gay-EHwZJ328gnv1KT8NVAZ8zgnBYGvDo/edit?gid=319367759#gid=319367759',
              }}
            >
              The PG: website metrics
            </Links.EL>
            .
          </div>
        </Accordion>

        <table className={styles.tablepadded}>
          <caption>Emissions</caption>
          <thead>
            <tr>
              <th>Wesbite</th>
              <th colSpan={4} className={styles.textCentre}>
                mg/CO<sub>2</sub>
              </th>
            </tr>
            <tr>
              <th className={styles.hideheader}>-</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>ET</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>EG</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>CN</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>WC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.thegreenwebfoundation.org/' }}>The GWF</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>137 (45)</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>
                <Links.EL link={{ source: 'https://ecograder.com/report/wZaeBWX7zR9ktdPm7Ps4rcVc' }}>50</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>14</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>
                <Links.EL link={{ source: 'https://www.websitecarbon.com/website/thegreenwebfoundation-org/' }}>
                  40
                </Links.EL>
              </td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.the-public-good.com/' }}>The PG</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>99 (35)</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>
                <Links.EL link={{ source: 'https://ecograder.com/report/6sC1v7QNPIhoAsVrXeVzgDFf' }}>90</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>9</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>
                <Links.EL link={{ source: 'https://www.websitecarbon.com/website/the-public-good-com/' }}>60</Links.EL>
              </td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.theguardian.com/' }}>The Guardian</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>897 (828)</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>
                <Links.EL link={{ source: 'https://ecograder.com/report/624S3IReW0M3HhgAUNm5wkB2' }}>1069</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>296</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>
                <Links.EL link={{ source: 'https://www.websitecarbon.com/website/theguardian-com-uk/' }}>1060</Links.EL>
              </td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.inaturalist.org/' }}>iNaturalist</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>771 (664)</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>
                <Links.EL link={{ source: 'https://ecograder.com/report/cX5zkGvSYFOt8j7c1FnloAfp' }}>570</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>259</td>
              <td className={`${styles.textRight} ${styles.bgbodyemissions}`}>
                <Links.EL link={{ source: 'https://www.websitecarbon.com/website/inaturalist-org/' }}>630</Links.EL>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={`${styles.small} ${styles.textCentre}`}>
          ET: Emissions Tracker, EC: Ecograder, CN: Carbon Neutral Website, WC: Website Carbon
        </div>

        <p>
          We can compare the bytes transferred value of the Emissions Tracker (ET) with Chrome DevTools (DT) and
          Lighthouse (LH).
        </p>

        <p>
          N.B. Figures for Lighthouse are low for requests because only the page above the fold is analysed. When I run
          the Emissions Tracker, I scroll smoothly to the end of the page.
        </p>

        <table className={styles.tablepadded}>
          <caption>Bytes transferred</caption>
          <thead>
            <tr>
              <th>Website</th>
              <th colSpan={3} className={styles.textCentre}>
                Kilobytes
              </th>
            </tr>
            <tr>
              <th className={styles.hideheader}>-</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>ET</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>DT</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>LH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.thegreenwebfoundation.org/' }}>The GWF</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>533</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>508</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>141</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.the-public-good.com/' }}>The PG</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>343</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>224</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>169</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.theguardian.com/' }}>The Guardian</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>2291</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>2200</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>2259</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.inaturalist.org/' }}>iNaturalist</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>2798</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>2400</td>
              <td className={`${styles.textRight} ${styles.bgbodybytes}`}>2925</td>
            </tr>
          </tbody>
        </table>

        <div className={`${styles.small} ${styles.textCentre}`}>
          ET: Emissions Tracker, DT: Chrome DevTools, LH: lighthouse API
        </div>

        <p>The number of requests.</p>

        <table className={styles.tablepadded}>
          <caption>Request count</caption>
          <thead>
            <tr>
              <th>Website</th>
              <th colSpan={3} className={styles.textCentre}>
                Requests
              </th>
            </tr>
            <tr>
              <th className={styles.hideheader}>-</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>ET</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>DT</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>LH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.thegreenwebfoundation.org/' }}>The GWF</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>24</td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>21</td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>23</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.the-public-good.com/' }}>The PG</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>86</td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>56</td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>49</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.theguardian.com/' }}>The Guardian</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>110</td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>114</td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>123</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.inaturalist.org/' }}>iNaturalist</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>59</td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>44</td>
              <td className={`${styles.textRight} ${styles.bgbodyrequests}`}>57</td>
            </tr>
          </tbody>
        </table>

        <div className={`${styles.small} ${styles.textCentre}`}>
          ET: Emissions Tracker, DT: Chrome DevTools, LH: lighthouse API
        </div>

        <p>And load time.</p>

        <table className={styles.tablepadded}>
          <caption>Load time</caption>
          <thead>
            <tr>
              <th>Website</th>
              <th colSpan={3} className={styles.textCentre}>
                Load (ms)
              </th>
            </tr>
            <tr>
              <th className={styles.hideheader}>-</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>ET</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>DT</th>
              <th className={`${styles.subheader} ${styles.textRight}`}>LH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.thegreenwebfoundation.org/' }}>The GWF</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>938</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>1002</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>983</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.the-public-good.com/' }}>The PG</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>983</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>877</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>1345</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.theguardian.com/' }}>The Guardian</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>1533</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>1240</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>1480</td>
            </tr>
            <tr>
              <td className={styles.bgbodydomain}>
                <Links.EL link={{ source: 'https://www.inaturalist.org/' }}>iNaturalist</Links.EL>
              </td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>3906</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>6000</td>
              <td className={`${styles.textRight} ${styles.bgbodytime}`}>3931</td>
            </tr>
          </tbody>
        </table>

        <div className={`${styles.small} ${styles.textCentre}`}>
          ET: Emissions Tracker, DT: Chrome DevTools, LH: lighthouse API
        </div>

        <p>
          There are discrepancies in the results. There are discrepancies between runs using the same measure. One of
          the largest - an order of magnitude - is between the results given by the{' '}
          <Links.EL link={{ source: 'https://carbonneutralwebsite.org/calculate' }}>Carbon Neutral website</Links.EL>{' '}
          and other calculators. The only calculator that gives similar results is{' '}
          <Links.EL link={{ source: 'https://greenframe.io/' }}>GreenFrame</Links.EL> but that requires local
          installation or a subscription. Another site, ecoIndex, gives values an order of magnitude <em>higher</em>{' '}
          than the average. For example, for the Public Good, the emissions are calculated to be{' '}
          <Links.EL link={{ source: 'https://www.ecoindex.fr/resultat/?id=ec506c10-0474-4160-8338-bf4134a3164c' }}>
            1620 m/CO<sub>2</sub>
          </Links.EL>
          .
        </p>

        <p>
          Until there is consensus and certainty around numbers, I think we should be careful publishing them. It is too
          often the case that a single figure gets picked up and repeated endlessly, as happened with{' '}
          <Links.IL link={{ source: 'web-development/measuring-the-web' }}>
            {' '}
            carbon emissions attributed to watching Netflix
          </Links.IL>
          .
        </p>

        <h3>Living information architecture</h3>

        <p>
          The greatest benefit to me from measuring bytes and emissions was that I paid more attention to code running
          where others see and interact with it - in the browser.
        </p>

        <p>
          The Information Architecture (IA) of a web site and how individuals navigate it affects bytes transferred and
          processing time and resources.
        </p>

        <p>
          For example, this blog preloads linked pages. The home page has a lot of internal links which significantly
          increase its page weight (a mix of the number of bytes transferred and the number of requests).
        </p>

        <p>
          But if you click on a visible link (above the fold) to internal content, you will see that page loads almost
          instantly with very few bytes being transferred.
        </p>

        <p>
          I also cache pages. If you return to a page it is served from a local cache and the only network traffic will
          be to third parties (such as cabin analytics).
        </p>

        <p>
          The effectiveness of this strategy depends on how people use the site; whether they move between pages, or
          indeed whether they read more than one article in a single session. It's quite possible they won't read more
          than one but they may jump from page to page.
        </p>

        <p>To observe this behaviour, open the Network tab in the developer tools of any browser.</p>

        <h3>Summary</h3>

        <p>
          Recording performance and sustainability metrics during end-to-end tests in (or similar to) the production
          environment is a way for developers to get closer to the experience of people using their site. It is more
          meaningful to engage with the living information architecture in the browser than dead{' '}
          <Links.IL link={{ source: 'web-development/practice/artefacts' }}>artefacts</Links.IL>.
        </p>

        <p>
          Emissions tracking and digital sustainability in general cannot be viewed, however, in isolation, but should
          be considered alongside accessibility, performance, ethical factors and security.
        </p>

        <p>
          And whilst some comparison with similar sites is useful, most is gained by observing change within a site. The
          best feature is sometimes the one that doesn't get built.
        </p>

        <p>
          A snapshot of a page or even the entirety of a site is insufficient to judge its merit. The platform for
          recording observations of nature, for example,{' '}
          <Links.EL link={{ source: 'https://www.inaturalist.org/' }}>iNaturalist</Links.EL>, scores poorly in some
          respects but the site has changed little in fifteen years, a testament to good information architecture and
          clear aims.
        </p>

        <h3>Conclusion</h3>

        <p>
          Knowing how and when bytes are transferred and emissions accrued helps developers make good decisions about
          site architecture, especially as a site is modified and extended and code is refactored.
        </p>

        <p>
          I was less convinced displaying emissions would be useful for site visitors until I checked what happened when
          I scrolled through the posts on my Facebook home page. Since posts are added quicker than I can scroll, this
          is literally infinite. The initial page load was about 9MBs. After one minute of scrolling, I had downloaded:
        </p>

        <p className={styles.huge}>174MBs</p>

        <p>
          I would like to see native emissions counters in browsers that aggregate emissions across sites. Whether this
          would be over a session or time interval would be up to us, as would the option to set a budget or cap on
          emissions. It would certainly help highlight the deleterious effect of devious and deceptive patterns like
          infinite scroll and video autoplay.
        </p>

        <p>
          Finally, emissions reflect only a fraction of a website's impact on its environment. A full Digital Life Cycle
          Assessment (DCLA) would be needed to take into account water and land usage and adverse effects on people and
          nature to name only a few considerations.
        </p>
        <Top></Top>
      </section>

      <Published strDate="Fri 14 June 2024"></Published>

      <section>
        <h2>Appendix</h2>

        <h3>Content length</h3>

        <p>
          When the content length is unavailable, I use the response byte length. However, this is the uncompressed
          value, and compression ratios are variable.
        </p>

        <p>
          In order to compensate, I set default ratios for CSS (6), JS (2) and Other (5). These values can be overridden
          using command line variables.
        </p>

        <h3>Performance API</h3>

        <p>
          I initially used values from the{' '}
          <Links.EL link={{ source: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API' }}>
            Performance API
          </Links.EL>{' '}
          (a more recent alternative is the PerformanceObserver API) but this returns a value of 0 bytes for requests to
          third parties.
        </p>

        <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Resource_timing#coping_with_cors">
          When CORS is in effect, many of the timing properties' values are returned as zero unless the server's access
          policy permits these values to be shared. This requires the server providing the resource to send the
          Timing-Allow-Origin HTTP response header with a value specifying the origin or origins which are allowed to
          get the restricted timestamp values.
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
          { value: 'web-development/practice/artefacts', text: 'Artefacts' },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default SustainableReportingEmissions
