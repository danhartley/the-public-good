import Link from 'next/link';
import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Services = () => {
    return (
        <Layout header="Client web services" title="Client web services" description={'Daniel Hartley will help you optimise an existing website, or build one that is fast, accessible, and sustainable.'}>
            <section class={styles.card}>

                <p>You should contact me if you want to build a site from scratch, or review performance of an existing site, including its compliance with industry standards.</p>

                <h2>New sites</h2>
                <p>
                    <span>The sites I build have the following characteristics:</span>
                    <ul class={styles.dashedItemsList}>
                        <li><span class={styles.bold}>Secure</span>: opportunities for attack are minimised.</li>
                        <li><span class={styles.bold}>Accessible</span>: pages are available to all users, on any device.</li>
                        <li><span class={styles.bold}>Fast</span>: pages are assembled before they are requested so waiting time is reduced.</li>
                        <li><span class={styles.bold}>Extensible</span>: you can change, modify or adapt your site to changing needs.</li>
                    </ul> 
                    <span>I follow <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a> principles.</span>
                </p>

                <h2>Existing sites</h2>
                <p>
                    <span>I will audit an exisiting site with a view to improving performance and compliance.</span>
                </p>

                <h2>The sociable contract</h2>

                <p>The sociable contract outlines the principles upon which a website is built. It reflects the efforts of everyone who contributes to the project.</p>

                <p>
                    <div>I have created a <Links.IL link={{source:'web-development/sociable-contract'}}>sociable contract</Links.IL> for The Public Good.</div>
                </p>

                <h2>Best practices</h2>
                <p>
                    <span class={styles.internalLink}>I have selected and tested this development stack over the course of <Link href={'/projects'}><a>4 projects</a></Link>.</span>
                </p>
                <p>If you would like to discuss an idea or a project, please contact me at <a href="mailto:dbmhartley@protonmail.com" aria-label="email">Daniel Hartley</a>.</p>           
                <p>For a complete picture of the web technologies I use, this is my <a href="https://danhartley.github.io/snapdragon-redux/wiki/">curriculum vitae</a>.</p>            
            </section>  
            <Links.RelatedLinks links={[{value:'web-development/sociable-contract',text:'Sociable contract'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Services;
