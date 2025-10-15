<template>
    <div>
        <div id="action-description">
            <p>This sample illustrates the phases of a software development project, with tasks like analysis, design, development, testing, and documentation.
            This also demonstrates CRUD operations in a Gantt Chart.</p>
        </div>
        <div class="control-section">
            <div class="content-wrapper">
                <ejs-gantt ref="gantt" id="GanttDialog" :dataSource="data" :resources="resources"
                    :taskFields="taskSettings" :resourceFields="resourceFields" :editSettings="editSettings"
                    :toolbar="toolbar" :taskMode="taskMode" :columns="columns" :gridLines="gridLines"
                    :addDialogFields="addDialogFields" :editDialogFields="editDialogFields"
                    :splitterSettings="splitterSettings" :timelineSettings="timelineSettings"
                    :eventMarkers="eventMarkers" :labelSettings="labelSettings" :height="'650px'" :rowHeight="46"
                    :taskbarHeight="25" :allowSelection="true" :projectStartDate="projectStartDate"
                    :projectEndDate="projectEndDate" :highlightWeekends="true" :actionComplete="actionComplete">
                </ejs-gantt>
            </div>
        </div>
        <div id="description">
            <p>This sample demonstrates how to fully customize the dialog editing interface in the Vue Gantt
                Chart using
                the
                <code><a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/gantt/addDialogFieldSettings/">addDialogFields</a></code>
                and
                <code><a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/gantt/editDialogFieldSettings/">editDialogFields</a></code>
                properties along with
                <code><a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/api/gantt/editDialogFieldSettings/#additionalparams">additionalParams</a></code>.
                It showcases how to override default input and grid components within each tab and organize custom
                fields across
                multiple tabs for a structured editing experience.
                The following tab-level customizations are included:
            </p>
            <ul>
                <li><b>Dependency Tab</b> - Includes additional toolbar items and improved task naming to simplify task
                    relationship management.</li>
                <li><b>Resource Tab</b> - Combines resource images and names, introduces a Role column, and supports
                    column menu
                    options for flexible configuration.</li>
                <li><b>Segments Tab</b> - Enhanced with extra toolbar options for efficient segment editing and control.
                </li>
                <li><b>Advanced Tab</b> - Organizes Work and Task Mode input fields for quick access and improved
                    clarity.</li>
            </ul>

            <br>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/managing-tasks/editing-tasks#dialog-editing">documentation
                    section</a>.</p>
        </div>
    </div>
</template>

