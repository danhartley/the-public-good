import funcs from 'components/functions/functions';

describe('page weight tests', () => {
    
    it('should return -1 if the window object is unavailable', () => {
        expect(funcs.sessionData(undefined)).toStrictEqual({"requests": 0, "transferSize": -1});        
    });
    
    it('should return -1 if the window performance object is unavailable', () => {
        expect(funcs.sessionData({performance: undefined})).toStrictEqual({"requests": 0, "transferSize": -1});
    });

    it('should return 0 if the requests array contains one request with no transfer size', () => {
        const window1 = {};
        Object.defineProperty(window1, 'performance', {
            value: {
              getEntries: jest.fn().mockReturnValue([{ bytes:null, entryType: 'resource' }])
            },
        });
        expect(funcs.sessionData(window1)).toStrictEqual({"requests": 1, "transferSize": 0});
    });
    
    it('should return 1000 Kb if the requests array contains one request with transfer size of 1000000 bytes', () => {
        const window2 = {};
        Object.defineProperty(window2, 'performance', {
            value: {
                getEntries: jest.fn().mockReturnValue([{ transferSize:1000000, entryType: 'resource' }])
            },
        });
        expect(funcs.sessionData(window2)).toStrictEqual({"requests": 1, "transferSize": 1000});
    });
    
    it('should return 1500 Kb if the requests array contains one request with transfer size of 1500000 bytes', () => {
        const window3 = {};
        Object.defineProperty(window3, 'performance', {
            value: {
                getEntries: jest.fn().mockReturnValue([{ transferSize:1000000, entryType: 'resource' }, { transferSize:500000, entryType: 'resource' }])
            },
        });
        expect(funcs.sessionData(window3)).toStrictEqual( {"requests": 2, "transferSize": 1500});
    });
});

describe('decimal places to display', () => {

    it('should return fixed value of 4 for value less than or equal to 0.001', () => {
        expect(funcs.fixedPlaces(0.001)).toBe(4);
    });

    it('should return fixed value of 3 for value less than or equal to 0.01', () => {
        expect(funcs.fixedPlaces(0.01)).toBe(3);
    });

    it('should return fixed value of 2 for value less than or equal to 0.1', () => {
        expect(funcs.fixedPlaces(0.1)).toBe(2);
    });

    it('should return fixed value of 1 for value less than or equal to 1', () => {
        expect(funcs.fixedPlaces(1)).toBe(1);
    });

    it('should return fixed value of 0 for value greater 1', () => {
        expect(funcs.fixedPlaces(1.1)).toBe(1);
    });
});

describe('energy and emissions values', () => {
    it('should return combined data and energy value with approproate rounding', () => {
        expect(funcs.multiplyInputs([1, 1.8])).toBe(1.8);
        expect(funcs.multiplyInputs([1.5, 1.8])).toBe(2.7);
        expect(funcs.multiplyInputs([1, 1.8, 475])).toBe(855);
    });
});