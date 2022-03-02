import Layout from 'components/layout/layout';
import Links from 'components/links/Links';

const externalLinks = [
    {
        "name": "W3C TAG Ethical Web Principles",
        "source": "https://www.w3.org/2001/tag/doc/ethical-web-principles/"
    },
    {
        "name": "W3C | Web Platform Design Principles",
        "source": "https://w3ctag.github.io/design-principles/"
    },
    {
        "name": "W3C | Self-Review Questionnaire: Security and Privacy",
        "source": "https://www.w3.org/TR/security-privacy-questionnaire/"
    },
    {
        "name": "Smashing Magazine | Using Ethics In Web Design",
        "source": "https://www.smashingmagazine.com/2018/03/using-ethics-in-web-design/"
    },
    {
        "name": "Ethical Web Development | Adam Scott",
        "source": "https://www.ethicalweb.org/"
    },
    {
        "name": "The Ethical Centre",
        "source": "https://ethics.org.au/"
    },
    {
        "name": "Data Ethics Framework | GOV.UK",
        "source": "https://www.gov.uk/government/publications/data-ethics-framework/data-ethics-framework-2020"
    },
    {
        "name": "ethical web dev  | European Digital Rights EDRi (PDF)",
        "source": "https://edri.org/our-work/ethical-web-dev-2/"
    },
    {
        "name": "Online Ethics Canvas",
        "source": "https://www.ethicscanvas.org/canvas/index.php"
    },
    {
        "name": "Ethics in the Software Development Process | Gogoll, Zuber et al (PDF)",
        "source": "https://arxiv.org/pdf/2011.03016.pdf"
    },
];

