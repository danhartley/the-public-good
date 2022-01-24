import { useEffect, useState } from "preact/hooks";
import { select, selectAll } from "d3";
import * as venn from "venn.js";

// https://github.com/upsetjs/venn.js

const NonAligned = () => {

    const A = "Proposed cost per tonne";
    const B = "True cost";

    const [sets, setSets] = useState([ 
                {sets: [A], size: 4}, 
                {sets: [B], size: 4},
                {sets: [A,B], size: 0}
            ]);

    useEffect(() => {

        const chart = venn.VennDiagram({ symmetricalTextCentre: true }).width(300).height(200);

        select("#venn").datum(sets).call(chart);
                    
        selectAll("#venn .venn-circle path")
            .style("fill-opacity", .8);

        selectAll("#venn text")
            .style("fill", "black")
            .style("font-size", "18px");


    }, [sets]);

    return (
        <div id="venn"></div>
    )
};

export default NonAligned;