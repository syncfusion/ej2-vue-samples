<template>
<div>
      <div class="col-md-8 control-section">
        <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource = "data"
        :taskFields = "taskFields"
        :height = "height"
        :highlightWeekends = 'true'
        :projectStartDate = "projectStartDate"
        :projectEndDate = "projectEndDate"
        :resourceNameMapping =  'resourceName'
        :resourceIDMapping = 'resourceId'
        :resources = "resources"
        :timelineSettings = "timelineSettings"
        :splitterSettings = "splitterSettings"
        :treeColumnIndex = '1'
        :labelSettings = "labelSettings"
        >
        </ejs-gantt>
      </div>
    </div>
        <div class="col-md-4 property-section">
    <table id="property" title="Properties" style="width: 100%">
        <tr>
            <td style="width: 30%">
                <div style="padding-top: 8px">Unit width</div>
            </td>
            <td style="width: 70%;">
                <div>
                    <ejs-numerictextbox ref='unitWidth' id="unitWidth" :min='10' format='##' :value='33' :change='unitWidthChange'></ejs-numerictextbox>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div><b>Top tier</b></div>
            </td>
            <td style="width: 70%">
                <div>
                    <ejs-checkbox ref='topTierCheckbox' class='checkbox' id='topTierCheck' :checked="true" :change="topTierCick"></ejs-checkbox>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div style="padding-top: 8px">Count</div>
            </td>
            <td style="width: 70%;">
                <div id='numericbox'>
                    <ejs-numerictextbox ref='topTierCount' id="count" :min='1' :max='50' format='##' :value='1' :change='topTierCountchange' ></ejs-numerictextbox>
                </div>
            </td>
        </tr>

        <tr>
            <td style="width: 30%">
                <div>
                    Unit
                </div>
            </td>
            <td style="width: 70%">
                <div>
                   <ejs-dropdownlist ref='topTierUnit' id="unit" index = "0" value="Week"
                   :dataSource="unit"
                   :fields = "fields"
                    :change ="topUnitChange"
                   >
                    </ejs-dropdownlist>
                </div>
            </td>
        </tr>

        <tr>
            <td style="width: 30%">
                <div>
                    Format
                </div>
            </td>
            <td style="width: 70%">
                <div>
                    <ejs-dropdownlist ref='topTierFormat' id="format" index = "1" value="MMM dd, yyyy"
                    :dataSource = "weekformat"
                    :fields = "formatFields"
                    :change = "topFormatChange"
                    >
                    </ejs-dropdownlist>
                </div>
            </td>
        </tr>

        <tr>
            <td style="width: 30%">
                <div><b>Bottom tier</b></div>
            </td>
            <td style="width: 70%">
                <div>
                   <ejs-checkbox ref='bottomTierCheckbox' id="bottomTierCheck" 
                    :checked = "check" :change = "bottomTierCick"
                    >
                    </ejs-checkbox>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div style="padding-top: 8px">Count</div>
            </td>
            <td style="width: 70%;">
                <div id='numericbox'>
                    <ejs-numerictextbox ref='bottomTierCount' id="btcount" :min='1' :max='50' format='##' :value='1' :change='bottomTierCountchange' ></ejs-numerictextbox>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>
                    Unit
                </div>
            </td>
            <td style="width: 70%">
                <div>
                   <ejs-dropdownlist ref='bottomTierUnit' id="btUnit" index = "1" value="Day"
                   :dataSource="unit"
                   :fields = "fields" :change = "bottomUnitChange">
                    </ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>
                    Format
                </div>
            </td>
            <td style="width: 70%">
                <div>
                   <ejs-dropdownlist ref='bottomTierFormat' id="btFormat" index = "1"
                   :dataSource = "dayformat"
                    :fields = "formatFields"
                    :change = "bottomFormatChange">
                    </ejs-dropdownlist>
                </div>
            </td>
        </tr>
    </table>
        </div>
    <div id="action-description">
    <p>This sample illustrates the different phases from planning to delivery, involved in a software development
        lifecycle.
        This sample demonstrates the different timeline modes available in Gantt chart. Options are available to change
        the unit,
        format and count of the header texts for both top and bottom timeline headers.</p>
</div>

