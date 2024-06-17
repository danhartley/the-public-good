import Layout from 'components/layout/layout'
import Links from 'components/links/Links'

const OnProgramming = () => {
  return (
    <Layout
      header="On programming"
      title="On programming 2024"
      description={'On programming 2024'}
      image="https://lh3.googleusercontent.com/xYJeSlYaHX6cb3Jv7V7HxYZDTmT6vQQT6BoLAeC-c2F8GH1O9F0Mz1x2e1KGLY1Qx8HlfCIU2GLbC4HqHwOEfWNqauMXesTRJHNRtZFPnOLX7IEPJnK7HhFjzHQ4RhwVsli_fynV-9yuZJkIyiv3TyNRNvp3S1nXZkccrszVcNzTDKlsK4DaOIXQpf6R0opkJxRQWfxRcrcCckA85H8MYwzsGD1-w-o0S6MXaIlaMH37wS1-pvnG-xWkwCUyVyFllTwXMhcFTxyRaHiuNYqfbXTfk4gfOwhgrvJHHEqch096v5nCxvguBtKgqQ0kgtobozubuKxM3-23oRrWlou2vDu5G4FAsqPhx5wVrvvJ2cvv1HGdtsga7O4_1-65Ad9AuXlj_bTYuA-jKsiqkrc8PbI9C27KiJhYbxQumhLUMoh7AVgrfe0VdWPxSJwYikpo8pXUgnC5G9Qmv7TxQ8-msgv_Yhl_nj0Cw_yGvszlrzkswxhTabP00JBx-c7nm91HWnjNP_mRt35iYx65yrlbE72wgE5qPpS8WJ2PHeMe5l6JXKLE2qlHEAvixXTqIt3e2VNMVQC390FE4b1soXkr4iy7MbHae714nvNLYjxFHNh0AUqc84kvJ7FYFdSVSTGVQgFzL1pEQzTWuDLbccu-x9GHdbfLtNdC7Hxf3M3CETOyItBmywTXyo0WMjcASOu-FydECxSYLbcr22SCY9AF3mo=w1078-h721-no?authuser=0"
    >
      <section>
        <p>Software for the web is perpetually unfinished and incomplete. Most products are sent out into the world to fend for themselves and forgotten by their manufacturers - returning home only when things go wrong.</p>
        <p>Software rolls on endlessly, accumulating problems, a record of imperfection and second guesses. There is never an end, no moment when its makers hand it over and say, there, it is done. </p>
        <p>How should those makers handle this evolving, never satisfied aggregation of ideas and hope? </p>
        <p>One common practice that has spread widely is to harness people to a remorseless machine that is unwavering in its pace; it loves to smooth out the seasons and works unchanged on short days and long ones and would fling aside idle days that stand in its way but for the legal provision that humans occasionally need to stop. The name of this practice is multiple but you might know it as agile. It demands - but rarely receives - absolute obeisance, because it believes it is the only means by which complexity can be subdued.</p>
      </section>

      <section>
        <p>Can we take satisfaction from creating when the object on which we work is never complete? Some web developers - designers and programmers - talk about the craft involved in assembling the raw materials of the web - HTML, JavaScript and CSS - or they used to; their numbers are dwindling.</p>
        <p>Websites are updated, refreshed or simply torn down and their earlier incarnations lost; there are relics of the past if you look - or time travel - but they are curiosities of little value, no longer able, or allowed, to satisfy their function.</p>
        <p>Web development was not naive and fun for long, it was quickly drawn into the maw of company thinking, succumbing to mechanised accounting and the creation of roles designed to make processes more efficient but which constrained imagination, collaboration and excellence; the result is mediocre uniformity.</p>
      </section>

      <section>
        <p>Web developers have gorged themselves on libraries, frameworks and a multitude of tools and techniques for limiting their thinking and for controlling their environment; in the pursuit of perfection, they have ceded interest and influence over what it is they are making.</p>
        <p>The next revolution in web development - the first since it began, the rest was activity not change - will be under the aegis of AI. I cannot imagine the machines will tolerate for long the thousand and one elaborate solutions we have devised for simple problems. I would like to think that the core of the Internet - HTML, JavaScript and CSS - will persist as the target for their work.</p>
        <p>But I suspect data and design will be wrapped up and presented on demand for the device and in a format of the user’s choosing - or to meet the preferences of the user’s avatar.</p>
      </section>

      <section>
        <p>What does a programmer who builds websites and apps call themselves?</p>
        <p>I’ve gone by multiple names over the years but the one I favoured was web developer. Carpenters never faced this problem. The make of lathe or saw did not, and does not, determine their competency.</p>
        <p>My most recent site I built using the triumvirate of web technologies, those old war horses which once cantered beneath the surface of the web but now too often trudge beneath their burden of superfluity. It brought me a strange joy; part discovery and part nostalgia. I can remember when they first came into being, and can foresee their death.</p>
        <p>If you have never worked unassisted by a framework or library, I encourage you to give it a go, you might wonder why you permit other’s code to stand between you and what you want to make; React, Vue, etc. offer you control while they take away your authority, your authorship.</p>
      </section>

      <Links.RelatedLinks
        links={[
            { value: 'web-development/its-the-jobs-that-got-small', text: 'It\'s the jobs that got small' }
          , { value: 'web-development/practice/meetings', text: 'Meetings' }
          , { value: 'web-development/practice/titles', text: 'Titles' }
          , { value: 'web-development/practice/roles', text: 'Roles' }
          , { value: 'web-development/practice/artefacts', text: 'Artefacts' }
          , { value: 'web-development/practice/domains', text: 'Domains' }
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default OnProgramming
