import Link from 'next/link';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Thinking = () => {
    return (
        <Layout title="Web Thinking" description={'Web Thinking'}>
            <section class={styles.card}>
                <h2>Thinking</h2>                

                <h3>How to act</h3>
                <div class={styles.timing}>3 minute read</div>

                {/* https://mashable.com/feature/carbon-footprint-pr-campaign-sham */}

                <p>In the 1950s an ad hoc affiliation of American companies started a campaign called <a href="https://kab.org/">Keep America Beautiful</a> with the intention of shifting responsibility for the waste from mass-produced plastics from them to the public. It worked in two respects, the campaign was successful in diverting attention, but people also became aware of the impact of leaving rubbish; legislation followed, and the campaign is still active today.</p>

                <p>BP launched the first carbon emissions calculator in 2006, and their <a aria-label="BP carbon emissions calculator" href="https://www.knowyourcarbonfootprint.com/">second</a> in 2020. But when they introduced it on Twitter, the <a href="https://twitter.com/bp_plc/status/1186645440621531136">reception</a> was not favourable.</p>

                <p>This was not the first time the company has addressed the problem of CO2 emissions. In 2002 BP rebranded itself as 'Beyond Petroleum', an ethos that proved <a aria-label="Forbes article reviewing BP's position on renewables" href="https://www.forbes.com/sites/scottcarpenter/2020/08/04/bps-new-renewables-push-redolent-of-abandoned-beyond-petroleum-rebrand/">short-lived</a>. Following the Deepwater Horizon disaster in 2006, BP sold off its <a aria-label="Reuters article on BP selling off solar assets" href="https://www.reuters.com/article/us-bp-solar/bp-turns-out-lights-at-solar-business-idUSTRE7BK1CC20111221?edition-redirect=uk">solar assets</a> in 2011 and <a aria-label="Reuters article on BP selling off wind assets" href="https://www.reuters.com/article/us-bp-wind-idUSBRE93208B20130403">wind assets</a> in 2013.</p>

                <p>In <a href="https://www.researchgate.net/publication/305209345_Where_has_all_the_oil_gone_BP_branding_and_the_discursive_elimination_of_climate_change_risk">'Where has all the oil gone?</a>', Julie Doyle sums up BP's rationale:
                    <span class={styles.quote}>
                        …through the use of the language and symbols of environmental discourse, as well as the discourse of sustainable development, BP is able to acknowledge the current reality of climate change (and the role of fossil fuels within this), whilst simultaneously erase its own implications, as an oil company.
                    </span>
                </p>

                <p>It appears that it is prudent to be sceptical of what fossil fuel companies, perhaps all large public companies, tell us about themselves.</p>

                {/* Amy Westervelt's podcast series <a href="https://www.criticalfrequency.org/drilled">Drilled</a> */}

                <p>The <a href="https://www.bbc.com/future/article/20200618-climate-change-who-is-to-blame-and-why-does-it-matter">debate</a> as to whether climate change is tackled most effectively through <a href="https://en.wikipedia.org/wiki/Individual_action_on_climate_change">individual action</a>, or through collaborative initiatives, be they social or political, such as voting, protesting, and lobbying. Mark Kaufman <a aria-label="Mark Kaufman as Mashable sets out the case against fossil fuel companies" href="https://mashable.com/feature/carbon-footprint-pr-campaign-sham">argues</a> the case for placing the burden of the responsibility for global warming on the fossil fuel industry. He concludes,
                    <span class={styles.quote}>
                    BP wants you to accept responsibility for the globally disrupted climate. Just like beverage industrialists wanted people to feel bad about the amassing pollution created by their plastics and cans, or more sinisterly, tobacco companies blamed smokers for becoming addicted to addictive carcinogenic products. We’ve seen this manipulative playbook before, and BP played it well.
                    </span>
                </p>

                <p>Kaufamn does not discount personal responsibility, or action particularly as it may lead to political action.</p>

                <p>In a Financial Times <a href="https://www.ft.com/content/b6bdc4b1-d41f-49f0-a3df-61614cc1a2b7">review</a> <span class={styles.super}>paywall</span> of books by Michael E Mann, Bill Gates and Jonathan Franzen, the authors are presented respectively as favouring legislation, technology, and mitigation.</p>

                <p>In an article for Time, <a href="https://time.com/5669071/lifestyle-changes-climate-change/">Lifestyle Changes Aren’t Enough to Save the Planet. Here’s What Could</a>, Mann specifically questions the efficacy of an absolutist position,
                    <span class={styles.quote}>
                        If all climate advocates were expected to live off the grid, eating only what they could grow themselves and wearing only the clothes they’d knitted from scratch, there wouldn’t be much of a climate movement. That level of sacrifice is unacceptable to most.
                    </span>          
                    He continues that (forcing people to give things up),
                    <span class={styles.quote}>
                        plays right into the hands of climate-change deniers whose strategy tends to be to portray climate champions as freedom-hating totalitarians.
                    </span>          
                </p>

                <p>He has a point; few of us like being told what to do, and on matters of morality, we tend to be especially prickly.</p>

                <p>Two recent studies provide evidential support that action in one area can preclude further action; acceptance of <a aria-label="Article from Nature, Nudging out support for a carbon tax." href="https://www.nature.com/articles/s41558-019-0474-0.epdf?referrer_access_token=7hony2jeIBDx312LZL9Gf9RgN0jAjWel9jnR3ZoTv0Nfy3PIgvrwnNXQzIbXH8z1u5o1DVXJKOCBERWXBQ6n3i7p3mfuhk8O9_ARe2av1P-d3pfhbb06zqr_k1ZVK_HD8tEj_6p2jxRJQxwkRFQWahxt7ZYR4Ws1ZVY58B8B8F6TJ6aO9hG-1I9AhErSlutuYsCZeDXvm9-XQaK48r5_g_7ekTO-pGXMZtdqirjpVkfWgFjWyxnVqqn0_h9toXZES8i2jx06Io6c6_qOC8Bd6VHPqm72I77ZCjw2ljeahJRxzha7MfU5fOL8oy4OqgnRM5K5ySLjcAfgtZx4iUYU7Q%3D%3D&tracking_referrer=www.usatoday.com">one tax</a>, even at the lower end of a range, or <a aria-label="Article from Nature, Household behaviour crowds out support for climate change policy when sufficient progress is perceived." href="https://www.nature.com/articles/nclimate3316">effortful action</a> <span class={styles.super}>abstract</span>, both lessen acceptance of further taxation. This problem is exacerbated if we overestimate the value of our actions.  A household that buys only locally sourced meat may think it has done its bit, though this has <a aria-label="Article by Our World in Data, You want to reduce the carbon footprint of your food? Focus on what you eat, not whether your food is local" href="https://ourworldindata.org/food-choice-vs-eating-local">minimal impact</a> on greenhouse gas emissions.</p>

                <p>Mann is worried that debates about personal choices will distract from the need to police carbon emissions. Diet is, however, more than simply a lifestyle choice; food production is big business. According to Our World in Data, <a href="https://ourworldindata.org/environmental-impacts-of-food">food production</a> accounts for 26% of global greenhouse gas emissions.</p>

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

                <h3>Participation</h3>

                <p>Mann himself is a vegetarian. Bill Gates admits to the guilty pleasure of using a private jet. Do these things matter? Mann does not proselytise on behalf of vegetarianism, Gates thinks personal actions are important (but less so than technological fixes). Individually the impact of their actions is infinitesimal, but does it affect how they think? We can't know, but it is a question we can ask ourselves, of our own guilty pleasures, and actions. This can apply in both directions, the vegan, having made a personal investment, may oversell veganism as a solution.</p>

                {/* https://interactive.carbonbrief.org/what-is-the-climate-impact-of-eating-meat-and-dairy/ */}

                <p>One way to reduce the tension between individual and political action is to extend the traditional separation of powers in government beyond the executive, legislative and judicial to include citizens assemblies. Two examples are the assembly in <a href="https://en.wikipedia.org/wiki/Citizens%27_Assembly_(Ireland)">Ireland</a> which considered a number of questions, and <a href="https://www.climateassembly.uk/">Climate Assembly UK</a>.</p>

                <p>Targets and deadlines are of little meaning if they are not measured, met, or mandatory.</p>

                {/* https://time.com/5669071/lifestyle-changes-climate-change/ */}

                <p>Regulation, as Mann advocates, has potential. Governments, and international bodies, can work backwards from what is necessary to what must be done: setting the cost of carbon tax credits at the required level, not what the market deems acceptable; mandating emissions levels; phasing out of technologies; and legislating for environmental protection. How to meet these explicit goals will be a collective effort but there must be stiff penalties for companies and individuals who transgress, including shareholders and company executives, including the removal of licences, profits, and the right to perform certain duties.</p>

                <p>We are also free to advocate in favour of both individual and collection responses, and sometimes the two come together, as when we address our political representatives directly.</p>

                <p>In addition, media, social or otherwise, must be accountable for the information they publish, and require editors and journalists to provide evidence in support of their arguments or contentions.</p>


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

                <p>There a some talk that the real problem with the world is that there are too many people. This debate would be more palatable in a just world; <a aria-label="Data for children per woman provided by Our World in Data" href="https://ourworldindata.org/grapher/children-per-woman-un?country=~OWID_WRL">children per woman</a> is at its highest in Niger, at 6.4, but the <a aria-label="Data for per capita emissions provided by Our World in Data" href="https://ourworldindata.org/grapher/co-emissions-per-capita">carbon footprint</a> of each person is 0.09 tonnes per year. In the US, the comparable figures are 1.77 (3.6 times lower) and 16.06 (178.4 time higher). Combining these figures, we find that to effect the same emissions reduction requires one person from the US or 49.36 people from Niger.</p>

                <p>It is not the number of people that is critical, but what each of us demands of the planet; the demand made by people in developed countries is unsustainable, and would remain so even if the world's population were reduced by the poorest 50%; they are responsible for <a aria-label="Our World in Data report on CO2 emissions by income" href="https://ourworldindata.org/co2-by-income-region">14% of emissions</a>, <a aria-label="Oxfam report on carbon inequality" href="https://www.oxfam.org/en/press-releases/carbon-emissions-richest-1-percent-more-double-emissions-poorest-half-humanity">half that of the top 1%</a>.</p>

                <p>The World Bank emphasises the <a href="https://www.worldbank.org/en/topic/education/publication/missed-opportunities-the-high-cost-of-not-educating-girls#:~:text=The%20report%20says%20that%20limited,lost%20lifetime%20productivity%20and%20earnings.">financial cost</a> of not educating girls, to the state and the individual,
                <span class={styles.quote}>On average, women with secondary school education earn almost twice as much as those with no education at all.</span></p>
                <p>There are many benefits including the elimination of child marriages, better health and well-being, greater agency and opportunities, and a reduction in fertility rates. A study for the BBC by the Royal Geographical Society found that the world population could be reduced by 843 million people through improving women's education, and funding family planning.</p>

                <h3>Travellers from an antique land</h3>

                <p>The world is getting hotter, the question is by how much, and species are being lost, it is only their number that is in doubt. The results of our actions, in respect of climate change and biodiversity loss, will be a mixture of successes and failures, as they are now.</p>

                <p>Politicians in particular love deadlines, so long as they are in the future, when the likelihood of them being held accountable is low; they have the ring of determination, and steely commitment. So too do campaigners, for they generate headlines, and rally support. Are deadlines useful?</p>

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