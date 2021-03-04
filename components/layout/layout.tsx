import { useRouter } from 'next/router';

import Link from 'next/link';
import Head from 'next/head';
import { Links } from 'components/links/Links';

import styles from 'components/layout/Layout.module.scss';

export default function Layout({
  children,
  title = 'The Public Good',
  description = 'The Public Good'
}) {
    const router = useRouter();
    return (        
            <div>
                <Head>
                    <title>{ title }</title>

                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes"></meta>
                    <meta name="mobile-web-app-capable" content="yes"></meta>
                    <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                    
                    <meta name="description" content={description}></meta>
                    {/* <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/50540494506_b25446840c_c.jpg"></meta> */}
                    <meta name="description" property="og:description" content="The Public Good"></meta>
                    <meta name="author" content="Daniel Hartley"></meta>
                    <meta name="release" content={ new Date().toDateString() }></meta>
                    
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href="/manifest.json" />

                </Head>
                <div class={styles.container}>
                    <main class={styles.main}>
                        <header class={styles.header}>
                            <Link href={'/'}>
                                <a aria-label="Home page">
                                    <h1 role="navigation" class={styles.title}>The Public Good</h1>
                                </a>
                            </Link>
                            <p class={styles.description}>
                                Making websites with small footprints.
                            </p>
                        </header>
                        {children}
                        { router.pathname === '/' ? null : <nav><Links.Home textAlign={'right'}></Links.Home></nav> }
                    </main>
                    <footer class={styles.footer}>
                        <div>© Daniel Hartley 2021. All rights reserved.</div>
                        <div class={styles.externalList}><a href="https://www.linkedin.com/in/danhartley/">LinkedIn</a></div>
                    </footer>
                </div>
            </div>
    )
}