import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import styles from 'pages/pages.module.scss'

const June = () => {
  return (
    <Layout
      header="June 2023 Notes"
      title="June 2023 Notes"
      description={'June 2023 Notes'}
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <h2>Saturday 17 June 2023</h2>
        <p>Videos #3 to #8</p>
        Topics covered
        <ul>
          <li>
            Boolean logic (AND, OR, NOT and XOR) and gates - used in the creation of circuits to determine input and
            output
          </li>
          <li>Computation - running query through a model with predictable outcomes</li>
          <li>64 bit required to handle sums involving the US national debt</li>
          <li>
            Long term memory enabled by creating configurations of inputs and gates that always yield the same result (0
            or 1)
          </li>
          <li>Logic abstracted at higher and higher levels</li>
          <li>Clock speed: number of cycles (reads) measured in Hz</li>
          <li>Code runs through series of instructions located in memory addresses</li>
          <li>Address contain operations (operating codes) e.g. add, subtract, jump, halt …</li>
          <li>Instructions and data both in memory and go via the Control Unit</li>
          <li>Actions taken on values in registries</li>
          <li>
            Arithmetic Logic Unit (ALU) is a combinational digital circuit that performs arithmetic and bitwise
            operations on integer binary numbers
          </li>
        </ul>
        State
        <ul>
          <li>State is a model in a certain configuration. It is essentially fixed (memory cannot grow)</li>
          <li>0s and 1s are fixed and represented by a set of boolean operations (gates)</li>
          <li>
            State can be changed (from read only to writable) by changing the state of a latch which then allows gates
            to reopen (or close)
          </li>
          <li>
            The brain is also a (relatively) fixed structure. A memory is similar to repeating a question to an LLM
          </li>
          <li>
            The response may be more or less fixed (low temperature comparable to a calculator summing 2 and 2)
            depending on complexity, frequency, etc.
          </li>
          <li>
            Brain physical and subject to change: deterioration (age or illness), damage, use (repeated recall, common
            tasks like simple maths, everyday language)
          </li>
        </ul>
        <div>
          <Links.EL
            link={{
              source: 'https://www.youtube.com/watch?v=tpIctyqH29Q&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&index=1',
            }}
          >
            Crash Course Computer Science (Carrie Anne Philbin)
          </Links.EL>
        </div>
      </section>

      <Links.RelatedLinks
        links={[
          { value: 'notes/2023/september', text: 'September' },
          { value: 'notes/2023/august', text: 'August' },
          { value: 'notes/2023/july', text: 'July' },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default June
