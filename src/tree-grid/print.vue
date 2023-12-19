<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid ref='treegrid' :treeColumnIndex='1' :dataSource="data" childMapping='subtasks' :height='350' :allowPaging='true' :pageSettings='pageSettings' :toolbar='toolbar'>
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
    <p>This sample demonstrates the option to print the Tree Grid. Click the print button from the toolbar item to print TreeGrid.</p>
</div>
<div id="description">
    <p>The Tree Grid can be printed using the <code>print</code> method. While printing the pager and 
    scrollbar will be removed if they are enabled in Tree Grid.</p>
    <p>By default, all pages will be printed. 
        We can print current page alone by setting the <code>printMode</code>property
        value as <code>currentpage</code>.</p>
    <p>In this demo, click the print icon to print Tree Grid.</p>
    <p>More information on the print feature can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/print">documentation section</a>.
    </p>
</div>
</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { sampleData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },  
  data: () => {
    return {
      data: sampleData,
      toolbar: ['Print'],
      pageSettings: { pageCount: 5, pageSize: 10 }
    };
  },
  methods:{
  },
  provide: {
      treegrid: [Page, Toolbar]
  }
}
</script>