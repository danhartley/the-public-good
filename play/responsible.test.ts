import { IAction, IMalpractice, IAttribute, ITactic, IDisclosure } from 'play/interfaces';
import { beResponsible } from 'play/responsible';
import { approaches } from 'play/approaches';
import { Display, Type } from 'play/enums';

describe('being responsible', () => {

    let approach = approaches.responsibleWebTech;
    let plan = beResponsible(approach, Display.JSON);

    test('provider name matches plan provider', () => {
        expect(plan.provider).toBe(approach.provider);
    });

    test('dynamic instance of interface is correctly formed', () => {
        expect(plan.strategies[0].type).toBe(Type.Disclosure);
    });

    test('check for responsibile plan', () => {
        let action = plan.strategies[0].actions[0] as IDisclosure;
        expect(action.requirements).toEqual((approach.strategies[0].actions[0] as IDisclosure).requirements);
    });

});