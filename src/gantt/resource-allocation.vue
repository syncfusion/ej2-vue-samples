<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="resource"  
            :dataSource= "data"
            :taskFields= "taskFields"
            :allowSelection= "true"
            :resourceFields= "resourceFields"
	        :taskType= "taskType"
            :editSettings= "editSettings"
            :editDialogFields= "editDialogFields"
            :addDialogFields= "addDialogFields"
            :toolbar= "toolbar"
            :height= "height"
            :resources= "resources"
            :highlightWeekends= "true"
            :columns= "columns"
            :labelSettings= "labelSettings"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :actionBegin= "actionBegin"
            :splitterSettings= "splitterSettings"
	        :queryTaskbarInfo = "queryTaskbarInfo">
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' width='80'></e-column>
                <e-column field='TaskName' headerText='Task Name' width='180'></e-column>
                <e-column field='resources' headerText= 'Resources' width='190' :template="'resColumnTemplate'" editType="dropdownedit" :edit="dpParams"></e-column>
                <e-column field='Duration' width='100'></e-column>
                <e-column field='taskType' headerText='Task Type' width='110'></e-column>
            </e-columns>
            <template v-slot:resColumnTemplate="{data}">
                <div class="resColumnTemplate" v-if="data.ganttProperties.resourceNames">
                    <div v-if="data.ganttProperties.resourceNames.split('[')[0].includes('Rose Fuller')">
                        <div class="text" style="width:110px; height:24px; border-radius:100px; background-color:#1c5d8e; display: flex; align-items: center; justify-content: center;">
                            <span style="color:white; font-weight:500;">{{data.ganttProperties.resourceNames}}</span>
                        </div>
                    </div>

                    <div v-if="data.ganttProperties.resourceNames.split('[')[0].includes('Fuller King')">
                        <div class="text" style="width:110px; height:24px; border-radius:100px; background-color:#4a7537; display: flex; align-items: center; justify-content: center;">
                            <span style="color:white; font-weight:500;">{{data.ganttProperties.resourceNames}}</span>
                        </div>
                    </div>

                    <div v-if="data.ganttProperties.resourceNames.split('[')[0].includes('Van Jack')">
                        <div class="text" style="width:110px; height:24px; border-radius:100px; background-color:#b24531; display: flex; align-items: center; justify-content: center;">
                            <span style="color:white; font-weight:500;">{{data.ganttProperties.resourceNames}}</span>
                        </div>
                    </div>

                    <div v-if="data.ganttProperties.resourceNames.split('[')[0].includes('Bergs Anton')">
                        <div class="text" style="width:110px; height:24px; border-radius:100px; background-color:#a53576; display: flex; align-items: center; justify-content: center;">
                            <span style="color:white; font-weight:500;">{{data.ganttProperties.resourceNames}}</span>
                        </div>
                    </div>

                    <div v-if="data.ganttProperties.resourceNames.split('[')[0].includes('Tamer Vinet')">
                        <div class="text" style="width:110px; height:24px; border-radius:100px; background-color:#635688; display: flex; align-items: center; justify-content: center;">
                            <span style="color:white; font-weight:500;">{{data.ganttProperties.resourceNames}}</span>
                        </div>
                    </div>
                </div>
            </template>
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the options to allocate one or more resources to tasks based on the task requirement.
        The Work is the total labor hours necessary to complete a task. 
        Work can be mapped from the data source field using the property <code>work</code> and when the work value is mapped from the data source, 
        the end date and duration of the task will be calculated automatically based on the work and resource unit values from the data source.
        Work can be measured in hours, days and minutes. It is measured in ‘hours’ scale by default and this can be changed by using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#workunit">workUnit</a> property.</p>
</div>

<div id="description">
    <p>In this example, you can see how to allocate single or multiple resources for the task. Based on the task complexity and the resource availability, you can plan and allocate the resources to task in the project. In this demo, there is a set of predefined resources and those IDs are assigned to the task. Resource information can be shown in Gantt chart by using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#labelsettings">labelSetting</a> property.</p> 
    <p>Resources can be mapped using <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#resourcefields">resourceFields:</a> </p>
        <p><code>id</code>: To map resource ID</p>
        <p><code>name</code>: To map resource name</p>
        <p><code>unit</code>: To map resource unit</p>
        
        <p>The work, duration and resource unit fields of a task depends upon each other values and will change automatically on editing any one of these fields. But we can also set these field’s values as constant using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#tasktype">taskType</a> property. The following values can be set to the type property:</p>
        
        <p><code>FixedDuration</code>: Duration task field will remain constant while updating resource unit or work field.</p>
        <p><code>FixedWork</code>: Work field will remain constant while updating resource unit or duration fields.</p>
        <p><code>FixedUnit</code>: Resource units will remain constant while updating duration or work field.</p>
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use a selection, inject the
        <code>Selection</code> module.To use markers, inject the <code>DayMarkers</code> module.
        To edit resource unit, task type and duration, inject the <code>Toolbar</code> and <code>Edit</code> module.
    </p>    
