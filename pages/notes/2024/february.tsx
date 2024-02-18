import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import Accordion from 'components/accordion/accordion'
import styles from 'pages/pages.module.scss'

const February = () => {
  return (
    <Layout
      header="February 2023 Notes"
      title="February 2023 Notes"
      description={'February 2023 Notes'}
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <div class={styles.day}>
          <span class={styles.date}>Sunday 18 February 2024</span>

          <h2>Pollinators & flower colour</h2>

          <ul>
            <li>Flies are the second most common type of pollinator</li>
            <li>Bees prefer blue hues</li>
            <li>(Hover)flies prefer yellow</li>
            <li>
              Since we know different animals sense colour in different ways, we recorded the spectrum of different
              wavelengths of light reflected from the flowers with a spectrometer. We subsequently modelled these
              spectral signatures of plant flowers considering animal perception, allowing us to objectively quantify
              how signals have evolved. These analyses included mapping the evolutionary ancestry of the plants.
            </li>
          </ul>

          <Links.EL
            link={{
              source:
                'https://theconversation.com/flies-like-yellow-bees-like-blue-how-flower-colours-cater-to-the-taste-of-pollinating-insects-167111',
            }}
          >
            Flies like yellow, bees like blue: how flower colours cater to the taste of pollinating insects
          </Links.EL>

          <ul>
            <li>
              We used a new online plant database to survey the the relative frequencies of blue flowers compared to
              other colours.
            </li>
            <li>
              Among flowers which are pollinated without the intervention of bees or other insects (known as abiotic
              pollination), none were blue.
            </li>
            <li>
              But when we looked at flowers that need to attract bees and other insects to move their pollen around, we
              started to see some blue
            </li>
            <li>White: 24%; yellow 20%, green 15%; pink 12%; purple 8%; blue 7%</li>
            <li>
              For the flowers pollinated by insects, especially bees, it is interesting to consider that they have
              different colour vision to humans.
            </li>
            <li>
              Bees have photoreceptors that are sensitive to ultraviolet, blue and green wavelengths, and they also show
              a preference for “bluish” colours. The reason why bees have a preference for bluish flowers remains an
              open field of research.
            </li>
            <li>About one-third of our food depends on insect pollination.</li>
            <li>
              The capacity of flowering plants to produce blue colours is linked to land use intensity including
              human-induced factors like artificial fertilisation, grazing, and mowing that reduce the frequency of blue
              flowers. In contrast, more stressful environments appear to have relatively more blue floral colours to
              provide resilience.
            </li>
            <li>
              For example, despite the apparent rarity of blue flower colours in nature, we observed that in harsh
              conditions such as in the mountains of the Himalaya, blue flowers were more common than expected. This
              shows that in tough environments plants may have to invest a lot to attract the few available and
              essential bee pollinators. Blue flowers thus appear to exist to best advertise to bee pollinators when
              competition for pollination services is high.
            </li>
          </ul>

          <Links.EL
            link={{
              source:
                'https://theconversation.com/the-mystery-of-the-blue-flower-natures-rare-colour-owes-its-existence-to-bee-vision-153646',
            }}
          >
            The mystery of the blue flower: nature’s rare colour owes its existence to bee vision
          </Links.EL>
        </div>
      </section>

      <Links.RelatedLinks links={[{ value: 'notes/2023/september', text: 'September 2023' }]}></Links.RelatedLinks>
    </Layout>
  )
}

export default February
