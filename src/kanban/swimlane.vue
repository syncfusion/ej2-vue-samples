<template>
  <div>
    <div class="col-md-8 control-section">
      <div class="content-wrapper kanban-overflow">
        <ejs-kanban id="kanban" ref="KanbanObj" keyField="Status" :dataSource="kanbanData"
           :cardSettings="cardSettings" :swimlaneSettings="swimlaneSettings" height="500px">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
           <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
    </div>
    <div class="col-lg-4 property-section">
    <table id="property" title="Properties">
        <tr>
            <td>
                <div>Sort Direction</div>
            </td>
            <td>
                <div>
                    <ejs-dropdownlist ref='Dropdown' id='sort' :dataSource='sortData' :change='changeSortOrder' value='Ascending' ></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>Enable Swimlane Drag And Drop</div>
            </td>
            <td>
                <ejs-checkbox :checked="false" :change="onChange"></ejs-checkbox>
            </td>
        </tr>
        <tr>
            <td>
                <div>Show Empty Swimlane Row</div>
            </td>
            <td>
                <ejs-checkbox :checked="false" :change="changeRow"></ejs-checkbox>
            </td>
        </tr>
        <tr>
            <td>
                <div>Show Swimlane Item Count</div>
            </td>
            <td>
                <ejs-checkbox  :checked="true" :change="changeCount"></ejs-checkbox>
            </td>
        </tr>
        <tr>
            <td>
                <div>Enable Frozen Rows</div>
            </td>
            <td>
                <ejs-checkbox :change="changeFrozen"></ejs-checkbox>
            </td>
        </tr>
    </table>
</div>
    
   <div id="action-description">
    <p>
        This example demonstrates the swimlane functionalities of Kanban component. Provided options in the property panel
        to sort
        the cards, enable drag-and-drop across swimlanes, show or hide the empty row, items count and swimlane frozen rows. Also, you can
        expand/collapse the swimlane row in the Kanban board.
    </p>
</div>
<div id="description">
    <p>
        This sample renders the assignee field as a swimlane header using the <code>swimlaneSettings</code> property.
        The property provides the following options to change its related settings:
    </p>
    <ul>
        <li>Sorting the swimlane cards using the <code>swimlaneSettings.sortDirection</code> property</li>
        <li>Control the drag-and-drop of the cards across swimlane using the
            <code>swimlaneSettings.allowDragAndDrop</code> property.</li>
        <li>Show or hide the empty swimlane row using the <code>swimlaneSettings.showEmptyRow</code> property.</li>
        <li>Show or hide the items count in the swimlane header using the <code>swimlaneSettings.showItemCount</code>
            property.</li>
        <li>Enable or disable the frozen swimlane rows using the <code>swimlaneSettings.enableFrozenRows</code> property.</li>
    </ul>
</div>

</div>
</template>
<style>
    .kanban-overflow{
        overflow: hidden;
    }
</style>
<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { kanbanData } from "./datasource";

Vue.use(KanbanPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      allowToggle: true,
      swimlaneSettings: {
        keyField: "Assignee"
      },
      cardSettings: {
        contentField: "Summary",
        headerField: "Id"
      },
      sortData:  [{ text: 'Ascending' }, {  text:'Descending' }]
    };
  },
  provide: {
    kanban: []
  },
  mounted: function(){
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
  },
  methods: {
    changeCount: function (args) {
        this.kanbanObj.swimlaneSettings.showItemCount = args.checked;
        },
    onChange: function (args) {
        this.kanbanObj.swimlaneSettings.allowDragAndDrop = args.checked;
        },
    changeRow: function (args) {
        this.kanbanObj.swimlaneSettings.showEmptyRow = args.checked;
        },
        changeSortOrder(args) {
        this.kanbanObj.swimlaneSettings.sortDirection = this.$refs.Dropdown.ej2Instances.text;
    },
    changeFrozen: function (args) {
        this.kanbanObj.swimlaneSettings.enableFrozenRows = args.checked;
    }
    }
});
</script>