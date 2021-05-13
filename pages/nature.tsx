import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';
import Links from 'components/links/Links';

const Nature = () => {
    return (
        <Layout title="Nature" description={'Nature'}>
            <section class={styles.card}>
                <h1>Nature</h1>

                <h2>Abstract</h2>

                <p>An uneasy mutualism exists between humans and the species we eat; the crops and animals we have domesticated and modified have flourished, and multiplied exponentially. Plants, fish and animals have been subject to evolution through human selection (selective breeding), and been placed in ecosytems and environments engineered to maximise the yield of the products we derive from them. Chickens are the most successful animal on the planet by numbers, there are three to every human, but whilst the species is prospering, the cost to the individual is high; few live in conditions they would seek, and every year 69 billion are killed for food.</p>

                <h2>Food production</h2>

                <p><a href="https://ourworldindata.org/meat-production">Dead animals</a></p>
                <p><a href="https://en.wikipedia.org/wiki/Selective_breeding">Selective breeding</a></p>

                <h2>Naturalists</h2>

                <p>One of the most remarkable lines from <a href="https://www.gov.uk/government/publications/final-report-the-economics-of-biodiversity-the-dasgupta-review">The Economics of Biodiversity</a> report comes from the preface,
                    <span class={styles.quote}>
                        If we care about our common future and the common future of our descendants, we should all in part be naturalists.
                    </span>
                </p>

            </section>
            <Links.RelatedLinks links={[{value:'climate-crisis/facts',text:'Facts'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Nature;

{/* <a aria-label="Scientific American article on Wrangham's theory that cooking spurred our evolution" href="https://www.scientificamerican.com/article/cooking-up-bigger-brains/">cook</a> */}
{/* One unproven theory proposes that our own species, homo sapiens, was fire-dependent, and could not have evolved if it hadn't been for the ability of homo erectus to control fire. */}