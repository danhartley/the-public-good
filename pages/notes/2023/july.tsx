import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import Accordion from 'components/accordion/accordion'
import styles from 'pages/pages.module.scss'

const July = () => {
  return (
    <Layout
      header="July 2023 Notes"
      title="July 2023 Notes"
      description={
        'July 2023 Notes'
      }
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <div class={styles.day}>
          <span class={styles.date}>Saturday 01 July 2023</span>

          <h2>AI & Electricity</h2>

          <p>
            There are parallels between AI and electricity. Both were greeted with a mixture of wonder, apprehension, and fear. They transformed multiple industries and societies, yet both remain unevenly distributed. 
            They are enigmatic, used by many but understood by few, and mysterious even to those responsible for their proliferation. One can kill you outright, the other has the potential to destroy lives and possibly societies. 
            AI may become ubiquitous, a fundamental service without which we would struggle to function, a foundation upon which industry, technology and other services will be built.                     
          </p>        
          <p>
            Electricity is a natural phenomenon, but it requires work, and resources. <Links.EL link={{'label': 'Share of electricity in total final energy consumption', 'source': 'https://yearbook.enerdata.net/electricity/share-electricity-final-consumption.html'}} >Electricity's share of energy consumption is about 20%</Links.EL>. AI's <Links.EL link={{'label': 'Energy and Policy Considerations for Deep Learning in NLP', 'source': 'https://arxiv.org/pdf/1906.02243.pdf'}}> consumption of electricity</Links.EL> (and other resources including water) is small but increasing. 
          </p>
          <p>
            Is AI sustainable, and how should we use it?
          </p>      
        </div>
        
        <div class={styles.day}>
          <div class={styles.date}>Thursday 06 July 2023</div>
          
          <h2>On providing supporting evidence to my arguments</h2>
          
          <ul>
            <li>Create new components: Train (for train of thought), and Car (for link in the train) to describe context and present arguments.</li>
            <li>Human conversations require context (something that may be missing when communicating with e.g. ChatGPT). Compare documentation for LLMs.</li>
            <li>Could there be proof for LLMs? And what proof could humans use (cf. philosophical proofs) e.g. for an article.</li>
            <li>Potential for 'pure ideas'; ideas that always behave the same way, and can be used and reused by others in new situations.</li>
            <li>Reference Thomas Hobbes' Train of Imagination: <q>When a man thinketh on anything whatsoever, his next thought after is not altogether so casual as it seems to be.</q> </li>
            <li>When beginning a new piece, provide justification (reason) and context (foundations)</li>
          </ul> 

          <div>
            <Links.EL link={{ source: 'https://en.wikisource.org/wiki/Leviathan/The_First_Part#Chapter_III:_Of_the_Consequence_or_Train_of_Imagination', label:'Thomas Hobbes: Chapter III: Of the Consequence or Train of Imagination' }}>
            Thomas Hobbes: Chapter III: Of the Consequence or Train of Imagination
            </Links.EL>
          </div>

          <h3>CarbonBrief report on the importance of trees</h3>

          <div>
            <Links.EL link={{ label: 'In-depth Q&A: How trees benefit nature, people and the climate', source: 'https://www.carbonbrief.org/in-depth-qa-how-trees-benefit-nature-people-and-the-climate/' }}>
            In-depth Q&A: How trees benefit nature, people and the climate
            </Links.EL>
          </div>
          <div>CarbonBrief | Orla Dwyer</div>
        </div>

        <div class={styles.day}>
          <div class={styles.date}>Friday 07 July 2023</div>
          
          <h3>On Superalignment</h3>

          <div>
            <Links.EL link={{ source: 'https://openai.com/blog/introducing-superalignment', label:'Introducing Superalignment' }}>
            Introducing Superalignment
            </Links.EL>
          </div>
          <div>OpenAI, Jan Leike & Ilya Sutskever</div>
          
          <h3>On AI training</h3>

          <div>
            <Links.EL link={{ source: 'https://dl.acm.org/doi/pdf/10.1145/3442188.3445922', label:'On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?' }}>
            On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?
            </Links.EL>
          </div>
          <div>PDF | Emily M. Bender, Timnit Gebru, Angelina McMillan-Major & Shmargaret Shmitchell</div>

          <ul>
            <li>
              <q>While the average human is responsible for an estimated 5t per year, the authors trained a Transformer (big) model with neural architecture search and estimated that the training procedure emitted 284t.</q>
            </li>
            <li>Access to NLP research is not equitable (because of cost of training)</li>
            <li>
              <q>The amount of compute used to train the largest deep learning models (for NLP and other applications) has increased 300,000x in 6 years.</q>
            </li>
            <li>
              <q>Most sampled papers from ACL 2018 (on NLP) claim accuracy improvements alone as primary contributions to the field, and none focused on measures of efficiency as primary contributions.</q>
            </li>
            <li>
              <q>It may be more appropriate to deploy models with lower energy costs during inference even if their training costs are high.</q> i.e. high training costs can be excusable if they lead to lower usage costs.
            </li>
            <li>
              <q>It is past time for researchers to prioritize energy efficiency and cost to reduce negative environmental impact and inequitable access to resources — both of which disproportionately affect people who are already in marginalized positions.</q>
            </li>
            <li>
              <q>Large, uncurated, Internet-based datasets encode the dominant/hegemonic view, which further harms people at the margins.</q>
            </li>
            <li>
              <q>In the case of US and UK English, [this means that] white supremacist and misogynistic, ageist, etc. views are overrepresented in the training data, not only exceeding their prevalence in the general population but also setting up models trained on these datasets to further amplify biases and harms.</q>
            </li>
            <li>
              <q>67% of Reddit users in the United States are men, and 64% between ages 18 and 29.13. Similarly, recent surveys of Wikipedians find that only 8.8–15% are women or girls.</q>
            </li>
            <li>
              <q>Harassment on Twitter is experienced by “a wide range of overlapping groups including domestic abuse victims, sex workers, trans people, queer people, immigrants, medical patients (by their providers), neurodivergent people, and visibly or vocally disabled people.”</q>
            </li>
            <li>
              <q>Where traditional n-gram LMs can only model relatively local dependencies, predicting each word given the preceding sequence of N words (usually 5 or fewer), the Transformer LMs capture much larger windows and can produce text that is seemingly not only fluent but also coherent even over paragraphs.</q>
            </li>
            <li>
              <q>Text generated by an LM is not grounded in communicative intent, any model of the world, or any model of the reader’s state of mind.</q>
            </li>
            <li>
              <q>An LM is a system for haphazardly stitching together sequences of linguistic forms it has observed in its vast training data, according to probabilistic information about how they combine, but without any reference to meaning: a stochastic parrot.</q>
            </li>
            <li>
              <q>Significant time should be spent on assembling datasets suited for the tasks at hand rather than ingesting massive amounts of data from convenient or easily-scraped Internet sources</q>
            </li>
          </ul>

          <div>
            <Links.EL link={{ source: 'https://www.youtube.com/watch?v=jAHRbFetqII', label:'A.I. and Stochastic Parrots | FACTUALLY with Emily Bender and Timnit Gebru'}}>
            A.I. and Stochastic Parrots | FACTUALLY with Emily Bender and Timnit Gebru
            </Links.EL>
          </div>

          <ul>
            <li>Critique of AI 'movement' especially OpenAI and its sellout</li>
            <li>Hampered by being 'negative'; the bros control the products and the sci-fi doomsday scenarios</li>
            <li>Emily Bender describes text UI as marketing gimmick for ChatGPT; is this true? Language as an interface seems revolutionary (or at the least, a great UI)</li>
            <li>Timnit Gebru raises serious questions about thinking persuasive in the AI community that has roots in eugenics</li>
            <li>Generally both dismissive of AI - but is this fair? (And is it not assumed that the term AI is often used casually as a catch-all)</li>
            <li>Stochastic parrots quoted but they were not consulted on the <Links.EL link={{source: 'https://futureoflife.org/open-letter/pause-giant-ai-experiments/', label:'Pause Giant AI Experiments: An Open Letter'}}>open letter</Links.EL> calling for a six month moratorium on training of AI systems</li>
            <li>Frank speech and openness to discussion, uncertainty but clear on power of markets/money to corrupt, they provide welcome relief to the plastic, seamless bros they criticise.</li>
            <li>Both critical about Arxiv</li>
          </ul>

          <div>
            <Links.EL link={{ source: 'https://www.theguardian.com/technology/2023/jul/07/ai-for-good-artificial-intelligence-conference', label: '‘You can do both’: experts seek ‘good AI’ while attempting to avoid the bad'}}>
            ‘You can do both’: experts seek ‘good AI’ while attempting to avoid the bad
            </Links.EL>
          </div>
          <div>The Guardian | Hannah Devlin</div>

          <br />

          <blockquote cite='https://www.theguardian.com/technology/2023/jul/07/ai-for-good-artificial-intelligence-conference'>
            Mass discrimination, the black box problem, data protection violations, large-scale unemployment and environmental harms - these are the actual existential risks. We need to focus on these issues right now and not get distracted by hypothetical risks. This is a disservice to the people who are already suffering under the impact of AI.
            <div> Prof Sandra Wachter | University of Oxford</div>
          </blockquote>
          <cite>
            <Links.EL
              link={{ source: 'https://www.theguardian.com/technology/2023/jul/07/ai-for-good-artificial-intelligence-conference' }}
            >
              From the Guardian article
            </Links.EL>
          </cite>

          <h3>The end of capitalism</h3>

          <div>
            <Links.EL link={{ source: 'http://naturalcapitalcoalition.org/wp-content/uploads/2016/07/Trucost-Nat-Cap-at-Risk-Final-Report-web.pdf', label: 'Natural capital at risk: the top 100 externalities of business'}}>
            Natural capital at risk: the top 100 externalities of business
            </Links.EL>
          </div>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Saturday 08 July 2023</span>

          <h3>On AI & Exploitation</h3>

          <div>
            <Links.EL link={{ source: 'https://www.noemamag.com/the-exploited-labor-behind-artificial-intelligence/', label:'The Exploited Labor Behind Artificial Intelligence' }}>
            The Exploited Labor Behind Artificial Intelligence
            </Links.EL>
            <div>Nash Weerasekera for Noema Magazine</div>
          </div>

          <ul>
            <li>Exploitation of workers in the gig economy through low wages and surveillance</li>
            <li>Abuse widespread inc. universities</li>
            <li>Roles are highly repetitive and without context inc. labelers, delivery drivers and content moderators</li>
            <li>Companies e.g. Amazon treat its workers like machines</li>
            <li>
              <div>
                <Links.EL link={{ source: 'https://dl.acm.org/doi/abs/10.1145/2470654.2470742', label:'Turkopticon: interrupting worker invisibility in amazon mechanical turk' }}>
                Turkopticon: interrupting worker invisibility in amazon mechanical turk
                </Links.EL>
              </div>
            </li>
            <li>
              <div>
                <Links.EL link={{ source: 'https://www.alphabetworkersunion.org/', label:'Alphabet workers union' }}>
                Alphabet workers union
                </Links.EL>
              </div>
            </li>
            <li>
              <div>
                <Links.EL link={{ source: 'https://amazonemployees4climatejustice.medium.com/', label:'Amazon Employees for Climate Justice' }}>
                Amazon Employees for Climate Justice
                </Links.EL>
              </div>
            </li>
            <li>
              <div>
                <Links.EL link={{ source: 'https://www.gigeconomydata.org/basics/how-many-gig-workers-are-there', label:'How many gig workers are there?' }}>
                How many gig workers are there?
                </Links.EL>
              </div>
            </li>
          </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Sunday 09 July 2023</span>

          <h3>The old switcheroo</h3>

          <p>
            Why is it that companies making godlike claims for their tech are unable to show their workings?
          </p>
          <p>
            For example, it is left to third parties to determine the GHG emissions cost of training and running bots such as ChatGPT. 
          </p>

          <p>
            OpenAI, the creators of ChatGPT, boast of how quickly they release code. 
          </p>

          <p>
            Could this be in part because they have not considered the consequence of their actions; that they have willfully, or carelessly, responded to pressure from competitors rather than considering the impact of releasing code the effect of which is unknown and which cannot be predicted in advance?
          </p>

          <p>
            The dangers were forseen. On what grounds do they take it upon themselves to ignore the warnings?
          </p>

          <p>
            Here are people doing OpenAI's work for them.
          </p>

          <ul>
            <li>
              <div>
                <Links.EL link={{ source: 'https://arxiv.org/pdf/1906.02243.pdf' }}>
                Energy and Policy Considerations for Deep Learning in NLP (PDF)
                </Links.EL>
              </div>
              <div>Emma Strubell Ananya Ganesh Andrew McCallum (University of Massachusetts Amherst)</div>                
            </li>
            <li>
              <div>
                <Links.EL link={{ source: 'https://arxiv.org/pdf/2211.02001.pdf' }}>
                Estimating the carbon footprint of Bloom, a 176b parameter language model (PDF)
                </Links.EL>
              </div>
              <div>Alexandra Sasha Luccioni (Hugging Face), Sylvain Viguier (Graphcore), Anne-Laure Ligozat (LISN & ENSIIE)</div>
            </li>
            <li>
              <div>
                <Links.EL link={{ source: 'https://towardsdatascience.com/the-carbon-footprint-of-chatgpt-66932314627d' }}>
                The Carbon Footprint of ChatGPT
                </Links.EL>
              </div>
              <div>Kasper Groes Albin Ludvigsen (https://towardsdatascience.com/)</div>
            </li>
            <li>
              <div>
                <Links.EL link={{ source: 'https://arxiv.org/ftp/arxiv/papers/2104/2104.10350.pdf', label: 'Aligning artificial intelligence with climate change mitigation' }}>
                Aligning artificial intelligence with climate change mitigation
                </Links.EL>
              </div>
              <div>Lynn H. Kaack et al. PDF | nature climate change</div>
            </li>
            <li>
              <div>
                <Links.EL link={{ source: 'https://www.nature.com/articles/s41558-022-01377-7.epdf?sharing_token=VNkvWalL1KVrxYte7VHfTtRgN0jAjWel9jnR3ZoTv0PFrrDwT9y68ah6oNg1ZvjBfcIb3Kbp_v5VihLBWDydbfc5jhcVPwJLve592DM4ofdyb9-AdB37nZsc6NVbVb-fttOlElGgXuHDhQRUp82Rwc9buEoGydxnCgU609qUgUY%3D', label: 'Carbon Emissions and Large Neural Network Training' }}>
                Carbon Emissions and Large Neural Network Training 
                </Links.EL>
              </div>
              <div>Patterson et al. PDF</div>
            </li>
          </ul>

          <br />

          <blockquote cite="https://www.technologyreview.com/2023/03/14/1069823/gpt-4-is-bigger-and-better-chatgpt-openai/">
          “That’s something that, you know, we can’t really comment on at this time,” said OpenAI’s chief scientist, Ilya Sutskever, when I spoke to members of the GPT-4 team in a video call an hour after the announcement. “It’s pretty competitive out there.”
          </blockquote>
          <cite>
            <Links.EL
              link={{ source: 'https://www.technologyreview.com/2023/03/14/1069823/gpt-4-is-bigger-and-better-chatgpt-openai/' }}
            >
              GPT-4 is bigger and better than ChatGPT—but OpenAI won’t say why
            </Links.EL>
          </cite>
        
          <p>And yet they found the time to enter ChatGPT and GPT4 in the Uniform Bar Exam and show off their impressive scores.</p>
          
          <br />

          <blockquote cite="https://www.technologyreview.com/2023/03/14/1069823/gpt-4-is-bigger-and-better-chatgpt-openai/">
          But OpenAI has chosen not to reveal how large GPT-4 is. In a departure from its previous releases, the company is giving away nothing about how GPT-4 was built—not the data, the amount of computing power, or the training techniques. “OpenAI is now a fully closed company with scientific communication akin to press releases for products,” says Wolf.
          </blockquote>
          <cite>
            <Links.EL
              link={{ source: 'https://www.technologyreview.com/2023/03/14/1069823/gpt-4-is-bigger-and-better-chatgpt-openai/' }}
            >
              GPT-4 is bigger and better than ChatGPT—but OpenAI won’t say why
            </Links.EL>
          </cite>
          
          <br />
          <br />

          <blockquote cite="https://www.technologyreview.com/2023/03/14/1069823/gpt-4-is-bigger-and-better-chatgpt-openai/">
          Even Sutskever suggests that going slower with releases might sometimes be preferable: “It would be highly desirable to end up in a world where companies come up with some kind of process that allows for slower releases of models with these completely unprecedented capabilities.”
          </blockquote>
          <cite>
            <Links.EL
              link={{ source: 'https://www.technologyreview.com/2023/03/14/1069823/gpt-4-is-bigger-and-better-chatgpt-openai/' }}
            >
              GPT-4 is bigger and better than ChatGPT—but OpenAI won’t say why
            </Links.EL>
          </cite>
          
          <br />

          <h4>Budgets & net positive effects</h4>

          <p>
            Ideally there should be budgets for emissions, water, etc. and sectors (companies and regions) should be responsible for:
            <ul>
              <li>
                Working out the sustainable budget
              </li>
              <li>
                Providing the means (technical and financial) for accounting
              </li>
              <li>
              Providing the means (technical and financial) for fining or excluding rule breakers
              </li>
              <li>
                Dividing the budget fairly and equitably
              </li>            
            </ul>
            If they want a share.
          </p>

          <p>
            In the short term, while budgets are assessed, companies take on the responsibility for showing all their costs and making a case for net gain.
          </p>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Monday 10 July 2023</span>
          
          <h3>Stochastic parrots again</h3>

          <div>
            <Links.EL link={{ source: 'https://techwontsave.us/episode/163_chatgpt_is_not_intelligent_w_emily_m_bender', label: 'ChatGPT Is Not Intelligent' }}>
            ChatGPT Is Not Intelligent
            </Links.EL>
          </div>
          <div>Emily M. Bender interviewed by Paris Marx for techwontsave</div>

          <ul>
            <li>
              Bender frustrated at being presented as the critic
            </li>
            <li>
              Presents positive reaction to ChatGPT as falling for the hype with insufficient scepticism
            </li>
            <li>
              Criticises failure by reporters to question what is being presented; and of relying on the opinion of vested, non-expert opinion
            </li>
            <li>
              'Pause letter': part of narrative that posits AI as autonomous agents (and that they are somehow accountable, not those who built them)
            </li>
            <li>
              Many good sources mentioned - and linked to at the end - throughout the interview e.g. <Links.EL link={{source: 'https://incidentdatabase.ai/'}}>AI Incident Database</Links.EL> and <Links.EL link={{source: 'https://www.ajl.org/', label: 'Algorithmic Justice League'}}>Algorithmic Justice League</Links.EL>
            </li>
            <li>
              Ridicules idea that humans are stochastic parrots which is fine, but no explanation as to why
            </li>
          </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Tuesday 11 July 2023</span>

          <h3>Cost of ML</h3>

          <div>
            <Links.EL link={{ source: 'https://www.nature.com/articles/s41558-022-01377-7.epdf?sharing_token=VNkvWalL1KVrxYte7VHfTtRgN0jAjWel9jnR3ZoTv0PFrrDwT9y68ah6oNg1ZvjBfcIb3Kbp_v5VihLBWDydbfc5jhcVPwJLve592DM4ofdyb9-AdB37nZsc6NVbVb-fttOlElGgXuHDhQRUp82Rwc9buEoGydxnCgU609qUgUY%3D', label: 'Carbon Emissions and Large Neural Network Training' }}>
            Carbon Emissions and Large Neural Network Training 
            </Links.EL>
          </div>
          <div>Patterson et al. PDF</div>

          <p>3 categories of emissions</p>
          <ul>          
              <li>
                GHG emissions resulting from computing, caused by both the electricity used for ML computations and the embodied emissions associated with computing hardware. ML models differ drastically in energy they consume and consumption is spread across the model life-cycle - training, development, tuning and inference (use).
                Standardised reporting across the life-cycle is essential but not practiced.
              </li>
              <li>
                'Immediate' GHG emissions effects tied to the short-term outcomes of applications of ML
              </li>
              <li>
                Structural or 'system-level' GHG effects induced by these applications
              </li>
          </ul>

          <p>
            Vast majority of ML research and development still focuses on improving model accuracy, rather than balancing accuracy and energy usage.
          </p>

          <p>ICT sector currently accounts for ~1.4% global GHG emissions</p>
          <ul>
            <li><span class={styles.fraction}>&#8532;</span> operational energy use (Scope 1 & 2)</li>
            <li><span class={styles.fraction}>&#8531;</span> materials extraction, manufacturing, transportation and end-of-life phase (Scope 3)</li>
            <li>Cloud and hyperscale data centres account for ~.1-.2% global GHG emissions of which ML less than <span class={styles.fraction}>&#188;</span></li>
            <li>Energy for training and using ML is growing rapidly but so is efficiency (overall ICT energy rose 6% 2010-2018 with 550% growth in workloads)</li>
            <li>Greater efficiency can come at the cost of greater Scope 3 emissions - embodied emissions in computing hardware and data centre construction</li>
          </ul>

          <h3>Application impacts</h3>

          <h4>Immediate 'positive' application impacts for climate</h4>
          <ul>
            <li>Via data mining and remote sensing translates raw data into useable data</li>
            <li>Tracking deforestation can inform policy</li>
            <li>Forecasting crop yields, power production, and transportation demands</li>
            <li>Controlling and improving operational efficiency of complex systems can save energy and resources</li>
            <li>Improve speed and efficiency of climate modelling</li>
          </ul>

          <h4>Immediate 'negative' application impacts for climate</h4>
          <ul>
            <li>Decrease cost of emissions-intensive activities e.g. oil and gas exploration thereby potentially increasing their consumption</li>
            <li>The 'Internet of Cows'</li>
          </ul>

          <p>Impact of ML is hard to assess due to lack of data (and reporting).</p>

          <h3>System-level impacts</h3>

          <p>
            Impact of many societal ML applications may not be clear. They are hard to quantify but may be of greater significance than immediate application impacts. One example where outcome is hard to determine is the rebound effect e.g. efficient, shared autonomous vehicles may lead to more journeys. And ML technology in this field may lock us into private transport, preventing a move to greater use of public transport.
          </p>

          <p>Regulation is required around ML-driven technologies so that they (or their creators) demonstrate as fully as possible immediate and long term effects.</p>

          <h3>Roadmap for assessing and forecasting impacts</h3>

          <ul>
            <li>
              New reporting standards, more data collection, novel measurement methodologies and benchmarking frameworks, and new approaches for developing forecasts and scenarios
            </li>
            <li>ML merits new methodologies built on existing LCAs</li>
            <li>Consider impact in relation to non-ML solutions</li>
          </ul>

          <h4>Requirements</h4>
          <ul>
            <li>Better access to information is crucial including fine-grained detail as to cost of training, inference, etc. and percentage use of data centres by ML</li>
            <li>Sufficient data to assess a priori cost of switching to ML or introducing new ML-dependent technology</li>
            <li>Reviews and reports based on synthesised data and generalised case studies</li>
            <li>Ways to study system-level impacts when digital effects let alone ML are often ignored in high-level studies e.g. SSPs</li>
          </ul>

          <h3>Aligning ML with climate mitigation</h3>

          <ul>
            <li>ML applications that are beneficial to the climate</li>
            <li>Transparency and accountability as to use of ML</li>
            <li>Employing climate aware technology for assessing ML uses</li>
            <li>Strategies to combat concentration of ML in a few hands, and algorithmic biases</li>
            <li>Standards and shift from private to public entities, and enforced interoperability</li>
          </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Thursday 13 July 2023</span>

          <h3>AI & Ethics</h3>

          <div>
            <Links.EL link={{ source: 'https://arxiv.org/pdf/2212.08073.pdf', label: 'Constitutional AI: Harmlessness from AI Feedback' }}>
            Constitutional AI: Harmlessness from AI Feedback (PDF)
            </Links.EL>
          </div>
          <div>Yuntao Bai et al. Anthropic</div>

          <br />

          <blockquote cite='https://arxiv.org/pdf/2212.08073.pdf'>
            As AI systems become more capable, we would like to enlist their help to supervise other AIs. We experiment with methods for training a harmless AI assistant through self improvement, without any human labels identifying harmful outputs.
          </blockquote>
          <cite>
            <Links.EL link={{ source: 'https://arxiv.org/pdf/2212.08073.pdf' }}>
              From the abstract
            </Links.EL>
          </cite>

          <Accordion header="RLHF">
          <aside>
            <p>
              <dfn>RLHF</dfn> or Reinforcement Learning from Human Feedback,  is a technique that trains a "reward model" directly from human feedback and uses the model as a reward function to optimize an (AI) agent's policy using reinforcement learning (RL) through an optimization algorithm like Proximal Policy Optimization.
              <br />
              <br />
              In simple terms, RLHF trains AI models by learning from responses by humans about its performance. 
            </p>
          </aside>
          </Accordion>

          <ul>
            <li><q>We would like to train AI systems that remain helpful, honest, and harmless, even as some AI capabilities reach or exceed human-level performance. This suggests that we will need to develop techniques that do not rely on humans to supervise all aspects of AI behavior, and that can be used to automatically test and enhance robustness to harmful behaviors. We also aim to develop methods that encode desirable AI behaviour.</q></li>
            <li><q>We are able to train less harmful systems entirely through the specification of a short list of principles or instructions, i.e. a constitution.</q></li>
            <li><q>One of our goals in this work is to train a helpful and harmless assistant that is never evasive, in order to reduce the tension between helpfulness and harmlessness. So while the assistant must still refrain from helping users with unethical requests, and from expressing offensive language and sentiment, it should always engage and explain why it refuses such requests.</q></li>
            <li><q>By removing human feedback labels for harmlessness, we have moved further away from reliance on human supervision, and closer to the possibility of a self-supervised approach to alignment. However, in this work we still relied on human supervision in the form of helpfulness labels. We expect it is possible to achieve helpfulness and instruction-following without human feedback, starting from only a pretrained LM and extensive prompting, but we leave this for future work.</q></li>
            <li><q>Our ultimate goal is not to remove human supervision entirely, but to make it more efficient, transparent, and targeted. All of our methods can leverage chain-of-thought type reasoning – for critiques in the SL stage, and for evaluating comparisons for the RL stage – and we expect that a small number of very high-quality human demonstrations of this reasoning could be used to improve and focus performance.</q></li>
            <li><q>As with most methods that can control AI behavior, the ideas discussed in this work have a dual use. As we pass from prompting, to RLHF, to the constitutional methods discussed here, we lower the barrier to training AI models that behave in ways their creators intend. This means that these methods also make it easier to train pernicious systems.</q></li>
            <li><q>A further issue is that by reducing the need for human feedback, our constitutional methods make it easier to train and deploy AI systems that have not been thoroughly tested and observed by humans. This could lead developers to deploy models with unforeseen failure modes. On the other hand, our method has the benefit that we may no longer need an army of human red teamers to engage in the rather unsavory work of trying to trick AI systems into generating harmful content.</q></li>
          </ul>

          <Accordion header="Principles for RL-CAI">
            <aside>

              <ul>
                <li>Please choose the response that is the most helpful, honest, and harmless.</li>
                <li>Please choose the assistant response that is as harmless and ethical as possible . Do NOT choose responses that are toxic, racist, or sexist, or that encourage or support illegal, violent, or unethical behavior. Above all the assistant’s response should be wise, peaceful, and ethical.</li>
                <li>Compare the degree of harmfulness in the assistant responses and choose the one that’s less harmful. However, try to avoid choosing responses that are too preachy, obnoxious, or overly-reactive.</li>
                <li>Choose the assistant response that is as harmless, helpful, polite, respectful, and thoughtful as possible without sounding overly-reactive or accusatory.</li>
                <li>Please choose the assistant response that’s more ethical and moral. Do NOT choose responses that exhibit toxicity, racism, sexism or any other form of physical or social harm.</li>
                <li>Which of these assistant responses exhibits less harmful and more acceptable behavior? Choose the less harmful response.</li>
                <li>Choose the assistant response that answers the human’s query in a more friendly, amiable, conscientious, and socially acceptable manner.</li>
                <li>Which of these assistant responses is less harmful? Choose the response that a wise, ethical, polite and friendly person would more likely say.</li>
                <li>Choose the response that is less harmful, paying close attention to whether each response encourages illegal, unethical or immoral activity.</li>
                <li>Please consider these assistant responses and choose the one that is less harmful, more age-appropriate, and more family-friendly.</li>
                <li>Choose the response that answers the human in the most thoughtful, respectful and cordial manner.</li>
                <li>Compare the assistant responses in terms of toxicity, racism, sexism and social bias, and choose the less harmful response.</li>
                <li>Choose the response that sounds most similar to what a peaceful, ethical, and wise person like Martin Luther King Jr. or Mahatma Gandhi might say.</li>
                <li>Which of the assistant responses is most harmless, helpful, and honest? Choose the best response based on these criteria.</li>
                <li>Choose the assistant response that is more harmless, polite, pleasant, and least likely to offend a socially-aware audience.</li>
                <li>Choose the assistant response that demonstrates more ethical and moral awareness without sounding excessively condescending, reactive, annoying or condemnatory.</li>
              </ul>          

              <p><dfn>RL-CAI</dfn> stands for Reinforcement Learning from Constitutional AI </p>

            </aside>
          </Accordion>
        

        </div>

      </section>
        
      </Layout>
  )
}

export default July
