import styles from 'pages/pages.module.scss';

const Table = ({calculators}) => {

    const rows = calculators.map(c => {

        const other = c.score.other.map(o => {
            return (
                <li>{o}</li>
            )
        });

        return (
        <tr>
            <td>{c.name}</td>
            <td>{c.score.co2}t CO2e</td>
            <td class={styles.wideOnly}>{c.score.shareable ? 'true' : 'false'}</td>
            {c.score.method ? <td class={styles.wideOnly}><a href={c.score.method}>{c.score.sources ? 'true' : 'false'}</a></td> : null }
            <td class={styles.wideOnly}><ul class={styles.list}>{other}</ul></td>
        </tr> )
    });

    return (
        <table class={styles.table}>
           <thead>
            <tr>
                <th>Calculator</th>
                <th>Footprint</th>
                <th class={styles.wideOnly}>Shareable</th>
                <th class={styles.wideOnly}>Sources</th>
                <th class={styles.wideOnly}>Other</th>
            </tr>
           </thead>
          <tbody>
            { rows }
         </tbody>
        </table>
    )
};

export default Table;