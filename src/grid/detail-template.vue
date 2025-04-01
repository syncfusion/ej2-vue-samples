<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates the Grid component's with the detail template feature. It lets users click the expand button
        in each grid row to display detailed information about that row.
    </p>
    </div>
    <div id="app">
    <ejs-grid ref="grid" :dataSource='employeeDataParent' height='600' width='auto' :detailDataBound='detailDataBound'
      :detailTemplate="'detailTemplate'" allowSorting="true" allowFiltering="true" :filterSettings='filterSettings'>
      <e-columns>
        <e-column headerText="Image" width="70"
          :template="'employeeImageTemplate'"></e-column>
        <e-column field="EmployeeID" headerText="ID" isPrimaryKey width="70"></e-column>
        <e-column field="Name" headerText="Name" width="70"></e-column>
        <e-column field="MailID" headerText="Email ID" width="120" :template="'mailIDTemplate'"></e-column>
        <e-column field="SoftwareTeam" headerText="Team(s)" width="70"></e-column>
        <e-column field="ReportTo" headerText="Reporter" width="70" ></e-column>
      </e-columns>
      <template v-slot:detailTemplate>
        <div>
          <p class="report"><b>Sprint</b></p>
          <ejs-tab ref="tabObj" id="tab">
            <e-tabitems>
              <e-tabitem :header='headerText0' :content="'taskTemplate'"></e-tabitem>
              <template v-slot:taskTemplate>
                <div>
                  <ejs-kanban id="kanban" cssClass="kanban-swimlane" keyField="Status" :dataSource='taskData' :cardSettings="cardSettings">
                    <e-kanbancolumns>
                      <e-kanbancolumn headerText="Open" keyField="Open"></e-kanbancolumn>
                      <e-kanbancolumn headerText="In Progress" keyField="InProgress"></e-kanbancolumn>
                      <e-kanbancolumn headerText="Testing" keyField="Testing"></e-kanbancolumn>
                      <e-kanbancolumn headerText="Done" keyField="Close"></e-kanbancolumn>
                    </e-kanbancolumns>
                  </ejs-kanban>
                </div>
              </template>
              <e-tabitem :header='headerText1' :content="'chartTemplate'"></e-tabitem>
              <template v-slot:chartTemplate>
                <div>
                  <ejs-chart ref="chart" height='280px' :primaryXAxis="primaryXAxis"
                    title="Sales" :tooltip="tooltip">
                    <e-series-collection>
                      <e-series type='Line' :dataSource='salesData' xName='taskid' yName='estimatedHours' name='Estimated Hours'
                        :marker="markerOptions"></e-series>
                      <e-series type='Line' :dataSource='salesData' xName='taskid' yName='spentHours' name='Spent Hours'
                        :marker="markerOptions"></e-series>
                    </e-series-collection>
                  </ejs-chart>
                </div>
              </template>
            </e-tabitems></ejs-tab>
        </div>
      </template>
      <template v-slot:employeeImageTemplate="{ data }">
        <div class="image">
          <img
            :src="'src/grid/images/' + data.EmployeeID.replace('Emp100', '') + '.png'"
            :alt="data.EmployeeID" />
        </div>
      </template>
      <template v-slot:mailIDTemplate="{ data }">
        <a :href="'mailto:' + data.MailID">{{ data.MailID }}</a>
      </template>
    </ejs-grid>
