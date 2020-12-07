<template>
  <div class="kanban-vue-sample">
    <div class="col-lg-9 control-section">
      <div class="content-wrapper">
        <ejs-kanban ref="KanbanObj" id="kanban" keyField="Status" :dataSource="kanbanData" 
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
                <ejs-dropdownlist ref="PriorityDrop" id="priority_filter" :dataSource="priorityData" :change="change"
                 value="None" placeholder="Select a priority"></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr>
            <td class="e-filter-label">
              <div>Status</div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist ref="StatusDrop" id="status_filter" :dataSource="statusData" :change="change"
                  value="None" :fields="statusFields" placeholder="Select a status"></ejs-dropdownlist>
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
                <ejs-textbox ref="SearchText" id="search_text" placeholder="Enter search text" showClearButton="true"></ejs-textbox>
              </div>
            </td>
          </tr>
        </table>
        <div class="e-reset">
          <ejs-button id="reset_filter" class="e-btn" v-on:click.native="resetClick">Reset</ejs-button>
        </div>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates the filtering and searching actions of Kanban.
        In this sample, select the key value from drop down list to display the
        filtered data in Kanban board. Type in search box to be searched in
        header/content and display the search result in a board.
      </p>
    </div>
    <div id="description">
      <p>
        The Kanban provides an option to filter or search the cards and
        displayed on Kanban board using <code>query</code> property.
      </p>
      <ul>
        <li>
          In query, <code>where</code> used for filtering the Kanban cards.
        </li>
        <li>In query, <code>search</code> is used for searching the cards.</li>
      </ul>
    </div>
  </div>
</template>
<style>
.kanban-vue-sample .property-panel-content .e-filter-table {
  width: 100%;
}

.kanban-vue-sample .property-panel-content .e-filter-label {
  width: 30%;
}

.kanban-vue-sample .property-panel-content .e-reset {
  padding-top: 13px;
  text-align: center;
}

.kanban-vue-sample .property-panel-content td {
  padding-top: 10px;
}

.kanban-vue-sample .property-panel-header {
  padding-bottom: 0px;
}
</style>

<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { Query } from "@syncfusion/ej2-data";
import { kanbanData } from "./datasource";

Vue.use(KanbanPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);
Vue.use(TextBoxPlugin);

export default Vue.extend({
  data: function () {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      swimlaneSettings: {
        keyField: "Assignee",
      },
      priorityData: ["None", "High", "Normal", "Low"],
      statusData: [
        { id: "None", status: "None" },
        { id: "To Do", status: "Open" },
        { id: "In Progress", status: "InProgress" },
        { id: "Testing", status: "Testing" },
        { id: "Done", status: "Close" },
      ],
      statusFields: { text: "id", value: "status" },
    };
  },
  provide: {
    kanban: [],
  },
  mounted: function () {
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
    this.priorityObj = this.$refs.PriorityDrop.ej2Instances;
    this.statusObj = this.$refs.StatusDrop.ej2Instances;
    document.getElementById("search_text").addEventListener("focus", (e) => {
      if (e.target.value === "") {
        this.reset();
      }
      this.kanbanObj.query = searchQuery;
    });
    this.textObj = this.$refs.SearchText.ej2Instances;
    var emptyValue = true;
    document.getElementById("search_text").addEventListener("keyup", (e) => {
      if (e.code === "Tab" || e.code === "Escape" || e.code === "ShiftLeft" || (e.code === "Backspace" && emptyValue)) {
        return;
      }
      let searchValue = e.target.value;
      searchValue.length === 0 ? (emptyValue = true) : (emptyValue = false);
      let searchQuery = new Query();
      if (searchValue !== "") {
        searchQuery = new Query().search(searchValue, ["Id", "Summary"], "contains", true);
      }
      this.kanbanObj.query = searchQuery;
    });
  },
  methods: {
    reset: function () {
      this.priorityObj.setProperties({ value: "None" }, false);
      this.statusObj.setProperties({ value: "None" }, false);
      this.kanbanObj.query = new Query();
    },
    change: function (args) {
      let filterQuery = new Query();
      if (args.value !== "None") {
        if (args.element.id === "priority_filter") {
          filterQuery = new Query().where("Priority", "equal", args.value);
        } else {
          filterQuery = new Query().where("Status", "equal", args.value);
        }
      }
      if (args.element.id === "priority_filter") {
        this.statusObj.setProperties({ value: "None" }, false);
      } else {
        this.priorityObj.setProperties({ value: "None" }, false);
      }
      this.kanbanObj.query = filterQuery;
    },
    resetClick: function () {
      this.textObj.value = "";
      this.reset();
    },
  },
});
</script>