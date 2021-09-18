import { Display, Type } from 'play/enums';
import { IResponsibleAction } from 'play/interfaces';

const actResponsibly = (action: IResponsibleAction) => {
    return action;
};

const showResponsibleActions = (action: IResponsibleAction, display: Display) => {
    switch(display) {
        case Display.JSON:
            return {
                title: action.title,
                checklist: action.checklist
            };
        default:
            return {

            }
    }
};

export const responsibleFramework = {
    actResponsibly,
    showResponsibleActions
}