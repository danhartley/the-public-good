import { useState, useEffect } from 'preact/hooks';

import Layout from 'components/layout/layout';
import Links from 'components/links/Links';
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
            cell.addEventListener('click', () => toggleBlurb((cell as HTMLElement).innerText));
        });

    });

    const projectLinks = projects => {
        
        if(!projects) return null;

        return projects.map(p => {
            return (
                <>
                    <br />
                    <a class={styles.externalLink} href={p.src}>{p.title}</a>
                </>
            )
        })
    }

    const rows = data.companies.map(c =>
        <>
            <tr>
                <td>
                    <span>{c.name}</span>
                    { projectLinks(c.projects) }
                </td>
                <td>{ new Date(c.dates.start).toLocaleDateString('en-GB') + " - " + (c.dates.end ? (new Date(c.dates.end)).toLocaleDateString('en-GB') : "") }</td>
                <td>{c.roles.join(', ')}</td>
                <td>{c.languages.join(', ')}</td>
                <td>{c.technologies.join(', ')}</td>
            </tr>
            <tr>
                <td id={c.name.split(' ').join('')} class={c.name === company ? styles.showBlurb : styles.hideBlurb} colSpan={5} >{c.blurb}</td>
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
    const frameworks = getSkills('frameworks');
    const tooling = getSkills('tooling');

    return (

        <div class={styles.wideWrapper}>
            <Layout main={'Daniel Hartley'} strapline={'Web developer & writer'} header={'Curriculum Vitae'} title={'Curriculum Vitae'} description={'Curriculum Vitae'}>
                <p>
                    I am a web developer with 20+ years experience. I love to code, to design, and to build web sites and apps that are useful and beneficial.
                </p>
                <p>
                    I initiate and enable new projects, and improve existing ones.
                </p>
                <p>
                    I am an advocate of responsible web development - building high performance websites that are sustainable, accessible and fast.
                </p>
                <p>
                As a core contributor on the open source project <Links.EL link={{source:"https://responsibletech.work/"}}>ResponsibleTech.Work</Links.EL>, I work on practices and tools to improve decision making and promote thoughtful programming and design.
                </p>
                <p>
                    At <Links.IL link={{source: ''}}>The Public Good</Links.IL> I write articles on the climate crisis and responsible web development.
                </p>
                <p>
                    At Venga Vamos I imagine, design and build web apps.
                </p>
                <Companies />
                <h2>Web languages & formats</h2>
                <section>
                    <FloatingBarChart dataSources={languages} config={{colours:zesty[2], units:'Languages & formats'}} />
                </section>
                <h2>Frameworks, preprocessors, patterns & libraries</h2>
                <section>
                    <FloatingBarChart dataSources={frameworks} config={{colours:zesty[1], units:'Frameworks & preprocessors'}} />
                </section>
                <h2>Task runners, testing, tracking & source control</h2>
                <section>
                    <FloatingBarChart dataSources={tooling} config={{colours:zesty[0], units:'Tools'}} />
                </section>
                <h2>Web hosting, DBs & CDNs</h2>
                <section>
                    <FloatingBarChart dataSources={hosting} config={{colours:zesty[3], units:'Services'}} />
                </section>
                <section>
                <h2>Education</h2>
                    {
                        data.education.map(e => {
                            return <div>{e}</div>
                        })
                    }
                </section>
                <section>
                    <h2>Contact</h2>
                    <p><div class={styles.internalLink}>Profile: <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/danhartley/">linkedin.com/in/danhartley</a></div></p>
                    <p><div>Mobile: <span>+351 967 256 941</span></div></p>
                    <p><div class={styles.internalLink}>Email: <a rel="noreferrer" target="_blank" href="mailto:danhartleybcn@gmail.com?subject=Web%20development%20enquiry">Web development enquiry</a></div></p>
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
