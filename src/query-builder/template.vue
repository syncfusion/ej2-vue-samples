<template>
    <div class="template-querybuilder-section">
        <div class="col-lg-8 control-section">
            <ejs-querybuilder ref="querybuilder" :dataSource="dataSource" :rule="importRules" width="100%" :ruleChange="updateRule">
                <e-columns>
                    <e-column field='Category' label='Category' type='string' :template='categoryTemplate' />
                    <e-column field='PaymentMode' label='Payment Mode' type='string' :operators="paymentOperators" :template='paymentTemplate' />
                    <e-column field='TransactionType' label='Transaction Type' type='boolean' :operators="transOperators" :template='transactionTemplate' />
                    <e-column field='Description' label='Description' type='string' />
                    <e-column field='Date' label='Date' type='date' />
                    <e-column field='Amount' label='Amount' type='number' :operators="amountOperators" :template='amountTemplate' />
                </e-columns>
            </ejs-querybuilder>
        </div>
        <div class="col-lg-4 property-section">
            <table id="property" title="Properties" style="width: 100%; margin:10px">
                <tr>
                    <td>
                        <div class="row"><ejs-radiobutton id="radio1" label="JSON Rule" name="rule" value="json" :checked="true" :change="changeValue"></ejs-radiobutton></div>
                    </td>
                    <td>
                        <div class="row"><ejs-radiobutton ref="sql_radiobutton" id="radio2" label="SQL Rule" name="rule" value="sql" :change="changeValue"></ejs-radiobutton></div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id='ruleContent' :readonly=true v-model="textAreaContent"></textarea>
                    </td>
                </tr>
            </table>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the integration of the Dropdown List and Slider components as templates in the Query Builder control.</p>
        </div>
        <div id="description">
            <p>
                This sample illustrates how to integrate the Dropdown List, Slider, and Checkbox components with the Query Builder. The available types of templates are:
                <ul>
                    <li><code>DropDownList</code></li>
                    <li><code>AutoComplete</code></li>
                    <li><code>CheckBox</code></li>
                    <li><code>Slider</code></li>
                </ul>
            </p>
            <p>This sample illustrates the created filters in JSON and SQL modes.</p>
            <p>More information about Query Builder can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/query-builder/getting-started/"> documentation</a> section.
            </p>
        </div>
    </div>
</template>

<!-- custom code start -->

<style>
    /* EJ2 QueryBuider - Template sample styles */
    .template-querybuilder-section .e-control-wrapper.e-slider-container.e-horizontal {
        height: 0;
    }
    .template-querybuilder-section .e-query-builder {
        margin: 3% auto;
    }
    .template-querybuilder-section #ruleContent {
        border: 1px solid #d3d3d3;
        width: 100%;
        height: 500px;
        overflow: auto;
        background-color: #fff;
    }
    .highcontrast .template-querybuilder-section #ruleContent {
        background-color: #000;
    }
    .template-querybuilder-section .property-panel-table td:first-child {
        width: auto;
    }
    .template-querybuilder-section .property-panel-table div.row,
    .template-querybuilder-section .property-panel-table div.e-radio-wrapper {
        padding-bottom: 10px;
    }
    .highcontrast textarea#ruleContent {
	  background-color: #000;
	}
</style>

<!-- custom code end -->

