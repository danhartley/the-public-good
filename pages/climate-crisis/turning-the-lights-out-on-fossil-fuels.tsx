import Layout from 'components/layout/layout'
import Tables from 'components/tables/tables'
import Links from 'components/links/Links'
import Top from 'components/top/top'

import styles from 'pages/pages.module.scss'

const Change = () => {
  return (
    <Layout
      header="Turning the lights out on fossil fuels"
      rt="9 to 10"
      title="Climate change - Turning the lights out on fossil fuels"
      description={'Climate change - Turning the lights out on fossil fuels'}
      image="https://live.staticflickr.com/65535/51143928462_4df026babc_o.jpg"
    >
      <section>
        <h2 id="background">
          The transition away from fossil fuels is, by historical standards, happening fast. It just isn't happening
          fast enough.
        </h2>

        <p>
          When Napoleon began his invasion of Russia in the summer of 1812, he did not imagine that his Grande Armée of
          almost 449,000 men would be reduced to 9,000 within a few months.
        </p>

        <p>
          Preparation had been{' '}
          <Links.EL
            link={{ source: 'https://en.wikipedia.org/wiki/French_invasion_of_Russia#Provisions_and_transportation' }}
          >
            extensive
          </Links.EL>
          , far greater than for any of his previous campaigns, but it was not enough; starvation, thirst, disease, and
          desertion accounted for three quarters of the army before a relatively mild winter took its toll on the
          remainder. Napoleon planned for the battles he had fought and won in central Europe, not the one he faced in
          Russia.
        </p>

        <h3>The IPCC is established</h3>

        <p>
          In 1988 the World Meteorological Organisation{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/World_Meteorological_Organization' }}>WMO</Links.EL>{' '}
          and the United Nations Environment Programme UNEP established the Intergovernmental Panel on Climate Change{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Intergovernmental_Panel_on_Climate_Change' }}>
            IPCC
          </Links.EL>
          . The IPCC was charged with reporting to the United Nations Framework Convention on Climate Change{' '}
          <Links.EL
            link={{ source: 'https://en.wikipedia.org/wiki/United_Nations_Framework_Convention_on_Climate_Change' }}
          >
            UNFCCC
          </Links.EL>{' '}
          whose objective was to,
        </p>

        <blockquote>
          Stabilize greenhouse gas concentrations in the atmosphere at a level that would prevent dangerous
          anthropogenic (human-induced) interference with the climate system.
        </blockquote>

        <h3>Assessment reports</h3>

        <p>
          The IPCC{' '}
          <Links.EL link={{ source: 'https://www.ipcc.ch/report/sixth-assessment-report-cycle/' }}>
            reviews and collates
          </Links.EL>{' '}
          available data related to the climate in order to produce a synthesis report every 5 to 7 years, in addition
          to special reports on specific areas of concern, such as the{' '}
          <Links.EL link={{ source: 'https://www.ipcc.ch/srocc/' }}>cryosphere</Links.EL>, or{' '}
          <Links.EL link={{ source: 'https://www.ipcc.ch/srccl/' }}>land</Links.EL>. The next report, the sixth
          assessment of the impact of climate change, will also take into account{' '}
          <Links.EL link={{ source: 'https://www.ipbes.net/global-assessment' }}>
            biodiversity and ecosystem services
          </Links.EL>
          .
        </p>

        <p>
          The IPCC has recorded a rise in temperature{' '}
          <Links.EL link={{ source: 'https://www.ncdc.noaa.gov/climate-monitoring/' }}>1°C</Links.EL>{' '}
          <Links.EL link={{ source: 'https://www.ipcc.ch/sr15/faq/faq-chapter-1/' }}>
            above pre-industrial levels
          </Links.EL>{' '}
          (1850–1900).
        </p>

        <p>
          This rise in temperature is a consequence of the increase of carbon dioxide in the atmosphere from around{' '}
          <Links.EL
            link={{
              source:
                'https://www.carbonbrief.org/met-office-atmospheric-co2-now-hitting-50-higher-than-pre-industrial-levels',
            }}
          >
            278ppm
          </Links.EL>{' '}
          between 1750 and 1800 to ~419ppm{' '}
          <Links.EL link={{ source: 'https://www.co2.earth/daily-co2' }}>today</Links.EL>.
        </p>

        <h3>The Paris Agreement</h3>

        <p>
          In accordance with the{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Paris_Agreement' }}>Paris Agreement</Links.EL>,
          signed at{' '}
          <Links.EL
            link={{
              source:
                'https://unfccc.int/process-and-meetings/conferences/past-conferences/paris-climate-change-conference-november-2015/cop-21',
            }}
          >
            COP21
          </Links.EL>
          , each country is required to present a Nationally Determined Contribution{' '}
          <Links.EL
            link={{
              source:
                'https://unfccc.int/process-and-meetings/the-paris-agreement/nationally-determined-contributions-ndcs/nationally-determined-contributions-ndcs',
            }}
          >
            NDC
          </Links.EL>{' '}
          which should,
        </p>
        <blockquote>
          …embody efforts by each country to reduce national emissions and adapt to the impacts of climate change.
        </blockquote>
        <p>The agreement continued,</p>
        <blockquote>
          Together, these climate actions determine whether the world achieves the long-term goals of the Paris
          Agreement and to reach global peaking of greenhouse gas (GHG) emissions as soon as possible and to undertake
          rapid reductions thereafter in accordance with best available science, so as to achieve a balance between
          anthropogenic emissions by sources and removals by sinks of GHGs in the second half of this century.
        </blockquote>

        <p>Commitments have not been honoured.</p>
        <blockquote>
          After a year disrupted by the Covid-19 pandemic, nations representing only around 28% of global emissions
          registered new or updated “nationally determined contributions” (NDCs) on the UN’s official registry by the
          end of the year. Some big emitters did register their NDCs in time, including the UK and EU. But major
          absences included the US, India and China.
        </blockquote>
        <cite>
          <Links.EL
            link={{
              source:
                'https://www.carbonbrief.org/analysis-which-countries-met-the-uns-2020-deadline-to-raise-climate-ambition',
            }}
          >
            Carbon Brief: Which countries met the UN’s 2020 deadline to raise ‘climate ambition’?
          </Links.EL>
        </cite>
        <p>
          As a result,{' '}
          <Links.EL link={{ source: 'https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions' }}>
            global emissions continue to rise
          </Links.EL>
          .
        </p>

        <p>
          The agreement reached at Paris was conservative. Change should be gradual, and growth maintained. The
          strongest argument for advocating growth is to improve the lives of those who have least. The strongest
          defence of fossil fuels is that without the energy they provide growth cannot be sustained. Sceptics of the
          status quo point out that at least some of this growth is artificial, that it derives from a debt we owe to
          the planet and some day - perhaps soon - we will have to repay it.
        </p>

        <p>
          The transition away from fossil fuels is, by historical standards, happening fast. It just isn't happening
          fast enough.
        </p>

        <p>
          Beyond and since Paris other plans have been drawn up. Among the more radical is the{' '}
          <Links.EL link={{ source: 'https://www.congress.gov/116/bills/hres109/BILLS-116hres109ih.pdf' }}>
            Green New Deal
          </Links.EL>{' '}
          in the US (PDF),{' '}
          <Links.EL
            link={{
              source:
                'https://cat.org.uk/info-resources/zero-carbon-britain/research-reports/zero-carbon-britain-rising-to-the-climate-emergency/',
              label: 'Technology Zero Carbon Britain',
            }}
          >
            Technology Zero Carbon Britain
          </Links.EL>
          , and{' '}
          <Links.EL
            link={{
              source:
                'https://web.stanford.edu/group/efmh/jacobson/Articles/I/CountriesWWS.pdf">100% Clean and Renewable Wind, Water, and Sunlight All-Sector Energy Roadmaps for 139 Countries of the World</a></span>. The EU has put forward the <span><a href=',
            }}
          >
            European Green Deal
          </Links.EL>
          .
        </p>

        <p>
          The 13th of the UN's own 17 Sustainable Development Goals{' '}
          <Links.EL link={{ source: 'https://sdgs.un.org/goals' }}>SDGs</Links.EL>, Climate Action, targets climate
          change and its impacts.
        </p>

        <h2 id="energy">The wrong kind of energy</h2>

        <p>
          Photosynthesis is{' '}
          <Links.EL
            link={{
              source: 'https://en.wikipedia.org/wiki/Photosynthetic_efficiency#Efficiencies_of_various_biofuel_crops',
            }}
          >
            less efficient
          </Links.EL>{' '}
          than photovoltaic cells at capturing energy from the sun. But the plants that benefit from it are highly
          effective at creating environments suitable for animals.
        </p>

        <p>
          Fossil fuels accumulated behind the scenes, a consequence not of evolution but an accident of time and
          geography, silently capturing the carbon dioxide stored in dead plants and animals at a time when levels were
          far higher than they are today. These reserves were laid down over thousands of millenia many millions of
          years ago.
        </p>

        <p>
          By burning fossil fuels we have upset a natural equilibrium, releasing in decades their long accumulated
          power. Playing ingeniously, impishly, with this asymmetry of time, we have opened a warehouse of
          jack-in-the-boxes.
        </p>

        <h3>The problem of energy density</h3>

        <blockquote>
          You can start explaining some of the limits and possibilities of everyday life or historical progress by
          playing with energy densities: the more concentrated sources of energy give you many great advantages in terms
          of their extraction, portability, transportation and storage costs, and conversion options.
        </blockquote>
        <cite>
          <Links.EL
            link={{ source: 'http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf' }}
          >
            Vaclav Smil
          </Links.EL>
        </cite>

        <p>
          The energy densities of coal, oil and gas make them useful as fuels. Contemporary fuels, renewables, are those
          which are replenished by the sun: wind, solar, hydroelectric. They are attractive because they don't emit
          carbon, but they have two drawbacks - they are intermittent, and less energy dense.
        </p>

        <div className={styles.quote}>
          <strong>Energy density in MJ/kg:</strong>
          <ul className={styles.unorderedList}>
            <li>Wood - 16</li>
            <li>Coal - 24</li>
            <li>Crude oil - 44</li>
            <li>
              <Links.IL link={{ source: 'climate-crisis/facts#energy' }}>Energy densities</Links.IL>
            </li>
          </ul>
        </div>

        <h3>Had we but world enough and time</h3>

        <p>
          Renewables also have low{' '}
          <Links.EL link={{ source: 'https://energyeducation.ca/encyclopedia/Energy_vs_power' }}>power</Links.EL>{' '}
          densities meaning they require more space. This presents a dilemma when planning to transition to them. The
          obvious choice would be to reason that change takes time; the shift from wood to coal and the shift from coal
          to oil and gas were local, often ad hoc, and remain incomplete, many years since the changeover to
          alternatives began.
        </p>

        <Tables.PowerDensities></Tables.PowerDensities>

        <div className={styles.inset}>
          <div>
            <span>
              *{' '}
              <Links.EL
                link={{
                  source: 'http://vaclavsmil.com/wp-content/uploads/docs/smil-article-power-density-primer.pdf',
                }}
              >
                Power density primer Vaclav Smil
              </Links.EL>
            </span>
          </div>
          <div>
            +{' '}
            <Links.EL link={{ source: 'https://www.sciencedirect.com/science/article/pii/S0301421518305512' }}>
              The spatial extent of renewable and non-renewable power generation J. van Zalk, P. Behrens
            </Links.EL>
          </div>
        </div>

        <p>
          Higher values for renewables exist, but they are often in places - deserts, offshore - far from urban
          populations where energy demands are highest; this introduces the twin problems of transmission and storage.
          Locating energy close to demand is particularly hard for renewables due to competition for land (agriculture,
          amenity, housing), and nuclear (safety).
        </p>

        <p>
          Historical values for the power densities of renewables have proven to be on the low side (
          <Links.EL link={{ source: 'http://www.withouthotair.com/' }}>MacKay</Links.EL>). This is good news, but it
          presents a conundrum; when is the right time to invest in a particular technology? Invest too soon, and we
          will be committed to unnecessarily inefficient infrastructure, too late, or too slowly, and we will miss
          potential gains. If governments set deadlines, companies may meet emissions targets by investing in improving
          existing technology instead of better, less resource intensive, technology that will take longer to test and
          deploy.
        </p>

        <p>
          A 2021 paper suggests{' '}
          <Links.EL link={{ source: 'https://iopscience.iop.org/article/10.1088/1748-9326/abde07' }}>
            the cost of innovation has been overestimated
          </Links.EL>
          . The authors predict the transition away from fossil fuels will be{' '}
          <Links.EL
            link={{
              source:
                'https://www.carbonbrief.org/guest-post-why-the-low-carbon-transition-may-be-much-cheaper-than-models-predict',
            }}
          >
            cheaper than once thought
          </Links.EL>
          .
        </p>

        <p>
          But if governments adopt a position of{' '}
          <Links.EL link={{ source: 'https://www.ufz.de/index.php?en=46374' }}>technological neutrality</Links.EL>{' '}
          towards transformative solutions, the parameters for cost-effectiveness must be broad and long term.
        </p>

        <h3>Eternal summer shall fade</h3>

        <p>
          Business as usual is a vague term for, unless it is merely a proxy for cynical profiteering, it assumes
          stasis, whereas ideas, companies, plans, people, and markets are constantly in flux. What we are contemplating
          is novel, and extraordinary, arguably counter to our energy demands, because we wish to replace our existing
          sources with others that are, at least in the short term, less efficient. This problem is not intractable, but
          resistance to change comes not only from protectionism and self interest, but from practical considerations
          that encompass physics, technology, time, resources, knowledge and ability.
        </p>

        <p>
          We can expect change to be unpredictable, jagged and with effects that are unequally distributed. A counter
          argument can be made that unprecedented action is required, and that greater equity will help us to make the
          right decisions, for by accounting for everyone, on equal terms, rich and powerful countries will no longer be
          able to export their responsibility, or turn a blind eye to the effects of consumption which are realised
          elsewhere, and thereby come to accept solutions for living that are balanced and manageable over time.
        </p>

        <p>
          All other life on the planet has reason to see our species as a single, homogenous threat, and may regard our
          internecine problems as irrelevant when faced with their own unprecedented extinction. As a species we have
          done nothing for the planet, but it is possible that one day intelligent, disruptive humanity may prove its
          worth by, for example, preventing an asteroid from hitting the earth.
        </p>

        <h3>Mind the GDP</h3>

        <p>
          Energy demand is falling in rich countries. In the{' '}
          <Links.EL link={{ source: 'https://ourworldindata.org/energy/country/united-states?country=~USA' }}>
            US
          </Links.EL>
          , for example, energy usage is down from a peak in 1973 of 95.5 kWh per day to 79.9 in 2019, despite the{' '}
          <Links.EL
            link={{ source: 'https://blog.ucsusa.org/peter-oconnor/energy-efficiency-what-is-the-rebound-effect-946' }}
          >
            rebound effect
          </Links.EL>
          . It is conceivable that people will choose to consume less, and that societies will measure their progress on
          a broad set of values and principles rather than focusing on gross domestic product{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Gross_domestic_product' }}>GDP</Links.EL>. The
          Dasgupta report, commissioned by the UK treasury, sets out the following case,
        </p>
        <blockquote>
          The options [set out by this report] for change are geared towards three broad, interconnected transitions,
          requiring humanity to ensure that our demands on Nature do not exceed its supply, and that we increase
          Nature’s supply relative to its current level; change our measures of economic success to guide us on a more
          sustainable path; and transform our institutions and systems – in particular our finance and education systems
          – to enable these changes and sustain them for future generations.
        </blockquote>
        <cite>
          <Links.EL
            link={{
              label: 'The Economics of Biodiversity: The Dasgupta Review',
              source:
                'https://www.gov.uk/government/publications/final-report-the-economics-of-biodiversity-the-dasgupta-review',
            }}
          >
            The Economics of Biodiversity: The Dasgupta Review
          </Links.EL>
        </cite>

        <h3>Historical emissions</h3>

        <p>
          Rich countries are touchy on the subject of{' '}
          <Links.EL link={{ source: 'https://ourworldindata.org/contributed-most-global-co2' }}>
            historical emissions
          </Links.EL>
          . They may be factored in to emissions budgets, but countries that have recently industrialised claim, at the
          very least, the right to lift their people from want, and to enjoy the benefits of affordable energy.
        </p>

        <div>
          USA vs. Nigeria
          <div className={styles.quote}>
            Nigeria is predicted to be home to more than 1 billion people by 2100. The per capita CO2 emissions (2017)
            for Nigeria was{' '}
            <Links.EL
              link={{
                source:
                  'https://ourworldindata.org/co2/country/nigeria#per-capita-how-much-co2-does-the-average-person-emit',
              }}
            >
              .68 tonnes
            </Links.EL>
            . The figure for the US in the same year was{' '}
            <Links.EL
              link={{
                source:
                  'https://ourworldindata.org/co2/country/united-states?country=~USA#per-capita-how-much-co2-does-the-average-person-emit',
              }}
            >
              16.16 tonnes
            </Links.EL>
            ; that is a US citizen, on average, uses almost 24 times the resources of a Nigerian.
          </div>
        </div>

        <h3>Population</h3>

        <p>The population of rich, industrialised countries has increased slightly or fallen in recent decades.</p>

        <p>
          The <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Income_and_fertility' }}>correlation</Links.EL>{' '}
          between economic development and fertility is assumed to be either negative (fertility falls with
          development), or follows the J-Curve (inverse correlation followed by increased fertility but to a level below
          the{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Total_fertility_rate#Replacement_rates' }}>
            replacement rate
          </Links.EL>
          ).
        </p>

        <p>
          The majority of studies{' '}
          <Links.EL link={{ source: 'https://population.un.org/wpp/Graphs/DemographicProfiles/Line/900' }}>
            predict
          </Links.EL>{' '}
          the{' '}
          <Links.EL
            link={{
              source:
                'https://ourworldindata.org/world-population-growth#how-has-world-population-growth-changed-over-time',
            }}
          >
            global population
          </Links.EL>{' '}
          will continue to grow no matter what.
        </p>

        <p>There is no clear mechanism by which population growth can be slowed or reversed.</p>

        <p>
          If we aspire to equality in the distribution of goods, and to end practices that are damaging to the planet,
          people in rich countries (those of today and tomorrow) will need to live with less.
        </p>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          History has caught up with us. The problem with fossil fuels is not that burning them releases carbon, it is
          that we are dependent on them, and we have little time in which to overcome our addiction.
        </p>

        <div>
          In 2010 the IPCC published{' '}
          <Links.EL
            link={{ source: 'https://www.ipcc.ch/site/assets/uploads/2017/08/AR5_Uncertainty_Guidance_Note.pdf' }}
          >
            a guide to uncertainty
          </Links.EL>{' '}
          which offers advice on how to represent confidence in how data are collected and the likelihood of their being
          accurate. Describing the problem is hard, predicting what will happen next, harder still. There will be no
          unambiguous signals.
        </div>

        <p>
          The future is unlikely to be a clear path agreed upon by all, but a hotchpotch of competing ideas, ideals,
          protest, chicanery and ingenuity. The emergence of citizen's assemblies may play an important part, reflecting
          popular convictions that traditional, partisan politics are unable to represent. The French government
          legislated for a{' '}
          <Links.EL
            link={{
              source:
                'https://www.theguardian.com/business/2021/apr/12/france-ban-some-domestic-flights-train-available-macron-climate-convention-mps',
            }}
          >
            ban
          </Links.EL>{' '}
          on some internal flights, following a (watered down) recommendation proposed by the{' '}
          <Links.EL link={{ source: 'https://www.conventioncitoyennepourleclimat.fr/' }}>
            Convention Citoyenne pour le Climat
          </Links.EL>
          . The UK government's{' '}
          <Links.EL
            link={{
              source: 'https://www.gov.uk/government/publications/the-ten-point-plan-for-a-green-industrial-revolution',
            }}
          >
            10 point plan on climate change
          </Links.EL>{' '}
          echoes, in part, the findings of the{' '}
          <Links.EL link={{ source: 'https://www.climateassembly.uk/' }}>Climate Assembly UK</Links.EL>. The{' '}
          <Links.EL link={{ source: 'https://globalassembly.org/' }}>Global Assembly</Links.EL> has a commendably broad
          constituency but lacks an accountable body.
        </p>

        <p>
          Radical thought can lead to naive idealism or game-changing innovation. Which of the two is not always clear
          at the time.
        </p>

        <p>
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Pierre-Simon_Laplace' }}>
            Pierre-Simon Laplace
          </Links.EL>
          , an examiner of Napoleon when he attended the École Militaire, was on the panel selected in 1790, by another
          assembly, the{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/National_Constituent_Assembly_(France)' }}>
            Assemblée nationale constituante
          </Links.EL>
          , to establish a metric system. The new system of weights and measures which unified what until then had been
          a patchwork of regional and local measures, proved useful and durable. The{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/French_Republican_calendar' }}>
            metric calendar
          </Links.EL>{' '}
          which respected neither tradition nor planetary orbits, lasted just 12 years from 1793 to 1805, except for a
          19 day reprieve in 1871. It was beautiful but hopelessly impractical.
        </p>

        <p>
          The IPCC also sets dates, wholesome round numbers that resonate with purpose and authority. Are they a metric
          system for the ages, or a fairytale?
        </p>

        <p>We have drawn our lines in the sand and must hope the tide does not obliterate them.</p>

        <Top></Top>
      </section>

      <section>
        <h2 id="appendix">Appendix</h2>

        <h3>Controlling fire</h3>

        <p>
          The earliest supported findings of{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/Control_of_fire_by_early_humans' }}>
            controlled use of fire
          </Links.EL>{' '}
          are from Wonderwerk, South Africa, 1 million years ago, but <em>Homo erectus</em> may have done so{' '}
          <Links.EL link={{ source: 'https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0164' }}>
            much earlier
          </Links.EL>
          .{' '}
        </p>

        <p>
          Evidence of fire stimulation and preservation is found throughout our ancestors, and <em>Homo erectus</em>,
          from whom we evolved, had a brain 50% bigger than its predecessor, <em>Homo habilis</em>. These skills were
          likely critical to the evolution of our own species; we are poorly adapted to survive without the ability to
          control fire to keep warm, and to{' '}
          <Links.EL link={{ source: 'https://www.journals.uchicago.edu/doi/pdfplus/10.1086/692113' }}>cook</Links.EL>{' '}
          (PDF).
        </p>

        <p>
          More energy enabled us to do less work to stay alive, and in response large brains, best suited to profit from
          thinking time, evolved. So too, our dependence on energy.
        </p>

        <h3>The transition to coal</h3>

        <div>
          The transition from wood to coal is productive; more powerful tools and machinery can be introduced into
          existing setups relatively quickly. Coal was the dominant fuel until well into the twentieth century when new
          oil and gas reserves began to be exploited. Yet extraction today is higher in absolute terms than it has ever
          been.
          <div className={styles.quote}>
            <div>Coal accounts for ~27% of world energy consumption by source. </div>
            <div>Coal provided 43,849 terra-watt hours in 2019, compared to 16,140 terra-watt hours in 1965.</div>
            <div>
              <Links.EL link={{ source: 'https://ourworldindata.org/energy-mix' }}>
                Our World in Data | Energy Mix
              </Links.EL>
            </div>
          </div>
          Coal remains the primary source of energy in China (
          <Links.EL link={{ source: 'https://ourworldindata.org/energy/country/china?country=~CHN' }}>57.64%</Links.EL>
          ).
        </div>

        <h3>First emitter</h3>

        <div>
          <div className={styles.quote}>
            Britain was terribly well endowed with coal: when the Revolution started, the amount of carbon sitting in
            coal under Britain was roughly the same as the amount sitting in oil under Saudi Arabia.{' '}
            <div>
              <Links.EL link={{ source: 'https://www.withouthotair.com/c1/page_6.shtml' }}>
                Sustainable Energy - without the hot air David JC MacKay
              </Links.EL>
            </div>
          </div>
          <p>
            In 1965 the UK was dependent on coal for 59% of its energy needs; dwindling reserves, the discovery of North
            Sea Gas, and latterly support for renewable energy has seen a shift in its energy mix. By 2019 coal supplied
            just{' '}
            <Links.EL link={{ source: 'https://ourworldindata.org/energy/country/united-kingdom?country=~GBR' }}>
              3.35%
            </Links.EL>{' '}
            of energy, less than half that of wind power (7.29%).
          </p>
        </div>

        <h3>The transition to oil</h3>

        <p>
          The transition from coal to oil is localised; some countries are still undergoing the transition to coal, and
          some of them may limit their use of oil.
        </p>

        <p>
          Adoption of new sources of energy takes time, and dependents on availability and cost both of which vary
          widely.
        </p>

        <h3>The dash for gas</h3>

        <p>
          Between 1967–1977, appliances in 35 million homes in the UK{' '}
          <Links.EL link={{ source: 'https://www.sciencedirect.com/science/article/abs/pii/S2210422417301909' }}>
            were converted
          </Links.EL>{' '}
          to run on natural gas instead of manufactured gas. It was a success, though the cost was{' '}
          <Links.EL link={{ source: 'https://www.theyworkforyou.com/debates/?id=1970-02-23a.814.7' }}>
            higher than expected
          </Links.EL>
          . Researchers at Keele University are now{' '}
          <Links.EL link={{ source: 'https://hydeploy.co.uk/' }}>experimenting</Links.EL> with introducing hydrogen to
          the natural gas supply; tests currently introduce 20% hydrogen by volume (7% by energy).
        </p>

        <h3>Fracking</h3>

        <p>
          The expansion of hydraulic fracking in the US has changed the country's{' '}
          <Links.EL link={{ source: 'https://ourworldindata.org/energy/country/united-states?country=~USA' }}>
            energy mix
          </Links.EL>
          . In 2008 coal and gas each accounted for around 24%; by 2019 coal was down to 11%, gas up to 32%.
        </p>

        <h3>Powering down, the transition to renewables</h3>

        <div>
          As our energy demands have increased, so have our emissions, but the fuels we favour emit less carbon when
          burnt. In this respect, wood is less innocent than coal, and natural gas and oil an improvement on coal. This
          has led to the disingenuous claim that gas is a 'clean' fossil fuel.
          <div>
            <Links.IL link={{ source: 'climate-crisis/facts#fuel_emissions' }}>Fuel emissions</Links.IL>
          </div>
        </div>

        <p>
          Renewables have far lower emissions even accounting for construction and extraction costs. Hydrogen is for now
          the anomaly for though it has zero emissions during combustion its production covers a spectrum of emissions
          rates, and{' '}
          <Links.EL
            link={{
              source:
                'https://www.petrofac.com/en-gb/media/our-stories/the-difference-between-green-hydrogen-and-blue-hydrogen/',
            }}
          >
            colours
          </Links.EL>
          .
        </p>

        <h3>Germany's Energiewende</h3>

        <p>
          Germany has set out on an{' '}
          <Links.EL
            link={{
              source:
                'https://www.mckinsey.com/industries/electric-power-and-natural-gas/our-insights/germanys-energy-transition-at-a-crossroads',
            }}
          >
            energy transition
          </Links.EL>
          , away from fossil fuels, and nuclear, and towards renewables. Despite political will and enormous investment,
          this process has not been straightforward.
        </p>

        <div>
          A comparison with the US reveals how tricky shifts are. Since 2000:
          <div className={styles.quote}>
            <div>The US has reduced its dependence on fossil fuels in primary energy consumption from 84 to 78%.</div>
            <div>
              Germany has reduced its dependence on fossil fuels in primary energy consumption from 85.7 to 80%.
            </div>
            <div>
              <Links.EL link={{ source: 'http://vaclavsmil.com/wp-content/uploads/2021/01/71.ENERGIEWENDE.pdf' }}>
                Vaclav Smil | Energiewende, 20 years later
              </Links.EL>
            </div>
          </div>
          Germany may yet benefit from its strategy; whilst the{' '}
          <Links.EL link={{ source: 'https://ourworldindata.org/energy/country/united-states?country=~USA' }}>
            US
          </Links.EL>{' '}
          has reduced emissions in large part by replacing coal with natural gas,{' '}
          <Links.EL
            link={{
              label: 'Our World in Data Germany: Energy Country Profile',
              source: 'https://ourworldindata.org/energy/country/germany?country=~DEU',
            }}
          >
            Germany has reduced its emissions
          </Links.EL>{' '}
          by phasing out coal, increasing its dependency on gas, and adding more solar and wind to the energy mix.
        </div>

        <h3>Electricity, not energy</h3>

        <p>
          To date the majority of emissions reductions have been in electricity but only{' '}
          <Links.EL link={{ source: 'https://en.wikipedia.org/wiki/World_energy_consumption' }}>20 percent</Links.EL> of
          the world's energy use comes from electricity. In countries where cuts to emissions have been possible, there
          has been little change to the energy mix in transport and industry where high density, high power, fuels are
          critical.
        </p>

        <Top></Top>
      </section>
      <Links.RelatedLinks
        links={[
          { value: 'climate-crisis/carbon-element-of-life', text: 'Carbon - element of life' },
          { value: 'climate-crisis/facts', text: 'Facts' },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Change
