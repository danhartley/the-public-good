import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'

const Projects = () => {
  return (
    <Layout header="Projects" title="Web Projects" description={'Web Projects'}>
      <section>
        <p>
          <p>
            <h2>
              <Links.EL link={{ source: 'https://www.learn-the-planet.com/' }}> Learn the Planet</Links.EL>
            </h2>
            <div>Lessons, videos and tests to stimulate interest and further understanding of the natural world.</div>
            <p>
              The project on which I made many mistakes, and was therefore forced to solve numerous problems. What cost
              me above all was not having a clear idea what the project was about; I changed tack on several occasions,
              each of which required a major refactor. As a developer I did good work, but I was a poor client, having
              too little understanding of my subject, my goals, and my users. But there were positives:
            </p>
            <ul class={styles.dashedItemsList}>
              <li>
                The switch to <Links.EL link={{ source: 'https://webpack.js.org' }}>webpack</Links.EL> from{' '}
                <Links.EL link={{ source: 'https://gruntjs.com/' }}>Grunt</Links.EL> for bundling and optimising files.
              </li>
              <li>
                A shift from building{' '}
                <Links.EL link={{ source: 'https://developer.mozilla.org/en-US/docs/Glossary/SPA' }}>
                  Single Page Apps
                </Links.EL>{' '}
                to <Links.EL link={{ source: 'web.dev/progressive-web-apps/' }}>Progressive Web Apps</Links.EL>.
              </li>
              <li>
                Hosting the site on{' '}
                <Links.EL link={{ source: 'https://cloud.google.com' }}>Google's Cloud Platform</Links.EL> and adding{' '}
                <Links.EL link={{ source: 'https://firebase.google.com/docs/functions' }}>
                  serverless functions
                </Links.EL>
                .
              </li>
              <li>
                Increased testing, using <Links.EL link={{ source: 'https://jestjs.io/' }}>Jest</Links.EL>, and, at
                times,{' '}
                <Links.EL
                  link={{
                    source:
                      'https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2/',
                  }}
                >
                  Test Driven Development
                </Links.EL>
                .
              </li>
            </ul>
            <p>
              I also reduced my dependency on runtime libraries, including{' '}
              <Links.EL link={{ source: 'https://getbootstrap.com/' }}>Bootstrap</Links.EL>. I have mixed feelings about{' '}
              <Links.EL link={{ source: 'https://redux.js.org/' }}>Redux</Links.EL> which is a simple and effective
              approach to state management but is hard to tame. Intrinsic to Redux, however, is functional programming
              which is an excellent fit for the web. I am grateful to{' '}
              <Links.EL link={{ source: 'https://overreacted.io/' }}>Dan Abramov</Links.EL>, who created Redux, and{' '}
              <Links.EL link={{ source: 'https://www.youtube.com/c/funfunfunction' }}>mpj</Links.EL> for their thoughts
              and instruction on this subject.
            </p>
            <p>
              Although the project has not yet found its intended audience, I learnt how to define and scope a project,
              the evolution of <Links.EL link={{ source: 'https://www.modernjs.com/' }}> JavaScript</Links.EL> in just a
              few years, and many wonderful things about the living world, including the true composition of{' '}
              <Links.EL
                link={{
                  source:
                    'https://www.theatlantic.com/science/archive/2019/01/how-lichens-explain-and-re-explain-world/580681/',
                }}
              >
                lichens
              </Links.EL>
              .
            </p>
          </p>
          <p>
            <h2>
              <Links.EL link={{ source: 'https://danhartley.github.io/snapdragon-verbs/' }}>The Verb</Links.EL>
            </h2>
            <div>Drills to test knowledge of Spanish and Portuguese verbs.</div>
            <p>
              At the outset, I put in place generic rules to avoid the problems I had encountered on the previous
              project. Any project should now:
              <ul class={styles.dashedItemsList}>
                <li>Take no more than 6 weeks to complete, including scoping, design, development and user testing.</li>
                <li>
                  Have a clear, achievable goal; in this case, the ability to test any Portuguese or Spanish verb.
                </li>
                <li>
                  Experiment with a predefined set of technologies and design ideas; for this project, I selected Preact
                  as a framework, and limited myself to a monochromatic interface.
                </li>
              </ul>
            </p>
          </p>
          <p>
            <h2>
              <Links.EL link={{ source: 'https://snapdragon-retrieval.netlify.app/providers' }}>
                Snapdragon Retrieval
              </Links.EL>
            </h2>
            <div>Follow up tests to accompany podcasts and long articles.</div>
            <p>
              I maintained the schedule I had created for The Verb, added support for{' '}
              <Links.EL link={{ source: 'https://www.typescriptlang.org/' }}>Typescript</Links.EL>, and{' '}
              <Links.EL link={{ source: 'https://jamstack.org/what-is-jamstack/' }}>Jamstack</Links.EL> features:
            </p>
            <ul class={styles.dashedItemsList}>
              <li>
                <Links.EL link={{ source: 'https://nextjs.org/' }}>Next.js</Links.EL> for Static Site Generation.
              </li>
              <li>
                <Links.EL link={{ source: 'https://www.netlify.com/' }}>netlify</Links.EL> to serve pages.
              </li>
              <li>
                Netlify's <Links.EL link={{ source: 'https://www.netlifycms.org/' }}>headless CMS</Links.EL>.
              </li>
            </ul>
          </p>
        </p>
      </section>

      <Links.RelatedLinks
        links={[
          { value: 'services', text: 'Services' },
          { value: 'architecture', text: 'Architecture' },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Projects
