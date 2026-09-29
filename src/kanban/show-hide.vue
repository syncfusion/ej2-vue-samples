<template>
  <div>
    <div class="col-md-9 control-section">
      <div class="content-wrapper">
        <ejs-kanban ref="KanbanObj"  id="kanban" keyField="Status" :dataSource="kanbanData"
           :cardSettings="cardSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="In Review" keyField="Review"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
    </div>
    <div class="col-lg-3 property-section">
    <table id="property" title="Show/Hide Columns">
        <tbody>
            <tr>
                <td>
                     <ejs-checkbox ref='Checkbox' data-id="Open" label='To Do' :checked="true" :change="onChange"></ejs-checkbox>
                </td>
            </tr>
            <tr>
                <td>
                    <ejs-checkbox ref='CheckProgress' data-id="InProgress" label='In Progress' :checked="true"
                    :change="onChangeProgress"></ejs-checkbox>
                </td>
            </tr>
            <tr>
                <td>
                    <ejs-checkbox ref='CheckReview' data-id="Review" label='In Review' :checked="true" :change="onChangeReview">
                    </ejs-checkbox>
                </td>
            </tr>
            <tr>
                <td>
                    <ejs-checkbox ref='CheckClose' data-id="Close" label='Done' :checked="true"  :change="onChangeClose">
                    </ejs-checkbox>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    
   <div id="action-description">
    <p>
        This sample demonstrates dynamic column visibility management in the Kanban component, allowing users to customize the board layout by showing or hiding columns as needed.
    </p>
</div>
<div id="description">
    <p>
        This sample demonstrates how to dynamically manage column visibility in the Kanban component using the available public methods.
    </p>
    <ul>
        <li>
            <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#showcolumn" target="_blank">showColumn</a>:
            Displays a hidden column based on the specified <code>keyField</code> value.
        </li>
        <li>
            <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#hidecolumn" target="_blank">hideColumn</a>:
            Hides a visible column based on the specified <code>keyField</code> value.
        </li>
    </ul>
    <p>
        These methods enable users to customize the board layout by controlling the visibility of workflow stages at runtime.
    </p>
    <p>
        More information on the Essential<sup>®</sup> JS2 Kanban board can be found in this
        <a href="https://ej2.syncfusion.com/vue/documentation/api/kanban/index-default#showcolumn" target="_blank">show column</a> documentation section.
    </p>
    <p>
        Looking for the full Vue Kanban component overview, features, pricing and documentation?
        Visit the <a href="https://www.syncfusion.com/gantt-sdk/vue-kanban-board" target="_blank">Vue Kanban</a> page.
    </p>
</div>

</div>
</template>
<script>
import { extend } from "@syncfusion/ej2-base";
import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-kanban";
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
import { kanbanData } from "./datasource";

export default {
  components: {
    'ejs-kanban': KanbanComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-checkbox': CheckBoxComponent
  },  
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      }
    };
  },
  provide: {
    kanban: []
  },
  mounted: function(){
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
    this.checkObj = this.$refs.Checkbox.ej2Instances;
    this.progressObj = this.$refs.CheckProgress.ej2Instances;
    this.reviewObj = this.$refs.CheckReview.ej2Instances;
    this.closeObj = this.$refs.CheckClose.ej2Instances;
  },
  methods: {
    onChange: function (args) {
        if (args.checked) {
            this.kanbanObj.showColumn(this.checkObj.element.getAttribute('data-id'));
        } else {
            this.kanbanObj.hideColumn(this.checkObj.element.getAttribute('data-id'));
        }
    },
    onChangeProgress: function (args) {
        if (args.checked) {
            this.kanbanObj.showColumn(this.progressObj.element.getAttribute('data-id'));
        } else {
            this.kanbanObj.hideColumn(this.progressObj.element.getAttribute('data-id'));
        }
    },
    onChangeReview: function (args) {
        if (args.checked) {
            this.kanbanObj.showColumn(this.reviewObj.element.getAttribute('data-id'));
        } else {
            this.kanbanObj.hideColumn(this.reviewObj.element.getAttribute('data-id'));
        }
    },
    onChangeClose(args) {
        if (args.checked) {
            this.kanbanObj.showColumn(this.closeObj.element.getAttribute('data-id'));
        } else {
            this.kanbanObj.hideColumn(this.closeObj.element.getAttribute('data-id'));
        }
    }    
  }
}
</script>