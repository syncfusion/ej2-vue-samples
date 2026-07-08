<template>
  <div class="chartContainer">
    <ejs-chart
      :primaryXAxis="primaryXAxis"
      :primaryYAxis="primaryYAxis"
      :chartArea="chartArea"
      :series="series"
      :tooltip="tooltip"
      :legendSettings="legendSettings"
      width="75%"
      title="Annual Growth GDP in France"
    />
  </div>
</template>

<script>
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  LineSeries,
  Category,
  Legend,
  Tooltip,
  DataLabel,
  Selection,
  Highlight
} from "@syncfusion/ej2-vue-charts";

export default {
  name: "GDPChart",
  components: {
    "ejs-chart": ChartComponent,
    "e-series-collection": SeriesCollectionDirective,
    "e-series": SeriesDirective
  },
  provide: {
    chart: [StackingColumnSeries, LineSeries, Category, Legend, Tooltip, DataLabel, Selection, Highlight]
  },
  props: {
    privateConsumptionData:    { type: Array, default: () => [] },
    governmentConsumptionData: { type: Array, default: () => [] },
    investmentData:            { type: Array, default: () => [] },
    foreignTradeData:          { type: Array, default: () => [] },
    gdpData:                   { type: Array, default: () => [] }
  },
  data() {
    return {
      primaryXAxis: {
        title: "Years",
        valueType: "Category",
        labelIntersectAction: "Rotate45",
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 }
      },
      primaryYAxis: {
        title: "Growth (in Billion)",
        minimum: -3,
        maximum: 3,
        interval: 1,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelFormat: "{value}B"
      },
      chartArea: { border: { width: 0 } },
      tooltip: { enable: true, enableHighlight: true },
      legendSettings: { enableHighlight: true }
    };
  },
  computed: {
    series() {
      return [
        {
          type: "StackingColumn",
          dataSource: this.privateConsumptionData,
          xName: "x", yName: "y",
          name: "Private Consumption"
        },
        {
          type: "StackingColumn",
          dataSource: this.governmentConsumptionData,
          xName: "x", yName: "y",
          name: "Government Consumption"
        },
        {
          type: "StackingColumn",
          dataSource: this.investmentData,
          xName: "x", yName: "y",
          name: "Investment"
        },
        {
          type: "StackingColumn",
          dataSource: this.foreignTradeData,
          xName: "x", yName: "y",
          name: "Net Foreign Trade"
        },
        {
          type: "Line",
          dataSource: this.gdpData,
          xName: "x", yName: "y",
          name: "GDP",
          width: 2,
          marker: { visible: true, width: 7, height: 7 }
        }
      ];
    }
  }
};
</script>

<style scoped>
.chartContainer {
  width: max-content;
  max-width: 100%;
  overflow-x: auto;
}
</style>