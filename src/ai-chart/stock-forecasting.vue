<template>
    <div class="control-section">
        <div class="left-panel">
            <!-- Symbol selector (DropDownButton) -->
            <div class="symbol-row">
                <ejs-dropdownbutton id="stock-selector" cssClass="e-primary" :items="symbols"
                    :content="stockSelectorContent" :iconCss="stockSelectorIconCss" :select="onSymbolSelect">
                </ejs-dropdownbutton>
            </div>

            <div class="button-and-chart-controls">
                <div class="left-buttons">
                    <div class="e-btn-group">
                        <ejs-button id="btn3m" :content="'3 Month'" :cssClass="rangeBtnCss(3)"
                            @click="filterDataByMonths(3)"></ejs-button>
                        <ejs-button id="btn6m" :content="'6 Month'" :cssClass="rangeBtnCss(6)"
                            @click="filterDataByMonths(6)"></ejs-button>
                        <ejs-button id="btn12m" :content="'1 Year'" :cssClass="rangeBtnCss(12)"
                            @click="filterDataByMonths(12)"></ejs-button>
                    </div>
                </div>

                <div class="chart-controls">
                    <!-- Series type dropdown (Candle / Line / HiloOpenClose) -->
                    <ejs-dropdownlist id="series-type" cssClass="ddl-range" :dataSource="seriesOptions"
                        :placeholder="'Select Chart Type'" :value="selectedSeriesType" :change="onSeriesTypeChange"
                        :width="'150px'"></ejs-dropdownlist>
                    <!-- AI Forecast button -->
                    <ejs-button id="forecastBtn" isPrimary="true"
                        class="chart-action-button"
                        @click="processForecast"
                        iconCss="e-icons e-ai-chat"></ejs-button>
                </div>
            </div>

            <div style="position:relative">
                <div id="stock-chart" align="center">
                    <ejs-chart id="stockForecastChart" ref="chartInstance" :title="title" :subTitle="subTitle"
                        :chartArea="chartArea" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
                        :legendSettings="legendSettings" :tooltip="tooltip" :height="height" :theme='theme'>
                        <e-series-collection>
                            <e-series :dataSource="chartData" :type="selectedSeriesType" xName="date" yName="close"
                                high="high" low="low" open="open" close="close" name="Price"></e-series>
                        </e-series-collection>
                    </ejs-chart>
                </div>

                <div id="chartSpinner" class="chart-spinner-overlay">
                    <div class="loader"></div>
                </div>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>
            This sample demonstrates AI-powered stock price forecasting for a
            configurable symbol (MSFT, GOOG, AMZN, or TSLA) and time range
            (3 / 6 / 12 months). Pick a symbol and series type, then click
            <strong>AI Forecast</strong> to ask the AI service to project the
            next 35 trading days of OHLC data.
        </p>
    </div>
    <div id="description">
        <p>
            The chart visualises daily OHLC (open / high / low / close) data
            fetched from the Syncfusion CDN. The <strong>AI Forecast</strong>
            action sends the most recent 10 trading days to the AI service,
            which returns a delta payload describing the projected candlesticks
            and the strip line that separates observed data from the forecast.
        </p>
        <p>
            The series can be toggled between
            <strong>Candle</strong>, <strong>Line</strong>, and
            <strong>HiloOpenClose</strong> rendering, and the chart re-renders
            in place without losing its scroll / zoom state.
        </p>
    </div>
</template>

