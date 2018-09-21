<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates Aggregate functionality of the Grid. In this sample, both “Unit In Stock” and “Discontinued” columns are displayed their aggregate value in group footer.
            “Unit In Stock” column displayed its aggregate value in group caption also. </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging="true" :allowGrouping="true" :pageSettings='pageOption' :groupSettings="groupSettings">
            <e-columns>
                <e-column field='CategoryName' headerText='Category Name' width='170'></e-column>
                <e-column field='ProductName' headerText='Product Name' width='150'></e-column>
                <e-column field='QuantityPerUnit' headerText='Quantity per unit' width='180' textAlign='Right'></e-column>
                <e-column field='UnitsInStock' headerText='Units In Stock' width='150' textAlign='Right'></e-column>
                <e-column field='Discontinued' width='170' textAlign="Center" :displayAsCheckBox="true" type="boolean"></e-column>
            </e-columns>
            <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="UnitsInStock" :groupFooterTemplate='sumTemplate'>
                        </e-column>
                        <e-column type="TrueCount" field="Discontinued" :groupFooterTemplate='trueCountTemplate'>
                        </e-column>
                    </e-columns>
                </e-aggregate>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Max" field="UnitsInStock" :groupCaptionTemplate='maxTemplate'>
                        </e-column>
                    </e-columns>
                </e-aggregate>
            </e-aggregates>
        </ejs-grid>
    </div>

     <div id="description">
         <p>The Grid supports aggregates which will be displayed at the footer, group footer and group caption of the Grid.
    The aggregate configurations can be provided by the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html">
        aggregates
        </a></code> property.</p>
    <p>The built-in aggregates are,</p>
     <ul>
        <li><code>Sum</code></li>     
        <li><code>Average</code></li>     
        <li><code>Min</code></li>     
        <li><code>Max</code></li>     
        <li><code>Count</code></li>     
        <li><code>TrueCount</code></li>     
        <li><code>FalseCount</code></li>     
        <li><code>Custom</code> - Requires the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#customaggregate-string">
        customAggregate
        </a></code> property to perform the aggregation.
        The custom aggregate value can be accessed inside template using the key <code>Custom</code></li>     
    </ul>    
    <p>
        In this demo, the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#groupfootertemplate-string">
        groupFooterTemplate</a></code> property is used to display the group footer aggregation for the <strong><i>Unit In Stocks</i></strong> and <strong><i>Discontinued</i></strong> columns and <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#groupcaptiontemplate-string">
        groupCaptionTemplate</a></code> property is used to display the group caption aggregation for the <strong><i>Unit In Stocks</i></strong> column.
    </p>    
    <p>    To enable group footer aggregation for <strong><i>Unit In Stocks</i></strong> column, the <code>Sum</code> aggregate type is used by setting the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#type-string---string">
        type</a></code> and the <code><a target="_blank" class="code"
 href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#field-string">
        field</a></code> property is set as <strong><i>UnitsInStock</i></strong> which will be used to perform the aggregation.
        The aggregate value is accessed inside the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#groupfootertemplate-string">
        groupFooterTemplate</a></code> using its <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#type-string---string">
        type</a></code> name (<code>Sum</code>).
    </p>
    <p>    To enable group caption aggregation for <strong><i>Unit In Stocks</i></strong> column, the <code>Max</code> aggregate type is used by setting the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#type-string---string">
        type</a></code> and <code><a target="_blank" class="code"
 href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#field-string">
        field</a></code> property is set as <strong><i>UnitsInStock</i></strong> which will be used to perform the aggregation.
        The aggregate value is accessed inside the<code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#groupcaptiontemplate-string">
        groupCaptionTemplate</a></code> using its <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-aggregateColumn.html#type-string---string">
        type</a></code> name (<code>Max</code>).
    </p>
    
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        Grid component features are segregated into individual feature-wise modules. To use aggregate feature, we need to inject
        <code>Aggregate</code> into the <code>provide</code> section.  Since grouping feature is required
            to show group aggreations, we also need to inject <code>Group</code> module.
    </p>
    </div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Aggregate, Group, Page } from "@syncfusion/ej2-vue-grids";
import { categoryData } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: categoryData,
      pageOption: { pageCount: 5 },
      groupSettings: { showDropArea: false, columns: ['CategoryName'] },
       sumTemplate: function() {
        return {
            template: Vue.component('sumTemplate', {
            template: ` <span> Total units: {{data.Sum}}</span>`,
            data: function () {return {data: {}};}
            })
        }
      },
      maxTemplate: function() {
        return {
            template : Vue.component('avgTemplate', {
            template: ` <span>Maximum: {{data.Max}}</span>`, 
            data: function () {return {data: {}};}
            })
        }
      },
      trueCountTemplate: function() {
        return {
            template : Vue.component('avgTemplate', {
            template: ` <span>Discontinued: {{data.TrueCount}}</span>`, 
            data: function () {return {data: {}};}
            })
        }
      }
    };
  },
  provide: {
      grid: [Aggregate, Group, Page]
  }
});
</script>