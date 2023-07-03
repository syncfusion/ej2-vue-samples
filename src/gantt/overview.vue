<template>
<div class="col-lg-12 control-section">
<div id="action-description">
    <p>This sample shows an overview of the EJ2 Gantt Chart features that visualize the progress of each feature of the product towards its release and make it easier to monitor the scheduling of the dependent items.</p>
</div>
<div>
    <ejs-gantt ref='gantt' id="overviewSample"
    :dataSource= "data" 
    :height = "height" 
    :width= "width" 
    :resources="resources" 
    :viewType="viewType"
    :highlightWeekends= 'true' 
    :load= "load" 
    :dataBound= "created" 
    :allowSelection= 'true' 
    :treeColumnIndex= "1" 
    :allowSorting= 'true' 
    :gridLines="gridLines"
    :renderBaseline= 'true'  
    :taskFields= "taskFields" 
    :resourceFields= "resourceFields" 
    :splitterSettings= "splitterSettings" 
    :selectionSettings= "selectionSettings"
    :tooltipSettings= "tooltipSettings" 
    :filterSettings="filterSettings" 
    :allowFiltering= 'true' 
    :showColumnMenu= 'true' 
    :toolbar= "toolbar"
    :timelineSettings="timelineSettings" 
    :eventMarkers= "eventMarkers" 
    :holidays= "holidays" 
    :labelSettings="labelSettings" 
    :allowResizing= 'true'
    :taskbarHeight= "taskbarHeight" 
    :rowHeight= "rowHeight" 
    :projectStartDate= "projectStartDate" 
    :projectEndDate= "projectEndDate">

    <e-columns>
        <e-column field='TaskId' textAlign='Left' :visible=false></e-column>
        <e-column field='TaskName' headerText='Product Release' width=180></e-column>
        <e-column field='Assignee' headerText='Assignee' :template="'columnTemplate'" :allowSorting=false width=135>
        </e-column>
        <e-column field='Status' minWidth= 100 width=120 :template="'columnTemplate1'">
        </e-column>
        <e-column field='Priority' minWidth= 80 width=100 :template="'columnTemplate2'" >
        </e-column>
        <e-column field='Work' headerText='Planned Hours' width=120></e-column>
        <e-column field='TimeLog' headerText='Work Log' width=120></e-column>
    </e-columns>

    
    <template v-slot:columnTemplate="{data}">
        <div class="columnTemplate" v-if="data.ganttProperties.resourceNames">
        <img :src="'https://ej2.syncfusion.com/vue/demos/source/gantt/images/' + data.ganttProperties.resourceNames + '.png'"  style="height=25px;width:25px" />
        <div style="display:inline-block;width:100%;position:relative;left:5px">
            {{data.ganttProperties.resourceNames}}</div>
        </div>
    </template>

    <template v-slot:columnTemplate1="{data}">
        <div  v-if="data.taskData.Status">
            <div :style=" Status(data.taskData.Status) "><span :style="StatusContent(data.taskData.Status) ">{{data.taskData.Status}}</span></div>
        </div>
    </template>

    <template v-slot:columnTemplate2="{data}">
        <div v-if="data.taskData.Priority">
            <div :style=" Priority(data.taskData.Priority) "><span :style=" PriorityContent(data.taskData.Priority) ">{{data.taskData.Priority}}</span></div>
        </div>
    </template>

    </ejs-gantt>
</div>
<div id="description">
    <p>This example shows the three-quarter release planning of product features rendered in the EJ2 Gantt chart. It tracks the quarterly release planning of product status, resources, and task scheduling.</p>
    <p>EJ2 Gantt Chart features such as Sorting, Filtering, Column resizing, Column menu, column template and so on are used in this demo.</p>
</div>
</div>
</template>
<script >
import Vue from "vue";
import {GanttPlugin , Selection, Toolbar, DayMarkers, Edit, Filter, Reorder, Resize, ColumnMenu, VirtualScroll, Sort, RowDD, ContextMenu, ExcelExport, PdfExport, CriticalPath} from "@syncfusion/ej2-vue-gantt";
import {editingResources, overviewData } from './data-source';
import { DropDownList } from "@syncfusion/ej2-dropdowns";
Vue.use(GanttPlugin);
import columntempVue from "./column-temp.vue";
var theme;
var style;
var CurrentTheme;
var statusStyleColor;
var priorityStyle;
var priorityContentStyle;
var statusContentstyleColor;
var dropDownData = [
    { ID: "Default", Text: "Default" },
    { ID: "Grid", Text: "Grid" },
    { ID: "Chart", Text: "Chart" }
];

