import Layout from 'components/layout/layout';
import { Links } from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const keyTexts = [    
    {
        "name": "1992 World Scientists' Warning to Humanity",
        "source": "https://www.ucsusa.org/resources/1992-world-scientists-warning-humanity"
    },
    {
        "name": "World Scientists’ Warning to Humanity: A Second Notice",
        "source": "https://academic.oup.com/bioscience/article/67/12/1026/4605229"
    },
    {
        "name": "The Economics of Biodiversity: The Dasgupta Review",
        "source": "https://www.gov.uk/government/publications/final-report-the-economics-of-biodiversity-the-dasgupta-review"
    },
];

const Texts = () => {
    return (
        <Layout title="Links" description={'Links'}>
            <section class={styles.card}>
                <h2>Key texts</h2>
                <Links.InternalLinksList links={keyTexts} />
            </section>
        </Layout>
    )
};

export default Texts;    