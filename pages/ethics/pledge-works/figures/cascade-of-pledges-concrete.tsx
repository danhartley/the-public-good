import styles from 'pages/pages.module.scss'

const Concrete = () => {
  return (
    <>
      <figure>
        <ul class={styles.dashedCascadedItemsList}>
          <li>Respect people I build products for and treat them as friends, not users.</li>
          <li>
            <ol type="A" class={styles.dashedCascadedItemsList}>
              <li>We pledge not to sell, exchange or exploit user data.</li>
              <li>
                <ol type="i" class={styles.dashedCascadedItemsList}>
                  <li>No cross-site or cross-device tracking.</li>
                </ol>
              </li>
            </ol>
          </li>
        </ul>
        <figcaption>
          <em>The cascade of pledges: how to choose a website analytics provider.</em>
        </figcaption>
      </figure>
    </>
  )
}

export default Concrete
