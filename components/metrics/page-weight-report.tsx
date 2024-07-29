export const PageWeightReport = metrics => {

    let report;
    
    switch(metrics.cumulativeBytes) {
        case -1:
            report = 'Page weight could not be calculated.';
            break;     
        case 0:
            report = 'This page was served from your local cache.';
            break;     
        default:
            report = `${metrics.page.bytes} Kb transferred from same origin to load this page.`;
            break;     
    }

    return <span></span>
    // return <span><em>{report}</em></span>
};