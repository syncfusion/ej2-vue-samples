<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
    <p>This sample demonstrates the Tree Grid component with the sticky header feature. In this sample, while scrolling the demo page, the Tree Grid header will be fixed at the top of its parent element.
    </p>
</div>
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' clipMode='EllipsisWithTooltip' :enableStickyHeader=true >
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' clipMode='EllipsisWithTooltip' width='200'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='90'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>


    <div id="description">
    <p>The headers can be fixed while scrolling a TreeGrid’s first scrollable parent element. This can be done by setting the<code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#enablestickyheader">enableStickyHeader</a></code> property. </p>
   
   
</div>

</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },  
  data: () => {
    return {
      data: sampleData
    };
  },
   methods:{
      
  }

}
</script>