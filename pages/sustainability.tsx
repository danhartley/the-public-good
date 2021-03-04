import Link from 'next/link';
import Layout from 'components/layout/layout';
import { Lists } from 'components/lists/Lists';
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
        <Layout title="Web performance" description={'Web performance'} header={'Web performance'}>
            <section class={styles.card}>
                <h2>Website carbon emissions checks</h2>
                <div class={styles.grid}>
                    <Lists.InternalLinksList links={greenLinks} />
                </div>
            </section>
            <section class={styles.card}>
                <h2>UN Sustainable Devlopment Goals (SDGs)</h2>
                <span>Tracked by <a href="https://ourworldindata.org/">Our World in Data</a>.</span>
                <p><a aria-label="Assessment of the world's response to SDG 7.1 provided by Our World in Data" href="https://sdg-tracker.org/energy#targets">Energy efficiency (SDG 7.1)</a></p>
                <p><a aria-label="Assessment of the world's response to SDG 17.8 provided by Our World in Data" href="https://sdg-tracker.org/global-partnerships">Internet access (SDG 17.8)</a></p>
                <p><a aria-label="Assessment of the world's response to SDG 12 provided by Our World in Data" href="https://sdg-tracker.org/sustainable-consumption-production">Data centres (SDG 12)</a></p>
            </section>
        </Layout>
    )
};

export default Sustainability;