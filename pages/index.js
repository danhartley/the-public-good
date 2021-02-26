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
          The Public Good
        </h1>

        <p class={styles.description}>
            stop wasting time
        </p>

        <p class={styles.description}>
            this site will not empower you to do anything
        </p>

        <div class={styles.grid}>
          <a href="https://nextjs.org/docs" class={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" class={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
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
