import { useEffect, useState, useRef } from 'preact/hooks';

const config = {
    startOnLoad:false,
    flowchart:{
        useMaxWidth:true,
        htmlLabels:true
    },
    theme: "base",
    themeVariables: { 
          'primaryColor': 'orange'
        , 'edgeLabelBackground':'#ffffee'
    },
    themeCSS:'.label { font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif, font-size: 16px; }'
};

const workflowGraphDefinition = `
    flowchart TB;
    classDef default stroke-width:0px, height:50px, line-height:1.8, y:-26px;
    classDef optional fill:powderblue;
    classDef implementation fill:palegreen;
    classDef quarantine fill:pink;
        
        T([Thinking, Planning, Doing]);
        PC([Pledge checklist]);
        I([Implementation]);
        Q([Quarantine]);
        
        S([Selecting, Filtering]);
        C([Pledges & requirements]);
        DM([decision matrix]);
        V([Voting]);
        HP([Honours pledge]);
        BP([Breaks pledge]);
        I2([Implementation]);
        Q2([Quarantine]);
        
        T --> PC;
        PC --> I;  
        PC --> Q;  
        %% T --> I;
        
        S --> C;
        S --> I2;
        C --> DM;
        DM --> V;
        V --> BP & HP;
        BP --> Q2;
        HP --> I2;

        class DM,PC,V,BP,HP optional;
        class I,I2 implementation;
        class Q,Q2 quarantine;
`;

const pledgeWorksGraphDefinition = `

    flowchart LR;

    classDef default stroke-width:0px, height:60px, line-height:1.5, y:-30px, fill:powderblue;

    R[Requirements];
    P{Pledges};
    O((Outcome));

    R --> P;
    P --> O;

`;

// const graphDefinition = workflowGraphDefinition;
const graphDefinition = pledgeWorksGraphDefinition;


declare global {
    interface Window { mermaid: any; }
}

const Workflow = () => {

    // useful ref: https://mermaid-js.github.io/mermaid/#/README
    // syntax: https://mermaid-js.github.io/mermaid/#/theming

    const [loaded, setLoaded] = useState(false);
    const [svg, setSvg] = useState<string>('');

    useEffect(() => {                    
            const scriptTag = document.createElement('script');
            scriptTag.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
            scriptTag.addEventListener('load', () => setLoaded(true));
            document.body.appendChild(scriptTag);      
    }, []);

    useEffect(() => {
        if(!loaded) return;                
        window.mermaid = window.mermaid || {};
        (window as any).mermaid = window.mermaid as any || {};
        window.mermaid.initialize(config);
        window.mermaid.mermaidAPI.render('id', graphDefinition, svGraph => {
            setSvg(svGraph);
        });
    }, [loaded]);

    return (
        loaded && svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : null
    )
};

export default Workflow;