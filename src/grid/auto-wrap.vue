<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid component with the auto wrap column cell. In this sample, you can see that the <strong>Main Fields of Invention</strong>column cell content exceeded the available width hence it has been wrapped into multiple lines.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :allowTextWrap='true' height='400'>
            <e-columns>
                <e-column field='Inventor' headerText='Inventor Name' width='180' textAlign='Right'></e-column>
                <e-column field='NumberofPatentFamilies' headerText="Number of Patent Families" width='180' textAlign='Right'></e-column>
                <e-column field='Country' headerText='Country' width='140'></e-column>
                <e-column field='Active' width='120'></e-column>
                <e-column field='Mainfieldsofinvention' headerText='Main Fields of Invention' width='200'></e-column>
            </e-columns>
        </ejs-grid>
    <div style="margin-top: 10px; text-align: right">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_prolific_inventors" target='_blank'>Wikipedia: List of Prolific inventors</a>
    </div>

    </div>

     <div id="description">
        <p>Auto wrap cell content can be enabled using <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowtextwrap-boolean">
        allowTextWrap
        </a></code> property of the Grid. 
            Setting this property will wrap cell text on multiple lines. 
            This feature is useful to view the cell content when it exceeds the cell width.</p>
        <p>Setting this property will wrap the text in both content cell and header cell.</p>
         <p>In this demo, the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowtextwrap-boolean">
        allowTextWrap
        </a></code> property is enabled and you can also see that the <strong>main fields of invention</strong> column 
        whose content exceeded the cell width is wrapped into multiple lines.
    </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { inventoryData } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: inventoryData,
      pageSettings: { pageCount: 5}
    };
  },
  provide: {
      grid: [Page]
  }
});
</script>