<style>
    #control-container {
        padding: 0px !important;
    }

    .para {
        padding-top: 5px;
    }

    .stock-info {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        margin-left: 10px;
    }

    /* Wrapper for the symbol selector (DropDownButton). */
    .symbol-row {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .e-logo-msft::before,
    .e-logo-goog::before,
    .e-logo-amzn::before,
    .e-logo-tsla::before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin: 2px 2px 2px 2px;
        vertical-align: middle;
        position: relative;
    }

    .e-logo-msft::before {
        background-image: url("https://cdn.syncfusion.com/blazor/images/chart/microsoft.png");
    }

    .e-logo-goog::before {
        background-image: url("https://cdn.syncfusion.com/blazor/images/chart/google.png");
    }

    .e-logo-amzn::before {
        background-image: url("https://cdn.syncfusion.com/blazor/images/chart/amazon.png");
    }

    .e-logo-tsla::before {
        background-image: url("https://cdn.syncfusion.com/blazor/images/chart/tesla.png");
    }

    .left-panel {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .chart-controls {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .button-and-chart-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
    }

    /*
     * Local override: keep the AI Forecast button inside the flex row
     * next to the chart-type DropDownList instead of being pulled to the
     * top-right corner of the page (which is what happens if the global
     * `.chart-action-button` rule from ai-data-preprocessing.vue is
     * applied with `position: absolute !important`).
     */
    .chart-action-button {
        position: static !important;
        width: 40px;
        height: 30px;
        min-width: 40px;
        padding: 0;
        flex: 0 0 auto;
    }

    .chart-action-button .e-btn-icon {
        color: white;
        font-size: large;
        line-height: 1;
    }

    .chart-spinner-overlay {
        position: absolute;
        inset: 0;
        display: none;
        place-content: center;
        background: rgba(0, 0, 0, 0.08);
        z-index: 20;
    }

    .chart-spinner-overlay.visible {
        display: grid;
    }

    .loader {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 4px solid #ccc;
        border-top-color: #0078d4;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>

<script>
import {
    ChartComponent,
    SeriesDirective,
    SeriesCollectionDirective,
    DateTime,
    Legend,
    Tooltip,
    StripLine,
    CandleSeries,
    LineSeries,
    HiloOpenCloseSeries
} from "@syncfusion/ej2-vue-charts";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { serverAIRequest } from "../common/ai-service";
import { loadChartTheme } from "../chart/theme-color";
let theme = loadChartTheme();

export default {
    name: "AIStockForecasting",
    components: {
        "ejs-chart": ChartComponent,
        "e-series": SeriesDirective,
        "e-series-collection": SeriesCollectionDirective,
        "ejs-button": ButtonComponent,
        "ejs-dropdownbutton": DropDownButtonComponent,
        "ejs-dropdownlist": DropDownListComponent
    },
    data() {
        return {
            // Working chart dataset. Starts empty; populated by loadChartData().
            chartData: [],
            baseDataLength: 0,
            theme: theme,
            // Header / axis config (mirrors the React `useMemo`/state defaults)
            title: "Stock Forecasting",
            subTitle: "AI-powered candlestick/OHLC forecasting (35 days)",
            chartArea: {
                border: { width: 0 }
            },
            primaryXAxis: {
                valueType: "DateTime",
                edgeLabelPlacement: "Shift",
                labelFormat: "MMM d",
                majorGridLines: { width: 0 },
                stripLines: []
            },
            primaryYAxis: {
                title: "Price (USD)",
                labelFormat: "n0",
                rangePadding: "None"
            },
            legendSettings: { visible: false },
            tooltip: { enable: true, shared: true, header: "" },
            height: "520",

            // Picker state
            symbols: [
                { text: "MSFT", iconCss: "e-logo-msft", id: "MSFT" },
                { text: "GOOG", iconCss: "e-logo-goog", id: "GOOG" },
                { text: "AMZN", iconCss: "e-logo-amzn", id: "AMZN" },
                { text: "TSLA", iconCss: "e-logo-tsla", id: "TSLA" }
            ],
            selectedSymbol: "MSFT",
            selectedRange: 3,
            selectedSeriesType: "Candle",
            seriesOptions: ["Candle", "Line", "HiloOpenClose"]
        };
    },
    computed: {
        stockSelectorContent() {
            return this.selectedSymbol;
        },
        stockSelectorIconCss() {
            return this.getSelectedIconClass();
        }
    },
    provide: {
        chart: [
            CandleSeries,
            LineSeries,
            HiloOpenCloseSeries,
            DateTime,
            Legend,
            Tooltip,
            StripLine
        ]
    },
    methods: {
        // ==== helpers ====
        showSpinnerById(id) {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add("visible");
            }
        },
        hideSpinnerById(id) {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove("visible");
            }
        },
        getSelectedIconClass() {
            switch (this.selectedSymbol) {
                case "MSFT":
                    return "e-logo-msft";
                case "GOOG":
                    return "e-logo-goog";
                case "AMZN":
                    return "e-logo-amzn";
                case "TSLA":
                    return "e-logo-tsla";
                default:
                    return "default-icon";
            }
        },
        rangeBtnCss(months) {
            return this.selectedRange === months ? "e-outline" : "";
        },
        generatePrompt(lastN) {
            const lastDate =
                lastN.length && lastN[lastN.length - 1]
                    ? lastN[lastN.length - 1].date
                    : new Date();

            const startDate = new Date(lastDate);
            startDate.setDate(startDate.getDate() + 1);

            let prompt =
                "Generate 35 realistic financial data points suitable for candlestick, OHLC, and line charts.\n" +
                "Use the following row format (values comma-separated): yyyy-MM-dd: High, Low, Open, Close\n" +
                "Start from " +
                startDate.toISOString().slice(0, 10) +
                " and increment by 1 day for each row.\n";

            for (const item of lastN) {
                const iso = new Date(item.date).toISOString().slice(0, 10);
                prompt +=
                    iso +
                    ": " +
                    item.high +
                    ", " +
                    item.low +
                    ", " +
                    item.open +
                    ", " +
                    item.close +
                    "\n";
            }

            prompt +=
                "\n### STRICT OUTPUT REQUIREMENTS ###\n" +
                "- Generate EXACTLY 35 rows.\n" +
                "- Each row: yyyy-MM-dd: High, Low, Open, Close (comma-separated numbers).\n" +
                "- Mix upward/downward trends; no missing/duplicate dates; no extra text.\n" +
                "- Values must be realistic and follow stock behavior.\n";

            return prompt;
        },
        filterByMonths(all, months) {
            if (!all.length) {
                return [];
            }
            const latest = all.reduce((a, b) => {
                return new Date(a.date) > new Date(b.date) ? a : b;
            });
            const cutoff = new Date(latest.date);
            cutoff.setMonth(cutoff.getMonth() - months + 1);
            return all
                .filter((p) => new Date(p.date) >= cutoff)
                .sort((a, b) => new Date(a.date) - new Date(b.date));
        },
        getChart() {
            const chartRef = this.$refs.chartInstance;
            if (!chartRef) {
                return null;
            }
            if (Array.isArray(chartRef.ej2Instances)) {
                return chartRef.ej2Instances[0];
            }
            // Defensive: in case `ej2Instances` is already the chart instance.
            return chartRef.ej2Instances || chartRef;
        },
        showForecastStripLine(current) {
            if (!current || !current.length || current.length <= this.baseDataLength) {
                const chart = this.getChart();
                if (chart && chart.primaryXAxis) {
                    chart.primaryXAxis.stripLines = [];
                    chart.refresh();
                }
                return;
            }
            const start = current[this.baseDataLength].date;
            const end = current[current.length - 1].date;
            const chart = this.getChart();
            if (chart && chart.primaryXAxis) {
                chart.primaryXAxis.stripLines = [
                    {
                        start,
                        end,
                        visible: true,
                        color: "#E0E0E0",
                        opacity: 0.5,
                        zIndex: "Behind"
                    }
                ];
                chart.refresh();
            }
        },

        // ==== UI events ====
        onSymbolSelect(args) {
            const id =
                (args.item && (args.item.id || args.item.text)) || "MSFT";
            this.selectedSymbol = id;
            this.loadChartData(id, this.selectedRange);
        },
        onSeriesTypeChange(e) {
            const newType = (e && e.value) || this.selectedSeriesType;
            this.selectedSeriesType = newType;
            const chart = this.getChart();
            if (chart && chart.series && chart.series[0]) {
                chart.series[0].type = newType;
                chart.refresh();
            }
        },
        filterDataByMonths(months) {
            this.selectedRange = months;
            this.loadChartData(this.selectedSymbol, months);
        },

        // ==== Data loading ====
        async loadChartData(symbol, months) {
            try {
                const response = await fetch(
                    "https://cdn.syncfusion.com/blazor/data/chart/" +
                    symbol.toLowerCase() +
                    "-data.json"
                );
                const raw = await response.json();
                const all = (raw || []).map((item) => ({
                    date: new Date(item.Date || item.date),
                    high: Number(item.High || item.high),
                    low: Number(item.Low || item.low),
                    open: Number(item.Open || item.open),
                    close: Number(item.Close || item.close)
                }));

                const filtered = this.filterByMonths(all, months);
                this.chartData = filtered;
                this.baseDataLength = filtered.length;

                const chart = this.getChart();
                if (chart) {
                    chart.series[0].dataSource = filtered;
                    chart.series[0].type = this.selectedSeriesType;
                    if (chart.primaryXAxis) {
                        chart.primaryXAxis.stripLines = [];
                    }
                    chart.refresh();
                }
            } catch (e) {
                console.error("Failed to load chart data", e);
                this.chartData = [];
                this.baseDataLength = 0;
                const chart = this.getChart();
                if (chart && chart.series && chart.series[0]) {
                    chart.series[0].dataSource = [];
                    chart.refresh();
                }
            }
        },

        // ==== AI Forecast ====
        // Parses "yyyy-MM-dd: High, Low, Open, Close" rows returned by the
        // AI service into OHLC chart points. The AI may separate values with
        // commas or colons and may prefix lines with bullets or "High:/Low:"
        // style labels, so the date is anchored and the first four numbers
        // on the line are taken as high, low, open, close.
        parseForecastData(responseText) {
            if (!responseText || typeof responseText !== "string") {
                return null;
            }
            const datePattern = /(\d{4})-(\d{2})-(\d{2})/;
            const numberPattern = /-?\d+(?:\.\d+)?/g;
            const parsed = [];
            responseText
                .replace(/```/g, "")
                .split("\n")
                .map((line) => line.trim())
                .forEach((line) => {
                    const dateMatch = line.match(datePattern);
                    if (!dateMatch) {
                        return;
                    }
                    // Numbers that appear after the date on the same line.
                    const rest = line.slice(dateMatch.index + dateMatch[0].length);
                    const numbers = (rest.match(numberPattern) || []).map(Number);
                    if (numbers.length < 4) {
                        return;
                    }
                    const [y, m, d] = dateMatch.slice(1).map(Number);
                    const [high, low, open, close] = numbers.slice(0, 4);
                    parsed.push({
                        date: new Date(y, m - 1, d),
                        high, low, open, close
                    });
                });

            if (!parsed.length) {
                return null;
            }
            return parsed;
        },
        async processForecast() {
            this.showSpinnerById("chartSpinner");
            try {
                const beforeLen = this.chartData.length;
                const last10 = this.chartData.slice(
                    Math.max(this.chartData.length - 10, 0)
                );

                const prompt = this.generatePrompt(last10);

                const chart = this.getChart();
                if (!chart) {
                    console.error("Chart instance not found.");
                    return;
                }

                const responseText = await serverAIRequest({
                    messages: [
                        {
                            role: "system",
                            content: "You are a financial forecasting assistant. You generate realistic future stock OHLC data points. Respond with ONLY the data rows in the exact format requested, with no explanations."
                        },
                        { role: "user", content: prompt }
                    ]
                });

                let forecastRows = this.parseForecastData(responseText);

                if (forecastRows && forecastRows.length) {
                    // Guard against the AI echoing the historical rows that
                    // were included in the prompt: keep only rows dated
                    // after the last observed point.
                    const lastObserved = beforeLen
                        ? new Date(this.chartData[beforeLen - 1].date)
                        : null;
                    forecastRows = forecastRows.filter((p) =>
                        lastObserved ? new Date(p.date) > lastObserved : true
                    );
                }

                if (forecastRows && forecastRows.length) {
                    // Append the forecast after the existing observed data.
                    const newData = this.chartData.concat(forecastRows);
                    this.baseDataLength = beforeLen;

                    this.chartData = newData;
                    chart.series[0].dataSource = newData;
                    chart.refresh();

                    this.showForecastStripLine(newData);
                } else {
                    console.warn("AI response could not be parsed as forecast data.");
                }
            } catch (e) {
                console.error("processForecast:", e);
            } finally {
                this.hideSpinnerById("chartSpinner");
            }
        }
    },
    mounted() {
        // Initial data load (matches React useEffect on mount)
        this.loadChartData(this.selectedSymbol, this.selectedRange);
    }
};
</script>
