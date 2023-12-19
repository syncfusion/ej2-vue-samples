<template>
    <div class="control-section">
        <div class="validation-stepper-section">
            <ejs-stepper linear=true ref="stepper" :stepChanging="(args) => handleStepChange(args)" :created="handleStepCreated">
                <e-steps>
                    <e-step :iconCss='stepIcon1' :text="stepText1"></e-step>
                    <e-step :iconCss='stepIcon2' :text='stepText2'></e-step>
                    <e-step :iconCss='stepIcon3' :text='stepText3'></e-step>
                </e-steps>
            </ejs-stepper>
        </div>
        <div ref="validationStepContent" id="validation-step-content"></div>
    </div>
    <div id="action-description">
        <p>This sample showcases the integration of validation support in the Stepper component.</p>
    </div>
    <div id="description">
        <p>This example demonstrates using the <code>isValid</code> property for validating the state of each step within the Stepper. Stepper validation ensures that user inputs are correct and guides them to prevent errors before proceeding to the next steps.</p>
    </div>
</template>
<script>
import { StepperComponent, StepDirective, StepsDirective } from "@syncfusion/ej2-vue-navigations";

export default {
    components: {
        'ejs-stepper': StepperComponent,
        'e-steps': StepsDirective,
        'e-step': StepDirective,
    },
    data: function () {
        const regex = new RegExp('^[A-Za-z0-9._%+-]{1,}@[A-Za-z0-9._%+-]{1,}');
        return {
            stepText1: 'Survey Introduction',
            stepText2: 'Feedback',
            stepText3: 'Status',
            stepIcon1: 'sf-icon-survey-intro',
            stepIcon2: 'sf-icon-survey-feedback',
            stepIcon3: 'sf-icon-survey-status',
            stepperContents: [
                "<div class='step-content step-content-0 step-active'><div id='agreement-text'><p>Welcome! This survey is an opportunity for you to share your opinions and experiences, contributing to the ongoing improvement of our offerings. Your participation is highly appreciated, and we look forward to gaining a deeper understanding of your preferences. </p></div><label style='margin-top: 15px'>Enter your email <span class='required'>*</span></label><input class='e-input inputContainer' id='add-email' placeholder='Enter here'/><div class='add-email error-label'>Email cannot be empty.</div><button style='margin-top: 20px;' class='e-btn nextStep stepperBtn'>Next</button></div>",
                "<div class='step-content step-content-1'> <div class='question-container'> <div class='survey-question'><p> Is this the first time you have visited this website? <span class='required'>*</span></p><label> <input type='radio' class='inputContainer new-user' name='service-usage' value='yes' checked> Yes </label> <label style='margin: 0px 10px'> <input type='radio' class='inputContainer old-user' name='service-usage' value='no'> No </label></div> <div class='feedback-section'> <p class='feedback-label'>Anything else you would like to share? <span class='required'>*</span></p> <textarea id='feedback-text' class='inputContainer' placeholder='I have feedback on...' required></textarea> <div class='feedback-area error-label' style='margin: 0'>Feedback cannot be empty.</div> </div> </div><div style='display: flex;'> <button style='margin-top: 20px; margin-right: 5%;' class='e-btn previousStep'>Previous</button> <button style='margin-top: 20px;' class='e-btn nextStep'>Submit Feedback</button></div></div></div>",
                "<div class='step-content step-content-2'><div class='confirm-section'><div class='feedback-msg'><b>Please confirm to submit your feedback,</b></div><br/><div class='feedback-msg' id='feedback-message'></div> <button style='margin-top: 20px; margin-right: 5%;' class='e-btn previousStep'>Previous</button> <button style='margin-top: 20px; margin-right: 5%;' class='e-btn confirmbutton' id='confirm-button'>Confirm</button></div></div>",
                "<div class='step-content step-content-3'><div class='success-section'><div class='success-message' id='success-message'>Thanks! Feedback has been submitted successfully.</div><button style='margin-top: 20px; margin-right: 5%;' type='reset' class='e-btn e-hide' id='reset-button'> Reset </button> </div></div>"
            ],
            isEmailValid: false,
            isFeedbackTextValid: false,
            isUserNavigatingReverse: false,
            isCurrentStepValid: false,
            regex: regex
        };
    },
    mounted: function () {
        this.validationStepper = this.$refs.stepper.ej2Instances;
    },
    methods: {
        handleStepCreated: function() {
            this.stepperContentWrapper = this.$refs.validationStepContent;
            this.stepperContentWrapper.innerHTML = this.stepperContents[0];
            this.bindEventListeners(0);
        },
        bindEventListeners: function (activeStep) {
            let nextStepBtn = this.stepperContentWrapper.children[activeStep].querySelector('.nextStep');
            let prevStepBtn = this.stepperContentWrapper.children[activeStep].querySelector('.previousStep');
            let inputEmailEle = this.stepperContentWrapper.querySelector('#add-email');
            let feedbackTextEle = this.stepperContentWrapper.querySelector('#feedback-text');
            let confirmBtn = this.stepperContentWrapper.querySelector('#confirm-button');

            switch (activeStep) {
                case 0:
                    if(nextStepBtn) nextStepBtn.addEventListener('click', this.onNextStep);
                    if(inputEmailEle) inputEmailEle.addEventListener('input', (e) => this.onInputChange(e.target.value, true));
                    break;

                case 1:
                    if(feedbackTextEle) feedbackTextEle.addEventListener('input', (e) => this.onInputChange(e.target.value, false));
                    if(nextStepBtn) nextStepBtn.addEventListener('click', this.onNextStep);
                    if(prevStepBtn) prevStepBtn.addEventListener('click', this.onPreviousStep);
                    break;
                case 2:
                    if(prevStepBtn) prevStepBtn.addEventListener('click', this.onPreviousStep);
                    if(confirmBtn) confirmBtn.addEventListener('click', () => {
                        this.onConfirm();
                        let resetBtn = this.stepperContentWrapper.querySelector('#reset-button');
                        if(resetBtn) resetBtn.addEventListener('click', this.onReset);
                    });
                    break;
            }
        },
        handleStepChange: function(args) {
            this.isUserNavigatingReverse = args.activeStep < args.previousStep ? true : false;
            if (!this.isUserNavigatingReverse) {
                this.setValidState(args);
            }
            // Making the previous and current step invalid if user navigates in reverse order.
            else {
                this.validationStepper.steps[args.activeStep].isValid = this.validationStepper.steps[args.activeStep + 1].isValid = null;
                this.isCurrentStepValid = true;
            }
            if (this.isCurrentStepValid) {
                let stepContent = this.stepperContentWrapper.querySelector(`.step-content-${args.activeStep}`);
                /* Remove all active class */
                this.stepperContentWrapper.querySelectorAll('.step-content').forEach((step) => step.classList.remove('step-active'));
                /* Only update the html into DOM if not previously */
                if (!stepContent) {
                    this.stepperContentWrapper.insertAdjacentHTML('beforeend', this.stepperContents[args.activeStep]);
                    stepContent = this.stepperContentWrapper.querySelector(".step-content.step-content-" + args.activeStep);
                }
                /* Update the active class */
                if (stepContent) {
                    stepContent.classList.add('step-active');
                }
                if (args.activeStep === 2) {
                    let feedbackMessage = this.stepperContentWrapper.querySelector('#feedback-message');
                    feedbackMessage.textContent = this.stepperContentWrapper.querySelector('#feedback-text').value;
                }
                this.bindEventListeners(args.activeStep);
            }
        },
        setValidState: function(args) {
            const stepIndexToValidate = this.validationStepper.activeStep;
            if (this.validationStepper.activeStep === 0) {
                const emailInput = (this.stepperContentWrapper.querySelector('#add-email'));
                this.isCurrentStepValid = emailInput.value.length && this.isEmailValid;
                this.onInputChange(emailInput.value, true);
            }
            if (this.validationStepper.activeStep === 1) {
                const radioInputs = this.stepperContentWrapper.querySelectorAll('.survey-question input');
                const isChecked = Array.from(radioInputs).some(input => input.checked);
                this.isCurrentStepValid = isChecked && this.isFeedbackTextValid;
                this.onInputChange((this.stepperContentWrapper.querySelector('#feedback-text')).value);
            }
            if (this.validationStepper.activeStep === 2) this.isCurrentStepValid = true;
            args.cancel = !this.isCurrentStepValid;
            this.validationStepper.steps[stepIndexToValidate].isValid = this.isCurrentStepValid;
        },
        onInputChange: function(val, isEmailInput) {
            let elementId = isEmailInput ? 'add-email' : 'feedback-area';
            let errElement = (this.stepperContentWrapper.querySelector(`.${elementId}.error-label`));
            if (val.length === 0) {
                if (isEmailInput) errElement.textContent = 'Email cannot be empty';
                else errElement.textContent = 'Feedback cannot be empty'; this.isFeedbackTextValid = false
            } else {
                if (isEmailInput) {
                    this.isEmailValid = this.regex.test(val);
                    errElement.textContent = this.isEmailValid ? '' : 'Enter a valid email';
                } else {
                    this.isFeedbackTextValid = val.length > 15;
                    errElement.textContent = this.isFeedbackTextValid ? '' : 'Please enter at least 15 characters';
                }
            }
            errElement.style.visibility = errElement.textContent ? 'visible' : 'hidden';
        },
        onNextStep: function () {
            this.validationStepper.nextStep();
        },
        onPreviousStep: function () {
            this.validationStepper.previousStep();
        },
        onConfirm: function () {
            let stepContent = this.stepperContentWrapper.querySelector('.step-content-3');
            if (!stepContent) {
                this.stepperContentWrapper.insertAdjacentHTML('beforeend', this.stepperContents[3]);
                stepContent = this.stepperContentWrapper.querySelector(".step-content.step-content-3");
            }        
            this.stepperContentWrapper.querySelectorAll('.step-content').forEach((step) => step.classList.remove('step-active'));        
            if (stepContent) {
                stepContent.classList.add('step-active');
                this.validationStepper.steps[this.validationStepper.activeStep].isValid = true;
                this.validationStepper.steps[this.validationStepper.activeStep].status = 'completed';
            }
        },
        onReset: function () {
            this.isCurrentStepValid = false;
            this.validationStepper.reset();
            Array.from(this.stepperContentWrapper.querySelectorAll('.inputContainer')).forEach((ele) => {
                ele.value = ''
                if (ele.classList.contains('new-user')) ele.checked = true;
                else ele.checked = false;
            });
            for (let i = 0; i < this.validationStepper.steps.length; i++) {
                this.validationStepper.steps[i].isValid = null;
            }
        },
    },
};
</script>
<style>
@font-face {
    font-family: 'Survey-icons';
    src:
        url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
}

