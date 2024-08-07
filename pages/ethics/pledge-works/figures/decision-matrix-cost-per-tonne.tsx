import styles from 'pages/pages.module.scss'

const CostPerTonne = () => {
  return (
    <div className={styles.decisionMatrix}>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Criteria</th>
            <th className={styles.centredText}>
              <div>$25/t</div>
              <span>Weighted score</span>
            </th>
            <th className={styles.centredText}>
              <div>$50/t</div>
              <span>Weighted score</span>
            </th>
            <th className={styles.centredText}>
              <div>$100/t</div>
              <span>Weighted score</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Price in line with what customers will pay</td>
            <td>100</td>
            <td>100</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Price permits for a profit</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Competitive price</td>
            <td>33</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Price in line with EU price of carbon credits</td>
            <td>0</td>
            <td>25</td>
            <td>25</td>
          </tr>
          <tr>
            <td>…</td>
            <td>…</td>
            <td>…</td>
            <td>…</td>
            <td>…</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total score</td>
            <td>217</td>
            <td>219</td>
            <td>119</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default CostPerTonne
