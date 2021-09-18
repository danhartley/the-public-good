import { Display } from 'play/enums';
import { IApproach } from 'play/interfaces';

export const beResponsible = (approach: IApproach, display: Display) => {
    switch(display) {
        case Display.JSON:
            return {
                provider: approach.provider,
                strategies: approach.strategies
            };
        default:
            return {

            }
    }
};