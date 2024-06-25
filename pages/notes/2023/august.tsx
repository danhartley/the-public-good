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
              source:
                'https://time.com/6297403/the-workers-behind-ai-rarely-see-its-rewards-this-indian-startup-wants-to-fix-that/',
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
                source:
                  'https://www.theguardian.com/technology/2023/aug/01/techscape-environment-cost-ai-artificial-intelligence',
                label: 'Turns out there’s another problem with AI – its environmental toll',
              }}
            >
              Turns out there’s another problem with AI – its environmental toll
            </Links.EL>
          </div>
          <div>The Guardian | Chris Stokel-Walker</div>

          <blockquote>
            <div>
              Training GPT-3 used by 3.5m litres of water through datacentre usage, according to one academic study, and
              that’s provided it used more efficient US datacentres. If it was trained on Microsoft’s datacentres in
              Asia, the water usage balloons to closer to 5m litres.
            </div>
            <div>
              Prior to the integration of GPT-4 into ChatGPT, researchers estimated that the generative AI chatbot would
              use up 500ml of water – a standard-sized water bottle – every 20 questions and corresponding answers. And
              ChatGPT was only likely to get thirstier with the release of GPT-4, the researchers forecast.
            </div>
            <div>
              Estimating energy use, and the resulting carbon footprint, is trickier. One third-party analysis by
              researchers estimated that training of GPT-3, a predecessor of ChatGPT, consumed 1,287 MWh, and led to
              emissions of more than 550 tonnes of carbon dioxide equivalent, similar to flying between New York and San
              Francisco on a return journey 550 times.
            </div>
            <div>
              Reporting suggests GPT-4 is trained on around 570 times more parameters than GPT-3. That doesn’t mean it
              uses 570 times more energy, of course – things get more efficient – but it does suggest that things are
              getting more energy intensive, not less.
            </div>
          </blockquote>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Wednesday 02 August 2023</span>

          <h2>Ethical AI</h2>

          <div>
            <Links.EL
              link={{
                source:
                  'https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai',
                label: "‘It's destroyed me completely’: Kenyan moderators decry toll of training of AI models",
              }}
            >
              ‘It’s destroyed me completely’: Kenyan moderators decry toll of training of AI models
            </Links.EL>
          </div>
          <div>The Guardian | Niamh Rowe</div>

          <blockquote cite="https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai">
            <div>
              The company has workers in several places in east Africa, including more than 3,500 Kenyans. Sama was
              formerly Meta’s largest provider of content moderators in Africa, until it announced in January it would
              be “discontinuing” its work with the giant. The news followed numerous lawsuits filed against both
              companies for alleged union-busting, unlawful dismissals and multiple violations of the Kenyan
              constitution.
            </div>
            <div>
              Sama canceled its contract with OpenAI in March 2022, eight months early, “to focus on our core competency
              of computer vision data annotation solutions”, the Sama spokesperson said. The announcement coincided with
              an investigation by Time, detailing how nearly 200 young Africans in Sama’s Nairobi datacenter had been
              confronted with videos of murders, rapes, suicides and child sexual abuse as part of their work, earning
              as little as $1.50 an hour while doing so.
            </div>
          </blockquote>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Friday 04 August 2023</span>

          <h2>Climate crisis</h2>

          <div>
            <Links.EL
              link={{
                source:
                  'https://www.theguardian.com/world/commentisfree/2023/aug/04/antarctica-heatwaves-sea-ice-levels-melting',
                label:
                  'Antarctica’s heatwaves are a warning to humanity – and we have only a narrow window to save the planet',
              }}
            >
              Antarctica’s heatwaves are a warning to humanity – and we have only a narrow window to save the planet
            </Links.EL>
          </div>
          <div>The Guardian | Climate scientists</div>

          <blockquote cite="https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai">
            <div>
              The scope of the unusual occurrences in Antarctica extends beyond just biological systems. Other records
              have been shattered, with this year witnessing sea ice levels plummeting to unprecedented lows according
              to the satellite record. Last year an alarming, widespread heatwave hit large areas of Antarctica,
              causing, at some locations, a 35-40C temperature rise above long-term averages. Extreme temperature events
              have been observed in various other parts of the continent, including the Antarctic peninsula.
            </div>
          </blockquote>

          <h2>Ethical AI</h2>

          <div>
            <Links.EL
              link={{
                source:
                  'https://www.theguardian.com/commentisfree/2023/aug/04/ai-companies-regulation-international-inclusive',
                label: 'AI companies aren’t afraid of regulation – we want it to be international and inclusive',
              }}
            >
              AI companies aren’t afraid of regulation – we want it to be international and inclusive
            </Links.EL>
          </div>
          <div>The Guardian | Dorothy Chou (DeepMind)</div>

          <blockquote cite="https://www.theguardian.com/technology/2023/aug/02/ai-chatbot-training-human-toll-content-moderator-meta-openai">
            <div>
              Instead of bankrolling companies that prioritise novelty over safety and ethics, venture capitalists (VCs)
              and others need to incentivise bold and responsible product development.
            </div>
          </blockquote>

          <p>No concrete proposals or commitments. No mention of poor conditions for workers.</p>

          <p>
            Refers to{' '}
            <Links.EL
              link={{
                source:
                  'https://www.hackerone.com/knowledge-center/why-you-need-responsible-disclosure-and-how-get-started',
                label:
                  'Responsible disclosure is a process that allows security researchers to safely report found vulnerabilities to your team.',
              }}
            >
              responsible disclosure
            </Links.EL>{' '}
            a <q>process that allows security researchers to safely report found vulnerabilities to your team</q>.
            Interesting there is a time within which bugs must be fixed.
          </p>

          <div>
            <Links.EL
              link={{
                source: 'https://www.deepmind.com/about/operating-principles',
                label: 'DeepMind operating principles',
              }}
            >
              DeepMind operating principles
            </Links.EL>
          </div>

          <br />

          <div>
            <Links.EL
              link={{
                source: 'https://dl.acm.org/doi/10.1145/3531146.3533088',
                label: 'Taxonomy of Risks posed by Language Models',
              }}
            >
              Taxonomy of Risks posed by Language Models
            </Links.EL>
          </div>
          <div>Laura Weidinger et al.</div>

          <br />

          <div>
            <Links.EL
              link={{
                source: 'https://www.youtube.com/watch?v=oqu5DjzOBF8',
                label: "I Misunderstood the Greenhouse Effect. Here's How It Works.",
              }}
            >
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
            <li>
              Define the problem: <em>why not what</em>
            </li>
            <li>Disaggregate it (ie broken down into component parts or issues)</li>
            <li>Prioritize which of these elements has the biggest impact on the problem</li>
            <li>Build a work plan</li>
            <li>Conduct critical analysis (gather data)</li>
            <li>Synthesize findings (this is where teamwork makes a difference)</li>
            <li>Communicate a storyline</li>
          </ol>
          Random response (somewhat contradictory)
          <ul>
            <li>Is there a problem?</li>
            <li>Does a solution already exist?</li>
            <li>Introduce problem to a wider or different context</li>
            <li>Prioritise skills of those working on the problem (fit solution to people not vice versa)</li>
            <li>Oversee building of a plan</li>
            <li>Welcome criticism</li>
            <li>Question each step and repeat</li>
          </ul>
          Spitballing
          <ul>
            <li>Recursive acronym e.g. GNU</li>
            <li>
              Universal sockets (NASA), filters, pure ideas, etc. (creating <strong>common denominators</strong>)
            </li>
            <li>
              <strong>Tweaks</strong> over overhauls?
            </li>
            <li>
              <strong>The 2 hour meeting</strong> and parallels with the (chamber) orchestra/quartet (resonance,
              wavelength)
            </li>
            <li>
              Questioning until the problem is simplified (and to continue until it is sometimes no more…) AKA{' '}
              <strong>dissolve the problem</strong>
            </li>
            <li>
              Count up the things that won't work, or are <strong>useful dead-ends</strong> (using{' '}
              <strong>decision trees</strong>)?
            </li>
            <li>Provide what others cannot do (time, expertise, opportunity) or will not do (pay, conditions)</li>
            <li>
              Mismatch job and candidate (or requirement and service, required change and policy); failure to expose
              real need, express true desires
            </li>
            <li>Short term v long term; superficial/profound; durable/disposable</li>
            <li>Meta: test our own tools on ourselves</li>
            <li>
              Work that is <strong>hard to reproduce</strong> yet will tools/data/access available to all (open
              source/data/community)
            </li>
          </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Friday 11 August 2023</span>
          <h3>Working group</h3>
          Seed ideas
          <ul>
            <li>Thinktanks (cf open source or open collaboration working groups)</li>
            <li>Are we taking on too much? Both a new business (in what area?) and new practices?</li>
            <li>Academic papers aim for 10-15% new material</li>
            <li>
              Compare the <em>therapeutic alliance</em> aka the rules of engagement
            </li>
          </ul>
          Aims
          <ul>
            <li>
              Decide to concentrate on how we do things e.g company structure, including equal pay, shifting titles (or
              none)
            </li>
            <li>Tacking against the wind - not always heading straight for where we want to go.</li>
            <li>
              Instead of asking <em>Why are we doing this</em>?, asking <em>What makes us do this</em>? Ideal self,
              intent to work together, artistic fulfilment
            </li>
          </ul>
          For next time
          <ul>
            <li>Define ideal self</li>
            <li>Come up with a common plan for achieving each of our ideal selves</li>
            <li>Explain what makes us want to work together</li>
          </ul>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Friday 11 August 2023</span>

          <h3>Unethical AI</h3>

          <div>
            <Links.EL
              link={{
                source:
                  'https://www.rollingstone.com/culture/culture-features/women-warnings-ai-danger-risk-before-chatgpt-1234804367/',
                label: 'These Women Tried to Warn Us About AI',
              }}
            >
              These Women Tried to Warn Us About AI
            </Links.EL>
          </div>
          <div>Lorena O'Neil | Rolling Stone</div>

          <blockquote>
            <br />
            “There were no Black people — literally no Black people,” says Gebru, who was born and raised in Ethiopia.
            “I would go to academic conferences in AI, and I would see four or five Black people out of five, six, seven
            thousand people internationally.… I saw who was building the AI systems and their attitudes and their points
            of view. I saw what they were being used for, and I was like, ‘Oh, my God, we have a problem.’”
            <br />
            <br />
            Gebru and her colleagues have also expressed concern about the exploitation of heavily surveilled and
            low-wage workers helping support AI systems; content moderators and data annotators are often from poor and
            underserved communities, like refugees and incarcerated people. Content moderators in Kenya have reported
            experiencing severe trauma, anxiety, and depression from watching videos of child sexual abuse, murders,
            rapes, and suicide in order to train ChatGPT on what is explicit content. Some of them take home as little
            as $1.32 an hour to do so.
            <br />
            <br />
            “It is unsurprising that if you look at the race and, generally, gender demographics of Doomer or
            existentialist people, they look a particular way, they are of a particular income level. Because they don’t
            often suffer structural inequality — they’re either wealthy enough to get out of it, or white enough to get
            out of it, or male enough to get out of it,” says Chowdhury. “So for these individuals, they think that the
            biggest problems in the world are can AI set off a nuclear weapon?”
          </blockquote>

          <h3>Nothing to worry about!</h3>

          <div>
            <Links.EL
              link={{
                source: 'https://openai.com/blog/introducing-superalignment',
                label: 'Introducing Superalignment',
              }}
            >
              Introducing Superalignment
            </Links.EL>
          </div>
          <div>OpenAI</div>
          <blockquote cite="https://openai.com/blog/introducing-superalignment">
            Superintelligence will be the most impactful technology humanity has ever invented, and could help us solve
            many of the world’s most important problems. But the vast power of superintelligence could also be very
            dangerous, and could lead to the disempowerment of humanity or even human extinction.
          </blockquote>

          <p>
            <div>
              Follow up from Alja: <Links.EL link={{ source: 'https://dougbelshaw.com/' }}>Doug Belshaw</Links.EL>.
            </div>

            <div>
              And from him to{' '}
              <Links.EL link={{ source: 'https://www.workers.coop/resource/casestudy-workerscoop/' }}>
                Case study: workers.coop
              </Links.EL>
              .
            </div>
          </p>
        </div>

        <div class={styles.day}>
          <span class={styles.date}>Wednesday 23 August 2023</span>
        </div>

        <h3>Ethics</h3>

        <Links.EL
          link={{
            source: 'https://www.technologyreview.com/2023/08/16/1077490/collective-action-tech-work/',
            label: 'Tech is broken—can collective action fix it?',
          }}
        >
          Tech is broken—can collective action fix it?
        </Links.EL>
        <Links.EL
          link={{
            source: 'https://www.wired.com/story/prosecraft-backlash-writers-ai/',
            label: 'Why the Great AI Backlash Came for a Tiny Startup You’ve Probably Never Heard Of',
          }}
        >
          Why the Great AI Backlash Came for a Tiny Startup You’ve Probably Never Heard Of
        </Links.EL>

        <div class={styles.day}>
          <span class={styles.date}>Friday 25 August 2023</span>
          <h3>Working group</h3>
          Response from last time
          <ul>
            <li>
              <div>Ideal self</div>
              <ul>
                <li>
                  <strong>Consolation of knowledge</strong> and <strong>process over goal</strong>
                </li>
                <li>Knowledge has depth e.g. MB biome is not original but product of anthropogenic change</li>
                <li>
                  Internet tools (HTML, JavaScript & CSS) are one form of foundational knowledgeable cf. knowledge of
                  ICE.
                </li>
                <li>
                  Evolution is a process; it describes something, it does not explain it (in the sense of defining a
                  purpose or goal - we often make it explicitly clear it does not have a goal).
                </li>
                <li>
                  The ideal is a compromise; shuffling the things that make us satisfied; a way of navigating rather
                  than a destination.
                </li>
                <li>
                  It is worth looking for things that have lasting value: technical skills, domain knowledge, character
                  (ethics, fortitude); cf. Pledge Works which can make a job more meaningful if we discover within it
                  challenges meaningful to us (as perhaps union members do, in discovering camaraderie, resilience,
                  purpose, meaning beyond their job).
                </li>
                <li>
                  <strong>Succession</strong>: climax of a process (evolution) and a goal (stable state of the
                  succession)
                </li>
              </ul>
              <div>Helping achieve our ideal selves and how working together can help</div>
              <ul>
                <li>
                  Sharing a role: practically satisfies permanence for employer/service and permits greater freedom
                </li>
                <li>Create something that gives us autonomy</li>
                <li>
                  Working together requires (internal) logistics, planning, compromise, etc. Can use this as a blueprint
                  for working with others (outsiders)
                </li>
              </ul>
            </li>
          </ul>
          <div>Action</div>
          <ul>
            <li>Identifiy ourselves cf. RTW or a union</li>
            <li>Commit to concrete action (pledges)</li>
            <li>Keep a record</li>
            <li>Do things that are useful in themselves - not a business plan, or career plan but acts</li>
          </ul>
        </div>
      </section>

      <Links.RelatedLinks
        links={[
          { value: 'notes/2023/september', text: 'September' },
          { value: 'notes/2023/july', text: 'July' },
          { value: 'notes/2023/june', text: 'June' },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default August
