import Layout from 'components/layout/layout';
import Tables from 'components/tables/tables';
import Links from 'components/links/Links';

import styles from 'pages/pages.module.scss';

const Change = () => {
    return (
        <Layout title="Change" description={'A hundred indecisions'} image='https://live.staticflickr.com/65535/51143928462_4df026babc_o.jpg'>
            <section class={styles.card}>

                <h1>Climate change - time yet for a hundred indecisions</h1>

                <div>
                    <div class={styles.bang}><a href="#background">Background</a><span class={styles.italic}> 3 minutes</span></div>
                    <div class={styles.bang}><a href="#energy">Energy</a><span class={styles.italic}> 6 minutes</span></div>
                    <div class={styles.bang}><a href="#conclusion">Conclusion</a><span class={styles.italic}> 1 minute</span></div>
                    <div class={styles.bang}><a href="#appendix">Appendix: How did we get here?</a><span class={styles.italic}> 4 minutes</span></div>
                </div>

                <h2 id="background">Background</h2>

                <h3>The potential for adverse consequences</h3>

                <div>
                    <span class={styles.quote}>
                    <a href="https://www.ipcc.ch/site/assets/uploads/2021/01/The-concept-of-risk-in-the-IPCC-Sixth-Assessment-Report.pdf">The concept of risk</a> - IPCC (PDF)
                    </span>
                </div>           

                <p>When Napoleon began his invasion of Russia in the summer of 1812, he did not imagine that his Grande Armée of almost 449,000 men would be reduced to 9,000 within a few months.</p>

                <p>Preparation had been <a aria-label="Wikipedia French invasion of Russia, Provisions and transportation" href="https://en.wikipedia.org/wiki/French_invasion_of_Russia#Provisions_and_transportation">extensive</a>, far greater than for any of his previous campaigns, but it was not enough; starvation, thirst, disease, and desertion accounted for the bulk of the army before a relatively mild winter decimated the remainder. Napoleon planned for the battles he had fought and won in central Europe, not the one he faced in Russia.</p>

                <h3>High hopes for low emissions</h3>

                <p>
                    In 1988 the World Meteorological Organisation <a href="https://en.wikipedia.org/wiki/World_Meteorological_Organization">WMO</a> established the Intergovernmental Panel on Climate Change <a href="https://en.wikipedia.org/wiki/Intergovernmental_Panel_on_Climate_Change">IPCC</a>. The IPCC was charged with reporting to the United Nations Framework Convention on Climate Change <a href="https://en.wikipedia.org/wiki/United_Nations_Framework_Convention_on_Climate_Change">UNFCCC</a> whose objective was to,
                    <span class={styles.quote}>
                        Stabilize greenhouse gas concentrations in the atmosphere at a level that would prevent dangerous anthropogenic (human-induced) interference with the climate system.
                    </span> 
                </p>

                <h3>Keeping score</h3>

                <p>The IPCC <a href="https://www.ipcc.ch/report/sixth-assessment-report-cycle/">reviews and collates</a> available data related to the climate in order to produce a synthesis report every 5-7 years, in addition to special reports on specific areas of concern, such as the <a href="https://www.ipcc.ch/srocc/">cryosphere</a>, or <a href="https://www.ipcc.ch/srccl/">land</a>. The next report, the sixth assessment of the impact of climate change, will also take into account <a href="https://www.ipbes.net/global-assessment">biodiversity and ecosystem services</a>.</p>

                <p>The IPCC has recorded a rise in temperature <a href="https://www.ncdc.noaa.gov/climate-monitoring/">1°C</a> <a href="https://www.ipcc.ch/sr15/faq/faq-chapter-1/">above pre-industrial levels</a> (1850–1900).</p>

                <p>This rise in temperature is a consequence of the increase of carbon dioxide in the atmosphere from around <a href="https://www.carbonbrief.org/met-office-atmospheric-co2-now-hitting-50-higher-than-pre-industrial-levels">278ppm</a> between 1750 and 1800 to ~419ppm <a href="https://www.co2.earth/daily-co2">today</a>.</p>

                <h3>Do we have a plan?</h3>

                <p>In accordance with the <a href="https://en.wikipedia.org/wiki/Paris_Agreement">Paris Agreement</a>, signed at <a href="https://unfccc.int/process-and-meetings/conferences/past-conferences/paris-climate-change-conference-november-2015/cop-21">COP21</a>, each country is required to present a Nationally Determined Contribution <a href="https://unfccc.int/process-and-meetings/the-paris-agreement/nationally-determined-contributions-ndcs/nationally-determined-contributions-ndcs">NDC</a> which should,
                    <span class={styles.quote}>
                        …embody efforts by each country to reduce national emissions and adapt to the impacts of climate change.
                    </span>
                    And,
                    <span class={styles.quote}>
                    Together, these climate actions determine whether the world achieves the long-term goals of the Paris Agreement and to reach global peaking of greenhouse gas (GHG) emissions as soon as possible and to undertake rapid reductions thereafter in accordance with best available science, so as to achieve a balance between anthropogenic emissions by sources and removals by sinks of GHGs in the second half of this century.
                    </span>
                </p>

                <p>Commitments have not been honoured,
                    <span class={styles.quote}>
                    After a year disrupted by the Covid-19 pandemic, nations representing only around 28% of global emissions registered new or updated “nationally determined contributions” (NDCs) on the UN’s official registry by the end of the year. Some big emitters did register their NDCs in time, including the UK and EU. But major absences included the US, India and China.
                    <div><a href="https://www.carbonbrief.org/analysis-which-countries-met-the-uns-2020-deadline-to-raise-climate-ambition">Carbon Brief Analysis: Which countries met the UN’s 2020 deadline to raise ‘climate ambition’?</a></div>
                    </span>
                </p>

                <p>As a result, <a href="https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions">global emissions continue to rise</a>.</p>

                <h3>Are there any other plans?</h3>

                <p>Quite a few. In addition to intergovernmental and government plans, there is the US <span><a href="https://www.congress.gov/116/bills/hres109/BILLS-116hres109ih.pdf">Green New Deal</a></span> (PDF), the EU <span><a href="https://ec.europa.eu/info/strategy/priorities-2019-2024/european-green-deal_en">European Green Deal</a></span>, <span><a href="Technology Zero Carbon Britain">Technology Zero Carbon Britain</a></span>, and <span><a href="https://web.stanford.edu/group/efmh/jacobson/Articles/I/CountriesWWS.pdf">100% Clean and Renewable Wind, Water, and Sunlight All-Sector Energy Roadmaps for 139 Countries of the World</a></span>.</p>

                <p>The 13th of the UN's own 17 Sustainable Development Goals <a href="https://sdgs.un.org/goals">SDGs</a>, Climate Action, targets climate change and its impacts.</p>
 
                <h2 id="energy">Energy</h2>

                <h3>Eternal summer shall not fade</h3>

                <p>Photosynthetic cells are probably <span><a href="https://en.wikipedia.org/wiki/Photosynthetic_efficiency#Efficiencies_of_various_biofuel_crops">less efficient</a></span> than photovoltaic cells at capturing energy from the sun.</p>

                <p>Photosynthesis, however, was not designed to solve a problem, the mechanisms by which it operates, though they vary, adhere only to the principle of natural selection. The products of photosynthesis, among them oxygen and energy in the form of carbohydrates, altered the environment, and thus enabled the evolution of almost all living things.</p>

                <p>Fossil fuels were a silent partner in this transformation, capturing carbon dioxide stored in plants and animals at a time when levels of carbon dioxide were far higher than they are today. These reserves were laid down over thousands of millenia many millions of years ago. By burning them we have upset this equilibrium, releasing in decades their long accumulated power. Playing ingeniously, impishly, with this asymmetry of time, we have opened a warehouse of jack-in-the-boxes.</p>

                <h3>The problem of energy density</h3>

                <p></p> 

                <p>
                    <div class={styles.quote}>
                        You can start explaining some of the limits and possibilities of everyday life or historical
                        progress by playing with energy densities: the more concentrated sources of energy give you
                        many great advantages in terms of their extraction, portability, transportation and storage costs,
                        and conversion options. 
                        <div><a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Vaclav Smil</a></div>
                    </div>
                </p>

                <p>The energy densities of coal, oil and gas make them useful as fuels. Contemporary fuels, renewables, are those which are replenished by the sun: wind, solar, hydroelectric. They are attractive because they don't emit carbon, but they have two drawbacks - they are intermittent, and less energy dense.</p>

                <p>
                    <div class={styles.quote}>
                    Energy density in MJ/kg:
                    <ul class={styles.unorderedList}>
                        <li>Wood - 16</li>
                        <li>Coal - 24</li>
                        <li>Crude oil - 44</li>   
                        <li><Links.InternalLink link={{'value': 'facts#energy', 'text': 'Energy densities'}}></Links.InternalLink></li>
                    </ul>                    
                    </div>
                </p>

                <h3>Had we but world enough and time</h3>

                <p>Renewables, also have low <a href="https://energyeducation.ca/encyclopedia/Energy_vs_power">power</a> densities meaning they require more space. This presents a dilemma when planning to transition to them. The obvious choice would be to reason that change takes time; the shift from wood to coal and the shift from coal to oil and gas were local, often ad hoc, and remain incomplete, many years since the changeover to alternatives began.</p>

                <Tables.PowerDensities></Tables.PowerDensities>            

                <div>
                    <div><span>*</span><a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Power density primer Vaclav Smil</a></div>
                    <div><span>+</span><a href="https://www.sciencedirect.com/science/article/pii/S0301421518305512">The spatial extent of renewable and non-renewable power generation John van Zalk, Paul Behrens</a></div>
                </div>

                <p>Higher values for renewables exist, but they are often in places - deserts, offshore - far from urban populations where energy demands are highest; this introduces the twin problems of transmission and storage. Locating energy close to demand is particularly hard for renewables due to competition for land (agriculture, amenity, housing), and nuclear (safety).</p>

                <p>Historical values for the power densities of renewables have proven to be on the low side (<a href="http://www.withouthotair.com/">MacKay</a>). This is good news, but it presents a conundrum; when is the right time to invest in a particular technology? Invest too soon, and we will be committed to unnecessarily inefficient infrastructure, too late, or too slowly, and we will miss potential gains. If governments set deadlines, companies may meet emissions targets by investing in improving existing technology instead of better, less resource intensive, technology that will take longer to test and deploy.</p>
                
                <p>Fossil fuels are the incumbent energy source, and if we are to replace them, it will entail adapting, extending and replacing existing infrastructure using more land at great cost both financially and materially. There may be, however, gains that quickly override these costs, to health, wealth, and societal well-being.</p>

                <p>Do we also need to make a case for change that involves disruption, cost and possibly further injustice, one that favours the future over the present? If we think it appropriate to force sudden change, the consequences may be painful, and the burden of cost fall unfairly.</p>

                <h3>Unusual practices</h3>

                <p>Business as usual is a vague term for, unless it is merely a proxy for cynical profiteering, it assumes stasis, whereas ideas, companies, plans, people, and markets are constantly in flux. What we are contemplating is novel, and extraordinary, arguably counter to our energy demands, because we wish to replace our existing sources with others that are, at least in the short term, less efficient. This problem is not intractable, but resistance to change comes not only from protectionism and self interest, but from practical considerations that encompass physics, technology, time, resources, knowledge and ability.</p>
                    
                <p>Historically, we can expect change to be unpredictable, jagged and with effects that are unequally distributed. A counter argument can be made that unprecedented action is required, and that more equality will help us to make the right decisions, for by accounting for everyone, on equal terms, rich and powerful countries will no longer be able to export their responsibility, or turn a blind eye to the effects of consumption which are realised elsewhere, and thereby come to accept solutions for living that are balanced and manageable over time.</p>
                
                <p>All other life on the planet has reason to see our species as a single, homogenous threat, and may regard our internecine problems as irrelevant when faced with their own unprecedented extinction. As a species we have done nothing for the planet, but it is possible that one day intelligent, disruptive humanity may prove its worth by, for example, preventing an asteroid from hitting the earth.</p>

                <h3>Mind the GDP</h3>

                <p>Energy demand is falling in rich countries. In the <a href="https://ourworldindata.org/energy/country/united-states?country=~USA">US</a>, for example, energy usage is down from a peak in 1973 of 95.5 kWh per day to 79.9 in 2019, despite the <a href="https://blog.ucsusa.org/peter-oconnor/energy-efficiency-what-is-the-rebound-effect-946">rebound effect</a>. It is conceivable that people will choose to consume less, and that societies will measure their progress on a broad set of values and principles rather than focusing on gross domestic product <a href="https://en.wikipedia.org/wiki/Gross_domestic_product">GDP</a>. The Dasgupta report, commissioned by the UK treasury, sets out the following case,
                    <span class={styles.quote}>
                    The options [set out by this report] for change are geared towards three broad, interconnected transitions, requiring humanity to ensure that our demands on Nature do not exceed its supply, and that we increase Nature’s supply relative to its current level; change our measures of economic success to help guide us on a more sustainable path; and transform our institutions and systems – in particular our finance and education systems – to enable these changes and sustain them for future generations.
                    <div>
                        <a aria-label="The Economics of Biodiversity: The Dasgupta Review" href="https://www.gov.uk/government/publications/final-report-the-economics-of-biodiversity-the-dasgupta-review">The Economics of Biodiversity: The Dasgupta Review</a>
                    </div>
                    </span>
                </p>

                <h3>Just claim</h3>

                <p>Rich countries are touchy on the subject of <a href="https://ourworldindata.org/contributed-most-global-co2">historical emissions</a>. They may be factored in to emissions budgets, but countries that have recently industrialised claim, at the very least, the right to lift their people from want, and to enjoy the benefits of affordable energy.</p>

                <p>US vs. Nigeria
                    <span class={styles.quote}>
                    Nigeria is predicted to be home to more than 1 billion people by 2100. The per capita CO2 emissions (2017) for Nigeria was <a href="https://ourworldindata.org/co2/country/nigeria#per-capita-how-much-co2-does-the-average-person-emit">.68 tonnes</a>. The figure for the US in the same year was <a href="https://ourworldindata.org/co2/country/united-states?country=~USA#per-capita-how-much-co2-does-the-average-person-emit">16.16 tonnes</a>; that is a US citizen, on average, uses almost 24 times the resources of a Nigerian.
                    </span>
                </p>

                <h3>Population</h3>

                <p>The population of rich, industrialised countries has increased slightly or fallen in recent decades.</p>

                <p>The <a aria-label="Wikipedia article: Income and fertility" href="https://en.wikipedia.org/wiki/Income_and_fertility">correlation</a> between economic development and fertility is assumed to be either negative (fertility falls with development), or follows the J-Curve (inverse correlation followed by increased fertility but to a level below the <a href="https://en.wikipedia.org/wiki/Total_fertility_rate#Replacement_rates">replacement rate</a>).</p>

                <p>The majority of studies <span><a aria-label="UN Department of Economic and Social Affairs: Population Dynamics" href="https://population.un.org/wpp/Graphs/DemographicProfiles/Line/900">predict</a></span> the <span><a aria-label="Our World in Data: global population growth" href="https://ourworldindata.org/world-population-growth#how-has-world-population-growth-changed-over-time">global population</a></span> will continue to grow; neither war nor pestilence has caused long term decline.</p>

                <p>What might the future hold?</p>

                <p>In our first scenario, growth comes to an end because - for the first time in human history - every region of the world has sufficient resources to feed and house its inhabitants.</p>
                
                <p>In a second scenario, population growth is halted for negative reasons, not from choice, but because the planet is unable to provide for everyone, and wealth remains unequally distributed.</p>

                <p>A third scenario is that we limit population growth. There is no clear mechanism by which this can be done fairly.</p>

                <p>If we aspire to equality in the distribution of goods, and to end practices that are damaging to the planet, people in rich countries (those of today and tomorrow) will need to live with less.</p>
                
                <h2 id="conclusion">Conclusion</h2>

                <p>History has caught up with us. The problem with fossil fuels is not that burning them releases carbon, it is that we are dependent on them, and we have little time in which to overcome our addiction.</p>

                <p>Which brings us back to the IPCC and their carefully constructed <span><a aria-label="IPCC Guide to Uncertainty (PDF)" href="https://www.ipcc.ch/site/assets/uploads/2017/08/AR5_Uncertainty_Guidance_Note.pdf">matrix</a></span> of probabilities and uncertainties. The future is unlikely to be a clear path agreed upon by all, but a hotchpotch of competing ideas, ideals, protest, chicanery and ingenuity. The emergence of citizen's assemblies may play an important part, reflecting popular convictions that traditional, partisan politics are unable to represent. The French government legislated for a <a href="https://www.theguardian.com/business/2021/apr/12/france-ban-some-domestic-flights-train-available-macron-climate-convention-mps">ban</a> on some internal flights, following a (watered down) recommendation proposed by the <a href="https://www.conventioncitoyennepourleclimat.fr/">Convention Citoyenne pour le Climat</a>. The UK government's <a href="https://www.gov.uk/government/publications/the-ten-point-plan-for-a-green-industrial-revolution">10 point plan on climate change</a> echoes, in part, the findings of the <a href="https://www.climateassembly.uk/">Climate Assembly UK</a>. The <a href="https://globalassembly.org/">Global Assembly</a> has a commendably broad constituency but lacks an accountable body.</p>

                <p><a href="https://en.wikipedia.org/wiki/Pierre-Simon_Laplace">Pierre-Simon Laplace</a>, an examiner of Napoleon when he attended the École Militaire, was on the panel selected in 1790, by another assembly, the <a href="https://en.wikipedia.org/wiki/National_Constituent_Assembly_(France)">Assemblée nationale constituante</a>, to establish a <a href="https://en.wikipedia.org/wiki/History_of_the_metric_system#Implementation_in_Revolutionary_France">metric system</a>. The new system of weights and measures which unified what until then had been patchwork of regional and local measures, proved useful and durable. The <a href="https://en.wikipedia.org/wiki/French_Republican_calendar">metric calendar</a> which respected neither tradition nor planetary orbits, lasted just 12 years from 1793 to 1805, except for a 19 day reprieve in 1871.</p>

                <p>The IPCC also sets dates, wholesome round numbers that resonate with purpose and authority, and are quite arbitrary. The roadmaps and pathways described do not bear the pastoral stamp of the First Republic, but they are something.</p>

                <p>We have drawn our lines in the sand and must hope the tide does not obliterate them.</p>

                </section>

                <section class={styles.card}>

                <h2 id="appendix">How did we get here?</h2>

                <h3>Controlling fire</h3>

                <p>The earliest supported findings of <a href="https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans">controlled use of fire</a> are from Wonderwerk, South Africa, 1 million years ago, but <span class={styles.italic}>Homo erectus</span> may have done so <a aria-label="Royal Society Article, The discovery of fire by humans: a long and convoluted process" href="https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0164">much earlier</a>. </p>

                <p>Evidence of fire stimulation and preservation is found throughout our ancestors, and <span class={styles.italic}>Homo erectus</span>, from whom we evolved, had a brain 50% bigger than its predecessor, <span class={styles.italic}>Homo habilis</span>. These skills were likely critical to the evolution of our own species; we are poorly adapted to survive without the ability to control fire to keep warm, and to <a aria-label="Control of Fire in the Paleolithic: Evaluating the Cooking Hypothesis by Richard Wrangham" href="https://www.journals.uchicago.edu/doi/pdfplus/10.1086/692113">cook</a> (PDF).</p>

                <p>More energy enabled us to do less work to stay alive, and in response large brains, best suited to profit from thinking time, evolved. So too, our dependence on energy.</p>

                <h3>The transition to coal</h3>

                <p>
                    The transition from wood to coal is productive; more powerful tools and machinery can be introduced into existing setups relatively quickly. Coal was the dominant fuel until well into the twentieth century when new oil and gas reserves began to be exploited. Yet extraction today is higher in absolute terms than it has ever been. 
                    <div class={styles.quote}>
                        <div>Coal accounts for ~27% of world energy consumption by source. </div>
                        <div>Coal provided 43,849 terra-watt hours in 2019, compared to 16,140 terra-watt hours in 1965.</div>
                        <div><a href="https://ourworldindata.org/energy-mix">Our World in Data | Energy Mix</a></div>
                    </div>
                    Coal remains the primary source of energy in China (<a href="https://ourworldindata.org/energy/country/china?country=~CHN">57.64%</a>).
                </p>

                <h3>First emitter</h3>

                <p> 
                    <div class={styles.quote}>
                        Britain was terribly well endowed with coal: when the Revolution started, the amount of carbon sitting in coal under Britain was roughly the same as the amount sitting in oil under Saudi Arabia. <div><a href="https://www.withouthotair.com/c1/page_6.shtml">Sustainable Energy - without the hot air David JC MacKay</a></div>
                    </div>
                    In 1965 the UK was dependent on coal for 59% of its energy needs; dwindling reserves, the discovery of North Sea Gas, and laterly support for renewables has seen a shift in its energy mix. By 2019 coal supplied just <span><a href="https://ourworldindata.org/energy/country/united-kingdom?country=~GBR">3.35%</a> of energy, less than half that of wind power (7.29%)</span>.
                </p>

                <h3>The transition to oil</h3>  

                <p>The transition from coal to oil is localised; some countries are still undergoing the transition to coal, and some of them may limit their use of oil.</p>

                <p>Adoption of new sources of energy takes time, and dependents on availability and cost both of which vary widely.</p>

                <h3>The dash for gas</h3>

                <p>Between 1967–1977, appliances in 35 million homes in the UK <a href="https://www.sciencedirect.com/science/article/abs/pii/S2210422417301909">were converted</a> to run on natural gas instead of manufactured gas. It was a success, though the cost was <a aria-label="UK House of Commons debate: Gas Conversion Programme" href="https://www.theyworkforyou.com/debates/?id=1970-02-23a.814.7">higher than expected</a>. Researchers at Keele University are now <a href="https://hydeploy.co.uk/">experimenting</a> with introducing hydrogen to the natural gas supply; tests currently introduce 20% hydrogen by volume (7% by energy).</p>                

                <h3>Fracking</h3>

                <p>The expansion of hydraulic fracking in the US has changed the country's <a href="https://ourworldindata.org/energy/country/united-states?country=~USA">energy mix</a>. In 2008 coal and gas each accounted for around 24%; by 2019 coal was down to 11%, gas up to 32%.</p>

                <h3>Powering down, the transition to renewables</h3>

                <p>As our energy demands have increased, so have our emissions, but the fuels we favour emit less carbon when burnt. In this respect, wood is less innocent than coal, and natural gas and oil an improvement on coal. This has led to the disingenuous claim that gas is a 'clean' fossil fuel.
                    <div>
                    <Links.InternalLink link={{'value': 'facts#fuel_emissions', 'text': 'Fuel emissions'}}></Links.InternalLink>
                    </div>
                </p>

                <p>Renewables have far lower emissions even accounting for construction and extraction costs. Hydrogen is for now the anomaly for though it has zero emissions during combustion its production covers a spectrum of emissions rates, and <a aria-label="Petrofac article: the difference between green and greyhydrogen" href="https://www.petrofac.com/en-gb/media/our-stories/the-difference-between-green-hydrogen-and-blue-hydrogen/">colours</a>.</p>

                <h3>Germany's Energiewende</h3>

                <p>Germany has set out on an <a aria-label="McKinsey & Company report: Germany’s energy transition at a crossroads" href="https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/germanys-energy-transition-at-a-crossroads">energy transition</a>, away from fossil fuels, and nuclear, and towards renewables. Despite political will and enormous investment, this process has not been straightforward.</p>

                <p>A comparison with the US reveals how tricky shifts are. Since 2000:
                    <div class={styles.quote}>                    
                        <div>The US has reduced its dependence on fossil fuels in primary energy consumption from 84 to 78%.</div>
                        <div>Germany has reduced its dependence on fossil fuels in primary energy consumption from 85.7 to 80%.</div>
                        <div><a href="http://vaclavsmil.com/wp-content/uploads/2021/01/71.ENERGIEWENDE.pdf">Vaclav Smil | Energiewende, 20 years later</a></div>
                    </div>
                    Germany may yet benefit from its strategy; whilst the <a aria-label="Our World in Data United States: Energy Country Profile" href="https://ourworldindata.org/energy/country/united-states?country=~USA">US</a> has reduced emissions in large part by replacing coal with natural gas, <a aria-label="Our World in Data Germany: Energy Country Profile" href="https://ourworldindata.org/energy/country/germany?country=~DEU"></a> Germany has reduced its emissions by phasing out coal, increasing its dependency on gas, and adding more solar and wind to the energy mix.
                </p>

                <h3>Electricity, not energy</h3>

                <p>To date the majority of emissions reductions have been in electricity but only <a href="https://en.wikipedia.org/wiki/World_energy_consumption">20 percent</a> of the world's energy use comes from electricity. In countries where cuts to emissions have been possible, there has been little change to the energy mix in transport and industry where high density, high power, fuels are critical.</p>        


            </section>
            <Links.RelatedLinks links={[{href:'carbon',title:'Carbon primer'}, {href:'facts',title:'Facts'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Change;