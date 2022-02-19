import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Top from 'components/top/top';
import Appendix from 'pages/pledge-works/appendix';
import Concrete from 'pages/pledge-works/figures/cascade-of-pledges-concrete';
import Abstract from 'pages/pledge-works/figures/cascade-of-pledges-abstract';

import styles from 'pages/pages.module.scss';

const Argument = () => {

    const externalLinks = [
        {
            "name": "Our Common AI Future | Professor Francesco Lapenta & Mozilla Foundation",
            "source": "https://dataethics.eu/our-common-ai-future/"
        },
        
    ];

    return (
        <>
            <Layout header="Ethics at work"  rt="3" title="Ethics at work" description={'It is impossible to defend ethical behaviour on economic grounds; nor is it necessary.'} discussions='/categories/pledge-works'> {/* image? */}
                <section>
                    <h2>It is not possible to defend ethical behaviour on economic grounds; nor is it necessary.</h2>
                    <p>The workplace is a surprisingly welcoming place for ethics. Businesses have processes which can readily be broadened to include an ethical dimension, and consideration of risk, outcomes, unintended consequences, and reputational value are commonplace.</p>
                    <p>Ethical thinking requires imagination, planning, discussion, and open mindedness. It is understandable that some will downplay ethics as inimical to doing business, and as detrimental to profits.</p>
                    <p>Sometimes ethics will cost business, but most business is lost for want of ideas, people and ability.</p>
                    <p>A lot of work time is spent getting, or trying to get, things done. It is tempting to think less and do more. Advocates for this kind of practice in the tech industry call this behaviour disruptive.</p>
                    <p>If predictions of widespread AI are accurate we will soon have plenty of time to think about the outcomes we want while the machines will figure out how to get there.</p>
                    <h3>The alignment problem</h3>
                    <p>After wishing for two hundred pounds on a bewitched monkey's paw, a couple receive the news of their son's death in a work accident.</p>
                    <blockquote cite="https://www.sfu.ca/~swartz/monkeys_paw.htm">
                    <div>I was to say that Maw and Meggins disclaim all responsibility," continued the other. "They admit no liability at all, but in consideration of your son's services, they wish to present you with a certain sum as compensation.</div>
                    <div>Mr. White dropped his wife's hand, and rising to his feet, gazed with a look of horror at his visitor. His dry lips shaped the words,"How much?"</div>
                    <div>"Two hundred pounds," was the answer.</div>
                    <div>Unconscious of his wife's shriek, the old man smiled faintly, put out his hands like a sightless man, and dropped, a senseless heap, to the floor.</div>
                    </blockquote>
                    <cite><Links.EL link={{source:"https://www.sfu.ca/~swartz/monkeys_paw.htm"}}>The Monkey's Paw by W. W. Jacobs</Links.EL></cite>
                    <p>The solution to a problem solved by AI sits in a black box. Even when we have access to its inner workings, the speed with which information is processed and it's inhuman logic defeat our attempts to understand what is happening.</p>
                    <blockquote cite="https://nissenbaum.tech.cornell.edu/papers/Wiener.pdf">
                        We had better be quite sure that the purpose put into the machine is the purpose which we really desire.
                    </blockquote>
                    <cite>Norbert Wiener | <Links.EL link={{source:"https://nissenbaum.tech.cornell.edu/papers/Wiener.pdf"}}>Some Moral and Technical Consequences of Automation</Links.EL> (PDF)</cite>
                    <p>Efforts are being made to solve the <Links.EL link={{source:"https://www.science.org/content/article/how-ai-detectives-are-cracking-open-black-box-deep-learning"}}>interpretability problem</Links.EL>; in the meantime we must look to our desires.</p>
                    <h3>The ethical ratchet</h3>
                    <p>Ethical questions are often difficult to answer because their frame of reference is vague and cause and effect is unclear. Where there is doubt and uncertainty it is appealing to do nothing.</p>
                    <p>We can move from one ethical position to the next, at each stage providing more detail in a cascade of inherited statements.</p>
                    <Abstract></Abstract>
                    <p>As we proceed, we learn more of the problem domain and commit ourselves further. The pledges perform the role of ethical teeth that prevent us from backsliding.</p>
                    <Concrete></Concrete>
                    <p>Pledge Works is a loosely configured set of methods, processes and tools designed to ally moral intent with organisational and project requirements.</p>
                    <p><Links.IL link={{source:"pledge-works/case-study-pledge-works"}}>Pledge Works</Links.IL>.</p>
                    <Top></Top>
                </section>
                <Appendix></Appendix>
                <section>
                    <h2>External Links</h2>
                    <Links.ExternalLinksList links={externalLinks} />
                </section>
                <Links.RelatedLinks links={[{value:'pledge-works/case-study-pledge-works',text:'Pledge Works for Pledge Works'}, {value:'pledge-works/case-study-startup', text:'Pledge Works for Startups'}, {value:'pledge-works/inventory', text:'Pledge Works Inventory'}]}></Links.RelatedLinks>
            </Layout>
        </>
    )
};

export default Argument;