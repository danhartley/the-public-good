const InternetTraffic = () => {

    //https://www.cisco.com/c/dam/m/en_us/solutions/service-provider/vni-forecast-highlights/pdf/United_Kingdom_2021_Forecast_Highlights.pdf

    // In the United Kingdom, the average Internet user will generate 140.0 Gigabytes of Internet traffic per month in
    // 2021, up 159% from 54.0 Gigabytes per month in 2016, a CAGR of 21%

    // In the United Kingdom, the average Internet household will generate 302.0 Gigabytes of Internet traffic per
    // month in 2021, up 163% from 114.9 Gigabytes per month in 2016, a CAGR of 21%.

    const data = [
        {
            year: 2019,
            country: 'UK',
            total: {
                tonnes: 369880000,
                src: 'https://ourworldindata.org/co2-emissions'
            },
            population: {
                number: 66816000,
                year: 2019,
                src: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates'
            }
        }

        // 5.538 tonnes per person

    ];

};

export default InternetTraffic;