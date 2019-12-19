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
        :treeColumnIndex= "1"
        :timelineSettings= "timelineSettings"
        :durationUnit= "durationUnit"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        </ejs-gantt>
        </div>
    </div>
        <div class="col-md-4 property-section">

        <table id="property" title="Properties" style="width: 100%;">
        <colgroup>
            <col style="width:55%" />
            <col style="width:45%" />
        </colgroup>
        <tr>
            <td style="width: 55%">
                <div>Work Start Time</div>
            </td>
            <td style="width: 45%;">
                <div style="padding-top: 0px">
                    <ejs-numerictextbox ref='WorkStartTime' id="WorkStartTime" :min='0' :max='24' :showSpinButton='true' :step='0.5' :value='8' :change='updateTime'></ejs-numerictextbox>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 55%">
                <div>Work End Time</div>
            </td>
            <td style="width: 45%;">
                <div style="padding-top: 0px">
                    <ejs-numerictextbox ref='WorkEndTime' id="WorkEndTime" :min='0' :max='24' :value='17' :step='0.5' :change='updateTime' :showSpinButton='true' ></ejs-numerictextbox>
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
        In this example, you can see how to render a Gantt chart with the provided data source and customizable working hours in a day. You can split the working hours in a day to one or more range. So, You can also provide the <code>dayWorkingTime</code> property value as array of object collection. Gantt chart also supports different <code>durationUnit</code> values as follows:
        <li><code>day</code></li>
        <li><code>hour</code></li>       
        <li><code>minute</code></li>
    </p>
    <p>
        Given duration in dataSource will be considered with this unit. In this demo, the <code>hour</code> unit is used to render taskbars in day hour timeline mode. Gantt chart supports only 24hours format as of now. The working hours will differ between organizations. This feature will be helpful to keep track of each task and resource task status based on the working time of company.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { workTimeRange } from './data-source';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(GanttPlugin);
Vue.use(NumericTextBoxPlugin);

export default Vue.extend({
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
                { field: 'TaskID', width: 75 },
                { field: 'TaskName', width: 250 },
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
                columnIndex: 2
            },
            projectStartDate: new Date('04/02/2019'),
            projectEndDate: new Date('04/28/2019'),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection],
  },
  methods: {
      updateTime: function() {
          var isTimeUpdated = false;
          var defaultDate = "08/08/2016", startDate = new Date(defaultDate), endDate = new Date(defaultDate);
          var decPlace =  this.$refs.WorkStartTime.ej2Instances.value - Math.floor(this.$refs.WorkStartTime.ej2Instances.value);
          startDate.setHours(this.$refs.WorkStartTime.ej2Instances.value);
          startDate.setMinutes(decPlace * 60);
          decPlace = this.$refs.WorkEndTime.ej2Instances.value - Math.floor(this.$refs.WorkEndTime.ej2Instances.value);
          endDate.setHours(this.$refs.WorkEndTime.ej2Instances.value);
          endDate.setMinutes(decPlace * 60);
          
          /*Validate time value and update the time range*/
          if (startDate.getTime() < endDate.getTime() && isTimeUpdated == false) {
              var workingTime = [{ from: this.$refs.WorkStartTime.ej2Instances.value, to: this.$refs.WorkEndTime.ej2Instances.value }];
              this.$refs.gantt.ej2Instances.dayWorkingTime = workingTime;
              isTimeUpdated = false;
          }
          else {
            isTimeUpdated = true;
            this.$refs.WorkStartTime.ej2Instances.value = this.$refs.gantt.ej2Instances.dayWorkingTime[0].from;
            this.$refs.WorkEndTime.ej2Instances.value = this.$refs.gantt.ej2Instances.dayWorkingTime[this.$refs.gantt.ej2Instances.dayWorkingTime.length - 1].to;
          }
          isTimeUpdated = false;
        }
    },
});
</script>
