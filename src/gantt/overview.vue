<template>
    <div id="action-description">
        <p>This sample provides an overview of the Gantt Chart, showcasing its key features through an e-commerce platform redesign project 
        timeline. It visualizes task hierarchies, dependencies, milestones, and resource allocations, enabling efficient project tracking from planning to deployment.
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
                            <ejs-dropdownlist id="viewTypes" :dataSource="viewTypeData" :value="ViewTypeValue" 
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
                    :resources="resources" :viewType="viewType" :highlightWeekends="true" :load="load"
                    :pdfQueryCellInfo="pdfQueryCellInfo" :pdfQueryTaskbarInfo="pdfQueryTaskbarInfo" :allowSelection="true" :treeColumnIndex="1"
                    :allowSorting="true" :gridLines="gridLines" :renderBaseline="true" :taskFields="taskFields"
                    :resourceFields="resourceFields" :splitterSettings="splitterSettings"
                    :selectionSettings="selectionSettings" :tooltipSettings="tooltipSettings" :enableHover="true"
                    :enableAutoWbsUpdate="true" :enableWBS="true" :filterSettings="filterSettings"
                    :allowFiltering="true" :showColumnMenu="true" :toolbar="toolbar"
                    :timelineSettings="timelineSettings" :eventMarkers="eventMarkers" :holidays="holidays"
                    :labelSettings="labelSettings" :allowResizing="true" :taskbarHeight="taskbarHeight"
                    :rowHeight="rowHeight" :allowExcelExport="true" :allowPdfExport="true" :toolbarClick="toolbarClick"
                    :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
                    <e-columns>
                        <e-column field="WBSCode" headerText="WBS ID" width="120"></e-column>
                        <e-column field="TaskName" headerText="Product Release" width="200"></e-column>

                        <e-column field="Assignee" headerText="Assignee" :template="'columnTemplate'"
                            :allowSorting="false" width="195">
                        </e-column>
                        <e-column field="Status" minWidth="100" width="120" :template="'columnTemplate1'">
                        </e-column>
                        <e-column field="Priority" minWidth="80" width="100" :template="'columnTemplate2'">
                        </e-column>

                        <e-column field="WBSPredecessor" headerText="WBS Predecessor" width="200"></e-column>
                        <e-column field="ConstraintType" headerText="Constraint Type" width="200"></e-column>
                        <e-column field="ConstraintDate" headerText="Constraint Date" width="200"></e-column>
                        <e-column field="Progress" headerText="Completion(%)" width="205"></e-column>
                        <e-column field="TimeLog" headerText="Work Log" width="150"></e-column>
                    </e-columns>

                    <template v-slot:columnTemplate="{ data }">
                        <div class="columnTemplate" v-if="data.ganttProperties.resourceNames">
                            <img :src="'src/gantt/images/' +
                                data.ganttProperties.resourceNames +
                                '.png'
                                " style="height: 25px; width: 25px" :alt="data.ganttProperties.resourceNames" />
                            <span>
                                <div
                                    style="display: inline-block;width: 100%;position: relative;font-size: 13px;left: 5px;">
                                    {{ data.taskData.Assignee }}
                                </div>
                                <div style=" font-size: 9px; text-align:left; margin-left:31px">{{
                                    data.taskData.Department }}
                                </div>
                            </span>

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
                            <div style="display: flex;">
                                 <div :class="PriorityIcon(data.taskData.Priority)"
                                :style="PriorityIconStyle(data.taskData.Priority)">
                            </div>
                            <span :style="PriorityContent(data.taskData.Priority)">{{
                                data.taskData.Priority
                            }}</span>
                            </div>
                           

                        </div>
                    </template>
                    <template v-slot:rightLabelTemplate="{ data }">
                        <div v-if="data.ganttProperties.resourceNames">
                            <img :src="'src/gantt/images/' +
                                data.ganttProperties.resourceNames +
                                '.png'
                                " style="height: 25px; width: 25px" :alt="data.ganttProperties.resourceNames" />
                            <span style="margin-left:2px ;">
                                {{ data.taskData.Assignee }}
                            </span>

                        </div>
                    </template>
                </ejs-gantt>
            </div>
        </div>

        <div id="description">
             <p>This demo presents an e-commerce platform redesign project, demonstrating key features such as task organization, customizable timeline views, 
        resource management, and interactive controls. Users can <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/sorting">sort</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/filtering/filtering">filter tasks</a>, <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/columns/column-resizing"> resize</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/columns/column-reordering">reorder columns</a>, track progress with <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/baseline"> baselines</a>, 
        and highlight key dates with <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/event-markers">event markers</a> and <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/holidays"> holidays</a>. The <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/tool-bar"> toolbar </a> offers intuitive options to add, edit, delete, search, and expand or 
        collapse tasks. Additionally, users can configure <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#workweek"> working days</a>, <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/scheduling-tasks#weekendnon-working-days"> highlight weekends</a>, set <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/#projectstartdate"> project date ranges</a>.
