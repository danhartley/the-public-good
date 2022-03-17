# Where to put the step definitions

## With cypress-cucumber-preprocessor, there two options for storing your step definitions:

    In your config, set nonGlobalStepDefinitions to true, which will look for feature-specific steps in the setup you have now (i.e. /featureName/featureName.js). With this option, all global steps will be stored in cypress/integration/common.
    In your config, set nonGlobalStepDefinitions to false, which will keep your steps global, and they'll be in cypress/support/step_definitions.

    See: https://stackoverflow.com/questions/67639996/cypress-cucumber-how-to-store-steps-in-same-directory-as-features