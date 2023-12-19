<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates the grid's multiple-type filter functionality and user interface.
        </p>
    </div>
    <div>
        <div class="select-wrap">
            <ejs-dropdownlist id='ddlelement' :dataSource='ddldata' value='Menu' :fields='ddlfields' :change="onChange"></ejs-dropdownlist>
        </div>
        <ejs-checkbox ref="checkbox" label='Enable OnDemand: ' labelPosition='Before' :disabled='true' :checked="false" :change="checkboxOnChange"></ejs-checkbox>

        <ejs-grid ref='grid' :dataSource="getTradeData" :query="query" :allowPaging='true' :allowFiltering='true' :allowSorting='true' :pageSettings='pageSettings' :filterSettings='filterSettings'>
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
                <e-column field='Employees' headerText='Employee Name' width='150'></e-column>
                <e-column field='Designation' headerText='Designation' width='130' textAlign='Right'></e-column>
                <e-column field='CurrentSalary' headerText='CurrentSalary' width='120' format='C2' textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The filtering feature enables the user to view a reduced number of records based on the filter criteria. It can be enabled by setting the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#allowfiltering">allowFiltering
        </a></code> property to true. </p>
        <p>The grid supports the following filter types:</p>
        <ul>
            <li><code>FilterBar</code></li>
            <li><code>Menu</code></li>
            <li><code>CheckBox</code></li>
            <li><code>Excel</code></li>
        </ul>
        You can change the filter type by setting <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#type">filterSettings->type</a></code>.
        <p>In this demo, the filter menu is enabled by default. You can switch to other filter types using the dropdown.</p>
        <p>Additionally, we have an on-demand data fetch functionality and UI for the checkbox/Excel filter type. It can be enabled by setting the <code><a target="_blank" class="code"
            href="">filterSettings->enableInfiniteScrolling</a></code> property to true. In this demo, on-demand data fetch is not enabled by default. To enable the on-demand data fetch for the checkbox/Excel filter type, the Enable OnDemand option must be checked after selecting the checkBox/Excel filter type using the dropdown menu.</p>
        <p>
            More information on the filter configuration can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/api/grid/#filtersettings">
                documentation section</a>.
        </p>
    </div>

</div>
</template>

<style scoped>
@import "../../styles/Grid/filter-menu.css";
</style>

<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Filter, Page, FilterType, Sort } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent, ChangeEventArgs} from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-checkbox': CheckBoxComponent
  },
  data: () => {
    return {
      ddlfields: { text: 'type', value: 'Id' },
      pageSettings: { pageCount: 5 },
      filterSettings: { type: 'Menu' },
      ddldata: [
        { Id: 'Menu', type: 'Menu' },
        { Id: 'CheckBox', type: 'Checkbox' },
        { Id: 'Excel', type: 'Excel' }]
    };
  },
  methods: {
      onChange: function(e: ChangeEventArgs): void {
        let checkbox = ((this as any).$refs.checkbox).$el.ej2_instances[0];
        let grid = ((this as any).$refs.grid).$el.ej2_instances[0];
        checkbox.checked = false;
        grid.filterSettings.enableInfiniteScrolling = false;
        (this as any).filterSettings = {type: <FilterType>e.value};
        ((this as any).$refs.grid).clearFiltering();
        if ((this as any).filterSettings.type === 'Excel' || (this as any).filterSettings.type === 'CheckBox') {
            checkbox.disabled = false;
        } else {
            checkbox.disabled = true;
        }
    },
    checkboxOnChange: function(args: any): void {
        let grid = ((this as any).$refs.grid).$el.ej2_instances[0];
        grid.filterSettings.enableInfiniteScrolling = args.checked;
    }
  },
  computed: {
    getTradeData: function () {
        let SERVICE_URI = "https://ej2services.syncfusion.com/vue/release/";
        let getTradeData = new DataManager({
            url: SERVICE_URI + 'api/UrlDataSource',
            adaptor: new UrlAdaptor()
        });
        return getTradeData;
    },
    query: function () {
        let query = new Query().addParams('dataCount', '10000');
        return query;
    }
  },
  provide: {
      grid: [Filter, Page, Sort]
  }
}
</script>
