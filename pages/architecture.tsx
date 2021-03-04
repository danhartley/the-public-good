import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Architecture = () => {
    return (
        <Layout title="Web architecture" description={'Web architecture'}>
            <section class={styles.card}>
                <h2>Website architecture</h2>
                <p>The architecture of this site follows principles set out in <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a>.</p>
                <p>It isn't a template because third party libraries and solutions change fast, and best practices change with them.</p>
                <p>I could have made this site using HTML and inline styles but I chose a set of tools which allow me to extend the site more easily.</p>
                <p>Some of the tools are invisible to the browser, that is their role ends before the page loads; among these are languages and tools which help development and deployment. Some, however, carry an overhead, including the JavaScript framework Preact.</p>                
            </section>
        </Layout>
    )
};

export default Architecture;