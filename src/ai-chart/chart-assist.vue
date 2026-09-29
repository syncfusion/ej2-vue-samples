<template>
  <div class="col-lg-12 control-section">
    <div class="generate-chart-aiassistview">
      <ejs-aiassistview
        v-if="showAssist"
        id="generateChartAIAssistView"
        ref="aiAssistViewRef"
        :enableStreaming="false"
        :promptSuggestions="suggestions"
        promptSuggestionsHeader="Suggested Prompts"
        :promptRequest="onPromptRequest"
        :toolbarSettings="toolbarSettings"
        bannerTemplate="bannerTemplate"
        @created="onAssistCreated"
      >
        <template #bannerTemplate>
          <div class="banner-content">
            <div class="e-icons e-assistview-icon"></div>
            <h2>AI-Powered Chart Creation and Editing</h2>
            <p>Generate chart code, create visual previews, and modify charts using natural language.</p>
          </div>
        </template>
        <template #chartToolTemplate>
          <div class="gc-chart-container"></div>
        </template>
        <template #codeToolTemplate>
          <div class="gc-code-tool-container"></div>
        </template>
        <template #changeSummaryToolTemplate>
          <div class="gc-change-summary-container"></div>
        </template>
      </ejs-aiassistview>

      <aside v-if="showHistory" class="gc-history-pane" aria-labelledby="gc-history-heading">
        <div class="gc-history-header">
          <h3 id="gc-history-heading">Chat History</h3>
          <button class="e-icons e-close-icon gc-history-close" type="button" title="Close"
            aria-label="Close chat history" @click="toggleHistory"></button>
        </div>
        <div class="gc-history-list">
          <div v-if="!histories.length" class="gc-history-empty">No chat history yet.</div>
          <div v-for="history in histories" :key="history.id" class="gc-history-item"
            :class="{ 'gc-history-active': currentHistoryId === history.id }" role="button" tabindex="0"
            :aria-label="'Open ' + history.title" @click="openHistory(history)"
            @keydown.enter.prevent="openHistory(history)" @keydown.space.prevent="openHistory(history)">
            <div class="gc-history-item-content">
              <span class="gc-history-title">{{ history.title }}</span>
              <span class="gc-history-date">{{ formatHistoryDate(history.updatedAt) }}</span>
            </div>
            <button class="e-icons e-assist-close gc-history-delete" type="button" title="Delete"
              :aria-label="'Delete ' + history.title" @click.stop="deleteHistory(history)"></button>
          </div>
        </div>
      </aside>
    </div>
  </div>

  <div id="action-description">
    <p>
      This sample demonstrates creating, modifying, exporting, and printing interactive charts from natural-language
      prompts inside the Syncfusion <strong>Vue AI AssistView</strong> component.
    </p>
  </div>
  <div id="description">
    <p>
      The <code>registerToolUI()</code> method registers a response-specific <code>chart-tool</code>. Each tool block
      mounts an isolated Vue chart component, so later prompts and history restoration do not replace earlier charts.
      Supported features include multiple series, zooming, crosshair, strip lines, annotations, selection,
      highlighting, data labels, error bars, trendlines, technical indicators, export, print, and theme adaptation.
    </p>
    <p>
      More information is available in the
      <a href="https://ej2.syncfusion.com/vue/documentation/ai-assistview/getting-started/" target="_blank"
        rel="noopener noreferrer" aria-label="Navigate to the Vue AI AssistView getting started documentation">
        documentation section
      </a>.
    </p>
  </div>
</template>

<script>
import { createApp } from "vue";
import { AIAssistViewComponent } from "@syncfusion/ej2-vue-interactive-chat";
import { serverAIRequest } from "../common/ai-service";
import aiChartTool from "./ai-chart-tool.vue";
import aiCodeTool from "./ai-code-tool.vue";
import aiChangeSummaryTool from "./ai-change-summary-tool.vue";

const PALETTE = [
  "#1089E9", "#08CDAA", "#F58400", "#9656FF", "#F9C200",
  "#F954A3", "#05BB3D", "#06B1E2", "#FF4E4E"
];
const CIRCULAR_TYPES = ["pie", "doughnut", "donut", "funnel", "pyramid"];
const HISTORY_STORAGE_KEY = "vue-ai-chart-history-sessions";
const SELECTED_HISTORY_STORAGE_KEY = "vue-ai-chart-selected-history-session";
const CHART_SYSTEM_PROMPT = [
  "You are an expert Syncfusion Vue Chart assistant.",
  "Return only one valid JSON object with exactly two blocks: one text block followed by one chart-tool block.",
  "Use this envelope:",
  '{"blocks":[{"blockType":"text","content":"Description"},{"blockType":"tool","toolName":"chart-tool","props":{"chartType":"cartesian|circular","title":"Title","showLegend":true,"tooltip":{"enable":true},"xAxis":[{"type":"category|numerical|datetime|datetimecategory|logarithmic","title":"X axis","stripLines":[]}],"yAxis":[{"type":"numerical|logarithmic","title":"Y axis","stripLines":[]}],"annotations":[],"indicators":[],"series":[{"type":"line|column|bar|area|spline|stepline|steparea|splinearea|multicoloredline|multicoloredarea|rangecolumn|rangearea|splinerangearea|hilo|hiloopenclose|candle|boxandwhisker|bubble|scatter|stackingcolumn|stackingcolumn100|stackingbar|stackingbar100|stackingarea|stackingarea100|stackingline|stackingline100|stackingsteparea|pareto|polar|radar|waterfall|histogram|pie|doughnut|funnel|pyramid","name":"Series","dataSource":[{"xvalue":"A","yvalue":10}]}]}}]}',
  "Use cartesian for axis-based charts and circular only for pie, doughnut, funnel, and pyramid.",
  "Every ordinary point must use xvalue and yvalue. Never use xField, yField, xName, or yName.",
  "Preserve high, low, open, close, volume, size, minimum, and maximum when required by a series.",
  "Preserve tooltip, legendSettings, chartArea, palettes, crosshair, zoomSettings, selectionMode, highlightMode,",
  "annotations, indicators, axis stripLines, marker, dataLabel, errorBar, trendlines, animation, opacity, and dashArray.",
  "Annotation content must be plain text. Never return HTML, template IDs, selectors, Vue code, or functions.",
  "For modifications, treat the supplied existing configuration as the source of truth, preserve every unrequested",
  "property and data point, and return the complete updated configuration."
].join("\n");

