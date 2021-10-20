import { useEffect, useState } from 'preact/hooks';

import CanvasChart from 'pages/dashboard/canvas-chart';

import { ChartType } from 'lib/enums';

import styles from 'pages/dashboard/Dashboard.module.scss';

const MiniPieChart = ({energyUses}) => {

    if(energyUses[0].percentage === 100) return <div></div>;

    // https://venngage.com/blog/color-blind-friendly-palette/
    const elegant = [
        '#CCBE9F',
        '#ABC3C9',
        '#382119',
        '#E0DCD3',
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
                    var value = context.dataset.data[context.dataIndex];
                    return 'rgb(55,55,55)'
                }                
              },
            },
            formatter: function(value, context) {
                return `${value.toFixed(2)}%`;
            }
        }      
      });

    useEffect(() => {

        setData({
            labels: energyUses.map(e => ` ${e.source} `),
            datasets: [{
                radius: '90%',                                
                data: energyUses.map(e => e.percentage),
                backgroundColor: elegant
            }]
        });

    }, []);

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

export default MiniPieChart;