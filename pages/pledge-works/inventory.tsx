import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Top from 'components/top/top';
import Appendix from 'pages/pledge-works/appendix';
import CascadeOfPledges from 'pages/pledge-works/figures/cascade-of-pledges';

import styles from 'pages/pages.module.scss';

const Inventory = () => {

    const externalLinks = [
        {
            "name": "Project Accessibility Checklist | A11Y",
            "source": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCK9RfdPzVm9kUyZwnkR1W3hD79dk8U5JS1XymFPkFejpFPGRkWqlLL8RKO8sAOXrS4h2VzDOnQ7-Q/pub?gid=20001175&single=true&output=pdf"
        },
        {
            "name": "Front-End Performance Checklist | Smashing Magazine",
            "source": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCK9RfdPzVm9kUyZwnkR1W3hD79dk8U5JS1XymFPkFejpFPGRkWqlLL8RKO8sAOXrS4h2VzDOnQ7-Q/pub?gid=344266283&single=true&output=pdf"
        },
        {
            "name": "An Ethical Toolkit for Engineering/Design Practice | Markkula Center for Applied Ethics",
            "source": "https://www.scu.edu/ethics-in-technology-practice/ethical-toolkit/"
        },
    ];

    return (
        <Layout header="Pledge Works Inventory" rt="4 to 5" title="Pledge Works Inventory" description={'Pledge Works: The good parts.'} discussions='/categories/pledge-works'> {/* image? */}            
            <section>
                <h2>A list of things and how to use them.</h2>
                <p>I look at the parts of Pledge Works in more depth with examples of how we use them.</p>
                <h3>Decision matrix or pledge checklist?</h3>
                <p>A <strong>decision matrix</strong> is suitable when you are choosing between two or more candidates, such as between analytics or discussion services, hardware or software products, or programming languages and frameworks.</p>
                <blockquote>
                    <ul class={styles.dashedItemsList}>
                        <li>Should we use React, Preact, Angular or Vanilla JavaScript for this project?</li>
                        <li>Should we use Google Analytics or Plausible?</li>
                    </ul>
                </blockquote>
                <p>You can also use a decision matrix to choose between strategies. Do you want to target a small number of large clients, or everyone? These are questions you'd want to answer yes to.</p>
                <blockquote>
                    <ul class={styles.dashedItemsList}>
                        <li>Do we have the resources for this strategy?</li>
                        <li>Can we recruit and train the necessary staff?</li>
                        <li>Will we be able to retain our existing clients?</li>
                        <li>Does this benefit us and our customers?</li>
                    </ul>
                </blockquote>
                <p>A <strong>pledge checklist</strong> helps you live up to your pledges when you create things. If you are building a website, you want its content to be accessible to everyone, and to avoid upsetting people.</p>
                <blockquote>
                    <ul class={styles.unorderedList}>
                        <li><div><input id="c" type='checkbox'></input><label htmlFor="c">Use plain language and avoid figures of speech, idioms, and complicated metaphors.</label></div></li>
                        <li><div><input id="b" type='checkbox'></input><label htmlFor="b">Check the contrast for all normal-sized text</label></div></li>
                        <li><div><input id="a" type='checkbox'></input><label htmlFor="a">Make sure that media does not autoplay</label></div></li>
                    </ul>
                </blockquote>
                <p>Sometimes there are shortcuts. The <Links.EL link={{source:"https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter"}}>axe Accessibility Linter</Links.EL> automatically checks for code that breaks its accessibility rules. They've also created a <Links.EL link={{source:"https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US"}}>Chrome extension</Links.EL>.</p>
                <h3>Writing pledges</h3>     
                <p>We write pledges that force us to make decisions. If a pledge is too vague, we write one that is more specific.</p>
                <blockquote>
                We pledge to have a net positive effect on people and the planet.
                </blockquote>
                <p>Is a good starting point for an organisation but too general when developing new features, so</p>
                <blockquote>
                    We pledge not to use practices identified as dark patterns.
                </blockquote>
                <p>
                    The second pledge honours the first and makes clear what we won't be doing.
                </p>
                <p>
                    Pledges are more effective when they are written with a specific context in mind. They can be organisational, applying to everything and everyone, or apply to a single piece of work however small.
                </p>
                <p>When I start a new piece of work, and as requirements become clearer, I write pledges that are increasingly specific. I stop when the consequences of a decision can be verified or measured.</p>

                <CascadeOfPledges.Concrete></CascadeOfPledges.Concrete>

                <p>The wording is less important than matching the statement to the situation or scope.</p>

                <CascadeOfPledges.Abstract></CascadeOfPledges.Abstract>
                
                <h4>Pledge sources</h4>
                <p>Writing our own pledges gives us less wriggle room. We find it hard to ignore what we have committed to. But we look around for inspiration.</p>
                <p>There are many sources, from professional codes of conduct through oaths, pledges, and promises, to manifestos. RTW has its own list of <Links.EL link={{source:"https://responsibletech.work/responsible-pledges/"}}>pledges</Links.EL>.</p>
                <p>We maintain a list of <Links.EL link={{source:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSZcoudvThs0sZU-L87_ylopljM5Gh3Mq66KcWOvFK0gQ3G8krcxwR7TpvoGWkyKH6comq3xG1AR7-p/pubhtml?gid=1753280922&single=true"}}>public declarations</Links.EL>.</p>
                <h4>Role-based pledges</h4>
                <p>Looking at ethical questions from a professional standpoint is productive. People working in PR, HR, development, design, management, and analytics have different responsibilities and concerns. Pledges written with a specific role in mind are relevant to everyone. When it comes to making decisions they have equal weight.</p>
                <p>Role-based pledges can be reused from place to place, and if you are at an organisation that is not open to addressing ethical questions, outside support from peers may help.</p>
                <h4>Democracy at work</h4>
                <p>We favour a democratic approach to ethical oversight. The more perspectives we include the less likely we are to make mistakes and incur risk.</p>
                <p>Pledges that challenge unethical behaviour are best written by the people that must honour them. We write pledges as individuals, teams, professionals, and organisations, then hold ourselves accountable. If we fail, we do so openly and honestly.</p>
                <p>Decisions can be reached quickly with or without a decision matrix or pledge checklist. When pledges are broken, or when there is no clear course of action, voting determines what happens next.</p>
                <p>Implicit in a pledge is why it should not be broken. It should be clear to people why <Links.EL link={{source:"https://www.darkpatterns.org/"}}>dark patterns</Links.EL> in website design are unethical. But where there is doubt or uncertainty, add links or an explicit reason.</p>
                <blockquote>
                    We pledge not to use practices identified as dark patterns <em><strong>because they are dishonest, disrespect users, and may be harmful</strong></em>.
                </blockquote>
                <h4>Voting</h4>
                <p>In agile software development teams allocate time to review recent work. Some use retrospectives to look at how things have been done, and what could be improved. Both reviews and retrospectives use voting to canvas opinion.</p>
                <p>In Behaviour Driven Development - a form of agile development - everyone involved directly on a project discusses new products and features, and votes on them before ideas are implemented.</p>
                <p>Voting is often used by teams to estimate how long a piece of work will take.</p>
                <p>
                    <em>Where software teams have autonomy, voting is common.</em>                    
                </p>
                <p>A team using Pledge Works votes when a planned piece of work or decision breaks one of its pledges.</p>
                <p>This can happen at the outset of a project or after team members have reviewed a piece of work in detail using a pledge checklist or decision matrix. If the team has the authority, it can block a piece of work until the reason it breaks a pledge has been resolved. If it isn't clear what to do, the idea is put in quarantine.</p>
                <p>When the team is not the ultimate arbiter - and can be overruled - their objection is placed on record. The objection may lead to nothing, or to change. At the very least the team, and the individuals in it, have voiced their opinion.</p>
                <p><em>Voting on whether to accept work or plans that break pledges is an expression of the team's conscience.</em></p>
                <h4>Challenging</h4>
                <p>Software teams often consider edge cases. But there are classes of potential problems that are missed because it is impossible to imagine every context in which someone uses a product.</p>
                <p>We don't know the mistakes we are going to make, but we promise to address them. If you want to challenge any of our decisions please do so on our GitHub Discussions board.</p>
                <h4>Transparency</h4>
                <p>The Pledge Works team has pledged to be transparent by default. We will make public our decisions and how we reached them. If we don't, we will say why.</p>
                <p>Transparency is generally a good thing but individuals especially can be vulnerable to unfair criticism. Transparency should be approached with caution and offered, not expected.</p>
                <Top></Top>
            </section>
            <Appendix></Appendix>
            <section>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'pledge-works/the-case-for-pledge-works',text:'The Case for Pledge Works'},{value:'pledge-works/case-study-pledge-works',text:'Pledge Works for Pledge Works'}, {value:'pledge-works/case-study-startup', text:'Pledge Works for Startups'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Inventory;