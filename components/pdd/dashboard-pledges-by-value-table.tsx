import { useEffect, useState } from 'preact/hooks';

import styles from 'components/dashboard/Dashboard.module.scss';

const showPledges = ({pledges, colSpan}) => {

    const list = pledges.map(p => {
        return <li>{p}</li>
    })

    return (
        <tr>
            <td colSpan={colSpan}>
                <ul class={styles.unorderedList}>{list}</ul>
            </td>
        </tr>
    )
};

const DashboardPledgesByValueTable = ({data}) => {

    const [selectedRow, setSelectedRow] = useState(null);

    const totals = data ? {
        honoured: data.reduce((total, next) => total + next.honoured, 0),
        broken: data.reduce((total, next) => total + next.broken, 0),
        features: data.reduce((total, next) => total + next.features, 0),
        time: data[0].time,
    } : null;

    const handleClick = e => {
        const id = e.target.id;
        id !== selectedRow
            ? setSelectedRow(id)
            : setSelectedRow(null);
    };

    return (!data ? null : 
    
    <table>
        <thead>
            <tr>                
                <th colSpan={1}></th>
                <th colSpan={2}>Pledges</th>
                <th colSpan={2}>Project</th>
            </tr>
            <tr>
                <th></th>
                <th>Honoured</th>
                <th>Broken</th>
                <th>Features</th>
                <th>Time (months)</th>
            </tr>
        </thead>
        <tbody>
            { data.map(d => {
                return (
                <>
                    <tr>
                        <td><button id={d.name} class={styles.value} onClick={handleClick}>{d.name}</button></td>
                        <td class={styles.number}>{d.honoured}</td>
                        <td class={styles.number}>{d.broken}</td>
                        <td class={styles.number}>{d.features}</td>
                        <td class={styles.number}>{d.time}</td>
                    </tr>
                    {
                        d.name === selectedRow 
                            ? showPledges({pledges: d.pledges, colSpan: 5})
                            : null
                    }
                </>
                )
            }) }
        </tbody>
        <tfoot>
            <tr>
                <th scope="row">Totals</th>
                <th class={styles.number}>{totals.honoured}</th>
                <th class={styles.number}>{totals.broken}</th>
                <th class={styles.number}>{totals.features}</th>
                <th class={styles.number}>{totals.time}</th>
            </tr>
        </tfoot>
    </table>);
};

export default DashboardPledgesByValueTable;