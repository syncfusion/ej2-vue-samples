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
                    <ejs-button id='validate' class="e-btn" v-on:click="onFormValidate" >Validate</ejs-button>
                </div>
            </form>
        </div>
    </div>
<div id="action-description">
    <p>
        This sample demonstrates the work in progress validation capabilities of the Kanban component, enabling workflow constraints to be applied and monitored for improved task management and process control.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates work in progress validation in the Kanban component using the
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/validation" target="_blank">constraintType</a>
        property. WIP validation helps enforce workflow limits by controlling the minimum and maximum number of cards allowed within a column or swimlane.
    </p>
    <p>
    The <code>constraintType</code> property supports the following validation modes:
    </p>
    <ul>
        <li>
            <code>Column</code>: Validates cards based on the total number of cards within a column. This is the default validation mode.
        </li>
        <li>
            <code>Swimlane</code>: Validates cards based on the number of cards within a specific swimlane and column combination.
        </li>
        </ul>
        <p>
            This sample also demonstrates the following validation-related settings:
        </p>
        <ul>
            <li>
                <a href="https://ej2.syncfusion.com/vue/documentation/kanban/columns" target="_blank">columns</a>: Allows you to configure validation settings for a selected column.
            </li>
            <li>
                <a href="https://ej2.syncfusion.com/vue/documentation/kanban/validation#minimum-card-limit" target="_blank">minCount</a>:
                Specifies the minimum number of cards required in a column. A validation indicator is displayed when the card count falls below this limit.
            </li>
            <li>
                <a href="https://ej2.syncfusion.com/vue/documentation/kanban/validation#maximum-card-limit" target="_blank">maxCount</a>:
                Specifies the maximum number of cards allowed in a column. A validation indicator is displayed when the card count exceeds this limit.
            </li>
        </ul>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/validation" target="_blank">wip validation</a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
    </p>
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
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-kanban";
import { FormValidator, NumericTextBoxComponent  } from '@syncfusion/ej2-vue-inputs';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { kanbanData } from "./datasource";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-button': ButtonComponent,
    'ejs-dialog': DialogComponent
  },
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
};
</script>