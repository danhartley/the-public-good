const PageWeights = () => {

    const pg = [
        {
            provider: 'Chrome dev tools',
            src: 'https://www.the-public-good.com/',
            requests: 40,
            weight: 200
        },
        {
            provider: 'Firefox dev tools',
            src: 'https://www.the-public-good.com/',
            requests: 20,
            weight: 130
        },
        {
            provider: 'Safari dev tools',
            src: 'https://www.the-public-good.com/',
            requests: 30,
            weight: 520
        },
        {
            provider: 'Pingdom Website Speed Test',
            src: 'https://tools.pingdom.com/',
            requests: 42,
            weight: 235.1
        },
        {
            provider: 'Yellowlab tools',
            src: 'https://yellowlab.tools/',
            requests: 31,
            weight: 157
        },
        {
            provider: "Google PageSpeed Insights",
            src: "https://developers.google.com/speed/pagespeed/insights/",
            requests: 25,
            weight: 125.9
        },
        {
            provider: "WebPageTest | Catchpoint",
            src: 'https://www.webpagetest.org/',
            requests: 28,
            weight: 106
        },
        {
            provider: 'What Does My Site Cost?',
            src: 'https://whatdoesmysitecost.com/',            
            weight: 70
        },
    ]
};

export default PageWeights;