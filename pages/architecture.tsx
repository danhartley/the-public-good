import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Architecture = () => {
    return (
        <Layout title="Web architecture" description={'Web architecture'}>
            <section class={styles.card}>
                <h2>Website architecture</h2>

                <p>As I put this website together, I grouped the parts I needed.</p>

                <p>       
                    <ol>
                        <li>
                            <span>The conventions, good practices, and solutions used to develop and build the website. They influence how the the website is assembled. They are not essential, and could be replaced without affecting the appearance or performance of the website. They do not add to page weight.</span>
                            <ul class={styles.list}>
                                <li><a href="https://www.typescriptlang.org/">Typescript</a> adds features to JavaScript which help to better structure and test code. </li>
                                <li><a href="https://sass-lang.com/">Sass</a> extends CSS to which it is converted when compiling the site ready for release.</li>
                                <li>Pages are statically generated using <a href="https://nextjs.org/">next.js</a>. Instead of serving dynamic pages based on variables, such as a specific product or blog, a static site generater (SSG) creates all of these pages - which could be many thousands - each time the site is updated. They are therefore immmediately available to a browser request.</li>
                            </ul>
                        </li>
                        <li>
                            <span>Code developed by third-parties which affect both how the site is built and its performance in the browser.</span>
                            <ul class={styles.list}>
                                <li><a href="https://preactjs.com/">Preact</a> is a light-weight alternative to React which models the state of a page and modifies it in response to user actions. Preact adds to the page weight. For this site, I could have dispensed with it. I could have written it in Notepad. However, since the lighhouse score for the website performance is 100%, and I wanted to create a set of tools that would support more complex sites, I kept it in.</li>
                            </ul>
                        </li>
                    </ol>
                </p>

                {/* <p>The architecture of this site follows principles set out in <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a>.</p> */}
                <p>It isn't a template because third party libraries and solutions change fast, and best practices change with them.</p>
                <p>I could have made this site using HTML and inline styles but I chose a set of tools which allow me to extend the site more easily.</p>
                <p>Some of the tools are invisible to the browser, that is their role ends before the page loads; among these are languages and tools which help development and deployment. Some, however, carry an overhead, including the JavaScript framework Preact.</p>                
            </section>
        </Layout>
    )
};

export default Architecture;