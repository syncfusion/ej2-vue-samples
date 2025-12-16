<template>
<div>
  <div class="control-section" id="pivot-table-section" style="overflow: initial">
    <input ref="connectFile" type="file" id="connectFile" style="display:none" />

    <ejs-dialog :visible="isDialogOpen && dialogType !== 'OLAP'" :isModal="true"
      :showCloseIcon="true" width="480px"
      :header="dialogType === 'JSON Report' ? 'Load Pivot Report' : ('Connect to ' + dialogType)"
      target="body" :closeOnEscape="true"
      :position="{ X: 'center', Y: 'center' }" :animationSettings="{ effect: 'Zoom', duration: 150 }"
      @overlayClick="onCloseDialog" @close="onCloseDialog">
      <div style="display:flex;flex-direction:column;gap:12px">
        <input type="text" class="e-input" :placeholder="'Enter ' + dialogType + ' URL'" v-model="remoteUrl"
          @keydown.enter.prevent="handleOpenRemote" autofocus />
        <div style="display:flex;justify-content:flex-end;gap:8px">
          <ejs-button cssClass="e-primary" @click="handleOpenRemote">Open</ejs-button>
          <ejs-button @click="onCloseDialog">Cancel</ejs-button>
        </div>
      </div>
    </ejs-dialog>

    <ejs-dialog :visible="isErrorDialogOpen" :isModal="true" :showCloseIcon="true"
      width="420px" header="Error" target="body" :closeOnEscape="true"
      :position="{ X: 'center', Y: 'center' }"
      :animationSettings="{ effect: 'Fade', duration: 120 }" @overlayClick="() => (isErrorDialogOpen = false)" @close="() => (isErrorDialogOpen = false)">
      <div style="display:flex;flex-direction:column;gap:12px">
        <p class="error-message">{{ errorMessage }}</p>
        <div style="display:flex;justify-content:flex-end">
          <ejs-button cssClass="e-primary" @click="() => (isErrorDialogOpen = false)">OK</ejs-button>
        </div>
      </div>
    </ejs-dialog>

    <ejs-dialog :visible="isDialogOpen && dialogType === 'OLAP'" :isModal="true"
      :showCloseIcon="true" width="620px" header="Connect to OLAP(XMLA)" target="body"
      :closeOnEscape="true" :position="{ X: 'center', Y: 'center' }"
      :animationSettings="{ effect: 'Zoom', duration: 150 }" @overlayClick="onCloseDialog" @close="onCloseDialog">
      <div style="display:flex;flex-direction:column;gap:12px">
        <div class="olap-row">
          <label style="min-width:80px;font-weight:500">URL</label>
          <div style="display:flex;flex:1;gap:8px;align-items:center">
            <input type="text" class="e-input" v-model="olapProxyUrl"
              placeholder="Enter OLAP endpoint URL (e.g., https://bi.syncfusion.com/olap/msmdpump.dll)"
              style="flex:1" />
            <ejs-button class="e-primary" :cssClass="'e-primary'" @click="onOlapConnect" :disabled="loadingSources">{{
              loadingSources ? 'Connecting…' : 'Connect' }}</ejs-button>
          </div>
        </div>
        <div class="olap-row">
          <label style="display:block;margin-bottom:4px;font-weight:500">Data Sources</label>
          <ejs-dropdownlist :value="selectedDataSource" :dataSource="olapDataSources"
            :fields="{ text: 'value', value: 'value' }"
            :placeholder="loadingSources ? 'Loading…' : 'Select data source'"
            :enabled="olapConnected && !loadingSources" style="width:100%"
            @change="onOlapDataSourceChange" />
        </div>
        <div class="olap-row">
          <label style="display:block;margin-bottom:4px;font-weight:500">Catalogs</label>
          <ejs-dropdownlist :value="selectedCatalog" :dataSource="olapCatalogs"
            :fields="{ text: 'value', value: 'value' }" :placeholder="loadingCatalogs ? 'Loading…' : 'Select catalog'"
            :enabled="!!selectedDataSource && !loadingCatalogs" style="width:100%"
            @change="onOlapCatalogChange" />
        </div>
        <div class="olap-row">
          <label style="display:block;margin-bottom:4px;font-weight:500">Cubes</label>
          <ejs-dropdownlist :value="selectedCube" :dataSource="olapCubes" :fields="{ text: 'value', value: 'value' }"
            :placeholder="loadingCubes ? 'Loading…' : 'Select cube'" :enabled="!!selectedCatalog && !loadingCubes"
            style="width:100%" @change="onOlapCubeChange" />
        </div>
        <div v-if="olapUiMessage" style="color:var(--e-error,#b00020);font-size:14px">{{ olapUiMessage }}</div>
        <div style="display:flex;justify-content:flex-end;gap:8px">
          <ejs-button cssClass="e-primary" :disabled="!olapConnected" @click="onOlapOk">OK</ejs-button>
          <ejs-button @click="onCloseDialog">Cancel</ejs-button>
        </div>
      </div>
    </ejs-dialog>

    <ejs-pivotview id="PivotView" ref="pivot" :dataSourceSettings="dataSourceSettings" width="100%" :height="500"
      :showFieldList="true" :allowCalculatedField="true" :showToolbar="true" :allowNumberFormatting="true" :allowConditionalFormatting="true" :allowPdfExport="true" :allowExcelExport="true" :toolbar="toolbarOptions"
      :toolbarRender="toolbarRender" :dataBound="onDataBound" :enginePopulated="onEnginePopulated"
      :displayOption="{ view: 'Both' }" :gridSettings="{ columnWidth: 120 }">
      <e-columns></e-columns>
    </ejs-pivotview>
  </div>

  <div id="action-description">
    <p>This sample showcases how to dynamically load data from multiple data sources in the Pivot Table, including
      local and remote JSON/CSV files, as well as an OLAP(XMLA) data source via customized toolbar menu options.
      Additionally, you can save and reload Pivot Table report(s) as JSON files for future analysis.</p>
  </div>
  <div id="description">
    <p>
      This sample demonstrates how to dynamically load data from various sources into the Pivot Table at runtime. You
      can load one data source at a time using the custom toolbar option. You can also save and load Pivot Table
      report(s) using the custom toolbar options, which are explained below one by one.
    </p>

    <h4>Open a Data Source:</h4>

    <b>JSON</b>
    <ul>
      <li>
        <strong>Local JSON Data:</strong> Hover over the first toolbar option, then hover over the
        <strong>JSON</strong> menu option and select the <strong>Local</strong> submenu option. This allows you choose
        and load a JSON data source file from your machine.
      </li>
      <li>
        <strong>Remote JSON Data:</strong> Hover over the first toolbar option, then hover over the
        <strong>JSON</strong> menu option and select the <strong>Remote</strong> submenu option. A popup will appear
        where you can enter the remote JSON data source file URL in the input box to load data into the Pivot Table.
      </li>
    </ul>

    <b>CSV</b>
    <ul>
      <li>
        <strong>Local CSV Data:</strong> Hover over the first toolbar option, then hover over the <strong>CSV</strong>
        menu option and select the <strong>Local</strong> submenu option. This allows you choose and load a CSV data
        source file from your machine.
      </li>
      <li>
        <strong>Remote CSV Data:</strong> Hover over the first toolbar option, then hover over the
        <strong>CSV</strong> menu option and select the <strong>Remote</strong> submenu option. A popup will appear
        where you can enter the remote CSV data source file URL in the input box to load data into the Pivot Table.
      </li>
    </ul>

    <b>OLAP(XMLA)</b>
    <ul>
      <li>Hover over the first toolbar option and click the <strong>OLAP(XMLA)</strong> menu option to open the
        connection popup.</li>
      <li>Enter the OLAP server URL in the <strong>URL</strong> input box and click <strong>Connect</strong>. This
        will load the available data sources from the OLAP server.</li>
      <li>Select a data source from the <strong>Data Sources</strong> dropdown. This will load the available catalogs
        for that data source.</li>
      <li>Select a catalog from the <strong>Catalogs</strong> dropdown. This will load the available cubes for that
        catalog.</li>
      <li>Select a cube from the <strong>Cubes</strong> dropdown, then click <strong>OK</strong> to load the selected
        cube and begin your analysis.</li>
    </ul>

    <h4>Load a Pivot Report:</h4>
    <p>You can load previously saved Pivot Report(s), which are in JSON file format, at any time to restore the exact
      analysis state.</p>
    <ul>
      <li>
        <strong>Local JSON Pivot Report:</strong> Hover over the second toolbar option, then hover over the
        <strong>Load Pivot Report</strong> menu option and select the <strong>Local JSON</strong> submenu option to
        choose and load a JSON Pivot Report file from your machine.
      </li>
      <li>
        <strong>Remote JSON Pivot Report:</strong> Hover over the second toolbar option, then hover over the
        <strong>Load Pivot Report</strong> menu option and select the <strong>Remote JSON</strong> submenu option. A
        popup will appear where you can enter the remote JSON Pivot Report file URL in the input box to load the
        report into the Pivot Table.
      </li>
    </ul>

    <h4>Save a Pivot Report:</h4>
    <p>
      You can save the Pivot Table report as a JSON file by clicking the third toolbar option (<strong>Save Pivot
        Report as JSON</strong>) to preserve configurations such as filtering, sorting, field arrangements,
      formatting, aggregations, and more. In this example, the report configurations are saved excluding the data
      source, but you can customize this behavior as needed.
    </p>
    <br />
    <p>More information on the Essential® JS2 Pivot Table can be found in these <a target="_blank"
        href="https://ej2.syncfusion.com/vue/documentation/pivotview/data-binding">Data Binding</a> and
      <a target="_blank"
        href="https://ej2.syncfusion.com/vue/documentation/pivotview/tool-bar#save-and-load-report-as-a-json-file">Save
        and load report as a JSON file</a> documentation sections.
    </p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
