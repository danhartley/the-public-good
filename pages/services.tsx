import Link from 'next/link'
import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'

const Services = () => {
  return (
    <Layout
      header="Client web services"
      title="Client web services"
      description={
        'Daniel Hartley will help you optimise an existing website, or build one that is fast, accessible, and sustainable.'
      }
    >
      <section>
        <p>
          You should contact me if you want to build a site from scratch, or review performance of an existing site,
          including its compliance with industry standards.
        </p>

        <h2>New sites</h2>
        <div>
          <span>The sites I build have the following characteristics:</span>
          <ul className={styles.dashedItemsList}>
            <li>
              <strong>Secure</strong>: opportunities for attack are minimised.
            </li>
            <li>
              <strong>Accessible</strong>: pages are available to all users, on any device.
            </li>
            <li>
              <strong>Fast</strong>: pages are assembled before they are requested so waiting time is reduced.
            </li>
            <li>
              <strong>Extensible</strong>: you can change, modify or adapt your site to changing needs.
            </li>
          </ul>
          <span>
            I follow <Links.EL link={{ source: 'https://jamstack.org/what-is-jamstack/' }}>Jamstack</Links.EL>{' '}
            principles.
          </span>
        </div>

        <h2>Existing sites</h2>
        <p>
          <span>I will audit an exisiting site with a view to improving performance and compliance.</span>
        </p>

        <h2>The sociable contract</h2>

        <p>
          The sociable contract outlines the principles upon which a website is built. It reflects the efforts of
          everyone who contributes to the project.
        </p>

        <div>
          I have created a <Links.IL link={{ source: 'web-development/sociable-contract' }}>sociable contract</Links.IL>{' '}
          for The Public Good.
        </div>

        <h2>Best practices</h2>
        <p>
          <span className={styles.internalLink}>
            I have selected and tested this development stack over the course of{' '}
            <Link href={'/projects'}>4 projects</Link>.
          </span>
        </p>
        <p>
          If you would like to discuss an idea or a project, please contact me at{' '}
          <Links.EL link={{ source: 'mailto:dbmhartley@protonmail.com' }}>Daniel Hartley</Links.EL>.
        </p>
        <p>
          For a complete picture of the web technologies I use, this is my{' '}
          <Links.IL link={{ source: 'personal/cv' }}>curriculum vitae</Links.IL>.
        </p>
      </section>
      <Links.RelatedLinks
        links={[{ value: 'web-development/sociable-contract', text: 'Sociable contract' }]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Services
