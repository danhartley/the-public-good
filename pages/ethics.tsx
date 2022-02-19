import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const onlineTools = [
    {
        "name": "The Green Web Foundation",
        "source": "https://www.thegreenwebfoundation.org/"
    },
    {
        "name": "Website Scanner | CookiePro | Requires email",
        "source": "https://kiosk.cookiepro.com/start-scan"
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
    {
        "name": "The Ethical Centre",
        "source": "https://ethics.org.au/"
    },
    {
        "name": "Data Ethics Framework | GOV.UK",
        "source": "https://www.gov.uk/government/publications/data-ethics-framework/data-ethics-framework-2020"
    },
];

const Ethics = () => {
    return (
        <Layout header="Ethical web development" title="Ethical web development" description={'Ethical web development'}>
                
            <section>
                <p>How do you introduce ethics into web design and development?</p>
                <p>The problem is one of approach rather than details.</p>
                <p>A conventional Kanban board used for developing new features typically has lists with headings like Backlog, Coding, Reviewing, Done.</p>
                <p>Here is a set of alternative list headings:
                    <ul>
                        <li>What are we adding, and who is it for?</li>
                        <li>What will be the effect on those that make and maintain it?</li>
                        <li>What standards are we imposing, encouraging, or spreading?</li>
                        <li>What will be the result of these changes?</li>
                        <li>How will we maintain it, and handle feedback and issues?</li>
                    </ul>
                </p>
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