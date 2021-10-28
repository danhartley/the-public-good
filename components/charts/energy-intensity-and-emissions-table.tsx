import { useEffect, useState } from 'preact/hooks';

import Formula from 'components/tools/formula';

import styles from 'components/dashboard/Dashboard.module.scss';

const EnergyAndEmissionsTable = ({setEnergyAndEmissionsState}) => {

    const dataSources = [
        {
            id: 1,
            name: 'Website Carbon (grey power)',
            link: 'https://www.websitecarbon.com/how-does-it-work/',
            energy: 1.8,
            emissions: 475,
            selected: true
        },
        {
            id: 2,
            name: 'The Shift Project (EU)',
            link: 'https://theshiftproject.org/en/carbonalyser-browser-extension/',
            energy: 0.23,
            emissions: 276,
            selected: false
        },
        {
            id: 3,
            name: 'Website Carbon (green power)',
            link: 'https://www.websitecarbon.com/how-does-it-work/',
            energy: 1.8,
            emissions: 33.4,
            selected: false
        },
        {
            id: 4,
            name: 'IEA',
            link: 'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines',
            energy: 0.077,
            emissions: 475,
            selected: false
        },
        {
            id: 5,
            name: 'IEA (France)',
            link: 'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines',
            energy: 0.077,
            emissions: 26,
            selected: false
        },
        {
            id: 6,
            name: 'Sustainable Web Design',
            link: 'https://sustainablewebdesign.org/calculating-digital-emissions/',
            energy: 0.81,
            emissions: 475,
            selected: false
        },
        // {
        //     id: 4,
        //     name: 'marmelab',
        //     link: 'https://marmelab.com/blog/2021/03/04/argos-comparing-the-energy-consumption-of-two-web-stacks.html',
        //     energy: 0.011,
        //     emissions: ??,
        //     selected: false
        // },
        // {
        //     id: 5,
        //     name: 'Anders Andrae (fixed 2020)',
        //     link: 'https://www.researchgate.net/profile/Anders-Andrae/publication/342643762_New_perspectives_on_internet_electricity_use_in_2030/links/5efe34a3299bf18816fb82eb/New-perspectives-on-internet-electricity-use-in-2030.pdf',
        //     energy: '.085',
        //     emissions: '1',
        //     selected: false
        // },
        // {
        //     id: 6,
        //     name: 'Anders Andrae (wireless 2020)',
        //     link: 'https://www.researchgate.net/profile/Anders-Andrae/publication/342643762_New_perspectives_on_internet_electricity_use_in_2030/links/5efe34a3299bf18816fb82eb/New-perspectives-on-internet-electricity-use-in-2030.pdf',
        //     energy: '0.195',
        //     emissions: '1',
        //     selected: false
        // },

        // {
        //     id: 5,
        //     name: 'Electricity Intensity of Internet Data Transmission',
        //     link: 'https://www.researchgate.net/publication/318845230_Electricity_Intensity_of_Internet_Data_Transmission_Untangling_the_Estimates_Electricity_Intensity_of_Data_Transmission',
        //     energy: '0.06',
        //     // {
        //     //     low: '0.015',
        //     //     high: '0.06'
        //     // },
        //     emissions: '',
        //     selected: false
        // },
    ];
    
    const [active, setActive] = useState(dataSources[0] as any); // add type!

    const updateStates = state => {
        setActive(state);
        setEnergyAndEmissionsState(state);
    };

    useEffect(() => {
        setEnergyAndEmissionsState(dataSources[0]);
    },[]);

    const rows = dataSources.map(e => <tr>
        <td>
            <div class={e.id === active.id ? styles.checked : null}>
                <input type="radio" checked={e.id === active.id} onClick={() => updateStates(dataSources[e.id - 1])} id={e.id.toString()} name="rbBaselines"></input>
                <label htmlFor={e.id.toString()}>{e.name}</label>
            </div>
        </td>
        <td><div class={e.id === active.id ? styles.checked : null}>{e.energy}</div></td>
        <td><div class={e.id === active.id ? styles.checked : null}>{e.emissions}</div></td>
    </tr>);

    return (<table>
        <caption><strong>Energy intensity & <Formula>CO2</Formula> emissions</strong></caption>
        <thead>
            <tr>
                <th>Provider</th>
                <th>kWh/GB</th>
                <th>gCO2e/kWh</th>
            </tr>
        </thead>
        <tbody>
            { rows }
        </tbody>
    </table>);
}

export default EnergyAndEmissionsTable;