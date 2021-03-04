import Layout from 'components/layout/layout';
import { Links } from 'components/links/Links';
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

const Performance = () => {
    return (
        <Layout title="Web performance" description={'Web performance'}>
            <section class={styles.card}>
                <h2>Website performance and accessibility tests</h2>                
                <Links.InternalLinksList links={perfLinks} />                
            </section>
        </Layout>
    )
};

export default Performance;