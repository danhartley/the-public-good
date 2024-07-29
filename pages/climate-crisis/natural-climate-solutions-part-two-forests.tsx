import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import Formula from 'components/tools/formula'
import Accordion from 'components/accordion/accordion'
import styles from 'pages/pages.module.scss'

const references = [
  {
    name: 'Natural climate solutions | Griscom et al.',
    source: 'https://www.pnas.org/content/114/44/11645',
  },
  {
    name: 'What role can forests play in tackling climate change? | Grantham Institute PDF',
    source:
      'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf',
  },
  {
    name: 'IPCC Forestry 2018 PDF',
    source: 'https://www.ipcc.ch/site/assets/uploads/2018/02/ar4-wg3-chapter9-1.pdf',
  },
  {
    name: 'Forests Absorb Twice As Much Carbon As They Emit Each Year',
    source: 'https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year',
  },
  {
    name: 'Carbon Dioxide Fertilization Greening Earth | NASA 2016',
    source: 'https://www.nasa.gov/feature/goddard/2016/carbon-dioxide-fertilization-greening-earth',
  },
  {
    name: 'Will Climate Change Upend Projections of Future Forest Growth?',
    source: 'https://e360.yale.edu/features/will-climate-change-upend-projections-of-future-forest-growth',
  },
  {
    name: 'En-ROADS climate and policy simulation model | Climate Interactive',
    source: 'https://en-roads.climateinteractive.org/scenario.html?v=2.7.39',
  },
  {
    name: 'A New Hope: GEDI to Yield 3D Forest Carbon Map | NASA',
    source: 'https://www.nasa.gov/feature/goddard/2018/gedi-to-measure-earths-forests',
  },
  {
    name: 'The greening of the Earth is approaching its limit | Science X 2020',
    source: 'https://phys.org/news/2020-12-greening-earth-approaching-limit.html',
  },
  {
    name: 'Limits to growth of forest biomass carbon sink under climate change Zhu et al. 2018',
    source: 'https://www.nature.com/articles/s41467-018-05132-5',
  },
  {
    name: 'How ‘natural climate solutions’ can reduce the need for BECCS | Carbon Brief',
    source: 'https://www.carbonbrief.org/analysis-how-natural-climate-solutions-can-reduce-the-need-for-beccs',
  },
]

