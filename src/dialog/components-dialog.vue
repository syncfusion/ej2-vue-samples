<template>
  <div>
    <div class="col-lg-12 control-section dialog-components-sample">
      <!-- Render Button to open the Dialog -->
      <ejs-button id="dlgbtn" v-if="OpenBtn" v-on:click.native="BtnClick"
        >Open</ejs-button
      >
      <ejs-dialog
        id="componentsDialog"
        :buttons="dlgButtons"
        ref="dialogObj"
        :header="header"
        :animationSettings="animationSettings"
        :content="'contenttemplateVue'"
        showCloseIcon="true"
        :target="target"
        width="700px"
        :open="dialogOpen"
        :close="dialogClose"
      >
        <template v-slot:contenttemplateVue>
          <div class="dialogContent">
            <ejs-tab id="tab_default">
              <e-tabitems>
                <e-tabitem :header="headerText0" :content="'GridTemplate'">
                  <template v-slot:GridTemplate="{ data }">
                    <div>
                      <ejs-grid
                        :dataSource="gridData"
                        :allowPaging="true"
                        :pageSettings="pageSettings"
                      >
                        <e-columns>
                          <e-column
                            field="OrderID"
                            headerText="Order ID"
                            width="120"
                            textAlign="Right"
                          ></e-column>
                          <e-column
                            field="CustomerName"
                            headerText="Customer Name"
                            width="150"
                          ></e-column>
                          <e-column
                            field="OrderDate"
                            headerText="Order Date"
                            width="130"
                            format="yMd"
                            textAlign="Right"
                          ></e-column>
                          <e-column
                            field="Freight"
                            headerText="Freight"
                            width="120"
                            format="C2"
                            textAlign="Right"
                          ></e-column>
                          <e-column
                            field="ShippedDate"
                            headerText="Shipped Date"
                            width="130"
                            format="yMd"
                            textAlign="Right"
                          ></e-column>
                          <e-column
                            field="ShipCountry"
                            headerText="Ship Country"
                            width="150"
                          ></e-column>
                        </e-columns>
                      </ejs-grid>
                    </div> </template></e-tabitem></e-tabitems
            ></ejs-tab></div></template
      ></ejs-dialog>
    </div>
  </div>
</template>
</e-tabitem>
<e-tabitem :header='headerText1' :content="'ScheduleTemplate'">
<template v-slot:ScheduleTemplate="{data}">
  <div>
    <ejs-schedule
      height="650px"
      ref="scheduleObj"
      :selectedDate="selectedDate"
      :eventSettings="eventSettings"
    ></ejs-schedule>
  </div>
</template>
</e-tabitem>
<e-tabitem :header='headerText2' :content="'ChartTemplate'">
<template v-slot:ChartTemplate="{data}">
  <div align="center">
    <ejs-chart
      style="display: block"
      ref="chartObj"
      :theme="theme"
      align="center"
      id="chartcontainer"
      :title="title"
      :primaryXAxis="primaryXAxis"
      :primaryYAxis="primaryYAxis"
      :tooltip="tooltip"
      :chartArea="chartArea"
      :width="width"
    >
      <e-series-collection>
        <e-series
          :dataSource="seriesData"
          type="Line"
          xName="x"
          yName="y"
          name="Germany"
          width="2"
          :marker="marker"
        >
        </e-series>
        <e-series
          :dataSource="seriesData1"
          type="Line"
          xName="x"
          yName="y"
          name="England"
          width="2"
          :marker="marker"
        >
        </e-series>
      </e-series-collection>
    </ejs-chart>
  </div>
