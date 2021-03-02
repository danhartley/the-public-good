import Link from 'next/link';
import Layout from 'components/layout/layout';
import { Lists } from 'components/lists/Lists';
import styles from 'pages/pages.module.scss';

const links = [
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
        <Layout title="Web performance" description={'Web performance'} header={'Web performance'}>

            <p>Many of the test sites listed on the <span class={styles.link}><Link href={'/web-performance'}><a>website performance page</a></Link></span> include accessibility checks.</p>
                        
            <section class={styles.card}>
            <p>There are a number of browser development tools</p>

            <div class={styles.grid}>
                <Lists.InternalLinksList links={links} />
            </div>
            </section>
        </Layout>
    )
};

export default Accessibility;