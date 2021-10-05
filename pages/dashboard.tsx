import Layout from 'components/layout/layout';
import CanvasChart from 'pages/dashboard/canvas-chart';

import { useEffect, useState } from 'preact/hooks';
import { getLocalStorageState } from 'hooks/local-storage';
import { ChartType } from 'pages/dashboard/enums';

import styles from 'pages/dashboard/Dashboard.module.scss';

const Dashboard = () => {

    const title = 'Dashboard';

    const [data, setData] = useState(null);
    const [plugins, setPlugins] = useState(null);
    const [type, setType] = useState(ChartType.Bar);
    const [options, setOptions] = useState({maintainAspectRatio: false});
    const [scales, setScales] = useState(null);

    const [metrics, setMetrics] = useState(getLocalStorageState('metrics'));
    
    const colour = 'rgba(255, 99, 132, .8)';

    useEffect(() => {

        console.log('dashboard metrics: ', metrics);

        if(metrics && metrics.page.title === title) {

            switch(type) {
                case ChartType.Line:
                    setData({
                        labels: [
                            ...metrics.pages.map(p => p.title)
                        ],
                        datasets: [
                            {
                                indexAxis: 'x',
                                label: ' Page weight (bytes) ',
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgb(255, 99, 132)',
                                data: [
                                    ...metrics.pages.map(p => p.bytes)
                                ],
                            }
                        ]
                    });
            
                    setPlugins({
                        autocolors: false,
                        annotation: {
                            annotations: {
                                median: {
                                    type: ChartType.Line,
                                    indexAxis: 'x',
                                    xMin: 0,
                                    xMax: metrics.pages.length - 1,
                                    yMin: 1900,
                                    yMax: 1900,
                                    borderColor: 'rgba(34, 101, 203, .8)',
                                    borderWidth: 3,
                                    // label: {
                                    //     content: (ctx) => 'Median ' + 1900 + ' bytes',
                                    //     enabled: true,
                                    //     backgroundColor: 'rgb(255, 255, 255)',
                                    //     color: 'rgba(34, 101, 203, 1)',
                                    // },
                                }
                            }
                        }
                        
                    });
                    break;
                case ChartType.Bar:
                    setData(
                        {
                        labels: [
                            ...metrics.pages.map(p => p.title), 'Median'
                        ],
                        label: 'bar',
                        datasets: [
                            {
                            indexAxis: 'y',
                            label: ' Kbs transferred per page ',
                            plugins: {
                                legend: {
                                position: 'right',
                                },
                            },
                            data: [...metrics.pages.map(p => p.bytes), 1900],
                            backgroundColor: [ ...metrics.pages.map(p => colour), 'rgba(255, 99, 132, .4)'],
                            barPercentage: 1
                            
                        },
                    ]
                    });

                    setScales({
                        x: {
                            type: 'linear',
                            min: 0,
                            max: 2000,
                            ticks: {                                
                                stepSize: 400
                            },
                            title: {
                                display: true,
                                text: 'Bytes transferred',
                                padding: { top: 12 }
                            },
                            offset: false,
                        }
                    })
                break;    
            }
        } else {
            setTimeout(() => {
                setMetrics(getLocalStorageState('metrics'));
            },200);
        }

    }, [metrics]);

    return (
        <div class={styles.wrapper}>
            <Layout header={title} title={title} description={title}>
                <div class={styles.dashboard}>
                {
                    data === null 
                    ? <div>Sorry, there is no data!</div> 
                    : <CanvasChart type={type} data={data} plugins={plugins} options={options} scales={scales} />
                }
                </div>
            </Layout>
        </div>
    )
};

export default Dashboard;