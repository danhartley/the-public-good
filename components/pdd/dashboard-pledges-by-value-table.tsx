import styles from 'components/dashboard/Dashboard.module.scss';

const DashboardPledgesByValueTable = ({data}) => {

    const totals = data ? {
        honoured: data.reduce((total, next) => total + next.honoured, 0),
        broken: data.reduce((total, next) => total + next.broken, 0),
        features: data.reduce((total, next) => total + next.features, 0),
        time: data[0].time,
    } : null

    return (!data ? null : 
    
    <table>
        <thead>
            <tr>                
                <th colSpan={1}></th>
                <th colSpan={2}>Pledges</th>
                <th colSpan={2}>Project</th>
            </tr>
            <tr>
                <th>&nbsp;</th>
                <th>Honoured</th>
                <th>Broken</th>
                <th>Features</th>
                <th>Time (months)</th>
            </tr>
        </thead>
        <tbody>
            { data.map(d => {
                return(
                <tr>
                    <td>{d.name}</td>
                    <td class={styles.number}>{d.honoured}</td>
                    <td class={styles.number}>{d.broken}</td>
                    <td class={styles.number}>{d.features}</td>
                    <td class={styles.number}>{d.time}</td>
                </tr>)
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