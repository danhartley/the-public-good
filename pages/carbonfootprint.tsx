import Layout from 'components/layout/layout';
import Table from 'components/table/table.tsx';
import { Links } from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const calculators = [    
    {
        "name": "Global Footprint Network",
        "source": "https://www.footprintcalculator.org/",
        "score": {
            "co2": "2.6",
            "shareable": true,
            "sources": true,
            "method": "https://www.footprintnetwork.org/footprint-calculator-faq/#gen1",
            "other": [
                '1.9 gha (available 1.3)', 'Carbon 47% of ecological footprint', '1.1 Earths', 'Overshoot day, 21 November'
            ]
        }
    },
    {
        "name": "UN carbon footprint calculator",
        "source": "https://offset.climateneutralnow.org/footprintcalc",
        "score": {
            "co2": "3.37",
            "portugal": "4.33",
            "world": "4.67",
            "shareable": true,
            "sources": true,
            "method": "https://offset.climateneutralnow.org/howtooffset",
            "other": [
                'All ghgs as CO2e'
            ]
        }
    },
    {
        "name": "Mossy Earth",
        "source": "https://mossy.earth/footprint",
        "score": {
            "co2": "6.54",
            "world": "5",
            "shareable": true,
            "sources": true,
            "method": "https://mossy.earth/methodologies/carbon-calculator",
            "other": [
                'Results emailed',
            ]
        }
    },
    {
        "name": "Carbon footprint",
        "source": "https://www.carbonfootprint.com/calculator.aspx",
        "score": {
            "co2": "2.11",
            "portugal": "4.33",
            "world": "5",
            "target": "2",
            "shareable": false,
            "sources": true,
            "method": "https://www.carbonfootprint.com/calculatorfaqs.html",
            "other": [
                'Data are editable', 'All ghgs as CO2e'
            ]
        }
    },
    {
        "name": "Know Your Carbon footprint (BP)",
        "source": "https://www.knowyourcarbonfootprint.com/",
        "score": {
            "co2": "6.35",
            "world": "4.98",
            "shareable": true,
            "sources": true,
            "method": "https://www.knowyourcarbonfootprint.com/BP_TN_Lifestyle_GHG_Emissions_Calculator_Methodology_Statement_03Mar2020.a9a76d7e.pdf",
            "other": [
                'Currency in USD',
                'UK defaults',
                'Data are editable'
            ]
        }
    },
    {
        "name": "The Nature Conservancy (US only)",
        "source": "https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/"
    },
    {
        "name": "US Environmental Protection Agency (US only)",
        "source": "https://www3.epa.gov/carbon-footprint-calculator/"
    },
    {
        "name": "COTAP.org – Carbon Offsets To Alleviate Poverty (US only)",
        "source": "https://cotap.org/carbon-footprint-calculator/"
    },
    {
        "name": "World Wildlife Fund (UK only)",
        "source": "https://footprint.wwf.org.uk/"
    },
];

