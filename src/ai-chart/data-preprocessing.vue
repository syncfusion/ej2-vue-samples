<template>
  <div class="control-pane">
    <div class="control-section">
      <div id="chart-container">
        <ejs-chart
          id="ai-chart"
          ref="chartInstance"
          :title="title"
          :subTitle="subTitle"
          :chartArea="chartArea"
          :primaryXAxis="primaryXAxis"
          :primaryYAxis="primaryYAxis"
          :legendSettings="legendSettings"
          :tooltip="tooltip"
          :theme='theme'
          height="520px"
        >
          <e-series-collection>
            <e-series
              :dataSource="chartData"
              xName="time"
              yName="visitors"
              name="Visitors"
              :type="seriesType"
              :pointColorMapping="seriesType === 'MultiColoredLine' ? 'color' : ''"
              :marker="markerSettings"
              :emptyPointSettings="emptyPointSettings"
              width="2"
              fill="#00BDAE"
            />
          </e-series-collection>
        </ejs-chart>
      </div>

      <div
        id="chartSpinner"
        class="chart-spinner-overlay"
        :class="{ visible: isLoading }"
      >
        <div class="loader"></div>
      </div>

      <ejs-button
        id="chart-action-button"
        cssClass="chart-action-button"
        :isPrimary="true"
        :disabled="isLoading"
        iconCss="e-icons e-ai-chat"
        title="AI Clean (fill missing values and resolve outliers)"
        @click="processChartData"
      />
    </div>

    <div id="action-description">
      <p>
        This sample demonstrates AI-powered data cleaning and preprocessing
        for an e-commerce website's hourly traffic data. Click the
        <strong>AI Clean</strong> button to automatically fill missing values
        and resolve outliers with the help of the AI assist service.
      </p>
    </div>

    <div id="description">
      <p>
        The chart visualises hourly visitor counts for a single day. Several
        hourly slots are intentionally left as <code>null</code> in the
        original data so that the AI can impute them. The
        <strong>AI Clean</strong> action sends the dataset to the AI
        service, which returns a cleaned version that fills the gaps and
        smooths outliers. Originally missing slots are highlighted in
        <code>#D84227</code> so they remain visually distinguishable from
        real, observed values.
      </p>
      <p>
        <strong>Injecting Module</strong>
      </p>
      <p>
        To render a <code>MultiColoredLine</code> series, register the
        <code>MultiColoredLineSeries</code>,
        <code>LineSeries</code>, <code>DateTime</code>, and
        <code>Legend</code> in the component's
        <code>providers</code> array. The colour of each point is
        driven by a <code>pointColorMapping</code> field, so missing
        values can be drawn in a distinct colour without a second series.
      </p>
    </div>
  </div>
</template>

<script>
import {
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  LineSeries,
  MultiColoredLineSeries,
  DateTime,
  Legend,
  Tooltip
} from "@syncfusion/ej2-vue-charts";

import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { serverAIRequest } from "../common/ai-service";
import { loadChartTheme } from "../chart/theme-color";
let theme = loadChartTheme();

const NORMAL_COLOR = "#00BDAE";
const IMPUTED_COLOR = "#D84227";

