import { AssistedTechnology, DashboardStyle } from 'pages/ethics/pledge-works/pdd/enums';

import api from 'pages/ethics/pledge-works/pdd/api';

describe('Dashboard API Tests', () => {

    let _data, _dataByValues;

    const getData = async () => {
        _data = await api.getInMemoryData();
        _dataByValues = await api.getInMemoryPledgesByValueData();
    }

    getData();

    it('Default dashboard style is tabular', () => {
        const dashboard = api.getDashboard();
        expect(dashboard.type).toEqual(DashboardStyle.Tabular);
    });
    it('Dashboard style is tabular for assisted technology type screen reader', () => {
        const dashboard = api.getDashboard();
        expect(dashboard.type).toEqual(DashboardStyle.Tabular);
    });
    it('Dashboard style is visual for assisted technology type unknown', () => {
        const dashboard = api.getDashboard(AssistedTechnology.Unknown);
        expect(dashboard.type).toEqual(DashboardStyle.Visual);
    });
    it('Should return development data', async () => {
        expect.assertions(1);
        const data = await api.getDashboardData({data:_data});
        expect(data[0].source).toBe('RTW')
    });
    it('Should multiple feature records', async () => {
        expect.assertions(1);
        const data = await api.getDashboardData({data:_data});
        expect(data.length).toBeGreaterThan(1);
    });
    it('Should return filtered data', async () => {
        expect.assertions(1);
        const data = await api.getDashboardData({data:_data, filter: data => data.pledges.broken > 5});
        expect(data.length).toBe(1);
    });
    it('Should return filtered and mapped data', async () => {
        expect.assertions(1);
        const data = await api.getDashboardData({data:_data, filter:data => data.pledges.broken > 5, map:data => data.feature});
        expect(data[0]).toBe('Dashboard');
    });
    it('Should return pledges by value data', async () => {
        expect.assertions(1);
        console.log(_dataByValues);
        const data = await api.getDashboardData({data:_dataByValues.values});
        data.source = _dataByValues.source;
        expect(data.source).toBe('RTW')
    });
});