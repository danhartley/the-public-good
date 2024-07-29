import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'

const Population = () => {
  return (
    <Layout
      header="The problem of population"
      title="Climate crisis | The problem of population"
      description={
        'Does the world have too many people? Would reducing the population bring down greenhouse emissions?'
      }
    >
      <section>
        <p>
          Does the world have too many people, and should reducing the population, over time, be considered one of the
          means by which greenhouse gas emissions are brought down?
        </p>
        <p>
          It is a reasonable discussion to have once everyone is in the same boat;{' '}
          <Links.EL
            link={{
              label: 'Data for children per woman provided by Our World in Data',
              source: 'https://ourworldindata.org/grapher/children-per-woman-un?country=~OWID_WRL',
            }}
          >
            children per woman
          </Links.EL>{' '}
          is at its highest in Niger, at 6.4, but the{' '}
          <Links.EL
            link={{
              label: 'Data for per capita emissions provided by Our World in Data',
              source: 'https://ourworldindata.org/grapher/co-emissions-per-capita',
            }}
          >
            carbon footprint
          </Links.EL>{' '}
          of each person is 0.09 tonnes per year. In the US, the comparable figures are 1.77 (3.6 times lower) and 16.06
          (178.4 time higher). Combining these figures, we find that to effect the same emissions reduction requires one
          person from the US or 49.36 people from Niger.
        </p>
        <p>
          It is not only the number of people that is critical, but what each of us demands of the planet; the demand
          made by people in developed countries is unsustainable, and would remain so even if the world's population
          were reduced by the poorest 50%; they are responsible for{' '}
          <Links.EL
            link={{
              label: 'Our World in Data report on CO2 emissions by income',
              source: 'https://ourworldindata.org/co2-by-income-region',
            }}
          >
            14% of emissions
          </Links.EL>
          ,{' '}
          <Links.EL
            link={{
              label: 'Oxfam report on carbon inequality',
              source:
                'https://www.oxfam.org/en/press-releases/carbon-emissions-richest-1-percent-more-double-emissions-poorest-half-humanity',
            }}
          >
            half that of the top 1%
          </Links.EL>
          .
        </p>
        <p>
          The World Bank emphasises the{' '}
          <Links.EL
            link={{
              source:
                'https://www.worldbank.org/en/topic/education/publication/missed-opportunities-the-high-cost-of-not-educating-girls#:~:text=The%20report%20says%20that%20limited,lost%20lifetime%20productivity%20and%20earnings.',
            }}
          >
            financial cost
          </Links.EL>{' '}
          of not educating girls, to the state and the individual:
          <span className={styles.quote}>
            On average, women with secondary school education earn almost twice as much as those with no education at
            all.
          </span>
        </p>
        <p>
          But there are many benefits to supporting girls and women including the elimination of child marriages, better
          health and well-being, greater agency and opportunities, and a reduction in fertility rates. A study for the
          BBC by the Royal Geographical Society found that the world population could be reduced by 843 million people
          through improving women's education, and funding family planning.
        </p>
      </section>
    </Layout>
  )
}

export default Population
