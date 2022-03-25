import { useContext, useEffect, useRef } from 'preact/hooks';
import { useRouter } from 'next/router';
import { PageMetrics } from 'components/shared/types'; 
import funcs from 'components/functions/functions';
import { useLocalStorageState } from 'hooks/local-storage';

import Link from 'next/link';
import Head from 'next/head';
import ModeContext from 'components/contexts/ModeContext';
import { PageWeightReport } from 'components/metrics/page-weight-report';
import Links from 'components/links/Links';
import styles from 'components/layout/Layout.module.scss';

import { install } from "resize-observer";

const SiteMetrics = ({title}) => {

    const [metrics, setMetrics] = useLocalStorageState({ key: 'metrics', defaultValue: { page: { title: '', bytes: 0, requests: 0 }, cumulativeBytes: 0, cumulativeRequests: 0, pages: [] } as unknown as boolean });
    
    useEffect(() => {

        install();

        const request: PageMetrics = funcs.sessionData(window);

        const _pageBytes = request.bytes >= metrics.cumulativeBytes ? (request.bytes - metrics.cumulativeBytes) : request.bytes;
        const _pageRequests = request.requests >= metrics.cumulativeRequests ? (request.requests - metrics.cumulativeRequests) : request.requests;
      
        const _metrics = {
            ...metrics,
            page: {
                title: title,
                bytes: _pageBytes,
                requests: _pageRequests
            },
            cumulativeBytes: request.bytes,
            cumulativeRequests: request.requests,
            pages: [
                ...metrics.pages,
                {
                    title: title,
                    bytes: _pageBytes,
                    requests: _pageRequests
                },
            ]
        };

        setMetrics(_metrics);

    }, []);

    return ( PageWeightReport(metrics)  );
};

const Layout = ({
  children,
  title,
  description = 'The Public Good',
  image = 'https://inaturalist-open-data.s3.amazonaws.com/photos/97465767/medium.jpeg?1601194277',
  header = null,
  rt = '',
  main = 'The Public Good',
  strapline = 'This website will not empower you.',
  discussions = ''
}) => {
  
    const { mode, toggleMode } = useContext(ModeContext);

    const router = useRouter();

    const btnMode = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // run this code to reset to dark mode when page is refreshed and dark mode 
        // is the user's default. Downside is the screen flickers; comment out to revert to light mode,
        // ignoring user's previous preference
        const container:any = document.querySelector('#container');
        type Mode = { value?: string };
        const darkMode:Mode = { value: getComputedStyle(container && container.getPropertyValue('--m')) as any as string };
        if(darkMode.value === 'light' && mode.isDark) {
            btnMode.current.click();
            setTimeout(() => {
                btnMode.current.click();
            });
        }
    });

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
                {/* <link rel="stylesheet" href="/perf-diagnostics.css" /> */}
            </Head>
            <div id="container" style={mode.style as any} class={styles.container}>                
                <header>

                    <div class={styles.skiptocontent}><Links.EL link={{source:'#main'}}>skip to main content</Links.EL></div>

                    <Link href={'/'}>
                        <a class={styles.title} aria-label="Home page" href="/">
                            <nav id="top" aria-label="Header link to home page">{main}</nav>
                            <div>{strapline}</div>
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
                            <img width="60px" height="60px" alt="The author, Daniel Hartley" src="https://avatars.githubusercontent.com/u/264690?s=60&amp;v=4" />
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
                    <div><span>© <Links.EL link={{source:'mailto:dbmhartley@protonmail.com'}}>Daniel Hartley</Links.EL> 2022. All rights reserved.</span></div>
                    <div class={styles.externalList}><Links.EL link={{source:'https://www.linkedin.com/in/danhartley/'}}>LinkedIn</Links.EL> | <Links.IL link={{source:'personal/cv'}}>CV</Links.IL> | <Links.EL link={{source:`https://github.com/danhartley/the-public-good/discussions${discussions}`}}>Comment</Links.EL></div>
                    <SiteMetrics title={title} />
                </footer>
            </div>            
        </div>
    )
};

export default Layout;