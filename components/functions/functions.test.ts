import { funcs } from 'components/functions/functions';

describe('page weight', () => {
    
    it('should return -1 if the window object is unavailable', () => {
        expect(funcs.requestReducer(undefined)).toBe(-1);        
    });
    
    it('should return -1 if the window performance object is unavailable', () => {
        expect(funcs.requestReducer({performance: undefined})).toBe(-1);
    });

    it('should return 0 if the requests array contains one request with no transfer size', () => {
        let window1 = {};
        Object.defineProperty(window1, 'performance', {
            value: {
              getEntriesByType: jest.fn().mockReturnValue([{ transferSize:null }])
            },
        });
        expect(funcs.requestReducer(window1)).toBe(0);
    });
    
    it('should return 1000 Kb if the requests array contains one request with transfer size of 1000000 bytes', () => {
        let window2 = {};
        Object.defineProperty(window2, 'performance', {
            value: {
              getEntriesByType: jest.fn().mockReturnValue([{ transferSize:1000000 }])
            },
        });
        expect(funcs.requestReducer(window2)).toBe(1000);
    });
    
    it('should return 1500 Kb if the requests array contains one request with transfer size of 1500000 bytes', () => {
        let window3 = {};
        Object.defineProperty(window3, 'performance', {
            value: {
              getEntriesByType: jest.fn().mockReturnValue([{ transferSize:1000000 }, { transferSize:500000 }])
            },
        });
        expect(funcs.requestReducer(window3)).toBe(1500);
    });
});