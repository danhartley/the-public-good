import { useEffect, useState, useRef } from 'preact/hooks';

import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
import EnergyAndEmissionsTable from 'components/charts/energy-intensity-and-emissions-table';
import WebsiteEnergyAndEmissionsTable from 'components/charts/examples-of-website-energy-and-emissions-table';
import UKDataOptionsTable from 'components/charts/examples-of-internet-data-usage-table';
import PieChartComponentEnergyConsumption from 'components/charts/main-components-of-energy-consumption-in-ict-pie-chart';
import MiniBarChart from 'components/charts/uk-per-capita-data-bar-chart';
import Formula from 'components/tools/formula';
import Top from 'components/top/top';

import { funcs } from 'components/functions/functions';

import styles from 'components/dashboard/Dashboard.module.scss';

const Output = ({inputs}) => {

    const calculatedEnergyValue = useRef<HTMLSpanElement>(null);
    const calculatedEmissionsValue = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        calculatedEnergyValue.current.innerText = funcs.multiplyInputs([inputs.bytes,inputs.energy]).toLocaleString();
        calculatedEmissionsValue.current.innerText = funcs.multiplyInputs([inputs.bytes, inputs.energy, inputs.emissions]).toLocaleString();
    });
    
    return (
        <>
            <div class={styles.widescreen}>
                <span ref={calculatedEnergyValue}></span> <span>kWh of energy</span>
            </div>
            <div class={styles.widescreen}>
                <span ref={calculatedEmissionsValue}></span> <span>g of <Formula>CO2</Formula> emissions</span>
            </div>
        </>
    );
};

