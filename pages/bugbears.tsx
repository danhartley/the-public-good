import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Services = () => {
    return (
        <Layout title="Web Services" description={'Web Services'}>
            <section class={styles.card}>
                <h2>Website Bugbears</h2>
                
                <p>   
                    <ul class={styles.list}>
                        <li>Companies that promise to empower me. <a aria-label="truthteller, website for climate whistleblowers" href="https://truthteller.life/">Truth tellers</a> has a clear message.</li>
                        <li>Menus that change in size when you scroll down the page.</li>
                        <li>Websites that fail to get to the point. The <a href="https://keelingcurve.ucsd.edu/">Keeling Curve</a> gets straight to the number.</li>
                        <li>Huge images occupying the entire screen, and that are neither pertinent nor arresting. <a aria-label="The blog of designer swiss miss" href="https://www.swiss-miss.com/about/hi-i-am-tina">The photo of this designer in her studio</a> is relevant and informative.</li>
                        <li>Text that is illegible either because it is too small, or because it contrasts poorly with the background. <a href="https://www.advocatedesign.co.uk/index">Advocate</a> leaves us in no doubt as to what they do.</li>
                        <li>Appearing and disappearing headers.</li>
                    </ul>
                </p>

            </section>
        </Layout>
    )
};

export default Services;