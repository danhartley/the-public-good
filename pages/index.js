import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import Link from 'next/link'
import styles from 'pages/pages.module.scss'

export default function Home() {
  return (
    <Layout
      title="Responsible web development"
      header="Responsible web development"
      description="Well-researched articles on responsible web development and the climate crisis."
    >
      <section>
        <p>
          Websites do not exist in isolation. Please explore these influences:{' '}
          <Links.EL
            link={{ label: "Low-tech Magazine's solar-powered website", source: 'https://solar.lowtechmagazine.com/' }}
          >
            A solar-powered website
          </Links.EL>
          ,{' '}
          <Links.EL
            link={{ label: 'The communal computer developed at Dynamicland', source: 'https://dynamicland.org/' }}
          >
            A communal computer
          </Links.EL>
          , <Links.EL link={{ source: 'https://ourworldindata.org/time-use' }}>The world's energy problem</Links.EL>,{' '}
          <Links.EL link={{ source: 'https://neumz.com/app/' }}>Daily Gregorian Chant</Links.EL>, and{' '}
          <Links.EL
            link={{
              label: 'YouTube video without synchronized captioning',
              source: 'https://www.youtube.com/watch?v=ZJQjjBR6PbY&t=19s',
            }}
          >
            The Origin of the Elements
          </Links.EL>
          .
        </p>

        <p>Our ability to mitigate the threats we pose to the planet depends on individual and collective action.</p>

        <p>
          <Links.IL link={{ source: 'essays/that-is-not-what-I-meant-at-all' }}>
            That is not what I meant at all
          </Links.IL>
          , an essay on writing with an LLM.
        </p>

        <p>
          I write about the climate crisis, responsible web development, and occasionally{' '}
          <Links.IL link={{ source: 'personal/extracts' }}>things I made up</Links.IL>.
        </p>

        <p>
          I currently spend a lot of time on a new collaboration,{' '}
          <Links.EL link={{ source: 'https://people-and-code.com/' }}>People and Code</Links.EL>.
        </p>

        <p>Recent posts:</p>
        <ul className={styles.dashedItemsList}>
          {/* <li><Links.IL link={{ source:'web-development/sustainable-reporting-emissions'}}>Sustainable reporting of emissions</Links.IL></li> */}
          <li>
            <Links.IL link={{ source: 'web-development/sustainable-reporting-and-tooling' }}>
              Sustainable reporting and tooling
            </Links.IL>
          </li>
          <li>
            <Links.IL link={{ source: 'web-development/its-the-jobs-that-got-small' }}>
              It's the jobs that got small
            </Links.IL>
          </li>
          <li>
            <Links.IL link={{ source: 'web-development/on-programming' }}>On programming</Links.IL>
          </li>
        </ul>
      </section>

      <section>
        <h2>The climate crisis</h2>

        <Links.ILBlock
          link={{ value: 'climate-crisis/natural-climate-solutions-trees', text: 'Natural climate solutions - Trees' }}
        ></Links.ILBlock>
        <Links.ILBlock
          link={{ value: 'climate-crisis/carbon-element-of-life', text: 'Carbon - element of life' }}
        ></Links.ILBlock>
        <Links.ILBlock
          link={{ value: 'climate-crisis/hydrogen-a-singular-atom', text: 'Hydrogen - a singular atom' }}
        ></Links.ILBlock>
        <Links.ILBlock
          link={{
            value: 'climate-crisis/turning-the-lights-out-on-fossil-fuels',
            text: 'Turning the lights out on fossil fuels',
          }}
        ></Links.ILBlock>
        <Links.ILBlock
          link={{
            value: 'climate-crisis/will-people-or-policies-save-the-planet',
            text: 'Will people or policies save the planet?',
          }}
        ></Links.ILBlock>
        <Links.ILBlock
          link={{ value: 'climate-crisis/the-problem-of-population', text: 'The problem of population' }}
        ></Links.ILBlock>
      </section>

      <section>
        <h2>AI</h2>

        <Links.ILBlock link={{ value: 'ai/resources', text: 'AI - Resources' }}></Links.ILBlock>
        <Links.ILBlock link={{ value: 'ai/pledges', text: 'Responsible AI Pledge Challenge' }}></Links.ILBlock>
        {/* <Links.ILBlock link={{'value': 'ai/prometheus', 'text': 'AI - Prometheus'}}></Links.ILBlock> */}
      </section>

      <section>
        <h2>Responsible web development</h2>
        <Links.ILBlock link={{ value: 'web-development/on-programming', text: 'On programming' }}></Links.ILBlock>
        <Links.ILBlock link={{ value: 'web-development/measuring-the-web', text: 'Measuring the web' }}></Links.ILBlock>
        <Links.ILBlock
          link={{ value: 'web-development/sustainable-practices', text: 'Sustainable practices' }}
        ></Links.ILBlock>
        <Links.ILBlock
          link={{
            value: 'web-development/following-the-rules-to-a-well-structured-web-page',
            text: 'Following the rules to a well-structured web page',
          }}
        ></Links.ILBlock>
        <Links.ILBlock
          link={{ value: 'web-development/for-the-love-of-hyperlinks', text: 'For the love of hyperlinks' }}
        ></Links.ILBlock>

        <p>
          I specialise in 4 areas: ethics, performance, accessibility, and sustainability. Together with security they
          comprise responsible web development.
        </p>

        <h3>Ethics</h3>
        <p>
          Web developers are responsible for the wellbeing of their users and colleagues, and are mindful of the impact
          of their work on their company, their profession, and the planet.
        </p>
        <p>
          <Links.IL link={{ source: 'ethics' }}>Read more about ethical web development</Links.IL>
        </p>

        <h3>Performance</h3>
        <p>
          Having a{' '}
          <Links.EL
            link={{
              label:
                'Mozilla Internet Health Report 2019 states that the slowest mobile broadband internet in the world is also the least affordable',
              source: 'https://internethealthreport.org/2019/the-worlds-slowest-internet-is-the-least-affordable/',
            }}
          >
            slow connection
          </Links.EL>{' '}
          is not unusual.
        </p>
        <p>
          Data can be expensive,{' '}
          <Links.EL
            link={{
              label: 'cable.co.uk: The cost of 1GB of mobile data in 237 countries',
              source: 'https://www.cable.co.uk/mobiles/worldwide-data-pricing/',
            }}
          >
            especially in countries where only mobile connectivity is available
          </Links.EL>
          .
        </p>
        <p>
          Poor design{' '}
          <Links.EL
            link={{
              label: 'WebKit guidelines for developers on how to minimise mobile and laptop energy use',
              source: 'https://webkit.org/blog/8970/how-web-content-can-affect-power-usage/',
            }}
          >
            runs down batteries
          </Links.EL>
          , and too many websites are{' '}
          <Links.EL link={{ source: 'https://www.nngroup.com/articles/the-need-for-speed/' }}>too slow</Links.EL>.
        </p>
        <p>
          When you waste people's time,{' '}
          <Links.EL link={{ source: 'https://developer.mozilla.org/en-US/docs/Learn/Performance/why_web_performance' }}>
            they don't hang around
          </Links.EL>
          .
        </p>
        <p>
          <Links.EL link={{ source: 'https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/' }}>
            It takes 0.05 seconds to form an opinion
          </Links.EL>
          .
        </p>

        <p>
          <Links.IL link={{ source: 'performance' }}>Read more about performance</Links.IL>
        </p>

        <h3>Accessibility</h3>
        <p>
          Using websites can be challenging{' '}
          <Links.EL link={{ source: 'https://web.dev/articles/accessibility' }}>for many reasons</Links.EL>.
        </p>
        <p>
          <Links.EL link={{ source: 'https://web.dev/articles/load-faster-like-proxx' }}>
            Not all phones are smart
          </Links.EL>
          .
        </p>

        <p>
          <Links.IL link={{ source: 'accessibility' }}>Read more about accessibility</Links.IL>
        </p>

        <h3>Sustainability</h3>
        <p>
          <span>
            There is a{' '}
            <Links.EL
              link={{
                source:
                  'https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix/',
              }}
            >
              cost in greenhouse gas emissions
            </Links.EL>{' '}
            for every page.
          </span>
        </p>

        <p>
          <Links.IL link={{ source: 'sustainability' }}>Read more about sustainability</Links.IL>
        </p>
      </section>
    </Layout>
  )
}
