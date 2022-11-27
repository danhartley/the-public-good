import Links from 'components/links/Links'

import styles from 'pages/pages.module.scss'

const Appendix = () => {
  const links = [
    {
      name: 'Writing Pledges for Better Outcomes',
      source: 'https://responsibletech.work/blog/2022/3/1/pledge-works-writing-pledges-for-better-outcomes/',
    },
    {
      name: 'Pledge Works Tools',
      source: 'https://responsibletech.work/tools/development/pledge-works/',
    },
    {
      name: 'Pledge Toolbox',
      source: 'https://responsibletech.work/tools/business/pledge-toolbox/',
    },
  ]

  return (
    <section class={styles.appendix}>
      <h3>Appendix: Pledge Works Tools & Assets</h3>
      <div>
        <strong>Pledge Works</strong> is a <strong>ResponsibleTech.Work</strong> collaboration.
        <div>
          <Links.ExternalLinksList links={links}></Links.ExternalLinksList>
        </div>
      </div>
    </section>
  )
}

export default Appendix