<div id="description">
    <p>
        In this example, you can see how to change the timeline settings in Gantt chart. The top and bottom timeline
        header texts can be customized by using the <code>timelineSettings.topTier</code> and <code>timelineSettings.bottomTier</code> properties.
        Using these properties, you can change the format, count, and units of the timeline header texts.
    </p>
    <p>
    Gantt chart has built-in support for many timeline modes such as minutes, hour, day, week, month and year.
    </p>
    <p> The
        default timeline headers can also be replaced with custom header texts by using the <code>formatter</code> method.
    </p>
    <p>
        Tooltip is enabled by default for the timeline headers, to see the tooltip in action, hover a point or tap on a
        point in touch enabled devices.
    </p>

    <p>
        Gantt component features are segregated into individual feature-wise modules. To use a selection support, inject the
        <code>Selection</code> module. To use markers in Gantt, inject the <code>DayMarkers</code> module.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin,Selection, Sort, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectData, projectResources } from './data-source';
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(GanttPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(NumericTextBoxPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
  data: function() {
      return{
             data: projectData,
             height: '450px', 
             taskFields: {
                id: 'taskID',
                name: 'taskName',
                startDate: 'startDate',
                endDate: 'endDate',
                duration: 'duration',
                progress: 'progress',
                dependency: 'predecessor',
                child: 'subtasks',
            },
            check:'true',         
            projectStartDate: new Date('02/03/2019'),
            projectEndDate: new Date('03/23/2019'),            
            resources: projectResources,
            timelineSettings: {
                topTier: {
                    format: 'MMM dd, yyyy',
                    unit: 'Week',
                },
                bottomTier: {
                    unit: 'Day',
                }
            },
            splitterSettings: {
                columnIndex: 0
            },          
            labelSettings: {
                rightLabel: 'taskName',
            },
            yearformat: [
                    { id: 'MMM "yy', format: 'Jan "18' },
                    { id: 'y', format: '2018' },
                    { id: 'MMMM, y', format: 'January, 18' },
                ],
            monthformat: [
                { id: 'MMM dd, yyyy', format: 'Jan 01, 2018' },
        { id: 'MMMM', format: 'January' },
        { id: 'MMM', format: 'Jan' },
            ],
            weekformat: [
                 { id: 'MMM dd, yyyy', format: 'Jan 01, 2019' },
        { id: 'EEE MMM dd, "yy', format: 'Mon Jan 01, "19' },
        { id: 'EEE MMM dd', format: 'Mon Jan 01' },
            ],
            dayformat: [
                { id: 'EEE, dd', format: 'Mon, 01' },
        { id: 'E', format: 'Mon' },
        { id: 'dd', format: '01' },
            ],
            hourformat : [
                 { id: 'hh', format: '00' },
        { id: 'hh : mm a', format: '00 : 00 AM' },
        { id: 'h : mm a', format: '0 : 00 AM' },
            ],
            unit : [
        { id: 'Year', unit: 'Year' },
        { id: 'Month', unit: 'Month' },
        { id: 'Week', unit: 'Week' },
        { id: 'Day', unit: 'Day' },
        { id: 'Hour', unit: 'Hour' }
            ],
            fields: { text: 'unit', value: 'id' },
            formatFields: { text: 'format', value: 'id' }
        };

  },
  methods: {
 topTierCick: function(props) {
    if (this.$refs.topTierCheckbox.ej2Instances.checked) {
      this.$refs.gantt.ej2Instances.timelineSettings.topTier.unit = 'Week';
        this.$refs.topTierCount.ej2Instances.enabled = true;
        this.$refs.topTierFormat.ej2Instances.enabled = true;
        this.$refs.topTierUnit.ej2Instances.enabled = true;
    } else {
      this.$refs.gantt.ej2Instances.timelineSettings.topTier.unit = 'None';
        this.$refs.topTierCount.ej2Instances.enabled = false;
        this.$refs.topTierFormat.ej2Instances.enabled = false;
        this.$refs.topTierUnit.ej2Instances.enabled = false;
    }
  },
   bottomTierCick: function(props) {
    if (this.$refs.bottomTierCheckbox.ej2Instances.checked) {
      this.$refs.gantt.ej2Instances.timelineSettings.bottomTier.unit = 'Day';
        this.$refs.bottomTierCount.ej2Instances.enabled = true;
        this.$refs.bottomTierFormat.ej2Instances.enabled = true;
        this.$refs.bottomTierUnit.ej2Instances.enabled = true;
    } else {
      this.$refs.gantt.ej2Instances.timelineSettings.bottomTier.unit = 'None';
        this.$refs.bottomTierCount.ej2Instances.enabled = false;
        this.$refs.bottomTierFormat.ej2Instances.enabled = false;
        this.$refs.bottomTierUnit.ej2Instances.enabled = false;
    }
  },
   topTierCountchange: function(e) {
    let count = e.value;
    this.$refs.gantt.ej2Instances.timelineSettings.topTier.count = count;
  },
   bottomTierCountchange: function(e) {
    let count = e.value;
    this.$refs.gantt.ej2Instances.timelineSettings.bottomTier.count = count;
  },
   topUnitChange: function(e) {
    let unit = e.value;
    if (unit === 'Year') {
      this.$refs.topTierFormat.ej2Instances.dataSource = this.yearformat;
    } else if (unit === 'Month') {
      this.$refs.topTierFormat.ej2Instances.dataSource = this.monthformat;
    } else if (unit === 'Week') {
      this.$refs.topTierFormat.ej2Instances.dataSource = this.weekformat;
    } else if (unit === 'Day') {
      this.$refs.topTierFormat.ej2Instances.dataSource = this.dayformat;
    } else {
      this.$refs.topTierFormat.ej2Instances.dataSource = this.hourformat;
    }
    this.$refs.topTierFormat.ej2Instances.refresh();
    this.updateUnitWidth(unit, 'top');
    this.$refs.gantt.ej2Instances.timelineSettings.topTier.unit = unit;
  },
   bottomUnitChange: function(e) {
    let unit = e.value;
    this.$refs.gantt.ej2Instances.timelineSettings.bottomTier.unit = unit;
    if (unit === 'Year') {
      this.$refs.bottomTierFormat.ej2Instances.dataSource = this.yearformat;
    } else if (unit === 'Month') {
      this.$refs.bottomTierFormat.ej2Instances.dataSource = this.monthformat;
    } else if (unit === 'Week') {
      this.$refs.bottomTierFormat.ej2Instances.dataSource = this.weekformat;
    } else if (unit === 'Day') {
      this.$refs.bottomTierFormat.ej2Instances.dataSource = this.dayformat;
    } else {
      this.$refs.bottomTierFormat.ej2Instances.dataSource = this.hourformat;
    }
    this.$refs.bottomTierFormat.ej2Instances.refresh();
    this.updateUnitWidth(unit, 'bottom');
    this.$refs.gantt.ej2Instances.timelineSettings.bottomTier.unit = unit;
  },
   bottomFormatChange: function(e) {
    let format = e.value;
    this.$refs.gantt.ej2Instances.timelineSettings.bottomTier.format = format.toString();
  },
   topFormatChange: function(e) {
    let format = e.value;
    this.$refs.gantt.ej2Instances.timelineSettings.topTier.format = format.toString();
  },
  unitWidthChange: function(e) {
    let width = e.value;
    this.$refs.gantt.ej2Instances.timelineSettings.timelineUnitSize = width;
  },
  updateUnitWidth: function(unit, tier) {
    let topUnit = tier === 'top' ? unit : this.$refs.gantt.ej2Instances.timelineSettings.topTier.unit;
    let bottomUnit = tier === 'bottom' ? unit : this.$refs.gantt.ej2Instances.timelineSettings.bottomTier.unit;
    let units = ['None', 'Hour', 'Day', 'Week', 'Month', 'Year'];
    let bootomCellUnit;
    let unitWidth;
    if (units.indexOf(topUnit) === 0 && units.indexOf(bottomUnit) === 0) {
        bootomCellUnit = 'Day';
    } else if (units.indexOf(topUnit) === 0 && units.indexOf(bottomUnit) > 0) {
        bootomCellUnit = bottomUnit;
    } else if (units.indexOf(topUnit) > 0 && units.indexOf(bottomUnit) === 0) {
        bootomCellUnit = topUnit;
    } else if (units.indexOf(topUnit) <= units.indexOf(bottomUnit)) {
        bootomCellUnit = topUnit;
    } else {
        bootomCellUnit = bottomUnit;
    }
    if (bootomCellUnit === 'Year') {
        unitWidth = 2000;
    } else if (bootomCellUnit === 'Month') {
        unitWidth = 300;
    } else if (bootomCellUnit === 'Week') {
        unitWidth = 150;
    } else if (bootomCellUnit === 'Day') {
        unitWidth = 33;
    } else if (bootomCellUnit === 'Hour') {
        unitWidth = 25;
    }
    this.$refs.unitWidth.ej2Instances.value = unitWidth;
  }
  },
  provide: {
      gantt: [Selection, Sort, DayMarkers]
  }
});
</script>