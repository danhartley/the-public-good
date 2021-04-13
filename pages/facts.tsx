import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';
import Tables from 'components/tables/tables';

const Facts = () => {

    return (
        <Layout title="Facts" description={'Facts'}>
            <section class={styles.card}>
                <h2>Facts</h2>

                <div class={styles.menu}>
                    <span><a class={styles.bang} href="#carbon">Carbon</a></span>
                    <span><a class={styles.bang} href="#co2e">CO2e</a></span>
                    <span><a class={styles.bang} href="#geologic_time">Geologic time</a></span>
                    <span><a class={styles.bang} href="#human_time">Human time</a></span>
                    <span><a class={styles.bang} href="#emissions">Emissions</a></span>
                    <span><a class={styles.bang} href="#energy">Energy density</a></span>
                </div>

                <h3 id="carbon">Carbon & CO2</h3>

                <p>
                Emissions values are usually given in tonnes of carbon dioxide, but occasionally a value is given in tonnes of carbon (the giveaway is that the value looks surprisingly small).

                To convert a mass of carbon to carbon dioxide multiple by 3.67.
                </p>

                <p>
                    How is this number derived?
                    <span class={styles.quote}>
                        <div>The atomic mass of carbon is 12. The atomic mass of oxygen is 16.</div>
                        <div>The ratio of CO2 to C is therefore 44/12 (1*12 + 2*16 / 12) or ~3.67.</div>
                        <div>To calculate the mass of CO2 released by burning a particular fossil fuel it is necessary to know how much carbon it contains. The additional mass comes from the oxygen.</div>
                        {/* <div>The weight of CO2 is 44 grams per mole (1 x 12 grams/mole for the carbon atom and 2 x 16 grams/mole for the oxygen atoms).</div>                        
                        <div>The mass of one molecule of CO2 is 7.30×10<span class={styles.super}>−23</span></div> */}
                    </span>
                    <div>
                        <a aria-label="Article explaining the difference between mass and weight from ThoughtCo" href="https://www.thoughtco.com/atomic-weight-and-atomic-mass-difference-4046144">Atomic mass or atomic weight?</a>
                    </div>
                    <div>
                        <a aria-label="QandA in Scientific American on how to calculate weight of CO2" href="https://www.scientificamerican.com/article/experts-weight-ratio-co2-fuel/">Example calculation using weight and moles.</a>
                    </div>
                </p>
                
                <h3 id="co2e">CO2e</h3>
                
                <h3 id="geologic_time">The geologic time scale of fossil fuels</h3>

                <h4>Peat</h4>

                Peat 

                <h4>Coal</h4>
                <p>
                    <span class={styles.quote}>
                    The formation of coal takes a significant amount of time (on the order of a few million years), and the first coal-bearing rock units appeared about 290-360 million years ago, at a time known as the Carboniferous or "coal-bearing" Period. As well, there are extensive coal deposits from the Cretaceous age - about 65 to 144 million years ago. <a href="https://energyeducation.ca/encyclopedia/Coal_formation">Energy Education: coal formation</a>
                    </span>
                </p>

                <h4>Oil & Gas</h4>
                <p>
                    <span class={styles.quote}>
                        70% of oil deposits existing today were formed in the Mesozoic age (252 to 66 million years ago), 20% were formed in the Cenozoic age (65 million years ago), and only 10% were formed in the Paleozoic age (541 to 252 million years ago). This is likely because the Mesozoic age was marked by a tropical climate, with large amounts of plankton in the ocean. <a href="https://energyeducation.ca/encyclopedia/Oil_formation">Energy Education: oil formation</a>
                    </span>
                </p>

                <Tables.Geology></Tables.Geology>

                <h3 id="human_time">Human time</h3>

                <p>A rough, and disbuted timeline of <a href="https://en.wikipedia.org/wiki/Timeline_of_human_evolution">human evolution</a>.</p>

                 <Tables.Humans></Tables.Humans>

                <h3 id="emissions">Emissions since when?</h3>

                <p>
                    The IPCC calculates the rise in the global mean surface temperature (GMST) from the beginning of large-scale industrial activity.
                    Their <a aria-label="IPCC Annex: Glossary" href="https://www.ipcc.ch/site/assets/uploads/sites/2/2019/06/SR15_AnnexI_Glossary.pdf">reference period</a> (PDF) is 1850-1900.
                    <div>
                        Industrialisation had begun before this date, primarily in England (<a href="https://ourworldindata.org/contributed-most-global-co2">78% of gobal emissions</a>). 
                        
                        Dates for the Industrial Revolution in Europe and the United States are typically given as starting in 1760, and ending in 1820, or 1840, but emissions were low by comparison to today, just <a aria-label="Our World in Data report on historical CO2 emission" href="https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions">4.96 billion tonnes</a>, and were localised. Prior to this period humans had been burning wood, coal, and clearing land, but emissions were comparatively insignificant.
                        
                        <p><a href="https://ourworldindata.org/grapher/cumulative-co2-emissions-region?stackMode=absolute">Cumulative emissions</a></p>
                        <Tables.CumulativeEmissions></Tables.CumulativeEmissions>
                        <p>In 1850 cumulative global emissions were around 0.3% of what they are today.</p>
                    </div>
                </p>

                <h3 id="energy">Energy</h3>

                <h4>Units</h4>

                <p>
                    SI Units: <a href="http://www.withouthotair.com/cI/page_328.shtml">Quick reference</a>
                </p>

                <h4 id="energy_density">Energy density</h4>

                {/* more complex, e.g. coal, more carbon. gas => oil => coal */}

                <span class={styles.quote}>
                    You can start explaining some of the limits and possibilities of everyday life or historical
                    progress by playing with energy densities: the more concentrated sources of energy give you
                    many great advantages in terms of their extraction, portability, transportation and storage costs,
                    and conversion options. <a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Vaclav Smil</a>
                </span>

                 <Tables.EnergyDensities></Tables.EnergyDensities>

                 <span class={styles.quote}>*Solar energy has a density over twenty quadrillion times less than oil</span>

                <div><a href="https://energyeducation.ca/encyclopedia/Energy_density">Energy Education | Energy density</a></div>
                <div><a href="https://apcentral.collegeboard.org/courses/ap-environmental-science/classroom-resources/energy-primer-ap-environmental-science-student">An Energy Primer for the AP Environmental Science Student</a></div>
                <div><a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Vaclav Smil | Power density primer</a></div>
                <div><a href="https://www.drexel.edu/~/media/Files/greatworks/pdf_sum10/WK8_Layton_EnergyDensities.ashx">A comparison of energy densities of prevalent energy sources in units of joules per cubic meter | Bradley E. Layton Drexel University</a></div>

                <h4>Horsepower</h4>

                <p>
                    There are numerous definitions for the value of <a aria-label="Wikipedia article on horsepower" href="https://en.wikipedia.org/wiki/Horsepower">horsepower</a>; one metric measure is defined as,
                    <span class={styles.quote}>
                        The power needed to lift 75 kilograms by 1 metre in 1 second.
                    </span>
                    Comparing horses and humans,
                    <span class={styles.quote}>
                        <div>A horse can reach a peak of ~11kW over a period of a few seconds.</div>
                        <div>A horse can reach a peak of ~1kW over a period of a few seconds.</div>
                    </span>
                    And over time,
                    <span class={styles.quote}>
                        <div>A horse can perform sustained activity at a work rate of about 0.75kW.</div>
                        <div>A human can perform sustained activity at a work rate of about 0.075kW.</div>
                    </span>
                    Everyday power requirements,
                    <span class={styles.quote}>
                        <div>A toaster uses in the range of .8 to 1.5kW of energy.</div>
                        <div>An ordinary family salon has ~120 horsepower, and an SUV ~200 horsepower.</div>
                    </span>                    
                </p>


                <h4>Human power</h4>

                <p>
                    <div class={styles.quote}>
                        <div>
                            2000 Calories / 1 day * 1 day / 24 hours * 60 minutes * 60 seconds * 4184 Joules / 1 Calories = 96.85 J/second = 96.85W ≈ 100W
                            <div><a href="https://energyeducation.ca/encyclopedia/Power_servant">Energy Education | Power Servant</a></div>
                        </div>
                    </div>
                </p>

                <h4>Power density</h4>

                These figures are from 2010 but although the values for pvs and wind have improved, the relative values are unchanged.

                <Tables.PowerDensities></Tables.PowerDensities>                

                <div>Source: <a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Vaclav Smil | Power density primer</a></div>

                <h3>Ocean acidification</h3>

            </section>
        </Layout>
    )
};

export default Facts;