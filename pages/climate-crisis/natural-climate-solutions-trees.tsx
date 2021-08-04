import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Formula from 'components/tools/formula';
import styles from 'pages/pages.module.scss';
import Accordion from 'components/accordion/accordion';
import Top from 'components/top/top';   

const references = [
    {
        name: "Natural climate solutions | Griscom et al.",
        source: "https://www.pnas.org/content/114/44/11645"
    },
    {
        name: "The Conversation | There aren’t enough trees in the world | Bonnie Waring",
        source: "https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181"
    },
    {
        name: "10 ways ‘negative emissions’ could slow climate change | Carbon Brief",
        source: "https://www.carbonbrief.org/explainer-10-ways-negative-emissions-could-slow-climate-change"
    },    
    {
        name: "Experts assess the feasibility of ‘negative emissions’ | Carbon Brief",
        source: "https://www.carbonbrief.org/in-depth-experts-assess-the-feasibility-of-negative-emissions"
    },
    {
        name: "IPCC special report: global warming of 1.5ºc",
        source: "https://www.ipcc.ch/sr15/chapter/spm/"
    },    
    {
        name: "Trillion Trees",
        source: "https://trilliontrees.org/home"
    },
    {
        name: "One trillion trees | World Economic Forum",
        source: "https://www.1t.org/"
    },
    {
        name: "How is carbon stored in trees and wood products? (PDF)",
        source: "https://forestlearning.edu.au/images/resources/How%20carbon%20is%20stored%20in%20trees%20and%20wood%20products.pdf"
    },
    {
        name: "Carbon dioxide sequestration calculator (PDF)",
        source: "https://www.sanjoseca.gov/home/showdocument?id=9773"
    },
    {
        name: "How to calculate the amount of CO2 sequestered in a tree per year (PDF)",
        source: "https://www.unm.edu/~jbrink/365/Documents/Calculating_tree_carbon.pdf"
    },
    {
        name: "Carbon Storage in Local Trees",
        source: "https://serc.carleton.edu/eslabs/carbon/1b.html"
    },
    {
        name: "Wood Density",
        source: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/wood-density"
    },
    {
        name: "Wood Species Database",
        source: "https://www.wagnermeters.com/specific-gravity/"
    },
    {
        name: "Dry weight calculator",
        source: "http://www.shodor.org/succeedhi/succeedhi/weightree/dryweightcal.html"
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
        name: "Carbon Dioxide Fertilization Greening Earth | NASA 2016",
        source: "https://www.nasa.gov/feature/goddard/2016/carbon-dioxide-fertilization-greening-earth"
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
    {
        name: "The greening of the Earth is approaching its limit | Science X 2020",
        source: "https://phys.org/news/2020-12-greening-earth-approaching-limit.html"
    },
    {
        name: "Limits to growth of forest biomass carbon sink under climate change Zhu et al. 2018",
        source: "https://www.nature.com/articles/s41467-018-05132-5"
    },
    {
        name: "How ‘natural climate solutions’ can reduce the need for BECCS | Carbon Brief",
        source: "https://www.carbonbrief.org/analysis-how-natural-climate-solutions-can-reduce-the-need-for-beccs"
    },
];

const NCSPartOne = () => {
    return (
        <Layout header="Natural climate solutions - Trees" rt="10-15" title="natural-climate-solutions-trees" description={'Trees'}>
            <section>
                <h2>Is planting trees a good way to remove carbon dioxide from the atmosphere?</h2>

                <blockquote cite='https://www.nationalgeographic.com/environment/article/planting-trees-helps-fight-climate-change-but-we-need-billions-more-seedlings'>
                Planting trees has quickly emerged as a seemingly simple way to soak up carbon emissions. Everybody likes it: Environmentalists, politicians, and corporations alike are pushing for a rapid expansion of reforestation efforts to help meet climate goals.
                </blockquote>
                <cite><Links.EL link={{source:'https://www.nationalgeographic.com/environment/article/planting-trees-helps-fight-climate-change-but-we-need-billions-more-seedlings'}}>National Geographic 2021</Links.EL> </cite>
                <p>We emit around <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>37 billion tonnes of carbon dioxide</Links.EL> each year. The most rational way to reduce or eliminate these emissions is to stop burning fossil fuels and use land appropriately.</p>
                <p>To offset emissions from those sectors that are hard to decarbonise it will be necessary to actively remove carbon dioxide from the atmosphere using <Links.EL link={{source:'https://www.ipcc.ch/sr15/faq/faq-chapter-4/'}}>negative emissions</Links.EL> solutions.</p>
                <p>There are broadly two forms of negative emissions, those that rely on technological innovation such as artificial direct air capture - <Links.EL link={{source:'https://www.iea.org/reports/direct-air-capture'}}> DAC</Links.EL> - and natural climate solutions - NCS. Bioenergy with carbon capture & storage - BECCS - is a combination of the two.</p>                        
                <p>Negative emissions technologies satisfy our desire to change, to invent, and to make money at the expense of low-tech, local solutions already in place. None have proved themselves at scale, and some are still in development.</p>                
                <blockquote cite='https://www.carbonbrief.org/in-depth-experts-assess-the-feasibility-of-negative-emissions'>
                    There are currently no technologies to remove CO2 from the atmosphere that can be employed at scale. It is very doubtful any will be available at scale within the timescale required. Furthermore, many of the proposed technologies are likely to have a dire social and environmental impact on food security, community land rights and biodiversity.
                </blockquote>
                <cite><Links.EL link={{source:'https://www.carbonbrief.org/in-depth-experts-assess-the-feasibility-of-negative-emissions'}}> Experts assess the feasibility of ‘negative emissions’ | Hannah Mowat</Links.EL> </cite>
                <p>Technological alternatives tend to solve problems piecemeal, hence the long-winded prose of bioenergy carbon capture and storage, a set of solutions in its infancy.</p>
                <blockquote cite="https://www.nature.org/en-us/what-we-do/our-insights/perspectives/natural-climate-solutions/">
                    <strong>Natural climate solutions</strong> are conservation, restoration and improved land management actions that increase carbon storage or avoid greenhouse gas emissions in landscapes and wetlands across the globe.
                </blockquote>
                <cite><Links.EL link={{source:'https://www.nature.org/en-us/what-we-do/our-insights/perspectives/natural-climate-solutions/'}}>Natural Climate Solutions | The Nature Conservancy</Links.EL> </cite>
                <p>Natural climate solutions are conservative, resilient, and effective. Forest ecosystems account for around <Links.EL link={{ source:'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'}}>45%</Links.EL> of all the carbon stored on land and absorb an estimated <Links.EL link={{source:'https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year'}}>16 billion tonnes of <Formula>CO2</Formula></Links.EL> annually.</p>
                <p>The paper <Links.EL link={{source:'https://www.pnas.org/content/114/44/11645'}}>Natural climate solutions</Links.EL> by Griscom et al. identifies 20 actions that increase carbon storage and/or mitigate emissions, including reforestation, trees in cropland, and fire management.</p>
                <p>Most NCS actions <q>also offer water filtration, flood buffering, soil health, biodiversity habitat, and enhanced climate resilience</q>.</p>
                <p>Natural Climate Solutions tend not to receive the headlines. Tree planting is an exception. Many countries have promised to plant trees, and large scale projects in Ethiopia, Pakistan, India, China and elsewhere have taken place.</p>                
                <p>There are several high profile global campaigns including <Links.EL link={{source:'https://www.1t.org/'}}>1 trillion trees</Links.EL> backed by the World Economic Forum, and <Links.EL link={{source:'https://trilliontrees.org/home'}}>Trillion Trees</Links.EL>.</p>       
                <p>These projects are framed in such a way as to attract public attention by describing problems and solutions in terms of something familiar.</p>
                <p>But are trees a good unit of measurement?</p>
                <p>Scientists generally talk about forests rather than trees, and measure them in hectares. It is when bringing their findings to public attention that they switch to talking about trees. Campaigners, politicians, and protesters similarly prefer trees over hectares.</p>
                <h3>What is a tree?</h3>
                <p>There is no formal definition.  Trees are not part of a taxonomic group but a loose collection of families and species that have evolved similar characteristics.</p>
                <h4>Typical characteristics of a tree</h4>
                <ul class={styles.dashedItemsList}>
                    <li>Perennial plant (lives more than 2 years).</li>
                    <li>Elongated single stem or trunk with supporting branches.</li>
                    <li>Trunk and branches contain woody tissue for strength.</li>
                    <li>Height above 6-10 metres when fully grown.</li>
                </ul>
                <h3>How many trees are there?</h3>
                <p>There are an estimated <Links.EL link={{source:'https://www.nature.com/articles/nature14967.epdf?referrer_access_token=Mm0LXzTYod6Oy04-TOmQ8dRgN0jAjWel9jnR3ZoTv0PkYJmQ6VQcpxIB4Tt0SaQywsN0n2B7UMpxadfI0w_ofNLDLlhk4cGLww_vHFe5rlmtuL6JJLDXGjTbqp0LHRxHawN0BUWv-ba9M693guFIT9oWcIKB37EI4opUfgakavN4BJXZBF8GnwgJfcOi6G9R4cCt5FCu0qNJHPYaC2qONDRZ_dr2gfvyYK9Pml6I4Rk-7Ys3Ic5ZyiuGvxosdULQROmd0-XFQHTv0VIeOWiWzDo3883h5KlluI3EyRFESM5_N7t_hfjI5D74kXrYv7Ob'}}>3.04 trillion</Links.EL> trees.</p>
                <p>For a population of 8 billion, this translates to 375 trees per person.</p>
                <p>The <Links.EL link={{source:'https://ourworldindata.org/grapher/number-of-trees'}}>distribution of trees</Links.EL> varies. Russia has a high number of trees whereas North Africa, the Middle East and Europe have relatively few.</p>                
                <h3>How to measure a tree</h3>
                <p>The process by which characteristics of a tree, such as its height and weight, are calculated from relatively easy to measure dimensions is called <Links.EL link={{source:'https://en.wikipedia.org/wiki/Tree_allometry'}}>tree allometry</Links.EL>.</p>
                <p>Here is one simple way to measure the height of a tree on level ground.</p>
                <p>
                    <div class={styles.inset}>
                    Cut a stick the length of your arm. Extend your arm fully in front with the stick held vertically. Walk towards the tree until the top and bottom of the stick line up with the top and bottom of the tree. The distance to the tree approximates to its height.
                    </div>
                </p>
                <p>There are many other, more precise ways to <Links.EL link={{source:'https://en.wikipedia.org/wiki/Tree_height_measurement'}}>measure a tree's height</Links.EL>, and a number of smartphone apps.</p>
                <Accordion header='How to calculate the weight of a tree'>
                <aside>
                    <h4>How to calculate the weight of a tree</h4>
                    <div>The weight of a tree can be calculated from three values:</div>
                    <ul>
                        <li>Wood density - this varies by species.</li>
                        <li>Diameter of the tree at 1.3 metres. (Diameter at Breast Height - <Links.EL link={{source:'https://en.wikipedia.org/wiki/Diameter_at_breast_height'}}>DBH</Links.EL>).</li>
                        <li>Height of the stem or trunk in metres.</li>
                    </ul>
                    <div>Scientists in Edinburgh demonstrate how to use these values to <Links.EL link={{source:"https://ecometrica.com/assets/one_tonne_carbon_tree_discussion_paper_3.pdf"}}>determine the weight of a sycamore</Links.EL> close to their office.</div>
                </aside>
                </Accordion>
                <p>The weight of a tree is spread throughout its trunk, branches, leaves, and roots.</p>                
                <p>In a mature tree the bulk of its weight - 60+% - is in the trunk, 10% in the branches, and a few percent in the leaves. The weight of a tree's roots varies between 20% and 30% of the whole.</p>
                <p>These ratios make it possible to calculate the total weight of a living tree from one value, usually the weight of the trunk.</p>
                <p>The distribution of weight varies between species, and over time; younger trees usually have a greater proportion of leaf mass, and a relatively small trunk.</p>                
                
                <p>The method used to find the weight of a tree can be extended to calculate the amount of carbon captured by a tree through photosynthesis and its equivalent value of carbon dioxide. </p>
                
                <h3>How to calculate the carbon in a tree</h3>
                <p>Trees remove carbon from the atmosphere by photosynthesis.</p>
                <Accordion header='Photosynthesis'>
                <aside>
                    <h4>Photosynthesis</h4>
                    <div>Photosynthesis is the process by which energy from the sun is used to convert carbon dioxide and water into sugars that are used to build organic matter in plants.</div>
                    <p>6<Formula>CO2</Formula> + 6<Formula>H2O</Formula> + sunlight → <Formula>C6H12O6</Formula> + 6<Formula>O2</Formula></p>
                </aside>
                </Accordion>
                <p>The amount of carbon dioxide stored by weight of a tree is directly proportional to the density of its wood. This value ranges from 14% (<Links.EL link={{source:'https://en.wikipedia.org/wiki/Ochroma'}}>balsa wood</Links.EL>) to 140% (<Links.EL link={{source:'Krugiodendron ferreum'}}>black ironwood</Links.EL>).</p>                
                <Accordion header='Wood density'>
                <aside>
                    <h4>Wood density</h4>
                    <div>Wood density and wood <Links.EL link={{source:'https://en.wikipedia.org/wiki/Relative_density'}}>specific gravity</Links.EL> both indicate the amount of actual wood substance - biomass - present in a unit volume of wood.</div>
                    <div>The unit of density is kg/m<span class={styles.super}>3</span>.</div>
                    <div>Specific gravity is the ratio of a material's density to that of water at 4°C. It has no unit.</div>
                </aside>
                </Accordion>
                <p>
                    <div><strong>Example</strong>: repeat the calculation made for the sycamore - <em>Acer pseudoplatanus</em> - in the Edinburgh <Links.EL link={{source:"https://ecometrica.com/assets/one_tonne_carbon_tree_discussion_paper_3.pdf"}}>experiment</Links.EL> referred to above.</div>
                </p>
                <p>In the original experiment the value for wood density used is 620 kg/m3. However, no adjustment is made for water in the tree.</p>
                <blockquote cite='https://www.britannica.com/science/wood-plant-tissue/Hygroscopicity'>
                    The moisture content of the wood of living trees varies from about 30 to 300 percent depending on species, position of the wood in the tree, and season of the year.
                </blockquote>
                <cite><Links.EL link={{source:'https://www.britannica.com/science/wood-plant-tissue/Hygroscopicity'}}>Hygroscopicity | Encyclopedia Britannica</Links.EL> </cite>
                <p>The <Links.EL link={{source:'https://www.wagnermeters.com/specific-gravity/s/'}}>wood density for <em>Acer pseudoplatanus</em></Links.EL> - sycamore - with 12% moisture content is 0.57, close to 0.5 with no water.</p>
                <p>The <Links.EL link={{source:'http://www.fao.org/forestry/17111/en/'}}>carbon content of vegetation</Links.EL> including trees is surprisingly constant, at around 47.5%.</p>
                <Accordion header='Carbon in a sycamore tree'>
                <aside>
                    <h4>Carbon & <Formula>CO2</Formula> in a 2 tonne sycamore tree</h4>
                    <dl>
                        <dt><strong>Total weight</strong></dt><dd>2000 kg</dd>                
                        <dt><strong>Dry weight</strong></dt><dd>2000 kg &#215; 0.5 = 1000 kg</dd>
                        <dt><strong>Weight of carbon</strong></dt><dd>1000 kg &#215; 47.5% = 475 kg</dd>
                        <dt><strong>Weight of <Formula>CO2</Formula></strong></dt><dd>475 kg &#215; 3<span class={styles.fraction}>&#8532;</span> = 1741<span class={styles.fraction}>&#8532;</span> kg</dd>
                    </dl>
                    <div>1 tonne is equal to 1000 kg.</div>
                </aside> 
                </Accordion>   
                <p>A 2 tonne sycamore tree has absorbed the carbon component of roughly 1.75 tonnes of carbon dioxide.</p>
                <p>Although values for carbon emissions are sometimes given in tonnes of <em>carbon</em>, they are more often given in tonnes of carbon <em>dioxide</em>; if a given figure looks suspiciously low, check the units being used.</p>

                <p>Converting from tonnes of carbon to tonnes of <Formula>CO2</Formula> is straightforward.</p>
                <p>Multiply the carbon weight by 3<span class={styles.fraction}>&#8532;</span> or 3.67.</p>
                <Accordion header='Converting carbon to carbon dioxide'>
                <aside>                
                    <h4>Converting C to <Formula>CO2</Formula></h4>
                    <dl>
                        <dt><strong>The atomic masses of carbon and oxygen</strong></dt>
                        <dd>Carbon 12 - Oxygen 16</dd>
                        <dt><strong>The atomic mass of <Formula>CO2</Formula></strong></dt>
                        <dd>(1&#215;12) + (2&#215;16) = 44</dd>
                        <dt><strong>The ratio of <Formula>CO2</Formula> to C</strong></dt>
                        <dd>44 &#247; 12 = 3<span class={styles.fraction}>&#8532;</span></dd>
                        <dt><strong>Converting C to <Formula>CO2</Formula></strong></dt>
                        <dd>Example: 475 kg C to <Formula>CO2</Formula>: 475 &#215; 3<span class={styles.fraction}>&#8532;</span> = 1741<span class={styles.fraction}>&#8532;</span> kg</dd>
                    </dl>
                    <div>For the atomic mass of carbon and oxygen see <Links.EL link={{source:'https://chemistrygod.com/periodic-table'}}>The Periodic Table</Links.EL>.</div>
                </aside>
                </Accordion>
                <p>The standard unit of measurement is the metric <em>tonne</em>. A US ton is slightly lighter, an imperial (British) ton slightly heavier. Some articles confuse or conflate these units.</p>
                <h3>How much carbon dioxide can a tree sequester in a year?</h3>
                <p>Trees sequester carbon more rapidly in the tropics, and species grow at different rates; softwoods are particularly good at putting on weight rapidly in the first ten to twenty years, old trees add weight in their branches.</p>
                <p>
                    <div>Because of natural variability there is no typical value for the annual rate of carbon dioxide sequestration. A representative range extends from <Links.EL link={{source:'https://www.eea.europa.eu/articles/forests-health-and-climate-change/key-facts/'}}>22</Links.EL>, through <Links.EL link={{source:'https://greenearthappeal.org/co2-verification/'}}>25</Links.EL> and <Links.EL link={{source:'https://ecotree.green/en/how-much-co2-does-a-tree-absorb'}}>30</Links.EL> to <Links.EL link={{source:'https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references#seedlings'}}>60</Links.EL> kg.</div>
                </p>
                <p>A conservative estimate is 20 kg per tree per year.</p>
                <Accordion header='Trees to absorb all GHG emissions'>
                <aside>
                    <h4>Trees to absorb all GHG emissions</h4>
                    <div>Natural sinks (oceans and land) take up <Links.EL link={{source:'https://www.globalcarbonproject.org/carbonbudget/20/highlights.htm'}}> ~50% of <Formula>CO2</Formula> emitted</Links.EL>.</div>
                    <dl>
                        <dt><strong>Total emissions</strong></dt><dd>50 Gt</dd>
                        <dt><strong>Total net emissions</strong></dt><dd>25 Gt</dd>
                        <dt><strong>Carbon stored per tree per year</strong></dt><dd>20 kg</dd>
                        <dt><strong>Number of trees required</strong></dt><dd>25 Gigatonnes &#247; .02 tonnes = 1.25 trillion trees</dd>
                    </dl>
                </aside>
                </Accordion>
                <p>A rough estimate of the number of trees needed to compensate for all net greenhouse gas emissions is 1.25 trillion.</p>
                <p>This estimate leaves out one critical dimension - the time it takes a tree to grow. Whether a tree reaches maturity in 10, 20 or even 30 years depends on its species and habitat.</p>
                <p>The estimate can be checked by working backwards from the amount of carbon dioxide that is currently absorbed by the world's forests.</p>
                <p>Forests absorb roughly <Links.EL link={{source:'https://www.nature.com/articles/s41558-020-00976-6'}}>7.6 billion tonnes of <Formula>CO2</Formula></Links.EL> annually - just over 15% of total greenhouse gas emissions.</p>                
                <p>If 3 trillion trees sequester 7.6 billion tonnes, 1 trillion trees sequester roughly 2.5 billion tonnes.</p>
                <p>That is just <em>one tenth</em> of annual <em>net</em> emissions. Which suggests trees absorb on average 2.5 kg annually, not 25 kg.</p>            
                <h4>Cumulative emissions absorbed by the end of the century</h4>
                <p>The projected cumulative value for sequestered carbon by the end of the century (almost 80 years) is 80 &#215; 2.5 billion tonnes = 200 billion tonnes.</p>
                <p>Thomas Crowther claimed in September 2019 that the Earth could sustain an additional <Links.EL link={{source:'https://www.nature.com/articles/d41586-019-02846-4'}}>1.2 trillion trees</Links.EL> able to absorb 200 gigatonnes of carbon by the end of the century.</p>                
                <p>These final figures tally - a gigatonne is the same as one billion tonnes - but the calculations are starting to feel a little too rough, conjectures rather than assertions.</p>
                <p>This vagueness is amplified by uncertainty as to the data - the <Links.EL link={{source:'https://science.sciencemag.org/content/365/6448/76'}}>research</Links.EL> on which Crowther based his conclusion has been the subject of healthy scientific debate. The paper from Bastin et al. has been criticised by <Links.EL link={{source:'https://science.sciencemag.org/content/366/6463/eaaz0388'}}>Lewis et al.</Links.EL>, <Links.EL link={{source:'https://science.sciencemag.org/content/366/6463/eaay8060?ijkey=4941132eebc36136e6c4b1ccea847d2fdddb01ad&keytype2=tf_ipsecsha'}}>Friedlingstein et al.</Links.EL>, and <Links.EL link={{source:'https://science.sciencemag.org/content/366/6463/eaay7976?ijkey=866eac34ce3783e0f1f6d537b68f296534f4faf3&keytype2=tf_ipsecsha'}}>Veldman et al.</Links.EL> To which the authors have <Links.EL link={{source:'https://science.sciencemag.org/content/366/6463/eaay8108'}}>responded</Links.EL>.</p>                
                <p>This debate between scientists is illustrative; there is consensus on climate change, but the data in many areas are wanting or at best informed guesses.</p>
                <p>The Grantham Institute's estimate of carbon sequestration is more sober - <Links.EL link={{source:'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'}}>40-60 gigatons</Links.EL> by the time newly planted forests reach maturity.</p>
                <blockquote cite='https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'>
                    <div>
                    Reforestation and afforestation could reduce the concentration of carbon dioxide in the atmosphere by approximately 15 to 30 parts per million (ppm). To place this into context, the concentration has risen at an unprecedented rate from about 280ppm before the Industrial Revolution began, to the present-day concentration of 400ppm and above.
                    </div>
                    <div>
                    Therefore, even based on optimistic estimates, tree-planting alone will be insufficient to bring carbon dioxide concentration to net-zero, unless immediate and sustained action is also taken to reduce the current rate of emission
                    </div>
                </blockquote>
                <h3>Negative emissions per person</h3>
                <p>One of the first activities to offer the option to offset emissions was flying. Many offset schemes now focus on a wide variety of projects designed to reduce carbon emissions but planting trees is still a popular metric.</p>
                <Accordion header='Tree carbon sequestration per person'>
                <aside>
                    <h4>Trees per person</h4>
                    <p>Total emissions for all greenhouse gases is around <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>50 billion tonnes of <Formula>CO2</Formula>e</Links.EL> every year. Given a population of 8 billion, that equates to 6.25 tonnes per person per year.</p>
                    <dl>
                        <dt><strong>Annual carbon sequestration per tree</strong></dt>
                        <dd>20 kg</dd>
                        <dt><strong>Average per capita emissions</strong></dt>
                        <dd>6.5 tonnes <Formula>CO2</Formula>e</dd>
                        <dt><strong>Trees per person</strong></dt>
                        <dd>6.5 tonnes &#247; 20 kg = 325 trees</dd>
                    </dl>
                </aside>
                </Accordion>
                <p>325 mature trees would be needed for each person in order to absorb the net carbon dioxide added to the atmosphere.</p>
                <Accordion header='Benefits of trees'>
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
                </Accordion>
                <h3>Forests</h3>
                <p>Trees are a popular but vague measure for calculating potential carbon sequestration. Their rate of absorbing carbon dioxide varies considerably according to species and habitat. Individual lifespan and survival rates are unpredictable.</p>            
                <p>Although trees are used as proxies for forests they represent a small fraction of the total biomass found there, and are only one of many sources and sinks of carbon.</p>                
                <p>Trees also represent a relatively small fraction of the carbon sequestered in many woodlands and forests. The amount of carbon stored in soil is striking. In the case of a temperate forest it is 72% but all forests contain high amounts of carbon in their soils, and the older the forest, the more carbon is locked up underground.</p>            
                <Accordion header='Carbon storage in temperate forests'>
                <aside>
                    <h4>Where carbon is stored in a typical temperate forest</h4>
                    <dl>
                        <dt><strong>Leaves, branches, trunk</strong></dt><dd>17%</dd>
                        <dt><strong>Surface litter</strong></dt><dd>5%</dd>
                        <dt><strong>Dead wood</strong></dt><dd>0-1%</dd>
                        <dt><strong>Roots</strong></dt><dd>6%</dd>
                        <dt><strong>Soil</strong></dt><dd>72%</dd>
                    </dl>
                    <div>
                        <Links.EL link={{source:'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'}}>What role can forests play in tackling climate change?</Links.EL> (PDF) | Waring et al.
                    </div>
                </aside>
                </Accordion>
                <h3>Are forests sinks or sources of <Formula>CO2</Formula>?</h3>                
                <p>Forests are both a source of carbon and a carbon sink. Carbon is primarily lost when forests are degraded or cleared, but all plants, including trees, also release <Formula>CO2</Formula> during cellular respiration.</p>
                <Accordion header='Cellular respiration'>
                <aside>
                    <h4>Cellular respiration</h4>
                    <div>Cellular respiration is in a way the reverse of photosynthesis. Respiration is associated with humans and other animals but plants also respire.</div>
                    <p><Formula>C6H12O6</Formula> + 6<Formula>O2</Formula> → 6<Formula>CO2</Formula> + 6<Formula>H2O</Formula> + heat</p>
                </aside>
                </Accordion>
                <p>A paper in Nature on <Links.EL link={{source:'https://www.nature.com/articles/s41558-020-00976-6'}}>forest carbon fluxes</Links.EL> found that between 2001 and 2019 global forests emitted 8.1 billion tonnes of <Formula>CO2</Formula> into the atmosphere, and absorbed 16 billion tonnes. Their data combined ground measurements with satellite observations.</p>
                <p>
                    <div>In a supporting article for the <Links.EL link={{source:'https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year'}}>World Resources Institute</Links.EL>, the authors state that of the 3 major rainforests only the Congo River Basin has enough forest standing to remain a carbon sink. The forests of Southeast Asia are collectively a source of carbon, and the Amazon Basin is teetering on the edge of becoming a source.</div>
                </p>
                <p>Tropical rainforests are far and away the most important ecosystems for mitigating climate change. New forest planted since the turn of the century represent less than 5% of the current global forest carbon sink.</p>
                <blockquote cite='https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year'>
                Overall, the data show that keeping existing forests standing remains our best hope for maintaining the vast amount of carbon forests store and continuing the carbon sequestration that, if halted, will worsen the effects of climate change.
                </blockquote>
                <cite><Links.EL link={{source:'https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year'}}>Forests absorb twice as much carbon as they emit</Links.EL> </cite>
                <p>The authors conclude that good stewardship of forests is critical for maintaining forest sinks. They also highlight the importance of protected areas and local management by indigenous people living in the forest.</p>
                <p>This last point is echoed in a study of forest areas within Amazon indigenous territories and  protected areas:</p>
                <blockquote cite='https://www.pnas.org/content/117/6/3015'>
                Our results reinforce the growing body of research showing that indigenous land tenure and management are key to safeguarding Amazonian forests against increasing demands for the region’s land, energy, and mineral resources. 
                </blockquote>
                <cite><Links.EL link={{source:'https://www.pnas.org/content/117/6/3015'}}>The role of forest conversion … | Walker et al.</Links.EL> </cite>
                <h3><Formula>CO2</Formula> fertilisation</h3>
                <p>Providing there are no factors limiting growth, higher levels of carbon dioxide in the atmosphere lead to an increase in photosynthesis and plant growth.</p>                
                <p>There is strong evidence that plants, and especially forests, have benefited from increased levels of <Formula>CO2</Formula>. This has helped limit the rate of increase of <Formula>CO2</Formula> in the atmosphere, a phenomenon known as <Formula>CO2</Formula> fertilisation.</p>
                <p>In 2016 NASA reported significant greening in the previous 35 years, 70% of which was attributed to <Formula>CO2</Formula> fertilisation.</p>
                <p>These findings fit with evidence that <Links.EL link={{source:'https://sos.noaa.gov/datasets/ocean-atmosphere-co2-exchange/'}}>25% of carbon dioxide emissions are absorbed by land plants and trees</Links.EL> of which forests absorb roughly <Links.EL link={{source:'https://www.nature.com/articles/s41558-020-00976-6'}}>7.6 billion tonnes of <Formula>CO2</Formula></Links.EL> or 15% of all emissions annually.</p>
                <p>
                    <div>The <Formula>CO2</Formula> fertilisation has been extensively studied in closed environments. Gabriel Popkin presents a review of the latest field studies and computer models in his article at Yale Environment, <Links.EL link={{source:'https://e360.yale.edu/features/will-climate-change-upend-projections-of-future-forest-growth'}}>Will Climate Change Upend Projections of Future Forest Growth?</Links.EL> He summarises this work:</div>
                </p>
                <blockquote cite='https://e360.yale.edu/features/will-climate-change-upend-projections-of-future-forest-growth'>
                Their results seem to be converging on bad news: Higher CO2 concentrations do not necessarily accelerate forest growth, warming soils seem to emit substantially more CO2 than previously believed, and climate-driven scourges threaten to kill trees faster than they can grow, turning forests globally into sources, not sinks, of carbon.
                </blockquote>
                <h3>Limiting factors</h3>       
                <p>Plant growth is dependent on many factors. Some are caused by climate change - rising temperatures and water shortages. Others are a consequence of human activity such as elevated levels of nitrogen resulting from the addition of fertilisers.</p>         
                <Accordion header='Limiting factors'>
                <aside>
                    <h4>Limiting factors</h4>
                    <dl>
                        <dt><strong>Nitrogen</strong></dt>
                        <dd>
                            <blockquote cite='https://www.nps.gov/subjects/air/nature-nitrogensulfur.htm'>
                            Nitrogen is an essential plant nutrient but excess nitrogen from atmospheric deposition can stress ecosystems. Excess nitrogen acts as a fertilizer, favoring some plants and leaving others at a competitive disadvantage.
                            </blockquote>
                            <cite><Links.EL link={{source:'https://www.nps.gov/subjects/air/nature-nitrogensulfur.htm'}}>National Park Service</Links.EL> </cite>
                            <p>Burning fossil fuels and agricultural practices have increased the levels of atmospheric nitrogen. Nitrogen deposited in forests in the form of reactive nitrate can act as a fertiliser, increasing carbon dioxide sequestration, but excess nitrogen has a detrimental effect on soil fertility.</p>
                        </dd>
                        <dt><strong>Temperature</strong></dt>
                        <dd>Higher temperatures lead to an increase in the rate of photosynthesis, up to a point. Warmer temperatures also coincide with greater plant biodiversity. Both effects are contingent on available water.</dd>
                        <dt><strong>Water</strong></dt>
                        <dd>Water is critical for plant growth. Changes in rates and timing of precipitation, soil water retention and temperature all affect plant physiology.</dd>
                        <dt><strong>Soil & other minerals</strong></dt>
                        <dd>In addition to nitrogen, plants are dependent on a number of minerals including potassium, calcium, sulfur, magnesium, copper, zinc and iron.</dd>
                    </dl>
                </aside>
                </Accordion>
                <p>Climate change is also affecting plants in more general ways. Phenology - the timing of events in the lifecycle of a plant - is affected by seasonal variation, temperature, rainfall, and interaction with other species - such as pollinators and seed spreading animals - which are themselves affected by these variations. This can lead to the life cycles of mutually dependent species getting out of sync.</p>
                <p>Planting the right trees in the right place is fundamental to the success of many restoration, reforestation and afforestation projects. In complex managed and unmanaged forests native trees are better adapted to available ecological niches and therefore more resilient.</p>
                <p>Planting trees where established peatland or grassland is in place leads to an increase in emissions, in either the short, or long term.</p>
                <h4>Albedo effect</h4>
                <p>The albedo effect is an unintended consequence of planting trees that grow slowly because of short growing seasons on land that previously radiated sunlight from snow, ice or less dark soils and vegetation.</p>
                <Accordion header='Definition'>
                <aside>
                    <h4>The albedo effect</h4>
                    <div>
                    <blockquote cite='https://www.carbonbrief.org/explainer-10-ways-negative-emissions-could-slow-climate-change'>
                        A measure of how much of the sun's energy is reflected by a surface. It is derived from the Latin word albus, meaning white. Albedo is measured as a percentage or fraction of the sun’s energy that is reflected away. Snow and ice tend to have a higher albedo than, for example, soil, forests and open water.
                    </blockquote>
                    <cite><Links.EL link={{source:'https://www.carbonbrief.org/explainer-10-ways-negative-emissions-could-slow-climate-change'}}>Albedo | Carbon Brief</Links.EL> </cite>
                    </div>
                </aside>
                </Accordion>
                <p>Whilst the tropics has remained a carbon sink, deforestation has lead to increased emissions. There has been forest regrowth in the temperate zones, and parts of the boreal zone.</p>
                <blockquote cite="https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year">
                    Although important to give these young forests the chance to grow into old ones, protecting primary and mature secondary forests today is most important for curbing climate change.
                </blockquote>
                <cite><Links.EL link={{source:'https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year'}}>Forests Absorb Twice As Much Carbon As They Emit Each Year</Links.EL></cite>
                <h3>Land use</h3>
                <p>71% of the Earth's surface is Ocean. The remaining 29% occupied by land covers 104 million square kilometres - 10,400 million hectares.</p>
                <p>10% of the land is covered in glaciers, and a further 19% is barren. The remainder is deemed habitable.</p>
                <p>Competition for habitable land is intense; its management critical for food, biodiversity, and natural services.</p>
                <Accordion header='Habitable land use'>
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
                </Accordion>            
                <h3>Conclusion</h3>                
                <p>In the decade since 2010 net loss in forests globally was 4.7 million hectares per year. Much of that loss was in old forests, especially in the tropics. Newly planted trees are not a like for like replacement.</p>    
                <p>Forests sequester 15% of excess carbon dioxide from the atmosphere. Protected and extended they could sequester emissions that are not easily prevented.</p>
                <p>Deforestation rates fall as countries become wealthier. At a certain point forest area begins to increase, as has occurred in Europe and the US. If richer countries stop contributing to deforestation in poorer countries, and actively support local people to maintain forests, global deforestation can be halted.</p>
                <p>Forests have been cleared for timber and especially to make way for crops. 37% of land is occupied by forests. 50% by agriculture. We have become, however, more efficient in our use of land.</p>
                <blockquote cite='https://ourworldindata.org/deforestation'>
                Since 1961, the amount of land we use for agriculture increased by only 7%. Meanwhile, the global population increased by 147% – from 3.1 to 7.6 billion. This means that agricultural land per person more than halved, from 1.45 to 0.63 hectares. 
                </blockquote>
                <cite><Links.EL link={{source:'https://ourworldindata.org/deforestation'}}>Deforestation and Forest Loss | Our World in Data</Links.EL> </cite>
                <p>Many solutions will be required to curb and offset our carbon dioxide emissions. Maintaining and restoring the world's existing forests preserves natural sinks upon which we are heavily dependent for reducing carbon dioxide in the atmosphere. They also provide a range of additional services far beyond one dimensional technological fixes. Tropical forests alone <Links.EL link={{source:'https://www.pnas.org/content/114/23/5775'}}>support two thirds of species</Links.EL> on less than 10% of the Earth's land surface.</p>
                <p>Technology is being used to map and record natural resources including forests. A record of what exists and the ability to monitor the effects of climate change and land use change is key for assessing the value of the natural world, and preserving it.</p>
                <Top></Top>
            </section>
            <section>   
                <h2>References</h2>
                <Links.ExternalLinksList links={references} />
            </section>
            <Links.RelatedLinks links={[{value:'climate-crisis/carbon-element-of-life',text:'Carbon - element of life'}, {value:'climate-crisis/facts',text:'Facts'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default NCSPartOne;