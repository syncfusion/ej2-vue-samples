<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates the way of filtering Grid columns using menu, checkbox and excel filter UI. In this sample, click the filtering
            icon from column header to show filter UI for a particular column. You can change the filter type from the toolbar.
        </p>
    </div>
    <div>
        <div class="select-wrap">
            <ejs-dropdownlist id='ddlelement' :dataSource='ddldata' value='Menu' :fields='ddlfields' :change="onChange"></ejs-dropdownlist>
        </div>

        <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :allowFiltering='true' :pageSettings='pageSettings' :filterSettings='filterSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' :format='formatoptions' textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" type="date" textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The filtering feature enables the user to view the reduced amount of records based on filter criteria. It can be
            enabled by setting <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#allowfitering-boolean">allowFiltering
        </a></code> property as true. </p>
        <p>Grid supports the following filter types. They are </p>
        <ul>
            <li><code>FilterBar</code></li>
            <li><code>Menu</code></li>
            <li><code>CheckBox</code></li>
            <li><code>Excel</code></li>
        </ul>
        you can change the filter type by setting <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-filterSettings.html?lang=typescript#type-string">filterSettings->type</a></code>
        <p> In this demo, filter menu enabled by default , you can switch to other filter type by using dropdown.</p>
    </div>

</div>
</template>

<style>
@import "../../styles/Grid/filter-menu.css";
</style>

<script lang="ts">
import Vue from "vue";
import { GridPlugin, Filter, Page, FilterType, GridComponent } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-dropdowns";
import { orderDataSource  } from "./data-source";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDataSource,
      ddlfields: { text: 'type', value: 'Id' },
      pageSettings: { pageCount: 5 },
      filterSettings: { type: 'Menu' },
      formatoptions: { type: 'dateTime', format: 'M/d/y hh:mm a' },
      ddldata: [
        { Id: 'Menu', type: 'Menu' },
        { Id: 'CheckBox', type: 'Checkbox' },
        { Id: 'Excel', type: 'Excel' }]
    };
  },
  methods: {
      onChange: function(e: ChangeEventArgs): void {
        this.filterSettings = {type: <FilterType>e.value};
        (<GridComponent>this.$refs.grid).clearFiltering();
    }
  },
  provide: {
      grid: [Filter, Page]
  }
});
</script>