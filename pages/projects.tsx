import Link from 'next/link';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const History = () => {
    return (
        <Layout title="Web History" description={'Web History'}>
            <section class={styles.card}>
                <h2>Projects</h2>                
                <p>                
                    <ul class={styles.list}>
                        <li>
                            <a href="https://www.learn-the-planet.com/">Learn the Planet</a>.
                            <div>Lessons, videos and tests to encourage interest and knowledge of the natural world.</div>
                            <p>For this project I returned to the web fundamentals: HTML, CSS and JavaScript. I added Redux for state management, and a tiny templating library. I used Bootstrap for styling but removed all but a handful of dependencies.</p>
                            <p>The app is both a <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">SPA</a> and a <a href="https://web.dev/progressive-web-apps/">PWA</a>, and therefore uses <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API">service workers</a>, and has a <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest">manifest</a>.</p>
                            <p>I switched from using <a href="https://gruntjs.com/">Grunt</a> to <a href="https://webpack.js.org">webpack</a> for generating runtime files, placed the app on the cloud (<a href="https://cloud.google.com/">Google Cloud Platform</a>), and used <a href="https://firebase.google.com/">Firebase</a> and <a href="https://firebase.google.com/docs/functions">serverless functions</a> for persistence and retrieval.</p>
                            <p>Development was compromised by my limited understanding of the domain (all living things), and made harder by constant shifts in direction; the orginal app, for example, had no videos, but these became central, and I tacked on a number of features that are interesting but distract and detract from the principle function of the app.</p>

                        </li>
                        <li>
                            <a href="https://danhartley.github.io/snapdragon-verbs/">The Verb</a>
                            <div>Drills to test knowledge of Spanish and Portuguese verbs.</div>
                            <p>This project reflected a new approach. I put in place some simple rules for the project. It should:  
                                <ul class={styles.list}>
                                    <li>Take no more than 6 weeks to complete, including scoping, design, development and user testing.</li>
                                    <li>Have a clear, achievable goal; in this case, the ability to test any Portuguese verb (I added suport for Spanish in the sixth week) with short cuts for tackling irregular verbs. </li>
                                    <li>Contain provision to test a limited set of untried technologies and design ideas; I selectd Preact as a framework, and used a monochrome design that focuses user attention during a test.</li>
                                </ul>                                
                            </p>
                        </li>
                        <li>
                            <a href="https://snapdragon-retrieval.netlify.app/providers">Snapdragon Retrieval</a>
                            <div>Follow up tests to accompany podcasts and long articles.</div>
                            <p>I maintained the schedule I had created for The Verb, added support for <a href="https://www.typescriptlang.org/">Typescript</a>, and <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a> features:</p>
                            <ul class={styles.list}>
                                <li><a href="https://nextjs.org/">Next.js</a> for Static Site Generation.</li>
                                <li><a href="https://www.netlify.com/">netlify</a> to serve pages.</li>
                                <li>Netlify's <a href="https://www.netlifycms.org/">headless CMS</a>.</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://the-public-good.netlify.app">The Public Good</a>
                            <div>See <span class={styles.internalLink}><Link href={'/architecture'}>
                            <a>Architecture</a>
                        </Link></span>.</div>
                        </li>
                    </ul>
                </p>
            </section>
        </Layout>
    )
};

export default History;