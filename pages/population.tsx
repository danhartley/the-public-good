import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Population = () => {
    return (
        <Layout title="Population" description={'Population'}>
            <section class={styles.card}>
                <h3>Population</h3>
                <p>There is some talk that the real problem with the world is that there are too many people. This debate would be more palatable in a just world; <a aria-label="Data for children per woman provided by Our World in Data" href="https://ourworldindata.org/grapher/children-per-woman-un?country=~OWID_WRL">children per woman</a> is at its highest in Niger, at 6.4, but the <a aria-label="Data for per capita emissions provided by Our World in Data" href="https://ourworldindata.org/grapher/co-emissions-per-capita">carbon footprint</a> of each person is 0.09 tonnes per year. In the US, the comparable figures are 1.77 (3.6 times lower) and 16.06 (178.4 time higher). Combining these figures, we find that to effect the same emissions reduction requires one person from the US or 49.36 people from Niger.</p>
                <p>It is not the number of people that is critical, but what each of us demands of the planet; the demand made by people in developed countries is unsustainable, and would remain so even if the world's population were reduced by the poorest 50%; they are responsible for <a aria-label="Our World in Data report on CO2 emissions by income" href="https://ourworldindata.org/co2-by-income-region">14% of emissions</a>, <a aria-label="Oxfam report on carbon inequality" href="https://www.oxfam.org/en/press-releases/carbon-emissions-richest-1-percent-more-double-emissions-poorest-half-humanity">half that of the top 1%</a>.</p>
                <p>The World Bank emphasises the <a href="https://www.worldbank.org/en/topic/education/publication/missed-opportunities-the-high-cost-of-not-educating-girls#:~:text=The%20report%20says%20that%20limited,lost%20lifetime%20productivity%20and%20earnings.">financial cost</a> of not educating girls, to the state and the individual,
                    <span class={styles.quote}>On average, women with secondary school education earn almost twice as much as those with no education at all.</span>
                </p>
                <p>There are many benefits to supporting girls and women including the elimination of child marriages, better health and well-being, greater agency and opportunities, and a reduction in fertility rates. A study for the BBC by the Royal Geographical Society found that the world population could be reduced by 843 million people through improving women's education, and funding family planning.</p>
            </section>
        </Layout>
    )
};

export default Population;