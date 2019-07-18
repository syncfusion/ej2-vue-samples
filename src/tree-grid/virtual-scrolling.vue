<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the TreeGrid component with the virtual scrolling feature. Scroll the TreeGrid content vertically to load rows.
        </p>
    </div>
    <div>

        <ejs-treegrid ref='treegrid' :dataSource="virtualData" :enableVirtualization='true' :treeColumnIndex='1' childMapping='Crew' height=600 :dataBound='hide'>
            <e-columns>
                <e-column field='TaskID' headerText='Player Jersey' width='120' textAlign='Right'></e-column>
                <e-column field='FIELD1' headerText='Player Name' width='120'></e-column>
                <e-column field='FIELD2' headerText='Year' width='100' textAlign='Right'></e-column>
                <e-column field='FIELD3' headerText='Stint' width='120' textAlign='Right'></e-column>
                <e-column field='FIELD4' headerText='TMID' width='120' textAlign='Right'></e-column>
                <e-column field='FIELD5' headerText='LGID' width='120' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    <div id="description">
        <p>
            The TreeGrid UI virtualization allows you to render only rows visible within the view-port without buffering the entire datasource.
        To enable the virtualization, set <code><a target="_blank" class="code"
        href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#enablevirtualization">
        enableVirtualization </a></code> property as true.
        </p>
        <p>
            Note: The <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#height">
            height</a></code> property must be defined when enabling <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#enablevirtualization">
            enableVirtualization </a></code>.
        </p>   
        <p style='font-weight: 500'>Injecting Module:</p>
        <p>TreeGrid features are segregated into individual feature-wise modules.
        To use virtual scrolling feature, we need to inject
        <code> VirtualScroll </code> into the provide section.
        </p>
    </div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, VirtualScroll, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data'; 
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { virtualData, dataSource } from './data-source';

Vue.use(TreeGridPlugin);

dataSource();

export default Vue.extend({
  data: function() {
    return {
        virtualData: virtualData,
        display: {'display': 'none'}
    };
  },
  provide: {
      treegrid: [VirtualScroll]
  }
});
</script>