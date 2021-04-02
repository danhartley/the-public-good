import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Numbers = () => {

    const eds = [
        {
            name: "Peat",
            value: 15
        },
        {
            name: "Wood",
            value: 16
        },
        {
            name: "Coal",
            value: 24
        },
        {
            name: "Crude oil",
            value: 44
        },
        {
            name: "Gasoline",
            value: 46
        },
        {
            name: "Natural gas",
            value: 46
        },
        {
            name: "Nuclear (uranium-235)",
            value: 3900000
        },
    ];

    const fuels = eds.map(ed => <tr><td>{ed.name}</td><td>{Number(ed.value).toLocaleString()}</td></tr>);

    const cumulativeEmissions = [
        {
            year: 1850,
            total: 4.96
        },
        {
            year: 1950,
            total: 230.21
        },
        {
            year: 1970,
            total: 417.82
        },
        {
            year: 2000,
            total: 1020
        },
        {
            year: 2019,
            total: 1610
        }
    ];

    const emissions = cumulativeEmissions.map(d => <tr><td>{d.year}</td><td>{Number(d.total).toLocaleString()}</td></tr>);

    const humanDates = [
        {
            what: 'Hominini tribe separates from Gorillini',
            when: '8-9 mya',
            info: 'Humans, Australopithecus, and chimpanzees separate from gorillas'
        },
        {
            what: 'Separation of the subtribes Hominina and Panina',
            when: '2.3-1.6 mya',
            info: 'Humans and extinct biped ancestors separate from chimpanzees'
        },
        {
            what: 'Homo habilis',
            when: '4-7 mya',
            info: 'Human ancestor or related species',
            link: 'https://en.wikipedia.org/wiki/Homo_habilis',
            source: 'Wikipedia'
        },
        {
            what: 'Homo erectus',
            when: '2 mya',
            info: 'Extinct species of archaic human',
            link: 'https://en.wikipedia.org/wiki/Homo_erectus',
            source: 'Wikipedia'
        },
        {
            what: 'Earliest use of fire',
            when: '1 mya',
            info: 'Wonderwerk Cave, South Africa',
            link: 'https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans#Lower_Paleolithic_evidence',
            source: 'Wikipedia'
        },
        {
            what: 'Earliest evidence of cooking',
            when: '.5 mya',
            info: 'By Homo erectus',
            link: 'https://en.wikipedia.org/wiki/Cooking#History',
            source: 'Wikipedia'
        },
    ];

    const humans = humanDates.map(hd => {
        return (
            <tr>
                { hd.link ? <td><a href={hd.link} aria-label={`${hd.source} article on ${hd.what}`}>{hd.what}</a></td> : <td>{hd.what}</td> }
                <td>{hd.when}</td>
                <td>{hd.info}</td>
            </tr>
        )
    });

    const geologicDates = [
        {
            what: 'Paleozoic Era',
            when: '541-252 mya',
            info: 'Ancient life',
            link: 'https://en.wikipedia.org/wiki/Paleozoic',
            source: 'Wikipedia'
        },
        {
            what: 'Carboniferous Period',
            when: '359-299 mya',
            info: 'Its coal beds powered the Industrial Revolution',
            link: 'https://en.wikipedia.org/wiki/Carboniferous',
            source: 'Wikipedia'
        },
        {
            what: 'Mesozoic Era',
            when: '252-66 mya',
            info: 'Age of Reptiles and the Age of Conifers',
            link: 'https://en.wikipedia.org/wiki/Mesozoic',
            source: 'Wikipedia'
        },
        {
            what: 'Cretaceous Period',
            when: '145-66 mya',
            info: 'Further coal beds laid down',
            link: 'https://en.wikipedia.org/wiki/Cretaceous',
            source: 'Wikipedia'
        },
        {
            what: 'Cenozoic Era',
            when: '66 mya - present',
            info: 'Age of Mammals',
            link: 'https://en.wikipedia.org/wiki/Cenozoic',
            source: 'Wikipedia'
        },
    ];

    const geology = geologicDates.map(gd => {
        return (
            <tr>
                { gd.link ? <td><a href={gd.link} aria-label={`${gd.source} article on ${gd.what}`}>{gd.what}</a></td> : <td>{gd.what}</td> }
                <td>{gd.when}</td>
                <td>{gd.info}</td>
            </tr>
        )
    });

    return (
        <Layout title="Numbers" description={'Numbers'}>
            <section class={styles.card}>
                <h2>Numbers</h2>

                <div class={styles.menu}>
                    <span><a class={styles.bang} href="#carbon">Carbon</a></span>
                    <span><a class={styles.bang} href="#co2e">CO2e</a></span>
                    <span><a class={styles.bang} href="#geologic_time">Geologic time</a></span>
                    <span><a class={styles.bang} href="#emissions">Emissions</a></span>
                    <span><a class={styles.bang} href="#energy">Energy</a></span>
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

                <table class={styles.table}>
                    <thead>
                        <tr>
                            <th>What</th>
                            <th>When</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { geology }
                    </tbody>
                </table>


                 {/* e.g. mesozoic, carboniferous,
                Climate e.g. interglacials, Milankovitch cycles
                 */}

                <h3 id="human_time">Human time</h3>

                <p>A rough, and disbuted timeline of <a href="https://en.wikipedia.org/wiki/Timeline_of_human_evolution">human evolution</a>.</p>

                <table class={styles.table}>
                    <thead>
                        <tr>
                            <th>What</th>
                            <th>When</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { humans }
                    </tbody>
                </table>

                <h3 id="emissions">Emissions since when?</h3>

                <p>
                    The IPCC calculates the rise in the global mean surface temperature (GMST) from the beginning of large-scale industrial activity.
                    Their <a aria-label="IPCC Annex: Glossary" href="https://www.ipcc.ch/site/assets/uploads/sites/2/2019/06/SR15_AnnexI_Glossary.pdf">reference period</a> (PDF) is 1850-1900.
                    <div>
                        Industrialisation had begun before this date, primarily in England (<a href="https://ourworldindata.org/contributed-most-global-co2">78% of gobal emissions</a>). 
                        
                        Dates for the Industrial Revolution in Europe and the United States are typically given as starting in 1760, and ending in 1820, or 1840, but emissions were low by comparison to today, just <a aria-label="Our World in Data report on historic CO2 emission" href="https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions">4.96 billion tonnes</a>, and were localised. Prior to this period humans had been burning wood, coal, and clearing land, but emissions were comparatively insignificant.
                        
                        <p><a href="https://ourworldindata.org/grapher/cumulative-co2-emissions-region?stackMode=absolute">Cumulative emissions</a></p>
                        <table class={styles.table}>
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Cumulative emissions (billions of tonnes)</th>
                                </tr>
                            </thead>
                            <tbody>
                                { emissions }
                            </tbody>
                        </table>
                        <p>In 1850 cumulative global emissions were around 0.3% of what they are today.</p>
                    </div>
                </p>

                <h3 id="energy">Energy</h3>

                <h4>Energy density</h4>

                <table class={styles.table}>
                    <thead>
                        <tr>
                            <th>Fuel</th>
                            <th>Energy density MJ/kg</th>
                        </tr>
                    </thead>
                    <tbody>
                        { fuels }
                    </tbody>
                </table>

                <a href="https://energyeducation.ca/encyclopedia/Energy_density"></a>

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

                <h4>Power density</h4>

                <h3>Ocean acidification</h3>

            </section>
        </Layout>
    )
};

export default Numbers;