<template>
<div>
<div class="col-lg-12 control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="GanttContainer" 
            :dataSource= "dataSource"
            :taskFields= "taskFields"
            :allowSelection= "true"
            :allowResizing= "true"
            :height= "height"
            :treeColumnIndex= "1"
            :highlightWeekends= "true"
            :columns= "columns"
            :enableVirtualization="true"
            :loadChildOnDemand = "false"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
            :splitterSettings= "splitterSettings"
            >
        </ejs-gantt>
    </div>
</div>

<div id="action-description">
<p>This sample demonstrates the load on-demand data binding support in Gantt Chart. It allows users to load parent records alone on load time. Child records render on demand during expansion action.</p>
</div>

<div id="description">
    <p>
        Load on demand and virtualization support is used to render a large number of tasks in the Gantt Chart with an effective performance. And so, in this demo, row virtualization is enabled with remote data binding which has 50,000 records.
    </p>
    <p>
        With the virtualization feature enabled in remote data binding, only the root level records are fetched from the remote server at the initial load time. So, need to set the <code>hasChildMapping</code> property of <code>taskFields</code> that denotes whichever records have child records and set <code>loadChildOnDemand</code> property as false.
    </p>
    <p>
        When expanding the root parent node or scrolling vertically, the corresponding tasks are dynamically fetched from the remote server and then updated in the DOM based on the current viewport position.
    </p>
</div>
</div>
</template>
<script>
import { GanttComponent, Selection, VirtualScroll  } from "@syncfusion/ej2-vue-gantt";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

export default {
  components: {
    'ejs-gantt': GanttComponent,
  },
  data: function() {
      return{
            dataSource: new DataManager({
        url: 'https://services.syncfusion.com/vue/production/api/GanttLoadOnDemand',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    }),     
            taskFields: {
            id: 'taskId',
            name: 'taskName',
            startDate: 'startDate',
            endDate: 'endDate',
            duration: 'duration',
            progress: 'progress',
            hasChildMapping: 'isParent',
            parentID: 'parentID'
            },
            height: '460px',
            columns: [
			    { field: 'taskId' },
                { field: 'taskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },
                { field: 'startDate' },
                { field: 'duration' },
                { field: 'progress' }
            ],
            projectStartDate: new Date('01/02/2000'),
            projectEndDate: new Date('12/01/2002'),

            splitterSettings: {
                columnIndex: 3
            }
      };
  },
  provide: {
      gantt: [ Selection, VirtualScroll]
  }
}
</script>
