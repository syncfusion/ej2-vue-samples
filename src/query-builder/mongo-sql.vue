<template>
    <div class="control-section">
        <div class="top-right-element">
            <ejs-dropdownbutton :items="items" cssClass="e-caret-hide" :select="onSelect">Import</ejs-dropdownbutton>
        </div>
        <ejs-dialog id="dialog" ref="Dialog" :header="header" :width="width" :height="height" :isModal="true" :buttons="buttons" :visible="visible" :content="dlgContent" :beforeOpen="beforeOpen" :animationSettings="animateSettings" :showCloseIcon="showCloseIcon"></ejs-dialog>
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder id="querybuilder" :dataSource="dataSource" ref="querybuilder" :rule="importRules" width="100%" :ruleChange="updateContentTemplate" :created="onQrybldrCreated">
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
                        <e-tabitem :header="headertext[1]" content='#mongopreview'></e-tabitem>
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
                    <div class="preview" id='mongopreview' style='display: none' @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" >
                        <div class="e-mongo-preview-options">
                            <div class="copy-tooltip" style='display: none' @click="copyClipboard">
                                <ejs-tooltip id="tooltipClick" opensOn='Click' content='Copied to clipboard'>
                                    <div class="e-icons copycode"></div>
                                </ejs-tooltip>
                            </div>
                        </div>
                        <textarea :readonly="isReadOnly" class="e-text-area-content e-mongo-content"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the Query Builder component by showing different types of queries such as SQL and MongoDB. The query preview can be changed using the tab component. Queries can be imported to the Query Builder using the import dropdown button.</p>
    </div>
    <div id="description">
        <p>
            In this demo, Query Builder features  include exporting and importing the query as an SQL query and MongoDB queries. MongoDB Query Builder is a tool that allows users to search for error logs in a MongoDB database. It provides a user-friendly interface for constructing and executing queries and allows users to filter, sort, and export the results for further analysis.
        </p>
        <p>
            In mobile mode, the component is shown vertically.
        </p>
        <p>
            The following methods were used in this sample to perform mongo and SQL query related changes.
        </p>
        <ul>
            <li>setMongoQuery</li>
            <li>getMongoQuery</li>
            <li>setParameterizedSQL</li>
            <li>getParameterizedSQL</li>
            <li>setParameterizedNamedSQL</li>
            <li>getParameterizedNamedSQL</li>
        </ul>
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
.e-query-preview .e-mongo-preview-options {
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
.e-query-preview .e-mongo-content {
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
    .e-query-preview .e-mongo-content {
        height: 160px;
    }

    .e-query-preview .copy-tooltip {
        display: block !important;
    }
}
</style>
<!-- custom code end -->

<script>
import { QueryBuilderComponent, QueryBuilder, ColumnDirective, ColumnsDirective, QueryLibrary } from "@syncfusion/ej2-vue-querybuilder";
import { DropDownButtonComponent } from '@syncfusion/ej2-vue-splitbuttons';
import { DialogPlugin, DialogComponent, TooltipComponent } from '@syncfusion/ej2-vue-popups';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-vue-navigations';
import { RadioButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import dataSource from './data-source.json';

QueryBuilder.Inject(QueryLibrary);

export default {
    data: function() {
    return {
      isReadOnly: true,
      queryType: 'inline',
      currentvalue: {
        value: '',
        rule: '',
      },
      header: 'User details',
      headertext: [
        { text: "SQL" },
        { text: "MongoDB" }
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
      animateSettings: { effect: 'Zoom' },
      width:'700px',
      height:'420px',
      content: '',
      dlgContent:
        "<textarea class='mongo-text-area' id='dlgContent'></textarea>"+"<span id='dlgSpan' :style='{ visibility: 'hidden'}'>Invalid Query</span>",
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
      items: [
        {
          text: 'Import Mongo Query',
        },
        {
          text: 'Import Inline Sql',
        },
        {
          text: 'Import Parameter Sql',
        },
        {
          text: 'Import Named Parameter Sql',
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
        'ejs-dropdownbutton': DropDownButtonComponent,
        'ejs-dialog': DialogComponent,
        'ejs-tab': TabComponent,
        'e-columns': ColumnsDirective,
        'ejs-radiobutton': RadioButtonComponent,
        'e-column': ColumnDirective,
        'e-tabitems': TabItemsDirective,
        'e-tabitem': TabItemDirective,
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
        updateMongoContentTemplate () {
            var validRule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
            var mongoQuery = JSON.parse(this.$refs.querybuilder.ej2Instances.getMongoQuery(validRule));
            this.content = JSON.stringify(mongoQuery, null, 4);
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
        importQuery () {
            try {
                var textAreacontent = document.getElementById('dlgContent');
                if (this.currentvalue.rule != 'sql') {
                    var textAreaValue = JSON.parse(textAreacontent.value);
                }
                switch (this.currentvalue.rule) {
                    case 'mongo':
                        this.$refs.querybuilder.ej2Instances.setMongoQuery(textAreacontent.value);
                        break;
                    case 'namedparameter':
                        this.$refs.querybuilder.ej2Instances.setParameterizedNamedSql(JSON.parse(textAreacontent.value));
                        break;
                    case 'parameter':
                        this.$refs.querybuilder.ej2Instances.setParameterizedSql(JSON.parse(textAreacontent.value));
                        break;
                    case 'sql':
                        this.$refs.querybuilder.ej2Instances.setRulesFromSql(textAreacontent.value, true);
                        break;
                    default:
                       break;
                }
                this.updateContentTemplate();
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
            var dlgContentElement = document.getElementById('dlgContent');
            var errorElem = document.getElementById('dlgSpan');
            if (dlgContentElement) {
                dlgContentElement.value = this.currentvalue.value;
                this.$refs.Dialog.$el.ej2_instances[0].header = this.currentvalue.header;
                errorElem.style.visibility = 'hidden';
                if (errorElem.classList.contains("error")) {
                    errorElem.classList.remove("error");
                }
            }
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
                    this.updateMongoContentTemplate();
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
        },
        onSelect: function (args) {
            var validRule = this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule);
            switch (args.item.text) {
                case 'Import Mongo Query':
                    var mongoQuery = JSON.parse(this.$refs.querybuilder.ej2Instances.getMongoQuery(validRule));
                    mongoQuery = JSON.stringify(mongoQuery, null, 4);
                    this.currentvalue.value = mongoQuery;
                    this.currentvalue.rule = 'mongo';
                    this.currentvalue.header = 'Mongo Query';
                    this.$refs.Dialog.show();
                break;
                case 'Import Inline Sql':
                    this.currentvalue.value =
                    this.$refs.querybuilder.ej2Instances.getSqlFromRules(validRule);
                    this.currentvalue.rule = 'sql';
                    this.currentvalue.header = 'SQL';
                    this.$refs.Dialog.show();
                break;
                case 'Import Parameter Sql':
                    this.currentvalue.value = JSON.stringify(
                    this.$refs.querybuilder.ej2Instances.getParameterizedSql(validRule), null, 4);
                    this.currentvalue.rule = 'parameter';
                    this.currentvalue.header = 'Parameter SQL';
                    this.$refs.Dialog.show();
                break;
                case 'Import Named Parameter Sql':
                    this.currentvalue.value = JSON.stringify(
                    this.$refs.querybuilder.ej2Instances.getParameterizedNamedSql(validRule), null, 4);
                    this.currentvalue.rule = 'namedparameter';
                    this.currentvalue.header = 'NamedParameter SQL';
                    this.$refs.Dialog.show();
                    break;
                default:
                break;
            }
        },
    }
};
</script>
