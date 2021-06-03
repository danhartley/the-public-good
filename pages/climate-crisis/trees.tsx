import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Formula from 'components/tools/formula';
import styles from 'pages/pages.module.scss';

const Trees = () => {

    const references = [
        {
            name: "The Conversation | There aren’t enough trees in the world | Bonnie Waring",
            source: "https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181"
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

    return (
        <Layout header="Trees & carbon" title="trees-and-carbon" description={'Trees'}>

        <section>

            <h2>How effect are trees in removing carbon dioxide from the atmoshpere?</h2>

            <h3>Converting carbon to carbon dioxide</h3>

            <p>The majority of articles on climate change refer to carbon in the molecular form, carbon dioxide, but sometimes the value is expressed in terms of molecular carbon, particularly in relation to cabon sinks.</p>

            <p>How do we calculate the mass of carbon dioxide given a mass of carbon?</p>

            <aside>                
                <h4>Workings</h4>
                <dl>
                    <dt><strong>The atomic mass of carbon and oxygen</strong></dt>
                    <dd>Carbon 12 &nbsp;&nbsp;Oxygen 16</dd>
                    <dt><strong>From which we calculate the atomic mass of <Formula>CO2</Formula></strong></dt>
                    <dd>(1&#215;12) + (2&#215;16) = 44</dd>
                    <dt><strong>And the ratio of <Formula>CO2</Formula> to C</strong></dt>
                    <dd>44 &#247; 12 = 3<span class={styles.fraction}>&#8532;</span></dd>
                    <dt><strong>Converting C to <Formula>CO2</Formula></strong></dt>
                    <dd>Example 2 tonnes C to <Formula>CO2</Formula>: 2 &#215; 3<span class={styles.fraction}>&#8532;</span> = 7<span class={styles.fraction}>&#8531;</span> t</dd>
                </dl>
                <div>For the atomic mass of carbon and oxygen see <Links.EL link={{source:'https://chemistrygod.com/periodic-table'}}>The Periodic Table</Links.EL>.</div>
            </aside>

            <p>Dr Waring gave her answer in tonnes of carbon, myclimate in tonnes of carbon dioxide.</p>

            {/* <aside>To convert a mass in carbon C to <Formula>CO2</Formula> multiple by 3<span class={styles.fraction}>&#8532;</span></aside> */}

            <p>Now we know how to convert carbon to carbon dioxide, we need to work out how much carbon a tree contains. To do this we first need to know its weight.</p>

            <h3>How do we weigh a tree?</h3>

            <p>The process by which characteristics of a tree, such as its height and weight, are calculated from relatively easy to measure dimensions is called <Links.EL link={{source:'https://en.wikipedia.org/wiki/Tree_allometry'}}>tree allometry</Links.EL>.</p>

            <p>The simplest way of calculating the weight requires only the diameter at breast height (known as <Links.EL link={{source:'https://en.wikipedia.org/wiki/Diameter_at_breast_height'}}>DBH</Links.EL> and taken as 1.3m) and the density of the tree's wood. This will give us about 90% accuracy. If we also know the height, we can up this to 95% to 98%. For this we need:
                <ul>
                    <li>Wood density - this varies by species.</li>
                    <li>Diameter of the tree at 1.3 metres.</li>
                    <li>Height of the tree in metres.</li>
                </ul>
            </p>

            <p>A team of scientists in Edinburgh used these values to <Links.EL link={{source:"https://ecometrica.com/assets/one_tonne_carbon_tree_discussion_paper_3.pdf"}}>determine the weight of a sycamore</Links.EL> close to their office.</p>

            <p>The wood density of sycamore is approximately 620 kg/m3 which means that the mass of dry matter in the tree is 62% - water makes up the remaining 38%.</p>

            <p>The weight of a tree is spread throughout its trunk, branches, leaves, and roots. If we know what each of these weighs as a percentage of the whole, we need only one value to calculate the rest. In a living tree it is most practical to measure the trunk.</p>

            <p>Below are two sets of approximations for the distribution of weight in a mature tree. The values on the left are for the Edinburgh sycamore - <em><Links.EL link={{source:'https://en.wikipedia.org/wiki/Casuarina_equisetifolia'}}>Acer pseudoplatanus</Links.EL></em> - those on the right for a species of pine  <em><Links.EL link={{source:'https://en.wikipedia.org/wiki/Casuarina_equisetifolia'}}>Casuarina equisetifolia</Links.EL></em> - growing in China.</p>

            <dl>
                <dt><strong>Leaves</strong></dt><dd>1% &nbsp;&nbsp; 6%</dd>
                <dt><strong>Branches</strong></dt><dd>11% &nbsp;&nbsp; 10%</dd>
                <dt><strong>Stem/trunk</strong></dt><dd>62% &nbsp;&nbsp; 63%</dd>
                <dt><strong>Roots</strong></dt><dd>26% &nbsp;&nbsp; 21%</dd>
                <dt><em>Acer pseudoplatanus</em></dt><dd><Links.EL link={{ source:'https://ecometrica.com/assets/one_tonne_carbon_tree_discussion_paper_3.pdf'}}>A one tonne carbon tree</Links.EL> (PDF)</dd>
                <dt><em>Casuarina equisetifolia</em></dt><dd><Links.EL link={{ source:'https://www.researchgate.net/figure/Proportion-of-the-tree-biomass-from-the-trunk-the-branch-the-leaf-and-the-root-in_fig12_299376027'}}>Proportion of the tree biomass from the trunk the branch the leaf and the root</Links.EL></dd>
            </dl>

            <p>The distribution of weight varies between species, and over time; younger trees usually have a greater proportion of leaf mass, and a lower trunk mass.</p>

            <p>This also explains how and why trees put on weight fast when they are young - it is primarily leaves that are responsible for photosynthesis.</p>

            <h3>How much carbon does a tree contain?</h3>

            <p>Let's calculate the amount of carbon in a 2 tonne oak tree.</p>

            <p>The <Links.EL link={{source:'http://www.fao.org/3/w4095e/w4095e0c.htm'}}>wood density for oak species</Links.EL> is .7 (70% dry matter, 30% water).</p>
            
            <p>The <Links.EL link={{source:'http://www.fao.org/forestry/17111/en/'}}>carbon content of vegetation</Links.EL> including trees is surprisingly constant, at around 47.5%.</p>

            <aside>
                <h4>Workings</h4>
                <dl>
                    <dt><strong>Total weight</strong></dt><dd>2000 kg</dd>                
                    <dt><strong>Dry weight</strong></dt><dd>2000 kg &#215; .7 = 1400 kg</dd>
                    <dt><strong>Weight of carbon</strong></dt><dd>1400 kg &#215; 47.5% = 665 kg</dd>
                    <dt><strong>Weight of <Formula>CO2</Formula></strong></dt><dd>665 kg &#215; 3<span class={styles.fraction}>&#8532;</span> = 2438<span class={styles.fraction}>&#8531;</span> kg</dd>
                </dl>
                <div>1 tonne is equal to 1000 kg.</div>
            </aside>

            <p>The amount of carbon dioxide a tree can store is directly proportional to the density of its wood. This value ranges from 14% (<Links.EL link={{source:'https://en.wikipedia.org/wiki/Ochroma'}}>balsa wood</Links.EL>) to 140% (<Links.EL link={{source:'Krugiodendron ferreum'}}>black ironwood</Links.EL>).</p>

            <p>Trees with lower densities such as the pines are often called softwoods. Broad-leaved trees, like oak, beech and maple, are also known as hardwoods, and have high wood densities.</p>

            {/* <aside>Approximately &#189; the mass of the dry matter in a tree is carbon</aside> */}

            <h3>The difference between <Formula>CO2</Formula> and <Formula>CO2</Formula>e</h3>

            <p>Photosynthesis is the process by which energy from the sun converts carbon dioxide and water into sugars that are used to build organic matter in plants.</p>

            <p>But carbon dioxide is not the only greenhouse gas affecting our climate.</p>

            <p>We emit around 36 billion tonnes of <Formula>CO2</Formula> each year. If we include other gases including methane, nitrous oxide, and ozone the figure is <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>50 billion tonnes of <Formula>CO2</Formula>e</Links.EL> every year.</p>

            <p>Carbon dioxide <strong>equivalents</strong> (<Formula>CO2</Formula><strong>e</strong>) are used to account for all greenhouse gases by converting them to <Formula>CO2</Formula>, and are increasingly used when reporting on emissions, and climate change.</p>

            <p>
                <div>The environmental monitoring group Ecometria explains how to <Links.EL link={{source:'https://ecometrica.com/assets/GHGs-CO2-CO2e-and-Carbon-What-Do-These-Mean-v2.1.pdf'}}>convert greenhouse gas emissions to <Formula>CO2</Formula> equivalents</Links.EL> and when to use them.</div>
            </p>

            <p><Formula>CO2</Formula> and <Formula>CO2</Formula>e values are given in metric tonnes but are sometimes wrongly given in US tons (which are slightly lighter) or British Imperial tons (slightly heavier).</p>

            <p>It pays to check the units used; even the best sites sometimes fail to distinguish between carbon dioxide emissions, and emissions that account for all greenhouse gases. Even third party figures for country emissions often exclude international shipping and aviation which add up to an additional 10% for some countries.</p>

            {/* <aside><Formula>CO2</Formula> only values are ~40% lower than <Formula>CO2</Formula>e values (all ghgs)</aside> */}

            {/* <h3>Global per capita emissions</h3>

            <p>What is the average annual emissions, or carbon footprint, of a person?</p>

            <dl>
                <dt><strong>World population</strong></dt><dd><Links.EL link={{source:'https://www.worldometers.info/world-population/'}}>~ 8 billion</Links.EL></dd>
                <dt><strong>Per capita emissions <Formula>CO2</Formula></strong></dt>
                <dd>36 &#247; 8 = 4.375 tonnes of <Formula>CO2</Formula> emitted per person per annum</dd>
                <dt><strong>Per capita emissions for all greenhouse gases (ghgs)</strong></dt>
                <dd>50 &#247; 8 = 6.25 tonnes of <Formula>CO2</Formula><strong>e</strong> emitted per person per annum</dd>
            </dl>

            <aside>Per capita we emit ~6<span class={styles.fraction}>&#188;</span> tonnes of <Formula>CO2</Formula>e each year</aside> */}

            <h3>How many trees would we need to sequester all of our emissions?</h3>

            <p>To give us a sense of perspective, how many trees are there already on the planet?</p>

            <p>
                <div>
                According to a 2015 report from the Crowther Lab there are approximately <Links.EL link={{source:'https://pubmed.ncbi.nlm.nih.gov/26331545/'}}>3.04 trillion</Links.EL> trees. There are no data to compare directly to this number. The majority of studies typically use a unit of area such as the hectare (10,000 sq metres), or acre (~2/5s of a hectare).
                </div>
            </p>

            {/* <aside>There are approximately 3 trillion trees</aside> */}

            <p>How many more could we plant?</p>

            <p>During the 2019 UK general election, the three main parties vied to outdo one another as to <Links.EL link={{source:'https://friendsoftheearth.uk/system-change/general-election-party-pledges-tree-planting'}}>the number of trees they committed to plant</Links.EL>. The Conservatives pledged 30 million a year, Labour and the Liberal Democrats 60 million. The Greens went further - they pledged to plant 70 million trees a year.</p>

            <p>Canada has pledged to plant <Links.EL link={{source:'https://www.nrcan.gc.ca/science-and-data/funding-partnerships/funding-opportunities/forest-sector-funding-programs/growing-canadas-forests-program/23308'}}>2 billion trees over the next 10 years</Links.EL>.</p>

            <p>The World Economic Forum launched a programme to plant <Links.EL link={{source:'https://www.1t.org/'}}>1 trillion trees.</Links.EL> </p>

            <p>A Yale analysis, <Links.EL link={{source:'https://e360.yale.edu/features/are-huge-tree-planting-projects-more-hype-than-solution'}}>Are Huge Tree Planting Projects More Hype than Solution?</Links.EL> looks at national projects in countries including Ethiopia, Pakistan, China, as well as several more international schemes.</p>

            <p>How many trees do we actually need? To answer that we must know how much carbon a tree can sequester.</p>

            {/* <h3>What is the average weight of a tree?</h3>

            <p>To answer that question, we need to know how big trees are on average, or more importantly, how heavy they are.</p>

            <p>Trees vary greatly in size and weight by species, and throughout their lives. We cannot easily say what the average tree weighs, but we can try and calculate the average weight of a tree by dividing the total weight, or biomass, of trees by the number of trees.</p>

            <p>To estimate the weight of all trees we combine a couple of figures from a 2018 census published by The State University of New Jersey.</p>

            <blockquote cite='https://www.pnas.org/content/115/25/6506'>                
            <div>The sum of the biomass across all taxa on Earth is ≈550 Gt C, of which ≈80% (≈450 Gt C) are plants, dominated by land plants (embryophytes).</div>
            </blockquote>
            <cite><Links.EL link={{source:'https://www.pnas.org/content/115/25/6506'}}>The biomass distribution on Earth</Links.EL></cite>

            <blockquote cite='https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'>
            <div>Forest ecosystems account for around 45% of all the carbon stored on land.</div>
            </blockquote>
            <cite><Links.EL link={{ source:'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'}}>What role can forests play in tackling climate change?</Links.EL> (PDF)</cite>

            <p>A Gigatonne, or Gt, is equal to one billion tonnes.</p>

            <dl>                
                <dt><strong>Number of trees</strong></dt><dd>~3 trillion</dd>
                <dt><strong>Weight of carbon in all trees</strong></dt>
                <dd>450 &#215; 45% = 202.5 Gigatonnes of carbon</dd>
                <dt><strong>Weight of carbon per tree</strong></dt><dd>202.5 Gt &#247; 3 trillion = 0.0675 tonnes</dd>
            </dl>

            <p>0.0675 seems a very small amount. 67.6 kgs.</p>

            <p>                
                <div>How do we convert this value into the living, or green, mass of a tree? We know that the carbon is about 47.5% of the dry mass of all trees. But trees vary in density. Let's assume the average density is 70%.</div>
            </p>

            <dl>
                <dt><strong>Conversion from carbon mass to living tree mass</strong></dt><dd>(100 &#247; 47.5) &#215; (100 &#247; 70) = ~3</dd>
                <dt><strong>Average weight of a tree</strong></dt><dd>.0675 &#215; 3 = 0.2025, or 200 Kgs.</dd>
            </dl>

            <p>200 kgs still seems a low value. In 2005, <Links.EL link={{source:'https://www.sciencemag.org/news/2015/09/earth-home-3-trillion-trees-half-many-when-human-civilization-arose'}}>the number of trees was estimated to be 400 billion</Links.EL> which would push up the average weight to 1.5 tonnes.</p>

            <p>What a tree looks like is easy to image, although what people imagine across the world may differ, and our idea of an average tree may be inaccurate.</p>
             */}
            <h3>How much carbon dioxide can a tree sequester in a year?</h3>

            <p>Trees sequester carbon more rapidly in the tropics, and species grow at different rates; softwoods are particularly good at putting on weight rapidly in the first ten to twenty years, old trees add weight in their branches.</p>

            <p>In a study of trees in the Auburn University campus and the Davis Arboretum the <Links.EL link={{source:'https://www.researchgate.net/figure/Average-carbon-sequestration-per-tree-kg-year-by-diameter-class-cm-for-the-Auburn_tbl2_254220260'}}>average carbon sequestration</Links.EL> ranged from 3 kg to 59 kg per year, and increased with age (the top age given was 77+).</p>

            <p>A selection of other sources, quote average sequestration rates of <Links.EL link={{suorce:'https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references#seedlings'}}>6</Links.EL>, <Links.EL link={{source:'https://www.eea.europa.eu/articles/forests-health-and-climate-change/key-facts/'}}>22</Links.EL>, <Links.EL link={{source:'https://greenearthappeal.org/co2-verification/'}}>25</Links.EL> and <Links.EL link={{source:'https://ecotree.green/en/how-much-co2-does-a-tree-absorb'}}>30 kg</Links.EL>.</p>

            <aside>
                <h4>Workings</h4>
                <div>We will assume an average of 25 kg per year.</div>
                <dl>
                    <dt><strong>Total emissions</strong></dt><dd>50 Gt</dd>
                    <dt><strong>Carbon stored per tree</strong></dt><dd>25 kg</dd>
                    <dt><strong>Number of trees required</strong></dt><dd>50 Gigatonnes &#247; .025 tonnes = 2 trillion</dd>
                </dl>
            </aside>

            <p>Can we test the veracity of this value?</p>

            <p>Forests absorb an estimated <Links.EL link={{source:'https://www.wri.org/insights/forests-absorb-twice-much-carbon-they-emit-each-year'}}>16 billion tonnes of <Formula>CO2</Formula></Links.EL> annually.</p>

            <aside>
                <h4>Workings</h4>
                <dl>
                    <dt><strong>Total annual emissions absorbed</strong></dt><dd>16 billion tonnes <Formula>CO2</Formula></dd>
                    <dt><strong>Number of trees</strong></dt><dd>~3 trillion</dd>
                    <dt><strong><Formula>CO2</Formula> absorbed per tree</strong></dt><dd>16 billion &#247; 3 trillion = 0.0053 tonnes <Formula>CO2</Formula></dd>
                </dl>
            </aside>

            <p>Average carbon dioxide absorbed per tree is 5.3 kg which is at the lower end of our predicted range. Trees planted in the tropics and well cared for could be expected to beat the average comfortably.</p>

            <p>There is one caveat, however. Although trees absorb carbon dioxide, they also release it when they die. Whilst forests sequestered 16 billion tonnes, they also released 8 billion tonnes of carbon dioxide.</p>

             <p>
                 <div>By way of comparison Thomas Crowther claimed in September 2019 that the Earth could sustain an additional <Links.EL link={{source:'https://www.nature.com/articles/d41586-019-02846-4'}}>1.2 trillion trees</Links.EL> able to absorb 200 gigatonnes of carbon.</div>
             </p>

             <p>Note the units! The figure is for carbon sequestered during the lifetime of the trees, not in one year. Let's allow 29 years, that is from the beginning of this year, 2021 until 2050 when several countries have pledged to go carbon neutral.</p>

             <aside>
                <h4>Workings</h4>
                <dl>
                    <dt><strong>Current emissions in carbon</strong></dt>
                    <dd>50 Gt &#247; 3<span class={styles.fraction}>&#8532;</span> = 13.6 Gt</dd>
                    <dt><strong>Total emissions at current rate</strong></dt>
                    <dd>13.6 Gt &#215; 29 years = 395 Gt </dd>
                    <dt><strong>Percentage of carbon absorbed by the new trees</strong></dt>
                    <dd>200 Gt &#247; 395 Gt  = ~50%</dd>
                </dl>
             </aside>

            <p>In other words 1.3 trillion trees would account for 50% of emissions over time. In our calculations above we found that we would need 2 trillion trees to account for our annual emissions.</p>

            <p>Trees are often used as a proxy for natural forms of carbon sequestration but they do not exist apart from their environment.</p>

            <p>Crowther's estimate came from figures his lab had put out in, <Links.EL link={{source:'https://science.sciencemag.org/content/365/6448/76'}}>The global tree restoration potential</Links.EL>. This article refers to trees in the context of forests, as part of a whole, and it is in that vein that we will proceed in <Links.IL link={{source:'climate-crisis/trees2'}}>Part II</Links.IL>.</p>

        </section>

        <section>   
            <h2>References</h2>
            <Links.ExternalLinksList links={references} />
        </section>

        <Links.RelatedLinks links={[{value:'climate-crisis/carbon-capture-and-storage-in-trees-part-two',text:'Carbon capture and storage in trees - part II'},{value:'climate-crisis/carbon-element-of-life',text:'Carbon - element of life'}, {value:'climate-crisis/facts',text:'Facts'}]}></Links.RelatedLinks>
    </Layout>
    )
};

export default Trees;

{/* <p>In an article on the <Links.EL link={{source:'https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181'}}>role of trees in offsetting carbon emissions</Links.EL>, the ecologist Bonnie Waring makes a comparison between the carbon stored in a tree and the carbon emitted during a flight.</p>
            
<blockquote cite='https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181'>
    <div>[A] single passenger on a round trip flight from Melbourne to New York City will emit roughly twice as much carbon <strong>(1600 kg C)</strong> as is contained in an oak tree half a meter in diameter (750 kg C).</div>
</blockquote>
<cite><Links.EL link={{source:'https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181'}}>The Conversation: There aren't enough trees</Links.EL></cite>

<p>The carbon emissions for the flight were calculated using myclimate:</p>

<blockquote cite='https://co2.myclimate.org/en/portfolios?calculation_id=4021628'>
    <div>Your flight: From: Victoria (AU), AVV to: New York (US), JFK, Roundtrip, Economy Class, ca. 33,500 km, 1 traveller</div>
    <div><Formula>CO2</Formula> amount: <strong>6.0 t</strong></div>
</blockquote>
<cite><Links.EL link={{source:'https://co2.myclimate.org/en/portfolios?calculation_id=4021628'}}>myclimate</Links.EL></cite>

<p>How to explain the discrepancy between the two figures, 1600 kg - 1.6 tonnes - and 6 tonnes?</p> */}



{/* <p>Both emissions in <Formula>CO2</Formula> and <Formula>CO2</Formula>e are used, and sometimes muddled. In a Yale article on <Links.EL link={{source:'https://e360.yale.edu/digest/uk-is-now-halfway-toward-meeting-its-zero-carbon-goal-by-2050'}}>falling UK emissions</Links.EL> total emissions are given as 389 million tons in 2020.</p>

<p>The article then states that per capita emissions in the UK are now 4.5 tons.</p>

<p>How was this figure derived from the values provided?</p>

<dl>
    <dt><strong>UK population 2019</strong></dt>
    <dd>67 million</dd>
    <dt><strong>Total emissions</strong></dt>
    <dd>389 million tonnes <Formula>CO2</Formula>e</dd>
    <dt><strong>Per capita emissions</strong></dt>
    <dd>389 &#247; 67 = 5.8 tonnes</dd>
</dl>

<p>Which is correct, 4.5 tons or 5.8 tonnes per person? The Yale article links to a Carbon Brief article in which both figures used in the calculation appear. But in the original, 389 is given in millions of <em>tonnes</em> (not tons!) of <Formula>CO2</Formula> equivalent, and 4.5 is given in <em>tonnes</em> of <Formula>CO2</Formula>.</p>

<p>
    <div>In a separate article published two weeks earlier, Carbon Brief puts UK emissions at <Links.EL link={{source:''}}>5.3 tonnes in 2019</Links.EL> and total emissions at 354 million tonnes.</div>
</p>

<p>Carbon brief publishes well researched pieces on climate change, but we now have 3 different figures for UK per capita emissions, and a Yale article referencing one of them without supporting workings.</p>

<p>
    <div>I checked the <Links.EL link={{source:'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/957687/2019_Final_emissions_statistics_one_page_summary.pdf'}}>UK government figures on ghg emissions</Links.EL> (PDF):</div>
</p>            

<dl>
    <dt><strong>Total emissions for all ghgs</strong></dt>
    <dd>454.8 tonnes <Formula>CO2</Formula>e</dd>
    <dt><strong>Total emissions for <Formula>CO2</Formula></strong></dt>
    <dd>365.1 tonnes</dd>
</dl>

<p>These figures do not include international aviation and shipping; the UK is an above average beneficiary of both.</p>

<p>Let's do the calculations again:</p>

<dl>
    <dt><strong>Per capita ghg emissions</strong></dt>
    <dd>454.8 &#247; 67 = 6.78 tonnes <Formula>CO2</Formula>e</dd>
    <dt><strong>Per capita <Formula>CO2</Formula> emissions</strong></dt>
    <dd>365.1 &#247; 67 = 5.45 tonnes <Formula>CO2</Formula></dd>
</dl>

<p>Does the difference between these figures sound about right? We can compare the ratios between with global equivalents.</p>

<dl>
    <dt><strong>Global ratio</strong></dt>
    <dd>(50-36) &#247; 36 &#215; 100 = 38.9%</dd>
    <dt><strong>Global ratio</strong></dt>
    <dd>(6.78-5.45) &#247; 5.45 &#215; 100 = 24.4%</dd>
</dl>

<p>That's a big difference. It's possible that the global figure for all greenhouse gases includes a greater proportion of emissions from ghgs other than carbon dioxide, including atmospheric ozone, and ocean emissions, both of which are hard to attribute to a single country.</p>            

<p>For the record, the <Links.EL link={{source:'https://www.gov.uk/government/news/uk-enshrines-new-target-in-law-to-slash-emissions-by-78-by-2035'}}>UK's emissions reductions targets</Links.EL> now include international shipping and aviation which is important because they are high; <Links.EL link={{source:'https://lloydslist.maritimeintelligence.informa.com/LL1136518/Shipping-added-to-new-UK-emissions-targets#:~:text=The%20Committee%20on%20Climate%20Change%20had%20reported%20in%20December%20that,emitted%20by%20the%20whole%20sector.'}}>international shipping</Links.EL> represents around 3% of UK emissions and <Links.EL link={{source:'https://commonslibrary.parliament.uk/research-briefings/cbp-8826/'}}>aviation</Links.EL> 8%.</p>

<p>That was a long digression. I had intended to explain the difference between <Formula>CO2</Formula> and <Formula>CO2</Formula>e emissions values but it was difficult to find accurate, and/or consistent figures.</p> */}


{/* <p>Mass and weight are used interchangeably in every day speech so I will use metric tonnes when talking about how much trees weigh. </p>

<p>(NB A US ton is slightly lighter, and an imperial (British) ton slightly heaver.)</p> */}

{/* <p>In other words, per capita emissions accounting for all greenhouse gases, the figure we need to worry about, is <strong>&#8531;</strong> higher than the figure for carbon dioxide emissions alone.</p>

<dl>
    <dt><strong>Calculate percentage difference between <Formula>CO2</Formula> and all ghg emissions</strong></dt>
    <dd>(6-4.5) &#247; 4.5 &#215; 100 = 33.33% or &#8531;</dd>
</dl> */}

{/* <p>During the 2019 UK general election, the three main parties vied to outdo one another as to <Links.EL link={{source:'https://friendsoftheearth.uk/system-change/general-election-party-pledges-tree-planting'}}>the number of trees they committed to plant</Links.EL>. The Conservatives pledged 30 million a year, Labour and the Liberal Democrats 60 million. The Greens went further - they pledged to plant 70 million trees a year.</p>

<p>Carbon offsetting schemes often measure contributions in trees.</p> */}


{/* <p>Can we verify this figure? We will return to this question in part II when we consider carbon storage by area of forested land.</p>
            <p>The efficacy of planting trees is a subject of continuing debate.</p> */}

            // <h3><Formula>CO2</Formula>e in tree terms</h3>

            // <p>50 billion tonnes of <Formula>CO2</Formula>e is the equivalent of 50 billion tonnes of trees.</p>

            // <p>The current estimate for the number of trees in the world is 3 trillion, or 375 trees per person.</p>

            // <p>If we wanted to offset our greenhouse gase emissions with trees alone, we would have to double the number of trees on the planet in 60 years.</p>

            // <h3>Trees in popular discourse</h3>

            // <p>Thinking about individual trees is a useful way to get a feeling for some of the figures discussed in relation to the climate crisis.</p>


            // <h3>Trees take time to grow</h3>

            // <dl>
            //     <dt><strong>Plant 50 billion trees every year</strong></dt><dd>Only by the 40th year would this compensate for our emissions</dd>
            //     <dt><strong>Plant 40 &#215; 50 billion trees in the first year</strong></dt><dd>2 trillion in the first year, less in each subsequent year</dd>
            // </dl>

            // <p>
            //     <div><Links.EL link={{source:'https://ourworldindata.org/contributed-most-global-co2'}}>Since 1751 the world has emitted over 1.5 trillion tonnes of CO2</Links.EL>. We know this equates to roughly 400 billion tonnes/400 Gigatonnes of carbon (1.5 trillion &#247; 3<span class={styles.fraction}>&#8532;</span>).</div>
            // </p>