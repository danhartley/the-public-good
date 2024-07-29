import Layout from 'components/layout/layout'
import Accordion from 'components/accordion/accordion'
import Links from 'components/links/Links'
import Top from 'components/top/top'
import Quiz from 'components/quiz/quiz'
import styles from 'pages/pages.module.scss'

const Carbon = () => {
  const externalLinks = [
    {
      name: 'Khan Academy | Carbon, the building block of life',
      source:
        'https://www.khanacademy.org/science/biology/properties-of-carbon/carbon/v/carbon-as-a-building-block-of-life',
    },
    {
      name: 'University of Nottingham | Periodic Videos - Carbon',
      source: 'http://www.periodicvideos.com/videos/006.htm',
    },
    {
      name: 'BBC In Our Time | Carbon',
      source: 'https://www.bbc.co.uk/sounds/play/p003c1cj',
    },
    {
      name: 'BBC Frontiers | Graphene',
      source: 'https://www.bbc.co.uk/programmes/b00tgf18',
    },
    {
      name: 'Dr. Edward Murphy, University of Virginia | The Origin of the Elements',
      source: 'https://www.youtube.com/watch?v=ZJQjjBR6PbY&t=19s',
    },
    {
      name: 'Crash Course Biology | Carbon',
      source: 'https://www.youtube.com/watch?v=QnQe0xW_JY4&t=609s',
    },
    {
      name: 'Bozeman Science | The Molecules of Life',
      source: 'https://www.youtube.com/watch?v=QWf2jcznLsY',
    },
    {
      name: 'Khan Academy | The carbon cycle (video)',
      source:
        'https://www.khanacademy.org/science/high-school-biology/hs-ecology/hs-biogeochemical-cycles/v/carbon-cycle',
    },
    {
      name: 'Khan Academy | The carbon cycle (article)',
      source: 'https://www.khanacademy.org/science/biology/ecology/biogeochemical-cycles/a/the-carbon-cycle',
    },
    {
      name: 'U.S. Carbon Cycle Science Program | What is the Carbon Cycle?',
      source: 'https://www.carboncyclescience.us/what-is-carbon-cycle',
    },
  ]

  return (
    <Layout
      title="Climate crisis | Carbon - element of life"
      rt="6 to 7"
      header="Carbon - element of life"
      description={
        'A synopsis of the element carbon: its origin and properties; importance to life; the carbon cycle; and its impact as a greenhouse gas.'
      }
      image="https://live.staticflickr.com/65535/51139806123_959226ca4b_c.jpg"
    >
      <section>
        <h2>
          Carbon is essential to all life, but its rapid release into the atmosphere in the molecular form CO
          <span className={styles.sub}>2</span> is upsetting equilibria established over millions of years.
        </h2>

        <Accordion header="Carbon basics">
          <div className={styles.inset}>
            <span>
              Symbol <strong>C</strong>; atomic number <strong>6</strong>; atomic mass <strong>12.011u</strong>
            </span>
            <span>Nonmetal, solid at room temperature.</span>
            <span>
              From the Latin <em>carbo</em> meaning "charcoal".
            </span>
            <span>
              By mass fourth{' '}
              <span>
                <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Abundance_of_the_chemical_elements' }}>
                  {' '}
                  most abundant
                </Links.EL>
              </span>{' '}
              element in the universe.
            </span>
            <div>
              <Links.EL link={{ source: 'https://pubchem.ncbi.nlm.nih.gov/element/Carbon' }}>
                National Center for Biotechnology Information
              </Links.EL>
            </div>
          </div>
        </Accordion>

        <p>
          Carbon atoms are formed in dying stars under extreme and improbable conditions during a set of nuclear fusion
          reactions known as the{' '}
          <Links.EL
            link={{
              label: 'Stanford article on the triple-alpha process',
              source: 'http://large.stanford.edu/courses/2017/ph241/udit2/',
            }}
          >
            triple-alpha process
          </Links.EL>
          .
        </p>

        <p>
          On collapse of the star, in a supernova, the atoms are blown out, eventually forming new star systems such as
          our own.
        </p>

        <p>
          In the first 20 minutes after the Big Bang, protons, neutrons and electrons were created. It took hundreds of
          thousands of years of further cooling before the average energies of nuclei and electrons were low enough to
          form stable hydrogen and helium atoms.
        </p>

        <p>
          A further 500 million years passed before the first stars formed. In these stars conditions were right for{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Nucleosynthesis' }}>nucleosynthesis</Links.EL>, the
          process by which elements heavier than boron are created. Carbon was the first of these elements.
        </p>

        <h3>Allotropes</h3>

        <p>
          Carbon assumes different structural forms -{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Allotropy' }}>allotropes</Links.EL>. Alternate
          forms of the same element are created by external forces, such as heat and pressure.
        </p>

        <p>
          There are many{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Allotropes_of_carbon' }}>
            allotropes of carbon
          </Links.EL>{' '}
          including those that naturally occur on earth -{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Amorphous_carbon' }}>amorphous carbon</Links.EL>,
          diamond and graphite - and rarer forms such as{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Graphene' }}>graphene</Links.EL> and{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Buckminsterfullerene' }}>
            buckminsterfullerene
          </Links.EL>
          .
        </p>

        <h3>Diamond</h3>

        <Accordion header="Covalent bonds">
          <div className={styles.inset}>
            <div>
              Electrons are arranged in orbitals about the nucleus of an atom. An electron in the outermost or valence
              orbital is able to form a pair with a valence electron from another atom.
            </div>
            <div>
              These <strong>covalent bonds</strong> make atoms both more stable and cause them to be attracted to one
              another. This attraction equates to energy which is released when the bond is broken through combustion.
            </div>
            <div>
              In diamond, each carbon atom shares electrons with four other carbon atoms, forming 4 single covalent
              bonds.
            </div>
            <div>
              In carbon dioxide, each carbon atom shares 2 electrons with each oxygen atom, so that 2 double covalent
              bonds are formed.
            </div>
            <div>
              <Links.EL
                link={{
                  source:
                    'https://www.khanacademy.org/science/ap-biology/chemistry-of-life/introduction-to-biological-macromolecules/v/covalent-bonds',
                }}
              >
                Covalent bonds | Khan Academy
              </Links.EL>
            </div>
          </div>
        </Accordion>

        <p>
          <span>
            Diamond is arranged in a three dimensional tetrahedral lattice in which every carbon atom is bound to four
            other carbon atoms, in the form of a{' '}
            <Links.EL
              link={{
                label: 'Image of tetrahedron',
                source:
                  'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/3-diamond-tetrahedral-molecular-structure-mikkel-juul-jensenscience-photo-library.jpg',
              }}
            >
              tetrahedron
            </Links.EL>
            . The proximity of atoms and the covalent bonds between them make diamond hard; breaking their covalent
            bonds requires a huge amount of energy.
          </span>
        </p>

        <p>And because there are no free electrons, pure diamond does not conduct electricity.</p>

        <h3>Graphite</h3>

        <p>
          In graphite atoms form in planes. Each atom is bound to its three nearest neighbours at an angle of 120°.
          Since only 3 of the 4 electrons are shared, the fourth is free to move; in this way graphite conducts
          electricity.
        </p>

        <p>
          Each of the individual layers of atoms of which graphite is composed is called{' '}
          <span>
            <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Graphene' }}>graphene</Links.EL>
          </span>
          . Graphene may unwittingly be produced by writing or drawing with a pencil; friction causes a layer, or more
          often hundreds of layers of atoms, to be removed. A single layer is graphene.
        </p>

        <h2 id="carbon-compounds">Carbon compounds</h2>

        <p>
          Such is carbon's propensity to form bonds that more compounds contain carbon than not, almost ten million.
          Organic chemistry is the study of these compounds. Those which contain only carbon and hydrogen are called
          hydrocarbons. Fossil fuels are hydrocarbons.
        </p>

        <h3>Hydrocarbons</h3>

        <p>
          Fossil fuels form when dead plants and animals decompose in the absence of oxygen and are submitted to intense
          heat and pressure over millions of years.
        </p>

        <div>
          <p>When hydrocarbons are burnt in air they react with oxygen to release the energy stored in their covalent bonds
          in the form of light and heat.</p>
          <div className={styles.inset}>
            <span>Hydrocarbon + oxygen → carbon dioxide + water + energy (light and heat)</span>
            <span>
              e.g. CH<span className={styles.sub}>4</span> + 2O<span className={styles.sub}>2</span> → 2H
              <span className={styles.sub}>2</span>O + CO<span className={styles.sub}>2</span> + energy
            </span>
            <div>
              <Links.EL link={{ source: 'https://energyeducation.ca/encyclopedia/Hydrocarbon_combustion' }}>
                Hydrocarbon combustion
              </Links.EL>
            </div>
          </div>
        </div>

        <p>
          The amount of energy released depends on the bonds between atoms in a molecule. Methane, which has 4 single
          bonds, burns at around 1,950°C in air. Natural gas, tailored for domestic use, is ~90% methane and burns at
          about 1,100°C.
        </p>

        <p>
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Acetylene' }}>Acetylene</Links.EL> C
          <span className={styles.sub}>2</span>H<span className={styles.sub}>2</span> burns at around 3,330°C in pure oxygen
          (oxyacetylene process) making it suitable for welding and cutting metals. The bulk of the energy released from
          acetylene is derived from the triple bond that exists between the two carbon atoms in each molecule.
        </p>

        <Accordion header="Forms and formulae of fossil fuels">
          <div className={styles.inset}>
              <div>
                C<span className={styles.sub}>4</span>H<span className={styles.sub}>10</span> - butane and C
                <span className={styles.sub}>8</span>H<span className={styles.sub}>18</span> - octane are pure hydrocarbons.
                Petrol is a mixture of many hydrocarbons.
              </div>
              <div>
                Naturally occurring, unrefined fossil fuels, such as crude oil and coal, contain impurities which are
                released when they are burnt. Coal is of variable quality; higher grade forms such as anthracite have a
                higher ratio of carbon to other elements, including oxygen - O, nitrogen - N and sulfur - S.
              </div>
              <div>
                Low grade <strong>bituminous</strong> coal has the formula{' '}
                <strong>
                  C<span className={styles.sub}>137</span>H<span className={styles.sub}>97</span>O
                  <span className={styles.sub}>9</span>NS
                </strong>
                .
              </div>
              <div>
                High grade <strong>anthracite</strong> has the formula{' '}
                <strong>
                  C<span className={styles.sub}>240</span>H<span className={styles.sub}>99</span>O
                  <span className={styles.sub}>4</span>NS
                </strong>
                .
              </div>
          </div>
        </Accordion>

        <h3>Polymers</h3>

        <p>
          Because carbon atoms form strong bonds with other carbon atoms as well as the atoms of other elements it is
          able to form long chains, or polymers. Many of these are critical to life, including RNA, DNA, proteins, and
          sugars. It is this ability to bind to itself in long chains, form stable compounds with other elements and the
          proximity of electrons to the nucleus, that makes carbon the best, and perhaps the only, building block of
          life, not only on this planet, but in the universe.
        </p>

        <h2 id="carbon-cycle">Fast times in the Anthropocene</h2>

        <p>
          The carbon cycle regulates the flow of carbon through the earth and the atmosphere. The distribution of carbon
          throughout the cycle affects temperature which alters conditions on earth to which all life must adapt.
        </p>

        <p>
          The temperature of the seas and the land has varied widely over geologic time. The main driver for the climate
          is the energy reaching us from the sun, a figure which varies according to the earth's orbit and the state of
          the sun itself. Temperature is also affected by random events such as meteor strikes and volcanic eruptions.
        </p>

        <p>
          When temperature and climate change slowly evolution by natural selection is possible. Sudden disruption is
          catastrophic, and results in the{' '}
          <Links.EL
            link={{
              label: 'National Graphic article: What are mass extinctions, and what causes them?',
              source: 'https://www.nationalgeographic.com/science/article/mass-extinction',
            }}
          >
            mass extinction
          </Links.EL>{' '}
          of huge numbers of species. There have been five such events on earth, including the Permian–Triassic
          extinction event (the{' '}
          <Links.EL
            link={{
              label: 'University of St Andrews article: Great Dying – what caused Earth’s biggest mass extinction?',
              source: 'https://news.st-andrews.ac.uk/archive/great-dying-what-caused-earths-biggest-mass-extinction/',
            }}
          >
            Great Dying
          </Links.EL>
          ) which accounted for 90% to 96% of all species.
        </p>

        <p>
          Species exist when and where conditions are favourable for adaptation and evolution; when they cannot adapt to
          new conditions, favourable or otherwise, they go extinct.
        </p>

        <p>
          Many of the fossil fuels we burn today were laid down when carbon dioxide levels and temperatures were higher
          than today. The collapse of the Carboniferous rainforest - due to climate change - provided the organic matter
          that would later become coal.
        </p>

        <p>
          By burning that coal, and other fossil fuels, we have begun to change the climate, and because the change is
          rapid, many species have not, and will not, adapt.
        </p>

        <h3>Carbon emissions and reserves</h3>

        <div>
          Cumulative <Links.EL link={{ source: 'https://ourworldindata.org/co2-emissions' }}>emissions</Links.EL> of
          carbon dioxide to date are ~1.5 trillion tonnes.
          <div className={styles.quote}>
            <span>Remaining reserves in tonnes: 900 coal, 150 oil, 105 gas, 540 shale gas, etc. = 1.695 trillion.</span>
            <div>
              Carbon is also found in methane hydrates in polar regions and under the seas. Estimates vary between 500
              and 3,000 gigatonnes of carbon.
            </div>
            <div>
              <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Carbon' }}>Wikipedia</Links.EL>
            </div>
          </div>
        </div>

        <h3>The isotopic signature of anthropogenic warming</h3>

        <p>
          Isotopes are variants of a chemical element which differ in their number of neutrons. Carbon has 3 isotopes,
          carbon-12, carbon-13, and carbon-14.
        </p>

        <h4>How do we know the extra carbon dioxide in the atmosphere is caused by burning fossil fuels?</h4>

        <p>
          Plants absorb less (heavy) carbon-13 from the atmosphere than (light) carbon-12, and also favour carbon-12 for
          photosynthesis.
        </p>

        <p>
          Therefore when we burn fossil fuels we are releasing carbon that has relatively less carbon-13. This
          difference can be detected by measuring the relative ratio of carbon isotopes in the atmosphere. The isotopic
          signature confirms the man-made origin of current climate change.
        </p>

        <p>
          NASA has been monitoring the natural carbon cycle using satellites for some time including{' '}
          <Links.EL link={{ source: 'https://ocov2.jpl.nasa.gov/' }}>Orbiting Carbon Observatory-2</Links.EL> and{' '}
          <Links.EL link={{ source: 'https://ocov3.jpl.nasa.gov/' }}>Orbiting Carbon Observatory-3</Links.EL>. Around
          2025 they will launch the Copernicus CO2 Mission, the first operational carbon dioxide monitoring satellite
          constellation, focused on monitoring human-produced emissions.
        </p>

        <h3>The sun</h3>

        <p>
          The energy from fossil fuels is derived from the sun; photons absorbed by chlorophyll excite electrons and
          thereby enable the processes by which photosynthesis produces organic compounds. Fossil fuels are a
          concentrated form of this energy.
        </p>

        <p>
          {' '}
          Solar and wind power are renewable energy sources because the energy we obtain from them can be replaced
          immediately (by the sun).
        </p>

        <div>
          <div className={styles.inset}>
            <span>Fossil fuels take ~1 million years to form. They have high energy and power densities.</span>
            <span>
              Renewables are constantly replenished by the sun's energy. They have low energy and power densities.
            </span>
            <span>
              In one year we release energy that took a million years to form.{' '}
              <Links.EL link={{ source: 'https://www.theguardian.com/science/2007/may/22/highereducation.education' }}>
                Harry Kroto
              </Links.EL>
            </span>
            <div>
              <Links.IL link={{ source: 'facts#energy' }}>Values for energy and power densities</Links.IL>
            </div>
          </div>
        </div>

        <p>
          The only energy source not derived from our sun is nuclear which ultimately derives from myriad distant, and
          now long dead stars.
        </p>

        <h2>The end of carbon dependency?</h2>

        <p>
          For a couple of hundred years we have benefited from chemical reactions irreversible in time scales
          appropriate to our species. The combustion of organic compounds, especially hydrocarbons, to release energy
          stored over unimaginably vast periods of time, is the foundation of our modern civilisations.
        </p>

        <p>
            Will we enjoy an equally profitable but more sustainable relationship with{' '}
            <Links.IL link={{ source: 'climate-crisis/hydrogen-a-singular-atom' }}>hydrogen</Links.IL>?
        </p>

        <Top></Top>
      </section>

      <section>
        <Quiz title="carbon-element-of-life" link="Take the carbon test"></Quiz>
      </section>

      <section>
        <h2>References</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section>
      <Links.RelatedLinks
        links={[
          { value: 'climate-crisis/facts', text: 'Facts' },
          {
            value: 'climate-crisis/will-people-or-policies-save-the-planet',
            text: 'Will people or policies save the planet?',
          },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Carbon
