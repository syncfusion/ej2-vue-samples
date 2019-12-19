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
        <div class="col-md-4 property-section">
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
                    <div style="padding-top: 0px">
                        <ejs-multiselect ref='multiselect' id='WorkingDays' :dataSource='workDays' :value='defaultWeek' :fields='workFields' :select="selectWeek" :removed="removeWeek" mode='CheckBox' :showDropDownIcon='showDropDownIcon'  :popupHeight='popHeight'></ejs-multiselect>
                    </div>
                    </td>
        </tr>
    </table>
        </div>
    <div id="action-description">
    <p>This sample visualizes the support for changing different set of working days in a week. The selected working days in drop down list will be applied to Gantt chart.</p>
    </div>
<div id="description">
    <p>
        In this example, you can see how to render a Gantt chart with the provided data source and customizable array of working days. These working days alone will be considered for taskbar rendering and duration calculations.        
    </p>
    <p>
        The working days in your project can be customized using the <code>workWeek</code> property and the selected days in the dropdown list available in the property panel will be applied to Gantt chart. You can get to know the working days in the Gantt chart timeline by the highlighted weekend days. This can be enabled by using the <code>highlightWeekends</code> property
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { extend } from '@syncfusion/ej2-base';
import { GanttPlugin, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
import { MultiSelectPlugin, ChangeEventArgs, MultiSelectComponent, CheckBoxSelection, DropDownListPlugin} from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(GanttPlugin);
Vue.use(DropDownListPlugin);
Vue.use(MultiSelectPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
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
                { field: 'TaskID', width: 70 },
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
                columnIndex: 2
            },
            gridLines: "Both",
            workWeek: ["Monday", "Tuesday", "Wednesday","Thursday","Friday"],
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),
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
        }
    }
});
</script>