const MeasuringTheWeb = () => {

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
                provider: 'Netflix',
                mobile: {},
                desktop: {                    
                    sd: 0,
                    hd: 0,
                    uhd: 0
                }
            },
        ]
    };

    const bytes = [
        {
            medium: 'Median desktop',
            megabytes: 2.2
        },
        {
            medium: 'Median desktop',
            megabytes: 1.9
        },
        {
            medium: '1 hour Netflix SD',
            megabytes: 1000
        },
    ];
    
    const medianKBsTransferred = 2198;
    const averageMonthlyTrafficPerUser = 140;
    const averageAnnualTrafficPerUser = 1680;
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
            "name": "New perspectives on internet electricity use in 2030 | Anders S.G. Andrae (PDF)",
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
        {
            "name": "Electricity Intensity of Internet DataTransmission | Aslan et al.",
            "source": "https://onlinelibrary.wiley.com/doi/epdf/10.1111/jiec.12630"
        },
        {
            "name": "On Global Electricity Usage of Communication Technology: Trends to 2030 | Anders S.G. Andrae, Thomas Edler",
            "source": "https://www.mdpi.com/2078-1547/6/1/117#abstract"
        },
        {
            "name": "Argos: Comparing the Energy Consumption of Two Web Stacks",
            "source": "https://marmelab.com/blog/2021/03/04/argos-comparing-the-energy-consumption-of-two-web-stacks.html"
        },
    ];

    const [inputs, setInputs] = useState({ bytes: 1, energy: 1, emissions: 1 } as any); // ad type!
    const [showOutputs, setShowOutputs] = useState(false);

    const setEnergyAndEmissionsState = updatedInputs => {                
        setInputs({ ...inputs, ...updatedInputs });
    };

    const setDataOptionsState = data => {
        if(inputs.id === undefined) return;    
        setInputs({ ...inputs, bytes: data.gigabytes as any as number });
    };

    const selectedSource = useRef<HTMLSpanElement>(null);
    const selectedBytes = useRef<HTMLInputElement>(null);
    const selectedEnergy = useRef<HTMLInputElement>(null);
    const selectedCarbon = useRef<HTMLInputElement>(null);

    const calculatedCiscoPerUserEnergyValue = useRef<HTMLSpanElement>(null);
    const calculatedCiscoPerUserGrammesValue = useRef<HTMLSpanElement>(null);
    const calculatedCiscoPerUserTonnesValue = useRef<HTMLSpanElement>(null);

    useEffect(() => {

        if(selectedSource.current) {

            if(!inputs.energy) return;

            selectedSource.current.innerText = inputs.name;            
            selectedEnergy.current.value = inputs.energy;
            selectedCarbon.current.value = inputs.emissions;            

            calculatedCiscoPerUserEnergyValue.current.innerText = funcs.multiplyInputs([inputs.bytes, inputs.energy]).toLocaleString();
            calculatedCiscoPerUserGrammesValue.current.innerText = funcs.multiplyInputs([inputs.bytes, inputs.energy, inputs.emissions]).toLocaleString();
            calculatedCiscoPerUserTonnesValue.current.innerText = funcs.multiplyInputs([inputs.bytes, inputs.energy, inputs.emissions, .001]).toLocaleString();            
        }

    }, [inputs, showOutputs]);

    const onChangeInput = ({ prop, value}) => {        
        setInputs({ ...inputs, [prop]: value as any as number});
    };

    useEffect(() => {
        
        if(typeof window === 'undefined') return;

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const inputsTable = document.getElementById('inputs');
            if(!inputsTable) return;
            const inputs = inputsTable.offsetTop;
            if(inputs - (window.innerHeight / 2) < scrollPosition) {    
                setShowOutputs(true);
            }
            const sourcesHeading = document.getElementById('sources');
            if(!sourcesHeading) return;
            const sources = sourcesHeading.offsetTop;
            if(scrollPosition > sources) {
                setShowOutputs(false);
            }
        }, false);

    }, []);

    return (
        <div class={styles.wrapper}>
            <Layout rt="7 to 8" header={'Measuring the web'} title={'Measuring the web'} description={'In order to build more sustainable websites and apps, we first need to measure the energy they use, and the carbon emissions for which they are responsible.'} image="https://live.staticflickr.com/65535/51239910633_a100a905a3_c_d.jpg">
                <section>
                    <h2>In order to build more sustainable websites and apps, we first need to measure the energy they use, and the carbon emissions for which they are responsible.</h2>
                    <p>The CO<span class={styles.sub}>2</span> emissions associated with digital products and services depends on many factors and varies depending on which are taken into account.</p>
                    <p>I am going to concentrate on websites, including web apps, and briefly cover streaming video. The aim is to get a feel for which numbers are important, the units used, and calculate some ballpark values.</p>                                             
                    <h3>Units</h3>
                    <p>The data that makes up a web page or a video are measured in <strong>bytes</strong>. For video this value is typically expressed in gigabytes (a billion bytes). For example, <Links.EL link={{source:'https://help.netflix.com/en/node/87'}}>Netflix</Links.EL> equates 1 hour's viewing at 'Standard Definition' to 1 GB.</p>
                    <p>Web pages are measured in thousands (kilobytes or KBs), or millions of bytes (megabytes, or MBs). The <Links.EL link={{source:'https://httparchive.org/reports/page-weight'}}>http archive</Links.EL> puts the current mean 'page weight' or 'page size' at {medianKBsTransferred.toLocaleString()}KBs (desktop), or approximately 2.2 megabytes (2.2 million bytes of information). For mobile the value is {(1942).toLocaleString()}KBs.</p>                    
                    <p>
                        <strong>A kilowatt-hour (kWh)</strong> is the energy consumed by a {(1000).toLocaleString()}-watt or 1-kilowatt electrical appliance operating for 1 hour. It is commonly used as the billing unit for business and domestic users.
                    </p>
                    <p>Kilowatt-hours are useful for aggregating electricity use from multiple sources. For example, a toaster rated at {(1000).toLocaleString()} watts on for 15 minutes a day will use .25kWh. A small fridge might use .5kWhs per day (manufacturers provide annual values because fridges don't use electricity all the time).</p>
                    <p>The energy use of domestic appliances (the toaster, the fridge, etc.), or the laptop, router, transmission tower, data centre, etc. which contribute to streaming a video, or downloading a web page, can be combined in a single value measured in kWhs.</p>
                    <p>The cost (measured in energy intensity or carbon dioxide emissions) of downloading a web page, or streaming a video must account for multiple systems and devices. Coming up with a single figure is tricky, and controversial.</p>
                    <blockquote cite="https://www.researchgate.net/publication/266968141_The_Energy_Intensity_of_the_Internet_Home_and_Access_Networks/link/543ff39c0cf21227a11b9d78/download">
                            The energy intensity of the Internet, expressed as energy consumed to transmit a given volume of data, is one of the most controversial issues. Existing studies of the Internet energy intensity give results ranging from 136 kWh/GB down to 0.0064 kWh/GB, a factor of more than 20,000.
                        </blockquote>
                        <cite><Links.EL link={{source:'https://www.researchgate.net/publication/266968141_The_Energy_Intensity_of_the_Internet_Home_and_Access_Networks/link/543ff39c0cf21227a11b9d78/download'}}>The Energy Intensity of the Internet: Home and Access Networks | Coroama et al.</Links.EL> </cite>
                    <p><strong>Greenhouse gas emission intensity (g<Formula>CO2</Formula>e/kWh)</strong> is measured in grammes of <Formula>CO2</Formula>e emitted per kilowatt-hour. Greenhouse gases, including carbon dioxide and methane, are released when fossil fuels are burnt. In 2019, the average amount of carbon dioxide released for each kWh of energy consumed across the EU was <Links.EL link={{source:'https://www.eea.europa.eu/data-and-maps/indicators/overview-of-the-electricity-production-3/assessment-1'}}>255 grammes</Links.EL>. If pledges to decarbonise electricity are honoured (replacing fossil fuels with renewables), this value will fall to 0 in 2050. The figure for France in 2019 was just 56 grammes, a consequence of their reliance on nuclear energy.</p>
                    <p>
                        <aside>
                            <strong><Formula>CO2</Formula>e</strong>
                            <div>The <strong>e</strong> in <Formula>CO2</Formula><strong>e</strong> stands for <strong>equivalent</strong>, and is used to compare - and aggregate - emissions from different greenhouse gases (GHGs). Annual global <Formula>CO2</Formula> emissions are 36.44Gt (2019) but <Formula>CO2</Formula><strong>e</strong> (including emissions from other GHGs such as methane and nitrous oxide) are over <Links.EL link={{source:'https://ourworldindata.org/greenhouse-gas-emissions'}}>50Gt</Links.EL> - 50 gigatonnes or 50 billion tonnes.</div>
                        </aside>
                    </p>               
                    <h3 id="inputs">Measuring electricity & emissions</h3>
                    <p>
                        There are many online tools and APIs for measuring the carbon emissions associated with Internet data. I maintain a list on the <Links.IL link={{source:'sustainability'}}>sustainability</Links.IL> page.                         
                    </p>
                    <p>The table below sets out values used by two popular calculators, and a range of values for energy intensity and <Formula>CO2</Formula>e emissions provided by the International Energy Agency (IEA).</p>
                    <p>Changing input values updates output values elsewhere on the page. The default data amount is 1GB, a good starting point for streaming.</p>
                    <p>
                        If you are more interested in web pages:- &nbsp;<button class={styles.btn} onClick={e => onChangeInput({prop: 'bytes', value: 0.002198 })}> Set data input to median web page weight </button>
                    </p>
                    <p>
                        <div class={styles.inset}>
                            <EnergyAndEmissionsTable setEnergyAndEmissionsState={setEnergyAndEmissionsState} />
                        </div>
                    </p>

                    <h4>Output values</h4>
            
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

                        <p>
                            <div class={styles.calculatedValues}>
                                <Output inputs={inputs} />
                            </div>
                        </p>
                    </p> : null}

                    <h3>Are these figures accurate?</h3>

                    <p>Calculating electricity use and emissions currently relies on assumptions and averages. Averages are useful for smoothing out values but they can also disguise distortions - this is why the http archive uses <Links.EL link={{source:'https://almanac.httparchive.org/en/2020/methodology'}}>median rather than average values</Links.EL> when reporting page size. The average can be affected by very small and very large page sizes, whereas the median expresses typical page size - 50% of values fall either side of the median. </p>

                    <p>If you are calculating values for a specific website or service, consider evaluating the main components separately - servers (data centres), networks, and devices <span class={styles.super}><a id="appendixRef" href="#appendix">+</a></span>. Streaming has a different profile than website downloads; smaller devices like mobiles consume less than laptops, both of which have a considerably smaller energy and carbon footprint than large screen, high definition televisions.</p>

                    <blockquote cite="https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines">
                        For example, a 50-inch LED television consumes much more electricity than a smartphone (100 times) or laptop (5 times). Because phones are extremely energy efficient, data transmission accounts for more than 80% of the electricity consumption when streaming. Streaming an hour-long SD video through a phone on WiFi (Scenario C) uses just 0.037 kWh – 170 times less than the estimate from the Shift Project.
                    </blockquote>
                    <cite><Links.EL link={{source:'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines'}}>George Kamiya | IEA</Links.EL> </cite>

                    <p>
                    Chris Adams' <Links.EL link={{source:'https://www.thegreenwebfoundation.org/news/understanding-trends-at-the-layer-below-the-internet-stack/'}}> introduction to marginal costs, energy grids, and computational demands</Links.EL> is well worth reading if you want to examine your development stack in detail.
                    </p>

                    <p>
                        <div>
                        <Links.EL link={{source:'https://www.wholegraindigital.com/blog/website-energy-consumption/'}}>Tom Greenwood</Links.EL> describes the problem of where to set emissions' boundaries, and explains how the <Links.EL link={{source:'https://www.websitecarbon.com/'}}>website carbon calculator</Links.EL> measures a site's emissions.
                        </div>
                    </p>

                    <h3>Are there data we can compare our figures with?</h3>
                    <p>In order to see if our results make sense, it is useful to look for comparable data. For example, we can use values derived for regional figures - such as those for the UK - from which per capita values are estimated.</p>
                    <p>Let's compare our values for Internet use with annual per capita averages for the UK.</p>
                    <blockquote id="cisco" cite="https://www.cisco.com/c/dam/m/en_us/solutions/service-provider/vni-forecast-highlights/pdf/United_Kingdom_2021_Forecast_Highlights.pdf">
                        In the United Kingdom, the average Internet user will generate 140 Gigabytes of Internet traffic per month in 2021, up 159% from 54.0 Gigabytes per month in 2016…
                    </blockquote>
                    <cite><Links.EL link={{source:'https://www.cisco.com/c/dam/m/en_us/solutions/service-provider/vni-forecast-highlights/pdf/United_Kingdom_2021_Forecast_Highlights.pdf'}}>Cisco</Links.EL> (PDF)</cite>
                    <p>
                        Using Cisco's figure value for gigabytes of data gives an annual value of ({averageMonthlyTrafficPerUser}*12) {(1680).toLocaleString()} GBs. 
                    </p>
                    <p>
                        <div class={styles.inset}>                        
                            <UKDataOptionsTable setDataOptionsState={setDataOptionsState} />
                        </div>
                    </p>
                    <h4>Output values</h4>
                    <p>
                        <div class={styles.calculatedValues}>
                            <div>
                                <span ref={calculatedCiscoPerUserEnergyValue}></span> <span>kWhs of energy</span>
                            </div>
                            <div>
                                <span ref={calculatedCiscoPerUserGrammesValue}></span> <span>g</span> <span>(<span ref={calculatedCiscoPerUserTonnesValue}></span> tonnes)</span> <span> of <Formula>CO2</Formula></span>
                            </div>
                        </div>
                    </p>
                    <p>
                        <div class={styles.inset}>
                            How does this compare to <strong>UK average electricity</strong> use per person of <Links.EL link={{source:'https://ourworldindata.org/energy/country/united-kingdom#per-capita-how-much-energy-does-the-average-person-consumehttps://ourworldindata.org/energy/country/united-kingdom#per-capita-how-much-energy-does-the-average-person-consume'}}>{(averageAnnualElectricty).toLocaleString()} kWhs</Links.EL>?
                        </div>                            
                    </p>
                    <p>
                        <div>
                            <div>
                                <MiniBarChart dataSources={[ { source:'Total', value: averageAnnualElectricty }, { source:'Internet', value: funcs.multiplyInputs([inputs.bytes, inputs.energy]) } ]} config={{colours:['#CCBE9F','#ABC3C9'], units:'kWhs'}} />
                            </div>
                        </div>
                    </p>
                    <p>
                        <div class={styles.inset}>
                            <div>
                                How does this compare to average <strong>UK <Formula>CO2</Formula> emissions</strong> per person of <Links.EL link={{source:'https://ourworldindata.org/co2/country/united-kingdom#per-capita-how-much-co2-does-the-average-person-emit'}}>{(averageAnnualCarbonFootprint).toLocaleString()} tonnes</Links.EL> (2019)?
                            </div>                            
                        </div>
                    </p>
                    <p>
                        <div>
                            <div>
                                <MiniBarChart dataSources={[ { source:'Total', value: averageAnnualCarbonFootprint }, { source:'Internet', value: funcs.multiplyInputs([inputs.bytes, inputs.energy, inputs.emissions, .000001]) } ]}  config={{colours:['#CCBE9F','#ABC3C9'], units:'Tonnes'}} />
                            </div>
                        </div>
                    </p>

                    {/* <h4>The business</h4>

                    <WebsiteEnergyAndEmissionsTable setWebsiteState={setWebsiteState} /> */}
                    
                    <p>The energy and emissions associated with websites and streaming is divided between the user (this value is included in their bill), the content provider and myriad intermediaries, so direct comparison means little. But comparing data does provide a sense of scale, and an idea of what is typical.</p>

                    <h3 id="sources">Sources of truth</h3>
                    <p>Calculations for energy intensity and carbon emissions are complex and must combine contemporary and historical data sets from multiple sectors. There are also differences between authors. Most use kWhs but some prefer machine hours (especially for streaming). There is wide variance in how inclusive models are (the scope).</p>
                    <p>In his <Links.EL link={{source:'http://gauthierroussilhe.com/post/digital-sustainability-french.html'}}>update on French sustainability accounting</Links.EL>, Gauthier Roussilhe explains how French modelling includes a full Life Cycle Assessment (LCA) of a service, not only its immediate energy and emissions requirements.</p>
                    <blockquote cite="http://gauthierroussilhe.com/post/digital-sustainability-french.html">
                        To sum up, French designers and developers tend to develop sustainable digital services knowing that they must aim to reduce these four factors: GHG emissions, water consumption, consumption of resources and consumption of primary energy.
                    </blockquote>
                    <cite><Links.EL link={{source:'http://gauthierroussilhe.com/post/digital-sustainability-french.html'}}>Digital Sustainability: a French update</Links.EL></cite>
                    <p>There is also a paucity of sources. Not only do many website carbon emissions calculators refer to a handful of papers, the majority of the most popular calculators are built on common APIs: </p>
                    <p>
                        <Links.EL link={{source:'https://www.mightybytes.com/blog/ecograder-internet-sustainability-stats/'}}>Mightybytes</Links.EL> and <Links.EL link={{source:'https://www.wholegraindigital.com/blog/carbon-calculator-v2/'}}>Wholegrain Digital</Links.EL> collaborate at <Links.EL link={{source:'https://sustainablewebdesign.org/'}}>Sustainable Web Design</Links.EL>, and provide the community with two free calculators, <Links.EL link={{source:'https://ecograder.com/'}}>EcoGrader</Links.EL>, and the <Links.EL link={{source:'https://www.websitecarbon.com/'}}>Website Carbon Calculator</Links.EL>. 

                        <Links.EL link={{source:'https://ecoping.earth/'}}> Ecoping</Links.EL> and <Links.EL link={{source:'https://www.zifera.io/'}}>Zifera</Links.EL> use the WebsiteCarbon carbon API (with modifications). <Links.EL link={{source:'https://digitalbeacon.co/'}}>Beacon</Links.EL> uses data from <Links.EL link={{source:'https://www.thegreenwebfoundation.org/'}}>The Green Web Foundation</Links.EL> and <Links.EL link={{source:'https://developers.google.com/speed/pagespeed/insights/'}}>Google PageSpeed Insights</Links.EL> (whose data underpins many performance tools).

                        The <Links.EL link={{source:'https://theshiftproject.org/en/carbonalyser-browser-extension/'}}>Carbonalyser</Links.EL> browser extensions, <Links.EL link={{source:'https://ecoinfo.cnrs.fr/ecodiag-calcul/'}}>EcoInfo</Links.EL>, <Links.EL link={{source:'http://ecometer.org/'}}>ecometer</Links.EL>, and <Links.EL link={{source:'http://www.ecoindex.fr/'}}>EcoIndex.fr</Links.EL> rely on data and models from <Links.EL link={{source:'https://theshiftproject.org/en/home/'}}>The Shift Project</Links.EL>.                            
                    </p>
                    <p>
                        Collaboration is healthy - these companies have put a great deal of effort into understanding the problem, sharing resources, and building useful, and extensible tools. I recommend trying them all (each one has unique features), and reading their authors' discussions on methodology and practice.                         
                    </p>
                    <p>But if you use a website carbon calculator, question its findings, and verify its sources. Understand that the field is changing quickly - more data, new patterns of consumption, more devices, more users, different users, changes in hardware efficiency, and shifting programming paradigms.</p>
                    <p>Develop a feel for the numbers and units involved.</p>

                    <p>The spat between The Shift Project and Carbon Brief and the IEA is a salutary example as to why we should <Links.EL link={{source:'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines'}}>question assumptions</Links.EL>. The trouble arose over the carbon emissions attributable to watching Netflix. The parties involved scrutinised the data, and resolved their differences, providing a useful insight into methodology, rigour, and the scientific method. Unfortunately, misleading data got out and spread quickly. Authoritative websites including <Links.EL link={{source:'https://phys.org/news/2019-10-chill-netflix-habit-climate-experts.html'}}>Phys.org</Links.EL> and <Links.EL link={{source:'https://www.theguardian.com/commentisfree/2020/feb/12/real-problem-netflix-addiction-arbon-emissions'}}>The Guardian</Links.EL> maintain stories with inaccurate information.</p>

                    <p>When the BBC reported on emissions resulting from their programmes, they highlighted discrepancies between their estimates and those of Carbon Trust. Difference and comparison promote scrutiny and trust.</p>
                    <blockquote cite="https://www.bbc.co.uk/rd/blog/2021-06-bbc-carbon-footprint-energy-envrionment-sustainability">  
                        The results and comparisons here reveal just how challenging it can be to model complex systems. This is clear from the differences between the Carbon Trust and iPlayer estimates that resulted from alternative assumptions – which are necessary ingredients to any model. However, despite these differences, our results show good accordance with the Carbon Trust study. <strong>Research in this area highlights the value of using robust science to enhance awareness of the carbon impact of TV services. This is essential if we are to reduce our emissions as an industry and would not be possible without the continued collaboration of media organisations and academics.</strong> <em>(Ed. emphasis mine)</em>
                    </blockquote>
                    <cite><Links.EL link={{source:'https://www.bbc.co.uk/rd/blog/2021-06-bbc-carbon-footprint-energy-envrionment-sustainability'}}>The carbon impact of streaming: an update on BBC TV's energy footprint</Links.EL></cite>
                    
                    <h3>What next?</h3>

                    <p>Despite exponential growth in data usage, electricity demand has remained nearly flat because devices, networks, and data centres operate more efficiently year on year.</p>
                    <p>According to <Links.EL link={{source:'https://www.mdpi.com/2078-1547/6/1/117#abstract'}}> Andrae and Edler</Links.EL> this looks set to change. In a best case scenario, ICT (Information and Communication Technology) will consume 8% of global electricity use by 2030; in a worst case scenario this rises to 21%, with the majority of the increase expected to come from data centres and networks.</p>
                    <p>A counter view from, among others, <Links.EL link={{source:'https://www.sciencedirect.com/science/article/abs/pii/S2542435121002117'}}> Koomey and Masanet</Links.EL>, is that newfound efficiencies will continue to account for increases, and that a proliferation of smaller devices may lead to a fall in demand.</p>


                    <p>The relatively low climate impact of streaming video today is thanks to rapid improvements in the energy efficiency of data centres, networks and devices. But slowing efficiency gains, rebound effects and new demands from emerging technologies, including artificial intelligence (AI), <Links.EL link={{source:'https://www.researchgate.net/publication/323835314_Greening_Trends_in_Energy-Efficiency_of_IoT-based_Heterogeneous_Wireless_Nodes'}}> IoT</Links.EL>, and blockchain, raise increasing concerns about the overall environmental impacts of the sector over the coming decades.</p>

                    <Top></Top>
                </section>

                <section id="appendix">
                    <h3>Appendix: ICT energy consumption</h3>

                    <p>
                        <figure>
                            <figcaption>
                                <div>
                                <span><strong>Main components of ICT energy consumption (2021)</strong></span>
                                <Links.EL link={{source:'https://www.greenit.fr/impacts-environnementaux-du-numerique-en-france/'}}>GreenIT - iNUM : impacts environnementaux du numérique en France</Links.EL>
                                </div>
                            </figcaption>
                            <PieChartComponentEnergyConsumption model={'greenIT'} />
                        </figure>
                    </p>

                    <p>Climate care includes the energy used to manufacture the hardware.</p>

                    <p>
                        <figure>
                            <figcaption>
                                <div>
                                <span><strong>Main components of ICT energy consumption (2017)</strong></span>
                                <Links.EL link={{source:'https://www.climatecare.org/resources/news/infographic-carbon-footprint-internet/'}}>climate care - The carbon footprint of the Internet</Links.EL>
                                </div>
                            </figcaption>
                            <PieChartComponentEnergyConsumption model={'climateCare'} />
                        </figure>
                    </p>

                    <p>
                        <div>
                            <blockquote cite="https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines">
                                Based on average viewing habits, my updated analysis shows that viewing devices account for the majority of energy use (72%), followed by data transmission (23%) and data centres (5%). In contrast, the Shift Project values show that devices account for less than 2% of total energy use, as a result of underestimating the energy use of devices (4x) while substantially overestimating the energy use of data centres (35x) and data transmission (50x).
                            </blockquote>
                            <cite><Links.EL link={{source:'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines'}}>George Kamiya | IEA</Links.EL> </cite>
                        </div>
                    </p>

                    <div class={styles.inset}>
                        <Links.IL link={{source:'web-development/measuring-the-web/#appendixRef'}}>Return to <strong>Are these figures accurate?</strong></Links.IL>
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

export default MeasuringTheWeb;