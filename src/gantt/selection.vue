<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-gantt ref='gantt' id="Selection" :dataSource="data" :height="height" :highlightWeekends='true'
                    :allowSelection='true' :enableHover='true' :taskFields="taskFields" :labelSettings="labelSettings"
                    :treeColumnIndex="1" :selectionSettings="selectionSettings" :splitterSettings="splitterSettings"
                    :rowHeight="46" :taskbarHeight="25" :projectStartDate="projectStartDate"
                    :projectEndDate="projectEndDate">
                </ejs-gantt>
            </div>
        </div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties">
                <tr>
                    <td style="width: 42%; padding-top: 10px; padding-bottom: 10px;">
                        <div>Enable Hover</div>
                    </td>
                    <td style="width: 70%;padding-bottom: 10px;">
                        <div style="padding-top: 0px">
                            <ejs-checkbox ref="enableHover" class="checkbox" id="enablehover" :checked="true"
                                :change="enableHoverCheckbox">
                            </ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 30%">
                        <div style="font-size: 15px">Selection Mode</div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 70%;padding-right: 5px">
                        <div style="width: 150px">
                            <ejs-dropdownlist ref='selectionmode' id='selectionmode' width='110px'
                                :dataSource='selectionModeData' value='Row'
                                :fields='selectionModeFields'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 30%">
                        <div style="font-size: 15px">Selection Type</div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 70%;padding-right: 5px">
                        <div style="width: 150px">
                            <ejs-dropdownlist ref='selectiontype' width='110px' id='selectiontype'
                                :dataSource='selectionTypeData' value='Single'
                                :fields='selectionTypeFields'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 30%">
                        <div style="font-size: 15px">Toggle Selection</div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 70%;padding-right: 5px">
                        <div style="width: 150px">
                            <ejs-dropdownlist ref='toggle' width='110px' id='toggle' :dataSource='selectionToggleData'
                                :value='toggleValue' :fields='selectionToggleFields'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 30%">
                        <div>
                            <ejs-button ref='perform' v-on:click="perform">Update</ejs-button>
                        </div>

                    </td>
                </tr>
            </table>
        </div>
        <div id="action-description">
            <p> This sample showcases the selection feature in the Gantt Chart. It allows highlighting rows or cells.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo sample, the selection functionality in the Gantt Chart. The selection type can be
                configured using the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettingsModel/#type">selectionSettings.type</a>
                property:
            </p>
            <ul>
                <li><code>Single</code> - Allows selection of a single row or cell.</li>
                <li><code>Multiple</code> - Enables selection of multiple rows or cells using Ctrl + click.</li>
            </ul>
            <p>
                The selection mode is set using the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettingsModel/#mode">selectionSettings.mode</a>
                property:
                They are:
            </p>
            <ul>
                <li><code>Row</code> - Allows selection of entire rows.</li>
                <li><code>Cell</code> - Allows selection of individual cells.</li>
                <li><code>Both</code> - Enables selection of both rows and cells simultaneously.</li>
            </ul>
            <p>
                Toggle selection is supported through the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/selectionSettingsModel/#enabletoggle">selectionSettings.enableToggle</a>
                property, which allows deselecting a selected item by clicking it again.
                The <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#enablehover">enableHover</a> highlights
                the current row, header cell, and timeline cell on mouse hover, improving visual feedback during
                interaction.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/selection">documentation section</a>.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { CheckBoxComponent } from '@syncfusion/ej2-vue-buttons';
export default {
    components: {
        'ejs-gantt': GanttComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-button': ButtonComponent,
        'ejs-checkbox': CheckBoxComponent
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
                parentID: 'ParentId',
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
            selectionSettings: {
                mode: 'Row',
                type: 'Single',
                enableToggle: false
            },
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('07/20/2025'),
            selectionModeData: [
                { id: 'Row', type: 'Row' },
                { id: 'Cell', type: 'Cell' }
            ],
            selectionModeFields: {
                text: 'type', value: 'id'
            },
            selectionTypeData: [
                { id: 'Single', type: 'Single' },
                { id: 'Multiple', type: 'Multiple' }
            ],
            selectionTypeFields: {
                text: 'type', value: 'id'
            },
            selectionToggleData: [
                { id: true, type: 'Enable' },
                { id: false, type: 'Disable' }
            ],
            selectionToggleFields: {
                text: 'type', value: 'id'
            },
            toggleValue: false
        };
    },
    provide: {
        gantt: [Selection]
    },
    methods: {
        perform: function () {
            let mode = this.$refs.selectionmode.ej2Instances.value;
            let type = this.$refs.selectiontype.ej2Instances.value;
            let toggle = this.$refs.toggle.ej2Instances.value;
            this.$refs.gantt.ej2Instances.selectionSettings.mode = mode;
            this.$refs.gantt.ej2Instances.selectionSettings.type = type;
            this.$refs.gantt.ej2Instances.selectionSettings.enableToggle = toggle;
        },
        enableHoverCheckbox: function () {
            if (this.$refs.enableHover.ej2Instances.checked) {
                this.$refs.gantt.ej2Instances.enableHover = true;
            } else {
                this.$refs.gantt.ej2Instances.enableHover = false;
            }
        },
    }
}
</script>