<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates the Grid multi sorting feature. To sort two or more columns, hold the CTRL key and click the column
            header.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" class="sortingenabled" :allowPaging='true' :allowSorting='true' :sortSettings='initialSort' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='170'></e-column>
                <e-column field='OrderDate' headerText='Order Date' format="yMd" width='150' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='180' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' format="yMd" width='140' textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='160'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            Sorting feature enables us to order the data in a particular direction. It can be enabled by setting the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowsorting-boolean">allowSorting
        </a></code>
         as true.
        </p>
        <p class="e-grid" style="border:none">To sort a Grid column simply click the column header. The icons <span class="e-icons e-icon-ascending"></span>(ascending)
            and <span class="e-icons e-icon-descending"></span>(descending) specifies the sort direction of a column.</p>
        <p>By default, multi-sorting is enabled in Grid, to sort multiple column hold <strong>CTRL</strong> key and click the
            column header. To clear sort for a column, hold <strong>SHIFT</strong> key and click the column header.</p>
        <p>
            While using Grid in a touch device, you have an option for multi sorting in single tap on the grid header. By tapping on
            the grid header, it will show the toggle button in small popup with sort icon. Now tap the button to enable the multi
            sorting in single tap.
        </p>
        <p>In this demo, simply click the column header to sort a column. Also multiple sorting is enabled.</p>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use sorting feature, we need to inject
            <code>Sort</code> into the <code>provide</code> section.
        </p>
        <p>
            More information on the sorting feature configuration can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#sortsettings-sortsettingsmodel">documentation section</a>.
        </p>
    </div>

</div>
</template>
<!-- custom code start -->
<style>
@media screen and (max-width: 590px) {
    .sortingenabled {
        margin-top: 30px;
    }
}

</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Sort, Page } from "@syncfusion/ej2-vue-grids";
import { data } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: data,
      initialSort: {
            columns: [{ field: 'Freight', direction: 'Ascending' },
            { field: 'CustomerName', direction: 'Descending' }]
        },
      pageSettings: { pageCount: 5 }
    };
  },
  provide: {
      grid: [Sort, Page]
  }
});
</script>