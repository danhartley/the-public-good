import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import Accordion from 'components/accordion/accordion'
import styles from 'pages/pages.module.scss'

const November = () => {
  return (
    <Layout
      header="November 2023 Notes"
      title="November 2023 Notes"
      description={'November 2023 Notes'}
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <div class={styles.day}>
          <span class={styles.date}>Wednesday 01 November 2023</span>

          <Links.EL link={{source:'https://www.youtube.com/playlist?list=PLybg94GvOJ9E5VK94UujanWk45qM8rQuz', label:'Geology'}}>Geology</Links.EL>
          <div>Professor Dave</div>

          <h3>Characteristics of Sedimentary Rocks: Size, Provenance, and Composition</h3>

          <ul>
            <li>Recycled materials (diverse materials from different times; rock, sea creatures, organic, other sediments)</li>
            <li>Comprised of sediments (naturally occurring unconsolidated material)</li>
            <li>Formed by being compacted and cemented over time</li>
            <li>Characterised by: size, provenance and composition</li>
            <li>Clay, silt, sand and gravel (in ascending order of size). Size can help determine provenance</li>
            <li>Silt + clay = mud</li>
            <li>Most sediments deposited by fluid (water or air); size indicates where deposited e.g. calm or turbulent water</li>
            <li>Terrigenous sediments (silicate minerals), biogenic sediments (organism exoskeletons made from calcites in marine environments), volcanogenic sediments (feldspar, glass)</li>
            <li>Climate affects e.g. in arid conditions, salts precipitate out and form deposts (chemogenic sediments)</li>
          </ul>

          <h3>Mineralogy of Sedimentary Rocks: Weathering and Diagenesis</h3>

          <ul>
            <li>Terrigenous (silici/clastic); made of weather/eroded pieces of existing rocks</li>
            <li>Changed by acidic precipitation and groundwater, therefore remaining minerals relatively non-reactive e.g. quartz and clay and will be well sorted and rounded</li>
            <li>Breccia: relatively angular (feldspar) and poorly sorted, the result of landslides and lahars</li>
            <li>Diagenisis: chemical and physical changes that occur during and after the burial of sediment (in basins or low lying area)</li>
            <li>Pore space determined by depth (pressure)</li>
            <li>Cementation: precipitation of minerals into the pore space of sediment; commonly quartz (silicate) or calcite (calcium carbonate)</li>
          </ul>

          <h3>Classification of Sedimentary Rocks Part 1: Terrigenous/Siliciclastic Rocks</h3>

          <ul>
            <li>Siliciclastic: 75% of all sedimentary rocks; classified by grain size</li>
            <li>Use ternary diagrams to classifiy rocks based on mix of grain sizes</li>
            <li>Rock makeup: grain (framework), matrix, cement (pore space)</li>
            <li>Lithification: cementation + compaction</li>
            <li>Sandstone: framework (sand-sized grains - quartz/feldspar, or lithic fragments) + matrix (in different proportions)</li>
            <li>Use quartenary diagrma to determine type of sandstone</li>
            <li>Conglomerates: at least 30% gravel</li>
            <li>Breccia has more angular grains (clasts) than typical conglomerates; clast-supported</li>
            <li>Classfied by ratio framework/matric</li>
            <li>Diamictite: (muddy) matrix-supported and poorly sorted grains</li>
            <li>Classification usually dictated by lithic fragment types: sedimentary, igneous or metamorphic</li>
            <li>More stable when stable clasts</li>
            <li>Mudstones/shales: 50% all sandstones (occurring in low energy environments e.g. lake or ocean depths)</li>
          </ul>

          <h3>Classification of Sedimentary Rocks Part 2: Biogenic Rocks</h3>

          <li>Most common are carbonate rocks (limestone) in two polymorphs, calcite (most common over time) and aragonite (most common now); this depends on the Mg/Ca ratio of seawater</li>
          <li>Carbonate sediment is derived from biological organisms (with some rounding and sorting during transport)</li>
          <li>Grains come in all shapes and sizes</li>
          <li>Mostly commonly formed from skeletal fragements (fossils)</li>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Thursday 02 November 2023</span>
        <h3>Pinheiros</h3>

        <Links.EL link={{source:'https://florestas.pt/conhecer/pinheiro-bravo-a-conifera-mais-abundante-em-portugal/'}}>Florestas: Pinheiro-bravo</Links.EL>

        <ul>
          <li>Lifespan up to 200 years</li>
          <li>Height to 30m (exceptional 40)</li>
          <li>Prefers silaceous soils, adaptable but cannot tolerate high levels of salt or calcium</li>          
          <li>Pioneer species widely planted to prevent soil erosion on the coasts and on wastlands</li>
          <li>Common in the Setúbal area</li>
          <li>Used by local people for firewood, lighting fires and bedding for animals</li>
          <li>Resin sold as an income</li>
          <li>Numbers have dimished (from 40 to 25% of trees) due to replacement, urbanisation and fires.</li>
          <li>Industrial uses include ship building, construction, and packaging</li>
        </ul>

        <Links.EL link={{source:'https://florestas.pt/conhecer/pinheiro-manso-a-especie-pioneira-que-lembra-um-guarda-sol/'}}>Florestas: Pinheiro-manso</Links.EL>

        <ul>
          <li>Except for on the Iberrian, found on the coast</li>
          <li>Pionner species able to adapt to poor, marginal soils and where desertification occurs (where it is planted to comabt this)</li>
          <li>Xerophytic, thermophilic and very heliophytic</li>
          <li>Prefers loose sands and podzols; sensitive to poorly drained and calcareous soils</li>
          <li>Plays an important role in protecting soils from erosion, fixing coastal dunes and enriching poor, marginal and desertified land, where it helps to establish conditions for the reappearance of more demanding species such as the cork oak or holm oak.</li>
          <li>Height to 20m (exceptional 25-30)</li>
          <li>Stone pine have male flowers, the catkins, and female flowers, the strobiles, a characteristic that includes it in the group of monoecious species.</li>
          <li>With both male and female flowers, the stone pine benefits from cross-pollination by the wind, although the fertilisation process takes a long time. It takes three years for the pine cone to form and mature.</li>
          <li>Stone pines start producing pine cones at around 8 to 10 years of age, but its maturation cycle and the small initial quantity means that it is only between 15 and 20 years of age that the quantity of pine cones produced justifies commercial interest in harvesting. The quantity of pine cones increases as the tree ages.</li>
        </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Friday 03 November 2023</span>

          <Links.EL link={{source:'https://dwc.tdwg.org/terms/'}}>Darwin Core Quick Reference Guide</Links.EL>

          <h3>Existing apps and tools</h3>
          
          <ul>
            <li>
              <Links.EL link={{source:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6711348/figure/aps311284-fig-0001/'}}>The collBook user interface</Links.EL>
            </li>
            <li>
              <Links.EL link={{source:'https://oit.williams.edu/about/ats/project-group/digital-field-notebooks/'}}>Digital Field Notebooks (from 2014: no longer supported)</Links.EL>
            </li>
            <li>
              <Links.EL link={{source:'https://www.mobot.org/mobot/molib/fieldtechbook/pdf/handbook.pdf'}}>Field Techniques Used by Missouri Botanical Garden</Links.EL>

              <blockquote>
                <strong>Field data should contain the following information at a minimum:</strong>

                <div>Locality Data:</div>
                <ul>
                  <li>Country: State, province or county. </li>
                  <li>Distance and direction (km or mi, N-S-E-W not "from", or "near") from nearest city or major landmark that would appear on a map (smaller geographical localities are not on most maps). </li>
                  <li>Habitat or vegetation type. Dominant, typical, or associated species if possible.</li>
                  <li>Note if plants were preserved in alcohol, or received any other chemical treatment before drying.</li>
                  <li>Latitude/Longitude and/or Township/Range; altitude (m or ft); GPS reading if available.</li>
                  <li> Date.</li>
                  <li>Collector(s).</li>
                </ul>

                <div>For Each Collection: </div>

                <ul>
                  <li>FAMILY (capitalized).</li>
                  <li>Genus species Author (Leave space if unidentified, and for future changes); det. by:
                    <ul>
                      <li>Tree, shrub, liana, vine, etc. Flower and/or fruit color, scent, height, and unusual features, such as shaggy bark, buttressed trunk, colored sap, any attribute which cannot be obtained from the prepared specimen.</li>
                      <li>More specific notes on locality and habitat (near stream, on rock, in water, etc. [information that is specific to this number]).</li>
                    </ul>
                  </li>
                </ul>

                <div>Marginal Notes for Each Collection: (<em>not summarised here</em>)</div>                
              </blockquote>
            </li>
          </ul>
        </div>        

      </section>

      <Links.RelatedLinks
            links={[
              { value: 'ltp/notes/2023/october', text: 'October' },
              { value: 'ltp/notes/2023/september', text: 'September' },
              { value: 'ltp/notes/2023/august', text: 'August' },            
              { value: 'ltp/notes/2023/july', text: 'July' },       
            ]}
        ></Links.RelatedLinks>
    </Layout>
  )
}

export default November
