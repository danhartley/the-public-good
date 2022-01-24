import { useEffect, useRef, useState } from "preact/hooks";
import * as d3 from "d3";
import * as venn from "venn.js";

// https://github.com/upsetjs/venn.js

const V1 = () => {

    const A = "Proposed cost per tonne";
    const B = "True cost";

    const [sets, setSets] = useState([ 
                {sets: [A], size: 4}, 
                {sets: [B], size: 4},
                {sets: [A,B], size: 0}
            ]);

    useEffect(() => {

        const chart = venn.VennDiagram({ symmetricalTextCentre: true }).width(300).height(200);;

        d3.select("#venn").datum(sets).call(chart);
                    
        d3.selectAll("#venn .venn-circle path")
            .style("fill-opacity", .8);

        d3.selectAll("#venn text")
            .style("fill", "black")
            .style("font-size", "18px");


    }, [sets]);

    return (
        <div id="venn"></div>
    )
};

const V2 = () => {

    const A = "Fair cost per tonne $65";

    const [sets, setSets] = useState([ 
                {sets: [A], size: 4}
            ]);

    useEffect(() => {

        const chart = venn.VennDiagram({ symmetricalTextCentre: true }).width(300).height(200);;

        d3.select("#venn2").datum(sets).call(chart);
                    
        d3.selectAll("#venn2 .venn-circle path")
            .style("fill", "red")
            .style("fill-opacity", .4);

        d3.selectAll("#venn2 text")
            .style("fill", "black")            
            .style("font-size", "18px");


    }, [sets]);

    return (
        <div id="venn2"></div>
    )
};

const VennDiagrams = {
    V1,
    V2
};

export default VennDiagrams;