<template>
    <div class='control-pane'>
      <div class='control-section'>
        <div class="description-container e-card">
          <div class='e-card-header-title' style="font-weight: 600">AI-Driven Task Prioritization in Task Collection</div>
          <div class='e-card-content'>
            <p>
              This sample shows how AI prioritizes tasks within a collection by evaluating baseline dates and scheduled taskbar dates. The AI identifies critical tasks essential for meeting project deadlines and reallocates resources to these tasks, ensuring efficient management and timely project completion.
            </p>
          </div>
        </div>
        <div id='container'>
          <ejs-gantt
            ref="ganttInstance"
            :dataSource="tasksCollection"
            :resources="resourceCollection"
            :taskFields="taskFields"
            :resourceFields="resourceFields"
            :editSettings="editSettings"
            :rowDataBound="rowDataBound"
            :queryTaskbarInfo="queryTaskbarInfo"
            :columns="columns"
            :toolbar="toolbarOptions"
            :toolbarClick="toolbarClick"
            :labelSettings="labelSettings"
            :splitterSettings="splitterSettings"
            :readOnly="false"
            :allowSelection="true"
            :highlightWeekends="true"
            :treeColumnIndex="1"
            :taskbarHeight="20"
            :rowHeight="40"
            height="550px"
          >
            <e-columns>
              <e-column field='Id' headerText='Task Id' :visible="false"></e-column>
              <e-column field='Name' headerText='Task Name' :width="250" clipMode='EllipsisWithTooltip'></e-column>
              <e-column field='resourceInfo' headerText='Resources'></e-column>
              <e-column field='StartDate' headerText='Start Date'></e-column>
              <e-column field='EndDate' headerText='End Date'></e-column>
            </e-columns>
          </ejs-gantt>
          <div id="csfooter"></div>
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { GanttComponent, Toolbar, Edit, Selection, ColumnsDirective, ColumnDirective, DayMarkers } from '@syncfusion/ej2-vue-gantt';
import { tasksCollection, resourceCollection } from './data-source';
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { getAzureChatAIRequest } from '../common/openai';

export default defineComponent({
    name: 'PrioritizeTask',
    components: {
      'ejs-gantt': GanttComponent,
      'e-columns': ColumnsDirective,
      'e-column': ColumnDirective,
      'ejs-button': ButtonComponent,
    },
    data() {
      return {
        tasksCollection,
        resourceCollection,
        taskFields: {
          id: 'Id',
          name: 'Name',
          startDate: 'StartDate',
          endDate: 'EndDate',
          progress: 'Progress',
          parentID: 'ParentId',
          resourceInfo: 'resourceInfo',
          baselineStartDate: "BaselineStartDate",
          baselineEndDate: "BaselineEndDate",
        },
        resourceFields: {
          id: 'Id',
          name: 'Name',
          unit: 'MaxUnit',
        },
        editSettings: {
          allowAdding: true,
          allowEditing: true,
          allowDeleting: true,
          allowTaskbarEditing: true,
          showDeleteConfirmDialog: true
        },
        columns: [
          { field: 'Id', headerText: "Task Id", visible: false },
          { field: 'Name', headerText: 'Task Name', width: 250, clipMode: 'EllipsisWithTooltip' },
          { field: 'resourceInfo', headerText: 'Resources' },
          { field: 'StartDate', headerText: 'Start Date' },
          { field: 'EndDate', headerText: 'End Date' },
        ] as any,
        labelSettings: {
          rightLabel: 'resourceInfo'
        },
        splitterSettings: {
          position: "23%"
        },
        toolbarOptions: [{template: '<button id="toolbarButton" class="e-primary">Assign prioritize tasks</button>', text:'Assign prioritize tasks' }]
      };
    },
    methods: {
      rowDataBound(args: any) {
        if (args.data.taskData.isCritical) {
          args.row.style.backgroundColor = '#ffecd4';
        }
      },
      queryTaskbarInfo(args: any) {
        if (args.data.taskData.isCritical) {
          args.taskbarElement.parentElement.parentElement.style.backgroundColor = '#ffecd4';
        }
      },
      toolbarClick(args: any) {
        const ganttInstance = (this.$refs.ganttInstance as GanttComponent).ej2Instances;
        if (args.item.text === 'Assign prioritize tasks') {
          ganttInstance.showSpinner();
          let input = `
            Analyze the following TaskCollection to identify critical tasks. 
            A task is considered critical if its EndDate is greater than its BaselineEndDate, comparing only the dates (not the time). 
            Both EndDate and BaselineEndDate must not be null.
            Here is the 'TaskCollection': ${JSON.stringify(this.tasksCollection)};
            For each task, add an additional property called isCritical. Set this property to true if the task is critical based on the criteria provided, otherwise set it to false. 
            Ensure that:
            1. Only the date part (not time) of EndDate and BaselineEndDate is compared.
            2. Tasks with both EndDate and BaselineEndDate being not null and where EndDate is greater than BaselineEndDate are marked as critical.
            Return the entire modified TaskCollection in JSON format. Ensure all tasks are included with their updated isCritical property. Do not include any other text or additional information.`;
          let prompt = input;
          let aioutput = getAzureChatAIRequest({ messages: [{ role: 'user', content: prompt }] });
          aioutput.then((result: any) => {
            let cleanedJsonData = result.replace(/^\n|\n?$/g, '');
            cleanedJsonData = cleanedJsonData.replace(/\n}\n/g, '');
            let input1 = `Analyze the following JSON data:
    
              - 'TaskCollection': ${JSON.stringify(this.tasksCollection)}
              - 'ResourceCollection': ${JSON.stringify(this.resourceCollection)}
              - 'CriticalCollection': ${JSON.stringify(cleanedJsonData)}
            
              Perform the following steps:
              1. For each task in 'CriticalCollection' where 'isCritical' is 'true':
                 - Identify unassigned resources by comparing 'ResourceCollection' with the 'resourceInfo' property in 'TaskCollection'.
                 - Add each unassigned resource to the 'resourceInfo' property of the corresponding critical task without removing any existing resources.
                 - Ensure that each critical task receives a unique unassigned resource, if available.
            
              Return the modified 'CriticalCollection' with the additional resources assigned.
            
              Additionally, create a new property called 'AddedResourceIds' that contains the IDs of tasks in 'CriticalCollection' where 'isCritical' is 'true' and additional resources were added.
            
              Provide the result in JSON format, including:
              - The modified 'CriticalCollection'.
              - The 'AddedResourceIds' property with the IDs of tasks where additional resources were added.
            
              Do not include any additional text or information.`;
            let aioutput1 = getAzureChatAIRequest({ messages: [{ role: 'user', content: input1 }] });
            aioutput1.then((result: any) => {
              let cleanedJsonData1 = result.replace(/^\n|\n?$/g, '');
              let criticalTask = JSON.parse(cleanedJsonData1);
              ganttInstance.dataSource = criticalTask.CriticalCollection;
              let modifiedtaskID = criticalTask.AddedResourceIds;
              let taskIdsString = modifiedtaskID.join(', ');
              let csfooterElement = document.getElementById('csfooter');
              if (csfooterElement) {
                csfooterElement.innerText = ' Critical task containing Task Id: ' + taskIdsString + ' new resources has been added';
              }
              ganttInstance.hideSpinner();
            });
          });
        }
      },
    },
    provide: {
      gantt: [Toolbar, Selection, Edit, DayMarkers]
    }
});
</script>

<style>
#csfooter {
    width: 100%;
    height: 66px;
    background-color: #F0FFFF;
    min-height: 120px;
    padding: 15px;
}
</style>