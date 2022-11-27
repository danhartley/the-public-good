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
      header="The sociable contract"
      title="Web development | the sociable contract"
      description={
        'Where Daniel Hartley introduces the sociable contract; a set of promises intended to keep this site user-friendly.'
      }
      image="https://live.staticflickr.com/65535/51359273974_848606c323_c_d.jpg"
    >
      <section>
        <p>Where I introduce the sociable contract; a set of promises intended to keep this site user-friendly.</p>
        <p>
          Its purpose is to meet these{' '}
          <Links.IL link={{ source: 'web-development/sociable-contract-aims' }}>aims and aspirations</Links.IL>.
        </p>

        <h2>The Contract</h2>
        <p>
          Between <em>The Public Good</em> & <em>the World</em>.
        </p>
        <p>
          <h3>Terms</h3>

          <ul class={styles.dashedItemsList}>
            <li>
              <span>
                The site satisfies Web Content Accessibility Guidelines{' '}
                <Links.EL link={{ source: 'https://webaim.org/resources/contrastchecker/' }}>WCAG Level AAA</Links.EL>{' '}
                in light mode; WCAG Level AA in dark mode, and Level AA for larger text.
              </span>
              <div>
                <em>
                  <Links.EL link={{ source: 'https://wave.webaim.org/report#/https://www.the-public-good.com/' }}>
                    Check
                  </Links.EL>
                  &nbsp;if this is true.
                </em>
              </div>
            </li>
            <li>
              The site scores at least 95% for Performance, Accessibility, Best Practices and SEO on{' '}
              <Links.EL link={{ source: 'https://developers.google.com/web/tools/lighthouse' }}>Lighthouse</Links.EL>,
              on both Desktop and Mobile.
              <div>
                <em>
                  Find out how to use <Links.IL link={{ source: 'performance#howTo' }}>Lighthouse</Links.IL> to check
                  these scores.
                </em>
              </div>
            </li>
            <li>
              The site scores 'Cleaner than 85% of pages tested' using{' '}
              <Links.EL link={{ source: 'https://www.websitecarbon.com/' }}>Website Carbon</Links.EL>.
            </li>
            <li>The site contains no advertising.</li>
            <li>The site does not use cookies to track you.</li>
            <li>It does use local storage variable 'is-dark-mode' to store your preference for light or dark mode.</li>
            <li>
              Supports IE11 and all modern browsers (Edge, Firefox, Chrome, Safari, Opera, et al) based on{' '}
              <Links.EL link={{ source: 'https://nextjs.org/docs/basic-features/supported-browsers-features' }}>
                Next.js support
              </Links.EL>
            </li>
            <li>Content or pages that are freely accessible will remain freely accessible in perpetuity.</li>
          </ul>

          <h3>Fulfilment</h3>

          <ul class={styles.dashedItemsList}>
            <li>Any breach or contravention of the terms of this contract will be put right in a timely fashion.</li>
            <li>
              Breaches or contraventions of the terms of this contract, including their length and severity, will be
              published here with the date of the breach and the date when it was addressed.
            </li>
            <li>
              Reasonable criticism relating to the terms of this contract will be addressed and published here with the
              date of the criticism and the date when it was addressed.
            </li>
            <li>
              Any changes to this contract will be documented so that the original wording is maintained, and will be
              accompanied by an explanation of the reasons for the change.
            </li>
          </ul>
        </p>

        <Top></Top>
      </section>

      <section>
        <h2>External Links</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section>
      <Links.RelatedLinks
        links={[
          { value: 'services', text: 'Services' },
          { value: 'web-development/sociable-contract-aims', text: 'The aims of the sociable contract' },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Contract
