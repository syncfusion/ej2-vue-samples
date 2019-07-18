<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :height='400' :autoCheckHierarchy= 'true'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200' :showCheckbox='true'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='90'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    <div id="action-description">
    <p>
        This sample demonstrates the checkbox column selection functionality of TreeGrid. Click on any parent record checkbox then the child record checkboxes will get selected and parent record checkbox will get selected while checking all of its child items.
    </p>
</div>

<div id="description">
    <p>The TreeGrid component can be rendered with checkbox on existing column and also this can be enabled by <code>showCheckbox</code> property as true in columns API.
    </p>
    <p>
        For hierarchy selection between the records, we need to enable the <code>enableHierarchySelection</code> property.
    </p>
    <p>
       While using TreeGrid in a touch device, you have an option to select the checkboxes by tapping on the checkbox.
    </p>
    <p>
        More information on the paging configuration can be found in this documentation section.
    </p>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
    };
  },
  provide: {
      treegrid: [ Page ]
    },

});
</script>