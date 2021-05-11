import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Budget = () => {
    return (
        <Layout header="Budget" title="Budget" description={'Budget'}>
            <p>
                <span class={styles.big}>BIG</span>
            </p>
        </Layout>
    )
};

export default Budget;