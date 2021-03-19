import Layout from 'components/layout/layout';
import { Links } from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const perfLinks = [
    {
        "name": "Mozilla Observatory",
        "source": "https://observatory.mozilla.org/"
    },
    {
        "name": "WebPageTest",
        "source": "https://www.webpagetest.org/"
    },
    {
        "name": "Think With Google",
        "source": "https://www.thinkwithgoogle.com/feature/testmysite/"
    },
    {
        "name": "GTmetrix",
        "source": "https://gtmetrix.com/"
    },
    {
        "name": "Google PageSpeed Insights",
        "source": "https://developers.google.com/speed/pagespeed/insights/"
    },
    {
        "name": "Yellow Lab Tools",
        "source": "https://yellowlab.tools/"
    },
    {
        "name": "Pingdom Website Speed Test",
        "source": "https://tools.pingdom.com/"
    },
    {
        "name": "dareboost",
        "source": "https://www.dareboost.com/en"
    },
];

const Performance = () => {
    return (
        <Layout title="Web performance" description={'Web performance'}>
            <section class={styles.card}>
                <h2>Performance</h2>      

                <h3>Tests</h3>          
                <p>To run these tests all you need is a public website.</p>
                <Links.InternalLinksList links={perfLinks} />   

                <h3>Measured performance</h3>

                <p>The bits that make up a page are critical because they determine the amount of energy required to produce that page. If we are thinking about sustainability as well as performance, this is important.</p>
                <p>However, what is sent in response to a user's first request and subsequent requests varies; the page is likely to be cached in many places, including in the user's browser, reducing computational requirements (less energy), and what is sent over the network (again, less energy).</p>
                <p>Measuring the overall performance of a website is more difficult still if it is made up of many pages of different weights. The home page may be quick to download but other pages, some of which users will link to directly, may contain images and video.</p>
                
                <h3>Real-world performance</h3>

                <p>In addition to theoretical, or lab, tests, Google records <a href="https://developers.google.com/speed/docs/insights/v5/about">real-world website performance</a>. These data are preferred when available though benchmarks remain useful for comparing versions of a site, and measuring the effect of changes on performance.</p>

                <h3>Perceived performance</h3>

                <p><a href="https://en.wikipedia.org/wiki/Perceived_performance">Perceived performance</a> is a user's subjective impression of how quickly a website is ready. Google finds ways to measure user perception by identifying key events: <a href="https://web.dev/fcp/">First Contentful Paint</a> is when a user first sees something on the screen; <a href="https://web.dev/interactive/">Time to Interactive</a> measures when they can interact with a page. Google currently uses <a href="https://web.dev/metrics/">six metrics</a>.</p> 

                <p>A website can score relatively well on Google's performance tool Lighthouse through trickery. I used all sorts of techniques to push up the score for my website <a href="https://www.learn-the-planet.com/">Learn the Planet</a>. I now concentrate on absolute, measurable performance in bytes before addressing, if necessary, perceived performance.</p>

                <p>Both <a href="https://web.dev/rail/">Google</a> (Chrome) and <a href="https://developer.mozilla.org/en-US/docs/Learn/Performance/Perceived_performance">Mozilla</a> (Firefox) cover this topic in detail.</p>

                <p>There will also be times when best practice in terms of software engineering <a aria-label="When best practices can slow your application down by Stack Overflow" href="https://stackoverflow.blog/2021/03/03/best-practices-can-slow-your-application-down/">clashes</a> with website performance.</p>

            </section>
            <Links.RelatedLinks links={[{href:'sustainability',title:'Sustainability testing'},{href:'accessibility',title:'Accessibility testing'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Performance;