import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';
import Links from 'components/links/Links';

const Numbers = () => {
    return (
        <Layout title="Numbers" description={'Numbers'}>
            <section class={styles.card}>

                <h3>Which numbers are important?</h3>

                {/* The numbers <a aria-label="IPCC Special report: global warming OF 1.5ºC Summary for Policymakers" href="https://www.ipcc.ch/sr15/chapter/spm/">1.5°C and 2°C</a> will be familiar to you if you are concerned about planet change. But are these the right numbers to be thinking about?  */}

                <p>When Napoleon began his invasion of Russia in the summer of 1812, he did not have the number 9,000 in mind, the size his Grande Armée would be reduced to five and a half months later; it was the starting number, almost 449,000, that dictated his <a aria-label="French invasion of Russia" href="https://en.wikipedia.org/wiki/French_invasion_of_Russia">campaign</a>.</p>

                <p>Naploeon's army was well prepared, far more so than in any of his previous campaigns; 7,848 vehicles carried provisions for 40 days, but it was not enough; starvation, thirst, disease, and desertion had accounted for most of the army before a relatively mild winter decimated the remainder.</p>

                <p>Many numbers are relevant to planet change. Here are 4 ways they can be put to use: to record the state of the planet; to describe human populations and activities; to measure performance of materials and goods; to pin down values we cannot change. I will start with the last of these.</p>

                <h4>Numbers we cannot change</h4>
                {/* <p>                                        
                    <ul class={styles.list}>
                        <li>The atomic mass of carbon is 12. The atomic mass of oxygen is 16. The relative masses of Carbon and CO2 can be <span class={styles.internalLink}><Link href='numbers#carbon'><a>calculated</a></Link></span>.</li>
                        <li>The energy density of <span class={styles.internalLink}><Link href='facts#energy_density'><a>natural gas</a></Link></span> is ~46 MJ/kg.</li>
                        <li>Here are some more <Links.InternalLink link={{'value': 'facts', 'text': 'numbers'}}></Links.InternalLink>.</li>
                    </ul>                    
                </p> */}

                <p>
                    <span class={styles.quote}>
                    You can start explaining some of the limits and possibilities of everyday life or historical
                    progress by playing with energy densities: the more concentrated sources of energy give you
                    many great advantages in terms of their extraction, portability, transportation and storage costs,
                    and conversion options. <a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Vaclav Smil</a>
                    </span>
                </p>

                <p>The energy densities of coal, oil and gas make them useful as fuels. Contemporary fuels are those which are replenished by the sun: wind, solar, hydroelectric. They are attractive because they don't emit carbon, but they have two drawbacks - they are intermittent, and less energy dense.</p>

                <p>They also have low <a href="https://energyeducation.ca/encyclopedia/Energy_vs_power">power</a> densities meaning they require more space. This presents a dilemma. The obvious choice would be to reason that change takes time; the shift from wood to coal and the shift from coal to oil and gas were local, often ad hoc, and remain incomplete.</p>

                <p>The problem with fossil fuels is not that burning them releases carbon, it is that we are dependent on them. Fossil fuels are the incumbent energy source, and if we are to fully replace them, it will entail adapting, extending and replacing existing infrastructure using more land with, at least initially, some duplication. Even with a great deal of political will and money, this will not be straightforward, as <a aria-label="McKinsey & Company report: Germany’s energy transition at a crossroads" href="https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/germanys-energy-transition-at-a-crossroads">Germany's Energiewende</a> demonstrates.</p>

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

                <p>The global population, is <a aria-label="UN Department of Economic and Social Affairs: Population Dynamics" href="https://population.un.org/wpp/Graphs/DemographicProfiles/Line/900">predicted</a> to rise to between 9.5 and 12.5 billion by the end of the century.</p>

                <p>Nigeria is predicted to be home to more than 1 billion people by 2100. The per capita CO2 emissions (2017) for Nigeria was <a href="https://ourworldindata.org/co2/country/nigeria#per-capita-how-much-co2-does-the-average-person-emit">.68 tonnes</a>. The figure for the US in the same year was <a href="https://ourworldindata.org/co2/country/united-states?country=~USA#per-capita-how-much-co2-does-the-average-person-emit">16.16 tonnes</a>; that is a US citizen, on average, uses almost 24 times the resources of a Nigerian.</p>

                <h4>The state of the planet</h4>

                <h4>Case study: installation of natural gas in the UK</h4>

                <p>Between 1967–1977, appliances in 35 million homes in the UK <a href="https://www.sciencedirect.com/science/article/abs/pii/S2210422417301909">were converted</a> to run on natural gas instead of manufactured gas. It was a success, though the cost was <a aria-label="UK House of Commons debate: Gas Conversion Programme" href="https://www.theyworkforyou.com/debates/?id=1970-02-23a.814.7">higher than expected</a>. Researchers at Keele University are now <a href="https://hydeploy.co.uk/">experimenting</a> with introducing hydrogen to the natural gas supply; tests currently introduce 20% hydrogen by volume (7% of energy).</p>                

                <h4>Dates</h4>

                <p>Dates are strange numbers, their familiar format only human-friendly. To make sense of them mathematically dates are calculated as the time since another time. For example, UTC or <span><a href="https://en.wikipedia.org/wiki/Coordinated_Universal_Time">Coordinated Universal Time</a></span> is measured in milliseconds since January 1, 1970, 00:00:00.
                    <span class={styles.quote}>
                    English speakers originally proposed CUT (Coordinated Universal Time), while French speakers proposed TUC (Temps Universel Coordonné). UTC was the compromise.
                    </span>
                </p>
                
                <p>Dates weren't included in the original list, but we are fond of nailing commitments and intentions to arbitrary moments in time.</p>

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