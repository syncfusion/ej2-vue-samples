<template>
  <div class="control-pane">
    <div class="control-section">
      <div class="chart-toolbar" role="toolbar" aria-label="Chart actions">
        <button id="btnPrint" class="toolbar-btn toolbar-btn--print" @click="printChart" @keydown.enter="printChart">
          <span class="e-icons e-print-icon"></span>
          <span class="btn-text">PRINT</span>
        </button>
        <button id="btnExport" class="toolbar-btn toolbar-btn--export" @click="openPanel" @keydown.enter="openPanel">
          <span class="e-icons e-export-icon"></span>
          <span class="btn-text">EXPORT</span>
        </button>
      </div>

      <div class="chart-shell" ref="chartShell"
        :class="{ 'with-panel': isPanelOpen, 'mobile-panel-open': isMobile && isPanelOpen }">
        <div class="chart-host" ref="chartHost" v-show="!isMobile || !isPanelOpen">
          <ejs-sankey ref="sankey" id="sankey-print-export" :width="width" :height="height" background="transparent"
            title="Supply Chain Management" subTitle="Source: OECD-ITF Global Freight Data" :load="load"
            :linkStyle="linkStyle" :labelSettings="labelSettings" :legendSettings="legendSettings" :tooltip="tooltip">
            <e-sankey-nodes>
              <!-- Product Categories -->
              <e-sankey-node id="Books" />
              <e-sankey-node id="Clothing" />
              <e-sankey-node id="Electronics" />
              <e-sankey-node id="Furniture" />
              <e-sankey-node id="Jewelry" />
              <e-sankey-node id="Toys" />

              <!-- Transport Modes -->
              <e-sankey-node id="Air" />
              <e-sankey-node id="Ground" />
              <e-sankey-node id="Sea" />

              <!-- Regions -->
              <e-sankey-node id="Asia" />
              <e-sankey-node id="Europe" />
              <e-sankey-node id="North America" />
              <e-sankey-node id="South America" />

              <!-- Delivery Status -->
              <e-sankey-node id="Delayed" />
              <e-sankey-node id="Delivered" />
              <e-sankey-node id="In Transit" />
            </e-sankey-nodes>

            <e-sankey-links>
              <!-- Category → Transport Mode -->
              <e-sankey-link source-id="Books" target-id="Air" :value="18" />
              <e-sankey-link source-id="Books" target-id="Ground" :value="12" />

              <e-sankey-link source-id="Clothing" target-id="Air" :value="25" />
              <e-sankey-link source-id="Clothing" target-id="Ground" :value="15" />
              <e-sankey-link source-id="Clothing" target-id="Sea" :value="20" />

              <e-sankey-link source-id="Electronics" target-id="Air" :value="35" />
              <e-sankey-link source-id="Electronics" target-id="Ground" :value="22" />
              <e-sankey-link source-id="Electronics" target-id="Sea" :value="18" />

              <e-sankey-link source-id="Furniture" target-id="Ground" :value="28" />
              <e-sankey-link source-id="Furniture" target-id="Sea" :value="25" />

              <e-sankey-link source-id="Jewelry" target-id="Air" :value="12" />
              <e-sankey-link source-id="Jewelry" target-id="Ground" :value="8" />

              <e-sankey-link source-id="Toys" target-id="Ground" :value="15" />
              <e-sankey-link source-id="Toys" target-id="Sea" :value="22" />

              <!-- Transport Mode → Region -->
              <e-sankey-link source-id="Air" target-id="Asia" :value="40" />
              <e-sankey-link source-id="Air" target-id="Europe" :value="30" />
              <e-sankey-link source-id="Air" target-id="North America" :value="20" />

              <e-sankey-link source-id="Ground" target-id="Asia" :value="20" />
              <e-sankey-link source-id="Ground" target-id="Europe" :value="35" />
              <e-sankey-link source-id="Ground" target-id="North America" :value="30" />
              <e-sankey-link source-id="Ground" target-id="South America" :value="15" />

              <e-sankey-link source-id="Sea" target-id="Asia" :value="25" />
              <e-sankey-link source-id="Sea" target-id="Europe" :value="15" />
              <e-sankey-link source-id="Sea" target-id="North America" :value="30" />
              <e-sankey-link source-id="Sea" target-id="South America" :value="15" />

              <!-- Region → Delivery Status -->
              <e-sankey-link source-id="Asia" target-id="Delayed" :value="35" />
              <e-sankey-link source-id="Asia" target-id="Delivered" :value="40" />
              <e-sankey-link source-id="Asia" target-id="In Transit" :value="10" />

              <e-sankey-link source-id="Europe" target-id="Delivered" :value="65" />
              <e-sankey-link source-id="Europe" target-id="In Transit" :value="15" />

              <e-sankey-link source-id="North America" target-id="Delivered" :value="50" />
              <e-sankey-link source-id="North America" target-id="In Transit" :value="30" />

              <e-sankey-link source-id="South America" target-id="Delayed" :value="10" />
              <e-sankey-link source-id="South America" target-id="In Transit" :value="20" />
            </e-sankey-links>
          </ejs-sankey>
        </div>

        <aside id="exportPanel" class="export-panel" :aria-hidden="!isPanelOpen" :class="{ open: isPanelOpen }">
          <div class="panel-header">
            <span class="panel-header-left">
              <span class="e-icons e-export-icon panel-header-icon"></span>
              <span class="panel-title">Export</span>
            </span>
            <button id="btnClosePanel" class="panel-close" aria-label="Close export panel" @click="closePanel"
              @keydown.enter="closePanel">
              <span class="e-icons e-close"></span>
            </button>
          </div>
          <div class="panel-body">
            <label class="panel-label" for="expFileName">File Name:</label>
            <input id="expFileName" class="panel-input" type="text" v-model.trim="fileName" placeholder="Input Text"
              @keydown.escape="closePanel" />

            <label class="panel-label" for="fileTypeDropdown">File Type:</label>
            <ejs-dropdownlist ref="exportType" id="fileTypeDropdown" :dataSource="exportTypes" :value="exportTypes[0]"
              :width="'100%'"></ejs-dropdownlist>

            <div class="panel-footer" style="background: transparent">
              <button id="btnDoExport" class="panel-action-btn panel-action-btn--export" @click="exportChart"
                @keydown.enter="exportChart">EXPORT</button>
              <button id="btnCancelExport" class="panel-action-btn panel-action-btn--cancel" @click="closePanel"
                @keydown.enter="closePanel">CANCEL</button>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <div id="action-description">
      <p>
        Explore supply chain flows with a Sankey chart using illustrative values in thousand
        shipments (k). It maps product categories to transport modes, world regions, and delivery status.
        Use built‑in print and export options (JPEG, PNG, SVG, PDF) to share or download the chart.
      </p>
    </div>

    <div id="description">
      <p>
        This Sankey visualizes shipments (k) from product categories through Air, Ground, and Sea to regions and
        final status (Delivered, Delayed, In Transit).
        Hover or tap nodes and links to see precise shipment counts.
      </p>
      <p><strong>Key features:</strong></p>
      <ul>
        <li>End‑to‑end flow from category → mode → region → status</li>
        <li>Export to JPEG, PNG, SVG, or PDF, and print directly</li>
        <li>Interactive tooltips showing values in thousand shipments</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  SankeyComponent,
  SankeyLegend,
  SankeyTooltip,
  SankeyExport,
  SankeyNodesCollectionDirective,
  SankeyNodeDirective,
  SankeyLinksCollectionDirective,
  SankeyLinkDirective,
} from "@syncfusion/ej2-vue-charts";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { loadSankeyChartTheme } from './theme-color';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Browser } from "@syncfusion/ej2-base";

