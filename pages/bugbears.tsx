import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Services = () => {
    return (
        <Layout title="Web Services" description={'Web Services'}>
            <section class={styles.card}>
                <h2>Website Bugbears</h2>
                
                <p>   
                    <ul class={styles.list}>
                        <li>Companies that promise to empower me.</li>
                        <li>Menus that change in size whe you scroll down the page.</li>
                        <li>Huge images occupying the entire screen, and that are neither informative nor arresting.</li>
                        <li>Text that is illegible either because it is too small, or because it contrasts poorly with the background.</li>
                    </ul>
                </p>

            </section>
        </Layout>
    )
};

export default Services;