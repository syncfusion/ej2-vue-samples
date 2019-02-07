<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :allowFiltering='true' :filterSettings='filterSettings' :treeColumnIndex='1' :height='380' :toolbar='toolbar' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

     <div id="action-description">
        <p>This sample explains the way of rendering custom template element <code>Quick Filter</code> in a toolbar and while click on the <code>Quick Filter</code> button the <code>Task Name</code> column is filtered with the value "Testing".
        </p>
    </div>

    <div id="description">
       <p>
           Custom toolbar items can be added by defining the toolbar as a collection of ItemModels. 
           Actions for this customized toolbar items are defined in the toolbarClick event.
       </p>  
       <p>
           In this sample, rendered the custom template element <code>Quick Filter</code> along with predefined toolbar items ExpandAll and CollapseAll. 
           While click on the <code>Quick Filter</code> button then the <code>Task Name</code> column is filtered with the value "Testing".
       </p>
       <p>
           More information about Toolbar template can be found in this documentation section.
       </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Toolbar, Filter, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
      toolbar: ['ExpandAll', 'CollapseAll', {text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'refresh'}],
      filterSettings: {hierarchyMode: 'Parent'},
    };
  },
  provide: {
      treegrid: [ Toolbar, Filter ]
    },
   methods:{
       toolbarClick: function(args: ClickEventArgs) {
           if (args.item.id === 'refresh') {
                (<TreeGridComponent>this.$refs.treegrid).filterByColumn("taskName","startswith","Testing");
            }
       }
      
  }

});
</script>