export default {
  name: "AIGenerateChart",
  components: { "ejs-aiassistview": AIAssistViewComponent },
  data() {
    return {
      suggestions: [
        "Visualize monthly profit trends over the last year",
        "Compare regional sales performance with a column chart",
        "Show the market share of top smartphone brands in a pie chart"
      ],
      restoredPrompts: [],
      showAssist: true,
      showHistory: false,
      histories: this.loadHistory(),
      currentHistoryId: null,
      currentSession: null,
      latestChartConfig: null,
      requestController: null,
      requestSequence: 0,
      mountedToolApps: new Map(),
      toolbarSettings: {
        items: [
          { iconCss: "e-icons e-edit-notes", align: "Right", tooltip: "Start new chat" },
          { iconCss: "e-icons e-menu", align: "Right", tooltip: "Chat History" }
        ],
        itemClicked: (args) => this.toolbarItemClicked(args)
      }
    };
  },
  created() {
    this.restoreSelectedSession();
    this.currentSession = this.createSession();
    this.currentHistoryId = null;
    this.latestChartConfig = null;
    this.restoredPrompts = [];
  },
  beforeUnmount() {
    this.requestSequence += 1;
    this.requestController?.abort();
    this.unmountToolApps();
    this.clearStoredHistory();
    this.currentSession = null;
    this.currentHistoryId = null;
    this.latestChartConfig = null;
    this.restoredPrompts = [];
  },
  methods: {
    createId(prefix) {
      return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    },
    createSession() {
      const now = new Date();
      return { id: this.createId("session"), title: "New Chart Session", createdAt: now, updatedAt: now, messages: [] };
    },
    clone(value) {
      return JSON.parse(JSON.stringify(value));
    },
    clearStoredHistory() {
      try {
        sessionStorage.removeItem(HISTORY_STORAGE_KEY);
        sessionStorage.removeItem(SELECTED_HISTORY_STORAGE_KEY);
        this.histories = [];
      } catch (error) {
        console.error("Unable to clear chart history:", error);
      }
    },
    loadHistory() {
      try {
        const value = JSON.parse(sessionStorage.getItem(HISTORY_STORAGE_KEY) || "[]");
        return Array.isArray(value) ? value : [];
      } catch (error) {
        console.error("Unable to load chart history:", error);
        return [];
      }
    },
    saveHistory() {
      try {
        sessionStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(this.histories));
      } catch (error) {
        console.error("Unable to save chart history:", error);
      }
    },
    loadSelectedHistoryId() {
      try {
        return sessionStorage.getItem(SELECTED_HISTORY_STORAGE_KEY);
      } catch (error) {
        console.error("Unable to load selected chart history:", error);
        return null;
      }
    },
    saveSelectedHistoryId(historyId) {
      try {
        if (historyId) {
          sessionStorage.setItem(SELECTED_HISTORY_STORAGE_KEY, historyId);
        } else {
          sessionStorage.removeItem(SELECTED_HISTORY_STORAGE_KEY);
        }
      } catch (error) {
        console.error("Unable to save selected chart history:", error);
      }
    },
    restoreSelectedSession() {
      const selectedHistoryId = this.loadSelectedHistoryId();
      const selectedHistory = this.histories.find((history) => history.id === selectedHistoryId);
      this.currentSession = selectedHistory ? this.clone(selectedHistory) : this.createSession();
      this.currentHistoryId = selectedHistory?.id || null;
      if (!selectedHistory) {
        this.restoredPrompts = [];
        this.latestChartConfig = null;
        return;
      }
      this.restoredPrompts = selectedHistory.messages.map((message) => ({
        prompt: message.prompt,
        blocks: this.clone(message.blocks)
      }));
      const latest = [...selectedHistory.messages].reverse().find((message) => message.chartConfig);
      this.latestChartConfig = latest?.chartConfig ? this.clone(latest.chartConfig) : null;
    },
    getAssistInstance() {
      const ref = this.$refs.aiAssistViewRef;
      return ref?.ej2Instances || ref || null;
    },
    async onAssistCreated() {
      await this.$nextTick();
      const instance = this.getAssistInstance();
      if (!instance || typeof instance.registerToolUI !== "function") {
        return;
      }
      instance.registerToolUI({
        toolName: "code-tool",
        template: "codeToolTemplate",
        handler: (container, args) => this.mountCodeTool(container, args)
      });
      instance.registerToolUI({
        toolName: "chart-tool",
        template: "chartToolTemplate",
        handler: (container, args) => this.mountChartTool(container, args)
      });
      instance.registerToolUI({
        toolName: "change-summary-tool",
        template: "changeSummaryToolTemplate",
        handler: (container, args) => this.mountChangeSummaryTool(container, args)
      });
      if (this.restoredPrompts.length) {
        instance.prompts = this.clone(this.restoredPrompts);
        instance.dataBind();
      }
    },
    getToolSource(args) {
      return args?.config?.props || args?.config || args?.props?.props || args?.props || args || {};
    },
    getToolHost(container, selector) {
      if (!container) {
        return null;
      }
      return container.matches?.(selector) ? container : container.querySelector?.(selector) || container;
    },
    mountToolApp(container, selector, component, props) {
      const toolHost = this.getToolHost(container, selector);
      if (!toolHost) {
        return null;
      }
      const existing = this.mountedToolApps.get(toolHost);
      if (existing) {
        try {
          existing.unmount();
        } catch (error) {
          console.error("Unable to unmount tool app:", error);
        }
        this.mountedToolApps.delete(toolHost);
      }
      toolHost.innerHTML = "";
      const host = document.createElement("div");
      host.className = "gc-dynamic-tool-host";
      toolHost.appendChild(host);
      const app = createApp(component, props);
      app.mount(host);
      this.mountedToolApps.set(toolHost, app);
      return app;
    },
    mountChartTool(container, args) {
      const source = this.getToolSource(args);
      const config = this.normalizeChartConfig(
        source?.ChartConfig || source?.chartConfig || source?.props?.ChartConfig || source?.props?.chartConfig || source?.props || source
      );
      if (!container || !config) {
        const toolHost = this.getToolHost(container, ".gc-chart-container");
        if (toolHost) {
          toolHost.innerHTML = '<div class="gc-tool-error">Unable to render the chart configuration.</div>';
        }
        return;
      }
      this.mountToolApp(container, ".gc-chart-container", aiChartTool, { chartConfig: this.clone(config) });
    },
    mountCodeTool(container, args) {
      const source = this.getToolSource(args);
      const views = Array.isArray(source?.views) ? source.views : [];
      if (!container || !views.length) {
        return;
      }
      this.mountToolApp(container, ".gc-code-tool-container", aiCodeTool, {
        config: this.clone({ views, activeView: source.activeView })
      });
    },
    mountChangeSummaryTool(container, args) {
      const source = this.getToolSource(args);
      const changes = Array.isArray(source?.changes) ? source.changes : [];
      if (!container || !changes.length) {
        return;
      }
      this.mountToolApp(container, ".gc-change-summary-container", aiChangeSummaryTool, { changes: this.clone(changes) });
    },
    unmountToolApps() {
      this.mountedToolApps.forEach((app) => {
        try {
          app.unmount();
        } catch (error) {
          console.error("Unable to unmount chart tool:", error);
        }
      });
      this.mountedToolApps.clear();
    },
    getResponseObject(response) {
      if (response && typeof response === "object" && Array.isArray(response.blocks)) {
        return response;
      }
      const raw = response?.response ?? response?.data ?? response?.result ?? response;
      if (raw && typeof raw === "object") {
        return raw;
      }
      if (typeof raw !== "string" || !raw.trim()) {
        return null;
      }
      const text = raw.replace(/^\uFEFF/, "").replace(/```(?:json)?/gi, "").replace(/```/g, "").trim();
      const start = text.indexOf("{");
      const end = text.lastIndexOf("}");
      if (start < 0 || end <= start) {
        return null;
      }
      try {
        return JSON.parse(text.slice(start, end + 1));
      } catch {
        return null;
      }
    },
    normalizeBlocks(value) {
      const blocks = Array.isArray(value?.blocks) ? value.blocks : [];
      const textBlock = blocks.find((block) => block?.blockType === "text" && String(block.content || "").trim());
      const toolBlock = blocks.find((block) => block?.blockType === "tool" && block?.toolName === "chart-tool");
      const config = this.normalizeChartConfig(toolBlock?.props);
      if (!textBlock || !config) {
        return null;
      }
      return {
        text: String(textBlock.content).trim(),
        config
      };
    },
    buildResponseBlocks(text, previous, config, prompt) {
      const blocks = [{ blockType: "text", content: text || this.getCreationMessage(config) }];
      const changes = this.compareChartConfigs(previous, config);
      if (previous && changes.length) {
        blocks.push({ blockType: "tool", toolName: "change-summary-tool", props: { changes: changes.map((change) => `${change.property}: ${change.previousValue} to ${change.updatedValue}`) } });
      }
      blocks.push({
        blockType: "tool",
        toolName: "code-tool",
        props: { activeView: previous ? "changes" : "complete", views: this.buildCodeViews(prompt, previous, config) }
      });
      blocks.push({ blockType: "tool", toolName: "chart-tool", props: config });
      return blocks;
    },
    getCreationMessage(config) {
      const points = config.series.reduce((count, series) => count + (series.dataSource?.length || 0), 0);
      return `Created "${config.title || "Generated Chart"}" with ${config.series.length} series and ${points} data points.`;
    },
    isCodeRequest(prompt) {
      return ["show code", "full code", "vue code", "complete code", "runnable code", "show configuration", "show config"]
        .some((keyword) => prompt.includes(keyword));
    },
    normalizeDataSource(value) {
      if (!Array.isArray(value)) {
        return [];
      }
      return value.reduce((points, point, index) => {
        const xvalue = point?.xvalue ?? point?.xValue ?? point?.x ?? point?.category ?? point?.label ?? index;
        const rawYValue = point?.yvalue ?? point?.yValue ?? point?.y ?? point?.value;
        const yvalue = typeof rawYValue === "number" ? rawYValue : Number(rawYValue);
        if (xvalue === undefined || xvalue === null || !Number.isFinite(yvalue)) {
          return points;
        }
        const normalized = { ...point, xvalue, yvalue };
        ["high", "low", "open", "close", "volume", "size", "minimum", "maximum"].forEach((field) => {
          const numberValue = Number(point?.[field]);
          if (Number.isFinite(numberValue)) {
            normalized[field] = numberValue;
          }
        });
        points.push(normalized);
        return points;
      }, []);
    },
    normalizeAxis(axis, fallbackTitle, fallbackType) {
      const source = axis || {};
      return {
        ...source,
        type: String(source.type || source.valueType || fallbackType).toLowerCase().replace(/[\s-]/g, ""),
        title: source.title || fallbackTitle,
        min: this.toFiniteNumber(source.min ?? source.minimum),
        max: this.toFiniteNumber(source.max ?? source.maximum),
        labelRotation: Number(source.labelRotation) || 0,
        stripLines: Array.isArray(source.stripLines) ? source.stripLines : []
      };
    },
    toFiniteNumber(value) {
      if (value === undefined || value === null || value === "") {
        return undefined;
      }
      const numberValue = Number(value);
      return Number.isFinite(numberValue) ? numberValue : undefined;
    },
    normalizeChartConfig(value) {
      const source = value?.props || value?.ChartConfig || value?.chartConfig || value;
      if (!source || typeof source !== "object") {
        return null;
      }
      let rawSeries = Array.isArray(source.series) ? source.series : [];
      if (!rawSeries.length && Array.isArray(source.dataSource || source.data)) {
        rawSeries = [{ type: source.type || source.chartType, name: source.name || "Series", dataSource: source.dataSource || source.data }];
      }
      const series = rawSeries.map((item, index) => ({
        ...item,
        type: String(item?.type || source.chartType || "column").toLowerCase().replace(/[\s-]/g, ""),
        name: item?.name || `Series ${index + 1}`,
        dataSource: this.normalizeDataSource(item?.dataSource || item?.data || item?.points),
        fill: item?.fill || PALETTE[index % PALETTE.length],
        high: item?.high || "high",
        low: item?.low || "low",
        open: item?.open || "open",
        close: item?.close || "close",
        volume: item?.volume || "volume",
        size: item?.size || "size",
        min: item?.min || "minimum",
        max: item?.max || "maximum"
      })).filter((item) => item.dataSource.length);
      if (!series.length) {
        return null;
      }
      const circular = String(source.chartType || "").toLowerCase() === "circular" ||
        series.some((item) => CIRCULAR_TYPES.includes(item.type));
      if (circular && series.some((item) => !CIRCULAR_TYPES.includes(item.type))) {
        return null;
      }
      const config = {
        ...source,
        chartType: circular ? "circular" : "cartesian",
        title: source.title || "Generated Chart",
        showLegend: source.showLegend !== false,
        tooltip: source.tooltip || { enable: source.enableTooltip !== false },
        legendSettings: source.legendSettings || {},
        chartArea: source.chartArea || { border: { width: 0.5 } },
        palettes: Array.isArray(source.palettes) ? source.palettes : undefined,
        annotations: Array.isArray(source.annotations) ? source.annotations.map((annotation) => ({
          ...annotation,
          content: String(annotation?.content || "Annotation").replace(/<[^>]*>/g, "")
        })) : [],
        indicators: circular || !Array.isArray(source.indicators) ? [] : source.indicators,
        series
      };
      if (!circular) {
        config.xAxis = [this.normalizeAxis(source.xAxis?.[0], source.xAxisTitle || "Categories", "category")];
        config.yAxis = [this.normalizeAxis(source.yAxis?.[0], source.yAxisTitle || "Values", "numerical")];
      } else {
        delete config.xAxis;
        delete config.yAxis;
        delete config.crosshair;
        delete config.zoomSettings;
      }
      return config;
    },
    buildModificationPrompt(prompt, config) {
      return [
        "Modify the existing chart configuration.",
        "Preserve every property, series, data point, axis, feature, and style not explicitly changed.",
        "Return the complete two-block JSON response required by the system prompt.",
        "CURRENT CONFIGURATION:",
        JSON.stringify(config, null, 2),
        "USER REQUEST:",
        prompt
      ].join("\n");
    },
    compareChartConfigs(previous, updated) {
      if (!previous || !updated) {
        return [];
      }
      const changes = [];
      ["title", "chartType", "showLegend", "tooltip", "crosshair", "zoomSettings", "selectionMode", "highlightMode",
        "annotations", "indicators", "xAxis", "yAxis", "chartArea", "palettes"].forEach((key) => {
        if (JSON.stringify(previous[key]) !== JSON.stringify(updated[key])) {
          changes.push({ property: key, previousValue: this.formatValue(previous[key]), updatedValue: this.formatValue(updated[key]) });
        }
      });
      updated.series.forEach((series, index) => {
        const oldSeries = previous.series.find((item) => item.name === series.name) || previous.series[index];
        if (!oldSeries) {
          changes.push({ property: `Series ${index + 1}`, previousValue: "not configured", updatedValue: series.name });
          return;
        }
        if (oldSeries.name !== series.name || oldSeries.type !== series.type) {
          changes.push({ property: `Series ${index + 1}`, previousValue: `${oldSeries.name} (${oldSeries.type})`, updatedValue: `${series.name} (${series.type})` });
        }
        if (JSON.stringify(oldSeries.dataSource) !== JSON.stringify(series.dataSource)) {
          changes.push({ property: `${series.name} data`, previousValue: this.formatValue(oldSeries.dataSource), updatedValue: this.formatValue(series.dataSource) });
        }
        ["fill", "width", "opacity", "dashArray", "marker", "dataLabel", "errorBar", "trendlines", "animation"].forEach((key) => {
          if (JSON.stringify(oldSeries[key]) !== JSON.stringify(series[key])) {
            changes.push({ property: `${series.name} ${key}`, previousValue: this.formatValue(oldSeries[key]), updatedValue: this.formatValue(series[key]) });
          }
        });
      });
      previous.series.filter((old) => !updated.series.some((series) => series.name === old.name)).forEach((old) =>
        changes.push({ property: old.name, previousValue: "configured", updatedValue: "removed" }));
      return changes;
    },
    formatValue(value) {
      return value === undefined ? "not configured" : value === null ? "none" : typeof value === "string" ? value : JSON.stringify(value);
    },
    buildCodeViews(prompt, previous, config) {
      const views = [];
      if (previous) {
        views.push({
          id: "changes",
          title: "Modified standalone Vue sample",
          description: "Complete runnable Vue SFC after applying the requested modification.",
          language: "vue",
          code: this.generateVueModificationCode(prompt, previous, config)
        });
      }
      views.push({
        id: "complete",
        title: "Complete Vue sample",
        description: "Complete runnable Vue SFC with template, imports, providers, data, and chart configuration.",
        language: "vue",
        code: this.generateCompleteVueCode(config)
      });
      return views;
    },
    generateCompleteVueCode(config) {
      const circular = config.chartType === "circular";
      const template = circular ? this.generateAccumulationVueTemplate(config) : this.generateCartesianVueTemplate(config);
      return [
        '<template>',
        '  <div class="chart-container">',
        `    <${circular ? "ejs-accumulationchart" : "ejs-chart"}${this.buildVueTemplateBindings(config)}>`,
        ...template,
        `    </${circular ? "ejs-accumulationchart" : "ejs-chart"}>`,
        '  </div>',
        '</template>',
        '',
        '<script>',
        this.getRequiredVueImports(config).join('\n'),
        '',
        "export default {",
        "  name: 'GeneratedChart',",
        '  components: {',
        this.generateVueComponents(config).map((line) => `    ${line}`).join('\n'),
        '  },',
        '  provide: {',
        this.generateVueProvide(config).map((line) => `    ${line}`).join('\n'),
        '  },',
        '  data() {',
        '    return {',
        this.generateVueDataProperties(config).map((line) => `      ${line}`).join('\n'),
        '    };',
        '  }',
        '};',
        '</' + 'script>'
      ].join('\n');
    },
    buildVueTemplateBindings(config) {
      const bindings = [
        ' :title="title"',
        ' :tooltip="tooltipSettings"',
        ' :palettes="palettes"',
        ' :legendSettings="legendSettings"',
        ' :chartArea="chartArea"',
        ' :selectionMode="selectionMode"',
        ' :highlightMode="highlightMode"'
      ];
      if (config.chartType !== "circular") {
        bindings.unshift(
          ' :primaryXAxis="primaryXAxis"',
          ' :primaryYAxis="primaryYAxis"',
          ' :crosshair="crosshair"',
          ' :zoomSettings="zoomSettings"',
          ' :annotations="annotations"',
          ' :indicators="indicators"'
        );
      }
      return bindings.join('');
    },
    generateVueComponents(config) {
      if (config.chartType === "circular") {
        return [
          "'ejs-accumulationchart': AccumulationChartComponent,",
          "'e-accumulation-series': AccumulationSeriesDirective,",
          "'e-accumulation-series-collection': AccumulationSeriesCollectionDirective"
        ];
      }
      return [
        "'ejs-chart': ChartComponent,",
        "'e-series': SeriesDirective,",
        "'e-series-collection': SeriesCollectionDirective"
      ];
    },
    generateAccumulationVueTemplate(config) {
      const seriesLines = config.series.map((series, index) => [
        `      <e-accumulation-series :dataSource="chartData${index + 1}"`,
        `        type="${this.mapAccumulationVueType(series.type)}"`,
        "        xName=\"xvalue\"",
        "        yName=\"yvalue\"",
        `        name="${this.escapeVueTemplateValue(series.name)}"`,
        `        innerRadius="${series.innerRadius || (series.type === "doughnut" ? "70%" : "0%")}"`,
        `        radius="${series.radius || "80%"}"`,
        "        :dataLabel=\"seriesSettings" + (index + 1) + ".dataLabel\">",
        "      </e-accumulation-series>"
      ].join("\n"));
      return [
        "      <e-accumulation-series-collection>",
        ...seriesLines,
        "      </e-accumulation-series-collection>"
      ];
    },
    generateCartesianVueTemplate(config) {
      const seriesLines = config.series.map((series, index) => [
        `      <e-series :dataSource="chartData${index + 1}"`,
        `        type="${this.mapVueSeriesType(series.type)}"`,
        "        xName=\"xvalue\"",
        "        yName=\"yvalue\"",
        `        name="${this.escapeVueTemplateValue(series.name)}"`,
        `        high="${series.high || "high"}"`,
        `        low="${series.low || "low"}"`,
        `        open="${series.open || "open"}"`,
        `        close="${series.close || "close"}"`,
        `        volume="${series.volume || "volume"}"`,
        `        size="${series.size || "size"}"`,
        `        min="${series.min || "minimum"}"`,
        `        max="${series.max || "maximum"}"`,
        `        :fill="seriesSettings${index + 1}.fill"`,
        `        :width="seriesSettings${index + 1}.width"`,
        `        :marker="seriesSettings${index + 1}.marker"`,
        `        :errorBar="seriesSettings${index + 1}.errorBar"`,
        `        :trendlines="seriesSettings${index + 1}.trendlines">`,
        "      </e-series>"
      ].join("\n"));
      return [
        "      <e-series-collection>",
        ...seriesLines,
        "      </e-series-collection>"
      ];
    },
    generateVueModificationCode(prompt, previous, updated) {
      const changes = this.compareChartConfigs(previous, updated);
      const summary = [
        `<!-- Applied request: ${prompt} -->`,
        ...changes.map((change) =>
          `<!-- ${change.property}: ${change.previousValue} -> ${change.updatedValue} -->`)
      ];
      return [...summary, this.generateCompleteVueCode(updated)].join("\n");
    },
    getRequiredVueImports(config) {
      const circular = config.chartType === "circular";
      const componentImports = circular
        ? ["AccumulationChartComponent", "AccumulationSeriesCollectionDirective", "AccumulationSeriesDirective"]
        : ["ChartComponent", "SeriesCollectionDirective", "SeriesDirective"];
      const services = this.getRequiredVueServices(config);
      const importList = [...componentImports, ...services].sort();
      return [
        `import { ${importList.join(", ")} } from "@syncfusion/ej2-vue-charts";`
      ];
    },
    getRequiredVueServices(config) {
      const services = [];
      const circular = config.chartType === "circular";
      config.series.forEach((series) => services.push(this.getVueSeriesService(series.type)));
      if (circular) {
        if (config.showLegend !== false) services.push("AccumulationLegend");
        if (config.tooltip?.enable !== false) services.push("AccumulationTooltip");
        if (config.series.some((series) => series.dataLabel)) services.push("AccumulationDataLabel");
        if (config.selectionMode && config.selectionMode !== "None") services.push("AccumulationSelection");
        if (config.highlightMode && config.highlightMode !== "None") services.push("AccumulationHighlight");
        return Array.from(new Set(services));
      }
      [...(config.xAxis || []), ...(config.yAxis || [])].forEach((axis) => {
        const axisService = {
          category: "Category", datetime: "DateTime", datetimecategory: "DateTimeCategory", logarithmic: "Logarithmic"
        }[String(axis?.type || "").toLowerCase()];
        if (axisService) services.push(axisService);
        if (Array.isArray(axis?.stripLines) && axis.stripLines.length) services.push("StripLine");
      });
      if (config.showLegend !== false) services.push("Legend");
      if (config.tooltip?.enable !== false) services.push("Tooltip");
      if (config.crosshair?.enable) services.push("Crosshair");
      if (config.zoomSettings && Object.values(config.zoomSettings).some(Boolean)) services.push("Zoom");
      if (config.selectionMode && config.selectionMode !== "None") services.push("Selection");
      if (config.highlightMode && config.highlightMode !== "None") services.push("Highlight");
      if (config.annotations?.length) services.push("ChartAnnotation");
      if (config.series.some((series) => series.dataLabel || series.marker?.dataLabel)) services.push("DataLabel");
      if (config.series.some((series) => series.errorBar)) services.push("ErrorBar");
      if (config.series.some((series) => Array.isArray(series.trendlines) && series.trendlines.length)) services.push("Trendlines");
      const indicatorServices = {
        Ema: "EmaIndicator", Rsi: "RsiIndicator", BollingerBands: "BollingerBands", Tma: "TmaIndicator",
        Momentum: "MomentumIndicator", Sma: "SmaIndicator", Atr: "AtrIndicator",
        AccumulationDistribution: "AccumulationDistributionIndicator", Macd: "MacdIndicator", Stochastic: "StochasticIndicator"
      };
      (config.indicators || []).forEach((indicator) => {
        const indicatorService = indicatorServices[indicator.type];
        if (indicatorService) services.push(indicatorService);
      });
      return Array.from(new Set(services));
    },
    getVueSeriesService(type) {
      const values = {
        line: "LineSeries", column: "ColumnSeries", bar: "BarSeries", area: "AreaSeries",
        spline: "SplineSeries", stepline: "StepLineSeries", steparea: "StepAreaSeries", splinearea: "SplineAreaSeries",
        multicoloredline: "MultiColoredLineSeries", multicoloredarea: "MultiColoredAreaSeries", rangecolumn: "RangeColumnSeries",
        rangearea: "RangeAreaSeries", splinerangearea: "SplineRangeAreaSeries", hilo: "HiloSeries",
        hiloopenclose: "HiloOpenCloseSeries", candle: "CandleSeries", boxandwhisker: "BoxAndWhiskerSeries",
        bubble: "BubbleSeries", scatter: "ScatterSeries", stackingcolumn: "StackingColumnSeries",
        stackingcolumn100: "StackingColumnSeries", stackingbar: "StackingBarSeries", stackingbar100: "StackingBarSeries",
        stackingarea: "StackingAreaSeries", stackingarea100: "StackingAreaSeries",
        stackingline: "StackingLineSeries", stackingline100: "StackingLineSeries", stackingsteparea: "StackingStepAreaSeries",
        pareto: "ParetoSeries", polar: "PolarSeries", radar: "RadarSeries", waterfall: "WaterfallSeries",
        histogram: "HistogramSeries", pie: "PieSeries", doughnut: "PieSeries", funnel: "FunnelSeries", pyramid: "PyramidSeries"
      };
      return values[String(type || "column").toLowerCase().replace(/[\s-]/g, "")] || "ColumnSeries";
    },
    generateVueDataProperties(config) {
      const properties = config.series.flatMap((series, index) => [
        `chartData${index + 1}: ${this.toVueLiteral(series.dataSource)},`,
        `seriesSettings${index + 1}: ${this.toVueLiteral({
          marker: series.marker || { visible: false },
          dataLabel: series.dataLabel || {},
          errorBar: series.errorBar,
          trendlines: series.trendlines || [],
          fill: series.fill,
          width: series.width == null ? 2 : series.width
        })},`
      ]);
      properties.push(`title: ${JSON.stringify(config.title || "Generated Chart")},`);
      properties.push(`tooltipSettings: ${this.toVueLiteral(config.tooltip || { enable: true })},`);
      properties.push(`palettes: ${this.toVueLiteral(config.palettes || [])},`);
      properties.push(`legendSettings: ${this.toVueLiteral({ ...(config.legendSettings || {}), visible: config.showLegend !== false })},`);
      properties.push(`chartArea: ${this.toVueLiteral(config.chartArea || { border: { width: 0.5 } })},`);
      properties.push(`selectionMode: ${JSON.stringify(config.selectionMode || "None")},`);
      properties.push(`highlightMode: ${JSON.stringify(config.highlightMode || "None")},`);
      if (config.chartType !== "circular") {
        properties.push(`primaryXAxis: ${this.toVueLiteral(this.normalizeAxis(config.xAxis?.[0], "Categories", "category"))},`);
        properties.push(`primaryYAxis: ${this.toVueLiteral(this.normalizeAxis(config.yAxis?.[0], "Values", "numerical"))},`);
        properties.push(`crosshair: ${this.toVueLiteral(config.crosshair || {})},`);
        properties.push(`zoomSettings: ${this.toVueLiteral(config.zoomSettings || {})},`);
        properties.push(`annotations: ${this.toVueLiteral(config.annotations || [])},`);
        properties.push(`indicators: ${this.toVueLiteral(config.indicators || [])},`);
      }
      return properties;
    },
    generateVueProvide(config) {
      const services = this.getRequiredVueServices(config);
      const key = config.chartType === "circular" ? "accumulationchart" : "chart";
      return [`${key}: [`, ...services.map((service) => `  ${service},`), "]"];
    },
    escapeVueTemplateValue(value) {
      return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    },
    toVueLiteral(value) {
      return JSON.stringify(value, null, 6).replace(/"([^"\\]+)":/g, "$1:").replace(/"([^"\\]+)"/g, (match, text) => `'${text.replace(/'/g, "\\'")}'`);
    },
    mapVueSeriesType(type) {
      const values = {
        line: "Line", column: "Column", bar: "Bar", area: "Area", spline: "Spline", stepline: "StepLine",
        steparea: "StepArea", splinearea: "SplineArea", multicoloredline: "MultiColoredLine",
        multicoloredarea: "MultiColoredArea", rangecolumn: "RangeColumn", rangearea: "RangeArea",
        splinerangearea: "SplineRangeArea", hilo: "Hilo", hiloopenclose: "HiloOpenClose", candle: "Candle",
        boxandwhisker: "BoxAndWhisker", bubble: "Bubble", scatter: "Scatter", stackingcolumn: "StackingColumn",
        stackingcolumn100: "StackingColumn100", stackingbar: "StackingBar", stackingbar100: "StackingBar100",
        stackingarea: "StackingArea", stackingarea100: "StackingArea100", stackingline: "StackingLine",
        stackingline100: "StackingLine100", stackingsteparea: "StackingStepArea", pareto: "Pareto", polar: "Polar",
        radar: "Radar", waterfall: "Waterfall", histogram: "Histogram"
      };
      return values[String(type || "column").toLowerCase().replace(/[\s-]/g, "")] || "Column";
    },
    mapAccumulationVueType(type) {
      return type === "funnel" ? "Funnel" : type === "pyramid" ? "Pyramid" : "Pie";
    },
    applyLocalModification(prompt, config) {
      const text = String(prompt || "").toLowerCase().replace(/strip\s+line/g, "stripline");
      const enabling = /\b(add|show|enable|apply)\b/.test(text);
      const disabling = /\b(remove|hide|disable|clear|delete)\b/.test(text);
      const updated = this.clone(config);
      if (text.includes("legend") && (enabling || disabling)) {
        updated.showLegend = enabling;
        return updated;
      }
      if (text.includes("tooltip") && (enabling || disabling)) {
        updated.tooltip = { ...(updated.tooltip || {}), enable: enabling };
        return updated;
      }
      if (text.includes("crosshair") && (enabling || disabling)) {
        updated.crosshair = { ...(updated.crosshair || {}), enable: enabling, lineType: "Both" };
        return updated;
      }
      if (text.includes("zoom") && (enabling || disabling)) {
        updated.zoomSettings = {
          ...(updated.zoomSettings || {}), enableSelectionZooming: enabling, enableMouseWheelZooming: enabling,
          enablePinchZooming: enabling, enablePan: enabling
        };
        return updated;
      }
      if (text.includes("selection") && (enabling || disabling)) {
        updated.selectionMode = enabling ? "Point" : "None";
        return updated;
      }
      if (text.includes("highlight") && (enabling || disabling)) {
        updated.highlightMode = enabling ? "Point" : "None";
        return updated;
      }
      if (text.includes("annotation") && disabling) {
        updated.annotations = [];
        return updated;
      }
      if (text.includes("stripline") && disabling) {
        updated.xAxis = updated.xAxis?.map((axis) => ({ ...axis, stripLines: [] }));
        updated.yAxis = updated.yAxis?.map((axis) => ({ ...axis, stripLines: [] }));
        return updated;
      }
      if (text.includes("indicator") && disabling) {
        updated.indicators = [];
        return updated;
      }
      return null;
    },
    async onPromptRequest(args) {
      const instance = this.getAssistInstance();
      const prompt = String(args?.prompt || "").trim();
      if (!instance || !prompt) {
        return;
      }
      this.requestController?.abort();
      this.requestController = new AbortController();
      const requestId = ++this.requestSequence;
      const previous = this.latestChartConfig ? this.clone(this.latestChartConfig) : null;
      if (previous && this.isCodeRequest(prompt.toLowerCase())) {
        const codeText = `Here is the complete Vue code for "${previous.title || "the current chart"}".`;
        const blocks = this.buildResponseBlocks(codeText, null, previous, prompt);
        instance.addPromptResponse({ blocks: this.clone(blocks) });
        this.appendSessionMessage(prompt, blocks, previous);
        return;
      }
      let normalized = null;
      try {
        const local = previous ? this.applyLocalModification(prompt, previous) : null;
        if (local) {
          const localChanges = this.compareChartConfigs(previous, local);
          normalized = {
            blocks: this.buildResponseBlocks(
              localChanges.length === 1
                ? `Updated ${local.title || "the chart"}: ${localChanges[0].property} changed from ${localChanges[0].previousValue} to ${localChanges[0].updatedValue}.`
                : `Updated ${local.title || "the chart"} with ${localChanges.length} changes.`,
              previous, local, prompt
            ),
            config: local
          };
        } else {
          const aiPrompt = previous ? this.buildModificationPrompt(prompt, previous) : prompt;
          const response = await serverAIRequest({
            messages: [
              { role: "system", content: CHART_SYSTEM_PROMPT },
              { role: "user", content: aiPrompt }
            ]
          });
          if (requestId !== this.requestSequence) {
            return;
          }
          const parsed = this.normalizeBlocks(this.getResponseObject(response));
          if (parsed) {
            normalized = {
              blocks: this.buildResponseBlocks(parsed.text, previous, parsed.config, prompt),
              config: parsed.config
            };
          }
        }
      } catch (error) {
        if (this.requestController?.signal.aborted || requestId !== this.requestSequence) {
          return;
        }
        console.error("Unable to generate chart:", error);
      }
      if (!normalized) {
        instance.addPromptResponse({
          blocks: [{
            blockType: "text",
            content: previous
              ? "The requested modification could not be applied because the AI response was invalid. The existing chart was preserved."
              : "The AI response did not contain usable chart data. Please try again with chart data or a supported chart request."
          }]
        });
        return;
      }
      instance.addPromptResponse({ blocks: this.clone(normalized.blocks) });
      this.latestChartConfig = this.clone(normalized.config);
      this.appendSessionMessage(prompt, normalized.blocks, normalized.config);
    },
    appendSessionMessage(prompt, blocks, config) {
      const message = {
        id: this.createId("message"), prompt, blocks: this.clone(blocks), chartConfig: this.clone(config), createdAt: new Date()
      };
      this.currentSession.messages.push(message);
      this.currentSession.title = this.currentSession.messages.length === 1 ? config.title || prompt : this.currentSession.title;
      this.currentSession.updatedAt = new Date();
      const stored = this.clone(this.currentSession);
      const index = this.histories.findIndex((session) => session.id === stored.id);
      if (index >= 0) {
        this.histories.splice(index, 1);
      }
      this.histories.unshift(stored);
      this.currentHistoryId = stored.id;
      this.saveSelectedHistoryId(stored.id);
      this.saveHistory();
    },
    toolbarItemClicked(args) {
      const icon = String(args?.item?.iconCss || "");
      if (icon.includes("e-menu")) {
        this.toggleHistory();
      } else if (icon.includes("e-edit-notes")) {
        this.startNewChat();
      }
    },
    toggleHistory() {
      this.showHistory = !this.showHistory;
    },
    async recreateAssist() {
      this.unmountToolApps();
      this.showAssist = false;
      await this.$nextTick();
      this.showAssist = true;
      await this.$nextTick();
      await this.$nextTick();
    },
    async openHistory(history) {
      this.requestSequence += 1;
      this.requestController?.abort();
      this.currentSession = this.clone(history);
      this.currentHistoryId = history.id;
      this.saveSelectedHistoryId(history.id);
      const latest = [...history.messages].reverse().find((message) => message.chartConfig);
      this.latestChartConfig = latest?.chartConfig ? this.clone(latest.chartConfig) : null;
      this.showHistory = false;
      this.restoredPrompts = history.messages.map((message) => ({
        prompt: message.prompt,
        blocks: this.clone(message.blocks)
      }));
      await this.recreateAssist();
    },
    async startNewChat() {
      this.requestSequence += 1;
      this.requestController?.abort();
      this.currentSession = this.createSession();
      this.currentHistoryId = null;
      this.saveSelectedHistoryId(null);
      this.latestChartConfig = null;
      this.restoredPrompts = [];
      this.showHistory = false;
      await this.recreateAssist();
    },
    async deleteHistory(history) {
      this.histories = this.histories.filter((item) => item.id !== history.id);
      this.saveHistory();
      if (this.currentHistoryId === history.id) {
        await this.startNewChat();
      }
    },
    formatHistoryDate(value) {
      const date = value instanceof Date ? value : new Date(value);
      if (Number.isNaN(date.getTime())) {
        return "";
      }
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    }
  }
};
</script>

