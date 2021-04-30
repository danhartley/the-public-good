import Layout from 'components/layout/layout';
import Tables from 'components/tables/tables';
import Links from 'components/links/Links';
import styles from 'pages/pages.module.scss';

const CarbonFootprint = () => {
    return (
        <Layout title="Carbon Footprint" description={'Carbon Footprint'}>
            <section class={styles.card}>
                <h2>Carbon footprints - the value of individual acts</h2>

                <div>
                    <div class={styles.bang}><a href="#individualActs">Individual Acts</a></div>
                    <div class={styles.bang}><a href="#calculators">Available calculators</a></div>
                    <div class={styles.bang}><a href="#comparison">Comparison of selected calculators</a></div>
                    <div class={styles.bang}><a href="#conclusion">Conclusion</a></div>
                </div>               

                <h4>Definition</h4>          

                <p>
                    <div class={styles.quote}>
                        <div>The total greenhouse gas (GHG) emissions caused by an individual, event, organisation, service, or product, expressed as carbon dioxide equivalent. <a href="https://en.wikipedia.org/wiki/Carbon_footprint">Wikipedia</a></div>                    
                    </div>
                </p>

                <h3>Current emissions</h3>
                <p>
                According to Our World in Data (2017):
                <ul class={styles.list}>
                    <li>Per capita CO2 emissions: <a href="https://ourworldindata.org/grapher/co-emissions-per-capita?tab=chart">4.73 tonnes</a>.</li> 
                    <li>Total CO2: <a href="https://ourworldindata.org/co2-emissions">36.44 billion tonnes of CO2</a>.</li>
                    <li>Total CO2e: <a href="https://ourworldindata.org/greenhouse-gas-emissions">49.36 billion tonnes of CO2e</a> (2016).</li>
                    <li>World population: <a href="https://ourworldindata.org/world-population-growth">7.55 billion</a> <a id="data" class={styles.bang} href="#discrepancy">*</a>.</li>
                </ul>
                <div class={styles.inset}>
                    Emissions have risen worldwide since 2017 with the exception of 2020 when they fell; <a href="https://www.nature.com/articles/d41586-021-00090-3">Nature, 6.4% (2.3 billion tonnes)</a>, <a href="https://www.iea.org/articles/global-energy-review-co2-emissions-in-2020">IEA 5.8%</a>, <a href="https://carbonmonitor.org/">Carbon Monitor 4%</a>.
                    <span><a href="https://carbonmonitor.org/">Daily estimates</a> are also available from Carbon Monitor.</span>
                </div>                
                </p>
                <h3>Sustainable emissions</h3>
                <p>                                 
                    <div>
                        <span class={styles.quote}>
                        The natural response of land to human-induced environmental change caused a net sink of around 11.2 GtCO2 yr-1 during 2007–2016 (equivalent to 29% of total CO2 emissions) (<a href="https://www.ipcc.ch/site/assets/uploads/2017/08/AR5_Uncertainty_Guidance_Note.pdf">medium confidence</a>) (PDF).
                        <div><a href="https://www.ipcc.ch/srccl/chapter/summary-for-policymakers/">IPCC Special report on climate change and land</a> (PDF)</div>
                        </span>
                        <span class={styles.quote}>
                        The ocean has taken up between 20–30% (<a href="https://www.ipcc.ch/site/assets/uploads/2017/08/AR5_Uncertainty_Guidance_Note.pdf">very likely</a>) of total anthropogenic CO2 emissions since the 1980s causing further ocean acidification.
                        <div><a href="https://www.ipcc.ch/srocc/chapter/summary-for-policymakers/">IPCC Special report on the ocean and cryosphere in a changing climate</a></div>
                        </span>
                    </div>
                    <div>
                        
                        The value for CO2 taken up by <a href="https://en.wikipedia.org/wiki/Carbon_sink">carbon sinks</a> is variable, affected by a number of limiting factors, and best represented as a range rather than a single figure. To calculate a sustainable, or 'net neutral' per capita budget, we use an approximation of 50%:
                        <span class={styles.quote}>
                            4.73 tonnes * .50 = 2.365 tonnes of CO2
                        </span>
                        <p>As the population rises, this allowance will <a aria-label="Carbon Brief, Analysis: Why children must emit eight times less CO2 than their grandparents" href="https://www.carbonbrief.org/analysis-why-children-must-emit-eight-times-less-co2-than-their-grandparents">fall</a>.</p>

                        The calculation assumes that sinks absorb all emissions immediately, which is not the case. Counting emissions and calculating budgets is <a href="https://www.carbonbrief.org/analysis-why-the-ipcc-1-5c-report-expanded-the-carbon-budget">not straightforward</a>; the IPPC publishes a <a aria-label="IPCC Guide to Uncertainty (PDF)" href="https://www.ipcc.ch/site/assets/uploads/2017/08/AR5_Uncertainty_Guidance_Note.pdf">guide</a> for the lead authors of reports solely concerned with explaining how to express uncertainty.
                    </div>
                </p>

                <p>
                    <h3>Global carbon budget</h3>
                    <p>
                        The <a aria-label="Paper on the Global Carbon Budget 2020" href="https://essd.copernicus.org/articles/12/3269/2020/">global carbon budget</a>, published annually, provides an account of the balance between carbon sources - emissions - and sinks. The movement of carbon atoms betweens sinks and sources is called the <a aria-label="US National Ocean Service article, What is the carbon cycle?" href="https://oceanservice.noaa.gov/facts/carbon-cycle.html">carbon cycle</a>, and it is perturbations in this cycle which cause global warming.
                        Since 1950 around <a href="https://www.nature.com/articles/s41598-018-24241-1.pdf?origin=ppub">48±7%</a> of anthropogenic emissions have been taken up by <a href="https://www.pnas.org/content/116/24/11646">natural sinks</a>, though at variable rates.
                        Due to <a href="https://en.wikipedia.org/wiki/CO2_fertilization_effect">carbon fertilisation</a>, and other factors, including increased use of nitrogen, natural sinks have been taking up more carbon dioxide, though <a aria-label="Article published in Nature: Effects of rising CO2 levels on carbon sequestration are coordinated above and below ground" href="https://www.nature.com/articles/d41586-021-00737-1">this upward trend may not continue</a>.
                        <div>
                            Natural sinks cannot be relied on indefinitely, and become sources of emissions if they are removed or die.
                            IPCC calculations and NDAs (<a href="https://unfccc.int/process-and-meetings/the-paris-agreement/nationally-determined-contributions-ndcs/nationally-determined-contributions-ndcs">Nationally Determined Contributions</a>), take into account natural sources. 
                        </div>                        
                        <p>
                            Negative emissions refer to greenhouse gases, primarily carbon dioxide, removed from the atmosphere, either though biogenic means (including planting trees, and restoring mangrove forests and sea grasses), or by artificial methods such as <a aria-label="Report by the International Energy Agency on direct air capture" href="https://www.iea.org/reports/direct-air-capture">direct air capture</a> (DAC).                
                        </p>
                        <p>
                            Carbon capture and storage, and carbon offsetting are used, at best, to keep emissions from an activity carbon neutral; they do not reduce carbon already in the atmosphere.
                        </p>
                    </p>                    
                </p>

                <h3>CO2e</h3>

                <p>
                    Unfortunately CO2 is not the only greenhouse gas; emissions from methane, nitrous oxide, and <a href="https://en.wikipedia.org/wiki/Fluorinated_gases">Fluorinated gases</a> (F-gases) must also be taken into account. Total emissions are measured using <a aria-label="Our World in Data, How do we quantify greenhouse gas emissions?" href="https://ourworldindata.org/greenhouse-gas-emissions#how-are-greenhouse-gases-measured">carbon dioxide-equivalents</a>.
                    <p>
                        The total figure for all greenhouse gas emissions is therefore higher, more than <a aria-label="Our World in Data, Total greenhouse gas emissions" href="https://ourworldindata.org/greenhouse-gas-emissions">50 billion tonnes of CO2e</a>.
                    </p>
                </p>

                <h3>History</h3>

                <ul class={styles.list}>
                    <li>
                        <span><a aria-label="Profile of William Rees at the post carbon institute" href="https://www.postcarbon.org/our-people/william-rees/">William Rees</a> and Mathis Wackernagel use the term <a aria-label="Wikipedia article on ecological footprint" href="https://en.wikipedia.org/wiki/Ecological_footprint">ecological footprint</a> for the first time in an academic publication.</span>
                    </li>
                    <li>
                        <span>BP launches the first <a href="https://mashable.com/feature/carbon-footprint-pr-campaign-sham/?europe=true">carbon footprint calculator</a> and spends millions promoting the concept.</span>
                    </li>
                    <li>
                        <span>BP launches a <a aria-label="BP carbon emissions calculator" href="https://www.knowyourcarbonfootprint.com/">second carbon calculator</a>. It does not receive a favourable <a href="https://twitter.com/bp_plc/status/1186645440621531136">reception</a>.</span>
                    </li>
                </ul>

                <h3>Controversy</h3>

                <p>The climatologist, Michael E Mann, argues that whilst individual action is important, it must not distract from policy. In an article for Time, <a href="https://time.com/5669071/lifestyle-changes-climate-change/">Lifestyle Changes Aren’t Enough to Save the Planet. Here’s What Could</a>, he writes, 
                    <span class={styles.quote}>
                        We need systemic changes that will reduce everyone’s carbon footprint, whether or not they care.
                    </span>          
                </p>

                <p>
                    <div>The debate around carbon footprints is often about who is <a aria-label="BBC article, Who is really to blame for climate change?" href="https://www.bbc.com/future/article/20200618-climate-change-who-is-to-blame-and-why-does-it-matter">responsible</a> for carbon emissions.</div>
                </p>

                <p>
                    <div>In 2002 BP rebranded itself as 'Beyond Petroleum'; as part of their <a aria-label="Forbes article reviewing BP's position on renewables" href="https://www.nytimes.com/2006/08/14/opinion/14kenney.html">marketing campaign</a> they released a carbon footprint calculator which popularised the concept. Following the <a aria-label="Wikipedia article on the Deepwater Horizon oil spill" href="https://en.wikipedia.org/wiki/Deepwater_Horizon_oil_spill">Deepwater Horizon disaster</a> in 2006, BP sold off its <a aria-label="Reuters article on BP selling off solar assets" href="https://www.reuters.com/article/us-bp-solar/bp-turns-out-lights-at-solar-business-idUSTRE7BK1CC20111221?edition-redirect=uk">solar</a> (2011) and <a aria-label="Reuters article on BP selling off wind assets" href="https://www.reuters.com/article/us-bp-wind-idUSBRE93208B20130403">wind</a> (2013) assets.</div>
                </p>

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
                        If we extend this finding to all rich countries, it would be impossible for even the most diligent individual to live sustainably; before they had eaten one mouthful of food or taken one hot shower, they would be living beyond the capacity of the planet to support them.
                    </div>
                    <div>
                    <p class={styles.italic}>
                        <div>A <a aria-label="Carbon Footprint of Nations: A Global, Trade-Linked Analysis" href="https://pubs.acs.org/doi/10.1021/es803496a#">paper</a> from 2009, puts the domestic share of emissions at 80%, the world average at 73%, and most European countries in the 60s. (Ed. {new Date('Mon 29 March 2021').toDateString()})</div>
                    </p>
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
                        <li>Our good intentions can be undone by <a aria-label="Article titled Psychological obstacles to the efficacy of environmental footprint tools" href="https://iopscience.iop.org/article/10.1088/1748-9326/ab9968">primary cognitive biases</a>.</li>
                    </ul>
                </p>

                <h3 id="individualActs">Individual acts</h3>

                <p>Carbon footprints are sometimes used as a proxy for individual acts, which are then placed in opposition to political or social acts, limiting choice to one or the other, either/or.</p>

                <p>One reason for this polarity is that fossil fuel companies have promoted the idea that emissions reduction is the responsibility of individuals, and one of the tools they have used is the carbon footprint; not only was BP the first to popularise the concept, they have released carbon footprint calculators twice, in 2006 and 2020, to coincide with campaigns defending or stating their green credentials.</p>

                <p>Do individual acts detract from systemic changes that might be more productive?</p>

                <p>Two recent studies provide evidential support that we keep a tally of our moral acts, and are quick to call in our debt; acceptance of <a aria-label="Article from Nature, Nudging out support for a carbon tax." href="https://www.nature.com/articles/s41558-019-0474-0.epdf?referrer_access_token=7hony2jeIBDx312LZL9Gf9RgN0jAjWel9jnR3ZoTv0Nfy3PIgvrwnNXQzIbXH8z1u5o1DVXJKOCBERWXBQ6n3i7p3mfuhk8O9_ARe2av1P-d3pfhbb06zqr_k1ZVK_HD8tEj_6p2jxRJQxwkRFQWahxt7ZYR4Ws1ZVY58B8B8F6TJ6aO9hG-1I9AhErSlutuYsCZeDXvm9-XQaK48r5_g_7ekTO-pGXMZtdqirjpVkfWgFjWyxnVqqn0_h9toXZES8i2jx06Io6c6_qOC8Bd6VHPqm72I77ZCjw2ljeahJRxzha7MfU5fOL8oy4OqgnRM5K5ySLjcAfgtZx4iUYU7Q%3D%3D&tracking_referrer=www.usatoday.com">one tax</a>, even at the lower end of a range, lessens acceptance of further taxation. A paper in <a aria-label="Article from Nature, Household behaviour crowds out support for climate change policy when sufficient progress is perceived." href="https://www.nature.com/articles/nclimate3316">Nature</a> that looked at how small changes might adversely affect willingness to accept larger ones, concluded,
                    <span class={styles.quote}>
                        It appears that, while people are generally concerned about societal problems such as climate change, they may not be willing to incur large costs to achieve a solution. With the perceived existence of a low-cost solution (a nudge), motivated reasoning may tempt some to exaggerate its ultimately small environmental impact. This may explain why participants generally thought the nudge was as or more effective at reducing pollution than the carbon tax. However, even those who knew that the carbon tax is more effective than the green energy nudge were discouraged from implementing the tax when a nudge became available, suggesting that crowding-out is not merely the result of incorrect perceptions of relative effectiveness. When these perceptions are corrected at the time of decision, however, motivated reasoning is difficult and crowding-out disappears.
                    </span>
                    A little hope in the final sentence.
                </p>

                <p>The choice, however, is ours, we can save electricity and water, become a vegan and run for office. If we think we can combine personal and political action, then we should, and trust others to do the same.</p>

                <p>
                    <span>What of the actions themselves, do they have <a href="https://en.wikipedia.org/wiki/Intrinsic_value_(ethics)">intrinsic value</a>? Does knowing the average emission of a transatlantic flight, or the carbon dioxide-equivalent per kilo of beef mean anything?</span>
                </p>

                <p>A decision which may involve inconvenience, loss of income, or the forfeit of a pleasure, is sustained more readily when it has solid foundations, for then the reason behind, and the need for, the change, is clear, even if any ultimate benefit that accrues is indiscernible. It is against the grain for most to forego gratification or gain, but it is hard to ignore that which is right to do, when that right has been established and understood. We may call this conscience, sense of duty, or moral imperative; and we may discover that acting in accordance with our beliefs and our understanding, is less disruptive, and more sustaining, than we imagined.</p>

                <h3 id="calculators">Carbon footprint calculators</h3>

                <br/>

                <Tables.Calculators></Tables.Calculators>

                <p>
                    <div class={styles.small}>NB Not all calculators are the same. The Global Food Network makes clear their <a aria-label="Global Food Network: Footprint Calculator FAQs" href="https://www.footprintnetwork.org/footprint-calculator-faq/#gen1">calculator</a> is not a carbon calculator but a Footprint calculator, with two parts: an Ecological Footprint (a true footprint, measured by area) and a figure for CO2 emissions (a carbon footprint).</div>
                </p>

                <h3 id="comparison">Comparison</h3>

                <p>I used 5 calculators to find my carbon footprint. <span class={styles.super}><a id="table" class={styles.bang} href="#profile">+</a></span></p>

                <Tables.Calculators withScores={true}></Tables.Calculators>

                <p>Why are there such large discrepancies between footprints?</p>

                <p>Calculators accept a variety of information, and differ as to external baseline data and assumptions; this does not necessarily make one better than another; all of these calculators are well researched, and independently valuable, but direct comparison between them is not possible. Discrepancies are a cautionary reminder that, when dealing with climate change figures, it is more constructive to think in terms of ranges than specific figures, and that the ranges themselves fluctuate. The value of our footprint is seductive, an effective means of engagement; how the number was derived <a aria-label="Mossy Earth carbon footprint calculator methodology" href="https://mossy.earth/methodologies/carbon-footprint-calculator">is more valuable</a>.</p>

                <p>
                    Calculators are necessarily constrained by the information we provide, but whilst certain inferences can be made from the data we do provide, they are agnostic as to some important factors that affect our behaviour and options; wealthier people, for example, have more choice as to where they live, and how they live. Nor do these calculators take into account our work which may have a footprint at odds with our private one. The reason for this is to avoid double counting emissions - if you make cars, the car owners are responsible for those emissions, not the manufacturer; but since these are personal emissions calculators, this limits their value.                    
                </p>

                <p>
                    And finally, they are snapshots, which don't take into account our history, or future plans. If we assume that carbon emissions must peak, and decline, in order to meet the goals set in Paris in 2015, the effect on individual <a href="https://www.carbonbrief.org/analysis-why-children-must-emit-eight-times-less-co2-than-their-grandparents">lifetime carbon budgets</a> is startling.
                </p>

                <h3>Recommendations</h3>
                <p>
                    <ul class={styles.list}>
                        <li>Do not offer the option to share the results of footprints because they are free of important context, and are not comparable; but do share the calculator itself.</li>
                        <li>Show workings and explain assumptions.</li>
                        <li>Follow, or reference, <a href="https://www.footprintnetwork.org/content/images/uploads/Ecological_Footprint_Standards_2009.pdf">Ecological Footprint Standards (PDF)</a>.</li>
                        <li>Indicate the implicit, background carbon footprint.</li>
                        <li>Include and explain carbon dioxide-equivalents.</li>
                    </ul>
                </p>

                <h3 id="conclusion">Conclusion</h3>

                <p>Carbon footprint calculators have value as an introduction to the consequences of our choices, and as a starting point for examining our interdependency, lack of autonomy, and the limits pertaining to personal action.</p>

                <p>Footprints would be improved by making the implicit cost of services explicit. This intrinsic, background value for a society is the floor below which individual action cannot take us, and which can only be breached by direct, participatory action that brings about policy change.</p>

                <p>
                    <div class={styles.small}>
                        <a class={styles.bang} href="#top">Top</a>
                    </div>
                </p>

                </section>
            <section id="discrepancy" class={styles.card}>
                <p>* There is a discrepancy hidden in these figures: 
                    <span class={styles.quote}>
                        4.73 tonnes * 7.55 billion = 35.70 billion tonnes of CO2
                    </span>
                    And yet,
                    <span class={styles.quote}>
                        36.44 billion tonnes / 7.55 billion people = 4.83 tonnes of CO2
                    </span>
                    There is a 2% of emissions not accounted for,
                    <span class={styles.quote}>
                        1 - (36.44 billion tonnes / 35.70 billion tonnes) ~2%
                    </span>
                    This is explained by the 'bunker fuels', or 'International transport', that is emissions for which no one has taken credit.

                    <div class={styles.small}>
                        <a href="#data">Return to current emissions</a>
                    </div>
                </p>
            </section>
            <section id="profile" class={styles.card}>
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
                        <li>Electricity & Gas 166kWh per month, 50% renewable</li>
                        <li>Rubbish: relatively low, little waste, recycle</li>
                        <li>Eat out once a week</li>
                        <li>No car, or bike, etc. Rent rarely.</li>
                        <li>10 kilometres per week bus</li>
                        <li>10 kilometres per week train</li>
                        <li>4 hours flying per year</li>
                    </ul>
                    <span class={styles.small}>
                        <a href="#table">Return to emissions table</a>
                    </span>
                </p>
            </section>
            <section class={styles.card}>
                <p>
                    <span class={styles.published}>Published: {new Date('Sat 27 March 2021').toDateString()}</span>
                    <span class={styles.published}>Edited: {new Date('Mon 29 March 2021').toDateString()}</span>
                    <span class={styles.published}>Edited: Use IPCC values for natural carbon sinks {new Date('Fri 2 April 2021').toDateString()}</span>
                    <span class={styles.published}>Edited: Added David MacKay quote {new Date('Tues 6 April 2021').toDateString()}</span>
                </p>
            </section>
            <Links.RelatedLinks links={[{href:'sustainability',title:'Sustainability'}, {href:'carbon',title:'Carbon primer'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default CarbonFootprint;    