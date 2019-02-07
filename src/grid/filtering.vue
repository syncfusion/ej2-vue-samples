<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates the Grid Default Filtering feature. In this sample, type the value in the filterbar and press enter
            to filter particular column.
        </p>
    </div>
    <div>
        <div class="select-wrap">
            <ejs-dropdownlist id='ddlelement' :dataSource='ddldata' placeholder='Select category to filter' :change="onChange"></ejs-dropdownlist>
        </div>

        <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :allowFiltering='true' :pageSettings="pageOptions">
            <e-columns>
                <e-column field='CategoryName' headerText='Category Name' width='170'></e-column>
                <e-column field='ProductName' headerText='Product Name' width='150'></e-column>
                <e-column field='QuantityPerUnit' headerText='Quantity per unit' width='180' textAlign='Right'></e-column>
                <e-column field='UnitsInStock' headerText='Units In Stock' width='150' textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The filtering feature enables the user to view the reduced amount of records based on filter criteria.
            It can be enabled by setting <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowfiltering-boolean">allowFiltering
        </a></code> property as true. 
            A filter bar row will be rendered next to header which allows the end-users to filter data by entering text within its cells.</p>
         <p>Filterbar uses two modes which specifies how to start filtering. They are,</p>    
         <ul>
             <li><code>onenter</code> - Enabled by default, filter will be initiated after pressing <code>Enter</code> key.</li>
             <li><code>immediate</code> - Filter will start after user ends typing. This uses a time delay of <i>1500ms</i>
             to initiate filter after use stops typing. 
             It can be overridden using the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#filtersettings-filtersettingsmodel">
        filterSettings->immediateModeDelay
        </a></code> property.</li>
         </ul>
         <p>In this demo, you can either select the <strong>Category Name</strong> from the SELECT element or type the text in the 
          filter bar cells to filter the Grid. </p>
         <br>
         <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use filtering feature, we need to inject
            <code>Filter</code> into the <code>provide</code> section.
        </p>
          <p>
            More information on the filter configuration can be found in this 
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#filtersettings-filtersettingsmodel">documentation section</a>.
        </p>
    </div>

</div>
</template>
<style>
@import "../../styles/Grid/filtering.css";
</style>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Filter, Page, GridComponent } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-dropdowns";
import { categoryData } from "./data-source";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: categoryData,
      pageOptions: { pageSize: 10, pageCount: 5 },
      ddldata: ['All', 'Beverages', 'Condiments', 'Confections', 'Dairy Products', 'Grains/Cereals',
            'Meat/Poultry', 'Produce', 'Seafood']
    };
  },
  methods: {
      onChange: function(e: ChangeEventArgs): void {
        if (e.value === 'All') {
            (<GridComponent>this.$refs.grid).clearFiltering();
        } else {
            (<any>this.$refs.grid).filterByColumn('CategoryName', 'equal', e.value);
        }
    }
  },
  provide: {
      grid: [Filter, Page]
  }
});
</script>