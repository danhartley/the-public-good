import { useEffect, useState } from "preact/hooks";
import { select, selectAll } from "d3";
import * as venn from "venn.js";

// https://github.com/upsetjs/venn.js

const Aligned = () => {

    const A = "Fair cost per tonne $65";

    const [sets, setSets] = useState([ 
                {sets: [A], size: 4}
            ]);

    useEffect(() => {

        const chart = venn.VennDiagram({ symmetricalTextCentre: true }).width(300).height(200);

        select("#venn2").datum(sets).call(chart);
                    
        selectAll("#venn2 .venn-circle path")
            .style("fill", "red")
            .style("fill-opacity", .4);

        selectAll("#venn2 text")
            .style("fill", "black")            
            .style("font-size", "18px");


    }, [sets]);

    return (
        <div id="venn2"></div>
    )
};

export default Aligned;