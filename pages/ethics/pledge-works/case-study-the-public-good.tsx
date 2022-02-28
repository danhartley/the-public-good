import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Top from 'components/top/top';
import Appendix from 'pages/ethics/pledge-works/appendix';

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
            <Layout header="Ethics at work"  rt="2" title="Ethics at Work" description={'No grand plan required.'} discussions='/categories/pledge-works' image='https://live.staticflickr.com/65535/51895028558_9130a3402b_q_d.jpg'>
                <section>
                    <h2>Considering the consequence of my actions, and changing my behaviour accordingly, did not require a grand plan or overhaul of working practices.</h2>
                    <p>The workplace is an appropriate environment for applied ethics. We frequently consider risk, undesirable consequences, and competing outcomes. Processes exist to communicate, share information, save time, and measure progress.</p>
                    <p><strong>Pledge Works</strong> adapts these processes in return for outcomes that improve upon business as usual defaults.</p>
                    <p>The idea is simple; we write pledges that frame or guide our work in a given context. The context is everything related to the work needed doing, including the people responsible, the time and budget available, and the scope. Pledges need to have enough character to be meaningful without being dogmatic.</p>                    
                    <figure>
                        <div><img src="/pw-formula.png" alt="The Pledge Works Formula: values + context = Pledge Works" /></div>
                        <figcaption>
                            <div><em>The Pledge Works Formula: values + context = Pledge Works</em></div>
                        </figcaption>
                    </figure>
                    <h3>Getting started</h3>                
                    <p>To begin, it's enough to write pledges with a product or use case in mind. When I was considering which analytics service to use for this website, I read up on user rights and developer responsibilities.</p>
                    <p>I drew on two <Links.EL link={{source:"https://www.w3.org/2001/tag/doc/ethical-web-principles/"}}>W3C</Links.EL>  principles: <q>Security and privacy are essential</q> and <q>The web must enhance individuals' control and power</q> to write two pledges of my own:</p>
                    <ul class={styles.dashedItemsList}>
                        <li><strong>I pledge not to sell, exchange or exploit user data.</strong></li>
                        <li><strong>I pledge to balance privacy, security, and usability.</strong></li>
                    </ul>
                    <p>Pledge Works uses a decision matrix to compare different solutions to a problem. I thought this would be helpful, so I created an <Links.EL link={{source:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTGzyoiKqybpBObNoC0Z5Ex6obRb3uFY8AsoEakMF_nZUYZdc5o9jyxwrDdk5ok8Nup9hC8Va-M34HI/pubhtml?gid=137244074&single=true"}}>Analytics</Links.EL> decision matrix to compare providers. I decided to go with <Links.EL link={{source:"https://withcabin.com/"}}>Cabin</Links.EL>.</p>
                    <p></p>                    
                    <p>This exercise threw up a lot of legal, technical, and social issues which are relevant in other scenarios. I created a <Links.EL link={{source:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRCK9RfdPzVm9kUyZwnkR1W3hD79dk8U5JS1XymFPkFejpFPGRkWqlLL8RKO8sAOXrS4h2VzDOnQ7-Q/pubhtml?gid=1703010019&single=true"}}>pledge checklist</Links.EL> that I can reuse and edit later.</p>                    
                    <h3>The ethical ratchet</h3>                    
                    <p>Once I'd written a few pledges, I saw they formed a cascade, from high-level principles or pledges appropriate for a responsible project, to detailed pledges relevant to specific tasks. I found it straightforward to convert concrete pledges into requirements that lead to unambiguous actions.</p>
                    <h4>In general terms</h4>
                    <figure>
                        <ul class={styles.dashedItemsList}>
                            <li>Personal principles.</li>
                            <ul class={styles.dashedItemsList}>
                                <li>Project pledges.</li>
                                <ul class={styles.dashedItemsList}>
                                    <li>Verifiable actions.</li>
                                </ul>
                            </ul>
                        </ul>
                        <figcaption><em>The cascade of pledges: increasingly concrete.</em></figcaption>
                    </figure>                  
                    <h4>In specific terms</h4>
                    <figure>
                        <ul class={styles.dashedItemsList}>
                            <li>Security and privacy are essential.</li>
                            <ul class={styles.dashedItemsList}>
                                <li>I pledge not to sell, exchange or exploit user data.</li>
                                <ul class={styles.dashedItemsList}>
                                    <li>No cross-site or cross-device tracking.</li>
                                </ul>
                            </ul>
                        </ul>
                        <figcaption><em>The cascade of pledges: how to choose a website analytics provider.</em></figcaption>
                    </figure>
                    <p>Pledges perform the role of ethical teeth preventing me from backsliding. I first commit to pledges that are relevant to the scope or complexity of a problem or domain, and as I learn more, I add detail, in search of a still better outcome. </p>                    
                    <p><Links.IL link={{source:"pledge-works/case-study-pledge-works"}}>Pledge Works</Links.IL>.</p>
                    <Top></Top>
                </section>
                <Appendix></Appendix>
                <section>
                    <h2>External Links</h2>
                    <Links.ExternalLinksList links={externalLinks} />
                </section>
                <Links.RelatedLinks links={[{value:"https://responsibletech.work/", text:"Pledge Works Introduction (on RTW)"},{value:'ethics/pledge-works/case-study-pledge-works',text:'Pledge Works for Pledge Works'}, {value:'ethics/pledge-works/case-study-startup', text:'Pledge Works for Startups'}, {value:'ethics/pledge-works/inventory', text:'Pledge Works Inventory'}, {value:'ethics/pledge-works/pledges', text:'Pledges'},{value:'ethics', text:'Ethics'}]}></Links.RelatedLinks>
            </Layout>            
        </>
    )
};

export default Argument;