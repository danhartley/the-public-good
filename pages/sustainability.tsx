import Link from 'next/link';
import Layout from 'components/layout/layout';
import { Lists } from 'components/lists/Lists';
import styles from 'pages/pages.module.scss';

const Sustainability = () => {
    return (
        <Layout title="Web performance" description={'Web performance'} header={'Web performance'}>
            <section class={styles.card}>
                <p>The UN's Sustainable Devlopment Goals (SDGs) are tracked by <a href="https://ourworldindata.org/">Our World in Data</a>.</p>
                <p><a aria-label="Assessment of the world's response to SDG 7.1 provided by Our World in Data" href="https://sdg-tracker.org/energy#targets">Energy efficiency (SDG 7.1)</a></p>
                <p><a aria-label="Assessment of the world's response to SDG 17.8 provided by Our World in Data" href="https://sdg-tracker.org/global-partnerships">Internet access (SDG 17.8)</a></p>
                <p><a aria-label="Assessment of the world's response to SDG 12 provided by Our World in Data" href="https://sdg-tracker.org/sustainable-consumption-production">Data centres (SDG 12)</a></p>
            </section>
        </Layout>
    )
};

export default Sustainability;