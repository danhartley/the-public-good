import Layout from 'components/layout/layout'
import Accordion from 'components/accordion/accordion'
import Formula from 'components/tools/formula'
import styles from 'pages/pages.module.scss'
import Links from 'components/links/Links'
import Top from 'components/top/top'
import Quiz from 'components/quiz/quiz'

const externalLinks = [
  {
    name: 'A crash-course on hydrogen',
    source: 'https://www.youtube.com/watch?v=H16xFI157_8',
  },
  {
    name: 'University of Nottingham | Periodic Videos - Hydrogen',
    source: 'http://www.periodicvideos.com/videos/001.htm',
  },
  {
    name: 'BBC In Our Time | The Proton',
    source: 'https://www.bbc.co.uk/sounds/play/b09zt3mr',
  },
  {
    name: 'Dr. Edward Murphy, University of Virginia | The Origin of the Elements',
    source: 'https://www.youtube.com/watch?v=ZJQjjBR6PbY&t=19s',
  },
  {
    name: 'Bozeman Science | Water: A Polar Molecule',
    source: 'https://www.youtube.com/watch?v=iOOvX0jmhJ4',
  },
  {
    name: 'Khan Academy | Hydrogen bonding in water',
    source:
      'https://www.khanacademy.org/science/high-school-biology/hs-biology-foundations/hs-water-and-life/v/hydrogen-bonding-in-water',
  },
  {
    name: 'Khan Academy | Hydrogen bonding',
    source:
      'https://www.khanacademy.org/science/ap-chemistry-beta/x2eef969c74e0d802:intermolecular-forces-and-properties/x2eef969c74e0d802:intermolecular-forces/v/hydrogen-bonding',
  },
  {
    name: 'Fuel Cells & Hydrogen Observatory',
    source: 'https://www.fchobservatory.eu/',
  },
  {
    name: 'The hydrogen hype | Food and Water Action Europe',
    source: 'https://www.foodandwatereurope.org/wp-content/uploads/2020/12/HydrogenHype_Report2020.pdf',
  },
  {
    name: 'International Energy Agency | The future of hydrogen',
    source: 'https://www.iea.org/reports/the-future-of-hydrogen',
  },
  {
    name: 'Does the world need hydrogen to solve climate change?',
    source: 'https://www.carbonbrief.org/in-depth-qa-does-the-world-need-hydrogen-to-solve-climate-change',
  },
]