const NCSPartTwo = () => {
  return (
    <Layout
      header="Natural climate solutions - Forests"
      rt="9 to 10"
      title="natural-climate-solutions-part-one-forests"
      description={'Forests'}
    >
      <section>
        <h2>What part will forests play in combating the climate crisis?</h2>
        <p>
          In <Links.IL link={{ source: 'climate-crisis/natural-climate-solutions-trees' }}>part I</Links.IL> trees were
          the focus. They have the benefit of being familiar but as a unit they are imprecise and cannot be readily
          compared to other forms of sequestration.
        </p>

        <p>
          Trees also represent a relatively small fraction of the carbon sequestered in many woodlands and forests. The
          amount of carbon stored in soil is striking. In the case of a temperate forest it is 72% but all forests
          contain high amounts of carbon in their soils, and the older the forest, the more carbon is locked up
          underground.
        </p>
        <Accordion header="Carbon storage in temperate forests">
          <aside>
            <h4>Where carbon is stored in a typical temperate forest</h4>
            <dl>
              <dt>
                <strong>Leaves, branches, trunk</strong>
              </dt>
              <dd>17%</dd>
              <dt>
                <strong>Surface litter</strong>
              </dt>
              <dd>5%</dd>
              <dt>
                <strong>Dead wood</strong>
              </dt>
              <dd>0-1%</dd>
              <dt>
                <strong>Roots</strong>
              </dt>
              <dd>6%</dd>
              <dt>
                <strong>Soil</strong>
              </dt>
              <dd>72%</dd>
            </dl>
            <div>
              <Links.EL
                link={{
                  source:
                    'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf',
                }}
              >
                What role can forests play in tackling climate change?
              </Links.EL>{' '}
              (PDF) | Waring et al.
            </div>
          </aside>
        </Accordion>
        <p>
          Grassland and savanna also store carbon in their soils, and although the weight of above-ground carbon is
          minimal compared to that stored in the trunks and branches of forest trees, disturbing the soil and replacing
          natural vegetation with trees leads to a net loss of <Formula>CO2</Formula> to the atmosphere; a process which
          takes years to reverse.
        </p>
        {/* <p>An example of inappropriate land use change occurred in Flow Country in the north of Scotland. 20% of peatlands in Flow Country were drained and planted with non-native conifers, a process that accelerated between 1950 and 1980.</p>
            <blockquote cite='https://www.theflowcountry.org.uk/flow-facts/flow-fact-1/'>
            Many peatlands have been growing undisturbed for thousands of years, so although they cover just 3% of the world’s land area, they hold nearly 30% of all the carbon stored on land. The Flow Country’s peat bogs alone store about 400 million tonnes – more than double the amount in all of Britain’s woodlands.
            </blockquote>
            <cite><Links.EL link={{source:'https://www.theflowcountry.org.uk/flow-facts/flow-fact-1/'}}>Flow Country | Climate change</Links.EL> </cite> */}
        <p>
          In order to compare land use a common unit is needed; the hectare is the unit most widely used for measuring
          land area.
        </p>
        <h3>Hectares</h3>
        {/* <p>It's useful to have a sense of what a hectare looks like. In a city a hectare can cover several streets or blocks and contain hundreds, or thousands of people.</p>
            <p>But urban areas account for only <Links.EL link={{source:'https://ourworldindata.org/land-use'}}>one percent</Links.EL> of land use.</p> */}
        <Accordion header="Hectare equivalents">
          <aside>
            <h4>Hectare - ha</h4>
            <dd>
              The hectare, although not a unit of SI, is the only named unit of area that is accepted for use with SI
              units.
            </dd>
            <dl>
              <dt>
                <strong>Equivalent units</strong>
              </dt>
              <dd>10,000 square metres.</dd>
              <dd>There are 100 hectares in one square kilometre.</dd>
              <dd>An acre is about 0.405 hectares.</dd>
              <dd>One hectare contains about 2.47 acres.</dd>
            </dl>
            <div>
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Hectare' }}>Hectare | Wikipedia</Links.EL>
            </div>
          </aside>
        </Accordion>
        {/* <p>Most farms are small and family-run. Those under 2 hectares <Links.EL link={{source:'https://www.sciencedirect.com/science/article/pii/S0305750X15002703'}}> operate about 12% of the world’s agricultural land</Links.EL>. Large farms can be thousands, or tens of thousands of hectares.</p> */}
        <p>
          Though forests cover over 4 billion hectares, their minimum size is surprisingly small. The UNFCCC defines a
          forest as{' '}
          <Links.EL link={{ source: 'https://www.nature.com/articles/news.2009.842' }}>
            an area of land 0.05–1 hectare in size, of which more than 10–30% is covered by tree canopy
          </Links.EL>
          .
        </p>
        <h3>Land use</h3>
        <p>
          71% of the Earth's surface is Ocean. The remaining 29% occupied by land covers 104 million square kilometres -
          10,400 million hectares.
        </p>
        <p>10% of the land is covered in glaciers, and a further 19% is barren. The remainder is deemed habitable.</p>
        <p>
          Competition for habitable land is intense; its management critical for food, biodiversity, and natural
          services.
        </p>
        <Accordion header="Habitable land use">
          <aside>
            <h4>Habitable land use</h4>
            <dl>
              <dt>
                <strong>Agriculture</strong>
              </dt>
              <dd>50%</dd>
              <dt>
                <strong>Forest, woodland</strong>
              </dt>
              <dd>37%</dd>
              <dt>
                <strong>Shrubs and grasslands</strong>
              </dt>
              <dd>11%</dd>
              <dt>
                <strong>Freshwater coverage</strong>
              </dt>
              <dd>1%</dd>
              <dt>
                <strong>Built up urban area inc. all human infrastructure</strong>
              </dt>
              <dd>1%</dd>
            </dl>
            <div>
              <Links.EL link={{ source: 'https://ourworldindata.org/land-use' }}>Land Use | Our World in Data</Links.EL>
            </div>
          </aside>
        </Accordion>
        <p>37% of land is occupied by forests. 50% by agriculture.</p>
        <h3>
          Are forests sinks or sources of <Formula>CO2</Formula>?
        </h3>
        {/* <p>We can compare land use today with land use 10,000 years ago.</p>
                <blockquote cite='https://ourworldindata.org/world-lost-one-third-forests'>
                <div>10,000 years ago 57% of the world’s habitable land was covered by forest. That’s 6 billion hectares.  Today, only 4 billion hectares are left. The world has lost one-third of its forest – an area twice the size of the United States.</div>
                </blockquote>
                <cite><Links.EL link={{source:'https://ourworldindata.org/world-lost-one-third-forests'}}>The world has lost one-third of its forest Our World in Data</Links.EL></cite> */}
        <p>
          In <Links.IL link={{ source: 'climate-crisis/natural-climate-solutions-trees' }}>Part I</Links.IL> it was
          estimated that 200 gigatonnes of carbon could be sequestered by the end of the century.
        </p>
        <p>
          The Grantham Institute suggests a realistic estimate is{' '}
          <Links.EL
            link={{
              source:
                'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf',
            }}
          >
            40-60 gigatons
          </Links.EL>
          .
        </p>
        <blockquote cite="https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf">
          <div>
            Reforestation and afforestation could reduce the concentration of carbon dioxide in the atmosphere by
            approximately 15 to 30 parts per million (ppm). To place this into context, the concentration has risen at
            an unprecedented rate from about 280ppm before the Industrial Revolution began, to the present-day
            concentration of 400ppm and above.
          </div>
          <div>
            Therefore, even based on optimistic estimates, tree-planting alone will be insufficient to bring carbon
            dioxide concentration to net-zero, unless immediate and sustained action is also taken to reduce the current
            rate of emission
          </div>
        </blockquote>

        <p>
          Forests are both a source of carbon and a carbon sink. Carbon is primarily lost when forests are degraded or
          cleared, but all plants, including trees, also release <Formula>CO2</Formula> during cellular respiration.
        </p>
        <Accordion header="Cellular respiration">
          <aside>
            <h4>Cellular respiration</h4>
            <div>
              Cellular respiration is in a way the reverse of photosynthesis. Respiration is associated with humans and
              other animals but plants also respire.
            </div>
            <p>
              <Formula>C6H12O6</Formula> + 6<Formula>O2</Formula> → 6<Formula>CO2</Formula> + 6<Formula>H2O</Formula> +
              heat
            </p>
          </aside>
        </Accordion>
        <p>
          A paper in Nature on{' '}
          <Links.EL link={{ source: 'https://www.nature.com/articles/s41558-020-00976-6' }}>
            forest carbon fluxes
          </Links.EL>{' '}
          found that between 2001 and 2019 global forests emitted 8.1 billion tonnes of <Formula>CO2</Formula> into the
          atmosphere, and absorbed 16 billion tonnes. Their data new data combined ground measurements with satellite
          observations.
        </p>
        <p>
          <div>
            In a supporting article for the{' '}
            <Links.EL
              link={{ source: 'https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year' }}
            >
              World Resources Institute
            </Links.EL>
            , the authors state that of the 3 major rainforests only the Congo River Basin has enough forest standing to
            remain a carbon sink. The forests of Southeast Asia are collectively a source of carbon, and the Amazon
            Basin is teetering on the edge of becoming a source.
          </div>
        </p>
        <p>
          Tropical rainforests are far and away the most important ecosystems for mitigating climate change. New forest
          planted since the turn of the century represent less than 5% of the current global forest carbon sink.
        </p>
        <blockquote cite="https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year">
          Overall, the data show that keeping existing forests standing remains our best hope for maintaining the vast
          amount of carbon forests store and continuing the carbon sequestration that, if halted, will worsen the
          effects of climate change.
        </blockquote>
        <cite>
          <Links.EL
            link={{ source: 'https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year' }}
          >
            Forests absorb twice as much carbon as they emit
          </Links.EL>{' '}
        </cite>
        <p>
          The authors conclude that good stewardship of forests is critical for maintaining forest sinks. They also
          highlight the importance of protected areas and local management by indigenous people living in the forest.
        </p>
        <p>
          This last point is echoed in a study of forest areas within Amazon indigenous territories and protected areas:
        </p>
        <blockquote cite="https://www.pnas.org/content/117/6/3015">
          Our results reinforce the growing body of research showing that indigenous land tenure and management are key
          to safeguarding Amazonian forests against increasing demands for the region’s land, energy, and mineral
          resources.
        </blockquote>
        <cite>
          <Links.EL link={{ source: 'https://www.pnas.org/content/117/6/3015' }}>
            The role of forest conversion … | Walker et al.
          </Links.EL>{' '}
        </cite>
        <h3>
          <Formula>CO2</Formula> fertilisation
        </h3>
        <p>
          Providing there are no factors limiting growth, higher levels of carbon dioxide in the atmosphere lead to an
          increase in photosynthesis and plant growth.
        </p>
        <p>
          There is strong evidence that plants, and especially forests, have benefited from increased levels of{' '}
          <Formula>CO2</Formula>. This has helped limit the rate of increase of <Formula>CO2</Formula> in the
          atmosphere, a phenomenon known as <Formula>CO2</Formula> fertilisation.
        </p>
        <p>
          In 2016 NASA reported significant greening in the previous 35 years, 70% of which was attributed to{' '}
          <Formula>CO2</Formula> fertilisation.
        </p>
        <p>
          These findings fit with evidence that{' '}
          <Links.EL link={{ source: 'https://sos.noaa.gov/datasets/ocean-atmosphere-co2-exchange/' }}>
            25% of carbon dioxide emissions are absorbed by land plants and trees
          </Links.EL>{' '}
          of which forests absorb roughly{' '}
          <Links.EL link={{ source: 'https://www.nature.com/articles/s41558-020-00976-6' }}>
            7.6 billion tonnes of <Formula>CO2</Formula>
          </Links.EL>{' '}
          or 15% of all emissions annually.
        </p>
        <p>
          Gabriel Popkin presents a review of the current thinking in his article at Yale Environment,{' '}
          <Links.EL
            link={{
              source: 'https://e360.yale.edu/features/will-climate-change-upend-projections-of-future-forest-growth',
            }}
          >
            Will Climate Change Upend Projections of Future Forest Growth?
          </Links.EL>{' '}
          He concludes:
        </p>
        <blockquote cite="https://e360.yale.edu/features/will-climate-change-upend-projections-of-future-forest-growth">
          The bottom line is that the changing climate is already hammering forests around the world, and future impacts
          could become severe enough to negate forests’ ability to sequester carbon altogether.
        </blockquote>
        <h3>Limiting factors</h3>
        <p>
          Plant growth is dependent on many factors. Some are caused by climate change - rising temperatures and water
          shortages. Others are a consequence of human activity such as elevated levels of nitrogen resulting from the
          addition of fertilisers.
        </p>
        <Accordion header="Limiting factors">
          <aside>
            <h4>Limiting factors</h4>
            <dl>
              <dt>
                <strong>Nitrogen</strong>
              </dt>
              <dd>
                <blockquote cite="https://www.nps.gov/subjects/air/nature-nitrogensulfur.htm">
                  Nitrogen is an essential plant nutrient but excess nitrogen from atmospheric deposition can stress
                  ecosystems. Excess nitrogen acts as a fertilizer, favoring some plants and leaving others at a
                  competitive disadvantage.
                </blockquote>
                <cite>
                  <Links.EL link={{ source: 'https://www.nps.gov/subjects/air/nature-nitrogensulfur.htm' }}>
                    National Park Service
                  </Links.EL>{' '}
                </cite>
                <p>
                  Burning fossil fuels and agricultural practices have increased the levels of atmospheric nitrogen.
                  Nitrogen deposited in forests in the form of reactive nitrate can act as a fertiliser, increasing
                  carbon dioxide sequestration, but excess nitrogen has a detrimental effect on soil fertility.
                </p>
              </dd>
              <dt>
                <strong>Temperature</strong>
              </dt>
              <dd>
                Higher temperatures lead to an increase in the rate of photosynthesis, up to a point. Warmer
                temperatures also coincide with greater plant biodiversity. Both effects are contingent on available
                water.
              </dd>
              <dt>
                <strong>Water</strong>
              </dt>
              <dd>
                Water is critical for plant growth. Changes in rates and timing of precipitation, soil water retention
                and temperature all affect plant physiology.
              </dd>
              <dt>
                <strong>Soil & other minerals</strong>
              </dt>
              <dd>
                In addition to nitrogen, plants are dependent on a number of minerals including potassium, calcium,
                sulfur, magnesium, copper, zinc and iron.
              </dd>
            </dl>
          </aside>
        </Accordion>
        <p>
          Climate change is also affecting plants in more general ways. Phenology - the timing of events in the
          lifecycle of a plant - is affected by seasonal variation, temperature, rainfall, and interaction with other
          species - such as pollinators and seed spreading animals - which are themselves affected by these variations.
          This can lead to the life cycles of mutually dependent species getting out of sync.
        </p>
        <p>
          Planting the right trees in the right place is fundamental to the success of many restoration, reforestation
          and afforestation projects. In complex managed and unmanaged forests native trees are better adapted to
          available ecological niches and therefore more resilient.
        </p>
        <p>
          Planting trees where established peatland or grassland is in place leads to an increase in emissions, in
          either the short, or long term. The albedo effect is an unintended consequence of planting trees that grow
          slowly because of short growing seasons on land that previously radiated sunlight from snow, ice or less dark
          soils and vegetation.
        </p>
        <Accordion header="The albedo effect">
          <aside>
            <h4>The albedo effect</h4>
            <div>
              <blockquote cite="https://www.carbonbrief.org/explainer-10-ways-negative-emissions-could-slow-climate-change">
                A measure of how much of the sun's energy is reflected by a surface. It is derived from the Latin word
                albus, meaning white. Albedo is measured as a percentage or fraction of the sun’s energy that is
                reflected away. Snow and ice tend to have a higher albedo than, for example, soil, forests and open
                water.
              </blockquote>
              <cite>
                <Links.EL
                  link={{
                    source:
                      'https://www.carbonbrief.org/explainer-10-ways-negative-emissions-could-slow-climate-change',
                  }}
                >
                  Albedo | Carbon Brief
                </Links.EL>{' '}
              </cite>
            </div>
          </aside>
        </Accordion>
        <p>
          Whilst the tropics has remained a carbon sink, deforestation has lead to increased emissions. There has been
          forest regrowth in the temperate zones, and parts of the boreal zone.
        </p>
        <blockquote cite="https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year">
          Although important to give these young forests the chance to grow into old ones, protecting primary and mature
          secondary forests today is most important for curbing climate change.
        </blockquote>
        <cite>
          <Links.EL
            link={{ source: 'https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year' }}
          >
            Forests Absorb Twice As Much Carbon As They Emit Each Year
          </Links.EL>
        </cite>

        <p>Available… IPCC… Crowther, etc…</p>
        <h3>Natural services</h3>
        <p>Keystone species…</p>
        <p>Transpiration…</p>
        <p>Additional benefits to humans…</p>
        <Accordion header="Benefits of trees">
          <aside>
            <h4>Benefits of trees</h4>
            <ul className={styles.unorderedList}>
              <li>
                Clean the air of harmful pollutants (such as carbon monoxide, ammonia and sulphur dioxide through their
                leaves, barks and roots).
              </li>
              <li>Limit the effects of urban heat islands, reducing air conditioning needs.</li>
              <li>Control land erosion, reduce landslides and control surface water, and mitigate flood damage.</li>
              <li>Boost biodiversity in cities.</li>
              <li>Green spaces in urban areas can contribute to stronger communities and improved wellbeing.</li>
              <li>
                Fallen leaves, flowers, fruits or other tree parts form mulches. These provide a natural filter for
                polluted rainwater, supplying clean water to other plants in the vicinity as well as our rivers and
                oceans.
              </li>
            </ul>
          </aside>
        </Accordion>
        <h3>Bioenergy with Carbon Capture & Storage BECCS</h3>
        <p>BECSS is…</p>
        <p>In theory…</p>
        <p>
          There are at least{' '}
          <Links.EL
            link={{
              source: 'https://www.carbonbrief.org/explainer-10-ways-negative-emissions-could-slow-climate-change',
            }}
          >
            ten negative emissions technologies
          </Links.EL>
          . Of these BECCS and DAC have the loudest advocates but they are unproven. Though these technologies are
          undoubtedly interesting, and in some cases ingenious, it is naive to assume either their efficacy or
          practicality. Previous transitions and revolutions in energy, agriculture and construction have taken a long
          time, despite clear benefits and, in time, financial reward.
        </p>
        <h3>Conclusion</h3>
        <p>
          Nature was not designed to solve a problem but via the constant friction of natural selection, change and
          chance, created an infinite, resilient jigsaw.
        </p>
        <p>The origin of coal…</p>
        <p>
          The multiple chemical and biological processes that combine in photosynthesis and respiration enable plants to
          convert carbon dioxide, water and energy from the sun into sugars from which plants assemble their own forms,
          and by extension provide the food and materials to sustain all other life on the planet.
        </p>
        <p>
          It is understandable that we adapt our surroundings to sustain and enrich our lives but it is dispiriting and
          paradoxical that we destroy and create in order to throw away food and baubles.
        </p>
      </section>
      <section>
        <h2>References</h2>
        <Links.ExternalLinksList links={references} />
      </section>
      <Links.RelatedLinks
        links={[
          { value: 'climate-crisis/natural-climate-solutions-trees', text: 'Natural climate solutions - Trees' },
          { value: 'climate-crisis/carbon-element-of-life', text: 'Carbon - element of life' },
          { value: 'climate-crisis/facts', text: 'Facts' },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default NCSPartTwo
