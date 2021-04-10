import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const keyReferences = [    
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
    {
        "name": "IPCC Special Report: Climate Change and Land",
        "source": "https://www.ipcc.ch/srccl/"
    },
    {
        "name": "Sustainable Energy - without the hot air David MacKay",
        "source": "http://www.withouthotair.com/"
    },
];

const keyPosts = [
    {
        "name": "Don’t Call Me a Pessimist on Climate Change. I Am a Realist | William Rees",
        "source": "https://www.postcarbon.org/dont-call-me-a-pessimist-on-climate-change-i-am-a-realist/"
    },
    {
        "name": "Power density primer Vaclav Smil",
        "source": "http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf"
    },
    {
        "name": "What we need to know about the pace of decarbonization Vaclav Smil",
        "source": "https://www.schoolofpublicpolicy.sk.ca/research/publications/policy-brief/what-we-need-to-know-about-the-pace-of-decarbonization.php"
    },
];

const plans = [
    {
        "name": "100% Clean and Renewable Wind, Water, and Sunlight All-Sector Energy Roadmaps for 139 Countries of the World Jacobson et al.",
        "source": "https://web.stanford.edu/group/efmh/jacobson/Articles/I/CountriesWWS.pdf"
    },
];

const References = () => {
    return (
        <Layout title="References" description={'References'}>
            <section class={styles.card}>
                <h2>Key References</h2>
                <Links.ExternalLinksList links={keyReferences} />
            </section>
            <section class={styles.card}>
                <h2>Key posts</h2>
                <Links.ExternalLinksList links={keyPosts} />
            </section>
            <section class={styles.card}>
                <h2>Plan</h2>
                <Links.ExternalLinksList links={plans} />
            </section>
        </Layout>
    )
};

export default References;    