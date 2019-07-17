<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates dynamic show hide columns feature of Grid. Click column name from the toolbar to toggle visibility.
        </p>
    </div>
    <div>
        <div class='e-mastertext'>Select column name to toggle visibility</div>
        <ejs-toolbar class='e-gridlist' :clicked="onClicked">
            <e-items>
                <e-item text='Order ID'></e-item>
                <e-item text='Customer Name'></e-item>
                <e-item text='Order Date'></e-item>
                <e-item text='Freight'></e-item>
                <e-item text='Shipped Date'></e-item>
                <e-item text='Ship Country'></e-item>
            </e-items>
        </ejs-toolbar>
        <br/>

        <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :dataBound="dataBound">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>The Grid column can be showed/hidden dynamically using <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#showcolumns">showColumns
        </a></code> and <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#hidecolumns">hideColumns
        </a></code> method of the Grid.</p>
        <p>In this demo, the columns can be showed and hidden by clicking the column name in the toolbar. And the column`s visibility is toggled based on the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-columnDirective.html#headertext-string">columns->headerText
        </a></code> value.</p>
        <br>
        <p>The <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-columnDirective.html#visible-boolean">columns->visible
        </a></code> property specifies the visibility of a column. To hide a column at the initial rendering, set the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-columnDirective.html#visible-boolean">columns->visible
        </a></code> property to false.</p>
    </div>
</div>
</template>
<!-- custom code start -->
<style>
.e-gridlist .e-tbar-btn.e-btn,
.e-gridlist .e-btn  {
    box-shadow: none;
    text-transform: none;
}

.e-ghidden {
    opacity: 0.35;
}

.e-mastertext {
    font-size: 15px;
    font-family: Roboto;
    opacity: 0.87;
    padding: 1em;
}

</style>
<!-- custom code end -->
<script lang="ts">
import Vue from 'vue';
import { removeClass, addClass } from '@syncfusion/ej2-base';
import { GridPlugin, GridComponent, Page } from '@syncfusion/ej2-vue-grids';
import { ToolbarPlugin, ClickEventArgs} from '@syncfusion/ej2-vue-navigations';
import { orderDetails } from './data-source';

Vue.use(GridPlugin);
Vue.use(ToolbarPlugin);

export default Vue.extend({
  data: () => {
      return {
        data: orderDetails,
        flag: false
        }
  },
  methods: {
      onClicked: function(e: ClickEventArgs) {
        if (!this.flag) { return; }

        let element: HTMLElement = <HTMLInputElement>e.originalEvent.target;

        if (!element.classList.contains('e-tbar-btn-text') && !element.classList.contains('e-tbar-btn')) {
            return;
        }

        element = <HTMLElement>(element.tagName === 'BUTTON' ? element.firstElementChild : element);
        this.flag = false;
        let hidden: boolean = element.classList.contains('e-ghidden');
        let classFn: Function = hidden ? removeClass : addClass;
        classFn([element], 'e-ghidden');

        if (hidden) {
            (<GridComponent>this.$refs.grid).showColumns(element.innerHTML, 'headerText');
        } else {
            (<GridComponent>this.$refs.grid).hideColumns(element.innerHTML, 'headerText');
        }
        this.flag = true;
    },
    dataBound: function() {
        this.flag = true;
    }
  },
  provide: {
      grid: [Page]
  }
})
</script>