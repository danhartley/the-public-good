import { IRequirement } from 'play/interfaces';

const mandated:IRequirement = {
    name: 'mandated'
};

const established:IRequirement = {
    name: 'established'
};

const emerging:IRequirement = {
    name: 'emerging'
};

const regulated:IRequirement = {
    name: 'regulated'
};

export const requirements = {
    mandated,
    established,
    emerging,
    regulated
}