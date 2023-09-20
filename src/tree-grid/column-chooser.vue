<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
  <p>This sample demonstrates the column chooser feature in Tree Grid. Click the column chooser
     icon in the toolbar to open column chooser and you can select columns to hide/show from the checkbox list. 
   </p>
</div>

<div id="description">
    <p>The Tree Grid columns can be shown/hidden dynamically by using column chooser. To enable
             column chooser behavior, set <code>showColumnChooser</code> property as true. You can also prevent
             the display of a column by setting <code>columns->showInColumnChooser</code> as false in columns definition.
    <br>   
    </p>
    
    <p>In this demo, when the user clicks column chooser icon from the toolbar then the column 
        chooser menu will open. User can show or hide the columns by changing the state of the checkbox. 
        <br>
    </p>

    <p>Injecting Module:</p>
    
    <p>Tree Grid features are segregated into individual feature-wise modules. To use column chooser 
       feature, we need to inject <code>ColumnChooser</code> module into the <code>services</code>.
    <br>
    </p>

    <p>More information about Column Chooser can be found in this
     <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/column-chooser.html">
           documentation section.</a></p>
</div>
    <div>
        <ejs-treegrid :dataSource="data" :treeColumnIndex='1' :height='350' :allowPaging='true' :showColumnChooser='true' :toolbar="toolbar" childMapping='subtasks'
         :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width='120'></e-column>
                <e-column field='taskName' headerText='Task Name' width='190' :showInColumnChooser='false'></e-column>
                <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' width='130'></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right'  width='100'></e-column>
                <e-column field='progress' headerText='Progress' textAlign='Right' width='100'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    
</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, ColumnChooser, Page, Toolbar } from "@syncfusion/ej2-vue-treegrid";
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
      toolbar: ['ColumnChooser'],
      pageSettings: {  pageSize: 10 }
    };
  },
  provide: {
      treegrid: [ ColumnChooser, Page, Toolbar]
  }
}
</script>
