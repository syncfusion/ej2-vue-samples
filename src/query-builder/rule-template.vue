<template>
    <div class="template-querybuilder-section">
        <div class="col-lg-12 control-section">
           <ejs-querybuilder ref="querybuilder" id="querybuilder" :rule="importRules" width="100%" >
                <e-columns>
                    <e-column field='EmployeeID' label='Employee ID' type='number' />
                    <e-column field='FirstName' label='First Name' type='string' />
                    <e-column field='LastName' label='Last Name' type='string' />
                    <e-column field='HireDate' label='Hire Date' type='date' format='dd/MM/yyyy' />
                    <e-column field='Country' label='Country' type='string' :ruleTemplate="'ruleTemplate'">
                    <template v-slot:ruleTemplate="{data}">
                        <div class="e-rule e-rule-template">
                            <div class="e-rule-filter">
                                <ejs-dropdownlist :change='fieldChange' :value="data.rule.field" :dataSource="data.columns" :fields="data.fields">
                                </ejs-dropdownlist>
                            </div>
                            <div class="e-rule-operator e-operator">
                                <ejs-radiobutton label="Is Equal" value="equal" name="operator" :change="operatorChange" checked=true ></ejs-radiobutton>
                                <ejs-radiobutton label="Is Not Equal" value="notequal" name="operator" :change="operatorChange"></ejs-radiobutton>
                            </div>
                            <div  class ="e-rule-value e-value e-custom-value">
                                <ejs-dropdownlist :change='valueChange' :value="data.rule.value" :dataSource="items" :fields="fields">
                                </ejs-dropdownlist>
                            </div>
                            <div class="e-rule-value-delete">
                                <button class="e-removerule e-custom-delete e-rule-delete e-css e-btn e-small e-round" title="Delete Rule">
                                    <span class="e-btn-icon e-icons e-delete-icon"/>
                                </button>
                            </div>
                        </div>
                    </template>
                    </e-column>
                </e-columns>
            </ejs-querybuilder>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the Rule Template functionality in QueryBuilder component using RadioButton components.  In the Country column, user can change the Operator as equal/not equal using RadioButton component and select the Value from DropDownList component.</p>
        </div>
        <div id="description">
            <p>This sample illustrates how to integrate ruleTemplate to the columns in the QueryBuilder. This is used for creating custom user interface for the columns with custom components and update the rule collection by using the component events.</p>
            <p>More information about Query Builder can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/query-builder/getting-started/"> documentation</a> section.
            </p>
        </div>
    </div>
</template>

<!-- custom code start -->

<style>
    .e-query-builder {
        margin: 0 auto;
    }
    
    .e-query-builder .e-rule-template .e-radio-wrapper:nth-child(1) {
       margin-right: 5px !important;
    } 
    .e-query-builder .e-rule-template .e-radio-wrapper:nth-child(2) {
       margin-right: 0px !important;
    }
    @media only screen and (max-width: 700px) {
        .e-query-builder .e-rule-template .e-radio-wrapper:nth-child(1) {
            padding-bottom: 10px !important;
        }
        .e-query-builder .e-rule-template .e-rule-value.e-custom-value {
            width: auto !important;
        }
        .e-query-builder .e-rule-template .e-rule-value-delete .e-custom-delete {
            padding-right: 0px !important;
        }
    }
</style>

<!-- custom code end -->

<script>
import { QueryBuilderComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-querybuilder";
import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { DropDownList, MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import { createElement, getComponent, isNullOrUndefined } from "@syncfusion/ej2-base";

export default {
    components: {
        'ejs-querybuilder': QueryBuilderComponent,
        'e-column': ColumnDirective,
        'e-columns': ColumnsDirective,
        'ejs-radiobutton': RadioButtonComponent,
        'ejs-dropdownlist': DropDownListComponent
    },
    data: function() {
        return {
            importRules: {
                condition: "and",
                rules: [
                    {
                    label: "First Name",
                    field: "FirstName",
                    type: "string",
                    operator: "equal",
                    value: "Nancy",
                    },
                    {
                    label: "Country",
                    field: "Country",
                    type: "string",
                    operator: "equal",
                    value: "USA",
                },
                ],
            },
            items: [{ field: 'USA', label: 'USA' }, { field: 'England', label: 'England' }, { field: 'India', label: 'India' }, { field: 'Spain', label: 'Spain' }],
            fields: { text: 'field', value: 'label' }
        };
    },
    methods: {
            fieldChange: function (args) {
                var qryBldrObj = getComponent(document.getElementById("querybuilder"),"query-builder");
                qryBldrObj.notifyChange(args.value, args.element, "field");
            },
            operatorChange: function (args) {
                var qryBldrObj = getComponent(document.getElementById("querybuilder"),"query-builder");
                qryBldrObj.getRule(args.event.target).operator = args.value;
            },
            valueChange: function (args) {
                var qryBldrObj = getComponent(document.getElementById("querybuilder"),"query-builder");
                qryBldrObj.notifyChange(args.value, args.element, "value");
            }
        }
}
</script>
