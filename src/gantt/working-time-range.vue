<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="WorkTimeRange" 
        :dataSource= "data"        
        :height = "height"       
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :columns= "columns"
        :labelSettings= "labelSettings"
        :splitterSettings="splitterSettings"
        :timelineSettings= "timelineSettings"
        :durationUnit= "durationUnit"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        </ejs-gantt>
        </div>
    </div>
    <div class="col-lg-4 property-section" style="padding-left: 0px;">
        <table id="property" title="Properties" style="width: 100%;">
            <colgroup>
                <col style="width:55%" />
                <col style="width:45%" />
            </colgroup>
            <tr>
                <td colspan="2">
                    <label htmlFor='Time range'>Time Range for all days</label>
                </td>
            </tr>
            <tr>
                <td style="width:30%;padding-bottom: 12px">
                    <div for="WorkStartTime">Work Start Time</div>
                </td>
                <td style="width:70%">
                    <div style="padding:10px 10px 10px 0px; width: 114%;">
                        <ejs-numerictextbox ref='WorkStartTime' id="WorkStartTime" :min='0' :max='24' :showSpinButton='true' :change="change1" :step='0.5' :value='8' ></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width:30%;padding-bottom: 12px">
                    <div for="WorkEndTime">Work End Time</div>
                </td>
                <td style="width:70%">
                    <div style="padding:10px 10px 10px 0px; width: 114%;">
                        <ejs-numerictextbox ref='WorkEndTime' id="WorkEndTime" :min='0' :max='24' :value='17' :step='0.5' :change="change1" :showSpinButton='true' ></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="width: 100%">
                    <div>
                        <button type="button" id="update" style="margin-top: 10px;" v-on:click="update">Update for all days</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="width: 100%">
                    <label style="margin-top: 20px;">Time Range for each day</label>
                </td>
            </tr>
            <tr>
                <td style="width:30%;padding-bottom: 12px">
                    <div>Working Days</div>
                </td>
                <td style="width:70%">
                    <div style="padding:10px 10px 10px 0px; width: 114%;">
                        <ejs-dropdownlist ref='dropdownlist' id='Days' :dataSource='workDays' :value='defaultDay' :fields='workFields' :select="selectDay" :popupHeight='popHeight'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width:30%;padding-bottom: 12px">
                    <div for="WorkStart">Work Start Time</div>
                </td>
                <td style="width:70%">
                    <div style="padding:10px 10px 10px 0px; width: 114%;">
                        <ejs-numerictextbox ref='WorkStart' id="WorkStart" :min='0' :max='24' :showSpinButton='true' :step='0.5' :change="change2" :value='8' ></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width:30%;padding-bottom: 12px">
                    <div for="WorkEnd">Work End Time</div>
                </td>
                <td style="width:70%">
                    <div style="padding:10px 10px 10px 0px; width: 114%;">
                        <ejs-numerictextbox ref='WorkEnd' id="WorkEnd" :min='0' :max='24' :value='17' :step='0.5' :change="change2" :showSpinButton='true' ></ejs-numerictextbox>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="width: 100%">
                    <div>
                        <button type="button" id="perform" style="margin-top: 10px;" v-on:click="perform">Update for each day</button>
                    </div>
                </td>
            </tr>
    </table>
</div>

    <div id="action-description">
    <p>This sample visualizes the support for changing the working hours in a day. The selected start and end hours from the property panel will be applied to each task available in the project.</p>
    </div>
<div id="description">
    <p>
        In this example, you can see how to render a Gantt chart with the provided data source and customizable working hours in a day. You can split the working hours in a day to one or more range. So, you can also provide the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#dayworkingtime">
        dayWorkingTime</a> property value as array of object collection. Gantt chart also supports different <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#durationunit">
        durationUnit</a> values as follows:
        <li><code>day</code></li>
        <li><code>hour</code></li>       
        <li><code>minute</code></li>
    </p>
    <p>You can also set different working time range for different working days using <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#weekworkingtime">
        weekWorkingTime</a> property. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#weekworkingtime">
        weekWorkingTime</a> property enables you to specify different working hours for each day of the week in your Gantt chart.
        By configuring this property, you can ensure that tasks are only scheduled during defined working periods, avoiding non-working hours.</p>
    <p>
        Given duration in dataSource will be considered with this unit. In this demo, the <code>hour</code> unit is used to render taskbars in day hour timeline mode. Gantt chart supports only 24hours format as of now. The working hours will differ between organizations. This feature will be helpful to keep track of each task and resource task status based on the working time of company.
    </p>