<script>
import { GanttComponent, Selection, Edit, DayMarkers, ColumnMenu, Toolbar, Filter, Reorder, Sort, Resize } from "@syncfusion/ej2-vue-gantt";
import { ComboBox } from '@syncfusion/ej2-dropdowns';
import { DataManager } from '@syncfusion/ej2-data';
import { getUniqueID } from '@syncfusion/ej2-base';
import { dialogData, dataResources } from './data-source'; // Assuming data is in a separate file

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: dialogData,
            resources: dataResources,
            taskSettings: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                dependency: 'Predecessor',
                child: 'subtasks',
                progress: 'Progress',
                segments: 'Segments',
                constraintType: 'ConstraintType',
                constraintDate: 'ConstraintDate',
                resourceInfo: 'Resources',
                manual: 'isManual',
                work: 'Work',
            },
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Indent', 'Outdent'],
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true,
                mode: 'Dialog'
            },
            taskMode: 'Custom',
            gridLines: 'Both',
            columns: [
                { field: 'TaskID', headerText: 'Task ID', width: 130 },
                { field: 'TaskName', headerText: 'Task Name', width: 200 },
                { field: 'StartDate', headerText: 'Start Date' },
                { field: 'Duration', headerText: 'Duration' },
                { field: 'ConstraintType', width: 173 },
                { field: 'ConstraintDate', width: 176 },
                { field: 'isManual', width: 150 },
                { field: 'Work' },
            ],
            addDialogFields: [
                { type: 'General', fields: ['TaskID', 'TaskName', 'StartDate', 'Duration', 'EndDate', 'Progress'] },
                { type: 'Dependency' },
                {
                    type: 'Resources',
                    additionalParams: {
                        allowFiltering: true,
                        allowSorting: true,
                        allowResizing: true,
                        showColumnMenu: true,
                        columns: [
                            { field: 'resourceId', width: 70 },
                            { 
                                field: 'resourceName', headerText: 'Resource Name', width: 204,
                                template: '<div class="image"><img src="src/gantt/images/${resourceName}.png" style="height:25px;width:25px" /><div style="display:inline-block;width:100%;position:relative;left:5px">${resourceName}</div></div>',
                            },
                            { field: 'unit', width: 84 },
                            {
                                field: 'role',
                                headerText: 'Role',
                                allowEditing: false,
                                width: 201
                            },
                        ],
                        filterSettings: { type: 'Menu' },
                    }
                },
                { type: 'Segments' },
                { type: 'Advanced', fields: ['ConstraintType', 'ConstraintDate', 'isManual', 'Work'] },
            ],
            editDialogFields: [
                {
                    type: 'General',
                    fields: ['TaskID', 'TaskName', 'StartDate', 'Duration', 'EndDate', 'Progress']
                },
                {
                    type: 'Dependency',
                    additionalParams: {
                        allowPaging: true,
                        allowSorting: true,
                        pageSettings: { pageSize: 5, pageCount: 5 },
                        toolbar: ['Add', 'Edit', 'Delete', 'Search'],
                        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
                        searchSettings: { fields: ['name'], ignoreCase: true }
                    }
                },
                {
                    type: 'Resources',
                    additionalParams: {
                        allowFiltering: true,
                        allowSorting: true,
                        allowResizing: true,
                        showColumnMenu: true,
                        columns: [
                            { field: 'resourceId', width: 70 },
                            { 
                                field: 'resourceName', headerText: 'Resource Name', width: 204,
                                template: '<div class="image"><img src="src/gantt/images/${resourceName}.png" style="height:25px;width:25px" /><div style="display:inline-block;width:100%;position:relative;left:5px">${resourceName}</div></div>',
                            },
                            { field: 'unit', width: 84 },
                            {
                                field: 'role',
                                headerText: 'Role',
                                allowEditing: false,
                                width: 201
                            },
                        ],
                        filterSettings: { type: 'Menu' },
                    }
                },
                {
                    type: 'Segments',
                    additionalParams: {
                        allowFiltering: true,
                        allowPaging: true,
                        allowSorting: true,
                        allowReordering: true,
                        allowResizing: true,
                        pageSettings: { pageSize: 5, pageCount: 5 },
                        toolbar: ['Add', 'Edit', 'Delete'],
                        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
                        filterSettings: { type: 'Menu' },
                    }
                },
                { type: 'Advanced', fields: ['ConstraintType', 'ConstraintDate', 'isManual', 'Work'] },
            ],
            splitterSettings: {
                position: '50%'
            },
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
            eventMarkers: [
                {
                    day: '07/11/2025',
                    cssClass: 'e-custom-event-marker',
                    label: 'Project approval and kick-off'
                }
            ],
            labelSettings: {
                rightLabel: 'TaskName'
            },
            projectStartDate: new Date('03/30/2025'),
            projectEndDate: new Date('08/07/2025')
        };
    },
    provide: {
        gantt: [Selection, Edit, DayMarkers, ColumnMenu, Toolbar, Filter, Reorder, Sort, Resize]
    },
    methods: {
        getConstraintText(value) {
            const map = {
                0: 'As Soon As Possible',
                1: 'As Late As Possible',
                2: 'Must Start On',
                3: 'Must Finish On',
                4: 'Start No Earlier Than',
                5: 'Start No Later Than',
                6: 'Finish No Earlier Than',
                7: 'Finish No Later Than'
            };
            return map[value];
        },
        actionComplete(args) {
            if (args.requestType === 'openAddDialog' || args.requestType === 'openEditDialog') {
                const tabObj = document.getElementById('GanttDialog_Tab')?.ej2_instances[0];
                if (tabObj) {
                    tabObj.selected = (selectArgs) => {
                        if (selectArgs.selectedIndex === 1) {
                            const gridObj = document.getElementById('GanttDialogDependencyTabContainer')?.ej2_instances[0];
                            if (gridObj) {
                                gridObj.queryCellInfo = (queryArgs) => {
                                    if (queryArgs.column.field === 'name') {
                                        queryArgs.cell.innerText = queryArgs.data.name.substring(queryArgs.data.id.length + 1);
                                    }
                                };
                                const cols = gridObj.columns;
                                cols[1].edit.write = (editArgs) => {
                                    if (editArgs.requestType === 'add') {
                                        editArgs.rowData.uniqueId = getUniqueID('gantt');
                                    }
                                    const field = 'name';
                                    const gantt = document.getElementById('GanttDialog').ej2_instances[0];
                                    const dependencygridData = gantt.editModule.dialogModule['idCollection'];
                                    for (let i = 0; i < dependencygridData.length; i++) {
                                        dependencygridData[i].text = dependencygridData[i].text.substring(dependencygridData[i].id.length + 1);
                                    }
                                    let comboValue = '';
                                    if (editArgs.rowData[field]) {
                                        comboValue = editArgs.rowData[field].substring(0, editArgs.rowData.id.length);
                                    }
                                    const autoObj = new ComboBox({
                                        dataSource: new DataManager(dependencygridData),
                                        popupHeight: '180px',
                                        allowCustom: false,
                                        enableRtl: gantt.enableRtl,
                                        fields: { value: 'value', text: 'text' },
                                        value: comboValue,
                                        change: (arg) => {
                                            const tr = arg.element.closest('tr');
                                            const idInput = tr.querySelector(`#${gantt.element.id}DependencyTabContainerid`);
                                            if (idInput) {
                                                if (arg.itemData && arg.item) {
                                                    idInput.value = arg.itemData.value;
                                                } else {
                                                    idInput.value = '';
                                                }
                                            }
                                        },
                                        autofill: true,
                                    });
                                    autoObj.appendTo(editArgs.element);
                                };
                                cols[1].edit.read = (readArgs) => {
                                    const ej2Instance = readArgs.ej2_instances[0];
                                    return ej2Instance.value + '-' + ej2Instance.text;
                                };
                                gridObj.refresh();
                            }
                        }
                    };
                }
            }
        }
    }
};
</script>

<style scoped>
/* Add any necessary scoped styles here */
</style>