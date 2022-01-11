import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Transparency = () => {

    const perfLinks = [
        {
            "name": "Google Transparency Report",
            "source": "https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fwww.the-public-good.com%2F&hl=en"
        },
    ];

    const externalLinks = [
        {
            "name": "W3C TAG Ethical Web Principles | 2.10 The web is transparent",
            "source": "https://www.w3.org/2001/tag/doc/ethical-web-principles/#transparent"
        },
        {
            "name": "Cabin analytics for The Public Good",
            "source": "https://withcabin.com/public/the-public-good.com"
        },
    ];

    return (
        <Layout header="Transparency" title="Transparency" description={'Transparency'}> {/* image? */}            
            <section>

                <h2>stuff here…</h2>

                <p>
                    <Links.EL link={{source:'https://withcabin.com/public/the-public-good.com'}}>Public access to Cabin analytics for The Public Good.</Links.EL>
                </p>

                <p>
                    <Links.EL link={{source:'https://www.w3.org/2001/tag/doc/ethical-web-principles/#transparent'}}>The web was built on a "view source" principle, currently realized through robust developer tools built into many browsers. We will always make sure it is possible to determine how a web application was built and how the code works. Furthermore, we will always make sure it is possible to audit and inspect web applications and underlying software for security, privacy or other considerations.</Links.EL>
                </p>

                <p>
                    <div>Learn to love criticism, and tailor a set of tests, challenges, acceptance criteria and expected outcomes that can be readily understood.</div>
                    <Links.EL link={{source:'https://www.mckinsey.com/business-functions/strategy-and-corporate-finance/our-insights/have-you-tested-your-strategy-lately'}} >Strategy is especially prone to faulty logic because it relies on extrapolating ways to win in the future from a complex set of factors observed today. This is fertile ground for two big inference problems: attribution error (succumbing to the “halo effect”) and survivorship bias (ignoring the “graveyard of silent failures”). Attribution error is the false attribution of success to observed factors; it is strategy by hindsight and assumes that replicating the actions of another company will lead to similar results. Survivorship bias refers to an analysis based on a surviving population, without consideration of those who did not live to tell their tale: this approach skews our view of what caused success and presents no insights into what might cause failure—were the survivors just luckier? Case studies have their place, but hindsight is in reality not 20/20. There are too many unseen factors.</Links.EL>
                </p>

                <h2>Democratic accountability</h2>

                <Links.ExternalLinksList links={perfLinks} />   

            </section>
        
            <section>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'web-development/sociable-contract',text:'Sociable contract'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Transparency;