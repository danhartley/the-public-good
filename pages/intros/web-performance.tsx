import Layout from 'components/layout/layout';
import { Lists } from 'components/lists/Lists';
import styles from 'pages/intros/Intro.module.scss';

const perfLinks = [
    {
        "name": "Mozilla Observatory",
        "source": "https://observatory.mozilla.org/"
    },
    {
        "name": "WebpageTest",
        "source": "https://www.webpagetest.org/"
    },
    {
        "name": "Think With Google",
        "source": "https://www.thinkwithgoogle.com/feature/testmysite/"
    },
    {
        "name": "GTmetrix",
        "source": "https://gtmetrix.com/"
    },
    {
        "name": "Google PageSpeed Insights ",
        "source": "https://developers.google.com/speed/pagespeed/insights/"
    },
];

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
];

const WebPerformance = () => {
    return (
        <Layout title="Web performance" description={'Web performance'} header={'Web performance'}>

            <p>There are many resources for checking your site performance.</p>

            <section class={styles.card}>

                <p>Each link will take you to a page where you can enter your site URL and run a series of performance and accessibility tests.</p>

                <div class={styles.grid}>
                    <Lists.InternalLinksList links={perfLinks} />
                </div>

            </section>
            <section class={styles.card}>

                <p>Each link will take you to a page where you can enter your site URL and run a series of tests related to its carbon emissions.</p>

                <div class={styles.grid}>
                    <Lists.InternalLinksList links={greenLinks} />
                </div>

            </section>
        </Layout>
    )
};

export default WebPerformance;