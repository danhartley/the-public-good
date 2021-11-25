import { useState, useEffect } from 'preact/hooks';

import Layout from 'components/layout/layout';
import FloatingBarChart from 'pages/personal/charts/floating-bar-charts';

import data from 'pages/personal/cv.json';
import styles from 'components/dashboard/Dashboard.module.scss';
import funcs from 'components/functions/functions';


const now = 2021;

// https://venngage.com/blog/color-blind-friendly-palette/
const zesty = [
    '#F5793A',
    '#A95AA1',
    '#85C0F9',
    '#0F2080',
];

const getYear = date => {
    if(!date) return now;
    const d = new Date(date);
    return d.getFullYear();
};

const getSkills = type => {
    return funcs.sortBy(data.skills.find(s => s.type === type).set.map(s => {
        return {
            source: s.name,
            start: getYear(s.start),
            values: [getYear(s.start), getYear(s.end)]
        };
    }), 'start', 'asc');
};

const download = e => {
    const a = e.target
    funcs.download(a, JSON.stringify(data), 'daniel_hartley_cv.json', 'text/plain');
}

const Companies = () => {

    const [company, setCompany] = useState('');

    useEffect(() => {

        if(typeof window === 'undefined') return;

        const toggleBlurb = name => {     
            name === company 
                ? setCompany('')
                : setCompany(data.companies.find(c => c.name === name).name);
        };

        const clickableCells = Array.from(document.querySelectorAll('td span'));

        clickableCells.forEach(cell => {
            cell.addEventListener('click', () => toggleBlurb(cell.innerText));
        });

    });

    const rows = data.companies.map(c =>
        <>
            <tr>
                <td><span>{c.name}</span></td>
                <td>{ new Date(c.dates.start).toLocaleDateString() + "-" + (c.dates.end ? (new Date(c.dates.end)).toLocaleDateString() : "") }</td>
                <td>{c.roles.join(', ')}</td>
                <td>{c.languages.join(', ')}</td>
                <td>{c.technologies.join(', ')}</td>
            </tr>
            <tr>
                <td id={c.name} class={c.name === company ? styles.showBlurb : styles.hideBlurb} colSpan="5">{c.blurb}</td>
            </tr>
        </>
    );
    
    return (
        rows ? <section class={styles.work}>
            <h2>Work history</h2>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Dates</th>
                        <th>Roles</th>
                        <th>Languages</th>
                        <th>Technologies</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        </section> : null
    )
};

const CurriculumVitae = () => {

    const languages = getSkills('languages');
    const hosting = getSkills('hosting');
    const sourceControl = getSkills('source control');
    const frameworks = getSkills('frameworks');
    const tooling = getSkills('tooling');

    return (

        <div class={styles.wideWrapper}>
            <Layout main={'Daniel Hartley'} strapline={'Web developer'} header={'Curriculum Vitae'} title={'Curriculum Vitae'} description={'Curriculum Vitae'}>
                <Companies />
                <h2>Web languages</h2>
                <section>
                    <FloatingBarChart dataSources={languages} config={{colours:zesty[2], units:'Languages'}} />
                </section>
                <h2>Frameworks & Preprocessors</h2>
                <section>
                    <FloatingBarChart dataSources={frameworks} config={{colours:zesty[1], units:'Languages'}} />
                </section>
                <h2>Testing & building</h2>
                <section>
                    <FloatingBarChart dataSources={tooling} config={{colours:zesty[0], units:'Languages'}} />
                </section>
                <h2>Web hosting & CDNs</h2>
                <section>
                    <FloatingBarChart dataSources={hosting} config={{colours:zesty[3], units:'Hosting'}} />
                </section>
                <h2>Source control</h2>
                <section>
                    <FloatingBarChart dataSources={sourceControl} config={{colours:zesty[0], units:'Hosting'}} />
                </section>
                <p class={styles.download}>
                    <h3>Do you need to download the raw data?</h3>
                    <div class={styles.internalLink}><a id="download" href="https://the-public-good.com/" onClick={download}>Download</a></div>
                </p>
            </Layout>
        </div>
        
    )

};

export default CurriculumVitae;
