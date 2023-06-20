import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'

const Prometheus = () => {
  return (
    <Layout
      header="Responsible AI Pledge Challenge"
      title="Prometheus"
      description={
        'Prometheus'
      }
      rt="2"
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <h2>
          "If anyone is feeling anxious, worried or maybe you just want a chat, please, please do not come crying to me." <span class={styles.attribution}>Sister Michael, Derry Girls</span>
        </h2>        
        <figure>
          <div>
          <a title="Aubrey Beardsley, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Beardsley-peacockskirt.PNG">
            <img class={styles.externalImg} width="172px" height="240px" alt="Beardsley-peacockskirt" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Beardsley-peacockskirt.PNG/430px-Beardsley-peacockskirt.PNG" />
          </a>
          </div>
        </figure>

        <h3>Context</h3>
        <p>
          The problem with making a pledge is that you're supposed to stick to it, sometimes forever. So it was a relief when my colleague Alija and I at RTW, decided to make pledges time sensitive. 
          Principles are rocks which change, if at all, imperceptibly, but pledges are like eddies in the surrounding waters, to be navigated until we are clear of immediate danger.
        </p>
        <p>Having a moral window in which to act also shifts emphasis from the doer to the thing being done. Acts are transitory but people, and circumstances, change.</p>
        <p>I've been using ChatGPT a lot this year, and talking and thinking about it more. 
          Does the provenance of an idea or work of art matter, do memories exist (or are they simply re-reruns through the model of the brain), and is AI (or not AI), a distraction we cannot afford? 
        </p>
        <p></p>
        <p>
          <h3>Pledges</h3>
          <p>
            <div class={styles.inset}>
              <div>To prevent myself from being distracted by advances in AI, I pledge to return my focus to other things.</div>
              <div><strong>Pledge checkpoint: end of July 2023</strong></div>
            </div>
          </p>
          <p>
            <div class={styles.inset}>
              <div>To compensate for the water use of my chats with ChatGPT, I pledge to use grey water for my plants.</div>
              <div><strong>Pledge checkpoint: end of summer 2023</strong></div>
            </div>
          </p>
        </p>
        <p>          
        </p>
      </section>
      </Layout>
  )
}

export default Prometheus
