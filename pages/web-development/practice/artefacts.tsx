import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'

const Artefacts = () => {
  const externalLinks = [
    {
      name: 'Only one deliverable matters | Josh Clark, Big Medium',
      source: 'https://bigmedium.com/ideas/only-one-deliverable-matters.html',
    },
  ]
  return (
    <Layout header="Artefacts" title="Artefacts" description={'Artefacts'}>
      <section>
        <h2>Working software</h2>     
        <p>We could stop building websites and use figma. Someone soon will be tempted to use AI to wrap custom data in custom interfaces and switch off the Internet.</p>
        <p>But until then, the three work horses of the web faithfully plod along beneath their ever increasing burdens.</p>
        <p>Two of the horses, HTML and CSS, don't get much of a look in these days. It's all about JavaScript.</p>
        <p>In many companies this has caused a breach between programming and web design. The living, moving part of pages and apps - what people see and interact with - is rarely discussed in developer meetings. It should be our source of truth.</p>
        <p>The purpose of a team is not to create perfect designs from design systems that use components built in custom frameworks which are then replicated in component libraries.</p>
        <p>We can reduce the creation of artefacts by removing the need for them. Artefacts have two purposes: experimentation and communication.</p>
        <p>Easy to use, low fidelity tools are better for thinking. If you want to sketch half a dozen variations grab a pen and a piece of paper.</p>
        <p>Artefacts can be useful as an asynchronous reference (their short shelf life should be short) and sometimes nothing beats a quick illustration or the beautiful design that makes sense of a heap of disparate elements.</p>
        <p>But the need for many artefacts can be avoided by bringing together the people responsible for creating a new function or product from the get-go.</p>
        <p>And I mean the people who will do the work, not someone with seniority. Sorting and filtering information isn't a useful job for a lead.</p>   
        <p><Links.IL link={{source:'web-development/practice/domains'}}>Domain experts</Links.IL></p>     
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
          , { value: 'web-development/practice/roles', text: 'Roles' }
          , { value: 'web-development/practice/domains', text: 'Domains' }
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Artefacts
