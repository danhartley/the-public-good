import CanvasChart from 'components/dashboard/canvas-chart';

import { useEffect, useState, useRef } from 'preact/hooks';
import { ChartType } from 'lib/enums';

const BytesPerDeviceAndActivity = ({datasources}) => {
    
    if(!datasources) return <div></div>

    const [data, setData] = useState(null);
    const [plugins, setPlugins] = useState(null);
    const [type, setType] = useState(ChartType.Bar);
    const [options, setOptions] = useState({maintainAspectRatio: false});
    const [scales, setScales] = useState(null);

    const colour = 'rgba(255, 99, 132, .8)';
    
    useEffect(() => {

        setData({
            labels: [...datasources.map(b => b.megabytes)],
            datasets: [
                {
                    indexAxis: 'y',
                    label: ' Page weight (megabytes) ',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: datasources.map(b => b.megabytes)
                }
            ]
        });
        
        if(data === null) return;

        // setPlugins({
        //     autocolors: false,
        //     annotation: {
        //         annotations: {
        //             median: {
        //                 type: ChartType.Line,
        //                 indexAxis: 'x',
        //                 xMin: 0,
        //                 xMax: bytes.length - 1,
        //                 yMin: 1900,
        //                 yMax: 1900,
        //                 borderColor: 'rgba(34, 101, 203, .8)',
        //                 borderWidth: 3,
        //                 label: {
        //                     content: (ctx) => 'Median ' + 1900 + ' bytes',
        //                     enabled: true,
        //                     backgroundColor: 'rgb(255, 255, 255)',
        //                     color: 'rgba(34, 101, 203, 1)',
        //                 },
        //             }
        //         }
        //     }
            
        // });


    }, [data]);

    return (
        <>
        {            
            data === null 
            ? <div>Sorry, there is no data!</div> 
            : <CanvasChart type={type} data={data} plugins={plugins} options={options} scales={scales} />
        }
        </>

    )
};

export default BytesPerDeviceAndActivity;