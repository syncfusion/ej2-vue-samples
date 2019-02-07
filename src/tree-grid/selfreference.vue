<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' idMapping='TaskID' parentIdMapping='parentID' :treeColumnIndex='1' :height= '380'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' width='100' textAlign='Right'></e-column>
                <e-column field='TaskName' headerText='Task Name' width='150'></e-column>
                <e-column field='StartDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='EndDate' headerText='End Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='Duration' headerText='Duration' width='100' textAlign='Right'></e-column>
                <e-column field='Progress' headerText='Progress' width='100' textAlign='Right'></e-column>
                <e-column field='Priority' headerText='Priority' width='100'></e-column>
                </e-columns>
        </ejs-treegrid>
    </div>

     <div id="action-description">
    <p>This sample demonstrates the way of binding self-referential flat data to TreeGrid component.
    </p>
</div>
<div id="description">
    <p>TreeGrid can be bound either to local or remote data services. 
        The <code>dataSource
            </code> property can be assigned either with the array of JavaScript objects or instance of <code>DataManager</code>.</p>
            <p>In this demo, the array of self-referential flat data with parent ID is assigned as the data source to the TreeGrid.</p>
            <p>
                More information on the data binding can be found in this documentation section.
            </p>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page } from "@syncfusion/ej2-vue-treegrid";
import { projectData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: projectData,
    };
  },
  provide: {
      treegrid: [ Page ]
    },
   methods:{
     
  }

});
</script>