<template>
    <div class="control-pane">
        <div class="control-section">
            <ejs-gantt
                id="DependencyOffset"
                :dataSource="data"
                :taskFields="taskFields"
                :allowSelection="true"
                :highlightWeekends="true"
                :editSettings="editSettings"
                :splitterSettings="splitterSettings"
                height="650px"
                :taskbarHeight="25"
                :rowHeight="46"
                :treeColumnIndex="1"
                :labelSettings="labelSettings"
                :projectStartDate="projectStartDate"
                gridLines="Both"
            >
                <e-columns>
                    <e-column field="TaskID" :visible="false"></e-column>
                    <e-column field="TaskName" headerText="Task Name" width="200"></e-column>
                    <e-column field="Predecessor" headerText="Dependency" width="160"></e-column>
                    <e-column field="StartDate" headerText="Start Date" width="130"></e-column>
                    <e-column field="Duration" headerText="Duration" width="110"></e-column>
                    <e-column field="Progress" headerText="Progress" width="100"></e-column>
                </e-columns>
            </ejs-gantt>
        </div>

        <div id="action-description">
            <p>
                This sample illustrates how lead and lag offsets are
                expressed in task predecessor definitions. Offsets are
                used to delay or overlap dependent tasks from their
                default relationship.
            </p>
        </div>

        <div id="description">
            <p>
                The Gantt Chart supports dependency offsets to define
                lead or lag time between linked tasks. These offsets
                adjust the start or finish dates of dependent tasks
                relative to their predecessor tasks, enabling more
                flexible and accurate project scheduling.
            </p>
            <p>
                These offsets affect how the dependent task start and
                finish dates are calculated relative to the linked task,
                enabling more complex scheduling scenarios.
            </p>
            <p>
                Gantt component features are segregated into individual
                feature-wise modules. To use edit and selection features,
                inject the <code>Edit</code> and
                <code>Selection</code> modules into the
                <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/taskdependency#predecessor-offset-with-duration-units">task dependency</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>

<script>
import { GanttComponent, ColumnsDirective, ColumnDirective, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { leadLagOffsetData } from "./data-source";

export default {
    components: {
        "ejs-gantt": GanttComponent,
        "e-columns": ColumnsDirective,
        "e-column": ColumnDirective
    },
    data() {
        return {
            data: leadLagOffsetData,
            taskFields: {
                id: "TaskID",
                name: "TaskName",
                startDate: "StartDate",
                endDate: "EndDate",
                duration: "Duration",
                progress: "Progress",
                dependency: "Predecessor",
                parentID: "ParentID"
            },
            labelSettings: {
                leftLabel: "TaskName"
            },
            splitterSettings: {
                columnIndex: 3
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            projectStartDate: new Date("01/01/2026")
        };
    },
    provide: {
        gantt: [Edit, Selection]
    }
};
</script>