import Layout from 'components/layout/layout';
import { Lists } from 'components/lists/Lists';
import styles from 'pages/pages.module.scss';

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
        "name": "Google PageSpeed Insights",
        "source": "https://developers.google.com/speed/pagespeed/insights/"
    },
    {
        "name": "Yellow Lab Tools",
        "source": "https://yellowlab.tools/"
    },
    {
        "name": "Pingdom Website Speed Test",
        "source": "https://tools.pingdom.com/"
    },
];

const WebPerformance = () => {
    return (
        <Layout title="Web performance" description={'Web performance'} header={'Web performance'}>

            {/* <p>There are many resources for checking your site performance.</p> */}

            <section class={styles.card}>

                <h2>Website performance and accessibility tests</h2>

                <div class={styles.grid}>
                    <Lists.InternalLinksList links={perfLinks} />
                </div>

            </section>
        </Layout>
    )
};

export default WebPerformance;