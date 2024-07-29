import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import styles from 'pages/pages.module.scss'

const Architecture = (): JSX.Element => {
  return (
    <Layout header="Architecture" title="Web architecture" description={'Web architecture'}>
      <section>
        <p>
          This website practices{' '}
          <Links.EL link={{ label: 'What is Jamstack?', source: 'https://jamstack.org/what-is-jamstack/' }}>
            Jamstack
          </Links.EL>
          , "an architecture designed to make the web faster, more secure, and easier to scale".
        </p>

        <h2>Technology</h2>

        <ul className={styles.dashedItemsList}>
          <li>
            Framework: <Links.EL link={{ source: 'https://preactjs.com/' }}>Preact</Links.EL>
          </li>
          <li>
            Enhancements: <Links.EL link={{ source: 'https://sass-lang.com/' }}>Sass</Links.EL>,{' '}
            <Links.EL link={{ source: 'https://www.typescriptlang.org/' }}>Typescript</Links.EL>
          </li>
          <li>
            Build and deploy: <Links.EL link={{ source: 'https://webpack.js.org' }}>webpack</Links.EL>,{' '}
            <Links.EL link={{ source: 'https://github.com/' }}>GitHub</Links.EL>,{' '}
            <Links.EL link={{ source: 'https://nextjs.org/' }}>Next.js</Links.EL> and{' '}
            <Links.EL link={{ source: 'https://www.netlify.com/' }}>netlify</Links.EL>.
          </li>
        </ul>


        <p>
          With each website I do something new. For this website I experimented with{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Light-on-dark_color_scheme' }}>dark mode</Links.EL>.
          Evidence suggests the user should have the{' '}
          <Links.EL
            link={{
              label: 'A guide to using light and dark modes',
              source: 'https://www.nngroup.com/articles/dark-mode/',
            }}
          >
            the option to switch
          </Links.EL>{' '}
          to light mode.
        </p>

        <p>
          I also documented how I set up the project. I chose to do this rather than creating a template because third
          party libraries and solutions change fast, and best practices change with them. These steps will guide future
          projects.
        </p>

        <h2>Documentation</h2>

        <ul className={styles.unorderedList}>
          <li>
            <span>
              The conventions, good practices, and solutions used to develop and build the website. They influence how
              the the website is assembled. They are not essential, and could be replaced without affecting the
              appearance or performance of the website. They do not add to page weight.
            </span>
            <ul className={styles.dashedItemsList}>
              <li>
                <Links.EL link={{ source: 'https://www.typescriptlang.org/' }}>Typescript</Links.EL> adds features to
                JavaScript which help to better structure and test code.{' '}
              </li>
              <li>
                <Links.EL link={{ source: 'https://sass-lang.com/' }}>Sass</Links.EL> extends CSS to which it is
                converted when compiling the site ready for release.
              </li>
              <li>
                Pages are statically generated using{' '}
                <Links.EL link={{ source: 'https://nextjs.org/' }}>next.js</Links.EL>. Instead of serving dynamic
                pages based on variables, such as a specific product or blog, a static site generator (SSG), like
                Next.js, is used to create all of these pages - which could be many thousands - each time the site is
                updated. They are therefore immediately available to a browser request.
              </li>
            </ul>
          </li>
          <li>
            <span>
              Code developed by third-parties which affect both how the site is built and its performance in the
              browser.
            </span>
            <ul className={styles.dashedItemsList}>
              <li>
                <Links.EL link={{ source: 'https://preactjs.com/' }}>Preact</Links.EL> is a light-weight alternative
                to React which models the state of a page and modifies it in response to user actions. Preact adds to
                the page weight. For this site I could have dispensed with a framework, it is sufficiently simple that
                I could have written it in Notepad, but this site is also intended to serve as a guide on more complex
                projects.
              </li>
            </ul>
          </li>
          <li>
            <span>Settings and tweaks that keep things running smoothly.</span>
            <ul className={styles.dashedItemsList}>
              <li>PWA support.</li>
              <li>Configuration to enable Sass, Typescript, Jest, and Preact to be used together.</li>
              <li>Layout design pattern.</li>
              <li>Meta tags to provide links for LinkedIn.</li>
            </ul>
          </li>
        </ul>

        <p>
          For a complete picture of the web technologies I use, or have used, please see my{' '}
          <Links.IL link={{ source: 'personal/cv' }}>curriculum vitae</Links.IL>.
        </p>
      </section>

      <Links.RelatedLinks
        links={[
          { value: 'sustainability', text: 'Sustainability' },
          { value: 'accessibility', text: 'Accessibility' },
          { value: 'performance', text: 'Performance' },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Architecture
