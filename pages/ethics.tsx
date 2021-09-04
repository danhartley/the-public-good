import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const onlineTools = [
    {
        "name": "The Green Web Foundation",
        "source": "https://www.thegreenwebfoundation.org/"
    },
];

const externalLinks = [
    {
        "name": "W3C TAG Ethical Web Principles",
        "source": "https://www.w3.org/2001/tag/doc/ethical-web-principles/"
    },
    {
        "name": "W3C | Web Platform Design Principles",
        "source": "https://w3ctag.github.io/design-principles/"
    },
    {
        "name": "W3C | Self-Review Questionnaire: Security and Privacy",
        "source": "https://www.w3.org/TR/security-privacy-questionnaire/"
    },
    {
        "name": "Smashing Magazine | Using Ethics In Web Design",
        "source": "https://www.smashingmagazine.com/2018/03/using-ethics-in-web-design/"
    },
    {
        "name": "Ethical Web Development | Adam Scott",
        "source": "https://www.ethicalweb.org/"
    },
];

const Ethics = () => {
    return (
        <Layout header="Ethical web development" title="Ethical web development" description={'Ethical web development'}>
                
            <section>
                <p>Bla di bla</p>    
            </section>
            <section>
                <h2>Links to external references</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'architecture',text:'Architecture'},{value:'performance',text:'Performance'},{value:'accessibility',text:'Accessibility'},{value:'climate-crisis/will-people-or-policies-save-the-planet',text:'Will people or policies save the planet?'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Ethics;