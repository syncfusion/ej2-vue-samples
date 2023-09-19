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
        This sample demonstrates how to control the visibility of Kanban columns dynamically. Check or uncheck the
        checkboxes
        from the property panel to show or hide the corresponding column.
    </p>
</div>
<div id="description">
    <p>
        The Kanban provides an option to show or hide its columns dynamically using the following public methods.
    </p>
    <ul>
        <li><code>showColumn:</code> Makes the corresponding column visible based on the specified ID.</li>
        <li><code>hideColumn:</code> Hides the corresponding column based on the specified column ID.</li>
    </ul>
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