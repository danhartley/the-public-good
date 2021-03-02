import { useRouter } from 'next/router';

import Link from 'next/link';
import Head from 'next/head';
import Carbonbadge from "react-carbonbadge";

import styles from 'components/layout/Layout.module.scss';

export default function Layout({
  children,
  title = 'This is the default title',
  description = 'Lesson retrieval',
  header = '',
  headerLink = '',
  disableNavigation = false,
  score = null
}) {

    const router = useRouter();

    const { provider, lesson, widget } = router.query;

    return (
        
            <div>
                <Head>
                    <title>The Public Good</title>

                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes"></meta>
                    <meta name="mobile-web-app-capable" content="yes"></meta>
                    <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                    
                    <meta name="description" content="The Public Good"></meta>
                    {/* <meta name="description" content={description}></meta> */}
                    {/* <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/50540494506_b25446840c_c.jpg"></meta> */}
                    <meta name="description" property="og:description" content="The Public Good"></meta>
                    <meta name="author" content="Daniel Hartley"></meta>
                    <meta name="release" content={ new Date().toDateString() }></meta>
                    
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />

                </Head>

                <div class={styles.container}>
                    <main class={styles.main}>
                    <div class={styles.header}>
                        <Link href={'/'}>
                            <a aria-label="Home page"><h1 class={styles.title}></h1></a>
                        </Link>
                    </div>

                    <p class={styles.description}>
                        no dilly-dallying
                    </p>
                    {children}  
                    </main>
                </div>

                <footer class={styles.footer}>
                    <div>© Daniel Hartley 2020. All rights reserved.</div>
                    <Carbonbadge darkMode={true} />
                    {/* <div>
                        <object data="/lighthouse.svg" type="image/svg+xml" alt="lighthouse performance badge, score 100%" aria-label="lighthouse performance badge, score 100%" />
                    </div> */}
                </footer>
            </div>
   
    )
}