import Link from 'next/link'
import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'

const Itsthejobsthatgotsmall = () => {
  const externalLinks = [
    {
      name: 'Norma Desmond in Sunset Boulevard | `I Am Big, It\'s the Pictures That Got Small`',
      source: 'https://www.youtube.com/watch?v=UvD-F5hqLU8',
    },
  ]

  return (
    <Layout header="It's the jobs that got small" title="It's the jobs that got small" description={'It\'s the jobs that got small'}>
      <section>
        <p>I started building websites in 1997. They didn't contain my first code - I'd written BASIC on a BBC Micro as a boy - but they marked a new direction after working in film and television.</p>
        <p>This was at the peak of the first dot-com boom when anything seemed possible. I had an idea for an app that let you hail a taxi wherever you were. Another required massive screens to be installed in public venues - such as cafes and bars - for people to leave messages on. (I still prefer the latter).</p>
        <p>To my surprise I'm still writing code 25 years later.</p>
        <p>Job titles in web software development are quicksilver. Some describe roles - webmaster, web developer, full stack, front or back end developer - others are merely descriptive of the immediate tools to hand - .NET developer, React developer.</p>
        <p>Titles are required for a contract and are a useful shorthand for what a person needs to know and do but they fall short of describing how people interact, what interests them, and their purview.</p>
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
        <p>I'm going to talk about long meetings first because while I think they are a good thing this is not a truth universally acknowledged. I'll return to the other items in later posts.</p>
        <h2>Long meetings</h2>
        <p>A long meeting should last at least two hours.</p>
        <p>I've been holding meetings like this with colleagues for about four years. In the beginning, we didn't know long meetings were going to be productive; the meetings were long because we caught up once a week and had a lot to get through.</p>
        <p>After a while we realised our meetings fitted a pattern. We had plenty to say but because we weren't rushed we spoke in turn and listened.</p>
        <p>After an hour or so, we'd established the current state of the project, and we had a good idea of what our colleagues were thinking.</p>
        <p>After an hour and a half we began to think as one, no longer concerned - if we could remember - as to who had thought of what. We became impartial, or partial only to what appeared the best solution.</p>
        <p>At this point, as we became tired, and began to stretch our new consensus, we considered stopping.</p>
        <p>But because we'd allocated two hours for our meeting, we carried on, and to our surprise we frequently reached a satisfactory conclusion.</p>
        <p>By the end of the meeting we were fluent in the problem and had a plan.</p>
        <p>A week later we repeated the process building on work we'd done since the last meeting.</p>
        <p>One project we approached in this way was <Links.EL link={{source:'https://responsibletech.work/tools/development/pledge-works/', text: 'A practical tool that invites you to write pledges for better outcomes as part of your existing product development processes.'}}>Pledge Works</Links.EL>. It was a ten meeting problem.</p>
        <p>Other benefits of long meetings:</p>
        <ul>
          <li>Job titles become less important</li>
          <li>Everyone has the chance to speak</li>
          <li>Solutions bubble up as workable ideas replace opinions</li>
          <li>Consensus is derived not imposed</li>
          <li>New thinking emerges</li>
        </ul>
      </section>      
      <section>
        <h2>External Links</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section>
      <Links.RelatedLinks
        links={[{ value: 'ethics', text: 'Ethical software development' }]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Itsthejobsthatgotsmall
