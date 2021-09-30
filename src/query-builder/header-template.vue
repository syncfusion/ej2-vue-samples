<template>
    <div class="template-querybuilder-section">
        <div class="col-lg-12 control-section">
            <ejs-querybuilder ref="querybuilder" id="querybuilder" :rule="importRules" width="100%" :headerTemplate="headerTemplate" >
                <e-columns>
                    <e-column field='EmployeeID' label='Employee ID' type='number' />
                    <e-column field='FirstName' label='First Name' type='string' />
                    <e-column field='LastName' label='Last Name' type='string' />
                    <e-column field='HireDate' label='Hire Date' type='date' format='dd/MM/yyyy' />
                    <e-column field='Country' label='Country' type='string' />
                </e-columns>
            </ejs-querybuilder>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the Header Template functionality in QueryBuilder component using DropDownList and Button components. In this sample, user can change the Condition using DropDownList component and adding rules, groups and deleting groups by using Button component.</p>
        </div>
        <div id="description">
            <p>This sample illustrates how to integrate HeaderTemplate in the QueryBuilder. This is used for creating custom user interface for the header with custom components and update the rule collection by using the component events.</p>
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
    .e-query-builder .query-template-control .cndtnbtn.e-control.e-dropdownlist.e-lib.e-input {
        padding-left: 10px;
    }
    .e-query-builder .query-template-control span.e-custom-group-btn {
        max-width: 100px;
        border-radius: 5px !important;
        border-width: 1px !important; 
    }
    .e-query-builder .query-template-control .e-custom-group-btn.e-input-focus::before, .e-custom-group-btn.e-input-focus::after {
        background: transparent !important;
    }
    .e-query-builder .query-template-control .e-custom-group-btn{
        padding-left: 10px;
        height: 32px;
    }
    .e-query-builder .query-template-control .e-header {
        display: inline-block;
        float: right;
    }
    .e-query-builder .query-template-control .e-qb-hdr-content {
        display: inline-block;
        padding: 5px;
    }
    .e-query-builder .query-template-control .e-grp-btn {
        background-color: #6c757d !important;
    }
    .e-query-builder .query-template-control .e-cond-btn {
        background-color: #6c757d !important;
    }
    .e-query-builder .query-template-control .e-grp-btn:hover {
        background-color: #545c63 !important;
    }
    .e-query-builder .query-template-control .e-cond-btn:hover {
        background-color: #545c63 !important;
    }
    @media only screen and (max-width: 700px) {
        .e-query-builder .e-header {
            float: none !important;
        }
        .e-query-builder .e-qb-hdr-content {
            padding-left: 0px !important;
            padding-right: 10px !important;
            padding-top: 10px !important;
        }
    }
   
</style>

<!-- custom code end -->

<script>
import Vue from "vue";
import { QueryBuilderPlugin } from "@syncfusion/ej2-vue-querybuilder";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { getComponent, compile,closest } from '@syncfusion/ej2-base';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownList } from '@syncfusion/ej2-dropdowns';

Vue.use(QueryBuilderPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
    data: function() {
        return {
            importRules: {
                'condition': 'and',
                'rules': [{
                    'label': 'First Name',
                    'field': 'FirstName',
                    'type': 'string',
                    'operator': 'equal',
                    'value': 'Nancy'
                },
                {
                    'label': 'Country',
                    'field': 'Country',
                    'type': 'string',
                    'operator': 'equal',
                    'value': "USA"
                }]
            },
            headerTemplate: () => {
                return {
                    template : Vue.component('headerTemplate', {
                        template:
                        `<div class="query-template-control" >
                        <div class="e-groupheader">
                            <ejs-dropdownlist :id="ddlID" cssClass="e-custom-group-btn" :dataSource="items" :fields="fields"  v-model="data.condition"  :change="conditionChange"></ejs-dropdownlist>
                            <div class = "e-header">
                                <div class = "e-qb-hdr-content">
                                    <ejs-button :id="addgrpID" cssClass="e-primary" class = "e-grp-btn" v-on:click.native='grpbtnClick'>Add Group</ejs-button>
                                </div>
                                <div class = "e-qb-hdr-content">
                                    <ejs-button :id="addruleID" cssClass="e-primary" class = "e-cond-btn" v-on:click.native='rulebtnClick'>Add Condition</ejs-button>
                                </div>
                                <div class = "e-qb-hdr-content" v-if="data.ruleID !== 'querybuilder_group0'">
                                    <ejs-button :id="dltbtnID" class = "e-del-btn" v-on:click.native='btnClick' cssClass="e-danger">Remove</ejs-button>
                                </div>
                            </div>
                            </div>
                        </div>`,
                        data(args) {
                        return {
                            qryBldrObj: getComponent(document.getElementById('querybuilder'), 'query-builder'),
                            items : [{'key': 'AND', 'value': 'and'},{'key': 'OR', 'value': 'or'}],
                            fields: { text: 'key', value: 'value' },
                            }
                        },
                        computed: {
                            ddlID: function(){
                                return `${this.data.ruleID}_cndtn`;
                            },
                            addgrpID: function(){
                                return `${this.data.ruleID}_addgrp`;
                            },
                            addruleID: function(){
                                return `${this.data.ruleID}_addrule`;
                            },
                            dltbtnID: function(){
                                return `${this.data.ruleID}_dltbtn`;
                            }
                        },
                        methods: {
                            conditionChange: function(args){
                                this.qryBldrObj.notifyChange(args.value, args.element, 'condition');
                            },
                            grpbtnClick: function(args){
                                var addbtn = args.target.id;
                                var btn = addbtn.split('_');
                                this.qryBldrObj.addGroups([{condition: 'or', 'rules': [{}]}], btn[1]);
                            },
                            rulebtnClick: function(args){
                                var addbtn = args.target.id;
                                var btn = addbtn.split('_');
                                this.qryBldrObj.addRules([{}], btn[1]);
                            },
                            btnClick: function(args){
                                this.qryBldrObj.deleteGroup(closest(args.target.offsetParent, '.e-group-container'));
                            }
                        }
                    })
                }
            }
        };
    }
});
</script>