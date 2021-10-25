import { useEffect, useState } from 'preact/hooks';

import styles from 'components/dashboard/Dashboard.module.scss';

const UKDataOptionsTable = ({setDataOptionsState}) => {

    const medianKBsTransferred = 2198;
    const averageAnnualTrafficPerUser = 1680;
    const averageAnnualStreaming = 432; // https://www.ofcom.org.uk/__data/assets/pdf_file/0010/200503/media-nations-2020-uk-report.pdf

    const dataSources = [
        {
            id: 100,
            title: '1 GB',
            gigabytes: 1
        },
        {
            id: 101,
            title: 'Typical web page',
            gigabytes: medianKBsTransferred / 1000 / 1000
        },
        {
            id: 102,
            title: `${(120000).toLocaleString()} typical web pages in a year`,
            gigabytes: 10000 * medianKBsTransferred * 12 / 1000 / 1000
        },
        {
            id: 103,
            title: 'Annual UK per capita Internet use',
            gigabytes: averageAnnualTrafficPerUser
        },
        {
            id: 104,
            title: 'Annual UK per capita Netflix streaming (1GB per hr)',
            gigabytes: averageAnnualStreaming
        },
    ];
    
    const [selectedDataSource, setSelectedDataSource] = useState(dataSources[0] as any); // add type!

    const updateRBStates = (e, state) => {
        setSelectedDataSource(state);
        setDataOptionsState(state);
    };

    useEffect(() => {
        setDataOptionsState(dataSources[0]);
    },[]);

    const rows = dataSources.map(ds => <tr>
        <td>
            <div class={ds.id === selectedDataSource.id ? styles.checked : null}>
                <input type="radio" checked={ds.id === selectedDataSource.id} onClick={e => updateRBStates(e, dataSources[ds.id - 100])} id={ds.id.toString()} name="rbSource"></input>
                <label htmlFor={ds.id.toString()}>{ds.title}</label>
            </div>
        </td>
        <td><div class={ds.id === selectedDataSource.id ? styles.checked : null}>{(ds.gigabytes).toLocaleString()}</div></td>
    </tr>);

    return (<table>
        <caption><strong>Examples of Internet data usage</strong></caption>
        <thead>
            <tr>
                <th>Title</th>
                <th>Data (GBs)</th>
            </tr>
        </thead>
        <tbody>
            { rows }
        </tbody>
    </table>);
}

export default UKDataOptionsTable;