import Link from 'next/link';
import Layout from 'components/layout/layout';

import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <Layout title="Home" header={"Welcome"}>
        <div class={styles.grid}>

            <section class={styles.blurb}>
                <h2>Approach</h2>  
                <p>This website adheres to four rules: it is fast; accessible to everyone; supports all devices; and functions on poor connections.</p>
                {/* Including the <a href="https://www.nokia.com/phones/en_int/nokia-3310">Nokia 3310</a>. */}
                <p>The architecture conforms to a set of approaches and tools called <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a>.</p>
                <p>It isn't a template because third party libraries and solutions change fast, and best practices change with them.</p>
                <p>The specifics of how this website was put together are detailed in <a href="A detailed, technical breakdown of the site">the breakdown.</a></p>
                <p>Sites that adhere to these principles find ways to stand out without compromising their principles. The design agency, <a href="https://www.advocatedesign.co.uk/index">Advocate</a>, <a href="https://solar.lowtechmagazine.com/">Low-tech Magazine</a>, and <a href="https://zerowastekoeln.de/">Zero Waste Cologne</a> have character. They are also relaxing to visit because they make their purpose clear, and discovery easy.</p>                

            </section>

            <section class={styles.card}>
                <h2>Web performance</h2>
                <p>Having a <a aria-label="Mozilla Internet Health Report 2019 states that the slowest mobile broadband internet in the world is also the least affordable." href="https://internethealthreport.org/2019/the-worlds-slowest-internet-is-the-least-affordable/"> slow connection</a> is not unusual.</p>
                <p>Data can be expensive, <a aria-label="Our World in Data map showing that the cost of 1GB of mobile data as a percentage of income, is highest a spread of African countries." href="https://ourworldindata.org/grapher/cost-of-1gb-of-mobile-data?region=World">especially in countries where only mobile connectivity is available</a>.</p>
                <p>Poor design <a aria-label="WebKit guidelines for developers on how to minimise mobile and laptop energy use." href ="https://webkit.org/blog/8970/how-web-content-can-affect-power-usage/">runs down batteries</a>.</p>
                <p>When you waste people's time, <a href="https://developer.mozilla.org/en-US/docs/Learn/Performance/why_web_performance">they don't hang around.</a></p>
                {/* <p>No one likes to be <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/">kept waiting</a>.</p> */}
                <p><a href="https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/">It takes 0.05 seconds to form an opinion.</a></p>
                <p class={styles.internalLink}>
                    <Link href={'/web-performance'}>
                        <a>Read more about web performance</a>
                    </Link>
                </p>
            </section>
            <section class={styles.card}>
                <h2>Accessibility</h2>
                <p>Using websites can be challenging <a href="https://developers.google.com/web/fundamentals/accessibility">for many reasons</a>.</p>
                <p><a href="https://web.dev/load-faster-like-proxx/">Not all phones are smart</a>.</p>
                <p class={styles.internalLink}>
                    <Link href={'/accessibility'}>
                        <a>Read more about accessibility</a>
                    </Link>
                </p>
            </section>
            <section class={styles.card}>
                <h2>Sustainability</h2>
                <p>There is a <a href="https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix"> cost in emissions</a> for every page.</p>
                <p class={styles.internalLink}>
                    <Link href={'/sustainability'}>
                        <a>Read more about sustainability</a>
                    </Link>
                </p>
            </section> 
        </div>            
    </Layout>
  )
}
