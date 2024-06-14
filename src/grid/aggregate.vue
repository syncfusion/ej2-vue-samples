<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates aggregate functionality of the Grid. In this sample, the aggregate value for the column “Freight” is displayed in column footer.</p>
    </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings='pageOption' :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150' :validationRules='customeridrules'></e-column>
                <e-column field='Freight' headerText='Freight' width='150' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='150' format="yMd" textAlign='Right' editType='datepickeredit'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
            </e-columns>
            <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="Freight" format="C2" :footerTemplate="sumTemplate" >
                        </e-column>
                    </e-columns>
                </e-aggregate>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Average" field="Freight" format="C2" :footerTemplate="avgTemplate">
                        </e-column>
                    </e-columns>
                </e-aggregate>
            </e-aggregates>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid supports aggregates which will be displayed at the footer, group footer and group caption of the Grid. The
            aggregate configurations can be provided by the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#aggregates">
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
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnModel/#customaggregate">
        customAggregate
        </a></code> property to perform aggregation. The custom aggregate value can be accessed inside template using the
                key <code>custom</code></li>
        </ul>
        <p>
            In this demo, the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnModel/#footertemplate">
        footerTemplate</a></code> property is used to display four different aggregates in the Grid footer. In the first
            aggregate row, the <code>sum</code> aggregate type is used by setting the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnModel/#type">
        type</a></code> and <code><a target="_blank" class="code"
 href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnModel/#field">
        field</a></code> property as <strong><i>Freight</i></strong> which will be used to perform the aggregation. The
            aggregate value is accessed inside the <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnModel/#footertemplate">
        footerTemplate</a></code> using its <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnModel/#type">
        type</a></code> name (<code>sum</code>). The aggregate value will be formatted based on its <code><a target="_blank" class="code"
 href="https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnModel/#format">
        format</a></code> value(<strong><i>C2</i></strong>) before being displayed.
        </p>
        
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use aggregate feature, we need to inject
            <code>Aggregate</code> into the <code>provide</code> section.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import { createApp } from "vue";
import { GridComponent, ColumnsDirective, ColumnDirective, AggregateDirective, AggregatesDirective, Aggregate, Page, Sort, Toolbar, Edit, Filter } from "@syncfusion/ej2-vue-grids";
import { orderData } from "./data-source";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'e-aggregates': AggregatesDirective,
    'e-aggregate': AggregateDirective,
  },
  data: () => {
    return {
      data: orderData,
      pageOption:{pageCount: 5},
      filterSettings: { type: 'Excel' },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      orderidrules: { required: true, number: true },
      customeridrules: { required: true, minLength: 5 },
      freightrules:  { required: true, min: 0 },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      sumTemplate: function() {
        return {
            template: createApp({}).component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data: function () {return {data: {data: {}}};}
            })
        }
      },
      avgTemplate: function() {
        return {
            template : createApp({}).component('avgTemplate', {
            template: `<span>Average: {{data.Average}}</span>`, 
            data: function () {return { data: {data: {}}};}
            })
        }
      }
    };
  },
  provide: {
      grid: [Aggregate, Page, Sort, Toolbar, Edit, Filter]
  }
};
</script>