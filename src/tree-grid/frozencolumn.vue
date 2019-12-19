<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height=410 :frozenColumns='2' :allowSelection='false' :allowResizing='true' :allowSorting='true'>
            <e-columns>
               <e-column field='taskID' headerText='Task ID' width='120' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='260'></e-column>
                <e-column field='startDate' headerText='Start Date' width='230' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='230' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='210' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='210' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='230'></e-column>
                <e-column field='approved' headerText='Approved' width='230' textAlign='Left'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the frozen columns feature of the TreeGrid. Scroll the movable content horizontally to view the frozen columns with the content.
        </p>
    </div>

<div id="description">
    <p>
        The freezing feature enables the user to freeze certain columns to scroll remaining movable content. This can be achieved by setting <b>frozenColumns</b> property.
    </p>
    <p>
        In this demo sample, the first two columns is set to frozen by using the 
        <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/#frozencolumns">frozenColumns
        </a></code>  properties.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
         TreeGrid component features are segregated into individual feature-wise modules. To use frozen columns feature, we need to inject
         <code>Freeze</code> into the <code>provide</code> section.
    </p>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Freeze, Resize, Sort, Selection } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData
    };
  },
  provide: {
      treegrid: [Freeze, Resize, Sort, Selection]
  }
});
</script>