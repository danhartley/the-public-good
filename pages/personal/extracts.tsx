import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import styles from 'styles/Home.module.scss'

const Extracts = () => {
  return (
    <Layout
      header="Walking somehow from the sun"
      title="Extracts from 'Walking somehow from the sun'"
      description={'Extracts'}
    >
      <h2>Extracts from a novel</h2>
      <section>
        <ul class={styles.unorderedList}>
          <li>
            <Links.IL link={{ source: 'personal/brothers' }}>Brothers</Links.IL>
          </li>
          <li>
            <Links.IL link={{ source: 'personal/oleta' }}>Oleta</Links.IL>
          </li>
          <li>
            <Links.IL link={{ source: 'personal/works' }}>Works</Links.IL>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default Extracts
