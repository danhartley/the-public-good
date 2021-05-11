import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
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
    {
        "name": "SpeedCurve (free trial)",
        "source": "https://speedcurve.com/"
    },
    {
        "name": "Google Lighthouse Firefox extension",
        "source": "https://addons.mozilla.org/en-US/firefox/addon/google-lighthouse"
    },
];

const Performance = () => {
    return (
        <Layout header="Website performance" title="Web performance" description={'Web performance'}>
            <section class={styles.card}>

                <p>To run these tests all you need is a public website.</p>
                <Links.ExternalLinksList links={perfLinks} />   

                <h2>Measured performance</h2>

                <p>The bits that make up a page are critical because they determine the amount of energy required to produce that page. If we are thinking about sustainability as well as performance, this is important.</p>
                <p>However, what is sent in response to a user's first request and subsequent requests varies; the page is likely to be cached in many places, including in the user's browser, reducing computational requirements (less energy), and what is sent over the network (again, less energy).</p>
                <p>Measuring the overall performance of a website is more difficult still if it is made up of many pages of different weights. The home page may be quick to download but other pages, some of which users will link to directly, may contain images and video.</p>
                <p>There are different strategies for loading the assets required for a page to run; the most appropriate will depend on the site, how the site will be used, and on what devices.</p>
                
                <h2>Real-world performance</h2>

                <p>In addition to theoretical, or lab, tests, Google records <a href="https://developers.google.com/speed/docs/insights/v5/about">real-world website performance</a>. These data are preferred when available though benchmarks remain useful for comparing versions of a site, and measuring the effect of changes on performance.</p>

                <h2>Perceived performance</h2>

                <p><a href="https://en.wikipedia.org/wiki/Perceived_performance">Perceived performance</a> is a user's subjective impression of how quickly a website is ready. Google finds ways to measure user perception by identifying key events: <a href="https://web.dev/fcp/">First Contentful Paint</a> is when a user first sees something on the screen; <a href="https://web.dev/interactive/">Time to Interactive</a> measures when they can interact with a page. Google currently uses <a href="https://web.dev/metrics/">six metrics</a>.</p> 

                <p>A website can score relatively well on Google's performance tool Lighthouse through trickery. I used all sorts of techniques to push up the score for my website <a href="https://www.learn-the-planet.com/">Learn the Planet</a>. I now concentrate on absolute, measurable performance in bytes before addressing, if necessary, perceived performance.</p>

                <p>Both <a href="https://web.dev/rail/">Google</a> (Chrome) and <a href="https://developer.mozilla.org/en-US/docs/Learn/Performance/Perceived_performance">Mozilla</a> (Firefox) cover this topic in detail.</p>

                <p>There will also be times when best practice in terms of software engineering <a aria-label="When best practices can slow your application down by Stack Overflow" href="https://stackoverflow.blog/2021/03/03/best-practices-can-slow-your-application-down/">clashes</a> with website performance.</p>

                <h2 id="howTo">How to test your site</h2>

                <h3>Open Chrome DevTools</h3>

                <p>Select Command+Option+C (Mac) or Control+Shift+C (Windows, Linux, Chrome OS). For more ways to open DevTools, see <a href="https://developer.chrome.com/docs/devtools/open/">Google's help</a>.</p>

                <h3>Run Lighthouse</h3>

                <p>Look for Lighthouse in the top menu (it will likely be hidden at first but one or more of Element, Console, Network will be visible). For help on setting up and using Lighthouse, see <a href="https://developers.google.com/web/tools/lighthouse">Google's page</a>.</p>

                <p>I run Lighthouse in an Incognito Window in Chrome, or a Private Window in Firefox. This will allow you to measure performance between websites, or different versions of the same website, without the results being affected by previous sessions or other tasks. The lighthouse scores are artificial, 'lab' benchmarks. If you have an active, live site you can measure performance against real user sessions.</p>

            </section>
            <Links.RelatedLinks links={[{href:'architecture',title:'Architecture'},{href:'sustainability',title:'Sustainability'},{href:'accessibility',title:'Accessibility'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Performance;