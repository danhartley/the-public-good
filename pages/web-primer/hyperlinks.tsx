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

    return (
        <Layout header="Hyperlinks" title="Hyperlinks" description={'Hyperlinks'}>
            <section class={styles.card}>

                <p><div class={styles.inset}><span class={styles.italic}>Reading time: 6 minutes</span></div></p>

                <h2>A hyperlink primer</h2>

                <p>Hyperlinks, or simply links, are references to data elsewhere. The links in this article are to pages or documents on other web sites. They are distinguished by their unique web address, or <Links.ExternalLink link={{source:'https://en.wikipedia.org/wiki/URL'}}>URL</Links.ExternalLink>.</p>

                <p>
                    <div>The address of this page is <span class={styles.italic}>https://www.the-public-good.com/web-primer/hyperlinks</span>.</div>
                </p>

                <p>Web directories like <Links.ExternalLink link={{source:'https://en.wikipedia.org/wiki/Yahoo!_Directory'}}>Yahoo! Directory</Links.ExternalLink> and <Links.ExternalLink link={{source:'https://en.wikipedia.org/wiki/DMOZ'}}>DMOZ</Links.ExternalLink> were once the predominant means of discovering and accessing web sites. At the outset they were simply categorised lists of web addresses. The emergence of search engines changed this.</p>

                <p>A recent report from <Links.ExternalLink link={{source:'https://try.alexa.com/resources/website-traffic-sources'}}>Alexa</Links.ExternalLink> found that search accounts for 40-60% of visitors to a site, and direct traffic (typically typing in the name of a website) 30-50%. Referrals - links - represent around 10% of visitors to a site, though this is higher, 26.6%, for 'non-standard content' such as this site. A small amount of traffic comes from social media but for news, weather and information this figure rises to 12.2%.</p>

                <p>In addition to links to external sources, there are links on this page to <span class={styles.italic}>internal</span> resources such as the home page. There is also a link which will open your default email application with a new message addressed to my unique email address.</p>

                <h3>Outward bound</h3>

                <p>Linking to other sites respects the right of the user to explore the web freely. Links may also be used to connect to resources used to advance arguments and support claims. External links - also known as outbound links - benefit readers. They also <Links.ExternalLink link={{source:'https://blog.alexa.com/outbound-links-content-marketing/'}}>improve search engine rankings</Links.ExternalLink>.</p>

                <p>
                    <div>The value of external sources is important. I only link to sources whose credentials I trust. I also avoid sites behind paywalls or that bombard the user with pop-ups. I favour sites free of advertising, with few exceptions (<Links.ExternalLink link={{source:'https://www.theguardian.com/'}}>The Guardian</Links.ExternalLink> newspaper is one).</div>
                </p>

                <p>
                    <div>In order to disassociate a site from the source of a link the attributes <Links.ExternalLink link={{source:'https://pointjupiter.com/what-noopener-noreferrer-nofollow-explained/'}}>noopener, noreferrer and nofollow</Links.ExternalLink> can be added.</div>
                </p>

                <p>
                    {/* <div>The <Links.ExternalLink link={{source:'https://www.bbc.com/'}}>BBC</Links.ExternalLink> has a history of humming and hawing over their <Links.ExternalLink link={{source:'https://www.bbc.co.uk/blogs/theeditors/2010/03/bbc_news_linking_policy.html'}}>policy towards external links</Links.ExternalLink>. Their ambivalence is explained in part by their unwillingness to link to content over which they have no control. <Links.ExternalLink link={{label:'LinkedIn home page',source:'https://www.linkedin.com/'}}>LinkedIn</Links.ExternalLink> now looks more favourably on external links in posts that encourage <Links.ExternalLink link={{label:'LinkedIn blog on dwell time',source:'https://engineering.linkedin.com/blog/2020/understanding-feed-dwell-time'}}>'dwell time'</Links.ExternalLink> (not leaving their site). <Links.ExternalLink link={{source:'https://www.theguardian.com/'}}>The Guardian</Links.ExternalLink> newspaper and <Links.ExternalLink link={{source:'https://www.carbonbrief.org/'}}>CarbonBrief</Links.ExternalLink> are liberal with their links, using them heavily to back up their reporting.</div> */}
                </p>

                {/* <p>The exemplary <Links.ExternalLink link={{source:'https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/#getting-ready-planning-and-metrics'}}>front-end performance checklist</Links.ExternalLink> from Smashing Magazine links to hundreds of sources.</p> */}

                <h3>Is blue the warmest colour?</h3>

                <p><div>There are <Links.ExternalLink link={{label: 'MIT Hyperlinking in Journalism', source: 'https://pdos.csail.mit.edu/~neha/hyperlinks/main-no.html'}}>differences of opinion</Links.ExternalLink> as to how to represent links. The default colour for links the user hasn't clicked on is <span class={styles.defaultBlue}>blue</span>.</div></p>

                <p>Why blue? According to Tim Berners-Lee, there is no good reason, <Links.ExternalLink link={{source: 'https://www.w3.org/People/Berners-Lee/FAQ.html'}}>it is just a default</Links.ExternalLink>.</p>

                <p>                    
                    <div class={styles.quote}>
                        <span>The mother of bad web design conventions is the decision to make hypertext links blue. Other colors would have been a better choice and would have increased the reading speed of the anchor text by a few percent. It is unfortunate to put the most important text on the page in a color that is known to reduce readability.</span>
                        <div><Links.ExternalLink link={{source: 'https://www.nngroup.com/articles/when-bad-design-elements-become-the-standard/'}}>When Bad Design Elements Become the Standard</Links.ExternalLink> <span>Jakob Nielsen</span></div>
                    </div>
                </p>

                <p>
                    <div>Dark blue, or <span class={styles.defaultPurple}>purple</span> is used for links the user has clicked on.</div>
                </p>

                <p>The reason to distinguish between visited and unvisited links is to save the reader linking to pages they have already visited. This is especially important if the link is to an external source.</p>

                <p>The default colours can be overridden as I have done for this site. In order to meet user's expectations I followed WebAIM's advice on <Links.ExternalLink link={{source:'https://webaim.org/blog/wcag-2-0-and-link-colors/'}}>Link Colors</Links.ExternalLink> and used blue and purple hues that provide good colour contrasts. You can <Links.ExternalLink link={{source:'https://wave.webaim.org/report#/https://www.the-public-good.com/'}}>check for contrast errors</Links.ExternalLink> on this site.</p>

                <h3>Underlining issues</h3>

                <p>By default hyperlink text is underlined. How does this affect legibility?</p>

                <p>The British Dyslexia Society's friendly style guide points out that <Links.ExternalLink link={{source:'https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide'}}>underlining text</Links.ExternalLink> can cause text to run together because the line cuts through the descenders of characters like g and y.</p>
                
                <p>
                On the other hand, WebAIM warns us not to neglect readers with forms of colour blindness:
                    <div class={styles.quote}>
                        <span>
                        Make sure that colors are not the only method of conveying important information.
                        </span>
                        <Links.ExternalLink link={{source:'https://webaim.org/articles/visual/colorblind'}}>Designing for Color-blindness</Links.ExternalLink>
                    </div>
                </p>

                <p>One way to satisfy both requirements - I used it on this site - is to remove the default line and create a new one further down, below the bottom of any descenders. I also make this line faint to minimise distraction.</p>

                <p>If you are reading on a desktop you will notice mouse hover or keyboard focus causes the line to darken and the cursor to change to a hand with a pointing finger. The cursor change is a default, the darkening (or other change) a convention.</p>

                <p>
                    <div>It is helpful to distinguish between <span class={styles.italic}>internal</span> links from external links. For this site I use different colours, and a dashed line instead of a solid line (though it turns solid on hover/focus). I don't change the colour of visited internal links. On a site with more internal links it may be helpful to make clear which pages the user has visited.</div>                    
                </p>                
                
                <h3>Are hyperlinks distracting?</h3>

                <p>Evidence suggests that judicious use of links does not impair understanding, or interrupt the reader's concentration.
                    <div class={styles.quote}>
                        <div>In terms of Web design and layouts, the present results highlight the importance of carefully considering which words are hyperlinked in webpages. The key lesson for Web designers that we have found here is that coloured words do not have any negative impact on reading behaviour.</div>
                        <Links.ExternalLink link={{label: 'Gemma Fitzsimmons | The impact of hyperlinks on reading text', source: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210900'}}>The impact of hyperlinks on reading text</Links.ExternalLink>
                    </div>
                </p>

                <p>Solitary links are salient and may be distracting; a sprinkling of links, composed of common words, singly or in or short sentences, seems to be the best approach. It is recommended to use words of high frequency (words familiar to the target audience). The more relevant, specific and pithy the better.
                    <div class={styles.quote}>
                        <div>Hyperlinks highlight important information and suggest additional content, which for more difficult concepts, invites rereading of the preceding text.</div>
                        <Links.ExternalLink link={{label: 'Gemma Fitzsimmons | The impact of hyperlinks on reading text', source: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210900'}}>The impact of hyperlinks on reading text</Links.ExternalLink>
                    </div>
                </p>

                <p>
                    <div>Meaningful and distinguishable link text is essential for users of screen readers, who may scan links independently of other content. If the text is too long, alternative text can be placed in an <Links.ExternalLink link={{label: 'MDN Using the aria-label attribute', source: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute'}}>aria-label attribute</Links.ExternalLink> which will not be seen.</div>
                </p>

                <h3>Where should links open?</h3>

                <p>The W3C (World Wide Web Consortium) recommends that links open in the same window or tab as the current page.
                    <div class={styles.quote}>
                        <div>In general, it is better not to open new windows and tabs since they can be disorienting for people, especially people who have difficulty perceiving visual content.</div>
                        <Links.ExternalLink link={{source:'https://www.w3.org/TR/WCAG20-TECHS/G200.html'}}>Opening new windows and tabs from a link only when necessary</Links.ExternalLink>
                    </div>
                </p>

                <p>Exceptions include opening a help page while completing a form, or to avoid leaving a page where the user is logged in. But opening in a new window or tab should always be signalled, e.g. (opens in new tab).</p>

                <p>If the user wishes to open a new window or tab, that option remains available.</p>

                <p>One objection to opening external links in the same tab is that clicking the back button causes the page to reload. Since this behaviour is more sustainable (the energy required to send the page is saved), you may choose to favour this approach over one that promotes accessibility. This website employs <Links.ExternalLink link={{source:'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'}}>service workers</Links.ExternalLink> so that, for the majority of users, the page loads from a local cache when the user returns.</p>

                <p>If you would like to read a variety of opinions on the rights and wrongs of opening links in new tabs (or windows), I recommend <Links.ExternalLink link={{source:'https://uxmovement.com/navigation/why-external-links-should-open-in-new-tabs/'}}>Why External Links Should Open in New Tabs</Links.ExternalLink>, especially the comments section.</p>

                <h3>The look of links</h3>

                <p>The address bar is of less value on devices with smaller screens which is typical of mobiles. Typing in the address bar and copy-and-pasting text is fiddly.</p>

                <p>On larger screens, however, URLs provide useful information. Where possible they should be human readable and screen-reader friendly.</p>

                <p>They can also be used to provide insight to the structure of the web site and where <Links.ExternalLink link={{source:'https://developer.mozilla.org/en-US/docs/Glossary/Breadcrumb'}}>breadcrumbs</Links.ExternalLink> are used there should be consistency between the two.</p>

                <h3>Fitts's law</h3>

                <p>Hyperlinks should be recognisable for all readers and on all devices. They should also be easy to select.</p>

                <p><Links.ExternalLink link={{source:'https://lawsofux.com/fittss-law/'}}>Fitts's law</Links.ExternalLink> is a function of the ratio between the distance to a target and the width of that target. In other words, clicking on or tapping a link should require no great dexterity.</p>

            </section>

            <section class={styles.card}>
                <p>
                    <span class={styles.published}>Published: {new Date('Mon 10 May 2021').toDateString()}</span>
                </p>
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