<script>
import Vue from "vue";
import { QueryBuilderPlugin } from "@syncfusion/ej2-vue-querybuilder";
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import * as dataSource from './data-source.json';
import * as ruleData from './template-data.json';
import { DropDownList, MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import { Slider, TextBox } from '@syncfusion/ej2-inputs';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { createElement, getComponent, isNullOrUndefined } from "@syncfusion/ej2-base";

MultiSelect.Inject(CheckBoxSelection);
let inOperators = ['in', 'notin'];
Vue.use(QueryBuilderPlugin);
Vue.use(RadioButtonPlugin);

export default Vue.extend({
  data: function() {
    return {
      dataSource: dataSource.expenseData,
      textAreaContent: '',
      paymentOperators: [{ value: 'equal', key: 'Equal' }, { value: 'notequal', key: 'Not Equal' }],
      transOperators: [{key:'Equal',value:'equal'},{key:'Not Equal',value:'notequal'}],
      amountOperators: [{ key: 'Equal', value: 'equal' },{ key: 'Not equal', value: 'notequal' },{ key: 'Greater than', value: 'greaterthan' },
                { key: 'Less than', value: 'lessthan' },{ key: 'Less than or equal', value: 'lessthanorequal' },
                { key: 'Greater than or equal', value: 'greaterthanorequal' }],
        paymentTemplate: {
                create: () => {
                    return createElement('input', { attrs: { 'type': 'text' } });
                },
                destroy: (args) => {
                    let dropdownlist = getComponent(document.getElementById(args.elementId), 'dropdownlist');
                    if(dropdownlist)
                        dropdownlist.destroy();
                },
                write: (args) => {
                    let ds = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking', 'Wallet'];
                        let dropDownObj = new DropDownList({
                            dataSource: ds,
                            value: args.values,
                            change: (e) => {
                                this.$refs.querybuilder.ej2Instances.notifyChange(e.itemData.value, e.element);
                            }
                        });
                        dropDownObj.appendTo('#' + args.elements.id);
                }
            },
        transactionTemplate: {
                create: () => {
                    return createElement('input', { attrs: { 'type': 'checkbox' } });
                },
                destroy: (args) => {
                    getComponent(document.getElementById(args.elementId), 'checkbox').destroy();
                },
                write: (args) => {
                    let checked = args.values === 'IsExpensive' ? true : false;
                    new CheckBox(
                        {
                            label: 'Is Expensive',
                            checked: checked,
                            change: (e) => {
                                this.$refs.querybuilder.ej2Instances.notifyChange(e.checked ? 'expensive' : 'income', e.event.target);
                            }
                        },
                        '#' + args.elements.id);
                }
            },
        amountTemplate: {
                create: () => {
                    return createElement('div', { className: 'ticks_slider' });
                },
                destroy: (args) => {
                    getComponent(document.getElementById(args.elementId), 'slider').destroy();
                },
                write: (args) => {
                    new Slider(
                        {
                            value: args.values,
                            min: 0,
                            max: 100,
                            type: 'MinRange',
                            // Initialize tooltip with placement and showOn
                            tooltip: { isVisible: true, placement: 'Before', showOn: 'Hover' },
                            change: (e) => {
                                this.$refs.querybuilder.ej2Instances.notifyChange(e.value, args.elements);
                            }
                        },
                        '#' + args.elements.id);
                }
            },
      importRules: ruleData.importRules
    };
  },
  methods: {
        updateRule: function(args) {
            if (this.$refs.sql_radiobutton.ej2Instances.checked) {
                this.textAreaContent = this.$refs.querybuilder.ej2Instances.getSqlFromRules(args.rule);
            } else {
                this.textAreaContent = JSON.stringify(args.rule, null, 4);
            }
        },
        changeValue: function() {
            var validRule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
            if (this.$refs.sql_radiobutton.ej2Instances.checked) {
                this.textAreaContent = this.$refs.querybuilder.ej2Instances.getSqlFromRules(validRule);
            } else {
                this.textAreaContent = JSON.stringify(validRule, null, 4);
            }
        },
        onScroll: function() {
            if(!isNullOrUndefined(document.getElementsByClassName("ticks_slider")[0])){
                let defaultObj = document.getElementsByClassName("ticks_slider")[0].ej2_instances[0];
                defaultObj.refreshTooltip();
            }
    }
    },
  mounted: function() {
    this.$nextTick(function () {
        var validRule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
        this.textAreaContent = JSON.stringify(validRule, null, 4);
    });
    if (!isNullOrUndefined(document.getElementById('right-pane'))) {
        document.getElementById('right-pane').addEventListener('scroll', this.onScroll.bind(this));
    }
  }
});
</script>