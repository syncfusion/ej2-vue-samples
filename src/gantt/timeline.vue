<template>
<div>
      <div class="col-md-8 control-section">
        <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource = "data"
        :taskFields = "taskFields"

:height="height"
:rowHeight="46"
:taskbarHeight="25"
        :highlightWeekends = 'true'
        :projectStartDate = "projectStartDate"
        :projectEndDate = "projectEndDate"
        :timelineSettings = "timelineSettings"
        :splitterSettings = "splitterSettings"
        :treeColumnIndex = '1'
        :labelSettings = "labelSettings"
        :columns= "columns"
        >
        </ejs-gantt>
      </div>
    </div>
        <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
        <colgroup>
            <col style="width:30%" />
            <col style="width:70%" />
        </colgroup>
        <tr>
            <td style="width: 30%">
                <div>Timeline Unit Size</div>
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
                <div>Count</div>
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
                <div>Count</div>
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
                   <ejs-dropdownlist ref='bottomTierFormat' id="btFormat" index = "0"
                   :dataSource = "dayformat"
                    :fields = "formatFields"
                    :change = "bottomFormatChange">
                    </ejs-dropdownlist>
                </div>
            </td>
        </tr>
              <tr>
          <td style="width: 30%">
            <div><strong>Enable multiTaskbar</strong></div>
          </td>
          <td style="width: 70%">
            <div style="padding-top: 0px">
              <ejs-checkbox ref="mutiTaskbarCheck" class="checkbox" id="mutiTaskbar" :checked="false" :change="mutiTaskbarCheckbox">
              </ejs-checkbox>
            </div>
          </td>
        </tr>
    </table>
        </div>
    <div id="action-description">
        <p>This sample allows you to customize the Gantt Chart timeline by adjusting the timeline unit size, header text format, and count for both the top and bottom tiers, and provides an option to enable the multitaskbar feature.
        </p>
</div>

<div id="description">
    <p>
        This example demonstrates how to effectively customize the timeline settings of a Gantt Chart.
        You can customize the timeline width by adjusting the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettingsModel/#timelineunitsize">timelineunitsize</a> property
        in <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettingsModel/">timelineSettings</a>.
        The Gantt Chart supports various timeline units such as <code>minutes</code>, <code>hours</code>, <code>days</code>, <code>weeks</code>, <code>months</code>, and <code>years</code>.
        You can easily customize these units by changing the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings/#unit">unit</a> for both top tier and bottom tier in <code>timelineSettings</code>.
        The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings/#format">format</a> of the timeline can be customized by modifying the format value for both the top and bottom tiers.
        You can combine timeline cells in the top and bottom tiers using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineTierSettings/#count">count</a> property in <code>timelineSettings</code>.
      </p>
      <p>
        Tooltips are visible by default in the Gantt Chart timeline, You can customize the tooltip visiblity by using the  <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/timelineSettings/#showtooltip">showtooltip</a> property in the timeline settings.
      </p>
      <p>
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#enablemultitaskbar">enablemultitaskbar</a> allows you to display multiple taskbars within a parent row, ensuring a clear overview even in collapsed states.
      </p>
        
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use a selection support, inject the
        <code>Selection</code> module. To use markers in Gantt, inject the <code>DayMarkers</code> module.
    </p>
     <br>
    <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/timeline/timeline">documentation section</a>.</p>
</div>
</div>
</template>
<script>
import { GanttComponent,Selection, Sort, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectData } from './data-source';
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';

export default {
  components: {
    'ejs-gantt': GanttComponent,
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-checkbox': CheckBoxComponent
  },
  data: function() {
      return{
             data: projectData,
             height: '650px', 
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
            projectStartDate: new Date('02/05/2025'),
            projectEndDate: new Date('03/23/2025'),
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
                columnIndex: 1
            },          
            labelSettings: {
                rightLabel: 'taskName',
            },
            columns: [
                { field: 'taskID', visible: false },
                { field: 'taskName', headerText: 'Name', width: 250 },
                { field: 'StartDate', headerText: 'Start Date', type: 'date', format: 'yMd' },
                { field: 'endDate', headerText: 'End Date', type: 'date', format: 'yMd' },
                { field: 'duration', headerText: 'Duration' },
                { field: 'predecessor', headerText: 'Dependency' },
                { field: 'progress', headerText: 'Progress' }
            ],
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
                { id: '', format: 'M' },
                { id: 'EEE', format: 'Mon' },
                { id: 'dd', format: '01' }
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
 topTierCick: function() {
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
   bottomTierCick: function() {
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
  },
  mutiTaskbarCheckbox: function () {
      if (this.$refs.mutiTaskbarCheck.ej2Instances.checked) {
        this.$refs.gantt.ej2Instances.enableMultiTaskbar = true;
      } else {
        this.$refs.gantt.ej2Instances.enableMultiTaskbar = false;
      }
    },
  },
  
  provide: {
      gantt: [Selection, Sort, DayMarkers]
  }
}
</script>
