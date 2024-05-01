import Links from 'components/links/Links'
import Layout from 'components/layout/layout'
import styles from 'pages/pages.module.scss'

const Meetings = () => {
  return (
    <Layout header="meetings" title="" description={'meetings'}>
      <section>
        <h2>In praise of long meetings</h2>
        <p>A long meeting should last at least two hours.</p>
        <p>A colleague and I discovered this by chance while we were collaborating on an open source project. Our meetings were long because we only had time to catch up once a week and because we had a lot to get through.</p>
        <p>After a while we noticed our meetings fitted a pattern.</p>
        <p>We would both run through our thoughts while the other listened. About an hour into the meeting, and after several shorter exchanges, we were up to speed on the other's thinking.</p>
        <p>Our ideas were now common property and we were free to criticise them without prejudice. We'd build up and knock down new solutions. No sooner than we reached a consensus we'd find fault with it.</p>
        <p>We were usually tired and hungry by this point. But after several meetings, we noticed that something always happened as we approached the end of the second hour. A rush of new ideas invariably tumbled us into a new and better plan.</p>
        <p>We repeated this process every week until the project, <Links.EL link={{source:'https://responsibletech.work/tools/development/pledge-works/', text: 'A practical tool that invites you to write pledges for better outcomes as part of your existing product development processes.'}}>Pledge Works</Links.EL>, was finished. Having multiple long meetings was key to the success of the project.</p>
        <p>Other benefits of long meetings:</p>
        <ul>
          <li>Job titles become less important</li>
          <li>Everyone gets a chance to speak at length</li>
          <li>Solutions bubble up as workable ideas replace opinions</li>
          <li>Consensus is derived not imposed</li>
          <li>New thinking emerges</li>          
          <li>Collaboration improves between a fixed group of people</li>
        </ul>      
        <p>We've had purposefully long or open ended meetings with others with similiar positive results. We know this approach works with three people; it probably won't work well with more than five - everyone has to put their cards on the table before they're free to listen to what others have to say.</p>
        <p class={styles.medium}>NB There are times when short meetings are appropriate.</p>
      </section>      
      <Links.RelatedLinks
        links={[{ value: 'web-development/its-the-jobs-that-got-small', text: 'It\'s the jobs that got small' }]}
      ></Links.RelatedLinks>
    </Layout>
  )
}

export default Meetings
