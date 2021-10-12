import CanvasChart from 'pages/dashboard/canvas-chart';

import { useEffect, useState, useRef } from 'preact/hooks';
import { getLocalStorageState } from 'hooks/local-storage';
import { ChartType } from 'lib/enums';

const RequestsPerPage = () => {

    const [data, setData] = useState(null);
    const [plugins, setPlugins] = useState(null);
    const [type, setType] = useState(ChartType.Bar);
    const [options, setOptions] = useState({maintainAspectRatio: false});
    const [scales, setScales] = useState(null);

    const [metrics, setMetrics] = useState(getLocalStorageState('metrics'));
    
    const colour = 'rgba(19, 139, 198, 1)';
    const average = useRef<HTMLElement>(null);

    useEffect(() => {

        if(metrics && metrics.page.title === 'Dashboard') {

            switch(type) {
                case ChartType.Bar:
                    setData(
                        {
                        labels: [
                            ...metrics.pages.map(p => p.title), 'Median web page'
                        ],
                        label: 'bar',
                        datasets: [
                            {
                            indexAxis: 'y',
                            label: ' Requests per page ',
                            plugins: {
                                legend: {
                                position: 'right',
                                },
                            },
                            data: [...metrics.pages.map(p => p.requests), 74],
                            backgroundColor: [ ...metrics.pages.map(p => colour), 'rgba(19, 139, 198, .6)'],
                            barPercentage: 1
                            
                        },
                    ]
                    });

                    setScales({
                        x: {
                            type: 'linear',
                            min: 0,
                            max: 100,
                            ticks: {                                
                                stepSize: 10
                            },
                            title: {
                                display: true,
                                text: 'HTTP Requests',
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
            });
        }

        if(metrics) {
            const servedPages = metrics.pages.filter(p => p.requests > 0).map(p => p.requests);
    
            average.current.innerText = `${Math.round((servedPages.reduce((x,y) => x + y, 0) * 100) / 100 / servedPages.length) as unknown as string}`;
        }

    }, [metrics]);

    return (
        <>
        {
            data === null 
            ? <div>Sorry, there is no data!</div> 
            : <CanvasChart type={type} data={data} plugins={plugins} options={options} scales={scales} />
        }
        <p>
            <div>Average requests per page (excluding cached pages): <span ref={average}></span></div>
        </p>   
        </>
    )
};

export default RequestsPerPage;