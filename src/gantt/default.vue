<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample visualizes the various phases involved in a manufacturing process of a product which transforms from
        a conceptual model to a sellable product.</p>
</div>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" 
        :dataSource= "data"        
        :height = "height"       
        :highlightWeekends= 'true'         
        :taskFields= "taskFields"
        :labelSettings= "labelSettings"
        :eventMarkers= "eventMarkers"
        :projectStartDate= "projectStartDate"
        :projectEndDate= "projectEndDate"
        >
        </ejs-gantt>
    </div>

<div id="description">
    <p>
        In this example, you can see how to render a Gantt chart with the provided data source. The default timeline
        view week-day mode is applied to Gantt chart. The dependency lines are enabled in this example to represent the
        execution order or the hierarchy between the phases.
    </p>
    <p>
        Tooltip is enabled for all the UI in this example. To see the tooltip in action, hover the mouse over or tap
        taskbars, timeline units and dependency lines in touch enabled devices.
    </p>
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use a selection support and event markers we need to inject the
        <code>Selection</code>, <code>DayMarkers</code> modules.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
Vue.use(GanttPlugin);
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
            labelSettings: {
                leftLabel: 'TaskName'
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),
            eventMarkers: [
                {
                    day: new Date('04/09/2019'),
                    label: 'Research phase'
                }, {
                    day: new Date('04/30/2019'),
                    label: 'Design phase'
                }, {
                    day: new Date('05/23/2019'),
                    label: 'Production phase'
                }, {
                    day: new Date('06/20/2019'),
                    label: 'Sales and marketing phase'
                }
            ]
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  }
});
</script>