export default {
  name: "AIDataPreprocessing",

  components: {
    "ejs-chart": ChartComponent,
    "e-series-collection": SeriesCollectionDirective,
    "e-series": SeriesDirective,
    "ejs-button": ButtonComponent
  },

  provide: {
    chart: [
      LineSeries,
      MultiColoredLineSeries,
      DateTime,
      Legend,
      Tooltip
    ]
  },

  data() {
    return {
      isLoading: false,
      theme: theme,
      title: "E-Commerce Website Traffic Data",
      subTitle:
        "AI-powered data cleaning and preprocessing for tracking hourly website visitors",

      chartArea: { border: { width: 0 } },

      primaryXAxis: {
        valueType: "DateTime",
        minimum: new Date(2024, 6, 1, 0, 0, 0),
        maximum: new Date(2024, 6, 1, 23, 0, 0),
        labelFormat: "h a",
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 }
      },

      primaryYAxis: {
        minimum: 140,
        maximum: 320,
        interval: 30,
        title: "Visitors"
      },

      legendSettings: { visible: true, position: "Top" },

      tooltip: {
        enable: true
      },

      emptyPointSettings: { mode: "Gap" },

      // Initially render as Line so nulls create real visible gaps.
      seriesType: "Line",

      markerSettings: {
        visible: false
      },

      originalList: [
        { time: new Date(2024, 6, 1, 0,  0, 0), visitors: 150 },
        { time: new Date(2024, 6, 1, 1,  0, 0), visitors: 160 },
        { time: new Date(2024, 6, 1, 2,  0, 0), visitors: 155 },
        { time: new Date(2024, 6, 1, 3,  0, 0), visitors: null },
        { time: new Date(2024, 6, 1, 4,  0, 0), visitors: 170 },
        { time: new Date(2024, 6, 1, 5,  0, 0), visitors: 175 },
        { time: new Date(2024, 6, 1, 6,  0, 0), visitors: 145 },
        { time: new Date(2024, 6, 1, 7,  0, 0), visitors: 180 },
        { time: new Date(2024, 6, 1, 8,  0, 0), visitors: null },
        { time: new Date(2024, 6, 1, 9,  0, 0), visitors: 185 },
        { time: new Date(2024, 6, 1, 10, 0, 0), visitors: 200 },
        { time: new Date(2024, 6, 1, 11, 0, 0), visitors: null },
        { time: new Date(2024, 6, 1, 12, 0, 0), visitors: 220 },
        { time: new Date(2024, 6, 1, 13, 0, 0), visitors: 230 },
        { time: new Date(2024, 6, 1, 14, 0, 0), visitors: null },
        { time: new Date(2024, 6, 1, 15, 0, 0), visitors: 250 },
        { time: new Date(2024, 6, 1, 16, 0, 0), visitors: 260 },
        { time: new Date(2024, 6, 1, 17, 0, 0), visitors: 270 },
        { time: new Date(2024, 6, 1, 18, 0, 0), visitors: null },
        { time: new Date(2024, 6, 1, 19, 0, 0), visitors: 280 },
        { time: new Date(2024, 6, 1, 20, 0, 0), visitors: 250 },
        { time: new Date(2024, 6, 1, 21, 0, 0), visitors: 290 },
        { time: new Date(2024, 6, 1, 22, 0, 0), visitors: 300 },
        { time: new Date(2024, 6, 1, 23, 0, 0), visitors: null }
      ],

      chartData: []
    };
  },

  mounted() {
    this.resetChartData();
  },

  methods: {
    /**
     * Initial chart:
     * - Preserves null values.
     * - Adds a `color` field (used later by MultiColoredLine).
     */
    resetChartData() {
      this.chartData = this.originalList.map((p) => ({
        time: new Date(p.time.getTime()),
        visitors: p.visitors,
        color: NORMAL_COLOR
      }));
      this.seriesType = "Line";
    },

    getChartInstance() {
      const ref = this.$refs.chartInstance;
      if (!ref) return null;
      if (Array.isArray(ref.ej2Instances)) return ref.ej2Instances[0];
      return ref.ej2Instances || ref;
    },

    formatDate(date) {
      const pad = (v) => String(v).padStart(2, "0");
      return [
        date.getFullYear(),
        pad(date.getMonth() + 1),
        pad(date.getDate()),
        pad(date.getHours()),
        pad(date.getMinutes()),
        pad(date.getSeconds())
      ].join("-");
    },

    generatePrompt(data) {
      const header =
        "Clean the following e-commerce website traffic data, " +
        "resolve outliers and fill missing values:\n";
      const rows = data
        .map((p) => {
          const v = p.visitors === null || p.visitors === undefined ? "null" : p.visitors;
          return `${this.formatDate(p.time)}: ${v}`;
        })
        .join("\n");
      const footer = [
        "",
        `Return exactly ${data.length} rows.`,
        "Return one row for every input timestamp.",
        "Keep the timestamps in the same order as the input.",
        "Use yyyy-MM-dd-HH-mm-ss:Value format.",
        "Do not omit any timestamp.",
        "Do not add markdown, headings, comments or explanations."
      ].join("\n");
      return header + rows + footer;
    },

    extractResponseText(aiResponse) {
      if (typeof aiResponse === "string") return aiResponse;
      if (!aiResponse || typeof aiResponse !== "object") return "";
      return aiResponse.response || aiResponse.content || aiResponse.text || "";
    },

    parseCleanedData(responseText) {
      if (typeof responseText !== "string" || !responseText.trim()) return null;

      const timestampMap = new Map(
        this.originalList.map((p) => [this.formatDate(p.time), p.time])
      );
      const parsedMap = new Map();

      const rowPattern =
        /^(\d{4})-(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})\s*:\s*(-?\d+(?:\.\d+)?)$/;

      const lines = responseText
        .replace(/```[a-zA-Z]*\s*/g, "")
        .replace(/```/g, "")
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter(Boolean);

      for (const line of lines) {
        const m = line.match(rowPattern);
        if (!m) continue;
        const ts = `${m[1]}-${m[2]}-${m[3]}-${m[4]}-${m[5]}-${m[6]}`;
        const originalDate = timestampMap.get(ts);
        const v = Number(m[7]);
        if (!originalDate || !Number.isFinite(v)) continue;
        parsedMap.set(ts, { time: new Date(originalDate.getTime()), visitors: v });
      }

      if (parsedMap.size !== this.originalList.length) {
        console.warn(
          `Expected ${this.originalList.length} cleaned rows, received ${parsedMap.size}.`
        );
        return null;
      }

      return this.originalList.map((p) => parsedMap.get(this.formatDate(p.time)));
    },

    /**
     * For MultiColoredLine, color the segment end-point orange if either
     * the current point or the next point was originally null.
     */
    applyImputedSegmentColors(cleanedData) {
      return cleanedData.map((point, index) => {
        const currentWasNull = this.originalList[index]?.visitors == null;
        const nextWasNull    = this.originalList[index + 1]?.visitors == null;
        return {
          ...point,
          time: new Date(point.time.getTime()),
          color: currentWasNull || nextWasNull ? IMPUTED_COLOR : NORMAL_COLOR
        };
      });
    },

    refreshChart() {
      const chart = this.getChartInstance();
      if (chart) chart.refresh();
    },

    async processChartData() {
      if (this.isLoading) return;
      const chart = this.getChartInstance();
      if (!chart) {
        console.error("Syncfusion Chart instance was not found.");
        return;
      }

      this.isLoading = true;

      try {
        const prompt = this.generatePrompt(this.originalList);

        const aiResponse = await serverAIRequest({
          messages: [
            {
              role: "system",
              content: [
                "You are a time-series data cleaning assistant.",
                "Fill all missing visitor values and resolve obvious outliers.",
                `Return exactly ${this.originalList.length} rows.`,
                "Preserve every input timestamp and its order.",
                "Return only yyyy-MM-dd-HH-mm-ss:Value rows.",
                "Do not return markdown or explanations."
              ].join(" ")
            },
            { role: "user", content: prompt }
          ]
        });

        const responseText = this.extractResponseText(aiResponse);
        const parsedData = this.parseCleanedData(responseText);
        if (!parsedData) {
          console.error(
            "The AI response did not contain one valid value for every timestamp.",
            responseText
          );
          return;
        }

        const coloredData = this.applyImputedSegmentColors(parsedData);

        // 1) Switch series type to MultiColoredLine so point colors drive segments.
        this.seriesType = "MultiColoredLine";

        // 2) Replace data with a brand-new array so Syncfusion re-renders.
        this.chartData = coloredData;

        await this.$nextTick();

        // 3) Make sure the underlying EJ2 series also sees the new data/type.
        if (chart.series && chart.series[0]) {
          chart.series[0].type = "MultiColoredLine";
          chart.series[0].pointColorMapping = "color";
          chart.series[0].setData(coloredData, false);
          chart.series[0].yName = "visitors";
          chart.series[0].xName = "time";
        }

        chart.refresh();
      } catch (err) {
        console.error("AI data preprocessing failed:", err);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.control-section {
  position: relative;
  min-height: 520px;
}

#chart-container {
  position: relative;
  width: 100%;
}

.chart-action-button {
  position: absolute !important;
  top: 10px;
  right: 14px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 40px;
  z-index: 30;
}

.chart-spinner-overlay {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: none;
  place-content: center;
  background: rgba(255, 255, 255, 0.55);
}

.chart-spinner-overlay.visible {
  display: grid;
}

.loader {
  width: 36px;
  height: 36px;
  border: 4px solid #d5d5d5;
  border-top-color: #4f46dc;
  border-radius: 50%;
  animation: chart-spin 0.8s linear infinite;
}

@keyframes chart-spin {
  to { transform: rotate(360deg); }
}

#action-description,
#description {
  margin-top: 16px;
}
</style>
