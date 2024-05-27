import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import Published from 'components/published/published'
import Top from 'components/top/top'
import styles from 'pages/pages.module.scss'

const URLs = () => {
  const externalLinks = [
    {
      name: '',
      source: '',
    },
  ]

  return (
    <Layout
      header="For the love of URLs"
      rt="1"
      title="Web development | For the love of URLs"
      description={
        'Considered, semantic or pretty URLs create a good impression, carry a lot of information and are ready-made to bookmark and share.'
      }
      image="https://live.staticflickr.com/65535/51143928462_2fec2d283e_z_d.jpg"
    >
      <section>
        <h2>
          URLs are at the frontline of information architecture.
        </h2>

        <p>URLs are often the first contact someone has with your website.</p>

        <p>A thoughtfully constructed semantic URL:</p>

        <ul>
          <li>Is easily read and interpreted</li>
          <li>Lets people know what to expect (and creates expectations)</li>
          <li>Lets people know whether a site is trustworthy (from the protocol and domain)</li>
          <li>Is easily converted e.g. to speech</li>
          <li>Hints at other content, resources or functions</li>
          <li>Saves time and resources lost through navigation</li>
          <li>Can be bookmarked</li>
          <li>Can be shared</li>
          <li>Can be edited or hacked</li>
          <li>Enables people's preferences to be captured and analysed</li>
          <li>Helps bots discover pages (either directly or via a sitemap)</li>
        </ul>

        <Top></Top>
      </section>

      <Published strDate="Sun 26 May 2024"></Published>

      <section>
        <h2>Links to external references</h2>
        <Links.ExternalLinksList links={externalLinks} />
      </section>

      <Links.RelatedLinks
        links={[
          {
            value: 'web-development/following-the-rules-to-a-well-structured-web-page',
            text: 'Following the rules to a well-structured web page',
          },
          { 
            value: 'web-development/for-the-love-of-hyperlinks', 
            text: 'For the love of hyperlinks' 
          },
          { 
            value: 'web-development/sustainable-reporting-and-tooling', 
            text: 'Sustainable reporting and tooling' 
          },
        ]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default URLs
