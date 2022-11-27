import Layout from 'components/layout/layout'
import Links from 'components/links/Links'
import BytesPerPage from 'components/dashboard/bytes-per-page'
import RequestsPerPage from 'components/dashboard/requests-per-page'

import styles from 'components/dashboard/Dashboard.module.scss'

const Dashboard = () => {
  return (
    <div class={styles.wrapper}>
      <Layout header={'Dashboard'} title={'Dashboard'} description={'Dashboard'}>
        <p>As you navigate this website, data are collected on the performance of each page (including this one).</p>
        <h2>Data</h2>
        <p>
          <div>Data are derived using the window.performance API.</div>
          <div>
            Median page weight and requests are taken from the{' '}
            <Links.EL link={{ source: 'https://almanac.httparchive.org/en/2019/page-weight#introduction' }}>
              HTTP Archive Page Weight
            </Links.EL>{' '}
            and <Links.EL link={{ source: 'https://whatdoesmysitecost.com/' }}>What Does My Site Cost?</Links.EL>
          </div>
        </p>
        <h2>Technology stack</h2>
        <p>
          The stack used for this website can be verified at{' '}
          <Links.EL link={{ source: 'https://www.wappalyzer.com/lookup/the-public-good.com' }}>Wappalyzer</Links.EL>{' '}
          (registration required).
        </p>
        <h2>Kilobytes transferred per page</h2>
        <BytesPerPage />
        <h2>Requests per page</h2>
        <RequestsPerPage />
      </Layout>
    </div>
  )
}

export default Dashboard
