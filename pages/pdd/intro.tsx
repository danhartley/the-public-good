import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const PDDIntro = () => {

    const perfLinks = [
        
    ];

    const externalLinks = [
        {
            "name": "Self-Review Questionnaire: Security and Privacy | W3C",
            "source": "https://www.w3.org/TR/security-privacy-questionnaire/"
        }
    ];

    return (
        <Layout header="Responsible Design & Development" title="Responsible Design & Development" description={'Responsible Design & Development'}> {/* image? */}            
            <section>

                <h2>Stress-testing ethical frameworks and sustainable initiatives.</h2>

                <h3>The inspiration for RD&D</h3>

                <p>The collaborators at <Links.EL link={{source:'https://responsibletech.work/'}}>ResponsibleTech.Work</Links.EL> wanted to engage with big problems in our day to day work.</p>

                <p>We wanted a method that was easy to explain, simple to execute, and that could work with existing philosophies, and practices widely used in software development  - but that required no tools or training.</p>

                <p>After a few months back and forth, research, experimentation, and weekly catch ups, we came up with an approach we call <strong>Responsible Design & Development</strong>.</p>

                <p>Rather than avoiding challenging questions, we look at the requirements of a new request through the lens of principles encoded in pledges.</p>

                <p><em>Pledges + Requirements = Decisions</em></p>

                <h3>Responsible Design & Development in practice</h3>

                <p>We created RD&D to solve a conundrum we face repeatedly in our work: how to act in accordance with our principles. Principles are general and abstract, work is specific and concrete.</p>

                <p>RD&D consists of 6 parts which we follow in order to get started, then move between as necessary.</p>

                <h4>1. Explaining the project</h4>

                <p>We are at a stage in the development of RD&D when we want to tell people about it, and receive feedback. As an open source project, we also need to keep down costs. These are our requests:</p>

                <blockquote cite='https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1882839689'>
                    <div>We want to add analytics to our site, and pay nothing, or very little.</div>
                    <cite><Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=137244074'}}>Decision Matrix - Analytics</Links.EL></cite>
                    <div>We want to add a discussion platform to our site, and pay nothing, or very little.</div>
                    <cite><Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=648158012'}}>Decision Matrix - Discussion Platform</Links.EL></cite>
                </blockquote>         

                <h4>2. Defining the scope</h4>

                <p>Defining the scope of a project is important in order to focus on pledges that are relevant, and which we can address directly in our solutions.</p>

                <p>Because we want to find out more about our users, and interact with them, data security and privacy will be key areas of concern.</p>

                <h4>3. Writing pledges</h4>

                <p>We write pledges specific to the project or task we are working on. We can also draw on existing pledges such as company or technical pledges. We will return to organisational and role-based pledges.</p>

                <p>Pledges can be added to and modified when we know more about the requirements and begin reviewing our solutions.</p>

                <p>We derive pledges from our own <Links.EL link={{source:'https://responsibletech.work/responsible-pledges/'}}>RTW pledges</Links.EL>, professional codes of conduct, manifestos, and any other principles and promises which are pertinent. We keep a <Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1317309901'}}>list</Links.EL> of these for reference.</p>

                <p>From the Sustainable Web Manifesto:</p>
                <blockquote cite='https://www.sustainablewebmanifesto.com/'>
                    The products and services we provide will be accessible, allow for the open exchange of information, and allow users to control their data.                    
                </blockquote>                
                <cite><Links.EL link={{source:'https://www.sustainablewebmanifesto.com/'}}>Sustainable Web Manifesto</Links.EL></cite>

                <p>We derive this pledge:</p>
                <blockquote cite=''>
                    <div>We pledge not to sell, exchange or exploit END USER data.</div>
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
                <cite><Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1294958642'}}>RTW Technical Pledges</Links.EL></cite>

                <p>We also draw on <Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1Am4eOdTEoro6xY0c-lr7iVm17V-zcJ1_hHsa8b-0wJk/edit#gid=1813580571'}}>ready-made pledges</Links.EL> common to all our projects.</p>

                <h4>4. Listing our requirements</h4>

                <p>Requirements are the detailed breakdown of the things we need to know and do to satisfy a request. For example, we need to know whether an analytics service provides support, offers self-hosting, and how accurate their data are.</p>

                <h4>5. Creating decision matrices</h4>

                <p>When there is a risk of breaking a pledge or pledges, we create a <em>decision matrix</em>, which we use to consider solutions against requirements and pledges.</p>

                <p>In addition to our initial requirements, we have requirements derived from pledges; once again we are matching principles to concrete issues. When can now order our list in terms of priority - items which are more important appear higher up - and give them an appropriately weighted score.</p>
            
                <p>The scores are a guide to our choice of solution.</p>

                <p><em>Pledges + Requirements = Decisions</em></p>

                <p>The decision matrix is an open document to which anyone can contribute; the aim is to capture essential requirements, and to flag anything which may cause us to break a pledge.</p>

                <p>If a decision leads to a pledge being broken, we vote on whether to accept it. This happens rarely and is sufficiently serious to warrant attention from the whole team.</p>

                <h4>6. Voting</h4>

                <p>Voting is warranted when the decision is made to break a pledge because shuould not be done lightly. Voting should be sufficiently rare to cause minimal disruption.</p>

                <p>In some cases there may be a good reason for breaking a pledge - we may be forced to break one pledge in favour of another. If that is the case we use other criteria to resolve the problem. We can evaluate alternative solutions in terms of their <Links.EL link={{source:'https://www.interaction-design.org/literature/article/from-prototype-to-product-ensuring-your-solution-is-feasible-and-viable'}}>desirability, feasibility, and viabilty</Links.EL> or <Links.EL link={{source:'https://www.mindtheproduct.com/socially-preferable-by-nathan-kinch/'}}>social preferability</Links.EL>.</p>

                <p>An alternate scoring from the UK.GOV website is to score options on a sliding scale:</p>

                <blockquote cite='https://www.gov.uk/government/publications/data-ethics-framework/data-ethics-framework-2020'>
                    <ul>
                        <li>0 means public benefit and user need are not clearly defined or understood</li>
                        <li>5 means public benefit and user need are well defined and understood by all team member</li>
                    </ul>
                </blockquote>
                <cite><Links.EL link={{source:'https://www.gov.uk/government/publications/data-ethics-framework/data-ethics-framework-2020'}}>Data Ethics Framework | UK Government</Links.EL></cite>

                <p>If we don't know the impact of a change, we wait until we do.</p>

                <h3>Our decisions</h3>

                <p>We have a reasoned list of requirements, a decision, and a verdict on whether we are honouring our pledge.</p>

                <p>We decide against using Google Analytics for tracking users because whilst free, it profits from user data, and against Discourse because it is too expensive.</p>

                <p>For the RTW website we selected GitHub Discussions as the forum for discussion and questions. This forum does not allow for anonymous comments (you have to create an account), and may put off users who feel it is too tech-oriented. However, it is free, well maintained, easy to set up and maintain, and does not commit us. At this stage we are looking for people or companies interested in adopting or trialling RD&D and they are likely to be familiar with GitHub and already have an account.</p>

                <p>Plausible is the best candidate for analytics but we will wait to see if we really need it.</p>

                <h4>Conclusions</h4>

                <p>The version of RD&D described here fits with traditional agile software development, and we've used all of its parts: principles and professional codes of conduct, project pledges, a decision matrix, and team voting.</p>

                <p>We recommend using only the parts of RD&D you find helpful. There are no hard and fast naming conventions, or strict rules; RD&D is not a prescriptive practice. Start with barebones RD&D and adopt more of it as necessary.</p>

                <h3>Organisational and role-based pledges</h3>

                <p>There is a set of pledges on our website. We refer to these, and principles, promises, oaths and professional codes from many sources, when creating concrete pledges for a project or task. These pledges act as a baseline, a core set of pledges that we must all adhere to.</p>

                <p>None of us at RTW are members of an institute or body; we are not professionals. But we are cognisant of the codes of conduct laid out by professional bodies in our field, and we act, we hope, in a professional manner. These codes permeate our organisation and are the foundation for role-based pledges. We have a library of role-based pledges relevant to many software projects which reflect our backgrounds in programming and design.</p>

                <p>We have added pledges for other roles based on our research but we would be glad of help in refining and adding to them.</p>

                <p>Role-based pledges reveal interests, duties and biases. They also have a practical function - a discussion between representatives is generally easier than one between individuals.</p>

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

export default PDDIntro;