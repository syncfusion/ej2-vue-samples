<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-gantt ref='gantt' id="Selection" :dataSource="data" :height="height" :highlightWeekends='true'
                    :hierarchyCheckboxMode="'hierarchy'" :allowSelection='true' :allowFiltering='true' :enableHover='true' :taskFields="taskFields" :labelSettings="labelSettings"
                    :treeColumnIndex="2" :selectionSettings="selectionSettings" :splitterSettings="splitterSettings"
                    :rowHeight="46" :taskbarHeight="25" :projectStartDate="projectStartDate" :toolbar= "toolbar"
                    :projectEndDate="projectEndDate" :columns="columns">
                </ejs-gantt>
            </div>
        </div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties">
                <tr>
                    <td style="width: 30%">
                        <div style="font-size: 15px">Hierarchy Checkbox Selection Mode</div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 70%;padding-right: 5px">
                        <div style="width: 150px">
                            <ejs-dropdownlist ref='selectionmode' id='selectionmode' width='110px'
                                :dataSource='selectionModeData' value='hierarchy' :change="onModechange"
                                :fields='selectionCheckboxModeFields'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
            </table>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates hierarchy-based checkbox selection in the Gantt Chart. It allows configuring how checkbox selection is propagated across parent and child task records using different hierarchy modes.
            </p>
        </div>

        <div id="description">
            <p>
                The hierarchy checkbox selection feature simplifies parent-child selection management by automatically handling descendant propagation and ancestor state calculations. It supports parent selection, child selection, and indeterminate checkbox states without requiring custom implementation. The hierarchy selection behavior can be configured using the
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#hierarchycheckboxmode">hierarchyCheckboxMode</a>
                property.
            </p>

            <p>
                The following hierarchy checkbox modes are supported:
            </p>
            <ul>
                <li>
                    <code>self</code> - Selecting or deselecting a checkbox affects only the current row. Parent and child records remain unchanged.
                </li>
                <li>
                    <code>hierarchy</code> - Selecting a parent record automatically selects all descendant records. Child selection updates the corresponding parent state and displays indeterminate states when applicable.
                </li>
                <li>
                    <code>filteredHierarchy</code> - Works similar to <code>hierarchy</code>, but checkbox propagation is applied only to the currently visible records after filtering or searching.
                </li>
            </ul>

            <p style="font-weight: 500">Injecting Module:</p>

            <p>
                Gantt component features are segregated into individual feature-wise modules. To use hierarchy checkbox selection,
                inject the <code>Selection</code>, <code>Toolbar</code>, <code>Filter</code> module using the <code>provide</code> section.
            </p>

            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/selection">selection</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, Toolbar, Filter } from "@syncfusion/ej2-vue-gantt";
import { hierarchyCheckboxData } from './data-source';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
export default {
    components: {
        'ejs-gantt': GanttComponent,
        'ejs-dropdownlist': DropDownListComponent,
    },
    data: function () {
        return {
            data: hierarchyCheckboxData,
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
                { field: 'CheckBox', headerText: '', showCheckbox: true, width: 70, allowFiltering: false},
                { field: 'TaskID', width: 70 },
                { field: 'TaskName', width: 190 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' }
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            toolbar: ['Search'],
            splitterSettings: {
                columnIndex: 3
            },
            selectionSettings: {
                mode: 'Row',
                type: 'Multiple',
                enableToggle: false
            },
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('07/20/2025'),
            selectionModeData: [
                { id: 'self', type: 'self' },
                { id: 'hierarchy', type: 'hierarchy' },
                { id: 'filteredHierarchy', type: 'filteredHierarchy' }
            ],
            selectionCheckboxModeFields: {
                text: 'type', value: 'id'
            }
        };
    },
    provide: {
        gantt: [Selection, Toolbar, Filter]
    },
    methods: {
       onModechange: function (e) {
        var mode = e.value;
        this.$refs.gantt.ej2Instances.hierarchyCheckboxMode = mode;
        this.$refs.gantt.ej2Instances.refresh();
      }
    }
}
</script>
<style>
body.tailwind3 #Selection.e-gantt .e-gantt-tree-grid-pane .e-headercell,
body.tailwind3-dark #Selection.e-gantt .e-gantt-tree-grid-pane .e-headercell {
    padding: 0px 8px !important;
}
</style>