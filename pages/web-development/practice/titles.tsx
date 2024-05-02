import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'

const Titles = () => {
  return (
    <Layout header="Titles" title="" description={'Titles'}>
      <section>
        <h2>A front end developer by any other name</h2>
      </section>      
      <Links.RelatedLinks
        links={[{ value: 'web-development/its-the-jobs-that-got-small', text: 'It\'s the jobs that got small' }]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Titles