const Ethics = () => {
    return (
        <Layout header="Ethical web development" rt="3 to 4" title="Ethical web development" description={'Ethical web development'}>
                
            <section>
                <h2>The examined working life is worth living.                    
                </h2>
                <p>In economics, an <Links.EL link={{source:"https://en.wikipedia.org/wiki/Externality"}}>externality</Links.EL> is an indirect cost or benefit to an uninvolved third party that arises as an effect of another party's (or parties') activity.</p>
                <p>Negative externalities lead to problems. Pollution, rising carbon dioxide levels, and loss of biodiversity are negative externalities that have been repeatedly ignored and for which we must all pay.</p>
                <p>If I am to be someone who contributes positively to society, I must accept responsibility for unearthing the negative externalities that arise from my work, and prevent them.</p>
                <p>To do so, I need a set of values, a way of working conducive to ethics, and a means of evaluating outcomes.</p>
                <h3>Values</h3>                
                <p>In my field, software development, as in many others, there are Codes of Conduct (CoC) which enumerate a lot of good things about how I ought to behave professionally.</p>                
                <p>In their paper on ethics in software processes, <em>From Codes of Conduct to Ethical Deliberation</em>, Gogoll, Zuber et al. argue that these codes are not sufficient to guarantee ethical outcomes.</p>
                <blockquote cite="https://arxiv.org/pdf/2011.03016.pdf">
                    CoCs are difficult to use as normative guidelines for technical software development due to their underdetermined character. They may trigger behavior such as indifference or the cherry-picking of specific ethical values. Thus, they are of little immediate use during the software development processes.
                </blockquote>
                <cite><Links.EL link={{source:"https://arxiv.org/pdf/2011.03016.pdf"}}>From Codes of Conduct to Ethical Deliberation</Links.EL> (PDF)</cite>
                {/* <p>If not, <q>People usually choose the path of least resistance or the cheapest implementation</q> (ibid.)</p> */}
                <p>The authors conclude,</p>
                <blockquote cite="https://arxiv.org/pdf/2011.03016.pdf">
                …we suggest moving from a simple application of “ethical heuristics” to a point where we treat ethical thinking as a skill that has to be practiced and can be embedded deeply into the software development process. Consequently, ethical deliberation must not be limited to ethics councils, company advisory boards or other special committees. Rather, it needs to be practiced and shaped by the software developers who create and intricately understand the technical system.
                </blockquote>
                <cite><Links.EL link={{source:"https://arxiv.org/pdf/2011.03016.pdf"}}>Ibid.</Links.EL> (PDF)</cite>
                {/* <blockquote cite="https://www.gutenberg.org/files/1080/1080-h/1080-h.htm">
                I shall now therefore humbly propose my own thoughts, which I hope will not be liable to the least objection.                 
                </blockquote>
                <cite> <Links.EL link={{source:"https://www.gutenberg.org/files/1080/1080-h/1080-h.htm"}}>A Modest Proposal by Jonathan Swift</Links.EL> </cite> */}
                <p>They propose an approach called Ethical Deliberation in Agile Processes. An existing alternative is the open source project <Links.EL link={{source:"https://responsibletech.work/tools/development/pledge-works/"}}>Pledge Works</Links.EL>.</p>
                <h3>Pledge Works</h3>
                <p>Pledge Works is a response to the need for <q>a skill that has to be practiced and can be embedded deeply into the software development process.</q></p>
                <p>The Pledge Works' tagline is: <strong>writing pledges for better outcomes</strong>. What does this mean?</p>
                <h4>Context</h4>
                <p>Pledges express values in a given context. The context is what we want to do and the resources we have available. If the context is unspecified, the pledge will be vague, <q>Don't be evil.</q></p>
                <p>When the context imposes constraints - time, money, people - we need to learn how to adapt our values without watering them down. We must decide what kind of world we want in order to know whether our product favours it.</p>
                <p>Given a set of values, and a context, we write pledges.</p>
                <figure>
                    <div><img src="/pw-formula.png" alt="The Pledge Works Formula: values + context = Pledge Works" alt="Pledge Works formula: values + context = pledges. Values are drawn as a blue circle, context as a black square, and they combine into a purple square within a circle to illustrate the Pledge Works approach." /></div>
                    <figcaption>
                        <div><em>The Pledge Works Formula: values + context = Pledge Works</em></div>
                    </figcaption>
                </figure>
                <p>Ethical deliberation takes thought, discussion and time. Pledge writing can, and probably should, be introduced in an incremental, piecemeal way so as not to unnecessarily disrupt your work.</p>
                <h3>Outcomes</h3>
                <p>The payoff for our effort is an outcome that is at least as good as the business as usual default, if not better. Better outcomes, not perfect ones.</p>
                <p>I like to write lots of pledges. When I can't tell whether I've broken a pledge - when the outcome is unclear - I narrow the context. My preference is for pledges that read like requirements; given sufficient exposition, I can take the subjective sting out of the decision. This won't always be case but a purely value-based defence is my last resort.</p>
                <p>I hope to develop a more systematic approach to Pledge Works but for now I learn as I go along, and do a little better with each effort.</p>                
            </section>
            <section>
                <p>Pledge Works has guidance on how to get started and tools for writing and evaluating pledges, but it has no hard and fast rules. I've written a couple of simple case studies, one for <Links.IL link={{source:"ethics/pledge-works/case-study-the-public-good"}}>The Public Good</Links.IL>, the other for an imaginary <Links.IL link={{source:"ethics/pledge-works/case-study-startup"}}>Startup</Links.IL>, as examples of how I adapt Pledge Works.</p>
                <p><strong><em>Disclosure: I am a collaborator on Pledge Works. The flavour of Pledge Works I describe here is my own.</em></strong></p>
                {/* <p>I find it useful to express my values in the form of <Links.IL link={{source:"ethics/pledge-works/pledges"}}>pledges</Links.IL>. These tend to be more specific than principles.</p> */}
            </section>
            <section>
                <h2>Links to external references</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:"https://responsibletech.work/blog/2022/3/1/pledge-works-writing-pledges-for-better-outcomes/", text:"Writing Pledges for Better Outcomes"},{value:'ethics/pledge-works/case-study-the-public-good',text:'Pledge Works for The Public Good'},{value:'ethics/pledge-works/case-study-pledge-works',text:'Pledge Works for Pledge Works'},{value:'ethics/pledge-works/case-study-startup', text:'Pledge Works for Startups'}, {value:'ethics/pledge-works/inventory', text:'Pledge Works Inventory'},{value:'ethics/pledge-works/pledges', text:'Pledges'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Ethics;