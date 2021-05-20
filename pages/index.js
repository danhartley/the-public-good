import Link from 'next/link';
import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <Layout title="Responsible web development" header="Responsible web development" description="Well-researched articles on responsible web development and the climate crisis.">

        <section class={styles.card}>
            <h2>Always connect</h2>
            <p>Websites do not exist in isolation. I encourage you to leave: <Links.ExternalLink link={{label:'Low-tech Magazine\'s solar-powered website', source:'https://solar.lowtechmagazine.com/'}}>A solar-powered website</Links.ExternalLink>, <Links.ExternalLink link={{label:'The communal computer developed at Dynamicland', source:'https://dynamicland.org/'}}>A communal computer</Links.ExternalLink>, <Links.ExternalLink link={{source:'https://ourworldindata.org/time-use-living-conditions'}}>The world's energy problem</Links.ExternalLink>, <Links.ExternalLink link={{source:'https://neumz.com/app/'}}>Daily Gregorian Chant</Links.ExternalLink>, and <Links.ExternalLink link={{label:'Link to the YouTube video, The Origin of the Elements, which does not have synchronized captioning', source:'https://www.youtube.com/watch?v=ZJQjjBR6PbY&t=19s'}}>The Origin of the Elements</Links.ExternalLink>.</p>
        </section>

        <section class={styles.card}>
            <h2>Be explicit</h2>

            <p>Our ability to mitigate the threats we pose to the planet depends on individual and collective action.</p>

            <p>I will <Links.InternalLink link={{source:'services'}}>help you</Links.InternalLink><span class={styles.internalLink}></span> create fast, accessible and secure websites.</p>

            <p>I write about the climate crisis and responsible web development.</p>

        </section>

        <section class={styles.card}>
            <h2>Climate crisis</h2>
            
            <Links.InternalLinkBlock link={{'value': 'climate-crisis/carbon-element-of-life', 'text': 'Carbon - element of life'}}></Links.InternalLinkBlock>
            <Links.InternalLinkBlock link={{'value': 'climate-crisis/hydrogen-a-singular-atom', 'text': 'Hydrogen - a singular atom'}}></Links.InternalLinkBlock>
            <Links.InternalLinkBlock link={{'value': 'climate-crisis/turning-the-lights-out-on-fossil-fuels', 'text': 'Turning the lights out on fossil fuels'}}></Links.InternalLinkBlock>
            <Links.InternalLinkBlock link={{'value': 'climate-crisis/will-people-or-policies-save-the-planet', 'text': 'Will people or policies save the planet?'}}></Links.InternalLinkBlock>
            <Links.InternalLinkBlock link={{'value': 'climate-crisis/the-problem-of-population', 'text': 'The problem of population'}}></Links.InternalLinkBlock>
        </section>

        <section class={styles.card}>

            <h2>Web development</h2>
            <Links.InternalLinkBlock link={{'value': 'web-development/following-the-rules-to-a-well-structured-web-page', 'text': 'Following the rules to a well-structured web page'}}></Links.InternalLinkBlock>
            <Links.InternalLinkBlock link={{'value': 'web-development/well-designed-hyperlinks', 'text': 'Well-designed hyperlinks'}}></Links.InternalLinkBlock>

            <p>I specialise in three areas: performance, accessibility, and sustainability.</p>

            <h3>Performance</h3>
            <p>Having a <Links.ExternalLink link={{label:'Mozilla Internet Health Report 2019 states that the slowest mobile broadband internet in the world is also the least affordable', source:'https://internethealthreport.org/2019/the-worlds-slowest-internet-is-the-least-affordable/'}}>slow connection</Links.ExternalLink> is not unusual.</p>
            <p>Data can be expensive, <Links.ExternalLink link={{label:'Our World in Data map showing that the cost of 1GB of mobile data as a percentage of income, is highest a spread of African countries', source:'https://ourworldindata.org/grapher/cost-of-1gb-of-mobile-data?region=World'}}>especially in countries where only mobile connectivity is available</Links.ExternalLink>.</p>
            <p>Poor design <Links.ExternalLink link={{label:'WebKit guidelines for developers on how to minimise mobile and laptop energy use', source:'https://webkit.org/blog/8970/how-web-content-can-affect-power-usage/'}}>runs down batteries</Links.ExternalLink>, and too many websites are <Links.ExternalLink link={{source:'https://www.nngroup.com/articles/the-need-for-speed'}}>too slow</Links.ExternalLink>.</p>
            <p>When you waste people's time, <Links.ExternalLink link={{source:'https://developer.mozilla.org/en-US/docs/Learn/Performance/why_web_performance'}}>they don't hang around</Links.ExternalLink>.</p>
            <p><Links.ExternalLink link={{source:'https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/'}}>It takes 0.05 seconds to form an opinion</Links.ExternalLink>.</p>

            <p><Links.InternalLink link={{source:'performance'}}>Read more about performance</Links.InternalLink></p>

            <h3>Accessibility</h3>
            <p>Using websites can be challenging <Links.ExternalLink link={{source:'https://developers.google.com/web/fundamentals/accessibility'}}>for many reasons</Links.ExternalLink>.</p>
            <p><Links.ExternalLink link={{source:'https://web.dev/load-faster-like-proxx/'}}>Not all phones are smart</Links.ExternalLink>.</p>
            
            <p><Links.InternalLink link={{source:'accessibility'}}>Read more about accessibility</Links.InternalLink></p>

            <h3>Sustainability</h3>
            <p>
                <div>There is a <Links.ExternalLink link={{source:'https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix'}}>cost in greenhouse gas emissions</Links.ExternalLink> for every page.</div>
            </p>

            <p><Links.InternalLink link={{source:'sustainability'}}>Read more about sustainability</Links.InternalLink></p>

        </section>
    </Layout>
  )
}
