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
            report = `${metrics.page.bytes} Kb transferred to load this page.`;
            break;     
    }

    return <div><em>{report}</em></div>
};