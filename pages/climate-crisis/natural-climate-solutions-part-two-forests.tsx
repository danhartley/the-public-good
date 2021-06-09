import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Formula from 'components/tools/formula';
import Tables from 'components/tables/tables';
import styles from 'pages/pages.module.scss';

const references = [
    {
        name: "Natural climate solutions | Griscom et al.",
        source: "https://www.pnas.org/content/114/44/11645"
    },
    {
        name: "What role can forests play in tackling climate change? | Grantham Institute PDF",
        source: "https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf"
    },
    {
        name: "IPCC Forestry 2018 PDF",
        source: "https://www.ipcc.ch/site/assets/uploads/2018/02/ar4-wg3-chapter9-1.pdf"
    },
    {
        name: "Forests Absorb Twice As Much Carbon As They Emit Each Year",
        source: "https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year"
    },
    {
        name: "Will Climate Change Upend Projections of Future Forest Growth?",
        source: "https://e360.yale.edu/features/will-climate-change-upend-projections-of-future-forest-growth"
    },
    {
        name: "En-ROADS climate and policy simulation model | Climate Interactive",
        source: "https://en-roads.climateinteractive.org/scenario.html?v=2.7.39"
    },
    {
        name: "A New Hope: GEDI to Yield 3D Forest Carbon Map | NASA",
        source: "https://www.nasa.gov/feature/goddard/2018/gedi-to-measure-earths-forests"
    },
];

