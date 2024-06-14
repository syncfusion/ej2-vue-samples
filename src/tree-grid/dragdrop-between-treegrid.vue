<template>

<div class="col-lg-12 control-section">
  <div id="action-description">
        <p>This sample demonstrates the TreeGrid component's row drag and drop feature, enabling users to transfer tasks between tree grids effortlessly via drag and drop actions.
        </p>
  </div>
    <div class="treegrids-container" >
      <div class="treegrid-wrapper">
        <ejs-treegrid id='TreeGrid' :dataSource='srcData' childMapping='subtasks' :treeColumnIndex='1' :height='380' :allowRowDragAndDrop="true" :allowPaging="true" :pageSettings="pageOptions" :allowSelection="true" 
            :selectionSettings="selectionOptions" :rowDropSettings="srcDropOptions" >
            <e-columns>
                 <e-column field='taskID' headerText='Task ID' :isPrimaryKey='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
            </e-columns>
        </ejs-treegrid>
        </div>

        <div class="treegrid-wrapper">
        <ejs-treegrid id='DestGrid' :dataSource='destData' :allowPaging="true" childMapping='subtasks' :treeColumnIndex='1' :pageSettings="pageOptions" :allowSelection="true"
            :allowRowDragAndDrop="true" :selectionSettings="selectionOptions" :rowDropSettings="destDropOptions">
            <e-columns>
               <e-column field='taskID' headerText='Task ID' :isPrimaryKey='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
            </e-columns>
        </ejs-treegrid>
        </div>
    </div>
     <div id="description">

 <p>Enabling the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowrowdraganddrop">
            allowRowDragAndDrop
        </a></code> property facilitates drag and drop functionality for Tree Grid rows. Additionally, when performing row drag and drop between tree grids,
             the <code><a target="_blank" class="code"
                href="https://helpej2.syncfusion.com/vue/documentation/api/treegrid/rowDropSettings/">
                TreeGridRowDropSettings
            </a></code> component's <code>
                <a target="_blank" class="code"
                href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/rowDropSettings/#targetid">
                targetID </a></code> property specifies the target onto which the Tree Grid rows should be dropped.</p>

          <p>For the row drag and drop feature to function correctly, it's essential to have a primary key column. To define this primary key, ensure that <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#isprimarykey">
            isPrimaryKey
        </a></code> is set to <code>true</code> for a unique data column.</p>
        <p>To select the rows, enable the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/treegrid/selection/selection">
            Selection </a></code>feature. Selecting multiple rows within the Tree Grid is as simple as clicking and dragging them.</p>

        <p>The Row drag and drop feature is enabled in both TreeGrids in this demo. Drag and drop rows between TreeGrids by selecting the rows and dragging them to the adjacent TreeGrid.</p>
        <p>
            More information on the row drag and drop can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/row/row-drag-and-drop#drag-and-drop-to-another-tree-grid">
            documentation </a>section.
        </p>   
    </div>
</div>
</template>

<style>
  .treegrids-container {
    display: flex;
    justify-content: space-between;
  }

  .treegrid-wrapper {
    width: 49%; 
  }
</style>

<script lang="ts">
import {
  TreeGridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Selection,
  RowDD,
} from "@syncfusion/ej2-vue-treegrid";
import { dragData } from "./data-source";

export default {
  components: {
    "ejs-treegrid": TreeGridComponent,
    "e-column": ColumnDirective,
    "e-columns": ColumnsDirective,
  },
  data: () => {
    return {
      srcData: dragData,
      destData: [],
      pageOptions: { pageCount: 2 },
      selectionOptions: { type: "Multiple" },
      srcDropOptions: { targetID: "DestGrid" },
      destDropOptions: { targetID: "TreeGrid" },
    };
  },
  provide: {
    treegrid: [RowDD, Page, Selection],
  },
};
</script>
