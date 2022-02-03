import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Appendix from 'pages/pledge-works/artefacts';
import CostPerTonne from 'pages/pledge-works/decision-matrix-cost-per-tonne';

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
        {
            "name": "A Comparison of Carbon Offset Standards | WWF",
            "source": "https://www.globalcarbonproject.org/global/pdf/WWF_2008_A%20comparison%20of%20C%20offset%20Standards.pdf"
        },
    ];

    const corePledges = [
          "We pledge to consider the broader social and environmental impact of our work."
        , "We pledge to have a positive effect on our users and the planet."
        , "We pledge to address conflicts of interest between ourselves and our users."
        , "We pledge not to break a pledge if we are ignorant of the consequences."
        , "We pledge to make our pledges public."
        , "We pledge to come clean if we break a pledge."
    ];

    const productPledges = [
          "We pledge to measure success in terms of tonnes of emissions prevented."        
        , "We pledge to present data that support our claims."
        , "We pledge to verify claims made by our partners and third party vendors."
        , "We pledge to expose our methods to external scrutiny."
    ];

    return (
        <Layout header="Startup case study" rt="4 to 5" title="Case study - the startup" description={'Once a startup has established its purpose, it\'s ready to write the pledges that will guide its work.'} discussions='/categories/pledge-works'> {/* image? */}
            <section>
                <h2>
                    Once a startup has established its purpose, it's ready to write the pledges that will guide its work.
                </h2>
                <p>
                    I will use a fictitious company selling carbon offsets to explain this process.
                </p>
                <p>
                    Our company founders want to make decisions that reflect their values, and earn a living. They believe these goals are complementary.
                </p>
                <p>
                    Following methods set out in <Links.IL link={{source:"/pledge-works/introduction"}}>Pledge Works</Links.IL>, they draw up a foundational list of core pledges which will act as their ethical backstop.
                </p>
                <h3>Core pledges</h3>
                <p>                    
                    What a startup does and what a startup is are not quite the same. As a for-profit company, our founders create a <Links.EL link={{source:"https://www.law.upenn.edu/clinic/entrepreneurship/startupkit/founders-agreement.pdf"}}>Founders' Agreement</Links.EL> (PDF) which sets out, among other things, how they will run the business, and who owns what.
                </p>
                <p>
                    Their core pledges define how they want to behave in the world. This includes their relationship to and responsibility towards future employees, customers, partners, providers of services, and abstract entities such as society and the planet. 
                </p>
                <ul class={styles.standoutList}>
                    {
                        corePledges.map(pledge => {
                            return <li>{pledge}</li>
                        })
                    }
                </ul>
                <p>
                    These pledges are general and apply to everything the company does.
                </p>
                <h4>The purpose of the company</h4>
                <p>
                    The startup plans to provide carbon offset services to small businesses and individuals.
                </p>
                <blockquote cite='https://en.wikipedia.org/wiki/Carbon_offset'>
                    <strong>A carbon offset</strong> is a reduction or removal of emissions of carbon dioxide or other greenhouse gases made in order to compensate for emissions made elsewhere. Offsets are measured in tonnes of carbon dioxide-equivalent (CO2e).
                </blockquote>
                <cite><Links.EL link={{source:'https://en.wikipedia.org/wiki/Carbon_offset'}}>Wikipedia | Carbon offset</Links.EL> </cite>
                <blockquote cite="https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions">
                    <strong>Carbon offset schemes</strong> allow individuals and companies to invest in environmental projects around the world in order to balance out their own carbon footprints.
                </blockquote>
                <cite><Links.EL link={{source:"https://www.theguardian.com/environment/2011/sep/16/carbon-offset-projects-carbon-emissions"}}>The Guardian | A complete guide to carbon offsetting</Links.EL> </cite>
                <blockquote cite='https://www.globalcarbonproject.org/global/pdf/WWF_2008_A%20comparison%20of%20C%20offset%20Standards.pdf'>
                    <strong>Certification</strong> is the written assurance by a third party that, during a specified time period, a project activity achieved the reductions in anthropogenic emissions by sources of greenhouse gases (GHG) as verified
                </blockquote>
                <cite><Links.EL link={{source:"https://www.globalcarbonproject.org/global/pdf/WWF_2008_A%20comparison%20of%20C%20offset%20Standards.pdf"}}>WWF | Making Sense of the Voluntary Carbon Market</Links.EL> </cite>
                <p>                
                    Carbon offsetting is controversial. Our founders will need to demonstrate that the offset operations they support would not otherwise happen (additionality), and that any benefits are not reversible (permanence). They will also need to set a fair price per tonne of carbon offset.<span class={styles.super}><a href="#carbon">+</a></span>
                </p>
                <p>
                    
                </p>
                <h4>Project pledges</h4>
                <p>
                    The price at which the company sells offsets is determined by the price of carbon credits. That price is volatile, varies widely, and is likely to rise steeply. Our founders need to consider these factors.
                </p>
                <p>
                    Based on their understanding of the market they initially set the price at $25. They stress test this price against their project pledges using a decision matrix.
                </p>
                <p>At this stage the founders write project pledges. These are more specific than their core pledges and harder to ignore. The founders use them to keep their decisions in line with their values.</p>
                <p>Examples of pledges our company founders might use to make a decision.</p>
                <ul class={styles.standoutList}>
                    {
                        productPledges.map(pledge => {
                            return <li>{pledge}</li>
                        })
                    }
                </ul>                
                <h4>The decision matrix</h4>                
                <p>
                    A decision matrix is a way to decide between several options. Criteria are derived from business requirements such as profitability, and from pledges. Options either meet or fail criteria.                    
                </p>
                <p>
                    The criteria are reordered from most to least important. Criteria that are met are given a score of 1, criteria that are not a score of 0. Weighted scores are calculated using the equation:                    
                </p>
                <p class={styles.inset}>
                        <span><strong>Weighted score = (1/Rank <span class={styles.multiply}></span> Score) <span class={styles.multiply}></span> 100</strong></span>
                    </p>
                <p>Our founders compare three prices: $25, $50 and $100 per tonne of carbon.</p>                
                <p>
                    The company must set a price which is profitable, competitive, future proof, and satisfies criteria based on its project pledges. The weighted scores favour a price of $50.
                </p>
                <figure>
                    <CostPerTonne></CostPerTonne>
                    <figcaption>
                        <em>Figure 2: Simplified Decision Matrix (see <Links.EL link={{source:'https://docs.google.com/spreadsheets/d/e/2PACX-1vTGzyoiKqybpBObNoC0Z5Ex6obRb3uFY8AsoEakMF_nZUYZdc5o9jyxwrDdk5ok8Nup9hC8Va-M34HI/pub?gid=1748215232&single=true&output=pdf'}}>Carbon price per tonne</Links.EL> PDF)</em>
                    </figcaption>
                </figure>
                <p>
                    Since the scores for $25 and $50 are close, and a recent Reuters <Links.EL link={{source:"https://www.reuters.com/business/cop/carbon-needs-cost-least-100tonne-now-reach-net-zero-by-2050-2021-10-25/"}}>poll of climate economists</Links.EL>  puts the mean value of offsetting a tonne of carbon at $100 if we are to reach net zero by 2050, the founders commission a market survey.
                </p>
                <figure>
                    <div id="venn">
                        <img src="/svg/venn-nonaligned.svg" alt="Venn diagram: The gap between intent and reality" />
                    </div>                
                    <figcaption><em>Figure 1: The gap between intent and reality</em></figcaption>
                </figure>
                <p>
                    They publish their findings, and the decision matrix, in line with their pledge to expose their methods to scrutiny.
                </p>
                <h4>The decision</h4>
                <p>
                    The founders set a price of $65 per tonne. This is far higher than the majority of their competitors but their survey suggests there is a niche market willing to pay more for what they consider a fair price.
                </p>
                <figure>
                    <div id="venn2">
                        <img src="/svg/venn-aligned.svg" alt="Venn diagram: Intent and reality aligned" />
                    </div>
                    <figcaption><em>Figure 2: Intent and reality aligned</em></figcaption>
                </figure>
                <h3>Conclusion</h3>
                <p>Writing pledges and integrating them into the decision making process helped the founders set a value on carbon dioxide emissions they hope will support a profitable and ethical company.</p>
                <p>The process of writing requirements and checking them against pledges will continue to help guide their decisions, whether selecting offset projects, utility providers, or third party software services.</p>
            </section>
            <section id="carbon">
                + Carbon credits are per tonne of <em>carbon dioxide</em>, not carbon. <Links.IL link={{source:"climate-crisis/facts"}}>There is a difference!</Links.IL>
            </section>
            <Appendix></Appendix>
            <section>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'pledge-works/introduction',text:'Introduction to Pledge Works'}, {value:'pledge-works/inventory', text:'Pledge Works Inventory'}]}></Links.RelatedLinks>
        </Layout>
    )

};

export default CaseStudyStartUp;