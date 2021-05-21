import Links from 'components/links/Links';
import styles from 'components/top/Top.module.scss';

const Top = () => {
    return (
        <p class={styles.top}>
            <div class={styles.internalLink}>
                <Links.EL link={{source:'#top'}}>Back to the top of the page</Links.EL>
            </div>
        </p>
    )
};

export default Top;