import Links from 'components/links/Links';
import Layout from 'components/layout/layout';

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
    ];

    return (
        <Layout header="Pledge Works Inventory" title="Pledge Works Inventory" description={'Pledge Works: The good parts.'}> {/* image? */}            
            <section>
                <h2>A list of things and how to use them.</h2>
                <p>There is no right or wrong way to use Pledge Works. These are the methods we use, and some examples of how we use them.</p>
                <h3>Decision matrix or pledge checklist?</h3>
                <p>A <strong>decision matrix</strong> is suitable when you are choosing between two or more candidates, such as between analytics or discussion services, hardware or software products, or programming languages and frameworks.</p>
                <blockquote>
                    <div>Should we use React, Preact, Angular or Vanilla JavaScript for this project?</div>
                    <div>Should we use Google Analytics or Plausible?</div>
                </blockquote>
                <p>You can also use a decision matrix to choose between strategies. Do you want to target a small number of large clients, or everyone? These are questions you'd want to answer yes to.</p>
                <blockquote>
                    <ul>
                        <li>Do we have the resources for this strategy?</li>
                        <li>Can we recruit and train the necessary staff?</li>
                        <li>Will we be able to retain out existing clients?</li>
                        <li>Does this benefit us and our customers?</li>
                    </ul>
                </blockquote>
                <p>A <strong>pledge checklist</strong> helps you live up to your pledges when you create things. If you are building a website, you want its content to be accessible to everyone, and to avoid upsetting people.</p>
                <blockquote>
                    <div><input id="c" type='checkbox'></input><label htmlFor="c">Use plain language and avoid figures of speech, idioms, and complicated metaphors.</label></div>
                    <div><input id="b" type='checkbox'></input><label htmlFor="b">Check the contrast for all normal-sized text</label></div>
                    <div><input id="a" type='checkbox'></input><label htmlFor="a">Make sure that media does not autoplay</label></div>
                </blockquote>
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
                    Pledges are more effective when they are written with a specific context in mind. They can be organisational, applying to everything and everyone, or to a single piece of work however small.
                </p>
                <h4>Role-based pledges</h4>
                <p>We write role-based pledges from scratch and adapt others from ethical principles, professional codes of conduct, and best practices.</p>
                <p>They are highly portable and easily shared. If you are at an organisation that is not open to addressing ethical questions, introducing pledges will be tough, but outside support from peers may help.</p>
                <p>We maintain a list of <Links.EL link={{source:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSZcoudvThs0sZU-L87_ylopljM5Gh3Mq66KcWOvFK0gQ3G8krcxwR7TpvoGWkyKH6comq3xG1AR7-p/pubhtml?gid=1753280922&single=true"}}>public promises, oaths, pledges, manifestos, codes of conduct, and more</Links.EL>.</p>
            </section>
            <section>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
        </Layout>
    )
};

export default Inventory;