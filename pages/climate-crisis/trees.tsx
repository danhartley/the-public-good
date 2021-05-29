import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Formula from 'components/tools/formula';
import styles from 'pages/pages.module.scss';
import { linkSync } from 'node:fs';

const Trees = () => {

    const references = [
        {
            name: "The Conversation | There aren’t enough trees in the world | Bonnie Waring",
            source: "https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181"
        }
    ];

    return (
        <Layout header="Carbon capture and storage in trees - part I" title="Carbon-capture-and-storage-in-trees-part-one" description={'Trees'}>

        <section>

            <h2>The weight of trees, the carbon they store, converting C to <Formula>CO2</Formula> and back, and carbon sequestration related to human per capita emissions.</h2>

            <p>In an article on the <Links.EL link={{source:'https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181'}}>role of trees in offsetting carbon emissions</Links.EL> , the ecologist Bonnie Waring makes a comparison between the carbon stored in a tree and the carbon emitted during a flight.</p>
            <blockquote>
                [A] single passenger on a round trip flight from Melbourne to New York City will emit roughly twice as much carbon <strong>(1600 kg C)</strong> as is contained in an oak tree half a meter in diameter (750 kg C).
            </blockquote>
            <p>The figure for emissions for the flight was calculated using <Links.EL link={{source:'https://co2.myclimate.org/en/portfolios?calculation_id=4021628'}}>myclimate</Links.EL>. Here are their figures.</p>
            <blockquote>
                <div>Your flight: From: Victoria (AU), AVV to: New York (US), JFK, Roundtrip, Economy Class, ca. 33,500 km, 1 traveller</div>
                <div><strong>CO2 amount: 6.0 t</strong></div>
            </blockquote>
            <p>How to explain the discrepancy between the two figures, 1.6 tonnes (1600 kg) and 6 tonnes?</p>

            <p>The majority of articles on climate change refer to carbon in the molecular form, carbon dioxide, but sometimes the value is expressed in terms of molecular carbon, as Dr Waring does in this article. The first time I saw such a mismatch I was left scratching me head till I looked carefully at the units.</p>

            <h3>The mass of C and the mass of <Formula>CO2</Formula></h3>

            <p>
            How do we calculate the mass of carbon dioxide (<Formula>CO2</Formula>) given a mass of carbon (C)?            
            </p>

            <blockquote>
                <div>The atomic mass of carbon is <strong>12</strong>. The atomic mass of oxygen is <strong>16</strong>.</div>
                <div>The atomic mass of <Formula>CO2</Formula> is therefore 1&#215;<strong>12</strong> + 2&#215;<strong>16</strong> = <strong>44</strong> </div>
                <div>The ratio of <Formula>CO2</Formula> to C is therefore <strong>44</strong> &#247; 12 or <strong>3<span class={styles.fraction}>&#8532;</span></strong>.</div>
            </blockquote>

            <p>From this we see that 1.6 tonnes of <strong>C</strong> &#215; 3<span class={styles.fraction}>&#8532;</span> = ~ 6 tonnes <strong><Formula>CO2</Formula></strong>.</p>

            <p>Dr Waring gave her answer in tonnes of carbon, myclimate in tonnes of carbon dioxide.</p>

            <p>
                <div class={styles.takeaway}><span>To convert a mass in carbon C to <Formula>CO2</Formula> multiple by 3<span class={styles.fraction}>&#8532;</span></span></div>
            </p>

            <h3>How much does a tree weigh?</h3>

            <p>Mass and weight are used interchangeably in every day speech so I will use metric tonnes when talking about how much trees weigh. </p>

            <p>(NB A US ton is slightly lighter, and an imperial (British) ton slightly heaver.)</p>

            <h3>How much carbon does a tree contain?</h3>

            <p>Once we know the weight of a tree it is straightforward to calculate how much carbon it contains. Let's stick with our imaginary oak tree as an example. 1 tonne is equal to 1000 kg.</p>

            <dl>
                <dt><strong>Total weight</strong></dt><dd>3000 kg</dd>                
                <dt><strong>Dry weight</strong></dt><dd>1500 kg (1500 &#215; 50%)</dd>
                <dt><strong>Weight of carbon</strong></dt><dd>712.50 kg (1500 &#215; 47.5%)</dd>
            </dl>

            <p>We can simplify this further. The dry weight of a tree is half its total weight (the rest is water). And approximately half the matter in the tree is carbon.</p>

            <p>
                <div class={styles.takeaway}><span>Approximately &#188; of a tree's dry weight is carbon</span></div>
            </p>

            <p>
                Therefore our 3 tonne oak tree locks up carbon to the value of 3 tonnes of carbon dioxide.                
            </p>

            <dl>
                <dt><strong><Formula>CO2</Formula> in our 3 tonne oak tree</strong></dt>
                <dd>3 &#215; &#188; &#215; 3<span class={styles.fraction}>&#8532;</span> = 2.75 tonnes</dd>
            </dl>

            <p>When working out how much carbon a tree sequesters, we can use this approximation:</p>

            <p>
                <div class={styles.takeaway}><span>A tree sequesters a value for <Formula>CO2</Formula> roughly equal to its weight</span></div>
            </p>

            <h3>What a difference an e makes</h3>

            <p>We emit around 35 billion tonnes of <Formula>CO2</Formula> each year. If we include other gases including methane, nitrous oxide, and ozone the figure is <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>50 billion tonnes of <Formula>CO2</Formula>e</Links.EL> every year.</p>

            <p>Carbon dioxide <strong>equivalents</strong> (<Formula>CO2</Formula><strong>e</strong>) are used to account for all greenhouse gases by converting them to <Formula>CO2</Formula>.</p>

            <p>Carbon Brief provides insight into a variety of <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>greenhouse gas emissions</Links.EL> and how conversions to carbon dioxide equivalents are made.</p>

            <p>Both emissions in <Formula>CO2</Formula> and <Formula>CO2</Formula>e are used, and sometimes muddled. In a Yale article on <Links.EL link={{source:'https://e360.yale.edu/digest/uk-is-now-halfway-toward-meeting-its-zero-carbon-goal-by-2050'}}>falling UK emissions</Links.EL> total emissions are given as 389 million tons in 2020.</p>

            <p>The article then states that per capita emissions in the UK are now 4.5 tons. The UK population in 2019 was 66.65 million.</p>

            <dl>
                <dt><strong>UK population</strong></dt>
                <dd>67 million</dd>
                <dt><strong>Total emissions</strong></dt>
                <dd>389 million tonnes <Formula>CO2</Formula>e</dd>
                <dt><strong>Per capita emissions</strong></dt>
                <dd>389 &#247; 67 = 5.8 tonnes</dd>
            </dl>

            <p>Which is correct, 4.5 tons or 5.8 tonnes per person? The article links to a Carbon Brief article in which both figures used in the calculation appear. But in the original, 389 is given in millions of <em>tonnes</em> (not tons!) of <Formula>CO2</Formula> equivalent, and 4.5 is given in <em>tonnes</em> of <Formula>CO2</Formula>.</p>

            <p>
                <div>In a separate article published two weeks earlier, Carbon Brief puts UK emissions at <Links.EL link={{source:''}}>5.3 tonnes in 2019</Links.EL> and total emissions at 354 million tonnes.</div>
            </p>

            <p>
                For the record, based on <Links.EL link={{source:'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/957687/2019_Final_emissions_statistics_one_page_summary.pdf'}}>UK government figures on ghg emissions</Links.EL> (PDF):
            </p>            

            <dl>
                <dt><strong>Total emissions for all ghgs</strong></dt>
                <dd>454.8 tonnes <Formula>CO2</Formula>e</dd>
                <dt><strong>Total emissions for <Formula>CO2</Formula></strong></dt>
                <dd>365.1 tonnes</dd>
            </dl>

            <p>These figures do not include international aviation and shipping both of which the UK is an above average beneficiary.</p>

            <p>If we once more take the population to be 67 million, our new per capita emissions figures are:</p>

            <dl>
                <dt><strong>Per capita ghg emissions</strong></dt>
                <dd>454.8 &#247; 67 = 6.78 tonnes <Formula>CO2</Formula>e</dd>
                <dt><strong>Per capita <Formula>CO2</Formula> emissions</strong></dt>
                <dd>365.1 &#247; 67 = 5.45 tonnes <Formula>CO2</Formula></dd>
            </dl>

            <p>Does the difference between these figures sound about right? We can compare the ratios with global values.</p>

            <dl>
                <dt><strong>Global ratio</strong></dt>
                <dd>(50-36) &#247; 36 &#215; 100 = 38.9%</dd>
                <dt><strong>Global ratio</strong></dt>
                <dd>(6.78-5.45) &#247; 5.45 &#215; 100 = 24.4%</dd>
            </dl>

            <p>The difference can mostly be explained by the exclusion of <Links.EL link={{source:'https://lloydslist.maritimeintelligence.informa.com/LL1136518/Shipping-added-to-new-UK-emissions-targets#:~:text=The%20Committee%20on%20Climate%20Change%20had%20reported%20in%20December%20that,emitted%20by%20the%20whole%20sector.'}}>international shipping</Links.EL> at around 3% and <Links.EL link={{source:'https://commonslibrary.parliament.uk/research-briefings/cbp-8826/'}}>aviation</Links.EL> at around 8%.</p>

            <p>For the record, the <Links.EL link={{source:'https://www.gov.uk/government/news/uk-enshrines-new-target-in-law-to-slash-emissions-by-78-by-2035'}}>UK's emissions reductions targets</Links.EL> now include international shipping and aviation.</p>

            <p>That was a long digression. I had intended to explain the difference between <Formula>CO2</Formula> and <Formula>CO2</Formula>e emissions values but it was difficult to find accurate, and/or consistent figures.</p>

            <p>The simple takeaway is:</p>

            <p>
                <div class={styles.takeaway}><span><Formula>CO2</Formula> only values are ~40% lower than <Formula>CO2</Formula>e values (all ghgs)</span></div>
            </p>


            <h3>Global per capita emissions</h3>

            <p>
                <div>The world population is <Links.EL link={{source:'https://www.worldometers.info/world-population/'}}>almost 8 billion</Links.EL>.</div>
            </p>

            <dl>
                <dt><strong>Per capita emissions <Formula>CO2</Formula></strong></dt>
                <dd>36 &#247; 8 = 4.375 = ~4.5 tonnes of <Formula>CO2</Formula> emitted per person per annum</dd>
                <dt><strong>Per capita emissions for all greenhouse gases (ghgs)</strong></dt>
                <dd>50 &#247; 8 = 6.25 = ~6 tonnes of <Formula>CO2</Formula><strong>e</strong> emitted per person per annum</dd>
            </dl>

            <p>In other words, per capita emissions accounting for all greenhouse gases, the figure we need to worry about, is <strong>&#8531;</strong> higher than the figure for carbon dioxide emissions alone.</p>

            <dl>
                <dt><strong>Calculate percentage difference between <Formula>CO2</Formula> and all ghg emissions</strong></dt>
                <dd>(6-4.5) &#247; 4.5 &#215; 100 = 33.33% or &#8531;</dd>
            </dl>

            <p>
                <div class={styles.takeaway}><span>Per capita we emit ~6 tonnes of <Formula>CO2</Formula>e each year</span></div>
            </p>

            <h3><Formula>CO2</Formula>e in tree terms</h3>

            {/* <dl>
                <dt><strong></strong></dt>
                <dd>6 tonnes = 2 &#215; 3 tonne trees</dd>
            </dl> */}

            {/* <p>If you live in a rich, industrialised country, eat meat, own a car, and fly, you probably need to double that number of trees.</p> */}

            <p>50 billion tonnes of <Formula>CO2</Formula>e is the equivalent of 50 billion trees.</p>

            <p>The current estimate for the number of trees in the world is 3 trillion, or 375 trees per person.</p>

            <p>If we were to offset our greenhouse gase emissions with trees, we would double the number of trees on the planet in 60 years.</p>

            <h3>How many trees are there?</h3>

            <p>
                <div>
                According to a 2015 report from the Crowther Lab there are approximately <Links.EL link={{source:'https://pubmed.ncbi.nlm.nih.gov/26331545/'}}>3.04 trillion</Links.EL> trees. There are few data to compare directly to this number. The majority of studies typically use a unit of area such as the hectare (10,000 sq metres), or acre (~2/5s of a hectare).
                </div>
            </p>

            <p>
                <div class={styles.takeaway}><span>There are approximately 3 trillion trees</span></div>
            </p>

            <h3>What is the average weight of a tree?</h3>

            <p>Trees vary greatly in size and weight by species, and throughout their lives. We can make a guess at the average weight by dividing the total weight of trees by their number.</p>

            <p>To estimate the weight of trees we can combine a couple of figures from a 2018 census.</p>

                <blockquote>                
                <div>The sum of the biomass across all taxa on Earth is ≈550 Gt C, of which ≈80% (≈450 Gt C) are plants, dominated by land plants (embryophytes).</div>
                <div><Links.EL link={{source:'https://www.pnas.org/content/115/25/6506'}}>The biomass distribution on Earth</Links.EL></div>
                <div>Forest ecosystems account for around 45% of all the carbon stored on land.</div>
                <div><Links.EL link={{ source:'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf'}}>What role can forests play in tackling climate change?</Links.EL> (PDF)</div>
                </blockquote>

            <p>A Gigatonne, or Gt, is equal to one billion tonnes.</p>

            <dl>
                <dt><strong>Weight of carbon in all trees</strong></dt>
                <dd>450 &#215; 50% = 225 Gigatonnes of carbon</dd>
            </dl>

            <p>                
                <div>To convert the carbon weight to the total weight of the tree, we need to multiply by 4. Why? Carbon accounts for roughly half of the organic matter in a tree, and a living tree contains 50% water.</div>
                <div class={styles.inset}>Therefore total weight of all trees = 225 &#215; 4 = ~900 Gt.</div>
            </p>

            <dl>
                <dt><strong>Number of trees</strong></dt><dd>~3 trillion</dd>
                <dt><strong>Total weight of trees</strong></dt><dd>~1260 Gt = ~1.26 trillion tonnes</dd>
                <dt><strong>Average weight of a tree</strong></dt><dd>3 trillion trees &#247; 900 Gt = ~ 3.3 tonnes</dd>
            </dl>   

            <p>
                <div class={styles.takeaway}><span>The average weight of a tree is ~3.3 tonnes</span></div>
            </p>

            <h3>What does our average tree look like?</h3>

            <p>Approximate percentages of parts of the biomass of a mature tree. The values on the left are from the UK, those on the right from China.</p>

            <dl>
                <dt><strong>Leaves</strong></dt><dd>1% &nbsp;&nbsp; 6%</dd>
                <dt><strong>Branches</strong></dt><dd>11% &nbsp;&nbsp; 10%</dd>
                <dt><strong>Stem</strong></dt><dd>62% &nbsp;&nbsp; 63%</dd>
                <dt><strong>Roots</strong></dt><dd>26% &nbsp;&nbsp; 21%</dd>
                <dt>Left source</dt><dd><Links.EL link={{ source:'https://ecometrica.com/assets/one_tonne_carbon_tree_discussion_paper_3.pdf'}}>A one tonne carbon tree</Links.EL> (PDF)</dd>
                <dt>Right source</dt><dd><Links.EL link={{ source:'https://www.researchgate.net/figure/Proportion-of-the-tree-biomass-from-the-trunk-the-branch-the-leaf-and-the-root-in_fig12_299376027'}}>Proportion of the tree biomass from the trunk the branch the leaf and the root</Links.EL></dd>
            </dl>

            <p>The distribution of weight varies between species, and over time; younger trees usually have a greater proportion of leaf mass, and a lower trunk mass. This also explains how and why trees put on weight fast when they are young - it is primarily leaves that are responsible or photosynthesis.</p>

            <h3>Trees take time to grow</h3>

            <p>On average trees grow at the rate of about 25 Kg per year. What are our options if trees are to compensate for all of our emissions?</p>

            <dl>
                <dt><strong>Plant 50 billion trees every year</strong></dt><dd>Only by the 40th year would this compensate for our emissions</dd>
                <dt><strong>Plant 40 &#215; 50 billion trees in the first year</strong></dt><dd>2 trillion in the first year, less in each subsequent year</dd>
            </dl>

            <p>
                <div><Links.EL link={{source:'https://ourworldindata.org/contributed-most-global-co2'}}>Since 1751 the world has emitted over 1.5 trillion tonnes of CO2</Links.EL>. We know this equates to roughly 400 billion tonnes/400 Gigatonnes of carbon (1.5 trillion &#247; 3<span class={styles.fraction}>&#8532;</span>).</div>
            </p>

            {/* <p>Can we verify this figure? We will return to this question in part II when we consider carbon storage by area of forested land.</p> */}

            <h3>Trees in popular discourse</h3>

            <p>Thinking about individual trees is a useful way to get a feeling for some of the figures discussed in relation to the climate crisis.</p>

            {/* <p>The efficacy of planting trees is a subject of continuing debate.</p> */}

            <p>Tom Crowther has promoted the idea that we could <Links.EL link={{source:'https://www.newscientist.com/article/mg24532640-800-planting-a-trillion-trees-really-can-help-us-fight-climate-change/'}}>plant a trillion trees to fight climate change</Links.EL>.</p>

            {/* <p>During the 2019 UK general election, the three main parties vied to outdo one another as to <Links.EL link={{source:'https://friendsoftheearth.uk/system-change/general-election-party-pledges-tree-planting'}}>the number of trees they committed to plant</Links.EL>. The Conservatives pledged 30 million a year, Labour and the Liberal Democrats 60 million. The Greens went further - they pledged to plant 70 million trees a year.</p> */}

            {/* <p>Carbon offsetting schemes often measure contributions in trees.</p> */}

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