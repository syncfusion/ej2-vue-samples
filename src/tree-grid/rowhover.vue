<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid ref='treegrid' :treeColumnIndex='1' :enableHover="true" :dataSource="data" childMapping='subtasks' :height='380'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='90'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    <div id="action-description">
    <p>This sample demonstrates the TreeGrid component with the row hover feature. Move the mouse over the TreeGrid rows
        to see the hover effect.
    </p>
</div>
<div id="description">
    <p>Row Hover feature enables us to identify the current row by highlighting them with the mouse hovers. 
        This can be enabled by setting the <code>enableHover
        </code> property as true.
    </p>
    <p>In this demo, by enabling the <code>enableHover
    </code> property, you can move the mouse over TreeGrid rows to see the hover effect.</p>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
    };
  },
  methods:{
  },
  provide: {
  }
});
</script>