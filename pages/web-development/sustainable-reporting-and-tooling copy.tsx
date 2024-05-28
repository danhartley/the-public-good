import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import Published from 'components/published/published'
import Top from 'components/top/top'
import Accordion from 'components/accordion/accordion'
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
  ]

  return (
    <Layout
      header="Sustainable Reporting And Tooling"
      rt="3 to 4"
      title="Sustainable web development"
      description={
        'Sustainable Reporting And Tooling: an introduction to Web Sustainability Guidelines and Sustainable Tooling And Reporting.'
      }
      image="https://live.staticflickr.com/65535/51143928462_2fec2d283e_z_d.jpg"
    >
      <section>
        <h2>
          Sustainable development is about more than saving the planet. 
        </h2>

        <p>A new product or feature should have a net benefit. For example, this article has a net benefit if it helps developers reduce the resources they use by more than the resources it took to create, host, read, etc.</p>

        <p>And it's my responsibility to write, create, host, etc. the article using the fewest possible resources.</p>

        <p>What's more difficult to work out is whether there is a resource budget for any of this. There is currently no world budget for digital resources.</p>

        <p>Sustainability has a lot in common with other good practices: performance, accessibility, equality. Improving one is rarely to the detriment of the others.</p>

        <p>But be careful. There is a vogue for building low-fi websites. People have a choice: those on lower powered devices or with poor connectivity, or a functioning conscience, can opt to view the low-fi version of a website.</p>

        <p>Unfortunately, this means two websites are built and the default is usually the bad (hi-fi) version. The simple answer is to do away with the hi-fi version. Like the <Links.EL link={{source: 'https://solar.lowtechmagazine.com/', label:"Low Tech Magazine"}}>Low Tech Magazine</Links.EL>.</p>

        <p>Low-fi alternate websites do not represent a net sustainability benefit. But we can learn from how they are built.</p>

        <h3>Web Sustainability Guidelines</h3>

        <p>There is further help on the way in the form of the Web Sustainability Guidelines (WSG). In addition to improving sustainability,</p>

        <blockquote cite='https://w3c.github.io/sustyweb/'>
        Following these guidelines will often make Web content more accessible, usable, and performant as a by-product.
        </blockquote>
        <cite>
          <Links.EL
            link={{
              source:
                'https://w3c.github.io/sustyweb/',
            }}
          >
            Web Sustainability Guidelines (WSG) 1.0
          </Links.EL>{' '}
        </cite>

        <Accordion header="Web Content Accessibility Guidelines (WCAG)">
          <aside>
            <p>The <abbr class={styles.abbr} title="Web Sustainability Guidelines">WSG</abbr> are comparable to the Web Content Accessibility Guidelines (WCAG) and are, in part, modelled on them. Many companies already adhere to <abbr class={styles.abbr} title="Web Content Accessibility Guidelines">WCAG</abbr>, typically 2.1 or the most recent <Links.EL link={{source:'https://www.w3.org/TR/WCAG22/'}}>2.2</Links.EL>. <Links.EL link={{source:'https://www.w3.org/TR/wcag-3.0/'}}>3.0</Links.EL> is in draft.</p>
          </aside>
        </Accordion>

        <p>
          Sustainable Tooling And Reporting (STAR) 1.0 is a supplement to the guidelines which provides:
        </p>
        <ul>
            <li>Implementation advice</li>
            <li>An evaluation methodology</li>
            <li>A categorised series of techniques</li>
            <li>A test suite</li>
          </ul>

        <p>To help you get started, I've created a set of <Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1JqPELIRe0-Jvxi2XOdpZLKrJvO5vNbBD6jeHxtQVkKw/edit?usp=sharing'}}>STAR templates</Links.EL>.</p>

        <p><abbr class={styles.abbr} title="Sustainable Tooling And Reporting">STAR</abbr> has over 150 items for evaluation and it requires a painstaking review of a website or app.</p>

        <p>Tools and reporting are broken down into 4 sections:</p>
        <ul>
          <li>User-Experience Design</li>
          <li>Web Development</li>
          <li>Hosting, Infrastructure and Systems</li>
          <li>Business Strategy and Product Management</li>
        </ul>

        <p>You can divide this work among your team how you please, but I recommend designers and developers look at every section. If you cannot <Links.IL link={{ source:'web-development/practice/titles'}}>change your title</Links.IL> to product designer or product engineer, grant yourself an infinite remit and the power to do what you think is important.</p>

        <p>An attractive and digestible presentation of the <abbr class={styles.abbr} title="Web Sustainability Guidelines">WSG</abbr> is available from <Links.EL link={{ source:'https://sustainablewebdesign.org/guidelines/' }}>Sustainable Web Design</Links.EL>.</p>
      
        <h3>Don't be completely evil</h3>

        <p>The value of a website is often (almost always) missing from sustainability reports.  But what if the most sustainable, and therefore the best, thing to do is nothing? I argued this article could have a net benefit if it helps developers reduce the resources they use. But I was prediposed to that line of reasoning. I had already decided to write the article.</p>

        <p>This dilemma is present in every interaction we have with the world and we often shy away from it. But in your work you have the time and opportunity to critique your actions and logic. In addition to professional competency you must become a <Links.IL link={{source:'web-development/practice/domains'}}>domain expert</Links.IL> . Then you will be able to answer the most important question: Is this site/feature/article necessary and for whom?</p>

        <p>With your justification out of the way, you are free to move on to building whatever you want to build sustainably. If that is a social media website with infinite scroll or a video site that plays content without asking, you didn't give an honest answer to the question.</p>

        <h3>Don't hide in the IDE</h3>
        <p>It is important that developers and designers are among the people using the production code running in the browser. There are plenty of <Links.EL link={{source:'https://docs.google.com/spreadsheets/d/1zNBeu9C-I4gay-EHwZJ328gnv1KT8NVAZ8zgnBYGvDo/edit?usp=sharing'}}>tools</Links.EL> for measuring website performance, emissions and accessibility. It is equally important to use the site or app as others see it. Create accounts and use them as fully and as realistically as possible.</p>

        <p>Spending time looking at code running in the browser is especially important because current practice often focuses on software or code architecture at the expense of Information Architecture (IA).</p>

        <p>And if you practice Continuous Integration (CI) or Continuous Deployment (CD), or both, ask whether it is necessary. The running code should be your focus, not your tech stack, developer tools, or processes.</p>

        <p>Domain architecture is more important than your choice or framework or library. It is essential to have an <abbr class={styles.abbr} title="Information Architecture">IA</abbr> and to revisit it frequently. A comparison of your <abbr class={styles.abbr} title="Information Architecture">IA</abbr>, your software architecture, and the living app is a good subject for a <Links.IL link={{source:'web-development/practice/meetings'}}>long meeting</Links.IL>.</p>

        <h3>What I learnt this week</h3>

        <p>CSS now has <Links.EL link={{source:'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting'}}>nesting</Links.EL>. It has done since last year. That's what happens when you rely on frameworks. Can we stop using preprocessors?</p>

        <p>I used the <Links.EL link={{source:'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr'}}>abbreviation element</Links.EL> in this article for the first time. This is not new but reading all those W3C guidelines made me realise what I was missing.</p>
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
            value: 'web-development/sustainable-practices',
            text: 'Sustainable practices',
          },
          {
            value: 'web-development/following-the-rules-to-a-well-structured-web-page',
            text: 'Following the rules to a well-structured web page',
          },
          { 
            value: 'web-development/for-the-love-of-hyperlinks', 
            text: 'For the love of hyperlinks' 
          },
          { 
            value: 'web-development/for-the-love-of-urls', 
            text: 'For the love of urls' 
          }
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default SustainableReportingAndTooling
