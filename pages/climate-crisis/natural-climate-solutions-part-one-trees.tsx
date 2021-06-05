import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Formula from 'components/tools/formula';
import styles from 'pages/pages.module.scss';

const references = [
    {
        name: "IPCC special report: global warming of 1.5ºc",
        source: "https://www.ipcc.ch/sr15/chapter/spm/"
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
        name: "Trillion Trees",
        source: "https://trilliontrees.org/home"
    },
    {
        name: "One trillion trees | World Economic Forum",
        source: "https://www.1t.org/"
    },
];

const NCSPartOne = () => {
    return (
        <Layout header="Natural climate solutions - Trees" title="natural-climate-solutions-part-one-trees" description={'Trees'}>
            <section>
                <h2>To what extent can we count on trees to remove the carbon dioxide we are emitting?</h2>
                <p>We emit around <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>37 billion tonnes of <Formula>CO2</Formula></Links.EL> each year. The most rational way to reduce or eliminate our carbon dioxide emissions is to stop burning fossil fuels and use land appropriately.</p>
                <p>There may genuinely be some areas where carbon neutrality is hard won, and to offset emissions from these sectors, the term <Links.EL link={{source:'https://www.ipcc.ch/sr15/faq/faq-chapter-4/'}}>negative emissions</Links.EL> was coined.</p>
                <p>There are broadly two forms of negative emissions, artificial direct air capture - <Links.EL link={{source:'https://www.iea.org/reports/direct-air-capture'}}> DAC</Links.EL> - and natural climate solutions - NCS.</p>
                <blockquote cite="https://www.nature.org/en-us/what-we-do/our-insights/perspectives/natural-climate-solutions/">
                    Natural climate solutions are conservation, restoration and improved land management actions that increase carbon storage or avoid greenhouse gas emissions in landscapes and wetlands across the globe.
                </blockquote>
                <cite><Links.EL link={{source:'https://www.nature.org/en-us/what-we-do/our-insights/perspectives/natural-climate-solutions/'}}>Natural Climate Solutions | The Nature Conservancy</Links.EL> </cite>
                <p>The most conspicious and heralded natural climate solution, however, is planting trees. A slew of politicians have promised great planting schemes, and some have been undertaken. There are several high profile global campaigns including <Links.EL link={{source:'https://www.1t.org/'}}>1 trillion trees</Links.EL> backed by the World Economic Forum, and <Links.EL link={{source:'https://trilliontrees.org/home'}}>Trillion Trees</Links.EL>.</p>       
                <h3>How many trees are there?</h3>
                <p>Now…</p>
                <p>Before…</p>
                <p>Planned…</p>
                <p>Per person…</p>
                <h3>What is a tree?</h3>
                <p>No formal definition. Not a taxonomic group but a variety of species that have evolved similar characteristics…</p>
                <aside>
                    <h4>Typical characteristics of a tree</h4>
                    <ul class={styles.unorderedList}>
                        <li>Perennial plant (lives more than 2 years).</li>
                        <li>Elongated single stem or trunk with supporting branches.</li>
                        <li>Trunk and branches contain woody tissue for strength.</li>
                        <li>Height above 6-10 metres when fully grown.</li>
                    </ul>
                </aside>
                <p>Ideal, average, typical…</p>
                <p></p>
                <h3>How to measure a tree</h3>
                <p>The process by which characteristics of a tree, such as its height and weight, are calculated from relatively easy to measure dimensions is called <Links.EL link={{source:'https://en.wikipedia.org/wiki/Tree_allometry'}}>tree allometry</Links.EL>.</p>
                <p>Height…</p>
                <aside>
                    <h4>Calculate the weight of a tree</h4>
                    <div>The simplest way of calculating the weight requires only the Diameter at Breast Height (known as <Links.EL link={{source:'https://en.wikipedia.org/wiki/Diameter_at_breast_height'}}>DBH</Links.EL> and taken as 1.3m) and the density of the tree's wood. For this we need:</div>
                    <ul>
                        <li>Wood density - this varies by species.</li>
                        <li>Diameter of the tree at 1.3 metres.</li>
                        <li>Height of the tree in metres.</li>
                    </ul>
                </aside>
                <p>Weight… wood density…</p>
                <aside>
                    <h4>How to calculate a tree's weight</h4>
                    <div></div>
                </aside>
                <h3>How to calculate the carbon in a tree</h3>
                <p>Trees remove carbon by photosynthesis… C from CO2…</p>
                <aside>
                    <h4>Photosynthesis</h4>
                    <div></div>
                </aside>
                <p>Calculate CO2 from C…</p>
                <p>Photosynthesis natural selection…</p>
                <h3>Is a tree a meaningful unit?</h3>      
                <p>Resonates with people… but really a proxy for forests, or a part of the whole (synecdoche)</p>
                <p>At small scale it can have relevance, such as in offsetting</p>
                <p>The measurement problem…</p>          
                <p>Science uses hectares…</p>
                <p>Talk instead of woodland, forest, in hectares.</p>
                <h3>Hectares</h3>
                <p>Trees per hectare… it varies</p>
                <p>Hectare provides reliable, comparable unit</p>
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
                <h3>Forests - sinks or sources?</h3>
                <p>Forests absorb roughly <Links.EL link={{source:'https://www.nature.com/articles/s41558-020-00976-6'}}>7.6 billion tonnes of <Formula>CO2</Formula></Links.EL> annually, around 15% of total greenhouse gas emissions.</p>                
                <p>This is the net value. Forests acts as both a carbon sink, and a source of carbon. Carbon is primarily lost when forests are degraded or cleared, but all plants, including trees, also release <Formula>CO2</Formula> during respiration.</p>
                <aside>
                    <h4>Respiration</h4>
                    <div></div>
                </aside>
                <p>It is not the trees alone that store carbon.</p>
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
                    <p></p>
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
                <p>In practice…</p>
                <h3>Conclusion</h3>
                <p>The origin of coal…</p>
                <p>Part of the solution…</p>
                <p>Other ghgs…</p>
                <p>Restoration… </p>
                <p>Afforestation…</p>
                <p>Local… different scales</p>
                <p>Not necessarily drive by technology but observation, and patience.</p>
            </section>
            <section>   
                <h2>References</h2>
                <Links.ExternalLinksList links={references} />
            </section>
            <Links.RelatedLinks links={[{value:'climate-crisis/carbon-capture-and-storage-in-trees-part-two',text:'Carbon capture and storage in trees - part II'},{value:'climate-crisis/carbon-element-of-life',text:'Carbon - element of life'}, {value:'climate-crisis/facts',text:'Facts'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default NCSPartOne;

                {/* <h3>Land sinks</h3>
                <p>Land absorbs 25% of emissions. Trees…</p>
                <blockquote>
                    Over the last three or four decades, forests and terrestrial systems in general have absorbed almost a quarter of all fossil fuel emissions released into the air, Earth system scientist Rob Jackson 
                </blockquote> */}