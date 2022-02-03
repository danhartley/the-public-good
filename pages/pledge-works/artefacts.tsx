import Links from 'components/links/Links';

const Appendix = () => {

    const links = [
        {
            "name": "ResponsibleTech.Work Pledges",
            "source": "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZcoudvThs0sZU-L87_ylopljM5Gh3Mq66KcWOvFK0gQ3G8krcxwR7TpvoGWkyKH6comq3xG1AR7-p/pubhtml?gid=232094584&single=true"
        },
        {
            "name": "Project pledges for Pledge Works",
            "source": "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZcoudvThs0sZU-L87_ylopljM5Gh3Mq66KcWOvFK0gQ3G8krcxwR7TpvoGWkyKH6comq3xG1AR7-p/pubhtml?gid=622127635&single=true"
        },
    ];

    return (
        <>
            <h3 id="appendix">Appendix</h3>
            <blockquote>
                <strong>Pledge Works</strong> is a <strong>ResponsibleTech.Work</strong> collaboration between Alja Isaković, Daniel Hartley & Chris Oram.
            </blockquote>
            <Links.ExternalLinksList links={links}></Links.ExternalLinksList>
        </>
    )
};

export default Appendix;