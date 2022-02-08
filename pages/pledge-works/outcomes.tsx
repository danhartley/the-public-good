import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Top from 'components/top/top';
import Appendix from 'pages/pledge-works/appendix';

import styles from 'pages/pages.module.scss';

const Outcomes = () => {

    const externalLinks = [
        {
            "name": "W3C Web Accessibility Initiative WAI",
            "source": "https://www.w3.org/WAI/"
        },
        {
            "name": "The Newsroom Beta | Chrome extension",
            "source": "https://chrome.google.com/webstore/detail/the-newsroom-beta/pgfokhpgehbmeifbpdhegfnpaahabfja"
        },
    ]

    return (
        <>
            <Layout header="Outcomes"  rt="4 to 5" title="Outcomes" description={'Outcomes: What they are and how to get them.'} discussions='/categories/pledge-works'> {/* image? */}
                <section>
                    <h2>Simply better.</h2>

                    <p>As a collaborator at RTW I commit to <q cite="https://docs.google.com/spreadsheets/d/e/2PACX-1vSZcoudvThs0sZU-L87_ylopljM5Gh3Mq66KcWOvFK0gQ3G8krcxwR7TpvoGWkyKH6comq3xG1AR7-p/pubhtml?gid=232094584&single=true">Respect people I build products for and treat them as friends, not users.</q></p>

                    <p>When I start a new piece of work, and as requirements become clearer, I write pledges that are increasingly specific. I stop when the consequences of a decision can be verified or measured.</p>

                    <figure>
                        <ul>
                            <li>- Respect people I build products for and treat them as friends, not users.</li>
                            <ul>
                                <li>- We pledge not to sell, exchange or exploit user data.</li>
                                <ul>
                                    <li>- No cross-site or cross-device tracking.</li>
                                </ul>
                            </ul>
                        </ul>
                        <figcaption><em>The cascade of pledges: how to choose a website analytics provider.</em></figcaption>
                    </figure>

                    <p>The wording is less important than matching the statement to the situation or scope.</p>

                    <figure>
                        <ul>
                            <li>- Organisational principles.</li>
                            <ul>
                                <li>- Project pledges.</li>
                                <ul>
                                    <li>- Verifiable outcomes.</li>
                                </ul>
                            </ul>
                        </ul>
                        <figcaption><em>The cascade of pledges: increasingly concrete.</em></figcaption>
                    </figure>

                    {/* <p>We cannot know that the work we do is good. There are no scales that cannot be tilted in our favour. We can compare what we do against what we have done, and judge whether the outcome is better.</p>

                    <p><em>I call for a new law banning exhaust pipes, compelling vehicle manufacturers to vent all combustion fumes inside the vehicle.</em><span class={styles.super}><a href="#downstream">+</a></span></p>
                    <p>The proposal sounds a little crazy. But is it fair that the owner of a vehicle is uniquely shielded against polluting emissions from which they alone benefit?</p>
                    <p>Had such a law existed in the early twentieth century <Links.EL link={{source:"https://en.wikipedia.org/wiki/History_of_the_electric_vehicle"}}>electric vehicles</Links.EL> might have prospered sooner. The regulations that engineers at Volkswagen <Links.EL link={{source:"https://www.nature.com/articles/nature.2015.18426"}}> circumvented</Links.EL> would not have been necessary.</p>
                    <blockquote cite="http://www.gender-curricula.com/fileadmin/media/media-curricula/Dateien__PDF_/VDI_ethical_standards.pdf">
                        <div>In cases of conflicting values, engineers give priority: – to the values of humanity over the dynamics of nature, – to issues of human rights over technology implementation and exploitation, – to public welfare over private interests, and – to safety and security over functionality and profitability of their technical solutions. Engineers, however, are careful not to adopt such criteria or indicators in any dogmatic manner. They seek public dialogue in order to find acceptable balance and consensus concerning these conflicting values.</div>
                    </blockquote>
                    <cite><Links.EL link={{source:"http://www.gender-curricula.com/fileadmin/media/media-curricula/Dateien__PDF_/VDI_ethical_standards.pdf"}}>Fundamentals of Engineering Ethics PDF | VDI (Association of German Engineers) </Links.EL> </cite>

                    <h3>Doing harm</h3>
                    <p>There is a cost in acting illegally; to people, to society, to the environment, and sometimes to the organisation or company responsible. Bad actors avoid or shift the blame, and the cost. A society is weak or strong relative to its respect of the principle of equality before the law.</p>
                    <p>Illegal activity will most likely be unethical. Unethical behaviour is a free-for-all. We must decide what we think is right and act accordingly.</p>
                    <h3>Doing good</h3>
                    <p>I don't know if I do work that is ethically good. I have no reliable measure, no scales that do not tilt in my favour. Instead I judge my work against previous work, subject it to scrutiny, and hope I'm being honest.</p>                    
                    <p>There are tools I use to rate my efforts<span class={styles.super}><a href="#tools">++</a></span>. As a web developer I aim to create websites that use the least amount of resources. One of these is Google's <Links.EL link={{source:"https://developers.google.com/web/tools/lighthouse"}}>Lighthouse</Links.EL> which grades a website in a number of categories including performance (speed), best practices and accessibility. </p>
                    <p>Lightouse says nothing about content.</p>
                    <h4>Pledge Works</h4>
                    <p>We use Pledge Works to act in accordance with our principles. This may be easier to do at work because we already have systems and processes in place that govern and orchestrate our work and our relations to others.</p> */}

                    <h4>The future of outcomes</h4>

                    <blockquote cite="https://nissenbaum.tech.cornell.edu/papers/Wiener.pdf">
                        We had better be quite sure that the purpose put into the machine is the purpose which we really desire.
                    </blockquote>
                    <cite>Norbert Wiener | <Links.EL link={{source:"https://nissenbaum.tech.cornell.edu/papers/Wiener.pdf"}}>Some Moral and Technical Consequences of Automation</Links.EL> (PDF)</cite>

                    <p>Designing outcomes may soon be our primary concern. I don't mean by this that machines will replace designers and developers and all those responsible for making things - though this may happen too - but that how we originate and execute ideas will challenge.</p>
                    <p>Despite our presentations and protestations most ideas get off the ground simply because we want them to. The business plan is secondary. But if the execution of idea is theoretically perfect what happens to desire?</p>

                    <p>There are ventures that start from need rather desire. Community initiatives and resistance movements come into being in order to resist external forces, and only later, if at all, introduce standard ways of doing things.</p>
                    
                    <h4>Accessibility</h4>
                    <p>Guidelines for web content accessibility are set out by the W3C which oversees web standards. These guidelines have made it into law but coverage is patchy.</p>
                    <p>
                        Accessibility legislation supports the right of  We all benefit from clearer text, readable fonts,  and consistency in HTML 
                    </p>
                    <h3>Doing better</h3>
                    <p>As I was writing this piece a colleague at RTW brought to my attention an <Links.EL link={{source:"https://axbom.com/embed-youtube-videos-without-cookies/"}}>article</Links.EL> critical of a trick to get around the EU law governing user data and privacy (<Links.EL link={{source:"https://gdpr-info.eu/"}}>GDPR</Links.EL>). I realised I was using that trick on an another website. So I decided to <Links.IL link={{source:"pledge-works/gdpr-compliance"}}>fix the problem</Links.IL>.</p>
                    <section>
                        <div id="downstream">This statement is adapted from Edward de Bono's <Links.EL link={{source:"https://en.wikipedia.org/wiki/Lateral_thinking"}}>provocation</Links.EL> : "the factory is downstream of itself".</div>
                        <div id="tools"><span class={styles.super}>+</span> See <Links.IL link={{source:"performance"}}>Performance</Links.IL>, <Links.IL link={{source:"accessibility"}}>Accessibility</Links.IL>, and <Links.IL link={{source:"sustainability"}}>Sustainability</Links.IL>.</div>
                    </section>
                    <Top></Top>
                </section> 
                <Appendix></Appendix>
                <section>
                    <h2>External Links</h2>
                    <Links.ExternalLinksList links={externalLinks} />
                </section>
                <Links.RelatedLinks links={[{value:'pledge-works/introduction',text:'Introduction to Pledge Works'}, {value:'pledge-works/inventory', text:'Pledge Works Inventory'}]}></Links.RelatedLinks>
            </Layout>           
        </>
    );
};

export default Outcomes;