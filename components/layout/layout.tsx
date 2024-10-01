import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PageMetrics } from 'components/shared/types'; 
import funcs from 'components/functions/functions';
import { useLocalStorageState } from 'hooks/local-storage';

import Link from 'next/link';
import Head from 'next/head';
import { PageWeightReport } from 'components/metrics/page-weight-report';
import Links from 'components/links/Links';
import styles from 'components/layout/Layout.module.scss';
import Emissions from 'components/emissions/emissions';

import { install } from "resize-observer";

const SiteMetrics = ({title}) => {

    const [metrics, setMetrics] = useLocalStorageState({ key: 'metrics', defaultValue: { page: { title: '', bytes: 0, requests: 0 }, cumulativeBytes: 0, cumulativeRequests: 0, pages: [] } as unknown as boolean });
    
    useEffect(() => {

        install();

        const request: PageMetrics = funcs.sessionData(window);

        const _pageBytes = request.transferSize >= metrics.cumulativeBytes ? (request.transferSize - metrics.cumulativeBytes) : request.transferSize;
        const _pageRequests = request.requests >= metrics.cumulativeRequests ? (request.requests - metrics.cumulativeRequests) : request.requests;
      
        const _page = {
            title: title,
            bytes: _pageBytes,
            requests: _pageRequests
        }

        const _metrics = {
            ...metrics,
            page: _page,
            cumulativeBytes: request.transferSize,
            cumulativeRequests: request.requests,
            pages: [
                ...metrics.pages.filter(p => p.title !== _page.title),
                _page
            ]
        };

        setMetrics(_metrics);

    }, []);

    return ( PageWeightReport(metrics)  );
};

type LayoutType = {
    children?: any;
    title?: any;
    description?: string;
    image?: string;
    header?: any;
    rt?: string;
    main?: string;
    strapline?: string;
    discussions?: string
}

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
}:LayoutType) => {
  
    const router = useRouter();

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
            <div id="container" className={styles.container}>
                <header>

                    <div className={styles.skiptocontent}><Links.IL link={{source:'#main'}}>skip to main content</Links.IL></div>

                    <Link href={'/'}  className={styles.title} aria-label="Home page">
                        <nav id="top" aria-label="Header link to home page">{main}</nav>
                        <div>{strapline}</div>
                    </Link>
                    <p className={styles.description}>
                    </p>
                </header>
                <main id="main">               
                    <article>
                    { header ? <div className={styles.h1}><h1>{header}</h1></div> : null }

                    { rt.length > 0 
                        ? <div className={styles.author}>
                            <img width="60px" height="60px" alt="The author, Daniel Hartley" src="https://avatars.githubusercontent.com/u/264690?s=60&amp;v=4" />
                            <div>
                                <div>Daniel Hartley</div>
                                <div>Reading time: {rt} { rt.length === 1 ? 'minute' : 'minutes'}</div>
                            </div>
                            </div>
                        : null
                    }

                    {children}
                    </article>
                    { router.pathname === '/' ? null : <nav aria-label="Published link to home page"><Links.Home textAlign={'right'}></Links.Home></nav> }
                </main>
                <footer role="contentinfo" className={styles.footer}>
                    <div><span>© <Links.EL link={{source:'mailto:dbmhartley@protonmail.com'}}>Daniel Hartley</Links.EL> 2024. All rights reserved.</span></div>
                    <div className={styles.externalList}><Links.EL link={{source:'https://www.linkedin.com/in/danhartley/'}}>LinkedIn</Links.EL> | <Links.IL link={{source:'personal/cv'}}>CV</Links.IL> | <Links.EL link={{source:`https://github.com/danhartley/the-public-good/discussions${discussions}`}}>Comment</Links.EL></div>
                    <SiteMetrics title={title} />
                    {/* <Emissions /> */}
                </footer>
            </div>            
        </div>
    )
};

export default Layout;