export default Vue.extend({
    
  data: function() {
      return{
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
            toolbar: ["ExpandAll","CollapseAll", {type:"Input",align:"Right", template:'<div><input type="text" id="ganttView"/></div>'}],
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
                    day: '04/04/2022',
                    cssClass: 'e-custom-event-marker',
                    label: 'Q-1 Release'
                },
                {
                    day: '06/30/2022',
                    cssClass: 'e-custom-event-marker',
                    label: 'Q-2 Release'
                },
                {
                    day: '09/29/2022',
                    cssClass: 'e-custom-event-marker',
                    label: 'Q-3 Release'
                }
            ],
            holidays: [{
                from: "01/01/2022",
                to: "01/01/2022",
                label: "New Year holiday",
                cssClass: "e-custom-holiday"
            },
            {
                from: "12/25/2021",
                to: "12/26/2021",
                label: "Christmas holidays",
                cssClass: "e-custom-holiday"
            }],
            labelSettings: {
                rightLabel: 'Assignee',
                taskLabel: '${Progress}%'
            },
            taskbarHeight: 24,
            rowHeight: 36,
            projectStartDate: new Date('12/17/2021'),
            projectEndDate: new Date('10/26/2022'),
           
      };
  },
  provide: {
      gantt: [Selection, Toolbar, DayMarkers, Edit, Filter, Reorder, Resize, ColumnMenu, VirtualScroll, Sort, RowDD, ContextMenu, ExcelExport, PdfExport, CriticalPath]
  },
  methods: {
    created:function(args){
        var ddList = new DropDownList({
            dataSource: dropDownData,
            placeholder: 'View',
            width: '90px',
            fields: { value: 'ID', text: 'Text' },
            change: function (args) {
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
            }
            });
        var element = document.getElementById("ganttView");
        ddList.appendTo(element);
    },
    load: function (args) {
        var themeCollection = ['bootstrap5', 'bootstrap', 'bootstrap4', 'fluent', 'fabric', 'fusionnew', 'material3', 'material', 'highcontrast', 'tailwind'];    
        var cls = document.body.className.split(' ');
        theme = cls.indexOf('bootstrap5') > 0 ? 'bootstrap5' : cls.indexOf('bootstrap') > 0 ? 'bootstrap' : cls.indexOf('tailwind') > 0 ? 'tailwind' :
            cls.indexOf('fluent') > 0 ? 'fluent' : cls.indexOf('fabric') > 0 ? 'fabric' :
                cls.indexOf('material3') > 0 ? 'material3' : cls.indexOf('bootstrap4') > 0 ? 'bootstrap4' : cls.indexOf('material') > 0 ? 'material' :
                    cls.indexOf('fusionnew') > 0 ? 'fusionnew' : cls.indexOf('highcontrast') > 0 ? 'highcontrast' : ''
        var check = themeCollection.indexOf(theme);
        if (check >= 0) {
            CurrentTheme = true;
        }
        else {
            CurrentTheme = false;
        }    
    },
    Status: function (status){
        switch (status) {
        case "In Progress":
            statusStyleColor = (CurrentTheme) ? "#DFECFF" : "#2D3E57";
            style = "display: flex; padding: 1px 12px; gap: 10px; width: 96px; height: 24px; border-radius: 24px; background:" + statusStyleColor;
            break;
        case "Open":
            style = "background-color: red; color: white; border-radius: 15px; padding:6px";
            break;
        case "On Hold":
            statusStyleColor = (CurrentTheme) ? "#E4E4E7" : "#3C3B43";
            style = "display: flex; border-radius: 24px; padding: 1px 12px; gap: 10px; width: 78px; height: 24px; background:" + statusStyleColor;
            break;
        case "Completed":
            statusStyleColor = (CurrentTheme) ? "#DFFFE2" : "#16501C";
            style = "display: flex; padding: 1px 12px; gap: 10px; width: 98px; height: 24px; border-radius: 24px;background:" + statusStyleColor;
            break;
        case "High":
            statusStyleColor = (CurrentTheme) ? "#FFEBE9" : "#48211D";
            style = "display: flex; padding: 1px 12px; gap: 10px; width: 55px; height: 24px; border-radius: 24px; background:" + statusStyleColor;
            break;
    }
    return style;

    },
    StatusContent: function (status){
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
    Priority: function(priority){
        switch (priority) {
        case "Low":
            priorityStyle = (CurrentTheme) ? "#FFF6D1" : "#473F1E";
            style = "display: flex; padding: 1px 12px; gap: 10px; width: 52px; height: 24px; border-radius: 24px; background: " + priorityStyle;
            break;
        case "Normal":
            priorityStyle = (CurrentTheme) ? "#F5DFFF" : "#4D2F5A";
            style = "display: flex; padding: 1px 12px; gap: 10px; width: 73px; height: 24px; border-radius: 24px; background: " + priorityStyle;
            break;
        case "Critical":
            priorityStyle = (CurrentTheme) ? "#FFEBE9" : "#48211D";
            style = "display: flex; padding: 1px 12px; gap: 10px; width: 72px; height: 24px; border-radius: 24px; background: " + priorityStyle;
            break;
        case "High":
            priorityStyle = (CurrentTheme) ? "#FFEBE9" : "#48211D";
            style = "display: flex; padding: 1px 12px; gap: 10px; width: 55px; height: 24px; border-radius: 24px; background: " + priorityStyle;
            break;
    }
    return style;

    },
    PriorityContent: function(priority){
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
    },
  }
});
</script>
<style>
    #overviewSample
    .e-gantt-child-taskbar,
    #overviewSample
    .e-gantt-parent-taskbar
    {
        border-radius:10px !important
    }
</style>
