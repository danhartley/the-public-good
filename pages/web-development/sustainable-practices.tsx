import Links from 'components/links/Links';
import Layout from 'components/layout/layout';
import Published from 'components/published/published';
import Top from 'components/top/top';

const ResponsibleDevelopment = () => {

    const externalLinks = [
        {
            "name": "The intro guide to digital eco-design",
            "source": "https://eco-conception.designersethiques.org/guide/en/"
        },
        {
            "name": "Wholegrain Digital | 17 (+3!) ways to make your website more energy efficient",
            "source": "https://www.wholegraindigital.com/blog/website-energy-efficiency/"
        },
        {
            "name": "Greenhouse Gas Protocol",
            "source": "https://ghgprotocol.org/about-us"
        },
        {
            "name": "Making supply-chain decarbonization happen | McKinsey",
            "source": "https://www.mckinsey.com/business-functions/operations/our-insights/making-supply-chain-decarbonization-happen"
        },
        {
            "name": "The future of trade and value chains | McKinsey",
            "source": "https://www.mckinsey.com/featured-insights/innovation-and-growth/globalization-in-transition-the-future-of-trade-and-value-chains"
        },
        {
            "name": "ClimateActon.tech | Slack workspace",
            "source": "https://join.slack.com/t/climate-tech/shared_invite/zt-5jeik1qb-0VCZM6I7sDSYHqvrSnsCXQ"
        },
        {
            "name": "Work On Climate | Slack workspace",
            "source": "https://join.slack.com/t/workonclimate/shared_invite/zt-sprz80wl-ZhdzmySNy056nPluAbONpg"
        },
    ];

    return (
        <Layout header="Sustainable practices" rt="4" title="Web development | Sustainable practices" description={'Setting sustainable goals is the responsibility of everyone involved in creating a digital product.'} image='https://live.staticflickr.com/65535/51338545428_06af07500a_c_d.jpg'>

            <section>

                <h2>Accounting for carbon emissions is more than a box ticking exercise.</h2>

                <p>ESG - Environmental, Social, and Corporate Governance - is a set of metrics used to assess a company's social standing. Sustainability is a key factor in determining how successful a company is in this respect.</p>
                <p>Regulation, public scrutiny and the concerns of employees and users mean fewer companies can ignore the impact of their products on the planet.</p>

                <p>Web and app developers monitor and report on the performance of software running on the Internet, set budgets against which a changing codebase can be checked, monitor progress using browser tools and extensions to review a range of metrics, and report on data from live sites to assess performance outside lab conditions.</p>

                <p>But the performance of a website reflects upon everyone who contributes to it. Design, marketing, and product decisions all affect the 3 pillars of responsible development: performance, accessibility, and sustainability.</p>

                <h3>Performance</h3>
                <p>Content that downloads quickly and that is responsive without delay is critical to attracting and retaining users.</p>
                <p>For users coming to your site via search or external links, a good SEO strategy is essential; directing users to the page they want first time benefits everyone.</p>
                <p><Links.EL link={{source:'https://www.webpagetest.org/'}}>How fast is your site?</Links.EL></p>

                <p>Well planned features can be configured, tested, retired or dropped with ease. The least intrusive feature is the one that isn't built.</p>

                <p><Links.IL link={{source:'performance'}}>More on performance</Links.IL></p>
                
                <h3>Accessibility</h3>
                <p>Accessible software is mandated for some but is the responsibility of all. It need not come at a cost requiring only an understanding of HTML semantics, and the additive value of CSS and JavaScript.</p>

                <p><Links.EL link={{source:'https://webaim.org/projects/million/'}}>The WebAIM annual accessibility analysis of the top 1,000,000 home pages.</Links.EL></p>
                <p><Links.EL link={{source:'https://wave.webaim.org/'}}>How accessible is your site?</Links.EL></p>

                <p>If you have the resources, ask users of screen and braille readers to test your site. If not, and you have the patience, use a standard screen reader to navigate your site and to test its functionality.</p>

                <p><Links.IL link={{source:'accessibility'}}>More on accessibility</Links.IL></p>

                <h3>Setting a budget</h3>
                <p>Budgets involve everyone responsible for digital products. Adding new features places a load on every part of the system - more meetings, more designs, more code to maintain, more data to analyse, more bytes running over networks and on devices, the upsetting of users’ mental models, and the penalty of unwinding it all if things don’t work out. Digital products may be lighter than air but they weigh us down.</p>

                <p><Links.EL link={{source:'https://web.dev/use-lighthouse-for-performance-budgets/'}}>How to set a budget.</Links.EL></p>                
                <p><Links.EL link={{source:'https://web.dev/measure/'}}>Measure the performance of your website.</Links.EL></p>

                <h3>Sustainability</h3>
                <p>Websites and native apps have been growing in size, making greater demands on servers, networks, and user devices. The toll a piece of software makes on the environment depends on where the boundaries of its energy use are drawn. Study of this complex problem is in its infancy.</p>
                <p>In recent years, the additional energy cost of Internet use has been mitigated by the improved efficiency of data centres, networks and devices. The cost of moving bytes around is cheap to creators. For customers with poor connectivity, data limits, low end devices or old devices, bloated sites hurt. And we all pay a price in increased carbon emissions.</p>

                <p><Links.EL link={{source:'https://www.thegreenwebfoundation.org/green-web-check'}}>How sustainable is your site host?</Links.EL> </p>
                <p><Links.EL link={{source:'https://www.smashingmagazine.com/2019/01/save-planet-improving-website-performance/'}}>Smashing Magazine | How Improving Website Performance Can Help Save The Planet.</Links.EL> </p>

                <h3>Out of sight no longer cuts the mustard</h3>

                <p>As a percentage of world energy consumption, digital is rising. Companies will have to account for their own carbon emissions, and those of their energy suppliers (Scope 1 and Scope 2). Emissions from everything else - infrastructure, transport, general services (Scope 3) - is harder to account for. But companies that make things, trade, or sell physical goods may in time become accountable through regulation. In some sectors it will be driven by the expectations of their customers - and their employees.</p>

                <p>As data related to carbon emissions, water usage, land use change and the political and social conditions under which products are made become available, companies will have a choice as to how transparent they wish to be.</p>

                <p>A rich stream of product data is an opportunity to extend customer contact throughout the lifecycle of that product.</p>

                <p><Links.EL link={{source:'https://www.mckinsey.com/business-functions/operations/our-insights/making-supply-chain-decarbonization-happen'}}>McKinsey & Co. | Making supply-chain decarbonization happen.</Links.EL> </p>

                <p><Links.IL link={{source:'sustainability'}}>More on sustainability</Links.IL></p>

                <h3>Setting up a green team</h3>                
                <p>You don't need permission to gather together like-minded people who want to decarbonise your company's website, or to introduce practices that reduce its impact on the planet.</p>
                <p>Green teams are groups of people acting - with or without the support or blessing of their company - to improve the sustainable practices of the organisation of which they are a part.</p>
                
                <p><Links.EL link={{source:'https://green.harvard.edu/tools-resources/how/10-tips-successful-green-team'}}>Harvard | 10 tips for a successful Green Team.</Links.EL> </p>

            <Top></Top>

            </section>

            <Published strDate='Tues 27 July 2021'></Published>

            <section>
                <h2>Links to external references</h2>
                <Links.ExternalLinksList links={externalLinks} />
            </section>

            <Links.RelatedLinks links={[{value:'architecture',text:'Architecture'},{value:'performance',text:'Performance'},{value:'sustainability',text:'Sustainability'},{value:'performance',text:'Performance'},{value:'web-development/sociable-contract',text:'The sociable contract'}]}></Links.RelatedLinks>

        </Layout>
    )

};

export default ResponsibleDevelopment;