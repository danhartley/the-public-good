import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Projects = () => {
    return (
        <Layout header="Projects" title="Web Projects" description={'Web Projects'}>
            <section>

                <p>                             
                    <p><h2><a href="https://www.learn-the-planet.com/">Learn the Planet</a></h2>                                   
                        <div>Lessons, videos and tests to stimulate interest and further understanding of the natural world.</div>
                        <p>The project on which I made many mistakes, and was therefore forced to solve numerous problems. What cost me above all was not having a clear idea what the project was about; I changed tack on several occasions, each of which required a major refactor. As a developer I did good work, but I was a poor client, having too little understanding of my subject, my goals, and my users. But there were positives:</p>
                        <ul class={styles.dashedItemsList}>
                            <p>The switch to <a href="https://webpack.js.org">webpack</a> from <a href="https://gruntjs.com/">Grunt</a> for bundling and optimising files.</p>
                            <p>A shift from building <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">Single Page Apps</a> to <a href="https://web.dev/progressive-web-apps/">Progressive Web Apps</a>.</p>
                            <p>Hosting the site on <a href="https://cloud.google.com/">Google's Cloud Platform</a> and adding <a href="https://firebase.google.com/docs/functions">serverless functions</a>.</p>
                            <p>Increased testing, using <a href="https://jestjs.io/">Jest</a>, and, at times, <a href="https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2/">Test Driven Development</a>.</p>
                        </ul>
                        <p>I also reduced my dependency on runtime libraries, including <a href="https://getbootstrap.com/">Bootstrap</a>. I have mixed feelings about <a href="https://redux.js.org/">Redux</a> which is a simple and effective approach to state management but is hard to tame. Intrinsic to Redux, however, is functional programming which is an excellent fit for the web. I am grateful to <a href="https://overreacted.io/">Dan Abramov</a>, who created Redux, and <a href="https://www.youtube.com/c/funfunfunction">mpj</a> for their thoughts and instruction on this subject.</p>
                        <p>Although the project has not yet found its intended audience, I learnt how to define and scope a project, the evolution of <a aria-label="The Evolution of Javascript" href="https://www.modernjs.com/"> JavaScript</a> in just a few years, and many wonderful things about the living world, including the true composition of <a href="https://www.theatlantic.com/science/archive/2019/01/how-lichens-explain-and-re-explain-world/580681/">lichens</a>.</p>
                    </p>
                    <p>
                        <h2><a href="https://danhartley.github.io/snapdragon-verbs/">The Verb</a></h2>
                        <div>Drills to test knowledge of Spanish and Portuguese verbs.</div>
                        <p>At the outset, I put in place generic rules to avoid the problems I had encountered on the previous project. Any project should now:  
                            <ul class={styles.dashedItemsList}>
                                <p>Take no more than 6 weeks to complete, including scoping, design, development and user testing.</p>
                                <p>Have a clear, achievable goal; in this case, the ability to test any Portuguese or Spanish verb. </p>
                                <p>Experiment with a predefined set of technologies and design ideas; for this project, I selected Preact as a framework, and limited myself to a monochromatic interface.</p>
                            </ul>                                
                        </p>
                    </p>
                    <p>
                        <h2><a href="https://snapdragon-retrieval.netlify.app/providers">Snapdragon Retrieval</a></h2>
                        <div>Follow up tests to accompany podcasts and long articles.</div>
                        <p>I maintained the schedule I had created for The Verb, added support for <a href="https://www.typescriptlang.org/">Typescript</a>, and <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a> features:</p>
                        <ul class={styles.dashedItemsList}>
                            <p><a href="https://nextjs.org/">Next.js</a> for Static Site Generation.</p>
                            <p><a href="https://www.netlify.com/">netlify</a> to serve pages.</p>
                            <p>Netlify's <a href="https://www.netlifycms.org/">headless CMS</a>.</p>
                        </ul>
                    </p>
                </p>
            </section>

            <Links.RelatedLinks links={[{value:'services',text:'Services'},{value:'architecture',text:'Architecture'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Projects;