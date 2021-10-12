import { useEffect, useState, useRef } from 'preact/hooks';

import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import Table from 'pages/charts/energy-and-emissions';
import PieChart from 'pages/charts/main-components-of-energy-consumption-in-ict'
;
import styles from 'pages/dashboard/Dashboard.module.scss';

const NumbersAndUnits = () => {

    const dataSources = [
        {
            id: 1,
            name: 'Website Carbon Calculator | Grey power',
            src: 'https://www.websitecarbon.com/how-does-it-work/',
            energy: '1.8',
            emissions: '475',
            selected: true
        },
        {
            id: 2,
            name: 'Website Carbon Calculator | Green power',
            src: 'https://www.websitecarbon.com/how-does-it-work/',
            energy: '1.8',
            emissions: '33.4',
            selected: true
        },
        {
            id: 3,
            name: 'The Shift Project | Low energy use',
            src: 'https://theshiftproject.org/en/carbonalyser-browser-extension/',
            energy: '0.23',
            emissions: '276',
            selected: false
        },
        // {
        //     id: 4,
        //     name: 'IEA',
        //     src: 'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines',
        //     energy: '0.88',
        //     emissions: '',
        //     selected: false
        // },
        // {
        //     id: 5,
        //     name: 'Electricity Intensity of Internet Data Transmission',
        //     src: 'https://www.researchgate.net/publication/318845230_Electricity_Intensity_of_Internet_Data_Transmission_Untangling_the_Estimates_Electricity_Intensity_of_Data_Transmission',
        //     energy: '0.06',
        //     // {
        //     //     low: '0.015',
        //     //     high: '0.06'
        //     // },
        //     emissions: '',
        //     selected: false
        // },
        // {
        //     id: 6,
        //     name: 'IEA',
        //     src: 'https://www.iea.org/reports/global-energy-co2-status-report-2019/emissions',
        //     energy: '',
        //     emissions: '475',
        //     selected: false
        // },
    ];

    const medianKbsTransferred = 2198;    
    const averageMonthlyTrafficPerUser = 140;

    const externalLinks = [
        {
            "name": "How to stop data centres from gobbling up the world’s electricity | Nature",
            "source": "https://www.nature.com/articles/d41586-018-06610-y"
        },
        {
            "name": "Global Energy & CO2 Status Report 2019: Emissions | IEA",
            "source": "https://www.iea.org/reports/global-energy-co2-status-report-2019/emissions"
        },
        {
            "name": "Website Carbon Calculator | How does it work?",
            "source": "https://www.websitecarbon.com/how-does-it-work/"
        },
    ];

    const [active, setActive] = useState({ gigabytes: 1 } as any); // ad type!

    const setParentState = _active => {                
        setActive({ ...active, ..._active });
    };

    const selectedSource = useRef<HTMLSpanElement>(null);
    const selectedBytes = useRef<HTMLInputElement>(null);
    const selectedEnergy = useRef<HTMLInputElement>(null);
    const selectedCarbon = useRef<HTMLInputElement>(null);
    const calculatedEmissionsValue = useRef<HTMLSpanElement>(null);
    const calculatedEnergyValue = useRef<HTMLSpanElement>(null);

    useEffect(() => {

        if(selectedSource.current) {

            if(!active.energy) return;

            selectedSource.current.innerText = active.name;            
            selectedEnergy.current.value = active.energy;
            selectedCarbon.current.value = active.emissions;

            calculatedEnergyValue.current.innerText = Math.round(active.gigabytes * active.energy * 100 / 100) as any as string;
            calculatedEmissionsValue.current.innerText = Math.round(active.gigabytes * active.energy * active.emissions * 100 / 100) / 1000 as any as string;
        }

    }, [active]);

    const onBlur = e => {        
        setActive({ ...active, gigabytes: e.target.value});
    };

    return (
        <div class={styles.wrapper}>
            <Layout header={'Numbers & Units'} title={'Numbers & Units'} description={'The everyday numbers and units of web'}>
                <section>
                    <p>ICT (Internet and Communications Technology) accounts for around 1% of global energy demand, and is responsible for 2% of global CO<span class={styles.sub}>2</span>e emissions. Both figures are <Links.EL link={{source:'https://www.nature.com/articles/d41586-018-06610-y'}}>predicted to rise</Links.EL>, according to Nature.</p>
                    <p>Despite exponential growth in data usage, electricity demand has remained nearly flat thanks to increased efficiences in devices, networks, and data centres. According to Anders Andrae this looks set to change. In a best case scenario, ICT will consume 8% of global electricity use by 2030; in a worst case scenario this rises to 21%, with the majority of the increase expected to come from data centres and networks.</p>
                    <p>A counter view from, among others, Eric Masanet, is that newfound efficiencies will continue to account for increases, and that a proliferation of smaller devices even lead to a fall in demand.</p>
                    <p><strong>How should developers and designers interpret these figures in respect of the web sites and apps they build?</strong></p>
                    <h2>Page impact</h2>
                    <p>The CO<span class={styles.sub}>2</span> emissions associated with a web page depend on many factors and vary depending on which are taken into account. <Links.EL link={{source:'https://www.wholegraindigital.com/blog/website-energy-consumption/'}}>Tom Greenwood</Links.EL> describes this problem and explains how the <Links.EL link={{source:'https://www.websitecarbon.com/'}}>website carbon calculator</Links.EL> measures a site's emissions.</p>
                    <p>The aim here is to get a feel for what numbers are important, the units used, and ballpark values.</p>
                    <p>There are 2 numbers we need to calculate emissions. 1 Kwh (kilowatt-hour) is the energy consumed by a 1,000-watt or 1-kilowatt electrical appliance operating for 1 hour. It is commonly used as the billing unit for domestic users.</p>
                    <div>            
                        <Table dataSources={dataSources} setParentState={setParentState} />
                    </div>
                    <p>
                        <div><em><span ref={selectedSource}></span></em></div>
                        <div class={styles.selectedData}>
                            <label htmlFor="selectedBytes">Gigabytes GB</label>
                            <input id="selectedBytes" ref={selectedBytes} type="number" value={active.gigabytes} onBlur={onBlur} />         
                            <label htmlFor="selectedEnergy">kWh/GB</label>
                            <input id="selectedEnergy" ref={selectedEnergy} type="number" />         
                            <label htmlFor="selectedCarbon">gCO2e/kWh</label>
                            <input id="selectedCarbon" ref={selectedCarbon} type="number" />
                        </div>
                        <div class={styles.calculatedValues}>
                            <div>
                                <span ref={calculatedEnergyValue}></span> <span>kWh</span>.
                            </div>
                            <div>
                                <span ref={calculatedEmissionsValue}></span> <span>Kg of CO2</span>.
                            </div>
                        </div>
                    </p>
                    <p>The full range of suggested values for kWh/GB extends over several orders of magnitude.</p>
                    <p><strong>Is there a way we can evaluate our page emissions values in the light of other data?</strong></p>
                    <p>One comparable value is per capita emissions. These are also scope dependent - for example, few countries acknowledge emissions associated with flying and shipping, and there is no consensus as to where emissions from exports should fall (or how to incorporate historical emissions).</p>
                    <div>
                        <PieChart />
                    </div>
                </section>
                <section>
                <h2>References</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            </Layout>
        </div>
    )
};

export default NumbersAndUnits;