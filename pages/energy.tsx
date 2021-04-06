import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';
import Links from 'components/links/Links';

const Energy = () => {
    return (
        <Layout title="Energy" description={'Energy'}>
            <section class={styles.card}>
                <h2>Energy</h2>

                <h3>Abstract</h3>

                <p>There is a fearful asymmetry between the accumulation of carbon and methane in the earth, and their release into the atmosphere; reserves laid down over many millions of years many millions of years ago will be exhausted in a hundred odd years. Coal fields will endure the longest, oil and gas may be gone in fifty.</p>

                <p>We used to worry about running out of fossil fuels, now our primary concern is how to reduce our dependency on them. Our species is dependent on energy, it has set us apart, enabling an explosion in evolution and culture which has given us power far beyond the limits of our own bodies.</p>

                <p>We we moved from burning wood to burning coal and then to oil and gas, we benefited from harnasing fuels that had greater energy densities. Nuclear briefly promised to eclipse them, the first energy source not derived from our sun, but from long distand dead stars. It may yet do so.</p>

                <p>Contemporary fuels, those which can be replenished until our sun too dies,  </p>

                <h3>Numbers, not adjectives</h3>
                
                <h4>What is our consumption of energy?</h4>
                <h4>How do we supply the energy we use?</h4>
                <h4>What do we do?</h4>

                <p>
                    <span class={styles.quote}>
                        if everyone does a little, we’ll achieve only a little. <a href="http://www.withouthotair.com/c1/page_3.shtml">David McKay</a>
                    </span>
                </p>

                {/* <p>Our use of contemporary energy, in the form of controlled fire, enabled our evolution.</p> */}

                <h3>Fossil fuels</h3>

                <p><a href="https://ourworldindata.org/grapher/years-of-fossil-fuel-reserves-left">Years of fossil fuel reserves left</a></p>
                <p><a href="https://ourworldindata.org/grapher/cumulative-co2-emissions-region?stackMode=absolute">Cumulative emissions</a></p>

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

                <p>This article owes a debt to David McKay and his book, <a href="http://www.withouthotair.com/" aria-label="Online version of Sustainable Energy - Without the Hot Air">Sustainable Energy - Without the Hot Air</a>.</p>

            </section>
            <Links.RelatedLinks links={[{href:'numbers',title:'Numbers'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Energy;

{/* <a aria-label="Scientific American article on Wrangham's theory that cooking spurred our evolution" href="https://www.scientificamerican.com/article/cooking-up-bigger-brains/">cook</a> */}
{/* One unproven theory proposes that our own species, homo sapiens, was fire-dependent, and could not have evolved if it hadn't been for the ability of homo erectus to control fire. */}