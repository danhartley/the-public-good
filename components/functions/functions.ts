import { PageMetrics } from 'components/shared/types'; 

const sessionData = window => {

    const pm:PageMetrics = { transferSize: 0, requests: 0 };

    if(typeof window === "undefined") {
        pm.transferSize = -1;
        pm.requests = 0;
    }

    else if(typeof window.performance == "undefined") {
        pm.transferSize = -1;
        pm.requests = 0;
    }
    
    else {
        const reducer = (accumulator: number, currentValue: number) => {     
            return accumulator + Math.round((currentValue / 1000));
        };
        
        const pms:Array<PageMetrics> = Array.from(window.performance.getEntriesByType("resource"));

        pm.transferSize = pms.map(r => r.transferSize || 0).reduce(reducer, 0);

        pm.requests = pms.length;
    }

    return pm;
};

const fixedPlaces = value => {
    
    let fixed = 1;

    if(value <= 1) fixed = 1;
    if(value <= 0.1) fixed = 2;
    if(value <= 0.01) fixed = 3;
    if(value <= 0.001) fixed = 4;

    return fixed;
};

const multiplyInputs = (args: Array<number>) => {
    return args.reduce((x,y) => x * y);
};

const sortBy = (arr, prop, dir = 'asc') => {
    return dir === 'asc' 
        ? arr.sort((a, b) => parseFloat(a[prop]) - parseFloat(b[prop]))
        : arr.sort((a, b) => parseFloat(b[prop]) - parseFloat(a[prop]));  
};

const download = (element, content, fileName, contentType) => {
    const file = new Blob([content], {type: contentType});
    element.href = URL.createObjectURL(file);
    element.download = fileName;
};

const funcs = {
    sessionData,
    fixedPlaces,
    multiplyInputs,
    sortBy,
    download
};

export default funcs;