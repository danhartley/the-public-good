const totalBytesTransferredInSession = window => {

    let transferSize: number;

    if(typeof window === "undefined") {
        transferSize = -1;
    }

    else if(typeof window.performance == "undefined") {
        transferSize = -1;
    }
    
    else {
        const reducer = (accumulator: number, currentValue: number) => {     
            return accumulator + Math.round((currentValue / 1000));
        };
        
        const resources = Array.from(window.performance.getEntriesByType("resource")) as any[];
        
        transferSize = resources.map(r => r.transferSize || 0).reduce(reducer, 0);
    }

    return transferSize;
};

export const funcs = {
    totalBytesTransferredInSession
}