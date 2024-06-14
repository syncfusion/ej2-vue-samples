<template>
    <div id="textarea-api"  class="col-lg-8 control-section api-textarea">
    <div class="content_wrapper">
        <div class="api-row">
            <ejs-textarea id="api" placeholder='Enter your comments' floatLabelType='Auto' :enabled='enabled' :readonly='readOnly' :showClearButton='showClearButton' :maxLength='maxLength' :value='value' :rowsCount='rowsCount' :columnsCount='columnsCount'></ejs-textarea>
        </div>
    </div>
    </div>

    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" class="api-property">

            <tr>
                <td class="left-side"> Rows </td>
                <td><ejs-numerictextbox id="rows" format="##" value="2" min="1" max="10" :change="rowHandler"></ejs-numerictextbox></td>
            </tr>
            <tr>
                <td class="left-side"> Columns </td>
                <td><ejs-numerictextbox id="cols" format="##" value="20" min="5" max="40" :change="columnHandler"></ejs-numerictextbox></td>
            </tr>
            <tr>
                <td class="left-side">Enable</td>
                <td><ejs-checkbox id="enabled" :change= "enabledHandler" cssClass= "api" :checked="true" ></ejs-checkbox></td>
            </tr>
            <tr>
                <td class="left-side">Read only</td>
                <td><ejs-checkbox id="readonly" :change= "readonlyHandler" cssClass= "api" :checked="false"></ejs-checkbox></td>
            </tr>
            <tr>
                <td class="left-side"> MaxLength </td>
                <td><ejs-numerictextbox id="maxlength" format="##" value="-1" :change="maxLengthHandler"></ejs-numerictextbox></td>
            </tr>
            <tr>
                <td class="left-side"> Value </td>
                <td>
                    <ejs-textbox id="value" placeholder="Enter a value" :change="valueHandler"></ejs-textbox>
                </td>
            </tr>
            <tr>
                <td class="left-side">Show clear icon</td>
                <td><ejs-checkbox id="clearicon" :change= "clearIconHandler" cssClass= "api" :checked="false"></ejs-checkbox></td>
            </tr>
        </table>
    </div>
    <div id="action-description">
        <p>
            This example demonstrates the api functionalities of the textarea control. You can customize the appearance and
            behaviour of textarea component by choosing the corresponding option from the property panel.
        </p>
    </div>
    <div id="description">
        <p>The TextArea has the options to customize the appearance and behaviour of the component dynamically by updating
            the following properties:</p>
        <ul>
            <li>Change the number of rows and columns of textarea by updating "Rows" and "Columns" options.</li>
            <li>To make the textarea read-only, check the "read-only" option.</li>
            <li>Disable the textarea by unchecking the "enabled" option.</li>
            <li>Set the maximum length of characters that can be entered in textarea by customizing the "MaxLength" option.
            </li>
            <li>Update the value of textarea by entering text in "Value" option.</li>
            <li>To make the clear button visible, check the "Show clear icon" option..</li>
        </ul>
    </div>
</template>

<style scoped>
    .content_wrapper div.api-row {
        margin: 30px 150px;
    }

    .api-property .left-side {
        font-size: 14px;
        padding: 8px;
    }

    .api-property.property-panel-table div.api {
        padding-left: 0px;
    }

    #textarea-api .e-multi-line-input {
        max-width: 100%;
    }
</style>

<script>

import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

export default {
    data: function () {
        return {
            enabled: true,
            readOnly: false,
            maxLength: null,
            rows: null,
            cols: null,
            value: "",
            showClearButton: false,
            enabledHandler: (args) => {
                this.enabled = args.checked;
            },
            readonlyHandler: (args) => {
                this.readOnly = args.checked;
            },
            clearIconHandler: (args) => {
                this.showClearButton = args.checked;
            },
            rowHandler: (args) => {
                this.rows = args.value;
            },
            columnHandler: (args) => {
                this.cols = args.value;
            },
            maxLengthHandler: (args) => {
                this.maxLength = args.value;
            },
            valueHandler: (args) => {
                this.value = args.value;
            }
        }
    },
    components: {
        'ejs-textarea': TextAreaComponent,
        'ejs-textbox': TextBoxComponent,
        'ejs-checkbox': CheckBoxComponent,
        'ejs-numerictextbox': NumericTextBoxComponent
    }
};
</script>

