<template>
    <div class="control-section">
        <div class="top-right-element">
            <ejs-button id="json-btn" :onClick="handleClick">Import JSON</ejs-button>
        </div>
        <ejs-dialog id="dialog" ref="Dialog" :header="header" :width="width" :height="height" :isModal="true" :buttons="buttons" :visible="visible" :content="dlgContent" :beforeOpen="beforeOpen" :animationSettings="animateSettings" :showCloseIcon="showCloseIcon"></ejs-dialog>
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder id="querybuilder" :dataSource="dataSource" ref="querybuilder" :rule="importRules" width="100%" :ruleChange="updateRule" :created="onQrybldrCreated">
                <e-columns>
                    <e-column field='EmployeeID' label='Employee ID' type='number' />
                    <e-column field='FirstName' label='First Name' type='string' />
                    <e-column field='TitleOfCourtesy' label='Title Of Courtesy' type='boolean' :values="values" />
                    <e-column field='Title' label='Title' type='string' />
                    <e-column field='HireDate' label='Hire Date' type='date' format='dd/MM/yyyy' />
                    <e-column field='Country' label='Country' type='string' />
                    <e-column field='City' label='City' type='string' />
                </e-columns>
            </ejs-querybuilder>
            <div class="e-query-json-preview" id="e-query-json-preview" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                    <div style="border: none; width: 100%;" >
                            <label style="padding: 10px;">JSON</label>
                            <div class="copy-tooltip" style='display: none' @click="copyClipboard">
                                <ejs-tooltip id="tooltipClick" opensOn='Click' content='Copied to clipboard'>
                                    <div class="e-icons copycode"></div>
                                </ejs-tooltip>
                            </div>
                    </div>
                <textarea :readonly="isReadOnly" class="e-json-content" id="json-textarea" title="JSON Content"></textarea>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the Query Builder component showing how to import and export a query in JSON format. The query preview can be showcased in the tab component, and the query can be imported to Query Builder using the Import button.</p>
    </div>
    <div id="description">
        <p>
            In this demo features export and import of queries in JSON format is showcased.
        </p>
        <p>
            In mobile mode, the component is shown vertically.
        </p>
        <p>
            More information about Query Builder can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/query-builder/getting-started/">documentation</a> section.
        </p>
    </div>
</template>

<!-- custom code start -->
<style>
    .e-query-builder {
        margin: 0 auto;
    }

    .e-query-json-preview {
        margin-bottom: 20px !important;
        margin-top: 20px !important;
        border: 1px solid #e5e7eb;
        border-radius: 4px;
        height: 330px;
    }

    .top-right-button {
        height: 32px;
    }

    .e-query-json-preview .copy-tooltip {
        float: right;
        margin: 10px 10px 0px 10px;
        height: 32px;
        width: 32px;
        position: unset;
        cursor: pointer;
        background: #f4f4f4;
        border-radius: 2px;
    }

    .e-query-json-preview .copy-tooltip.e-control.e-tooltip:hover {
        background: #d8d8d8;
    }

    .e-query-json-preview .e-icons.copycode {
        float: right;
        padding-left: 3px;
        padding-top: 4px;
        color: rgba(0, 0, 0, .54);
    }

    .e-query-json-preview .e-json-content {
        margin: 10px;
        border: none;
        height: 260px;
        width: 98%;
    }

    .e-query-json-preview .copycode::before {
        padding-right: 3px;
        content: '\e77c';
        font-size: 25px;
    }

    #json-btn {
        margin-right: 20px;
        float: right;
    }

    .json-content-area {
        height: 260px !important;
        width: 100% !important;
        overflow-x: hidden;
        padding: 10px !important;
    }

    #dlgSpan.error {
        color: red;
        padding-left: 0px;
    }

    @media only screen and (max-width: 700px) {
        .e-query-json-preview .e-json-content {
            width: 95%;
        }
    }

    .highcontrast .e-query-json-preview .e-json-content,
    .highcontrast .json-content-area,
    .fluent2-dark .e-query-json-preview .e-json-content,
    .fluent2-dark .json-content-area,
    .fluent2-highcontrast .e-query-json-preview .e-json-content 
    .fluent2-highcontrast .json-content-area {
        background-color: #1f1f1f;
    }
    .fluent2-dark .e-query-json-preview .e-icons.copycode,
    .fluent2-highcontrast .e-query-json-preview .e-icons.copycode {
        padding-bottom: 3px;
        color: white;
    }
