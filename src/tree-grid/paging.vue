<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :height='350' :allowPaging= 'true' :pageSettings='pageSettings'>
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
    <p>
            This sample demonstrates the Tree Grid paging feature.
            In this sample, click the numeric items to navigate to another page. You can also change the page size using the dropdown.
    </p>
</div>

<div id="description">
    <p>Paging allows you to display the contents of the Tree Grid in page segments. By default, paging is disabled. To enable paging,
        set <code>allowPaging
        </code> property to true. <code>
        pageSettings->pageSizes
        </code> property enables a dropdown in pager which allows you to change the number of records in the Tree Grid dynamically.
    </p>
    <p>
            In this demo, the Tree Grid is rendered with <code>pageSettings->pageSizes</code> set to true and 
            have an option to change the pagesize of Tree Grid dynamically.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        Tree Grid features are segregated into individual feature-wise modules. To use paging feature, we need to inject <code>
        Page
        </code> module into the <code>provide</code> section
    </p>
    <p>
        More information on the paging configuration can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/paging#pager-with-page-size-dropdown">documentation section</a>.
    </p>
</div>

</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective,ColumnsDirective, Page } from "@syncfusion/ej2-vue-treegrid";
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
      pageSettings: { pageSizes: true, pageCount: 4, pageSize: 10 }
    };
  },
  provide: {
      treegrid: [ Page ]
    },

}
</script>