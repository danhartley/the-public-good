import Links from 'components/links/Links'
import Layout from 'components/layout/layout'

const Itsthejobsthatgotsmall = () => {
  const externalLinks = [
    {
      name: "Norma Desmond in Sunset Boulevard | `I Am Big, It's the Pictures That Got Small`",
      source: 'https://www.youtube.com/watch?v=UvD-F5hqLU8',
    },
  ]
  return (
    <Layout
      header="It's the jobs that got small"
      title="It's the jobs that got small"
      description={"It's the jobs that got small"}
    >
      <section>
        <p>
          I started building websites in 1997. They didn't contain my first code - I'd written BASIC on a BBC Micro as a
          boy - but they marked a new direction after working in film and television.
        </p>
        <p>
          This was at the peak of the first dot-com boom when anything seemed possible. I had an idea for an app that
          let you hail a taxi wherever you were. Another required massive screens to be installed in public venues -
          such as cafes and bars - for people to leave messages on.
        </p>
        <p>To my surprise I'm still writing code 25 years later.</p>
        <p>
          Job titles in web software development are quicksilver. Some describe roles - webmaster, web developer, full
          stack, front or back end developer, product engineer - others are merely descriptive of the immediate tools to
          hand - .NET developer, React developer.
        </p>
        <p>
          Titles are required for a contract and are a useful shorthand for what a person needs to know and do but they
          fall short of describing how people interact, what interests them, and their know-how.
        </p>
        <p>I am currently scouring job boards for a new position but I'm not finding any matches.</p>
        <p>Here are some things I enjoy doing and that I'm good at:</p>
        <ul>
          <li>Talking to the people who use the software I'm building</li>
          <li>Finding out what is needed</li>
          <li>Finding out what is wanted</li>
          <li>Having long team meetings</li>
          <li>Pair programming and pairing with non programmers</li>
          <li>Creating prototypes</li>
          <li>Seeking and receiving feedback</li>
          <li>Writing tests, especially integration tests</li>
          <li>Writing code</li>
          <li>Designing interfaces</li>
          <li>Adhering to and promoting web standards including for accessibility and sustainability</li>
          <li>Releasing code</li>
          <li>Pausing and reflecting</li>
        </ul>
        <p>
          <Links.IL link={{ source: 'web-development/practice/meetings' }}>In praise of long meetings</Links.IL>
        </p>
      </section>
      <section>
        <h2>External Links</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section>
      <Links.RelatedLinks
        links={[
          { value: 'web-development/practice/meetings', text: 'Meetings' },
          { value: 'web-development/practice/titles', text: 'Titles' },
          { value: 'web-development/practice/roles', text: 'Roles' },
          { value: 'web-development/practice/artefacts', text: 'Artefacts' },
          { value: 'web-development/practice/domains', text: 'Domains' },
          { value: 'web-development/on-programming', text: 'On Programming' },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Itsthejobsthatgotsmall