<style>
:root,
.generate-chart-aiassistview {
  --gc-bg-primary: #ffffff;
  --gc-bg-secondary: #f5f6f8;
  --gc-border-primary: #e0e0e0;
  --gc-border-secondary: #dfe3e8;
  --gc-text-primary: #242424;
  --gc-text-secondary: #616161;
  --gc-code-bg: #1e1e1e;
  --gc-code-text: #d4d4d4;
  --gc-accent: #0f6cbd;
  --gc-accent-hover: #115ea3;
  --gc-hover-bg: #eef4ff;
  --gc-chart-bg: #ffffff;
}
[class*="-dark"] .generate-chart-aiassistview,
[class*="dark-"] .generate-chart-aiassistview,
[class*="highcontrast"] .generate-chart-aiassistview,
[class*="high-contrast"] .generate-chart-aiassistview,
.e-dark-mode .generate-chart-aiassistview,
.e-dark .generate-chart-aiassistview,
.dark .generate-chart-aiassistview,
body.e-dark-mode .generate-chart-aiassistview,
body[class*="-dark"] .generate-chart-aiassistview,
html[class*="-dark"] .generate-chart-aiassistview,
body[class*="highcontrast"] .generate-chart-aiassistview,
html[class*="highcontrast"] .generate-chart-aiassistview {
  --gc-bg-primary: #111827;
  --gc-bg-secondary: #1f2937;
  --gc-border-primary: #475569;
  --gc-border-secondary: #475569;
  --gc-text-primary: #f3f4f6;
  --gc-text-secondary: #cbd5e1;
  --gc-code-bg: #090d16;
  --gc-code-text: #f8fafc;
  --gc-accent: #60a5fa;
  --gc-accent-hover: #3b82f6;
  --gc-hover-bg: #334155;
  --gc-chart-bg: #111827;
}
.generate-chart-aiassistview,
.generate-chart-aiassistview * {
  box-sizing: border-box;
}

