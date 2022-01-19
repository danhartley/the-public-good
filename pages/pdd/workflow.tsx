import { useEffect, useState, useRef } from 'preact/hooks';
// import mermaid from 'mermaid';

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
        B([Request]);
        C([Requirements]);
        D([Pledges]);
        E([Decision Martix]);
        F([Vote]);
        G([Honours Pledge]);
        H([Breaks Pledge]);
        I([Implementation]);
        J([Quarantine]);
        %% A --> B;
        B --> C;
        B --> D;
        %% C <--> D;
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

const Workflow = () => {

    // useful ref: https://github.com/DanShai/useMermaid-hook

    const [loaded, setLoaded] = useState(false);
    const [svg, setSvg] = useState(false);

    useEffect(() => {                    
            const scriptTag = document.createElement('script');
            scriptTag.src = "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js";
            scriptTag.addEventListener('load', () => setLoaded(true));
            document.body.appendChild(scriptTag);      
    }, []);

    useEffect(() => {
        if(!loaded) return;
        mermaid.initialize(config);
        mermaid.mermaidAPI.render('id', graphDefinition, svGraph => {
            setSvg(svGraph);
        });
    }, [loaded]);

    return (
        loaded && svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : null
    )
};

const Workflow2 = () => {

    // https://github.com/mermaidjs/mermaid-webpack-demo/blob/master/index.html
    // https://mermaid-js.github.io/mermaid/#/usage?id=usage-with-webpack

    const [svg, setSvg] = useState(null);

    useEffect(() => {

        mermaid.mermaidAPI.initialize({
            startOnLoad:false
        });

        const insertSvg = svgCode => {
            setSvg(svgCode);
            console.log("svgCode")
        };
    
        mermaid.mermaidAPI.render('graphDiv', graph, insertSvg);

    }, []);

    return (
        svg ? <div class='mermaid'>{svg}</div> : null
    );
};

export default Workflow;