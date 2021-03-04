import Layout from 'components/layout/layout';
import { Links } from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const links = [
    {
        "name": "WAVE Web Accessibility Evaluation Tool",
        "source": "https://wave.webaim.org/"
    },
    {
        "name": "axe - Web Accessibility Testing",
        "source": "https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US"
    },
    {
        "name": "Color Contrast Accessibility Validator",
        "source": "https://color.a11y.com/"
    },
];

const Accessibility = () => {
    return (
        <Layout title="Web accessibility" description={'Web accessibility'}>
            <section class={styles.card}>
                <h2>Accessibility tools</h2>
                <Links.InternalLinksList links={links} />
            </section>
        </Layout>
    )
};

export default Accessibility;