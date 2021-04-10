import Link from 'next/link';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';
import Links from 'components/links/Links';

const Energy = () => {
    return (
        <Layout title="Energy" description={'Energy'}>
            <section class={styles.card}>
                <h2>Energy</h2>

                <h3>Energy & Electricty</h3>

                <p>There have been notable successes in replacing fossil fuels in the production of electricity, but less so for the energy sector as a whole.</p>

                <h2>Energy, Time & Space</h2>

                {/* (transport, buildings and industry), or agriculture */}

                <p>There is a fearful asymmetry between the accumulation of carbon and methane in the earth, and their release into the atmosphere; reserves laid down over thousands of millenia many millions of years ago will be exhausted in a little over a hundred years. Coal fields will endure the longest, oil and gas may be gone in fifty.</p>

                <p>We used to worry about running out of fossil fuels, now our primary concern is how to reduce our dependency on them. Our species is defined by energy, the use of which has set us apart; technology provides us with power far beyond the limits of our own bodies.</p>

                <p>As we moved from burning wood to burning coal and then to oil and gas, we benefited from harnessing fuels with greater energy densities. Then came nuclear energy which is not derived from our sun but from the death of ancient stars; its role is controversial, and its contribution to the energy mix is likely to be limited at best.</p>

                <p>Contemporary fuels are those which are replenished by the sun: wind, solar, hydroelectric. They have two drawbacks - they are intermittent, and are less energy dense; for the first time, we are converting our energy supply to forms that occupy more space, and have less power.</p>

                <h3>Numbers, not adjectives</h3>
                
                <h4>What is our consumption of energy?</h4>
                <h4>How do we supply the energy we use?</h4>
                <h4>What do we do?</h4>

                <p>
                    <span class={styles.quote}>
                        if everyone does a little, we’ll achieve only a little. <a href="http://www.withouthotair.com/c1/page_3.shtml">David McKay</a>
                    </span>
                </p>

                <h3>Power density & Energy density</h3>

                <p>
                    <span class={styles.quote}>
                    Higher reliance on renewable energies may be desirable (mainly because of perceived environmental and strategic reasons) and technical advances would also make it an increasingly appealing economic choice –- but inherently low power densities of these conversions will require a new system of fuel and electricity supply that will be able to substitute for today’s dominant practices only after decades of gradual development. <a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Power density primer Vaclav Smil</a>
                    </span>
                </p>

                <h3>Photosynthesis</h3>

                <p>
                    <span class={styles.quote}>
                    Photosynthesis is an inherently inefficient energy conversion process, and production of biomass has large space requirements. Even with an intensively cultivated plantation of fast-growing trees, a wood-burning electricity generation plant would not have power densities higher than 0.6 W/m2, and for most operations the rate would be below 0.5 W/m2. Space demand for such facilities, then, would be two to three orders of magnitude (100 to 1,000 times) greater than for coal- or gas-fired electricity generation. <a href="http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf">Power density primer Vaclav Smil</a>
                    </span>
                </p>

                <h3>Fossil fuels</h3>

                <p><a href="https://ourworldindata.org/grapher/years-of-fossil-fuel-reserves-left">Years of fossil fuel reserves left</a></p>
                <p><a href="https://ourworldindata.org/grapher/cumulative-co2-emissions-region?stackMode=absolute">Cumulative emissions</a></p>

                <h3>Fire</h3>

                <p>The earliest supported findings of <a href="https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans">controlled use of fire</a> are from Wonderwerk, South Africa, 1 million years ago, but Homo erectus may have done so <a aria-label="Royal Society Article, The discovery of fire by humans: a long and convoluted process" href="https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0164">much earlier</a>. </p>

                <p>Evidence of fire stimulation and preservation is found throughout our ancestors, and <span class={styles.italic}>Homo erectus</span>, from whom we evolved, had a brain 50% bigger than its predecessor, <span class={styles.italic}>Homo habilis</span>. These skills were likely critical to the evolution of our own species; we are poorly adapted to survive without the ability to control fire to keep warm, and to <a aria-label="Control of Fire in the Paleolithic: Evaluating the Cooking Hypothesis by Richard Wrangham" href="https://www.journals.uchicago.edu/doi/pdfplus/10.1086/692113">cook</a> (PDF). More energy enabled us to do less work to stay alive, and in response large brains, best suited to profit from thinking time, evolved. So too, our dependence on energy.</p>

                <p>Our entanglement with fossil fuels is more recent.</p>

                <h3>Powering down</h3>

                <p>Horsepower 'invented' to demonstrate value of the steam engine; similarly horses to cars, carbon to oil.</p>

                <h3>Asymmetry</h3>

                <Links.InternalLinkBlock link={{'value': 'facts#geologic_time', 'text': 'Geologic time'}}></Links.InternalLinkBlock>

                <p>We crossed a divide between the living and the non-living when we began to use fossil fuels. The work this enabled us to do has been extraordinary.</p>

                <p>This article owes a debt to David McKay and his book, <a href="http://www.withouthotair.com/" aria-label="Online version of Sustainable Energy - Without the Hot Air">Sustainable Energy - Without the Hot Air</a>.</p>

            </section>
            <Links.RelatedLinks links={[{href:'facts',title:'Numbers'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Energy;

{/* <a aria-label="Scientific American article on Wrangham's theory that cooking spurred our evolution" href="https://www.scientificamerican.com/article/cooking-up-bigger-brains/">cook</a> */}
{/* One unproven theory proposes that our own species, homo sapiens, was fire-dependent, and could not have evolved if it hadn't been for the ability of homo erectus to control fire. */}