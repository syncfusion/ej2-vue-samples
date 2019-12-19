<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the TreeGrid component with the row drag and drop feature within same tree grid. It provides the way to drop the row, above, below or child
            to the target row with the respective to the target row position.
        </p>
    </div>
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :height='380' :allowRowDragAndDrop="true"
           :selectionSettings="selection">
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='70' isPrimaryKey='true' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='90'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

     <div id="description">
        <p>
            Row drag and drop enabled by setting <code>allowRowDragAndDrop</code> property as true.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Selection, RowDD } from "@syncfusion/ej2-vue-treegrid";
import { dragData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: dragData,
      selection: { type: 'Multiple' }
    };
  },
  provide: {
    treegrid: [Selection, RowDD]
  },
   methods:{
      
  }

});
</script>