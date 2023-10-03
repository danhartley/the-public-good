import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import Accordion from 'components/accordion/accordion'
import styles from 'pages/pages.module.scss'

const September = () => {
  return (
    <Layout
      header="September 2023 Notes"
      title="September 2023 Notes"
      description={'September 2023 Notes'}
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <div class={styles.day}>
          <span class={styles.date}>Friday 01 September 2023</span>

          <h2>LLMs</h2>

          <p>Interesting recommendation from JP; a good recap of LLM models and releases, interesting examples of how to use prompts and context windows, and some ethical pledges.</p>

          <Links.EL link={{source:'https://simonwillison.net/2023/Aug/27/wordcamp-llms/', label:'Making Large Language Models work for you'}}>Making Large Language Models work for you</Links.EL>
          <div>Simon Willison</div>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Thursday 07 September 2023</span>

          <h2>The Empty Atom</h2>

          <p>Another recommendation from JP; on why atoms are not empty.</p>

          <Links.EL link={{source:'https://aeon.co/essays/why-the-empty-atom-picture-misunderstands-quantum-theory', label:'We are not empty'}}>We are not empty</Links.EL>
          <div>Aeon | Mario Barbatti</div>

          <p>The first (quantum) property arises from the Heisenberg uncertainty principle, which holds that a quantum particle cannot simultaneously be at a precise position and also have zero speed. This implies that an electron cannot glue to a nucleus because both particles would be in a well-defined place and at rest to each other – defying a central rule of the quantum world.</p>

          <p>The second quantum property is the Pauli exclusion principle. The fundamental components of matter are split into two types, bosons and fermions. The gluons inside the proton are examples of bosons. We can have as many of them as we want, sharing the same position simultaneously. On the other hand, fermions – such as electrons, quarks, protons and neutrons – obey a much more restrictive rule named the Pauli exclusion principle: no two identical fermions can simultaneously occupy the same space and have the same spin (a quantum property analogous to a classical rotation of a particle about its axis).</p>

          <p>With all those effects encoded into the Schrödinger equation, the master equation of quantum theory, it predicts that our point-like nuclei and electrons must, in fact, behave like waves. They delocalise in quantum clouds much bigger than their particle-picture size to satisfy the Heisenberg uncertainty principle, with electrons shaped into different clouds to satisfy the Pauli exclusion principle. The lighter the particles are, the bigger the delocalisation. Thus, a single electron cloud may spread over multiple nuclei, forming a chemical bond and stabilising the molecule.</p>

          <p>In the quantum world, the wave function represents more than a mere lack of knowledge. Delocalised systems – like nuclear and electronic clouds – cause phenomena that localised particles cannot explain. The existence of chemical bonds forming molecules is a direct example of the effect of electronic delocalisation. In the case of nuclear delocalisation, one of its main effects is to boost the chances of a hydrogen nucleus (a single proton) flowing from one molecule to another nearby. This kind of enhanced proton transfer has dramatic biological consequences, like increasing the acidity of specific enzymes compared with how acidic they would be if hydrogen nuclei behaved as particles.</p>

          <p>In atoms and molecules, electrons must have specific energies, each energy associated with a particular cloud shape. Consider, for example, an atom with a single electron. In the lowest possible energy, the ground energy level, this electron delocalises into a spherical cloud, dense at the centre of the atom and gradually fading out. The single-electron wave functions describing these clouds are called orbitals.</p>

          <p>At higher energy levels, the single electron delocalises into more complex clouds with nested spheres, multiple blobs or even doughnut shapes. Thus, when speaking of atoms and molecules, electrons are not little particles chaotically rocketing around the nuclei until they become a fuzzy cloud, as often depicted. And electrons are not in the orbitals, nor do they populate them. Electrons are the orbitals. They are delocalised clouds</p>

          <p>With all those effects encoded into the Schrödinger equation, the master equation of quantum theory, it predicts that our point-like nuclei and electrons must, in fact, behave like waves. They delocalise in quantum clouds much bigger than their particle-picture size to satisfy the Heisenberg uncertainty principle, with electrons shaped into different clouds to satisfy the Pauli exclusion principle. The lighter the particles are, the bigger the delocalisation. Thus, a single electron cloud may spread over multiple nuclei, forming a chemical bond and stabilising the molecule.</p>

          <h2>Bézier curves</h2>

          <Links.EL link={{source:'https://blog.richardekwonye.com/bezier-curves', label:'Bézier curves'}}>Bézier curves</Links.EL>
          <div>Richard Ekwony</div>

          <p>Bézier curves explained with delightful, animated diagrams.</p>

        </div>

        <div class={styles.day}>
          <span class={styles.date}>Thursday 07 September 2023</span>

          <h2>The Working Group</h2>

          On Ikigai
          <ul>
            <li>Raison d'être</li>
            <li>Joie de vivre</li>
            <li>Man's Search for Meaning (Logotherapy | Viktot Frankl)</li>
          </ul>

          Action
          <ul>
            <li>The other's ikigai</li>
            <li>Ikigai of the group: what can we be advocates for; what we can offer to others (where we do not overlap)</li>
            <li>Aim not methods (declarative not imperative); cf evolution - explain what we do, do not create unnecessary things</li>
            <li>Recalling earlier idea of heading one way to get to another</li>
            <li>In the future, looking back. Succession not goal.</li>
            <li><Links.EL link={{source:'https://www.iftf.org/', label:'Institute for the Future'}}>Institute for the Future</Links.EL> | Jane McGonigal</li>
          </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Sunday 30 September 2023</span>

          <h2>Trouble</h2>

          <p>Critcism of OWID</p>

          <Links.EL link={{source:'https://www.planetcritical.com/p/its-not-science-organisations-with-links-to-musk', label:'CLIMATE CORRUPTION'}}>Climate Corruption</Links.EL>
          <div>"It's not science" – Organisations with links to Musk accused of "pro-growth" skew | Aoifé Wall and Rachel Donald | Planet Critical</div>

          <blockquote>
            <div>A UK charity with links to Elon Musk has been accused of promoting misleading information about economic growth.</div>
            <div>
            Questions have been raised concerning Our World in Data (OWID) and its pro-economic and population growth bias after it emerged the organisation has taken donations from tech billionaire Musk since at least 2021.
            </div>
          </blockquote>

          <p>Where we are with the 9 planetary boundaries?</p>

          <Links.EL link={{source:'https://www.youtube.com/watch?v=lLq8e73-FAw', label:'Johan Rockström interview | Planetary boundaries, \'negative emissions\', mitigation models & fairness'}}>Climate Corruption</Links.EL>
          <div>Johan Rockström interview | Planetary boundaries, 'negative emissions', mitigation models & fairness | Climate Uncensored | Kevin Anderson | YouTube</div>

          <ul>
          <li>Outlining the planetary boundary & tipping points framework</li>
          <li>How long before we see tipping points occurring?</li>
          <li>Climate impacts this century</li>
          <li>Understanding the conservatism of the IPCC process</li>
          <li>Integrated Assessment Models: do they rely too much on CO2 removal?</li>
          <li>Is the promise of future 'carbon dioxide removal' undermining emission reductions?</li>
          <li>How ready to deploy are 'negative emissions technologies' really?</li>
          <li>Where is equity in Integrated Assessment Models?</li>
          <li>Privileged scientists in wealthy countries have framed the mitigation agenda</li>
          <li>Is change driven top-down or bottom-up?</li>
          <li>The role for citizens' assemblies in guiding mitigation policy</li>
          <li>Is academia biased towards the status quo, rather than real action on climate?</li>
          </ul>

        </div>

      </section>
    </Layout>
  )
}

export default September
