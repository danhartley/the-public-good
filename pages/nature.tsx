import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';
import { Links } from 'components/links/Links';

const Nature = () => {
    return (
        <Layout title="Nature" description={'Nature'}>
            <section class={styles.card}>
                <h2>Nature</h2>
                
                <h3>Fire</h3>

                <p>There is evidence for our use of fire Our reliance on wood as a fuel for fire is <a aria-label="Royal Society Article, The discovery of fire by humans: a long and convoluted process" href="https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0164">an old one</a>. </p>

                <p>Evidence of fire stimulation and preservation is found throughout our ancestors, and <span class={styles.italic}>Homo erectus</span>, from whom we evolved, had a brain 50% bigger than its predecessor, <span class={styles.italic}>Homo habilis</span>. These skills were likely critical to the evolution of our own species; we are poorly adapted to survive without the ability to control fire to keep warm, and to <a aria-label="Control of Fire in the Paleolithic: Evaluating the Cooking Hypothesis by Richard Wrangham" href="https://www.journals.uchicago.edu/doi/pdfplus/10.1086/692113">cook</a> (PDF). More energy enabled us to do less work to stay alive, and in response large brains, best suited to profit from thinking time, evolved. So too, our dependence on energy.</p>

                <h3>Fossil fuels</h3>

                <p>Our entanglement with fossil fuels is more recent.</p>

                <h3>Asymmetry</h3>

                <Links.InternalLink link={{'value': 'numbers#geologic_time', 'text': 'Geologic time'}}></Links.InternalLink>

                <p>We crossed a divide between the living and the non-living when we began to use fossil fuels. The work this enabled us to do has been extraordinary.</p>

                <h3>Naturalists</h3>

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

{/* <a aria-label="Scientific American article on Wrangham's theory that cooking spurred our evolution" href="https://www.scientificamerican.com/article/cooking-up-bigger-brains/">cook</a> */}
{/* One unproven theory proposes that our own species, homo sapiens, was fire-dependent, and could not have evolved if it hadn't been for the ability of homo erectus to control fire. */}