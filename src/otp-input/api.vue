<script>
import { OtpInputComponent, TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
    components: {
        'ejs-otpinput': OtpInputComponent,
        'ejs-textbox': TextBoxComponent,
        'ejs-numerictextbox': NumericTextBoxComponent,
        'ejs-switch': SwitchComponent,
        'ejs-dropdownlist': DropDownListComponent
    },
    data: function () {
        return {
            separator: "-",
            placeholder: "X",
            length: 4,
            min: 1,
            max: 6,
            disabled: false,
            modeValue: "outlined",
            modeData: [
                { Mode: 'outlined', Text: 'Outlined' },
                { Mode: 'underlined', Text: 'Underlined' },
                { Mode: 'filled', Text: 'Filled' }
            ],
            fields: { value: 'Mode', text: 'Text' },
            validationValue: "",
            validationData: [
                { Status: '', Text: 'None' },
                { Status: 'e-success', Text: 'Success' },
                { Status: 'e-warning', Text: 'Warning' },
                { Status: 'e-error', Text: 'Error' }
            ],
            validationFields: { value: 'Status', text: 'Text' }
        }
    },
    methods: {
        handleLength(event) {
            let val = event.target.value;
            this.length = val != "" ? val : 1;
        },
        handleOtpChange(args) {
            if (args.value !== undefined) {
                const otpLength = args.value.toString().length;
                this.$refs.verifyBtn.disabled = otpLength !== this.length;
                this.$refs.resetBtn.disabled = !otpLength;
            }
        },
        handleResetClick() {
            if (this.$refs.otpRef) {
                this.$refs.otpRef.ej2Instances.value = "";
            }
            this.$refs.verifyBtn.disabled = true;
            this.$refs.resetBtn.disabled = true;
        },
        handleVerifyClick() {
            if (this.$refs.otpRef) {
                alert(`Entered OTP value is ${this.$refs.otpRef.ej2Instances.value}`);
            }
        }
    }
}
</script>

<template>
    <div class="col-lg-8 control-section sb-property-border otp-wrapper">
        <div id="otp-container">
            <div class="form-container">
                <span class="otp-header"> Enter verification code </span>
                <ejs-otpinput ref="otpRef" :separator="separator" :placeholder="placeholder" :length="length" :disabled="disabled"
                    :stylingMode="modeValue" :cssClass="validationValue" @input="handleOtpChange">
                </ejs-otpinput>
                <div class="otp-actions">
                    <button ref="resetBtn" class="e-btn" type="button" disabled=true @click="handleResetClick"> Clear </button>
                    <button ref="verifyBtn" class="e-btn e-primary" type="button" disabled=true @click="handleVerifyClick"> Verify </button>
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-4 property-section otp-property-panel">
        <table id="otp_api_property" title="Properties">
            <tbody>
                <tr>
                    <td> Styling Mode </td>
                    <td>
                        <ejs-dropdownlist v-model:value="modeValue" :dataSource="modeData" :fields="fields" />
                    </td>
                </tr>
                <tr>
                    <td> Validation Status </td>
                    <td>
                        <ejs-dropdownlist v-model:value="validationValue" :dataSource="validationData" :fields="validationFields" />
                    </td>
                </tr>
                <tr>
                    <td> Placeholder </td>
                    <td> <ejs-textbox type="text" v-model:value="placeholder" :maxlength="length" /> </td>
                </tr>
                <tr>
                    <td> Separator </td>
                    <td> <ejs-textbox type="text" v-model="separator" maxlength="1" /> </td>
                </tr>
                <tr>
                    <td> Length </td>
                    <td> <ejs-numerictextbox v-model:value="length" :min="min" :max="max" format="0" @input="handleLength" /> </td>
                </tr>
                <tr>
                    <td> Disabled </td>
                    <td> <ejs-switch v-model:checked="disabled" /> </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div id="action-description">
        <p>
            This sample demonstrates the properties available in the OTP Input component.
        </p>
    </div>
    <div id="description">
        <p>
            This sample can be customized further with the combination of OTP Input properties from the property pane. For example,
        </p>
        <ul>
            <li>The input style can be changed by selecting the Styling Mode dropdownlist from the property pane.</li>
            <li>The validation state can be changed by selecting the Validation Status dropdownlist from the property pane.</li>
            <li>The hint placeholder character can be updated by using the Placeholder textbox from the property pane.</li>
            <li>The separator character (-) can be updated by using the Separator textbox from the property pane.</li>
            <li>The input field length can be changed by using the Length numerictextbox from the property pane.</li>
            <li>Enable or Disable the OTP Input by toggling the Disabled switcher button.</li>
        </ul>
    </div>

</template>

<style scoped>
    .col-lg-8.control-section.otp-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .col-lg-4.property-section.otp-property-panel {
        border-left: 1px solid #D7D7D7;
    }

    .sb-property-border.otp-wrapper {
        border: none;
    }

    #otp-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
    }

    .form-container {
        height: 220px;
        padding: 1rem 3rem;
        box-shadow: 0 1px 3px #d4d4d5, 0 0 0 1px #d4d4d5;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .form-container>div {
        margin: 17px 0px;
    }

    .form-container .otp-header {
        display: inline-block;
        font-size: 1.4em;
        font-weight: 500;
        margin: 10px 0px;
    }

    .form-container .otp-actions {
        display: flex;
        gap: 20px;
    }

    .otp-actions button {
        width: 80px;
    }

    #otp_api_property td {
        padding: 10px 0px;
        width: 35%;
    }

    @media (max-width: 1200px) {
        .col-lg-4.property-section.otp-property-panel {
            border: none;
        }
    }
</style>
