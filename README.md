# Syncfusion Vue UI Components samples

This repository contains the demos of [Syncfusion Vue UI Components](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github&utm_campaign=ej2-vue-samples). This is the best place to check our components to get more insight about the usage of APIs.

This section guides you to use the Syncfusion Vue UI Components samples in your applications.

* [Requirements to run the demo](#requirements-to-run-the-demo)
* [Documentation](#documentation)
* [License](#license)
* [Using the samples](#using-the-samples)
* [Components Catalog](#components-catalog)
* [Support and Feedback](#support-and-feedback)

## Requirements to run the demo

The samples requires the below requirements to run.

* [Node.js](https://nodejs.org/en/)

## Documentation

All components documentation for the Syncfusion Vue UI components can be found on [Syncfusion Help](https://ej2.syncfusion.com/vue/documentation/?utm_source=github&utm_medium=listing&utm_campaign=ej2-vue-samples). All API documentation can be found at the [API Reference](https://ej2.syncfusion.com/vue/documentation/api?utm_source=github&utm_medium=listing&utm_campaign=ej2-vue-samples).

## License

Syncfusion Vue UI (Essential JS 2) components library is available under the Syncfusion Essential Studio program,  and can be licensed either under the Syncfusion Community License Program or the Syncfusion commercial license.

To be qualified for the Syncfusion Community License Program you must have a gross revenue of less than one (1) million U.S. dollars ($1,000,000.00 USD) per year and have less than five (5) developers in your organization, and agree to be bound by Syncfusion’s terms and conditions.

Customers who do not qualify for the community license can contact sales@syncfusion.com for commercial licensing options.

Under no circumstances can you use this product without (1) either a Community License or a commercial license and (2) without agreeing and abiding by Syncfusion’s license containing all terms and conditions.

The Syncfusion license that contains the terms and conditions can be found at
[https://www.syncfusion.com/content/downloads/syncfusion_license.pdf](https://www.syncfusion.com/content/downloads/syncfusion_license.pdf)

# Using the samples

## Installing

Use the following command to install all dependent packages from the public npm registry.

```bash
npm install
```

## Building

To compile the source files, use the below command

```bash
npm run build
```

It calls the following tasks synchronously,

1. Build
2. Site-map generate
3. Source-ship

### **Build**

Use the below command to run this task and it calls the following tasks synchronously.

1. Generate routes
2. Style ship
3. Copy source
4. build

### Generate routes

Use the below command to generate `router.config.ts` file and it contains routing path for all samples.

```
gulp generate-routes
```

### Style ship

It copies css files for themes from node_modules. Use the below command to run it individual.

```
gulp styles-ship
```

### Copy source

It select all files in `src/` except `src/common` and stored it in `public/src` folder. The below command is used to run this task.

```
gulp copy-source
```

### build

Use the below command to generate scripts, styles, locale and sample lists.

```
gulp build
```
It runs the following tasks syncronously,

1. Scripts
2. Styles

#### **Scripts**

 It compiles the Typescript files and use the below command to run this task.

```
gulp scripts
```

#### **Styles**

`gulp styles` command is used to compile default themes. It calls the following two tasks synchronously.

1. Default theme
2. Compile styles

#### Default theme

Use the below command to generate default theme files.

```
gulp default-theme
```

#### Compile Styles
It compiles the scss file to css file. To run this task use the below command,

```
gulp compile-styles
```

### Site map generation

The below command combines sample of all components and store it in sitemap-demos.xml file to index our components, samples, documents in search engine.

```
gulp sitemap-generate
```

### Source-ship

It copies all files in the repository and paste it in `dist/` folder. To run this task use the below command,

```
gulp source-ship
```

## Serving deployed build

https://cli.vuejs.org/guide/deployment.html

# Components Catalog

<table>
    <tr>
        <td colspan="3" rowspan="1">
            <b>GRIDS<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/grid">DataGrid</a>
        </td>
        <td>
            <a href="src/tree-grid">Tree Grid</a>
        </td>
        <td>
            <a href="src/pivot-view">Pivot Table (Updated)</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/spreadsheet">Spreadsheet (Preview)</a>
        </td>
        <td></td> 
        <td></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="1">
            <b>DATA VISUALIZATION<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/chart">Charts (Updated)</a>
        </td>
        <td>
            <a href="src/diagram">Diagram</a>
        </td>
        <td>
            <a href="src/stock-chart">Stock Chart</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/maps">Maps</a>
        </td>
        <td>
            <a href="src/treemap">TreeMap</a>
        </td>
        <td>
            <a href="src/heatmap">Heatmap chart</a>
        </td>     
    </tr>
    <tr>
        <td>
            <a href="src/circular-gauge">Circular Gauge</a>
        </td>
        <td>
            <a href="src/linear-gauge">Linear Gauge</a>
        </td>
        <td>
            <a href="src/range-navigator">Range Selector</a>
        </td>        
    </tr>
    <tr>
        <td>
            <a href="src/sparkline">Sparkline Charts</a>
        </td>
         <td>
            <a href="src/smith-chart">Smith Chart</a>
        </td>
        <td>
            <a href="src/barcode">Barcode</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/bullet-chart">Bullet Chart (Preview)</a>
        </td>
        <td>
            <a href="src/kanban">Kanban (Preview)</a>
        </td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="1">
            <b>EDITORS<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/rich-text-editor">Rich Text Editor (Updated)</a>
        </td>
        <td>
            <a href="src/document-editor">DocumentEditor (Updated)</a>
        </td>
        <td>
            <a href="src/chips">Chips</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/inplace-editor">InplaceEditor</a>
        </td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="1">
            <b>CALENDARS<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/schedule">Scheduler</a>
        </td>
        <td>
            <a href="src/gantt">Gantt (Updated)</a>
        </td>
        <td>
            <a href="src/calendar">Calendar</a>
        </td>
    </tr>
    <tr>
       <td>
            <a href="src/datepicker">DatePicker</a>
        </td>
        <td>
            <a href="src/daterangepicker">DateRangePicker</a>
        </td>
        <td>
            <a href="src/datetimepicker">DateTimePicker</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/timepicker">TimePicker</a>
        </td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="1">
            <b>BUTTONS<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/button/default.vue">Button</a>
        </td>
        <td>
            <a href="src/button/button-group.vue">Button Group</a>
        </td>
        <td>
            <a href="src/button/checkbox.vue">Checkbox</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/button/radio-button.vue">Radio Button</a>
        </td>
        <td>
            <a href="src/button/dropdown-button.vue">Dropdown Menu</a>
        </td>
        <td>
            <a href="src/button/split-button.vue">Split Button</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/button/switch.vue">Switch</a>
        </td>
        <td>
            <a href="src/button/progress-button.vue">Progress Button</a>
        </td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="1">
            <b>DROPDOWNS<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/auto-complete">AutoComplete</a>
        </td>
        <td>
            <a href="src/combo-box">ComboBox</a>
        </td>
        <td>
            <a href="src/drop-down-list">Dropdown List</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/multi-select">MultiSelect Dropdown</a>
        </td>
        <td>
            <a href="src/list-box">List Box</a>
        </td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="1">
            <b>NAVIGATION<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/accordion">Accordion</a>
        </td>
        <td>
            <a href="src/context-menu">Context Menu</a>
        </td>
        <td>
            <a href="src/file-manager">File Manager (Updated)</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/menu">Menu Bar</a>
        </td>
        <td>
            <a href="src/sidebar">Sidebar</a>
        </td>
        <td>
            <a href="src/tab">Tabs</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/toolbar">Toolbar</a>
        </td>
        <td>
            <a href="src/treeview">TreeView</a>
        </td>
        <td></td>
    </tr>
        <tr>
        <td colspan="3" rowspan="1">
            <b>NOTIFICATIONS<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/badge">Badge</a>
        </td>
        <td>
            <a href="src/toast">Toast</a>
        </td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="1">
            <b>INPUTS<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/textboxes">TextBox</a>
        </td>
        <td>
            <a href="src/maskedtextbox">Input Mask</a>
        </td>
         <td>
            <a href="src/numerictextbox">Numeric Textbox</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/color-picker">Color Picker</a>
        </td>
        <td>
            <a href="src/uploader">File Upload</a>
        </td>
        <td>
            <a href="src/slider">Range Slider</a>
        </td>
    </tr>
    <tr>
        <td colspan="3" rowspan="1">
            <b>LAYOUT<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/avatar">Avatar</a>
        </td>
        <td>
            <a href="src/card">Card</a>
        </td>
        <td>
            <a href="src/dashboard-layout">Dashboard Layout</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/dialog">Dialog (Updated)</a>
        </td>
        <td>
            <a href="src/listview">ListView</a>
        </td>
        <td>
            <a href="src/tooltip">Tooltip</a>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/splitter">Splitter</a>
        </td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="1">
            <b>FORMS<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/query-builder">Query Builder</a>
        </td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3" rowspan="1">
            <b>VIEWER<b>
        </td>
    </tr>
    <tr>
        <td>
            <a href="src/pdfviewer">PDF Viewer (Updated)</a>
        </td>
        <td></td>
        <td></td>
    </tr>
</table>

## Support and Feedback

* For any other queries, reach our [Syncfusion support team](https://www.syncfusion.com/support/directtrac/incidents/newincident?utm_source=github&utm_medium=listing&utm_campaign=ej2-vue-samples) or post the queries through the [community forums](https://www.syncfusion.com/forums?utm_source=github&utm_medium=listing&utm_campaign=ej2-vue-samples).

* To renew the subscription, click [here](https://www.syncfusion.com/sales/products?utm_source=github&utm_medium=listing&utm_campaign=ej2-vue-samples) or contact our sales team at <salessupport@syncfusion.com>.
