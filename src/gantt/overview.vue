<template>
    <div id="action-description">
        <p>This sample shows an overview of the EJ2 Gantt Chart features that visualize the progress of each feature
            of the product towards its release and make it easier to monitor the scheduling of the dependent items.
        </p>
    </div>
    <div class="control-section">
        <div id="gantt-sidebar-parent">
            <ejs-sidebar ref="sidebar" class="default-sidebar" width="280px" type="Over" position="Right"
                :isOpen="sidebarToggle" target="#sidebar-gantt">
                <div class="title-header">
                    <div class="title">Project Settings</div>
                    <span class="e-closed" @click="closeSidebar" style="cursor: pointer; font-size: 20px"></span>
                </div>
                <ul style="margin: 16px 16px; padding-left: 0px">
                    <label for="defaultSlider" class="labels">Row height :</label>
                    <li class="list-fields">
                        <ejs-slider id="defaultSlider" ref="defaultSlider" v-model="value" :enabled="enabled" :min="min"
                            :max="max" :step="step" :ticks="ticks" :width="sliderWidth" :tooltip="tooltip"
                            :changed="onChanged" style="left: 20px"></ejs-slider>
                    </li>
                    <li class="list-fields">
                        <label for="showGridLines" class="labels">Show Grid Lines :</label>
                        <div class="switch">
                            <ejs-switch class="checked" :change="gridLinesChange"></ejs-switch>
                        </div>
                    </li>
                    <li class="list-fields">
                        <label for="eventMarkers" class="labels">Show event markers :</label>
                        <div class="switch">
                            <ejs-switch class="checked" :checked="true" :change="showEventMarkers"></ejs-switch>
                        </div>
                    </li>
                    <li class="list-fields">
                        <label for="dependencyLines" class="labels">Show dependencies :</label>
                        <div class="switch">
                            <ejs-switch class="checkeddependency" :checked="isDependencyChecked"
                                :change="dependencyChange"></ejs-switch>
                        </div>
                    </li>
                    <li class="list-fields">
                        <label for="taskLabelChange" class="labels">Show task labels :</label>
                        <div class="switch">
                            <ejs-switch class="checked" :checked="true" :change="taskLabelChange"></ejs-switch>
                        </div>
                    </li>
                    <li class="list-fields section-header">
                        <label class="scheduling">Scheduling Settings</label>
                    </li>
                    <li class="list-field stack-container">
                        <label for="WorkingDays" class="labels-style">Working days :</label>
                        <div style="padding-left: 10px">
                            <ejs-multiselect ref="multiselect" id="WorkingDays" :dataSource="workDays"
                                :value="defaultWeek" :fields="workWeekFields" mode="CheckBox"
                                :showDropDownIcon="showDropDownIcons" :popupHeight="popHeight" :select="selectWeek"
                                :removed="removeWeek" :width='216'></ejs-multiselect>
                        </div>
                    </li>
                    <li class="list-field stack-container">
                        <label for="durationChange" class="labels-style">Duration unit :</label>
                        <div style="padding-left: 12px">
                            <ejs-dropdownlist id="durationChange" :dataSource="durationUnit" :placeholder="Day"
                                :fields="workFields" :change="durationChange"></ejs-dropdownlist>
                        </div>
                    </li>
                    <li class="list-field stack-container">
                        <label for="unitWidth" class="labels-style">Timeline width:</label>
                        <div style="padding-left: 12px">
                            <ejs-numerictextbox id="numeric" ref="numeric_instance" :value="numaricvalue"
                                :min="numaricmin" :format="numaricformat" :change="unitChange"></ejs-numerictextbox>
                        </div>
                    </li>
                    <li class="list-fields section-header">
                        <label class="scheduling">View Settings</label>
                    </li>
                    <li class="list-field stack-container">
                        <label for="viewTypes" class="labels-style">View type:</label>
                        <div style="padding-left: 12px">
                            <ejs-dropdownlist id="viewTypes" :dataSource="viewTypeData" :placeholder="viewType"
                                :fields="viewFileds" :change="typeChange"></ejs-dropdownlist>
                        </div>
                    </li>
                    <li class="list-field stack-container">
                        <label for="viewMode" class="labels-style">View mode:</label>
                        <div style="padding-left: 12px">
                            <ejs-dropdownlist id="viewMode" :dataSource="viewModeData" :placeholder="viewMode"
                                :fields="modeFields" :change="modeChange"></ejs-dropdownlist>
                        </div>
                    </li>
                </ul>
            </ejs-sidebar>
        </div>
        <div>
            <div style="padding: 16px">
                <ejs-button id="settings-btn" @click="triggerSidebar" class="settings-btn"
                    style="position: absolute; top: 10px; right: 10px; z-index: 10">
                    <span class="e-settings-icon" style="padding: 3px"></span>
                    Settings</ejs-button>
            </div>
            <div id="sidebar-gantt">
                <ejs-gantt ref="gantt" id="overviewSample" :dataSource="data" :height="height" :width="width"
                    :resources="resources" :viewType="viewType" :highlightWeekends="true" :load="load" :pdfQueryCellInfo="pdfQueryCellInfo"
                    :allowSelection="true" :treeColumnIndex="1" :allowSorting="true" :gridLines="gridLines"
                    :renderBaseline="true" :taskFields="taskFields" :resourceFields="resourceFields"
                    :splitterSettings="splitterSettings" :selectionSettings="selectionSettings"
                    :tooltipSettings="tooltipSettings" :filterSettings="filterSettings" :allowFiltering="true"
                    :showColumnMenu="true" :toolbar="toolbar" :timelineSettings="timelineSettings"
                    :eventMarkers="eventMarkers" :holidays="holidays" :labelSettings="labelSettings"
                    :allowResizing="true" :taskbarHeight="taskbarHeight" :rowHeight="rowHeight" :allowExcelExport="true"
                    :allowPdfExport="true" :toolbarClick="toolbarClick" :projectStartDate="projectStartDate"
                    :projectEndDate="projectEndDate">
                    <e-columns>
                        <e-column field="TaskId" textAlign="Left" :visible="false"></e-column>
                        <e-column field="TaskName" headerText="Product Release" width="200"></e-column>
                        <e-column field="Assignee" headerText="Assignee" :template="'columnTemplate'"
                            :allowSorting="false" width="135">
                        </e-column>
                        <e-column field="Status" minWidth="100" width="120" :template="'columnTemplate1'">
                        </e-column>
                        <e-column field="Priority" minWidth="80" width="100" :template="'columnTemplate2'">
                        </e-column>
                        <e-column field="Work" headerText="Planned Hours" width="120"></e-column>
                        <e-column field="TimeLog" headerText="Work Log" width="120"></e-column>
                    </e-columns>

                    <template v-slot:columnTemplate="{ data }">
                        <div class="columnTemplate" v-if="data.ganttProperties.resourceNames">
                            <img :src="'https://ej2.syncfusion.com/vue/demos/src/gantt/images/' +
                    data.ganttProperties.resourceNames +
                    '.png'
                    " style="height: 25px; width: 25px" :alt="data.ganttProperties.resourceNames" />
                            <div style="
                  display: inline-block;
                  width: 100%;
                  position: relative;
                  left: 5px;
                ">
                                {{ data.ganttProperties.resourceNames }}
                            </div>
                        </div>
                    </template>

                    <template v-slot:columnTemplate1="{ data }">
                        <div v-if="data.taskData.Status">
                            <div :style="Status(data.taskData.Status)">
                                <span :style="StatusContent(data.taskData.Status)">{{
                                    data.taskData.Status
                                    }}</span>
                            </div>
                        </div>
                    </template>

                    <template v-slot:columnTemplate2="{ data }">
                        <div v-if="data.taskData.Priority">
                            <div :style="Priority(data.taskData.Priority)">
                                <span :style="PriorityContent(data.taskData.Priority)">{{
                                    data.taskData.Priority
                                    }}</span>
                            </div>
                        </div>
                    </template>
                </ejs-gantt>
            </div>
        </div>

        <div id="description">
            <p>This example shows the three-quarter release planning of product features rendered in the EJ2 Gantt
                chart. It tracks the quarterly release planning of product status, resources, and task scheduling.</p>
            <p>EJ2 Gantt Chart features such as Sorting, Filtering, Column resizing, Column menu, column template and so
                on are used in this demo.</p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, ColumnDirective, ColumnsDirective, Selection, Toolbar, DayMarkers, Edit, Filter, Reorder, Resize, ColumnMenu, VirtualScroll, Sort, RowDD, ContextMenu, ExcelExport, PdfExport, CriticalPath } from "@syncfusion/ej2-vue-gantt";
