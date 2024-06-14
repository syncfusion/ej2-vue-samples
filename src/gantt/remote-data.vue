<template>
<div>
<div class="control-section">
    <div class="content-wrapper">
        <ejs-gantt ref='gantt' id="GanttContainer" 
            :dataSource= "dataSource"
            :height= "height"
            :taskFields= "taskFields"
            :columns= "columns"
            :treeColumnIndex= "1"
            :allowSelection= "true"
            :gridLines= "gridLines"
            :highlightWeekends= "true"
            :timelineSettings= "timelineSettings"
            :labelSettings= "labelSettings"
            :includeWeekend= "true"
            :projectStartDate= "projectStartDate"
            :projectEndDate= "projectEndDate"
        >
        </ejs-gantt>
        <div style="float: right; margin: 10px;">Source:
            <a href="https://en.wikipedia.org/wiki/Cereal_growth_staging_scales"
                target='_blank'>https://en.wikipedia.org/</a>
        </div>
    </div>

</div>

<div id="action-description">
    <p>This sample demonstrates the way of binding data to Gantt chart with remote service. The Gantt chart data source
        is bound to remote data using DataManager. This sample data helps to visualize the various phases of Barley
        harvesting.</p>
</div>

<div id="description">
    <p>
        The <code>dataSource</code> property in Gantt chart can be assigned with the instance of
        <code>DataManager</code> to bind remote data.
        The DataManager, which will act as an interface between the service endpoint and the Gantt chart, will require
        the below minimal information to interact with service endpoint properly.
        <ul>
        <li><code>DataManager->url</code> - Defines the service endpoint to fetch data</li>
        <li><code>DataManager->adaptor</code> - Defines the adaptor option. By default, ODataAdaptor is used for remote
            binding.</li>
        </ul>
        Adaptor is responsible for processing response and request from/to the service endpoint.
        <code>@syncfusion/ej2-data</code>
        package provides some predefined adaptors which are designed to interact with particular service endpoints. They
        are,
        <ul>
        <li><code>UrlAdaptor</code> - Use this to interact any remote services. This is the base adaptor for all remote
            based adaptors.</li>
        <li><code>ODataAdaptor</code> - Use this to interact with OData endpoints.</li>
        <li><code>ODataV4Adaptor</code> - Use this to interact with OData V4 endpoints.</li>
        <li><code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li>
        <li><code>WebMethodAdaptor</code> - Use this to interact with web methods.</li>
        </ul>
        In this demo, remote data is bound by assigning service data as an instance of <code>DataManager</code> to the
        <code>dataSource</code>
        property.
        More information on the data binding can be found in this documentation section.
    </p>
    <p>
        Gantt component features are segregated into individual feature-wise modules. To use a selection support, inject the
        <code>Selection</code> module.
    </p>
</div>
</div>
</template>
<script>
import { GanttComponent,Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

export default {
  components: {
    'ejs-gantt': GanttComponent
  },
  data: function() {
      return{
            dataSource: new DataManager({
        url: 'https://services.syncfusion.com/vue/production/api/GanttData',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    }),
            height: '450px',
            taskFields: {
                id: 'TaskId',
                name: 'TaskName',
                startDate: 'StartDate',
                progress: 'Progress',
                duration: 'Duration',
                dependency: 'Predecessor',
                child: 'SubTasks'
            },
            columns: [
			    { field: 'TaskId', visible: false },
                { field: 'TaskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },
                { field: 'StartDate' },
                { field: 'Duration' },
            ],
            gridLines: 'Both',
            timelineSettings: {
                timelineUnitSize: 50,
                topTier: {
                    unit: 'Month',
                    format: 'MMM dd, y',
                },
                bottomTier: {
                    unit: 'Day',
                    formatter: (date) => {
                        let month = date.getMonth();
                        if (month === 1) {
                            return '';
                        } else {
                            let presentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                            let start = new Date(presentDate.getFullYear(), 0, 0);
                            let diff = Number(presentDate) - Number(start);
                            let oneDay = 1000 * 60 * 60 * 24;
                            let day = Math.floor(diff / oneDay);
                            return 'day ' + (day - 59);
                        }
                    },
                },
            },
            labelSettings: {
                leftLabel: 'TaskName',
            },
            projectStartDate: new Date('02/24/2021'),
            projectEndDate: new Date('06/10/2021')
        };
  },
  provide: {
      gantt: [Selection, DayMarkers]
  }
}
</script>
