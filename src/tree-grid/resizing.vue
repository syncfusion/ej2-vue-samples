<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :height='350' :allowPaging= 'true' :pageSettings='pageSettings' :allowResizing= 'true'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='220' maxWidth='300' minWidth='120'></e-column>
                <e-column field='startDate' headerText='Start Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='90' textAlign='Right' :allowResizing='false'></e-column>
                <e-column field='progress' headerText='Progress' width='90' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='100'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

   <div id="action-description">
    <p>This sample demonstrates the Tree Grid column resizing feature. Click and drag at the right corner of each column header to resize the column.
    </p>
</div>
<div id="description">
    <p>The Tree Grid columns can be resized by clicking and dragging at the right edge of columns header. Set <code>allowResizing
        </code> property as true, to enable column resizing behavior in Tree Grid. You can also prevent the resize of the particular column by setting
        <code>columns->allowResizing
        </code> as false in columns definition.
    </p>
    <br/>
    <p>
        In this demo, allowResizing feature have enabled through by setting the <code> allowResizing property </code> as true and <b>Task Name</b> column can be resized
         between the range of  <code>minWidth (120px)
            </code> and <code>maxWidth (300px).
            </code> Also, column resizing has been disabled in the <b>Duration</b> column. 
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
            Tree Grid features are segregated into individual feature-wise modules. 
            To use resize feature, we need to inject
            <code>Resize</code> module into the <code>provide</code> section. 
    </p>
    <p>
        More information about Column Resizing can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/column-resizing">documentation section</a>.
    </p>
</div>

</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Resize, Page } from "@syncfusion/ej2-vue-treegrid";
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
      pageSettings: { pageSize: 10}
    };
  },
  provide: {
      treegrid: [ Page, Resize ]
    }

}
</script>