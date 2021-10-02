import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import { MetricsContext, CounterContext } from 'components/contexts/MetricsContext';


export const PageWeightReport = (metrics) => {

    // const { metrics } = useContext(MetricsContext);

    console.log('PageWeightReport', metrics);

    let report;

    switch(metrics.cumulativeBytes) {
        case -1:
            report = 'Page weight could not be calculated.';
            break;     
        case 0:
            report = 'This page was served from your local cache.';
            break;     
        default:
            report = `${metrics.page.bytes}Kb transferred to load this page.`;
            break;     
    }

    return <div><em>my {report}</em></div>
};

export const PageCounter = counter => {    
    return <div>counter: {counter}</div>
};