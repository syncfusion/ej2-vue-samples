<template>
  <div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This demo showcases a ticket management dashboard that displays a hierarchical list of support issues in a Tree Grid.</p>
    </div>
    <div>
      <ejs-treegrid ref="treegrid" :dataSource="data" idMapping="TicketID" :height="350"
        parentIdMapping="ParentTicketID" hasChildMapping="isParent" :treeColumnIndex="1" :allowPaging="true"
        :gridLines="'Both'" :pageSettings="pageSettings" :allowFiltering="true" :allowKeyboard="false"
        :dataStateChange='dataStateChange' :dataBound="dataBound" :allowSorting="true">
        <e-columns>
          <e-column field="TicketID" headerText="Ticket ID" width="90" textAlign="Left" isPrimaryKey="true" />
          <e-column field="Title" headerText="Title" width="250" textAlign="Left" clipMode="EllipsisWithTooltip" />
          <e-column field="Category" headerText="Category" textAlign="Left" width="120" />
          <e-column field="Priority" headerText="Priority" textAlign="Left" width="100"
            :template='priorityTemplate'></e-column>
          <e-column field="Status" headerText="Status" width="120" textAlign="Left"
            :template='statusTemplate'></e-column>
          <e-column field="AssignedAgent" headerText="Assigned To" textAlign="Left" width="150" />
          <e-column field="CustomerName" headerText="Customer" textAlign="Left" width="140" />
          <e-column field="CreatedDate" headerText="Created Date" :allowFiltering="false" textAlign="Right" width="130" format="yMd" type="date"/>
          <e-column field="DueDate" headerText="Due Date" :allowFiltering="false" textAlign="Right" width="130" format="yMd" type="date"/>
        </e-columns>
      </ejs-treegrid>
    </div>
    <div id="description">
        <p>The Tree Grid can fetch data from external APIs using AJAX, populating the component with the response data. When performing actions like <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowpaging">paging</a>, <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowsorting">sorting</a>, or <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowfiltering">filtering</a>, the <code>dataStateChange</code> event triggers, requiring developers to send an HTTP request and update the Tree Grid with the new data.</p>
        <p>In this demo, users can navigate the paged Tree Grid, sort data by clicking any column header, and apply filters using the filter bar. Multi-column sorting is supported, and filtering is enabled per column.
            To enable paging, sorting and filtering set the <code>allowPaging</code>, <code>allowSorting</code> and <code>allowFiltering</code> as <b>true</b>.
        </p>
        <p>
            More information about the custom data binding can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/overview">documentation</a> section.
        </p>
    </div>
  </div>
</template>

<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Sort, Page, Filter } from '@syncfusion/ej2-vue-treegrid';
import { TaskService } from './task-service';
import { createApp } from 'vue';

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data() {
    return {
      data: {},
      pageSettings: { pageSize: 10, pageCount: 4 },
      taskService: new TaskService(),
      priorityTemplate: function () {
        return {
          template: createApp({}).component('priorityTemplate', {
            template: `
              <span :class="getPriorityClass(data.Priority)">
                {{ data.Priority }}
              </span>
            `,
            data: function () {
              return {
                data: {}
              }
            },
            methods: {
              getPriorityClass(priority: any) {
                switch (priority) {
                  case 'Critical': return 'badge bg-danger';
                  case 'High': return 'badge bg-warning';
                  case 'Medium': return 'badge bg-info';
                  case 'Low': return 'badge bg-success';
                  default: return 'badge bg-secondary';
                }
              }
            }
          })
        }
      },
      statusTemplate: function () {
        return {
          template: createApp({}).component('statusTemplate', {
            template: `
              <span :class="getStatusClass(data.Status)">
                {{ data.Status }}
              </span>
            `,
            data: function () {
              return {
                data: {}
              }
            },
            methods: {
              getStatusClass(status: any) {
                switch (status) {
                  case 'Open': return 'badge bg-primary';
                  case 'In Progress': return 'badge bg-warning';
                  case 'Resolved': return 'badge bg-success';
                  case 'Closed': return 'badge bg-secondary';
                  case 'Escalated': return 'badge bg-danger';
                  default: return 'badge bg-light text-dark';
                }
              }
            }
          })
        }
      }
    };
  },
  methods: {
    // Handles data state changes from the Tree Grid (e.g., paging, sorting, filtering).
    dataStateChange: function (state: any) {
      const taskService = (this as any).taskService as TaskService;
      let instance: any = ((this as any).$refs.treegrid).ej2Instances;
      if (state.requestType === 'expand') {
        taskService.execute(state).then((treegridData: any) => {
          state.childData = treegridData.result;
          state.childDataBind();
        });
      } else {
        taskService.execute(state).then((treegridData: any) => (instance.dataSource = treegridData));
      }
    },
    // Handles the data bound event of the Tree Grid for initial rendering.
    dataBound: function () {
      let instance: any = ((this as any).$refs.treegrid).ej2Instances;
      if (instance.initialRender) {
        const state = { skip: 0, take: 10 };
        this.dataStateChange(state);
      }
    },
  },
  provide: {
    treegrid: [Sort, Page, Filter],
  }

}
</script>
<style>
.bg-warning {
  --bs-bg-opacity: 1;
  background-color: rgba(255, 193, 7, 1) !important;
}

.bg-danger {
  --bs-bg-opacity: 1;
  background-color: rgba(220, 53, 69, 1) !important;
}

.bg-info {
  --bs-bg-opacity: 1;
  background-color: rgba(13, 202, 240, 1) !important;
}

.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(25, 135, 84, 1) !important;
}

.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(13, 110, 253, 1) !important;
}

.bg-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(108, 117, 125, 1) !important;
}
</style>