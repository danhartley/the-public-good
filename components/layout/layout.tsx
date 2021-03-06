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
  image = 'https://inaturalist-open-data.s3.amazonaws.com/photos/97465767/medium.jpeg?1601194277',
  header = null,
  rt = ''
}) => {
    
    const { mode, toggleMode } = useContext(ModeContext);

    const router = useRouter();

    const btnMode = useRef(null) as any;
    const bytesTransferred = useRef(null) as any;

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
                <title>{title}</title>

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
                <header>

                    <div class={styles.skiptocontent}><Links.EL link={{source:'#main'}}>skip to main content</Links.EL></div>

                    <Link href={'/'}>
                        <a class={styles.title} aria-label="Home page">
                            <nav id="top" aria-label="Header link to home page">The Public Good</nav>
                            <div><em>This website will not empower you.</em></div>
                        </a>
                    </Link>
                    <p class={styles.description}>                            
                        <button aria-label="Toggle the website colour scheme: between light and dark" class={styles.mode} ref={btnMode} onClick={() => toggleMode()}>{mode.isDark ? <span class={styles.light}></span> : <span class={styles.dark}></span>}</button>
                    </p>
                </header>
                <main id="main">               
                    <article>
                    { header ? <div class={styles.h1}><h1>{header}</h1></div> : null }

                    { rt.length > 0 
                        ? <div class={styles.author}>
                            <img alt="The author, Daniel Hartley" src="https://avatars.githubusercontent.com/u/264690?s=60&amp;v=4" />
                            <div>
                                <div>Daniel Hartley</div>
                                <div>Reading time: {rt} minutes</div>
                            </div>
                            </div>
                        : null
                    }

                    {children}
                    </article>
                    { router.pathname === '/' ? null : <nav aria-label="Published link to home page"><Links.Home textAlign={'right'}></Links.Home></nav> }
                </main>
                <footer role="contentinfo" class={styles.footer}>
                    <div><span>© <Links.EL link={{source:'mailto:dbmhartley@protonmail.com'}}>Daniel Hartley</Links.EL> 2021. All rights reserved.</span></div>
                    <div class={styles.externalList}><Links.EL link={{source:'https://www.linkedin.com/in/danhartley/'}}>LinkedIn</Links.EL> | <Links.EL link={{source:'https://danhartley.github.io/snapdragon-redux/wiki/'}}>CV</Links.EL></div>
                    <div><em ref={bytesTransferred}></em></div>
                </footer>
            </div>
        </div>
    )
};

export default Layout;