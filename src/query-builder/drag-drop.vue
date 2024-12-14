<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder id="querybuilder" :dataSource="dataSource" ref="querybuilder" :rule="importRules" width="100%" :ruleChange="updateContentTemplate" :created="onQrybldrCreated" :allowDragAndDrop= "allowDragAndDrop">
                <e-columns>
                    <e-column field='EmployeeID' label='Employee ID' type='number' />
                    <e-column field='FirstName' label='First Name' type='string' />
                    <e-column field='LastName' label='Last Name' type='string' />
                    <e-column field='Age' label='Age' type='number' />
                    <e-column field='IsDeveloper' label='Is Developer' type='boolean' />
                    <e-column field='PrimaryFramework' label='Primary Framework' type='string' />
                    <e-column field='HireDate' label='Hire Date' type='date' format='MM/dd/yyyy' />
                    <e-column field='Country' label='Country' type='string' />
                </e-columns>
            </ejs-querybuilder>
            <div class="e-query-preview">
                <ejs-tab id="defaultTab" ref="tabObj" :created="tabCreated" :selected="changeTab">
                    <e-tabitems>
                        <e-tabitem :header="headertext[0]" content='#preview'></e-tabitem>
                        <e-tabitem :header="headertext[1]" content='#jsonpreview'></e-tabitem>
                    </e-tabitems>
                </ejs-tab>
                <div class="preview-content" id="preview-content">
                    <div class="preview" id='preview' style='display: none' @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" >
                        <div class="e-preview-options">
                            <label>Format Info:</label>
                            <ejs-radiobutton label="Inline" cssClass='e-custom-radio-btn' name="state" value="Inline" checked="true" :change="change"></ejs-radiobutton>
                            <ejs-radiobutton label="Parameter" cssClass="e-custom-radio-btn" name="state" value="Parameter" :change="change"></ejs-radiobutton>
                            <ejs-radiobutton label="Named Parameter" cssClass="e-custom-radio-btn" name="state" value="NamedParameter" :change="change"></ejs-radiobutton>
                            <div class="copy-tooltip" style='display: none' @click="copyClipboard">
                                <ejs-tooltip id="tooltipClick" opensOn='Click' content='Copied to clipboard'>
                                    <div class="e-icons copycode"></div>
                                </ejs-tooltip>
                            </div>
                        </div>
                        <textarea :readonly="isReadOnly" class="e-text-area-content e-sql-content"></textarea>
                    </div>
                    <div class="preview" id='jsonpreview' style='display: none' @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" >
                        <div class="e-json-preview-options">
                            <div class="copy-tooltip" style='display: none' @click="copyClipboard">
                                <ejs-tooltip id="tooltipClick" opensOn='Click' content='Copied to clipboard'>
                                    <div class="e-icons copycode"></div>
                                </ejs-tooltip>
                            </div>
                        </div>
                        <textarea :readonly="isReadOnly" class="e-text-area-content e-json-content"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the drag and drop support of the Query Builder component.</p>
    </div>
    <div id="description">
        <p>
            In this demo, the Query Builder includes a drag-and-drop feature that allows you to move rules or groups to different positions. You can enable or disable this feature using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/query-builder/#allowDragAndDrop">allowDragAndDrop</a> property. 
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
.e-query-preview {
  margin-top: 10px !important;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  height: 300px;
  margin-bottom: 10px;
}
#dlgContent {
    height: 260px !important;
    width: 100% !important;
    overflow-x: hidden;
    padding: 10px !important;
}
.e-query-preview .e-tab {
    height: 200px;
}
.e-query-preview .e-tab .e-content {
    margin: 10px;
}
.e-query-preview .e-json-preview-options {
    height: 54px;
}

.e-query-preview .e-preview-options {
    height: 54px;
}

.e-custom-radio-btn {
    margin-left: 20px;
}

