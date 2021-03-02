import Link from 'next/link';
import Layout from 'components/layout/layout';

import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <Layout title="Home" header={"Welcome"}>
        <div class={styles.grid}>
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
