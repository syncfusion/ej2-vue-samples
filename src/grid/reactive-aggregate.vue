<template>
<div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates reactive aggregate update on data change functionality of the Grid. In this sample, the batch editing  is enabled and the corresponding aggregate values will be refreshed when 'Freight' cell value is changed.</p>
        </div>
    <div>
        <ejs-grid :dataSource="data" :allowPaging='true' :pageSettings='pageSettings' :allowGrouping='true' :groupSettings='groupSettings' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='120' ></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' editType='datepickeredit' textAlign='Right' type='date' format='yMd'></e-column>
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
                        <e-column type="Sum" field="Freight" format="C2" :groupFooterTemplate="sumTemplate">
                        </e-column>
                    </e-columns>
                </e-aggregate>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Average" field="Freight" format="C2" :groupCaptionTemplate="avgTemplate">
                        </e-column>
                    </e-columns>
                </e-aggregate>
            </e-aggregates>
        </ejs-grid>
    </div>
     <div id="description">
            <p>The Grid supports aggregates which will be displayed at the footer, group footer and group caption of the Grid.
    The aggregate configurations can be provided by the <code><a target="_blank" className="code"
                href="http://ej2.syncfusion.com/documentation/grid/api-grid.html">
                aggregates
        </a></code> property.</p>
            <p>
              In this demo, the batch editing  is enabled and the corresponding aggregate values will be refreshed when <strong><i>Freight</i></strong> cell value is changed.
    </p>
            <p>
              By default, reactive aggregate update is not supported by inline and dialog edit modes. But, we can refresh aggregates manually. Please refer to the <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/grid/aggregates.html#refresh-aggregates-in-inline-edit-mode">
                documentation.</a>
            </p>
          </div>      
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Toolbar, Edit, Page, Group, Aggregate } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails.slice(0),
      editSettings: { allowEditing: true, allowDeleting: true, mode: 'Batch' },
      toolbar: [ 'Delete', 'Update', 'Cancel'],   
      pageSettings: {pageCount: 5},
      groupSettings: {showDropArea: false, columns:['CustomerID']},
      sumTemplate: function() {
        return {
            template: Vue.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data: function () {return {data: {data: {}}};}
            })
        }
      },
      avgTemplate: function() {
        return {
            template : Vue.component('avgTemplate', {
            template: `<span>Average: {{data.Average}}</span>`, 
            data: function () {return { data: {data: {}}};}
            })
        }
      }
    };
  },
  provide: {
      grid: [Toolbar, Edit, Page, Group, Aggregate]
  }
});
</script>