import { editingResources, overviewData } from './data-source';
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { SidebarComponent, ToolbarComponent, ItemDirective, ItemsDirective, TreeViewComponent } from '@syncfusion/ej2-vue-navigations';
import { SliderComponent } from "@syncfusion/ej2-vue-inputs";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { extend } from '@syncfusion/ej2-base';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

var theme;
var style;
var CurrentTheme;
var statusStyleColor;
var priorityStyle;
var priorityContentStyle;
var statusContentstyleColor;
var sidebarToggle;

export default {
    components: {
        'ejs-gantt': GanttComponent,
        'e-column': ColumnDirective,
        'e-columns': ColumnsDirective,
        'ejs-sidebar': SidebarComponent,
        'ejs-slider': SliderComponent,
        'ejs-switch': SwitchComponent,
        'ejs-multiselect': MultiSelectComponent,
        'ejs-checkbox': CheckBoxComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-numerictextbox': NumericTextBoxComponent,
        'ejs-button': ButtonComponent
    },
    data: function () {
        return {
            data: overviewData,
            resources: editingResources,
            height: '490px',
            width: "100%",
            viewType: 'ProjectView',
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'TimeLog',
                progress: 'Progress',
                dependency: 'Predecessor',
                parentID: 'ParentId',
                resourceInfo: 'Assignee',
            },
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName'
            },
            toolbar: ['ExpandAll', 'CollapseAll', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'ExcelExport', 'CsvExport', 'PdfExport'],
            splitterSettings: {
                position: "50%",
            },
            selectionSettings: {
                mode: 'Row',
                type: 'Single',
                enableToggle: true
            },
            tooltipSettings: {
                showTooltip: true
            },
            filterSettings: {
                type: 'Menu'
            },
            gridLines: "Vertical",
            timelineSettings: {
                showTooltip: true,
                topTier: {
                    unit: 'Month',
                    format: 'MMM yyyy'
                },
                bottomTier: {
                    unit: 'Day',
                    count: 4,
                    format: 'dd'
                }
            },
            eventMarkers: [
                {
                    day: new Date('04/04/2024'),
                    cssClass: 'e-custom-event-marker',
                    label: 'Q-1 Release'
                },
                {
                    day: new Date('06/30/2024'),
                    cssClass: 'e-custom-event-marker',
                    label: 'Q-2 Release'
                },
                {
                    day: new Date('09/29/2024'),
                    cssClass: 'e-custom-event-marker',
                    label: 'Q-3 Release'
                }
            ],
            holidays: [{
                from: new Date("01/01/2024"),
                to: new Date("01/01/2024"),
                label: "New Year holiday",
                cssClass: "e-custom-holiday"
            },
            {
                from: new Date("12/25/2023"),
                to: new Date("12/26/2023"),
                label: "Christmas holidays",
                cssClass: "e-custom-holiday"
            }],
            labelSettings: {
                rightLabel: 'Assignee',
                taskLabel: '${Progress}%'
            },
            taskbarHeight: 24,
            rowHeight: 36,
            projectStartDate: new Date('12/17/2023'),
            projectEndDate: new Date('10/26/2024'),
            isDependencyChecked: true,

            // slidebar
            sidebarToggle: false,
            isSideBar: false,
            min: 40,
            value: 30,
            max: 60,
            step: 5,
            sliderWidth: "180px",
            tooltip: { placement: "Before", isVisible: true, showOn: 'Hover' },
            ticks: {
                placement: "Before",
                smallStep: 10,
                largeStep: 10,
                showSmallTicks: true,
            },
            tempEvents: [],
            tempLabels: [],

            // work week
            workDays: [
                { id: 'Sunday', day: 'Sunday' },
                { id: 'Monday', day: 'Monday' },
                { id: 'Tuesday', day: 'Tuesday' },
                { id: 'Wednesday', day: 'Wednesday' },
                { id: 'Thursday', day: 'Thursday' },
                { id: 'Friday', day: 'Friday' },
                { id: 'Saturday', day: 'Saturday' },
            ],
            workWeekFields: { text: 'day', value: 'id' },
            defaultWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            showDropDownIcons: true,
            popHeight: '350px',


            // duration
            durationUnit: [
                { id: "Minute", Text: "Minute" },
                { id: "Hour", Text: "Hour" },
                { id: "Day", Text: "Day" }
            ],
            workFields: { text: 'Text', value: 'id' },
            Day: 'Day',

            // unit width
            numaricvalue: 33,
            numaricmin: 10,
            numaricformat: 'n',

            // View Type
            viewTypeData: [
                { id: "ResourceView", Text: "Resource View" },
                { id: "ProjectView", Text: "Project View" }
            ],
            viewFileds: { text: 'Text', value: 'id' },
            typeHolder: 'View type',

            // View mode change
            viewModeData: [
                { ID: "Default", Text: "Default" },
                { ID: "Grid", Text: "Grid" },
                { ID: "Chart", Text: "Chart" },
            ],
            modeFields: { value: 'ID', text: 'Text' },
            viewMode: 'View'



        };
    },
    provide: {
        gantt: [Selection, Toolbar, DayMarkers, Edit, Filter, Reorder, Resize, ColumnMenu, VirtualScroll, Sort, RowDD, ContextMenu, ExcelExport, PdfExport, CriticalPath],
        multiselect: [CheckBoxSelection]
    },
    methods: {
        toolbarClick: function (args) {
            if (args.item.id === "overviewSample_excelexport") {
                this.$refs.gantt.ej2Instances.excelExport();
            } else if (args.item.id === "overviewSample_csvexport") {
                this.$refs.gantt.ej2Instances.csvExport();
            } else if (args.item.id === "overviewSample_pdfexport") {
                this.$refs.gantt.ej2Instances.pdfExport();
            }
        },
        onChanged: function (args) {
            var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
            gantt.rowHeight = args.value;
        },
        gridLinesChange: function (args) {
            var ganttInstance = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
            if (args.checked) {
                ganttInstance.gridLines = 'Both';
            } else {
                ganttInstance.gridLines = 'Vertical';
            }
        },
        showEventMarkers: function (args) {
            var ganttChart = document.getElementById('overviewSample').ej2_instances[0];
            if (args.checked) {
                ganttChart.eventMarkers = this.tempEvents;
            } else {
                this.tempEvents = ganttChart.eventMarkers;
                ganttChart.eventMarkers = null;
            }
        },
        dependencyChange: function (args) {
            var ganttDependencyViewContainer = document.querySelector('.e-gantt-dependency-view-container');
            if (args.checked) {
                ganttDependencyViewContainer.style.visibility = 'visible';
            } else {
                ganttDependencyViewContainer.style.visibility = 'hidden';
            }
        },
        taskLabelChange: function (args) {
            var ganttChart = document.getElementById('overviewSample').ej2_instances[0];
            if (args.checked) {
                ganttChart.labelSettings.rightLabel = this.tempLabels;
            } else {
                this.tempLabels = ganttChart.labelSettings.rightLabel;
                ganttChart.labelSettings.rightLabel = null;
            }
        },
        selectWeek: function (e) {
            var ganttChart = document.getElementById('overviewSample').ej2_instances[0];
            let workingDays = extend([], this.$refs.multiselect.ej2Instances.value, [], true);
            workingDays.push(e.itemData.day);
            ganttChart.workWeek = workingDays;
        },
        removeWeek: function (e) {
            var ganttChart = document.getElementById('overviewSample').ej2_instances[0];
            let index = this.$refs.gantt.ej2Instances.workWeek.indexOf(e.itemData.day);
            if (index !== -1) {
                ganttChart.workWeek = this.$refs.multiselect.ej2Instances.value;
            }
        },
        durationChange: function (args) {
            var ganttChart = document.getElementById('overviewSample').ej2_instances[0];
            ganttChart.durationUnit = args.value;
        },
        unitChange: function (args) {
            var ganttChart = document.getElementById('overviewSample').ej2_instances[0];
            var width = args.value;
            ganttChart.timelineSettings.timelineUnitSize = width;
        },
        typeChange: function (args) {
            var ganttChart = document.getElementById('overviewSample').ej2_instances[0];
            ganttChart.viewType = args.value;
            if (document.getElementsByClassName('checkeddependency')[0].hidden !== true) {
                document.querySelectorAll('.e-switch')[2].ej2_instances[0].checked = true;
            }
        },
        modeChange: function (args) {
            var ganttChart = document.getElementById('overviewSample').ej2_instances[0];
            if (args.value == 'Grid') {
                ganttChart.setSplitterPosition('100%', 'position');
            }
            else if (args.value == 'Chart') {
                ganttChart.setSplitterPosition('0%', 'position');
            }
            else {
                ganttChart.setSplitterPosition('50%', 'position');
            }
        },
        onChange: function () {
            var checkboxObj = this.$refs.checkboxInstance1.ej2Instances;
            this.showSelectAll = checkboxObj.checked;
        },
        onChangeDrop: function () {
            var dropdownObj = this.$refs.checkboxInstance2.ej2Instances;
            this.showDropDownIcon = dropdownObj.checked;
        },
        onChangeReorder: function () {
            var reorderObj = this.$refs.checkboxInstance3.ej2Instances;
            this.enableSelectionOrder = reorderObj.checked;
        },
        triggerSidebar: function () {
            this.sidebarToggle = !this.sidebarToggle;
            this.isSideBar = true;
        },

        closeSidebar: function () {
            this.$refs.sidebar.hide();
            this.isSideBar = false;
            this.sidebarToggle = !this.sidebarToggle;
        },
        load: function (args) {
            var themeCollection = ['bootstrap5', 'bootstrap', 'bootstrap4', 'fluent', 'fabric', 'fusionnew', 'material3', 'material', 'highcontrast', 'tailwind', 'fluent2', 'tailwind3', 'bootstrap5.3'];
            var cls = document.body.className.split(' ');
            theme = cls.indexOf('bootstrap5') > 0 ? 'bootstrap5' : cls.indexOf('bootstrap') > 0 ? 'bootstrap' : cls.indexOf('tailwind') > 0 ? 'tailwind' :
                cls.indexOf('fluent') > 0 ? 'fluent' : cls.indexOf('fabric') > 0 ? 'fabric' :
                    cls.indexOf('material3') > 0 ? 'material3' : cls.indexOf('bootstrap4') > 0 ? 'bootstrap4' : cls.indexOf('material') > 0 ? 'material' :
                        cls.indexOf('fusionnew') > 0 ? 'fusionnew' : cls.indexOf('highcontrast') > 0 ? 'highcontrast' : cls.indexOf('bootstrap5.3') > 0 ? 'bootstrap5.3' :
                        cls.indexOf('fluent2') > 0 ? 'fluent2' : cls.indexOf('tailwind3') > 0 ? 'tailwind3' : ''
            var check = themeCollection.indexOf(theme);
            if (check >= 0) {
                CurrentTheme = true;
            }
            else {
                CurrentTheme = false;
            }
        },
        pdfQueryCellInfo: function (args) {
            if (args.column.headerText === 'Assignee' && args.data.taskData.resourcesImage) {
                {
                    args.image = { height: 25, width: 25, base64: args.data.taskData.resourcesImage };
                }
            }
        },
        Status: function (status) {
            switch (status) {
                case "In Progress":
                    statusStyleColor = (CurrentTheme) ? "#DFECFF" : "#2D3E57";
                    style = "display: flex; padding: 0px 12px; gap: 10px; width: 96px; height: 24px; border-radius: 24px; background:" + statusStyleColor;
                    break;
                case "Open":
                    style = "background-color: red; color: white; border-radius: 15px; padding:6px";
                    break;
                case "On Hold":
                    statusStyleColor = (CurrentTheme) ? "#E4E4E7" : "#3C3B43";
                    style = "display: flex; border-radius: 24px; padding: 0px 12px; gap: 10px; width: 78px; height: 24px; background:" + statusStyleColor;
                    break;
                case "Completed":
                    statusStyleColor = (CurrentTheme) ? "#DFFFE2" : "#16501C";
                    style = "display: flex; padding: 0px 12px; gap: 10px; width: 98px; height: 24px; border-radius: 24px;background:" + statusStyleColor;
                    break;
                case "High":
                    statusStyleColor = (CurrentTheme) ? "#FFEBE9" : "#48211D";
                    style = "display: flex; padding: 0px 12px; gap: 10px; width: 55px; height: 24px; border-radius: 24px; background:" + statusStyleColor;
                    break;
            }
            return style;

        },
        StatusContent: function (status) {
            switch (status) {
                case "In Progress":
                    statusContentstyleColor = (CurrentTheme) ? "#006AA6" : "#34B6FF";
                    style = "width: 72px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                    break;
                case "Open":
                    style = "background-color: red; color: white; border-radius: 15px; padding:6px";
                    break;
                case "On Hold":
                    statusContentstyleColor = (CurrentTheme) ? "#766B7C" : "#CDCBD7";
                    style = "width: 54px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                    break;
                case "Completed":
                    statusContentstyleColor = (CurrentTheme) ? "#00A653" : "#92FFC8";
                    style = "width: 74px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                    break;
                case "High":
                    statusContentstyleColor = (CurrentTheme) ? "#FF3740" : "#FFB5B8";
                    style = "width: 31px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                    break;
            }
            return style;
        },
        Priority: function (priority) {
            switch (priority) {
                case "Low":
                    priorityStyle = (CurrentTheme) ? "#FFF6D1" : "#473F1E";
                    style = "display: flex; padding: 0px 12px; gap: 10px; width: 52px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                    break;
                case "Normal":
                    priorityStyle = (CurrentTheme) ? "#F5DFFF" : "#4D2F5A";
                    style = "display: flex; padding: 0px 12px; gap: 10px; width: 73px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                    break;
                case "Critical":
                    priorityStyle = (CurrentTheme) ? "#FFEBE9" : "#48211D";
                    style = "display: flex; padding: 0px 12px; gap: 10px; width: 72px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                    break;
                case "High":
                    priorityStyle = (CurrentTheme) ? "#FFEBE9" : "#48211D";
                    style = "display: flex; padding: 0px 12px; gap: 10px; width: 55px; height: 24px; border-radius: 24px; background: " + priorityStyle;
                    break;
            }
            return style;

        },
        PriorityContent: function (priority) {
            switch (priority) {
                case "Low":
                    priorityContentStyle = (CurrentTheme) ? "#70722B" : "#FDFF88";
                    style = "width: 28px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                    break;
                case "Normal":
                    priorityContentStyle = (CurrentTheme) ? "#7100A6" : "#E3A9FF";
                    style = "width: 49px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                    break;
                case "Critical":
                    priorityContentStyle = (CurrentTheme) ? "#FF3740" : "#FFB5B8";
                    style = "width: 48px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                    break;
                case "High":
                    priorityContentStyle = (CurrentTheme) ? "#FF3740" : "#FFB5B8";
                    style = "width: 31px; height: 22px; font-style: normal; font-weight: 500; font-size: 14px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                    break;
            }
            return style;
        }
    }
}
</script>
<style>
#overviewSample .e-gantt-child-taskbar,
#overviewSample .e-gantt-parent-taskbar {
    border-radius: 10px !important;
}

