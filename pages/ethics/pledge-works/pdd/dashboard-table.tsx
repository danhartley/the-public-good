import styles from 'components/dashboard/Dashboard.module.scss';

const DashboardTable = ({data}) => {

    const totals = data ? {
        checked: data.reduce((total, next) => total + next.requirements.checked, 0),
        unchecked: data.reduce((total, next) => total + next.requirements.unchecked, 0),
        broken: data.reduce((total, next) => total + next.pledges.broken, 0)
    } : null

    return (!data ? null : <table>
        <thead>
            <tr>
                <th></th>
                <th colSpan={2}>Requirements</th>
                <th colSpan={1}>Pledges</th>
            </tr>
            <tr>
                <th>Feature</th>
                <th>Checked</th>
                <th>Unchecked</th>
                <th>Broken pledges</th>
            </tr>
        </thead>
        <tbody>
            { data.map(d => {
                return(
                <tr>
                    <td>{d.feature}</td>
                    <td class={styles.number}>{d.requirements.checked}</td>
                    <td class={styles.number}>{d.requirements.unchecked}</td>
                    <td class={styles.number}>{d.pledges.broken}</td>
                </tr>)
            }) }
        </tbody>
        <tfoot>
            <tr>
                <th scope="row">Totals</th>
                <th class={styles.number}>{totals.checked}</th>
                <th class={styles.number}>{totals.unchecked}</th>
                <th class={styles.number}>{totals.broken}</th>
            </tr>
        </tfoot>
    </table>);
};

export default DashboardTable;