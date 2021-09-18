import { Display, Type, Character, Filter } from 'play/enums';
import { TType } from 'play/types';

interface ILink {
    title:string;
    src:string;
}

interface ICheckList {
    type: Type, value: string
}

interface IResponsibleAction {
    title: string;
    checklist: ICheckList[];
}

interface IAction {
    name:string;
    type?: Type,
    links?: ILink [],
    trigger?: IAction
}

interface IMalpractice {
    name:string;
    character:Character
}

interface IAttribute extends IAction {
    attribute:string;
}

interface IProcess extends IAction {
    checklist?: []
}

interface ITactic extends IAction {
    
}

interface IRequirement extends IAction {
    
}

interface IDisclosure extends IAction {
    requirements: string;
}

interface IApproach {
    provider:string;
    strategies: {
        filter: Filter,
        type: Type,
        value:string,
        actions?: IAction [],
        processes?: IProcess [],
        tactics?: ITactic [],
        requirements?: IRequirement [],
        links?: ILink []
    } []    
}

export type {
    IResponsibleAction,
    ICheckList,
    IAction,
    IMalpractice,
    IAttribute,
    IProcess,
    ITactic,
    IRequirement,
    IApproach,
    IDisclosure,
    ILink
}