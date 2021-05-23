import Links from 'components/links/Links';
import styles from 'components/top/Top.module.scss';

const Top = () => {
    return (
        <p>
            <div class={styles.top}>
                <div class={styles.internalLink}>
                    <Links.EL link={{source:'#top'}}>Back to the top of the page</Links.EL>
                </div>
            </div>
        </p>
    )
};

export default Top;