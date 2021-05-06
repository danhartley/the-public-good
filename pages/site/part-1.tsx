import Link from 'next/link';
import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Part1 = () => {

    const externalLinks = [
        {
            "name": "Gemma Fitzsimmons | The impact of hyperlinks on reading text",
            "source": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210900"
        },
        {
            "name": "Web AIM (Web Accessibility in Mind) | Links and Hypertext",
            "source": "https://webaim.org/techniques/hypertext/link_text"
        },
        {
            "name": "Web AIM (Web Accessibility in Mind) | WCAG 2 Checklist",
            "source": "https://webaim.org/standards/wcag/checklist"
        },
        {
            "name": "Web AIM (Web Accessibility in Mind) | Contrast Checker",
            "source": "https://webaim.org/resources/contrastchecker/"
        },
    ];

    return (
        <Layout header="Better" title="Better" description={'Better'}>
            <section class={styles.card}>

                <h2>What are our principles?</h2>

                <p>The Internet is a democratic institution; we will do everything we can do to make our site accessible to all.</p>

                <p>We won't waste people's time, people's money, our own time or money, or be profligate with resources.</p>

                <p>We will uphold web standards, and avoid nefarious practices.</p>

                <h2>How do we make sure we stick to our guns?</h2>

                <p>Agree to a budget for performance, measure progress using lab tests and live data, and maintain our commitment to it throughout the life of the site.</p>

                <p>Promise that no user will be poorly served or ignored.</p>

                <p>Publish a sociable contract on the website to minimise the chance of backsliding.</p>

                <h2>How much energy do websites consume?</h2>

                <p>
                    <div>Websites come under the heading ICT (Informationand Communication Technology). This category, which covers data centres, networks, and devices, accounts for approximately <a href="https://www.researchgate.net/publication/342643762_New_perspectives_on_internet_electricity_use_in_2030">7%</a> of total global electricity use.</div>
                </p>

                <p>There is no concensus around the cost, in terms of energy or greenhouse gas emissions, of delivering a web page. Or even how to measure it. Where the boundary is drawn is significant; in addition to network and data centre costs, there is debate as tp whether the energy consumption of the device should be included.
                    <div class={styles.quote}>
                        <span class={styles.bold}>The decision of whether or not to include end devices influences the result by 1-2 orders of magnitude.</span>
                        <div>The energy intensity of the internet: home and access networks <Links.ExternalLink link={{source: "https://www.zora.uzh.ch/id/eprint/110005/1/2014_Coroama_Schien_Preist_Hilty_Energy_Intensity_Internet_Home_Access.pdf", label:"PDF The energy intensity of the internet"}}>PDF</Links.ExternalLink></div>
                    </div>
                </p>

                <p>What of the content itself?</p>

                <h2>Hyperlinks</h2>

                <p>Many sites do not link to external sites, and discourage, or prevent users from linking elsewhere. Search engines are typically the way people find what they are looking for.</p>

                <p>
                    <div>But it wasn't always this way; in the early days of the web, links were its raison d'être. The H in HTTP and in HTML stands for hypertext (<span class={styles.italic}>HyperText</span> Markup Language), or text that links to other text.</div>
                </p>

                {/* <p>Jason Fry suggest links provide <Links.ExternalLink link={{}}>credibility, readability, and connectivity</Links.ExternalLink>.</p> */}

                <p><span class={styles.bold}>Why do we use links?</span></p>

                <p>Linking to other sites respects the right of the user to explore freely. Links may also be used to connect to resources on which the author has drawn to further their argument. Such transparency increases credibility and promotes reasoned debate.</p>

                <p><div>How to represent links is more <Links.ExternalLink link={{label: 'MIT Hyperlinking in Journalism', source: 'https://pdos.csail.mit.edu/~neha/hyperlinks/main-no.html'}}>controversial</Links.ExternalLink>. The default colours for links are blue (meaning the user has not visited the link), and purple (the user has visited the link). Text is underlined.</div></p>

                <p>Why blue? According to Tim Berners-Lee, there is no good reason, <Links.ExternalLink link={{source: 'https://www.w3.org/People/Berners-Lee/FAQ.html'}}>it is just a default</Links.ExternalLink>.</p>

                <p>                    
                    <div class={styles.quote}>
                        <span>The mother of bad web design conventions is the decision to make hypertext links blue. Other colors would have been a better choice and would have increased the reading speed of the anchor text by a few percent. It is unfortunate to put the most important text on the page in a color that is known to reduce readability.</span>
                        <div><Links.ExternalLink link={{source: 'https://www.nngroup.com/articles/when-bad-design-elements-become-the-standard/'}}>When Bad Design Elements Become the Standard</Links.ExternalLink> <span>Jakob Nielsen</span></div>
                    </div>
                </p>

                <p>By convention browsers use the default colours for links, but they can be overriden, as I have done for this site. In order to meet user's expectations I followed WebAIM's advice on <Links.ExternalLink link={{source:'https://webaim.org/blog/wcag-2-0-and-link-colors/'}}>Link Colors</Links.ExternalLink>. You can check if there are any <Links.ExternalLink link={{source:'https://wave.webaim.org/report#/https://www.the-public-good.com/'}}>contrast errors</Links.ExternalLink> on this site.</p>

                <p>
                    <div>Because I use a lot of links, I don't underline the text of external links. If you are reading on a desktop you will notice, however, that text is underlined when you hover over it (or focus on it using tabs). <span class={styles.italic}>Internal</span> links are in a different colour, and underlined with a dashed line (which turns solid when you hover over them). They do not change colour to indicate you have visited a page because this site has few pages and many cross references.</div>
                </p>
                
                <p>I may revert to using underlining link text. From the perspective of an individual link, accessibility is improved. There is good <Links.ExternalLink link={{source: 'https://www.a11y-101.com/design/link-visual'}}>reason for underlining text</Links.ExternalLink>.</p>

                <p><div class={styles.bold}>Are hyperlinks distracting?</div></p>

                <p>Evidence suggests that used judiciously links do not impair understanding, or interrupt the reader's concentration.
                    <div class={styles.quote}>
                        <div>In terms of Web design and layouts, the present results highlight the importance of carefully considering which words are hyperlinked in webpages. The key lesson for Web designers that we have found here is that coloured words do not have any negative impact on reading behaviour.</div>
                        <Links.ExternalLink link={{label: 'Gemma Fitzsimmons | The impact of hyperlinks on reading text', source: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210900'}}>The impact of hyperlinks on reading text</Links.ExternalLink>
                    </div>
                </p>

                <p>Solitary links are salient and may be distracting; a sprinkling of links, composed of common words, singly or in or short sentences, seems to be the best approach. It is recommended to use words of high frequency (words familiar to the target audience).</p>

                <p>The colour values for blue and purple links may be selected to match the palette of the site, and then stuck to; consistency supports user expectations. The wording of text is important too. The more relevant, specific and pithy the better.
                    <div class={styles.quote}>
                        <div>Hyperlinks highlight important information and suggest additional content, which for more difficult concepts, invites rereading of the preceding text.</div>
                        <Links.ExternalLink link={{label: 'Gemma Fitzsimmons | The impact of hyperlinks on reading text', source: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210900'}}>The impact of hyperlinks on reading text</Links.ExternalLink>
                    </div>
                </p>

                <p>
                    <div>Meaningful and distinguishable link text is essential for users of screen readers, who may scan links independently of other content. If the text is too long, alternative text can be placed in an <Links.ExternalLink link={{label: 'MDN Using the aria-label attribute', source: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute'}}>aria-label attribute</Links.ExternalLink> which will not be seen.</div>
                </p>

                <p>
                    <div><span class={styles.bold}>Where should links lead us?</span></div>
                </p>

                <p>The W3C (World Wide Web Consortium) recommends that links open in the same window or tab as the current page.
                    <div class={styles.quote}>
                        <div>In general, it is better not to open new windows and tabs since they can be disorienting for people, especially people who have difficulty perceiving visual content.</div>
                        <Links.ExternalLink link={{source:'https://www.w3.org/TR/WCAG20-TECHS/G200.html'}}>Opening new windows and tabs from a link only when necessary</Links.ExternalLink>
                    </div>
                </p>

                <p>Exceptions include opening a help page while completing a form, or leaving a page where the user is logged in. But opening in a new window or tab should always be signalled., by adding for example a warning: '(opens in new tab)'.</p>

                <p>If the user wishes to open a new window or tab, that option remains available.</p>

            </section>
        
            <section class={styles.card}>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{href:'contract',title:'Sociable contract'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Part1;