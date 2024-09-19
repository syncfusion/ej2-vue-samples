<template>
    <div class="control-pane">
      <div class="control-section">
        <div class="description-container e-card">
          <div class="e-card-header-title" style="font-weight: 600">AI-Powered Milestone and Project End Date Predictions</div>
          <div class="e-card-content">
            <p>
              This sample demonstrates how AI-driven analysis predicts milestone task completion and project end dates within a Gantt Chart. Predictions are shown as event markers, offering visual cues for upcoming milestones and the overall project timeline.
            </p>
          </div>
        </div>
        <div id="container">
          <ejs-gantt
            ref="ganttInstance"
            :dataSource="taskDataCollection"
            :taskFields="taskFields"
            :editSettings="editSettings"
            :toolbar="toolbarOptions"
            :toolbarClick="toolbarClick"
            :splitterSettings="splitterSettings"
            :allowSelection="true"
            :treeColumnIndex="1"
            height="550px"
            :projectStartDate="new Date('4/1/2026')"
            :projectEndDate="new Date('6/2/2026')"
          >
            <e-columns>
              <e-column field="TaskID" visible="false"></e-column>
              <e-column field="TaskName" headerText="Event Name" width="250"></e-column>
              <e-column field="Duration"></e-column>
              <e-column field="StartDate" headerText="Start Date"></e-column>
              <e-column field="EndDate" headerText="End Date"></e-column>
            </e-columns>
          </ejs-gantt>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { GanttComponent, Toolbar, Edit, Selection, Sort, Reorder, ContextMenu, DayMarkers, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-gantt';
  import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
  import * as data from './progress.json';
  import { getAzureChatAIRequest } from '../common/openai';
  import { TaskDataCollection } from './data-source';
  
  export default {
    name: 'Progress',
    data() {
      return {
        taskDataCollection: TaskDataCollection,
        taskFields: {
          id: 'TaskID',
          name: 'TaskName',
          startDate: 'StartDate',
          endDate: 'EndDate',
          duration: 'Duration',
          progress: 'Progress',
          parentID: "ParentTaskID"
        },
        editSettings: {
          allowAdding: true,
          allowEditing: true,
          allowDeleting: true,
          allowTaskbarEditing: true,
          showDeleteConfirmDialog: true
        },
        splitterSettings: {
          position: "28%"
        },
        toolbarOptions: [{
          template: '<ejs-button id="toolbarButton" isPrimary="true">Predict milestone</ejs-button>',
          text: 'Predict milestone'
        }]
      };
    },
    methods: {
      toolbarClick(args) {
        if (args.item.text === 'Predict milestone') {
          this.$refs.ganttInstance.showSpinner();
          let input =
            "You analyze the multiple year HistoricalTaskDataCollections and current TaskDataCollection to predict project completion dates and milestones based on current progress and historical trends. Ignore the null or empty values, and collection values based parent child mapping. Avoid json tags with your response. No other explanation or content to be returned." +
            " HistoricalTaskDataCollections :" + this.getHistoricalCollection() +
            " TaskDataCollection: " + JSON.stringify(this.taskDataCollection) +
            " Generate a JSON object named 'TaskDetails' containing:" +
            "- Key 'MilestoneTaskDate' with a list of milestone dates 'MilestoneDate' with 'TaskName' - task name. A milestone date is defined as the end date of tasks with a duration of 0 and only give current based milestone." +
            "- Key 'ProjectCompletionDate' indicating the latest end date among all tasks." +
            "- Key 'Summary' providing a summary of the project completion date and milestones.Ensure milestones are defined correctly based on tasks with a duration of 0, and the project completion date reflects the latest end date of all tasks "
          let aioutput = getAzureChatAIRequest({ messages: [{ role: 'user', content: input }] });
          aioutput.then((result) => {
            let cleanedJsonData = result.replace(/^```json\n|```\n?$/g, '');
            let dataset = JSON.parse(cleanedJsonData);
            const eventMarkers = dataset.TaskDetails.MilestoneTaskDate
              .map((milestone) => ({
                day: new Date(milestone["MilestoneDate"]),
                label: milestone["TaskName"]
              }));
            let projectDetailes = {
              day: new Date(dataset.TaskDetails.ProjectCompletionDate),
              label: "Project completion date"
            }
            eventMarkers.push(projectDetailes)
            this.$refs.ganttInstance.eventMarkers = eventMarkers;
            this.$refs.ganttInstance.hideSpinner();
          });
        }
      },
      getHistoricalCollection() {
        let historicalDataCollection = '';
        const word = data;
        for (let year = 2021; year < 2026; year++) {
          historicalDataCollection += "HistoricalTaskDataCollection" + year + ":" + JSON.stringify(word["TaskDataCollection" + year]);
        }
        return historicalDataCollection;
      }
    },
    components: {
      'ejs-gantt': GanttComponent,
      'e-columns': ColumnsDirective,
      'e-column': ColumnDirective,
      'ejs-button': ButtonComponent
    },
    provide: {
      gantt: [Edit, Toolbar, Selection, DayMarkers, Sort, Reorder, ContextMenu]
    }
  };
  </script>
  
  <style scoped>
  .control-pane {
    padding: 20px;
  }
  .control-section {
    margin: 20px;
  }
  .description-container {
    margin-bottom: 20px;
  }
  </style>