<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :selectionSettings='selectionSettings' :treeColumnIndex='1' :allowPaging= 'true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column type='checkbox' width='50'></e-column>
                <e-column field='taskID' headerText='Task ID' width='70' isPrimaryKey='true' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='90'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

<div id="action-description">
    <p>This sample demonstrates the selection functionality of the TreeGrid using checkbox selection, To select and unselect all rows use header checkbox.
       To select/unselect particular row, click the desired row.
   </p>
</div>

<div id="description">
    <p>
        TreeGrid mutliple selection can be achieved with help of checkbox in each row. To render checkbox in each treegrid row, you need
        to define column type as <code>checkbox</code> using
        <code>columns->type</code> property.</p>
    <p>Selection can be persisted on all the operations using
        <code>selectionSettings-> persistSelection</code> property. For persisting selection on the TreeGrid, any one of the column should be defined as a
        primary key using <code> columns->isPrimaryKey</code> property.
    </p>

    <p>In this demo, Tree Grid mutliple selection has been enabled with selection persistance.
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
      pageSettings: { pageSizes: true, pageCount: 4, pageSize: 10 },
      selectionSettings: { persistSelection: true },
    };
  },
  provide: {
      treegrid: [ Page ]
    },

});
</script>