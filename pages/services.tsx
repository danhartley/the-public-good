import Link from 'next/link';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Services = () => {
    return (
        <Layout title="Web Services" description={'Web Services'}>
            <section class={styles.card}>
                <h2>Services</h2>                

                <p>The sites I build have the following charactersitics.
                    <ul class={styles.list}>
                        <li>Fast, accessible, safe, and extensible.</li>
                        <li>Tested on speed, safety, accessibilty, and sustainability against a range of  metrics.</li>
                        <li>Tested for bugs during development.</li>
                        <li>Built based on <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a> principles.</li>                    
                    </ul> 
                </p>
                <h3>Optional features</h3>
                <p>
                    <ul class={styles.list}>
                        <li>Open-source CMS (<a href="https://www.netlifycms.org/">netlify-cms)</a>.</li>
                        <li>Google <a href="https://firebase.google.com/">Firebase</a> database.</li>
                        <li>Functions as a service, <a href="Serverless functions">Faas</a>, with either serverless functions on <a href="https://firebase.google.com/docs/functions">Google Cloud</a> or <a href="https://www.netlify.com/products/functions/">Lamda functions</a> on netlify.</li>
                    </ul>
                </p>

                <h3>Best practices</h3>
                <p>
                    <span class={styles.internalLink}>I have selected and tested this development stack over the course of <Link href={'/projects'}><a>4 projects</a></Link>.</span>
                </p>
                <p>For a complete picture of the web technologies I use, please see my <a href="https://danhartley.github.io/snapdragon-redux/wiki/">curriculum vitae</a>.</p>
                
                <p>If you would like to discuss an idea, a project, or a website, please contact me at <a href="mailto:dbmhartley@protonmail.com">Daniel Hartley</a>.</p>           

            </section>                
        </Layout>
    )
};

export default Services;