PivotViewComponent,
FieldList,
Toolbar,
CalculatedField,
NumberFormatting,
PDFExport,
ExcelExport,
ConditionalFormatting,
IDataSet,
IDataOptions
} from '@syncfusion/ej2-vue-pivotview';
import { Menu } from '@syncfusion/ej2-navigations';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { Browser } from '@syncfusion/ej2-base';
import { Pivot_Data } from './data-source';
import { OlapEngine, PivotEngine } from '@syncfusion/ej2-pivotview';

let dataSource: any;
export default defineComponent({
name: 'DynamicBinding',
components: {
  'ejs-pivotview': PivotViewComponent,
  'ejs-dialog': DialogComponent,
  'ejs-dropdownlist': DropDownListComponent,
  'ejs-button': ButtonComponent
},
data() {
  return {
    dataSourceSettings: {
      columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
      type: 'JSON' as any,
      dataSource: Pivot_Data as IDataSet[],
      expandAll: false,
      filters: [],
      drilledMembers: [{ name: 'Country', items: ['France'] }] as any,
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      rows: [{ name: 'Country' }, { name: 'Products' }],
      values: [
        { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }
      ]
    } as IDataOptions,
    toolbarOptions: ['Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'] as any,
    // dialog state
    isDialogOpen: false,
    dialogType: '', // 'CSV' | 'JSON' | 'report' | 'olap'
    olapDialogKey: 0,
    remoteUrl: '',
    isErrorDialogOpen: false,
    errorMessage: '',
    currentData: Pivot_Data as any[],
    olapProxyUrl: 'https://bi.syncfusion.com/olap/msmdpump.dll',
    proxyBaseUrl: '',
    olapConnected: false,
    olapDataSources: [] as string[],
    olapCatalogs: [] as string[],
    olapCubes: [] as string[],
    selectedDataSource: '',
    selectedCatalog: '',
    selectedCube: '',
    loadingSources: false,
    loadingCatalogs: false,
    loadingCubes: false,
    olapUiMessage: '',
    connectMenu: null as Menu | null,
    openMenu: null as Menu | null,
    shouldAutoConfig: false,
    defaultUrls: {
      CSV: 'https://cdn.syncfusion.com/data/sales-analysis.csv',
      JSON: 'https://cdn.syncfusion.com/data/sales-analysis.json'
    } as Record<'CSV' | 'JSON', string>
  };
},
methods: {
  onCloseDialog() { (this as any).isDialogOpen = false; (this as any).dialogType = ''; },
  // CSV util
  parseCSV(csvString: string): string[][] {
    const lines = csvString.split(/\r?\n|\r/).filter(l => l.trim());
    return lines.map(line => line.split(',').map(c => c.trim().replace(/^"|"$/g, '').replace(/""/g, '"')));
  },
  isOlapActive(): boolean {
    const pivot: any = (this.$refs as any).pivot?.ej2Instances;
    if (!pivot) return false;
    const ds: any = pivot.dataSourceSettings || {};
    return pivot.dataType === 'olap' || !!pivot.olapEngineModule || ds.providerType === 'SSAS';
  },
  cleanOlapForRelational() {
    const pivot: any = (this.$refs as any).pivot?.ej2Instances;
    if (!pivot) return;
    pivot.olapEngineModule = null;
    pivot.dataType = 'pivot';
    pivot.engineModule = new PivotEngine();
    if (pivot.dataSourceSettings) {
      pivot.dataSourceSettings.providerType = undefined;
      pivot.dataSourceSettings.catalog = undefined as any;
      pivot.dataSourceSettings.cube = undefined as any;
      pivot.dataSourceSettings.url = undefined as any;
    }
    pivot.refresh();
  },
  setPivotData(type: 'CSV' | 'JSON', data: any[] | string[][]) {
    const pivot: any = (this.$refs as any).pivot?.ej2Instances;
    if (!pivot) return;
    if (this.isOlapActive()) this.cleanOlapForRelational();
    pivot.dataSourceSettings.type = type as any;
    pivot.dataSourceSettings.dataSource = data as any;
    delete (pivot.dataSourceSettings as any).url;
    (this as any).currentData = data as any[];
    (this as any).shouldAutoConfig = true;
    pivot.refresh();
  },
  async applyReportSettings(pivot: any, reportSettings: any, isOlapReport: boolean, entireReportSettings: any) {
    if (isOlapReport) {
      (this as any).currentData = [];
      pivot.olapEngineModule = new OlapEngine();
      pivot.dataType = 'olap';
      pivot.loadPersistData(JSON.stringify(entireReportSettings));
      pivot.refresh();
      (this as any).shouldAutoConfig = false;
    } else {
      this.cleanOlapForRelational();
      const maybeDataUrl: string | undefined = (reportSettings as any).dataUrl || (reportSettings as any).url;
      const maybeCsvUrl: string | undefined = (reportSettings as any).csvUrl;
      if (!reportSettings.dataSource || reportSettings.dataSource.length === 0) {
        try {
          if (maybeDataUrl) {
            const res = await fetch(maybeDataUrl, { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            const jsonData: any = await res.json();
            const arr = Array.isArray(jsonData) ? jsonData : (jsonData?.data ?? jsonData);
            if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'object') {
              throw new Error('Invalid JSON at dataUrl: expected an array of objects (or under "data").');
            }
            (reportSettings as any).type = 'JSON';
            (reportSettings as any).dataSource = arr;
            (this as any).currentData = arr;
          } else if (maybeCsvUrl) {
            const res = await fetch(maybeCsvUrl, { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            const csvString = await res.text();
            const csvArray = this.parseCSV(csvString);
            if (!csvArray.length) throw new Error('CSV appears empty.');
            (reportSettings as any).type = 'CSV';
            (reportSettings as any).dataSource = csvArray;
            (this as any).currentData = csvArray as any;
          } else {
            (reportSettings as any).dataSource = (this as any).currentData;
            (reportSettings as any).type = pivot.dataSourceSettings.type || 'JSON';
          }
        } catch (_e) {
          (reportSettings as any).dataSource = (this as any).currentData;
          (reportSettings as any).type = pivot.dataSourceSettings.type || 'JSON';
        }
      }
      entireReportSettings.dataSourceSettings.dataSource = dataSource;
      pivot.loadPersistData(JSON.stringify(entireReportSettings));
      pivot.refresh();
      (this as any).shouldAutoConfig = false;
    }
  },
  handleConnectFileChange(e: any) {
    const inputEl = e.target as HTMLInputElement;
    const file = inputEl.files && inputEl.files[0];
    if (!file) return;
    const isCsv = inputEl.dataset.type === 'CSV' || /\.csv$/i.test(file.name);
    const reader = new FileReader();
    reader.onload = async (evt: any) => {
      try {
        const pivot: any = (this.$refs as any).pivot?.ej2Instances;
        if (pivot && pivot.engineModule) { (pivot.engineModule as any).fieldList = {}; }
        if (pivot) {
          pivot.dataSourceSettings.rows = [];
          pivot.dataSourceSettings.columns = [];
          pivot.dataSourceSettings.values = [];
          pivot.dataSourceSettings.filters = [];
        }
        if (isCsv) {
          const csvString = String(evt.target?.result ?? '');
          const csvArray = this.parseCSV(csvString);
          if (!csvArray.length) { alert('CSV appears empty.'); return; }
          this.setPivotData('CSV', csvArray);
        } else {
          const raw = String(evt.target?.result ?? '');
          const parsed = JSON.parse(raw);
          const unwrappedData = (parsed && typeof parsed === 'object' && 'record' in parsed) ? (parsed as any).record : parsed;
          const looksLikeReport = !Array.isArray(unwrappedData) && (unwrappedData?.dataSourceSettings || unwrappedData?.rows || unwrappedData?.columns || unwrappedData?.values || unwrappedData?.url || unwrappedData?.providerType);
          const pivotRef: any = (this.$refs as any).pivot?.ej2Instances;
          if (looksLikeReport) {
            const reportSettings = (unwrappedData as any).dataSourceSettings ?? unwrappedData;
            const isOlapReport = (reportSettings as any)?.providerType === 'SSAS';
            if (pivotRef) this.resetPivot();
            if (pivotRef) await this.applyReportSettings(pivotRef, reportSettings, isOlapReport, parsed);
            return;
          }
          const dataArray = Array.isArray(unwrappedData) ? unwrappedData : (unwrappedData?.data ?? unwrappedData);
          if (!Array.isArray(dataArray) || dataArray.length === 0 || typeof dataArray[0] !== 'object') {
            alert('Invalid JSON: Provide a saved report or a non-empty array of objects (or under "data").');
            return;
          }
          this.setPivotData('JSON', dataArray);
        }
      } catch (err: any) {
        alert(`Failed to load file: ${err.message}`);
      }
    };
    reader.readAsText(file);
    inputEl.value = '';
  },
  toolbarRender(args: any) {
    const connectMenu: any = { template: '<ul id="connect_menu"></ul>', id: 'custom_toolbar' };
    args.customToolbar.splice(0, 0, connectMenu);
    const openMenu: any = { template: '<ul id="open_menu"></ul>', id: 'open_toolbar' };
    args.customToolbar.splice(1, 0, openMenu);
    const saveItem: any = { prefixIcon: 'e-save-report e-btn-icon e-icons', tooltipText: 'Save Pivot Report as JSON', click: this.toolbarClicked };
    args.customToolbar.splice(2, 0, saveItem);
    const sep: any = { type: 'Separator' };
    args.customToolbar.splice(3, 0, sep);
  },
  onDataBound() {
    const pivot: any = (this.$refs as any).pivot?.ej2Instances;
    if (Browser.isDevice && pivot && pivot.enableRtl) {
      const el = document.querySelector('.control-section');
      if (el) el.classList.add('e-rtl');
    }
    const connectEl = document.getElementById('connect_menu');
    if (connectEl) {
      const items: any = [{
        iconCss: 'e-connect-report e-btn-icon e-icons',
        items: [
          { text: 'JSON', iconCss: 'e-json-icon e-icons', items: [{ text: 'Local', id: 'local_json' }, { text: 'Remote', id: 'remote_json' }] },
          { text: 'CSV', iconCss: 'e-csv-icon e-icons', items: [{ text: 'Local', id: 'local_csv' }, { text: 'Remote', id: 'remote_csv' }] },
          { text: 'OLAP(XMLA)', id: 'olap', iconCss: 'e-olap-icon e-icons' }
        ]
      }];
      if (this.connectMenu) { this.connectMenu.destroy(); this.connectMenu = null; }
      this.connectMenu = new Menu({ items, select: this.gridToolbarClicked as any, cssClass: 'e-pivot-toolbar-menu' }, '#connect_menu');
    }
    const openEl = document.getElementById('open_menu');
    if (openEl) {
      const openItems: any = [{
        iconCss: 'e-open-report e-btn-icon e-icons',
        items: [{ text: 'Load Pivot Report', items: [{ text: 'Local JSON', id: 'local_report', iconCss: 'e-local-report-icon e-icons' }, { text: 'Remote JSON', id: 'remote_report', iconCss: 'e-remote-report-icon e-icons' }] }]
      }];
      if (this.openMenu) { this.openMenu.destroy(); this.openMenu = null; }
      this.openMenu = new Menu({ items: openItems, select: this.openToolbarClicked as any, cssClass: 'e-pivot-toolbar-menu' }, '#open_menu');
    }
  },
  onEnginePopulated() {
    const pivot: any = (this.$refs as any).pivot?.ej2Instances;
    if ((this as any).shouldAutoConfig && pivot) {
      (this as any).shouldAutoConfig = false;
      pivot.displayOption = { view: 'Both', primary: 'Table' };
      if (!pivot.dataSourceSettings.values || pivot.dataSourceSettings.values.length === 0) {
        (pivot.pivotFieldListModule.dialogRenderer as any).onShowFieldList();
      }
    }
  },
  async toolbarClicked() { await this.saveReport(); },
  async saveReport() {
    const pivot: any = (this.$refs as any).pivot?.ej2Instances;
    if (!pivot) return;
    const download = (content: string, mime: string, filename: string) => {
      const blob = new Blob([content], { type: mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename; document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    };
    try {
      const persisted = pivot.getPersistData();
      let dataSourceSettingsOnly: any = {};
      let parsed: any;
      try {
        parsed = JSON.parse(persisted);
        var isOlapReport = parsed && parsed.dataSourceSettings && parsed.dataSourceSettings.providerType === 'SSAS';
        if (!isOlapReport && parsed && parsed.dataSourceSettings) { 
          dataSource = parsed.dataSourceSettings.dataSource;
          parsed.dataSourceSettings.dataSource = []; 
        }
        parsed.pivotValues = [] as any;
        dataSourceSettingsOnly = parsed?.dataSourceSettings ?? pivot.dataSourceSettings ?? {};
      } catch {
        dataSourceSettingsOnly = pivot.dataSourceSettings ?? {};
      }
      const json = JSON.stringify(parsed, null, 2);
      download(json, 'application/json', 'pivot.json');
    } catch (err: any) {
      alert(`Failed to save: ${err.message}`);
    }
  },
  openToolbarClicked(args?: any) {
    const itemId = args?.item?.id;
    if (!itemId) return;
    if (itemId === 'local_report') {
      const input: any = this.$refs.connectFile as HTMLInputElement;
      if (input) {
        input.onchange = null as any;
        input.value = '';
        input.accept = '.json';
        delete input.dataset.type;
        input.onchange = this.handleConnectFileChange as any;
        input.click();
      }
      return;
    }
    if (itemId === 'remote_report') {
      (this as any).dialogType = 'JSON Report';
      (this as any).remoteUrl = 'https://api.jsonbin.io/v3/b/6912d9ecd0ea881f40e12335';
      (this as any).isDialogOpen = true;
      return;
    }
  },
  gridToolbarClicked(args?: any) {
    const itemId = args?.item?.id;
    if (!itemId) return;
    if (itemId === 'local_csv' || itemId === 'local_json') {
      const ext = itemId === 'local_csv' ? 'CSV' : 'JSON';
      const input: any = this.$refs.connectFile as HTMLInputElement;
      if (input) {
        input.onchange = null as any;
        input.value = '';
        input.accept = ext === 'CSV' ? '.csv' : '.json';
        input.dataset.type = ext;
        input.onchange = this.handleConnectFileChange as any;
        input.click();
      }
      return;
    }
    if (itemId === 'remote_csv' || itemId === 'remote_json') {
      const type = itemId === 'remote_csv' ? 'CSV' : 'JSON';
      (this as any).dialogType = type;
      (this as any).remoteUrl = (this as any).defaultUrls[type as 'CSV' | 'JSON'] || '';
      (this as any).isDialogOpen = true;
      return;
    }
    if (itemId === 'olap') {
      (this as any).olapDialogKey++;
      (this as any).dialogType = 'OLAP';
      (this as any).isDialogOpen = true;
      (this as any).olapConnected = false;
      (this as any).olapUiMessage = '';
      (this as any).loadingSources = false;
      (this as any).loadingCatalogs = false;
      (this as any).loadingCubes = false;
      (this as any).olapDataSources = [];
      (this as any).olapCatalogs = [];
      (this as any).olapCubes = [];
      (this as any).selectedDataSource = '';
      (this as any).selectedCatalog = '';
      (this as any).selectedCube = '';
      return;
    }
  },
  resetPivot() {
    const pivot: any = (this.$refs as any).pivot?.ej2Instances;
    if (pivot && pivot.engineModule) { (pivot.engineModule as any).fieldList = {}; }
    if (pivot && pivot.dataSourceSettings) {
      pivot.dataSourceSettings.rows = [];
      pivot.dataSourceSettings.columns = [];
      pivot.dataSourceSettings.values = [];
      pivot.dataSourceSettings.filters = [];
      pivot.dataSourceSettings.conditionalFormatSettings = [];
      pivot.dataSourceSettings.formatSettings = [];
      pivot.dataSourceSettings.drilledMembers = [];
      pivot.dataSourceSettings.fieldMapping = [];
      pivot.dataSourceSettings.excludeFields = [];
      pivot.dataSourceSettings.filterSettings = [];
      pivot.dataSourceSettings.sortSettings = [];
      pivot.dataSourceSettings.valueSortSettings = {};
      pivot.dataSourceSettings.calculatedFieldSettings = [];
      pivot.dataSourceSettings.groupSettings = [];
      pivot.dataSourceSettings.expandAll = false;
      pivot.dataSourceSettings.showGrandTotals = true;
      pivot.dataSourceSettings.showRowGrandTotals = true;
      pivot.dataSourceSettings.showColumnGrandTotals = true;
      pivot.dataSourceSettings.showSubTotals = true;
      pivot.dataSourceSettings.showRowSubTotals = true;
      pivot.dataSourceSettings.showColumnSubTotals = true;
    }
  },
  // XMLA helpers
  xmlaSoapEnvelope(requestType: string, restrictions: Record<string, any> = {}, properties: Record<string, any> = {}) {
    const restrXml = Object.keys(restrictions).length
      ? `<Restrictions><RestrictionList>${Object.entries(restrictions).map(([k, v]) => `<${k}>${String(v)}</${k}>`).join('')}</RestrictionList></Restrictions>`
      : '<Restrictions />';
    const propXml = `<Properties><PropertyList>${Object.entries(properties).map(([k, v]) => `<${k}>${String(v)}</${k}>`).join('')}</PropertyList></Properties>`;
    return `<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n<soap:Header />\n<soap:Body>\n<Discover xmlns="urn:schemas-microsoft-com:xml-analysis">\n<RequestType>${requestType}</RequestType>\n${restrXml}\n${propXml}\n</Discover>\n</soap:Body>\n</soap:Envelope>`;
  },
  resolveEndpoint(endpoint: string) {
    const trimmed = endpoint.trim();
    if (!(this as any).proxyBaseUrl) return trimmed;
    const sep = (this as any).proxyBaseUrl.includes('?') ? '&' : '?';
    return `${(this as any).proxyBaseUrl}${sep}url=${encodeURIComponent(trimmed)}`;
  },
  async postXMLA(endpoint: string, bodyXml: string) {
    const url = this.resolveEndpoint(endpoint);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'Accept': 'text/xml, application/xml, */*;q=0.1'
      },
      body: bodyXml
    });
    const text = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    return text;
  },
  parseRowset(xmlText: string) {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, 'text/xml');
    const rows = Array.from(xml.getElementsByTagNameNS('*', 'row'));
    const result = rows.map((r: any) => {
      const obj: Record<string, string> = {};
      Array.from(r.children).forEach((c: any) => { obj[(c as Element).localName] = (c.textContent ?? '').trim(); });
      return obj;
    });
    const fault = xml.getElementsByTagNameNS('*', 'Fault')[0];
    if (fault) { throw new Error((fault.textContent || 'SOAP Fault').trim()); }
    return result as Record<string, string>[];
  },
  async discoverDataSources(endpoint: string): Promise<string[]> {
    const body = this.xmlaSoapEnvelope('DISCOVER_DATASOURCES');
    const xml = await this.postXMLA(endpoint, body);
    const rows = this.parseRowset(xml);
    return rows.map(r => r.DataSourceName).filter(Boolean) as string[];
  },
  async discoverCatalogs(endpoint: string): Promise<string[]> {
    const body = this.xmlaSoapEnvelope('DBSCHEMA_CATALOGS');
    const xml = await this.postXMLA(endpoint, body);
    const rows = this.parseRowset(xml);
    return rows.map(r => r.CATALOG_NAME).filter(Boolean) as string[];
  },
  async discoverCubes(endpoint: string, catalog: string): Promise<string[]> {
    const body = this.xmlaSoapEnvelope('MDSCHEMA_CUBES', { CATALOG_NAME: catalog });
    const xml = await this.postXMLA(endpoint, body);
    const rows = this.parseRowset(xml);
    return rows.filter(r => r.CUBE_SOURCE === '1').map(r => r.CUBE_NAME).filter(Boolean) as string[];
  },
  async applyOlapBinding(opts?: { url?: string; catalog?: string; cube?: string }) {
    const pivot: any = (this.$refs as any).pivot?.ej2Instances;
    if (!pivot) return;
    const url = opts?.url ?? this.resolveEndpoint((this as any).olapProxyUrl);
    const catalog = opts?.catalog ?? (this as any).selectedCatalog;
    const cube = opts?.cube ?? (this as any).selectedCube;
    if (!url || !catalog || !cube) return;
    const olapSettings: IDataOptions = { url, catalog, providerType: 'SSAS', cube, localeIdentifier: 1033, dataSource: [], rows: [], columns: [], values: [] } as any;
    pivot.engineModule = null;
    pivot.olapEngineModule = new OlapEngine();
    pivot.dataType = 'olap';
    pivot.dataSourceSettings = olapSettings as any;
    (this as any).currentData = [];
    (this as any).shouldAutoConfig = true;
    pivot.refresh();
  },
  async loadRemoteAndBind(kind: 'CSV' | 'JSON', url: string) {
    const cleanUrl = url.trim();
    if (!cleanUrl) throw new Error('Empty URL');
    this.resetPivot();
    if (kind === 'CSV') {
      const res = await fetch(cleanUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const csvString = await res.text();
      const csvArray = this.parseCSV(csvString);
      if (!csvArray.length) throw new Error('CSV appears empty.');
      this.setPivotData('CSV', csvArray);
    } else {
      const res = await fetch(cleanUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const jsonData: any = await res.json();
      const unwrapped = (jsonData && typeof jsonData === 'object' && 'record' in jsonData) ? jsonData.record : jsonData;
      const looksLikeReport = !Array.isArray(unwrapped) && (unwrapped?.dataSourceSettings || unwrapped?.rows || unwrapped?.columns || unwrapped?.values || unwrapped?.url || unwrapped?.providerType);
      const pivot: any = (this.$refs as any).pivot?.ej2Instances;
      if (looksLikeReport) {
        const reportSettings = (unwrapped as any).dataSourceSettings ?? unwrapped;
        const isOlapReport = (reportSettings as any)?.providerType === 'SSAS';
        this.resetPivot();
        if (pivot) { await this.applyReportSettings(pivot, reportSettings, isOlapReport, unwrapped); return; }
      }
      const arr = Array.isArray(unwrapped) ? unwrapped : (unwrapped?.data ?? unwrapped);
      if (!Array.isArray(arr) || arr.length === 0 || typeof arr[0] !== 'object') {
        throw new Error('Invalid JSON: Provide a saved report or a non-empty array of objects (or under "data").');
      }
      this.setPivotData('JSON', arr);
    }
  },
  async handleOpenRemote() {
    if (!this.remoteUrl.trim()) {
      (this as any).errorMessage = 'Please enter a valid URL.';
      (this as any).isDialogOpen = false;
      (this as any).isErrorDialogOpen = true;
      return;
    }
    try {
      await this.loadRemoteAndBind(this.dialogType as 'CSV' | 'JSON', this.remoteUrl);
      (this as any).isDialogOpen = false;
    } catch (err: any) {
      (this as any).errorMessage = `Failed to load remote ${this.dialogType}: ${err.message}\n\nTip: Ensure the URL is accessible and allows CORS for your origin.`;
      (this as any).isDialogOpen = false;
      (this as any).isErrorDialogOpen = true;
    }
  },
  async onOlapConnect() {
    (this as any).olapUiMessage = '';
    (this as any).loadingSources = true;
    try {
      const sources = await this.discoverDataSources((this as any).olapProxyUrl);
      (this as any).olapDataSources = sources;
      (this as any).selectedDataSource = '';
      (this as any).olapConnected = true;
      (this as any).olapUiMessage = sources.length ? '' : 'No data sources found.';
    } catch (e: any) {
      const corsHint = ' If the browser blocks this due to CORS, configure a proxy base URL and try again.';
      (this as any).olapUiMessage = `Connect failed: ${e.message}.${corsHint}`;
      (this as any).olapConnected = false;
      (this as any).olapDataSources = [];
    } finally {
      (this as any).loadingSources = false;
    }
  },
  async onOlapDataSourceChange(e: any) {
    const v = e.value; (this as any).selectedDataSource = v;
    (this as any).selectedCatalog = ''; (this as any).selectedCube = '';
    (this as any).olapCatalogs = []; (this as any).olapCubes = [];
    if (!v) return; (this as any).loadingCatalogs = true;
    try { const cats = await this.discoverCatalogs((this as any).olapProxyUrl); (this as any).olapCatalogs = cats; (this as any).selectedCatalog = ''; }
    catch (err: any) { (this as any).olapUiMessage = `Load catalogs failed: ${err.message}`; }
    finally { (this as any).loadingCatalogs = false; }
  },
  async onOlapCatalogChange(e: any) {
    const v = e.value; (this as any).selectedCatalog = v; (this as any).selectedCube = ''; (this as any).olapCubes = [];
    if (!v) return; (this as any).loadingCubes = true;
    try { const cubes = await this.discoverCubes((this as any).olapProxyUrl, v); (this as any).olapCubes = cubes; (this as any).selectedCube = ''; }
    catch (err: any) { (this as any).olapUiMessage = `Load cubes failed: ${err.message}`; }
    finally { (this as any).loadingCubes = false; }
  },
  async onOlapCubeChange(e: any) {
    const v = e.value; (this as any).selectedCube = v;
    const pivot: any = (this.$refs as any).pivot?.ej2Instances;
    const isOlap = pivot && (pivot.dataSourceSettings as any)?.providerType === 'SSAS';
    if (isOlap && v) { await this.applyOlapBinding({ cube: v }); }
  },
  async onOlapOk() {
    const pivot: any = (this.$refs as any).pivot?.ej2Instances;
    if (!pivot) { (this as any).isDialogOpen = false; return; }
    if (!(this as any).olapConnected || !(this as any).selectedCatalog || !(this as any).selectedCube) { alert('Please connect and select a Catalog and Cube.'); return; }
    await this.applyOlapBinding({ url: this.resolveEndpoint((this as any).olapProxyUrl), catalog: (this as any).selectedCatalog, cube: (this as any).selectedCube });
    (this as any).isDialogOpen = false;
  }
},
provide: {
  pivotview: [FieldList, Toolbar, CalculatedField, PDFExport, ExcelExport, ConditionalFormatting, NumberFormatting]
}
});
</script>

<style>
.e-pivotview {
width: 100%;
height: 100%;
}

.sb-sample-content-area,
.control-section {
min-height: 255px !important;
}

.e-connect-report::before,
.e-save-report::before,
.e-open-report::before {
font-family: 'e-icons';
}

.e-connect-report::before {
content: '\e835';
}

.e-save-report::before {
content: '\e98e';
}

.e-open-report::before {
content: '\e760';
}

.e-csv-icon::before,
.e-json-icon::before,
.e-olap-icon::before {
font-family: 'e-icons';
color: #666;
content: "";
}

.e-csv-icon::before {
  content: '\e7ba';
}

.e-json-icon.e-icons::before {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="white"/><rect x="2" y="2" width="20" height="20" rx="2.5" stroke="%23555" stroke-width="2"/><path d="M6.3115 10.255C6.41117 10.255 6.49783 10.2918 6.5715 10.3655C6.64517 10.4392 6.682 10.5258 6.682 10.6255V13.18C6.682 13.8603 6.539 14.3457 6.253 14.636C5.97133 14.922 5.50767 15.065 4.862 15.065C4.459 15.065 4.09933 15.0238 3.783 14.9415C3.679 14.9155 3.5945 14.8592 3.5295 14.7725C3.4645 14.6815 3.432 14.5797 3.432 14.467V14.09C3.432 14.0077 3.46667 13.9427 3.536 13.895C3.60967 13.843 3.68767 13.8322 3.77 13.8625C4.07333 13.9708 4.3615 14.025 4.6345 14.025C4.8815 14.025 5.06133 13.9513 5.174 13.804C5.291 13.6567 5.3495 13.4053 5.3495 13.05V10.6255C5.3495 10.5258 5.38633 10.4392 5.46 10.3655C5.53367 10.2918 5.62033 10.255 5.72 10.255H6.3115ZM9.15886 12.01C9.76552 12.1877 10.188 12.4 10.4264 12.647C10.6647 12.894 10.7839 13.2233 10.7839 13.635C10.7839 14.5883 10.1664 15.065 8.93136 15.065C8.53702 15.065 8.17952 15 7.85886 14.87C7.75919 14.831 7.67902 14.7617 7.61836 14.662C7.56202 14.5623 7.53386 14.454 7.53386 14.337V14.0055C7.53386 13.9232 7.56852 13.8625 7.63786 13.8235C7.70719 13.7845 7.77869 13.7823 7.85236 13.817C8.19469 13.9773 8.53269 14.0575 8.86636 14.0575C9.25636 14.0575 9.45136 13.9275 9.45136 13.6675C9.45136 13.5462 9.42102 13.453 9.36036 13.388C9.29969 13.323 9.18919 13.2645 9.02886 13.2125C8.45252 13.0348 8.03652 12.8138 7.78086 12.5495C7.52952 12.2808 7.40386 11.9493 7.40386 11.555C7.40386 11.1303 7.55552 10.7967 7.85886 10.554C8.16652 10.3113 8.61069 10.19 9.19136 10.19C9.60736 10.19 9.97786 10.2355 10.3029 10.3265C10.4069 10.3568 10.4914 10.4197 10.5564 10.515C10.6214 10.606 10.6539 10.7078 10.6539 10.8205V11.139C10.6539 11.2257 10.617 11.295 10.5434 11.347C10.474 11.3947 10.396 11.4033 10.3094 11.373C9.92369 11.2473 9.57269 11.1845 9.25636 11.1845C8.90102 11.1845 8.72336 11.308 8.72336 11.555C8.72336 11.7717 8.86852 11.9233 9.15886 12.01ZM12.6133 12.6275C12.6133 13.5375 12.9274 13.9925 13.5558 13.9925C14.1841 13.9925 14.4983 13.5375 14.4983 12.6275C14.4983 11.7175 14.1841 11.2625 13.5558 11.2625C12.9274 11.2625 12.6133 11.7175 12.6133 12.6275ZM11.8918 10.84C12.2991 10.4067 12.8538 10.19 13.5558 10.19C14.2578 10.19 14.8124 10.4067 15.2198 10.84C15.6271 11.2733 15.8308 11.8692 15.8308 12.6275C15.8308 13.3858 15.6271 13.9817 15.2198 14.415C14.8124 14.8483 14.2578 15.065 13.5558 15.065C12.8538 15.065 12.2991 14.8483 11.8918 14.415C11.4844 13.9817 11.2808 13.3858 11.2808 12.6275C11.2808 11.8692 11.4844 11.2733 11.8918 10.84ZM19.9508 10.255C20.0505 10.255 20.1372 10.2918 20.2108 10.3655C20.2845 10.4392 20.3213 10.5258 20.3213 10.6255V14.6295C20.3213 14.7292 20.2845 14.8158 20.2108 14.8895C20.1372 14.9632 20.0505 15 19.9508 15H19.4568C19.2098 15 19.0322 14.8895 18.9238 14.6685L17.7993 12.4065C17.7993 12.4022 17.7972 12.4 17.7928 12.4C17.7885 12.4 17.7863 12.4022 17.7863 12.4065V14.6295C17.7863 14.7292 17.7495 14.8158 17.6758 14.8895C17.6022 14.9632 17.5155 15 17.4158 15H16.9218C16.8222 15 16.7355 14.9632 16.6618 14.8895C16.5882 14.8158 16.5513 14.7292 16.5513 14.6295V10.6255C16.5513 10.5258 16.5882 10.4392 16.6618 10.3655C16.7355 10.2918 16.8222 10.255 16.9218 10.255H17.4158C17.6628 10.255 17.8405 10.3655 17.9488 10.5865L19.0733 12.8485C19.0733 12.8528 19.0755 12.855 19.0798 12.855C19.0842 12.855 19.0863 12.8528 19.0863 12.8485V10.6255C19.0863 10.5258 19.1232 10.4392 19.1968 10.3655C19.2705 10.2918 19.3572 10.255 19.4568 10.255H19.9508Z" fill="%23555"/></svg>');
}

.e-olap-icon.e-icons::before {
  font-family: unset;
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M3 6.5L7.5 8.75M3 6.5L8 4M3 6.5V12M12 22L16.5 19.75M12 22V16M12 22L7.5 19.75M21 6.5L16 4M21 6.5L16.5 8.75M21 6.5V12M12 11L7.5 8.75M12 11L16.5 8.75M12 11V16M7.5 8.75L16 4M7.5 8.75V19.75M16 4L12 2L8 4M8 4L16.5 8.75M16.5 8.75V19.75M16.5 19.75L21 17.5V12M12 16L21 12M12 16L3 12M3 12V17.5L7.5 19.75" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
}

.e-remote-report-icon::before {
content: '\e797';
}

.e-local-report-icon::before {
content: '\e911';
}

.olap-row {
display: grid;
grid-template-columns: 160px 1fr;
align-items: center;
}

.olap-row label {
color: #666;
font-size: 14px;
font-weight: 500;
margin-bottom: 6px;
display: block;
}

.error-message {
color: #333;
font-size: 14px;
margin: 0 0 20px;
line-height: 1.4;
white-space: pre-wrap;
text-align: left;
}
</style>
