import { useContext, useEffect, useRef } from 'preact/hooks';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Head from 'next/head';
import ModeContext from 'components/contexts/ModeContext';
import Links from 'components/links/Links';
import styles from 'components/layout/Layout.module.scss';

let ts = 0, dbs = 0;

const Layout = ({
  children,
  title,
  description = 'The Public Good',
  image = 'https://live.staticflickr.com/65535/51087492836_0a43c2690e_n_d.jpg',
  header = null
}) => {
    
    const { mode, toggleMode } = useContext(ModeContext);

    const router = useRouter();

    const btnMode = useRef(null);
    const bytesTransferred = useRef(null);

    useEffect(() => {
        // run this code to reset to dark mode when page is refreshed and dark mode 
        // is the user's default. Downside is the screen flickers; comment out to revert to light mode,
        // ignoring user's previous preference
        const strMode = getComputedStyle(document.querySelector('#container')).getPropertyValue('--m');                
        if(strMode === 'light' && mode.isDark) {
            btnMode.current.click();
            setTimeout(() => {
                btnMode.current.click();
            });
        }
    });

    useEffect(() => {
        if (typeof window !== "undefined" && typeof window.performance !== "undefined") {
            const requests = Array.from(window.performance.getEntriesByType("resource")) as any[];    
            const reducer = (accumulator: number, currentValue: number) => {     
                return accumulator + Math.round((currentValue / 1000));
            };
            const transferSize = requests.map(r => r.transferSize || 0).reduce(reducer, 0);
            const bytes = transferSize - ts;
            ts = transferSize;
            if(bytesTransferred.current && !isNaN(bytes) && transferSize) {
                bytesTransferred.current.innerText = `${bytes}Kb transferred to load this page.`;
            }
        }
    }, []);

    return (        
        <div>
            <Head>
                <title>{ `The Public Good - ${title}` }</title>

                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes"></meta>
                <meta name="mobile-web-app-capable" content="yes"></meta>
                <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                <meta name="color-scheme" content="dark light"></meta>
                <meta name="image" property="og:image" content={image}></meta>
                <meta name="description" property="og:description" content={description}></meta>
                <meta name="author" content="Daniel Hartley"></meta>
                <meta name="release" content={new Date().toDateString()}></meta>
                <meta name="google-site-verification" content="lt3oOwZJMgC0jpfStGVplPtKRMvoiNjVQyq5Mhkgeew" />
                
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <div id="container" style={mode.style as any} class={styles.container}>                
                <header role="banner" class={styles.header}>
                    <Link href={'/'}>
                        <a class={styles.title} aria-label="Home page">
                            <span role="navigation">The Public Good</span>
                            <span>This website will not empower you.</span>
                        </a>
                    </Link>
                    <p class={styles.description}>                            
                        <button aria-label="Toggle the website colour scheme: between light and dark" class={styles.mode} ref={btnMode} onClick={() => toggleMode()}>{mode.isDark ? <span class={styles.light}></span> : <span class={styles.dark}></span>}</button>
                    </p>
                </header>
                <main class={styles.main}>               
                    { header ? <p class={styles.h1}><div><h1>{header}</h1></div></p> : null }
                    {children}
                    { router.pathname === '/' ? null : <nav><Links.Home textAlign={'right'}></Links.Home></nav> }
                </main>
                <footer class={styles.footer}>
                    <div><span>© <a href="mailto:dbmhartley@protonmail.com">Daniel Hartley</a> 2021. All rights reserved.</span></div>
                    <div class={styles.externalList}><a href="https://www.linkedin.com/in/danhartley/">LinkedIn</a> | <a href="https://danhartley.github.io/snapdragon-redux/wiki/">CV</a></div>
                    <div ref={bytesTransferred}></div>
                </footer>
            </div>
        </div>
    )
};

export default Layout;