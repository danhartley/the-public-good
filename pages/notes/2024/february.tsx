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
        <div class={styles.day}>
          <span class={styles.date}>Tuesday 27 February 2024</span>

          <h2>Farming & Biodiversity</h2>

          <Links.EL link={{source:'https://www.nature.com/articles/s44185-023-00034-2'}}>Farming practices to enhance biodiversity across biomes: a systematic review</Links.EL>

          <ul>
            <li>Biodiversity is declining at an unprecedented pace around the world, with current estimates that around 5% of all species will be lost every ten years.</li>
            <li>The main driver of biodiversity loss is agriculture, both through intensification of existing agricultural land and expansion of agriculture into pristine ecosystems.</li>
            <li>Intensification of agricultural practices in recent decades (…leads) to increase yields to the detriment of other key ecosystem services, such as pollination, nitrogen cycling, carbon storage or resistance to drought.</li>
            <li>Due to intensive practices, such as pesticide use, intensive tillage, and monocultures.</li>
          </ul>

          <h3>Results</h3>
          <ul>
            <li>Our findings show that no single practice enhances all taxonomic groups, but that alternative, less intensive agricultural practices are often beneficial to global biodiversity when compared to intensive conventional practices.</li>
            <li>We identified 35 alternative agricultural practices for which responses of seven studied taxa (arthropods, birds, mammals, earthworms, nematodes, bacteria and fungi) have been reported. We categorized these practices into ‘Groups of practices’ with a similar function (e.g., minimum tillage and conservation tillage).</li>
            <li>
              We identified eleven groups of practices:
              <ul>
                <li>fertilization (5)</li>
                <li>crop diversity (2)</li>
                <li>planned biodiversity interferences (2)</li>
                <li>no pesticide use (3)</li>
                <li>no GMO use (1)</li>
                <li>tillage (4)</li>
                <li>soil cover (5)</li>
                <li>irrigation (5)</li>
                <li>grazing (3)</li>
                <li>livestock care (2)</li>
                <li>miscellaneous (3)</li>
              </ul>
            </li>
            <li>We identified four practices that benefitted multiple taxonomic groups, henceforth referred to as “no regret” practices, that enhance combined biodiversity without adversely affecting any specific taxonomic group.</li>
            <li>Practices in the group of planned biodiversity interferences and no pesticide use were clearly positive in a vast majority of cases, with almost no negative incidence across taxonomic groups.</li>
            <li>We also found five individual practices that enhanced specific taxa.</li>
            <li>Biodiversity-friendly practices alone will not suffice and should be coupled with a concomitant strategy to prevent further expansion of agricultural lands and restore and preserve existing natural areas.</li>
            <li>Biodiversity conservation is a systemic issue and our results clearly stress the importance of simultaneously addressing multiple aspects of biodiversity (e.g., soil organisms, arthropods, birds) for effective conservation.</li>
          </ul>

          <h2>HPF</h2>

          <Links.EL link={{source:'https://www.youtube.com/watch?v=5QOTBreQaIk'}}>The harsh reality of ultra processed food | Royal Society | Chris Van Tulleken</Links.EL>
          <p>The industrialisation and commercialisation of food have transformed our diets, whereby most of our calories now come from an entirely novel set of substances. Ultra Processed Food (UPF) now makes up 60% of the average diet in the UK and USA. It is highly processed, highly addictive, and largely unhealthy.</p>

          <Links.EL link={{source:'https://www.youtube.com/watch?v=4S9sDyooxf4'}}>Climate sensitivity | Sabine Hossenfelder</Links.EL>      
          <Links.EL link={{source:'https://www.youtube.com/watch?v=q4EuvpDzlUY'}}>Climate sensitivity reposte | Climate Adam</Links.EL>      
        </div>
      </section>

      <Links.RelatedLinks links={[{ value: 'notes/2023/september', text: 'September 2023' }]}></Links.RelatedLinks>
    </Layout>
  )
}

export default February
