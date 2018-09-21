<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Grid column chooser feature. Click the column chooser
        icon in the toolbar to open column chooser and you can select columns to hide/show from the checkbox list. 
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true' :showColumnChooser='true' :toolbar="toolbar" :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150' :showInColumnChooser='false'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' :visible='false' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid columns can be shown/hidden dynamically by using column chooser. To enable column chooser behavior, set
            <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#showColumnChooser-boolean">showColumnChooser
        </a></code> property as true. You can also prevent the display of a column in column chooser
            by setting
            <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-column.html#showInColumnChooser-boolean">columns->showInColumnChooser
        </a></code> as false in columns definition.

        </p>
        <br/>

        <p>
            In this demo, when the user clicks column chooser icon from the toolbar then the column chooser menu will open. User can
            show or hide the columns by changing the state of the checkbox.
        </p>
        
        <p style="font-weight: 500">Injecting Module</p>
        
        <p>
            Grid component features are segregated into individual feature-wise modules. To use column chooser feature, we need to inject
            <code>ColumnChooser</code> into the <code>provide</code> section.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, ColumnChooser, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails,
      toolbar: ['ColumnChooser'],
      pageSettings: {pageCount: 5}
    };
  },
  provide: {
      grid: [ColumnChooser, Page, Toolbar]
  }
});
</script>