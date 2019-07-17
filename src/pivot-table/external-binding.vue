<template>
  <div>
    <div class="col-lg-12 control-section" style="overflow: auto">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview_heatmap"
          ref="pivotview_heatmap"
          :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings"
          :width="width"
          :height="height"
          :showTooltip="showTooltip"
          :dataBound="dataBound"
          :cellSelected="cellSelected"
        ></ejs-pivotview>
        <br>
        <br>
      
        <ejs-heatmap
          id="heatmap"
          ref="heatmap"
          width="100%"
          height="450px"
          :titleSettings="titleSettings"
          :legendSettings="legendSettings"
          :primaryYAxis="primaryYAxis"
          :xAxis="xAxis"
          :yAxis="yAxis"
          :dataSource="heatmapDataSource"
          :load="heatmapInsLoad"
        ></ejs-heatmap>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample demonstrates rendering Heatmap control by providing desired data from a pivot table on selection. Not
        only Heatmap, but any other control (including third party) can be used for this purpose.
      </p>
    </div>
    <div id="description">
      <p>
        In this sample, the cell selection feature is enabled with the api
        <code>allowSelection</code> property and its
        type and mode are configured using the
        <code>selectionSettings</code> property. The
        <code>cellSelected</code> event gets fired on every selection
        operation performed in the pivot table. This event returns the selected cell information, like row header name,
        column header name, measure name, and value. Based on this information, the heatmap will be plotted.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  PivotView,
  IDataSet,
  PivotCellSelectedEventArgs,
  CellSelectedObject,
  IFieldOptions
} from "@syncfusion/ej2-vue-pivotview";
import {
  HeatMapPlugin, Legend, Tooltip,
  HeatMap, Adaptor, ILoadedEventArgs, HeatMapTheme
} from "@syncfusion/ej2-vue-heatmap";
import { extend, enableRipple } from "@syncfusion/ej2-base";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(HeatMapPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require("./Pivot_Data.json");
let measureList: { [key: string]: string } = {};
let heatmap: HeatMap;
let init: boolean = true;
let selectedCells: CellSelectedObject[];
let xLabels: string[] = [];
let yLabels: string[] = [];
let jsonDataSource: object[] = [];

export default Vue.extend({
  data: () => {
    init = true;
    return {
      dataSourceSettings: {
        enableSorting: true,
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        valueSortSettings: { headerDelimiter: " - " },
        dataSource: Pivot_Data,
        expandAll: true,
        values: [{ name: "Sold", caption: "Units Sold" }],
        filters: []
      },
      width: "100%",
      gridSettings: {
        columnWidth: 120,
        allowSelection: true,
        selectionSettings: {
          mode: "Cell",
          type: "Multiple",
          cellSelectionMode: "Box"
        }
      },
      height: 300,
      titleSettings: {
        text: 'Sales Analysis'
      },
      legendSettings: {
        position: 'Top'
      },      
      showTooltip: false,
      xAxis: {
        title: { text: "Country ~ Products" },
        labels: [],
        labelRotation: 315
      },
      yAxis: {
        title: { text: "Sum of Units Sold" },
        labels: []
      },
      heatmapDataSource: {
        data: [],
        isJsonData: true,
        adaptorType: 'Table',
        xDataMapping: 'xMember'
      },
    };
  },
  methods: {
    dataBound: function() {
      let pivotObj = (<any>this.$refs.pivotview_heatmap).ej2Instances;
      if (init) {
        pivotObj.grid.selectionModule.selectCellsByRange(
          { cellIndex: 1, rowIndex: 1 },
          { cellIndex: 3, rowIndex: 4 }
        );
      }
    },
    cellSelected: function(args: PivotCellSelectedEventArgs) {
      if (args.selectedCellsInfo && args.selectedCellsInfo.length > 0) {
        init= false;
        selectedCells = args.selectedCellsInfo;
        this.frameSeries();
        this.heatmapUpdate();
      }
    },
    frameSeries: function() {
        let columnGroupObject: { [key: string]: { x: string; y: number }[] } = {};
        let pivotObj = (<any>this.$refs.pivotview_heatmap).ej2Instances;             
        xLabels = [];
        yLabels = [];
        jsonDataSource = [];
        for (let cell of selectedCells) {
            if (cell.measure !== '') {
                let columnSeries: string = (pivotObj.dataSourceSettings.values.length > 1 && measureList[cell.measure]) ?
                    (cell.columnHeaders.toString() + ' ~ ' + measureList[cell.measure]) : cell.columnHeaders.toString();
                columnSeries = columnSeries == '' && cell.measure != '' ? 'Grand Total' : columnSeries;
                let rHeaders: string = cell.rowHeaders == '' && cell.currentCell.axis != 'column' ? 'Grand Total' : cell.rowHeaders.toString();
                if (columnGroupObject[columnSeries]) {
                    columnGroupObject[columnSeries].push({ x: rHeaders.toString(), y: Number(cell.value) });
                } else {
                    columnGroupObject[columnSeries] = [{ x: rHeaders.toString(), y: Number(cell.value) }];
                    yLabels.push(columnSeries);
                }
                if (xLabels.indexOf(rHeaders.toString()) == -1) {
                    xLabels.push(rHeaders.toString());
                }
            }
        }
        for (let xcnt: number = 0; xcnt < xLabels.length; xcnt++) {
            let xName: string = xLabels[xcnt];
            let row: object = { 'xMember': xName };
            for (let ycnt: number = 0; ycnt < yLabels.length; ycnt++) {
                let YName: string = yLabels[ycnt];
                let col: { x: string, y: number }[] = columnGroupObject[YName].filter(function (item) { return item.x == xName; });
                (row as any)[YName] = col.length > 0 ? col[0].y : '';
            }
            jsonDataSource.push(row);
        }
    },
    heatmapUpdate: function() {      
      let pivotObj = (<any>this.$refs.pivotview_heatmap).ej2Instances;
      let heatmap = (<any>this.$refs.heatmap).ej2Instances;
      (heatmap.dataSource as any).data = jsonDataSource;
      heatmap.legendSettings = {
        position: 'Top'
      };
      heatmap.xAxis = {
        title: { text: pivotObj.dataSourceSettings.rows.map(function (args:any) { return args.caption || args.name; }).join(' ~ ') },
        labels: xLabels,
        labelRotation: 315
      };
      heatmap.yAxis = {
        title: { text: pivotObj.dataSourceSettings.values.map(function (args:any) { return args.caption || args.name; }).join(' ~ ') },
        labels: yLabels
      };
      heatmap.refresh();
    },
    heatmapInsLoad: function(args: any) {
      let selectedTheme: string = location.hash.split('/')[1];
      selectedTheme = selectedTheme ? selectedTheme : 'Material';
      args.heatmap.theme = <HeatMapTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    }
  },
  provide: {
    heatmap: [Adaptor, Legend, Tooltip]
  }
});
</script>