/* settings icon */
.e-settings-icon::before {
    font-family: 'e-icons' !important;
    content: '\e880';
    font-size: 15px;
}

/* cancel icon */
.e-closed::before {
    font-family: 'e-icons' !important;
    content: '\e7e7';
    font-size: 15px;
}

.highcontrast .e-closed::before {
    content: '\e7fc';
    font-family: 'e-icons';
    font-size: 15px;
}

.highcontrast .e-settings-icon::before {
    content: '\e679';
    font-family: 'e-icons';
    font-size: 15px;
}

#sideBar {
    padding-left: 1px !important;
    padding-right: 1px !important;
}

#sidebar-gantt .title-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 262px;
    color: #fff;
    height: 57px;
    background-color: #56697f;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    z-index: 1000;
}

#sidebar-gantt .title {
    font-size: 20px;
    font-weight: bold;
}

#sidebar-gantt .content {
    margin-top: 20px;
}

#sidebar-gantt .list-fields {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

#sidebar-gantt .labels {
    font-weight: 400;
    font-size: 14px;
    padding: 12px;
}

#sidebar-gantt .scheduling {
    color: #837c7c;
    font-size: 16px !important;
    height: inherit;
    font-weight: 600;
}

#sidebar-gantt .list-fields .vertical-align {
    display: flex;
    flex-direction: column;
}

#sidebar-gantt .singleLabel {
    margin-bottom: 0px;
}

#sidebar-gantt .section-header {
    font-weight: 400;
    font-size: 14px;
    padding-left: 12px;
    padding-top: 12px;
    border-top: 1px solid #837c7c;
    margin: 10px 0 5px 0;
    /* Adjusted to reduce the gap */
}

#sidebar-gantt .checkbox {
    float: right;
    margin-right: 10px;
}

#sidebar-gantt .switch {
    margin-bottom: 8px;
    margin-right: 12px;
}

#sidebar-gantt .list-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
}

#sidebar-gantt .stack-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

#sidebar-gantt .labels-style {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 5px;
    text-align: left;
    padding: 12px;
}
#overviewSample .e-tbar-btn-text {
    display: none;
}
</style>