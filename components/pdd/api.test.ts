import { AssistedTechnology, DashboardStyle, Source } from 'components/pdd/enums';

import api from 'components/pdd/api';

describe('Dashboard API Tests', () => {

    let featuresData, valuesData;

    const getData = async () => {
        featuresData = await api.getPledgesByFeatures({source: Source.Test});
        valuesData = await api.getPledgesByValues({source: Source.Test});
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
        const data = await api.getDashboardData({data:featuresData});
        expect(data.source).toBe('Trustworthy AI')
    });
    it('Should multiple feature records', async () => {
        expect.assertions(1);
        const data = await api.getDashboardData({data:featuresData});
        expect(data.items.length).toBeGreaterThan(1);
    });
    it('Should return filtered data', async () => {
        expect.assertions(1);
        const data = await api.getDashboardData({data:featuresData, filter: data => data.honoured > 5});
        expect(data.items.length).toBe(1);
    });
    it('Should return filtered and mapped data', async () => {
        expect.assertions(1);
        const data = await api.getDashboardData({data:featuresData, filter:data => data.honoured > 5, map:data => data.name});
        expect(data.items[0]).toBe('Technical robustness and safety');
    });
    it('Should return pledges by value data', async () => {
        expect.assertions(1);
        const data = await api.getDashboardData({data:valuesData});
        expect(data.source).toBe('Trustworthy AI')
    });
});