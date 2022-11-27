import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import Top from 'components/top/top'
import styles from 'pages/pages.module.scss'

const Contract = () => {
  const externalLinks = [
    {
      name: 'Contract for the Web',
      source: 'https://contractfortheweb.org/',
    },
    {
      name: 'Smashing Magazine | Using Ethics In Web Design 2018',
      source: 'https://www.smashingmagazine.com/2018/03/using-ethics-in-web-design/',
    },
    {
      name: 'European Digital Rights (EDRi) | EthicalWebDev – guide for ethical website development and maintenance (PDF)',
      source: 'https://edri.org/wp-content/uploads/2020/11/ethical_web_dev_web.pdf',
    },
    {
      name: 'PRISM BREAK',
      source: 'https://prism-break.org/en/',
    },
  ]

  return (
    <Layout
      header="The aims of the sociable contract"
      title="Web development | the aims of the sociable contract"
      description={
        'Where Daniel Hartley introduces the sociable contract; a set of promises intended to keep this site user-friendly.'
      }
    >
      <section>
        <h2>Aims</h2>
        <p>
          The principle aim of the contract is to commit the developer and the site owner to a set of principles that
          define the user experience.
        </p>
        <p>The contract is transparent, and available both to the creators of the site, and those who use it.</p>
        <p>
          It captures certain best practices but it does not specifiy how they should be achieved. For example, the
          development team could enforce performance targets by making new releases contingent on meeting criteria such
          as page size.
        </p>
        <p>
          It is my intention to conform to the guiding principles for companies laid out by the{' '}
          <Links.EL link={{ source: 'https://contractfortheweb.org/' }}>Contract for the Web</Links.EL>:{' '}
          <q>
            Make the internet affordable and accessible to everyone, so that no one is excluded from using and shaping
            the Web.
          </q>
        </p>
        <h2>Aspirations</h2>
        <p>
          The articles on this site are hard-coded. That is reasonable for a personal site but if I were to use it as a
          starting point for another site, I would create custom widgets for layout elements that extend standard HTML.
          The most important reason for doing this is that the client becomes independent of the developer. This would
          allow for articles in other languages.
        </p>
        <h3>Language support</h3>
        <p>
          Websites do not support every language. The reasons for this vary but no site has all of its content available
          in every known language.
        </p>
        <p>
          There is a difference, however, between not supporting a language, and precluding support for that language.
          This site appears only in English and whilst there is no demand for any of its articles to be translated, I
          would like that possibility to exist. Moreover, the construction of the site is intended to be replicated, or
          followed, in building other sites which may be require support for multiple languages.
        </p>
        <p>
          This aspiration is contained in one of the principles for companies defined by the Contract for the Web
          (emphasis is mine):
        </p>
        <blockquote cite="https://contractfortheweb.org/principles/principle-4-make-the-internet-affordable-and-accessible-to-everyone/">
          Ensuring user interfaces and customer service are effective, and offered in <em>languages</em> and mediums
          that are accessible to minorities and people with disabilities, including by respecting universal acceptance
          principles.
        </blockquote>
        <cite>
          <Links.EL
            link={{
              source:
                'https://contractfortheweb.org/principles/principle-4-make-the-internet-affordable-and-accessible-to-everyone/',
            }}
          >
            Make the internet affordable and accessible to everyone
          </Links.EL>{' '}
        </cite>

        <Top></Top>
      </section>

      <section>
        <h2>External Links</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section>
      <Links.RelatedLinks
        links={[{ value: 'web-development/sociable-contract', text: 'The sociable contract' }]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Contract
