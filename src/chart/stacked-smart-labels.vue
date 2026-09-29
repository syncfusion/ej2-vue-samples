<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display:block"
        :theme="theme"
        align="center"
        id="chartcontainer"
        :title="title"
        :subTitle="subTitle"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :width="width"
        :tooltip="tooltip"
        :legendSettings="legendSettings"
        :textRender="textRender"
      >
        <e-series-collection>
          <e-series
            :dataSource="chartData"
            xName="x"
            yName="samsung"
            type="StackingColumn"
            name="Samsung"
            :fill="seriesColors[0]"
            :columnWidth="columnWidth"
            :marker="{ dataLabel: createSmartLabelSettings(seriesColors[0]) }"
          ></e-series>
          <e-series
            :dataSource="chartData"
            xName="x"
            yName="apple"
            type="StackingColumn"
            name="Apple"
            :fill="seriesColors[1]"
            :columnWidth="columnWidth"
            :marker="{ dataLabel: createSmartLabelSettings(seriesColors[1]) }"
          ></e-series>
          <e-series
            :dataSource="chartData"
            xName="x"
            yName="xiaomi"
            type="StackingColumn"
            name="Xiaomi"
            :fill="seriesColors[2]"
            :columnWidth="columnWidth"
            :marker="{ dataLabel: createSmartLabelSettings(seriesColors[2]) }"
          ></e-series>
          <e-series
            :dataSource="chartData"
            xName="x"
            yName="oppo"
            type="StackingColumn"
            name="OPPO"
            :fill="seriesColors[3]"
            :columnWidth="columnWidth"
            :marker="{ dataLabel: createSmartLabelSettings(seriesColors[3]) }"
          ></e-series>
          <e-series
            :dataSource="chartData"
            xName="x"
            yName="vivo"
            type="StackingColumn"
            name="vivo"
            :fill="seriesColors[4]"
            :columnWidth="columnWidth"
            :marker="{ dataLabel: createSmartLabelSettings(seriesColors[4]) }"
          ></e-series>
          <e-series
            :dataSource="chartData"
            xName="x"
            yName="others"
            type="StackingColumn"
            name="Others"
            :fill="seriesColors[5]"
            :columnWidth="columnWidth"
            :marker="{ dataLabel: createSmartLabelSettings(seriesColors[5]) }"
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>

    <div id="action-description">
      <p>
        This Vue stacked column chart example demonstrates smart labels that automatically reposition when there is
        insufficient space inside a stacked segment.
      </p>
    </div>

    <div id="description">
      <p>
        In this example, you can see how to render and configure stacked column series with smart labels. When a
        stacked segment does not have enough space to display a data label, the label is moved outside the segment and
        connected using a callout line.
      </p>
      <p>
        <code>Smart Labels</code> provide intelligent label placement with the following features:
      </p>
      <ul>
        <li>Automatic repositioning of labels when space is limited</li>
        <li>Connector lines linking relocated labels to their corresponding segments</li>
        <li>Series-based label and connector styling</li>
        <li>Customizable label formatting and positioning options</li>
      </ul>
      <p>
        <code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover over a point or tap on a
        point in touch-enabled devices.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use stacking column series with
        smart labels, we need to inject <code>StackingColumnSeries</code> and <code>DataLabel</code> modules using
        <code>provide: { chart: [StackingColumnSeries, Category, DataLabel, Tooltip, Legend, Highlight] }</code>
        method.
      </p>
      <p>
        More information on the stacked column series with smart labels can be found in this
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/data-labels/"
          aria-label="Navigate to the documentation for Smart Labels in Vue Chart component"
        >documentation section</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  StackingColumnSeries,
  Category,
  DataLabel,
  Tooltip,
  Legend,
  Highlight
} from "@syncfusion/ej2-vue-charts";

import { loadChartTheme } from "./theme-color";

let theme = loadChartTheme();
const SMALL_VALUE_THRESHOLD = 3;
const SERIES_COLORS = ["#6355C7", "#00AEE0", "#FFB400", "#4CAF50", "#E56590", "#9B59B6"];

function createSmartLabelSettings(seriesColor) {
  return {
    visible: true,
    position: "Top",
    format: "{value}M",
    labelIntersectAction: "RelocateHorizontally",
    font: { color: "#FFFFFF", fontWeight: "700", size: "12px", fontFamily: "Segoe UI" },
    margin: { left: 24, right: 24, top: 12, bottom: 12 },
    smartLabelSettings: {
      background: seriesColor,
      border: { color: seriesColor, width: 1.5 },
      connectorLineStyle: { color: seriesColor, width: 2 },
      pointerShape: "Arrow"
    },
    rx: 7,
    ry: 7
  };
}

export default {
  components: {
    "ejs-chart": ChartComponent,
    "e-series-collection": SeriesCollectionDirective,
    "e-series": SeriesDirective
  },
  data: function() {
    return {
      theme: theme,
      chartData: [
        { x: "Q1 2025", samsung: 72.3, apple: 56.2, xiaomi: 42.7, oppo: 7.4, vivo: 5.2, others: 70.7 },
        { x: "Q2 2025", samsung: 75.9, apple: 57.1, xiaomi: 43.9, oppo: 6.2, vivo: 3.9, others: 4.9 },
        { x: "Q3 2025", samsung: 80.1, apple: 60.3, xiaomi: 46.0, oppo: 4.8, vivo: 3.9, others: 78.9 },
        { x: "Q4 2025", samsung: 85.5, apple: 62.7, xiaomi: 48.9, oppo: 6.4, vivo: 5.8, others: 81.5 }
      ],
      seriesColors: SERIES_COLORS,
      columnWidth: 0.5,
      primaryXAxis: {
        valueType: "Category",
        visible: true,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 }
      },
      primaryYAxis: {
        visible: true,
        title: "Shipments (Millions of Units)",
        labelFormat: "{value}M",
        minimum: 0,
        maximum: 400,
        interval: 50,
        majorGridLines: { color: "#E2E8F0", width: 1 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 }
      },
      chartArea: {
        background: "transparent",
        border: { width: 0 }
      },
      width: Browser.isDevice ? "100%" : "75%",
      title: "Global Smartphone Shipments by Vendor (2025)",
      subTitle: "Smart labels automatically reposition small stacked-segment labels to avoid overlap.",
      legendSettings: { visible: true, position: "Bottom", enableHighlight: true },
      tooltip: {
        enable: true,
        shared: true,
        format: "${series.name}: <b>${point.y}</b>",
        header: "${point.x}"
      }
    };
  },
  provide: {
    chart: [StackingColumnSeries, Category, DataLabel, Tooltip, Legend, Highlight]
  },
  methods: {
    createSmartLabelSettings,
    hideTinyLabels(args) {
      if (!args.point || typeof args.point.y !== "number") {
        return;
      }
      if (args.point.y < SMALL_VALUE_THRESHOLD) {
        args.cancel = true;
      }
    },
    textRender(args) {
      this.hideTinyLabels(args);
    }
  }
};
</script>
