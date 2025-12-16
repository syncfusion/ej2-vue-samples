<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-pivotview id="PivotView" ref="PivotView" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height"
        :showFieldList="showFieldList" :showGroupingBar="showGroupingBar" :allowDataCompression="allowDataCompression" :allowExcelExport="allowExcelExport" :allowPdfExport="allowPdfExport"
        :showToolbar="showToolbar" :displayOption="displayOption" :chartSettings="chartSettings" :toolbar="toolbar" :toolbarRender="toolbarRender" :dataBound="onDataBound">        
        </ejs-pivotview>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates exporting a server-side Syncfusion Pivot Table as a fully interactive Excel Pivot Table.
    </p>
</div>
<div id="description">
    <p>This sample shows how to export a <strong>server-side</strong> Syncfusion Pivot Table to an Excel file while
        preserving its native pivot structure. The exported Excel file supports full interactivity, allowing users to
        customize pivot configurations directly within Excel.</p>
    <p>The Pivot Table uses a server-side pivot engine powered by the <a target="_blank"
            href="https://www.nuget.org/packages/Syncfusion.Pivot.Engine/"> Syncfusion.Pivot.Engine</a> package. This
        engine runs on a separate hosted server, performing all pivot operations—including <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/aggregation/#aggregation">
            aggregation</a>, <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/filtering/#filtering">
            filtering</a>, <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/sorting/#sorting">
            sorting</a>, and <a target="_blank" href="https://ej2.syncfusion.com/documentation/pivotview/grouping">
            grouping</a> and returns only paged data to the client. The connection to the remote service is configured
        using the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/pivotview/dataSourceSettings/#url">
            dataSourceSettings-&gt;url</a> property.</p>
    <p><strong>Excel Export</strong> is available via the built-in toolbar and generates a true Excel Pivot Table, not
        just static data. This enables users to interact with and manipulate the exported report directly in Excel.</p>
    <p>Additionally, the toolbar includes custom menu items to toggle between <code>Compact</code> and
        <code>Tabular</code> layouts and to switch chart types dynamically. This empowers users to customize both the
        visual structure and the associated chart representation of their data.</p>
    <br />
    <p>
        <strong>Injecting Module:</strong>
    </p>
    <p>
        The pivot table features are segregated into individual modules. To use the exporting option,
        we need to inject the <code>Export</code> module using the <code>provide</code> section.
    </p><br />
    <p>
        More information about server-side aggregation can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/server-side-pivot-engine">
            documentation section</a>.
    </p>
</div>
</div>
</template>
<script lang="ts">
import { PivotViewComponent, IDataOptions, IDataSet, GroupingBar, FieldList, VirtualScroll , Toolbar, ExcelExport } from '@syncfusion/ej2-vue-pivotview';
import { extend, enableRipple, Browser } from '@syncfusion/ej2-base';
import { Menu } from '@syncfusion/ej2-vue-navigations';
enableRipple(false);

/* tslint:disable */

export default {
  components: {
    'ejs-pivotview': PivotViewComponent
  },
  data: () => {
    return {
      dataSourceSettings: {
        url: 'https://services.syncfusion.com/vue/production/api/pivot/post',
        mode: 'Server',
        expandAll: true,
        enableSorting: true,
        columns: [ { name: 'Year', caption: 'Production Year' },
        ],
        values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }
        ],
        rows: [{ name: 'Country' }, {name: 'Products'}],
        formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Sold', format: 'N0' }],
        filters: []
      },
      width: '100%',
      height: 450,
      showFieldList: true,
      showGroupingBar: true,
      allowDataCompression: true,
      allowExcelExport: true,
      allowPdfExport: true,
      showToolbar: true,
      displayOption: { view: 'Both' },
      chartSettings: {
          title: 'Sales Analysis',
          primaryYAxis: { border: { width: 0 } },
          legendSettings: { visible: false, },
          chartSeries: { type: 'Bar', animation: { enable: false } }
      },
      toolbar: ['Chart', 'FieldList'],
      gridSettings: {
          columnWidth: Browser.isDevice ? 100 : 120,
      }
    };
  },
  methods: {
    toolbarRender: function (args: any) {
      args.customToolbar.splice(0, 0, {
          prefixIcon: 'e-menu-icon e-pivotview-excel-export e-icons',
          tooltipText: 'Excel Export as Pivot',
          click: this.toolbarClicked.bind(this),
      });
      args.customToolbar.splice(1, 0, {
          type: 'Separator'
      });
      args.customToolbar.splice(2, 0, {
          template: '<ul id="grid_menu"></ul>',
          id: 'custom_toolbar'
      });
      args.customToolbar.splice(3, 0, {
          type: 'Separator'
      });
    },
    onDataBound: function () {
      let pivotObj = ((this as any).$refs.PivotView).ej2Instances;
      if (Browser.isDevice && pivotObj && pivotObj.enableRtl) {
        (document.querySelector('.control-section') as any).classList.add('e-rtl');
      }
      if (document.querySelector('#grid_menu .e-menu-item') == null) {
        var menuItems = [
          {
            iconCss: 'e-toolbar-grid e-icons',
            items: [
              { text: 'Compact Layout', id: 'Compact' },
              { text: 'Tabular Layout', id: 'Tabular' },
            ],
          },
        ];
        new Menu(
          { items: menuItems, select: this.gridToolbarClicked },
          '#grid_menu'
        );
      }
    },
    toolbarClicked: function () {
      let pivotObj = ((this as any).$refs.PivotView).ej2Instances;
      pivotObj.exportAsPivot();
    },
    gridToolbarClicked: function (args: any) {
      let pivotObj = ((this as any).$refs.PivotView).ej2Instances;
      if (pivotObj && pivotObj.gridSettings && pivotObj.gridSettings.layout !== args.item.id && (args.item.id == 'Compact' || args.item.id == 'Tabular')) {
        pivotObj.setProperties({
          gridSettings: {
            layout: args.item.id
          },
          displayOption: {
            view: 'Both', primary: 'Table'
          },
        }, true);
        pivotObj.refresh();
      }
    }
  },
  provide: {
    pivotview: [
      FieldList,
      Toolbar,
      ExcelExport,
      GroupingBar
    ]
  }
}
</script>

<style scoped>
/deep/ .e-pivotview {
    width: 100%;
    height: 100%;
}

/deep/ .sb-sample-content-area {
    min-height: 255px !important;
}

/deep/ .control-section {
    min-height: 255px !important;
}

/deep/ .tabular-layout-switch {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

/deep/ .pivot-layout-switch {
    margin-left: 10px;
}

/deep/ .e-tool-grid {
    content: "\e705";
}
</style>
