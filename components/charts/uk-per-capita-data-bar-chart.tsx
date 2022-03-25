import { useEffect, useState } from 'preact/hooks';

import CanvasChart from 'components/dashboard/canvas-chart';

import { ChartType } from 'lib/enums';

import styles from 'components/dashboard/Dashboard.module.scss';

import funcs from 'components/functions/functions';

import { Coordinates, ChartProps } from 'components/charts/chart-types';

const MiniPieChart = ({energyUses}) => {

    if(energyUses[0].percentage === 100) return <div></div>;

    // https://venngage.com/blog/color-blind-friendly-palette/
    const elegant = [
        '#CCBE9F',
        '#ABC3C9',
        '#382119',
        '#E0DCD3',
    ];

    type Activity = {
        labels: Array<string>,
        datasets: Array<{
            radius: string,
            data: Array<number>,
            backgroundColor: Array<string>
        }>
    }

    const [data, setData] = useState<Activity>({ labels:[], datasets:[]});
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
          text: '',
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
                    return 'rgb(55,55,55)'
                }                
              },
            },
            formatter: function(value, context) {
                return `${funcs.multiplyInputs([value])}%`;
            }
        }      
      });

    useEffect(() => {

        setData({
            labels: [ ...energyUses.map(e => ` ${e.source} `) ],
            datasets: [{
                radius: '90%',                                
                data: energyUses.map(e => e.percentage),
                backgroundColor: elegant
            }]
        });

    }, [energyUses]);

    return (
        <>
        { data === null 
            ? <div>No do!</div>
            : <div class={styles.mini}>
                <CanvasChart type={type} data={data} plugins={plugins} options={options} scales={null} /> 
            </div>
            
        }
        </>
    )

};

const MiniBarChart = ({dataSources, config}) => {

    if(!dataSources || isNaN(dataSources.find(ds => ds.source === 'Internet').value)) return <div></div>;

    const [data, setData] = useState<ChartProps>({ labels: [], label: "", datasets: [{ indexAxis: "", label: "", data: [], backgroundColor: [] }] });
    const [type, setType] = useState(ChartType.Bar);
    const [options, setOptions] = useState({});
    const [plugins, setPlugins] = useState(null);
    const [scales, setScales] = useState<Coordinates>({
        x: { type: '', min: 0, max: 0, title: { display: false, text: '', padding: { top: 0}}}, y: {ticks: {padding: 0}}
    });

    useEffect(() => {
        setData(
            {
                labels: [
                    ...dataSources.map(d => `${d.source}      `)
                ],
                label: 'bar',
                datasets: [
                    {
                        indexAxis: 'y',
                        label: ` ${config.units} `,
                        data: dataSources.map(d => Math.round(funcs.multiplyInputs([d.value]) * 1000) / 1000) ,
                        backgroundColor: config.colours,
                    }
                ]
            }
        );
    
        setScales({
            x: {
                type: 'linear',
                min: 0,
                max: 2,
                title: {
                    display: true,
                    text: 'kWh',
                    padding: { top: 12 }
                }                                
            },
            y: {
                ticks: {
                    padding: 100
                }
            }
        });
    
    }, [dataSources]);

    return (
        <>
        { data === null 
            ? <div>There is either no data, or you have disabled JavaScript which is necessary to view charts on this site.</div>
            : <div>
                <CanvasChart type={type} data={data} plugins={plugins} options={options} scales={null} /> 
            </div>
            
        }
        </>
    )

};

export default MiniBarChart;