.generate-chart-aiassistview {
  display: flex;
  width: 100%;
  height: 680px;
  gap: 12px;
  margin: 0 auto;
}

.generate-chart-aiassistview > .e-aiassistview,
#generateChartAIAssistView {
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
}

.generate-chart-aiassistview .banner-content {
  display: flex;
  min-height: clamp(150px, 24vh, 240px);
  max-height: 240px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  text-align: center;
}

.generate-chart-aiassistview .banner-content h2,
.generate-chart-aiassistview .banner-content p {
  margin: 4px 0;
}
.generate-chart-aiassistview .banner-content h2 {
  color: var(--gc-text-primary);
}
.generate-chart-aiassistview .banner-content p {
  color: var(--gc-text-secondary);
}

.generate-chart-aiassistview .banner-content .e-assistview-icon::before {
  font-size: 35px;
}

.generate-chart-aiassistview .gc-chart-container {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
}

.generate-chart-aiassistview .gc-history-pane {
  display: flex;
  flex: 0 0 280px;
  width: 280px;
  max-width: 320px;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  color: var(--gc-text-primary);
  background: var(--gc-bg-primary);
  border: 1px solid var(--gc-border-primary);
  border-radius: 10px;
}

.generate-chart-aiassistview .gc-history-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  padding: 0 14px;
  background: var(--gc-bg-secondary);
  border-bottom: 1px solid var(--gc-border-secondary);
}

