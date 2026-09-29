<template>
    <div class="control-pane">
        <div class="control-section">
            <!-- Property Panel -->
            <div class="property-panel" style="margin-bottom:12px">
                <div style="display:flex;align-items:center;gap:10px">
                    <label>Allowed Dependency Types:</label>

                    <ejs-multiselect
                        id="allowedDependencyType"
                        :dataSource="dependencyTypeData"
                        :fields="fields"
                        :value="dependencyType"
                        mode="CheckBox"
                        :showDropDownIcon="true"
                        :showClearButton="false"
                        popupHeight="220px"
                        width="240px"
                        :change="onDependencyTypeChange">
                    </ejs-multiselect>
                </div>
            </div>

            <!-- Gantt -->
            <ejs-gantt
                id="DependencyTypes"
                :dataSource="data"
                :taskFields="taskFields"
                :allowSelection="true"
                :highlightWeekends="true"
                :toolbar="toolbar"
                :editSettings="editSettings"
                :splitterSettings="splitterSettings"
                height="650px"
                :taskbarHeight="25"
                :rowHeight="46"
                :treeColumnIndex="1"
                :labelSettings="labelSettings"
                :projectStartDate="projectStartDate"
                gridLines="Both"
                :allowedDependencyTypes="allowedDependencyTypes"
            >
                <e-columns>
                    <e-column field="TaskID" :visible="false"></e-column>
                    <e-column field="TaskName" headerText="Task Name" width="200"></e-column>
                    <e-column field="Predecessor" headerText="Dependency" width="140"></e-column>
                    <e-column field="StartDate" headerText="Start Date" width="130"></e-column>
                    <e-column field="Duration" headerText="Duration" width="110"></e-column>
                    <e-column field="Progress" headerText="Progress" width="100"></e-column>
                </e-columns>
            </ejs-gantt>
        </div>

        <div id="action-description">
            <p>
                The Gantt Chart supports dependency types to define
                relationships between tasks or features, helping control
                execution order and project sequencing.
            </p>
        </div>
        <div id="description">
            <p>
                The Gantt chart supports various dependency relationship types to manage task links. The <code>allowedDependencyTypes</code> 
                API is used to restrict the dependency types available during task editing and dependency creation.
            </p>
            <p>
                The different types of dependency are as follows:
            </p>
            <ul>
                <li><code>FS</code> - Finish to Start</li>
                <li><code>SS</code> - Start to Start</li>
                <li><code>FF</code> - Finish to Finish</li>
                <li><code>SF</code> - Start to Finish</li>
            </ul>
            <p>
                When the dependency type list is configured, the Gantt validates newly created or modified links against the selected
                relationship types.
            </p>
            <p>
                Gantt component features are segregated into individual
                feature-wise modules. To use edit and selection features,
                inject the <code>Edit</code>,
                <code>Selection</code> and <code>Toolbar</code>modules into the
                <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/taskdependency">task dependency</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>

<script>
import { GanttComponent, ColumnsDirective, ColumnDirective, Edit, Selection, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import { dependencyData } from "./data-source";

export default {
    components: {
        "ejs-gantt": GanttComponent,
        "e-columns": ColumnsDirective,
        "e-column": ColumnDirective,
        "ejs-multiselect": MultiSelectComponent
    },
    data() {
        return {
            data: dependencyData,
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
            dependencyTypeData: [
                {
                    text: "Finish to Start (FS)",
                    value: "FS"
                },
                {
                    text: "Start to Start (SS)",
                    value: "SS"
                },
                {
                    text: "Finish to Finish (FF)",
                    value: "FF"
                },
                {
                    text: "Start to Finish (SF)",
                    value: "SF"
                }
            ],
            fields: {
                text: "text",
                value: "value"
            },
            dependencyType: ["FS", "SS", "FF", "SF"],
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
            toolbar: ["Add", "Edit", "Update", "Delete", "Cancel", "ExpandAll", "CollapseAll"],
            projectStartDate: new Date("01/01/2026")
        };
    },

    computed: {
        allowedDependencyTypes() {
            return this.dependencyType;
        }
    },

    methods: {
        onDependencyTypeChange(args) {
            this.dependencyType = args.value;
        }
    },

    provide: {
        gantt: [Edit, Selection, Toolbar],
        dropdowns: [CheckBoxSelection]
    }
};
</script>