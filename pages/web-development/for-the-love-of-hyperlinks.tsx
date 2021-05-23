import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Published from 'components/published/published';
import Top from 'components/top/top';
import styles from 'pages/pages.module.scss';

const Hyperlinks = () => {

    const externalLinks = [
        {
            "name": "Gemma Fitzsimmons | The impact of hyperlinks on reading text",
            "source": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210900"
        },
        {
            "name": "Web AIM (Web Accessibility in Mind) | Links and Hypertext",
            "source": "https://webaim.org/techniques/hypertext/"
        },
        {
            "name": "Web AIM (Web Accessibility in Mind) | WCAG 2 Checklist",
            "source": "https://webaim.org/standards/wcag/checklist"
        },
        {
            "name": "Web AIM (Web Accessibility in Mind) | Contrast Checker",
            "source": "https://webaim.org/resources/contrastchecker/"
        },
        {
            "name": "sitepoint | Making Accessible Links",
            "source": "https://www.sitepoint.com/15-rules-making-accessible-links/"
        },
    ];

    return (
        <Layout header="For the love of hyperlinks" rt="8 to 9" title="Web development | For the love of hyperlinks" description={'Hyperlink good practices explained. How to create accessible links with respect to size, colour, un/visited, internal/external states.'}>
            
            <section>

                <h2>The Hyperlink is a defining feature of the web, a tiny digital instruction that transports us like a magic carpet to far off lands.</h2>

                <p>The far off lands are news stories, videos, applications, images, maps, and a multiplicity of other data each with its own, unique uniform resource locator, or <Links.EL link={{source:'https://en.wikipedia.org/wiki/URL'}}>URL</Links.EL>, colloquially known as a web address.</p>

                <p>The hyperlink, or link, needs only our command to initiate a series of requests and responses which fly around the world before depositing us at our destination.</p>

                <p>Hyperlinks are simple, and although few understand how they work, everyone understands what they do. </p>

                <h3>It's good to connect</h3>

                <p>Linking to other sites respects the right of the user to explore the web freely.</p>

                <p>Authors use links to connect to resources that support their claims and - because they are courteous - to point out pages that are relevant or interesting to their reader. Their altruism is rewarded by improved <Links.EL link={{source:'https://blog.alexa.com/outbound-links-content-marketing/'}}>search engine rankings</Links.EL>.</p>

                <p>
                    <div>Connecting to an external resource is like conferring a little bit of praise or, at least, vouching for the worth of the recipient. For this reason it is incumbent on the referrer to check  they are not sending readers to sites behind paywalls or that will bombard them with pop-ups, that will not steal their data, and that has little or no advertising.</div>
                </p>

                <p>If you want to link to a site - perhaps it is the only source available - but prefer to keep your association at arm's link, it is possible to make your feelings clear to search engines.</p>

                <p>
                    <div>To increase the security of a site and to avoid endorsing the source of a link the attributes <Links.EL link={{source:'https://pointjupiter.com/what-noopener-noreferrer-nofollow-explained/'}}>noopener, noreferrer and nofollow</Links.EL> can be added. Google has introduced 'sponsored' and 'user-generated content' attributes to <Links.EL link={{source:'https://developers.google.com/search/docs/advanced/guidelines/qualify-outbound-links'}}>qualify outbound links</Links.EL> to site sponsors and for links added by users in comments and forums.</div>
                </p>

                <p>If you don't want to upset your reader, you must be more explicit.</p>

                <h3>Is blue the warmest colour?</h3>

                <p>The default colour for links the user hasn't clicked on is <span class={styles.defaultBlue}>blue</span>. Why blue? According to Tim Berners-Lee, there is no good reason, <Links.EL link={{source: 'https://www.w3.org/People/Berners-Lee/FAQ.html'}}>it is just a default</Links.EL>.</p>

                <p>                    
                    <div class={styles.quote}>
                        <span>The mother of bad web design conventions is the decision to make hypertext links blue. Other colors would have been a better choice and would have increased the reading speed of the anchor text by a few percent. It is unfortunate to put the most important text on the page in a color that is known to reduce readability.</span>
                        <div><Links.EL link={{source: 'https://www.nngroup.com/articles/when-bad-design-elements-become-the-standard/'}}>When Bad Design Elements Become the Standard</Links.EL> <span>Jakob Nielsen</span></div>
                    </div>
                </p>

                <p>
                    <div>Dark blue, or <span class={styles.defaultPurple}>purple</span> is used for links the user has clicked on.</div>
                </p>

                <p>The reason to distinguish between visited and unvisited links is to save us from linking to pages we have already visited. This is especially important if the link is to an external source.</p>

                <p>
                    <div>It is tempting to override the defaults for links, and there are sound reasons for doing so. I will come to these.</div>
                </p>

                <p>Developers have a responsibility to seek guidance as to which colours are legible. WebAIM is an advocate on behalf of those with disabilities but their advice is pertinent to everyone. For this site, I have followed their recommendations on <Links.EL link={{source:'https://webaim.org/blog/wcag-2-0-and-link-colors/'}}>appropriate colours for links</Links.EL>. Since the default colours for un/visited sites are blue and dark blue/purple I have selected hues of these two that work in both light and dark mode.</p>

                <p>You can check my selections for <Links.EL link={{source:'https://wave.webaim.org/report#/https://www.the-public-good.com/'}}>contrast errors</Links.EL>.</p>
                
                <h3>Underlining issues</h3>

                <p>By default hyperlink text is underlined. Does this affect our reading speed or comprehension?</p>

                <p>The British Dyslexia Society's friendly style guide points out that <Links.EL link={{source:'https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide'}}>underlining text</Links.EL> can cause text to run together because the line cuts through the descenders of characters like g and y. The word <a class={styles.a} href="https://en.wiktionary.org/wiki/poppy">poppy</a> for example.</p>
                
                <p>
                On the other hand, WebAIM warns us not to neglect readers with forms of colour blindness:
                    <div class={styles.quote}>
                        <span>Make sure that colors are not the only method of conveying important information. </span >
                        <Links.EL link={{source:'https://webaim.org/articles/visual/colorblind'}}>Designing for Color-blindness</Links.EL>                        
                    </div>
                </p>

                <p>One way to satisfy both requirements is to remove the default line and create a new one further down, below the bottom of any descenders (as on this site).</p>

                <p>If you are able to activate mouse over or keyboard focus you will observe changes to links on this site that are part default, part convention.</p>

                <p>These signals confirm that the text is a link, and that it can be activated by clicking, tapping or hitting Enter.</p>

                <h3>Are hyperlinks distracting?</h3>

                <p>Evidence suggests that judicious use of links does not impair understanding, or interrupt the reader's concentration.
                    <div class={styles.quote}>
                        <div>In terms of Web design and layouts, the present results highlight the importance of carefully considering which words are hyperlinked in webpages. The key lesson for Web designers that we have found here is that coloured words do not have any negative impact on reading behaviour.</div>
                        <Links.EL link={{label: 'Gemma Fitzsimmons | The impact of hyperlinks on reading text', source: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210900'}}>The impact of hyperlinks on reading text</Links.EL>
                    </div>
                </p>

                <p>Solitary links are salient and may be distracting; a sprinkling of links, composed of common words, singly or in or short sentences, seems to be the best approach. It is recommended to use words of high frequency (words familiar to the target audience). The more relevant, specific and pithy the better.
                    <div class={styles.quote}>
                        <div>Hyperlinks highlight important information and suggest additional content, which for more difficult concepts, invites rereading of the preceding text.</div>
                        <div><Links.EL link={{label: 'Gemma Fitzsimmons | The impact of hyperlinks on reading text', source: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210900'}}>The impact of hyperlinks on reading text</Links.EL></div>
                    </div>
                </p>

                <p>
                    <div>Meaningful and distinguishable link text is essential for users of screen readers who may scan links independently of other content. If the text is too long, alternative text can be placed in an <Links.EL link={{label: 'MDN Using the aria-label attribute', source: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute'}}>aria-label attribute</Links.EL> which will not be seen by sighted readers.</div>
                </p>

                <p>In order to minimise distraction some sites gather links in one place. In a short article this may be at the end of the piece. Some BBC articles group and list links as they go along, a technique which keeps the links close to the text they support.</p>

                <h3>Links to content on the same site</h3>

                <p>Links are agnostic as to where they live, they simply connect documents, often pages, no matter where they are.</p>

                <p>The Guardian, a large site with many internal references across different sections of the paper, makes no distinction between external and internal links, or between visited and unvisited links.</p>

                <p>The BBC also treats internal and external links alike but it signals the source of external links in the text of the link, for example, 'according to the Red Cross, citing government data.' Visited links are gray rather than black but neither the difference nor reason for the difference is evident.</p>

                <p>Some sites differentiate between internal and external links by <Links.EL link={{source:'https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links'}}>including an icon on the link</Links.EL> but not everyone recognises or understands these icons which can also be confused with indicators that the link will open in a new tab or window.</p>

                <h3>Should links open in a new window?</h3>

                <p>The W3C (World Wide Web Consortium) recommends that links open in the same window or tab as the current page.
                    <div class={styles.quote}>
                        <div>In general, it is better not to open new windows and tabs since they can be disorienting for people, especially people who have difficulty perceiving visual content.</div>
                        <Links.EL link={{source:'https://www.w3.org/TR/WCAG20-TECHS/G200.html'}}>Opening new windows and tabs from a link only when necessary</Links.EL>
                    </div>
                </p>

                <p>Exceptions include opening a help page while completing a form, or to avoid leaving a page where the user is logged in. But opening in a new window or tab should always be signalled, e.g. (this link opens in new tab).</p>

                <p>If the user wishes to open a new window or tab, that option remains available.</p>

                <p>If you don't know the keyboard shortcuts, here they are:
                    <ul>
                        <li>Mac: ⌘ + link</li>
                        <li>Windows & Linux: Ctrl + link</li>
                    </ul>
                </p>

                <p>One objection to opening external links in the same tab is that clicking the back button causes the page to reload. Since this behaviour is more sustainable (the energy required to resend the page is saved), you may choose to favour this approach over one that promotes accessibility. This website employs <Links.EL link={{source:'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'}}>service workers</Links.EL> so that, for the majority of users, the page loads from a local cache when they go back.</p>

                <p>If you would like to read a variety of opinions on the rights and wrongs of opening links in new tabs (or windows), I recommend <Links.EL link={{source:'https://uxmovement.com/navigation/why-external-links-should-open-in-new-tabs/'}}>Why External Links Should Open in New Tabs</Links.EL>, especially the comments section.</p>

                <h3>Web addresses and the address bar</h3>

                <p>The relationship between the web address that appears in the address bar and hyperlinks is fundamental. The source of the hyperlink is the web address.</p>

                <p>According to a <Links.EL link={{source:'https://try.alexa.com/resources/website-traffic-sources'}}>report on what drives web traffic</Links.EL> from the data analytics company Alexa, between 30% and 50% of website visits come about by users entering the address they want in the address bar. The figure is at the higher end for business websites, and sectors where trust is important such as personal finance.</p>

                <p>Where they are visible web addresses provide useful information and should be human readable and screen-reader friendly.</p>

                <p>They provide insight on the structure of the web site and where <Links.EL link={{source:'https://developer.mozilla.org/en-US/docs/Glossary/Breadcrumb'}}>breadcrumbs</Links.EL> are used there should be consistency between the two.</p>

                <h3>Fitts's law</h3>

                <p>Hyperlinks should be recognisable for all readers and on all devices. They should also be easy to click or tap.</p>

                <p><Links.EL link={{source:'https://lawsofux.com/fittss-law/'}}>Fitts's law</Links.EL> is a function of the ratio between the distance to a target and the width of that target. In other words, clicking on or tapping a link should not require dexterity. As well as being large enough, this requires links to be sufficiently spaced.</p>

                <h3>Summing up</h3>

                <p>The BBC and The Guardian use different colours across their sites, including blue, black and red. But their links are always underlined, and the line is always below the bottom of descenders.</p>

                <p>The conventions around links have shifted. But underlined text that doesn't interfere with the text is a prerequisite.</p>    

                <p>Differentiating between visited links and unvisited links depends on how useful this information is to the reader.</p>

                <p>Some sites use an icon to indicate that the source of a link is external. The website <Links.EL link={{source:'https://www.gov.uk/'}}>GOV.UK</Links.EL> removed them because they found that <Links.EL link={{source:'https://designnotes.blog.gov.uk/2016/11/28/removing-the-external-link-icon-from-gov-uk/'}}>the icon is obscure and ambiguous</Links.EL>. </p>

                <p>Hyperlinks lead us from one document to another irrespective of the site to which they belong. They link ideas, opinions, people, and stories in order to explain, contradict and clarify. The links themselves should be clear, accessible and consistent, not only within a site but across sites.</p>

                <Top></Top>

            </section>

            <Published strDate='Thu 13 May 2021'></Published>
    
            <section>
                <h2>Links to external references</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>

            <Links.RelatedLinks links={[{value:'web-development/following-the-rules-to-a-well-structured-web-page',text:'Following the rules to a well-structured web page'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Hyperlinks;