</div>
</div>
</template>
<script>
import { GanttComponent, Selection, Edit, DayMarkers, Toolbar, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-gantt";
import { resourceAllocationData, resourceAllocationResources } from './data-source';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataManager } from '@syncfusion/ej2-data';

let dropdownlistObj;
export default {
  components: {
    'ejs-gantt': GanttComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective
  },  
  data: function() {
      return{
            data: resourceAllocationData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks',
                work: 'work',
                resourceInfo: 'resources',
                type: 'taskType'
            },
	        taskType: "FixedWork",
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
                unit: 'unit'
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
            height: '450px',
            resources: resourceAllocationResources,
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            editDialogFields: [
                { type: 'Resources' }
            ],
            addDialogFields: [
                { type: 'Resources' }
            ],
            labelSettings: {
                rightLabel: 'resources',
                taskLabel: '${Progress}%'
            },
            dpParams: {
                read: () => {
                    var gantt = (document.getElementsByClassName("e-gantt")[0]).ej2_instances[0];
                    var value = dropdownlistObj.value;
                    if (value === null) {
                        value = [];
                    }
                    gantt.treeGridModule.currentEditRow[gantt.taskFields.resourceInfo] = [value];
                    return value;
                },
                destroy: () => {
                    dropdownlistObj.destroy();
                },
                write: (args) => {
                    var gantt = (document.getElementsByClassName("e-gantt")[0]).ej2_instances[0];
                    gantt.treeGridModule.currentEditRow = {};
                    dropdownlistObj = new DropDownList({
                        dataSource: new DataManager(gantt.resources),
                        fields: { text: gantt.resourceFields.name, value: gantt.resourceFields.id },
                        enableRtl: gantt.enableRtl,
                        popupHeight: '350px',
                        value: gantt.treeGridModule.getResourceIds(args.rowData)
                    });
                    dropdownlistObj.appendTo(args.element);
                },
            },
            projectStartDate: new Date('03/28/2024'),
            projectEndDate: new Date('07/28/2024'),
            splitterSettings: {
                columnIndex: 3
            }
        };
    },
  provide: {
     gantt: [ Selection, DayMarkers, Toolbar, Edit]
  },
    methods: {
        queryTaskbarInfo(args) {
            if (args.data.ganttProperties.resourceNames) {
                var resourceName = args.data.ganttProperties.resourceNames;
                if (resourceName.split('[')[0].includes('Rose Fuller')) {
                    args.taskbarBgColor = '#539ed6';
                    args.milestoneColor = '#539ed6';
                    args.progressBarBgColor = '#1c5d8e';
                    args.taskbarBorderColor = '#1c5d8e';
                    if (args.data.ganttProperties.progress === 0) {
                        args.taskLabelColor = 'black';
                    }
                } else if (resourceName.split('[')[0].includes('Van Jack')) {
                    args.taskbarBgColor = '#ff826b';
                    args.milestoneColor = '#ff826b';
                    args.progressBarBgColor = '#b24531';
                    args.taskbarBorderColor = '#b24531';
                    if (args.data.ganttProperties.progress === 0) {
                        args.taskLabelColor = 'black';
                    }
                } else if (resourceName.split('[')[0].includes('Bergs Anton')) {
                    args.taskbarBgColor = '#ef6fbb';
                    args.milestoneColor = '#ef6fbb';
                    args.progressBarBgColor = '#a53576';
                    args.taskbarBorderColor = '#a53576';
                    if (args.data.ganttProperties.progress === 0) {
                        args.taskLabelColor = 'black';
                    }
                } else if (resourceName.split('[')[0].includes('Fuller King')) {
                    args.taskbarBgColor = '#87b972';
                    args.milestoneColor = '#87b972';
                    args.progressBarBgColor = '#4a7537';
                    args.taskbarBorderColor = '#4a7537';
                    if (args.data.ganttProperties.progress === 0) {
                        args.taskLabelColor = 'black';
                    }
                } else if (resourceName.split('[')[0].includes('Tamer Vinet')) {
                    args.taskbarBgColor = '#a496cf';
                    args.milestoneColor = '#a496cf';
                    args.progressBarBgColor = '#635688';
                    args.taskbarBorderColor = '#635688';
                    if (args.data.ganttProperties.progress === 0) {
                        args.taskLabelColor = 'black';
                    }
                }
            }
            if (args.taskbarType === 'ParentTask') {
                args.taskbarBgColor = '#adadad';
                args.progressBarBgColor = '#6b6b6b';
                if (args.data.ganttProperties.progress === 0) {
                    args.taskLabelColor = 'black';
                }
            }
        },
        actionBegin (args) {
            if (args.requestType === 'beforeOpenEditDialog' || args.requestType === 'beforeOpenAddDialog') {
                args.Resources.selectionSettings = {};
                args.Resources.columns.splice(0, 1);
            }
        },
    }
}
</script>
