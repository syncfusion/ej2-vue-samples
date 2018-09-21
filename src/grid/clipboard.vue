<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates copy to clipboard functionality of the Grid component. Select rows and click Copy button from
        toolbar to copy content. To copy with header click Copy with header button from toolbar.
        </p>
    </div>
    <div>
        <div class="control-section">
        <ejs-grid ref='grid' id='Grid' :dataSource="data" :allowPaging='true' :enableHover="false" :allowSelection="true" :selectionSettings="selectOptions"
         :toolbar='toolbar' :toolbarClick='clickHandler'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShippedDate' headerText='Shipped Date' width='130' format="yMd" textAlign='Right'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
     <ejs-dialog :buttons='alertDlgButtons' ref="alertDialog" v-bind:visible="false" :header='alertHeader' :animationSettings='animationSettings' :content='alertContent' :showCloseIcon='showCloseIcon' :target='target'
            :width='alertWidth'>
        </ejs-dialog>
    </div>

     <div id="description">
        <p>Selected rows or cells data in the Grid can be copied into clipboard using the Keyboard shortcuts and <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#copy">copy
        </a></code> method.
            </p>
            <p>In this demo, selected rows data can be copied into clipboard using the below Keyboard shortcuts or toolbar interactions.</p>
            <ul>
                <li><code>Ctrl + C</code> - Selected rows or cells data without header.</li>
                <li><code>Ctrl + Shift + H</code> - Selected rows or cells data with header.</li>
            </ul>
            <p>More information on the Clipboard feature can be found in this
                <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/clipboard.html">
        documentation section</a>.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { ClickEventArgs } from "@syncfusion/ej2-vue-navigations";
import { orderDetails } from "./data-source";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';


Vue.use(GridPlugin);
Vue.use(DialogPlugin);

export default Vue.extend({
  data: function() {
    return {
      alertHeader: 'Copy with Header',
      alertContent: 'Atleast one row should be selected to copy with header',
      showCloseIcon: false,
      target: '.control-section',
      alertWidth: '300px',
      animationSettings: { effect: 'None' },
      alertDlgButtons: [{ click: ((<any>this).alertDlgBtnClick as any), buttonModel: { content: 'OK', isPrimary: true } }],
      data: orderDetails,
      selectOptions: { type: 'Multiple' },
      toolbar: [{ text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy' },
        { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }]
    };
  },
  methods: {
    clickHandler: function(args: ClickEventArgs) {
        if((<any>this.$refs.grid).getSelectedRecords().length>0){
        let withHeader: boolean = false;
        if (args.item.id === 'copyHeader') {
            withHeader = true;
        }
        (<any>this.$refs.grid).copy(withHeader);
    } else {
        (<any>this.$refs.alertDialog).show();
    }
  },
  alertDlgBtnClick: function() {
        ((<any>this).$refs.alertDialog as any).hide();
    },
  },
  provide: {
      grid: [Toolbar, Page]
  }
});
</script>