</p>
<br>
<p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/getting-started#adding-gantt-component">documentation section</a>.</p>
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
import { PdfColor } from "@syncfusion/ej2-pdf-export";

var theme;
var style;
var CurrentTheme;
var statusStyleColor;
var priorityStyle;
var IconClass;
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
            height: '650px',
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
                constraintType: 'ConstraintType',
                constraintDate: 'ConstraintDate',
                parentID: 'ParentId',
                resourceInfo: 'resource'
            },
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName'
            },
            toolbar: ['ExpandAll', 'CollapseAll', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'ExcelExport', 'CsvExport', 'PdfExport'],
            splitterSettings: {
                columnIndex: 4,
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
            gridLines: "Both",
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
                    day: new Date('2025-03-13'),
                    cssClass: 'e-custom-event-marker',
                    label: 'Project Initiative'
                },
                {
                    day: new Date('2025-04-18'),
                    cssClass: 'e-custom-event-marker',
                    label: 'Requirement Gathering'
                },
                {
                    day: new Date('2025-05-30'),
                    cssClass: 'e-custom-event-marker',
                    label: 'Design Phase'
                },
                {
                    day: new Date('2025-11-25'),
                    cssClass: 'e-custom-event-marker',
                    label: 'Deployment'
                }
            ],
            holidays: [{
                from: new Date("01/01/2025"),
                to: new Date("01/01/2025"),
                label: "New Year holiday",
                cssClass: "e-custom-holiday"
            },
            {
                from: new Date("12/25/2024"),
                to: new Date("12/26/2024"),
                label: "Christmas holidays",
                cssClass: "e-custom-holiday"
            }],
            labelSettings: {
                rightLabel: "rightLabelTemplate",
                taskLabel: '${Progress}%'
            },
            taskbarHeight: 25,
            rowHeight: 46,
            projectStartDate: new Date('01/25/2025'),
            projectEndDate: new Date('01/30/2026'),
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
            ViewTypeValue: 'ProjectView',

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
                ganttChart.labelSettings.rightLabel = " ";
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
            let themeCollection = ['bootstrap5', 'bootstrap', 'bootstrap4', 'fluent', 'fabric', 'fusionnew', 'material3', 'material', 'highcontrast', 'tailwind', 'fluent2', 'tailwind3', 'bootstrap5.3'];
             var theme = document.body.className.split(' ').find(function(cls) { return themeCollection.includes(cls); }) || '';
            CurrentTheme = theme ? true : false;
        },
        pdfQueryCellInfo: function (args) {
            if (args.column.headerText === 'Assignee' && args.data.taskData.resourcesImage) {
                args.image = { height: 30, width: 30, base64: args.data.taskData.resourcesImage};
                args.value = `${args.data.Assignee}\n${args.data.taskData.Department}`; 
            }

            // Set font color for Status or Priority columns
            if (args.column.field === 'Status' || args.column.field === 'Priority') {
                const style = args.column.field === 'Status' ? this.StatusContent(args.value) : this.PriorityContent(args.value);
                const rgbMatch = style.match(/rgb\(\d+,\s*\d+,\s*\d+\)/);
                if (rgbMatch) {
                    const rgbValues = rgbMatch[0].slice(4, -1).split(', ').map(Number);
                    args.style.fontColor = new PdfColor(rgbValues[0], rgbValues[1], rgbValues[2]);
                }   
            }
        },
        pdfQueryTaskbarInfo: function(args){
            if(this.$refs.gantt.ej2Instances.labelSettings.rightLabel && args.data.taskData.resourcesImage){
                args.labelSettings.rightLabel.image= [{base64: args.data.taskData.resourcesImage, height: 25, width: 25}];
                args.labelSettings.rightLabel.value=args.data.ganttProperties.resourceNames;
            }
        },
        Status: function (status) {
            switch (status) {
                case "In Progress":
                    statusStyleColor = (CurrentTheme) ? "#006AA6" : "#34B6FF";
                    style = "display: flex; padding: 2px 10px; gap: 10px; width: 96px; height: 24px; border: solid 1px" + statusStyleColor;
                    break;
                case "Open":
                    style = "display: flex; justify-content:center; gap: 10px; width: 96px; height: 24px; border: solid 1px red";
                    break;
                case "On Hold":
                    statusStyleColor = (CurrentTheme) ? "#766B7C" : "#CDCBD7";
                    style = "display: flex; justify-content:center; gap: 10px; width: 96px; height: 24px; border: solid 1px" + statusStyleColor;
                    break;
                case "Completed":
                    statusStyleColor = (CurrentTheme) ? "#00A653" : "#92FFC8";
                    style = "display: flex; padding: 2px 10px; gap: 10px; width: 96px; height: 24px; border: solid 1px" + statusStyleColor;
                    break;
            }
            return style;

        },
        StatusContent: function (status) {
            switch (status) {
                case "In Progress":
                    statusContentstyleColor = (CurrentTheme) ? "rgb(0, 106, 166)" : "rgb(52, 182, 255)";
                    style = "width: 72px; height: 22px; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                    break;
                case "Open":
                    style = "width: 54px; height: 22px; font-style: normal;  font-weight: 400; font-size: 14px; line-height: 22px; text-align: center; color: rgb(255, 0, 0); ";
                    break;
                case "On Hold":
                    statusContentstyleColor = (CurrentTheme) ? "rgb(118, 107, 124)" : "rgb(205, 203, 215)";
                    style = "width: 54px; height: 22px; font-style: normal;  font-weight: 400; font-size: 14px; line-height: 22px; text-align: center; color: " + statusContentstyleColor;
                    break;
                case "Completed":
                    statusContentstyleColor = (CurrentTheme) ? "rgb(0, 166, 83)" : "rgb(146, 255, 200)";
                    style = "width: 74px; height: 22px; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                    break;
                case "High":
                    statusContentstyleColor = (CurrentTheme) ? "rgb(243, 86, 32)" : "rgb(255, 181, 184)";
                    style = "width: 31px; height: 22px; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; color: " + statusContentstyleColor;
                    break;
            }
            return style;
        },
        PriorityIconStyle: function (priority) {
            switch (priority) {
                case "Low":
                    priorityStyle = (CurrentTheme) ? "#00A653" : "#FDFF88";
                    style = " margin-top:2px; color: " + priorityStyle + "!important";
                    break;
                case "Normal":
                    priorityStyle = (CurrentTheme) ? "#7100A6" : "#E3A9FF";
                    style = " margin-top:2px; !important; color: " + priorityStyle + "!important";
                    break;
                case "Critical":
                    priorityStyle = (CurrentTheme) ? "#FF3740" : "#FFB5B8";
                    style = "margin-top:2px; color: " + priorityStyle + "!important";
                    break;
                case "High":
                    priorityStyle = (CurrentTheme) ? "#f35620" : "#FFB5B8";
                    style = "margin-top:2px; color: " + priorityStyle + "!important";
                    break;
            }
            return style;

        },
        PriorityContent: function (priority) {
            switch (priority) {
                case "Low":
                    priorityContentStyle = (CurrentTheme) ? "rgb(0, 166, 83)" : "rgb(253, 255, 136)";
                    style = "width: 28px; height: 22px; font-style: normal;  font-size: 14px; margin-left:3px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                    break;
                case "Normal":
                    priorityContentStyle = (CurrentTheme) ? "rgb(113, 0, 166)" : "#rgb(227, 169, 255)";
                    style = "width: 28px; height: 22px; font-style: normal;  margin-left:3px; font-size: 14px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                    break;
                case "Critical":
                    priorityContentStyle = (CurrentTheme) ? "rgb(255, 55, 64)" : "rgb(255, 181, 184)";
                    style = "width: 48px; height: 22px; font-style: normal;  font-size: 14px; margin-left:3px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                    break;
                case "High":
                    priorityContentStyle = (CurrentTheme) ? "rgb(235, 99, 67)" : "rgb(255, 181, 184)";
                    style = "width: 31px; height: 22px; font-style: normal; font-size: 14px; margin-left:3px; line-height: 20px; text-align: center; color: " + priorityContentStyle;
                    break;
            }
            return style;
        },
        PriorityIcon: function (priority) {
            switch (priority) {
                case "Low":
                    IconClass = "e-icons e-arrow-down e-icon-style";
                    break;
                case "Normal":
                    IconClass = "e-icons e-arrow-right e-icon-style";
                    break;
                case "Critical":
                    IconClass = "e-icons e-arrow-up e-icon-style";
                    break;
                case "High":
                    IconClass = "e-icons e-arrow-up e-icon-style";
                    break;
            }
            return IconClass;
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