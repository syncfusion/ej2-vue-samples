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
                <ejs-button id='sort' class="e-btn" v-on:click.native="sortClick">Sort</ejs-button>
            </td>
            <td style="padding: 10px">
                <ejs-button id='clear' class="e-btn" v-on:click.native="clearClick">Clear</ejs-button>
            </td>
          </tr>
    </table>
</div>
<div id="action-description">
    <p>
        This sample demonstrates the usage of sorting cards in the Kanban board. You can change the sort options in the dropdown list to reflect the card ordering on the board.
    </p>
</div>
<div id="description">
    <p>
      The sample is designed to showcase the sorting behavior of the Kanban board. It contains the <code>sortBy</code>, <code>field</code> and <code>direction</code> properties. The <code>sortBy</code> property provides the following options:
    </p>
    <ul>
        <li><code>DataSourceOrder</code>: Cards are aligned in the ascending or descending order based on the data source order and act accordingly when the user drag-and-drop the cards. Since the feature considers the default data source order, <code>field</code> mapping is not required to sort the cards.</li>
        <li><code>Index</code>: The cards are aligned based on the index value. The index binds to the card based on the mapping field that must be an integer value. Cards will be dropped at the particular position where the user drag-and-drop the cards. The index of the cards will dynamically update its <code>field</code> value based on the dropped position.</li>
        <li><code>Custom</code>: Users can map any field to sort the cards using this option, which accepts both string and integer <code>field</code> value.  It maintains the initial mapping key-value to drag and drop the cards and does not change their mapping value after dropping the cards.</li>
    </ul>
    <p>The <code>direction</code> property is used to align the cards either in the ascending or descending order on the Kanban board.</p>
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
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { kanbanData } from "./datasource";
import sortingCardTemplate from "./sorting-card-template.vue";

Vue.use(KanbanPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);

export default Vue.extend({
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        headerField: "Id",
        contentField: "Summary",
        template: function() {
          return { template: sortingCardTemplate };
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
		var data = this.sortByObj.value === 'Index' ? 'RankId' : 'None';
		this.setFieldValue(data);
		this.directionObj.value = 'Ascending';
	}
	if (args.value === 'Descending') {
		var data = this.sortByObj.value === 'Index' ? 'RankId' : 'None';
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
});
</script>
