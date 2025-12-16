<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>
                This sample demonstrates the column freezing feature in the Gantt Chart. Frozen columns remain fixed while other columns scroll horizontally, improving readability.
            </p>
        </div>
        <div>
            <ejs-toolbar overflowMode="Popup" cssClass="template">
                <e-items>
                    <e-item align="Left" :template="'columnLabelTemplate'"></e-item>
                    <template v-slot:columnLabelTemplate>
                        <div class="column-label">
                            <label class="showhide">Columns:</label>
                        </div>
                    </template>
                    <e-item align="Left" :template="'columnDropDownTemp'"></e-item>
                    <template v-slot:columnDropDownTemp>
                        <ejs-dropdownlist ref='columns' id="column" :dataSource="leftColumns" :value="columnValue"
                            :fields="fields" @change="onColumnChange"></ejs-dropdownlist>
                    </template>
                    <e-item align="Left" :template="'directionLabelTemplate'"></e-item>
                    <template v-slot:directionLabelTemplate>
                        <div class="direction-label">
                            <label class="showhide">Freeze Direction:</label>
                        </div>
                    </template>
                    <e-item align="Left" :template="'directionDropDown'"></e-item>
                    <template v-slot:directionDropDown>
                        <ejs-dropdownlist ref='directions' id="direction" :dataSource="directions" :value="directionValue"
                            :fields="fields" @change="onDirectionChange"></ejs-dropdownlist>
                    </template>
                    
                </e-items>
            </ejs-toolbar>
            <ejs-gantt ref='gantt' id="frozenColumns" :dataSource="data" :height="height" :rowHeight="46"
                :taskbarHeight="25" :timelineSettings="timelineSettings" :taskFields="taskFields" :resources="resources" :resourceFields="resourceFields"
                :labelSettings="labelSettings" :treeColumnIndex="1" :columns="columns" :splitterSettings="splitterSettings" 
                :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
            </ejs-gantt>
        </div>

        <div id="description">
            <p>The freezing feature allows users to freeze specfied number of columns while scrolling the remaining content.
                The freezing behavior can be configured using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/index-default#frozencolumns">frozenColumns</a> property.
                Additionally, to keep specific columns visible during horizontal scrolling, use the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/columnmodel#freeze">column.freeze</a> property on the relevant columns to freeze them to the <code>Left</code>, <code>Right</code> or <code>Fixed</code>.
            </p>
            <p>In this example, the <b>Task ID</b> and <b>Task Name</b> columns are frozen on the left, and the <b>Assignee</b>
                column is frozen on the right using the <code class="code">column.freeze</code> property.
                Gantt component features are segregated into individual feature-wise modules. To use column freezing, inject the <code
                    className="code">Freeze</code> module.
            </p>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/getting-started#add-syncfusion-vue-component">documentation section</a>.
            </p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Freeze, Toolbar} from "@syncfusion/ej2-vue-gantt";
import { frozenColumnsData, resourceCollection} from './data-source';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ToolbarComponent, ItemDirective, ItemsDirective } from "@syncfusion/ej2-vue-navigations";


