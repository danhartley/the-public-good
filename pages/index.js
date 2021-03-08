import Link from 'next/link';
import Layout from 'components/layout/layout';
import styles from 'styles/Home.module.scss';

export default function Home() {
  return (
    <Layout title="Home" header={"Welcome"}>

        <section class={styles.card}>
            <h2>Promises</h2>
            <p>                
                <ul class={styles.list}>
                    <li>Encourage you to follow links to other sites. <a arai-label="Low-tech Magazine's solar-powered website" href="https://solar.lowtechmagazine.com/">A solar-powered website</a>. <a aria-label="The communal computer developed at Dynamicland" href="https://dynamicland.org/">A communal computer</a>. <a href="https://ourworldindata.org/time-use-living-conditions">The world's energy problem</a>. <a href="https://neumz.com/">Daily Gregorian Chant</a>. <a href="https://www.youtube.com/watch?v=ZJQjjBR6PbY&t=19s">The Origin of the Elements</a>. <a aria-label="Yakin's introduction to VoiceOver." href="https://yakim.nl/articles/voiceover-testing/">How to use VoiceOver</a>.</li>
                    <li><span class={styles.internalLink}>
                        <Link href={'/services'}>
                            <a>Help others</a>
                        </Link>
                        </span> make faster, safer, acessible websites.
                    </li>                    
                    <li>Support <a aria-label="truthteller, website for climate whistleblowers" href="https://truthteller.life/">truth tellers</a>.</li>
                    <li>Reveal my <span class={styles.internalLink}>
                            <Link href={'/bugbears'}>
                                <a>bugbears</a>
                            </Link>
                        </span>.
                    </li>
                </ul>    
            </p>
        </section>

        <section class={styles.card}>
            <h2>Website architecture</h2>  
            <p>This website is a working example of <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a> practices.</p>
            <p>The specifics of how this website was put together are covered in <span class={styles.internalLink}>
                    <Link href={'/architecture'}>
                        <a>the breakdown</a>
                    </Link>.
                </span>                    
            </p>                
            <p>Sites that follow similar principles find ways to stand out without compromise. <a href="https://zerowastekoeln.de/">Zero Waste Cologne</a>, <a href="https://www.advocatedesign.co.uk/index">Advocate</a>, and <a href="https://heydonworks.com/">Heydownworks</a> have character, clear objectives and straightforward navigation.</p>
        </section>
        <section class={styles.card}>
            <h2>Web performance</h2>
            <p>Having a <a aria-label="Mozilla Internet Health Report 2019 states that the slowest mobile broadband internet in the world is also the least affordable." href="https://internethealthreport.org/2019/the-worlds-slowest-internet-is-the-least-affordable/"> slow connection</a> is not unusual.</p>
            <p>Data can be expensive, <a aria-label="Our World in Data map showing that the cost of 1GB of mobile data as a percentage of income, is highest a spread of African countries." href="https://ourworldindata.org/grapher/cost-of-1gb-of-mobile-data?region=World">especially in countries where only mobile connectivity is available</a>.</p>
            <p>Poor design <a aria-label="WebKit guidelines for developers on how to minimise mobile and laptop energy use." href ="https://webkit.org/blog/8970/how-web-content-can-affect-power-usage/">runs down batteries</a>.</p>
            <p>When you waste people's time, <a href="https://developer.mozilla.org/en-US/docs/Learn/Performance/why_web_performance">they don't hang around.</a></p>
            <p><a href="https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/">It takes 0.05 seconds to form an opinion.</a></p>
            <p class={styles.internalLink}>
                <ul class={styles.list}>
                    <li>
                        <Link href={'/performance'}>
                            <a>Read more about web performance</a>
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
                            <a>Read more about accessibility</a>
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
                            <a>Read more about sustainability</a>
                        </Link>
                    </li>
                </ul>  
            </p>
        </section>
    </Layout>
  )
}