</style>
<!-- custom code end -->

<script>
import { QueryBuilderComponent, ColumnDirective, ColumnsDirective, QueryLibrary } from "@syncfusion/ej2-vue-querybuilder";
import { DropDownButtonComponent } from '@syncfusion/ej2-vue-splitbuttons';
import { DialogPlugin, DialogComponent, TooltipComponent } from '@syncfusion/ej2-vue-popups';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-vue-navigations';
import { RadioButtonComponent, ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import dataSource from './data-source.json';
export default {
    data: function() {
    return {
      isReadOnly: true,
      header: 'JSON',
      boolOperators: [
        { value: 'equal', key: 'Equal' },
      ],
      importRules:  {
        'condition': 'and',
        'rules': [{
            'label': 'EmployeeID',
            'field': 'EmployeeID',
            'type': 'number',
            'operator': 'equal',
            'value': 1
        },
        {
            'label': 'Title',
            'field': 'Title',
            'type': 'string',
            'operator': 'equal',
            'value': 'Sales Manager'
        }]
    },
      animateSettings: { effect: 'Zoom' },
      width:'700px',
      height:'420px',
      content: '',
      dlgContent: "<textarea class='json-content-area' id='json-content-area'></textarea>"+"<span id='dlgSpan' :style='{ visibility: 'hidden'}'>Invalid Query</span>",
      showCloseIcon: true,
      visible: false,
      buttons: [
        {
          buttonModel: { isPrimary: false, content: 'Cancel' },
          click: function () {
            this.hide();
          },
        },
        {
          buttonModel: { isPrimary: true, content: 'Import' },
          click: this.importQuery
        },
      ],
      animationSettings: { effect: 'Zoom' },
      model_header: 'User details',
      isModal: true,
      dataSource: dataSource.employeeData,
      values: ['Mr.', 'Mrs.']
    };
    },
    components: { 
        'ejs-querybuilder': QueryBuilderComponent,
        'ejs-dialog': DialogComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'ejs-tooltip': TooltipComponent,
        'ejs-button': ButtonComponent,
    },
    provide: {
        // Injecting QueryLibrary module
        QueryBuilderComponent: [QueryLibrary]
    },
    methods: {
        onQrybldrCreated: function() {
            if(Browser.isDevice) {
             this.$refs.querybuilder.$el.ej2_instances[0].summaryView = true;
            }
            var validRule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
            this.content = JSON.stringify(validRule, null, 4);
           (document.getElementById('json-textarea')).value = this.content;
        },
        importQuery () {
            try {
                var textAreacontent = document.getElementById('json-content-area');
                this.$refs.querybuilder.ej2Instances.setRules(JSON.parse(textAreacontent.value));
                this.updateRule();
                this.$refs.Dialog.hide();
            } catch (error) {
                var errorElem = document.getElementById('dlgSpan');
                if (!errorElem.classList.contains("error")) {
                    errorElem.style.visibility = 'visible';
                    errorElem.classList.add("error");
                }
            }
        },
        beforeOpen: function (args) {
            var dlgContentElement = document.getElementById('json-content-area');
            var errorElem = document.getElementById('dlgSpan');
            if (dlgContentElement) {
                var validRule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
                this.content = JSON.stringify(validRule, null, 4);
                dlgContentElement.value = this.content;
                errorElem.style.visibility = 'hidden';
                if (errorElem.classList.contains("error")) {
                    errorElem.classList.remove("error");
                }
            }
        },
        updateRule () {
            var validRule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
            this.content = JSON.stringify(validRule, null, 4);
            (document.getElementById('json-textarea')).value = this.content;
            (document.getElementById('json-textarea')).readOnly = true;
        },
        copyClipboard: function (args) {
           navigator.clipboard.writeText(this.content);
           setTimeout(function () {
               (getComponent(args.target.closest('.e-tooltip'), 'tooltip')).close();
            }, 1000);
        },
        handleMouseEnter() {
            var elem = document.getElementsByClassName("copy-tooltip");
            elem[0].style.display = 'block';
        },
        handleMouseLeave() {
            var elem = document.getElementsByClassName("copy-tooltip");
            elem[0].style.display = 'none';
        },
        handleClick() {
            this.$refs.Dialog.show();
        },
    }
};
</script>
