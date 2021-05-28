import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Formula from 'components/tools/formula';
import styles from 'pages/pages.module.scss';

const Trees = () => {

    const references = [
        {
            name: "The Conversation | There aren’t enough trees in the world | Bonnie Waring",
            source: "https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181"
        }
    ];

    return (
        <Layout header="Trees" title="Trees" description={'Trees'}>

        <section>

            <h2>Where we look at the weight of trees, the carbon they store, converting C to <Formula>CO2</Formula> and back, and relate carbon sequestration to human per capita emissions.</h2>

            <p>In an article on the <Links.EL link={{source:'https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181'}}>role of trees in offsetting carbon emissions</Links.EL> , the ecologist Bonnie Waring makes a comparison between the carbon stored in a tree and the carbon emitted during a flight.</p>
            <blockquote>
                [A] single passenger on a round trip flight from Melbourne to New York City will emit roughly twice as much carbon <strong>(1600 kg C)</strong> as is contained in an oak tree half a meter in diameter (750 kg C).
            </blockquote>
            <p>The figure for emissions for the flight was calculated using <Links.EL link={{source:'https://co2.myclimate.org/en/portfolios?calculation_id=4021628'}}>myclimate</Links.EL>.</p>
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
                <div>The atomic mass of carbon is 12. The atomic mass of oxygen is 16.</div>
                <div>The ratio of <Formula>CO2</Formula> to C is therefore 44/12 (1&#215;12 + 2&#215;16 / 12) or ~3.67.</div>
            </blockquote>

            <p>From this we see that 1.6 tonnes of <strong>C</strong> &#215; 3.67 = ~ 6 tonnes <strong><Formula>CO2</Formula></strong>.</p>

            <p>Dr Waring gave her answer in tonnes of carbon, myclimate in tonnes of carbon dioxide.</p>

            <p>
                <div class={styles.takeaway}><span>To convert a mass in carbon to <Formula>CO2</Formula> multiple by 3&#8532; or ~4.</span></div>
            </p>

            <h3>How much does a tree weigh?</h3>

            <p>Mass and weight are used interchangeably in every day speech so I will use metric tonnes when talking about how much trees weigh. </p>

            <p>(NB A US ton is slightly lighter, and an imperial (British) ton slightly heaver.)</p>

            <h3>How much carbon does a tree contain?</h3>

            <p>Once we know the weight of a tree it is straightforward to calculate how much carbon it contains. Let's sick with our imaginary oak tree as an example. 1 tonne is equal to 1000 kg.</p>

            <dl>
                <dt><strong>Total weight</strong></dt><dd>3000 kg</dd>                
                <dt><strong>Dry weight</strong></dt><dd>1500 kg (1500 &#215; 50%)</dd>
                <dt><strong>Weight of carbon</strong></dt><dd>712.50 kg (1500 &#215; 47.5%)</dd>
            </dl>

            <p>We can simplify this further. The dry weight of a tree is half its total weight (the rest is water). And approximately half the matter in the tree is carbon.</p>

            <p>
                Therefore our 3 tonne oak tree locks up carbon to the value of 3 tonnes of carbon dioxide.                
            </p>

            <dl>
                <dt><strong><Formula>CO2</Formula> in 3 tonne tree</strong></dt>
                <dd>3 &#215; &#189; &#215; &#189; &#215; 4 = 3 tonnes</dd>
            </dl>

            <p>When working out how much carbon a tree can sequester, we can use this approximation:</p>

            <p>
                <div class={styles.takeaway}><span>weight of <Formula>CO2</Formula> sequestered = weight of the tree</span></div>
            </p>

            <h3><Formula>CO2</Formula>e in human terms</h3>

            <p>We emit around 35 billion tonnes of <Formula>CO2</Formula> each year. If we include other gases including methane, nitrous oxide, and ozone the figure is <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>50 billion tonnes of <Formula>CO2</Formula>e</Links.EL> every year.</p>

            <p>Carbon dioxide <strong>equivalents</strong> (<Formula>CO2</Formula><strong>e</strong>) are used to account for all greenhouse gases by converting them to <Formula>CO2</Formula>.</p>

            <p>
                <div>The world population is <Links.EL link={{source:'https://www.worldometers.info/world-population/'}}>almost 8 billion</Links.EL>.</div>
            </p>

            <dl>
                <dt><strong>Per capita emissions <Formula>CO2</Formula></strong></dt>
                <dd>35/8 = 4.375 = ~4.5 tonnes of <Formula>CO2</Formula> emitted per person per annum</dd>
                <dt><strong>Per capita emissions all ghgs</strong></dt>
                <dd>50/8 = 6.25 = ~6 tonnes of <Formula>CO2</Formula>e emitted per person per annum</dd>
            </dl>

            <h3><Formula>CO2</Formula>e in tree terms</h3>

            {/* <dl>
                <dt><strong></strong></dt>
                <dd>6 tonnes = 2 &#215; 3 tonne trees</dd>
            </dl> */}

            <p>If you live in a rich, industrialised country, eat meat, own a car, and fly, you probaby need to double that number of trees.</p>

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

            <p>
            To estimate the weight of trees we can combine a couple of figures from a 2018 census.
                <blockquote>                
                <div>The sum of the biomass across all taxa on Earth is ≈550 Gt C, of which ≈80% (≈450 Gt C) are plants, dominated by land plants (embryophytes).</div>
                <div> Plant biomass includes ≈70% stems and tree trunks.</div>
                <div><Links.EL link={{source:'https://www.pnas.org/content/115/25/6506'}}>The biomass distribution on Earth</Links.EL></div>
                </blockquote>

                <div>A Gigatonne, or Gt, is equal to one billion tonnes.</div>
            </p>

            <dl>
                <dt><strong>Weight of carbon in all trees</strong></dt>
                <dd>450 &#215; 70% = 315 Gigatonnes of carbon</dd>
            </dl>

            <p>                
                <div>To convert the carbon weight to the total weight of the tree, we need to multiply by 4. Why? Carbon accounts for roughly half of the organic matter in a tree, and a living tree contains 50% water.</div>
                <div class={styles.inset}>Therefore total weight of all trees = 315 &#215; 4 = ~1260 Gt.</div>
            </p>

            <dl>
                <dt><strong>Number of trees</strong></dt><dd>~3 trillion</dd>
                <dt><strong>Total weight of trees</strong></dt><dd>~1260 Gt = ~1.26 trillion tonnes</dd>
                <dt><strong>Average weight of a tree</strong></dt><dd>3 trillion trees / 1.26 trilion tonnes = ~ 2.5 tonnes</dd>
            </dl>   

            <p>
                <div class={styles.takeaway}><span>The average weight of a tree is ~2.5 tonnes</span></div>
            </p>

            <h3>What does our average tree look like?</h3>

            <p>Approximate percentages of parts of the biomass of a mature tree. The values on the left are from the UK, those on the right from China.</p>

            <dl>
                <dt><strong>Leaves</strong></dt><dd>1% &nbsp;&nbsp; 6%</dd>
                <dt><strong>Branches</strong></dt><dd>11% &nbsp;&nbsp; 10%</dd>
                <dt><strong>Stem</strong></dt><dd>62% &nbsp;&nbsp; 63%</dd>
                <dt><strong>Roots</strong></dt><dd>26% &nbsp;&nbsp; 21%</dd>
                <dt>Left source</dt><dd><Links.EL link={{ source:'https://ecometrica.com/assets/one_tonne_carbon_tree_discussion_paper_3.pdf'}}>A one tonne carbon tree</Links.EL></dd>
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
                <div><Links.EL link={{source:'https://ourworldindata.org/contributed-most-global-co2'}}>Since 1751 the world has emitted over 1.5 trillion tonnes of CO2</Links.EL>. We know this equates to roughly 400 billion or 400 Gigatonnes of carbon (1.5 trillion / 3.67).</div>
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

        <Links.RelatedLinks links={[{value:'climate-crisis/carbon-element-of-life',text:'Carbon - element of life'}, {value:'climate-crisis/facts',text:'Facts'}]}></Links.RelatedLinks>
    </Layout>
    )
};

export default Trees;