const NCSPartTwo = () => {
    return (
        <Layout header="Natural climate solutions - Forests" rt="9 to 10" title="natural-climate-solutions-part-one-forests" description={'Forests'}>
            <section>
            <h2>What part will forests play in combating the climate crisis?</h2>
            <p>In <Links.IL link={{source:'climate-crisis/natural-climate-solutions-part-one-trees'}}>part I</Links.IL> we considered trees as a measure of carbon sequestration.</p>
            <p>As a unit they are imprecise and cannot be readily compared to other forms of sequestration.</p>
            
            <p>They also represent a relatively small fraction of the carbon sequestered in many woodlands and forests. The amount of carbon stored in soil is striking. In the case of a temperate forest it is 72% but all forests store high amonts of carbon in their soils, and the older the forest the more carbon.</p>            
            <aside>
                <h4>Where carbon is stored in a typical temperate forest</h4>
                <dl>
                    <dt><strong>Leaves, branches, trunk</strong></dt><dd>17%</dd>
                    <dt><strong>Surface litter</strong></dt><dd>5%</dd>
                    <dt><strong>Dead wood</strong></dt><dd>1%</dd>
                    <dt><strong>Roots</strong></dt><dd>6%</dd>
                    <dt><strong>Soil</strong></dt><dd>72%</dd>
                </dl>
                <div>
                    <Links.EL link={{source:'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'}}>What role can forests play in tackling climate change?</Links.EL> (PDF) | Waring et al.
                </div>
            </aside>
            <p>Grassland and savanna also store carbon in their soils, and although the weight of above-ground carbon is minimal compared to that stored in the trunks and branches of forest trees, disturbing the soil and replacing natural vegetation with trees leads to a net loss of <Formula>CO2</Formula> to the atmosphere; a process which takes years to reverse.</p>
            <p>An example of inappropriate land use change occurred in Flow Country in the north of Scotland. 20% of peatlands in Flow Country were drained and planted with non-native conifers, a process accelerated between 1950 and 1980.</p>
            <blockquote cite='https://www.theflowcountry.org.uk/flow-facts/flow-fact-1/'>
            Many peatlands have been growing undisturbed for thousands of years, so although they cover just 3% of the world’s land area, they hold nearly 30% of all the carbon stored on land. The Flow Country’s peat bogs alone store about 400 million tonnes – more than double the amount in all of Britain’s woodlands.
            </blockquote>
            <cite><Links.EL link={{source:'https://www.theflowcountry.org.uk/flow-facts/flow-fact-1/'}}>Flow Country | Climate change</Links.EL> </cite>
            <p>In order to compare land use we need a common unit; the hectare is the unit most widely used for measuring land area.</p>
            <h3>Hectares</h3>                
            <p>It's useful to have a sense of what a hectare looks like. In a city a hectare can cover several streets or blocks and contain hundreds, or thousands of people.</p>
            {/* <p>Competitive sports fields are typically between 1 and 2 hectares in size.</p> */}
            <p>But urban areas account for only <Links.EL link={{source:'https://ourworldindata.org/land-use'}}>one percent</Links.EL> of land use.</p>
            <aside>
                <h4>Hectare - ha</h4>
                <dd>The hectare, although not a unit of SI, is the only named unit of area that is accepted for use with SI units.</dd>
                <dl>
                    <dt><strong>Equivalent units</strong></dt>
                    <dd>10,000 square metres.</dd>
                    <dd>There are 100 hectares in one square kilometre.</dd>
                    <dd>An acre is about 0.405 hectares.</dd>
                    <dd>One hectare contains about 2.47 acres.</dd>
                </dl>
                <div>
                    <Links.EL link={{source:'https://en.wikipedia.org/wiki/Hectare'}}>Hectare | Wikipedia</Links.EL>
                </div>
            </aside>
            <p>Most farms are also small and family-run. Those under 2 hectares <Links.EL link={{source:'https://www.sciencedirect.com/science/article/pii/S0305750X15002703'}}> operate about 12% of the world’s agricultural land</Links.EL>. Large farms can be thousands, or tens of thousands of hectares.</p>
            <p>Though forests cover over 4 billion hectares, their minimum size is surprisingly small. The UNFCCC defines a forest as <Links.EL link={{source:'https://www.nature.com/articles/news.2009.842'}}>an area of land 0.05–1 hectare in size, of which more than 10–30% is covered by tree canopy</Links.EL>.</p>
            <h3>Land use</h3>
                <p>71% of the Earth's surface is Ocean. The remaining 29% occupied by land covers 104 million square kilometres or 10,400 million hectares.</p>
                <p>10% of the land is covered in glaciers, and a further 19% is barren. The remainder is deemed habitable.</p>
                <p>Competition for habitable land is intense; its management critical for food, biodiversity, and natural services.</p>
                <aside>
                    <h4>Habitable land use</h4>
                    <dl>
                        <dt><strong>Agriculture</strong></dt>
                        <dd>50%</dd>
                        <dt><strong>Forest, woodland</strong></dt>
                        <dd>37%</dd>
                        <dt><strong>Shrubs and grasslands</strong></dt>
                        <dd>11%</dd>
                        <dt><strong>Freshwater coverage</strong></dt>
                        <dd>1%</dd>
                        <dt><strong>Built up urban area inc. all human infrastructure</strong></dt>
                        <dd>1%</dd>
                    </dl>
                    <div>
                        <Links.EL link={{source:'https://ourworldindata.org/land-use'}}>Land Use | Our World in Data</Links.EL>
                    </div>
                </aside>                
                <h3>Are forests sinks or sources of <Formula>CO2</Formula>?</h3>
                <p>We can compare land use today with land use 10,000 years ago.</p>
                <blockquote cite='https://ourworldindata.org/world-lost-one-third-forests'>
                <div>10,000 years ago 57% of the world’s habitable land was covered by forest. That’s 6 billion hectares.  Today, only 4 billion hectares are left. The world has lost one-third of its forest – an area twice the size of the United States.</div>
                </blockquote>
                <cite><Links.EL link={{source:'https://ourworldindata.org/world-lost-one-third-forests'}}>The world has lost one-third of its forest Our World in Data</Links.EL></cite>
                <p>In <Links.IL link={{source:'climate-crisis/natural-climate-solutions-part-one-trees'}}>Part I</Links.IL> we estimated that 200 gigatonnes of carbon could be sequestered by the end of the century.</p>
                <p>The Grantham Institute suggests a realistic estimate is <Links.EL link={{source:'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'}}>40-60 gigatons</Links.EL>.</p>
                <blockquote cite='https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'>
                    <div>
                    Reforestation and afforestation could reduce the concentration of carbon dioxide in the atmosphere by approximately 15–30 parts per million (ppm)5. To place this into context, the concentration has risen at an unprecedented rate from about 280ppm before the Industrial Revolution began, to the present-day concentration of 400ppm and above.
                    </div>
                    <div>
                    Therefore, even based on optimistic estimates, tree-planting alone will be insufficient to bring carbon dioxide concentration to net-zero, unless immediate and sustained action is also taken to reduce the current rate of emission
                    </div>
                </blockquote>

                <p>This is the net value. Forests acts as both a carbon sink, and a source of carbon. Carbon is primarily lost when forests are degraded or cleared, but all plants, including trees, also release <Formula>CO2</Formula> during respiration.</p>
                <aside>
                    <h4>Cellular respiration</h4>
                    <div>Cellular respiration is in a way the reverse of photosynthesis. Although we tend to associate respiration with humans and other animals, plants also respire.</div>
                    <p><Formula>C6H12O6</Formula> + 6<Formula>O2</Formula> → 6<Formula>CO2</Formula> + 6<Formula>H2O</Formula> + heat</p>
                </aside>
                <p>Similiarly grassland, peat moors…</p>
                <p>Ground measurements with satellite observations…</p>                                
                <p>Carbon flux/cycle, gain is net…</p>
                <aside>
                    <h4><Formula>CO2</Formula> fertilisation</h4>
                    <p><Formula>CO2</Formula> fertilisation refers to increased photosynthesis due to higher levels of carbon dioxide and greater water use efficiency in plants.</p>
                    <p>The consensus is that extra <Formula>CO2</Formula> has enabled more growth, but data from a number of recent studies questions whether this will continue due to limiting factors such as increased warming. Conclusive evidence is hampered by a lack of experiments and variety as to the types of trees and forests studied.</p>
                    <p>Gabriel Popkin presents a review of the current thinking in his article at Yale Environment, <Links.EL link={{source:'https://e360.yale.edu/features/will-climate-change-upend-projections-of-future-forest-growth'}}>Will Climate Change Upend Projections of Future Forest Growth?</Links.EL> </p>
                </aside>                
                <h3>Limiting factors</h3>                
                <aside>
                    <h4>Limiting factors</h4>
                    <dl>
                        <dt><strong>Carbon dioxide</strong></dt>
                        <dd>…</dd>
                        <dt><strong>Nitrogen</strong></dt>
                        <dd>…</dd>
                        <dt><strong>Water</strong></dt>
                        <dd>…</dd>
                        <dt><strong>Soil & other minerals</strong></dt>
                        <dd>…</dd>
                        <dt><strong>Temperature</strong></dt>
                        <dd>…</dd>
                    </dl>
                </aside>
                <aside>
                    <h4>Albedo</h4>
                    <blockquote cite='https://www.carbonbrief.org/explainer-10-ways-negative-emissions-could-slow-climate-change'>
                        A measure of how much of the sun's energy is reflected by a surface. It is derived from the Latin word albus, meaning white. Albedo is measured as a percentage or fraction of the sun’s energy that is reflected away. Snow and ice tend to have a higher albedo than, for example, soil, forests and open water.
                    </blockquote>
                    <cite><Links.EL link={{source:'https://www.carbonbrief.org/explainer-10-ways-negative-emissions-could-slow-climate-change'}}>Albedo | Carbon Brief</Links.EL> </cite>
                    <p>Include other effects e.g. cloud cover, soil-water balance…</p>
                </aside>
                <p>Whilst the tropics has remained a carbon sink, deforestation has lead to increased emissions. There has been forest regrowth in the temperate zones, and parts of the boreal zone.</p>
                <blockquote cite="https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year">
                    Although important to give these young forests the chance to grow into old ones, protecting primary and mature secondary forests today is most important for curbing climate change.
                </blockquote>
                <cite><Links.EL link={{source:'https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year'}}>Forests Absorb Twice As Much Carbon As They Emit Each Year</Links.EL></cite>
                <p>Available… IPCC… Crowther, etc…</p>
                <h3>Natural services</h3>
                <p>Keystone species…</p>
                <p>Transpiration…</p>
                <p>Additional benefits to humans…</p>
                <aside>
                    <h4>Benefits of trees</h4>
                    <ul class={styles.unorderedList}>
                        <li>Clean the air of harmful pollutants (such as carbon monoxide, ammonia and sulphur dioxide through their leaves, barks and roots).</li>
                        <li>Limit the effects of urban heat islands, reducing air conditioning needs.</li>
                        <li>Control land erosion, reduce landslides and control surface water, and help mitigate flood damage.</li>
                        <li>Boost biodiversity in cities.</li>
                        <li>Green spaces in urban areas can contribute to stronger communities and improved wellbeing.</li>
                        <li>Fallen leaves, flowers, fruits or other tree parts form mulches. These provide a natural filter for polluted rainwater, supplying clean water to other plants in the vicinity as well as our rivers and oceans.</li>
                    </ul>
                </aside>
                <h3>Bioenergy with Carbon Capture & Storage BECCS</h3>
                <p>BECSS is…</p>
                <p>In theory…</p>
                <p>There are at least <Links.EL link={{source:'https://www.carbonbrief.org/explainer-10-ways-negative-emissions-could-slow-climate-change'}}>ten negative emissions technologies</Links.EL>. Of these BECCS and DAC have the loudest advocates but they are unproven. Though these technologies are undoubtedly interesting, and in some case ingenious, it is naive to assume either their efficacy or practicality. Previous transitions and revolutions in energy, agriculture and construction have taken a long time, despite clear benefits and, in time, financial reward.</p>
                <h3>Conclusion</h3>
                <p>Nature was not designed to solve a problem but via the constant friction of natural selection, change and chance, created an infinite, resilient jigsaw.</p>
                <p>The origin of coal…</p>
                <p>Part of the solution…</p>
                <p>Other ghgs…</p>
                <p>Restoration… </p>
                <p>Afforestation…</p>
                <p>Local… different scales</p>
                <p>The multiple chemical and biological process that combine in photosynthesis and respiration enable plants to convert carbon dioxide, water and energy from the sun into sugars from which plants assembled their own forms, and by extension provide the food and materials to sustain all other life on the planet.</p>
                <p>It is understandable that we adapt our surroundings to sustain and enrich our lives but it is dispiriting and paradoxical that we destroy and create in order to throw away food and baubles.</p>
            </section>
            <section>   
                <h2>References</h2>
                <Links.ExternalLinksList links={references} />
            </section>
            <Links.RelatedLinks links={[{value:'climate-crisis/natural-climate-solutions-part-one-trees',text:'Natural climate solutions - Trees'},{value:'climate-crisis/carbon-element-of-life',text:'Carbon - element of life'}, {value:'climate-crisis/facts',text:'Facts'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default NCSPartTwo;