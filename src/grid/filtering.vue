<template>
<div>
<div class="col-lg-9 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates the Grid's default filtering feature. Type a value in the filterbar and press enter to filter a particular column.
        </p>
    </div>
    <div>
        <div class="select-wrap" style="width: fit-content">
            <ejs-dropdownlist id='ddlelement' :dataSource='ddldata' placeholder='Select category to filter' :change="onChange"></ejs-dropdownlist>
        </div>

        <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :allowFiltering='true' :pageSettings="pageOptions">
            <e-columns>
                <e-column field='CategoryName' headerText='Category Name' width='150'></e-column>
                <e-column field='ProductName' headerText='Product Name' width='150'></e-column>
                <e-column field='UnitsInStock' headerText='Units In Stock' width='150' textAlign='Right'></e-column>
                <e-column field='Discontinued' headerText='Discontinued' width='150' textAlign='Center' displayAsCheckBox='true' type='boolean'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The filtering feature enables the user to view a reduced amount of records based on filter criteria. It can be enabled
        by setting the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowfiltering">allowFiltering
        </a></code> property to true. A filter bar row will be rendered next to header which allows users to filter
        data by entering text within its cells.</p>
         <p>The Filterbar uses two modes which specifies how to start filtering. They are,</p>    
         <ul>
             <li><code>OnEnter</code> - Enabled by default, filter will be initiated when the <code>Enter</code> key is pressed.</li>
             <li><code>Immediate</code> - Filter will start after user finishes typing. There will be a time delay of <i>1500ms</i> to initiate
            filter after the user stops typing. It can be overridden using the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#filtersettings">
        filterSettings->immediateModeDelay
        </a></code> property.</li>
         </ul>
         <p>In this demo, you can either select the <strong>Category Name</strong> from the SELECT element or type the text in the filter bar cells to filter.</p>
          <p>Additionally, the records can also be filtered based on the selected filterbar operator. It can be enabled by setting
         <br/>
         <code>filterSettings->showFilterBarOperator</code> property to true.</p>
         <p>In this demo,</p>
         <ul>
            <li>To enable or disable filterbar operator feature, check or uncheck the checkbox in the properties panel.</li>
            <li>Select the required filtering operator in the dropdown list on the filter bar cell and type the text to start filtering.</li>
            <li>Now, the addition of new filter operators such as "Does Not Contain", "Does Not End With", "Does Not Start With", "Empty", "Not Empty", "Null", "Not Null", "Like", and "Wildcard search" greatly enhance the filtering feature of the Grid.</li>
         </ul>
         <p>For example, when the <b>Like</b> search operator is used:</p>
         <ul>
            <li>%a% - Filters words containing the character 'a'</li>
            <li>a%  - Filters words ending with 'a'</li>
            <li>%a  - Filters words starting with 'a'</li>
         </ul>
         <p>For example when the <b>Wildcard</b> search operator is used:</p>
         <ul>
            <li>a*b - Filters words that start with 'a' and end with 'b'</li>
         </ul>
         <br>
         <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid features are segregated into individual feature-wise modules. To use filtering feature, inject the
            <code>Filter</code> using the <code>provide</code> section.
        </p>
          <p>
            More information on the filter configuration can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/filtering.html">documentation section</a>.
        </p>
    </div>
</div>

<div class="col-lg-3 property-section">
    <table id="property" title="Properties" style="width: 100%">
        <tr>
            <div class="checkbox-control" style="padding-left: 0px">
                <div class="row" style="padding-left: 5px">
                    <ejs-checkbox label='Enable Filterbar Operator' labelPosition='Before' :change="filterbaroperator"></ejs-checkbox>
                 </div>
            </div>
        </tr>
    </table>
</div>
</div>
</template>
<style scoped>
@import "../../styles/Grid/filtering.css";
</style>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Filter, Page, GridComponent } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-dropdowns";
import { categoryData } from "./data-source";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.use(CheckBoxPlugin);

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
    },
    filterbaroperator: function(args: any): void {
        let grid = (document.getElementsByClassName('e-grid')[0] as any).ej2_instances[0]
            if (args.checked) {
                 grid.filterSettings.showFilterBarOperator = true;
            } else {
                grid.filterSettings.showFilterBarOperator = false;
      }
    }
  },
  provide: {
      grid: [Filter, Page]
  }
});
</script>