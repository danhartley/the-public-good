import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import styles from 'pages/pages.module.scss'

const July = () => {
  return (
    <Layout
      header="July 2023 Learn the Planet Notes"
      title="July 2023 Learn the Planet Notes"
      description={'July 2023 Learn the Planet Notes'}
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <div class={styles.day}>
          <span class={styles.date}>Tuesday 25 July 2023</span>        

          <h3>Borrowed concepts</h3>

          <ul>
            <li><dfn><Links.EL link={{source:'https://en.wikipedia.org/wiki/Biome', label:'Biome'}}>Biome</Links.EL></dfn>: a biogeographical unit consisting of a biological community that has formed in response to the physical environment</li>
            <li>
              <dfn><Links.EL link={{source:'https://en.wikipedia.org/wiki/Climate', label:'Climate'}}>Climate</Links.EL></dfn>: the long-term weather pattern in a region, typically averaged over 30 years. More rigorously, it is the mean and variability of meteorological variables over a time spanning from months to millions of years.
              meteorological variables
              <ul>
                <li><strong>temperature</strong></li>
                <li>humidity</li>
                <li>atmospheric pressure</li>
                <li>wind</li>
                <li><strong>precipitation</strong></li>
              </ul>
              climate system
              <ul>
                <li>atmosphere</li>
                <li>hydrosphere</li>
                <li>cryosphere</li>
                <li>lithosphere</li>
                <li><strong>biosphere</strong></li>
              </ul>
            </li>
          </ul>

          <h4>The Genesis Project</h4>

          The <Links.EL link={{source:'https://link.springer.com/article/10.1007/s10509-016-2911-0', label:'The Genesis project'}}>Genesis project</Links.EL> consists of three steps.
          <ul>
            <li>Searching for transiently habitable planets.</li>
            <li>Sending interstellar robotic crafts for detailed investigations.</li>
            <li>Seeding the candidate planet with in situ synthesized lifeforms.</li>
          </ul>

          <h4>World building</h4>

          <Links.EL link={{source:'https://worldbuilding.stackexchange.com/questions/6867/how-long-would-it-take-to-terraform-a-lifeless-but-somewhat-earthlike-planet-usi', label:'Worldbuilding'}}>Worldbuilding</Links.EL>  on stack exchange 


          <h4>Terraforming</h4>

          <Links.EL link={{source:'https://en.wikipedia.org/wiki/Terraforming', label:'Terraforming'}}>Terraforming</Links.EL> habitability requirements
          <ul>
            <li>Temperature</li>
            <li>Water</li>
            <li>Energy</li>
            <li>Elements</li>
          </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Thursday 27 July 2023</span>

          <h3>Motivation</h3>

          Pros
          <ul>
            <li>Familiarity in environment e.g. when hiking better able to see/perceive what is there</li>
            <li>Sense of greater awareness and acuity (visual and to a lesser extent, auditory)</li>
            <li>Some kind of 'deeper' (atavistic) knowledge, or satisfaction/relief</li>
            <li>Record of observations (iNaturalist) shows progress, expresses knowledge</li>
            <li>Context: knowledge has meaning in place; knowledge in situ equates to control/power/meaning/security/comfort</li>            
          </ul>

          Cons
          <ul>
            <li>Context: mismatch between knowledge and needs when needs satisified by global supply chains</li>
            <li>Frustration: knowledge has little or no purpose day to day (and for essentials of life)</li>
            <li>Unease: species that are of daily use are often non-native</li>
            <li>Powerless: little or no control over necessities of daily life; which may be fine until things go wrong</li>
          </ul>

          Domain
          <ul>
            <li>
              Universal filter and sort functions that can act on: date/time, place, source (person/place)
              <br />
              Use cases
              <ul>
                <li>Filter species by date</li>
                <li>Filter scores by correct/incorrect</li>
                <li>Sort species by date</li>
                <li>Sort traits by frequency</li>
                <li>Filter species by species observed</li>
              </ul>
            </li>
          </ul>

          Origin in food
          <ul>
            <li><Links.EL link={{source:'https://royalsocietypublishing.org/doi/10.1098/rspb.2016.0792', label:'Origins of food crops connect countries worldwide'}}>Origins of food crops connect countries worldwide | The Royal Society</Links.EL> </li>
            <li><Links.EL link={{source:'https://www.glotechrepairs.co.uk/news/the-uks-top-food-imports-and-where-they-come-from/', label:'The UK’s Top Food Imports And Where They Come From'}}>The UK’s Top Food Imports And Where They Come From</Links.EL> </li>
          </ul>

          Starting position
          <ul>
            <li>
              Explicitly link to iNaturalist
              <ul>
                <li>Login or name look up</li>
                <li>Option to create custom lesson</li>
                <li>Or pick from curated lessons</li>
                <li>Create blank filter</li>
                <li>Update filter (optional) i.e. taxa type/s (plantae) or level (species)</li>
                <li>Request species/observations</li>
                <li>Compare observed species with supported species; determine what options are available</li>
                <li>Basic test limited to name, common name, visual identification</li>
                <li>Possible additional tests for commonality (#observations), the parent group (?) and location (atlas)</li>
              </ul>
            </li>
          </ul>

          Filter options for iNaturalist request
          <ul>
            <li>Number of items</li>
            <li>Whether sorted/ordered</li>
            <li>Taxa</li>
            <li>Research Grade</li>
            <li>Optional incorrect answers</li>
            <li>User feedback: tag poor images</li>
          </ul>

          Filter options for iNaturalist response
          <ul>
            <li>Number of items</li>
            <li>Whether sorted/ordered</li>
            <li>Taxa</li>
            <li>Union (with LTP species)</li>
          </ul>

          </div>

          <div class={styles.day}>
          <span class={styles.date}>Friday 28 July 2023</span>

          Research
          <ul>
            <li><Links.EL link={{source:'https://ebird.org/quiz/', label:'eBird Photo + Sound Quiz'}}>eBird Photo + Sound Quiz</Links.EL></li>
            <li><Links.EL link={{source:'https://app.memrise.com/course/160/trees-of-britain-leaves/', label:'Trees of Britain ~ Leaves'}}>Trees of Britain ~ Leaves | memrise</Links.EL></li>
            <li><Links.EL link={{source:'https://forum.inaturalist.org/t/quiz-game-development-opportunity/6822', label:'Quiz Game Development Opportunity'}}>Quiz Game Development Opportunity | iNat forum</Links.EL></li>
          </ul>
          </div>

          <div class={styles.day}>
            <span class={styles.date}>Saturday 29 July 2023</span>

            Objectives
            <ul>
              <li><strong>Mark start of phase</strong></li>
              <li>Basic version using raw iNat data</li>
              <li>Create standard, universal, calls and arguments</li>
              <li>Ask for feedback based on this UI</li>
              <li><strong>Mark end of phase</strong></li>
            </ul>
          </div>

          <div class={styles.day}>
            <span class={styles.date}>Sunday 30 July 2023</span>

            Objectives continued…
            <ul>
              <li>Least number of clicks or keyboard shortcuts to acheive aim cf. <em>The Verb</em></li>
              <li>Trial different UIs</li>
              <li>Vanilla JS?</li>
            </ul>
          </div>        
        
      </section>
    </Layout>
  )
}

export default July
