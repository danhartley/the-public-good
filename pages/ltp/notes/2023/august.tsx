import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import styles from 'pages/pages.module.scss'

const August = () => {
  return (
    <Layout
      header="August 2023 Learn the Planet Notes"
      title="August 2023 Learn the Planet Notes"
      description={'August 2023 Learn the Planet Notes'}
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <div class={styles.day}>
          <span class={styles.date}>Tuesday 1 August 2023</span>
          <h3>Code decisions</h3>
          <ul>
            <li>Vanilla JS, CSS and HTML</li>
            <li>Universal functions</li>
            <li>HTML & CSS: templates + naming convention</li>
            <li>Lesson selection</li>
          </ul>
          Variations
          <ul>
            <li>(User) species</li>
            <li>(Random) selection of species</li>
            <li>Distractors selected from filtered selection or all</li>
            <li>Latin or common name or both, selected or entered (6 variations)</li>
            <li>Image to match latin or common name or both (3 variations)</li>
          </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Wednesday 9 August 2023</span>

          <h3>Features</h3>

          <ul>
            <li>Species list (iNat has only observation list)</li>
            <li>Multiple origins (default iNat)</li>
            <li>Observation count (iNat only)</li>
            <li>Single species</li>
            <li>
              Single species details
              <ul>
                <li>Detail drawer</li>
                <li>native</li>
                <li>Photo rights</li>
                <li>day | month | year</li>
                <li>User (user_id)</li>
                <li>lat | lng + radius</li>
                <li>place_id</li>
              </ul>
            </li>
            <li>
              <strong>Oral history tellers</strong> (cf. combination of coach for language and participant level)
            </li>
            <li>
              Scenarios rather than lessons? e.g. Searching for edible mushrooms instead of simply Edible mushrooms
              <ul>
                <li>Signs: trees, time of year, type of mushroom</li>
                <li>Accompanying narrative (that changes? Generated?)</li>
                <li>Guide (cf. language coach)</li>
                <li>Initially static content (dynamic may follow)</li>
                <li>Warm ups? Quick test on what was learnt on previous excursion</li>
                <li>
                  <strong>Excursion</strong> as <strong>complement</strong> to <strong>observation</strong>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Tuesday 22 August 2023</span>

          <h3>Fire and restoration research</h3>

          <h4>Plan</h4>

          <ul>
            <li>Create themed stories linking events to species (putting species in context)</li>
            <li>
              e.g. Regeneration (
              <Links.EL
                link={{ source: 'https://en.wikipedia.org/wiki/Secondary_succession', label: 'Secondary succession' }}
              >
                Secondary succession
              </Links.EL>
              ): Arrábida after the fire
            </li>
            <li>
              <Links.EL
                link={{
                  source: 'https://www.sciencedirect.com/science/article/pii/B9780444639981000124#s0040',
                  label: 'Ecosystem management and ecological restoration in the Anthropocene',
                }}
              >
                Ecosystem management and ecological restoration in the Anthropocene
              </Links.EL>
            </li>
          </ul>

          <h3>Mediterranean climate-zone forests and woodlands (2019)</h3>

          <p>These notes are biased towards MB although the article looks at MCRs in general.</p>

          <ul>
            <li>
              The world's Mediterranean Climate Regions (MCRs) cover only about{' '}
              <strong>2% of the earth's surface</strong>.
            </li>
            <li>
              MCRs are found in five disjunct parts of the world – the <strong>Mediterranean Basin</strong> (MB),{' '}
              <strong>California</strong>, <strong>coastal central Chile</strong>,{' '}
              <strong>southwestern Australia</strong>, and <strong>southwestern South Africa</strong> – at temperate{' '}
              <strong>latitudes between about 30° and 45°</strong>, generally{' '}
              <strong>where cold ocean currents wash the west coasts of the continents</strong>.
            </li>
            <li>
              Climatically, the world's Mediterranean-climate regions are unique because{' '}
              <strong>the wet season is concurrent with the cold season</strong>, and the{' '}
              <strong>warm, dry season is akin to an annual drought of 3–6 months</strong>.
            </li>
            <li>
              This pattern leads to the growing season being mostly out-of-phase with the wet season, and{' '}
              <strong>
                plants either must grow in locations with reliable surface or ground water supply, or develop
                adaptations to survive long and warm dry seasons
              </strong>
              .
            </li>
            <li>
              Although the MCRs are widely separated, their vegetation is very similar, providing a classic example of{' '}
              <strong>convergent evolution</strong>.
            </li>
            <li>
              The MCRs support extremely high plant diversity, nearly{' '}
              <strong>20% of the world's cataloged flora</strong>.
            </li>
            <li>
              Cool slopes and basins in the MCRs tend to support higher biomass than warm slopes, due to the
              overwhelming influence of water availability and transpiration demand on plant and soil productivity.
            </li>
            <li>
              Because drought during the growing season is the principle ecological stress in the MCRs, spatial
              heterogeneity in soil depth, water infiltration and{' '}
              <strong>water holding capacity is a major driver of vegetation pattern</strong>.
            </li>
            <li>
              <strong>Low soil development makes soil characteristics highly dependent on bedrock</strong>.
            </li>
            <li>
              Mediterranean forests and woodlands are found mostly on alfisols and inceptisols, and sometimes on
              entisols, but jarrah forests in southwestern Australia occur on deep, lateritic oxisols.
            </li>
            <li>
              In MCRs other than the MB the parent material is often quartz-rich and the soils are often excessively
              well-drained.
            </li>
            <li>
              Soils developed on <strong>siliceous bedrock</strong> usually show low profile differentiation and
              leaching and are <strong>moderately acidic</strong>. <strong>Inceptisols</strong> often support{' '}
              <strong>conifer forests</strong>, typically dominated by <strong>Pinus</strong>.
            </li>
            <li>
              One <strong>distinct feature of the MB</strong> as compared to the other Mediterranean-climate regions is
              the <strong>abundance of limestones</strong>.
            </li>
            <li>
              On parent material (limestones), it is common to find red and brown-reddish Mediterranean soils called{' '}
              <strong>terra rossa</strong>.
            </li>
            <li>
              Soil erosion is a major issue in all of the MCRs, due to the frequently skeletal soils, high disturbance
              rate.
            </li>
            <li>
              The older landscapes in South Africa and Australia are less topographically diverse and less
              erosion-prone.
            </li>
            <li>
              Long human influence on MB ecosystems leads to difficulty in discerning the extent to which modern
              vegetation is the result of “natural” processes versus human agency.
            </li>
            <li>
              Today, as in the other MCRs, management focus in MB forests is more centered on recreation, ecological,
              cultural, and landscape values.
            </li>
          </ul>

          <h4>Vegetation types</h4>
          <ul>
            <li>
              Sclerophyllous (hard-leaved, with a high weight-to-area ratio) evergreen shrublands with widespread
              adaptations to intense fire.
              <ul>
                <li>
                  <strong>Maquis/macchia</strong> in the MB, <strong>chaparral</strong> in California,{' '}
                  <strong>fynbos</strong> in South Africa, <strong>mallee</strong> in Australia, and{' '}
                  <strong>matorral</strong> in Chile
                </li>
              </ul>
            </li>
            <li>
              Lower, more xeric, sometimes drought-deciduous shrublands.
              <ul>
                <li>
                  <strong>Garrigue</strong> in the MB and <strong>coastal sage scrub</strong> in California
                </li>
              </ul>
            </li>
            <li>
              Woodlands with drought-adapted deciduous and evergreen species.
              <ul>
                <li>
                  <strong>Oaks, pines, cypresses</strong> in the MB and California, <strong>acacias</strong> in Chile
                  and South Africa, <strong>eucalyptus</strong> and <strong>acacias</strong> in Australia
                </li>
              </ul>
            </li>
            <li>
              Forests in moister, often higher locations.
              <ul>
                <li>
                  <strong>Pine</strong> and <strong>fir</strong> dominated forests of California and the MB,{' '}
                  <strong>Nothofagus forests</strong> in Chile, and <strong>jarrah forests</strong> of Australia
                </li>
              </ul>
            </li>
          </ul>

          <h4>Species</h4>
          <ul>
            <li>
              California
              <ul>
                <li>Giant sequoia (Sequoiadendron giganteum)</li>
                <li>Blue oak (Q. douglasii)</li>
                <li>Serotinous conifer woodland on serpentine soils</li>
                <li>Dense mixed conifer and broadleaf forest on relatively fertile metasediments</li>
                <li>Open conifer woodland on serpentinite</li>
                <li>… incomplete: revised if required</li>
              </ul>
            </li>
            <li>
              MB
              <ul>
                <li>P. halepensis</li>
                <li>Juglans regia</li>
                <li>Castanea sativa</li>
                <li>Acacia</li>
                <li>Eucalyptus</li>
                <li>Phytophthora</li>
                <li>Cistus</li>
                <li>Rosmarinus</li>
                <li>Ulex</li>
                <li>Arbutus</li>
                <li>Pistacia</li>
                <li>Quercus</li>
                <li>Rhamnus</li>
              </ul>
            </li>
          </ul>

          <h4>Terms</h4>
          <dl>
            <dt>
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Serotiny', label: 'Serotiny' }}>
                Serotiny
              </Links.EL>
            </dt>
            <dd>
              Remaining on a tree after maturity and opening to release seeds only after exposure to certain conditions,
              especially heat from a fire. Used of the cones of gymnosperms.
            </dd>
            <dt>
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Serpentine_soil', label: 'serpentine soils' }}>
                Serpentine soil
              </Links.EL>{' '}
            </dt>
            <dd>Weathered products of a range of ultramafic rocks composed of ferromagnesian silicates.</dd>
            <dt>Xeric</dt>
            <dd>Characterized by, relating to, or requiring only a small amount of moisture.</dd>
            <dt>
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Paleosol', label: 'Paleosol' }}>
                Paleosol
              </Links.EL>
            </dt>
            <dd>An ancient soil that formed in the past.</dd>
            <dt>
              <Links.EL link={{ source: 'https://en.wikipedia.org//wiki/Alfisol', label: 'Alfisol' }}>Alfisol</Links.EL>{' '}
              (USDA soil taxonomy)
            </dt>
            <dd>Formed in semi-arid to humid areas, typically under a hardwood forest cover.</dd>
            <dt>
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Inceptisol', label: 'Inceptisol' }}>
                Inceptisol
              </Links.EL>{' '}
              (USDA soil taxonomy)
            </dt>
            <dd>Formed quickly through alteration of parent material.</dd>
            <dt>
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Oxisol', label: 'Oxisol' }}>Oxisol</Links.EL>{' '}
              (USDA soil taxonomy)
            </dt>
            <dd>
              Best known for their occurrence in tropical rain forest within 25 degrees north and south of the Equator.
            </dd>
            <dt>
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Entisol', label: 'Entisol' }}>Entisol</Links.EL>{' '}
              (USDA soil taxonomy)
            </dt>
            <dd>
              Do not show any profile development other than an A-horizon (first layer parallel to the soil surface
              whose physical, chemical and biological characteristics differ from the layers above and beneath).
              <br />
              <br />
              New or underdeveloped soils found in locations where the formation of pedogenic horizons has not yet
              occurred, or where it cannot occur
            </dd>
            <dt>
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Terra_rossa_(soil)', label: 'Terra rossa' }}>
                Terra rossa
              </Links.EL>
            </dt>
            <dd>
              A well-drained, reddish, clayey to silty soil with neutral pH conditions typical of the Mediterranean
              region.
            </dd>
            <dt>
              <Links.EL
                link={{
                  source: 'https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/pedon',
                  label: 'Pedon',
                }}
              >
                Pedon
              </Links.EL>{' '}
            </dt>
            <dd>
              The soil pedon reflects the physical, chemical, and biological alterations that took place in the past
              that transformed parent material into soil particles, secondary minerals, aggregates, and horizons.
            </dd>
            <dt>
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Seral_community', label: 'Seral community' }}>
                Seral community
              </Links.EL>
            </dt>
            <dd>
              An intermediate stage found in ecological succession in an ecosystem advancing towards its climax
              community. In many cases more than one seral stage evolves until climax conditions are attained.
            </dd>
            <dt>
              <Links.EL
                link={{
                  source: 'https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.12921',
                  label: 'Evolutionary ecology of resprouting and seeding in fire-prone ecosystems',
                }}
              ></Links.EL>
              Obligate seeders
            </dt>
            <dd>
              Woody plants that cannot re-sprout from their trunks and are completely dependent on seed for regeneration
            </dd>
            <dt>
              <Links.EL
                link={{ source: 'https://en.wikipedia.org/wiki/Secondary_succession', label: 'Secondary succession' }}
              >
                Secondary succession
              </Links.EL>
            </dt>
            <dd>
              A process started by an event (e.g. forest fire, harvesting, hurricane, etc.) that reduces an already
              established ecosystem (e.g. a forest or a wheat field) to a smaller population of species.
            </dd>
          </dl>

          <h4>MCR soils</h4>
          <ul>
            <li>Xeric moisture regime</li>
            <li>Moderate weathering</li>
            <li>Moderate leaching leading to shallow, weathering-limited soils</li>
            <li>Widespread presence of paleosols, especially in South Africa and Australia</li>
          </ul>

          <h4>Disturbance</h4>

          <ul>
            <li>
              Most Mediterranean climate areas receive sufficient precipitation in the winter and early spring to
              produce a crop of fuel just in time for the hot, dry summer. Where ignition sources are at hand, fire is
              the inevitable outcome, and{' '}
              <strong>Mediterranean vegetation is among the most fire-prone and fire-shaped in the world</strong>.
            </li>
            <li>
              The origin of the Mediterranean-type climate in the middle Miocene led to high levels of diversification
              in sclerophyllous and other species, with fire being a major driver of speciation in four of the five
              MCRs.
              <ul>
                <li>Seed banking</li>
                <li>Serotiny</li>
                <li>Fire-cued germination in high severity fire regimes</li>
                <li>
                  Fire resistant traits (e.g., thick bark, self-pruning of lower branches) in low severity fire regimes
                </li>
              </ul>
            </li>
            <li>
              Because of their dense crowns, highly-combustible foliage, and very low fuel moistures in the late dry
              season, sclerophyllous shrublands in all of the MCRs support high severity fire regimes.
            </li>
            <li>
              In the northern hemisphere MCRs serotiny is restricted to conifer taxa (pines and cypresses) that coexist
              with the sclerophyll species.
            </li>
            <li>
              Low severity fire regimes are concentrated in woodlands and open forest systems, dominated by oaks and
              certain fire-resistant pine species in California and the MB.
            </li>
            <li>
              <strong>Humans have played and continue to play the major role in fire ignition.</strong>
            </li>
            <li>
              <strong>In the MB, 95% of fires are human caused</strong>; this pattern has probably not changed greatly
              over time.
            </li>
            <li>
              <strong>In Chile</strong> the height of the Andes prevents westward advection of summer storms from the
              South American interior and nearly all fires are human caused;{' '}
              <strong>fires were nearly unknown before human settlement</strong>.
            </li>
            <li>
              In South Africa and Australia, lightning and human ignitions have not been assessed at the MCR scale, but
              local studies suggest balances between 30:70 and 70:30 for natural versus human caused fires.
            </li>
            <li>
              <strong>
                In California, fires in shrub-dominated and oak woodland landscapes are almost entirely anthropogenic
              </strong>
              , but montane forests experience relatively frequent lightning ignitions and the modern balance of natural
              to human fires is closer to 50:50. Although mountainous areas in eastern California have always supported
              sufficiently high lightning strike densities to account for most of the historical area burned (natural
              fire rotations of 20–35 years, dominated by high frequency, low severity fire, lowland areas in western
              California would have experienced very little fire before the arrival of people.
            </li>
            <li>
              <strong>Direct fire impacts</strong> are usually concentrated in the top few centimeters of soil:
              <ul>
                <li>
                  Net ecosystem losses of nutrients (but ephemeral increases in cations)), especially nitrogen through
                  volatilization.
                </li>
                <li>Development of soil water repellency (hydrophobicity) in coarse-grained soils.</li>
                <li>Temporary loss of forest floor habitat for soil biota.</li>
              </ul>
            </li>
            <li>
              <strong>Indirect effects of fire</strong> are often more damaging:
              <ul>
                <li>Mostly related to the temporary loss of plant biomass and the forest floor cover.</li>
                <li>Sometimes soil sealing in fine-textured soils.</li>
                <li>
                  Thick organic layers at the top of the soil pedon are rare in MCR soils, and even low intensity fires
                  can remove much of the soil cover.
                </li>
                <li>
                  Soil erosion and runoff risk in the MCRs can increase dramatically after burning, causing further
                  nutrient losses and impacts downstream such as flooding and siltation.
                </li>
                <li>
                  <strong>
                    Peak and storm flows in burned MCR watersheds can radically increase in the years after fire
                  </strong>
                  , with higher flows persisting for 5–10 years.
                </li>
                <li> Recurrent high severity fires may cause ecosystem nutrient depletion.</li>
                <li>
                  In MCR forests, stand-replacing fires drastically reduce transpiration at the landscape scale, and
                  ground water and surface water levels typically rise notably until vegetation regrowth is well
                  underway.
                </li>
                <li>
                  e.g. (
                  <Links.EL
                    link={{
                      source:
                        'https://ars.els-cdn.com/content/image/1-s2.0-B9780444639981000124-f12-09-9780444639981.jpg',
                    }}
                  >
                    photo
                  </Links.EL>
                  ) Colonization of oldfields. Succession from shrubland (bottom) to Aleppo pine (
                  <strong>P. halepensis</strong>) forest (center). Portion of site was burned earlier in the year.
                  Valencia, Eastern Spain.
                </li>
                <li>
                  <strong>
                    Fire is by far the dominant large-scale disturbance process in Mediterranean forests and woodlands
                  </strong>
                  , but insect and disease outbreaks are locally important, as are human-driven impacts such as
                  livestock grazing, logging, and land use change. A variety of indigenous beetle taxa have evolved to
                  attack fire- or drought-weakened trees in MCR forests, and the fear of such outbreaks is one of the
                  principle justifications for intensive post-fire tree harvest in much of the MB.
                </li>
                <li>
                  <strong>Almost all MB forests are secondary</strong>, and seral shrublands and forests tend to be
                  highly flammable.
                </li>
                <li>
                  Current MB forest compositions generally include at least some important species moved by man. For
                  example, Phoenician, Greek, and Roman traders greatly expanded the distributions of chestnut (
                  <strong>Castanea sativa</strong>) and walnut (<strong>Juglans regia</strong>).
                </li>
                <li>
                  Human introduction of invasive species is a major issue in all of the MCRs. <strong>Acacia</strong>{' '}
                  and <strong>eucalyptus</strong> species from Australia and pines from the MB and California were
                  introduced to the other MCRs beginning mostly in the 19th century.
                </li>
                <li>
                  <strong>Phytophthora</strong> species introduced from the tropics are causing extensive mortality of
                  oaks in California and the MB.
                </li>
              </ul>
            </li>
          </ul>

          <h4>Climate change impacts</h4>

          <ul>
            <li>
              Current trends in temperature are similar across the MCRs.{' '}
              <strong>
                In the MB, mean annual temperatures have risen about 1.5° since 1910, with most of the change in the
                summer and since 1970
              </strong>
              .
            </li>
            <li>
              Current trends in precipitation are more divergent. The eastern MB shows a significant decrease in annual
              precipitation over the last half century, but the trend in the western MB is not as clear.
            </li>
            <li>
              Under RCPs 4.5 (peak 2040) and 6.0 (peak 2080), mean annual temperatures are projected to increase between
              0.7° and 1.5° by 2035, and 2°–4° or more by 2100.
            </li>
            <li>Precipitation projections suggest drier future conditions for all MCRs except California</li>
            <li>
              <strong>
                Climate change effects on vegetation in the MCRs, in interaction with fire, will be significant
              </strong>
              . Temperate mixed forests (broadleaf + conifer species), which dominate the forests of California and the
              MB, were projected to be the most vulnerable biome type to the combination of global warming and increased
              fire activity.
            </li>
            <li>
              For the MCRs, soil moisture projections are universally down, due primarily to higher potential
              evapotranspiration but also to projected decreasing precipitation input in some MCRs.
            </li>
            <li>
              Increased water stress may also reduce plant productivity, cascading to decreased litter inputs to the
              soil and reductions in soil microbial activity.
            </li>
            <li>
              In the MCRs, soil degradation processes are projected to be reinforced by climate change, largely because
              of increased soil erosion due to more extreme and more frequent climate and disturbance events (fire
              activity, periods of intense rainfall, etc.) and soil salinization.
            </li>
            <li>
              <strong>Climate change is projected to increase heat waves and drought in all of the MCRs</strong>. Where
              precipitation is also projected to decrease (most of the MCRs), this may lead to lower vegetation
              productivity and less potential for large fires over time, but a large proportion of the current biomass
              on MCR landscapes is likely to burn in the meantime.
            </li>
            <li>
              In California and the MB, forest densities are abnormally high due to anthropogenic causes (fire
              suppression in California, land abandonment in MB), which has greatly increased the potential for large,
              destructive forest fires.
            </li>
          </ul>

          <h4>Mediterranean forest and woodland management and restoration under global change</h4>

          <ul>
            <li>
              Almost all money and effort being spent in ecosystem management and restoration in the MB is being spent
              in Europe.
            </li>
            <li>
              Focus areas for forest restoration in the Mediterranean Basin:
              <ul>
                <li>Soil and water conservation</li>
                <li>Increasing the resistance and resilience of ecosystems to climate change and disturbances</li>
                <li>Increasing the prevalence and stability of mature woody formation</li>
                <li>Biodiversity conservation</li>
                <li>Fire hazard and risk reduction</li>
                <li>Other ecosystem services, including aesthetic, recreational, and provisioning services</li>
              </ul>
            </li>
            <li>
              (NB California (montane forest, etc.) and Australia (jarrah forest) not covered in these notes but covered
              in the article).
            </li>
            <li>
              Found on 3 continents and across 20 nations, the MB is a region defined by many cultures, races, languages
              religions, and political persuasions.{' '}
              <strong>
                The range of private to public ownership is extreme, ranging from 95% private forestlands in Portugal to
                0% in Turkey.
              </strong>
            </li>
            <li>
              <strong>The MB is the least biodiverse of the MCRs on a per area basis</strong> (yet it is still a world
              biodiversity hotspot), probably due to the effects of tens-of-thousands of years of human occupation and
              degradation.
            </li>
            <li>
              In the MB,{' '}
              <strong>
                land use practice over millenia has generally selected the most productive soils for agriculture,
                leaving poor soils, especially on the hillslopes, for forests and shrublands
              </strong>
              . In periods of food shortage even these poor soils were often cropped and later abandoned. Therefore,
              contemporary forests are generally developed on steep slopes, on shallow, stony soils, or in places that
              show some other limitation for cropping, e.g. difficult access, sand dunes, gypsiferous soils, river
              banks.
            </li>
            <li>
              Oldfields on terraced slopes are widespread in the northern MB countries, and in some cases date from well
              before the Roman period. Terraces were constructed to reduce soil erosion on steep slopes, to deepen
              available soil for crop roots, and to enhance water infiltration into the soil.{' '}
              <strong>
                Terraced fields provided a large portion of the cereals, grapes, olives, fruits and nuts consumed by
                people living in mountainous parts of the MB
              </strong>
              . However, beginning in the mid-20th century, economic and social changes in the MB led to migrations from
              rural areas to cities and abandonment of most terraced agriculture.
            </li>
            <li>
              The northward march of aridification in the MB is a major threat to the stability of unmanaged terraced
              landscape. After fire, colonisation can be from e.g.{' '}
              <strong>obligate seeder shrubs and scattered pines</strong>.
            </li>
            <li>
              See "Evolutionary ecology of resprouting and seeding in fire-prone ecosystems" for{' '}
              <Links.EL link={{ source: 'https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.12921' }}>
                postfire regeneration traits and strategies
              </Links.EL>
              .
            </li>
            <li>
              In the MB,{' '}
              <strong>
                secondary succession in oldfields is dominated by highly flammable, obligate seeder shrubs and
                serotinous pines
              </strong>{' '}
              (especially Aleppo pine, <strong>Pinus halepensis</strong>), which constitute extremely fire-prone
              ecosystems.
            </li>
            <li>
              Often, in high risk areas with frequent human ignitions,{' '}
              <strong>
                these plant formations enter high frequency fire cycles that arrest succession and increase post-fire
                erosion and ecosystem degradation risk
              </strong>
              .
            </li>
            <li>
              Serotinous pines are locally eradicated when the fire interval is shorter than their maturity age (some
              15–20 years for Aleppo pine), and fire-prone shrublands develop instead. In these conditions, the recovery
              of native sclerophyllous vegetation, both tall shrubs and trees, is very slow owing to the low ability of
              most of these species to disperse to and recruit in new spaces.
            </li>
            <li>
              When they are abandoned, terraced oldfields can become foci for soil and ecosystem degradation. Soil
              plowing is a major driver of soil degradation in all of the MCRs and its effects persist for decades.{' '}
              <strong>
                Conventional agricultural plowing provokes a dramatic reduction of soil organic matter content and
                deleteriously impacts soil microbial composition and activity
              </strong>
              . These effects contribute to soil compaction in fine textured soils and soil crusting when plant cover is
              low, e.g. under semi-arid climate or immediately after a fire. Soil crusting and compaction reduce soil
              water infiltration and water holding capacity, thereby reducing available soil water for vegetation.
            </li>
            <li>
              Plowing also causes the eradication of natural vegetation.{' '}
              <strong>
                After abandonment, primary vegetation recovery is through colonizing, obligate-seeding species
              </strong>{' '}
              (e.g., <strong>Cistus, Rosmarinus, Ulex</strong>) that in the MB are fuel accumulators and facilitate a
              high frequency fire cycle. <strong>Secondary succession can be arrested for decades</strong> in this
              fire-prone community. Significant natural <strong>recolonization of sclerophyllous plants</strong>{' '}
              (resprouting species in genera like <strong>Arbutus, Pistacia, Quercus, Rhamnus</strong>){' '}
              <strong>
                only occurs when fire frequencies can be reduced and when adult individuals are present in the vicinity
              </strong>
              , owing to the low dispersal ability of these species.
            </li>
            <li>
              <strong>
                Ironically, over time a structure built (terraces) originally as a soil and water conservation system
                can become a source of concentrated soil erosion
              </strong>
              . This degradation is often reinforced by forest fires.
            </li>
            <li>
              If properly maintained, oldfield terraces can provide excellent opportunities for forest restoration.
              Soils of agricultural terraces are relatively deep and the microtopography is favorable for runoff
              harvesting. These factors facilitate the successful plantation and establishment of woody, later
              successional species. Low soil organic matter content, poor biological activity and degraded soil
              structure – results of long-term tilling and cultivation – can be improved through organic soil amendments
              and soil preparation techniques.
            </li>
            <li>
              Soil microbial activity has been shown to co-vary with plant productivity, and revegetation of degraded
              soils improves taxonomic and functional diversity of soil microbial communities.
            </li>
            <li>
              <strong>
                Restoration of terraced oldfields also offers the opportunity to convert highly flammable, low
                resilience plant formations dominated by obligate seeders into less flammable, more fire-resilient plant
                formations dominated by woody resprouters and sclerophyllous species
              </strong>
              .
            </li>
            <li>
              Forest restoration success in MB drylands is highly dependent on improving soil physical properties and
              rain-use efficiency.
            </li>
          </ul>

          <h4>Major global change-related stressors and their implications in mediterranean climate region forests</h4>

          <ul>
            <li>
              Most MCR species are relatively drought-tolerant. However{' '}
              <strong>
                the length and severity of the annual drought and the prevalence of year-long and multiyear droughts is
                increasing, putting even highly drought-tolerant species at greater risk
              </strong>
              .
            </li>
            <li>
              Most dominant MCR species also possess adaptations to fire, but the fire regimes to which they are adapted
              are changing rapidly.{' '}
              <strong>
                Atmospheric warming, population and economic growth, land use change, invasive species, air pollution,
                and other stressors and disturbances are interacting with drought and fire to increasingly threaten the
                sustainability of MCR forests
              </strong>
              .
            </li>
            <li>
              <Links.EL
                link={{
                  source: 'https://ars.els-cdn.com/content/image/1-s2.0-B9780444639981000124-f12-10-9780444639981.jpg',
                }}
              >
                Figure showing key connections between global change stressors (excepting direct human impacts), soils,
                and forest management and restoration practices in the MCR forests.
              </Links.EL>
            </li>
            <li>
              (As a result of global change-related stressors), plantation success will be increasingly compromised by
              climate, soil, and disturbance, and novel approaches to planting – genetics, species, pattern, density –
              will be required.
            </li>
            <li>
              Fire potential in the MCRs is already high, but{' '}
              <strong>
                decreasing soil moisture and decreasing forest vigor will further increase forest mortality due to fire
                and other disturbances, and forest regeneration will be progressively more difficult
              </strong>
              .
            </li>
            <li>
              <strong>Fire impacts to forest cover will be especially profound in the MB and California</strong>, where
              human socioeconomic influences on forest management (rural land abandonment, fire suppression, exurban
              development) have greatly increased forest density and continuity, and the risk of large-scale,
              synchronous disturbances.
            </li>
          </ul>

          <h4>Conclusion</h4>

          <ul>
            <li>
              <Links.EL
                link={{
                  source: 'https://www.sciencedirect.com/science/article/pii/B9780444639981000124#t0010',
                  label: 'Generalized summary of global change threats and issues in boreal and MCR forests',
                }}
              >
                Generalized summary of global change threats and issues in boreal and MCR forests
              </Links.EL>
            </li>
            <li>
              <strong>Global change trends are leading us away from the past, not back to it</strong>.
            </li>
            <li>
              {' '}
              In both MCRs and boreal forests,{' '}
              <strong>
                the ongoing invasion of novel biota and pathogens will change the playing field multiple times
              </strong>{' '}
              between now and the end of the century.
            </li>
            <li>
              Environmental impact documents assume we can reliably predict the long-term outcomes of proposed
              management actions, but <strong>under rapid global change that certainty is a fantasy</strong>.
            </li>
            <li>
              Neither effectiveness monitoring nor adaptive management have experienced broad or consistent
              implementation in ecosystem management or restoration.
            </li>
            <li>
              Principles of ecosystem management and ecological restoration
              <ul>
                <li>
                  <strong>Increase landscape and habitat heterogeneity</strong>
                </li>
                <li>
                  Maintain <strong>biological diversity</strong>, attempt to ensure some level of ecological redundancy
                </li>
                <li>Develop corridors/habitat connectivity for species migration and habitat protection</li>
                <li>
                  Mitigate non-climatic threats (e.g., deforestation, land use change, invasive species,
                  uncharacteristic disturbances, etc.)
                </li>
                <li>
                  Implement active or passive forest treatments that restore resilience at large spatial scales (e.g.,
                  reduce forest density and homogeneity, reduce drought stress and fire risk)
                </li>
                <li>Update genetic guidelines and seed zones for reforestation</li>
                <li>
                  Only carry out assisted migration/managed relocation of species where the major ecological, legal,
                  political, and ethical questions have been asked and answered
                </li>
                <li>
                  Where feasible, better align habitats with future conditions by proactively applying forest management
                  tactics from warmer and drier locations in the vicinity; best implemented in experimental fashion
                </li>
                <li>Where possible, permit natural disturbance processes to operate at natural rates and severities</li>
                <li>Treat large-scale disturbance as a management opportunity and integrate it in planning</li>
                <li>
                  Incorporate ecosystem services into management plans and objectives, more explicitly consider
                  ecosystem processes and the physical habitat template (e.g., geology, soils, topography, the stream
                  network, etc.) in conservation planning
                </li>
                <li>
                  Use historical data to develop a mechanistic understanding of ecosystem processes and link to future
                  projections
                </li>
                <li>Use historical reference conditions as “waypoints” rather than endpoints</li>
                <li>Match infrastructure engineering to expected future conditions</li>
                <li>Promote public and employee education and awareness about global change</li>
                <li>Develop collaborative adaptation strategies and ecoregional management plans with stakeholders</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Thursday 24 August 2023</span>

          <h3>Secondary succession</h3>

          <h4>
            <Links.EL
              link={{
                source: 'https://www.sciencedirect.com/topics/earth-and-planetary-sciences/secondary-succession',
                label: 'Pioneers in Secondary',
              }}
            >
              Pioneers in Secondary Succession
            </Links.EL>
          </h4>

          <ul>
            <li>
              <strong>
                Secondary succession occurs when the severity of disturbance is insufficient to remove all the existing
                vegetation and soil from a site
              </strong>
              . Many different kinds of disturbances, such as fire, flooding, windstorms, and human activities (e.g.,
              logging of forests) can initiate secondary succession.
            </li>
            <li>
              Many different kinds of disturbances, such as{' '}
              <strong>fire, flooding, windstorms, and human activities</strong> (e.g., logging of forests) can initiate
              secondary succession.
            </li>
            <li>
              Secondary successions often start with resource-rich conditions associated with{' '}
              <strong>high light availability</strong> and{' '}
              <strong>reduced competition for nutrients and moisture</strong>.
            </li>
            <li>
              Pioneer species
              <ul>
                <li>
                  Pioneers rely on recruitment from <strong>propagules</strong> present in the soil, or that disperse
                  into the site after disturbance occurs.
                </li>
                <li>
                  Pioneers are able to <strong>outcompete established vegetation</strong> that survived the disturbance
                  by maintaining high juvenile growth rates.
                </li>
                <li>
                  For vascular plants, life-history tradeoffs include:
                  <ul>
                    <li>
                      <strong>Tradeoff between growth in the sun and survival in the shade</strong> (paramount).
                    </li>
                    <li>
                      <strong>
                        High growth rates of pioneers are maintained by allocating a large fraction of the plant’s
                        resources to new leaf area production
                      </strong>
                      .
                    </li>
                    <li>
                      <strong>
                        Investing in nutrient-rich leaf tissue that can attain high-maximum photosynthetic rates
                      </strong>
                      .
                    </li>
                    <li>
                      A consequence of preferential allocation to leaf production is that few resources remain that can
                      be used to defend the plant against herbivores and pathogens, or to recover from physical damage.
                      This results in high mortality, particularly in the shade, where resources needed for tissue
                      replacement are most limiting.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <h4>Terms</h4>
          <dt>
            <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Propagule', label: 'Propagule' }}>
              Propagule
            </Links.EL>
          </dt>
          <dd>
            Any material that functions in propagating an organism to the next stage in its life cycle, such as by
            dispersal. Propagules are produced by organisms such as plants (seeds or spores), fungi (spores), and
            bacteria.
          </dd>
          <dt>
            <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Maquis_shrubland', label: 'Maquis' }}>
              Maquis
            </Links.EL>
          </dt>
          <dd>
            A shrubland biome in the Mediterranean region, typically consisting of densely growing evergreen shrubs.
            <br />
            Maquis is characterized by plants of the family <strong>Lamiaceae</strong>, genera <strong>Laurus</strong>{' '}
            and <strong>Myrtus</strong>, and species <strong>Olea europaea</strong>, <strong>Ceratonia siliqua</strong>,
            and <strong>Ficus carica</strong>. It is similar to garrigue. (Also macchia).
            <br />
            Maquis is associated with siliceous (acid) soils (metamorphic rocks, shale, sandstone, etc.)
            <br />
            Maquis areas are more humid
            <br />
            A closed environment with dense vegetation -- over three metres high -- that is difficult to access and
            dominated by thorny shrubs
            <br />
            The French expression, “prendre le maquis” (take the maquis) comes from, meaning to hide from the
            authorities.
            <br />
            ScienceDirect:{' '}
            <Links.EL
              link={{
                source: 'https://www.sciencedirect.com/topics/earth-and-planetary-sciences/maquis',
                label: 'Maquis',
              }}
            >
              Maquis
            </Links.EL>
          </dd>
          <dt>
            <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Garrigue', label: 'Garrigue' }}>Garrigue</Links.EL>
          </dt>
          <dd>
            Also known as phrygana (Greek: φρύγανα [ˈfriɣana], n. pl.), is a type of low scrubland ecoregion and plant
            community in the Mediterranean forests, woodlands, and scrub biome.
            <br />
            Garrigue is associated with relatively alkaline calcareous soils
            <br />
            Garrigue areas are more arid
            <br />
            An open environment with sparse, low shrubby vegetation -- generally less than one metre high
            <br />
            It is found on limestone soils in southern France and around the Mediterranean Basin, generally near the
            seacoast where the moderated Mediterranean climate provides annual summer drought. It is an anthropogenic
            degradation and succession form of former evergreen oak forests that existed until around 2500 years BC.
            <br />
            ScienceDirect:{' '}
            <Links.EL
              link={{
                source: 'https://www.sciencedirect.com/topics/earth-and-planetary-sciences/garrigue',
                label: 'Garrigue',
              }}
            >
              Garrigue
            </Links.EL>
          </dd>

          <h4>Data</h4>

          <div>
            <h5>Our World in Data</h5>
            <Links.EL
              link={{
                source: 'https://ourworldindata.org/urbanization#urbanization-over-the-past-500-years',
                label: 'Urbanization over the past 500 years',
              }}
            >
              Migration to towns and cities is very recent – mostly limited to the past 200 years
            </Links.EL>
          </div>

          <div>
            <h5>The prehistoric and preindustrial deforestation of Europe</h5>
            <Links.EL
              link={{ source: 'https://www.wsl.ch/staff/niklaus.zimmermann/papers/QuatSciRev_Kaplan_2009.pdf' }}
            >
              Land suitability for crops and pasture
            </Links.EL>
          </div>
          <div>
            See table 3: Estimates of percent usable land (land available for clearing for agriculture), and percent of
            forest cover on usable land by years 1000 BC, 500 BC, AD 1, AD 500, AD 1000, AD 1350, AD 1400, and AD 1850
            for each region.
          </div>
          <ul>
            <li>
              By 1000 BC, numerous Phoenician colonies were concentrated in the area of present day Tunisia along the
              Mediterranean trade routes. The Carthaginian Empire had reached nearly its greatest power and extent by
              300 BC, and high population densities in North Africa would probably have led to widespread deforestation.
            </li>
            <li>
              For many regions of Europe after AD 1000, deforestation continued steadily until the period of the Black
              Death, around AD 1350
            </li>
            <li>
              From AD 1500 to AD 1850, we see the highest rates of forest clearance in our dataset and most usable land
              in Europe and surrounding regions became highly cleared just prior to industrialization.
            </li>
            <li>
              See maps showing levels of{' '}
              <Links.EL
                link={{
                  source:
                    'https://www.wsl.ch/staff/niklaus.zimmermann/papers/QuatSciRev_Kaplan_2009.pdf#page=9&zoom=100,0,0',
                }}
              >
                deforestation
              </Links.EL>
              .
            </li>
          </ul>

          <h5>FAO</h5>
          <Links.EL
            link={{
              source: 'https://www.fao.org/3/CA2081EN/ca2081en.PDF',
              label: 'State of Mediterranean Forests 2018',
            }}
          >
            State of Mediterranean Forests 2018
          </Links.EL>

          <h5>Mediterranean deforestation</h5>
          <div>
            <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Deforestation_during_the_Roman_period' }}>
              Deforestation during the Roman period
            </Links.EL>
          </div>
          <blockquote cite="https://en.wikipedia.org/wiki/Deforestation_during_the_Roman_period">
            <div>
              Deforestation during the Roman period was a result of the geographical expansion of the Roman Empire, with
              its increased population, large-scale agriculture, and unprecedented economic development. Roman expansion
              marks the transition in the Mediterranean from prehistory (around 1,000 BC) to the historical period
              beginning around 500 BC. Earth sustained a few million people 8,000 years ago and was still fundamentally
              pristine, but Rome drove human development in Western Europe and was a leading contributor of the
              deforestation around the Mediterranean.
            </div>
            <div>Causes</div>
            <ul>
              <li>
                <strong>Housing and building</strong> (houses, roofs, floors where stone and brick used)
              </li>
              <li>
                <strong>Fuel</strong> (mining, smelting, and the making of ceramics)
              </li>
              <li>
                <strong>Agriculture</strong> (clearing for crops). In 111 BC Roman law allowed anyone who occupied
                public land of up to 20 acres (81,000 m2) to keep it, provided it was brought into cultivation.{' '}
                <strong>Primary cause of initial deforestation</strong>.
              </li>
              <li>
                <strong>Animals and overgrazing</strong>
              </li>
              <li>
                <strong>Military</strong> (building: forts, tools, transportation and by clearance for protection
                against attack)
              </li>
              <li>
                <strong>Shipbuilding</strong>
              </li>
              <li>
                <strong>Urbanization</strong>
              </li>
            </ul>
            <div>Consequences</div>
            <ul>
              <li>
                <strong>Soil</strong> (clearing and plowing exhausted existing soil, which eventually became infertile;
                runoff due to lack of vegetation and forests that locked in rainwater; depletion of soil nutrients)
              </li>
              <li>
                <strong>Flooding/harbors and ports</strong> (erosion, disrupted water supplies, flooding)
              </li>
              <li>
                Check the{' '}
                <Links.EL
                  link={{
                    source: 'https://en.wikipedia.org/wiki/Deforestation_during_the_Roman_period#Alternative_view',
                  }}
                >
                  Alternative view
                </Links.EL>{' '}
              </li>
            </ul>
          </blockquote>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Thursday 24 August 2023</span>
        </div>

        <h4>Articles & Books</h4>

        <p>
          Recommended by Alja: Memory and the Mediterranean by Fernand Braudel. Currentle reading sample from The
          Mediterranean in the Ancient World.
        </p>
      </section>

      <Links.RelatedLinks
        links={[
          { value: 'ltp/notes/2023/october', text: 'October' },
          { value: 'ltp/notes/2023/september', text: 'September' },
          { value: 'ltp/notes/2023/july', text: 'July' },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default August
