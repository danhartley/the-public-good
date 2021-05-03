import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Budget = () => {
    return (
        <Layout title="Budget" description={'Budget'}>
            <h2>Budget page</h2>

            <p>
                <span class={styles.big}>BIG</span>
            </p>

        </Layout>
    )
};

export default Budget;