import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Services = () => {
    return (
        <Layout title="Web Services" description={'Web Services'}>
            <section class={styles.card}>
                <h2>Website Services</h2>                
                <p>                
                    <span>With every website I make, I try something new. For this website I kept a record of what I had done, and experimented with <a href="https://www.nngroup.com/articles/dark-mode/">dark mode</a> for the first time. The evidence suggests that a site may support only light mode, but if you want to experiment with dark mode, you should offer <a aria-label="A guide to using light and dark modes" href="https://luiscastro.co/2020/08/19/dark-mode-support">the option to switch</a> to light mode.</span>
                    <ul class={styles.list}>
                        <li>Conceive, design, build and test a new idea in 4-6</li>
                    </ul>
                </p>

                <p>                
                    <ul class={styles.list}>
                        <li>A proven way to build fast, accessible, extensible websites</li>
                    </ul>
                </p>
            </section>
        </Layout>
    )
};

export default Services;