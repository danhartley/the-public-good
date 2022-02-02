import Layout from 'components/layout/layout';
import Tables from 'components/tables/tables';
import Links from 'components/links/Links';
import Published from 'components/published/published';
import Top from 'components/top/top';
import styles from 'pages/pages.module.scss';

const CarbonFootprint = () => {
    return (
        <Layout header="Will people or policies save the planet?" rt="8 to 9" title="Climate crisis | Will people or policies save the planet?" description={'An introduction to greenhouse gas emissions, carbon budgets, and personal carbon footprint calculators with comparison of 5 calculators.'}>

            <section>

                <h2 id="intro">Societal changes are needed to avert the climate crisis but the knowledge of individuals is powerful.</h2>

                <p>
                We use measurements to determine our starting point, and to assess progress. According to Our World in Data (2017):
                <ul class={styles.dashedItemsList}>
                    <li>Per capita CO2 emissions: <Links.EL link={{source:'https://ourworldindata.org/grapher/co-emissions-per-capita?tab=chart'}}>4.73 tonnes</Links.EL>.</li> 
                    <li>Total CO2: <Links.EL link={{source:'https://ourworldindata.org/co2-emissions'}}>36.44 billion tonnes of CO2</Links.EL>.</li>
                    <li>Total CO2e: <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>49.36 billion tonnes of CO2e</Links.EL> (2016).</li>
                    <li>World population: <Links.EL link={{source:'https://ourworldindata.org/world-population-growth'}}>7.55 billion</Links.EL> <a id="data" href="#discrepancy">*</a>.</li>
                </ul>
                <div class={styles.inset}>
                    <div>Emissions have risen worldwide since 2017 with the exception of 2020 when they fell; <Links.EL link={{source:'https://www.nature.com/articles/d41586-021-00090-3'}}>Nature, 6.4% (2.3 billion tonnes)</Links.EL>, <Links.EL link={{source:'https://www.iea.org/articles/global-energy-review-co2-emissions-in-2020'}}>IEA 5.8%</Links.EL>, <Links.EL link={{source:'https://carbonmonitor.org/'}}>Carbon Monitor 4%</Links.EL>.</div>
                    <span><Links.EL link={{source:'https://carbonmonitor.org/'}}>Daily estimates</Links.EL> are also available from Carbon Monitor.</span>
                </div>                
                </p>
                <p>
                    <h3>Carbon budgets</h3>

                    <p>
                        <div class={styles.quote}>
                        The cumulative amount of carbon dioxide (CO2) emissions permitted over a period of time to keep within a certain temperature threshold. <Links.EL link={{source:'https://carbontracker.org/carbon-budgets-explained/'}}>Carbon Tracker</Links.EL>
                        </div>
                    </p>

                    <p>
                        The <Links.EL link={{source:'https://essd.copernicus.org/articles/12/3269/2020/'}}>global carbon budget</Links.EL>, published annually, provides an account of the balance between carbon sources - emissions - and sinks. The movement of carbon atoms betweens sinks and sources is called the <Links.EL link={{source:'https://oceanservice.noaa.gov/facts/carbon-cycle.html'}}>carbon cycle</Links.EL>, and it is perturbations in this cycle which cause global warming.
                        Since 1950 around <Links.EL link={{source:'https://www.nature.com/articles/s41598-018-24241-1.pdf?origin=ppub">48±7%</a> of anthropogenic emissions have been taken up by <a href='}}>natural sinks</Links.EL>, though at variable rates.
                        Due to <Links.EL link={{source:'https://en.wikipedia.org/wiki/CO2_fertilization_effect'}}>carbon fertilisation</Links.EL>, and other factors, including increased use of nitrogen, natural sinks have been taking up more carbon dioxide, though <Links.EL link={{source:'https://www.nature.com/articles/d41586-021-00737-1'}}>this upward trend may not continue</Links.EL>.
                    </p>
                    <p>                         
                        <div>Natural sinks cannot be relied on indefinitely, and become sources of emissions if they are removed or die. IPCC calculations and Nationally Determined Contributions <Links.EL link={{source:'https://unfccc.int/process-and-meetings/the-paris-agreement/nationally-determined-contributions-ndcs/nationally-determined-contributions-ndcs'}}>NDAs</Links.EL>, take into account natural sources. </div>
                    </p>
                    <p>
                        Negative emissions refer to greenhouse gases, primarily carbon dioxide, removed from the atmosphere, either though biogenic means (including planting trees, and restoring mangrove forests and sea grasses), or by artificial methods such as <Links.EL link={{source:'https://www.iea.org/reports/direct-air-capture'}}>direct air capture</Links.EL> (DAC).                
                    </p>
                    <p>
                        Carbon capture and storage, and carbon offsetting are used, at best, to keep emissions from an activity carbon neutral; they do not reduce carbon already in the atmosphere.
                    </p>
                </p>

                <h3>CO2e</h3>

                <p>
                    Unfortunately CO2 is not the only greenhouse gas; emissions from methane, nitrous oxide, and <Links.EL link={{source:'https://en.wikipedia.org/wiki/Fluorinated_gases'}}>Fluorinated gases</Links.EL> (F-gases) must also be taken into account. Total emissions are measured using <Links.EL link={{label:'Our World in Data, How do we quantify greenhouse gas emissions?', source:'https://ourworldindata.org/greenhouse-gas-emissions#how-are-greenhouse-gases-measured'}}>carbon dioxide-equivalents</Links.EL>.
                    <p>
                        The total figure for all greenhouse gas emissions is therefore higher, more than <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>50 billion tonnes of CO2e</Links.EL>.
                    </p>
                </p>

                <h3>Carbon footprints</h3>

                <p>
                    <div class={styles.quote}>
                        <div>The total greenhouse gas (GHG) emissions caused by an individual, event, organisation, service, or product, expressed as carbon dioxide equivalent. <Links.EL link={{source:'https://en.wikipedia.org/wiki/Carbon_footprint'}}>Wikipedia</Links.EL></div>                    
                    </div>
                </p>

                <p>The climatologist, Michael E Mann, argues that whilst individual action is important, it must not distract from policy. In an article for Time, <Links.EL link={{source:'https://time.com/5669071/lifestyle-changes-climate-change/'}}>Lifestyle Changes Aren’t Enough to Save the Planet</Links.EL>. Here’s What Could, he writes, 
                    <div class={styles.quote}>
                        We need systemic changes that will reduce everyone’s carbon footprint, whether or not they care.
                    </div>          
                </p>

                <p>
                    <div>The debate around carbon footprints is often about who is <Links.EL link={{source:'https://www.bbc.com/future/article/20200618-climate-change-who-is-to-blame-and-why-does-it-matter'}}>responsible</Links.EL> for carbon emissions.</div>
                </p>

                <p>
                    <div>In 2002 BP rebranded itself as 'Beyond Petroleum'; as part of their <Links.EL link={{source:'https://www.nytimes.com/2006/08/14/opinion/14kenney.html'}}>marketing campaign</Links.EL> they released a carbon footprint calculator which popularised the concept. Following the <Links.EL link={{source:'https://en.wikipedia.org/wiki/Deepwater_Horizon_oil_spill'}}>Deepwater Horizon disaster</Links.EL> in 2006, BP sold off its <Links.EL link={{source:'https://www.reuters.com/article/us-bp-solar/bp-turns-out-lights-at-solar-business-idUSTRE7BK1CC20111221?edition-redirect=uk'}}>solar</Links.EL> (2011) and <Links.EL link={{source:'https://www.reuters.com/article/us-bp-wind-idUSBRE93208B20130403'}}>wind</Links.EL> (2013) assets.</div>
                </p>

                <p>
                    <div>In his article, <Links.EL link={{source:'https://mashable.com/feature/carbon-footprint-pr-campaign-sham'}}> The carbon footprint sham</Links.EL>, Mark Kaufman argues the burden of responsibility for global warming must be placed squarely on the fossil fuel industry. He concludes,
                        <div class={styles.quote}>
                        BP wants you to accept responsibility for the globally disrupted climate. Just like beverage industrialists wanted people to feel bad about the amassing pollution created by their plastics and cans, or more sinisterly, tobacco companies blamed smokers for becoming addicted to addictive carcinogenic products. We’ve seen this manipulative playbook before, and BP played it well.
                        </div>
                    </div>
                </p>

                <h3>Carbon footprint of societies</h3>

                <p>
                    <div>In 2008 MIT <Links.EL link={{source:'https://news.mit.edu/2008/footprint-tt0416'}}>calculated</Links.EL> that even the least extravagant person in the US had a carbon footprint of 8.5 tonnes or 42.5% of the average which, at the time, was 20 tonnes.
                        <div class={styles.quote}>
                        Regardless of income, there is a certain floor below which the individual carbon footprint of a person in the U.S. will not drop.
                        </div>
                    </div>
                    <div>
                        If we extend this finding to all rich countries, it would be impossible for even the most diligent individual to live sustainably; before they had eaten one mouthful of food or taken one hot shower, they would be living beyond the capacity of the planet to support them.
                    </div>
                    <div>
                    <p>
                        <div><em>A <Links.EL link={{source:'https://pubs.acs.org/doi/10.1021/es803496a#'}}>paper</Links.EL> from 2009, puts the domestic share of emissions at 80%, the world average at 73%, and most European countries in the 60s. (Ed. {new Date('Mon 29 March 2021').toDateString()})</em></div>
                    </p>
                    </div>
                </p>

                <h3>Benefits of carbon footprints</h3>

                <p>
                    <ul class={styles.dashedItemsList}>
                        <li>Provide a basic framework for how to think about climate change numbers.</li>
                        <li>Show our dependency on fossil fuels.</li>
                        <li>Can establish good practices and measurable outcomes e.g. the <Links.EL link={{source:'https://www.footprintnetwork.org/content/images/uploads/Ecological_Footprint_Standards_2009.pdf'}}>Ecological Footprint Standards</Links.EL> (PDF)</li>
                    </ul>
                </p>

                <h3>Downsides of carbon footprints</h3>
                
                <p>
                    <ul class={styles.dashedItemsList}>
                        <li>Individual profiles are primarily based on averages with minimal personal data.
                            <div>For a comparison compare one <Links.EL link={{source:'https://calculator.farmcarbontoolkit.org.uk/'}}>carbon footprint calculator for UK farmers</Links.EL> which takes 30 mins to 2 hours to complete.</div>
                        </li>
                        <li>Tracing back carbon emissions is hard; many calculations are derived from assumptions based on figures for large units, usually countries.</li>
                        <li>The background or implicit value for the region where the user lives is not separated out, although an average for that region is often given.</li>
                        <li>There is no oversight, and no formal process of review; this makes it hard for the public to know which calculators are accurate or reliable.</li>
                        <li>Our good intentions can be undone by <Links.EL link={{source:'https://iopscience.iop.org/article/10.1088/1748-9326/ab9968'}}>primary cognitive biases</Links.EL>.</li>
                    </ul>
                </p>

                <h2 id="calculators">Individual carbon footprint calculators</h2>

                <ul class={styles.dashedItemsList}>
                    <li>
                        <span><Links.EL link={{source:'https://www.postcarbon.org/our-people/william-rees/'}}>William Rees</Links.EL> and Mathis Wackernagel use the term <Links.EL link={{source:'https://en.wikipedia.org/wiki/Ecological_footprint'}}>ecological footprint</Links.EL> for the first time in an academic publication.</span>
                    </li>
                    <li>
                        <span>BP launches the first <Links.EL link={{source:'https://mashable.com/feature/carbon-footprint-pr-campaign-sham/?europe=true'}}>carbon footprint calculator</Links.EL> and spends millions promoting the concept.</span>
                    </li>
                    <li>
                        <span>BP launches a <Links.EL link={{source:'https://www.knowyourcarbonfootprint.com/'}}>second carbon calculator</Links.EL>. It does not receive a favourable <Links.EL link={{source:'https://twitter.com/bp_plc/status/1186645440621531136'}}>reception</Links.EL>.</span>
                    </li>
                </ul>

                <p>There are numerous carbon footprint calculators. I have listed a few that seem more or less accurate but I would recommend using three or four to obtain an average. Any value should be treated as a rough approximation. As emissions are tied to particular goods and services, we can expect greater accuracy and specificity.</p>

                <p><Tables.Calculators></Tables.Calculators></p>

                <p>
                    <div>NB Not all calculators are the same. The Global Food Network makes clear their <Links.EL link={{source:'https://www.footprintnetwork.org/footprint-calculator-faq/#gen1'}}>calculator</Links.EL> is not a carbon calculator but a Footprint calculator, with two parts: an Ecological Footprint (a true footprint, measured by area) and a figure for CO2 emissions (a carbon footprint).</div>
                </p>

                <h3 id="comparison">Results from 5 calculators</h3>

                <p>I used 5 calculators to find my carbon footprint. <span class={styles.super}><a id="table" href="#profile">+</a></span></p>

                <Tables.Calculators withScores={true}></Tables.Calculators>

                <p><strong>Why are there such large discrepancies between footprints?</strong></p>

                <p>Calculators accept a variety of information, and differ as to external baseline data and assumptions; this does not necessarily make one better than another; all of these calculators are well researched, and independently valuable, but direct comparison between them is not possible. Discrepancies are a cautionary reminder that, when dealing with climate change figures, it is more constructive to think in terms of ranges than specific figures, and that the ranges themselves fluctuate. The value of our footprint is seductive, an effective means of engagement; how the number was derived <Links.EL link={{source:'https://mossy.earth/methodologies/carbon-footprint-calculator'}}>is more valuable</Links.EL>.</p>

                <p>
                    Calculators are necessarily constrained by the information we provide, but whilst certain inferences can be made from the data we do provide, they are agnostic as to some important factors that affect our behaviour and options; wealthier people have more choice as to where they live, and how they live. Nor do these calculators take into account our work which may have a footprint at odds with our private one. The reason for this is to avoid double counting emissions - if you make cars, the car owners are responsible for those emissions, not the manufacturer; but since these are personal emissions calculators, this limits their value.                    
                </p>

                <p>
                    And finally, they are snapshots, which don't take into account our history, or future plans. If we assume that carbon emissions must peak, and decline, in order to meet the goals set in Paris in 2015, the effect on individual <Links.EL link={{source:'https://www.carbonbrief.org/analysis-why-children-must-emit-eight-times-less-co2-than-their-grandparents'}}>lifetime carbon budgets</Links.EL> is startling.
                </p>

                <h3>Recommendations</h3>
                <p>
                    <ul class={styles.dashedItemsList}>
                        <li>Do not offer the option to share the results of footprints because they are free of important context, and are not comparable; but do share the calculator itself.</li>
                        <li>Show workings and explain assumptions.</li>
                        <li>Follow, or reference, <Links.EL link={{source:'https://www.footprintnetwork.org/content/images/uploads/Ecological_Footprint_Standards_2009.pdf'}}>Ecological Footprint Standards (PDF)</Links.EL>.</li>
                        <li>Indicate the implicit, background carbon footprint.</li>
                        <li>Include and explain carbon dioxide-equivalents.</li>
                    </ul>
                </p>


                <h2 id="individualActs">Individual acts</h2>

                <p>Carbon footprints are sometimes used as a proxy for individual acts, which are then placed in opposition to political or social acts, limiting choice to one or the other, either/or.</p>

                <p>One reason for this polarity is that fossil fuel companies have promoted the idea that emissions reduction is the responsibility of individuals, and one of the tools they have used is the carbon footprint; not only was BP the first to popularise the concept, they have released carbon footprint calculators twice, in 2006 and 2020, to coincide with campaigns defending or stating their green credentials.</p>

                <p>Do individual acts detract from systemic changes that might be more productive?</p>

                <p>Two recent studies provide evidential support that we keep a tally of our moral acts, and are quick to call in our debt; acceptance of <Links.EL link={{source:'https://www.nature.com/articles/s41558-019-0474-0.epdf?referrer_access_token=7hony2jeIBDx312LZL9Gf9RgN0jAjWel9jnR3ZoTv0Nfy3PIgvrwnNXQzIbXH8z1u5o1DVXJKOCBERWXBQ6n3i7p3mfuhk8O9_ARe2av1P-d3pfhbb06zqr_k1ZVK_HD8tEj_6p2jxRJQxwkRFQWahxt7ZYR4Ws1ZVY58B8B8F6TJ6aO9hG-1I9AhErSlutuYsCZeDXvm9-XQaK48r5_g_7ekTO-pGXMZtdqirjpVkfWgFjWyxnVqqn0_h9toXZES8i2jx06Io6c6_qOC8Bd6VHPqm72I77ZCjw2ljeahJRxzha7MfU5fOL8oy4OqgnRM5K5ySLjcAfgtZx4iUYU7Q%3D%3D&tracking_referrer=www.usatoday.com'}}>one tax</Links.EL>, even at the lower end of a range, lessens acceptance of further taxation. A paper in <Links.EL link={{source:'https://www.nature.com/articles/nclimate3316'}}>Nature</Links.EL> that looked at how small changes might adversely affect willingness to accept larger ones, concluded,
                    <div class={styles.quote}>
                        It appears that, while people are generally concerned about societal problems such as climate change, they may not be willing to incur large costs to achieve a solution. With the perceived existence of a low-cost solution (a nudge), motivated reasoning may tempt some to exaggerate its ultimately small environmental impact. This may explain why participants generally thought the nudge was as or more effective at reducing pollution than the carbon tax. However, even those who knew that the carbon tax is more effective than the green energy nudge were discouraged from implementing the tax when a nudge became available, suggesting that crowding-out is not merely the result of incorrect perceptions of relative effectiveness. When these perceptions are corrected at the time of decision, however, motivated reasoning is difficult and crowding-out disappears.
                    </div>
                    A little hope in the final sentence.
                </p>

                <p>The choice, however, is ours, we can save electricity and water, become a vegan and run for office. If we think we can combine personal and political action, then we should, and trust others to do the same.</p>

                <p>
                    <span>What of the actions themselves, do they have <Links.EL link={{source:'https://en.wikipedia.org/wiki/Intrinsic_value_(ethics)'}}>intrinsic value</Links.EL>? Does knowing the average emission of a transatlantic flight, or the carbon dioxide-equivalent per kilo of beef mean anything?</span>
                </p>

                <p>A decision which may involve inconvenience, loss of income, or the forfeit of a pleasure, is sustained more readily when it has solid foundations, for then the reason behind, and the need for, the change, is clear, even if any ultimate benefit that accrues is indiscernible.</p>

                <p>It is against the grain for most to forego gratification or gain, but it is hard to ignore that which is right to do, when that right has been established and understood. We may call this conscience, sense of duty, or moral imperative; and we may discover that acting in accordance with our beliefs and our understanding, is less disruptive, and more sustaining, than we imagined.</p>

                <h2 id="conclusion">Conclusion</h2>

                <p>Carbon footprint calculators have value as an introduction to the consequences of our choices, and as a starting point for examining our interdependency, lack of autonomy, and the limits pertaining to personal action.</p>

                <p>Footprints would be improved by making the implicit cost of services explicit. This intrinsic, background value for a society is the floor below which individual action cannot take us, and which can only be breached by direct, participatory action that brings about policy change.</p>

                <Top></Top>

                </section>
            <section id="discrepancy">
                <p>* There is a discrepancy hidden in these figures: 
                    <div class={styles.quote}>
                        4.73 tonnes &#215; 7.55 billion = 35.70 billion tonnes of CO2
                    </div>
                    And yet,
                    <div class={styles.quote}>
                        36.44 billion tonnes / 7.55 billion people = 4.83 tonnes of CO2
                    </div>
                    There is a 2% of emissions not accounted for,
                    <div class={styles.quote}>
                        1 - (36.44 billion tonnes / 35.70 billion tonnes) ~2%
                    </div>
                    This is explained by the 'bunker fuels', or 'International transport', that is emissions for which no one has taken credit.

                    <div>
                        <Links.IL link={{source:'climate-crisis/will-people-or-policies-save-the-planet/#data'}}>Return to current emissions</Links.IL>
                    </div>
                </p>
            </section>
            <section id="profile">
                <p>
                    + My profile
                    <ul class={styles.dashedItemsList}>                        
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
                    <div>
                        <Links.IL link={{source:'climate-crisis/will-people-or-policies-save-the-planet/#table'}}>Return to emissions table</Links.IL>
                    </div>
                </p>
            </section>

            <Published strDate='Sat 27 March 2021' edited={[{strDate:'Mon 29 March 2021'},{strDate:'Fri 2 April 2021',text:'Use IPCC values for natural carbon sinks'},{strDate:'Tues 6 April 2021',text:'Added David MacKay quote'},{strDate:'Thu 13 May 2021',text:'Rewrite'}]}></Published>

            <Links.RelatedLinks links={[{value:'sustainability',text:'Sustainability'}, {value:'climate-crisis/carbon-element-of-life',text:'Carbon - element of life'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default CarbonFootprint;    