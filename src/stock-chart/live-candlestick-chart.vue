<template>
  <div class="control-section">
    <div class="local-stock-page">
      <div class="app-header">
        <div>
          <h1 class="app-title">Real-Time Candlestick Chart</h1>
          <span class="app-subtitle">
            Syncfusion EJ2 StockChart &middot;
            Simulated one-minute OHLCV data streaming
          </span>
        </div>
        <span
          id="connection-status"
          class="connection-status connecting"
          role="status"
          aria-live="polite"
        >
          Initializing local data
        </span>
      </div>

      <div
        class="info-panel"
        aria-label="Current candlestick OHLCV values"
      >
        <div class="info-cell">
          <span class="info-label">Open</span>
          <span
            id="open-value"
            class="info-value"
            aria-label="Current candle open value"
          >&mdash;</span>
        </div>

        <div class="info-cell">
          <span class="info-label">High</span>
          <span
            id="high-value"
            class="info-value"
            aria-label="Current candle high value"
          >&mdash;</span>
        </div>

        <div class="info-cell">
          <span class="info-label">Low</span>
          <span
            id="low-value"
            class="info-value"
            aria-label="Current candle low value"
          >&mdash;</span>
        </div>

        <div class="info-cell">
          <span class="info-label">Close</span>
          <span
            id="close-value"
            class="info-value"
            aria-label="Current candle close value"
          >&mdash;</span>
        </div>

        <div class="info-cell">
          <span class="info-label">Volume</span>
          <span
            id="volume-value"
            class="info-value"
            aria-label="Current candle volume value"
          >&mdash;</span>
        </div>
      </div>

      <div class="chart-shell">
        <ejs-stockchart
          ref="stockChart"
          id="liveCandlestickChart"
          :primaryXAxis="primaryXAxis"
          :primaryYAxis="primaryYAxis"
          :chartArea="chartArea"
          :crosshair="crosshair"
          :tooltip="tooltip"
          :title="title"
          :seriesType="seriesType"
          :indicatorType="indicatorType"
          :trendlineType="trendlineType"
          :periods="periods"
          :enableCustomRange="enableCustomRange"
          :load="load"
          :loaded="loaded"
          :theme="theme"
        >
          <e-stockchart-series-collection>
            <e-stockchart-series
              :dataSource="seriesData"
              type="Candle"
              xName="x"
              open="open"
              high="high"
              low="low"
              close="close"
              volume="volume"
              name="Local dynamic data"
              bullFillColor="#90EE90"
              bearFillColor="#FF7F7F"
              :enableSolidCandles="true"
              :border="border"
              :animation="animation"
              :lastValueLabel="lastValueLabel"
            ></e-stockchart-series>
          </e-stockchart-series-collection>
        </ejs-stockchart>

        <div class="status-row" aria-live="polite">
          <span class="info-label">Last candle status</span>
          <span id="candle-status">Initializing data stream</span>
        </div>
      </div>
    </div>

    <div id="action-description">
      <p>
        This
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.syncfusion.com/vue-components/vue-stock-chart"
          aria-label="Vue Stock Chart with simulated real-time local data"
        >
          Vue Stock Chart
        </a>
        example demonstrates a
        <strong>real-time candlestick chart</strong> driven by continuously
        updated local data. The chart starts with 120 simulated one-minute
        OHLCV candles and then dynamically updates the active candle or
        appends a new candle using <code>series.setData()</code> and
        <code>series.addPoint()</code>.
      </p>
    </div>

    <div id="description">
      <p>
        In this example, the chart uses a plain in-memory array as its data
        source, so no network request is required. A timer simulates a
        real-time stock data stream by generating frequent price updates for
        one-minute OHLCV candles.
      </p>

      <p>Each generated record is processed in one of the following ways:</p>

      <ul>
        <li>
          When the generated record has the
          <strong>same timestamp</strong> as the latest candle, the existing
          candle is updated using
          <code>series.setData(candle, 0)</code>. Animation is disabled for
          this operation because updates occur frequently.
        </li>
        <li>
          When the generated record has a
          <strong>newer timestamp</strong>, a new one-minute candlestick is
          appended using
          <code>series.addPoint(candle, 100)</code> with a short animation.
        </li>
      </ul>

      <p>
        The open, high, low, close, and volume values shown above the chart
        represent the latest simulated candle. The values are refreshed
        whenever the local data stream updates the active candle or adds a
        new one.
      </p>

      <p>
        You can replace the simulated data returned by the initial data
        generator with data from an API, WebSocket, or another local data
        source. The same update logic can be used to build real-time stock
        market visualizations, financial dashboards, and live trading
        charts.
      </p>

      <br />

      <p style="font-weight: 500">
        <b>Injecting Module</b>
      </p>

      <p>
        The Stock Chart component features are segregated into individual
        feature-wise modules. To use the date-time axis and candlestick
        series, inject the <code>DateTime</code> and
        <code>CandleSeries</code> modules using
        <code>provide: { stockChart: [DateTime, CandleSeries] }</code>.
      </p>

      <p>
        To display the latest data value on the chart axis, inject the
        <code>LastValueLabel</code> module. To enable the export menu, inject
        the <code>Export</code> module.
      </p>

      <p>
        More information about configuring the Stock Chart component is
        available in the
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ej2.syncfusion.com/vue/documentation/stock-chart/getting-started"
          aria-label="Navigate to the Vue Stock Chart getting started documentation"
        >
          Stock Chart documentation
        </a>.
      </p>
    </div>
  </div>
