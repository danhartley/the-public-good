import testData from 'components/pdd/api-test-data';

import { AssistedTechnology, DashboardStyle, Source } from 'components/pdd/enums';
import { Feature, Value } from 'components/pdd/interfaces';

const getDashboard = (at?: AssistedTechnology) => {
    
    const dashboard = {
        type: DashboardStyle.Tabular
    };

    switch(at) {
        case AssistedTechnology.ScreenReader:
            dashboard.type = DashboardStyle.Tabular;
            break;
        case AssistedTechnology.Unknown:
            dashboard.type = DashboardStyle.Visual;
    }

    return dashboard;
};

const getDashboardData = async ({data, filter = (Object) => Object, map = (Object) => Object}) => {

    const _data = { ...data };

    filter !== undefined
        _data.items = data.items.filter(filter);
    map === undefined
        _data.items = _data.items.map(map);

    return await _data;
};

const getPledgesByFeatures = async ({source, snapShot=null}): Promise<Feature> => {

    let data: Feature = { source: "", snapShot: "", items: [] };

    switch(source) {
        case Source.Test:
            data = await testData.getPledgesByFeatures({snapShot});
            break;
        default:
            data = await testData.getPledgesByFeatures({snapShot});
    }

    return data;

};

const getPledgesByValues = ({source, snapShot=null}) => {

    let data = null;

    switch(source) {
        case Source.Test:
            data = testData.getPledgesByValues({snapShot});
            break;
        default:
            data = testData.getPledgesByValues({snapShot});
    }

    return data;
}

const api = {
    getDashboard,
    getDashboardData,
    getPledgesByFeatures,
    getPledgesByValues
};

export default api;