</template>
</e-tabitem>
<e-tabitem :header='headerText3' :content="'RichTextEditorTemplate'">
<template v-slot:RichTextEditorTemplate="{data}">
  <div>
    <div class="default-section">
      <ejs-richtexteditor>
        <p>
          The rich text editor component is WYSIWYG ("what you see is what you
          get") editor that provides the best user experience to create and
          update the content. Users can format their content using standard
          toolbar commands.
        </p>
        <p><b>Key features:</b></p>
        <ul>
          <li><p>Provides IFRAME and DIV modes</p></li>
          <li><p>Capable of handling markdown editing.</p></li>
          <li>
            <p>
              Contains a modular library to load the necessary functionality on
              demand.
            </p>
          </li>
          <li><p>Provides a fully customizable toolbar.</p></li>
          <li>
            <p>
              Provides HTML view to edit the source directly for developers.
            </p>
          </li>
          <li><p>Supports third-party library integration.</p></li>
          <li><p>Allows preview of modified content before saving it.</p></li>
          <li>
            <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
          </li>
          <li><p>Contains undo/redo manager.</p></li>
          <li><p>Creates bulleted and numbered lists.</p></li>
        </ul>
      </ejs-richtexteditor>
    </div>
  </div>
</template>
</e-tabitem>
<e-tabitem :header='headerText4' :content="'FormsTemplate'">
<template v-slot:FormsTemplate="{data}">
  <div>
    <form id="formId" class="form-horizontal" novalidate>
      <div class="form-group">
        <div class="e-float-input">
          <input
            type="text"
            id="user"
            name="User"
            required
            data-msg-containerid="userError"
          />
          <span class="e-float-line"></span>
          <label class="e-float-text" for="user">User Name</label>
        </div>
        <div id="userError"></div>
      </div>
      <div class="form-group">
        <div class="e-float-input">
          <ejs-datepicker
            id="dob"
            name="DOB"
            :placeholder="waterMark"
            data-msg-containerid="dateError"
          ></ejs-datepicker>
          <span class="e-float-line"></span>
        </div>
        <div id="dateError"></div>
      </div>
      <div class="form-group">
        <div class="e-float-input">
          <textarea rows="2" id="Address" name="Address"></textarea>
          <span class="e-float-line"></span>
          <label class="e-float-text" for="address">Address</label>
        </div>
      </div>
      <div class="form-group">
        <div class="e-float-input">
          <input
            type="text"
            id="city"
            name="City"
            required
            data-msg-containerid="cityError"
          />
          <span class="e-float-line"></span>
          <label class="e-float-text" for="city">City</label>
        </div>
        <div id="cityError"></div>
      </div>
      <div class="form-group">
        <div class="e-float-input">
          <input
            type="text"
            id="state"
            name="State"
            required
            data-msg-containerid="stateError"
          />
          <span class="e-float-line"></span>
          <label class="e-float-text" for="state">State</label>
        </div>
        <div id="stateError"></div>
      </div>
      <div class="row">
        <div
          style="
            width: 320px;
            margin: 0px auto;
            height: 100px;
            padding-top: 25px;
          "
        >
          <div style="display: inline-block">
            <button
              class="submit-btn e-btn e-primary"
              type="submit"
              id="submit-btn"
              style="height: 40px; width: 150px"
            >
              Add Customer
            </button>
          </div>
          <div style="float: right">
            <button
              id="resetbtn"
              class="samplebtn e-control e-btn"
              type="reset"
              style="height: 40px; width: 150px"
              data-ripple="true"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
</e-tabitem>
</e-tabitems>
</ejs-tab>
</div>
</template>
</ejs-dialog>
</div>
<div id="action-description">
<p>
This example demonstrates how to integrate other Vue UI components within the dialog control. In the below example, The dialog component renders with the Grid, Schedule, Chart, Rich Text Editor, Tabs and Form components.
</p>
</div>
<div id="description">
<p>Since the dialog is container component, you can integrate other Vue UI components within the dialog. The dialog can be renders with simple plain-text, HTML string, or Vue UI components. In the above sample, used major components such as Grid, Schedule, Chart, and Rich Text Editor inside dialog.</p>
</div>
</div>
</template><style scoped>
.control-section {
  left: 0px !important;
  top: 0% !important;
}
.dlgbtn {
  margin-right: 10px;
}
.control-section {
  height: 100%;
  min-height: 480px;
}
.dialog-components-sample {
  overflow-y: auto;
}
.e-btn-hide {
  display: none;
}
.form-title {
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
}
.e-error,
.e-float-text {
  font-weight: 500;
}
.e-custom-label {
  font-size: 14px;
  font-weight: 500;
  margin-left: 20px;
}
#formId {
  padding-top: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.36);
  border-radius: 5px;
  background: #f9f9f9;
}
.material-dark #formId,
.bootstrap5-dark #formId {
  background: #212529;
}
.bootstrap-dark #formId {
  background: #1a1a1a;
}
.fabric-dark #formId {
  background: #201f1f;
}
.tailwind-dark #formId {
  background: #1f2937;
}
.fluent-dark #formId {
  background: #111111;
}
.material-dark .form-title,
.bootstrap-dark .form-title,
.fabric-dark .form-title,
.tailwind-dark .form-title,
.bootstrap5-dark .form-title,
.fluent-dark .form-title {
  color: rgb(249 249 249);
}
.highcontrast form,
.highcontrast .header {
  color: #fff;
  background: #000000;
}
.header {
  color: rgba(0, 0, 0, 0.7);
}
table,
td,
th {
  padding: 3px;
}
.form-horizontal .form-group {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 5px;
}
</style><script>
import Vue from "vue";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";
import { DataManager, Query } from "@syncfusion/ej2-data";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { extend } from "@syncfusion/ej2-base";
import { orderDetails } from "./data-source";
import { scheduleData } from "./datasource";
import {
  SchedulePlugin,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-vue-schedule";
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  LineSeries,
  Legend,
  Tooltip,
  DateTime,
} from "@syncfusion/ej2-vue-charts";
import {
  RichTextEditorPlugin,
  Toolbar,
  Link,
  Image,
  QuickToolbar,
  HtmlEditor,
} from "@syncfusion/ej2-vue-richtexteditor";
import { FormValidator } from "@syncfusion/ej2-vue-inputs";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";
Vue.use(DatePickerPlugin);
Vue.use(RichTextEditorPlugin);
Vue.use(ChartPlugin);
Vue.use(SchedulePlugin);
Vue.use(DatePickerPlugin);
Vue.use(GridPlugin);
Vue.use(DialogPlugin);
let OpenBtn = undefined;
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");
export default Vue.extend({
  data: function () {
    return {
      headerText0: { text: "Grid" },
      headerText1: { text: "Scheduler" },
      headerText2: { text: "Chart" },
      headerText3: { text: "Rich Text Editor" },
      headerText4: { text: "Forms" },
      formObj: null,
      waterMark: "Date of Birth",
      theme: theme,
      seriesData: [
        { x: new Date(2005, 0, 1), y: 21 },
        { x: new Date(2006, 0, 1), y: 24 },
        { x: new Date(2007, 0, 1), y: 36 },
        { x: new Date(2008, 0, 1), y: 38 },
        { x: new Date(2009, 0, 1), y: 54 },
        { x: new Date(2010, 0, 1), y: 57 },
        { x: new Date(2011, 0, 1), y: 70 },
      ],
      seriesData1: [
        { x: new Date(2005, 0, 1), y: 28 },
        { x: new Date(2006, 0, 1), y: 44 },
        { x: new Date(2007, 0, 1), y: 48 },
        { x: new Date(2008, 0, 1), y: 50 },
        { x: new Date(2009, 0, 1), y: 66 },
        { x: new Date(2010, 0, 1), y: 78 },
        { x: new Date(2011, 0, 1), y: 84 },
      ],
      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "DateTime",
        labelFormat: "y",
        intervalType: "Years",
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 },
      },
      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "{value}%",
        rangePadding: "None",
        minimum: 0,
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
      },
      chartArea: {
        border: {
          width: 0,
        },
      },
      width: Browser.isDevice ? "100%" : "60%",
      marker: {
        visible: true,
        height: 10,
        width: 10,
      },
      tooltip: {
        enable: true,
      },
      title: "Inflation - Consumer Price",
      eventSettings: { dataSource: extend([], scheduleData, null, true) },
      selectedDate: new Date(2019, 0, 10),
      gridData: new DataManager(orderDetails).executeLocal(
        new Query().take(15)
      ),
      pageSettings: { pageSizes: true, pageSize: 5 },
      target: ".control-section",
      header: "Syncfusion Components inside Dialog",
      dlgButtons: [
        {
          click: this.dlgBtnClick,
          buttonModel: { isPrimary: "true", content: "OK" },
        },
        { click: this.dlgBtnClick, buttonModel: { content: "Cancel" } },
      ],
      animationSettings: { effect: "Zoom" },
      OpenBtn: false,
    };
  },
  mounted() {
    var options = {
      rules: {
        User: {
          required: true,
        },
        DOB: {
          required: true,
        },
        City: {
          required: true,
        },
        State: {
          required: true,
        },
      },
    };
    let localObj = this;
    // defines FormValidator to validate the TimePicker
    this.formObj = new FormValidator("#formId", options);
    let submitButton = document.getElementById("submit-btn");
    if (submitButton) {
      submitButton.addEventListener(
        "click",
        function () {
          localObj.onFormSubmit();
        },
        false
      );
    }
  },
  methods: {
    BtnClick: function () {
      this.$refs.dialogObj.show();
    },
    dialogClose: function () {
      this.OpenBtn = true;
    },
    dialogOpen: function () {
      this.OpenBtn = false;
    },
    dlgBtnClick: function () {
      this.$refs.dialogObj.hide();
    },
    onDateChange: function (args) {
      this.selectedDate = args.value;
    },
    onFormSubmit: function () {
      let formStatus = this.formObj.validate();
      if (formStatus) {
        alert("Customer details added!");
        this.formObj.element.reset();
      }
    },
  },
  provide: {
    grid: [Page],
    schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop],
    chart: [LineSeries, Legend, Tooltip, DateTime],
    richtexteditor: [Toolbar, Link, Image, QuickToolbar, HtmlEditor],
  },
});
</script>
