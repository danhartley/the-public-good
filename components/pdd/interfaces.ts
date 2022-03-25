import { AssistedTechnology, DashboardStyle } from 'components/pdd/enums';

export interface Device {
    type: AssistedTechnology
}

export interface Dashboard {
    type: DashboardStyle
}

export interface Pledge {
    name: string;
    honoured: number;
    broken: number;
}

export interface Item {
    id: number;
    name: string;
    value: string;
    honoured: number;
    broken: number;
    pledges: Pledge[];
    features?: number;
}

export interface Feature {
    source: string;
    snapShot: string;
    snapShots?: Array<string>,
    items: Item[];
}


export interface Value {
    source: string;
    snapShot?: string;
    items: Item[];
}