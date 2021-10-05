import { funcs } from 'components/functions/functions';

describe('page weight tests', () => {
    
    it('should return -1 if the window object is unavailable', () => {
        expect(funcs.sessionData(undefined)).toStrictEqual({"requests": 0, "transferSize": -1});        
    });
    
    it('should return -1 if the window performance object is unavailable', () => {
        expect(funcs.sessionData({performance: undefined})).toStrictEqual({"requests": 0, "transferSize": -1});
    });

    it('should return 0 if the requests array contains one request with no transfer size', () => {
        let window1 = {};
        Object.defineProperty(window1, 'performance', {
            value: {
              getEntriesByType: jest.fn().mockReturnValue([{ transferSize:null }])
            },
        });
        expect(funcs.sessionData(window1)).toStrictEqual({"requests": 1, "transferSize": 0});
    });
    
    it('should return 1000 Kb if the requests array contains one request with transfer size of 1000000 bytes', () => {
        let window2 = {};
        Object.defineProperty(window2, 'performance', {
            value: {
              getEntriesByType: jest.fn().mockReturnValue([{ transferSize:1000000 }])
            },
        });
        expect(funcs.sessionData(window2)).toStrictEqual({"requests": 1, "transferSize": 1000});
    });
    
    it('should return 1500 Kb if the requests array contains one request with transfer size of 1500000 bytes', () => {
        let window3 = {};
        Object.defineProperty(window3, 'performance', {
            value: {
              getEntriesByType: jest.fn().mockReturnValue([{ transferSize:1000000 }, { transferSize:500000 }])
            },
        });
        expect(funcs.sessionData(window3)).toStrictEqual( {"requests": 2, "transferSize": 1500});
    });
});