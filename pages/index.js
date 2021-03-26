import Link from 'next/link';
import Layout from 'components/layout/layout';
import { Links } from 'components/links/Links';
import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <Layout title="Home" header={"Welcome"}>

        <section class={styles.card}>
            <h2>Always connect</h2>
            <p>Websites do not exist in isolation. I encourage you to leave: <a arai-label="Low-tech Magazine's solar-powered website" href="https://solar.lowtechmagazine.com/">A solar-powered website</a>, <a aria-label="The communal computer developed at Dynamicland" href="https://dynamicland.org/">A communal computer</a>, <a href="https://ourworldindata.org/time-use-living-conditions">The world's energy problem</a>, <a href="https://neumz.com/app/">Daily Gregorian Chant</a>, and <a aria-label="Link to the YouTube video, The Origin of the Elements, which does not have synchronized captioning" href="https://www.youtube.com/watch?v=ZJQjjBR6PbY&t=19s">The Origin of the Elements</a>.</p>
        </section>

        <section class={styles.card}>
            <h2>Be explicit</h2>

            <p>I believe our ability to mitigate the threats we pose to the planet depends on individual and collective action. As a web developer, I work to reduce our demand on energy resources.</p>

            <p>I will <span class={styles.internalLink}>
                        <Link href={'/services'}>
                            <a>help you</a>
                        </Link>
                      </span> to create a fast, safe, accessible website that uses minimal electricity to run.
            </p>            
        </section>

        <section class={styles.card}>
            <h2>Latest</h2>
            <Links.InternalLink link={{'value': 'carbonfootprint', 'text': 'Overview of carbon footprint calculators'}}></Links.InternalLink>
            <Links.InternalLink link={{'value': 'population', 'text': 'Population'}}></Links.InternalLink>
        </section>

        <section class={styles.card}>
            <h2>Architecture</h2>  
            <p>This website is an example of my approach to building websites. The <span class={styles.internalLink}><Link href={'/performance'}><a>Performance</a></Link></span>, <span class={styles.internalLink}><Link href={'/accessibility'}><a>Accessibility</a></Link></span> and <span class={styles.internalLink}><Link href={'/sustainability'}><a>Sustainability</a></Link></span> pages explain my thinking and link to external tests which can be used to measure performance and progress.</p>            
            <p>Sites that follow similar principles find ways to stand out without compromise. <a href="https://lowtechlab.org/fr">Le Low-tech Lab</a>, <a href="https://zerowastekoeln.de/">Zero Waste Cologne</a>, and <a href="https://heydonworks.com/">Heydownworks</a> have character, clear objectives and straightforward navigation.</p>
            <p class={styles.internalLink}>
                <ul class={styles.list}>
                    <li>
                        <Link href={'/architecture'}>
                            <a>Read more about architecture</a>
                        </Link>
                    </li>
                </ul>
            </p>
        </section>
        <section class={styles.card}>
            <h2>Performance</h2>
            <p>Having a <a aria-label="Mozilla Internet Health Report 2019 states that the slowest mobile broadband internet in the world is also the least affordable." href="https://internethealthreport.org/2019/the-worlds-slowest-internet-is-the-least-affordable/"> slow connection</a> is not unusual.</p>
            <p>Data can be expensive, <a aria-label="Our World in Data map showing that the cost of 1GB of mobile data as a percentage of income, is highest a spread of African countries." href="https://ourworldindata.org/grapher/cost-of-1gb-of-mobile-data?region=World">especially in countries where only mobile connectivity is available</a>.</p>
            <p>Poor design <a aria-label="WebKit guidelines for developers on how to minimise mobile and laptop energy use." href ="https://webkit.org/blog/8970/how-web-content-can-affect-power-usage/">runs down batteries</a>, and too many websites are <a href="https://www.nngroup.com/articles/the-need-for-speed">too slow</a>.</p>
            <p>When you waste people's time, <a href="https://developer.mozilla.org/en-US/docs/Learn/Performance/why_web_performance">they don't hang around.</a></p>
            <p><a href="https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/">It takes 0.05 seconds to form an opinion.</a></p>
            <p class={styles.internalLink}>
                <ul class={styles.list}>
                    <li>
                        <Link href={'/performance'}>
                            <a>Performance testing</a>
                        </Link>
                    </li>
                </ul>
            </p>
        </section>
        <section class={styles.card}>
            <h2>Accessibility</h2>
            <p>Using websites can be challenging <a href="https://developers.google.com/web/fundamentals/accessibility">for many reasons</a>.</p>
            <p><a href="https://web.dev/load-faster-like-proxx/">Not all phones are smart</a>.</p>
            <p class={styles.internalLink}>
                <ul class={styles.list}>
                    <li>
                        <Link href={'/accessibility'}>
                            <a>Accessibility testing</a>
                        </Link>
                    </li>
                </ul>                
            </p>
        </section>
        <section class={styles.card}>
            <h2>Sustainability</h2>
            <p>There is a <a href="https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix"> cost in emissions</a> for every page.</p>
            <p class={styles.internalLink}>
                <ul class={styles.list}>
                    <li>
                        <Link href={'/sustainability'}>
                            <a>Sustainability testing</a>
                        </Link>
                    </li>
                </ul>
            </p>
        </section>
    </Layout>
  )
}