const Hydrogen = () => {
  return (
    <Layout
      header="Hydrogen - a singular atom"
      rt="6 to 7"
      title="Climate crisis | Hydrogen - a singular atom"
      description={
        'A synopsis of the element hydrogen: its origin and properties; potential as an energy carrier; and role in reducing greenhouse gas emissions.'
      }
      image="https://live.staticflickr.com/65535/51143592172_4c70ca0245_o.jpg"
    >
      <section>
        <h2>
          Hydrogen produced from renewable sources has the potential to be a source of green energy, and an alternative
          energy carrier to electricity.
        </h2>

        <Accordion header="Hydrogen basics">
          <div className={styles.inset}>
            <span>
              Symbol <strong>H</strong>; atomic number <strong>1</strong>; atomic mass <strong>1.0080u</strong>
            </span>
            <span>
              Nonmetal, naturally occurring as a gas H<span className={styles.sub}>2</span> at room temperature.
            </span>
            <span>
              Derived from greek <em>hydro</em>, "water", and <em>genes</em>, "forming".
            </span>
            <div>
              <Links.EL link={{ source: 'https://pubchem.ncbi.nlm.nih.gov/element/Hydrogen' }}>
                National Center for Biotechnology Information
              </Links.EL>
            </div>
          </div>
        </Accordion>

        <p>
          <span>
            Hydrogen atoms were fleetingly formed during the Big Bang but it wasn't until the{' '}
            <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Recombination_(cosmology)' }}>
              recombination
            </Links.EL>{' '}
            370,000 years later that conditions became favourable for electrons to remain in orbit around atomic nuclei.
          </span>
        </p>

        <p>
          Hydrogen was the first element in the universe and it is the{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Abundance_of_the_chemical_elements' }}>
            most abundant
          </Links.EL>
          . From it all other elements are formed.
        </p>

        <h3>Covalent and hydrogen bonds</h3>

        <p>
          Hydrogen readily shares{' '}
          <Links.EL
            link={{
              source:
                'https://www.khanacademy.org/science/ap-biology/chemistry-of-life/introduction-to-biological-macromolecules/v/covalent-bonds',
            }}
          >
            covalent bonds
          </Links.EL>{' '}
          (video) with other elements to form compounds, including water{' '}
          <span>
            <Formula>H2O</Formula>
          </span>
          , ammonia <Formula>NH3</Formula>, hydrogen sulfide <Formula>H2S</Formula>, and organic compounds, such as
          hydrocarbons{' '}
          <span>
            <Formula>CnH2n+2</Formula>{' '}
          </span>{' '}
          and carbohydrates <Formula>(CH2O)x</Formula>.
        </p>

        <p>
          The bonds in these compounds are polar. In a molecule of water, the shared electrons spend more time near the
          (more electronegative) oxygen atom, which therefore takes on a partial negative charge. The hydrogen end of
          the molecule, where the electron spends less time, takes on a partial positive charge. Molecules of water
          position themselves in response to these partial charges; the hydrogen of one molecule being attracted to the
          oxygen of another (unlike charges attract), to form a <strong>hydrogen bond</strong>.
        </p>

        <p>
          Hydrogen bonds explain cohesion (why water molecules 'bead'), and the relatively high boiling point of water -
          energy is needed to break apart the hydrogen bonds.
        </p>

        <Accordion header="The polarity of water">
          <div className={styles.inset}>
            <p>
              The polarity of water makes it a good solvent. When salt Na<span className={styles.super}>+</span>Cl
              <span className={styles.super}>-</span> is added to water, it dissolves; positive sodium ions - charged
              atoms are called ions - are attracted to the slightly negative hydrogen end of the water molecule, and
              positive chlorine ions are attracted to the oxygen end, thereby breaking apart, or dissolving, the bonds
              between the sodium and chlorine atoms.
            </p>
            <p>
              Why are the sodium and chlorine atoms in salt charged? The sodium and chlorine atoms in salt are bound
              together by an{' '}
              <Links.EL link={{ source: 'https://www.youtube.com/watch?v=hiyTfhjeF_U' }}>ionic bond</Links.EL> (video).
              Ionic bonds occur where an electron, or electrons, are transferred from one atom to another, in this case
              from a sodium atom to a chlorine atom. Since the two atoms now have opposite charges they attract. Na
              becomes Na<span className={styles.super}>+</span> and Cl becomes Cl<span className={styles.super}>-</span>
              .
            </p>
          </div>
        </Accordion>

        <p>
          Hydrogen bonds can also form between molecules of different species, for example in DNA, where they hold
          together the two (polynucleotide) chains. The hydrogen bonds are strong enough to keep the double helix
          together, but not so strong as to prevent the chains separating when they need to be replicated.
        </p>

        <h2 id="production">Production</h2>

        <p>
          95% of hydrogen is produced by{' '}
          <Links.EL
            link={{ source: 'https://www.energy.gov/eere/fuelcells/hydrogen-production-natural-gas-reforming' }}
          >
            natural gas reforming
          </Links.EL>{' '}
          in two ways.
        </p>

        <Accordion header="Steam-methane reforming reaction">
          <div className={styles.inset}>
            <p>
              The methane in natural gas reacts with steam under high pressure in the presence of a catalyst to produce
              hydrogen, carbon monoxide and carbon dioxide.
            </p>
            <p>
              The carbon monoxide and steam are then reacted using a catalyst to produce carbon dioxide and more
              hydrogen in the "water-gas shift reaction".
            </p>
            <p>
              In a final step, the "pressure-swing adsorption" reaction, carbon dioxide and other impurities are removed
              from the gas stream, to leave pure hydrogen.
            </p>
            <p className={styles.inset}>
              <strong>Steam-methane reforming reaction</strong>
              <span>
                <Formula>CH4</Formula> + <Formula>H2O</Formula> (+heat) → <Formula>CO</Formula> + 3<Formula>H2</Formula>
              </span>
              <strong>Water-gas shift reaction</strong>
              <span>
                CO + <Formula>H2O</Formula> → <Formula>CO2</Formula> + <Formula>H2</Formula> (+ small amount of heat)
              </span>
            </p>
          </div>
        </Accordion>

        <Accordion header="Partial oxidation">
          <div className={styles.inset}>
            <p>
              The methane and other hydrocarbons in natural gas react with a limited amount of oxygen to partially
              oxidise the hydrocarbons. The carbon monoxide produced is once again reacted with water in the "water-gas
              shift reaction".
            </p>
            <div className={styles.inset}>
              <strong>Partial oxidation of methane reaction</strong>
              <span>
                <Formula>CH4</Formula> + <Formula>½O2</Formula> → <Formula>CO</Formula> + <Formula>2H2</Formula> (+
                heat)
              </span>
              <strong>Water-gas shift reaction</strong>
              <span>
                CO + <Formula>H2O</Formula> → <Formula>CO2</Formula> + <Formula>H2</Formula> (+ small amount of heat)
              </span>
            </div>
          </div>
        </Accordion>

        <p>
          There are several{' '}
          <Links.EL
            link={{
              label: 'US Energy article on Hydrogen Fuel Basics',
              source: 'https://www.energy.gov/eere/fuelcells/hydrogen-fuel-basics',
            }}
          >
            other methods of hydrogen production
          </Links.EL>{' '}
          including photobiological, photoelectrochemical, solar thermochemical, biological processes, and electrolysis.
        </p>

        <h3>Electrolysis</h3>

        <p>
          Electrolysis is a process whereby electricity is used to split water into hydrogen and oxygen. The process{' '}
          <Links.EL
            link={{
              label: 'Electrolysis varies depending on the electrolyte selected',
              source: 'https://www.energy.gov/eere/fuelcells/hydrogen-production-electrolysis',
            }}
          >
            varies
          </Links.EL>{' '}
          depending on the electrolyte selected. Oxygen gas forms at the anode, hydrogen gas at the cathode.
        </p>
        <p className={styles.inset}>
          <span>
            <strong>Anode Reaction</strong> <Formula>2H2O</Formula> → <Formula>O2</Formula> + 4H+ + 4e-
          </span>
          <span>
            <strong>Cathode Reaction</strong> 4H+ + 4e- → <Formula>2H2</Formula>
          </span>
        </p>
        <p className={styles.inset}>
          An <strong>electrolyte</strong> is a "substance that produces an electrically conducting solution when
          dissolved in a polar solvent, such as water."{' '}
          <span>
            <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Electrolyte' }}>Wikipedia</Links.EL>
          </span>
        </p>
        <p>
          Electrolysis can produce hydrogen with no greenhouse gas emissions, if the original source of the energy used
          is renewable. The process is currently 70% to 80% efficient; for every 40kWh of energy produced 50kWh to 55kWh
          of electricity is required. 95% efficiency has been{' '}
          <Links.EL link={{ label: '95% efficiency claimed for electrolysis', source: 'https://www.h2pro.co/' }}>
            claimed
          </Links.EL>{' '}
          but not proven in production.
        </p>

        <h3>Transporting hydrogen</h3>

        <p>
          Converting pipelines to carry a natural gas hydrogen mix is feasible. The cost of adapting existing lines for
          compressed hydrogen varies depending on whether you ask{' '}
          <Links.EL
            link={{
              label: 'European Hydrogen Backbone report',
              source: 'https://gasforclimate2050.eu/sdm_downloads/european-hydrogen-backbone',
            }}
          >
            industry
          </Links.EL>{' '}
          or their{' '}
          <Links.EL
            link={{
              label: 'Food and Water Action Europe report',
              source: 'https://www.foodandwatereurope.org/wp-content/uploads/2020/12/HydrogenHype_Report2020.pdf',
            }}
          >
            critics
          </Links.EL>
          . At the heart of the debate is the feasibility of producing green hydrogen in large volumes soon. If the
          hydrogen passing through pipelines does not come from renewable sources, it will lock us in to further use of,
          and dependency on, fossil gas at the expense of investment in renewables.
        </p>

        <p>
          Hydrogen gas has a low energy density by volume at ambient temperatures even compared to natural gas. It is
          therefore either compressed or liquified (molecular hydrogen has{' '}
          <span>
            <em>high</em>
          </span>{' '}
          energy <Links.IL link={{ source: 'climate-crisis/facts#energy' }}>density</Links.IL> by mass) for
          transportation by road or rail.
        </p>

        <h3>Hydrogen fuel cells</h3>

        <p>
          Fuel cells can be used at a wide range of scales from a power station to a laptop. They work like batteries
          but do not run down, producing electricity as long as there is fuel. They are also efficient, converting
          chemical energy to electrical energy at around 60% efficiency; this compares well to an average of{' '}
          <Links.EL
            link={{ source: 'https://cefrc.princeton.edu/sites/cefrc/files/reitz_princeton-day1-hour1-2018.pdf' }}
          >
            16% efficiency for gas combustion engines
          </Links.EL>
          .
        </p>

        <h4>How fuel cells work</h4>
        <p className={styles.quote}>
          <span>
            A fuel, such as hydrogen, is fed to the anode, and air is fed to the cathode. In a hydrogen fuel cell, a
            catalyst at the anode separates hydrogen molecules into protons and electrons, which take different paths to
            the cathode. The electrons go through an external circuit, creating a flow of electricity.
          </span>
        </p>
        <p>
          <Links.EL link={{ source: 'https://www.energy.gov/eere/fuelcells/fuel-cells' }}>
            How fuel cells work | US Energy Efficiency & Renewable Energy
          </Links.EL>
        </p>

        <h3>Current production and use</h3>

        <p>
          A fraction of hydrogen is currently produced from low carbon energy; the latest figure for the EU is{' '}
          <Links.EL
            link={{
              label: 'FCHO PDF report Hydrogen molecule market',
              source:
                'https://observatory.clean-hydrogen.europa.eu/sites/default/files/2023-05/Chapter_2_Hydrogen_Molecule_Market_070920.pdf',
            }}
          >
            0.1%
          </Links.EL>
          . Global production of hydrogen from electrolysis is less than{' '}
          <Links.EL
            link={{
              label: 'IEA report on the future of hydrogen',
              source: 'https://www.iea.org/reports/the-future-of-hydrogen',
            }}
          >
            0.1%
          </Links.EL>
          .
        </p>

        <p>
          Hydrogen use today is dominated by industry, namely: oil refining, ammonia production, methanol production and
          steel production.
        </p>

        <h2 id="conclusion">Potential</h2>

        <p>
          Hydrogen as a fuel is attractive because at the point of use it emits no greenhouse gases, and it can be used
          for long term storage at potentially lower cost than electricity. There are, however, drawbacks.
        </p>

        <h3>Drawbacks</h3>

        <p>
          The majority of current hydrogen production involves greenhouse gas emissions. Production is often described
          using a colour{' '}
          <Links.EL link={{ source: 'https://pbs.twimg.com/media/ExOiiizVEAEvIpG?format=jpg&name=medium' }}>
            spectrum
          </Links.EL>{' '}
          (image). 'Grey' hydrogen is produced by burning coal without capturing <Formula>CO2</Formula> emissions. The
          gas industry in particular is promoting 'blue' hydrogen whereby greenhouse gases emitted during the combustion
          of gas are sequestered. Carbon capture and storage (CCS) is not, however, established at the scale required
          despite a decade or more of trials, heavy investment, and government subsidies. In 2020 40 million tonnes of{' '}
          <Formula>CO2</Formula> were captured from{' '}
          <Links.EL
            link={{
              label: 'Global CCS Institute report: Global status of CCS 2020',
              source:
                'https://www.globalccsinstitute.com/wp-content/uploads/2020/12/Global-Status-of-CCS-Report-2020_FINAL_December11.pdf',
            }}
          >
            26
          </Links.EL>{' '}
          operating facilities worldwide.
        </p>

        <p>
          'Green' hydrogen, produced only using renewable energy, and transported through 'hydrogen ready' pipelines is
          a seductive idea but if the path to that goal is overly long or impossible, we will be saddled with the cost
          of maintaining CCS infrastructure, and safeguarding sequestered <Formula>CO2</Formula> indefinitely, whilst
          still emitting greenhouse gases.
        </p>

        <h3>Greasing the wheels of failure</h3>

        <p>
          Talk of 'blue' hydrogen and carbon capture and storage means burning gas with no guarantee of a transition
          towards 'green' hydrogen.
        </p>

        <blockquote>
          <span>
            Producing hydrogen from natural gas with carbon capture and storage, so-called blue hydrogen, could also be{' '}
            <em>the key to keeping Norwegian gas valuable in a low carbon future</em> [emphasis added].
          </span>
        </blockquote>
        <cite>
          <div>
            <Links.EL link={{ source: 'https://www.equinor.com/en/what-we-do/hydrogen.html' }}>
              Equinor formerly Statoil (the Norwegian State Oil company)
            </Links.EL>
          </div>
        </cite>

        <p>
          This scenario is understandably attractive to fossil fuels companies who maintain their grip on the market,
          secure profits on existing investments, and receive subsidies in the name of reducing emissions. They are{' '}
          <Links.EL
            link={{
              source: 'https://www.foodandwatereurope.org/wp-content/uploads/2020/12/HydrogenHype_Report2020.pdf',
            }}
          >
            lobbying hard
          </Links.EL>{' '}
          in the EU to protect their interests.
        </p>

        <h3>A mixed future</h3>

        <p>
          Hydrogen may have a successful future if it is unburdened by hype, it just might take time for sensible
          methods of production and suitable uses to be found. Produced close to sources of excess renewable energy it
          may be a good fit for larger forms of transportation (fuel cells) including shipping, for energy storage, and
          domestic and commercial heating (
          <Links.EL
            link={{
              label: 'BBC article - Climate change hope for hydrogen fuel',
              source: 'https://www.bbc.com/news/science-environment-50873047',
            }}
          >
            hydrogen boilers
          </Links.EL>
          ).
        </p>

        <p>
          One positive example of combining wind power and hydrogen storage is the{' '}
          <Links.EL link={{ source: 'https://www.surfnturf.org.uk/' }}>Surf 'n' Turf community project</Links.EL> on the
          Orkney Islands north of Scotland where the abundance of energy makes conversion to hydrogen and back viable.
        </p>

        <Top></Top>
      </section>

      <section>
        <Quiz title="hydrogen-a-singular-atom" link="Take the hydrogen test"></Quiz>
      </section>

      <section>
        <h2>References</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section>

      <Links.RelatedLinks
        links={[
          { value: 'climate-crisis/facts', text: 'Facts' },
          { value: 'climate-crisis/carbon-element-of-life', text: 'Carbon - element of life' },
          {
            value: 'climate-crisis/turning-the-lights-out-on-fossil-fuels',
            text: 'Turning the lights out on fossil fuels',
          },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Hydrogen
