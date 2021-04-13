import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';
import Links from 'components/links/Links';

const Numbers = () => {
    return (
        <Layout title="Numbers" description={'Numbers'}>
            <section class={styles.card}>

                <div class={styles.menu}>
                    <span><a class={styles.bang} href="#carbon">Asymmetry of time</a></span>
                    <span><a class={styles.bang} href="#co2e">Shaped by energy | intensity | 20%</a></span>
                    <span><a class={styles.bang} href="#geologic_time">History catching up | cumulative emissions | depleted resources ? unraveling</a></span>
                    <span><a class={styles.bang} href="#human_time">Transitions | Plans and goals | Failed projects | Probabilities</a></span>
                    <span><a class={styles.bang} href="#emissions">Photosynthesis | shaped environment not v-v</a></span>
                    <span><a class={styles.bang} href="#energy">Rhetoric | Napoleon</a></span>
                </div>

                <h3>The potential for adverse consequences</h3>

                <div>
                    <span class={styles.quote}>
                    <a href="https://www.ipcc.ch/site/assets/uploads/2021/01/The-concept-of-risk-in-the-IPCC-Sixth-Assessment-Report.pdf">The concept of risk</a> - IPCC (PDF)
                    </span>
                </div>           

                {/* The numbers <a aria-label="IPCC Special report: global warming OF 1.5ºC Summary for Policymakers" href="https://www.ipcc.ch/sr15/chapter/spm/">1.5°C and 2°C</a> will be familiar to you if you are concerned about planet change. But are these the right numbers to be thinking about?  */}

                <p>When Napoleon began his invasion of Russia in the summer of 1812, he did not imagine that his Grande Armée of almost 449,000 men would be reduced to 9,000 within a few months.</p>

                <p><a aria-label="Wikipedia French invasion of Russia, Provisions and transportation" href="https://en.wikipedia.org/wiki/French_invasion_of_Russia#Provisions_and_transportation">Preparation had been extensive</a>, far greater than for any of his previous campaigns, but it was not enough; starvation, thirst, disease, and desertion accounted for the bulk of the army before a relatively mild winter decimated the remainder. Napoleon planned for the battles he had fought and won in central Europe, not the one he faced in Russia.</p>

                <h4>A new challenge</h4>

                <p>
                    In 1988 the <a href="https://en.wikipedia.org/wiki/World_Meteorological_Organization">World Meteorological Organisation</a> (WMO) established the <a href="https://en.wikipedia.org/wiki/Intergovernmental_Panel_on_Climate_Change">Intergovernmental Panel on Climate Change</a> (IPCC). The IPCC was charged with reporting to the <a href="https://en.wikipedia.org/wiki/United_Nations_Framework_Convention_on_Climate_Change">United Nations Framework Convention on Climate Change</a> (UNFCCC) whose objective was to,
                    <span class={styles.quote}>
                        Stabilize greenhouse gas concentrations in the atmosphere at a level that would prevent dangerous anthropogenic (human-induced) interference with the climate system.
                    </span> 
                </p>

                <h4>Defining the problem</h4>

                <p>The IPCC <a href="https://www.ipcc.ch/report/sixth-assessment-report-cycle/">reviews and collates</a> available data related to the climate in order to produce a synthesis report every 5-7 years, in addition to special reports on specific areas of concern, such as the <a href="https://www.ipcc.ch/srocc/">cryosphere</a>, or <a href="https://www.ipcc.ch/srccl/">land</a>. The next report, the sixth assessment of the impact of climate change, will also take into account <a href="https://www.ipbes.net/global-assessment">biodiversity and ecosystem services</a>.</p>

                <p>The IPCC records a rise in temperature of <a href="https://www.ncdc.noaa.gov/climate-monitoring/">1°C</a> <a href="https://www.ipcc.ch/sr15/faq/faq-chapter-1/">compared to pre-industrial times</a> (1850–1900).</p>

                <p>The rise in temperature is a consequence of the increase of carbon dioxide in the atmosphere from around <a href="https://www.carbonbrief.org/met-office-atmospheric-co2-now-hitting-50-higher-than-pre-industrial-levels">278ppm</a> between 1750 and 1800 to 419.90 <a href="https://www.co2.earth/daily-co2">today, 21st April 2021.</a></p>

                <h4>Do we have a plan?</h4>

                <p>In accordance with the <a href="https://en.wikipedia.org/wiki/Paris_Agreement">Paris Agreement</a>, signed at <a href="https://unfccc.int/process-and-meetings/conferences/past-conferences/paris-climate-change-conference-november-2015/cop-21">COP21</a>, each country is required to present a <a href="https://unfccc.int/process-and-meetings/the-paris-agreement/nationally-determined-contributions-ndcs/nationally-determined-contributions-ndcs">National Determined Contribution</a> (NDC) which should,
                    <span class={styles.quote}>
                        …embody efforts by each country to reduce national emissions and adapt to the impacts of climate change.
                    </span>
                    And,
                    <span class={styles.quote}>
                    Together, these climate actions determine whether the world achieves the long-term goals of the Paris Agreement and to reach global peaking of greenhouse gas (GHG) emissions as soon as possible and to undertake rapid reductions thereafter in accordance with best available science, so as to achieve a balance between anthropogenic emissions by sources and removals by sinks of GHGs in the second half of this century.
                    </span>
                </p>

                <p>However, not all has gone to plan.
                    <span class={styles.quote}>
                    After a year disrupted by the Covid-19 pandemic, nations representing only around 28% of global emissions registered new or updated “nationally determined contributions” (NDCs) on the UN’s official registry by the end of the year. Some big emitters did register their NDCs in time, including the UK and EU. But major absences included the US, India and China.
                    <div><a href="https://www.carbonbrief.org/analysis-which-countries-met-the-uns-2020-deadline-to-raise-climate-ambition">Carbon Brief Analysis: Which countries met the UN’s 2020 deadline to raise ‘climate ambition’?</a></div>
                    </span>
                </p>

                <p>It is unsurprising, therefore, that <a href="https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions">global emissions have not yet peaked</a>.</p>

                {/* <p>The UN has drawn up a set of 17 <a href="https://sdgs.un.org/goals">Sustainable Development Goals</a> (SDGs) which encompass tackling climate change.</p> */}

                <h4>Are there any other plans?</h4>

                <p>In addition to intergovernmental and government plans, there is the US <span><a href="https://www.congress.gov/116/bills/hres109/BILLS-116hres109ih.pdf">Green New Deal</a></span> (PDF), the EU <span><a href="https://ec.europa.eu/info/strategy/priorities-2019-2024/european-green-deal_en">European Green Deal</a></span>, <a href="Technology Zero Carbon Britain">Technology Zero Carbon Britain</a>, and <a href="https://web.stanford.edu/group/efmh/jacobson/Articles/I/CountriesWWS.pdf">100% Clean and Renewable Wind, Water, and Sunlight All-Sector Energy Roadmaps for 139 Countries of the World</a>.</p>

                <p>We have drawn our lines in the sand without knowing how far in the tide will come.</p>
                
                {/* <p>Many numbers are relevant to planet change. Here are 4 ways they can be put to use: to record the state of the planet; to describe human populations and activities; to measure performance of materials and goods; to pin down values we cannot change. I will start with the last of these.</p> */}

                <h4>Defining the problem (again)</h4>                

                <p>
                    <span class={styles.quote}>
                    You can start explaining some of the limits and possibilities of everyday life or historical
                    progress by playing with energy densities: the more concentrated sources of energy give you
                    many great advantages in terms of their extraction, portability, transportation and storage costs,
                    and conversion options. <a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Vaclav Smil</a>
                    </span>
                </p>

                <p>The energy densities of coal, oil and gas make them useful as fuels. Contemporary fuels are those which are replenished by the sun: wind, solar, hydroelectric. They are attractive because they don't emit carbon, but they have two drawbacks - they are intermittent, and less energy dense. [explanation, and values]</p>

                <p>They also have low <a href="https://energyeducation.ca/encyclopedia/Energy_vs_power">power</a> densities meaning they require more space. This presents a dilemma. The obvious choice would be to reason that change takes time; the shift from wood to coal and the shift from coal to oil and gas were local, often ad hoc, and remain incomplete.</p>

                <p>The problem with fossil fuels is not that burning them releases carbon, it is that we are dependent on them. Fossil fuels are the incumbent energy source, and if we are to fully replace them, it will entail adapting, extending and replacing existing infrastructure using more land with, at least initially, some duplication.</p>

                <h3>Where did it all begin?</h3>

                <h4>Harnessing fire</h4>

                <p>The earliest supported findings of <a href="https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans">controlled use of fire</a> are from Wonderwerk, South Africa, 1 million years ago, but Homo erectus may have done so <a aria-label="Royal Society Article, The discovery of fire by humans: a long and convoluted process" href="https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0164">much earlier</a>. </p>

                <p>Evidence of fire stimulation and preservation is found throughout our ancestors, and <span class={styles.italic}>Homo erectus</span>, from whom we evolved, had a brain 50% bigger than its predecessor, <span class={styles.italic}>Homo habilis</span>. These skills were likely critical to the evolution of our own species; we are poorly adapted to survive without the ability to control fire to keep warm, and to <a aria-label="Control of Fire in the Paleolithic: Evaluating the Cooking Hypothesis by Richard Wrangham" href="https://www.journals.uchicago.edu/doi/pdfplus/10.1086/692113">cook</a> (PDF).</p>

                <p>More energy enabled us to do less work to stay alive, and in response large brains, best suited to profit from thinking time, evolved. So too, our dependence on energy.</p>

                <h4>The transition to coal</h4>

                <p>
                    The transformation from wood to coal was productive, with little or no adaptation in many cases, a greater release of power, and quickly gave rise to new opportunities. Nonetheless adoption takes time, dependent on availability and cost. Coal stoked the Industrial Revolution in Britain, and it was the dominant fuel until well into the twentieth century, yet extraction is higher today than ever. 
                    <span class={styles.quote}>
                        <div>Coal accounts for ~27% of world energy consumption by source. </div>
                        <div>Coal provided 43,849 terra-watt hours in 2019, compared to 16,140 terra-watt hours in 1965</div>
                        <div><a href="https://ourworldindata.org/energy-mix">Our World in Data | Energy Mix</a></div>
                    </span>
                </p>
                <p>    
                It's use has dwindled in the UK, but elsewhere, including China (<a href="https://ourworldindata.org/energy/country/china?country=~CHN">57.64%</a>) it is the primary source of energy. 
                    <span class={styles.quote}>
                    Britain was terribly well endowed with coal: when the Revolution started, the amount of carbon sitting in coal under Britain was roughly the same as the amount sitting in oil under Saudi Arabia. <div><a href="https://www.withouthotair.com/c1/page_6.shtml">Sustainable Energy - without the hot air David JC MacKay</a></div>
                    </span>
                    In 1965 the UK was dependent on coal for 59% of its energy needs; by 2019 this had fallen to <a href="https://ourworldindata.org/energy/country/united-kingdom?country=~GBR">3.35%</a>.
                </p>              

                <h4>The transition to oil</h4>  

                <p>The transition from coal to oil is localised; some countries are still undergoing the transition to coal, and some of them may limit their use of oil.</p>

                <h4>The dash for gas</h4>

                <p>Between 1967–1977, appliances in 35 million homes in the UK <a href="https://www.sciencedirect.com/science/article/abs/pii/S2210422417301909">were converted</a> to run on natural gas instead of manufactured gas. It was a success, though the cost was <a aria-label="UK House of Commons debate: Gas Conversion Programme" href="https://www.theyworkforyou.com/debates/?id=1970-02-23a.814.7">higher than expected</a>. Researchers at Keele University are now <a href="https://hydeploy.co.uk/">experimenting</a> with introducing hydrogen to the natural gas supply; tests currently introduce 20% hydrogen by volume (7% of energy).</p>                

                <h4>Powering down, the transition to renewables</h4>

                <p>Even with a great deal of political will and money, this will not be straightforward, as <a aria-label="McKinsey & Company report: Germany’s energy transition at a crossroads" href="https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/germanys-energy-transition-at-a-crossroads">Germany's Energiewende</a> demonstrates.</p>

                <p>A comparison with the US reveals how tricky shifts are. Since 2000:
                    <div class={styles.quote}>                    
                        <div>The US has reduced its dependence on fossil fuels in primary energy consumption from 84 to 78%.</div>
                        <div>Germany has reduced its dependence on fossil fuels in primary energy consumption from 85.7 to 80%.</div>
                        <div><a href="http://vaclavsmil.com/wp-content/uploads/2021/01/71.ENERGIEWENDE.pdf">Vaclav Smil | Energiewende, 20 years later</a></div>
                    </div>
                    Germany may yet benefit from its strategy; whilst the <a aria-label="Our World in Data United States: Energy Country Profile" href="https://ourworldindata.org/energy/country/united-states?country=~USA">US</a> has reduced emissions in large part by replacing coal with natural gas, <a aria-label="Our World in Data Germany: Energy Country Profile" href="https://ourworldindata.org/energy/country/germany?country=~DEU"></a> Germany has reduced its emissions by phasing out coal, increasing its dependency on gas, and adding more solar and wind to the energy mix.
                </p>

                <p>To date the majority of emissions reductions have been in <span class={styles.italic}>electricity</span> but only <a href="https://en.wikipedia.org/wiki/World_energy_consumption">20 percent</a> of the world's energy use comes from electricity. In countries where cuts to emissions have been possible, there has been little change to the energy mix in transport and industry where high density, high power, fuels are critical.</p>

                {/* The shift to renewables has come either from falling costs, or policy. Wind and solar can now compete with fossil fuels unsubsidised in many places. */}
                {/* Unfortunately, not only do have relatively low energy densities, they low power densities which means more land must be dedicated to their production; since we have limited space, and it is also needed to produce food, this presents a problem. */}

                {/* The problem with fossil fuels is not that burning them releases carbon, it is that we are dependent on them. */}

                <h4>Technology - numbers we can affect</h4>

                <p>There have been notable successes in replacing fossil fuels in the production of electricity, but less so for the energy sector as a whole.</p>

                <p>In 2019 around <a href="https://www.iea.org/reports/global-ev-outlook-2020">one percent</a> of cars were electric. </p>
                {/* <p>
                    <ul class={styles.list}>
                        <li>Global <a href="https://ourworldindata.org/grapher/cumulative-co2-emissions-region?stackMode=absolute">cumulative emissions</a> are around 1,610 billion tonnes of carbon dioxide (2019). This figure is increasingly annually, but may, one day, start to fall.</li>
                        <li>Human activities are estimated to have caused approximately <a aria-label="IPCC Special report: global warming OF 1.5ºC Summary for Policymakers" href="https://www.ipcc.ch/sr15/chapter/spm/">1.0°C</a> of global warming above pre-industrial levels.</li>
                        <li><a href="https://en.wikipedia.org/wiki/World_energy_consumption">~20%</a> of the world's energy is in the form of electricity.</li>
                        <li><a href="https://www.iea.org/reports/global-ev-outlook-2020">~1%</a> of cars are electric (2019).</li>
                        <li><a href="https://ourworldindata.org/energy-access#access-to-electricity">13% of the world do not have access to electricity.</a></li>
                        <li><a href="https://ourworldindata.org/energy-access#access-to-clean-fuels-for-cooking">40% of the world do not have access to clean fuels for cooking.</a></li>
                    </ul>
                </p> */}
            
                <h4>Human populations and activities</h4>

                <p>Examination of global carbon emissions since around 1980 shows that rich, industrialised countries have not greatly increased (US), or reduced (Europe, Japan). The <a aria-label="Wikipedia article: Income and fertility" href="https://en.wikipedia.org/wiki/Income_and_fertility">correlation</a> between economic development and fertility is assumed to be either negative (fertility falls with development), or follows the J-Curve (inverse correlation followed by increased fertility but to a level below the <a href="https://en.wikipedia.org/wiki/Total_fertility_rate#Replacement_rates">replacement rate</a>).</p>

                <p>The global population is <a aria-label="UN Department of Economic and Social Affairs: Population Dynamics" href="https://population.un.org/wpp/Graphs/DemographicProfiles/Line/900">predicted</a> to rise to between 9.5 and 12.5 billion by the end of the century.</p>

                <p>There is no evidence to suggest the <a aria-label="Our World in Data: global population growth" href="https://ourworldindata.org/world-population-growth#how-has-world-population-growth-changed-over-time">global population</a> will not continue to grow; neither war nor pestilence has had a lasting effect. in this scenario, growth comes to an end because - for the first time in human history - every region of the world is theoretically wealthy with sufficient resources to feed and house its inhabitants. In a second scenario, population growth is halted for negative reasons, not from choice, but because there the planet cannot provide for everyone, except, at best, through redistribution, or at worst, because there is simply not enough to go round.</p>

                <p>Or could we choose to limit population growth? There is no clear mechanism by which this could be done. If we aspire to equality in the distribution of goods, and to end practices that are damaging to the planet, our current practices would require the standard of living in rich countries to be modified; the effect of that would depend on us.</p>

                <p>
                    <span class={styles.quote}>
                    <a href="https://www.sleek-mag.com/wp-content/uploads/2019/03/jenny-holzer-protect-me-times-square.jpg">Protect me from what I want</a> (image) <a href="https://en.wikipedia.org/wiki/Jenny_Holzer">Jenny Holzer</a>
                    </span>
                </p>

                <p>Nigeria is predicted to be home to more than 1 billion people by 2100. The per capita CO2 emissions (2017) for Nigeria was <a href="https://ourworldindata.org/co2/country/nigeria#per-capita-how-much-co2-does-the-average-person-emit">.68 tonnes</a>. The figure for the US in the same year was <a href="https://ourworldindata.org/co2/country/united-states?country=~USA#per-capita-how-much-co2-does-the-average-person-emit">16.16 tonnes</a>; that is a US citizen, on average, uses almost 24 times the resources of a Nigerian.</p>

                <h4>The state of the planet</h4>

                <h4>Dates</h4>

                <p>Dates are strange numbers, their familiar format only human-friendly. To make sense of them mathematically dates are calculated as the time since another time. For example, UTC or <span><a href="https://en.wikipedia.org/wiki/Coordinated_Universal_Time">Coordinated Universal Time</a></span> is measured in milliseconds since January 1, 1970, 00:00:00.
                    <span class={styles.quote}>
                    English speakers originally proposed CUT (Coordinated Universal Time), while French speakers proposed TUC (Temps Universel Coordonné). UTC was the compromise.
                    </span>
                </p>
                
                <p>Dates weren't included in the original list, but we are fond of nailing commitments and intentions to arbitrary moments in time.</p>

                <h4>Plans</h4>

                <p>It is not only military campaigns that fail; many large scale projects, even <a aria-label="Harvard Businss Review report Why Good Projects Fail Anyway" href="https://hbr.org/2003/09/why-good-projects-fail-anyway">good ones</a> go over budget, run over time, or both. <a href="https://www.consultancy.uk/news/24677/most-construction-and-engineering-projects-are-unsuccessful">Two thirds of large construction and engineering projects</a>, <a href="https://pubsonline.informs.org/do/10.1287/orms.2019.06.08/full/">85% of big data projects</a>, 59% of <a href="https://bsc.cid.harvard.edu/files/bsc/files/public_policy_failure_cidwp344.pdf">World Bank</a> (PDF) projects fail <span class={styles.italic}>on either the direct ‘project and product’ performance measure or the indirect ‘problems are solved with development impact’ performance measure, or both</span>.</p>

                <p>
                    <ul class={styles.list}>
                        <li>The goal of the <a href="https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement">Paris Agreement</a> is to limit global warming to well below 2, preferably to 1.5 degrees Celsius, compared to pre-industrial levels.</li>
                        <li><a aria-label="IEA: Global EV Outlook 2020" href="Union of Concerned Scientists: 2030 or Bust?" href="https://blog.ucsusa.org/elliott-negin/2030-or-bust-what-is-the-importance-of-the-year-2030-climatewise">2030</a>, <a aria-label="The Guardian: The climate crisis in 2050" href="https://www.theguardian.com/cities/2019/oct/10/the-climate-crisis-in-2050-what-happens-if-cities-act-but-nations-dont">2050</a>, <a aria-label="NASA: Emissions Could Add 15 Inches to Sea Level by 2100" href="https://climate.nasa.gov/news/3021/emissions-could-add-15-inches-to-sea-level-by-2100-nasa-led-study-finds/">2100</a></li>
                    </ul>
                </p>

                <h3>Numbers, not adjectives</h3>

                <h3>Conclusion</h3>

                <p>planet change, and species loss, are complex problems, and therefore it is as well we refer to data from many fields (<a href="https://en.wikipedia.org/wiki/Consilience">consilience</a>), and consider multiple solutions. The data reveal the problem, but not how to tackle it. The problem with fossil fuels is not that burning them releases carbon, it is that we are dependent on them, and not only for luxuries like flying, but for our food, our freedom from toil, health care, access to information, and much more besides. And though some have enjoyed these benefits for more than a hundred years, others are still waiting.</p>

                <p>
                    <span class={styles.quote}>
                    La Russie est entraînée par la fatalité! Ses destins doivent s'accomplir. Nous croirait-elle donc dégénérés? Ne serions-nous donc plus les soldats d'Austerlitz? Elle nous place entre le déshonneur et la guerre. Le choix ne saurait être douteux. Marchons donc en avant! <a aria-label="1812 La campagne de russie" href="https://www.napoleon.org/histoire-des-2-empires/chronologies/1812-la-campagne-de-russie-1-de-la-diplomatie-au-passage-du-niemen/">Napoléon</a>
                    </span>
                    <span class={styles.quote}>
                    Russia is hurried away by a fatality: her destinies will be fulfilled. Does she think us degenerated? Are we no more the soldiers who fought at Austerlitz? She places us between dishonour and war — our choice cannot be difficult. <a aria-label="Wikipedia: French invasion of Russia" href="https://en.wikipedia.org/wiki/French_invasion_of_Russia#cite_note-R33ARW14-19">Napoleon</a>
                    </span>
                </p>

                <p>
                    <span class={styles.quote}>
                        if everyone does a little, we’ll achieve only a little. <a href="http://www.withouthotair.com/c1/page_3.shtml">David McKay</a>
                    </span>
                </p>

                <p>
                    <span class={styles.quote}>
                    Higher reliance on renewable energies may be desirable (mainly because of perceived environmental and strategic reasons) and technical advances would also make it an increasingly appealing economic choice –- but inherently low power densities of these conversions will require a new system of fuel and electricity supply that will be able to substitute for today’s dominant practices only after decades of gradual development. <a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Power density primer Vaclav Smil</a>
                    </span>
                </p>

                <h3>Photosynthesis</h3>

                <p>
                    <span class={styles.quote}>
                    Photosynthesis is an inherently inefficient energy conversion process, and production of biomass has large space requirements. Even with an intensively cultivated plantation of fast-growing trees, a wood-burning electricity generation plant would not have power densities higher than 0.6 W/m2, and for most operations the rate would be below 0.5 W/m2. Space demand for such facilities, then, would be two to three orders of magnitude (100 to 1,000 times) greater than for coal- or gas-fired electricity generation. <a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Power density primer Vaclav Smil</a>
                    </span>
                </p>

            </section>
            <Links.RelatedLinks links={[{href:'facts',title:'Facts'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Numbers;