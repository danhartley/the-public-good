import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'

const Roles = () => {
  const externalLinks = [
    {
      name: 'Dev dogfooding is not user research | Thoughtworks',
      source: 'https://www.thoughtworks.com/insights/blog/dev-dogfooding-not-user-research',
    },
    {
      name: 'Manifesto for Product Engineering | Viljami Kuosmanen',
      source: 'https://github.com/anttiviljami/product-engineer-manifesto',
    },
    {
      name: 'What is a Product Engineer? | Viljami Kuosmanen',
      source: 'https://dev.to/epilot/what-is-a-product-engineer-1kpg',
    },
    {
      name: 'Product engineers | Sherif Mansour',
      source: 'https://sherifmansour.medium.com/product-engineers-f424da766871',
    },
    {
      name: 'The Product-Minded Software Engineer | Gergely Orosz',
      source: 'https://blog.pragmaticengineer.com/the-product-minded-engineer/',
    },
    {
      name: 'Product Design Is Lost | Rune Madsen ',
      source: 'https://designsystems.international/ideas/product-design-is-lost/',
    },
    {
      name: 'Jennifer Brook',
      source: 'http://jenniferbrook.com',
    },
  ]
  return (
    <Layout header="roles" title="" description={'roles'}>
      <section>
        <h2>Becoming a product engineer</h2>     
        <p>Looking for a job I spend more time wondering what to call myself than talking about what I know how to do.</p>
        <p>One of the things I think I should be talking about is people.</p>
        <p>In 2003 I moved to Barcelona. I had just set up a company and our main client (our only client at the time) was based in Italy - San Marino to be precise.</p>
        <p>This was before remote working existed. While I waited for my Internet to be installed I set up in a local Internet cafe - in exchange for a desk and the use of a monitor (and a connection), I helped sort out their network.</p>
        <p>I inherited the first iteration of the content management part of our software. It had been built by an Italian engineer. The database schema he designed was beautiful. His data input screens were also beautiful but utterly useless. It took about a minute to make one data entry.</p>
        <p>I improved on his designs and was pleased with myself until I made my first site visit.</p>
        <p>I was embarrassed and horrified by what I discovered. Three people spent eight hours a day entering data and it was painful to watch.</p>
        <p>I stayed for a few weeks, working in the same room, listening to them, testing out ideas. I rebuilt the CMS (I 'migrated' from ASP pages to ASP.NET). The new site cut data entry time by fifty percent and didn't give people <abbr class={styles.abbr} title='Repetitive strain injury'>RSI</abbr>.</p>
        <p>It was a salutary and wonderful experience analogous to the bleak weather and warm hospitality of the Eastern Italian riviera in winter.</p>
        <p>In a recent position I talked to no one who used the software I was working on in over a year (aside from a couple of client advisors who jumped on occasionally to correct customer mistakes).</p>
        <p>Although I created accounts it was only to test specific functions. I never experienced the site as a user. I had no feel for the site, and had no opinion on whether it was good or not (I had opinions but they were based on hunches). The closest I got to seeing how people used the site was sitting in on customer UX sessions and watching recorded user sessions.</p>
        <p>My role also meant I had no input into developing new products other than reviewing late stage figma designs. In other words, I was employed to implement a brief much in the way I had working at a design agency.</p>
        <p>I had never been so removed from the end product of my work or the people who used it. I didn't enjoy that. I also think it was detrimental to my work.</p>
        <p>Everything looked the same to me. I had no idea what was important. Everything was broken down into the smallest possible steps with no view of how it all fitted together. Should I be concerned that the UI I was working on didn't make sense; was it used by hundreds of people every day or by one or two people twice a year?</p>
        <p>It's fine to build tested components and unify design but tools and processes and tiny pieces of functioning code are not web development. If they are, AI will do it better and soon.</p>
        <p>Code isn't agnostic. And it's not important if it's built in React or Vue, its purpose is to enable the creation of a web site or app that people enjoy using.</p>
        <p>I'm nearing the end of my development life. I'm going to update my CV one last time. For want of a better term, I'm going to call myself a product engineer. It's the best available title that captures (see below) my ability to make correct judgments about how to build software for the web.</p>
        <p><Links.IL link={{source:'web-development/practice/artefacts'}}>Working software</Links.IL></p>
      </section>     
      <section>
        <h2>External Links</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section> 
      <Links.RelatedLinks
        links={[
            { value: 'web-development/its-the-jobs-that-got-small', text: 'It\'s the jobs that got small' }
          , { value: 'web-development/practice/meetings', text: 'Meetings' }
          , { value: 'web-development/practice/titles', text: 'Titles' }
          , { value: 'web-development/practice/artefacts', text: 'Artefacts' }
          , { value: 'web-development/practice/domains', text: 'Domains' }
          , { value: 'web-development/on-programming', text: 'On Programming' }
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Roles
