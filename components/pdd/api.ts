import { AssistedTechnology, DashboardStyle } from 'components/pdd/enums';

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

const getInMemoryData = () => {
    const data = [
            {
                source: 'RTW',
                feature: 'Dashboard',
                requirements: {
                    checked: 20,
                    unchecked: 18
                },
                pledges: {
                    broken: 8
                }                
            },
            {
                source: 'RTW',
                feature: 'Site Metrics',
                requirements: {
                    checked: 13,
                    unchecked: 2
                },
                pledges: {
                    broken: 2
                }                
            },
    ];

    return new Promise<any>((resolve, reject) => {
        data 
        ? resolve(data)
        : reject({
            error: 'No data'            
        })
    });
};

const getInMemoryPledgesByValueData = () => {
    const data = 
        {
            source: 'RTW',
            values: [
                {
                    name: 'Responsibility',
                    broken: 7,
                    honoured: 21,
                    features: 10,
                    time: 3,
                    pledges: []
                },
                {
                    name: 'Sustainability',
                    broken: 4,
                    honoured: 3,
                    features: 10,
                    time: 3,
                    pledges: [
                        "We pledge to submit, maintain and display a page weight budget.",
                        "We pledge to submit, maintain and display a site emissions budget."
                    ]
                },
                {
                    name: 'Safety',
                    broken: 1,
                    honoured: 7,
                    features: 10,
                    time: 3,
                    pledges: []
                },
                {
                    name: 'Duty',
                    broken: 1,
                    honoured: 10,
                    features: 5,
                    time: 3,
                    pledges: []
                },
                {
                    name: 'Trust',
                    broken: 1,
                    honoured: 3,
                    features: 10,
                    time: 3,
                    pledges: []
                },
                {
                    name: 'Cooperation',
                    broken: 0,
                    honoured: 2,
                    features: 2,
                    time: 3,
                    pledges: []
                },
            ]
    };

    return new Promise<any>((resolve, reject) => {
        data 
        ? resolve(data)
        : reject({
            error: 'No data'            
        })
    });
};

const getDashboardData = async ({data, filter = (Object) => Object, map = (Object) => Object}) => {

    let _data;

    filter !== undefined
        _data = data.filter(filter)
    map === undefined
        _data = _data.map(map)

    return await _data;
};

const api = {
    getDashboard,
    getDashboardData,
    getInMemoryData,
    getInMemoryPledgesByValueData
};

export default api;