import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';
import Links from 'components/links/Links';

const Nature = () => {
    return (
        <Layout title="Nature" description={'Nature'}>
            <section class={styles.card}>
                <h2>Nature</h2>

                <h3>Abstract</h3>

                <p>An uneasy mutualism exists between humans and the species we eat; the crops we have modified flourish, and the animals we have domesticated have multiplied. Plants, fish and animals have been subject to evolution through human selection, and been placed in ecosytems and environments engineered to maximise the yield of the products we derive from them. Chickens are the most successful animal on the planet by numbers, there are three to every human, but few live in conditions they would seek; and every year 69 billion are killed for food.</p>
                
                <p>There is a stange, and appalling asymmetry in the history of fossil fuels; laid down over millions of years, many millions of years ago, those that we have burnt have given up their carbon in a little over a hundred and fifty years.</p>

                <p>They enabled an explosion in our development, and gave us power far beyond the limits of our own bodies.</p>

                <p>Our use of contemporary energy, in the form of controlled fire, enabled our evolution.</p>

                <h3>Food production</h3>

                //https://ourworldindata.org/meat-production


                <h3>Fire</h3>

                <p>The earliest supported findings of <a href="https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans">controlled use of fire</a> are from Wonderwerk, South Africa, 1 million years ago, but Homo erectus may have done so <a aria-label="Royal Society Article, The discovery of fire by humans: a long and convoluted process" href="https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0164">much earlier</a>. </p>

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