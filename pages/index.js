import Head from 'next/head';
import styles from 'styles/Home.module.scss';
import Carbonbadge from "react-carbonbadge"

export default function Home() {
  return (
    <div class={styles.container}>
      <Head>
        <title>The Public Good</title>

        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes"></meta>
		<meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        
        <meta name="description" content="The Public Good"></meta>
        {/* <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/50540494506_b25446840c_c.jpg"></meta> */}
        <meta name="description" property="og:description" content="The Public Good"></meta>
        <meta name="author" content="Daniel Hartley"></meta>
        <meta name="release" content={ new Date()}></meta>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

      </Head>

      <main class={styles.main}>
        <h1 class={styles.title}>
          
        </h1>

        <p class={styles.description}>
            no dilly-dallying
        </p>

        <div class={styles.grid}>
          <a href="https://nextjs.org/docs" class={styles.card}>
            <h2>Fast websites are a good thing</h2>
            <p>Having a slow connection, or limited data, is not unusual.</p>
            <p>Data can be < a href="https://ourworldindata.org/grapher/cost-of-1gb-of-mobile-data?region=World"> expensive</a> and therefore limited; our device may be low on battery.</p>
            <p>The world's resources are finite and precious.</p>
            
          </a>

          <a href="https://nextjs.org/learn" class={styles.card}>
            <h2>We all need help sometimes</h2>
            <p>There are <a href="https://developers.google.com/web/fundamentals/accessibility">all sorts of reasons</a> why any one of us may have trouble accessing a website some, or all, of the time.</p>
          </a>

          <a href="https://nextjs.org/learn" class={styles.card}>
            <h2>You are not alone</h2>
            <p>Get to the point</p>
          </a>

        </div>
      </main>

      <footer class={styles.footer}>
        <Carbonbadge darkMode={true} />
        {/* <div>
            <object data="/lighthouse.svg" type="image/svg+xml" alt="lighthouse performance badge, score 100%" aria-label="lighthouse performance badge, score 100%" />
        </div> */}
      </footer>
    </div>
  )
}
