import Links from 'components/links/Links'
import Layout from 'components/layout/layout'

const AIOResources = () => {
  return (
    <Layout
      header="AI Resources"
      title="AI Resources"
      description={
        'AI Resources'
      }
    >
      <section>
        <h3>Ethics</h3>
        <div>
          <Links.EL link={{ source: 'https://dl.acm.org/doi/pdf/10.1145/3442188.3445922' }}>
          On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?
          </Links.EL>
        </div>
        <div>Shmargaret Shmitchell et al.</div>
        <div>
          <Links.EL link={{ source: 'https://knightcolumbia.org/content/understanding-social-media-recommendation-algorithms' }}>
          Understanding Social Media Recommendation Algorithms
          </Links.EL>
        </div>
        <div>Arvind Narayanan</div>
        <div>
          <Links.EL link={{ source: 'https://cdn.openai.com/papers/gpt-4-system-card.pdf' }}>
          GPT-4 System Card
          </Links.EL>
        </div>
        <div>OpenAI</div>
        <div>
          <Links.EL link={{ source: 'https://trust.openai.com/' }}>
          Security Portal
          </Links.EL>
        </div>
        <div>OpenAI</div>

        <h3>Sustainability</h3>
        <div>
          <Links.EL link={{ source: 'https://arxiv.org/pdf/2211.02001.pdf' }}>
          Estimating the carbon footprint of Bloom, a 176b parameter language model (PDF)
          </Links.EL>
        </div>
        <div>Alexandra Sasha Luccioni (Hugging Face), Sylvain Viguier (Graphcore), Anne-Laure Ligozat (LISN & ENSIIE)</div>
        <div>
          <Links.EL link={{ source: 'https://towardsdatascience.com/the-carbon-footprint-of-chatgpt-66932314627d' }}>
          The Carbon Footprint of ChatGPT
          </Links.EL>
        </div>
        <div>Kasper Groes Albin Ludvigsen (https://towardsdatascience.com/)</div>
        <div>
          <Links.EL link={{ source: 'https://towardsdatascience.com/chatgpts-electricity-consumption-7873483feac4' }}>
          ChatGPT’s Electricity Consumption I
          </Links.EL>
        </div>
        <div>Kasper Groes Albin Ludvigsen (https://towardsdatascience.com/)</div>
        <div>
          <Links.EL link={{ source: 'https://kaspergroesludvigsen.medium.com/chatgpts-electricity-consumption-pt-ii-225e7e43f22b' }}>
          ChatGPT’s Electricity Consumption II
          </Links.EL>
        </div>
        <div>Kasper Groes Albin Ludvigsen (https://towardsdatascience.com/)</div>
        <div>
          <Links.EL link={{ source: 'https://ourworldindata.org/grapher/imagenet-training-cost' }}>
          Cost to train an AI system to equivalent performance on ImageNet
          </Links.EL>
        </div>
        <div>Our World in Data</div>
        <div>
          <Links.EL link={{ source: 'https://ourworldindata.org/grapher/artificial-intelligence-training-computation' }}>
          Computation used to train notable artificial intelligence systems
          </Links.EL>
        </div>
        <div>Our World in Data</div>

        <h3>Articles</h3>
        <div>
          <Links.EL link={{ source: 'https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/' }}>
          What Is ChatGPT Doing … and Why Does It Work?
          </Links.EL>
          <div>Stephen Wolfram</div>
        </div>
        <div>
          <Links.EL link={{ source: 'https://www.semianalysis.com/p/google-we-have-no-moat-and-neither' }}>
          Google "We Have No Moat, And Neither Does OpenAI"
          </Links.EL>
          <div>Dylan Patel and Afzal Ahmad</div>
        </div>
        <div>
          <Links.EL link={{ source: 'https://huyenchip.com/2023/04/11/llm-engineering.html#prompt_engineering_challenges' }}>
          Building LLM applications for production
          </Links.EL>
          <div>Chip Huyen</div>
        </div>
        <div>
          <Links.EL link={{ source: 'https://hbr.org/2023/04/generative-ai-has-an-intellectual-property-problem?ab=hero-main-text' }}>
          Generative AI Has an Intellectual Property Problem
          </Links.EL>
          <div>Gil Appel, Juliana Neelbauer, and David A. Schweidel (Harvard Business Review)</div>
        </div>
        <div>
          <Links.EL link={{ source: 'https://nuvalence.io/insights/inside-chatgpt-plugins-how-they-work-and-areas-for-improvement/' }}>
          Inside ChatGPT Plugins: How They Work (And Areas for Improvement)
          </Links.EL>
          <div>Dan Hernandez (Nuvalence)</div>
        </div>

        <h3>Design</h3>
        <div>
          <Links.EL link={{ source: 'https://www.nngroup.com/articles/ai-paradigm/' }}>
          Self-healing code is the future of software development
          </Links.EL>
          <div>Ben Popper (Stackoverflow)</div>
        </div>

        <h3>Development</h3>
        <div>
          <Links.EL link={{ source: 'https://stackoverflow.blog/2023/06/07/self-healing-code-is-the-future-of-software-development/' }}>
          AI: First New UI Paradigm in 60 Years
          </Links.EL>
          <div>Jakob Nielsen</div>
        </div>

        <h3>Technical</h3>
        <div>
          <Links.EL link={{ source: 'https://arxiv.org/pdf/1706.03762.pdf' }}>
          Attention Is All You Need: Transformer Architecture (PDF)
          </Links.EL>
          <div>Ashish Vaswani et al. (Google at al.)</div>
        </div>
        <div>
          <Links.EL link={{ source: 'https://github.com/Mooler0410/LLMsPracticalGuide' }}>
          The Practical Guides for Large Language Models (GitHub repo)
          </Links.EL>
          <div>Cornell University</div>
        </div>
      
        <h3>AIs</h3>
        <div>
          <Links.EL link={{ source: 'https://www.anthropic.com/' }}>
          Claude (Anthropic)
          </Links.EL>
        </div>
        <div>
          <Links.EL link={{ source: 'https://openai.com/' }}>
          OpenAI (GPT)
          </Links.EL>
        </div>
        <div>
          <Links.EL link={{ source: 'https://bard.google.com/' }}>
          Bard (Google)
          </Links.EL>
        </div>

        <h3>Tools</h3>
        <div>
          <Links.EL link={{ source: 'https://redis.com/blog/chatgpt-memory-project/' }}>
          Introducing the ChatGPT Memory Project
          </Links.EL>
        </div>
        <div>Shahrukh Khan and Navdeeppal Singh (Redis)</div>
        <div>
          <Links.EL link={{ source: 'https://platform.openai.com/playground' }}>
          OpenAI Playground
          </Links.EL>
        </div>
        <div>
          <Links.EL link={{ source: 'https://platform.openai.com/tokenizer' }}>
          OpenAI Tokenizer
          </Links.EL>
        </div>
        <div>
          <Links.EL link={{ source: 'https://platform.openai.com/account/api-keys' }}>
          OpenAI API
          </Links.EL>
        </div>
        <div>
          <Links.EL link={{ source: 'https://medium.com/gimz/how-to-install-whisper-on-mac-openais-speech-to-text-recognition-system-1f6709db6010' }}>
          How to install Whisper on Mac, an amazing OpenAI’s speech-to-text recognition system
          </Links.EL>
        </div>
        <div>Egor Menyaylo</div>

        <h3>Video Instruction</h3>
        <div>
          <Links.EL link={{ source: 'https://learn.deeplearning.ai/chatgpt-prompt-eng' }}>
          ChatGPT Prompt Engineering for Developers (Deeplearning.ai + OpenAI)
          </Links.EL>
        </div>
        <div>
          <Links.EL link={{ source: 'https://www.youtube.com/watch?v=bZQun8Y4L2A' }}>
          State of GPT | BRK216HFS
          </Links.EL>
        </div>
        <div>Microsoft + Andrej Karpathy</div>
        <div>
          <Links.EL link={{ source: 'https://www.youtube.com/watch?v=-3Olw-C4FN4' }}>
          Introduction to Machine Learning on Vertex AI
          </Links.EL>
        </div>
        <div>Google</div>
        <div>
          <Links.EL link={{ source: 'https://www.youtube.com/watch?v=G2fqAlgmoPo' }}>
          Introduction to Generative AI
          </Links.EL>
        </div>
        <div>Google</div>
        <div>
          <Links.EL link={{ source: 'https://www.youtube.com/watch?v=zizonToFXDs' }}>
          Introduction to Large Language Models
          </Links.EL>
        </div>
        <div>Google</div>
        <div>
          <Links.EL link={{ source: 'https://www.youtube.com/watch?v=5jL5wRGrCvk' }}>
          Improving Deep Reinforcement Learning via Quality Diversity, Open-Ended and AI-Generating Algorithms
          </Links.EL>
          <div>MIT</div>
        </div>

        <h3>Tips</h3>
        <div>
          <Links.EL link={{ source: 'https://medium.com/@avra42/how-to-build-a-chatbot-with-chatgpt-api-and-a-conversational-memory-in-python-8d856cda4542' }}>
          How to build a Chatbot with ChatGPT API and a Conversational Memory in Python
          </Links.EL>
        </div>
        <div>Avra</div>

        <h3>Reports & References</h3>
        <div>
          <Links.EL link={{ source: 'https://blog.ialja.com/2023/05/31/resources-are-all-you-need-for-the-generative-ai-tsunami/' }}>
          Resources Are All You Need (to demystify ChatGPT and the generative AI tsunami)
          </Links.EL>
        </div>
        <div>Alja Isaković</div>
        <div>
          <Links.EL link={{ source: 'https://ourworldindata.org/artificial-intelligence ' }}>
          Artificial Intelligence (to demystify ChatGPT and the generative AI tsunami)
          </Links.EL>
        </div>
        <div>Charlie Giattino, Edouard Mathieu, Julia Broden and Max Roser (Our World in Data)</div>
        <div>
          <Links.EL link={{ source: 'https://crfm.stanford.edu/ecosystem-graphs/' }}>
          ecosystem graphs
          </Links.EL>
        </div>
        <div>Stanford</div>
        <div>
          <Links.EL link={{ source: 'https://aiindex.stanford.edu/report/' }}>
          Measuring trends in Artificial Intelligence
          </Links.EL>
        </div>
        <div>Stanford</div>
        <div>
          <Links.EL link={{ source: 'https://mlu-explain.github.io/' }}>
          Visual explanations of core machine learning concepts
          </Links.EL>
        </div>
        <div>MLU-Explain</div>
        <div>
          <Links.EL link={{ source: 'https://www.cloudskillsboost.google/paths/118' }}>
          Generative AI learning path
          </Links.EL>
        </div>
        <div>Google Cloud Skills Boost</div>
      
      </section>
    </Layout>
  )
}

export default AIOResources