<template>
<div>
    <div class="col-md-9 control-section">
      <div class="content-wrapper">
        <ejs-kanban ref=KanbanObj id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
      </div>
      <div class="col-lg-3 property-section">
    <table id="property" title="Properties">
        <tr>
            <td>
                <div>Sort By</div>
            </td>
            <td>
                <ejs-dropdownlist ref='sortBy' id='sortBy' :dataSource='sortByData' :fields='field' :change='changeSortBy' index=1></ejs-dropdownlist>
            </td>
        </tr>
        <tr>
            <td>
                <div>Field</div>
            </td>
            <td>
                <ejs-dropdownlist ref='field' id='field' :dataSource='fieldData' index=0 :enabled="false"></ejs-dropdownlist>
            </td>
        </tr>
        <tr>
            <td>
                <div>Direction</div>
            </td>
            <td>
                <ejs-dropdownlist ref='direction' id='direction' :dataSource='directionData' :change='changeSortBy' index=0></ejs-dropdownlist>
            </td>
        </tr>
        <tr>
            <td class="e-constraint-label" style="padding: 10px">
                <ejs-button id='sort' class="e-btn" v-on:click="sortClick">Sort</ejs-button>
            </td>
            <td style="padding: 10px">
                <ejs-button id='clear' class="e-btn" v-on:click="clearClick">Clear</ejs-button>
            </td>
          </tr>
    </table>
</div>
<div id="action-description">
    <p>
        This sample demonstrates the card sorting capabilities of the Kanban component, enabling workflow items to be organized and displayed based on different sorting criteria and orders.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates the card sorting capabilities of the Kanban component using the
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/sort" target="_blank">sortSettings</a>
        configuration. Cards can be organized based on data source order, index values, or custom fields, and displayed in ascending or descending order.
    </p>
    <p>
        The <code>sortBy</code> property provides the following options:
    </p>
    <ul>
        <li>
            <code>DataSourceOrder</code>: Cards are arranged according to their order in the data source. Since the original data order is used, no additional <code>field</code> mapping is required.
        </li>
        <li>
            <code>Index</code>: Cards are sorted based on an integer field value, such as <code>RankId</code>. When cards are reordered through drag-and-drop, the mapped field value is automatically updated to reflect the new position.
        </li>
        <li>
            <code>Custom</code>: Cards are sorted using a user-defined field. Both string and numeric fields can be used, such as <code>Priority</code>, <code>RankId</code>, or <code>Summary</code>. The original field values are preserved when cards are moved.
        </li>
    </ul> 
    <p>
        The <code>direction</code> property determines whether cards are displayed in ascending or descending order within each column.
    </p>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/kanban/sort" target="_blank">sorting</a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
    </p>
</div>

</div>
</template>
<style>
  .e-kanban .e-card-footer-css {
	      align-self: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 16px;
        width: 16px;
        margin-right: 8px;
    }

    .e-kanban .e-rank {
        font-size: 12px;
    }

    .e-kanban .e-Low {
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/trivial.svg);
    }
    .e-kanban .e-High {
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/major.svg);
    }
    .e-kanban .e-Critical {
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/critical.svg);
    }
    .e-kanban .e-Normal {
        background-image: url(https://syncfusion.atlassian.net/images/icons/priorities/minor.svg);
    }
</style>
<script>
import { createApp } from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-kanban";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { kanbanData } from "./datasource";
import sortingCardTemplate from "./sorting-card-template.vue";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        headerField: "Id",
        contentField: "Summary",
        template: function() {
          return { template: createApp({}).component('sortCardTemplate', sortingCardTemplate) };
        }
      },
      sortByData: [
        { id: 'DataSourceOrder', sort: 'Data Source Order' },
        { id: 'Index', sort: 'Index' },
        { id: 'Custom', sort: 'Custom' }
      ],
      field: { text: 'sort', value: 'id' },
      fieldData: ['None'],
      directionData: ['Ascending', 'Descending']
    };
  },
  provide: {
    kanban: []
  },
  mounted: function(){
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
    this.sortObj = this.$refs.sortBy.ej2Instances;
    this.fieldObj = this.$refs.field.ej2Instances;
    this.directionObj = this.$refs.direction.ej2Instances;
  },
  methods: {
    changeSortBy: function (args) {
      if (args.value === 'DataSourceOrder' || args.value === 'Index') {
        var data = args.value === 'Index' ? 'RankId' : 'None';
        this.setFieldValue(data);
      }
      if (args.value === 'Custom') {
        this.fieldObj.dataSource = ['Priority', 'RankId', 'Summary'];
        this.fieldObj.value = 'Priority';
        this.fieldObj.enabled = true;
      }
	if (args.value === 'Ascending') {
		var data = this.$refs.sortBy.ej2Instances.value === 'Index' ? 'RankId' : 'None';
		this.setFieldValue(data);
		this.directionObj.value = 'Ascending';
	}
	if (args.value === 'Descending') {
		var data = this.$refs.sortBy.ej2Instances.value === 'Index' ? 'RankId' : 'None';
		this.setFieldValue(data);
		this.directionObj.value = 'Descending';
	}
    },
    setFieldValue: function (data) {
        this.fieldObj.dataSource = [data];
        this.fieldObj.value = data;
        this.fieldObj.enabled = false;
    },
    sortClick: function () {
        this.setKanbanProperties();
    },
    clearClick: function () {
        this.sortObj.value = 'Index';
        this.directionObj.value = 'Ascending';
        this.setFieldValue('None');
        this.setKanbanProperties();
    },
    setKanbanProperties: function () {
        this.kanbanObj.sortSettings.sortBy = this.sortObj.value;
        this.kanbanObj.sortSettings.field = this.fieldObj.value;
        this.kanbanObj.sortSettings.direction = this.directionObj.value;
    }
  }
};
</script>
