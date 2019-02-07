<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
    <p>This demo shows the way of binding an array of JavaScript objects (local JSON datasource) to TreeGrid.
    </p>
</div>
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings'>
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
    <p>TreeGrid can be bound either to local or remote data services. 
        The <code>dataSource
        </code> property can be assigned either with the array of JavaScript objects or instance of <code>DataManager</code>.</p>
    <p>In this demo, the array of JavaScript objects is assigned as the data source to the TreeGrid.</p>
    <p>
        More information on the data binding can be found in this documentation section.
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
      pageSettings: { pageCount: 4, pageSize: 10 }
    };
  },
  provide: {
      treegrid: [ Page ]
    },
   methods:{
     
  }

});
</script>