<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the right-to-Left(RTL) alignment in grid component.
        </p>
    </div>
    <div>
        <ejs-grid :dataSource="data" id="gridcomp" :allowPaging='true' :enableRtl='true'  :allowSorting='true' :allowGrouping='true' 
        :editSettings  ='editing' :allowFiltering='true' :filterSettings='filterOptions' :allowReordering='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
                <e-column field='CustomerName' headerText='Customer Name'  width='150' textAlign='Left'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' editType='numericedit' width='120'></e-column>
                 <e-column field='OrderDate' headerText='Order Date' type= 'date' format= 'yMd'  editType= 'datepickeredit' width=150 textAlign='Right'></e-column>
                <e-column field='ShipCountry' textAlign='Left' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            Right-to-left(RTL) is used to render the component from right to left direction and it can be
        enabled by setting <code> <a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/#enablertl">enableRtl
            </a></code> property as true.
        In this demo, you can able to see Group drop area, header, content, pager, filter dialog, etc ... are aligned right to left direction.
        </p>
        <p>
            More information on the RTL can be found in this 
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#enablertl">documentation section</a>.
        </p>
    </div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Sort, Edit, Page, Group, Filter, Reorder } from "@syncfusion/ej2-vue-grids";
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
    data: orderDetails,
    filterOptions: {
           type: 'Menu'
        },
    editing: { allowDeleting: false, allowEditing: true }
    };
  },
  provide: {
      grid: [Sort, Edit, Page, Group, Filter, Reorder]
    }
});
</script>