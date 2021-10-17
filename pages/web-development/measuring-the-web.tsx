import { useEffect, useState, useRef } from 'preact/hooks';

import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import Table from 'pages/charts/energy-and-emissions';
import PieChartComponentEnergyConsumption from 'pages/charts/main-components-of-energy-consumption-in-ict';
import Formula from 'components/tools/formula';

import styles from 'pages/dashboard/Dashboard.module.scss';

const Output = ({inputs}) => {

    const calculatedEnergyValue = useRef<HTMLSpanElement>(null);
    const calculatedEmissionsValue = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        calculatedEnergyValue.current.innerText = (Math.round(inputs.bytes * inputs.energy * 10000) / 10000).toFixed(4).toLocaleString();
        calculatedEmissionsValue.current.innerText = (Math.round(inputs.bytes * inputs.energy * inputs.emissions * 100) / 100).toLocaleString();
    });
    
    return (
        <div>
            <div><strong>Output values</strong></div>
            <div>
                <span ref={calculatedEnergyValue}></span> <span>kWh of energy</span>
            </div>
            <div>
                <span ref={calculatedEmissionsValue}></span> <span>g of <Formula>CO2</Formula> emissions</span>
            </div>
        </div>
    );
};

const NumbersAndUnits = () => {

    const dataEnergyIntensity = [ // kWh/GB
        {
            type: 'fixed network energy',
            intensity: .0065,
            src: 'Carbon Trust',
            link: 'https://prod-drupal-files.storage.googleapis.com/documents/resource/public/Carbon-impact-of-video-streaming.pdf',             
        },
        {
            type: 'mobile network energy',
            intensity: .1,
            src: 'Carbon Trust',
            link: 'https://prod-drupal-files.storage.googleapis.com/documents/resource/public/Carbon-impact-of-video-streaming.pdf',             
        },
        {
            type: 'router',
            intensity: .025,
            src: 'Carbon Trust',
            link: 'https://prod-drupal-files.storage.googleapis.com/documents/resource/public/Carbon-impact-of-video-streaming.pdf',             
        },
    ];

    const dataSources = [
        {
            id: 1,
            name: 'Website Carbon (grey power)',
            link: 'https://www.websitecarbon.com/how-does-it-work/',
            energy: 1.8,
            emissions: 475,
            selected: true
        },
        {
            id: 2,
            name: 'The Shift Project (EU)',
            link: 'https://theshiftproject.org/en/carbonalyser-browser-extension/',
            energy: 0.23,
            emissions: 276,
            selected: false
        },
        {
            id: 3,
            name: 'Website Carbon (green power)',
            link: 'https://www.websitecarbon.com/how-does-it-work/',
            energy: 1.8,
            emissions: 33.4,
            selected: false
        },
        {
            id: 4,
            name: 'IEA',
            link: 'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines',
            energy: 0.077,
            emissions: 475,
            selected: false
        },
        {
            id: 5,
            name: 'IEA (France)',
            link: 'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines',
            energy: 0.077,
            emissions: 26,
            selected: false
        },
        // {
        //     id: 4,
        //     name: 'marmelab',
        //     link: 'https://marmelab.com/blog/2021/03/04/argos-comparing-the-energy-consumption-of-two-web-stacks.html',
        //     energy: 0.011,
        //     emissions: ??,
        //     selected: false
        // },
        // {
        //     id: 5,
        //     name: 'Anders Andrae (fixed 2020)',
        //     link: 'https://www.researchgate.net/profile/Anders-Andrae/publication/342643762_New_perspectives_on_internet_electricity_use_in_2030/links/5efe34a3299bf18816fb82eb/New-perspectives-on-internet-electricity-use-in-2030.pdf',
        //     energy: '.085',
        //     emissions: '1',
        //     selected: false
        // },
        // {
        //     id: 6,
        //     name: 'Anders Andrae (wireless 2020)',
        //     link: 'https://www.researchgate.net/profile/Anders-Andrae/publication/342643762_New_perspectives_on_internet_electricity_use_in_2030/links/5efe34a3299bf18816fb82eb/New-perspectives-on-internet-electricity-use-in-2030.pdf',
        //     energy: '0.195',
        //     emissions: '1',
        //     selected: false
        // },

        // {
        //     id: 5,
        //     name: 'Electricity Intensity of Internet Data Transmission',
        //     link: 'https://www.researchgate.net/publication/318845230_Electricity_Intensity_of_Internet_Data_Transmission_Untangling_the_Estimates_Electricity_Intensity_of_Data_Transmission',
        //     energy: '0.06',
        //     // {
        //     //     low: '0.015',
        //     //     high: '0.06'
        //     // },
        //     emissions: '',
        //     selected: false
        // },
    ];

    const broadcastDefinitions = {
        sd: 720,
        uhd: 1080,
        units: 'GB/hr',
        providers: [
            {
                provider: 'BBC',
                sources: [
                    {
                        title: 'Can I watch programmes using my mobile data?',
                        link: 'https://www.bbc.co.uk/iplayer/help/questions/getting-started-with-bbc-iplayer/mobile-data'
                    }
                ],
                mobile: {
                    ld: 225,
                },
                desktop: {                    
                    sd: 0,
                    hd: 0,
                    uhd: 0
                }
            },
            {
                provider: 'Netlfix',
                mobile: {},
                desktop: {                    
                    sd: 0,
                    hd: 0,
                    uhd: 0
                }
            },
        ]
    }    
    
    const medianKBsTransferred = 2198;
    const averageMonthlyTrafficPerUser = 140;
    const averageAnnualEnergy = 32250;
    const averageAnnualElectricty = 4500;
    const averageAnnualCarbonFootprint = 5.48;
    
    const externalLinks = [
        {
            "name": "Website Carbon Calculator | How does it work?",
            "source": "https://www.websitecarbon.com/how-does-it-work/"
        },
        {
            "name": "Lean ICT - Towards digital sobriety (PDF) | The Shift Project",
            "source": "https://theshiftproject.org/wp-content/uploads/2019/03/Lean-ICT-Report_The-Shift-Project_2019.pdf"
        },
        {
            "name": "The carbon footprint of streaming video: fact-checking the headlines | IEA",
            "source": "https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines"
        },
        {
            "name": "Carbon impact of online video streaming | Carbon Trust",
            "source": "https://www.carbontrust.com/news-and-events/news/updated-calculation-released-on-the-carbon-impact-of-online-video-streaming"
        },
        {
            "name": "Page Weight Report | http archive",
            "source": "https://httparchive.org/reports/page-weight"
        },
        {
            "name": "New perspectives on internet electricity use in 2030 | Anders S.G. Andrae",
            "source": "https://www.researchgate.net/profile/Anders-Andrae/publication/342643762_New_perspectives_on_internet_electricity_use_in_2030/links/5efe34a3299bf18816fb82eb/New-perspectives-on-internet-electricity-use-in-2030.pdf"
        },
        {
            "name": "How to stop data centres from gobbling up the world’s electricity | Nature",
            "source": "https://www.nature.com/articles/d41586-018-06610-y"
        },
        {
            "name": "Global Energy & CO2 Status Report 2019: Emissions | IEA",
            "source": "https://www.iea.org/reports/global-energy-co2-status-report-2019/emissions"
        },
        {
            "name": "How to control how much data Netflix uses",
            "source": "https://help.netflix.com/en/node/87"
        },
        {
            "name": "The carbon impact of streaming: an update on BBC TV's energy footprint | BBC",
            "source": "https://www.bbc.co.uk/rd/blog/2021-06-bbc-carbon-footprint-energy-envrionment-sustainability"
        },
        {
            "name": "Environmental Impact of Electricity Consumption | BBC white paper (PDF)",
            "source": "https://downloads.bbc.co.uk/rd/pubs/whp/whp-pdf-files/WHP372.pdf"
        },
        {
            "name": "Dimpact | Collaborative project to calculate carbon emissions",
            "source": "https://dimpact.org/about"
        },
    ];

    const [inputs, setInputs] = useState({ bytes: 1 } as any); // ad type!
    const [showOutputs, setShowOutputs] = useState(false);

    const setParentState = updatedInputs => {                
        setInputs({ ...inputs, ...updatedInputs });
    };

    const selectedSource = useRef<HTMLSpanElement>(null);
    const selectedBytes = useRef<HTMLInputElement>(null);
    const selectedEnergy = useRef<HTMLInputElement>(null);
    const selectedCarbon = useRef<HTMLInputElement>(null);
    const calculatedCiscoPerUserEnergyValue = useRef<HTMLSpanElement>(null);
    const calculatedCiscoPerUserGrammesValue = useRef<HTMLSpanElement>(null);
    const calculatedCiscoPerUserTonnesValue = useRef<HTMLSpanElement>(null);
    const calculatedEnergyRatio = useRef<HTMLSpanElement>(null);
    const calculatedEmissionsRatio = useRef<HTMLSpanElement>(null);

    useEffect(() => {

        if(selectedSource.current) {

            if(!inputs.energy) return;

            selectedSource.current.innerText = inputs.name;            
            selectedEnergy.current.value = inputs.energy;
            selectedCarbon.current.value = inputs.emissions;            
            
            calculatedCiscoPerUserEnergyValue.current.innerText = (Math.round(averageMonthlyTrafficPerUser * 12 * inputs.energy * 100) / 100).toLocaleString();
            calculatedCiscoPerUserGrammesValue.current.innerText = (Math.round(averageMonthlyTrafficPerUser * 12 * inputs.energy * inputs.emissions * 100) / 100).toLocaleString();
            calculatedCiscoPerUserTonnesValue.current.innerText = (Math.round(averageMonthlyTrafficPerUser * 12 * inputs.energy * inputs.emissions / 1000 / 1000 * 100 )/ 100).toLocaleString();

            calculatedEnergyRatio.current.innerText = (Math.round(((averageMonthlyTrafficPerUser * 12 * inputs.energy) / averageAnnualElectricty ) * 100 * 100)/100).toLocaleString();
            calculatedEmissionsRatio.current.innerText = (Math.round(((averageMonthlyTrafficPerUser * 12 * inputs.energy * inputs.emissions) / 1000 / 1000 / averageAnnualCarbonFootprint ) * 100 * 100)/ 100).toLocaleString();
        }

    }, [inputs, showOutputs]);

    const onChangeInput = ({ prop, value}) => {        
        setInputs({ ...inputs, [prop]: value});
    };

    useEffect(() => {
        
        if(typeof window === 'undefined') return;

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const inputs = document.getElementById('inputs').offsetTop;
            if(inputs - (window.innerHeight / 2) < scrollPosition) {    
                setShowOutputs(true);
            }
        }, false);
        
    }, []);

    return (
        <div class={styles.wrapper}>
            <Layout header={'Measuring the web'} title={'Measuring the web'} description={'Measuring page weight, the impact of streaming video, energy intensity and carbon emissions as applied to the Internet in numbers and units.'}>
                <section>
                    <p><strong>In order to build more sustainable websites and apps, we first need to measure the energy they use, and the carbon for which they are responsible.</strong></p>
                    <p>The CO<span class={styles.sub}>2</span> emissions associated with a web page depend on many factors and vary depending on which are taken into account. <Links.EL link={{source:'https://www.wholegraindigital.com/blog/website-energy-consumption/'}}>Tom Greenwood</Links.EL> describes this problem and explains how the <Links.EL link={{source:'https://www.websitecarbon.com/'}}>website carbon calculator</Links.EL> measures a site's emissions.</p>
                    <p>As we will see there is a range of values for all of the factors contributing to energy intensity and emissions levels. The aim here is to get a feel for which numbers are important, the units used, and calculate some ballpark values.</p>                                             
                    <h2>Units</h2>
                    <p>The data that makes up a web page or a video is measured in <strong>bytes</strong>. For video this value is typically expressed in gigabytes (a billion bytes). For example, <Links.EL link={{source:'https://help.netflix.com/en/node/87'}}>Netflix</Links.EL> equates 1 hour's viewing at 'Standard Definition' to 1 GB.</p>
                    <p>Web pages are measured in thousands (kilobytes or KBs) or millions of bytes. The <Links.EL link={{source:'https://httparchive.org/reports/page-weight'}}>http archive</Links.EL> puts the current mean 'page weight' or 'page size' at {medianKBsTransferred.toLocaleString()}KBs (desktop), or approximately 2.2 megabytes (2.2 million bytes of information). For mobile the value is {(1942).toLocaleString()}KBs.</p>
                    <p>
                        <strong>A kilowatt-hour (kWh)</strong> is the energy consumed by a {(1000).toLocaleString()}-watt or 1-kilowatt electrical appliance operating for 1 hour. It is commonly used as the billing unit for business and domestic users.
                    </p>
                    <p>Kilowatt-hours are useful for aggregating electricity use from multiple sources. For example, a toaster rated at {(1000).toLocaleString()} watts on for 15 minutes a day will use .25kWh. A small fridge might use .5kWhs per day (manufacturers provide annual values because fridges don't use electricity all the time). The energy use of domestic appliances (the toaster, the fridge etc.), or the laptop, router, transmission towers, data centre, etc. which contribute to streaming a video, or downloading a web page, can be combined in a single value measured in kWhs. </p>
                    <p>
                        <blockquote cite="https://www.researchgate.net/publication/266968141_The_Energy_Intensity_of_the_Internet_Home_and_Access_Networks/link/543ff39c0cf21227a11b9d78/download">
                            The energy intensity of the Internet, expressed as energy consumed to transmit a given volume of data, is one of the most controversial issues. Existing studies of the Internet energy intensity give Output ranging from 136 kWh/GB down to 0.0064 kWh/GB, a factor of more than 20,000.
                        </blockquote>
                        <cite><Links.EL link={{source:'https://www.researchgate.net/publication/266968141_The_Energy_Intensity_of_the_Internet_Home_and_Access_Networks/link/543ff39c0cf21227a11b9d78/download'}}>The Energy Intensity of the Internet: Home and Access Networks</Links.EL> </cite>
                    </p>
                    <p><strong>Greenhouse gas emission intensity (g<Formula>CO2</Formula>e/kWh)</strong> is measured in grammes of <Formula>CO2</Formula>e emitted per kilowatt-hour. This figure was <Links.EL link={{source:'https://www.eea.europa.eu/data-and-maps/indicators/overview-of-the-electricity-production-3/assessment-1'}}>255</Links.EL> grammes in the EU in 2019 and, if pledges to decarbonise electricity are honoured, this will fall to 0 in 2050. The figure for France was just 56 grammes, a consequence of their reliance on nuclear energy.</p>
                    <p>
                        <aside>
                            <h4><Formula>CO2</Formula>e</h4>
                            <div>The <strong>e</strong> in <Formula>CO2</Formula><strong>e</strong> stands for <strong>equivalent</strong>, and is used to compare emissions from different greenhouse gases (GHGs). Annual global <Formula>CO2</Formula> emissions are 36.44Gt (2019) but <Formula>CO2</Formula><strong>e</strong> (including emissions from other GHGs such as methane and nitrous oxide) are over <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>50Gt</Links.EL> - 50 gigatonnes or 50 billion tonnes.</div>
                        </aside>
                    </p>               
                    <h2 id="inputs">Measuring electricity & emissions</h2>
                    <div>            
                        <Table dataSources={dataSources} setParentState={setParentState} />
                    </div>

                    <h3>Output values</h3>
            
                    {showOutputs ? <p>
                                            
                        <div></div>
                        <div class={styles.inputDataFixedPosition}>

                            <div class={styles.inputData}>
                                <div><strong>Input values</strong></div>
                                <div><em><span ref={selectedSource}></span></em></div>
                                <div>
                                    <input id="selectedBytes" ref={selectedBytes} type="number" value={inputs.bytes} onChange={e => onChangeInput({prop: 'bytes', value: e.target.value})} />         
                                    <label htmlFor="selectedBytes">bytes GB</label>
                                </div>
                                <div>
                                    <input id="selectedEnergy" ref={selectedEnergy} type="number" onChange={e => onChangeInput({prop: 'energy', value: e.target.value })} />
                                    <label htmlFor="selectedEnergy">kWh/GB</label>
                                </div>
                                <div>
                                    <input id="selectedCarbon" ref={selectedCarbon} type="number" onChange={e => onChangeInput({prop: 'emissions', value: e.target.value })} />
                                    <label htmlFor="selectedCarbon">g<Formula>CO2</Formula>e/kWh</label>
                                </div>
                                <Output inputs={inputs} />
                            </div>

                        </div>

                        <div class={styles.calculatedValues}>
                            <Output inputs={inputs} />
                            <div>
                                What do these output values mean, and what do they tell us about our input values?
                            </div>
                        </div>
                    </p> : null}

                    <h2>Are these figures accurate?</h2>

                    <p>Calculating electricity use and emissions currently relies on assumptions and averages. Averages are useful for smoothing out values but they can also disguise distortions - this is why the http archive uses <Links.EL link={{source:'https://almanac.httparchive.org/en/2020/methodology'}}>median rather than average values</Links.EL> when reporting page size. The average can be affected by very small and very large page sizes, whereas the median expresses typical page size - 50% of values fall either side of the median. </p>
                    <p><strong>Is there a way we can evaluate our page emissions values in the light of other data?</strong></p>
                    <p>One comparable value is per capita <Formula>CO2</Formula> emissions.</p>
                    {/* <p>These are also scope dependent - for example, few countries acknowledge emissions associated with flying and shipping, and there is no consensus as to where emissions from exports should fall (or how to incorporate historical emissions).</p> */}
                    <p>
                        <blockquote cite="https://www.cisco.com/c/dam/m/en_us/solutions/service-provider/vni-forecast-highlights/pdf/United_Kingdom_2021_Forecast_Highlights.pdf">
                            In the United Kingdom, the average Internet user will generate 140.0 Gigabytes of Internet traffic per month in 2021, up 159% from 54.0 Gigabytes per month in 2016…
                        </blockquote>
                        <cite><Links.EL link={{source:'https://www.cisco.com/c/dam/m/en_us/solutions/service-provider/vni-forecast-highlights/pdf/United_Kingdom_2021_Forecast_Highlights.pdf'}}>Cisco</Links.EL> </cite>
                    </p>
                    <p>
                        <div class={styles.calculatedValues}>
                            <div>
                                <div>
                                    <span ref={calculatedCiscoPerUserEnergyValue}></span> <span>kWhs of energy</span>
                                </div>
                                <div>
                                    <span ref={calculatedCiscoPerUserGrammesValue}></span> <span>g</span> <span>(<span ref={calculatedCiscoPerUserTonnesValue}></span> tonnes)</span> <span> of <Formula>CO2</Formula></span>
                                </div>
                            </div>
                            <div>Using Cisco's figure value for gigabytes of data gives an annual value of ({averageMonthlyTrafficPerUser}*12) {(1680).toLocaleString()} GBs. <button class={styles.btn} onClick={e => onChangeInput({prop: 'bytes', value: 1680 })} > Set data input to 1680GBs </button></div>
                        </div>
                    </p>
                    <p>
                        <div class={styles.inset}>
                            <div>
                                <strong>How does this compare to the UK average electricity use per person of <Links.EL link={{source:'https://ourworldindata.org/energy/country/united-kingdom#per-capita-how-much-energy-does-the-average-person-consumehttps://ourworldindata.org/energy/country/united-kingdom#per-capita-how-much-energy-does-the-average-person-consume'}}>{(averageAnnualElectricty).toLocaleString()} kWhs</Links.EL>?</strong>
                            </div>
                            <div>Internet electricity use as a percentage of total electricity use: <span ref={calculatedEnergyRatio}></span><span>%</span></div>
                        </div>
                    </p>
                    <p>
                        <div class={styles.inset}>
                            <div>
                                <strong>How does this compare to the UK average emissions per person of <Links.EL link={{source:'https://ourworldindata.org/co2/country/united-kingdom#per-capita-how-much-co2-does-the-average-person-emit'}}>{(averageAnnualCarbonFootprint).toLocaleString()} tonnes</Links.EL> (2019)?</strong>
                            </div>
                            <div>Internet emissions as a percentage of total annual per capita emissions: <span ref={calculatedEmissionsRatio}></span><span>%</span></div>
                        </div>
                    </p>

                    {/* <h2>Differences of opinion</h2>

                    <blockquote cite="https://www.bbc.co.uk/rd/blog/2021-06-bbc-carbon-footprint-energy-envrionment-sustainability">  
                        The Output and comparisons here reveal just how challenging it can be to model complex systems. This is clear from the differences between the Carbon Trust and iPlayer estimates that resulted from alternative assumptions – which are necessary ingredients to any model. However, despite these differences, our Output show good accordance with the Carbon Trust study. Research in this area highlights the value of using robust science to enhance awareness of the carbon impact of TV services. This is essential if we are to reduce our emissions as an industry and would not be possible without the continued collaboration of media organisations and academics.
                    </blockquote>
                    <cite><Links.EL link={{source:'https://www.bbc.co.uk/rd/blog/2021-06-bbc-carbon-footprint-energy-envrionment-sustainability'}}>The carbon impact of streaming: an update on BBC TV's energy footprint</Links.EL></cite> */}

                    {/* <h2>What next</h2>

                    <p>The relatively low climate impact of streaming video today is thanks to rapid improvements in the energy efficiency of data centres, networks and devices. But slowing efficiency gains, rebound effects and new demands from emerging technologies, including artificial intelligence (AI) and blockchain, raise increasing concerns about the overall environmental impacts of the sector over the coming decades.</p> */}

                    <p>
                        And what bla bla, bla bla,bla bla,bla bla,bla bla,bla bla, etc.
                        <figure>
                            <figcaption>
                                <div>
                                <span><strong>Main components of ICT energy consumption (2017)</strong></span>
                                <Links.EL link={{source:'https://www.climatecare.org/resources/news/infographic-carbon-footprint-internet/'}}>climate care - The carbon footprint of the Internet</Links.EL>
                                </div>
                            </figcaption>
                            <PieChartComponentEnergyConsumption />
                        </figure>
                    </p>

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

                    {/* <p>ICT (Internet and Communications Technology) accounts for around 1% of global energy demand, and is responsible for 2% of global CO<span class={styles.sub}>2</span>e emissions. According to Nature, both figures are <Links.EL link={{source:'https://www.nature.com/articles/d41586-018-06610-y'}}>likely to rise</Links.EL>.</p> */}
                    {/* <p>Despite exponential growth in data usage, electricity demand has remained nearly flat thanks to increased efficiences in devices, networks, and data centres. According to Anders Andrae this looks set to change. In a best case scenario, ICT will consume 8% of global electricity use by 2030; in a worst case scenario this rises to 21%, with the majority of the increase expected to come from data centres and networks.</p>
                    <p>A counter view from, among others, Eric Masanet, is that newfound efficiencies will continue to account for increases, and that a proliferation of smaller devices may lead to a fall in demand.</p> */}