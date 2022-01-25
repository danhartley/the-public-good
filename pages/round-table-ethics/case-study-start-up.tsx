import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Aligned from 'pages/round-table-ethics/venn-aligned';
import NonAligned from 'pages/round-table-ethics/venn-non-aligned';

import CostPerTonne from 'pages/round-table-ethics/decision-matrix-cost-per-tonne';

import styles from 'pages/pages.module.scss';

const CaseStudyStartUp = () => {

    const externalLinks = [
        {
            "name": "Gold Standard for the Global Goals",
            "source": "https://www.goldstandard.org/"
        },
        {
            "name": "Carbon needs to cost at least $100/tonne | Reuters poll",
            "source": "https://www.reuters.com/business/cop/carbon-needs-cost-least-100tonne-now-reach-net-zero-by-2050-2021-10-25/"
        },
    ];

    const corePledges = [
          "We pledge to maintain high standards of professional competence, conduct, and ethical practice."
        , "We pledge to provide products and services that support an economy that nourishes people and the planet."
        , "We pledge to tackle conflicts of interest."
        , "We pledge not to break a pledge if we are ignorant of the consequences."
    ];

    const roleBasedPledges = [
          "We pledge to develop human resources, not consume them (HR)."
        , "We pledge to write accessible copy because we want to treat all users fairly and equally (Marketing)."
        , "We pledge to provide evidence that we have considered climate change in our accounts (Accounts)."
        , "We pledge to balance the privacy and security of customers with the demands of the business for improved productivity (Business analysis)." 
    ];

    const productPledges = [
          "We pledge to measure success in terms of tonnes of emissions prevented."        
        , "We pledge to present data that support our claims."
        , "We pledge to verify claims made by our partners and third party vendors."
        , "We pledge to expose our methods to external scrutiny."
        , "We pledge not to misrepresent content."        
    ];

    const projectProposals = [
            "Set the cost per tonne of carbon dioxide offsets at 25€."
          , 
    ];

    return (
        <Layout header="Case study - The Startup"  rt="4" title="Case study - the startup" description={'Once a startup has established its purpose, it is ready to write the pledges that will guide its work.'}> {/* image? */}
            <section>
                <h2>
                    Once a startup has established its purpose, it is ready to write the pledges that will guide its work.
                </h2>
                <p>
                    I will use a fictitious company selling carbon offsets to explain this process.
                </p>
                <p>
                    Our company founders want to make decisions that reflect their principles, and earn a living. They believe these needs are complementary.
                </p>
                <p>
                    Following the methods set out in Round Table Ethics, they draw up a foundational list of core, organisational pledges which will act as their ethical backstop.
                </p>
                <h3>Core pledges</h3>
                <p>                    
                    What a startup does and what a startup is may appear synonymous but there are differences. As a for-profit company, our founders create a <Links.EL link={{source:"https://www.law.upenn.edu/clinic/entrepreneurship/startupkit/founders-agreement.pdf"}}>Founders' Agreement</Links.EL> (PDF) which sets out, among other things, how they will run the business, and who owns what.
                </p>
                <p>
                    Their core pledges define how they want to behave in the world. This includes their relationship to and responsibility towards future employees, customers, partners, providers of services, and abstract entities such as society and the planet. 
                </p>
                <ul class={styles.bulletList}>
                    {
                        corePledges.map(pledge => {
                            return <li>{pledge}</li>
                        })
                    }
                </ul>          
                <p>
                    These pledges are general and apply to everything the company does. They are in addition to their strategy for achieving equality and diversity.
                </p>
                <p>
                    As others join, they will introduce pledges specific to their profession or job. Role-based pledges are used by individuals and teams to guide their own work and to highlight issues, and risks, not previously considered.
                </p>
                <h4>Role-based pledges</h4>
                <ul class={styles.bulletList}>
                    {
                        roleBasedPledges.map(pledge => {
                            return <li>{pledge}</li>
                        })
                    }
                </ul>
                <p>
                    Our founders promise to make their pledges public, and to come clean if they break a pledge. They turn these promises into pledges.
                </p>
                <h4>The purpose of the company</h4>
                <p>
                    The startup provides carbon offset services to small businesses and individuals. But offsetting is <Links.EL link={{source:"https://www.carbonbrief.org/guest-post-why-co2-removal-is-not-equal-and-opposite-to-reducing-emissions"}}>controversial</Links.EL>. The founders want to demonstrate that the offset operations they support would not otherwise happen (additionality), and that any benefits are irreversible (permanence).
                </p>
                <p>
                    
                </p>
                <h4>Project pledges</h4>
                <p>
                    Our founders build a basic version of their website to test the market.
                    Key to their project is the carbon offset cost per tonne<span class={styles.super}><a href="#carbon">*</a></span> they will charge their customers. They know the value their competitors typically use but are sceptical - they think an artificially low figure is being used so as not to put people off.
                </p>
                <h5>Proposal:</h5>
                <ul class={styles.bulletList}>
                    {
                        projectProposals.map(pledge => {
                            return <li>{pledge}</li>
                        })
                    }
                </ul>
                <p>They stress test the offset cost per tonne against their project pledges using a <em>decision matrix</em>. Relevant project pledges throw a spotlight on the concrete proposal.</p>
                <h5>Pledges:</h5>
                <ul class={styles.bulletList}>
                    {
                        productPledges.map(pledge => {
                            return <li>{pledge}</li>
                        })
                    }
                </ul>
                <figure>
                    {/* <NonAligned></NonAligned> */}
                    <div id="venn">
                        <img src="/svg/venn-nonaligned.svg" alt="Venn diageam: The gap between intent and reality" />
                    </div>                
                    <figcaption><em>Figure 1: The gap between intent and reality</em></figcaption>
                </figure>
                <h4>The decision matrix</h4>
                <p>
                    The price at which the company sells offsets is determined by the price of carbon credits. That price is volatile, varies widely, and is likely to rise steeply.
                </p>
                <p>
                    The company must set a price which is profitable, competitive, future proof, and satisfies criteria based on its project pledges. The <Links.EL link={{source:"https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1748215232"}}>weighted scores</Links.EL>  favour a price of $50. These prices are just a guide, so the founders could compromise on a price between $35 and $40.
                </p>
                <figure>
                    <CostPerTonne></CostPerTonne>
                    <figcaption>
                        <em>Figure 2: Simplified Decision Matrix (see <Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1748215232'}}>Carbon price per tonne</Links.EL>)</em>
                    </figcaption>
                </figure>
                <p>
                    But since the outcome of the decision matrix is unclear, and a recent Reuters <Links.EL link={{source:"https://www.reuters.com/business/cop/carbon-needs-cost-least-100tonne-now-reach-net-zero-by-2050-2021-10-25/"}}>poll of climate economists</Links.EL>  puts the mean value of offsetting a tonne of carbon at $100 if we are to reach net zero by 2050, the founders commission a marketing survey of their target audience.
                </p>
                <p>
                    They publish their thinking, including the decision matrix, in line with their pledge to expose their methods to scrutiny. They also hope this may balance the confirmation bias startup founders are subject to.
                </p>
                <h4>The decision</h4>
                <p>
                    The founders set a price of $65 per tonne. This is far higher than the majority of their competitors but their survey suggests a niche market willing to pay more for what they consider a fair price.
                </p>
                <figure>
                    {/* <Aligned></Aligned> */}
                    <div id="venn2">
                        <img src="/svg/venn-aligned.svg" alt="Venn diagram: Intent and reality aligned" />
                    </div>
                    <figcaption><em>Figure 2: Intent and reality aligned</em></figcaption>
                </figure>
                <h3>Conclusion</h3>
                <p>Writing pledges and integrating them into the decision making process helped the founders set a value on carbon dioxide emissions they hope will support a profitable and ethical company.</p>
                <p>The process of writing requirements and checking them against pledges will be repeated often, whether selecting offset projects, utility providers, or third party software services.</p>
            </section>
            <section id="carbon">
                Carbon credits are per tonne of <em>carbon dioxide</em>, not carbon. <Links.IL link={{source:"climate-crisis/facts"}}>There is a difference!</Links.IL>
            </section>
            <section>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'round-table-ethics/introduction',text:'Introduction to Round Table Ethics'}]}></Links.RelatedLinks>
        </Layout>
    )

};

export default CaseStudyStartUp;