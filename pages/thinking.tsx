import Link from 'next/link';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Thinking = () => {
    return (
        <Layout title="Web Thinking" description={'Web Thinking'}>
            <section class={styles.card}>
                <h2>Thinking</h2>                

                <h3>How to act</h3>
                <p>There is some <a href="https://en.wikipedia.org/wiki/Individual_action_on_climate_change">debate</a> as to whether climate change, ecosystem degradation, and species loss are prevented or mitigated most effectively through personal action, such as becoming a vegan, or through collaborative initiatives, be they social or political, such as voting, protesting, and lobbying. We are also free to advocate in favour of both individual and collection responses, and sometimes the two come together, as when we address our political representatives directly.</p>

                <p>If we chose to separate our private and public lives, or segregate personal and business affairs, that is our decision, it does not reflect an inherent difference, or truth; we are but one person, though it may be simpler or more convenient to imagine that we are not. The consequences of our actions are unaffected by the roles we assume when we undertake those actions.</p>

                <p>Knowing the facts is not sufficient to effect change, but a decision which may involve inconvenience, loss of income, or the forfeit of a pleasure, is sustained more readily when it has solid foundations, for then the reason behind, and the need for, the change, is clear, though the consequences are neither immediate nor discernible. It is contrary to forego gratification or gain, but it is hard to ignore that which is right to do, when that right has been established and understood. We may call this our conscience, our sense of duty, or a moral imperative; yet we may discover that acting in accordance with our beliefs and understanding, is less disruptive, and more sustaining, than we imagined.</p>

                <h3>More change, not less</h3>
            
                <p>An overhaul of how we do things is overdue. That we have to adapt and mitigate is no longer in doubt; governments, <a aria-label="Report on climate risk and decarbonization" href="https://www.mckinsey.com/business-functions/sustainability/our-insights/climate-risk-and-decarbonization-what-every-mining-ceo-needs-to-know">management consultancies</a>, and even <a href="https://www.bp.com/en/global/corporate/news-and-insights/reimagining-energy/sustainability-report-carbon-6-ways-bp-taking-action.html">fossil fuel companies</a> acknowledge that climate change as a consequence of elevated greenhouse gas emissions, is destructive and requires a response.</p>

                <p>But few of these institutions, governments, politicians, and businesses or their owners, are prepared to entertain radical change; from a mixture of caution, cynicism, opportunism, and innocent faith, they persevere with the practices that have given them prestige, money, and power. Bill Gates primarily favours technology to save the day, though he also <a href="https://www.gatesnotes.com/Energy/What-you-can-do-to-fight-climate-change">promotes individual and political activity</a>; Mark Carney, the former head of the Bank of England, and a UN special envoy for climate and finance, <a href="https://www.un.org/en/climatechange/mark-carney-investing-net-zero-climate-solutions-creates-value-and-rewards">still has faith in the markets</a>, though he stresses the importance of values as well as value; the British Government has a 10 point plan, but it is for a Green <span class={styles.italic}>Industrial</span> Revolution.</p>

                <p>They may be right. It may be that continuity is safer than disruption. But we are dealing with a new type of problem.</p>

                <p>The diversity and ingenuity of responses to climate change, and biodiversity loss is staggering, and <a href="https://www.poetryfoundation.org/poems/44688/to-his-coy-mistress">had we but world enough and time</a>, we might concede, reluctantly because inequity and injustice are also in abundance that, as a species, we are conjuring up miracles.</p>

                {/* https://www.globalwitness.org/en/campaigns/environmental-activists/defending-tomorrow/ */}
                <p>News jobs are promised, but the wages of low-skilled jobs are <a href="https://www.reuters.com/article/us-china-economy-retraining-idUSKCN0WM01B">lower</a>, particularly in comparison to well-paid jobs in old industries which are often above average; this creates resistance to change from constituents, owners and their representatives in government. The loss in absolute terms is often greatest to executives and owners who have a strong incentive to invest in lobbying, but a relative higher loss is felt by the majority of employees. A general leveling-up of pay, reversing the trend in the <a href="https://www.epi.org/publication/ceo-compensation-2018/">US</a> and Britain since the 1960s, would help; better wages improve lives, and recognising the intrinsic value of work rather than its tradable value, would be even more effective.</p>

                {/* <p>As Tim Christophersen, head of the Nature for Climate branch at the UN Environment Programme, puts it, 
                    <span class={styles.quote}>Ecosystem restoration is not a technical challenge; it’s a social challenge.</span>
                </p> */}

                <p>It may not be enough, but without compassion and trust, our task will be harder; a diminished, or eviscerated humanity, can be a comfort to no one, whether they acted well, or poorly, for or against, the common good.</p>

                <h3>Naturalists</h3>

                <p>One of the most remarkable lines from <a href="https://www.gov.uk/government/publications/final-report-the-economics-of-biodiversity-the-dasgupta-review">The Economics of Biodiversity</a> report comes from the preface,
                    <span class={styles.quote}>
                        If we care about our common future and the common future of our descendants, we should all in part be naturalists.
                    </span>
                </p>

                <h3>Out with the old</h3>

                <p>Informed discussion is now focused on how we should adapt rather than whether it is necessary, including questioning orthodox economic models and suppositions from within. In a report published 2 February 2021, <a href="https://www.gov.uk/government/publications/final-report-the-economics-of-biodiversity-the-dasgupta-review">The Economics of Biodiversity</a>, undertaken on behalf of HM Treasury (UK), the author, Professor Partha Dasgupta, writes:
                    <span class={styles.quote}>
                        The economics of climate change and international negotiations over carbon emissions would
                        seem to have gone further. There is an implicit suggestion there that GDP growth is the only
                        viable route for (i) reducing carbon emissions, (ii) eliminating global poverty, and (iii) ensuring
                        that development is sustainable.
                        That stance has given rise to a paradox: growth in global
                        output is seen as necessary for providing the funds that will be needed for reducing our
                        ecological footprint, even though the ways growth in global output have been achieved are
                        known to increase the footprint.
                    </span>

                    He continues,

                    <span class={styles.quote}>
                        The Review has addressed the currently near-universal conception of economic progress and shown it to be wildly misleading.
                    </span>
                </p>

                {/* <h3>Grands projets</h3>
                <p>A more open debate; grand projets are popular with some politicians in particular, but they have a mixed record. The idea of <a href="https://www.greenthesinai.com/">greening the Sinai desert</a> is stimulating, striking an optimistic note, but the mix of outside intervention - <a href="http://theweathermakers.nl/">The Weather Makers</a>, the company behind the plan have not visited the area, nor can due to instability in the region - requiring huge investment, the temption of huge profits, and an authoritarian regime, and precious little local involvement, gives pause for thought.</p> */}

                <h3>Population</h3>

                <p>There is some talk that the real problem with the world is that there are too many people. This debate would be more palatable in a just world; <a aria-label="Data for children per woman provided by Our World in Data" href="https://ourworldindata.org/grapher/children-per-woman-un?country=~OWID_WRL">children per woman</a> is at its highest in Niger, at 6.4, but the <a aria-label="Data for per capita emissions provided by Our World in Data" href="https://ourworldindata.org/grapher/co-emissions-per-capita">carbon footprint</a> of each person is 0.09 tonnes per year. In the US, the comparable figures are 1.77 (3.6 times lower) and 16.06 (178.4 time higher). Combining these figures, we find that to effect the same emissions reduction requires one person from the US or 49.36 people from Niger.</p>

                <p>It is not the number of people that is critical, but what each of us demands of the planet; the demand made by people in developed countries is unsustainable, and would remain so even if the world's population were reduced by the poorest 50%; they are responsible for <a aria-label="Our World in Data report on CO2 emissions by income" href="https://ourworldindata.org/co2-by-income-region">14% of emissions</a>, <a aria-label="Oxfam report on carbon inequality" href="https://www.oxfam.org/en/press-releases/carbon-emissions-richest-1-percent-more-double-emissions-poorest-half-humanity">half that of the top 1%</a>.</p>

                <p>The World Bank emphasises the <a href="https://www.worldbank.org/en/topic/education/publication/missed-opportunities-the-high-cost-of-not-educating-girls#:~:text=The%20report%20says%20that%20limited,lost%20lifetime%20productivity%20and%20earnings.">financial cost</a> of not educting girls, to the state and the individual,
                <span class={styles.quote}>On average, women with secondary school education earn almost twice as much as those with no education at all.</span></p>
                <p>There are many benefits including the elimination of child marriages, better health and well-being, greater agency and opportunities, and a reduction in fertility rates. A study for the BBC by the Royal Geographical Society found that the world population could be reduced by 843 million people through improving women's education, and funding family planning.</p>

                <h3>Travellers from an antique land</h3>

                <p>The world is getting hotter, the question is by how much, and species are being lost, it is only their number that is in doubt. The results of our actions, in respect of climate change and biodiversity loss, will be a mixture of successes and failures, as they are now.</p>

                <p>Polticians in particular love deadlines, so long as they are in the future, when the likelihood of them being held accountable is low; they have the ring of determination, and steely commitment. So too do campaigners, for they generate headlines, and rally support. Are deadlines useful?</p>

                <p>Deadlines that cannot be measured, and have no penalties if they are not met, are of limited use. They may pique interest in the short term, but if they are unrealistic, or meaningless, their expiry will have no effect.</p>

                <p>Failure to meet the Aichi Biodiversity Targets made in 2010 have been attributed in part to their form, which made them hard to measure. The first target was to ensure that <span class={styles.quote}>By 2020, at the latest, people are aware of the values of biodiversity and the steps they can take to conserve and use it sustainably.</span>A commendable goal, whose success or failure is hard to verify. The Aichi Targets are regarded as having <a aria-label="Nature report on the Aichi Biodiversity Targets" href="https://www.nature.com/articles/d41586-020-00450-5">failed</a>. The <a href="https://www.cbd.int/sp/targets/">Aichi Targets</a> will be superseded by targets agreed in May 2021 at Kunming, China.</p>

                {/* We cannot ignore the problems we face and hope everything works out, as though we were dealing with the toss of the coin. */}

                {/* <p>Evolution is backwards looking; a trait or a gene that already exists is passed on when the organism that contains it reproduces.</p> */}

                {/* <p>We have amassed a great heap of deadlines by when things must get done. </p> */}

                {/* <p>We have amassed a great heap of deadlines by when things must get done, future promises that others must fulfill. New dates are drawn in the sand as we trample those we marked before.</p> */}

                {/* New dates are drawn in the sand as we trample over the old ones */}

                {/* <p>Our history may not have prepared us for what we must do.</p> */}

                <p>There are the hard facts of science, that dictate how excess levels of greenhouse gases behave in the atmosphere, lithosphere, hydrosphere and biosphere, the conventions that our societies are built upon, such as progress, and the unpredictable and only partially understood psychology and pathology of our own species.</p>

                <p>Change at the scale required seems insurmountable, and it may prove to be beyond us; it is unlikely that tinkering with the system will suffice. There is scant evidence that our current models, institutions, and structures are adequate, or will submit to radical improvement. In our confrontation with climate change and biodiversity loss, even our triumphs are, at best, <a href="https://www.cfr.org/backgrounder/paris-global-climate-change-agreements">moderate successes</a>, or at worst, <a aria-label="Link to a report by the Convention on Biological Diversity summarising global progress towards the Aichi Biodiversity Targets." href="https://www.cbd.int/gbo5">failures</a>.</p>

                <p>How we act is up to each of us; we may chose to benefit from education, guidance, and help, but we possess the immediate and perpetual freedom to think; some enjoy the liberty of translating our thoughts into action, but <a href="https://www.frontiersin.org/articles/10.3389/fpubh.2019.00357/full">many</a> have little or no agency, and others fear they will not in the future. As we have discovered over the past year, our autonomy is quickly lost.</p>

            
            </section>                
        </Layout>
    )
};

export default Thinking;