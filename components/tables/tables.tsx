import Links from 'components/links/Links';
import styles from 'pages/pages.module.scss';
import { CSSProperties } from 'react';

const EnergyDensities = () => {

    const eds = [
        {
            name: "Solar",
            volume: '1.5 microjoules/m3'      
        },
        {
            name: "Wind",
            volume: '0.5-50 J/m3'      
        },
        {
            name: "Lithium-ion battery",
            value: .79,
            volume: '220-260 Wh/kg'
        },
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
            value: 44,
            volume: '35-45,000 MJ/m3'
        },
        {
            name: "Gasoline",
            value: 46,
            volume: '46 MJ/m3'
        },
        {
            name: "Natural gas",
            value: 55,
            volume: '35 MJ/m3'
        },
        {
            name: "Hydrogen",
            value: 143,
            volume: '0.01 MJ/m3'
        },
        {
            name: "Nuclear (uranium-235)",
            value: 3900000
        },
    ];

    const fuels = eds.map(ed => <tr>
            <td>{ed.name}</td>
            { ed.value ? <td>{Number(ed.value).toLocaleString()}</td> : <td></td> }
            { ed.volume ? <td>{ed.volume}</td> : <td></td> }
        </tr>);

    return (<table>
        <thead>
            <tr>
                <th>Fuel</th>
                <th>Energy density MJ/kg</th>
                <th>Energy density</th>
            </tr>
        </thead>
        <tbody class={styles.externalLink}>
            { fuels }
        </tbody>
    </table>);
};

const PowerDensities = () => {

    const densities = [
        // {
        //     name: 'Solar Constant',
        //     low: '1380',
        //     high: '1380',
        // },
        {
            name: 'Biomass',
            low: '0.5',
            high: '0.6',
            median: .08
        },
        {
            name: 'Wind',
            low: '0.5',
            high: '1.5',
            median: 2.02
        },
        {
            name: 'Solar PV',
            low: '4',
            high: '9',
            median: 6.6
        },
        {
            name: 'Solar CSP',
            low: '4',
            high: '10',
            median: 9.7
        },
        {
            name: 'Coal',
            low: '100',
            high: '1000',
            median: 135.1
        },
        {
            name: 'Natural gas',
            low: '200',
            high: '2000',
            median: 482.1
        },
    ];

    const vs = densities.map(e => <tr>
            <td>{e.name}</td>
            <td>{`${Number(e.low).toLocaleString()}-${Number(e.high).toLocaleString()}`}</td>
            <td>{Number(e.median).toLocaleString()}</td>
        </tr>);

    return (<table>
        <thead>
            <tr>
                <th>Power source</th>
                <th>Power density W/m2 range*</th>
                <th>Power density W/m2 median+</th>
            </tr>
        </thead>
        <tbody class={styles.externalLink}>
            { vs }
        </tbody>
    </table>);    
};

const FuelEmissions = () => {

    const fes = [
        {
            name: "Peat",
            value: .38,
            value2: 106
        },
        {
            name: "Wood",
            value: .39,
            value2: 109.6
        },
        {
            name: "Lignite",
            value: .36,
            value2: 101.2
        },
        {
            name: "Anthracite (hard coal)",
            value: .34,
            value2: 94.6
        },
        {
            name: "Crude oil",
            value: .26,
            volume: 73.3
        },
        {
            name: "Gasoline",
            value: .25,
            volume: 69.3
        },
        {
            name: "Natural gas",
            value: .2,
            volume: 56.1
        }
    ];

    const fuels = fes.map(fe => <tr>
            <td>{fe.name}</td>
            <td>{Number(fe.value).toLocaleString()}</td>
            <td>{fe.value2}</td>
        </tr>);

    return (<table>
        <thead>
            <tr>
                <th>Fuel</th>
                <th>Emis­sions kgCO2/kWh</th>
                <th>Emis­sions kgCO2/GJ</th>
            </tr>
        </thead>
        <tbody class={styles.externalLink}>
            { fuels }
        </tbody>
    </table>);
};

