import { useState } from 'preact/hooks';

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
                    <td class={getVerdict(p.honoured)}>{p.honoured > 1 ? p.honoured : null}</td>
                    <td class={getVerdict(p.broken)}>{p.broken > 1 ? p.broken : null}</td>
                </tr>
            </tbody>
        )
    })

    return (
        <tr>
            <td colSpan={colSpan}>
                <table data-table-id={value.toLowerCase() + '-pledges'} class={styles.unorderedList}>
                    {tbody}
                </table>
            </td>
        </tr>
    )
};

const DashboardFeaturesTable = ({data}) => {

    const _colSpan = 3;

    const [selectedRow, setSelectedRow] = useState(null);

    const totals = data ? {
        honoured: data.reduce((total, next) => total + next.honoured, 0),
        broken: data.reduce((total, next) => total + next.broken, 0)
    } : null

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
        <table class={tableClasses} data-table-id="features">
            <thead>
                <tr>
                    <th></th>
                    <th colSpan={2}>Pledges</th>
                </tr>
                <tr>
                    <th>Feature</th>
                    <th class={styles.centredText} scope="col">Honoured</th>
                    <th class={styles.centredText} scope="col">Broken</th>
                </tr>
            </thead>
            <tbody>
                { data.map(d => {

                    const header = d.name.toLowerCase() === selectedRow ? styles.inlineHeader : null;
                    
                    const getClasses = () => {                    
                        return `${styles.centredText} ${header}`;
                    }            

                    return(
                    <>
                        <tr>
                            <td class={header}><button data-table-id={d.name.toLowerCase()} class={styles.value} onClick={handleClick}>{d.name}</button></td>                        
                            <td class={getClasses()}>{d.honoured}</td>
                            <td class={getClasses()}>{d.broken}</td>
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
                    <th class={styles.centredText}>{totals.honoured}</th>
                    <th class={styles.centredText}>{totals.broken}</th>
                </tr>
            </tfoot>
        </table>
        </>
    );
};

export default DashboardFeaturesTable;