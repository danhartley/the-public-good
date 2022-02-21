import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import AnalyticsProvider from 'pages/pledge-works/figures/decision-matrix-analytics-provider';
import Top from 'components/top/top';
import Appendix from 'pages/pledge-works/appendix';
import Workflow from 'pages/pledge-works/workflow';

import styles from 'pages/pages.module.scss';

const Introduction = () => {

    const externalLinks = [
        {
            "name": "Self-Review Questionnaire: Security and Privacy | W3C",
            "source": "https://www.w3.org/TR/security-privacy-questionnaire/"
        },
        {
            "name": "Decision Matrix - Analytics",
            "source": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGzyoiKqybpBObNoC0Z5Ex6obRb3uFY8AsoEakMF_nZUYZdc5o9jyxwrDdk5ok8Nup9hC8Va-M34HI/pubhtml?gid=137244074&single=true"
        },
        {
            "name": "Decision Matrix - Discussion Platform",
            "source": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGzyoiKqybpBObNoC0Z5Ex6obRb3uFY8AsoEakMF_nZUYZdc5o9jyxwrDdk5ok8Nup9hC8Va-M34HI/pubhtml?gid=648158012&single=true"
        },
    ];

    return (
        <Layout header="Pledge Works" rt="4 to 5" title="Pledge Works" description={'Pledge Works: Writing pledges for better outcomes.'} discussions='/categories/pledge-works'> {/* image? */}            
            <section>

                <h2>Writing pledges for better outcomes.</h2>

                <p>At <Links.EL link={{source:'https://responsibletech.work'}}>ResponsibleTech.Work</Links.EL> we find ways to work more responsibly. Since we are designers and programmers we began by challenging how we develop software.</p>

                <p>We wanted an approach that was easy to explain, simple to execute, that worked with existing philosophies and practices widely used in software development, but that required little or no training.</p>

                <p>Over six months we came up with an approach to responsible design and development we call <strong>Pledge Works</strong>.</p>

                <p>We write pledges that challenge us to do better and we fit these pledges into the workflows and practices we use every day.</p>

                <h3>Pledge Works</h3>       
                <p>
                    Principles are general and abstract, work is specific and concrete. We have three practices for bridging this gap:
                    <em>
                    <ul class={styles.dashedItemsList}>
                        <li>Writing pledges</li>
                        <li>Challenging decisions</li>
                        <li>Voting</li>
                    </ul>
                    </em>
                </p>

                <h4>The idea</h4>

                <p>We are at a stage in the development of Pledge Works when we want to tell people about it, and receive feedback. As an open source project, we also need to keep down costs.</p>

                <blockquote>
                    <ul class={styles.dashedItemsList}>
                        <li>We want to add analytics to our site, and it must be free or cheap.</li>
                        <li>We want to add a discussion platform to our site, and it must be free or cheap.</li>
                    </ul>
                </blockquote>         

                <p>Because we'll be handling user data, we need to think carefully about data security and privacy. Since we will be reliant on another organisation's services, we will scrutinise their products and motives as well as our own.</p>

                <h4><em>Writing pledges</em></h4>

                <p>We write pledges that are relevant. ResponsibleTech.Work <Links.EL link={{source:"https://responsibletech.work/responsible-pledges/"}}>pledges</Links.EL> are broad and inclusive. They set the tone.</p>

                <p>To select third-party software that handles user data responsibly we add context-specific pledges.</p>

                <blockquote>
                    <ul class={styles.dashedItemsList}>
                        <li>We pledge not to undertake new work without first evaluating its cost.</li>
                        <li>We pledge not to sell, exchange or exploit user data.</li>
                        <li>We pledge to consider the risks and consequences of using third party services.</li>
                        <li>We pledge to assess the carbon emissions of third parties.</li>
                    </ul>                    
                </blockquote>
             
                <h4>Requirements</h4>

                <p>Requirements are the things we need to know and do. We need to know whether an analytics service provides support, offers self-hosting, and whether their data are accurate. We need to know how to add a service or set it up if we are going to host it ourselves.</p>

                <p>To select the best outcome from several options we use a tool from the Pledge Works decision toolbox - the <em>decision matrix</em>.</p>

                <h4><em>Challenging decisions</em></h4>

                <p>
                    <div>Criteria for a decision matrix are mainly <Links.EL link={{source:"https://en.wikipedia.org/wiki/Non-functional_requirement"}}>non-functional</Links.EL> requirements. They describe how the system should behave. We want the analytics tool we choose to <em>be</em> GDPR compliant<span class={styles.super}><a href="#carbon">+</a></span> but we don't need to know <em>how</em> it does this.</div>
                </p>
                <p>The criteria are a mix of project requirements - the service must be free or cheap - and pledges converted into criteria so that we can answer yes or no as to whether they have been met. We think of these criteria as <em>ethical</em> requirements.</p>

                <figure>
                    <AnalyticsProvider></AnalyticsProvider>
                    <figcaption>
                        <em>Figure 2: Simplified Decision Matrix (see <Links.EL link={{source:'https://docs.google.com/spreadsheets/d/e/2PACX-1vTGzyoiKqybpBObNoC0Z5Ex6obRb3uFY8AsoEakMF_nZUYZdc5o9jyxwrDdk5ok8Nup9hC8Va-M34HI/pubhtml?gid=137244074&single=true'}}>Analytics Decision Matrix for RTW website</Links.EL>)</em>
                    </figcaption>
                </figure>

                <p>This is a simplified version of a decision matrix for selecting a website analytics tool. Analytics tools work by running scripts on every page to capture data about the user including where they are from, and how long they stayed.</p>

                <p>We order our criteria by priority from most to least important and give each an appropriately weighted score.</p>

                <p>The decision matrix is an open document to which anyone can contribute; the aim is to capture essential requirements, and to flag anything which may cause us to break a pledge.</p>

                <p>If a decision leads to a pledge being broken, we vote on whether to accept it.</p>

                <h4><em>Voting</em></h4>

                <p>We think putting time aside for voting is worthwhile. If we break a pledge, we want to know why, and agree on whether it is acceptable.</p>

                <p>If we cannot reach a decision, or vote against it, we place it in <em>quarantine</em>. We also do this if we cannot gauge the impact of our decision. This honours one of our key project pledges:</p>

                <blockquote>
                    We pledge not to break a pledge if we are ignorant of the consequences.
                </blockquote>

                <p>What quarantine looks like is up to you. We either label or tag our decision, or card, or place it in a quarantine bucket or list.</p>

                <p>If we accept a decision, we are ready to put it into effect.</p>

                <h4>The decision</h4>

                <p>We decided against using <Links.EL link={{source:'https://analytics.google.com/analytics/'}}>Google Analytics</Links.EL> for tracking users because whilst free, it profits from user data, and against <Links.EL link={{source:"https://www.discourse.org/"}}>Discourse</Links.EL> because it is too expensive.</p>

                <p>For the RTW website we selected <Links.EL link={{source:"https://docs.github.com/en/discussions"}}>GitHub Discussions</Links.EL> as the forum for discussion and questions. This forum does not allow for anonymous comments (you have to create an account), and may put off users who feel it is too tech-oriented. However, it is free, well maintained, easy to set up and run, and does not commit us. At this stage we are looking for people or companies interested in adopting or trialling Pledge Works - they are likely to be familiar with GitHub, and already have an account. We will implement GitHub Discussions.</p>

                <p><Links.EL link={{source:"https://plausible.io/"}}>Plausible</Links.EL> is the best candidate for analytics but we'll wait to see if we really need it. We place Plausible in quarantine.</p>

                <h3>Conclusion</h3>

                <p>The version of Pledge Works described here fits with traditional agile software development. From the Pledge Works <Links.IL link={{source:"pledge-works/inventory"}}>inventory</Links.IL> we used <em>Writing pledges, Challenging decisions, and Voting</em>.</p>

                <p>We recommend using only those parts of Pledge Works you find helpful. There are no hard and fast naming conventions, or strict rules; Pledge Works is not a prescriptive practice. Start with barebones Pledge Works and adopt more of it as necessary.</p>

                <h3>Why we practice Pledge Works</h3>

                <p>Pledge Works is a tool for collaboration that favours ideas and people over titles and hierarchies. We use Pledge Works to give weight to our principles by making pledges that affect our day to day work.</p>
                <p>Our pledges challenge us to address awkward questions that we might prefer to sideline. As a result, we feel better about our decisions, and put into effect more robust solutions.</p>

                <p>
                    See a <Links.IL link={{source:"pledge-works/case-study-startup"}}>case study</Links.IL> for using Pledge Works at a startup.
                </p>
                <Top></Top>
            </section>            
            <Appendix></Appendix>
            <section>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:"https://responsibletech.work/", text:"Pledge Works Introduction (on RTW)"},{value:'pledge-works/case-study-the-public-good',text:'Pledge Works for The Public Good'},{value:'pledge-works/case-study-startup', text:'Pledge Works for Startups'}, {value:'pledge-works/inventory', text:'Pledge Works Inventory'},{value:'pledge-works/pledges', text:'Pledges'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Introduction;