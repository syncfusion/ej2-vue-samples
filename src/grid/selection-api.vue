<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the selection functionality of the Grid, you can select the type and mode from the desired button</p>
    </div>
    <div>
        <div class='e-mastertext'>Selection Type & Selection Mode</div>
        <div class='select-wrap'>
            <ejs-toolbar class='e-gridlist' :items='items' :clicked="onChange">
                
            </ejs-toolbar>
        </div>
        <br/>
        <ejs-grid :dataSource="data" allowPaging='true' :enableHover="false" :allowSelection="true" :selectionSettings="selectOptions">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            Selection provides an interactive support to highlight the row or cell that you select. Selection can be done through simple
            Mouse down or Keyboard interaction. To enable selection, set <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowselection-boolean">
        allowSelection
        </a></code> as true.
        </p>
        <p>Grid component supports two types of selection which can be set using <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#selectionsettings-selectionsettingsmodel">
        selectionSettings->type
        </a></code> property.
            They are,</p>
        <ul>
            <li><code>Single</code> - Enabled by default. Allows the user to select single row/cell at a time.</li>
            <li><code>Multiple</code> - Allows the user to select more than one row/cell at a time.</li>
        </ul>
        <p>Also, supports three modes of selection which can be set using <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#selectionsettings-selectionsettingsmodel">
        selectionSettings->mode
        </a></code> property. They
            are,
        </p>
        <ul>
            <li><code>Row</code> - Enabled by default. Enables row selection in Grid.</li>
            <li><code>Cell</code> - Enables cell selection in Grid.</li>
            <li><code>Both</code> - Enables both row and cell selection in Grid. Clicking any cell will select both the row and cell
                simultaneously
            </li>
        </ul>
        <p>To perform the multi-selection, hold <strong>CTRL</strong> key and click the desired rows/cells. To select range of rows/cells,
            hold <strong>SHIFT</strong> key and click the rows/cells.</p>
        <p>While using the Grid in a touch device environment, there is an option for multi-selection through a single tap on the
            row and it will show a popup with the multi-selection symbol. Tap the icon to enable multi-selection in a single
            tap.
        </p>
        <p>In this demo, click the toolbar options to toggle between the selection type and selection mode available in Grid.</p>
        <p>
            More information on the selection configuration can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#selectionsettings-selectionsettingsmodel">documentation section</a>.
        </p>
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

.e-mastertext {
    font-size: 15px;
    font-family: Roboto;
    font-weight: 300;
    opacity: 0.87;
    padding: 1em;
}
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { ToolbarPlugin, ClickEventArgs } from '@syncfusion/ej2-vue-navigations';
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);
Vue.use(ToolbarPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails,
      selectOptions: { type: 'Multiple', mode: 'Row' },
      items: [{text: 'Multiple', cssClass: 'e-gtype', id: 'type'}, {text: 'Row', cssClass: 'e-gmode', id: 'mode'}]
    };
  },
  methods: {
      onChange(e: ClickEventArgs): void {
        let option = this.selectOptions;
        let mode: string = option.mode;
        let type: string = option.type;
        if (e.item.id === 'mode') {
            mode = e.item.text === 'Row' ? 'Cell' : 'Row';
            this.items = [{text: type, cssClass: 'e-gtype', id: 'type'}, {text: mode, cssClass: 'e-gmode', id: 'mode'}];
        } else {
            type = e.item.text === 'Multiple' ? 'Single' : 'Multiple';
            this.items = [{text: type, cssClass: 'e-gtype', id: 'type'}, {text: mode , cssClass: 'e-gmode', id: 'mode'}];
        }
        this.selectOptions = {mode: mode, type: type};
    }
  },
  provide: {
      grid: [Page]
  }
});
</script>