const CumulativeEmissions = () => {

    const ces = [
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

    const emissions = ces.map(d => <tr><td>{d.year}</td><td>{Number(d.total).toLocaleString()}</td></tr>);

    return (<table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Cumulative emissions (billions of tonnes)</th>
                </tr>
            </thead>
            <tbody class={styles.externalLink}>
                { emissions }
            </tbody>
        </table>);
};

const Humans = () => {

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
        {
            what: 'Last Glacial Maximum (LGM)',
            when: '120 kya',
            info: 'Ice sheets at their greatest extent',
            link: 'https://en.wikipedia.org/wiki/Last_Glacial_Maximum',
            source: 'Wikipedia'
        },
        {
            what: 'Younger Dryas',
            when: '11.7-12.9 kya',
            info: 'Temporary reversal of climactic warming since LGM',
            link: 'https://en.wikipedia.org/wiki/Younger_Dryas',
            source: 'Wikipedia'
        },
        {
            what: 'Holocene epoch',
            when: '11.65 kya',
            info: 'Interglacial period',
            link: 'https://en.wikipedia.org/wiki/Holocene',
            source: 'Wikipedia'
        },
        {
            what: 'First domestication of livestock',
            when: '10-11 kya',
            info: 'Fertile Crescent',
            link: 'https://en.wikipedia.org/wiki/Domestication#Animals',
            source: 'Wikipedia'
        },
        {
            what: 'Domestication of cereal crops',
            when: '11 kya',
            info: 'Fertile Crescent',
            link: 'https://en.wikipedia.org/wiki/Domestication#History',
            source: 'Wikipedia'
        },
        {
            what: 'James Watt patents his steam engine design',
            when: '1769',
            info: 'Catalyses The Industrial Revolution',
            link: 'https://en.wikipedia.org/wiki/Watt_steam_engine',
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

    const inlineStyle:CSSProperties = {
        width: '8rem'
    };

    return(<table>
        <thead>
            <tr>
                <th>Event</th>
                <th style={inlineStyle}>When</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody class={styles.externalLink}>
            { humans }
        </tbody>
    </table>);
};

const Geology = () => {

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
        {
            what: 'Holocene epoch',
            when: '11.65 kya',
            info: 'Interglacial period',
            link: 'https://en.wikipedia.org/wiki/Holocene',
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

    return (<table>
        <thead>
            <tr>
                <th>Event</th>
                <th>When</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody class={styles.externalLink}>
            { geology }
        </tbody>
    </table>);
};

const Calculators = ({withScores = false}) => {

    let calculators = [    
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
            "source": "https://mossy.earth/methodologies/carbon-footprint-calculator",
            "score": {
                "co2": "6.54",
                "world": "5",
                "shareable": true,
                "sources": true,
                "method": "https://mossy.earth/methodologies/carbon-footprint-calculator",
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
            "name": "Native (US only)",
            "source": "https://native.eco/for-individuals/calculators/"
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
        {
            "name": "giki zero (UK only)",
            "source": "https://zero.giki.earth/"
        },
        {
            "name": "CarbonClick (NZ & AUS only)",
            "source": "https://www.carbonclick.com/"
        },
    ];

    if(withScores) {

        calculators = calculators.filter(c => c.score);

        const rows = calculators.map(c => {

            const other = c.score.other.map(o => {
                return (
                    <li>{o}</li>
                )
            });

            return (
            <tr>
                <td>{c.name}</td>
                <td>{c.score.co2}t CO2e</td>
                <td class={styles.wideOnly}>{c.score.shareable ? 'true' : 'false'}</td>
                {c.score.method ? <td class={styles.wideOnly}><a id={c.name} href={c.score.method}>{c.score.sources ? 'true' : 'false'}</a></td> : null }
                <td class={styles.wideOnly}><ul class={styles.dashedItemsList}>{other}</ul></td>
            </tr> )
        });

        return (
            <table>
            <thead>
                <tr>
                    <th>Calculator</th>
                    <th>Footprint</th>
                    <th class={styles.wideOnly}>Shareable</th>
                    <th class={styles.wideOnly}>Sources</th>
                    <th class={styles.wideOnly}>Other</th>
                </tr>
            </thead>
            <tbody class={styles.externalLink}>
                { rows }
            </tbody>
            </table>
        );
    } else {
        return <Links.ExternalLinksList links={calculators} />
    }
};

const EmissionsDates = () => {

    const dates = [        
        {
            what: 'James Watt patents his steam engine design',
            when: '1769',
            info: 'Catalyses The Industrial Revolution',
            link: 'https://en.wikipedia.org/wiki/Watt_steam_engine',
            source: 'Wikipedia'
        },
        {
            what: 'UK electricty\'s first coal free hours',
            when: 'May 2016',
            info: 'Electricty without coal for first time since 1882',
            link: 'https://interactive.carbonbrief.org/how-uk-transformed-electricity-supply-decade/',
            source: 'Carbon Brief'
        },
        {
            what: 'Windfarms win electricity contracts at auction',
            when: 'September 2017',
            info: 'Price for offshore wind lower than gas-fired power station',
            link: 'https://interactive.carbonbrief.org/how-uk-transformed-electricity-supply-decade/',
            source: 'Carbon Brief'
        },
    ];

    const edates = dates.map(hd => {
        return (
            <tr>
                { hd.link ? <td><a href={hd.link} aria-label={`${hd.source} article on ${hd.what}`}>{hd.what}</a></td> : <td>{hd.what}</td> }
                <td>{hd.when}</td>
                <td>{hd.info}</td>
            </tr>
        )
    });

    const inlineStyle:CSSProperties = {
        width: '8rem'
    };

    return(<table>
        <thead>
            <tr>
                <th>What</th>
                <th style={inlineStyle}>When</th>
                <th></th>
            </tr>
        </thead>
        <tbody class={styles.externalLink}>
            { edates }
        </tbody>
    </table>);
};

const MetricPrefixes = () => {

    const prefixes = [
        {
            name: 'peta',
            symbol: 'P',
            base: 15
        },
        {
            name: 'tera',
            symbol: 'T',
            base: 12
        },
        {
            name: 'giga',
            symbol: 'G',
            base: 9
        },
        {
            name: 'mega',
            symbol: 'M',
            base: 6
        },
        {
            name: 'kilo',
            symbol: 'k',
            base: 3
        },
        {
            name: 'hecto',
            symbol: 'h',
            base: 2
        },
        {
            name: 'deca',
            symbol: 'da',
            base: 1
        },
    ];

    const ps = prefixes.map(p => {
        return (
            <tr>
                <td>{p.name}</td>
                <td>{p.symbol}</td>
                <td>10<span class={styles.super}>{p.base}</span></td>
            </tr>
        )
    });

    return(<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Base</th>
            </tr>
        </thead>
        <tbody class={styles.externalLink}>
            { ps }
        </tbody>
    </table>);
};

const Tables = {
    EnergyDensities,
    PowerDensities,
    FuelEmissions,
    CumulativeEmissions,
    Humans,
    Geology,
    Calculators,
    EmissionsDates,
    MetricPrefixes
};

export default Tables;
