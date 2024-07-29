import { useState } from 'react';

import styles from 'components/dashboard/Dashboard.module.scss';

const showPledges = ({pledges, colSpan, value}) => {

    const getVerdict = count => {
        return count > 1
            ? `${styles.centredText}`
            : `${styles.centredText} ${count === 0 ? null : styles.tick}`
    }

    const tbody = pledges.map(p => {
        return (
            <tbody>
                <tr>                    
                    <td>{p.name}</td>
                    <td className={getVerdict(p.honoured)}>{p.honoured > 1 ? p.honoured : null}</td>
                    <td className={getVerdict(p.broken)}>{p.broken > 1 ? p.broken : null}</td>
                    <td className={styles.centredText}></td>
                </tr>
            </tbody>
        )
    })

    return (
        <tr>
            <td colSpan={colSpan}>
                <table data-table-id={value.toLowerCase() + '-pledges'} className={styles.unorderedList}>
                    {tbody}
                </table>
            </td>
        </tr>
    )
};

const DashboardValuesTable = ({data}) => {

    const _colSpan = 4;

    const [selectedRow, setSelectedRow] = useState(null);

    const totals = data ? {
        honoured: data.reduce((total, next) => total + next.honoured, 0),
        broken: data.reduce((total, next) => total + next.broken, 0),
        features: new Set(data.map(i => i.features)).size        
    } : null;

    const handleClick = e => {
        const id = e.target.getAttribute('data-table-id');
        id !== selectedRow
            ? setSelectedRow(id)
            : setSelectedRow(null);
    };

    const fade = selectedRow ? styles.fade : null;
    const tableClasses = `${styles.pledgesByType} ${fade}`;

    return (!data ? null :

        <>
        <table className={tableClasses} data-table-id="values">
            <thead>
                <tr>                
                    <th colSpan={1}></th>
                    <th colSpan={2}>Pledges</th>
                    <th colSpan={2}>Project</th>
                </tr>
                <tr>
                    <th>Value</th>
                    <th className={styles.centredText} scope="col">Honoured</th>
                    <th className={styles.centredText} scope="col">Broken</th>
                    <th className={styles.centredText} scope="col">Features</th>
                </tr>
            </thead>
            <tbody>
                { data.map(d => {

                    const header = d.name.toLowerCase() === selectedRow ? styles.inlineHeader : null;
                    const tdClasses = `${styles.centredText} ${header}`;

                    return (
                    <>
                        <tr>
                            <td className={header}><button data-table-id={d.name.toLowerCase()} className={styles.value} onClick={handleClick}>{d.name}</button></td>
                            <td className={tdClasses}>{d.honoured}</td>
                            <td className={tdClasses}>{d.broken}</td>
                            <td className={tdClasses}>{d.features}</td>
                        </tr>
                        {
                            d.name.toLowerCase() === selectedRow 
                                ? showPledges({pledges: d.pledges, colSpan: _colSpan, value: d.name})
                                : null
                        }
                    </>
                    )
                }) }
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row">Totals</th>
                    <th className={styles.centredText}>{totals.honoured}</th>
                    <th className={styles.centredText}>{totals.broken}</th>
                    <th className={styles.centredText}>{totals.features}</th>
                </tr>
            </tfoot>
        </table>
        </>
    );
};

export default DashboardValuesTable;