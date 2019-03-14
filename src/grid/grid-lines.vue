<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates visibility of the grid lines that separates the rows and columns. In this sample, you can change
        the gridline from the toolbar.</p>
    </div>
    <div>
        <div class='e-mastertext'>Select Grid Line</div>
        <ejs-toolbar ref='toolbar' class='e-gridlist' :clicked="onClicked">
            <e-items>
                <e-item text='Default'></e-item>
                <e-item text='None'></e-item>
                <e-item text='Both'></e-item>
                <e-item text='Horizontal'></e-item>
                <e-item text='Vertical'></e-item>
            </e-items>
        </ejs-toolbar>
        <br/>

        <ejs-grid ref="grid" :dataSource="data" :gridLines='lines' :allowPaging='true'>
            <e-columns>
                <e-column field='ContactName' headerText='Contact Name' width='150'></e-column>
                <e-column field='CompanyName' headerText='Company Name' width='170'></e-column>
                <e-column field='Address' headerText='Address' width='170'></e-column>
                <e-column field='Country' headerText='Country' width='120'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
        <p>
            The <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#gridlines-gridline">
        gridLines</a></code> property is used to control the line visibility that separates the rows and columns.
            The Grid allow us to display the following grid lines,
        </p>
        <ul>
            <li><code>Default</code> - Shows the Horizontal line.</li>
            <li><code>None</code> - Shows no line.</li>
            <li><code>Both</code> - Shows both Horizontal and Vertical lines.</li>
            <li><code>Horizontal</code> - Shows the Horizontal line.</li>
            <li><code>Vertical</code> - Shows the Vertical line.</li>
        </ul>
        <p> In this demo, you can modify the display of gridlines by selecting values in the toolbar.
        </p>
         <p>
            More information on the gridLines configuration can be found in this 
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#gridlines-gridline">documentation section</a>.
        </p>

    </div>

</div>
</template>
<!-- custom code start -->
<style>
.e-mastertext {
    font-size: 15px;
    font-family: Roboto;
    opacity: 0.87;
    padding: 1em;
}

.e-toolbar-item.e-ghidden .e-btn {
    background: rgba(0, 0, 0, 0.12);
    border-color: rgba(0, 0, 0, 0.12);
    color: #212121;
}
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from 'vue';
import { removeClass, addClass } from '@syncfusion/ej2-base';
import { GridPlugin, GridLine, Grid, Page } from '@syncfusion/ej2-vue-grids';
import { ToolbarPlugin, ClickEventArgs, ItemModel, ToolbarComponent } from '@syncfusion/ej2-vue-navigations';
import { customerData } from './data-source';

Vue.use(GridPlugin);
Vue.use(ToolbarPlugin);

export default Vue.extend({
  data: () => {
      return {
        data: customerData,
        lines: 'Default'
        }
  },
  methods: {
      onClicked: function (e: ClickEventArgs){
        this.lines = <GridLine>e.item.text;
      }
  },
  provide: {
      grid: [Page]
  }
})
</script>