import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import AnalyticsProvider from 'pages/pledge-works/decision-matrix-analytics-provider';
import Workflow from 'pages/pledge-works/workflow';

import styles from 'pages/pages.module.scss';

const Introduction = () => {

    const perfLinks = [
        
    ];

    const externalLinks = [
        {
            "name": "Self-Review Questionnaire: Security and Privacy | W3C",
            "source": "https://www.w3.org/TR/security-privacy-questionnaire/"
        }
    ];

    return (
        <Layout header="Introduction to Pledge Works"  rt="5" title="Pledge Works" description={'Pledge Works: Stress-testing good intentions.'}> {/* image? */}            
            <section>

                <h2>Stress-testing good intentions.</h2>

                <h3>The raison d'être of Pledge Works</h3>

                <p>As collaborators at <Links.EL link={{source:'https://responsibletech.work/'}}>ResponsibleTech.Work</Links.EL>, we look for ways to work more responsibly. We began by challenging how we develop software.</p>

                <p>We wanted an approach that was easy to explain, simple to execute, and that could work with existing philosophies and practices widely used in software development, that required little or no training, and was not dependent on software tools.</p>

                <p>Over six months we came up with an approach to responsible design and development we call <strong>Pledge Works</strong>.</p>

                <p>Rather than avoiding challenging questions, we look at the requirements of each new piece of work through the lens of principles encoded in pledges, before reaching a decision.</p>

                {/* <p><em>Pledges + Requirements = Decision</em></p> */}

                <h3>Pledge Works in practice</h3>       

                <figure>
                    {/* <Workflow></Workflow> */}
                    <div class={styles.centred}>
                        <img src="/svg/workflow.svg" alt="Workflow" />
                    </div>
                    <figcaption>
                        <br />
                        <div><em>Figure 1: Simplified Pledge Works workflow</em></div>
                    </figcaption>
                </figure>

                <p>We created Pledge Works to solve a conundrum we face repeatedly in our work: how to act in accordance with our principles. Principles are general and abstract, work is specific and concrete.</p>

                <p>Rather than covering the full inventory in one go, I'll use three Pledge Works ideas: <em>Writing pledges, The decision matrix, and Voting</em>.</p>

                <p>I use a real example in the hope this will make the process clearer. The actions are ordered for clarity but in practice we jump between them.</p>

                <h4>1. Explaining the project</h4>

                <p>We are at a stage in the development of Pledge Works when we want to tell people about it, and receive feedback. As an open source project, we also need to keep down costs. These are our requests (high level requirements):</p>

                <blockquote cite='https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1882839689'>
                    <div>We want to add analytics to our site, and pay nothing, or very little.</div>
                    <cite><Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=137244074'}}>Decision Matrix - Analytics</Links.EL></cite>
                    <div>We want to add a discussion platform to our site, and pay nothing, or very little.</div>
                    <cite><Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=648158012'}}>Decision Matrix - Discussion Platform</Links.EL></cite>
                </blockquote>         

                <h4>2. Defining the scope</h4>

                <p>Defining the scope of a project is important in order to focus on pledges that are relevant, and will affect our decisions.</p>

                <p>Because we want to find out more about our users, and interact with them, data security and privacy are key areas of concern. Together with our requests, these define our scope.</p>

                <h4><em>3. Writing pledges</em></h4>

                <p>We start by writing pledges based on the scope of the task at hand.</p>

                {/* We will add more later when we write our list of detailed requirements. */}

                {/* <p>We derive pledges from our own <Links.EL link={{source:'https://responsibletech.work/responsible-pledges/'}}>RTW pledges</Links.EL>, professional codes of conduct, manifestos, and any other principles and promises which are pertinent. We keep a <Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1317309901'}}>list</Links.EL> of these for reference.</p> */}
{/* 
                <p>From the Sustainable Web Manifesto:</p>
                <blockquote cite='https://www.sustainablewebmanifesto.com/'>
                    The products and services we provide will be accessible, allow for the open exchange of information, and allow users to control their data.                    
                </blockquote>                
                <cite><Links.EL link={{source:'https://www.sustainablewebmanifesto.com/'}}>Sustainable Web Manifesto</Links.EL></cite>

                <p>We derive this pledge:</p>
                <blockquote cite=''>
                    <div>We pledge not to sell, exchange or exploit user data.</div>
                </blockquote>

                <p>From the ACM code of conduct:</p>

                <blockquote cite='https://www.acm.org/code-of-ethics'>
                    <div>Give comprehensive and thorough evaluations of computer systems and their impacts, including analysis of possible risks.</div>
                    <div>Perform work only in areas of competence.</div>
                </blockquote>                
                <cite><Links.EL link={{source:'https://www.acm.org/code-of-ethics'}}>ACM Code of Ethics and Professional Conduct</Links.EL></cite>

                <p>We derive this pledge:</p>
                <blockquote cite='https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1294958642'>
                    <div>We pledge not to undertake new work without first evaluating its cost.</div>
                </blockquote>
                <cite><Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1294958642'}}>RTW Technical Pledges</Links.EL></cite> */}

                {/* <p>We create five pledges:</p> */}

                <blockquote>
                    <ul class={styles.standoutList}>
                        <li>We pledge not to undertake new work without first evaluating its cost.</li>
                        <li>We pledge not to sell, exchange or exploit user data.</li>
                        <li>We pledge to consider the risks and consequences of using third party services.</li>
                        <li>We pledge to assess the carbon emissions of third parties.</li>
                        <li>We pledge to make data about us transparent by default.</li>
                    </ul>                    
                </blockquote>
             
                <h4>4. Listing our requirements</h4>

                <p>Requirements are the detailed breakdown of the things we need to know and do. For example, we need to know whether an analytics service provides support, offers self-hosting, and how accurate their data are.</p>

                {/* <p>If you practice a form of agile development such as Scrum or Kanban, you will add these requirements to cards or tasks.</p> */}

                <p>To compare different solutions, especially those that are likely to challenge our pledges, we set up a decision matrix.</p>

                <h4><em>5. The decision matrix</em></h4>

                <p>We convert out requirements and pledges into criteria which we use to compare alternative solutions.</p>

                {/* <p>A simplified example of the Decision Matrix that we used for choosing our analytics provider:</p> */}

                <figure>
                    <AnalyticsProvider></AnalyticsProvider>
                    <figcaption>
                        <em>Figure 2: Simplified Decision Matrix (see <Links.EL link={{source:'https://docs.google.com/spreadsheets/d/e/2PACX-1vTGzyoiKqybpBObNoC0Z5Ex6obRb3uFY8AsoEakMF_nZUYZdc5o9jyxwrDdk5ok8Nup9hC8Va-M34HI/pub?gid=137244074&single=true&output=pdf'}}>Analytics Decision Matrix for RTW website</Links.EL>)</em>
                    </figcaption>
                </figure>

                {/* <p>A <em>decision matrix</em> lets us compare different solutions with reference to our requirements, both those specific to the request, and those derived from pledges.</p> */}

                <p>We order our list in terms of priority - from more to less important - and give each one an appropriately weighted score.</p>
            
                {/* <p><em>Pledges + Requirements + Scores = Decision</em></p> */}

                <p>The decision matrix is an open document to which anyone can contribute; the aim is to capture essential requirements, and to flag anything which may cause us to break a pledge.</p>

                <p>If a decision leads to a pledge being broken, we vote on whether to accept it.</p>

                <h4><em>6. Voting</em></h4>

                <p>We think putting time aside for voting is worthwhile. If we break a pledge, we want to know why, and agree on whether it is acceptable. We record our decision so that we can review it later.</p>

                {/* <p>There may be a good reason for breaking a pledge - we may be forced to break one pledge in favour of another. If that is the case we use other criteria to resolve the problem.</p> */}

                {/* We can evaluate alternative solutions in terms of their <Links.EL link={{source:'https://www.interaction-design.org/literature/article/from-prototype-to-product-ensuring-your-solution-is-feasible-and-viable'}}>desirability, feasibility, and viability</Links.EL> or <Links.EL link={{source:'https://www.mindtheproduct.com/socially-preferable-by-nathan-kinch/'}}>social preferability</Links.EL>. */}

                {/* <p>The UK.GOV website scores options on a sliding scale:</p>

                <blockquote cite='https://www.gov.uk/government/publications/data-ethics-framework/data-ethics-framework-2020'>
                    <ul>
                        <li>0 means public benefit and user need are not clearly defined or understood</li>
                        <li>5 means public benefit and user need are well defined and understood by all team member</li>
                    </ul>
                </blockquote>
                <cite><Links.EL link={{source:'https://www.gov.uk/government/publications/data-ethics-framework/data-ethics-framework-2020'}}>Data Ethics Framework | UK Government</Links.EL></cite> */}

                <p>If we cannot reach a decision, or vote against it, we place it in <em>quarantine</em>. We also do this if we cannot gauge the impact of our decision. This honours one of our key, organisational pledges:</p>

                <blockquote>
                    We pledge not to break a pledge if we are ignorant of the consequences.
                </blockquote>

                <p>What quarantine looks like is up to you. We either label or tag our decision, or card, or place it in a quarantine bucket or list.</p>

                <p>If we are in agreement, we are ready to put our decision into effect.</p>

                <h4>7. Making decisions</h4>

                <p>We decided against using <Links.EL link={{source:'https://analytics.google.com/analytics/'}}>Google Analytics</Links.EL> for tracking users because whilst free, it profits from user data, and against <Links.EL link={{source:"https://www.discourse.org/"}}>Discourse</Links.EL> because it is too expensive.</p>

                <p>For the RTW website we selected <Links.EL link={{source:"https://docs.github.com/en/discussions"}}>GitHub Discussions</Links.EL> as the forum for discussion and questions. This forum does not allow for anonymous comments (you have to create an account), and may put off users who feel it is too tech-oriented. However, it is free, well maintained, easy to set up and run, and does not commit us. At this stage we are looking for people or companies interested in adopting or trialling Pledge Works - they are likely to be familiar with GitHub, and already have an account. We will implement GitHub Discussions.</p>

                <p><Links.EL link={{source:"https://plausible.io/"}}>Plausible</Links.EL> is the best candidate for analytics but we will wait to see if we really need it. We place Plausible in quarantine.</p>

                <h3>Conclusion</h3>

                <p>The version of Pledge Works described here fits with traditional agile software development. From the Pledge Works <Links.EL link={{source:"/pledge-works/inventory"}}>inventory</Links.EL> we used <em>Writing pledges, The decision matrix, and Voting</em>.</p>

                <p>We recommend using only the parts of Pledge Works you find helpful. There are no hard and fast naming conventions, or strict rules; Pledge Works is not a prescriptive practice. Start with barebones Pledge Works and adopt more of it as necessary.</p>

                {/* <h3>Organisational and role-based pledges</h3>

                <p>There is a set of pledges on our website. We refer to these, and principles, promises, oaths and professional codes from many sources, when creating concrete pledges for a project or task. These pledges act as a baseline, a core set of pledges that we must all adhere to.</p>

                <p>None of us at RTW are members of an institute or body; we are not professionals. But we are cognisant of the codes of conduct laid out by professional bodies in our field, and we act, we hope, in a professional manner. These codes permeate our organisation and are the foundation for role-based pledges. We have a library of role-based pledges relevant to many software projects which reflect our backgrounds in programming and design.</p>

                <p>We have added pledges for other roles based on our research but we would be glad of help in refining and adding to them.</p>

                <p>Role-based pledges reveal interests, duties and biases. They also have a practical function - a discussion between representatives is generally easier than one between individuals.</p>
 */}
                <h3>Why we practice Pledge Works</h3>

                <p>Pledge Works is a tool for collaboration that favours ideas over individuals. We use Pledge Works to give weight to our principles by making pledges that affect our day to day work. Our pledges challenge us to address awkward questions that we might prefer to sideline. As a result, we feel better about our decisions, and put into effect more robust solutions.</p>

                <p>
                    See a <Links.EL link={{source:"/pledge-works/case-study-startup"}}>case study</Links.EL> for using Pledge Works at a startup.
                </p>

                <Links.ExternalLinksList links={perfLinks} />   

            </section>            
            <section>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'ethics',text:'Ethical web development'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Introduction;