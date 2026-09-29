<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-gantt ref='gantt' id="SortingAPI" :dataSource="data" :height="height" :rowHeight="46"
                    :taskbarHeight="25" :highlightWeekends='true' :allowSelection='true' :allowSorting='true'
                    :taskFields="taskFields" :labelSettings="labelSettings" :treeColumnIndex="1" :columns="columns"
                    :splitterSettings="splitterSettings" :projectStartDate="projectStartDate"
                    :projectEndDate="projectEndDate">
                </ejs-gantt>
            </div>
        </div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties">
                <tr>
                    <td style="width: 100%">
                        <div style="font-size: 15px;">Column</div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 100%">
                        <div>
                            <ejs-dropdownlist ref='columns' id='columns' width='150px' :dataSource='columnsData'
                                value='TaskName' :fields='columnsFields'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 100%">
                        <div style="font-size: 15px;">Direction</div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 100%;">
                        <div>
                            <ejs-dropdownlist ref='direction' width='150px' id='direction' :dataSource='directionData'
                                value='Ascending' :fields='directionFields'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 100%">
                        <div>
                            <ejs-button ref='sort' style="margin-right: 5px; width: 80px;"
                                v-on:click="sort">Sort</ejs-button>
                            <ejs-button ref='clear' style="width: 80px" v-on:click="clear">Clear</ejs-button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div id="action-description">
            <p>This sample demonstrates sorting tasks programmatically in the Gantt Chart. Select a column and sort direction from the property panel, then click the Sort button to apply sorting or Clear to remove it.</p>
        </div>

        <div id="description">
            <p>The Gantt Chart supports programmatic sorting through the <code>sortColumn</code> and <code>clearSorting</code> methods. Sorting can be enabled by setting the <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#allowsorting">allowSorting</a></code> to <code>true</code></p>
            <p>In this example, choose a column and sort direction from the property panel, then click the <strong>Sort</strong> button to apply sorting. Click the <strong>Clear</strong> button to remove the applied sorting. Users can also sort columns interactively by clicking the column headers. Multi-column sorting is supported by holding the <strong>CTRL</strong> key while selecting additional column headers.</p>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use a selection, markers and sort features,
                inject the <code>Selection</code>, <code>DayMarkers</code> and <code>Sort</code> modules using the
                <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/sorting">sorting</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers, Sort } from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
        'ejs-gantt': GanttComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-button': ButtonComponent
    },
    data: function () {
        return {
            data: editingData,
            height: '650px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                parentID: 'ParentId'
            },
            columns: [
                { field: 'TaskID', visible: false, headerText: 'ID', width: 80 },
                { field: 'TaskName', headerText: 'TaskName', width: 250 },
                { field: 'StartDate', headerText: 'StartDate' },
                { field: 'EndDate', headerText: 'EndDate' },
                { field: 'Duration', headerText: 'Duration' },
                { field: 'Progress', headerText: 'Progress' },
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('09/01/2025'),
            columnsData: [
                { id: 'TaskName', type: 'TaskName' },
                { id: 'StartDate', type: 'StartDate' },
                { id: 'EndDate', type: 'EndDate' },
                { id: 'Duration', type: 'Duration' },
                { id: 'Progress', type: 'Progress' }
            ],
            columnsFields: {
                text: 'type', value: 'id'
            },
            directionData: [
                { id: 'Ascending', type: 'Ascending' },
                { id: 'Descending', type: 'Descending' },
            ],
            directionFields: {
                text: 'type', value: 'id'
            }
        };
    },
    provide: {
        gantt: [DayMarkers, Selection, Sort]
    },
    methods: {
        sort: function () {
            let columnName = this.$refs.columns.ej2Instances.value;
            let sortType = this.$refs.direction.ej2Instances.value;
            this.$refs.gantt.sortColumn(columnName, sortType, false);
        },
        clear: function () {
            this.$refs.gantt.clearSorting();
        }
    }
}
</script>