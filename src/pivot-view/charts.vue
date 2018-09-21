<template>
<div>
<div class="col-lg-12 control-section">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview_chart" :dataSource="dataSource" :gridSettings="gridSettings" :dataBound="dataBound" :width="width" :height="height">        
        </ejs-pivotview>
        <br>
    <br>
    <div id="chart" style="height: 450px;"></div>
    <div id='ddldiv' style="float: right;margin-right: 10px">
        <ejs-dropdownlist id='measures' :dataSource='ddlDataSource' index=0 :dataBound="ddlDataBound" :change="ddlOnChange"></ejs-dropdownlist>
    </div>
    </div>    
</div>
<div id="action-description">
    <p>This sample demonstrates the integration of pivotgrid data into a simple chart widget.</p>
</div>
<div id="description">
    <p>In this sample, the stock and sales of certain products, across different countries over certain fiscal years are acquired
        from the pivotgrid and plotted in the chart widget as series. The
        <b>stock</b> and
        <b>sales</b> values can be switched using the drop-down list located on the top-right corner of the chart widget.
    </p>
    <p>
        Since we have only a simple chart now, we have bound the aggregated pivotgrid data alone without the major UI interaction
        like drill-down. On pivotchart implementation in the near future, we will provide rich UI interaction.
    </p>
</div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  PivotView,
  IGridValues,
  IAxisSet,
  PivotEngine
} from "@syncfusion/ej2-vue-pivotview";
import {
  ChartPlugin,
  Chart,
  Category,
  Legend,
  Tooltip,
  ColumnSeries,
  LineSeries,
  SeriesModel,
  ChartTheme
} from "@syncfusion/ej2-vue-charts";
import {
  DropDownListPlugin,
  ChangeEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { Pivot_Data } from "./data-source";
import { extend, enableRipple } from "@syncfusion/ej2-base";
import { setTimeout } from "timers";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(ChartPlugin);

let measure: string = "In Stock";
let engineModule: PivotEngine;
let chart: Chart;

/* tslint:disable */
function onChartLoad() {
  let pivotGridObj = (<any>document.getElementById("pivotview_chart"))
    .ej2_instances[0];
  if (!(document.getElementById("chart") as any).ej2_instances) {
    engineModule = extend(
      {},
      pivotGridObj.engineModule,
      undefined,
      true
    ) as PivotEngine;
  }
  if (engineModule) {
    let valuesContent: IGridValues = engineModule.valueContent;
    let data: IGridValues = [];
    for (let cCnt: number = 0; cCnt < valuesContent.length; cCnt++) {
      if (!valuesContent[cCnt][0].type) {
        data[cCnt] = valuesContent[cCnt];
      }
    }
    let chartSeries: any = undefined;
    for (let cCnt: number = 0; cCnt < 1; cCnt++) {
      if (data[cCnt]) {
        for (
          let rCnt: number = measure === "In Stock" ? 1 : 2;
          rCnt < Object.keys(data[cCnt]).length;
          rCnt++
        ) {
          if (
            data[cCnt][rCnt] &&
            !(engineModule.pivotValues[0][rCnt] as IAxisSet).type &&
            !data[cCnt][rCnt].type &&
            rCnt > 0
          ) {
            let colText: string = (engineModule.pivotValues[0][
              rCnt
            ] as IAxisSet).formattedText as string;
            if (!chartSeries) {
              chartSeries = [
                {
                  dataSource: data,
                  xName: cCnt + ".valueSort.levelName",
                  yName: rCnt + ".value",
                  type: "Column",
                  name: colText
                }
              ];
            } else {
              chartSeries.push({
                dataSource: data,
                xName: cCnt + ".valueSort.levelName",
                yName: rCnt + ".value",
                type: "Column",
                name: colText
              });
            }
            rCnt++;
          }
        }
      }
    }
    if (
      (document.getElementById("chart") as any).ej2_instances &&
      chart &&
      chart.element
    ) {
      chart.primaryYAxis = {
        title: measure
      };
      chart.primaryXAxis = {
        valueType: "Category",
        title: "Country",
        labelIntersectAction: "Rotate45"
      };
      chart.series = chartSeries;
      chart.refresh();
    } else {
      Chart.Inject(ColumnSeries, LineSeries, Legend, Tooltip, Category);
      chart = new Chart(
        {
          width: "100%",
          title: "Sales Analysis",
          legendSettings: {
            visible: true
          },
          tooltip: {
            enable: true
          },
          primaryYAxis: {
            title: measure
          },
          primaryXAxis: {
            valueType: "Category",
            title: "Country",
            labelIntersectAction: "Rotate45"
          },
          series: chartSeries,
          load: (args: any) => {
            let selectedTheme: string = location.hash.split("/")[1];
            selectedTheme = selectedTheme ? selectedTheme : "Material";
            args.chart.theme = <ChartTheme>(selectedTheme
              .charAt(0)
              .toUpperCase() + selectedTheme.slice(1));
          }
        },
        "#chart"
      );
    }
  }
}

export default Vue.extend({
  data: () => {
    return {
      dataSource: {
        enableSorting: true,
        columns: [
          { name: "Year" },
          { name: "Order_Source", caption: "Order Source" }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        valueSortSettings: { headerDelimiter: " - " },
        data: Pivot_Data,
        expandAll: false,
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" }
        ],
        filters: []
      },
      width: "100%",
      gridSettings: { columnWidth: 120 },
      height: 300,
      ddlDataSource: ["In Stock", "Units Sold"]
    };
  },
  methods: {
    ddlDataBound: function(args: any) {
      let pivotGridObj = (<any>document.getElementById("pivotview_chart"))
        .ej2_instances[0];
      if (pivotGridObj.isAdaptive) {
        (<any>document.querySelector(".control-section")).style.overflow =
          "auto";
      }
    },
    ddlOnChange: function(args: ChangeEventArgs) {
      measure = args.value.toString();
      onChartLoad();
    },
    dataBound: (args: any): void => {
      if (!(document.getElementById("chart") as any).ej2_instances) {
        onChartLoad();
        setTimeout(() => {
          chart.refresh();
        }, 1000);
      }
    }
  }
});
</script>

<style>
#ddldiv {
  margin-top: -446px;
}

.e-bigger #ddldiv {
  margin-top: -452px;
}

@media only screen and (max-width: 400px) {
  #ddldiv {
    margin-top: -230px !important;
  }
}
</style>