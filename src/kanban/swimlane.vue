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
        This sample showcases the swimlane capabilities of the Kanban component, providing a structured way to organize and manage workflow items across different categories and resources.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates the swimlane functionality of the Kanban component using the
        <code>swimlaneSettings</code> property. Swimlanes organize cards into horizontal rows based on a specific field, making it easier to track task ownership, workload distribution, and workflow progress.
    </p>
    <p>
        The <code>swimlaneSettings</code> property provides the following customization options:
    </p>
    <ul>
        <li>
            Sort cards within swimlanes using the
            <a href="https://ej2.syncfusion.com/vue/documentation/kanban/swimlane#sort-direction" target="_blank">swimlaneSettings.sortDirection</a>
            property
        </li>
        <li>
            Enable or disable card drag-and-drop across swimlanes using the
            <a href="https://ej2.syncfusion.com/vue/documentation/kanban/swimlane#drag-and-drop" target="_blank">swimlaneSettings.allowDragAndDrop</a>
            property.
        </li>
        <li>
            Show or hide empty swimlane rows using the
            <a href="https://ej2.syncfusion.com/vue/documentation/kanban/swimlane#show-empty-row" target="_blank">swimlaneSettings.showEmptyRow</a>
            property.
        </li>
        <li>
            Display or hide item counts in swimlane headers using the
            <a href="https://ej2.syncfusion.com/vue/documentation/kanban/swimlane#show-item-count" target="_blank">swimlaneSettings.showItemCount</a>
            property.
        </li>
        <li>
            Display or hide item counts in swimlane headers using the
            <a href="https://ej2.syncfusion.com/vue/documentation/kanban/swimlane#show-item-count" target="_blank">swimlaneSettings.showItemCount</a>
            property.
        </li>
    </ul>
        <p>
            More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
            <a href="https://ej2.syncfusion.com/vue/documentation/kanban/swimlane" target="_blank">swimlane</a> documentation section.
        </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
    </p>
</div>

</div>
</template>
<style>
    .kanban-overflow{
        overflow: hidden;
    }
</style>
<script>
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-kanban";
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { kanbanData } from "./datasource";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-checkbox': CheckBoxComponent,
    'ejs-dropdownlist': DropDownListComponent
  },  
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
}
</script>