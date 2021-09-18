import { Display, Type } from 'play/enums';
import { responsibleFramework } from 'play/act-responsibly';
import { IResponsibleAction } from 'play/interfaces';

const aPopularContributorChecklist = [
    { type: Type.Question, value: 'Have you considered first time users?' },
    { type: Type.Question, value: 'Do you provide support on how to contribute?' },
    { type: Type.Question, value: 'Do you provide issues for first time contributors?' },
    { type: Type.Question, value: 'Do you have a code of conduct for contributors?' },
    { type: Type.Question, value: 'Do you actively welcome issues and pull requests?' },
    { type: Type.Question, value: 'Do you welcome please and thankyou?' },
    { type: Type.Question, value: 'Do you have a feedback system?' },
    { type: Type.Question, value: 'Can you accept criticism?' },
    { type: Type.Label, value: 'accessible–to–people' },
];

const aPopularEmailSignUpChecklist = [
    { type: Type.Question, value: 'Within how many days do you promise to reply to user emails?' },
    { type: Type.Question, value: 'Do you capture user emails?' },
    { type: Type.Question, value: 'Do you offer alternative channels for connecting?' },
    { type: Type.Question, value: 'Who will respond to user emails?' },
    { type: Type.Question, value: 'Do you have a code of conduct or template for responding to user emails?' },
];

//cross-compatible
//standards

describe('responsible framework', () => {

    let action, actions;

    const useCaseCommunityContribution: IResponsibleAction = {
        title: 'Invite community to contribute',
        checklist: aPopularContributorChecklist
    };    

    test('expect to act responsibly in this use case', () => {
        expect(responsibleFramework.actResponsibly(useCaseCommunityContribution).title).toBe(useCaseCommunityContribution.title);
    });

    test('expect checklist of responsible actions for community contribution use case', () => {
        action = responsibleFramework.actResponsibly(useCaseCommunityContribution);
        actions = responsibleFramework.showResponsibleActions(action, Display.JSON);
        expect(actions.checklist[0].value).toBe(useCaseCommunityContribution.checklist[0].value);
        consoleLogDisplay(actions);        
    });

    const useCaseEmailSuggestions: IResponsibleAction = {
        title: 'Send your suggestions',
        checklist: aPopularEmailSignUpChecklist
    }

    test('expect checklist of responsible actions for responding to user emails use case', () => {
        action = responsibleFramework.actResponsibly(useCaseEmailSuggestions);
        actions = responsibleFramework.showResponsibleActions(action, Display.JSON);
        expect(actions.checklist[0].value).toBe(useCaseEmailSuggestions.checklist[0].value);
        consoleLogDisplay(actions);        
    });

    test('obj literal that looks like a type', () => {
        const likeObj = {
            title: 'Invite community to contribute',
            checklist: aPopularContributorChecklist
        };
        expect(useCaseCommunityContribution).toEqual(likeObj);
    });
});

const log = (str, colour) => {
    console.log(colour, str);    
}

const consoleLogDisplay = actions => {
    let questionsList = `\n${actions.title}\n\n`;
    let questions = actions.checklist.filter(a => a.type == Type.Question);
        questions.forEach(el => {
            questionsList += `-- ${el.value} \n`;
        });
    log(questionsList, '\x1b[33m');
    let labelsList  = `\n${actions.title}\n\n`;
    let labels = actions.checklist.filter(a => a.type == Type.Label);
        labels.forEach(el => {
            labelsList += `++ ${el.value} \n`;
        });
    log(labelsList, '\x1b[48m');
};