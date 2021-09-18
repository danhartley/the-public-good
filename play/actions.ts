import { Display, Character, Type } from 'play/enums';
import { IAction, IMalpractice, IAttribute, ITactic, IDisclosure } from 'play/interfaces';

const privacy:IAttribute = {
    name: 'privacy',
    attribute: 'data-privacy',
    type: Type.Attribute,
};

const security:IAttribute = {
    name: 'security',
    attribute: 'data-security',
    type: Type.Attribute,
};

const accessibility:IAttribute = {
    name: 'accessibility',
    attribute: 'data-accessibility',
    type: Type.Attribute,
};

const modularity:IAttribute = {
    name: 'modularity',
    attribute: 'data-modularity',
    type: Type.Attribute,
};

const caching:ITactic = {
    name: 'caching'
};

const roachMotel: IMalpractice = {
    name: 'Roach motel',
    character: Character.Devious
}

const responsibilityDisclosure:IDisclosure = {
    name: 'Responsibility Disclosure',
    requirements: 'disclose company info and business practices',
    type: Type.Disclosure
}

export const actions = {
    privacy,
    security,
    accessibility,
    modularity,
    caching,
    roachMotel
}