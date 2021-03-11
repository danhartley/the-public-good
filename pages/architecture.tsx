import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Architecture = () => {
    return (
        <Layout title="Web architecture" description={'Web architecture'}>
            <section class={styles.card}>
                <h2>Architecture</h2>

                <p>This website practices <a aria-label="What is Jamstack?" href="https://jamstack.org/what-is-jamstack/">Jamstack</a>, "an architecture designed to make the web faster, more secure, and easier to scale".</p>

                <h3>Technology</h3>

                <p>
                    <ul class={styles.list}>
                        <li>Framework: <a href="https://preactjs.com/">Preact</a></li>
                        <li>Enhancements: <a href="https://sass-lang.com/">Sass</a>, <a href="https://www.typescriptlang.org/">Typescript</a></li>
                        <li>Build and deploy: <a href="https://webpack.js.org">webpack</a>, <a href="https://github.com/">GitHub</a>, <a href="https://nextjs.org/">Next.js</a> and <a href="https://www.netlify.com/">netlify</a>.</li>
                    </ul>
                </p>

                <p>With each website I do something new. For this website I experimented with <a href="https://en.wikipedia.org/wiki/Light-on-dark_color_scheme">dark mode</a>. The evidence suggests you should offer <a aria-label="A guide to using light and dark modes" href="https://www.nngroup.com/articles/dark-mode/">the option to switch</a> to light mode. I used <a href="https://preactjs.com/guide/v10/context/">Preact context</a> to handle the global mode setting.</p>

                <p>I also documented how I set up the project. I chose to do this rather than setting up a template because third party libraries and solutions change fast, and best practices change with them. These steps will guide future projects.</p>

                <h3>Documentation</h3>        

                <p>       
                    <ul>
                        <li>
                            <span>The conventions, good practices, and solutions used to develop and build the website. They influence how the the website is assembled. They are not essential, and could be replaced without affecting the appearance or performance of the website. They do not add to page weight.</span>
                            <ul class={styles.list}>
                                <li><a href="https://www.typescriptlang.org/">Typescript</a> adds features to JavaScript which help to better structure and test code. </li>
                                <li><a href="https://sass-lang.com/">Sass</a> extends CSS to which it is converted when compiling the site ready for release.</li>
                                <li>Pages are statically generated using <a href="https://nextjs.org/">next.js</a>. Instead of serving dynamic pages based on variables, such as a specific product or blog, a static site generater (SSG), like next.js, is used to create all of these pages - which could be many thousands - each time the site is updated. They are therefore immmediately available to a browser request.</li>
                            </ul>
                        </li>
                        <li>
                            <span>Code developed by third-parties which affect both how the site is built and its performance in the browser.</span>
                            <ul class={styles.list}>
                                <li><a href="https://preactjs.com/">Preact</a> is a light-weight alternative to React which models the state of a page and modifies it in response to user actions. Preact adds to the page weight. For this site, I could have dispensed with it. I could have written it in Notepad. However, since the lighhouse score for the website performance is 100%, and I wanted to create a set of tools that would support more complex sites, I kept it in.</li>
                            </ul>
                        </li>
                        <li>
                            <span>Settings and tweaks that keep things running smoothly.</span>
                            <ul class={styles.list}>
                                <li>PWA set up including manifest and Next.js support.</li>
                                <li>Meta tags including support for PWA and third party links including for LinkedIn.</li>
                                <li>Support for Sas, Typescript, Jest, and the class attribute.</li>
                                <li>Layout design pattern.</li>
                            </ul>
                        </li>
                    </ul>
                </p>            
                
                <p>I could have made this site using HTML and inline styles but I chose a set of tools which allow me to extend the site more easily.</p>        

                <p>For a complete picture of the web technologies I use, or have used, please take a look at my <a href="https://danhartley.github.io/snapdragon-redux/wiki/">curriculum vitae</a>.</p>
            </section>
        </Layout>
    )
};

export default Architecture;