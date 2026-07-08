<template>
<div>
<div id="action-description">
    <p>
        This sample demonstrates the filtering capabilities of the Grid using multiple filter types. It shows how users can interact with different filtering options to refine and view data efficiently.
    </p>
</div>
<div class="col-lg-9 control-section">
    <ejs-grid ref='grid' id='GridFilterMenu' :dataSource="getTradeData" :query="query" :allowPaging='true' :allowFiltering='true' :allowSorting='true' :pageSettings='pageSettings' :filterSettings='filterSettings' :clipMode="'EllipsisWithTooltip'">
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
            <e-column field='Employees' headerText='Employee Name' width='150'></e-column>
            <e-column field='Designation' headerText='Designation' width='130' textAlign='Right'></e-column>
            <e-column field='CurrentSalary' headerText='CurrentSalary' width='120' format='C2' textAlign='Right'></e-column>
        </e-columns>
    </ejs-grid>
</div>

<div class="col-lg-3 property-section">
    <table id="property" title="Properties" style="width: 100%; margin-left: -10px;">
        <colgroup>
             <col span="1" style="width: 40%;">
             <col span="1" style="width: 60%;">
          </colgroup>
          <tbody>
        <tr style="height: 50px">
            <td>
                <div style="margin-left: -10px;width: 120%;">Filter Type</div>
            </td>
            <td>
            <div style="margin-left: -10px;">
              <ejs-dropdownlist id='ddlelement' :dataSource='ddldata' value='Menu' :fields='ddlfields' :change="onChange"></ejs-dropdownlist>
             </div>                                 
            </td>
        </tr>
        <tr style="height: 50px" v-show="showOnDemandCheckbox">
            <td>
                <div style="margin-left: -10px;width: 120%;">OnDemand</div>
            </td>
            <td>
            <div style="margin-left: -10px;">
              <ejs-checkbox ref="checkboxOnDemand" label='' labelPosition='Before' :disabled='false' :checked="false" :change="checkboxOnChange"></ejs-checkbox>
             </div>                                 
            </td>
        </tr>
        <tr style="height: 50px" v-show="showImmediateFilterCheckbox">
            <td>
                <div style="margin-left: -10px;width: 120%;">Immediate Filter</div>
            </td>
            <td>
            <div style="margin-left: -10px;">
              <ejs-checkbox ref="checkboxImmediateFilter" label='' labelPosition='Before' :disabled='false' :checked="false" :change="onImmediateFilterChange"></ejs-checkbox>
             </div>                                 
            </td>
        </tr>
        </tbody>
    </table>
</div>

    <div id="description">
        <p>
            The filtering feature allows users to display only the matching records based on filter criteria. To enable
            filtering, set the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid#allowfiltering">allowFiltering</a></code> property to
            <code>true</code>. The Grid supports the following filter types:
        </p>
        <ul>
            <li><a target="_blank" class="code"
                    href="https://ej2.syncfusion.com/vue/documentation/grid/filtering/filter-menu"><code>Menu</code></a></li>
            <li><a target="_blank" class="code"
                    href="https://ej2.syncfusion.com/vue/documentation/grid/filtering/excel-like-filter"><code>CheckBox</code></a>
            </li>
            <li><a target="_blank" class="code"
                    href="https://ej2.syncfusion.com/vue/documentation/grid/filtering/excel-like-filter"><code>Excel</code></a>
            </li>
        </ul>
        <p>
            These can be configured using the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#type">filterSettings.type</a></code>
            property. In this sample, the Menu filter is enabled by default, and you can switch to "CheckBox" or "Excel"
            filters using the dropdown.
            When using "CheckBox" or "Excel" filters, the Grid provides two enhancements:
        </p>
        <ul>
            <li><strong>On-demand loading (Performance):</strong> Loads data only when needed, which improves speed and
                efficiency when working with large datasets. This can be enabled by setting the
                <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/filtersettings#enableinfinitescrolling">filterSettings.enableInfiniteScrolling</a></code>
                property to <code>true</code>.
            </li>
            <li><strong>Immediate filtering (UI Experience):</strong> Applies filters instantly as soon as items are checked
                or unchecked, which provides a smoother interaction. This can be enabled by setting the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#mode">filterSettings.mode</a></code>
                property to <code>Immediate</code>.</li>
        </ul>
        <p><strong>Injecting Module:</strong></p>
        <p>
            Features of the Grid component are organized into individual, feature-specific modules. To use filtering
            functionality, inject the Filter module by <code>Grid.Inject(Filter)</code>.
        </p>
        <p>
            Looking for the full Vue Data Grid component overview, features, pricing, and documentation? Visit our
            <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-data-grid">
                Vue Data Grid component</a> page.
        </p>
    </div>

</div>
</template>

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
      showOnDemandCheckbox: false,
      showImmediateFilterCheckbox: false,
      ddldata: [
        { Id: 'Menu', type: 'Menu' },
        { Id: 'CheckBox', type: 'Checkbox' },
        { Id: 'Excel', type: 'Excel' }]
    };
  },
  methods: {
      onChange: function(e: ChangeEventArgs): void {
        let checkboxOnDemand = ((this as any).$refs.checkboxOnDemand)?.$el.ej2_instances[0];
        let checkboxImmediateFilter = ((this as any).$refs.checkboxImmediateFilter)?.$el.ej2_instances[0];
        let grid = ((this as any).$refs.grid).$el.ej2_instances[0];
        
        if (checkboxOnDemand) checkboxOnDemand.checked = false;
        if (checkboxImmediateFilter) checkboxImmediateFilter.checked = false;
        grid.filterSettings.enableInfiniteScrolling = false;
        grid.filterSettings.mode = 'Default';
        
        (this as any).filterSettings = {type: <FilterType>e.value};
        ((this as any).$refs.grid).clearFiltering();
        
        if (e.value === 'Excel' || e.value === 'CheckBox') {
            (this as any).showOnDemandCheckbox = true;
            (this as any).showImmediateFilterCheckbox = true;
        } else if (e.value === 'Menu') {
            (this as any).showOnDemandCheckbox = false;
            (this as any).showImmediateFilterCheckbox = false;
        }
    },
    checkboxOnChange: function(args: any): void {
        let grid = ((this as any).$refs.grid).$el.ej2_instances[0];
        grid.filterSettings.enableInfiniteScrolling = args.checked;
    },
    onImmediateFilterChange: function(args: any): void {
        let grid = ((this as any).$refs.grid).$el.ej2_instances[0];
        grid.filterSettings.mode = args.checked ? 'Immediate' : 'Default';
    }
  },
  computed: {
    getTradeData: function () {
        let SERVICE_URI = "https://services.syncfusion.com/vue/production/";
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

<style scoped>
@import "../../styles/Grid/filter-menu.css";
</style>