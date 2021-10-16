import { useEffect, useState } from 'preact/hooks';

import CanvasChart from 'pages/dashboard/canvas-chart';
import Links from 'components/links/Links';

import { ChartType } from 'lib/enums';

import styles from 'pages/dashboard/Dashboard.module.scss';

const CarbonIntensity = () => {

    // The UK grid is, on average, more decarbonised than Europe, which means that comparing emissions may be misleading.

    const dataEmissions = [ //gCO2
        {
            type: '1 hr video streaming',
            emissions: 55,
            src: 'Carbon Trust',
            link: 'https://prod-drupal-files.storage.googleapis.com/documents/resource/public/Carbon-impact-of-video-streaming.pdf',   
            equivalents: [ 'boiling an average electric kettle three times' ]       
            // 50% device; 50-inch TV * 4.5 times vs laptop and 9 * mobile (is 90% of TV)
        },
        {
            type: '1 hr video streaming',
            emissions: 36,
            src: 'International Energy Agency IEA',
            link: 'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines',             
        },
    ];

    // intensity: Wh/device-hour; emissions: 36gCO2e/device-hour

    const bbcData = [
        //https://www.bbc.co.uk/rd/blog/2021-06-bbc-carbon-footprint-energy-envrionment-sustainability
        {
            type: 'satellite',
            intensity: 116,
            emissions: 36,
        },
        {
            type: 'cable',
            intensity: 116,
            emissions: 36,
        },
        {
            type: 'iPlayer',
            intensity: 109,
            emissions: 33,
        },
        {
            type: 'IPTV',
            intensity: 106,
            emissions: 32,
        },
        {
            type: 'terrestrial',
            intensity: 56,
            emissions: 17,
        },
    ];
};

export default CarbonIntensity;