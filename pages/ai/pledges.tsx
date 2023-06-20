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
      rt="5"
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <h2>
          "Quote." <span class={styles.attribution}> Author</span>
        </h2>        
        <figure>
          <div>
          <a title="Aubrey Beardsley, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Beardsley-peacockskirt.PNG">
            <img class={styles.externalImg} width="172px" height="240px" alt="Beardsley-peacockskirt" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Aubrey_Beardsley_-_Edgar_Poe_3.jpg/392px-Aubrey_Beardsley_-_Edgar_Poe_3.jpg" />
          </a>
          </div>
        </figure>

        <p>
          
        </p>        
        <p>
          <h3>Context</h3>
          <div class={styles.inset}>Inset</div>
          <h3>Pledges</h3>
          <div class={styles.inset}>Inset</div>
        </p>
        <p>
          Is AI sustainable, and how should we use it?
        </p>
      </section>
      </Layout>
  )
}

export default Prometheus
