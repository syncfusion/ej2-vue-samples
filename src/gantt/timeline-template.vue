<template>
  <div class="col-lg-12 control-section">
    <div id="action-description">
      <p>This sample explains the way of rendering timeline template by mapping template elements to the<a
          target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#timelineTemplate">
          timelineTemplate</a> property.</p>
    </div>
    <div>
      <ejs-gantt ref='gantt' id="timelinetemplate" :dataSource="data" :rowHeight="46" :height="height"
        :highlightWeekends='true' :allowSelection='true' :taskFields="taskFields" :labelSettings="labelSettings"
        :columns="columns" :splitterSettings="splitterSettings":projectStartDate="projectStartDate"
        :timelineSettings="timelineSettings"
        :projectEndDate="projectEndDate"
        :timelineTemplate="'timelineTemplates'">
        <template v-slot:timelineTemplates ="{data}">
    <div v-if="data.tier === 'topTier'" class="e-header-cell-label e-gantt-top-cell-text"
        style="width:100%; font-weight: bold;height: 100%;display: flex; justify-content: center ; align-items: center;   "
        title=${data.date}>
        <div
          style="width:100%; height: 100%; display: flex; justify-content: center ; align-items: center;flex-direction: column; ">
          <div style=" line-height: initial; font-weight: normal;">{{ weekDate(data.date) }}</div>
          <div style=" line-height: normal; padding-top: 5px; padding-bottom: 2px; font-weight: normal;">
            {{formatDate(data.date) }}</div>
          <div style="width:20px; height: 20px; line-height: normal;">
            <img style="width:100%; height:100%;" :src="imageString(data.date)">
          </div>
        </div>
    </div>
</template>
</ejs-gantt>
</div>
<div id="description">
  <p>
    In this demo, the <a
          target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#timelineTemplate">
          timelineTemplate</a> property enables the customization of timeline cells with any HTML content,
    allowing for enhanced visual appeal and personalized functionality.
  <p>The template contains these context properties to design the timeline cells.</p>
  <li><code>date</code>: Defines the date of timeline date.</li>
  <li><code>value</code>: Defines the date value to display in the timeline.</li>
  <li><code>tier</code>: Defines the tier of timeline.</li>
  </p>
</div>
</div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { timelineTemplateData } from './data-source';
import { Internationalization } from '@syncfusion/ej2-base';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
      return{
            data: timelineTemplateData,
            height: '450px',             
            taskFields: {
              id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency:'Predecessor',
                child: 'subtasks'
            },
            columns: [
            { field: 'TaskID', headerText: 'Task ID' ,visible:false},
                { field: 'TaskName', headerText: 'Task Name' , width: 300},
                { field: 'StartDate', headerText: 'Start Date'},
                { field: 'Duration', headerText: 'Duration'},
                { field: 'Progress', headerText: 'Progress'},
            ],
            labelSettings: {
                leftLabel: "TaskName",
               
            },
        timelineSettings: {

          topTier: {
            unit: 'Day',
          },
          timelineUnitSize: 200,
      },
            treeColumnIndex: 1,
            splitterSettings: {
              columnIndex: 1
            },
            projectStartDate: new Date('03/31/2024'),
            projectEndDate: new Date('04/23/2024'),
            // Create an Internationalization instance
            intlObj: new Internationalization(),
      };
  },
  provide: {
      gantt: [DayMarkers, Selection]
  },
  methods: {
    weekDate(dateString) {
      const gantt = (document.getElementsByClassName("e-gantt")[0]).ej2_instances[0];
      const date = gantt.locale === 'ar' ? this.parseArabicDate(dateString) : this.parseDateString(dateString);
      return this.intlObj.formatDate(date, { skeleton: 'E' });
    },
    formatDate(dateString) {
      const gantt = (document.getElementsByClassName("e-gantt")[0]).ej2_instances[0];
      const date = gantt.locale === 'ar' ? this.parseArabicDate(dateString) : this.parseDateString(dateString);
      return this.intlObj.formatDate(date, { skeleton: 'd' });
    },
    imageString(date) {
      const gantt = (document.getElementsByClassName("e-gantt")[0]).ej2_instances[0];
      const imageDate = gantt.locale === 'ar' ? this.parseArabicDate(date) : this.parseDateString(date);
      return "src/gantt/images/"+ imageDate.getDay() +".svg" ;
    },
    parseDateString(dateString) {
      // Check if the date string is in the format "DD.MM.YYYY"
      if (dateString.includes('.')) {
        const parts = dateString.split('.');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
      }
      // Fallback to default date parsing
      return new Date(dateString);
    },
    convertArabicNumeralsToWestern(arabicNumerals) {
      const arabicToWesternMap = { '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9' };
      return arabicNumerals.replace(/[\u0660-\u0669]/g, (match) => arabicToWesternMap[match]);
    },
    parseArabicDate(arabicDateString) {
      // To convert the 'arabicDateString' Arabic Date to ISO Date format
      const normalizedDate = this.convertArabicNumeralsToWestern(arabicDateString);
      const parts = normalizedDate.split('/'); // Assuming "DD/MM/YYYY" format
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Months are zero-based
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
  }
}
</script>
<style>
#timelinetemplate .e-header-cell-label.e-gantt-top-cell-text{
  background-color: #fff
}
.fluent2-highcontrast .e-header-cell-label.e-gantt-top-cell-text,
.fluent-dark .e-header-cell-label.e-gantt-top-cell-text,
.fluent2-dark .e-header-cell-label.e-gantt-top-cell-text,
.bootstrap5_3-dark .e-header-cell-label.e-gantt-top-cell-text,
.tailwind3-dark .e-header-cell-label.e-gantt-top-cell-text,
.material3-dark .e-header-cell-label.e-gantt-top-cell-text {
  background-color: #000;
}

#timelinetemplate .e-gantt-tree-grid-pane .e-columnheader{
    height: 70px !important;
}
#timelinetemplate .e-gantt-tree-grid-pane .e-headercell{
    height: 70px !important;
}
#timelinetemplate  .e-timeline-header-container {
    height: 70px !important;
}
#timelinetemplate .e-timeline-single-header-cell {
    height: 70px !important;
}  
</style>