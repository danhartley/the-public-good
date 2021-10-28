import { useEffect, useState } from 'preact/hooks';

import CanvasChart from 'components/dashboard/canvas-chart';

import { ChartType } from 'lib/enums';

// import styles from 'components/dashboard/Dashboard.module.scss';


// Across the total chain, consumption (which accounts for consumer devices and home routers) used the largest amount of energy at 94%, 
// ranging from 76% for iPlayer to near-100% for satellite
// https://www.bbc.co.uk/rd/blog/2021-06-bbc-carbon-footprint-energy-envrionment-sustainability

const PieChartComponentEnergyConsumption = ({model}) => {

    // https://www.climatecare.org/resources/news/infographic-carbon-footprint-internet/
    // https://www.researchgate.net/figure/a-Total-energy-consumption-of-the-ICT-in-TWh-yr-and-b-Main-components-of-energy_fig2_323835314
    // https://www.researchgate.net/publication/255923829_Emerging_Trends_in_Electricity_Consumption_for_Consumer_ICT
    // https://www.researchgate.net/figure/The-worldwide-electricity-consumption-of-ICT-during-operation-redrawn-from-Pickavet_fig1_269571452

    const climateCare = [
        {
            component: 'Devices',
            percentage: 34
        },
        {
            component: 'Networks',
            percentage: 21
        },
        {
            component: 'Data centres',
            percentage: 29
        },
        {
            component: 'Manufacturing',
            percentage: 16
        },
    ];

    // https://www.greenit.fr/impacts-environnementaux-du-numerique-en-france/

    const greenIT = [
        {
            component: 'Devices',
            percentage: 46
        },
        {
            component: 'Networks',
            percentage: 32
        },
        {
            component: 'Data centres',
            percentage: 22
        },
    ];

    const components = model === 'climateCare' ? climateCare : greenIT;

    // https://venngage.com/blog/color-blind-friendly-palette/
    const elegant = [
        '#382119',
        '#ABC3C9',
        '#E0DCD3',
        '#CCBE9F',
    ]

    const [data, setData] = useState(null);
    const [type, setType] = useState(ChartType.Doughnut);
    const [options, setOptions] = useState({});
    const [plugins, setPlugins] = useState({
        legend: {
          position: 'bottom',
          font: function(context) {
            return {
                    size: Math.round(context.chart.width / 18),
                    family: 'serif',                    
                    weight: 'normal',                    
                    color: '#000',
                }
            },
        },
        title: {
          display: false,
          text: 'Main components of ICT energy consumption',
          font: function(context) {
            return {
                    size: Math.round(context.chart.width / 20),
                    family: 'serif',                    
                    weight: 'normal',                    
                    color: '#000',
                }
            },
        },
        datalabels: {
            labels: {
              title: {
                font: function(context) {
                    return {
                        size: Math.round(context.chart.width / 26),                        
                    }
                },
                color: function(context) {
                    const value = context.dataset.data[context.dataIndex];
                    return (value === 34 || value === 46) ? 'rgb(255,255,255)' : 'rgb(55,55,55)'
                }                
              },
            },
            formatter: function(value, context) {
                return `${value}%`;
            }
        }      
      });

    useEffect(() => {

        setData({
            labels: [ ...components.map(c => ` ${c.component} `) ],
            datasets: [{
                radius: '90%',
                data: components.map(d => d.percentage),
                backgroundColor: elegant
            }]
        });
    }, []);

    return (
        <>
        { data === null 
            ? <div>There is either no data, or you have disabled JavaScript which is necessary to view charts on this site.</div>
            : <CanvasChart type={type} data={data} plugins={plugins} options={options} scales={null} />            
        }
        </>
    )

};

export default PieChartComponentEnergyConsumption;