export default {
    name: "App",
    components: {
        'ejs-gantt': GanttComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-toolbar': ToolbarComponent,
        'e-item': ItemDirective,
        'e-items': ItemsDirective
    },
    data: function () {
        return {
            data: frozenColumnsData,
            leftColumns: [
                { id: 'TaskID', name: 'Task ID' },
                { id: 'TaskName', name: 'Task Name' },
                { id: 'StartDate', name: 'Start Date' },
                { id: 'EndDate', name: 'End Date' },
                { id: 'Duration', name: 'Duration' },
                { id: 'Progress', name: 'Progress' },
                { id: 'Predecessor', name: 'Dependency'},
                { id: 'Resources', name: 'Assignee' },
                { id: 'Designation', name: 'Designation' },
                { id: 'Status', name: 'Status' },
            ],
            directions: [
                { id: 'Left', name: 'Left' },
                { id: 'Right', name: 'Right' },
                { id: 'Fixed', name: 'Fixed' },
                { id: 'None', name: 'None' },
            ],
            fields: {value: 'id', text: 'name'},
            columnValue: 'TaskID',
            directionValue: 'Left',
            height: '650px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency:'Predecessor',
                parentID: 'ParentID',
                resourceInfo: 'Resources',
            },
            resources: resourceCollection,
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
            },
            columns: [
                { field: 'TaskID', headerText: 'Task ID', freeze: 'Left', },
                { field: 'TaskName', headerText: 'Task Name', width: 150, freeze: 'Left'},
                { field: 'StartDate', headerText: 'Start Date', },
                { field: 'Duration', headerText: 'Duration',},
                { field: 'EndDate', headerText: 'End Date', },
                { field: 'Progress', headerText: 'Progress', },
                { field: 'Predecessor', headerText: 'Dependency' },
                { field: 'Resources', headerText: 'Assignee', freeze: 'Right' },
                { field: 'Designation', headerText: 'Designation' },
                { field: 'Status', headerText: 'Status', },
            ],
            labelSettings: {
                leftLabel: 'TaskName',
                taskLabel: 'Progress'
            },
            splitterSettings: {
                position: '70%'
            },
            projectStartDate: new Date('02/27/2025'),
            projectEndDate: new Date('05/04/2025'),
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
        };
    },
    provide: {
        gantt: [ Freeze, Toolbar]
    },
    methods: {
        onColumnChange(e){
            const gantt = this.$refs.gantt.ej2Instances;
            let columnName = e.value;
            let column = gantt.getColumnByField(columnName, gantt.columns);
            let value = column.freeze === undefined ? 'None' : column.freeze;
            this.$refs.directions.ej2Instances.value = value;
        },
        onDirectionChange(e){
            const gantt = this.$refs.gantt.ej2Instances;
            let columnName = this.$refs.columns.ej2Instances.value;
            let columns = gantt.getGanttColumns();
            let column = columns.find((col) => col.field === columnName);
            if (column) {
                column.freeze = e.value === 'None' ? 'None' : e.value;
                gantt.columns = columns;
            }
        }
    }
}
</script>

<style>
    .tailwind3 #frozenColumns .e-content .e-leftfreeze,
    .tailwind3 #frozenColumns .e-content .e-rightfreeze,
    .tailwind3 #frozenColumns .e-content .e-fixedfreeze {
      background-color: #e0e7ff !important;
    }
    .tailwind3 #frozenColumns .e-columnheader .e-leftfreeze,
    .tailwind3 #frozenColumns .e-columnheader .e-rightfreeze,
    .tailwind3 #frozenColumns .e-columnheader .e-fixedfreeze {
      background-color: #d8dfff !important;
    }
    /* ==================== TAILWIND3 DARK ==================== */
    .tailwind3-dark #frozenColumns .e-content .e-leftfreeze,
    .tailwind3-dark #frozenColumns .e-content .e-rightfreeze,
    .tailwind3-dark #frozenColumns .e-content .e-fixedfreeze {
      background-color: #1e1b4b !important;
    }
    .tailwind3-dark #frozenColumns .e-columnheader .e-leftfreeze,
    .tailwind3-dark #frozenColumns .e-columnheader .e-rightfreeze,
    .tailwind3-dark #frozenColumns .e-columnheader .e-fixedfreeze {
      background-color: #2d2b55 !important; /* slightly lighter than content for depth */
    }
    .fluent2 #frozenColumns .e-content .e-leftfreeze,
    .fluent2 #frozenColumns .e-content .e-rightfreeze,
    .fluent2 #frozenColumns .e-content .e-fixedfreeze { 
      background-color: #ebf3fc !important; 
    }
   .fluent2 #frozenColumns .e-columnheader .e-leftfreeze,
   .fluent2 #frozenColumns .e-columnheader .e-rightfreeze,
   .fluent2 #frozenColumns .e-columnheader .e-fixedfreeze {
      background-color: #e5f1ff !important; /* slightly lighter than content for depth */
    }
    .fluent2-dark #frozenColumns .e-content .e-leftfreeze,
    .fluent2-dark #frozenColumns .e-content .e-rightfreeze,
    .fluent2-dark #frozenColumns .e-content .e-fixedfreeze { 
      background-color: #082338 !important; 
    }
    .fluent2-dark #frozenColumns .e-columnheader .e-leftfreeze,
    .fluent2-dark #frozenColumns .e-columnheader .e-rightfreeze,
    .fluent2-dark #frozenColumns .e-columnheader .e-fixedfreeze {
      background-color: #082338 !important; /* slightly lighter than content for depth */
    }
