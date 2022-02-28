import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Top from 'components/top/top';
import Appendix from 'pages/ethics/pledge-works/appendix';
import Concrete from 'pages/ethics/pledge-works/figures/cascade-of-pledges-concrete';
import Abstract from 'pages/ethics/pledge-works/figures/cascade-of-pledges-abstract';

import styles from 'pages/pages.module.scss';

const Pledges = () => {

    const externalLinks = [
        {
            "name": "Public declarations",
            "source": "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZcoudvThs0sZU-L87_ylopljM5Gh3Mq66KcWOvFK0gQ3G8krcxwR7TpvoGWkyKH6comq3xG1AR7-p/pubhtml?gid=1753280922&single=true"
        },        
    ];

    const pledges = [
        "I pledge to support opinions and statements with data.",
        "I pledge to provide links to sources.",
        "I pledge to follow web standards.",
        "I pledge to test performance using third party tools.",
        "I pledge to set performance and sustainability budgets.",
        "I pledge to use third party code only when it adds demonstrable value to the project.",
        "I pledge to write software for all devices and browsers.",
        "I pledge not to use practices identified as dark patterns.",
        "I pledge to balance privacy, security, and usability.",
        "I pledge not to sell, exchange or exploit user data.",
    ];

    const pledges2 = [
        "I pledge to speak to people in other teams in order to understand their work and needs.",
        "I pledge to document decisions critical to the project.",
        "I pledge to be fair to and supportive of team members.",
        "I pledge to share my experience and knowledge with team members.",
        "I pledge to prevent or stop unlawful demands or requests that are damaging to users.",
        "I pledge to write code that can be easily maintained.",
        "I pledge to consider the developers that come after me.",
        "I pledge not to undertake new work without first evaluating its cost.",
        "I pledge to avoid irreversible decisions.",
        "I pledge to write code in line with common conventions and recognised good practice.",
        "I pledge to write software that is extensible if required."
    ];

    return (
        <>
            <Layout header="Ethics at work"  rt="3" title="Ethics at work" description={'It is impossible to defend ethical behaviour on economic grounds; nor is it necessary.'} discussions='/categories/pledge-works'> {/* image? */}
                <section>
                    <h2>Writing pledges makes it harder to ignore the things I say I believe in.</h2>
                    <h3>The Public Good</h3>
                    <p>These pledges are specific to this website. Since I'm working alone, and the site is simple, the focus is on better outcomes for readers.</p>                    
                    <ul class={styles.dashedItemsList}>
                        {
                            pledges.map(p => {
                                return <li>{p}</li>
                            })
                        }
                    </ul>
                    <h3>ResponsibleTech.Work</h3>
                    <p>I stand by the pledges espoused by <Links.EL link={{source:"https://responsibletech.work/responsible-pledges/"}}>ResponsibleTech.Work</Links.EL>.</p>
                    <h3>Professional pledges</h3>
                    <p>When working with others, I make the following commitments:</p>
                    <ul class={styles.dashedItemsList}>
                        {
                            pledges2.map(p => {
                                return <li>{p}</li>
                            })
                        }
                    </ul>
                    <Top></Top>
                </section>
                <Appendix></Appendix>
                <section>
                    <h2>External Links</h2>
                    <Links.ExternalLinksList links={externalLinks} />
                </section>
                <Links.RelatedLinks links={[{value:"https://responsibletech.work/", text:"Pledge Works Introduction (on RTW)"}, {value:'ethics/pledge-works/case-study-the-public-good',text:'Pledge Works for The Public Good'},{value:'ethics/pledge-works/case-study-pledge-works',text:'Pledge Works for Pledge Works'}, {value:'ethics/pledge-works/case-study-startup', text:'Pledge Works for Startups'}, {value:'ethics/pledge-works/inventory', text:'Pledge Works Inventory'},{value:'ethics', text:'Ethics'}]}></Links.RelatedLinks>
            </Layout>
        </>
    )
};

export default Pledges;