import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'
import Tables from 'components/tables/tables'

const Facts = () => {
  return (
    <Layout
      header="Facts"
      title="Facts"
      description={
        'Facts pertinent to the climate crisis: timescales, emissions values, energy and power densities, and how to calculate horsepower.'
      }
    >
      <section>
        <div class={styles.menu}>
          <span>
            <Links.EL link={{ source: '#carbon' }}>Carbon</Links.EL>
          </span>
          <span>
            <Links.EL link={{ source: '#time' }}>Time</Links.EL>
          </span>
          <span>
            <Links.EL link={{ source: '#emissions' }}>Emissions</Links.EL>
          </span>
          <span>
            <Links.EL link={{ source: '#energy' }}>Energy</Links.EL>
          </span>
          <span>
            <Links.EL link={{ source: '#photosynthesis' }}>Photosynthesis</Links.EL>
          </span>
        </div>

        <h2 id="carbon">Carbon & CO2</h2>

        <p>
          Emissions values are usually given in tonnes of carbon dioxide, but occasionally a value is given in tonnes of
          carbon (the giveaway is that the value looks surprisingly small). To convert a mass of carbon to carbon
          dioxide multiple by 3.67.
        </p>

        <p>
          How is this number derived?
          <span class={styles.quote}>
            <div>The atomic mass of carbon is 12. The atomic mass of oxygen is 16.</div>
            <div>The ratio of CO2 to C is therefore 44/12 (1 &#215; 12 + 2 &#215; 16 / 12) or ~3.67.</div>
            <div>
              To calculate the mass of CO2 released by burning a particular fossil fuel it is necessary to know how much
              carbon it contains. The additional mass comes from the oxygen.
            </div>
            {/* <div>The weight of CO2 is 44 grams per mole (1 x 12 grams/mole for the carbon atom and 2 x 16 grams/mole for the oxygen atoms).</div>                        
                        <div>The mass of one molecule of CO2 is 7.30×10<span class={styles.super}>−23</span></div> */}
          </span>
          <div>
            <Links.EL
              link={{
                label: 'Article explaining the difference between mass and weight from ThoughtCo',
                source: 'https://www.thoughtco.com/atomic-weight-and-atomic-mass-difference-4046144',
              }}
            >
              Atomic mass or atomic weight?
            </Links.EL>
          </div>
          <div>
            <Links.EL link={{ source: 'https://www.scientificamerican.com/article/experts-weight-ratio-co2-fuel/' }}>
              Example calculation using weight and moles.
            </Links.EL>
          </div>
        </p>

        <h2 id="co2e">CO2e</h2>

        <h3>Peat</h3>

        <p>
          <span class={styles.quote}>
            Peat is an accumulation of partially decayed vegetation or organic matter. The IPCC classifies peat as
            neither a fossil fuel nor a renewable fuel, and notes that its emission characteristics are similar to
            fossil fuels.
            <span>
              {' '}
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Peat' }}>Wikipedia</Links.EL>
            </span>
          </span>
        </p>

        <h3>Coal</h3>
        <p>
          <div class={styles.quote}>
            The formation of coal takes a significant amount of time (on the order of a few million years), and the
            first coal-bearing rock units appeared about 290-360 million years ago, at a time known as the Carboniferous
            or "coal-bearing" Period. As well, there are extensive coal deposits from the Cretaceous age - about 65 to
            144 million years ago.
            <span>
              {' '}
              <Links.EL link={{ source: 'https://energyeducation.ca/encyclopedia/Coal_formation' }}>
                Energy Education: coal formation
              </Links.EL>
            </span>
          </div>
        </p>

        <h3>Oil & Gas</h3>
        <p>
          <span class={styles.quote}>
            70% of oil deposits existing today were formed in the Mesozoic age (252 to 66 million years ago), 20% were
            formed in the Cenozoic age (65 million years ago), and only 10% were formed in the Paleozoic age (541 to 252
            million years ago). This is likely because the Mesozoic age was marked by a tropical climate, with large
            amounts of plankton in the ocean.{' '}
            <span>
              {' '}
              <Links.EL link={{ source: 'https://energyeducation.ca/encyclopedia/Oil_formation' }}>
                Energy Education: oil formation
              </Links.EL>
            </span>
          </span>
        </p>

        <h2 id="time">Time</h2>

        <h3>Geologic time</h3>

        <Tables.Geology></Tables.Geology>

        <h3>Human time</h3>

        <p>
          A rough, and disputed timeline of{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Timeline_of_human_evolution' }}>
            human evolution
          </Links.EL>
          .
        </p>

        <Tables.Humans></Tables.Humans>

        <h2 id="emissions">Emissions</h2>

        <h3>Emissions since when?</h3>

        <p>
          <div>
            The IPCC calculates the rise in the global mean surface temperature (GMST) from the beginning of large-scale
            industrial activity. Their{' '}
            <Links.EL
              link={{ source: 'https://www.ipcc.ch/site/assets/uploads/sites/2/2019/06/SR15_AnnexI_Glossary.pdf' }}
            >
              reference period
            </Links.EL>{' '}
            (PDF) is 1850-1900.
          </div>
          <div>
            Industrialisation had begun before this date, primarily in England (
            <Links.EL link={{ source: 'https://ourworldindata.org/contributed-most-global-co2' }}>
              78% of global emissions
            </Links.EL>
            ). Dates for the Industrial Revolution in Europe and the United States are typically given as starting in
            1760, and ending in 1820, or 1840, but emissions were low by comparison to today, just{' '}
            <Links.EL link={{ source: 'https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions' }}>
              4.96 billion tonnes
            </Links.EL>
            , and were localised. Prior to this period humans had been burning wood, coal, and clearing land, but
            emissions were comparatively insignificant.
            <p>
              <Links.EL
                link={{
                  source: 'https://ourworldindata.org/grapher/cumulative-co2-emissions-region?stackMode=absolute',
                }}
              >
                Cumulative emissions
              </Links.EL>
            </p>
            <Tables.CumulativeEmissions></Tables.CumulativeEmissions>
            <p>In 1850 cumulative global emissions were around 0.3% of what they are today.</p>
          </div>
        </p>

        <h3 id="fuel_emissions">Fuel emissions</h3>

        <Tables.FuelEmissions></Tables.FuelEmissions>

        <h2 id="energy">Energy</h2>

        <h3>Units</h3>

        <p>
          SI Units:{' '}
          <Links.EL link={{ source: 'http://www.withouthotair.com/cI/page_328.shtml' }}>Quick reference</Links.EL>
        </p>

        <h3 id="energy_density">Energy density</h3>

        <blockquote>
          You can start explaining some of the limits and possibilities of everyday life or historical progress by
          playing with energy densities: the more concentrated sources of energy give you many great advantages in terms
          of their extraction, portability, transportation and storage costs, and conversion options.{' '}
          <Links.EL
            link={{ source: 'http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf' }}
          >
            Vaclav Smil
          </Links.EL>{' '}
          (PDF)
        </blockquote>

        <br />

        <Tables.EnergyDensities></Tables.EnergyDensities>

        <span class={styles.quote}>*Solar energy has a density over twenty quadrillion times less than oil</span>

        <div>
          <Links.EL link={{ source: 'https://energyeducation.ca/encyclopedia/Energy_density' }}>
            Energy Education | Energy density
          </Links.EL>
        </div>
        <div>
          <Links.EL
            link={{
              source:
                'https://apcentral.collegeboard.org/courses/ap-environmental-science/classroom-resources/energy-primer-ap-environmental-science-student',
            }}
          >
            An Energy Primer for the AP Environmental Science Student
          </Links.EL>
        </div>
        <div>
          <Links.EL
            link={{ source: 'http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf' }}
          >
            Vaclav Smil | Power density primer{' '}
          </Links.EL>
          (PDF)
        </div>
        <div>
          <Links.EL
            link={{
              source: 'https://www.drexel.edu/~/media/Files/greatworks/pdf_sum10/WK8_Layton_EnergyDensities.ashx',
            }}
          >
            A comparison of energy densities of prevalent energy sources in units of joules per cubic meter | Bradley E.
            Layton Drexel University
          </Links.EL>
        </div>
        <div>
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Comparison_of_commercial_battery_types' }}>
            Wikipedia | Comparison of commercial battery types
          </Links.EL>
        </div>

        <h3>Power density</h3>

        <Tables.PowerDensities></Tables.PowerDensities>

        <div>
          <div>
            *
            <Links.EL
              link={{ source: 'http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf' }}
            >
              Power density primer Vaclav Smil
            </Links.EL>{' '}
            (PDF)
          </div>
          <div>
            +
            <Links.EL link={{ source: 'https://www.sciencedirect.com/science/article/pii/S0301421518305512' }}>
              The spatial extent of renewable and non-renewable power generation John van Zalk, Paul Behrens
            </Links.EL>
          </div>
        </div>

        <div>
          <Links.EL link={{ source: 'https://www.volker-quaschning.de/datserv/CO2-spez/index_e.php' }}>
            Volker Quaschning
          </Links.EL>
        </div>

        <h3>Horsepower</h3>

        <p>
          <div>
            There are numerous definitions for the value of{' '}
            <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Horsepower' }}>horsepower</Links.EL>; one metric
            measure is defined as,
          </div>
          <div class={styles.inset}>The power needed to lift 75 kilograms by 1 metre in 1 second.</div>
          Comparing horses and humans,
          <div class={styles.inset}>
            <div>A horse can reach a peak of ~11kW over a period of a few seconds.</div>
            <div>A human can reach a peak of ~1kW over a period of a few seconds.</div>
          </div>
          Over time,
          <div class={styles.inset}>
            <div>A horse can perform sustained activity at a work rate of about 0.75kW.</div>
            <div>A human can perform sustained activity at a work rate of about 0.075kW.</div>
          </div>
          Everyday power requirements,
          <div class={styles.inset}>
            <div>A toaster uses in the range of .8 to 1.5kW of energy.</div>
            <div>An ordinary family salon has ~120 horsepower, and an SUV ~200 horsepower.</div>
          </div>
        </p>

        <h3>Human power</h3>

        <p>
          <div class={styles.quote}>
            <div>
              2000 Calories / 1 day &#215; 1 day / 24 hours &#215; 60 minutes &#215; 60 seconds &#215; 4184 Joules / 1
              Calories = 96.85 J/second = 96.85W ≈ 100W
              <div>
                <Links.EL link={{ source: 'https://energyeducation.ca/encyclopedia/Power_servant' }}>
                  Energy Education | Power Servant
                </Links.EL>
              </div>
            </div>
          </div>
        </p>

        <h2 id="photosynthesis">Photosynthesis</h2>

        <p>
          <span class={styles.quote}>
            Photosynthesis is an inherently inefficient energy conversion process, and production of biomass has large
            space requirements. Even with an intensively cultivated plantation of fast-growing trees, a wood-burning
            electricity generation plant would not have power densities higher than 0.6 W/m2, and for most operations
            the rate would be below 0.5 W/m2. Space demand for such facilities, then, would be two to three orders of
            magnitude (100 to 1,000 times) greater than for coal- or gas-fired electricity generation.
            <div>
              <Links.EL
                link={{ source: 'http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf' }}
              >
                Power density primer Vaclav Smil
              </Links.EL>{' '}
              (PDF)
            </div>
          </span>
        </p>

        {/* <h2>Ocean acidification</h2> */}
      </section>
    </Layout>
  )
}

export default Facts
