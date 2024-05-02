import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'

const Titles = () => {
  const externalLinks = [
    {
      name: 'Front-end development’s identity crisis | Elly Joel',
      source: 'https://www.ellyloel.com/blog/front-end-development-s-identity-crisis/',
    },
    {
      name: '“Junior Developer for Life” is for Suckers | Eric Elliott',
      source: 'https://medium.com/javascript-scene/junior-developer-for-life-is-for-suckers-921f7de0e7ce',
    },
    {
      name: 'The Elements of UI Engineering | Dan Abramov',
      source: 'https://overreacted.io/the-elements-of-ui-engineering/',
    },
    {
      name: 'The Great Divide | Chris Coyier',
      source: 'https://css-tricks.com/the-great-divide/',
    },
  ]
  return (
    <Layout header="Titles" title="" description={'Titles'}>
      <section>
        <h2>A web developer by any other name</h2>
        <p>Job specs for developers often conflate general practice and familiarity with certain tools: Flash/.NET/VB/React/Vue developer. It is assumed the developer knows what they are doing and should be maximally productive from the outset. For short-lived contracts a mercenary approach is logical.</p>
        <p>Broader industry-accepted professional titles change too albeit more slowly: webmaster, web developer, developer, web/native app developer, front/back end developer, full stack developer/engineer, web designer, product engineer.</p>
        <p>There are no definitions for these titles. Few web developers are properly engineers in the sense that they don't belong to professional bodies or follow a code of conduct.</p>
        <p>Titles can be modified: senior, mid-level, junior. Sometimes a job description will include all three just to be sure.</p>
        <p>Titles can also be hyphenated or concatenated …</p>
        <p>In addition there is a crossover with other closely related functions some of which the developer might be expected to perform: devOps, UI/UX, product design.</p>
        <p>Finally there is domain drift. When I first wrote a form its data had to be submitted in a post which was handled on the server by a Perl script. In 2011 Flash was used by 3 in 10 websites.</p>
        <p>Do titles matter? Dan Abramov (e.g. <Links.EL link={{source:'https://overreacted.io/the-elements-of-ui-engineering/'}}>The Elements of UI Engineering</Links.EL> ) calls himself a "Junior dev for life". Eric Elliot - who respects him - <Links.EL link={{source:'https://medium.com/javascript-scene/junior-developer-for-life-is-for-suckers-921f7de0e7ce', text:'“Junior Developer for Life” is for Suckers'}}>disagrees strongly</Links.EL> with this sentiment.</p>
        <p>Sometimes I think titles do matter. Do we call arable farmers Massey Ferguson Tractor Drivers?</p>
        <p>Often the title is immaterial. Accepting a job as a web developer (I'm using web developer as the catch all because it is my preferred title) is a lottery. There is no guarantee the spec will match what is required or what you are asked to do.</p>
        <p>Titles are required for a contract and are a useful shorthand for what a person needs to know and do but they fall short of describing how people interact, what interests them, their know-how, and what the company hiring them actually needed or expected.</p>
        <p>What can and should a web developer do?</p>
        <p><Links.IL link={{source:'web-development/practice/roles'}}>Roles</Links.IL></p>
      </section>     
      <section>
        <h2>External Links</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section> 
      <Links.RelatedLinks
        links={[
            { value: 'web-development/its-the-jobs-that-got-small', text: 'It\'s the jobs that got small' }
          , { value: 'web-development/practice/meetings', text: 'Meetings' }
          , { value: 'web-development/practice/roles', text: 'Roles' }
          , { value: 'web-development/practice/artifacts', text: 'Artifacts' }
          , { value: 'web-development/practice/domains', text: 'Domains' }
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Titles
