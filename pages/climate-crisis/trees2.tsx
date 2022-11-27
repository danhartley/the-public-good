import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import Formula from 'components/tools/formula'
import styles from 'pages/pages.module.scss'

const Trees2 = () => {
  const references = [
    {
      name: 'The Conversation | There aren’t enough trees in the world | Bonnie Waring',
      source:
        'https://theconversation.com/there-arent-enough-trees-in-the-world-to-offset-societys-carbon-emissions-and-there-never-will-be-158181',
    },
    {
      name: 'The global tree restoration potential | Bastin et al.',
      source: 'https://science.sciencemag.org/content/365/6448/76',
    },
    {
      name: 'Comment on “The global tree restoration potential” | Lewis et al.',
      source: 'https://science.sciencemag.org/content/366/6463/eaaz0388',
    },
    {
      name: 'Comment on “The global tree restoration potential” | Friedlingstein et al.',
      source:
        'https://science.sciencemag.org/content/366/6463/eaay8060?ijkey=4941132eebc36136e6c4b1ccea847d2fdddb01ad&keytype2=tf_ipsecsha',
    },
    {
      name: 'Comment on “The global tree restoration potential” | Veldman et al.',
      source:
        'https://science.sciencemag.org/content/366/6463/eaay7976?ijkey=866eac34ce3783e0f1f6d537b68f296534f4faf3&keytype2=tf_ipsecsha',
    },
    {
      name: 'Response to Comments on “The global tree restoration potential” | Bastin et al.',
      source: 'https://science.sciencemag.org/content/366/6463/eaay8108',
    },
    {
      name: 'Can trees solve the climate crisis? Unfortunately, No. Note on Bastin et al.’s erratum (2020) | Climate Interactive',
      source: 'https://www.climateinteractive.org/analysis/can-trees-solve-the-climate-crisis/',
    },
    {
      name: 'En-ROADS climate and policy simulation model | Climate Interactive',
      source: 'https://en-roads.climateinteractive.org/scenario.html?v=2.7.39',
    },
    {
      name: 'A New Hope: GEDI to Yield 3D Forest Carbon Map | NASA',
      source: 'https://www.nasa.gov/feature/goddard/2018/gedi-to-measure-earths-forests',
    },
    {
      name: 'Trillion Trees',
      source: 'https://trilliontrees.org/home',
    },
    {
      name: 'One trillion trees | World Economic Forum',
      source: 'https://www.1t.org/',
    },
    {
      name: 'Stepping up EU action to protect and restore the world’s forests',
      source:
        'https://ec.europa.eu/info/publications/eu-communication-2019-stepping-eu-action-protect-and-restore-worlds-forests_en',
    },
  ]

  return (
    <Layout header="Forests & carbon" title="forests-and-carbon" description={'Trees'}>
      <section>
        <h2>What role do forests play in regulating carbon dioxide levels?</h2>

        <p>
          We're going to pick up where we left off in the previous article, by looking at more detail on the article
          from the Crowther Lab,{' '}
          <Links.EL link={{ source: 'https://science.sciencemag.org/content/365/6448/76' }}>
            The global tree restoration potential
          </Links.EL>
          .
        </p>

        <dl>
          <dt>
            <strong>Leaves, branches, trunk</strong>
          </dt>
          <dd>17%</dd>
          <dt>
            <strong>Surface litter</strong>
          </dt>
          <dd>5%</dd>
          <dt>
            <strong>Dead wood</strong>
          </dt>
          <dd>1%</dd>
          <dt>
            <strong>Roots</strong>
          </dt>
          <dd>6%</dd>
          <dt>
            <strong>Soil</strong>
          </dt>
          <dd>72%</dd>
          <dt>Source</dt>
          <dd>
            <Links.EL
              link={{
                source:
                  'https://spiral.imperial.ac.uk:8443/bitstream/10044/1/80271/6/What%20role%20can%20forests%20play%20in%20tackling%20climate%20change.pdf',
              }}
            >
              What role can forests play in tackling climate change?
            </Links.EL>{' '}
            (PDF)
          </dd>
        </dl>

        <p>Something…</p>

        <blockquote cite="https://www.nature.com/articles/ncomms13428">
          <div>
            We report a recent pause in the growth rate of atmospheric CO2, and a decline in the fraction of
            anthropogenic emissions that remain in the atmosphere, despite increasing anthropogenic emissions.
          </div>
          <div>
            The pause in the atmospheric CO2 growth rate provides further evidence of the roles of CO2 fertilization and
            warming-induced respiration, and highlights the need to protect both existing carbon stocks and regions,
            where the sink is growing rapidly.
          </div>
        </blockquote>
        <cite>
          <Links.EL link={{ source: 'https://www.nature.com/articles/ncomms13428' }}>
            Recent pause in the growth rate of atmospheric <Formula>CO2</Formula>
          </Links.EL>
        </cite>
      </section>

      <section>
        <h2>References</h2>
        <Links.ExternalLinksList links={references} />
      </section>
    </Layout>
  )
}

export default Trees2
