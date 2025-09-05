<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-gantt ref='gantt' id="GridLines" :dataSource="data" :height="height" :rowHeight="46"
                    :taskbarHeight="25" :highlightWeekends='true' :taskFields="taskFields" :columns="columns"
                    :labelSettings="labelSettings" :splitterSettings="splitterSettings" :treeColumnIndex="1"
                    :gridLines="gridLines" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
                </ejs-gantt>
            </div>
        </div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties">
                <tr>
                    <td style="width: 50%; fontSize: 15px">
                        Grid Lines
                    </td>
                </tr>
                <tr>
                    <td style="width: 100%;padding: 10px 10px 10px 0px">
                        <ejs-dropdownlist id='gridlines' width='150px' :dataSource='linesData' value='Both'
                            :fields='linesFields' :change="lineChange"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the visibility of Gantt lines that separate the rows and columns.
                In this sample, you can change the gridlines from the property panel.</p>
        </div>
        <div id="description">
            <p>
                The <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#gridlines">gridLines</a> property is
                used to control the visibility of line that separates the rows and
                columns.
                Gantt allows us to display the following grid lines:
            </p>
            <ul>
                <li><code>None</code> - Shows no line.</li>
                <li><code>Both</code> - Shows both horizontal and vertical lines.</li>
                <li><code>Horizontal</code> - Shows the horizontal line.</li>
                <li><code>Vertical</code> - Shows the vertical line.</li>
            </ul>
            <p> In this demo, you can modify the visibility of gridlines by selecting values in dropdown.</p>

            <p>Gantt component features are segregated into individual feature-wise modules.To use a selection, inject
                the
                <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method.To use markers,
                inject the <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.
            </p>
            <br>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/getting-started">documentation
                    section</a>.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

export default {
    components: {
        'ejs-gantt': GanttComponent,
        'ejs-dropdownlist': DropDownListComponent
    },
    data: function () {
        return {
            data: projectNewData,
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
                { field: 'TaskID', width: 70 },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' },
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            gridLines: "Both",
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('07/20/2025'),
            linesFields: { text: 'type', value: 'id' },
            linesData: [
                { id: 'Both', type: 'Both' },
                { id: 'Vertical', type: 'Vertical' },
                { id: 'Horizontal', type: 'Horizontal' },
                { id: 'None', type: 'None' }
            ]
        };
    },
    provide: {
        gantt: [DayMarkers, Selection]
    },
    methods: {
        lineChange: function (e) {
            this.gridLines = e.value;
        }
    }
}
</script>