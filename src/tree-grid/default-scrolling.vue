<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height=335>
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
        <p>This sample demonstrates the Tree Grid component with the horizontal and vertical scrollbars to view the exceeded Tree Grid content.
        </p>
    </div>

<div id="description">
    <p>The Tree Grid will show scrollbar when the content exceeds the element width or height. 
        The vertical and horizontal scrollbar will be displayed based on the following criteria.
    </p>
    <ul>
        <li>The vertical scrollbar appears 
            when the total height of rows present in Tree Grid exceeds its element height.</li>
        <li>The horizontal scrollbar appears 
            when the sum of column`s width exceeds Tree Grid element width.</li>
    </ul>
    <p>The <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#height">height
        </a></code> and <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#width">width
        </a></code> property is used to set the Tree Grid height and width respectively. 
    The value of these properties can be a numeric value, pixel(<code>px</code>) or percentage (<code>%</code>).</p>
    <p>
        In this demo, the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#height">height
        </a></code> and <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#width">width
        </a></code> property of the Tree Grid is set to <strong><em>400</em></strong> and <strong><em>auto</em></strong>
        respectively. Now, the Tree Grid will render with vertical scrollbar when the total height of rows 
        exceeds its element height and horizontal scrollbar will appear when the
        total column width exceeds the element width.
    </p>
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
  }
}
</script>