import styles from 'pages/pages.module.scss';

const Concrete = () => {
    return (
        <>
        <figure>
            <ul class={styles.dashedItemsList}>
                <li>Respect people I build products for and treat them as friends, not users.</li>
                <ul class={styles.dashedItemsList}>
                    <li>We pledge not to sell, exchange or exploit user data.</li>
                    <ul class={styles.dashedItemsList}>
                        <li>No cross-site or cross-device tracking.</li>
                    </ul>
                </ul>
            </ul>
            <figcaption><em>The cascade of pledges: how to choose a website analytics provider.</em></figcaption>
        </figure>
        </>
    )
};

export default Concrete;