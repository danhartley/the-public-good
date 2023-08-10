import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import Accordion from 'components/accordion/accordion'
import styles from 'pages/pages.module.scss'

const August = () => {
  return (
    <Layout
      header="August 2023 Notes"
      title="August 2023 Notes"
      description={'August 2023 Notes'}
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <div class={styles.day}>
          <span class={styles.date}>Tuesday 01 August 2023</span>

          <h2>Ethical AI</h2>

          <Links.EL
            link={{
              source: 'https://time.com/6297403/the-workers-behind-ai-rarely-see-its-rewards-this-indian-startup-wants-to-fix-that/',
              label: 'The Workers Behind AI Rarely See Its Rewards. This Indian Startup Wants to Fix That',
            }}
          >
            The Workers Behind AI Rarely See Its Rewards. This Indian Startup Wants to Fix That
          </Links.EL>
          <div>Billy Perrigo/karnataka, India | Time</div>

          <div>
            <Links.EL
              link={{
                source: 'https://arxiv.org/pdf/2304.03271.pdf',
                label: 'Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models',
              }}
            >
              Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models (PDF)
            </Links.EL>
          </div>
          <div>Pengfei Li et al.</div>

          <div>
            <Links.EL
              link={{
                source: 'https://www.theguardian.com/technology/2023/aug/01/techscape-environment-cost-ai-artificial-intelligence',
                label: 'Turns out there’s another problem with AI – its environmental toll',
              }}
            >
              Turns out there’s another problem with AI – its environmental toll
            </Links.EL>
          </div>
          <div>The Guardian | Chris Stokel-Walker</div>

          <blockquote>
            <div>Training GPT-3 used by 3.5m litres of water through datacentre usage, according to one academic study, and that’s provided it used more efficient US datacentres. If it was trained on Microsoft’s datacentres in Asia, the water usage balloons to closer to 5m litres.</div>
            <div>Prior to the integration of GPT-4 into ChatGPT, researchers estimated that the generative AI chatbot would use up 500ml of water – a standard-sized water bottle – every 20 questions and corresponding answers. And ChatGPT was only likely to get thirstier with the release of GPT-4, the researchers forecast.</div>
            <div>Estimating energy use, and the resulting carbon footprint, is trickier. One third-party analysis by researchers estimated that training of GPT-3, a predecessor of ChatGPT, consumed 1,287 MWh, and led to emissions of more than 550 tonnes of carbon dioxide equivalent, similar to flying between New York and San Francisco on a return journey 550 times.</div>
            <div>Reporting suggests GPT-4 is trained on around 570 times more parameters than GPT-3. That doesn’t mean it uses 570 times more energy, of course – things get more efficient – but it does suggest that things are getting more energy intensive, not less.</div>
          </blockquote>

        </div>

        <div class={styles.day}>
          <span class={styles.date}>Wednesday 02 August 2023</span>

          <h2>Ethical AI</h2>

          <div>
            <Links.EL
              link={{
                source: 'https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai',
                label: '‘It\'s destroyed me completely’: Kenyan moderators decry toll of training of AI models',
              }}
            >
              ‘It’s destroyed me completely’: Kenyan moderators decry toll of training of AI models
            </Links.EL>
        </div>
        <div>The Guardian | Niamh Rowe</div>

        <blockquote cite='https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai'>
            <div>The company has workers in several places in east Africa, including more than 3,500 Kenyans. Sama was formerly Meta’s largest provider of content moderators in Africa, until it announced in January it would be “discontinuing” its work with the giant. The news followed numerous lawsuits filed against both companies for alleged union-busting, unlawful dismissals and multiple violations of the Kenyan constitution.</div>
            <div>Sama canceled its contract with OpenAI in March 2022, eight months early, “to focus on our core competency of computer vision data annotation solutions”, the Sama spokesperson said. The announcement coincided with an investigation by Time, detailing how nearly 200 young Africans in Sama’s Nairobi datacenter had been confronted with videos of murders, rapes, suicides and child sexual abuse as part of their work, earning as little as $1.50 an hour while doing so.</div>
        </blockquote>

        </div>

        <div class={styles.day}>
          <span class={styles.date}>Friday 04 August 2023</span>

          <h2>Climate crisis</h2>

          <div>
            <Links.EL
              link={{
                source: 'https://www.theguardian.com/world/commentisfree/2023/aug/04/antarctica-heatwaves-sea-ice-levels-melting',
                label: 'Antarctica’s heatwaves are a warning to humanity – and we have only a narrow window to save the planet',
              }}
            >
              Antarctica’s heatwaves are a warning to humanity – and we have only a narrow window to save the planet
            </Links.EL>
          </div>
          <div>The Guardian | Climate scientists</div>

          <blockquote cite='https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai'>
              <div>The scope of the unusual occurrences in Antarctica extends beyond just biological systems. Other records have been shattered, with this year witnessing sea ice levels plummeting to unprecedented lows according to the satellite record. Last year an alarming, widespread heatwave hit large areas of Antarctica, causing, at some locations, a 35-40C temperature rise above long-term averages. Extreme temperature events have been observed in various other parts of the continent, including the Antarctic peninsula.</div>            
          </blockquote>

          <h2>Ethical AI</h2>

          <div>
            <Links.EL
              link={{
                source: 'https://www.theguardian.com/commentisfree/2023/aug/04/ai-companies-regulation-international-inclusive',
                label: 'AI companies aren’t afraid of regulation – we want it to be international and inclusive',
              }}
            >
              AI companies aren’t afraid of regulation – we want it to be international and inclusive
            </Links.EL>
          </div>
          <div>The Guardian | Dorothy Chou (DeepMind)</div>

          <blockquote cite='https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai'>
              <div>Instead of bankrolling companies that prioritise novelty over safety and ethics, venture capitalists (VCs) and others need to incentivise bold and responsible product development.</div>            
          </blockquote>

          <p>No concrete proposals or commitments. No mention of poor conditions for workers.</p>

          <p>Refers to <Links.EL link={{source:'Responsible disclosure is a process that allows security researchers to safely report found vulnerabilities to your team.'}}>responsible disclosure</Links.EL> a <q>process that allows security researchers to safely report found vulnerabilities to your team</q>. Interesting there is a time within which bugs must be fixed.</p>

          <div>
            <Links.EL link={{source: 'https://www.deepmind.com/about/operating-principles', label:'DeepMind operating principles'}}>
              DeepMind operating principles
            </Links.EL>
          </div>

          <br />

          <div>
            <Links.EL link={{source: 'https://dl.acm.org/doi/10.1145/3531146.3533088', label:'Taxonomy of Risks posed by Language Models'}}>
              Taxonomy of Risks posed by Language Models
            </Links.EL>
          </div>
          <div>Laura Weidinger et al.</div>

          <br />

          <div>
            <Links.EL link={{source: 'https://www.youtube.com/watch?v=oqu5DjzOBF8', label:'I Misunderstood the Greenhouse Effect. Here\'s How It Works.'}}>
            I Misunderstood the Greenhouse Effect. Here's How It Works. 
            </Links.EL>
          </div>
          <div>Sabine Hossenfelder | YouTube</div>

        </div>

        <div class={styles.day}>
          <span class={styles.date}>Thursday 10 August 2023</span>

          <h3>Problem solving</h3>

          McKinsey's 7 steps
          <ol>
            <li>Define the problem: <em>why not what</em></li>
            <li>Disaggregate it (ie broken down into component parts or issues)</li>
            <li>Prioritize which of these elements has the biggest impact on the problem</li>
            <li>Build a workplan</li>
            <li>Conduct critical analysis (gather data)</li>
            <li>Synthesize findings (this is where team work makes a difference)</li>
            <li>Communicate a storyline</li>
          </ol>

          Random response
          <ul>
            <li>Is there a problem?</li>
            <li>Does a solution already exist?</li>
            <li>Introduce problem to a wider or different context</li>
            <li>Prioritise skills of those working on the problem (fit solution)</li>
            <li>Oversee building of a plan</li>
            <li>Welcome criticism</li>
            <li>Question each step and repeat</li>
          </ul>

          Spitballing
          <ul>
            <li>Recursive acronym</li>
            <li>Universal sockets, filters, pure ideas, etc. (creating common denominators)</li>
            <li>The 2 hour meeting</li>
            <li>Questionning until the problem is simplified (and to continue until it is sometimes no more…) AKA dissolve the problem</li>
            <li>Count up the things that won't work, or are dead-ends</li>
            <li>Provide what cannot do (time, expertise, opportunity) or will not do (pay, conditions)</li>
            <li>Mismatch job and candidate; failure to expose real need, express true desires</li>
            <li>Short term v long term; superficial/profund; durable/throw away</li>
            <li>Meta: test our own tools on ourselves</li>
            <li>Work that is hard to reproduce (yet still open source/data/community)</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default August
