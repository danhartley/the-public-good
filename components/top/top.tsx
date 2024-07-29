import Links from 'components/links/Links';
import styles from 'components/top/Top.module.scss';

const Top = () => {
    return (
        <div>
            <div className={styles.top}>
                <div className={styles.internalLink}>
                    <Links.EL link={{source:'#top'}}>Back to the top of the page</Links.EL>
                </div>
            </div>
        </div>
    )
};

export default Top;