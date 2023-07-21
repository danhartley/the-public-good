import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import styles from 'pages/pages.module.scss'

const showYourWorkings = () => {
  return (
    <Layout
      header="Show your workings"
      title="showYourWorkings"
      description={'Show your workings'}
      rt="5-10"
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <h2>
          "1729 is the magic number." <span class={styles.attribution}> Srinivas Ramanujan</span>
        </h2>
      </section>
      <h3>How resource intensive is AI?</h3>
      <ul>
        <li>Does more information require more or less resources of the model?</li>
        <li>
          As a chat grows (the entire chat history is parsed each time a request is submitted) how does this affect
          computational effort?
        </li>
        <li>What is the cost of a search and how do we assess the cost of visting pages based on a search?</li>
        <li>How do we factor in the difference between visiting a lightweight web page and a video?</li>
      </ul>
      <h4>Training day</h4>
      <p>Or in the case of GPT-3 14.8 days using 10,000 GPUs.</p>
      <p>Neither the cost of training GPT-4 and fine tuning Chat for GPT-4 have not been made public.</p>
      <p>The report is 100 pages long.</p>
      <blockquote cite="https://arxiv.org/pdf/2303.08774.pdf">
        Given both the competitive landscape and the safety implications of large-scale models like GPT-4, this report
        contains no further details about the architecture (including model size), hardware, training compute, dataset
        construction, training method, or similar.
      </blockquote>
      <cite>
        <Links.EL link={{ source: 'https://arxiv.org/pdf/2303.08774.pdf', label: 'GPT-4 Technical Report PDF' }}>
          {' '}
          GPT-4 Technical Report (PDF)
        </Links.EL>
      </cite>
      <h4>The context window</h4>
      The context window is the number of tokens - roughly equatable to words - that a model can process. In ChatGPT
      this is number of tokens or words that is accepted; anything more is discarded.
      <p>
        I've added Claude 2 from{' '}
        <Links.EL link={{ source: 'https://www.anthropic.com/', label: 'Anthropic' }}>Anthropic</Links.EL> for
        comparison.
      </p>
      <table>
        <caption>Context window</caption>
        <thead>
          <tr>
            <th class={styles.medium}>Model</th>
            <th class={styles.medium}>Tokens</th>
            <th class={styles.medium}>Words</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GPT-3</td>
            <td>4,000</td>
            <td>3,000</td>
          </tr>
          <tr>
            <td>GPT-4</td>
            <td>30,000</td>
            <td>25,000</td>
          </tr>
          <tr>
            <td>Claude 2</td>
            <td>100,000</td>
            <td>75,000</td>
          </tr>
        </tbody>
      </table>
      <h4>Is a chat request to ChatGPT more expensive than a Google search?</h4>
      <br />
      <br />- The budget - The claims - The evidence - The missing API - Comparison
    </Layout>
  )
}

export default showYourWorkings
