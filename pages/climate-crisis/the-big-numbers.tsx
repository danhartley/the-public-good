import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import Formula from 'components/tools/formula'
import styles from 'pages/pages.module.scss'
import Tables from 'components/tables/tables'

const BigNumbers = () => {
  return (
    <Layout
      header="Big numbers"
      title="Big numbers"
      description={'Big numbers pertinent to the climate crisis: annual emissions, human population.'}
    >
      <section>
        <h3>How do we measure up?</h3>
        <p>
          Climate change occurs on a large scale. When a problem, solution, cost or piece of data is expressed in
          billions, trillions, gigatonnes, and petajoules, assessing its meaning and value requires something more than
          everyday heuristics.
        </p>
        <Tables.MetricPrefixes></Tables.MetricPrefixes>
        <div>
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Metric_prefix' }}>
            Metric prefix | Wikipedia
          </Links.EL>{' '}
        </div>
        <p>
          Some values are fixed. To convert a mass of carbon to <Formula>CO2</Formula> multiplying by 3.67 or 3
          <span class={styles.fraction}>&#8532;</span> will return a pretty accurate answer. Calculating an
          approximation in your head you might quite reasonably mutliple by 4 instead of 3.67 and adjust the result. But
          since there are manifold uncertainties about measuring the present, and predicting the future, copper-bottomed
          numbers are not to be treated lightly.
        </p>
        <p>How do we calculate the mass of carbon dioxide given a mass of carbon?</p>
        <aside>
          <h4>
            <Formula>CO2</Formula> to C
          </h4>
          <dl>
            <dt>
              <strong>The atomic mass of carbon and oxygen</strong>
            </dt>
            <dd>Carbon ~12 &nbsp;&nbsp;Oxygen ~16</dd>
            <dt>
              <strong>
                From which we calculate the atomic mass of <Formula>CO2</Formula>
              </strong>
            </dt>
            <dd>(1&#215;12) + (2&#215;16) = 44</dd>
            <dt>
              <strong>
                And the ratio of <Formula>CO2</Formula> to C
              </strong>
            </dt>
            <dd>
              44 &#247; 12 = 3<span class={styles.fraction}>&#8532;</span>
            </dd>
            <dt>
              <strong>
                Converting C to <Formula>CO2</Formula>
              </strong>
            </dt>
            <dd>
              Example 2 tonnes C to <Formula>CO2</Formula>: 2 &#215; 3<span class={styles.fraction}>&#8532;</span> = 7
              <span class={styles.fraction}>&#8531;</span> t
            </dd>
          </dl>
          <div>
            For the atomic mass of carbon and oxygen see{' '}
            <Links.EL link={{ source: 'https://chemistrygod.com/periodic-table' }}>The Periodic Table</Links.EL>.
          </div>
        </aside>
      </section>
    </Layout>
  )
}

export default BigNumbers
