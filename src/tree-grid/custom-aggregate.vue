<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
    <p>This sample demonstrates custom aggregate functionality of the TreeGrid. In this sample, the custom aggregate value for the columns “Category” is displayed in column footer with dropdown to display the count of selected category name.</p>
</div>
<div id="description">
    <p>The TreeGrid supports aggregates which will be displayed at the footer and every hierarchy level.
    The aggregate configurations can be provided by the <code>aggregates</code> property.</p>
    <p>The built-in aggregates are,</p>
    <ul>
        <li><code>Sum</code></li>     
        <li><code>Average</code></li>     
        <li><code>Min</code></li>     
        <li><code>Max</code></li>     
        <li><code>Count</code></li>     
        <li><code>TrueCount</code></li>     
        <li><code>FalseCount</code></li>     
        <li><code>Custom</code> - Requires the <code>customAggregate</code> property to perform aggregation.
            The custom aggregate value can be accessed inside template using the key <code>${Custom}</code></li>     
    </ul>    
    <p>
        In this demo, the footerTemplate property shows the custom aggregate value for the columns “Category” in column footer to display the count of category name.
    </p>
    <p>The template expression should be provided inside <code>${...}</code> the interpolation syntax.</p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        TreeGrid features are segregated into individual feature-wise modules. 
        To use aggregate feature, we need to inject
        <code>Aggregate</code> module into the <code>provide</code> section. 
    </p>
    <p>
        More information about aggregate can be found in this documentation section.
    </p>
</div>
    <div>
        <ejs-treegrid :dataSource="data" ref='treegrid' childMapping='subtasks' :treeColumnIndex='1' :dataBound='dataBound' :height='380' >
            <e-columns>
                <e-column field='ID' headerText='S.No' width='90' textAlign='Right'></e-column>
                <e-column field='Name' headerText='ShipMent Name' width='220'></e-column>
                <e-column field='category' headerText='Category' width='220'></e-column>
                <e-column field='unitPrice' headerText='Unit Price($)' format='c2' width='120' textAlign='Right'></e-column>
                <e-column field='price' headerText='Price($)' width='100' format='c' textAlign='Right'></e-column>
            </e-columns>
           <e-aggregates>
                <e-aggregate :showChildSummary='false'>
                    <e-columns>
                        <e-column columnName="category" type="Custom" :customAggregate="customAggregateFn" :footerTemplate='footerTemp'></e-column>
                    </e-columns>
                </e-aggregate>
          </e-aggregates>
        </ejs-treegrid>
    </div>
</div>
</template>
<!-- custom code start -->
<style>

  .e-input {
       padding-bottom: 1px !important;
   }
   
  .e-summarycell.e-templatecell {
    pointer-events:visible !important;
  };

</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, TreeGridComponent, Aggregate, Page } from "@syncfusion/ej2-vue-treegrid";
import { summaryData } from "./data-source";
import { DropDownList, DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { getObject, CustomSummaryType } from '@syncfusion/ej2-grids';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

Vue.use(TreeGridPlugin);
Vue.use(DropDownListPlugin);

let listObj: DropDownList;
let value = 'Frozen seafood';
let foods = [
    { food : 'Frozen seafood'},
    { food : 'Dairy'},
    { food : 'Edible'},
    { food : 'Solid crystals'}
];
export default Vue.extend({
  data: () => {
    return {
      data: summaryData,
      footerTemp: function () {
        return  { template : Vue.component('footerTemplate', {
            template: `<span>Count of <input type="text" id="customers" />: {{data.Custom}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
    };
  },
  provide: {
      treegrid: [Aggregate, Page]
  },
  methods: {
      customAggregateFn : function (data: Object) {
        let sampleData: Object[] = getObject('result', data);
        let countLength: number; countLength = 0;
        sampleData.filter((item: Object) => {
            let data: string = getObject('category', item);
            if (data === value) {
                countLength++;
            }
        });
        return countLength;
      },
      dataBound: function() {
          let treeGridObj = (<TreeGridComponent>this.$refs.treegrid);
            if (!isNullOrUndefined(listObj)) {
                listObj.destroy();
            }
            listObj = new DropDownList({
                dataSource: foods,
                fields: { value: 'food' },
                placeholder: 'Select a Category',
                width: '115px',
                value: value,
                change:function () {
                    setTimeout(
                        function(){
                            value = listObj.value.toString();
                            treeGridObj.refresh();
                        },
                        300
                    );
                }
            });
            listObj.appendTo('#customers');
            }
  }
});
</script>