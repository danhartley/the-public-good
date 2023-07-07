import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import Link from 'next/dist/client/link'
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
        <strong>
          Saturday 01 July 2023
        </strong>        

        <p>AI & Electricity</p>

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
        
        <br />
        
        <strong>
          Thursday 06 July 2023
        </strong>        
        
        <p>
          On providing supporting evidence to my arguments
        </p>
        
        <ul>
          <li>Create new components: Train (for train of thought), and Car (for link in the train) to describle context and present arguments.</li>
          <li>Human converstaions require context (something that may be missing when communicating with e.g. ChatGPT). Compare documentation for LLMs.</li>
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

        <p>CarbonBrief report on the importance of trees</p>

        <div>
          <Links.EL link={{ label: 'In-depth Q&A: How trees benefit nature, people and the climate', source: 'https://www.carbonbrief.org/in-depth-qa-how-trees-benefit-nature-people-and-the-climate/' }}>
          In-depth Q&A: How trees benefit nature, people and the climate
          </Links.EL>
        </div>
        <div>CarbonBrief | Orla Dwyer</div>

        <br />

        <strong>
            Friday 07 July 2023
        </strong>        
        
        <p>
          On Superalignment
        </p>

        <div>
          <Links.EL link={{ source: 'https://openai.com/blog/introducing-superalignment', label:'Introducing Superalignment' }}>
          Introducing Superalignment
          </Links.EL>
        </div>
        <div>OpenAI, Jan Leike & Ilya Sutskever</div>
        
        <p>
          On AI training
        </p>

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
          <li>Access to NLP research not equitable (because of cost of training)</li>
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

        <p>
          <q>Mass discrimination, the black box problem, data protection violations, large-scale unemployment and environmental harms - these are the actual existential risks. We need to focus on these issues right now and not get distracted by hypothetical risks. This is a disservice to the people who are already suffering under the impact of AI.</q>
          <div> Prof Sandra Wachter | University of Oxford</div>
        </p>

        <br />

        <p>The end of capitalism</p>

        <div>
          <Links.EL link={{ source: 'http://naturalcapitalcoalition.org/wp-content/uploads/2016/07/Trucost-Nat-Cap-at-Risk-Final-Report-web.pdf', label: 'Natural capital at risk: the top 100 externalities of business'}}>
          Natural capital at risk: the top 100 externalities of business
          </Links.EL>
        </div>

        </section>
        
      </Layout>
  )
}

export default July
