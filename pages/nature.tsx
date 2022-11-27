import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'
import Links from 'components/links/Links'

const Nature = () => {
  return (
    <Layout title="Nature" description={'Nature'}>
      <section>
        <h1>Nature</h1>

        <h2>Abstract</h2>

        <p>
          An uneasy mutualism exists between humans and the species we eat; the crops and animals we have domesticated
          and modified have flourished, and multiplied exponentially. Plants, fish and animals have been subject to
          evolution through human selection (selective breeding), and been placed in ecosytems and environments
          engineered to maximise the yield of the products we derive from them. Chickens are the most successful animal
          on the planet by numbers, there are three to every human, but whilst the species is prospering, the cost to
          the individual is high; few live in conditions they would seek, and every year 69 billion are killed for food.
        </p>

        <h2>Food production</h2>

        <p>
          <Links.EL link={{ source: 'https://ourworldindata.org/meat-production' }}>Dead animals</Links.EL>
        </p>
        <p>
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Selective_breeding' }}>Selective breeding</Links.EL>
        </p>

        <h2>Naturalists</h2>

        <p>
          One of the most remarkable lines from{' '}
          <Links.EL
            link={{
              source:
                'https://www.gov.uk/government/publications/final-report-the-economics-of-biodiversity-the-dasgupta-review',
            }}
          >
            The Economics of Biodiversity
          </Links.EL>{' '}
          report comes from the preface,
          <span class={styles.quote}>
            If we care about our common future and the common future of our descendants, we should all in part be
            naturalists.
          </span>
        </p>
      </section>
      <Links.RelatedLinks links={[{ value: 'climate-crisis/facts', text: 'Facts' }]}></Links.RelatedLinks>
    </Layout>
  )
}

export default Nature

{
  /* <Links.EL link={{source:'https://www.scientificamerican.com/article/cooking-up-bigger-brains/'}}>cook</Links.EL> */
}
{
  /* One unproven theory proposes that our own species, homo sapiens, was fire-dependent, and could not have evolved if it hadn't been for the ability of homo erectus to control fire. */
}
