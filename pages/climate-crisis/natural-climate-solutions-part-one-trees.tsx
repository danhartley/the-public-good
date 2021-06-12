import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Formula from 'components/tools/formula';
import styles from 'pages/pages.module.scss';
import Accordion from 'components/accordion/accordion';

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
];

const NCSPartOne = () => {
    return (
        <Layout header="Natural climate solutions - Trees" rt="8 to 9" title="natural-climate-solutions-part-one-trees" description={'Trees'}>
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
                {/* <p>The German Government launched the <Links.EL link={{source:'https://www.bonnchallenge.org/about'}}>Bonn Challenge</Links.EL> to restore 350 million hectares of degraded or deforested landscapes by 2030.</p> */}
                <p>There are several high profile global campaigns including <Links.EL link={{source:'https://www.1t.org/'}}>1 trillion trees</Links.EL> backed by the World Economic Forum, and <Links.EL link={{source:'https://trilliontrees.org/home'}}>Trillion Trees</Links.EL>.</p>       
                <p>These projects are framed in such a way as to attract public attention by describing problems and solutions in terms of something familiar.</p>
                <p>But are trees a good unit of measurement?</p>
                <p>Scientists generally talk about forests rather than trees, and measure them in hectares. It is when bringing their findings to public attention that they switch to talking about trees. Campaigners, politicians, and protesters similarly prefer trees over hectares.</p>
                {/* <p>In <Links.IL link={{source:'climate-crisis/natural-climate-solutions-part-two-forests'}}>Part II</Links.IL> I look at the role of forests, and how they compare to other NCS actions. But this review of natural currency solutions begins with the most popular currency, trees.</p> */}
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
                <h3>Conclusion</h3>
                <p>Trees are a popular but vague measure for calculating potential carbon sequestration. Their rate of absorbing carbon dioxide varies considerably according to species and habitat. Individual lifespan and survival rates are unpredictable.</p>            
                <p>Although trees are used as proxies for forests they represent a small fraction of the total biomass found there, and are only one of many sources and sinks of carbon.</p>                
                {/* <p>In <Links.IL link={{source:'climate-crisis/natural-climate-solutions-part-two-forests'}}>part II</Links.IL> I switch my focus from trees to forests.</p> */}
            </section>
            <section>   
                <h2>References</h2>
                <Links.ExternalLinksList links={references} />
            </section>
            <Links.RelatedLinks links={[{value:'climate-crisis/natural-climate-solutions-part-two-forests',text:'Natural climate solutions - Forests'},{value:'climate-crisis/carbon-element-of-life',text:'Carbon - element of life'}, {value:'climate-crisis/facts',text:'Facts'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default NCSPartOne;