export default {
  name: "SankeyPrintExport",

  components: {
    "ejs-sankey": SankeyComponent,
    "ejs-button": ButtonComponent,
    "ejs-dropdownlist": DropDownListComponent,
    "e-sankey-nodes": SankeyNodesCollectionDirective,
    "e-sankey-node": SankeyNodeDirective,
    "e-sankey-links": SankeyLinksCollectionDirective,
    "e-sankey-link": SankeyLinkDirective,
  },

  provide: {
    sankey: [SankeyLegend, SankeyTooltip, SankeyExport],
  },

  data() {
    return {
      width: "100%",
      height: "450px",
      linkStyle: { opacity: 0.4, curvature: 0.5, colorType: "Source" },
      labelSettings: {
        visible: Browser.isDevice ? false : true
      },
      legendSettings: {
        visible: Browser.isDevice ? false : true,
        position: 'Bottom'
      },
      tooltip: {
        enable: true,
        nodeTemplate: '${name}: ${value}k shipments',
        linkTemplate: '${start.name}: ${start.out}k → ${target.name}: ${target.in}k shipments'
      },
      exportTypes: ["JPEG", "PNG", "SVG", "PDF"],
      fileName: "Sankey",
      isPanelOpen: false,
      isMobile: Browser.isDevice,
    };
  },

  computed: {
  },

  methods: {
    load(args) {
      loadSankeyChartTheme(args);
    },

    togglePanel(open) {
      this.isPanelOpen = open;
      if (!open) {
        // Move focus back to Export button when closing panel
        const btnExport = document.getElementById('btnExport');
        if (btnExport) {
          btnExport.focus();
        }
        // Remove keyboard event listener when closing
        document.removeEventListener('keydown', this.handlePanelKeydown);
      } else {
        // Add keyboard event listener when opening
        document.addEventListener('keydown', this.handlePanelKeydown);
        // Focus filename input after panel opens
        this.$nextTick(() => {
          const fileNameInput = document.getElementById('expFileName');
          if (fileNameInput) {
            fileNameInput.focus();
          }
        });
      }
      if (this.isMobile) {
        this.$refs.chartHost.style.display = open ? 'none' : '';
      }
      setTimeout(() => {
        this.refreshChart();
      }, 250);
    },

    handlePanelKeydown(event) {
      // Close panel on Escape key
      if (event.key === 'Escape') {
        event.preventDefault();
        this.closePanel();
      }
    },

    refreshChart() {
      const sankey = this.$refs.sankey.ej2Instances;
      const animation = sankey.animation;
      animation.enable = false;
      sankey.refresh();
      animation.enable = true;
    },

    openPanel() {
      this.togglePanel(true);
    },

    closePanel() {
      this.togglePanel(false);
    },

    exportChart() {
      const type =
        this.$refs.exportType?.ej2Instances?.value || this.exportTypes[0] || "PNG";
      const name = (this.fileName || "Sankey").trim();
      this.$refs.sankey.ej2Instances.export(type, name);
      this.togglePanel(false);
    },

    printChart() {
      this.$refs.sankey.ej2Instances.print();
    }
  },


};
</script>

