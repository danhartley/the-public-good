import Link from 'next/link';
import Layout from 'components/layout/layout';
import { Lists } from 'components/lists/Lists';
import styles from 'pages/intros/Intro.module.scss';

const links = [
    {}
];

const Accessibility = () => {
    return (
        <Layout title="Web performance" description={'Web performance'} header={'Web performance'}>

            <p>Many of the test sites listed on the <span class={styles.link}><Link href={'/intros/web-performance'}><a>website performance page</a></Link></span> include accessibility checks.</p>
            <p>This page has references to articles and guides.</p>
            
            <section class={styles.card}>
            <p>Each link will take you to a page where you can enter your site URL and run a series of performance and accessibility tests.</p>

            <div class={styles.grid}>
                <Lists.InternalLinksList links={links} />
            </div>
            </section>
        </Layout>
    )
};

export default Accessibility;