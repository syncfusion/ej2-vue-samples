<template>
    <div class="control-pane">
      <div class="control-section">
        <div class="description-container e-card">
          <div class="e-card-header-title" style="font-weight: 600;">Task Reallocation to Prevent Overallocation</div>
          <div class="e-card-content">
            <p>
              This sample reallocates tasks to prevent resource overallocation by generating a new assignment collection. Tasks are redistributed within the same resource, ensuring balanced utilization. Taskbar colors are updated to reflect these changes, providing clear visual feedback.
            </p>
          </div>
        </div>
        <div id="container">
          <ejs-gantt
            id="GanttContainer"
            ref="ganttInstance"
            :dataSource="tasksCollection"
            :resources="resourceCollection"
            viewType="ResourceView"
            showOverAllocation="true"
            enableContextMenu="true"
            allowSorting="true"
            allowReordering="true"
            :taskFields="taskFields"
            :resourceFields="resourceFields"
            :editSettings="editSettings"
            :toolbar="toolbarOptions"
            @toolbarClick="toolbarClick"
            :labelSettings="labelSettings"
            :splitterSettings="splitterSettings"
            :selectionSettings="selectionSettings"
            :tooltipSettings="tooltipSettings"
            :timelineSettings="timelineSettings"
            readOnly="false"
            allowSelection="true"
            highlightWeekends="true"
            treeColumnIndex="1"
            taskbarHeight="20"
            rowHeight="40"
            height="550px"
          >
            <e-columns>
              <e-column field="TaskID" visible="false" />
              <e-column field="TaskName" headerText="Event Name" width="250" />
              <e-column field="Duration" headerText="Duration" />
              <e-column field="StartDate" headerText="Start Date" />
              <e-column field="EndDate" headerText="End Date" />
            </e-columns>
          </ejs-gantt>
          <ejs-button v-if="showToolbarButton" id="toolbarButton" isPrimary="true" @click="onToolbarButtonClick">
            Optimize resource allocation
          </ejs-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { GanttComponent, Edit, Toolbar, Selection, Sort, Reorder, ContextMenu, DayMarkers, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-gantt';
  import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
  import { taskCollection, resourcesCollection } from './data-source';
  import { getAzureChatAIRequest } from '../common/openai';
  
  export default {
    name: 'ResourceOptimization',
    components: {
      'ejs-gantt': GanttComponent,
      'e-columns': ColumnsDirective,
      'e-column': ColumnDirective,
      'ejs-button': ButtonComponent
    },
    data() {
      return {
        tasksCollection: taskCollection,
        resourceCollection: resourcesCollection,
        taskFields: {
          id: 'TaskID',
          name: 'TaskName',
          startDate: 'StartDate',
          endDate: 'EndDate',
          duration: 'Duration',
          progress: 'Progress',
          resourceInfo: 'resourceInfo',
          work: 'work',
          child: 'subtasks'
        },
        resourceFields: {
          id: 'resourceId',
          name: 'resourceName',
          unit: 'resourceUnit',
          group: 'resourceGroup'
        },
        editSettings: {
          allowAdding: true,
          allowEditing: true,
          allowDeleting: true,
          allowTaskbarEditing: true,
          showDeleteConfirmDialog: true
        },
        toolbarOptions: [{
          template: 'toolbarButtonTemplate',
          text: 'Optimize resource allocation'
        }],
        labelSettings: {
          rightLabel: 'resourceInfo'
        },
        splitterSettings: {
          columnIndex: 3
        },
        selectionSettings: {
          mode: 'Row',
          type: 'Single',
          enableToggle: false
        },
        tooltipSettings: {
          showTooltip: true
        },
        timelineSettings: {
          showTooltip: true,
          topTier: {
            unit: 'Week',
            format: 'dd/MM/yyyy'
          },
          bottomTier: {
            unit: 'Day',
            count: 1
          }
        },
        showToolbarButton: true
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
      onToolbarButtonClick() {
        this.$refs.ganttInstance.showSpinner();
        let input = `I want you to act as an AI assistant tasked with updating resource assignments to tasks in a project management system. Your goal is to ensure that resources are not assigned to tasks that overlap in timeline with another task assigned to the same resource.
          This means checking the start and end dates of all tasks assigned to each resource and making sure no resource is double-booked during any task's duration. If you find that a resource is assigned multiple tasks with overlapping timelines(dates same or conflict any date), replace the conflicting task with another resource that has no tasks overlapping the same dates.
          Aim to reassign tasks in a way that ensures every task is assigned to a resource, minimizing the chance of any task being left unassigned unless it is unavoidable due to scheduling conflicts.
          Below is the list of tasks and their current details. It includes taskCollection Data with "resourceInfo" field as integer array collection which is assigned to respective tasks.This resourceInfo integer will be referencing from resourceId field of separate resourceCollection.
          First rearrange taskCollection based on resourceId, then if any resource tasks are overlapped in timeline, reassign any one of the task to other resource by comparing its existing tasks dates, if that too overlap in timeline try changing other resource, if you cannot reassign any one of the resource due to conflict then left the field blank. return only newly prepared collection as json format if you done any reassignment. I dont want code to achieve this, apply your logic to given taskcollection and resourceCollection and return only result in json format.
          Do not return any content or any other additional information only return JSON.
            Task Collection Data:` + JSON.stringify(this.tasksCollection);
        `Resource Collection Data:` + JSON.stringify(this.resourceCollection);
        let aioutput = getAzureChatAIRequest({ messages: [{ role: 'user', content: input }] });
        aioutput.then((result) => {
          let cleanedJsonData = result.replace(/^```json\n|```\n?$/g, '');
          cleanedJsonData = cleanedJsonData.replace(/\n}\n/g, '');
          this.$refs.ganttInstance.dataSource = JSON.parse(cleanedJsonData);
          this.$refs.ganttInstance.hideSpinner();
        });
      }
    },
    provide: {
      gantt: [Edit, Toolbar, Selection, Sort, Reorder, ContextMenu, DayMarkers],
    }
  };
  </script>
  
  <style scoped>
  .control-pane {
    padding: 10px;
  }
  
  .control-section {
    margin: 0 auto;
    width: 95%;
  }
  
  .description-container {
    margin-bottom: 20px;
  }
  </style>