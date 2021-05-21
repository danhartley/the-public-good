import Link from 'next/link';
import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Other = () => {

    const externalLinks = [
        {
            "name": "Gemma Fitzsimmons | The impact of hyperlinks on reading text",
            "source": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210900"
        },
        {
            "name": "Web AIM (Web Accessibility in Mind) | Links and Hypertext",
            "source": "https://webaim.org/techniques/hypertext/link_text"
        },
        {
            "name": "Web AIM (Web Accessibility in Mind) | WCAG 2 Checklist",
            "source": "https://webaim.org/standards/wcag/checklist"
        },
        {
            "name": "Web AIM (Web Accessibility in Mind) | Contrast Checker",
            "source": "https://webaim.org/resources/contrastchecker/"
        },
    ];

    return (
        <Layout header="Other" title="Other" description={'Other'}>
            <section>

                <h2>What are our principles?</h2>

                <p>The Internet is a democratic institution; we will do everything we can do to make our site accessible to all.</p>

                <p>We won't waste people's time, people's money, our own time or money, or be profligate with resources.</p>

                <p>We will uphold web standards, and avoid nefarious practices.</p>

                <h2>How do we make sure we stick to our guns?</h2>

                <p>Agree to a budget for performance, measure progress using lab tests and live data, and maintain our commitment to it throughout the life of the site.</p>

                <p>Promise that no user will be poorly served or ignored.</p>

                <p>Publish a sociable contract on the website to minimise the chance of backsliding.</p>

                <h2>How much energy do websites consume?</h2>

                <p>
                    <div>Websites come under the heading ICT (Informationand Communication Technology). This category, which covers data centres, networks, and devices, accounts for approximately <Links.EL link={{source:'https://www.researchgate.net/publication/342643762_New_perspectives_on_internet_electricity_use_in_2030'}}>7%</Links.EL> of total global electricity use.</div>
                </p>

                <p>There is no concensus around the cost, in terms of energy or greenhouse gas emissions, of delivering a web page. Or even how to measure it. Where the boundary is drawn is significant; in addition to network and data centre costs, there is debate as to whether the energy consumption of the device should be included.
                    <div class={styles.quote}>
                        <strong>The decision of whether or not to include end devices influences the result by 1-2 orders of magnitude.</strong>
                        <div>The energy intensity of the internet: home and access networks <Links.EL link={{source: "https://www.zora.uzh.ch/id/eprint/110005/1/2014_Coroama_Schien_Preist_Hilty_Energy_Intensity_Internet_Home_Access.pdf", label:"PDF The energy intensity of the internet"}}>PDF</Links.EL></div>
                    </div>
                </p>

                <p>What of the content itself?</p>

            </section>
        
            <section>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'web-development/sociable-contract',text:'Sociable contract'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Other;