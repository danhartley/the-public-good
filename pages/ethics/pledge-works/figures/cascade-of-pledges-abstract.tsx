import styles from 'pages/pages.module.scss'

const Abstract = () => {
  return (
    <>
      <figure>
        <ul className={styles.dashedCascadedItemsList}>
          <li>Organisational principles.</li>
          <li>
            <ol type="A" className={styles.dashedCascadedItemsList}>
              <li>Project pledges.</li>
              <li>
                <ol type="i" className={styles.dashedCascadedItemsList}>
                  <li>Verifiable outcomes.</li>
                </ol>
              </li>
            </ol>
          </li>
        </ul>
        <figcaption>
          <em>The cascade of pledges: increasingly concrete.</em>
        </figcaption>
      </figure>
    </>
  )
}

export default Abstract
