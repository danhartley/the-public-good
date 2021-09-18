import { IAction, IMalpractice, IAttribute, ITactic, IDisclosure } from 'play/interfaces';
import { Character, Filter, Type } from 'play/enums';
import { IApproach, ILink } from 'play/interfaces';
import { lean, agile, dry, open } from 'play/processes';
import { actions } from 'play/actions';

const sustainableWebDesign: IApproach = { 
    provider: 'Sustainable Web Design',
    strategies: [
        { filter: Filter.Development, type: Type.Question, value: 'Does development follow web standards?', actions: [
            actions.accessibility,
            {
                name: 'safety',
                attribute: 'data-safety',
                type: Type.Attribute
            } as IAttribute
        ] },
        { filter: Filter.Development, type: Type.Question, value: 'Does the website avoid tracking user behavior and collecting data unnecessarily?', actions: [
            actions.privacy
        ] },
        { filter: Filter.Development, type: Type.Question, value: 'Is the product or service safe and secure?', actions: [
            actions.privacy, actions.security
        ] },
        { filter: Filter.Development, type: Type.Question, value: 'Do you use modular code frameworks?', actions: [
            actions.modularity
        ] },
        { filter: Filter.Development, type: Type.Question, value: 'Does the development process follow lean/agile methods?', processes: [
            lean, agile
        ] },
        { filter: Filter.Development, type: Type.Question, value: 'Do you write reusable code?', processes: [
            dry
        ] },
        { filter: Filter.Development, type: Type.Question, value: 'Do developers use open source tools?', processes: [
            open
        ], links: [ {title: 'How to Evaluate the Sustainability of an Open Source Project', src:'https://opensource.com/life/14/1/evaluate-sustainability-open-source-project' }] },
        { filter: Filter.Development, type: Type.Question, value: 'Could a Progressive Web App be an efficient solution?', tactics: [
            actions.caching
        ] },
    ]
};

const responsibleWebTech: IApproach = {
    provider: 'Responsible Web Tech',
    strategies: [
        { filter: Filter.Company, type: Type.Disclosure, value: 'Responsibility Statement', actions: [
            {
                name: 'Responsibility Disclosure',
                requirements: 'Disclose company info and business practices',
                type: Type.Disclosure,
                links: [{ title: 'Developing an Accessibility Statement', src: 'https://www.w3.org/WAI/planning/statements/'} as ILink] 
            } as IDisclosure 
        ] },
        {
            filter: Filter.Company, type: Type.Pledge, value: 'Answering the 5 Ws', links: [{title:'Answering the 5 Ws', src:'https://en.wikipedia.org/wiki/Five_Ws'}],
            actions: [
                { name: 'Who', type: Type.Disclosure, requirements: 'Legal standing, shareholders, funding, people' } as IDisclosure,
                { name: 'When', type: Type.Disclosure, requirements: 'Incorporation date' } as IDisclosure,
                { name: 'Where', type: Type.Disclosure, requirements: 'Locations, jurisdictions, tax residence' } as IDisclosure,
                { name: 'What', type: Type.Disclosure, requirements: 'Products, services, rights, programmes' } as IDisclosure,
                { name: 'Why', type: Type.Disclosure, requirements: 'Purpose, vision, finanical objectives, public interest' } as IDisclosure,
            ]
        },
        {
            filter: Filter.Development, type: Type.Improve, value: 'Apply data attributes to dark patterns',
            actions: [
                {
                    name: 'Flag use of a questionable practice',
                    attribute: 'data-sly',
                    type: Type.Attribute,
                    trigger: { name: 'Email in exchange for content', type: Type.Malpractice, character: Character.Sly } as IMalpractice
                } as IAttribute
            ]
        }
    ]
}

export const approaches = {
    sustainableWebDesign,
    responsibleWebTech
}