<style>
.control-section {
  overflow: visible !important;
}

.chart-toolbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 6px 0 6px 0;
}

.toolbar-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 0.3px;
  padding: 6px 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
}

.toolbar-btn:focus {
  outline: 2px solid #e3165b;
  outline-offset: 2px;
}

.toolbar-btn--print {
  background-color: #ffffff !important;
  color: #000000de !important;
  border: 1px solid #d1d5db !important;
}

.toolbar-btn--print:hover {
  background-color: #f3f4f6 !important;
}

.toolbar-btn--print:focus {
  background-color: #f3f4f6 !important;
  box-shadow: inset 0 0 0 2px #e3165b;
}

.toolbar-btn--export {
  background-color: #e3165b !important;
  color: #ffffff !important;
  border: 1px solid #e3165b !important;
}

.toolbar-btn--export:hover {
  background-color: #c4134f !important;
}

.toolbar-btn--export:focus {
  background-color: #c4134f !important;
  outline: 2px solid #e3165b;
  outline-offset: 2px;
}

.chart-shell {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
}

.chart-shell.mobile-panel-open .export-panel {
  flex: 0 0 100% !important;
  width: 100% !important;
  border-left: none !important;
  box-shadow: none !important;
}

.chart-host {
  flex: 1 1 auto;
  min-width: 0;
  transition: flex-basis 0.25s ease-out;
}

.export-panel {
  flex: 0 0 0px;
  overflow: hidden;
  background: transparent;
  border-left: 0px solid #e5e7eb;
  transition: flex-basis 0.25s ease-out, border-left 0.25s ease-out;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.with-panel .export-panel {
  flex: 0 0 300px;
  border-left: 1px solid #e5e7eb;
  overflow: visible;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px 10px 16px;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
}

.panel-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.panel-header-icon {
  font-size: 16px;
}

.panel-title {
  font-size: 15px;
  font-weight: 600;
}

.panel-close {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 2px 4px;
  color: #6b7280;
  font-size: 16px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  outline: none;
  transition: all 0.2s ease;
}

.panel-close:hover {
  color: #111827;
}

.panel-close:focus {
  outline: 2px solid #e3165b;
  outline-offset: 1px;
}

.panel-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 16px 0 16px;
  white-space: nowrap;
}

.panel-label {
  font-size: 14px;
  margin-bottom: 2px;
}

