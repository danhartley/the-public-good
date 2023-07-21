import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import styles from 'pages/pages.module.scss'

const Prometheus = () => {
  return (
    <Layout
      header="The Modern Prometheus"
      title="Prometheus"
      description={'Prometheus'}
      rt="10-15"
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <h2>
          "Beware; for I am fearless, and therefore powerful."{' '}
          <span class={styles.attribution}> Mary Shelley, Frankenstein</span>
        </h2>
        <figure>
          <div>
            <a
              title="Aubrey Beardsley, Public domain, via Wikimedia Commons"
              href="https://commons.wikimedia.org/w/index.php?curid=188018"
            >
              <img
                class={styles.externalImg}
                width="172px"
                height="240px"
                alt="Beardsley-peacockskirt"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Aubrey_Beardsley_-_Edgar_Poe_3.jpg/392px-Aubrey_Beardsley_-_Edgar_Poe_3.jpg"
              />
            </a>
          </div>
        </figure>

        <p>
          There are parallels between AI and electricity. Both were greeted with a mixture of wonder, apprehension, and
          fear. They transformed multiple industries and societies, yet both remain unevenly distributed. They are
          enigmatic, used by many but understood by few, and mysterious even to those responsible for their
          proliferation. One can kill you outright, the other has the potential to destroy lives and possibly societies.
          AI may become ubiquitous, a fundamental service without which we would struggle to function, a foundation upon
          which industry, technology and other services will be built.
        </p>
        <p>
          Electricity is a natural phenomenon, but it requires work, and resources.{' '}
          <Links.EL
            link={{
              label: 'Share of electricity in total final energy consumption',
              source: 'https://yearbook.enerdata.net/electricity/share-electricity-final-consumption.html',
            }}
          >
            Electricity's share of energy consumption is about 20%
          </Links.EL>
          . AI's{' '}
          <Links.EL
            link={{
              label: 'Energy and Policy Considerations for Deep Learning in NLP',
              source: 'https://arxiv.org/pdf/1906.02243.pdf',
            }}
          >
            {' '}
            consumption of electricity
          </Links.EL>{' '}
          (and other resources including water) is small but increasing.
        </p>
        <p>Is AI sustainable, and how should we use it?</p>
      </section>
    </Layout>
  )
}

export default Prometheus
