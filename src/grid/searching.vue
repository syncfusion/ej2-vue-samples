<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates the Grid searching feature. In this sample, use the search box from toolbar to search Grid records.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings='pageSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field='CategoryName' headerText='Category Name' width='150'></e-column>
                <e-column field='ProductName' headerText='Product Name' width='150'></e-column>
                <e-column field='QuantityPerUnit' headerText='Quantity per unit' width='180' textAlign='Right'></e-column>
                <e-column field='UnitsInStock' headerText='Units In Stock' width='150' textAlign='Right'></e-column>
            </e-columns>    
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid has an option to search its content using the  <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#search">search
        </a></code> method with search key as the parameter.</p>
        <br>
        <p>In this demo, type in the search box to perform search operation.</p>
        <p>
            More information on the searching configuration can be found in this 
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#searchsettings-searchsettingsmodel">documentation section</a>.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { categoryData } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: categoryData,
      pageSettings: { pageCount: 5 },
      toolbar: ["Search"]
    };
  },
  provide: {
      grid: [Page, Toolbar]
  }
});
</script>