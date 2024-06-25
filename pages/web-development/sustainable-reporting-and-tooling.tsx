import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import Published from 'components/published/published'
import Top from 'components/top/top'
import styles from 'pages/pages.module.scss'

const SustainableReportingAndTooling = () => {
  const externalLinks = [
    {
      name: 'Web Sustainability Guidelines (WSG) 1.0',
      source: 'https://w3c.github.io/sustyweb/',
    },
    {
      name: 'Sustainable Tooling And Reporting (STAR) 1.0',
      source: 'https://w3c.github.io/sustyweb/star.html#user-experience-design',
    },
    {
      name: 'Web Content Accessibility Guidelines (WCAG)',
      source: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
    },
    {
      name: 'Web accessibility in mind',
      source: 'https://webaim.org/',
    },
    {
      name: 'The PG: STAR templates',
      source: 'https://docs.google.com/spreadsheets/d/1JqPELIRe0-Jvxi2XOdpZLKrJvO5vNbBD6jeHxtQVkKw/edit?usp=sharing',
    },
    {
      name: 'The PG: accessibility checklist',
      source: 'https://docs.google.com/spreadsheets/d/1ybE29NGLa1SrhEqib8WiF14uCV-ZwIp8aLcvvUM2gME/edit?usp=sharing',
    },
    {
      name: 'The PG: website metrics',
      source: 'https://docs.google.com/spreadsheets/d/1zNBeu9C-I4gay-EHwZJ328gnv1KT8NVAZ8zgnBYGvDo/edit?usp=sharing',
    },
    {
      name: 'Web Sustainability Guidelines | Sustainable Web Design',
      source: 'https://sustainablewebdesign.org/guidelines/',
    },
    {
      name: 'Introducing Digital Carbon Ratings | Sustainable Web Design',
      source: 'https://sustainablewebdesign.org/digital-carbon-ratings/',
    },
    {
      name: 'Estimating Digital Emissions | Sustainable Web Design',
      source: 'https://sustainablewebdesign.org/estimating-digital-emissions/',
    },
    {
      name: 'Cleaner Web',
      source: 'https://cleaner-web.com/',
    },
    {
      name: 'WebPageTest',
      source: 'https://www.webpagetest.org/',
    },
    {
      name: 'The HTTP Archive',
      source: 'https://httparchive.org/',
    },
    {
      name: 'Information Architecture vs. Sitemaps: What’s the Difference?',
      source: 'https://www.nngroup.com/articles/information-architecture-sitemaps/',
    },
  ]

  return (
    <Layout
      header="Sustainable Reporting And Tooling"
      rt="2 to 3"
      title="Sustainable web development"
      description={
        'Sustainable Reporting And Tooling: an introduction to Web Sustainability Guidelines and Sustainable Tooling And Reporting.'
      }
      image="https://live.staticflickr.com/65535/51143928462_2fec2d283e_z_d.jpg"
    >
      <section>
        <h2>Assessing a website for sustainability reveals more than its environmental impact.</h2>

        <p>
          Websites are unregulated in regards to the resources they use. And the numbers as reported by{' '}
          <Links.EL link={{ source: 'https://httparchive.org/' }}>The HTTP Archive</Links.EL> are up again.
        </p>

        <p>But we don't have to stand idly by.</p>

        <p>
          Sustainability has a lot in common with accessibility. The Web Sustainability Guidelines (WSG) are analogous
          to the Web Content Accessibility Guidelines (WCAG) and there is plenty of common ground between the two. The
          intention is that the{' '}
          <abbr class={styles.abbr} title="Web Sustainability Guidelines">
            WSG
          </abbr>{' '}
          will follow a similar path to acceptance and adoption supported by tooling and best practices. Websites will
          minimise their:
        </p>

        <blockquote cite="https://w3c.github.io/sustyweb/">
          <p>
            Environmental impact through a mixture of user-centered design, performant web development, renewable
            infrastructure, sustainable business strategy, and (with metrics) various combinations of those mentioned.
          </p>
          <p>
            Following these guidelines will often make Web content more accessible, usable, and performant as a
            by-product.
          </p>
        </blockquote>
        <cite>
          <Links.EL
            link={{
              source: 'https://w3c.github.io/sustyweb/',
            }}
          >
            Web Sustainability Guidelines (WSG) 1.0
          </Links.EL>{' '}
        </cite>
        <h3>Sustainable Tooling And Reporting (STAR)</h3>

        <p>Sustainable Tooling And Reporting (STAR) 1.0 is a supplement to the guidelines which provides:</p>
        <ul>
          <li>Implementation advice</li>
          <li>An evaluation methodology</li>
          <li>A categorised series of techniques</li>
          <li>A test suite</li>
        </ul>

        <p>
          <abbr class={styles.abbr} title="Sustainable Tooling And Reporting">
            STAR
          </abbr>{' '}
          has over 150 items for evaluation and it requires a painstaking review of a website or app.
        </p>

        <p>
          To help you get started, I've created a set of{' '}
          <Links.EL
            link={{
              source:
                'https://docs.google.com/spreadsheets/d/1JqPELIRe0-Jvxi2XOdpZLKrJvO5vNbBD6jeHxtQVkKw/edit?usp=sharing',
            }}
          >
            STAR templates
          </Links.EL>
          .
        </p>

        <p>Tools and reporting are broken down into 4 sections:</p>
        <ul>
          <li>User-Experience Design</li>
          <li>Web Development</li>
          <li>Hosting, Infrastructure and Systems</li>
          <li>Business Strategy and Product Management</li>
        </ul>

        <p>
          Every section is relevant to developers. A review of your site's sustainability credentials forces a
          re-examination of how your site works, what it offers and for whom.
        </p>

        <h3>Don't hide in the IDE</h3>
        <p>
          It is important that developers and designers are among the people using production code running in the
          browser. There are plenty of{' '}
          <Links.EL
            link={{
              source:
                'https://docs.google.com/spreadsheets/d/1zNBeu9C-I4gay-EHwZJ328gnv1KT8NVAZ8zgnBYGvDo/edit?usp=sharing',
            }}
          >
            tools
          </Links.EL>{' '}
          for measuring website performance, emissions and accessibility. It is equally important to use the site or app
          as others see it. Create accounts and use them as fully and as realistically as possible.
        </p>

        <p>
          Spending time looking at code running in the browser is critical because current practice often focuses on
          software or code architecture at the expense of Information Architecture (IA).
        </p>

        <p>
          It is essential to have an{' '}
          <abbr class={styles.abbr} title="Information Architecture">
            IA
          </abbr>{' '}
          model or design and to revisit it frequently. A comparison of your{' '}
          <abbr class={styles.abbr} title="Information Architecture">
            IA
          </abbr>
          , your software architecture, and the living app is a good subject for a{' '}
          <Links.IL link={{ source: 'web-development/practice/meetings' }}>long meeting</Links.IL>.
        </p>

        <Top></Top>
      </section>

      <Published strDate="Mon 27 May 2024"></Published>

      <section>
        <h2>Links to external references</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section>

      <Links.RelatedLinks
        links={[
          {
            value: 'web-development/sustainable-reporting-emissions',
            text: 'Sustainable Reporting - Emissions',
          },
          {
            value: 'web-development/sustainable-practices',
            text: 'Sustainable practices',
          },
          {
            value: 'web-development/following-the-rules-to-a-well-structured-web-page',
            text: 'Following the rules to a well-structured web page',
          },
          {
            value: 'web-development/for-the-love-of-hyperlinks',
            text: 'For the love of hyperlinks',
          },
          {
            value: 'web-development/for-the-love-of-urls',
            text: 'For the love of urls',
          },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default SustainableReportingAndTooling