</template>

<style scoped>
.local-stock-page {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.local-stock-page .app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 2px;
  gap: 12px;
  flex-wrap: wrap;
}

.local-stock-page .app-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
}

.local-stock-page .app-subtitle {
  display: block;
  margin-top: 2px;
  font-size: 12px;
  line-height: 1.5;
}

.local-stock-page .connection-status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 12px;
  border-radius: 14px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.local-stock-page .connection-status.connecting {
  color: #92400e;
}

.local-stock-page .connection-status.error {
  color: #991b1b;
}

.local-stock-page .info-panel {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  padding: 16px 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.local-stock-page .info-cell {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.local-stock-page .info-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.local-stock-page .info-value {
  overflow: hidden;
  font-size: 18px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.local-stock-page .chart-shell {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.local-stock-page .status-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 2px;
  font-size: 12px;
  flex-wrap: wrap;
}

@media (max-width: 720px) {
  .local-stock-page .app-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .local-stock-page .info-panel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 12px 16px;
  }

  .local-stock-page .info-value {
    font-size: 16px;
  }
}

@media (max-width: 420px) {
  .local-stock-page .info-panel {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
import {
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
  DateTime,
  Export,
  CandleSeries,
  LastValueLabel
} from "@syncfusion/ej2-vue-charts";
import { loadStockChartTheme } from "./theme-color";

const ONE_MINUTE_MS = 60 * 1000;
const UPDATE_INTERVAL_MS = 100;
const UPDATES_PER_CANDLE = 10;
const UPDATE_ANIMATION_DURATION = 0;
const ADD_ANIMATION_DURATION = 100;
const PRICE_MOVEMENT_MULTIPLIER = 2;
const INITIAL_CANDLE_COUNT = 120;
const INITIAL_PRICE = 375;

const ELEMENT_IDS = {
  stockChart: "liveCandlestickChart",
  connectionStatus: "connection-status",
  candleStatus: "candle-status",
  openValue: "open-value",
  highValue: "high-value",
  lowValue: "low-value",
  closeValue: "close-value",
  volumeValue: "volume-value"
};

function setElementValue(elementId, value) {
  const element = document.getElementById(elementId);

  if (element) {
    element.textContent = value;
  }
}

function updateConnectionStatus(message, statusClass) {
  const element = document.getElementById(ELEMENT_IDS.connectionStatus);

  if (!element) {
    return;
  }

  element.textContent = message;
  element.className = "connection-status " + statusClass;
}

function formatPrice(value) {
  if (!isFinite(value)) {
    return "—";
  }

  return Number(value).toFixed(2);
}

function formatVolume(value) {
  if (!isFinite(value)) {
    return "—";
  }

  return Number(value).toFixed(4);
}

function updateMarketValues(candle, status) {
  if (!candle) {
    return;
  }

  setElementValue(ELEMENT_IDS.openValue, formatPrice(candle.open));
  setElementValue(ELEMENT_IDS.highValue, formatPrice(candle.high));
  setElementValue(ELEMENT_IDS.lowValue, formatPrice(candle.low));
  setElementValue(ELEMENT_IDS.closeValue, formatPrice(candle.close));
  setElementValue(ELEMENT_IDS.volumeValue, formatVolume(candle.volume));
  setElementValue(ELEMENT_IDS.candleStatus, status);
}

/**
 * Round a number to four decimal places.
 */
function correctFloat(value) {
  return Number(value.toFixed(4));
}

/**
 * Return a random number between the supplied minimum and maximum.
 */
function randomBetween(minimum, maximum) {
  return minimum + Math.random() * (maximum - minimum);
}

/**
 * Return the timestamp representing the start of the current minute.
 */
function getCurrentMinute() {
  return Math.floor(Date.now() / ONE_MINUTE_MS) * ONE_MINUTE_MS;
}

/**
 * Build a single historical OHLCV candle.
 */
function createHistoricalCandle(timestamp, openingPrice) {
  const movement = randomBetween(-1.5, 1.5);
  const close = correctFloat(Math.max(1, openingPrice + movement));
  const high = correctFloat(
    Math.max(openingPrice, close) + randomBetween(0.05, 0.7)
  );
  const low = correctFloat(
    Math.max(1, Math.min(openingPrice, close) - randomBetween(0.05, 0.7))
  );

  return {
    x: new Date(timestamp),
    open: correctFloat(openingPrice),
    high: high,
    low: low,
    close: close,
    volume: correctFloat(randomBetween(1, 30))
  };
}

/**
 * Build an updated version of the current in-progress candle.
 */
function createUpdatedCandle(currentCandle) {
  const movement = correctFloat(
    (Math.random() - 0.5) * PRICE_MOVEMENT_MULTIPLIER
  );
  const newClose = correctFloat(
    Math.max(1, currentCandle.close + movement)
  );

  return {
    x: currentCandle.x,
    open: currentCandle.open,
    high: correctFloat(Math.max(currentCandle.high, newClose)),
    low: correctFloat(Math.min(currentCandle.low, newClose)),
    close: newClose,
    volume: correctFloat(currentCandle.volume + randomBetween(0.01, 0.3))
  };
}

/**
 * Build the next one-minute candle, opening at the previous close.
 */
function createNewCandle(previousCandle) {
  const openingPrice = previousCandle.close;

  return {
    x: new Date(previousCandle.x.getTime() + ONE_MINUTE_MS),
    open: openingPrice,
    high: openingPrice,
    low: openingPrice,
    close: openingPrice,
    volume: correctFloat(randomBetween(0.1, 1))
  };
}

/**
 * Create the initial historical candle collection.
 */
function createInitialLocalData() {
  const currentMinute = getCurrentMinute();
  const startingTime =
    currentMinute - (INITIAL_CANDLE_COUNT - 1) * ONE_MINUTE_MS;
  const data = [];
  let price = INITIAL_PRICE;

  for (let index = 0; index < INITIAL_CANDLE_COUNT; index++) {
    const timestamp = startingTime + index * ONE_MINUTE_MS;
    const candle = createHistoricalCandle(timestamp, price);

    data.push(candle);
    price = candle.close;
  }

  return data;
}

export default {
  name: "LiveCandlestickChart",

  components: {
    "ejs-stockchart": StockChartComponent,
    "e-stockchart-series-collection": StockChartSeriesCollectionDirective,
    "e-stockchart-series": StockChartSeriesDirective
  },

  provide: {
    stockChart: [
      DateTime,
      Export,
      CandleSeries,
      LastValueLabel
    ]
  },

  data() {
    return {
      seriesData: createInitialLocalData(),
      updateIndex: 0,
      updateTimer: null,
      updateInstanceId: 0,
      isPageClosing: false,
      theme: loadStockChartTheme(),
      title: "Real-Time Stock Market Data",
      primaryXAxis: {
        valueType: "DateTime",
        intervalType: "Auto",
        labelFormat: "HH:mm",
        lineStyle: {
          color: "transparent"
        },
        crosshairTooltip: {
          enable: false
        }
      },
      primaryYAxis: {
        labelPosition: "Outside",
        lineStyle: {
          color: "transparent"
        },
        majorTickLines: {
          color: "transparent",
          height: 0
        },
        crosshairTooltip: {
          enable: false
        }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      crosshair: {
        enable: false
      },
      tooltip: {
        enable: false
      },
      seriesType: [],
      indicatorType: [],
      trendlineType: [],
      periods: [
        {
          text: "15m",
          interval: 15,
          intervalType: "Minutes"
        },
        {
          text: "1h",
          interval: 1,
          intervalType: "Hours",
          selected: true
        },
        {
          text: "All"
        }
      ],
      enableCustomRange: false,
      border: {
        width: 1
      },
      animation: {
        enable: false
      },
      lastValueLabel: {
        enable: true,
        background: "#FF7F7F",
        dashArray: "3,2",
        lineWidth: 0.5,
        font: {
          color: "#ffffff",
          size: "11px"
        }
      }
    };
  },

  mounted() {
    this.isPageClosing = false;

    updateConnectionStatus("Local data ready", "connected");

    const lastCandle = this.seriesData.length
      ? this.seriesData[this.seriesData.length - 1]
      : null;

    updateMarketValues(
      lastCandle,
      this.seriesData.length
        ? "Local data loaded"
        : "No local data available"
    );

    window.addEventListener("beforeunload", this.handleBeforeUnload);
  },

  beforeUnmount() {
    /*
     * Stop the timer before Vue destroys the StockChart wrapper and
     * Syncfusion clears the underlying Chart series references.
     */
    this.disposeSample();
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  },

  methods: {
    /**
     * Return the underlying EJ2 StockChart instance.
     */
    getStockChartInstance() {
      const stockChartReference = this.$refs && this.$refs.stockChart;

      if (!stockChartReference) {
        return null;
      }

      const instances = stockChartReference.ej2Instances;

      if (Array.isArray(instances)) {
        return instances.length ? instances[0] : null;
      }

      return instances || stockChartReference;
    },

    /**
     * Return whether the StockChart and its inner Chart remain mounted.
     */
    isChartAvailable() {
      if (this.isPageClosing) {
        return false;
      }

      const chartElement = document.getElementById(ELEMENT_IDS.stockChart);

      if (!chartElement || !chartElement.isConnected) {
        return false;
      }

      const stockChart = this.getStockChartInstance();

      if (!stockChart || stockChart.isDestroyed) {
        return false;
      }

      const innerChart = stockChart.chart;

      return Boolean(
        innerChart &&
        !innerChart.isDestroyed &&
        innerChart.element &&
        innerChart.element.isConnected
      );
    },

    /**
     * Resolve a Candle series whose parent Chart is still active.
     */
    getCandleSeries() {
      if (!this.isChartAvailable()) {
        return null;
      }

      try {
        const stockChart = this.getStockChartInstance();
        const innerChart = stockChart.chart;
        const stockSeries =
          stockChart.series && stockChart.series.length
            ? stockChart.series[0]
            : null;

        if (
          stockSeries &&
          stockSeries.chart &&
          !stockSeries.chart.isDestroyed &&
          typeof stockSeries.setData === "function" &&
          typeof stockSeries.addPoint === "function"
        ) {
          return stockSeries;
        }

        const innerSeries =
          innerChart.series && innerChart.series.length
            ? innerChart.series[0]
            : null;

        if (
          innerSeries &&
          innerSeries.chart &&
          !innerSeries.chart.isDestroyed &&
          typeof innerSeries.setData === "function" &&
          typeof innerSeries.addPoint === "function"
        ) {
          return innerSeries;
        }
      } catch (error) {
        return null;
      }

      return null;
    },

    /**
     * Replace the current Candle point.
     */
    updateCurrentPoint(candle) {
      const series = this.getCandleSeries();

      if (!series) {
        return false;
      }

      try {
        series.setData(candle, UPDATE_ANIMATION_DURATION);
        return true;
      } catch (error) {
        /*
         * The StockChart may have entered its destruction cycle after
         * getCandleSeries() completed but before setData() was called.
         */
        this.stopDynamicUpdates();
        return false;
      }
    },

    /**
     * Append a new Candle point.
     */
    addNewPoint(candle) {
      const series = this.getCandleSeries();

      if (!series) {
        return false;
      }

      try {
        series.addPoint(candle, ADD_ANIMATION_DURATION);
        return true;
      } catch (error) {
        /*
         * The StockChart may have entered its destruction cycle after
         * getCandleSeries() completed but before addPoint() was called.
         */
        this.stopDynamicUpdates();
        return false;
      }
    },

    /**
     * Update the current candle or append a new candle.
     */
    processDynamicUpdate(instanceId) {
      if (
        instanceId !== this.updateInstanceId ||
        this.isPageClosing
      ) {
        return;
      }

      if (!this.isChartAvailable()) {
        this.stopDynamicUpdates();
        return;
      }

      if (!this.seriesData.length || !this.getCandleSeries()) {
        return;
      }

      const lastIndex = this.seriesData.length - 1;
      const currentCandle = this.seriesData[lastIndex];
      const shouldAddNewCandle =
        this.updateIndex > 0 &&
        this.updateIndex % UPDATES_PER_CANDLE === 0;

      if (shouldAddNewCandle) {
        const newCandle = createNewCandle(currentCandle);

        /*
         * Update the EJ2 series before mutating the local array. If the
         * chart is being destroyed, the local state remains unchanged.
         */
        if (!this.addNewPoint(newCandle)) {
          return;
        }

        this.seriesData.push(newCandle);
        updateMarketValues(
          newCandle,
          "New simulated one-minute candle"
        );
      } else {
        const updatedCandle = createUpdatedCandle(currentCandle);

        if (!this.updateCurrentPoint(updatedCandle)) {
          return;
        }

        this.seriesData[lastIndex] = updatedCandle;
        updateMarketValues(
          updatedCandle,
          "Current candle updated"
        );
      }

      this.updateIndex++;
    },

    /**
     * Start a new update interval for the active chart instance.
     */
    startDynamicUpdates() {
      this.stopDynamicUpdates();

      if (this.isPageClosing || !this.getCandleSeries()) {
        return;
      }

      const instanceId = ++this.updateInstanceId;

      this.updateTimer = window.setInterval(() => {
        this.processDynamicUpdate(instanceId);
      }, UPDATE_INTERVAL_MS);
    },

    /**
     * Stop the current interval and invalidate its queued callbacks.
     */
    stopDynamicUpdates() {
      this.updateInstanceId++;

      if (this.updateTimer !== null) {
        window.clearInterval(this.updateTimer);
        this.updateTimer = null;
      }
    },

    /**
     * Apply the selected Syncfusion theme.
     */
    load(args) {
      loadStockChartTheme(args);
    },

    /**
     * Start dynamic updates after the StockChart has rendered its series.
     *
     * loaded can fire again when the chart is refreshed. Starting through
     * this method clears the previous interval before creating a new one.
     */
    loaded() {
      if (this.isPageClosing || !this.isChartAvailable()) {
        return;
      }

      this.startDynamicUpdates();
    },

    /**
     * Dispose resources owned by this Vue component.
     *
     * Vue and the Syncfusion Vue wrapper remain responsible for destroying
     * the StockChart component itself.
     */
    disposeSample() {
      if (this.isPageClosing) {
        this.stopDynamicUpdates();
        return;
      }

      this.isPageClosing = true;
      this.stopDynamicUpdates();
      this.updateIndex = 0;
    },

    /**
     * Handle browser unload with the same centralized cleanup.
     */
    handleBeforeUnload() {
      this.disposeSample();
    }
  }
};
</script>

