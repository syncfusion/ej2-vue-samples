<template>
<div>
<div class="control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :width="width" :height="height" :showFieldList="showFieldList" :showGroupingBar="showGroupingBar" :enableVirtualization="enableVirtualization" :dataBound="dataBound" :allowDataCompression="allowDataCompression">        
        </ejs-pivotview>
    </div>
</div>
<div id="action-description">
    <p>This sample demonstrates how to use a server-side pivot engine to obtain, process and return the summarized data via a remote service and display it in the pivot table.</p>
</div>
<div id="description">
    <p>
        The Pivot Table's server-side pivot engine (external pivot engine) uses the Syncfusion package <a target="_blank"
            href="https://www.nuget.org/packages/Syncfusion.Pivot.Engine/"> Syncfusion.Pivot.Engine</a> to gather data from the data
        source and perform all pivot operations such as <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/aggregation/#aggregation">
            aggregation</a>, <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/pivotview/filtering/#filtering">
            filtering</a>, <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/pivotview/sorting/#sorting">
            sorting</a>, <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/pivotview/grouping">
            grouping</a>, and more on a separate hosted server and only paged
        data is sent to the pivot table viewport via web service.
        The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings/#url">
            dataSourceSettings-&gt;url</a> property allows this web service URL to be
        connected to the pivot table.
    </p>
    <p>
        In this demo, the pivot table is shown with the virtualization option enabled through the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/#enablevirtualization"> enableVirtualization</a> property
        and an external server engine. This would improve pivot table rendering performance when working with large amounts of data.
    </p>
    <br />
    <p>
        <strong>Injecting Module:</strong>
    </p>
    <p>
        The pivot table features are segregated into individual modules. To use the virtual scrolling option, inject
        <code> VirtualScroll</code> module using the
        <code>provide</code> section.
    </p>
    <br />
    <p>
        More information about server-side aggregation can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/server-side-pivot-engine">
            documentation section</a>.
    </p>
</div>
</div>
</template>
<script lang="ts">
import { PivotViewComponent, IDataSet, VirtualScroll, FieldList, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { extend, enableRipple, Browser } from '@syncfusion/ej2-base';
enableRipple(false);

/* tslint:disable */

export default {
  components: {
    'ejs-pivotview': PivotViewComponent
  },
  methods: {
    dataBound: function(args: any) {
      var pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (Browser.isDevice && pivotObj && pivotObj.enableRtl && document.querySelector('.control-section')) {
          (<any>document.querySelector('.control-section')).classList.add('e-rtl');
      }
    },
  },
  data: () => {
    return {
      dataSourceSettings: {
            url: 'https://services.syncfusion.com/vue/production/api/pivot/post',
            mode: 'Server',
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' },
            ],
            values: [
                { name: 'Sold', caption: 'Units Sold' },
                { name: 'Price', caption: 'Sold Amount' }
            ],
            rows: [{ name: 'ProductID', caption: 'Product ID' }],
            formatSettings: [{ name: 'Price', format: 'C0' }, { name: 'Sold', format: 'N0' }],
            filters: []
      },
      showFieldList: true,
      showGroupingBar: true,
      enableVirtualization: true,
      width: "100%",
      allowDataCompression: true,
      height: 450
    };
  },
  provide: {
    pivotview: [VirtualScroll, FieldList, GroupingBar]
  }
}
</script>

<style scoped>
/deep/ #pivotview {
  width: 100%;
}

/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}
/deep/ .control-section {
  min-height: 255px !important;
}
</style>