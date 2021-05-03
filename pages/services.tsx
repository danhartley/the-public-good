import Link from 'next/link';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Services = () => {
    return (
        <Layout title="Web Services" description={'Web Services'}>
            <section class={styles.card}>
                <h1>Services</h1>          

                <h2>The contract</h2>

                <p>Outline principles on which the website is built.

                    <ul class={styles.list}>
                        <li>Public document</li>
                        <li>Clear scope and reasoning and limits (financial, time, etc.)</li>
                        <li>Good intentions and red lines.</li>
                        <li>History of ammendments, breaches, etc.</li>
                        <li>Explicit committments e.g. that the site is accesible.</li>
                        <li>Promise to respond to criticism with reasonable time.</li>
                    </ul>
                </p>

                <h2>Essential features</h2>
                <p>
                    <span>The sites I build have the following characteristics.</span>
                    <ul class={styles.list}>
                        <li>Fast: pages are assembled before they are requested so waiting time is reduced.</li>
                        <li>Accessible: pages are available to all users, on any device.</li>
                        <li>Safe: opportunities for attack are minimised.</li>
                        <li>Extensible: you can change, modify or adapt your site to changing needs.</li> 
                        <li>Content management: Open-source CMS (<a href="https://www.netlifycms.org/">netlify-cms)</a> or Google <a href="https://firebase.google.com/">Firebase</a> database.</li>
                        <li>Functions as a service, <a href="Serverless functions">Faas</a>, with either serverless functions on <a href="https://firebase.google.com/docs/functions">Google Cloud</a> or <a href="https://www.netlify.com/products/functions/">Lambda functions</a> on netlify.</li>
                    </ul> 
                    <span>I follow <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a> principles.</span>
                </p>
                {/* <h2>Optional features</h2>
                <p>
                    <ul class={styles.list}>
                        <li>Open-source CMS (<a href="https://www.netlifycms.org/">netlify-cms)</a>.</li>
                        <li>Google <a href="https://firebase.google.com/">Firebase</a> database.</li>
                        <li>Functions as a service, <a href="Serverless functions">Faas</a>, with either serverless functions on <a href="https://firebase.google.com/docs/functions">Google Cloud</a> or <a href="https://www.netlify.com/products/functions/">Lambda functions</a> on netlify.</li>
                    </ul>
                </p> */}

                <h2>Best practices</h2>
                <p>
                    <span class={styles.internalLink}>I have selected and tested this development stack over the course of <Link href={'/projects'}><a>4 projects</a></Link>.</span>
                </p>
                <p>If you would like to discuss an idea or a project, please contact me at <a href="mailto:dbmhartley@protonmail.com">Daniel Hartley</a>.</p>           
                <p>For a complete picture of the web technologies I use, this is my <a href="https://danhartley.github.io/snapdragon-redux/wiki/">curriculum vitae</a>.</p>            
            </section>                
        </Layout>
    )
};

export default Services;