.e-text-area-content {
  margin: 10px;
  overflow: auto;
  border: none;
  width: 97% !important;
}
.e-text-area-content:focus-visible {
  outline: none;
}
.e-text-area-content:focus-visible {
  outline: none;
}
.top-right-element {
  margin-bottom: 10px;
  height: 32px;
}
.top-right-element .e-dropdown-btn {
  float: right;
   margin-right: 20px;
}
.e-query-preview .preview-content {
  margin-top: 10px;
}
.e-query-preview .e-sql-content,
.e-query-preview .e-json-content {
  margin: 10px;
  border: none;
  height: 160px;
  width: 98%;
}
.e-query-preview .copycode::before {
    content: '\e77c';
    font-size: 25px;
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
#dlgSpan.error {
    color: red;
    padding-left: 0px;
}
@media only screen and (max-width: 700px) {
    .e-query-preview .e-sql-content,
    .e-query-preview .e-json-content {
        height: 160px;
    }

    .e-query-preview .copy-tooltip {
        display: block !important;
    }
}

.tailwind3-dark .e-text-area-content {
    background: transparent;
}
</style>
<!-- custom code end -->

<script>
import { QueryBuilderComponent, QueryBuilder, ColumnDirective, ColumnsDirective, QueryLibrary } from "@syncfusion/ej2-vue-querybuilder";
import { TooltipComponent } from '@syncfusion/ej2-vue-popups';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-vue-navigations';
import { RadioButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import dataSource from './data-source.json';

QueryBuilder.Inject(QueryLibrary);

export default {
    data: function() {
    return {
      allowDragAndDrop: true,
      isReadOnly: true,
      queryType: 'inline',
      currentvalue: {
        value: '',
        rule: '',
      },
      headertext: [
        { text: "SQL" },
        { text: "JSON" }
      ],
      currentIndex: 0,
      importRules:  {
        condition: "and",
        rules: [
            { label: "First Name", field: "FirstName", type: "string", operator: "startswith", value: "Andre" },
            { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'] },
            { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 29 },
            {
                condition: "or", rules: [
                    { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true },
                    { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "React" }
                ]
            },
            { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ['11/28/2023', '11/28/2023'] },
        ],
      },
      content: '',
      dataSource: dataSource.employeeData,
      values: ['Mr.', 'Mrs.']
    };
    },
    components: { 
        'ejs-querybuilder': QueryBuilderComponent,
        'ejs-tab': TabComponent,
        'e-tabitems': TabItemsDirective,
        'e-tabitem': TabItemDirective,
        'e-columns': ColumnsDirective,
        'ejs-radiobutton': RadioButtonComponent,
        'e-column': ColumnDirective,
        'ejs-tooltip': TooltipComponent
    },
    provide: {
        // Injecting QueryLibrary module
        querybuilder: [QueryLibrary]
    },
    methods: {
        onQrybldrCreated: function() {
            if(Browser.isDevice) {
             this.$refs.querybuilder.$el.ej2_instances[0].summaryView = true;
            }
        },
        change: function (args) {
            this.queryType = args.value.toLowerCase();
            this.updateSQLContent();
        },
        updateJsonContentTemplate () {
            var validRule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
            this.content = JSON.stringify(validRule, null, 4);
            (document.getElementsByClassName('e-text-area-content')[1]).value = this.content;
        },
        tabCreated: function () {
            setTimeout(() => {
                this.updateSQLContent();
            }, 100);
        },
        updateSQLContent () {
            var content;
            var qbrule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
            switch (this.queryType) {
                case 'inline':
                    this.content = this.$refs.querybuilder.ej2Instances.getSqlFromRules(qbrule);
                    break;
                case 'parameter':
                    this.convertParameterSql(qbrule);
                    break;
                default:
                    this.convertNamedParameterSql(qbrule);
                    break;
                }
            (document.getElementsByClassName('e-text-area-content')[0]).value = this.content;
        },
        convertParameterSql (qbrule) {
            this.content = JSON.stringify(this.$refs.querybuilder.ej2Instances.getParameterizedSql(qbrule), null, 4)
        },
        convertNamedParameterSql (qbrule) {
            this.content = JSON.stringify(this.$refs.querybuilder.ej2Instances.getParameterizedNamedSql(qbrule), null, 4)
        },
        changeTab: function (args) {
            this.currentIndex = args.selectedIndex;
            setTimeout(() => {
               this.updateContentTemplate();
            }, 100);
        },
        updateContentTemplate () {
            switch (this.currentIndex) {
                case 0:
                    this.updateSQLContent();
                    break;
                case 1:
                    this.updateJsonContentTemplate();
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
    }
};
</script>