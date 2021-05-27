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

            <h2>Planting trees </h2>

            <p>In an article on the <Links.EL link={{source:'https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181'}}>role of trees in offsetting carbon emissions</Links.EL> , the ecologist Bonnie Waring makes a comparison between the carbon stored in a tree and the carbon emitted during a flight.</p>
            <blockquote>
                [A] single passenger on a round trip flight from Melbourne to New York City will emit roughly twice as much carbon (1600 kg C) as is contained in an oak tree half a meter in diameter (750 kg C).
            </blockquote>
            <p>The figure for emissions for the flight was calculated using <Links.EL link={{source:'https://co2.myclimate.org/en/portfolios?calculation_id=4021628'}}>myclimate</Links.EL>.</p>
            <blockquote>
                <div>Your flight: From: Victoria (AU), AVV to: New York (US), JFK, Roundtrip, Economy Class, ca. 33,500 km, 1 traveller</div>
                <div>CO2 amount: 6.0 t</div>
            </blockquote>
            <p>How to explain the discrepancy between the two figures, 1.6 tonnes (1600 kg) and 6 tonnes?</p>

            <p>The majority of articles on climate change refer to carbon in the molecular form, carbon dioxide, but sometimes the value is expressed in terms of molecular carbon, as Dr Waring does in this article. The first time I saw such a mismatch I was left scratching me head till I looked carefully at the units.</p>

            <h3>The mass of C and the mass of <Formula>CO2</Formula></h3>

            <p>
            How do we calculate the mass of carbon dioxide (<Formula>CO2</Formula>) given a mass of carbon (C)?            
            </p>

            <blockquote>
                <div>The atomic mass of carbon is 12. The atomic mass of oxygen is 16.</div>
                <div>The ratio of <Formula>CO2</Formula> to C is therefore 44/12 (1*12 + 2*16 / 12) or ~3.67.</div>
            </blockquote>

            <p>From this we see that 1.6 tonnes of <strong>C</strong> * 3.67 = ~ 6 tonnes <strong><Formula>CO2</Formula></strong>.</p>

            <p>Dr Waring gave her answer in tonnes of carbon, myclimate in tonnes of carbon dioxide.</p>

            <p>To convert a mass in carbon to carbon dioxide multiple by 3&#8532; or ~4.</p>

            <h3>How much does a tree weigh?</h3>

            <p>Mass and weight are used interchangeably in every day speech so I will use metric tonnes when talking about how much trees weigh. </p>

            <p>(NB A US ton is slightly lighter, and an imperial (British) ton slightly heaver.)</p>

            <h3>How much carbon does a tree contain?</h3>

            <p>Once we know the weight of a tree it is straightforward to calculate how much carbon it contains. Let's sick with our imaginary oak tree as an example. 1 tonne is equal to 1000 kg.</p>

            <dl>
                <dt><strong>Total weight</strong></dt><dd>3000 kg</dd>                
                <dt><strong>Dry weight</strong></dt><dd>1500 kg (1500 x 50%)</dd>
                <dt><strong>Weight of carbon</strong></dt><dd>712.50 kg (1500 x 47.5%)</dd>
            </dl>

            <p>We can simplify this further. The dry weight of a tree is half its total weight (the rest is water). And approximately half the matter in the tree is carbon.</p>

            <p>
                Therefore our 3 tonne oak tree locks up carbon to the value of 3 tonnes of carbon dioxide.
                <div><em>(3)(&#189;)(&#189;)(4) = 3 tonnes</em></div>
            </p>

            <p>Therefore a tree sequesters approximately its weight in carbon dioxide.</p>

            <h3><Formula>CO2</Formula>e in human terms</h3>

            <p>We emit around 35 billion tonnes of <Formula>CO2</Formula> each year. If we include other gases including methane, nitrous oxide, and ozone the figure is <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>50 billion tonnes of <Formula>CO2</Formula>e</Links.EL> every year.</p>

            <p>Carbon dioxide <strong>equivalents</strong> (<Formula>CO2</Formula><strong>e</strong>) are used to account for all greenhouse gases by converting them to <Formula>CO2</Formula>.</p>

            <p>
                <div>The world population is <Links.EL link={{source:'https://www.worldometers.info/world-population/'}}>almost 8 billion</Links.EL>.</div>
            </p>

            <p>
                <div><em>35/8 = 4.375 = ~4.5 tonnes of <Formula>CO2</Formula> emitted per person per annum</em></div>
                <div><em>50/8 = 6.25 = ~6 tonnes of <Formula>CO2</Formula>e emitted per person per annum</em></div>
            </p>

            <h3><Formula>CO2</Formula>e in tree terms</h3>

            <p>
                <em>6 tonnes = (2) 3 tonne trees</em>
            </p>

            <p>If you live in a rich, industrialised country, eat meat, own a car, and fly, you probaby need to double that number of trees.</p>

            <p>50 billion tonnes of <Formula>CO2</Formula>e is the equivalent of 50 billion trees.</p>

            <p>The current estimate for the number of trees in the world is 3 trillion, or 375 trees per person.</p>

            <p>If we were to offset our greenhouse gase emissions with trees, we would double the number of trees on the planet in 60 years.</p>

            <h3>What does a 3 tonne tree look like?</h3>

        </section>


        <section>   
            <h2>References</h2>
            <Links.ExternalLinksList links={references} />
        </section>

    </Layout>
    )
};

export default Trees;