<template>
<div>
    <div>
        <div class="col-lg-8 content-wrapper control-section">
            <div class="control-styles">
                <h4>Selection Limit</h4>
                <ejs-multiselect ref="multiselectInstance" id='multiselect-checkbox' :dataSource='countries' :placeholder='checkWaterMark' :fields='checkFields'
                    :mode='mode' :popupHeight='popHeight' :showDropDownIcon='true' :maximumSelectionLength='maxSelection'
                    :filterBarPlaceholder='filterPlaceholder'></ejs-multiselect>
            </div>
        </div>
        <div class="col-lg-4 property-section">
            <table id="property" class="property-panel-table" title="Properties">
                <tr>
                    <td style="width: 50%">
                        <div style="padding-top: 7px">
                            Selection Limit
                        </div>
                    </td>
                    <td style="width: 50%; padding:10px 10px 10px 0px">
                        <div>
                            <ejs-numerictextbox id="maxSel" value="3" :min="min"></ejs-numerictextbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div>
                            <ejs-button cssClass="e-flat" v-on:click.native="btnClick">Apply</ejs-button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the maximum selection limit functionalities with checkbox of the MultiSelect. MultiSelect 
            value can set restrictions based on the maximum selection length that can be selected.</p>
    </div>
    <div id="description">
        <p>The MultiSelect has built-in support to limit the value selected in Multiselect component, when the <code>maximumSelectionLength</code>        property is set as <code>3</code>, maximum of only 3 value will be selected in the MultiSelect.</p>

        <p>The selection limit sample illustrates using the countries data.</p>

    </div>
</div>
</template>
<style>
    .control-styles {
        margin: 0 auto; 
        width:300px; 
        padding-top: 25px
    }
</style>
<script>
import Vue from "vue";
import { MultiSelectPlugin, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import * as data from './dataSource.json';

Vue.use(MultiSelectPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend ({
    data: function() {
        return {
            checkFields: { text: 'Name', value: 'Code' },
            checkWaterMark: 'Select countries',
            popHeight: '350px',
            mode: 'CheckBox',
            filterPlaceholder: 'Search countries',
            maxSelection: 3,
            countries: data['countries'],
            min: 1
        };
    },
    methods: {
        btnClick: function() {
            var multiObj = this.$refs.multiselectInstance.ej2Instances;
            multiObj.value = null;
            this.maxSelection = parseFloat(document.getElementById('maxSel').value);
        }
    },
    provide: {
        multiselect: [CheckBoxSelection]
    }
});
</script>