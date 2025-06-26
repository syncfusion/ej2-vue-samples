<template>
<div>
    <div class="col-md-8 control-section">
        <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="Workweek" 
        :dataSource= "data"        
        :height = "height"       
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :columns= "columns"
        :labelSettings= "labelSettings"
        :splitterSettings="splitterSettings"
        :treeColumnIndex= "1"
        :workWeek= "workWeek"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate">
        </ejs-gantt>
        </div>
    </div>
        <div class="col-md-4 property-section" style="padding-left: 0px;">
            <table id="property" title="Properties" style="width: 100%;">
                <colgroup>
                    <col style="width:30%" />
                    <col style="width:70%" />
                </colgroup>
                <tr>
                    <td style="width: 30%">
                        <div>Working Days</div>
                    </td>
                    <td style="width: 70%">
                    <div style="padding-top: 0px; width: 210px;">
                        <ejs-multiselect ref='multiselect' id='WorkingDays' :dataSource='workDays' :value='defaultWeek' :fields='workFields' :select="selectWeek" :removed="removeWeek" mode='CheckBox' :showDropDownIcon='showDropDownIcon'  :popupHeight='popHeight'></ejs-multiselect>
                    </div>
                    </td>
                 </tr>
                 <tr>
                    <td style="width: 42%; padding-top: 10px; padding-bottom: 10px;">
                        <div>Show Weekends</div>
                    </td>
                    <td style="width: 70%;padding-bottom: 10px;">
                        <div style="padding-top: 0px">
                        <ejs-checkbox ref="showWeekendsCheck" class="checkbox" id="showWeekends" :checked="true" :change="showWeekendsCheckbox">
                        </ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 30%;padding-top: 10px; padding-bottom: 10px;">
                        <div>Highlight Weekends</div>
                    </td>
                    <td style="width: 70%">
                        <div style="padding-top: 0px">
                        <ejs-checkbox ref="highlightWeekendsCheck" class="checkbox" id="highlightWeekends" :checked="true" :change="highlightWeekendsCheckbox">
                        </ejs-checkbox>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div id="action-description">
        <p>This sample demonstrates how to adjust the working days within a week and manage the visibility of non-working days in the timeline, enabling customized project scheduling.</p>
    </div>
<div id="description">
    <p>
        In this example, you can customize which days of the week are considered working days using the <a target="_blank" href="https://helpej2.syncfusion.com/angular/documentation/api/gantt/#workweek">workWeek</a> property. 
        Simply select your preferred working days from the dropdown list in the property panel, and they will be applied to the Gantt Chart. Weekends can be highlighted using the <a target="_blank" href="https://helpej2.syncfusion.com/angular/documentation/api/gantt/#highlightweekends">highlightweekends</a> property for easy identification.     
    </p>        
    <p>
        Non-working days are visible by default in the Gantt Chart timeline, their visibility can be customized using the <a target="_blank" href="https://ej2.syncfusion.com/angular/documentation/api/gantt/timelineSettingsModel/#showWeekend">timelineSettings.showWeekend</a> property. Setting this to false will hide non-working days from the timeline.
    </p>
</div>
</div>
</template>
<script>
import { extend } from '@syncfusion/ej2-base';
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
import { MultiSelectComponent, CheckBoxSelection } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';

export default {
  components: {
    'ejs-gantt': GanttComponent,
    'ejs-multiselect': MultiSelectComponent,
    'ejs-checkbox': CheckBoxComponent
  },
  data: function() {
      return{
            data: projectNewData,
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
                { field: 'TaskID', width: 80 },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' },
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 1
            },
            gridLines: "Both",
            workWeek: ["Monday", "Tuesday", "Wednesday","Thursday","Friday"],
            projectStartDate: new Date('03/24/2024'),
            projectEndDate: new Date('07/06/2024'),
            workFields: { text: 'day', value: 'id' },
            workDays: [
                { id: 'Sunday', day: 'Sunday' },
                { id: 'Monday', day: 'Monday' },
                { id: 'Tuesday', day: 'Tuesday' },
                { id: 'Wednesday', day: 'Wednesday' },
                { id: 'Thursday', day: 'Thursday' },
                { id: 'Friday', day: 'Friday' },
                { id: 'Saturday', day: 'Saturday' },
            ],
            defaultWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            showDropDownIcon: true,
            popHeight: '350px',
      };
  },
  provide: {
      gantt: [DayMarkers, Selection],
      multiselect: [CheckBoxSelection]
  },
  methods: {
        selectWeek: function(e) {
            let workingDays = extend([], this.$refs.multiselect.ej2Instances.value, [], true);
            workingDays.push(e.itemData.day);
            this.$refs.gantt.ej2Instances.workWeek = workingDays;
        },
        removeWeek: function(e) {
           let index = this.$refs.gantt.ej2Instances.workWeek.indexOf(e.itemData.day);
            if (index !== -1) {
                this.$refs.gantt.ej2Instances.workWeek = this.$refs.multiselect.ej2Instances.value;
            }
        },
        showWeekendsCheckbox: function () {
            if (this.$refs.showWeekendsCheck.ej2Instances.checked) {
                this.$refs.gantt.ej2Instances.timelineSettings.showWeekend = true;
            } else {
                this.$refs.gantt.ej2Instances.timelineSettings.showWeekend = false;
            }
        },
        highlightWeekendsCheckbox: function () {
            if (this.$refs.highlightWeekendsCheck.ej2Instances.checked) {
                this.$refs.gantt.ej2Instances.highlightWeekends = true;
            } else {
                this.$refs.gantt.ej2Instances.highlightWeekends = false;
            }
        }
    }
}
</script>
