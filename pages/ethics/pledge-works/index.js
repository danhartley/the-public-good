import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import Appendix from 'pages/ethics/pledge-works/appendix';

const externalLinks = [
    {
        "name": "W3C TAG Ethical Web Principles",
        "source": "https://www.w3.org/2001/tag/doc/ethical-web-principles/"
    },
];

const PledgeWorks = () => {
    return (
        <Layout header="Pledge Works" title="Pledge Works" description={'Pledge Works'}>                
            <section>
                <p>
                    For an introduction to the open source project, please go to <Links.EL link={{source:"https://responsibletech.work/tools/development/pledge-works/"}}>Pledge Works</Links.EL>.                    
                </p>
                <p>If you are interested in how I use Pledge Works at The Public Good, please see the links below.</p>
            </section>
            <Appendix></Appendix>
            <Links.RelatedLinks links={[{value:"https://responsibletech.work/blog/2022/3/1/pledge-works-writing-pledges-for-better-outcomes/", text:"Writing Pledges for Better Outcomes"},{value:'ethics/pledge-works/case-study-the-public-good',text:'Pledge Works for The Public Good'},{value:'ethics/pledge-works/case-study-startup', text:'Pledge Works for Startups'}, {value:'ethics/pledge-works/inventory', text:'Pledge Works Inventory'},{value:'ethics/pledge-works/pledges', text:'Pledges'},{value:'ethics', text:'Ethics'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default PledgeWorks;