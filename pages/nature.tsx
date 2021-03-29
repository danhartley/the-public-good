import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Nature = () => {
    return (
        <Layout title="Nature" description={'Nature'}>
            <section class={styles.card}>
                <h3>Nature</h3>
                <h3>Naturalists</h3>

                <p>Our reliance on wood as a fuel for fire is <a aria-label="Royal Society Article, The discovery of fire by humans: a long and convoluted process" href="https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0164">an old one</a>. One unproven theory proposes that our own species, homo sapiens, was fire-dependent, and could not have evolved if it hadn't been for the ability of homo erectus to control fire.</p>

                <p>Our entanglement with fossil fuels is more recent.</p>

                <p>One of the most remarkable lines from <a href="https://www.gov.uk/government/publications/final-report-the-economics-of-biodiversity-the-dasgupta-review">The Economics of Biodiversity</a> report comes from the preface,
                    <span class={styles.quote}>
                        If we care about our common future and the common future of our descendants, we should all in part be naturalists.
                    </span>
                </p>

            </section>
        </Layout>
    )
};

export default Nature;