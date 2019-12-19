<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="ToolbarTemplate"  
            :dataSource= "data"
            :taskFields= "taskFields"
            :toolbar= "toolbar"
            :allowSelection= "true"
            :allowFiltering= "true"
            :height= "height"
            :treeColumnIndex= "1"
            :highlightWeekends= "true"
            :columns= "columns"
            :labelSettings= "labelSettings"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :splitterSettings= "splitterSettings"
            v-on:toolbarClick= "toolbarClick">
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
    <p>This sample explains the way of rendering built-in and custom toolbar items at the same time.</p>
</div>

<div id="description">
    <p>Custom toolbar items can be added by defining the toolbar as a collection of ItemModels.
        Actions for this customized toolbar items are defined in the <code>toolbarClick</code> event.
    </p>
    <p>In this sample, the custom toolbar element <code>Quick Filter</code> and <code>Clear Filter</code> is rendered
        along with predefined toolbar items ExpandAll and CollapseAll.
        While clicking the <code>Quick Filter</code> toolbar item, the filtering occurs for
        <code>Task Name</code>column.Filtered column can be cleared using <code>Clear Filter</code> toolbar item.
    </p>

    <p>
        Gantt component features are segregated into individual feature-wise modules.To use a selection, inject the
        <code>Selection</code> module using the <code>Gantt.Inject(Selection)</code> method.To use a filter, inject the
        <code>Filter</code> module using the <code>Gantt.Inject(Filter)</code> method.To use a toolbar, inject the
        <code>Toolbar</code> module using the <code>Gantt.Inject(Toolbar)</code> method.To use markers, inject the
        <code>DayMarkers</code> module using the <code>Gantt.Inject(DayMarkers)</code> method.
    </p>
</div>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Selection, Toolbar, DayMarkers, Filter  } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';
Vue.use(GanttPlugin);
export default Vue.extend({
  data: function() {
      return{
            data: projectNewData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks',
            },
            toolbar: ['ExpandAll', 'CollapseAll', { text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'Quick Filter', prefixIcon: 'e-quickfilter' },{ text: 'Clear Filter', tooltipText: 'Clear Filter', id: 'Clear Filter' }],
            height: '450px',
            columns: [
                { field: 'TaskID', width: 80 },
                { field: 'TaskName', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' },
            ],
            labelSettings: {
                leftLabel: 'TaskName',
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019'),    
      };
  },
  provide: {
      gantt: [Selection, Toolbar, DayMarkers, Filter]
  },
  methods: {
    toolbarClick: function(args) {
        if (args.item.text === 'Quick Filter') {
            this.$refs.gantt.filterByColumn('TaskName', 'startswith', 'Identify');
        }
        if (args.item.text === 'Clear Filter') {
            this.$refs.gantt.clearFiltering();
        }
    }
  }
});
</script>

<style>
    #ToolbarTemplate .e-quickfilter::before {
        content: "\e7ee"
    }
    .fabric #ToolbarTemplate .e-quickfilter::before,
    .highcontrast #ToolbarTemplate .e-quickfilter::before {
        content: '\e21c';
    }
    .bootstrap #ToolbarTemplate .e-quickfilter::before {
        content: '\e946';
    }
    .bootstrap4 #ToolbarTemplate .e-quickfilter::before {
        content: '\e714';
    }
</style>
