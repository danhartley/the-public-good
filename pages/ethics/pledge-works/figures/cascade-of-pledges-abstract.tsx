import styles from 'pages/pages.module.scss';

const Abstract = () => {
    return (
        <>
        <figure>
            <ul class={styles.dashedItemsList}>
                <li>Organisational principles.</li>
                <ul class={styles.dashedItemsList}>
                    <li>Project pledges.</li>
                    <ul class={styles.dashedItemsList}>
                        <li>Verifiable outcomes.</li>
                    </ul>
                </ul>
            </ul>
            <figcaption><em>The cascade of pledges: increasingly concrete.</em></figcaption>
        </figure>
        </>
    )
};

export default Abstract;

