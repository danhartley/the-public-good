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

const graphDefinition = `
    flowchart TB;
    classDef default stroke-width:0px, height:50px, line-height:1.8, y:-26px;
    classDef matrix fill:powderblue;
    classDef implementation fill:palegreen;
    classDef quarantine fill:pink;
        %% A([Project]);
        B([Work]);
        C([Requirements]);
        D([Pledges]);
        E([Decision Matrix or Pledge Checklist]);
        F([Vote]);
        G([Honours Pledge]);
        H([Breaks Pledge]);
        I([Implementation]);
        J([Quarantine]);
        B --> C;
        B --> D;
        C --> E;
        D --> E;
        E --> F;
        F --> G & H;
        G --> I;
        H --> J;
        class E matrix;
        class I implementation;
        class J quarantine;
`;

declare global {
    interface Window { mermaid: any; }
}

const Workflow = () => {

    // useful ref: https://github.com/DanShai/useMermaid-hook

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