import { useContext, useEffect, useRef } from 'preact/hooks';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Head from 'next/head';
import ModeContext from 'components/contexts/ModeContext';
import { Links } from 'components/links/Links';
import styles from 'components/layout/Layout.module.scss';

const Layout = ({
  children,
  title = 'The Public Good',
  description = 'The Public Good'
}) => {
    
    const { mode, toggleMode } = useContext(ModeContext);

    const router = useRouter();

    const btnMode = useRef(null);

    useEffect(() => {
        // run this code to reset to light mode when page is refreshed and light mode 
        // is the user's default. Downside is the screen flickers; comment out to revert to dark mode,
        // ignoring user's previous preference
        const strMode = getComputedStyle(document.querySelector('#container')).getPropertyValue('--m');                
        if(strMode === 'dark' && !mode.isDark) {
            console.log(strMode);
            console.log(mode.isDark);            
            btnMode.current.click();
            setTimeout(() => {
                btnMode.current.click();
            });
        }
    });

    return (        
        <div>
            <Head>
                <title>{ title }</title>

                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes"></meta>
                <meta name="mobile-web-app-capable" content="yes"></meta>
                <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                <meta name="color-scheme" content="dark light"></meta>
                <meta name="description" content={description}></meta>
                {/* <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/50540494506_b25446840c_c.jpg"></meta> */}
                <meta name="description" property="og:description" content="The Public Good"></meta>
                <meta name="author" content="Daniel Hartley"></meta>
                <meta name="release" content={ new Date().toDateString() }></meta>
                
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <div id="container" style={mode.style as any} class={styles.container}>                
                <main class={styles.main}>
                    <header class={styles.header}>
                        <Link href={'/'}>
                            <a aria-label="Home page">
                                <h1 role="navigation" class={styles.title}>The Public Good</h1>
                            </a>
                        </Link>
                        <p class={styles.description}>
                            <span>Making websites with small footprints.</span>
                            <button class={styles.mode} ref={btnMode} onClick={() => toggleMode()}>{mode.isDark ? <span class={styles.light}></span> : <span class={styles.dark}></span>}</button>
                        </p>
                    </header>
                    {children}
                    { router.pathname === '/' ? null : <nav><Links.Home textAlign={'right'}></Links.Home></nav> }
                </main>
                <footer class={styles.footer}>
                    <div><span>© <a href="mailto:dbmhartley@protonmail.com">Daniel Hartley</a> 2021. All rights reserved.</span></div>
                    <div class={styles.externalList}><a href="https://www.linkedin.com/in/danhartley/">LinkedIn</a></div>
                </footer>
            </div>                
        </div>
    )
};

export default Layout;