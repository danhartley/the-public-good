import { WebsiteCarbonBadge } from 'react-websitecarbon-badge'
import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import styles from 'pages/pages.module.scss'

const onlineTools = [
  {
    name: 'The Green Web Foundation',
    source: 'https://www.thegreenwebfoundation.org/',
  },
  {
    name: 'Website Carbon Calculator',
    source: 'https://www.websitecarbon.com/',
  },
  {
    name: 'Beacon',
    source: 'https://digitalbeacon.co/',
  },
  {
    name: 'Ecograder',
    source: 'https://ecograder.com/',
  },
  {
    name: 'GreenIT-Analysis - Web Sustainability Testing (Chrome extension)',
    source: 'https://chrome.google.com/webstore/detail/greenit-analysis/mofbfhffeklkbebfclfaiifefjflcpad?hl=en',
  },
  {
    name: 'EcoIndex Firefox extension',
    source: 'https://addons.mozilla.org/fr/firefox/addon/ecoindex/',
  },
  {
    name: 'Pilosa quick scan',
    source: 'https://quick-scan.pilosa.io/',
  },
  {
    name: 'EcoPing',
    source: 'https://ecoping.earth',
  },
  {
    name: 'Carbonalyser | TheShiftProject (Chrome extension)',
    source: 'https://chrome.google.com/webstore/detail/carbonalyser/oblfkaonopplpldppkjdhnlcmkhgbcok',
  },
  {
    name: 'Carbonalyser | TheShiftProject (Firefox extension)',
    source: 'https://addons.mozilla.org/en-GB/firefox/addon/carbonalyser/',
  },
  {
    name: 'Ecodiag calculator | EcoInfo (French)',
    source: 'https://ecoinfo.cnrs.fr/ecodiag-calcul/',
  },
  {
    name: 'ecometer',
    source: 'http://ecometer.org/',
  },
  {
    name: 'EcoIndex.fr',
    source: 'http://www.ecoindex.fr/',
  },
  // {
  //     "name": "Greenspector",
  //     "source": "https://greenspector.com/en/home/"
  // },
  {
    name: 'Green Frame',
    source: 'https://greenframe.io/',
  },
  {
    name: 'Zifera | carbon test',
    source: 'https://www.zifera.io/carbon-test',
  },
  {
    name: 'climatiq | Calculate the carbon emission of cloud services',
    source: 'https://docs.climatiq.io/guides/cloud',
  },
  {
    name: 'Globemallow (Chrome extension)',
    source: 'https://chrome.google.com/webstore/detail/globemallow/jibhiolaefbcfiahgolfpmngjefngdmd',
  },
]

const externalLinks = [
  {
    name: 'Mightybytes | Ecograder and Your Website Sustainability Score',
    source: 'https://www.mightybytes.com/blog/how-ecograder-totals-web-sustainability/',
  },
  {
    name: 'WebKit | How Web Content Can Affect Power Usage',
    source: 'https://webkit.org/blog/8970/how-web-content-can-affect-power-usage/',
  },
  {
    name: 'Wholegrain Digital | 17 (+3!) ways to make your website more energy efficient',
    source: 'https://www.wholegraindigital.com/blog/website-energy-efficiency/',
  },
  {
    name: 'The intro guide to digital eco-design',
    source: 'https://eco-conception.designersethiques.org/guide/en/content/0-introduction.html',
  },
  {
    name: 'Ethics whitepaper - The state of green software practices in 2021 | The Coed:Ethics Community',
    source: 'https://docs.google.com/document/d/1Lym55mXRVO8pldUfrcpRqFKvE9biX93jhz-HLi_c99Y/edit#',
  },
  {
    name: 'Energy Patterns for Mobile Apps',
    source: 'https://tqrg.github.io/energy-patterns/#/',
  },
  {
    name: 'Are my third parties green?',
    source: 'https://aremythirdpartiesgreen.com/',
  },
]

const Sustainability = () => {
  return (
    <Layout header="Sustainability" title="Web sustainability" description={'Web sustainability'}>
      <section>
        <h2>Website carbon emissions calculators</h2>
        <Links.ExternalLinksList links={onlineTools} />
      </section>
      <section>
        <h2>UN Sustainable Development Goals (SDGs)</h2>
        <p>
          Tracked by <Links.EL link={{ source: 'https://ourworldindata.org/' }}>Our World in Data</Links.EL>.
        </p>
        <ul className={styles.unorderedList}>
          <li>
            <Links.EL
              link={{
                label: "Assessment of the world's response to SDG 7.1 provided by Our World in Data",
                source: 'https://sdg-tracker.org/energy#targets',
              }}
            >
              Energy efficiency (SDG 7.1)
            </Links.EL>
          </li>
          <li>
            <Links.EL
              link={{
                label: "Assessment of the world's response to SDG 17.8 provided by Our World in Data",
                source: 'https://sdg-tracker.org/global-partnerships',
              }}
            >
              Internet access (SDG 17.8)
            </Links.EL>
          </li>
          <li>
            <Links.EL
              link={{
                label: "Assessment of the world's response to SDG 12 provided by Our World in Data",
                source: 'https://sdg-tracker.org/sustainable-consumption-production',
              }}
            >
              Data centres (SDG 12)
            </Links.EL>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <WebsiteCarbonBadge dark={false} percentage="94" co2="0.06" />
        </div>
      </section>
      <section>
        <div>
          <div id="dbb"></div>
          <script async defer src="https://digitalbeacon.co/js/badge.min.js"></script>
        </div>
      </section>
      <section>
        <div className={styles.centred}>
          <img
            src="https://api.thegreenwebfoundation.org/greencheckimage/www.the-public-good.com?nocache=true"
            alt="Checked by thegreenwebfoundation.org"
            className={styles.gwf}
          />
        </div>
      </section>
      <section>
        <h2>Links to external references</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section>
      <Links.RelatedLinks
        links={[
          { value: 'architecture', text: 'Architecture' },
          { value: 'performance', text: 'Performance' },
          { value: 'accessibility', text: 'Accessibility' },
          {
            value: 'climate-crisis/will-people-or-policies-save-the-planet',
            text: 'Will people or policies save the planet?',
          },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Sustainability
