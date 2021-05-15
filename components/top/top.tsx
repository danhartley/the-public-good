import styles from 'components/top/Top.module.scss';

const Top = () => {
    return (
        <p class={styles.top}>
            <div class={styles.internalLink}>
                <a class={styles.bang} href="#top">Back to the top of the page</a>
            </div>
        </p>
    )
};

export default Top;