<template>
  <div class="gc-generated-chart-container">
    <div class="gc-generated-chart-header"><strong>Chart preview</strong><div class="gc-chart-actions">
      <select v-model="exportType" class="gc-chart-export-select" aria-label="Export chart" @change="exportChart">
        <option value="" disabled>Export</option><option value="PNG">PNG</option><option value="JPEG">JPEG</option>
        <option value="SVG">SVG</option><option value="PDF">PDF</option>
      </select><button class="gc-chart-print-button" type="button" @click="printChart">Print</button>
    </div></div>
    <div class="gc-chart-status" role="status" aria-live="polite">{{ status }}</div>
    <div class="gc-tool-chart-wrapper">
      <div class="gc-tool-chart-body">
      <ejs-chart v-if="!isCircular" ref="chart" width="100%" height="100%" :title="config.title" :theme="chartTheme"
        :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :tooltip="tooltip" :legendSettings="legend" @loaded="onChartLoaded">
        <e-series-collection><e-series v-for="(series, index) in config.series" :key="index" :type="mapType(series.type)"
          :dataSource="series.dataSource" xName="xvalue" yName="yvalue" :name="series.name" :marker="series.marker"
          :fill="series.fill" :width="series.width == null ? 2 : series.width"></e-series></e-series-collection>
      </ejs-chart>
      <ejs-accumulationchart v-else ref="accumulation" width="100%" height="100%" :title="config.title" :theme="chartTheme"
        :tooltip="tooltip" :legendSettings="legend" @loaded="onChartLoaded">
        <e-accumulation-series-collection><e-accumulation-series v-for="(series, index) in config.series" :key="index"
          :type="mapAccumulationType(series.type)" :dataSource="series.dataSource" xName="xvalue" yName="yvalue"
          :name="series.name" :innerRadius="series.innerRadius || (series.type === 'doughnut' ? '70%' : '0%')"
          :radius="series.radius || '80%'" :dataLabel="series.dataLabel"></e-accumulation-series></e-accumulation-series-collection>
      </ejs-accumulationchart>
      </div>
    </div>
  </div>
</template>
<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, AccumulationChartComponent,
  AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, LineSeries, AreaSeries, SplineSeries,
  ColumnSeries, BarSeries, Category, DateTime, DateTimeCategory, Logarithmic, Legend, Tooltip, Crosshair, Zoom,
  Selection, Highlight, ChartAnnotation, DataLabel, RangeAreaSeries, RangeColumnSeries, Trendlines, ErrorBar,
  PieSeries, FunnelSeries, PyramidSeries, AccumulationLegend, AccumulationTooltip, Export } from "@syncfusion/ej2-vue-charts";
