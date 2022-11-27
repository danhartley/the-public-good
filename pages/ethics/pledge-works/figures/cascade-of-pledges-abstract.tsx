import styles from 'pages/pages.module.scss'

const Abstract = () => {
  return (
    <>
      <figure>
        <ul class={styles.dashedCascadedItemsList}>
          <li>Organisational principles.</li>
          <li>
            <ol type="A" class={styles.dashedCascadedItemsList}>
              <li>Project pledges.</li>
              <li>
                <ol type="i" class={styles.dashedCascadedItemsList}>
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
