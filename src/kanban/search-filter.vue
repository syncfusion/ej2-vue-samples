<template>
  <div>
    <div class="col-lg-9 control-section">
      <div class="content-wrapper">
        <ejs-kanban ref=KanbanObj id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" :swimlaneSettings="swimlaneSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
      </div>
      <div class="col-lg-3 property-section">
            <p class="property-panel-header">Filtering</p>
            <div class="property-panel-content">
                <table class="e-filter-table">
                    <tr>
                        <td class="e-filter-label">
                            <div>Priority</div>
                        </td>
                        <td>
                            <div>
                                <ejs-dropdownlist ref='PriorityDrop' id='priority_filter' :dataSource='priorityData' :select='prioritySelect' value='None' placeholder='Select a priority'>
                                </ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="e-filter-label">
                            <div>Status</div>
                        </td>
                        <td>
                            <div>
                                <ejs-dropdownlist ref='StatusDrop' id='status_filter' :dataSource='statusData' :select='statusSelect' value='None' :fields='statusFields' placeholder='Select a status'>
                                </ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <p class="property-panel-header">Searching</p>
            <div class="property-panel-content">
                <table class="e-filter-table">
                    <tr>
                        <td>
                            <div>
                                <ejs-textbox ref='SearchText' id="search_text" placeholder="Enter search text" showClearButton=true></ejs-textbox>
                            </div>
                        </td>
                    </tr>
                </table>
                <div class='e-reset-button'>
                    <ejs-button id='reset_filter' class="e-btn" v-on:click="resetClick">Reset</ejs-button>
                </div>
            </div>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the filtering and searching capabilities of the Kanban component, enabling users to quickly locate and organize cards based on specific criteria.
            </p>
        </div>
        <div id="description">
            <p>
                This sample demonstrates how to filter and search cards in the Kanban component using the
                <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#query" target="_blank">query</a>
                property. The query API can be used to display specific cards based on custom filtering and search criteria.
            </p>
            <ul>
                <li>
                    The <code>where</code> method is used to filter cards based on field values such as <strong>Priority</strong> and <strong>Status</strong>.
                </li>
                <li>
                    The <code>search</code> method is used to locate cards by matching text across the <code>Id</code> and <code>Summary</code> fields.
                </li>
            </ul>
            <p>
                The reset option clears the applied filters and search criteria by restoring the Kanban
                <code>query</code> to a new <code>Query</code> instance, displaying all cards on the board.
            </p>
            <p>
                More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
                <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#query" target="_blank">query </a> documentation section.
            </p>
            <p>
                Looking for the full Vue Kanban component overview, features, pricing and documentation?
                Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
            </p>
        </div>
      </div>
    </template>
<style>
    .property-panel-content .e-filter-table {
        width: 100%;
    }

    .property-panel-content .e-filter-label {
        width: 30%
    }

    .property-panel-content .e-reset-button {
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
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { Query } from '@syncfusion/ej2-data';
import { kanbanData } from "./datasource";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-textbox': TextBoxComponent
  },
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      swimlaneSettings: {
        keyField: "Assignee"
      },
      priorityData: ['None', 'High', 'Normal', 'Low'],
      statusData: [
            { id: 'None', value: 'None' },
            { id: 'To Do', value: 'Open' },
            { id: 'In Progress', value: 'InProgress' },
            { id: 'Testing', value: 'Testing' },
            { id: 'Done', value: 'Close' }
      ],
      statusFields: { text: 'id', value: 'value' }
    };
  },
  provide: {
    kanban: []
  },
  mounted: function(){
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
    this.priorityObj = this.$refs.PriorityDrop.ej2Instances;
    this.statusObj = this.$refs.StatusDrop.ej2Instances;
    document.getElementById('search_text').addEventListener('focus', (e) => {
      if (e.target.value === '') {
        this.reset();
      }
     });
    this.textObj = this.$refs.SearchText.ej2Instances;
    var emptyValue= true;
    document.getElementById('search_text').addEventListener('keyup', (e) => {
      if (e.code === 'Tab' || e.code === 'Escape' || e.code === 'ShiftLeft' || (e.code === 'Backspace' && emptyValue)) {
            return;
        }
        let searchValue = e.target.value;
        searchValue.length === 0 ? emptyValue = true : emptyValue = false;
        let searchQuery = new Query();
        if (searchValue !== '') {
            searchQuery = new Query().search(searchValue, ['Id', 'Summary'], 'contains', true);
        }
        this.kanbanObj.query = searchQuery;
    });
  },
  methods: {
    reset: function () {
      this.priorityObj.value = 'None';
      this.statusObj.value = 'None';
      this.kanbanObj.query = new Query();
    },
    prioritySelect: function (args) {
      let filterQuery = new Query();
      if (args.itemData.value !== 'None') {
          filterQuery = new Query().where('Priority', 'equal', args.itemData.value);
      }
      this.statusObj.value = 'None';
      this.kanbanObj.query = filterQuery;
    },
    statusSelect: function (args) {
      let filterQuery = new Query();
      if (args.itemData.value !== 'None') {
          filterQuery = new Query().where('Status', 'equal', args.itemData.value);
      }
      this.priorityObj.value = 'None';
      this.kanbanObj.query = filterQuery;
    },
    resetClick: function () {
      this.textObj.value = '';
      this.reset();
    }
  }
};
</script>