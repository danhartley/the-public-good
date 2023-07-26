import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import Accordion from 'components/accordion/accordion'
import styles from 'pages/pages.module.scss'

const July = () => {
  return (
    <Layout
      header="July 2023 IF Notes"
      title="July 2023 IF Notes"
      description={'July 2023 IF Notes'}
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <div class={styles.day}>
          <span class={styles.date}>Tuesday 25 July 2023</span>
        </div>

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

        The <Links.EL link={{source:'https://link.springer.com/article/10.1007/s10509-016-2911-0', label:'The Genesis project'}}>Genesis project</Links.EL> consists hence of three steps.
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
      </section>
    </Layout>
  )
}

export default July
