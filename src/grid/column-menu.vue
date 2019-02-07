<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the usage of column menu in Grid component. Click on multiple icon of each column to show the column
            menu.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" id="gridcomp" :allowPaging='true' :allowGrouping='true' :allowSorting='true' :showColumnMenu='true'
        :groupSettings='groupOptions' :allowFiltering='true' :filterSettings='filterSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' :showInColumnChooser='false' width='120'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width='120'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            Grid has option to show column menu when click on multiple icon of each column. The column menu has integrated options to
            interact the features like sorting, grouping, filtering, column chooser and autoFit. This features can be enabled
            by defining the
            <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#showcolumnmenu-boolean">showColumnMenu
                </a></code> as true. The default items are
            <br>
        </p>
        <ul>
            <li>
                <code>SortAscending</code> - Sort the current column in ascending order.</li>
            <li>
                <code>SortDescending</code> - Sort the current column in descending order.</li>
            <li>
                <code>Group</code> - Group the current column.</li>
            <li>
                <code>Ungroup</code> - Ungroup the current column.</li>
            <li>
                <code>AutoFit</code> - Auto fit current column.</li>
            <li>
                <code>AutoFitAll</code> - Auto fit all columns.</li>
            <li>
                <code>ColumnChooser</code> - Choose the column visibility.</li>
            <li>
                <code>Filter</code> - Show the filter option as given in
                <code>filterSetting-> type</code>.</li>
        </ul>

        <br/>

        <p>
            In this demo, Column Menu feature has enabled by defining
            <code> showColumnMenu </code> as true with sorting, grouping, filtering, column chooser and autoFit options.

        </p>

        <p style="font-weight: 500">Injecting Module</p>

        <p>
            Grid component features are segregated into individual feature-wise modules. To use Column Menu feature, we need to inject
            <code>ColumnMenu</code> into the <code>provide</code> section.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Group, Sort, Resize, ColumnMenu, Page, Filter } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails,
      groupOptions: { showGroupedColumn: true },
      filterSettings: { type: "CheckBox" }
    };
  },
  provide: {
      grid: [Group, Sort, Resize, ColumnMenu, Page, Filter]
  }
});
</script>