.validation-stepper-section [class^="sf-icon-"],
.validation-stepper-section [class*=" sf-icon-"] {
    font-family: 'Survey-icons' !important;
    speak: none;
    font-size: 55px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.validation-stepper-section .sf-icon-survey-feedback:before { content: "\e700"; }
.validation-stepper-section .sf-icon-survey-intro:before { content: "\e703"; }
.validation-stepper-section .sf-icon-survey-status:before { content: "\e707"; }

#validation-step-content input[type=radio] {
    vertical-align: top;
}

.feedback-label {
    margin-bottom: 10px;
}

#feedback-text {
    color: #000;
    width: 90%;
    height: 50px;
    resize: vertical;
}

#agreement-text p {
    text-align: justify;
}

#validation-step-content .success-message {
    color: green;
    font-weight: bold;
    margin-top: 10px;
    font-size: 16px;
}

#validation-step-content .required {
    color: red;
}

#validation-step-content .content-wrapper {
    min-height: 200px;
}

#validation-step-content div.error-label {
    height: 20px;
    color: #e5184b;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    visibility: hidden;
    margin: 3px 0 0;
}

#validation-step-content .question-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.validation-stepper-section {
    width: 70%;
    margin: 40px auto;
}

#validation-step-content {
    position: relative;
    width: 65%;
    min-height: 250px;
    margin: 0 auto;
}

.step-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    pointer-events: none;
}

/* Display the active step content */
.step-content.step-active {
    animation: fadeInUp 0.4s;
    opacity: 1;
    pointer-events: all;
}

/* Keyframes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, 50%, 0);
        transform: translate3d(0, 50%, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
}

@media only screen and (max-width: 965px) {
    .validation-stepper-section {
        width: 100%;
    }

    #validation-step-content {
        width: auto;
        margin: auto 5%;
    }
}
</style>