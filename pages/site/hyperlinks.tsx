import Link from 'next/link';
import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import styles from 'pages/pages.module.scss';

const Hyperlinks = () => {

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

    const setFocus = e => {
        document.getElementsByTagName('a')[1].focus();
    };

    return (
        <Layout header="Hyperlinks" title="Hyperlinks" description={'Hyperlinks'}>
            <section class={styles.card}>

                <p>The URL (Uniform Resource Locator) of a page appears in the address bar at the top of the screen. The URL of this site is <span class={styles.italic}>https://www.the-public-good.com/site/hyperlinks</span>. Hyperlinks, or links, on other pages, including Google, can target this address.</p>

                <p>Before the emergence of search engines, web directories like <Links.ExternalLink link={{source:'https://en.wikipedia.org/wiki/Yahoo!_Directory'}}>Yahoo! Directory</Links.ExternalLink> and <Links.ExternalLink link={{source:'https://en.wikipedia.org/wiki/DMOZ'}}>DMOZ</Links.ExternalLink> were the predominant means of discovering and accessing web sites.</p>

                {/* <p>If you are viewing this page on a desktop the target of a link will appear in the status bar at bottom left of the screen when you hover the cursor over it, or focus on it using the keyboard. When you click on a link messages flash up describing the status of your request.</p> */}

                {/* <p><button onClick={setFocus} class={styles.btn}>Click this button to focus on the next link</button></p>

                <p>By way of demonstration, click on the button above. Doing so will focus the keyboard on the link to Alexa below. If you click tab you will see focus move from one link to another.</p>                

                <p>
                    <div>Typing the name of a site into the address bar has always been a key part of the web, hence the importance of domain names. The domain for this site is <span class={styles.italic}>the-public-good.com</span>. A page's path is unique - <span class={styles.italic}>/site/hyperlinks</span>.</div>                    
                </p> */}

                {/* <p>
                    <div><span class={styles.bold}>How do we find websites?</span></div>
                </p> */}

                <p>A recent report by <Links.ExternalLink link={{source:'https://try.alexa.com/resources/website-traffic-sources'}}>Alexa</Links.ExternalLink> found that searches account for 40-60% of visitors to a site, and direct traffic (typically typing in the name of a website) 30-50%. Referrals - links - represent around 10% of visitors to a site, though this is higher, 26.6%, for 'non-standard content' such as this site. A small amount of traffic comes from social media but for news, weather and information this figure rises to 12.2%.</p>

                <p>
                    <div><span class={styles.bold}>What purpose do links serve?</span></div>
                </p>

                <p>Linking to other sites respects the right of the user to explore freely. Links may also be used to connect to resources on which the author has drawn to further their argument. Such transparency increases credibility and promotes reasoned debate.</p>

                <p>The <Links.ExternalLink link={{source:'https://www.bbc.com/'}}>BBC</Links.ExternalLink> has a history of humming and hawing over their <Links.ExternalLink link={{source:'https://www.bbc.co.uk/blogs/theeditors/2010/03/bbc_news_linking_policy.html'}}>policy towards external links</Links.ExternalLink>. Their ambivalence is explained in part by their unwillingness to link to content over which they have no control. <Links.ExternalLink link={{source:'https://www.linkedin.com/'}}>LinkedIn</Links.ExternalLink> now looks more favourably on external links in posts that encourage <Links.ExternalLink link={{source:'https://engineering.linkedin.com/blog/2020/understanding-feed-dwell-time'}}>'dwell time'</Links.ExternalLink>. <Links.ExternalLink link={{source:'https://www.theguardian.com/'}}>The Guardian</Links.ExternalLink> newspaper is liberal with its links, as is data-driven website <Links.ExternalLink link={{source:'https://www.carbonbrief.org/'}}>CarbonBrief</Links.ExternalLink>. This exemplary <Links.ExternalLink link={{source:'https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/#getting-ready-planning-and-metrics'}}>front-end performance checklist</Links.ExternalLink> from Smashing Magazine links to hundreds of sources.</p>

                <p>
                    <div><span class={styles.bold}>Is blue the warmest colour?</span></div>
                </p>

                <p><div>How to represent links is more <Links.ExternalLink link={{label: 'MIT Hyperlinking in Journalism', source: 'https://pdos.csail.mit.edu/~neha/hyperlinks/main-no.html'}}>controversial</Links.ExternalLink>. The default colours for links are blue (meaning the user has not visited the link), and purple (the user has visited the link). Text is underlined.</div></p>

                <p>Why blue? According to Tim Berners-Lee, there is no good reason, <Links.ExternalLink link={{source: 'https://www.w3.org/People/Berners-Lee/FAQ.html'}}>it is just a default</Links.ExternalLink>.</p>

                <p>                    
                    <div class={styles.quote}>
                        <span>The mother of bad web design conventions is the decision to make hypertext links blue. Other colors would have been a better choice and would have increased the reading speed of the anchor text by a few percent. It is unfortunate to put the most important text on the page in a color that is known to reduce readability.</span>
                        <div><Links.ExternalLink link={{source: 'https://www.nngroup.com/articles/when-bad-design-elements-become-the-standard/'}}>When Bad Design Elements Become the Standard</Links.ExternalLink> <span>Jakob Nielsen</span></div>
                    </div>
                </p>

                <p>By convention browsers use the default colours for links, but they can be overridden, as I have done for this site. In order to meet user's expectations I followed WebAIM's advice on <Links.ExternalLink link={{source:'https://webaim.org/blog/wcag-2-0-and-link-colors/'}}>Link Colors</Links.ExternalLink>. You can check if there are any <Links.ExternalLink link={{source:'https://wave.webaim.org/report#/https://www.the-public-good.com/'}}>contrast errors</Links.ExternalLink> on this site.</p>

                <p>
                    <div>Because I use a lot of links, I don't underline the text of external links. If you are reading on a desktop you will notice, however, that text is underlined when you hover over it (or focus on it using the keyboard). <span class={styles.italic}>Internal</span> links are in a different colour, and underlined with a dashed line (which turns solid when you hover over them). They do not change colour to indicate you have visited a page because this site has few pages and many cross references.</div>
                </p>
                
                <p>
                    <div class={styles.italic}>NB I may revert to using underlining link text. From the perspective of an individual link, accessibility is improved. There are good <Links.ExternalLink link={{source: 'https://www.a11y-101.com/design/link-visual'}}>reasons for underlining link text</Links.ExternalLink>.</div>
                </p>

                <p><div class={styles.bold}>Are hyperlinks distracting?</div></p>

                <p>Evidence suggests that judicious use of links does not impair understanding, or interrupt the reader's concentration.
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
                    <div><span class={styles.bold}>Where should links open?</span></div>
                </p>

                <p>The W3C (World Wide Web Consortium) recommends that links open in the same window or tab as the current page.
                    <div class={styles.quote}>
                        <div>In general, it is better not to open new windows and tabs since they can be disorienting for people, especially people who have difficulty perceiving visual content.</div>
                        <Links.ExternalLink link={{source:'https://www.w3.org/TR/WCAG20-TECHS/G200.html'}}>Opening new windows and tabs from a link only when necessary</Links.ExternalLink>
                    </div>
                </p>

                <p>Exceptions include opening a help page while completing a form, or leaving a page where the user is logged in. But opening in a new window or tab should always be signalled, by adding for example a warning: '(opens in new tab)'.</p>

                <p>If the user wishes to open a new window or tab, that option remains available.</p>

                <p>One objection to opening external links in the same tab is that clicking the back button causes the page to reload. Since this behaviour is more sustainable (the energy required to send the page is saved), you may choose to favour this approach over one that promotes accessibility. This website employs <Links.ExternalLink link={{source:'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'}}>service workers</Links.ExternalLink> so that, for the majority of users, the page loads from a local cache.</p>

                <p>If you would like to read a variety of opinions on the rights and wrongs of opening links in new tabs (or windows), I recommend <Links.ExternalLink link={{source:'https://uxmovement.com/navigation/why-external-links-should-open-in-new-tabs/'}}>Why External Links Should Open in New Tabs</Links.ExternalLink>, especially the comments section.</p>

                <p>
                    <div><span class={styles.bold}>The status bar</span></div>
                </p>

                <p>Back to the beginning…</p>

            </section>
        
            <section class={styles.card}>
                <h2>External Links</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>
            <Links.RelatedLinks links={[{href:'contract',title:'Sociable contract'}]}></Links.RelatedLinks>
        </Layout>
    )
};

export default Hyperlinks;