.material3 #frozenColumns .e-content .e-leftfreeze,
.material3 #frozenColumns .e-content .e-rightfreeze,
.material3 #frozenColumns .e-content .e-fixedfreeze { background-color: rgba(234, 221, 255) !important; }
.material3 #frozenColumns .e-columnheader .e-leftfreeze,
.material3 #frozenColumns .e-columnheader .e-rightfreeze,
.material3 #frozenColumns .e-columnheader .e-fixedfreeze {
  background-color: rgb(230, 216, 251) !important; }
 /* slightly lighter than content for depth */
.material3-dark #frozenColumns .e-content .e-leftfreeze,
.material3-dark #frozenColumns .e-content .e-rightfreeze,
.material3-dark #frozenColumns .e-content .e-fixedfreeze { background-color: rgb(60, 42, 107) !important; }
.material3-dark #frozenColumns .e-columnheader .e-leftfreeze,
.material3-dark #frozenColumns .e-columnheader .e-rightfreeze,
.material3-dark #frozenColumns .e-columnheader .e-fixedfreeze {
  background-color: rgb(78, 57, 130) !important;
}
.bootstrap5\.3 #frozenColumns .e-content .e-leftfreeze,
.bootstrap5\.3 #frozenColumns .e-content .e-rightfreeze,
.bootstrap5\.3 #frozenColumns .e-content .e-fixedfreeze { background-color:  #86b7fe !important; }
.bootstrap5\.3 #frozenColumns .e-columnheader .e-leftfreeze,
.bootstrap5\.3 #frozenColumns .e-columnheader .e-rightfreeze,
.bootstrap5\.3 #frozenColumns .e-columnheader .e-fixedfreeze {
  background-color: #8fbdff !important;
}
.bootstrap5\.3-dark #frozenColumns .e-content .e-leftfreeze,
.bootstrap5\.3-dark #frozenColumns .e-content .e-rightfreeze,
.bootstrap5\.3-dark #frozenColumns .e-content .e-fixedfreeze { background-color: #86b7fe !important; }
.bootstrap5\.3-dark #frozenColumns .e-columnheader .e-leftfreeze,
.bootstrap5\.3-dark #frozenColumns .e-columnheader .e-rightfreeze,
.bootstrap5\.3-dark #frozenColumns .e-columnheader .e-fixedfreeze {
  background-color: #8fbdff !important;
}
/* Fluent2 High Contrast - separate class as you said */
.fluent2-highcontrast #frozenColumns .e-content .e-leftfreeze, .fluent2-highcontrast #frozenColumns .e-content .e-leftfreeze .e-treecolumn-container .e-treegridexpand, .fluent2-highcontrast #frozenColumns .e-content .e-leftfreeze .e-treecolumn-container .e-treegridcollapse,
.fluent2-highcontrast #frozenColumns .e-content .e-rightfreeze, .fluent2-highcontrast #frozenColumns .e-content .e-rightfreeze .e-treecolumn-container .e-treegridexpand, .fluent2-highcontrast #frozenColumns .e-content .e-rightfreeze .e-treecolumn-container .e-treegridcollapse,
.fluent2-highcontrast #frozenColumns .e-content .e-fixedfreeze, .fluent2-highcontrast #frozenColumns .e-content .e-fixedfreeze .e-treecolumn-container .e-treegridexpand, .fluent2-highcontrast #frozenColumns .e-content .e-fixedfreeze .e-treecolumn-container .e-treegridcollapse {
  background-color: #45e3f4 !important;
  color: #000 !important;
}
.fluent2-highcontrast #frozenColumns .e-columnheader .e-leftfreeze,
.fluent2-highcontrast #frozenColumns .e-columnheader .e-rightfreeze,
.fluent2-highcontrast #frozenColumns .e-columnheader .e-fixedfreeze {
  background-color: #07dff3 !important;
  color: #000 !important;
}
#frozenColumns .e-template{
    padding: 0px !important;
}
#frozenColumns .e-template .e-dropdownlist{
    margin: auto !important;
}
.fluent2 #frozenColumns .e-toolbar-items, .fluent2-dark #frozenColumns .e-toolbar-items, .fluent2-highcontrast #frozenColumns .e-toolbar-items, .material3 #frozenColumns .e-toolbar-items,.material3-dark #frozenColumns .e-toolbar-items{
  margin-top: 4px;
}
.showhide{
    margin-right: 10px;
    font-size: 14px;
    margin-top: 5px;
}
.template .e-template .e-dropdownlist{
    margin: auto !important;
}
.template .e-template{
    padding: 0px !important;
}
.direction-label{
    margin-left: 10px;
}
</style>