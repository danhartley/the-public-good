import { useRef } from 'preact/hooks';
import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Accordion from 'components/accordion/accordion';
import Published from 'components/published/published';
import Top from 'components/top/top';
import styles from 'pages/pages.module.scss';

const MentalModel = () => {

    const externalLinks = [
        {
            "name": "W3C | The World Wide Web Consortium",
            "source": "https://www.w3.org/"
        },
        {
            "name": "W3C | Web Accessibility Laws & Policies",
            "source": "https://www.w3.org/WAI/policies/"
        },
        {
            "name": "W3C | Formal definition of the P element",
            "source": "https://www.w3.org/MarkUp/HTMLPlus/htmlplus_11.html"
        },
        {
            "name": "WebAIM | Semantic Structure: Regions, Headings, and Lists",
            "source": "https://webaim.org/techniques/semanticstructure/"
        },
        {
            "name": "Abby Kingman | Finding the Way: screen reader strategies",
            "source": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
        },
        {
            "name": "MDN | HTML elements reference",
            "source": "https://lastcallmedia.com/blog/finding-way-screen-reader-strategies"
        },
        {
            "name": "WebAIM | Introduction to ARIA - Accessible Rich Internet Applications",
            "source": "https://webaim.org/techniques/aria/"
        },
        {
            "name": "Smashing Magazine | I Used The Web For A Day Using A Screen Reader",
            "source": "https://www.smashingmagazine.com/2018/12/voiceover-screen-reader-web-apps/"
        },
        {
            "name": "Smashing Magazine | I Used The Web For A Day With Just A Keyboard",
            "source": "https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/"
        },
        {
            "name": "Smashing Magazine | I Used The Web For A Day With JavaScript Turned Off",
            "source": "https://www.smashingmagazine.com/2018/05/using-the-web-with-javascript-turned-off/"
        },
        {
            "name": "Deque University | VoiceOver Keyboard Shortcuts on a Mac",
            "source": "https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts#vo-mac-basics"
        },
        {
            "name": "WebAIM | Screen Reader User Survey #7 Results",
            "source": "https://webaim.org/projects/screenreadersurvey7/"
        },
        {
            "name": "Heydonworks | Responses To The Screen Reader Strategy Survey 2016",
            "source": "https://heydonworks.com/article/responses-to-the-screen-reader-strategy-survey/"
        },
        {
            "name": "Jeremy Keith | Resilient Web Design",
            "source": "https://resilientwebdesign.com/"
        },
    ];

    const saved = React.useRef<HTMLButtonElement>(null);
    const notSaved = React.useRef<HTMLDivElement>(null);

    const saveMe = (msg, ref) => {
        ref.current.innerHTML = msg;
    };

    return (
        <Layout header="Following the rules to a well-structured web page" rt="6 to 7" title="Web development - following the rules to a well-structured web page" description={'Web development - the shared structure of web pages'} image='https://live.staticflickr.com/65535/51239910633_a100a905a3_c_d.jpg'>
            
            <section>                

                <h2>Web pages take many forms, but like species branching from a common ancestor, they share a basic structure.</h2>

                <p>The first web pages were simulacra of printed pages so it was natural that elements familiar from print were transcribed for the Internet. A web page is a document containing elements such as titles, headers, and paragraphs. These are used to structure and order its contents and they impart meaning.</p>

                <p>The range of elements has since expanded to meet new demands. The original specification included markup for images; it now includes markup - or tags - for video, audio and canvas (used for animation).</p>

                <p>Using elements correctly helps users create an accurate model of the page and its contents.</p>     

                <p>
                    <Accordion header="Schema of this page's document structure">
                    The head contains meta information about the document such as its author. The content of the page appears in the body.
                    <p>
                        <ul class={styles.nestedElements}>
                            <li>head</li>
                            <li>body
                                <ul>
                                    <li>
                                        <strong>header</strong> 
                                        <ul>
                                            <li>nav</li>
                                        </ul>
                                    </li>                                                                    
                                    <li>
                                        <strong>main</strong>
                                        <ul>
                                            <li>
                                                article
                                                <ul>
                                                    <li><em>h1</em> <span>Following the rules to a well-structured web page</span></li>
                                                    <li>p <span>Web pages take many forms…</span></li>
                                                    <li>p…</li>
                                                    <li><em>h2</em> <span>HTML elements and tags</span></li>
                                                    <li>p…</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><strong>footer</strong></li>
                                    <li></li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    </Accordion>
                </p>           

                <p>An HTML element has an equivalent tag or set of tags which are used to decorate, or mark up text or other content. The P element - analogous to a paragraph - has opening and closing tags:</p>

                <p><span>{'<p>This is a paragraph.</p>'}</span></p>

                <p>This instruction is declarative; it specifies semantic intention, but it is not prescriptive. Specific representation is left to the discretion of web <em>application</em> authors (the people responsible for browsers like Chrome, Firefox, Edge, Tor, and Opera), and web developers.</p>

                <p>Interpretation of an instruction need not be visual; an audio device or application, such as a screen reader represents the space before and after a paragraph in units of time, not space.</p>

                <p>
                    <div><Links.EL link={{source:'https://webaim.org/projects/screenreadersurvey7/#braille'}}>One third</Links.EL> of screen reader users also output content to a <Links.EL link={{source:'https://www.afb.org/node/16207/refreshable-braille-displays'}}>refreshable braille display</Links.EL>.</div>
                </p>

                <h2>Separation of presentation and content</h2>

                <p>
                    <div>The basic structure of a page is set out using HTML elements. HTML is also innately semantic; it confers meaning.</div>
                </p>

                <p>
                    <div>Visual elaboration of meaning - design - is usually via rules written in a language called <Links.EL link={{source:'https://en.wikipedia.org/wiki/CSS'}}>CSS</Links.EL>. CSS wasn't part of the original specification for web pages but was added later to provide designers and developers with greater control over presentation, formatting, and layout.</div>
                </p>

                <p>CSS can be used to control every aspect of a page from fonts, colours, the look and behaviour of buttons and links, to page layout.</p>

                <p>CSS rules are used in all sorts of ways to enhance web pages, but used injudiciously they can be misleading.</p>

                <p>Which button would you choose?</p>

                <p>
                    <div class={styles.fakeBtns}>
                        <button ref={saved} onClick={() => saveMe('You\'re saved!', saved)}>Salvation</button> <div role='button' ref={notSaved} onKeyDown={() => saveMe('Too bad!', notSaved)} onClick={() => saveMe('Too bad!', notSaved)}>Salvation</div>
                    </div>
                </p>

                <p>If you are using a screen reader you know the answer. There is only one button.</p>

                <p>In practice, it is usually non-sighted users who suffer when there is a mismatch between the semantic value of an element and its use, or when meaning is conveyed by visual means alone.</p>

                <h2>Navigation</h2>

                <p>Links, text input fields, checkboxes, dropdown menus, images and buttons are interactive elements. Users can navigate between them using either the keyboard or a screen reader.</p>

                <p>Browsers support keyboard navigation between interactive elements primarily using the tab key. This is a quick form of navigation for expert users and another way to build up a mental model of the page. The appearance of an element changes to reflect that it has keyboard focus/pointer hover.</p>

                <h3>Headers</h3>

                <p>Headers are used by sighted and non-sighted readers to get the gist of a page in order to decide whether it is worth reading. Screen readers are also able to navigate between headers.</p>           

                <p>By convention headers decrease in size.</p>

                <p>
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

                <p>The specification recommends one H1 element per page and so it is often reserved for the title. The author may use as many of the other headers as they please provided they are nested correctly - H3 within H2, etc.</p>

                <p>These headers are routinely resized, and their colours and fonts changed but it is bad practice to abuse their hierarchy or use other elements in their place. Doing so loses meaning, and disrupts navigation.</p>

                <h3>The back button</h3>

                <p>Pages don't exist in isolation. Hypertext allows pages to be connected across sites, and maintaining this connection is critical. Users need to move freely from page to page using links and the browser back and forward buttons.</p>

                <p>Use of the keyboard, screen reader, or other assistive devices reveals the semantic structure of the page. They provide an alternative, and at times, improved way of navigating and interacting with a page.</p>

                <p><Links.EL link={{source:'https://www.accessibility-developer-guide.com/knowledge/keyboard-only/browsing-websites/'}}>Keyboard navigation</Links.EL> is fast and easy because it skips passive content and relies on the interconnected structures which underpin the web.</p>

                <p>If you don't know the keyboard shortcuts to move back and forwards between pages in the browser, here they are:
                    <ul>
                        <li>Mac: ⌘ + left/right arrow key</li>
                        <li>Windows & Linux: Alt + left/right arrow key</li>
                    </ul>
                </p>

                <h2>The primary goal of a page is to be understood</h2>

                <p>When we open a new page we immediately scan it for meaning, searching for answers or clues as to its purpose.</p>

                <p>HTML elements are designed to help developers establish a semantic model for users.</p>

                <p>Articles, blogs and posts need a relevant title, and quick access to headings which, taken together, provide an outline of the subject under discussion.</p>

                <p>Ecommerce sites use headers for product categories, checkboxes and dropdown menus to filter items, links of additional information and buttons for purchasing.</p>

                <h3>Mental models, conventions, and preconceptions</h3>

                <p>
                    <div class={styles.quote}>
                        <span>Users spend most of their time on other sites. </span>
                        <span><Links.EL link={{source:'https://www.nngroup.com/videos/jakobs-law-internet-ux/'}}>Jakob's Law</Links.EL></span>
                    </div>
                </p>

                <p>When we visit a new page for the first time we do not bring a fresh eye to it; we have a stack of preconceptions fashioned by all the other pages we have seen. Upsetting our expectations makes us work harder to understand the basics when our attention should be focused on what makes the page unique.</p>

                <p>Innovation and originality should not play fast and loose with existing models and conventions.</p>

                <h3>Animation</h3>

                <p>Movement is distracting, demands our attention, and <Links.EL link={{source:'https://www.nngroup.com/articles/animation-usability/'}}>is best used with caution</Links.EL>. Once we have built a model of a page we object to our assumptions being upset. Images and blocks of text that appear from nowhere or move around are highly disruptive to the static model we are trying to build. Change should be initiated by the user and respect cause and effect. Buttons and links are good examples.</p>    

                <h3>Context</h3>

                <p>The primary aim of a page is to make itself understood, but it must also provide clues as to other pages on the same site. This is part of the context of the page, and as well as helping us navigate the site, helps us answer questions such as: Is this author reputable? Are there other interesting things here? Can I trust this site with my money?</p>

                <h3>If your model doesn't fit the user's model, change your model</h3>

                <p>
                    <div class={styles.quote}>
                        <span>A mental model is what the user believes about the system at hand. </span>
                        <div><Links.EL link={{source:'https://www.nngroup.com/articles/mental-models/'}}>Mental Models</Links.EL> Jakob Nielsen</div>
                    </div>
                </p>

                <p>Consider this example. The browser address bar was designed for users to type in the name of a web site they already knew. If they wanted to search for a web site, they used a search box like the one on the Google homepage. Many people confused the two. The Chrome address bar was adapted to return either the requested page or search for a match. The new model caught on, and all browsers now work this way.</p>

                <h2>Web applications</h2>

                <p>The third core technology of web pages is JavaScript, a programming language that allows users to interact with pages.</p>

                <p>Websites like Facebook and Gmail have few pages but many ways to interact. For this reason they are often called web applications, or web apps, and rely on JavaScript for their functionality (although you can run a non-JavaScript version of Gmail). Under the hood they are still web pages composed of HTML elements.</p>

                <p>JavaScript used wisely can enhance a page. Interactive graphs are a good example. But JavaScript should not be relied upon for a page to work.</p>

                <h2>Summing up</h2>

                <p>HTML is a language with grammar and syntax designed for displaying content on the Internet. It contains all that is necessary to create a web page. Disable JavaScript and CSS styling and a page should still work.</p>

                <p>CSS offers visual improvements for sighted users. JavaScript adds non-essential interactions and features.</p>

                <p>Both JavaScript and CSS can be turned off. The Smashing Magazine series 'I Used The Web For A Day…' (there are links below) covers how to disable them in different browsers.</p>
                
                <p>A site that functions without CSS and JavaScript is likely to be well-structured, well-designed, and accessible.</p>

                {/* <p>If you prefer a more ascetic experience, the <Links.EL link={{source:'http://lynx.browser.org/'}}>Lynx text browser</Links.EL> might appeal to you.</p> */}

                <Top></Top>

            </section>

            <Published strDate='Tue 25 May 2021'></Published>
        
            <section>
                <h2>Links to external references</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{value:'web-development/for-the-love-of-hyperlinks',text:'For the love of hyperlinks'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default MentalModel;