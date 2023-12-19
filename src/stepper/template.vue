<template>
    <div id="stepper-template" class="control-section">
        <div class="stepper-template-section">
            <ejs-stepper id="template-stepper" :steps="stepperTemplate" linear="true" orientation="vertical"
                :stepClick="(args) => handleStepClick(args)"
                template='<span class="e-step ${step.iconCss}"></span><span class="e-text-step">${step.text}</span><br><br><div class="stepper-content"></div>'
                ref="stepper" :created="createDefault"></ejs-stepper>
        </div>
    </div>
    <div id="action-description">
        <p>This sample showcases the customization of each step using the template support in the Stepper.</p>
    </div>
    <div id="description">
        <p>In this example, Stepper steps are customized using the <code>template</code> property. Template customization allows us to define unique visual styles for various progress states within the Stepper, including their indicators and progress bars.</p>
    </div>
</template>
<script>
import { StepperComponent } from "@syncfusion/ej2-vue-navigations";

export default {
    components: {
        'ejs-stepper': StepperComponent
    },
    data: function () {
        return {
            templateContent: [
                "<p>To get started, click the <b>Continue</b> button to move on to the next step.</p><button class='e-btn e-primary step-continue-button'>CONTINUE</button>",
                "<p>This is the second step. To proceed to next step, click <b>Continue</b>; to go back to the previous step, click <b>Back</b> button.</p><button class='e-btn e-primary step-continue-button'>CONTINUE</button><button class='e-btn step-back-button'>BACK</button>",
                "<p>If everything looks correct, click <b>Continue</b> to move on.<br/>If not, you can click <b>Back</b> to revisit the previous step.</p><button class='e-btn e-primary step-continue-button'>CONTINUE</button><button class='e-btn step-back-button'>BACK</button>",
                "<p>Congratulations! You've reached the final step.</p><button class='e-btn e-primary step-finish-button'>FINISH</button><button class='e-btn step-back-button'>BACK</button>"
            ],
            finishContent: "<p>Congratulations! You've reached the final step.</p><button class='e-btn e-primary step-finish-button'>FINISH</button><button class='e-btn step-back-button'>BACK</button>",
            resetContent: "<p>To start over again with the first step, click <b>Reset</b>.</p><button class='e-btn e-primary step-reset-button'>RESET</button>",
            stepperTemplate: [
                { iconCss: 'e-icons e-check', text: 'Step 1' },
                { iconCss: 'e-icons e-check', text: 'Step 2' },
                { iconCss: 'e-icons e-check', text: 'Step 3' },
                { iconCss: 'e-icons e-check', text: 'Step 4' }
            ]
        };
    },
    methods: {
        createDefault: function () {
            this.$refs.stepper.ej2Instances.activeStep = 1;
            this.handleContent(this.$refs.stepper.ej2Instances, false);
            // for initial continue button..
            this.bindEventListeners(this.$refs.stepper.ej2Instances.activeStep);
        },
        handleStepClick: function (args) {
            this.handleContent(args, args.previousStep > args.activeStep ? true : false);
        },
        bindEventListeners: function (activeStep) {
            let continueBtn = document.querySelector('.step-continue-button');
            let backBtn = document.querySelector('.step-back-button');
            let finishBtn = document.querySelector('.step-finish-button');

            const clickHandler = (action, type) => (event) => {
                event.stopPropagation();
                this.clickAction(action, type);
            };
            switch (activeStep) {
                case 0:
                    if(continueBtn) continueBtn.addEventListener('click', clickHandler(false, 'continue'));
                    break;

                case 1:
                case 2:
                    if(continueBtn) continueBtn.addEventListener('click', clickHandler(false, 'continue'));
                    if(backBtn) backBtn.addEventListener('click', clickHandler(true, 'back'));
                    break;

                case 3:
                    if(finishBtn) finishBtn.addEventListener('click', (event) => {
                        clickHandler(false, 'finish')(event);
                        let resetBtn = document.querySelector('.step-reset-button');
                        if(resetBtn) resetBtn.addEventListener('click', clickHandler(false, 'reset'));
                    });
                    if(backBtn) backBtn.addEventListener('click', clickHandler(true, 'back'));
                    break;
            }
        },
        clickAction: function (isBackButton, buttonType) {
            switch (buttonType) {
                case 'continue':
                    this.$refs.stepper.ej2Instances.nextStep();
                    break;
                case 'back':
                    this.$refs.stepper.ej2Instances.previousStep();
                    break;
            }
            this.updateContent(this.$refs.stepper.ej2Instances, isBackButton, buttonType);
        },
        updateContent: function (stepperObj, isBackButton, buttonType) {
            if (buttonType === 'continue' || buttonType === 'back') {
                this.handleContent(stepperObj, isBackButton);
            }
            if (buttonType === 'finish' || buttonType === 'reset') {
                let activeElement = document.querySelectorAll('.stepper-content');
                if (buttonType === 'finish') {
                    activeElement[stepperObj.activeStep].innerHTML = this.resetContent;
                    stepperObj.steps[stepperObj.activeStep].status = 'completed';
                }
                if (buttonType === 'reset') {
                    activeElement[stepperObj.activeStep].innerHTML = this.finishContent;
                    activeElement[stepperObj.activeStep].innerHTML = '';
                    stepperObj.reset();
                    activeElement[stepperObj.activeStep].innerHTML = this.templateContent[stepperObj.activeStep];
                }
            }
            // for subsequent buttons when navigating..
            this.bindEventListeners(stepperObj.activeStep);
        },
        handleContent: function (args, isBackClicked) {
            let activeElement = document.querySelectorAll('.stepper-content');
            activeElement[args.activeStep].innerHTML = this.templateContent[args.activeStep];
            if (activeElement && !isBackClicked) {
                activeElement[args.activeStep - 1].innerHTML = '';
            }
            if (isBackClicked) {
                if (activeElement[args.activeStep + 1])
                    activeElement[args.activeStep + 1].innerHTML = '';
            }
        }
    },
};
</script>
<style>
    #stepper-template.control-section {
        min-height: 600px;
    }
    .stepper-template-section {
        min-height: 450px;
        margin: 0 auto;
        text-align: center;
        padding-top: 3%;
    }
    #template-stepper button {
        padding: 5px 8px;
        margin: 0 10px 0 0;
    }
    #template-stepper .e-text-step {
        padding-left: 12px;
        font-size: 18px;
    }
    #template-stepper .stepper-content {
        position: absolute;
        width: 450px;
        text-align: left;
        top: 38px;
        left: 46px;
        font-size: 15px;
    }
    .e-bigger #template-stepper .stepper-content {
        left: 53px;
    }
    #template-stepper .e-step-template .e-step {
        border-radius: 0px;
        font-size: 16px;
    }
    #template-stepper .e-step-template.e-step-notstarted .e-step {
        border: 2px solid grey;
        background: white;
        color: transparent;
    }
    #template-stepper .e-step-template.e-step-completed .e-step,
    #template-stepper .e-step-template.e-step-inprogress .e-step {
        background: #63c1a2;
        color: white;
    }
    #template-stepper .e-step-template.e-step-inprogress .e-step {
        box-shadow: 0 0 0 2px #fff, 0 0 0 4px #52aa86;
    }
    #template-stepper .e-step-template.e-step-inprogress .e-step::before {
        color: transparent;
    }
    #template-stepper .e-progressbar-value {
        background-color: #9adfc8;
    }
    @media only screen and (max-width: 960px) {
        #template-stepper .stepper-content {
            width: 200px;
            font-size: 13px;
        }
        #stepper-template.control-section {
            min-height: 620px;
        }
        .stepper-template-section {
            min-height: 500px;
        }
    }
</style>