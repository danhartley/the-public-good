import Link from 'next/link';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';
import Links from 'components/links/Links';

const Energy = () => {
    return (
        <Layout title="Energy" description={'Energy'}>
            <section class={styles.card}>
                <h2>Energy</h2>

                <h3>Energy & Electricty</h3>

                <p>There have been notable successes in replacing fossil fuels in the production of electricity, but less so for the energy sector as a whole.</p>

                <h2>Energy, Time & Space</h2>

                {/* (transport, buildings and industry), or agriculture */}

                <p>There is a fearful asymmetry between the accumulation of carbon and methane in the earth, and their release into the atmosphere; reserves laid down over thousands of millenia many millions of years ago will be exhausted in a little over a hundred years. Coal fields will endure the longest, oil and gas may be gone in fifty.</p>

                <p>We used to worry about running out of fossil fuels, now our primary concern is how to reduce our dependency on them. Our species is defined by energy, the use of which has set us apart; technology provides us with power far beyond the limits of our own bodies.</p>

                <p>As we moved from burning wood to burning coal and then to oil and gas, we benefited from harnessing fuels with greater energy densities. Then came nuclear energy which is not derived from our sun but from the death of ancient stars; its role is controversial, and its contribution to the energy mix is likely to be limited at best.</p>

                <p>Contemporary fuels are those which are replenished by the sun: wind, solar, hydroelectric. They have two drawbacks - they are intermittent, and are less energy dense; for the first time, we are converting our energy supply to forms that occupy more space, and have less power.</p>

                <h3>Numbers, not adjectives</h3>
                
                <h4>What is our consumption of energy?</h4>
                <h4>How do we supply the energy we use?</h4>
                <h4>What do we do?</h4>

                <p>
                    <span class={styles.quote}>
                        if everyone does a little, we’ll achieve only a little. <a href="http://www.withouthotair.com/c1/page_3.shtml">David McKay</a>
                    </span>
                </p>

                <h3>Power density & Energy density</h3>

                <p>
                    <span class={styles.quote}>
                    Higher reliance on renewable energies may be desirable (mainly because of perceived environmental and strategic reasons) and technical advances would also make it an increasingly appealing economic choice –- but inherently low power densities of these conversions will require a new system of fuel and electricity supply that will be able to substitute for today’s dominant practices only after decades of gradual development. <a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Power density primer Vaclav Smil</a>
                    </span>
                </p>

                <h3>Fossil fuels</h3>

                <p><a href="https://ourworldindata.org/grapher/years-of-fossil-fuel-reserves-left">Years of fossil fuel reserves left</a></p>
                <p><a href="https://ourworldindata.org/grapher/cumulative-co2-emissions-region?stackMode=absolute">Cumulative emissions</a></p>

                <h3>Fire</h3>

                <p>The earliest supported findings of <a href="https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans">controlled use of fire</a> are from Wonderwerk, South Africa, 1 million years ago, but Homo erectus may have done so <a aria-label="Royal Society Article, The discovery of fire by humans: a long and convoluted process" href="https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0164">much earlier</a>. </p>

                <p>Evidence of fire stimulation and preservation is found throughout our ancestors, and <span class={styles.italic}>Homo erectus</span>, from whom we evolved, had a brain 50% bigger than its predecessor, <span class={styles.italic}>Homo habilis</span>. These skills were likely critical to the evolution of our own species; we are poorly adapted to survive without the ability to control fire to keep warm, and to <a aria-label="Control of Fire in the Paleolithic: Evaluating the Cooking Hypothesis by Richard Wrangham" href="https://www.journals.uchicago.edu/doi/pdfplus/10.1086/692113">cook</a> (PDF). More energy enabled us to do less work to stay alive, and in response large brains, best suited to profit from thinking time, evolved. So too, our dependence on energy.</p>

                <p>Our entanglement with fossil fuels is more recent.</p>

                <h3>Powering down</h3>

                <p>Horsepower 'invented' to demonstrate value of the steam engine; similarly horses to cars, carbon to oil.</p>

                <h3>Asymmetry</h3>

                <Links.InternalLinkBlock link={{'value': 'facts#geologic_time', 'text': 'Geologic time'}}></Links.InternalLinkBlock>

                <p>We crossed a divide between the living and the non-living when we began to use fossil fuels. The work this enabled us to do has been extraordinary.</p>

                <p>This article owes a debt to David McKay and his book, <a href="http://www.withouthotair.com/" aria-label="Online version of Sustainable Energy - Without the Hot Air">Sustainable Energy - Without the Hot Air</a>.</p>

                // This is relevant if we are considering whether biofuels are a wise investment.

{/* The numbers <a aria-label="IPCC Special report: global warming of 1.5ºC Summary for Policymakers" href="https://www.ipcc.ch/sr15/chapter/spm/">1.5°C and 2°C</a> will be familiar to you if you are concerned about planet change. But are these the right numbers to be thinking about?  */}

{/* The shift to renewables has come either from falling costs, or policy. Wind and solar can now compete with fossil fuels unsubsidised in many places. */}


{/*

<p>There have been notable successes in replacing fossil fuels in the production of electricity, but less so for the energy sector as a whole.</p>

<p>In 2019 around <a href="https://www.iea.org/reports/global-ev-outlook-2020">one percent</a> of cars were electric. </p> */}
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

{/* <p>
    <span class={styles.quote}>
    La Russie est entraînée par la fatalité! Ses destins doivent s'accomplir. Nous croirait-elle donc dégénérés? Ne serions-nous donc plus les soldats d'Austerlitz? Elle nous place entre le déshonneur et la guerre. Le choix ne saurait être douteux. Marchons donc en avant! <a aria-label="1812 La campagne de russie" href="https://www.napoleon.org/histoire-des-2-empires/chronologies/1812-la-campagne-de-russie-1-de-la-diplomatie-au-passage-du-niemen/">Napoléon</a>
    </span>
    <span class={styles.quote}>
    Russia is hurried away by a fatality: her destinies will be fulfilled. Does she think us degenerated? Are we no more the soldiers who fought at Austerlitz? She places us between dishonour and war — our choice cannot be difficult. <a aria-label="Wikipedia: French invasion of Russia" href="https://en.wikipedia.org/wiki/French_invasion_of_Russia#cite_note-R33ARW14-19">Napoleon</a>
    </span>
</p> */}

{/* <p>
    <span class={styles.quote}>
        if everyone does a little, we’ll achieve only a little. <a href="http://www.withouthotair.com/c1/page_3.shtml">David McKay</a>
    </span>
</p> */}

{/* <p>
    <span class={styles.quote}>
    Higher reliance on renewable energies may be desirable (mainly because of perceived environmental and strategic reasons) and technical advances would also make it an increasingly appealing economic choice –- but inherently low power densities of these conversions will require a new system of fuel and electricity supply that will be able to substitute for today’s dominant practices only after decades of gradual development. <a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Power density primer Vaclav Smil</a>
    </span>
</p> */}

{/* <h4>Plans</h4>

<p>It is not only military campaigns that fail; many large scale projects, even <a aria-label="Harvard Businss Review report Why Good Projects Fail Anyway" href="https://hbr.org/2003/09/why-good-projects-fail-anyway">good ones</a> go over budget, run over time, or both. <a href="https://www.consultancy.uk/news/24677/most-construction-and-engineering-projects-are-unsuccessful">Two thirds of large construction and engineering projects</a>, <a href="https://pubsonline.informs.org/do/10.1287/orms.2019.06.08/full/">85% of big data projects</a>, 59% of <a href="https://bsc.cid.harvard.edu/files/bsc/files/public_policy_failure_cidwp344.pdf">World Bank</a> (PDF) projects fail <span class={styles.italic}>on either the direct ‘project and product’ performance measure or the indirect ‘problems are solved with development impact’ performance measure, or both</span>.</p>

<p>
    <ul class={styles.list}>
        <li>The goal of the <a href="https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement">Paris Agreement</a> is to limit global warming to well below 2, preferably to 1.5 degrees Celsius, compared to pre-industrial levels.</li>
        <li><a aria-label="Union of Concerned Scientists: 2030 or Bust?" href="https://blog.ucsusa.org/elliott-negin/2030-or-bust-what-is-the-importance-of-the-year-2030-climatewise">2030</a>, <a aria-label="The Guardian: The climate crisis in 2050" href="https://www.theguardian.com/cities/2019/oct/10/the-climate-crisis-in-2050-what-happens-if-cities-act-but-nations-dont">2050</a>, <a aria-label="NASA: Emissions Could Add 15 Inches to Sea Level by 2100" href="https://climate.nasa.gov/news/3021/emissions-could-add-15-inches-to-sea-level-by-2100-nasa-led-study-finds/">2100</a></li>
    </ul>
</p> */}

{/* <h4>Dates</h4>

<p>Dates are strange numbers, their familiar format only human-friendly. To make sense of them mathematically dates are calculated as the time since another time. For example, UTC or <span><a href="https://en.wikipedia.org/wiki/Coordinated_Universal_Time">Coordinated Universal Time</a></span> is measured in milliseconds since January 1, 1970, 00:00:00.
    <span class={styles.quote}>
    English speakers originally proposed CUT (Coordinated Universal Time), while French speakers proposed TUC (Temps Universel Coordonné). UTC was the compromise.
    </span>
</p>

<p>Dates weren't included in the original list, but we are fond of nailing commitments and intentions to arbitrary moments in time.</p> */}

{/* <p>
<span class={styles.quote}>
<a href="https://www.sleek-mag.com/wp-content/uploads/2019/03/jenny-holzer-protect-me-times-square.jpg">Protect me from what I want</a> (image) <a href="https://en.wikipedia.org/wiki/Jenny_Holzer">Jenny Holzer</a>
</span>
</p> */}

            </section>
            <Links.RelatedLinks links={[{href:'facts',title:'Numbers'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Energy;

{/* <a aria-label="Scientific American article on Wrangham's theory that cooking spurred our evolution" href="https://www.scientificamerican.com/article/cooking-up-bigger-brains/">cook</a> */}
{/* One unproven theory proposes that our own species, homo sapiens, was fire-dependent, and could not have evolved if it hadn't been for the ability of homo erectus to control fire. */}