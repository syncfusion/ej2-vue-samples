<template>
  <div>
    <div class="col-lg-9 control-section">
      <div class="content-wrapper">
      <div class="col-md-12">
        <ejs-kanban ref="KanbanObj" id="kanban" keyField="Status" :dataSource="kanbanData"
           :cardSettings="cardSettings" :swimlaneSettings="swimlaneSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open" allowToggle="true" showItemCount= "true" minCount= "6" maxCount= "8"></e-column>
            <e-column headerText="In Progress" keyField="InProgress" allowToggle="true" showItemCount= "true" minCount= "2"></e-column>
            <e-column headerText="Done" keyField="Close" allowToggle="true" showItemCount= "true" maxCount= "4"></e-column>
          </e-columns>
        </ejs-kanban>
        <ejs-dialog ref="dialogObj" :buttons='dlgButtons' header='Validation' showCloseIcon=true width='350px' isModal=true :visible=visible>
        </ejs-dialog>
        </div>
      </div>
    </div>
    <div class="col-lg-3 property-section property-customization">
        <p class="property-panel-header header-customization">Constraint</p>
        <div class="property-panel-content">
            <table class="e-constraint-table">
                <tr>
                    <td class="e-constraint-label">
                        <div>Type</div>
                    </td>
                    <td>
                        <div>
                            <ejs-dropdownlist ref='Dropdown' id='type' :dataSource='columnType' :change='changeContraintType' value='Column'>
                            </ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
         <p class="property-panel-header">Validate Constraints</p>
        <div class="property-panel-content">
            <form id="column">
                <table class="e-constraint-table">
                    <tr>
                        <td class="e-constraint-label">
                            <div>Columns</div>
                        </td>
                        <td><ejs-dropdownlist id='key' ref='dropdownHeader' :dataSource='statusData' :change='changeColumns' 
                        :fields='fields' placeholder= 'Header Text '></ejs-dropdownlist></td>
                    </tr>
                    <tr>
                        <td class="e-constraint-label">
                            <div>MinCount</div>
                        </td>
                        <td><ejs-numerictextbox ref='min' id="minIndex" format= '###.##' :min='defaultValue' placeholder="Minimum Count" ></ejs-numerictextbox></td>
                    </tr>
                    <tr>
                        <td class="e-constraint-label">
                            <div>MaxCount</div>
                        </td>
                        <td><ejs-numerictextbox ref='max' id="maxIndex"  format= '###.##' :min='defaultValue'  placeholder="Maximum Count"></ejs-numerictextbox></td>
                    </tr>
                </table>
                <div class="e-validate">
                    <ejs-button id='validate' class="e-btn" v-on:click.native="onFormValidate" >Validate</ejs-button>
                </div>
            </form>
        </div>
    </div>

<div id="action-description">
    <p>This sample demonstrates how to limit the minimum and maximum number of cards to each column of the Kanban component. 
        Configured the options in the property panel to change the constraint type and related attributes.</p>
</div>
<div id="description">
    <p>This sample validates the number of cards in the particular column or swimlane using the <code>constraintType</code> property. 
        This property contains two types:</p>
    <ul>
        <li>Column: Validates the number of cards based on the particular column.
            By default, column validation is applied to Kanban board.</li>
        <li>Swimlane: Validation applies based on number of cards in a particular column cell and swimlane.</li>
    </ul>
    <p>This sample contains the following properties: </p>
    <ul>
        <li>Columns: You can choose a column and set maximum and minimum limit to the selected column.</li>
        <li>minCount: Minimum limit of cards required for each column.
            If the cards count do not reach the minimum limit, it will indicate the validation failed state.</li>
        <li>maxCount: Maximum limit of cards per column. If the cards count exceeds the maximum limit, it will indicate the validation failed state.</li>
    </ul>
</div>
</div>
</template>
<style>
    .property-panel-content .e-constraint-table {
        width: 100%
    }

    .property-panel-content .e-constraint-label {
        width: 40%
    }

    .property-panel-content .e-validate {
        padding-top: 13px;
        text-align: center;
    }

    .property-panel-content td {
        padding-top: 10px;
    }

    .property-panel-header {
        padding-bottom: 0px;
    }
</style>
<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { FormValidator, NumericTextBoxPlugin  } from '@syncfusion/ej2-vue-inputs';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { kanbanData } from "./datasource";

Vue.use(KanbanPlugin);
Vue.use(DropDownListPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(ButtonPlugin);
Vue.use(DialogPlugin);

export default Vue.extend({
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      defaultValue: 0,
      swimlaneSettings: {
        keyField: "Assignee",
      },
      cardSettings: {
        contentField: "Summary",
        headerField: "Id"
      },
      columnType:  [{ text: 'Column' }, {  text:'Swimlane' }],
      statusData: [
        { Id: 0, text: 'To Do' },
        { Id: 1, text: 'In Progress' },
        { Id: 2, text: 'Done' }
    ],
      fields: { text: 'text', value: 'Id' },
      visible: false,
      dlgButtons: [{ click: this.dlgBtnClick, buttonModel: { isPrimary:'true', content: 'OK' } }],
    };
  },
  provide: {
    kanban: []
  },
  mounted: function(){
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
    this.dropObj = this.$refs.Dropdown.ej2Instances;
    this.dropHeaderObj = this.$refs.dropdownHeader.ej2Instances;
    this.minimum = this.$refs.min.ej2Instances;
    this.maximum = this.$refs.max.ej2Instances;
    this.dialogObj = this.$refs.dialogObj.ej2Instances;
    this.formObject = new FormValidator("#column");
    document.getElementById('column').addEventListener('submit', (e) => e.preventDefault());
  },
  methods: {
    changeContraintType: function (args) {
       this.kanbanObj.constraintType = this.dropObj.text;
    },
    changeColumns: function(args) {
        if (args.value !== null) {
            this.minimum.value = this.kanbanObj.columns[args.value].minCount;
            this.maximum.value = this.kanbanObj.columns[args.value].maxCount;
        }
    },
    onFormValidate: function() {
        let colindex = this.dropHeaderObj.index;
        let colText = this.dropHeaderObj.text;
        let colmin = this.minimum.value;
        let colmax = this.maximum.value;
        if (colText === null) {
            this.dialogObj.content = 'Select column Header Text';
            this.dialogObj.show();
        } else if (colText !== null && this.minimum.value === null && this.maximum.value === null) {
            this.dialogObj.content = 'Enter column min-count or max-count';
            this.dialogObj.show();
        } else {
            this.kanbanObj.columns[colindex].headerText = colText;
            if (this.minimum.value !== null) {
                this.kanbanObj.columns[colindex].minCount = colmin;
            }
            if (this.maximum.value !== null) {
                this.kanbanObj.columns[colindex].maxCount = colmax;
            }
            this.formObject.element.reset();
        }
    },
    dlgBtnClick: function() {
        this.dialogObj.hide();
    }
  }
});
</script>