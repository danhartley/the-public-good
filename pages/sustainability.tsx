import Carbonbadge from "react-carbonbadge";
import Layout from 'components/layout/layout';
import { Links } from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const greenLinks = [
    {
        "name": "The Green Web Foundation",
        "source": "https://www.thegreenwebfoundation.org/"
    },
    {
        "name": "Website Carbon Calculator",
        "source": "https://www.websitecarbon.com/"
    },
    {
        "name": "Beacon",
        "source": "https://digitalbeacon.co/"
    },
    {
        "name": "Ecograder",
        "source": "https://ecograder.com/"
    },
    {
        "name": "EcoIndex Chrome extension",
        "source": "https://chrome.google.com/webstore/detail/greenit-analysis/mofbfhffeklkbebfclfaiifefjflcpad/related?hl=en"
    },
    {
        "name": "EcoIndex Firefox extension",
        "source": "https://addons.mozilla.org/fr/firefox/addon/ecoindex/"
    },
];

const Sustainability = () => {
    return (
        <Layout title="Web sustainability" description={'Web sustainability'}>
            <section class={styles.card}>
                <h2>Website carbon emissions checks</h2>
                <Links.InternalLinksList links={greenLinks} />
            </section>
            <section class={styles.card}>
                <h2>UN Sustainable Development Goals (SDGs)</h2>
                <span>Tracked by <a href="https://ourworldindata.org/">Our World in Data</a>.</span>
                <ul class={styles.linkList}>
                    <li><a aria-label="Assessment of the world's response to SDG 7.1 provided by Our World in Data" href="https://sdg-tracker.org/energy#targets">Energy efficiency (SDG 7.1)</a></li>
                    <li><a aria-label="Assessment of the world's response to SDG 17.8 provided by Our World in Data" href="https://sdg-tracker.org/global-partnerships">Internet access (SDG 17.8)</a></li>
                    <li><a aria-label="Assessment of the world's response to SDG 12 provided by Our World in Data" href="https://sdg-tracker.org/sustainable-consumption-production">Data centres (SDG 12)</a></li>
                </ul>
            </section>
            <section class={styles.card}>
                <Carbonbadge darkMode={true} />
            </section>
        </Layout>
    )
};

export default Sustainability;