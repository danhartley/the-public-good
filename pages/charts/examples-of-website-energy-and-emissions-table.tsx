import { useEffect, useState } from 'preact/hooks';

import styles from 'pages/dashboard/Dashboard.module.scss';

const WebsiteEnergyAndEmissionsTable = ({setWebsiteState}) => {

    const medianKBsTransferred = 2198;

    // https://www.statista.com/statistics/1201880/most-visited-websites-worldwide/

    const dataSources = [
        {
            id: 1000,
            title: 'Google 10,000 per month',
            bytes: 0.0015,
            gigabytes: 180,
            kWh: 24,
            energyIntensity: 1.8,
            carbonIntensity: 33.4,
            pageEmissions: 0.09,
            emissions: 10.47, 
            green: true
        },
        {
            id: 1001,
            title: 'Google 86.9 billion per month',
            bytes: 0.0015,
            gigabytes: 1602000000,
            energyIntensity: 1.8,
            carbonIntensity: 33.4,
            pageEmissions: 0.09,
            kWh: 208560000,
            emissions: 90984300, 
            green: true
        },
        {
            id: 1002,
            title: 'The Guardian 10,000 per month',            
            bytes: 0.0022,
            gigabytes: 264,
            energyIntensity: 1.8,
            carbonIntensity: 475,
            pageEmissions: 1.88,
            kWh: 475,
            emissions: 225.45, 
            green: false
        },
        {
            id: 1003,
            title: 'Wikipedia 10,000 per month',            
            bytes: 0.00005,
            gigabytes: 6,
            energyIntensity: 1.8,
            carbonIntensity: 475,
            pageEmissions: 0.04,
            kWh: 11,
            emissions: 5.06, 
            green: false
        },
        {
            id: 1004,
            title: 'Typical site 10,000 per month (grey)',            
            bytes: 0.002198,
            gigabytes: 263.76,
            energyIntensity: 1.8,
            carbonIntensity: 475,
            pageEmissions: 1.88,
            kWh: 474.77,
            emissions: 225.51, 
            green: false
        },
        {
            id: 1005,
            title: 'Typical site 10,000 per month (green)',            
            bytes: 0.002198,
            gigabytes: 263.76,
            energyIntensity: 1.8,
            carbonIntensity: 33.4,
            pageEmissions: 1.88,
            kWh: 474.77,
            emissions: 15.86, 
            green: true
        },
    ];
    
    const [selectedDataSource, setSelectedDataSource] = useState(dataSources[0] as any); // add type!

    const updateRBStates = (e, state) => {
        setSelectedDataSource(state);
        setWebsiteState(state);
    };

    useEffect(() => {
        setWebsiteState(dataSources[0]);
    },[]);

    const rows = dataSources.map(ds => <tr>
        <td>
            <div class={ds.id === selectedDataSource.id ? styles.checked : null}>
                {/* <input type="radio" checked={ds.id === selectedDataSource.id} onClick={e => updateRBStates(e, dataSources[ds.id - 1000])} id={ds.id.toString()} name="rbWebsiteSource"></input> */}
                <label htmlFor={ds.id.toString()}>{ds.title}</label>
            </div>
        </td>
        <td><div class={ds.id === selectedDataSource.id ? styles.checked : null}>{(ds.kWh).toLocaleString()}</div></td>
        <td><div class={ds.id === selectedDataSource.id ? styles.checked : null}>{(ds.emissions).toLocaleString()}</div></td>
        <td><div class={ds.id === selectedDataSource.id ? styles.checked : null}>{ds.green ? 'true' : 'false'}</div></td>
    </tr>);

    return (<table>
        <caption><strong>Examples of website energy and emissions</strong></caption>
        <thead>
            <tr>
                <th>Page visits over one year</th>
                <th>kWh</th>
                <th>gCO2e/kWh</th>
                <th>Green energy</th>
            </tr>
        </thead>
        <tbody>
            { rows }
        </tbody>
    </table>);
}

export default WebsiteEnergyAndEmissionsTable;