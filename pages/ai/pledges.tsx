import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import Published from 'components/published/published'
import styles from 'pages/pages.module.scss'

const references = [
  {
    name: 'Announcing the Responsible AI Pledge Challenge',
    source: 'https://responsibletech.work/blog/2023/6/20/announcing-the-responsible-ai-pledge-challenge/',
  },
  {
    name: 'Pledge Works',
    source: 'https://responsibletech.work/tools/development/pledge-works/',
  },
  {
    name: 'Responsible AI needs responsible humans – like you',
    source: 'https://blog.ialja.com/2023/06/20/responsible-ai-needs-responsible-humans/',
  },
]

const Pledges = () => {
  return (
    <Layout
      header="Responsible AI Pledge Challenge"
      title="Responsible AI Pledge Challenge"
      description={'Responsible AI Pledge Challenge'}
      rt="2"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Beardsley-peacockskirt.PNG/430px-Beardsley-peacockskirt.PNG"
    >
      <section>
        <h2>
          "If anyone is feeling anxious, worried or maybe you just want a chat, please, please do not come crying to
          me." <span className={styles.attribution}>Sister Michael, Derry Girls</span>
        </h2>
        <figure>
          <div>
            <a
              title="Aubrey Beardsley - The Peacock Skirt, Public domain, via Wikimedia Commons"
              href="https://commons.wikimedia.org/wiki/File:Beardsley-peacockskirt.PNG"
            >
              <img
                className={styles.externalImg}
                width="172px"
                height="240px"
                alt="Beardsley-peacockskirt"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Beardsley-peacockskirt.PNG/430px-Beardsley-peacockskirt.PNG"
              />
            </a>
          </div>
        </figure>

        <h3>The challenge</h3>
        <p>
          The open source project ResponsibleTechWork has{' '}
          <Links.EL
            link={{
              source: 'https://responsibletech.work/blog/2023/6/20/announcing-the-responsible-ai-pledge-challenge/',
            }}
          >
            {' '}
            challenged
          </Links.EL>{' '}
          users of AI to contribute to its best practices by making
          <Links.EL link={{ source: 'https://responsibletech.work/tools/development/pledge-works/' }}>
            {' '}
            pledges
          </Links.EL>
          .
        </p>
        <p>
          Our argument - I am a contributor to RTW - is that if we act collectively, sharing our concerns and
          aspirations, we have a better chance of putting AI to good use.
        </p>

        <h3>My response</h3>
        <p>
          The problem with making pledges is that you're supposed to stick to them in perpetuity. So it was a relief
          when my colleague Alja and I at RTW realised that pledges, like humans, are sensitive to time. Principles are
          rocks which change imperceptibly, if at all, but pledges are like eddies in the surrounding waters, to be
          navigated until we are clear of immediate danger.
        </p>
        <p>
          Having a moral window in which to act also shifts the emphasis from the doer to the thing being done. Acts are
          transitory but people, and circumstances, change.
        </p>
        <p>
          I've been using ChatGPT a lot this year, and talking and thinking about it more. Does the provenance of an
          idea or work of art matter, do memories exist (or are they simply re-reruns through the model of the brain),
          and is AI (or not AI), a distraction we cannot afford? I've also been asking myself what the cost is to use
          AI, to our privacy, to people's rights, and to the environment.
        </p>
        <p>I will return to these questions in later posts, but for now, here are my pledges.</p>
        
        <h3>Pledges</h3>
        
        <div className={styles.inset}>
          <div>
            I pledge to stop using ChatGPT until the conditions and rights of employees involved in outsourced work
            have been addressed.
          </div>
          <div>
            <strong>Pledge checkpoint: end of August 2023</strong>
          </div>      
        </div>
        <div className={styles.inset}>
          <div>
            <del>
              To prevent myself from being distracted by advances in AI, I pledge to return my focus to other
              things.
            </del>
          </div>
          <div>
            <ins>
              I pledge to stop using ChatGPT until I have a better understanding of its impact on resources and
              people.
            </ins>
            <span> [Updated 6 July 2023]</span>
          </div>
          <div>
            <strong>Pledge checkpoint: end of July 2023</strong>
          </div>
          <div>
            <em>Pledge report: pledge fulfilled</em>
          </div>
        </div>
        <div className={styles.inset}>
          <div>
            To compensate for the water use of my chats with ChatGPT, I pledge to use grey water for my plants.
          </div>
          <div>
            <strong>Pledge checkpoint: end of summer 2023</strong>
          </div>
        </div>        
        <div className={styles.inset}>
          <div>
            To share what I learn about AI, I pledge to provide links to the materials, sources, and people that
            have helped me.
          </div>
          <div>
            <strong>Pledge checkpoint: tricky, but I'll review this one at the end of the summer too</strong>
          </div>
        </div>

        <h3>Influences</h3>
        <p>
          With thanks to <Links.EL link={{ source: 'https://ialja.com/' }}>Alja</Links.EL>, Carl,{' '}
          <Links.EL link={{ source: 'https://noisewrangler.bandcamp.com/' }}>JP</Links.EL>, Franca, Christina, Carla,
          Pierre, Anne and Bernard, and my former colleagues at{' '}
          <Links.EL link={{ source: 'https://www.altruistiq.com/our-team' }}>Altruistiq</Links.EL> with all of whom I
          have shared conversations about the upsides, downsides, and conundrums of recent developments in AI.
        </p>

      </section>

      <section>
        <h2>References</h2>
        <Links.ExternalLinksList links={references} />
      </section>

      <Published strDate="Tue 20 June 2023"></Published>

      <Links.RelatedLinks
        links={[
          { value: 'ai/resources', text: 'AI - Resources' },
          {
            value: 'https://responsibletech.work/blog/2022/3/1/pledge-works-writing-pledges-for-better-outcomes/',
            text: 'Writing Pledges for Better Outcomes',
          },
          { value: 'ethics/pledge-works/case-study-pledge-works', text: 'Pledge Works for Pledge Works' },
          { value: 'ethics/pledge-works/case-study-startup', text: 'Pledge Works for Startups' },
          { value: 'ethics/pledge-works/inventory', text: 'Pledge Works Inventory' },
          { value: 'ethics/pledge-works/pledges', text: 'Pledges' },
          { value: 'ethics', text: 'Ethics' },
        ]}
      />
    </Layout>
  )
}

export default Pledges