.panel-input {
  width: 100%;
  box-sizing: border-box;
  border: none !important;
  border-radius: 0 !important;
  border-bottom: 1px solid #9ca3af !important;
  outline: none !important;
  padding: 4px 0 6px 0;
  background: transparent;
  font-size: 14px;
  color: inherit;
  transition: border-color 0.2s ease;
}

.panel-input:focus {
  border-bottom: 2px solid #e3165b !important;
  box-shadow: 0 1px 0 #e3165b;
}

.export-panel .e-ddl.e-input-group,
.export-panel .e-ddl.e-input-group.e-control-wrapper {
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  background: transparent !important;
}

.export-panel .e-ddl.e-input-group:focus-within,
.export-panel .e-ddl.e-input-group.e-control-wrapper:focus-within {
  box-shadow: none !important;
}

.export-panel .e-input-group::before,
.export-panel .e-input-group::after {
  display: none !important;
}

.panel-footer {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-top: 20px;
}

.panel-action-btn {
  flex: 1;
  background: transparent !important;
  border: none !important;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding: 6px 0;
  cursor: pointer;
  border-radius: 2px;
  outline: none;
  transition: all 0.2s ease;
  position: relative;
}

.panel-action-btn:focus {
  outline: 2px solid #e3165b;
  outline-offset: 2px;
}

.panel-action-btn--export {
  color: #e3165b !important;
}

.panel-action-btn--export:hover {
  color: #c4134f !important;
}

.panel-action-btn--cancel {
  color: #6b7280 !important;
}

.panel-action-btn--cancel:hover {
  color: #111827 !important;
}

.e-print-icon::before {
  content: "\e75d";
}

.e-view.tailwind .e-print-icon::before,
.e-view.tailwind3 .e-print-icon::before,
.e-view.bootstrap5 .e-print-icon::before,
.e-view.bootstrap5-dark .e-print-icon::before,
.e-view.tailwind-dark .e-print-icon::before,
.e-view.tailwind3-dark .e-print-icon::before {
  content: "\e75d";
}

.e-view.fabric .e-print-icon::before,
.e-view.fabric-dark .e-print-icon::before {
  content: "\e7df";
}

.e-view.bootstrap .e-print-icon::before {
  content: "\ebd2";
}

.e-view.bootstrap4 .e-print-icon::before {
  content: "\e743";
}

.e-view.highcontrast .e-print-icon::before {
  content: "\ebf9";
}

.e-view.fluent .e-print-icon::before,
.e-view.fluent-dark .e-print-icon::before,
.e-view.fluent2 .e-print-icon::before,
.e-view.fluent2-dark .e-print-icon::before,
.e-view.fluent2-highcontrast .e-print-icon::before,
.e-view.material3 .e-print-icon::before,
.e-view.material3-dark .e-print-icon::before,
.e-view.bootstrap5\.3 .e-print-icon::before,
.e-view.bootstrap5\.3-dark .e-print-icon::before {
  content: "\e75d";
}

.e-export-icon::before {
  content: "\e72e";
}

.e-view.tailwind .e-export-icon::before,
.e-view.tailwind3 .e-export-icon::before,
.e-view.tailwind-dark .e-export-icon::before,
.e-view.tailwind3-dark .e-export-icon::before {
  content: "\e7bf";
}

.e-view.fluent .e-export-icon::before,
.e-view.fluent-dark .e-export-icon::before,
.e-view.fluent2 .e-export-icon::before,
.e-view.fluent2-dark .e-export-icon::before,
.e-view.fluent2-highcontrast .e-export-icon::before,
.e-view.material3 .e-export-icon::before,
.e-view.material3-dark .e-export-icon::before,
.e-view.bootstrap5 .e-export-icon::before,
.e-view.bootstrap5-dark .e-export-icon::before,
.e-view.bootstrap5\.3 .e-export-icon::before,
.e-view.bootstrap5\.3-dark .e-export-icon::before {
  content: "\e72e" !important;
}

@media print {
  @page {
    size: A4 landscape;
    margin: 0;
  }

  .chart-toolbar,
  .export-panel,
  #action-description,
  #description {
    display: none !important;
  }

  #sankey-print-export,
  #sankey-print-export_svg,
  svg {
    transform: scale(0.97);
    transform-origin: top left;
  }
}
</style>

<style scoped>
#sankey-print-export {
  text-align: center;
}

.property-section {
  padding: 12px 16px;
}

.property-text {
  font-size: 13px;
  font-weight: 400;
}

.btn-row {
  display: flex;
  gap: 8px;
}
</style>