<template>
    <div class="template-querybuilder-section">
        <div class="col-lg-12 control-section">
            <ejs-querybuilder ref="querybuilder" :dataSource="dataSource" :rule="importRules" width="100%" :ruleChange="updateContentTemplate">
                <e-columns>
                    <e-column field='Category' label='Category' type='string' />
                    <e-column field='PaymentMode' label='Payment Mode' type='string' :operators="paymentOperators" :template='paymentTemplate' />
                    <e-column field='TransactionType' label='Transaction Type' type='boolean' :operators="transOperators" :template='transactionTemplate' />
                    <e-column field='Description' label='Description' type='string' />
                    <e-column field='Date' label='Date' type='date' />
                    <e-column field='Amount' label='Amount' type='number' :operators="amountOperators" :template='amountTemplate' />
                </e-columns>
            </ejs-querybuilder>
            <div class="e-query-preview">
                <ejs-tab id="defaultTab" ref="tabObj" :created="tabCreated" :selected="changeTab">
                    <e-tabitems>
                        <e-tabitem :header="headertext[0]" content='#preview'></e-tabitem>
                        <e-tabitem :header="headertext[1]" content='#spelpreview'></e-tabitem>
                    </e-tabitems>
                </ejs-tab>
                <div class="preview-content" id="preview-content">
                    <div class="preview" id='preview' style='display: none' @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" >
                        <div class="e-preview-options">
                            <div class="copy-tooltip" style='display: none' @click="copyClipboard">
                                <ejs-tooltip id="tooltipClick" opensOn='Click' content='Copied to clipboard'>
                                    <div class="e-icons copycode"></div>
                                </ejs-tooltip>
                            </div>
                        </div>
                        <textarea :readonly="isReadOnly" class="e-text-area-content e-cel-content"></textarea>
                    </div>
                    <div class="preview" id='spelpreview' style='display: none' @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" >
                        <div class="e-preview-options">
                            <div class="copy-tooltip" style='display: none' @click="copyClipboard">
                                <ejs-tooltip id="tooltipClick" opensOn='Click' content='Copied to clipboard'>
                                    <div class="e-icons copycode"></div>
                                </ejs-tooltip>
                            </div>
                        </div>
                        <textarea :readonly="isReadOnly" class="e-text-area-content e-spel-content"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the integration of the Dropdown List and Slider components as templates in the Query Builder component and also showing the different types of queries such as CEL and SpEL. The query preview can be changed using the tab component.</p>
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
            <p>In this demo queries are exported and imported in CEL and SpEL formats. For Common Expression Language (CEL) output, use the "cel" format. CEL is used for validating data.
For Spring Expression Language (SpEL) output, use the "spel" format. The Spring Expression Language (SpEL) is a powerful expression language that supports querying and manipulating an object graph at runtime.</p>
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
        .e-query-preview {
        margin-top: 20px !important;
        border: 1px solid #e5e7eb;
        border-radius: 4px;
        height: 300px;
        margin-bottom: 10px;
    }

    .e-query-preview .e-tab {
        height: 200px;
    }

    .e-query-preview .e-tab .e-content {
        margin: 10px;
    }

    .e-query-preview .copycode::before {
        content: '\e77c';
        font-size: 25px;
    }

    .e-query-preview .e-preview-options {
        height: 54px;
    }

    .e-query-preview .copy-tooltip {
        height: 32px;
        width: 32px;
        position: absolute;
        cursor: pointer;
        right: 12px;
        top: 12px;
        background: #f4f4f4;
        border-radius: 2px;
    }      

    .e-query-preview .copy-tooltip.e-control.e-tooltip:hover {
        background: #D8D8D8;
    }

    .e-query-preview .e-icons.copycode {
        padding-left: 3px;
        padding-top: 4px;
        color: rgba(0, 0, 0, .54);
    }


    .e-query-preview .e-cel-content,
    .e-query-preview .e-spel-content {
        border: none;
        height: 160px;
        width: 98%;
    }

    .e-query-preview .e-text-area-content:focus-visible {
        outline: none;
    }

    .e-query-preview .preview {
        margin-top: 20px;
    }

    .e-text-area-content:focus-visible {
        outline: none;
    }

    .e-text-area-content {
        margin: 10px !important;
        overflow: auto;
        border: none;
        width: 96%;
    }

    .e-text-area-content:focus-visible {
        outline: none;
    }

    @media only screen and (max-width: 700px) {
        .e-query-preview .copy-tooltip {
           display: block !important;
        }
    }
