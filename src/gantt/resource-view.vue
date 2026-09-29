<template>
    <div>
        <div class="control-section">
            <div class="content-wrapper">
                <ejs-gantt ref='gantt' id="ResourceView" :dataSource= "data" :viewType="viewType" :taskFields= "taskFields"
                    :allowSelection= "true" :allowResizing= "true" :resourceFields= "resourceFields" :taskType = "taskType"
                    :editSettings= "editSettings" :toolbar= "toolbar" :height="height" :rowHeight="46" :taskbarHeight="25"
                    :treeColumnIndex= "1" :resources= "resources" :highlightWeekends= "true" :columns= "columns"
                    :labelSettings= "labelSettings" :projectStartDate= "projectStartDate" :projectEndDate= "projectEndDate"
                    :splitterSettings= "splitterSettings" :showOverAllocation= "true" v-on:toolbarClick= "toolbarClick">
                </ejs-gantt>
            </div>
        </div>

        <div id="action-description">
            <p>This sample demonstrates the Resource View in the Gantt Chart, where tasks are organized under their assigned resources. Tasks without resource assignments are displayed under the <code>Unassigned Tasks</code> category. The sample also highlights overallocation ranges and provides an option to show or hide overallocation indicators.</p>
        </div>

        <div id="description">
            <p>The Resource View displays tasks grouped by their assigned resources, providing a resource-centric perspective of the project schedule. This view can be enabled by setting the <code>viewType</code> property to <code>ResourceView</code></p>
            <p>In this example, resources are mapped to tasks using the <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#resourcefields">resourceFields</a></code> and <code>taskFields.resourceInfo</code> properties. Tasks without resource assignments are automatically grouped under the <strong>Unassigned Tasks</strong> category.
            Resource overallocation occurs when a resource is scheduled to work on multiple tasks during overlapping time periods. Overallocation ranges are highlighted in the timeline to help identify resource conflicts. The custom toolbar button can be used to show or hide overallocation indicators.</p>
            <p>Resources can be grouped using the following resource field mappings:</p>
            <ul>
                <li><code>ID</code>: To map resource ID.</li>
                <li><code>Name</code>: To map resource name.</li>
                <li><code>Unit</code>: To map resource unit.</li>
                <li><code>Group</code>: To map resource group.</li>
            </ul>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                The Gantt control features are segregated into individual feature-wise modules. To use selection, markers, toolbar,
                editing and resize features, inject the <code>Selection</code>, <code>DayMarkers</code>, <code>Toolbar</code>,
                <code>Edit</code> and <code>Resize</code> modules using the <code>provide</code> section.
            </p>   
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/resource-view">resource view</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, Edit, DayMarkers, Toolbar, Resize } from "@syncfusion/ej2-vue-gantt";
import { resourcesData, resourceCollection } from './data-source';

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function() {
        return{
            data: resourcesData,
            resources: resourceCollection,
            viewType: 'ResourceView',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                resourceInfo: 'resources',
                work: 'work',
                child: 'subtasks'
            },
            taskType: "FixedWork",
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
                unit: 'resourceUnit',
                group: 'resourceGroup'
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
            { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }],
            height: '650px',
            columns: [
                { field: 'TaskID', visible: false },
                { field: 'TaskName', headerText: 'Name', width: 280 },
                { field: 'work', headerText: 'Work' },
                { field: 'Progress' },
                { field: 'resourceGroup', headerText: 'Group' },
                { field: 'StartDate' },
                { field: 'Duration' }
            ],
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            labelSettings: {
                rightLabel: 'resources',
                taskLabel: 'Progress'
            },
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('05/18/2025'),
            splitterSettings: {
                columnIndex: 3
            }
        };
    },
    provide: {
        gantt: [ Selection, DayMarkers, Toolbar, Edit, Resize]
    },
    methods: {
        toolbarClick: function(args) {
            if (args.item.id === 'showhidebar') {
                this.$refs.gantt.ej2Instances.showOverAllocation =  this.$refs.gantt.ej2Instances.showOverAllocation ? false : true;
            }
        }
    }
}
</script>
