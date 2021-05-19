import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Published from 'components/published/published';
import Top from 'components/top/top';
import styles from 'pages/pages.module.scss';

const MentalModel = () => {

    const externalLinks = [
        {
            "name": "MDN | HTML elements reference",
            "source": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
        },
        {
            "name": "Smashing Magazine | I Used The Web For A Day Using A Screen Reader",
            "source": "https://www.smashingmagazine.com/2018/12/voiceover-screen-reader-web-apps/"
        },
        {
            "name": "Deque Univsersity | VoiceOver Keyboard Shortcuts on a Mac",
            "source": "https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts#vo-mac-basics"
        },
    ];

    return (
        <Layout header="An introduction to mental models" title="Web development - An introduction to mental models" description={'Web development - An introduction to mental models'}>
            <section class={styles.card}>

                <p><div class={styles.inset}><span class={styles.italic}>Reading time: 6 minutes</span></div></p>

                <p>
                    <div class={styles.summary}>Accessible design - why starting with semantics is good for everyone.</div>                    
                </p>

                <p>The first web pages were simulacra of printed pages. Their true form was a digital file containing instructions as to how their contents should be laid out. Web browsers - Chrome, Firefox, Edge, Tor, Opera - interpret these instructions according to standards set out by the <Links.ExternalLink link={{source:'https://www.w3.org/'}}>W3C</Links.ExternalLink> (The World Wide Web Consortium).</p>

                <p>The instructions are declarative; they specify semantic intention. For example the HTML element <span>{'<p>'}</span> is analogous to a paragraph. The <Links.ExternalLink link={{source:'https://www.w3.org/MarkUp/HTMLPlus/htmlplus_11.html'}}>specification</Links.ExternalLink> provides a formal definition of the <span>{'<p>'}</span> element, but it is not prescriptive; it requires the text contained within the start tag <span>{'<p>'}</span> and the end tag <span>{'</p>'}</span> to be treated as a unit, but the specific representation is left to the discretion of web application authors.</p>

                <p>Interpretation of W3C guidelines need not be visual; an audio device or application, such as a screen reader could signal a <span>{'<p>'}</span> by leaving more time, rather than space, before and after the text it contains.</p>

                <p>Many websites no longer ressemble physical pages but remain valid HTML documents. They use HTML elements to describe parts of the screen such as the header and footer, navigation, and sidebars.</p>

                <p>Browsers render semantic information consistently between pages, and between themselves. Web developers and designers can, and do, override default values. Their choices can enhance, or diminish, the semantic value of a document.</p>

                <p>A page that disregards semantic rules may make sense to a sighted user but be impossible for a non-sighted, or partially sighted user, to navigate. An accessible web page is available to everyone.</p>

                <p>This is a schema of a simple document structure not unlike that of this page. The head contains information about the document such as its author. The content of the page appears in the body.</p>

                <p>
                    <div class={styles.nestedElements}>
                        <div>head</div>
                        <div>body
                            <div><span class={styles.bold}>header</span>
                                <div>nav</div>
                            </div>
                            <div><span class={styles.bold}>main</span>
                                <div class={styles.italic}>h1</div>
                                <div>p</div>
                                <div>p</div>
                                <div>section
                                    <div><span class={styles.italic}>h2</span>
                                        <div>p
                                            <div class={styles.italic}>h3</div>
                                        </div>
                                    </div>
                                    <div>p</div>
                                </div>
                            </div>
                            <div><span class={styles.bold}>footer</span>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </p>

                <h2>Headers</h2>

                <p>By convention headers decrease in size down the hierarchy.
                    <div class={styles.diminishingHeaders}>H1
                        <span>H2
                            <span>H3
                                <span>H4
                                    <span>H5
                                        <span>H6</span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                </p>

                <p>The hierarchy of headers does not preclude visual play.</p>


            </section>
        
            <section class={styles.card}>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'web-development/sociable-contract',text:'Sociable contract'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default MentalModel;