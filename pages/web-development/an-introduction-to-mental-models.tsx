import Link from 'next/link';
import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const MentalModel = () => {

    const externalLinks = [
        {
            "name": "Gemma Fitzsimmons | The impact of hyperlinks on reading text",
            "source": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210900"
        },
    ];

    return (
        <Layout header="An introduction to mental models" title="Web development - An introduction to mental models" description={'Web development - An introduction to mental models'}>
            <section class={styles.card}>

                <p><div class={styles.inset}><span class={styles.italic}>Reading time: 6 minutes</span></div></p>

                <h2>For humans</h2>


                <h2>For machines</h2>

            </section>
        
            <section class={styles.card}>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'web-development/sociable-contract',text:'Sociable contract'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default MentalModel;