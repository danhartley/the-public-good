const sessionData = window => {

    let transferSize: number;
    let requests: number; 

    if(typeof window === "undefined") {
        transferSize = -1;
        requests = 0;
    }

    else if(typeof window.performance == "undefined") {
        transferSize = -1;
        requests = 0;
    }
    
    else {
        const reducer = (accumulator: number, currentValue: number) => {     
            return accumulator + Math.round((currentValue / 1000));
        };
        
        const resources = Array.from(window.performance.getEntriesByType("resource")) as any[];

        transferSize = resources.map(r => r.transferSize || 0).reduce(reducer, 0);

        requests = resources.length;
    }

    return { transferSize, requests };
};

const fixedPlaces = value => {
    
    let fixed:number = 1;

    if(value <= 1) fixed = 1;
    if(value <= 0.1) fixed = 2;
    if(value <= 0.01) fixed = 3;
    if(value <= 0.001) fixed = 4;

    return fixed;
};

const multiplyInputs = (args: Array<number>) => {
    const total = args.reduce((x,y) => x * y);    
    return total;
};

export const funcs = {
    sessionData,
    fixedPlaces,
    multiplyInputs
}