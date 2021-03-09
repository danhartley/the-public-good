import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const History = () => {
    return (
        <Layout title="Web History" description={'Web History'}>
            <section class={styles.card}>
                <h2>Website History</h2>                
                <p>                
                    <ul class={styles.list}>
                        <li>
                            <a href="https://www.learn-the-planet.com/">Learn the Planet</a>.
                            <div>Lessons, videos and tests about the natural world.</div>
                        </li>
                        <li>
                            <a href="https://danhartley.github.io/snapdragon-verbs/">The Verb</a>
                            <div>Drills to test your knowledge of Spanish and Portuguese verbs.</div>
                        </li>
                        <li>
                            <a href="https://snapdragon-retrieval.netlify.app/providers">Snapdragon Retrieval</a>
                            <div>Short tests to accompany podcasts and long articles.</div>
                        </li>
                        <li>
                            <a href="https://condescending-villani-e9aade.netlify.app/">The Public Good</a>
                            <div>This site.</div>
                        </li>
                    </ul>
                </p>
            </section>
        </Layout>
    )
};

export default History;