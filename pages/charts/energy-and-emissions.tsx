import { useEffect, useState } from 'preact/hooks';

import CanvasChart from 'pages/dashboard/canvas-chart';
import Links from 'components/links/Links';

import { ChartType } from 'lib/enums';

import styles from 'pages/dashboard/Dashboard.module.scss';

const Table = ({dataSources, setParentState}) => {

    if(!dataSources) return <div>No data!</div>

    const [active, setActive] = useState(dataSources[0] as any); // add type!

    const updateStates = state => {
        setActive(state);
        setParentState(state);
    };

    useEffect(() => {
        setParentState(dataSources[0]);
    },[]);

    const rows = dataSources.map(e => <tr>
        <td>
            <div>
                <input type="radio" checked={e.id === active.id} onClick={() => updateStates(dataSources[e.id - 1])} id={e.id} name="rbSource"></input>
            </div>
        </td>
        <td>
            <div class={e.id === active.id ? styles.checked : null}><label htmlFor={e.id}>{e.name}</label></div>
        </td>
        <td><div class={e.id === active.id ? styles.checked : null}>{e.energy}</div></td>
        <td><div class={e.id === active.id ? styles.checked : null}>{e.emissions}</div></td>
        {/* <td><Links.EL link={{source:e.link}}>link</Links.EL></td> */}
    </tr>);

    return (<table>
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th>kWh/GB</th>
                <th>gCO2e/kWh</th>
            </tr>
        </thead>
        <tbody>
            { rows }
        </tbody>
    </table>);
}

const BarChart = ({dataSources}) => {

    const [data, setData] = useState(null);
    const [plugins, setPlugins] = useState(null);
    const [type, setType] = useState(ChartType.Bar);
    const [options, setOptions] = useState({maintainAspectRatio: false});
    const [scales, setScales] = useState(null);

    const colour = 'rgba(255, 99, 132, .8)';

    useEffect(() => {
        setData(
            {
                labels: [
                    ...dataSources.map(p => p.name)
                ],
                label: 'bar',
                datasets: [
                    {
                        indexAxis: 'y',
                        label: ' kWh/GB ',
                        plugins: {
                            legend: {
                            position: 'right',
                            },
                        },
                        data: dataSources.map(d => [ d.energy.low, d.energy.high]),
                        backgroundColor: [ ...dataSources.map(d => colour), 'rgba(255, 99, 132, .4)'],
                        barPercentage: 1,
                        minBarLength: 10
                    },
                    // {
                    //     indexAxis: 'y',
                    //     label: ' gCO2e/kWh ',
                    //     plugins: {
                    //         legend: {
                    //         position: 'right',
                    //         },
                    //     },
                    //     data: dataSources.map(d => d.energy.emissions),
                    //     backgroundColor: [ ...dataSources.map(d => 'rgba(55, 99, 132, 1)'), 'rgba(55, 99, 132, .4)'],
                    //     barPercentage: 1
                        
                    // },
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
                    text: 'kWh/GB',
                    padding: { top: 12 }
                },
                ticks: {                                
                    stepSize: .1
                },
                offset: false,
            }
        });
    
    }, []);
    
    return (
        <>
        { data === null 
            ? <div>No do!</div>
            : <CanvasChart type={type} data={data} plugins={plugins} options={options} scales={scales} /> 
        }
        </>
    )
};

export default Table;