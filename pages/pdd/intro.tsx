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
        <Layout header="Introduction to Pledge Driven Development" title="An Introduction to Pledge Driven Development" description={'Introduction to Pledge Driven Development'}> {/* image? */}            
            <section>

                <h2>Promises, principles and highfalutin ideals typically have no place in the processes used to imagine, design and build websites and apps.</h2>

                <h3>The inspiration for PDD</h3>

                <p>We wanted to engage with big problems in our day to day work.</p>

                <p>We set about examining the everyday tools and processes used in development with an eye to making room for ethics. We wanted a method that was easy to explain, simple to execute, and that could be incorporated whole or partially into existing philosophies (waterfall, agile), methodologies (Scrum, Kanban), and practices (DDD, BDD, and TDD) - but that required no tools or training.</p>

                <p>After a few months back and forth, research, experimentation, and weekly catch ups, we came up with an approach we call <strong>Pledge Driven Development</strong>.</p>

                <p><em>Pledges + Requirements = Ethical solution</em></p>

                <h3>Pledge Driven Development in practice</h3>

                <p>At the outset of a project, we create a list of pledges which we derive from our own <Links.EL link={{source:'https://responsibletech.work/responsible-pledges/'}}>RTW pledges</Links.EL>, professional codes of conduct, manifestos, and any other principles and promises with which we are in agreement. We keep a <Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1317309901'}}>list</Links.EL> of these for reference.</p>

                <p>From this Sustainable Web Manifesto promise:</p>
                <blockquote cite='https://www.sustainablewebmanifesto.com/'>
                    The products and services we provide will be accessible, allow for the open exchange of information, and allow users to control their data.                    
                </blockquote>                
                <cite><Links.EL link={{source:'https://www.sustainablewebmanifesto.com/'}}>Sustainable Web Manifesto</Links.EL></cite>

                <p>We derived this project pledge:</p>
                <blockquote cite=''>
                    <div>We pledge not to sell, exchange or exploit END USER data.</div>
                </blockquote>

                <p>From the ACM code of conduct:</p>

                <blockquote cite='https://www.acm.org/code-of-ethics'>
                    <div>Give comprehensive and thorough evaluations of computer systems and their impacts, including analysis of possible risks.</div>
                    <div>Perform work only in areas of competence.</div>
                </blockquote>                
                <cite><Links.EL link={{source:'https://www.acm.org/code-of-ethics'}}>ACM Code of Ethics and Professional Conduct</Links.EL></cite>

                <p>We derived this project pledge:</p>
                <blockquote cite='https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1294958642'>
                    <div>We pledge not to undertake new work without first evaluating its cost.</div>
                </blockquote>
                <cite><Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1294958642'}}>RTW Technical Pledges</Links.EL></cite>

                <h4>Requirements</h4>

                <p>Pledges determine how we work, providing safeguards and encouragement to do what we do better.</p>

                <p>In order to promote PDD, we want to know more about visitors to our websites, and to offer a forum or comment section for feedback. As an open source project, we also need to keep down costs. Here is our mini marketing wishlist:</p>
                    
                <blockquote cite='https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1882839689'>
                    <div>We want to add analytics to our site, and pay nothing, or very little.</div>
                    <cite><Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=388559560'}}>Decision Matrix - Analytics</Links.EL></cite>
                    <div>We want to add a discussion platform to our site, and pay nothing, or very little.</div>
                    <cite><Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1WY--FcQeEikLxqWtvKdY_MYcd1Ukzvi0eN2Ufl_YHaY/edit#gid=1882839689'}}>Decision Matrix - Discussion Platform</Links.EL></cite>
                </blockquote>                                

                <p>How do we get what we want whilst honouring our pledge on user data, and not breaking our pledge to know the cost of new work (in this case self-hosting the services we need)?</p>

                <p>To reconcile our goals with our pledges, we use a <em>decision matrix</em>. We make certain our requirements don't break our pledges. When necessary we add details - a <em>pledge checklist</em> - to the pledge to help determine whether or not a requirement falls foul of the pledge.</p>
            
                <p>The sum of requirements and pledges is what we agree to do - our ethical solution.</p>

                <p><em>Pledges + Requirements = Ethical solution</em></p>

                <p>In our examples, we might decide that saving money is paramount, at the risk of breaking our pledges, or opt to do nothing. Since we as a team both created the wishlist and the pledges we are conducting a negotiation between our consciences - expressed in the form of pledges - and our goals.</p>

                <p>Oftentimes, the negotiation will occur between those in one department, such as marketing, requesting more data, and those responsible for obtaining it, such as the development team. Ethics may not play a part in the negotiation - there be may agreement on what is right and wrong - or those involved in the tradeoff may respond to a shared pledge in different ways.</p>

                <p>The decision matrix is an open document to which anyone can contribute; the aim is to capture essential requirements, and to flag any requirement which may cause us to break a pledge.</p>

                <p>If our decision leads to a pledge being broken, we vote on whether to accept it. This happens rarely and is sufficiently serious to warrant attention from the whole team.</p>

                {/* <p>The signficance of the vote is determined by the team, company, community, etc. A majority vote against could lead to us stalling, or scrapping a request for a new feature or product.</p> */}

                <p>Voting is warranted because the decision to break a pledge is serious, and should be sufficiently rare to introduce undue friction.</p>

                <p>In some cases there may be a good reason for breaking a pledge - we may be forced to break one pledge in favour of another. If that is the case we use other criteria to resolve the problem. We can asses its <Links.EL link={{source:'https://www.interaction-design.org/literature/article/from-prototype-to-product-ensuring-your-solution-is-feasible-and-viable'}}>desirability, feasibility, and viabilty</Links.EL> or <Links.EL link={{source:'https://www.mindtheproduct.com/socially-preferable-by-nathan-kinch/'}}>social preferability</Links.EL>.</p>

                <p>An alternate scoring from the UK.GOV website is to score the decision on a sliding scale:</p>

                <blockquote cite='https://www.gov.uk/government/publications/data-ethics-framework/data-ethics-framework-2020'>
                    <ul>
                        <li>0 means public benefit and user need are not clearly defined or understood</li>
                        <li>5 means public benefit and user need are well defined and understood by all team member</li>
                    </ul>
                </blockquote>
                <cite><Links.EL link={{source:'https://www.gov.uk/government/publications/data-ethics-framework/data-ethics-framework-2020'}}>Data Ethics Framework | UK Government</Links.EL></cite>

                <h3>Our decision</h3>

                <p>We have a reasoned list of requirements, a decision, and a verdict on whether we are honouring our pledge.</p>

                <p>We decide against using Google Analytics for tracking users, and against LinkedIn for our forum because whilst both are free, familiar, and popular they share user data. On the other hand, XXX and Discourse are too pricey for us.</p>

                <p>For the RTW website we selected GitHub Discussions as the forum for discussion and questions. This forum does not allow for anonymous comments (you have to create an account), and may put off users who feel it is too tech-oriented. However, it is free, well maintained, easy to set up and maintain, and does not commit us. At this stage we are looking for people or companies interested in adopting or trialling PDD and they are likely to be familiar with GitHub and already have an account.</p>

                <p>We don't need detailed analytics but it would be useful to know the number of visitors we get to the site, and which pages they view. RTW is currently only available in English but we would like to reach a wider audience, so user location is relevant.</p>

                <p>The version of PDD that we use fits with traditional agile software development, and we've used all of its parts: principles and professional codes of conduct, project pledges, a decision matrix, and team voting.</p>

                <p>We recommend using only the parts of PDD you find helpful. There are no hard and fast naming conventions, or strict rules; PDD is not a prescriptive practice. Start with barebones PDD and adopt more of it as necessary.</p>

                <h3>Role-based pledges</h3>

                <p>There is a set of pledges on our website. We refer to these, and principles, promises, oaths and professional codes from many sources, when creating concrete pledges for a project or task. These pledges act as a baseline, a core set of pledges that we must all adhere to.</p>

                <p>None of us at RTW are members of an institute or body; we are not professionals. But we are cognisant of the codes of conduct laid out by professional bodies in our field, and we act, we hope, in a professional manner. These codes permeate our organisation and are the foundation for role-based pledges. We have a library of role-based pledges relevant to many software projects which reflect our backgrounds in programming and design. We have added pledges for other roles based on our research but we would be glad of help in refining and adding to them.</p>

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