.generate-chart-aiassistview .gc-history-header h3 {
  margin: 0;
  font-size: 14px;
}

.generate-chart-aiassistview .gc-history-close,
.generate-chart-aiassistview .gc-history-delete {
  width: 32px;
  height: 32px;
  padding: 6px;
  color: inherit;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}

.generate-chart-aiassistview .gc-history-list {
  flex: 1 1 auto;
  padding: 8px;
  overflow-y: auto;
}

.generate-chart-aiassistview .gc-history-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px;
  margin-bottom: 8px;
  background: var(--gc-bg-primary);
  border: 1px solid var(--gc-border-primary);
  border-radius: 8px;
  cursor: pointer;
}

.generate-chart-aiassistview .gc-history-item:hover,
.generate-chart-aiassistview .gc-history-active {
  background: var(--gc-hover-bg);
  border-color: var(--gc-accent);
}

.generate-chart-aiassistview .gc-history-item:focus-visible,
.generate-chart-aiassistview .gc-history-close:focus-visible,
.generate-chart-aiassistview .gc-history-delete:focus-visible {
  outline: 2px solid var(--color-sf-primary, #0f6cbd);
  outline-offset: 2px;
}

.generate-chart-aiassistview .gc-history-item-content {
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 3px;
}

.generate-chart-aiassistview .gc-history-title {
  padding-right: 28px;
  overflow: hidden;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.generate-chart-aiassistview .gc-history-date {
  color: var(--gc-text-secondary);
  font-size: 11px;
}

.generate-chart-aiassistview .gc-history-delete {
  position: absolute;
  top: 6px;
  right: 6px;
  opacity: 0;
  pointer-events: none;
}

.generate-chart-aiassistview .gc-history-item:hover .gc-history-delete,
.generate-chart-aiassistview .gc-history-item:focus-within .gc-history-delete,
.generate-chart-aiassistview .gc-history-active .gc-history-delete {
  opacity: 1;
  pointer-events: auto;
}

.generate-chart-aiassistview .gc-history-empty {
  padding: 14px;
  color: var(--gc-text-secondary);
  font-size: 13px;
  text-align: center;
}

body[class*="dark"] .generate-chart-aiassistview .gc-history-pane,
body[class*="dark"] .generate-chart-aiassistview .gc-history-item,
html[class*="dark"] .generate-chart-aiassistview .gc-history-pane,
html[class*="dark"] .generate-chart-aiassistview .gc-history-item {
  color: var(--color-sf-primary-text, #f3f2f1);
  background: var(--color-sf-content-bg-color-alt1, #1f1f1f);
  border-color: var(--color-sf-border-light, #4a4a4a);
}

body[class*="highcontrast"] .generate-chart-aiassistview .gc-history-pane,
body[class*="highcontrast"] .generate-chart-aiassistview .gc-history-item,
html[class*="highcontrast"] .generate-chart-aiassistview .gc-history-pane,
html[class*="highcontrast"] .generate-chart-aiassistview .gc-history-item {
  color: #ffffff;
  background: #000000;
  border-color: #969696;
}

#generateChartAIAssistView .e-response-item-template .e-toolbar-items {
  margin-left: 35px;
}

@media only screen and (max-width: 750px) {
  .generate-chart-aiassistview {
    width: 100%;
    gap: 0;
  }

  .generate-chart-aiassistview .gc-history-pane {
    position: fixed;
    z-index: 20;
    inset: 8px auto 8px 8px;
    width: min(290px, calc(100vw - 16px));
    max-width: calc(100vw - 16px);
    height: auto;
    max-height: calc(100vh - 16px);
  }

  .generate-chart-aiassistview .gc-history-delete {
    opacity: 1;
    pointer-events: auto;
  }
}

.generate-chart-aiassistview .e-aiassistview .e-response-panel {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
}
.generate-chart-aiassistview .e-aiassistview .e-suggestions ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 10px;
  width: 100%;
  padding: 8px 16px 16px;
  margin: 0;
  overflow: visible;
  list-style: none;
}
.generate-chart-aiassistview .e-aiassistview .e-suggestions ul li,
.generate-chart-aiassistview .e-aiassistview .e-suggestions ul li > div,
.generate-chart-aiassistview .e-aiassistview .e-suggestions ul li > span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  min-height: 48px;
  height: auto !important;
  max-height: none !important;
  padding: 10px 14px;
  overflow: visible !important;
  white-space: normal !important;
  line-height: 20px;
  text-align: center;
  text-overflow: clip !important;
  overflow-wrap: anywhere;
}
[class*="-dark"] .generate-chart-aiassistview .gc-history-pane,
[class*="-dark"] .generate-chart-aiassistview .gc-history-header,
[class*="-dark"] .generate-chart-aiassistview .gc-history-item,
.e-dark-mode .generate-chart-aiassistview .gc-history-pane,
.e-dark-mode .generate-chart-aiassistview .gc-history-header,
.e-dark-mode .generate-chart-aiassistview .gc-history-item {
  color: #f3f4f6;
  background: #111827;
  border-color: #475569;
}
[class*="-dark"] .generate-chart-aiassistview .banner-content h2,
[class*="-dark"] .generate-chart-aiassistview .banner-content p,
[class*="-dark"] .generate-chart-aiassistview .gc-history-header h3,
[class*="-dark"] .generate-chart-aiassistview .gc-history-title,
[class*="-dark"] .generate-chart-aiassistview .gc-history-date,
.e-dark-mode .generate-chart-aiassistview .banner-content h2,
.e-dark-mode .generate-chart-aiassistview .banner-content p,
.e-dark-mode .generate-chart-aiassistview .gc-history-header h3,
.e-dark-mode .generate-chart-aiassistview .gc-history-title,
.e-dark-mode .generate-chart-aiassistview .gc-history-date {
  color: #f3f4f6;
}
@media (max-width: 1050px) {
  .generate-chart-aiassistview .e-aiassistview .e-suggestions ul {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 750px), (max-height: 700px) {
  .generate-chart-aiassistview .banner-content {
    min-height: 130px;
    max-height: 180px;
  }
  .generate-chart-aiassistview .e-aiassistview .e-suggestions ul {
    grid-template-columns: 1fr;
  }
}
</style>
