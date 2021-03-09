import Link from 'next/link';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Services = () => {
    return (
        <Layout title="Web Services" description={'Web Services'}>
            <section class={styles.card}>
                <h2>Website Services</h2>                

                <p>I learnt my profession over 20 years. I settled on a way of doing things over the course of building <span class={styles.internalLink}>
                            <Link href={'/history'}>
                                <a>4 projects of my own</a>
                            </Link>
                        </span>. But each project also brings change and adaptation.</p>
                <p> 
                    <h3>Overview</h3>               
                    <ul class={styles.list}>
                        <li>A proven way to build fast, accessible, extensible websites.</li>
                        <li>A website built based on <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a> principles.</li>
                        <li>A supporter of your work because I only take on projects I believe in.</li>
                    </ul>                    
                </p>     

                <p>If you would like to discuss an idea, a project, or a website, please contact me at <a href="mailto:dbmhartley@protonmail.com">Daniel Hartley</a>.</p>           

            </section>
        </Layout>
    )
};

export default Services;