</style>

<!-- custom code end -->

<script>
import { QueryBuilderComponent, ColumnDirective, ColumnsDirective, QueryLibrary } from "@syncfusion/ej2-vue-querybuilder";
import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";
import * as dataSource from './data-source.json';
import * as ruleData from './template-data.json';
import { DropDownList, MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import { Slider } from '@syncfusion/ej2-inputs';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { createElement, getComponent, isNullOrUndefined } from "@syncfusion/ej2-base";
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-vue-navigations';
import {getCELQuery, getSpELQuery } from './util.js';
import { TooltipComponent } from '@syncfusion/ej2-vue-popups';

MultiSelect.Inject(CheckBoxSelection);

export default {
  data: function() {
    return {
      isReadOnly: true,
      headertext: [
        { text: "CEL" },
        { text: "SpEL" }
      ],
      currentIndex: 0,
      dataSource: dataSource.expenseData,
      textAreaContent: '',
      content: '',
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
                                if (e.isInteracted) {
                                    this.$refs.querybuilder.ej2Instances.notifyChange(e.value, args.elements);
                                }
                            }
                        },
                        '#' + args.elements.id);
                }
            },
      importRules: ruleData.importRules
    };
  },
  components: { 
      'ejs-querybuilder': QueryBuilderComponent,
      'e-columns': ColumnsDirective,
      'e-column': ColumnDirective,
      'e-tabitems': TabItemsDirective,
      'e-tabitem': TabItemDirective,
      'ejs-tooltip': TooltipComponent,
      'ejs-tab': TabComponent,
  },
  methods: {
     onScroll: function() {
        if(!isNullOrUndefined(document.getElementsByClassName("ticks_slider")[0])){
            let defaultObj = document.getElementsByClassName("ticks_slider")[0].ej2_instances[0];
            defaultObj.refreshTooltip();
        }
    },
    tabCreated: function () {
        setTimeout(() => {
            this.updateCELContentTemplate();
        }, 100);
    },
    updateCELContentTemplate: function() {
        debugger
        var validRule = this.$refs.querybuilder.ej2Instances.getValidRules();
        var celQuery = '';
        this.content = getCELQuery(validRule, celQuery);
        document.getElementsByClassName('e-cel-content')[0].textContent = this.content;
        (document.getElementsByClassName('e-cel-content')[0]).style.display = 'block';
    },
    updateSpCELContentTemplate: function() {
        var validRule = this.$refs.querybuilder.ej2Instances.getValidRules();
        var spELQuery = '';
        this.content = getSpELQuery(validRule);
        document.getElementsByClassName('e-spel-content')[0].textContent = this.content;
        (document.getElementsByClassName('e-spel-content')[0]).style.display = 'block';
    },
    changeTab: function (args) {
        this.currentIndex = args.selectedIndex;
        setTimeout(() => {
            this.updateContentTemplate();
        }, 100);
    },
    updateContentTemplate: function () {
        switch (this.currentIndex) {
            case 0:
                this.updateCELContentTemplate();
                break;
            case 1:
                this.updateSpCELContentTemplate();
                break;
        }
    },
    copyClipboard: function (args) {
       navigator.clipboard.writeText(this.content);
       setTimeout(function () {
           (getComponent(args.target.closest('.e-tooltip'), 'tooltip')).close();
        }, 1000);
    },
    handleMouseEnter() {
        var elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (this.$refs.tabObj.ej2Instances.selectedItem == i) {
                elem[i].style.display = 'block';
            }
        }
    },
    handleMouseLeave() {
        var elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (this.$refs.tabObj.ej2Instances.selectedItem == i) {
                elem[i].style.display = 'none';
            }
        }
    }
    },
  mounted: function() {
    if (!isNullOrUndefined(document.getElementById('right-pane'))) {
        document.getElementById('right-pane').addEventListener('scroll', this.onScroll.bind(this));
    }
  }
};
</script>