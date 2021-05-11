import Carbonbadge from "react-carbonbadge";
import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const businessCalculators = [
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
    {
        "name": "surfgreen.dev (beta)",
        "source": "https://surfgreen.dev/"
    },
];

const Sustainability = () => {
    return (
        <Layout header="Sustainability" title="Web sustainability" description={'Web sustainability'}>
            <section class={styles.card}>

                <h2>Website carbon emissions calculators</h2>
                <Links.ExternalLinksList links={businessCalculators} />
            </section>
            <section class={styles.card}>
                <h2>UN Sustainable Development Goals (SDGs)</h2>
                <p>Tracked by <a href="https://ourworldindata.org/">Our World in Data</a>.</p>
                <ul class={styles.unorderedList}>
                    <li><a aria-label="Assessment of the world's response to SDG 7.1 provided by Our World in Data" href="https://sdg-tracker.org/energy#targets">Energy efficiency (SDG 7.1)</a></li>
                    <li><a aria-label="Assessment of the world's response to SDG 17.8 provided by Our World in Data" href="https://sdg-tracker.org/global-partnerships">Internet access (SDG 17.8)</a></li>
                    <li><a aria-label="Assessment of the world's response to SDG 12 provided by Our World in Data" href="https://sdg-tracker.org/sustainable-consumption-production">Data centres (SDG 12)</a></li>
                </ul>
            </section>
            <section class={styles.card}>
                <p><Carbonbadge darkMode={false} /></p>
            </section>
            <section class={styles.card}>
                <p class={styles.centre}>
                    <img src="https://api.thegreenwebfoundation.org/greencheckimage/www.the-public-good.com?nocache=true" alt="Checked by thegreenwebfoundation.org" />
                </p>
            </section>
            <Links.RelatedLinks links={[{href:'architecture',title:'Architecture'},{href:'performance',title:'Performance'},{href:'accessibility',title:'Accessibility'},{href:'climate-crisis/the-value-of-individual-acts',title:'The value of individual acts'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Sustainability;