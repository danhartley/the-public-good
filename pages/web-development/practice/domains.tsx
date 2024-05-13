import Links from 'components/links/Links'
import Layout from 'components/layout/layout'

const Domains = () => {
  const externalLinks = [
    {
      name: '',
      source: '',
    },
  ]
  return (
    <Layout header="Domains" title="Domains" description={'Domains'}>
      <section>
        <h2> Build a heaven</h2>    
        <p>For companies that build products or services, it's crazy to restrict the developers to coding. They should be domain experts.</p>
        <ul>
          <li>Set them up with accounts on all your products during onboarding</li>
          <li>Introduce them to products as if they were clients</li>
          <li>Put money on their accounts if necessary; their experience should be as realistic as possible</li>    
          <li>Involve them in the full product lifecycle</li>
          <li>Encourage them to be opinionated (this won't be hard)</li>
        </ul>
        <p>Developers work on your site every day. They are intimate with parts of it. They should be familiar with all of it. Don't waste their insight and their feedback.</p>
      </section>      
      <Links.RelatedLinks
        links={[
            { value: 'web-development/its-the-jobs-that-got-small', text: 'It\'s the jobs that got small' }
          , { value: 'web-development/practice/meetings', text: 'Meetings' }
          , { value: 'web-development/practice/titles', text: 'Titles' }
          , { value: 'web-development/practice/roles', text: 'Roles' }
          , { value: 'web-development/practice/artefacts', text: 'Artefacts' }
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Domains