import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Numbers = () => {

    const eds = [
        {
            name: "peat",
            value: 15
        },
        {
            name: "wood",
            value: 16
        },
        {
            name: "coal",
            value: 24
        },
        {
            name: "crude oil",
            value: 44
        },
        {
            name: "gasoline",
            value: 46
        },
        {
            name: "natural gas",
            value: 46
        },
        {
            name: "nuclear (uranium-235)",
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

    const geologicDates = [
        {
            what: '',
            when: ''
        },
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

                 {/* e.g. mesozoic, carboniferous,
                Climate e.g. interglacials, Milankovitch cycles
                Homo time, and Homo sapiens
                Cooking: 500,000 years or 2 million? */}

                <h3 id="human_time">Human time</h3>

                <a href="https://en.wikipedia.org/wiki/Timeline_of_human_evolution">Human Evolution</a>    

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

                power density

                <h3>Ocean acidification</h3>

            </section>
        </Layout>
    )
};

export default Numbers;