const CarbonFootprint = () => {
    return (
        <Layout title="Carbon Footprint" description={'Carbon Footprint'}>
            <section class={styles.card}>
                <h2>Carbon footprint</h2>                
                <p>
                    <span class={styles.quote}>
                    The total greenhouse gas (GHG) emissions caused by an individual, event, organization, service, or product, expressed as carbon dioxide equivalent. <a href="https://en.wikipedia.org/wiki/Carbon_footprint">Wikipedia</a>
                    </span>
                </p>
                <h3>Current emissions</h3>
                <p>
                According to Our World in Data (2017):
                <ul class={styles.list}>
                    <li>Per capita CO2 emissions: <a href="https://ourworldindata.org/grapher/co-emissions-per-capita?tab=chart">4.73 tonnes</a>.</li> 
                    <li>Total emissions: <a href="https://ourworldindata.org/co2-emissions">36.44 billion tonnes of CO2</a>.</li>
                    <li>World population: <a href="https://ourworldindata.org/world-population-growth">7.55 billion</a> *.</li>
                </ul>
                </p>
                <h3>Sustainable emissions</h3>
                <p>                                 
                    <div>
                        <span class={styles.quote}>
                        Since 1959, approximately 350 billion tonnes of carbon have been emitted by humans to the atmosphere, of which about 55 per cent has moved into the land and oceans.
                        </span>
                    </div>
                    <div>Based on natural <a href="https://en.wikipedia.org/wiki/Carbon_sink">carbon sinks</a> absorbing <a href="https://www.globalcarbonproject.org/news/CarbonSinkIncreases.html">55%</a> of emissions, a sustainable, or 'net neutral' per capita budget would be:
                        <span class={styles.quote}>
                            4.73 tonnes * .55 = 2.6 tonnes of CO2
                        </span>
                        <p>As the population rises, this allowance will <a aria-label="Carbon Brief, Analysis: Why children must emit eight times less CO2 than their grandparents" href="https://www.carbonbrief.org/analysis-why-children-must-emit-eight-times-less-co2-than-their-grandparents">fall</a>.</p>

                        The calculation assumes that sinks absorb all emissions immediately, which is not the case. Counting emissions and calculating budgets is <a href="https://www.carbonbrief.org/analysis-why-the-ipcc-1-5c-report-expanded-the-carbon-budget">not straight forward</a>; the IPPC publishes a <a aria-label="IPCC Guide to Uncertainty (PDF)" href="https://www.ipcc.ch/site/assets/uploads/2017/08/AR5_Uncertainty_Guidance_Note.pdf">guide</a> for the lead authors of reports solely concerned with explaining how to express uncertainty.
                    </div>
                </p>

                <h3>CO2e</h3>

                <p>
                    Unfortunately CO2 is not the only greenhouse gas; emissions from methane, nitrous oxide, and F-gases must also be taken into account. Total emissions are measured using <a aria-label="Our World in Data, How do we quantify greenhouse gas emissions?" href="https://ourworldindata.org/greenhouse-gas-emissions#how-are-greenhouse-gases-measured">carbon dioxide-equivalents</a>.
                    <p>
                        The total figure for all greenhouse gas emissions is therefore higher, more than <a aria-label="Our World in Data, Total greenhouse gas emissions" href="https://ourworldindata.org/greenhouse-gas-emissions">50 billion tonnes of CO2e</a>.
                    </p>
                </p>

                <h3>History</h3>

                <ul class={styles.list}>
                    <li>
                        <span>
                        <a aria-label="Profile of William Rees at the post carbon institute" href="https://www.postcarbon.org/our-people/william-rees/">William Rees</a> and Mathis Wackernagel use the term <a aria-label="Wikipedia article on ecological footprint" href="https://en.wikipedia.org/wiki/Ecological_footprint">ecological footprint</a> for the first time in an academic publication.
                        </span>
                    </li>
                    <li>
                        <span>
                        BP launches the first <a href="https://mashable.com/feature/carbon-footprint-pr-campaign-sham/?europe=true">carbon footprint calculator</a> and spends millions promoting the concept.
                        </span>
                    </li>
                    <li>
                        BP launches a <a aria-label="BP carbon emissions calculator" href="https://www.knowyourcarbonfootprint.com/">second carbon calculator</a>. It does not receive a favourable <a href="https://twitter.com/bp_plc/status/1186645440621531136">reception</a>.
                    </li>
                </ul>

                <h3>Controversy</h3>

                <p>The climatologist, Michael E Mann, argues that whilst individual action is important, it must not distract from policy. In an article for Time, <a href="https://time.com/5669071/lifestyle-changes-climate-change/">Lifestyle Changes Aren’t Enough to Save the Planet. Here’s What Could</a>, he writes, 
                    <span class={styles.quote}>
                        We need systemic changes that will reduce everyone’s carbon footprint, whether or not they care.
                    </span>          
                </p>

                <p>The debate around carbon footprints is often about who is <a aria-label="BBC article, Who is really to blame for climate change?" href="https://www.bbc.com/future/article/20200618-climate-change-who-is-to-blame-and-why-does-it-matter">responsible</a> for carbon emissions.</p>

                <p>
                    <div>In his article, <a aria-label="Mark Kaufman as Mashable sets out the case against fossil fuel companies" href="https://mashable.com/feature/carbon-footprint-pr-campaign-sham"> The carbon footprint sham</a>, Mark Kaufman argues the burden of responsibility for global warming must be placed squarely on the fossil fuel industry. He concludes,
                        <span class={styles.quote}>
                        BP wants you to accept responsibility for the globally disrupted climate. Just like beverage industrialists wanted people to feel bad about the amassing pollution created by their plastics and cans, or more sinisterly, tobacco companies blamed smokers for becoming addicted to addictive carcinogenic products. We’ve seen this manipulative playbook before, and BP played it well.
                        </span>
                    </div>
                </p>

                <h3>Implicit emissions</h3>

                <p>
                    <div>In 2008 MIT <a href="https://news.mit.edu/2008/footprint-tt0416">calculated</a> that even the least extravagant person in the US had a carbon footprint of 8.5 tonnes or 42.5% of the average which, at the time, was 20 tonnes.
                        <span class={styles.quote}>
                        Regardless of income, there is a certain floor below which the individual carbon footprint of a person in the U.S. will not drop.
                        </span>
                    </div>
                    <div>
                        If we extend this finding to all rich countries, it would impossible for even the most diligent individual to live sustainably; before they had eaten one mouthful of food or taken one hot shower, they would be living beyond the capacity of the planet to support them.
                    </div>
                </p>

                <h3>Benefits of carbon footprints</h3>

                <p>
                    <ul class={styles.list}>
                        <li>Provide a basic framework for how to think about climate change numbers.</li>
                        <li>Demonstrate our dependency on fossil fuels.</li>
                        <li>Can establish good practices and measurable outcomes e.g. the <a href="https://www.footprintnetwork.org/content/images/uploads/Ecological_Footprint_Standards_2009.pdf">Ecological Footprint Standards (PDF)</a></li>
                    </ul>
                </p>

                <h3>Downsides of carbon footprints</h3>
                
                <p>
                    <ul class={styles.list}>
                        <li>Individual profiles are primarily based on averages with minimal personal data.
                            <div>For a comparison compare one <a href="https://calculator.farmcarbontoolkit.org.uk/">carbon footprint calculator for UK farmers</a> which takes 30 mins to 2 hours to complete.</div>
                        </li>
                        <li>Tracing back carbon emissions is hard; many calculations are derived from assumptions based on figures for large units, usually countries.</li>
                        <li>The background or implicit value for the region where the user lives is not separated out, although an average for that region is often given.</li>
                        <li>There is no oversight, and no formal process of review; this makes it hard for the public to know which calculators are accurate or reliable.</li>
                        {/* <li>Some do not follow standards and are black boxes with little or no explanation of how the final footprint is derived. The ones listed here do provide infomration as to how they achieved the footprint value.</li> */}
                        {/* <li>Climate change, biodiversity loss, ocean acidification, pollution deforestation, etc. are global problems best tackled by collective effort through systemic change.</li> */}
                    </ul>
                </p>

                <h3>Individual acts</h3>

                <p>Carbon footprints are sometimes used as a proxy for individual acts, which are then placed in opposition to political or social acts, limiting choice to one or the other, either/or.</p>

                <p>One reason for this polarity is that fossil fuel companies have promoted the idea that emissions reduction is the responsibility of individudals, and one of the tools they have used is the carbon footprint; not only was BP was the first to popularise the concept, they have released carbon footprint calculators twice, in 2006 and 2020, to coincide with campaigns defending or stating their green credentials.</p>

                <p>Do individual acts detract from systemic changes that might be more productive?</p>

                <p>Two recent studies provide evidential support that we keep a tally of our moral acts, and are quick to call in our debt; acceptance of <a aria-label="Article from Nature, Nudging out support for a carbon tax." href="https://www.nature.com/articles/s41558-019-0474-0.epdf?referrer_access_token=7hony2jeIBDx312LZL9Gf9RgN0jAjWel9jnR3ZoTv0Nfy3PIgvrwnNXQzIbXH8z1u5o1DVXJKOCBERWXBQ6n3i7p3mfuhk8O9_ARe2av1P-d3pfhbb06zqr_k1ZVK_HD8tEj_6p2jxRJQxwkRFQWahxt7ZYR4Ws1ZVY58B8B8F6TJ6aO9hG-1I9AhErSlutuYsCZeDXvm9-XQaK48r5_g_7ekTO-pGXMZtdqirjpVkfWgFjWyxnVqqn0_h9toXZES8i2jx06Io6c6_qOC8Bd6VHPqm72I77ZCjw2ljeahJRxzha7MfU5fOL8oy4OqgnRM5K5ySLjcAfgtZx4iUYU7Q%3D%3D&tracking_referrer=www.usatoday.com">one tax</a>, even at the lower end of a range, lessens acceptance of further taxation. A paper in <a aria-label="Article from Nature, Household behaviour crowds out support for climate change policy when sufficient progress is perceived." href="https://www.nature.com/articles/nclimate3316">Nature</a> that looked at how small changes might adversely effect willingness to accept larger ones, concluded,
                    <span class={styles.quote}>
                        It appears that, while people are generally concerned about societal problems such as climate change, they may not be willing to incur large costs to achieve a solution. With the perceived existence of a low-cost solution (a nudge), motivated reasoning may tempt some to exaggerate its ultimately small environmental impact. This may explain why participants generally thought the nudge was as or more effective at reducing pollution than the carbon tax. However, even those who knew that the carbon tax is more effective than the green energy nudge were discouraged from implementing the tax when a nudge became available, suggesting that crowding-out is not merely the result of incorrect perceptions of relative effectiveness. When these perceptions are corrected at the time of decision, however, motivated reasoning is difficult and crowding-out disappears.
                    </span>
                    A little hope in the final sentence.
                </p>

                <p>The choice, however, is ours, we can save electricity and water, become a vegan and run for office. If we think we can combine personal and political action, then we should so, and trust others to do the same.</p>

                <p>What of the actions themselves, do they have <a href="https://en.wikipedia.org/wiki/Intrinsic_value_(ethics)">intrinsic value</a>? Does knowing the average emission of a transatlantic flight, or the carbon dioxide-equivalent per kilo of beef mean anything?</p>

                <p>A decision which may involve inconvenience, loss of income, or the forfeit of a pleasure, is sustained more readily when it has solid foundations, for then the reason behind, and the need for, the change, is clear, even if its ultimate benefits is neither immediate nor discernible. It is against the grain for most to forego gratification or gain, but it is hard to ignore that which is right to do, when that right has been established and understood. We may call this conscience, sense of duty, or moral imperative; and we may discover that acting in accordance with our beliefs and our understanding, is less disruptive, and more sustaining, than we imagined.</p>

                <h3>Carbon footprint calculators</h3>

                <br/>

                <Links.InternalLinksList links={calculators} />

                <div>NB Not all calculators are the same. The Global Food Network makes clear their <a aria-label="Global Food Network: Footprint Calculator FAQs" href="https://www.footprintnetwork.org/footprint-calculator-faq/#gen1">calculator</a> is not a carbon calculator but a Footprint calculator, with two parts: an Ecological Footprint and a figure for CO2 emissions (a carbon footprint). </div>

                <h3>Comparison</h3>

                <p>I used 5 calculators to find my carbon footprint. <span class={styles.super}>+</span></p>

                <Table calculators={calculators.filter(c => c.score)}></Table>

                <p>
                    Calculators don't take into account personal circumstances; wealthier people have more choice as to where they live, and how they live. Nor do they take into account our work which may carry a footprint quite different than the private one. The reason for this is to avoid double counting emissions - if you make cars, the car owners are responsible for those emissions, not the manufaturer; but since these are personal emissions calculators, this limits their value. And finally they are snapshots, which don't take into account our history, or future plans.
                </p>

                <h3>Recommendations</h3>
                <p>
                    <ul class={styles.list}>
                        <li>Do not offer the option to share footprints because they are free of context, and not comparable.</li>
                        <li>Show workings and explain assumptions.</li>
                        <li>Follow, or reference, <a href="https://www.footprintnetwork.org/content/images/uploads/Ecological_Footprint_Standards_2009.pdf">Ecological Footprint Standards (PDF)</a>.</li>
                        <li>Indicate the implicit, background carbon footprint.</li>
                        <li>Include and explain carbon dioxide-equivalents.</li>
                        {/* <li>Extend the concept to larger entities where decisions have a greater positive impact on emissions, and negative impacts on employment, wealth, etc.</li> */}
                    </ul>
                </p>
                </section>
            <section class={styles.card}>
                <p>* There is a discrepancy hidden in these figures: 
                    <span class={styles.quote}>
                        4.73 tonnes * 7.55 billion = 35.70 billion tonnes of CO2
                    </span>
                    Any yet,
                    <span class={styles.quote}>
                        36.44 billion tonnes / 7.55 billion people = 4.83 tonnes of CO2
                    </span>
                    There is a 2% of emissions not accounted for,
                    <span class={styles.quote}>
                        1 - (36.44 billion tonnes / 35.70 billion tonnes) ~2%
                    </span>
                    This is explained by the 'bunker fuels', or 'International transport', that is emissions for which no one has taken credit.
                </p>
            </section>
            <section class={styles.card}>
                <p>
                    + My profile
                    <ul class={styles.list}>                        
                        <li>No meat, cheese, eggs most days, no milk</li>
                        <li>40% fresh, 60% packaged (pasta, beans, coffee, oats, oat milk, wine)</li>
                        <li>80% local food (within 320k)</li>
                        <li>Living in a city centre</li>
                        <li>Country: Portugal</li>
                        <li>One occupant in 66m2 flat in multi-storey concrete, steel and glass building</li>
                        <li>Well-insulated building in maritime climate; low electricity use, no air conditioning</li>                        
                        <li>Electicity & Gas 166kWh per month, 50% renewable</li>
                        <li>Rubbish: relatively low, little waste, recycle</li>
                        <li>Eat out once a week</li>
                        <li>No car, or bike, etc. Rent rarely.</li>
                        <li>10 kilometres per week bus</li>
                        <li>10 kilometres per week train</li>
                        <li>4 hours flying per year</li>
                    </ul>
                </p>
            </section>
        </Layout>
    )
};

export default CarbonFootprint;    