</div>
</div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { workTimeRange } from './data-source';
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    'ejs-gantt': GanttComponent,
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-button': ButtonComponent
  },
  data: function() {
      return{
            data: workTimeRange,
            height: '450px',             
            taskFields: {
               id: 'TaskID',
               name: 'TaskName',
               startDate: 'StartDate',
               endDate: 'EndDate',
               duration: 'Duration',
               progress: 'Progress',
               dependency: 'Predecessor',
               child: 'subtasks'
            },
            columns: [
                { field: 'TaskName', width: 270 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' },
            ],
            timelineSettings: {
                topTier: {
                    unit: 'Day',
                },
                bottomTier: {
                    unit: 'Hour',
                }
            },
            durationUnit: 'hour',
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 1
            },
            projectStartDate: new Date('04/02/2024'),
            projectEndDate: new Date('04/28/2024'),
            workFields: { text: 'day', value: 'id' },
            workDays: [
                { id: 'Monday', day: 'Monday' },
                { id: 'Tuesday', day: 'Tuesday' },
                { id: 'Wednesday', day: 'Wednesday' },
                { id: 'Thursday', day: 'Thursday' },
                { id: 'Friday', day: 'Friday' }
            ],
            defaultDay: "Monday",
            popHeight: '350px',
      };
  },
  provide: {
      gantt: [DayMarkers, Selection],
  },
  methods: {
    selectDay: function(e) {
            var startTime = 8;
            var endTime = 17;
            for(var i=0;i<this.$refs.gantt.ej2Instances.weekWorkingTime.length;i++) {
                if(this.$refs.gantt.ej2Instances.weekWorkingTime[i].dayOfWeek === e.item.innerText) {
                    startTime = this.$refs.gantt.ej2Instances.weekWorkingTime[i].timeRange[0].from;
                    endTime = this.$refs.gantt.ej2Instances.weekWorkingTime[i].timeRange[0].to;
                    break;
                }
            }
            document.getElementById('WorkStart').ej2_instances[0].value = startTime;
            document.getElementById('WorkEnd').ej2_instances[0].value = endTime;
        },
      change1: function(e) {
            var startTime = document.getElementById('WorkStartTime').ej2_instances[0].value;
            var endTime = document.getElementById('WorkEndTime').ej2_instances[0].value;
            if (startTime >= endTime) {
                if(startTime < 24) {
                    document.getElementById('WorkEndTime').ej2_instances[0].value = startTime + 1.00;
                }
                else {
                    document.getElementById('WorkEndTime').ej2_instances[0].value = 0.00;
                }
            }
        },
      change2: function(e) {
            var startTime = document.getElementById('WorkStart').ej2_instances[0].value;
            var endTime = document.getElementById('WorkEnd').ej2_instances[0].value;
            if (startTime >= endTime) {
               if (startTime < 24) {
                    document.getElementById('WorkEnd').ej2_instances[0].value = startTime + 1.00;
                }
                else {
                    document.getElementById('WorkEnd').ej2_instances[0].value = 0.00;
                }
            }
        },
      update: function() {
        var startTime = document.getElementById('WorkStartTime').ej2_instances[0].value;
        var endTime = document.getElementById('WorkEndTime').ej2_instances[0].value;
        var workingTime = [{ from: startTime, to: endTime }];
        this.$refs.gantt.ej2Instances.dayWorkingTime = workingTime;
    },
 perform: function() {
        var selectedDay = document.getElementById('Days').ej2_instances[0].value;
        var startTime = document.getElementById('WorkStart').ej2_instances[0].value;
        var endTime = document.getElementById('WorkEnd').ej2_instances[0].value;
        var workingTime = [];
        var weekWorkingTime = this.$refs.gantt.ej2Instances.weekWorkingTime;
        var isUpdated = false;
        for (var i = 0; i < weekWorkingTime.length; i++) {
            workingTime.push({ dayOfWeek: weekWorkingTime[i].dayOfWeek, timeRange: weekWorkingTime[i].timeRange });
        }
        for (var i = 0; i < workingTime.length; i++) {
            if (workingTime[i].dayOfWeek === selectedDay) {
                workingTime[i].dayOfWeek = workingTime[i].dayOfWeek;
                workingTime[i].timeRange = [{ from: startTime, to: endTime }]
                isUpdated = true;
                break;
            }
        }
        if (!isUpdated) {
            workingTime.push({ dayOfWeek: selectedDay, timeRange: [{ from: startTime, to: endTime }] });
        }
        this.$refs.gantt.ej2Instances.weekWorkingTime = workingTime;
    },
}
}
</script>
<style>
.fluent2-highcontrast #update,
.fluent2-highcontrast #perform {
    color: black;
}
</style>