import { loadChartTheme } from "../chart/theme-color";
export default {
  name: "AIChartTool",
  components: { "ejs-chart": ChartComponent, "e-series-collection": SeriesCollectionDirective, "e-series": SeriesDirective,
    "ejs-accumulationchart": AccumulationChartComponent, "e-accumulation-series-collection": AccumulationSeriesCollectionDirective,
    "e-accumulation-series": AccumulationSeriesDirective },
  provide: { chart: [LineSeries, AreaSeries, SplineSeries, ColumnSeries, BarSeries, RangeAreaSeries, RangeColumnSeries,
    Category, DateTime, DateTimeCategory, Logarithmic, Legend, Tooltip, Crosshair, Zoom, Selection, Highlight,
    ChartAnnotation, DataLabel, Trendlines, ErrorBar, Export], accumulationchart: [PieSeries, FunnelSeries, PyramidSeries,
    AccumulationLegend, AccumulationTooltip, Export] },
  props: { chartConfig: { type: Object, required: true } },
  data() { return { exportType: "", status: "", chartTheme: loadChartTheme(), themeObserver: null, isChartLoaded: false }; },
  mounted() {
    this.themeObserver = new MutationObserver(() => {
      this.updateChartTheme();
    });

    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    this.themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
  },
  beforeUnmount() {
    this.themeObserver?.disconnect();
  },
  computed: {
    config() { return { ...this.chartConfig, title: this.chartConfig.title || "Generated Chart", series: this.chartConfig.series || [] }; },
    isCircular() { return this.config.chartType === "circular"; },
    primaryXAxis() { const axis = this.config.xAxis?.[0] || {}; return { ...axis, valueType: this.mapAxis(axis.type || "category") }; },
    primaryYAxis() { const axis = this.config.yAxis?.[0] || {}; return { ...axis, valueType: this.mapAxis(axis.type || "numerical") }; },
    tooltip() { return { ...(this.config.tooltip || {}), enable: this.config.tooltip?.enable !== false }; },
    legend() { return { ...(this.config.legendSettings || {}), visible: this.config.showLegend !== false }; }
  },
  methods: {
    mapAxis(type) { return ({ category: "Category", numerical: "Double", datetime: "DateTime", datetimecategory: "DateTimeCategory", logarithmic: "Logarithmic" })[type] || "Category"; },
    mapType(type) { return ({ line: "Line", column: "Column", bar: "Bar", area: "Area", spline: "Spline", rangearea: "RangeArea", rangecolumn: "RangeColumn" })[type] || "Column"; },
    mapAccumulationType(type) { return type === "funnel" ? "Funnel" : type === "pyramid" ? "Pyramid" : "Pie"; },
    activeChart() { const ref = this.isCircular ? this.$refs.accumulation : this.$refs.chart; if (!ref) { return null; } if (Array.isArray(ref.ej2Instances)) { return ref.ej2Instances[0]; } return ref?.ej2Instances || ref; },
    onChartLoaded() {
      this.isChartLoaded = true;
    },
    updateChartTheme() {
      const updatedTheme = loadChartTheme();
      if (updatedTheme === this.chartTheme) {
        return;
      }
      this.chartTheme = updatedTheme;
      if (!this.isChartLoaded) {
        return;
      }
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          const chart = this.activeChart();
          if (chart && !chart.isDestroyed && chart.element && typeof chart.refresh === "function") {
            this.isChartLoaded = false;
            chart.theme = updatedTheme;
            chart.refresh();
          }
        });
      });
    },
    exportChart() { const type = this.exportType; this.exportType = ""; const chart = this.activeChart(); if (type && chart?.exportModule) chart.exportModule.export(type, "Generated-Chart"); },
    printChart() { const chart = this.activeChart(); if (chart?.print) chart.print(); }
  }
};
</script>
<style scoped>
.gc-generated-chart-container {
  width: 100%;
  margin: 12px 0;
  overflow: hidden;
  color: var(--gc-text-primary, #242424);
  background: var(--gc-bg-primary, #ffffff);
  border: 1px solid var(--gc-border-secondary, #dfe3e8);
  border-radius: 10px;
}
.gc-generated-chart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  color: var(--gc-text-primary, #242424);
  background: var(--gc-bg-secondary, #f5f6f8);
  border-bottom: 1px solid var(--gc-border-secondary, #dfe3e8);
}
.gc-generated-chart-header strong { color: var(--gc-text-primary, #242424); }
.gc-chart-actions { display: flex; gap: 8px; }
.gc-chart-export-select,
.gc-chart-print-button {
  height: 36px;
  padding: 0 12px;
  color: var(--gc-text-primary, #242424);
  background: var(--gc-bg-primary, #ffffff);
  border: 1px solid var(--gc-border-secondary, #d1d5db);
  border-radius: 6px;
  cursor: pointer;
}
.gc-chart-export-select { color-scheme: light dark; }
.gc-chart-export-select option { color: var(--gc-text-primary, #242424); background: var(--gc-bg-primary, #ffffff); }
.gc-chart-export-select:hover,
.gc-chart-print-button:hover { background: var(--gc-hover-bg, #f5f5f5); }
.gc-chart-status { min-height: 20px; padding: 4px 16px 0; color: var(--gc-text-secondary, #616161); background: var(--gc-bg-primary, #ffffff); }
.gc-tool-chart-wrapper {
  width: 100%;
  min-width: 0;
  padding: 12px;
  background: var(--gc-chart-bg, #ffffff);
}
.gc-tool-chart-body {
  position: relative;
  width: 100%;
  min-width: 0;
  min-height: 396px;
  padding: 0;
  overflow: hidden;
  background: var(--gc-chart-bg, #ffffff);
}
.gc-tool-chart-body :deep(.e-chart),
.gc-tool-chart-body :deep(.e-accumulationchart),
.gc-tool-chart-body :deep(.e-chart > div),
.gc-tool-chart-body :deep(.e-accumulationchart > div) {
  width: 100% !important;
  height: 100% !important;
  min-width: 0;
}
:global([class*="-dark"]) .gc-chart-export-select,
:global([class*="dark-"]) .gc-chart-export-select,
:global([class*="highcontrast"]) .gc-chart-export-select,
:global(.e-dark-mode) .gc-chart-export-select,
:global(.e-dark) .gc-chart-export-select,
:global(.dark) .gc-chart-export-select { color-scheme: dark; }
</style>