</div>

     <div id="description">
        <p>
        This additional information can be shown or hidden by clicking on the expand or collapse button. The 
        <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid#detailtemplate">
        detailTemplate</a></code> property accepts either a string or HTML element`s ID value, which will be used as the template for the detail row.
    </p>
        <p>
        In this demonstration, the parent row provides information about employees name, ID, team and reporter names. In each employee row with 
        a details view, when expanding the details, you can see the sprint report of that employee. In the details row with two tabs, the first tab contains 
        <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/demos/#/fluent2/kanban/overview">
        Syncfusion Kanban component</a></code> used to list assigned tasks and their current statuses, and the second tab contains <code><a target="_blank" class="code" 
        href="https://ej2.syncfusion.com/vue/demos/#/fluent2/chart/overview.html"> Syncfusion Chart Component</a></code> used to 
        display the burndown chart of employee task estimated time vs actual spend time.
    </p>
        <br/>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
          Features of the Grid component into individual feature-wise modules. To use the detail template feature, inject the <code>DetailRow</code> into the <code>provide</code> section.
        </p>
        <p>
          More information on the detail template can be found in this
          <a target="_blank" 
          href="https://ej2.syncfusion.com/vue/documentation/grid/row/detail-template">
          documentation section</a>.
      </p>
    </div>

</div>
</template>
<style scoped>
@import "../../styles/Grid/detail-template.css";
</style>

<script lang="ts">
import { createApp } from "vue";
import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { TabComponent, TabItemsDirective, TabItemDirective } from "@syncfusion/ej2-vue-navigations";
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, Legend, Tooltip, DateTime, Category, Highlight } from "@syncfusion/ej2-vue-charts";
import { employeeDetail, taskDetail } from './data-source';
import { KanbanComponent, ColumnsDirective as KanbanColumns, ColumnDirective as KanbanColumn} from "@syncfusion/ej2-vue-kanban";

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    'ejs-tab': TabComponent,
    'e-tabitems': TabItemsDirective,
    'e-tabitem': TabItemDirective,
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-kanban': KanbanComponent,
    'e-kanbancolumns': KanbanColumns,
    'e-kanbancolumn': KanbanColumn
  },
  data() {
    return {
      employeeDataParent: employeeDetail,
      headerText0: { text: 'Taskboard' },
      headerText1: { text: 'Burndown Chart' },
      pageSettings: { pageSize: 5 },
      filterSettings: { type: 'CheckBox' },
      tooltip: true,
      markerOptions: { visible: true, width: 10, height: 10 },
      primaryXAxis: { valueType: 'Category', title: 'Status' },
      salesData: [],
      taskData: [],
      cardSettings: {
        headerField: "Id",
        template: function () {
          return { template: createApp({}).component('sortCardTemplate', {
            template: `<div className="card-template">
            <table className="card-template-wrap" style="width: 100%;">
              <tbody>
                <tr>
                  <td className="e-title">
                    <div className="e-card-header">
                      <div className="e-card-header-caption">
                        <div className="e-card-header-title e-tooltip-text">
                          {{data.Id}}
                        </div>
                      </div>
                    </div>
                    <table
                      className="card-template-wrap">
                      <tbody>
                        <tr className='e-tooltip-text'>
                          <td>
                            <div className="e-card-content">
                              {{data.Summary}}
                            </div>
                            <span className="e-card-content"><b>Estimated hour:</b> {{data.Estimate}}</span>
                          </td>
          
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table >
          </div >`,
            data: function () {return {data: {data: {}}};}
          }) 
        };
        }
      }
    };
  },
  methods: {
    detailDataBound: function (args: any) {
      var rowData = args.data;
      (this as any).taskData = taskDetail.filter((task: any) => task.Assignee === rowData.Name);
      (this as any).salesData = this.generateData((this as any).taskData);
    },
    generateData: function (taskData: any) {
      const statusCategories = ['Open', 'InProgress', 'Testing', 'Close'];
      const statusData = statusCategories.map((status) => {
        const filteredTasks = taskData.filter((task: any) => task.Status === status);
        const estimatedHours = filteredTasks.reduce((sum: any, task: any) => sum + task.Estimate, 0);
        const spentHours = filteredTasks.reduce((sum: any, task: any) => sum + task.Spent, 0);
        let taskid = '';
        if (filteredTasks.length) {
          taskid = filteredTasks[0].Id;
        }
        return { spentHours, estimatedHours, status, taskid };
      });
      return statusData;
    }
  },
  provide: { grid: [DetailRow, Sort, Filter], chart: [LineSeries, Legend, Tooltip, Category, DateTime, Highlight] }
};
</script>