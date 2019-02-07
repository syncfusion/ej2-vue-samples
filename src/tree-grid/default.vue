<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the default rendering of the TreeGrid with minimum configuration.</p>
    </div>
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :height='380'>
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

     <div id="description">
        <p>
            The TreeGrid is used to represent the hierarchical data in a tabular format, combining the visual representation of Grid 
            and TreeView controls. It represents the data from <code><a target="_blank" class="code"
        href="#">
        datasource</a></code> such as an array of JSON objects, OData web services, or 
            <code>
        DataManager</code> binding data fields to columns or self-referential datasource.
        </p>
        <p>
            In this demo, the TreeGrid is populated with its minimum default settings.
        </p>
        <p>
            More information on the In this demo, the TreeGrid is populated with its minimum default settings. instantiation can be found in this
            documentation section.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData
    };
  },
   methods:{
      
  }

});
</script>