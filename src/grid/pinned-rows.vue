<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates that important rows can be pinned at the top and important columns frozen on the left or right, keeping them visible at all times.
            Scroll vertically or horizontally to see how these pinned rows and frozen columns remain fixed while the rest of the grid moves beneath or beside them.
        </p>
    </div>
    <div>
        <ejs-grid id="PinnedRows" :dataSource="data" :height="300" :pageSettings='pageSettings' :enableVirtualization="true" :contextMenuItems="contextMenuItems" :isRowPinned='isRowPinned' :allowSorting='true' :allowKeyboard='false' :allowFiltering='true' :filterSettings='filterSettings'>
            <e-columns>
                <e-column field="TicketID" headerText="Ticket ID" width="140" :isPrimaryKey="true"
                    freeze="Left"></e-column>
                <e-column field="Title" headerText="Title" width="210"></e-column>
                <e-column field="Description" headerText="Description" width="250" clipMode="EllipsisWithTooltip" :allowFiltering='false'></e-column>
                <e-column field="Status" headerText="Status" textAlign="Center" width="140" :template="statusTemplate"></e-column>
                <e-column field="Priority" headerText="Priority" textAlign="Center" width="140" :template="priorityTemplate"></e-column>
                <e-column field="Assignee" headerText="Assignee" width="140"></e-column>
                <e-column field="Category" headerText="Category" width="130"></e-column>
                <e-column field="TypeofRequest" headerText="Type of Request" width="210" :template="'requestTemplate'"></e-column>
                <e-column field="CreatedDate" headerText="Created Date" width="160" format="yMd"
                    textAlign="Right"></e-column>
                <e-column field="Rating" headerText="Rating" textAlign="Center" width="160" freeze="Right" :template="ratingTemplate"></e-column>
            </e-columns>
            <template v-slot:requestTemplate="{ data }">
                <div class="e-request-info">
                    <img :src="'src/grid/images/supportType/' + data.TypeofRequest + '.svg'" :alt="data.TypeofRequest" />
                    <span>{{ data.TypeofRequest }}</span>
                </div>
            </template>
        </ejs-grid>
    </div>

     <div id="description">
        <p>In this demo, tickets rated <strong>Dissatisfied</strong> or <strong>Very Dissatisfied</strong> are automatically pinned to the top through the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/#isrowpinned">isRowPinned</a></code> callback function.
            The grid applies column freezing by locking the <strong>Ticket ID</strong> column on the left and the <strong>Rating</strong> column on the right using the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/column#freeze">column.freeze</a></code> property.</p>
        <p>The feature supports dynamic row pinning so that any row can be pinned or unpinned through the context menu, and this functionality is configured by defining the <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/#contextmenuitems">contextMenuItems</a></code> property with the <strong>PinRow</strong> and <strong>UnpinRow</strong> options.</p>
        <p style="font-weight: bold">Injecting Module</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use Context Menu feature, we need to inject
            <code>ContextMenu</code> into the
            <code>provide</code> section.
        </p>
        <p>More information on pinned rows and frozen columns can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/row/row"> documentation section</a>.</p>
    </div>
</div>
</template>
<style scoped>
@import "../../styles/Grid/pinned-rows.css";
</style>
<script lang="ts">
import { createApp } from "vue";
import { GridComponent, ColumnDirective, ColumnsDirective, VirtualScroll, Sort, Filter, Freeze, ContextMenu } from "@syncfusion/ej2-vue-grids";
import { supportData } from "./data-source";

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  }, 
  data: () => {
    return {
      data: supportData,
      pageSettings: { pageSize: 20 },
      filterSettings: { type: 'Excel' },
      contextMenuItems: ['PinRow', 'UnpinRow'],
      statusTemplate: function () {
            return {
                template: createApp({}).component('statusTemplate', {
                    template: `
                        <div id="status" :class="{
                            'statusvalue': true,
                            'e-opencolor': data.Status === 'Open',
                            'e-inprogresscolor': data.Status === 'In Progress',
                            'e-closedcolor': data.Status === 'Closed',
                            'e-resolvedcolor': data.Status === 'Resolved'
                        }">
                            <span :class="{
                                'statustxt': true,
                                'e-opencolor': data.Status === 'Open',
                                'e-inprogresscolor': data.Status === 'In Progress',
                                'e-closedcolor': data.Status === 'Closed',
                                'e-resolvedcolor': data.Status === 'Resolved'
                            }">{{ data.Status }}</span>
                        </div>
                    `,
                    data: function () { return { data: {} }; }
                })
            }
        },
      ratingTemplate: function () {
            return {
                template: createApp({}).component('ratingTemplate', {
                    template: `
                        <div id="rating" :class="{
                            'statusvalue': true,
                            'e-satisfiedcolor': data.Rating === 'Satisfied',
                            'e-verysatisfiedcolor': data.Rating === 'Very Satisfied',
                            'e-dissatisfiedcolor': data.Rating === 'Dissatisfied',
                            'e-verydissatisfiedcolor': data.Rating === 'Very Dissatisfied',
                            'e-neutralcolor': data.Rating === 'Neutral'
                        }">
                            <span :class="{
                                'statustxt': true,
                                'e-satisfiedcolor': data.Rating === 'Satisfied',
                                'e-verysatisfiedcolor': data.Rating === 'Very Satisfied',
                                'e-dissatisfiedcolor': data.Rating === 'Dissatisfied',
                                'e-verydissatisfiedcolor': data.Rating === 'Very Dissatisfied',
                                'e-neutralcolor': data.Rating === 'Neutral'
                            }">{{ data.Rating }}</span>
                        </div>
                    `,
                    data: function () { return { data: {} }; }
                })
            }
        },
      priorityTemplate: function () {
            return {
                template: createApp({}).component('priorityTemplate', {
                    template: `
                        <div id="priority" :class="{
                            'statusvalue': true,
                            'e-highcolor': data.Priority === 'High',
                            'e-lowcolor': data.Priority === 'Low',
                            'e-mediumcolor': data.Priority === 'Medium',
                            'e-urgentcolor': data.Priority === 'Urgent'
                        }">
                            <span :class="{
                                'statustxt': true,
                                'e-highcolor': data.Priority === 'High',
                                'e-lowcolor': data.Priority === 'Low',
                                'e-mediumcolor': data.Priority === 'Medium',
                                'e-urgentcolor': data.Priority === 'Urgent'
                            }">{{ data.Priority }}</span>
                        </div>
                    `,
                    data: function () { return { data: {} }; }
                })
            }
        }
    };
  },
  methods: {
        isRowPinned: function (data: Object): boolean {
            if (data && ((<{ Rating?: string }>data).Rating === "Very Dissatisfied" || (<{ Rating?: string }>data).Rating === 'Dissatisfied')) {
                return true;
            }
            return false;
        }
  },
  provide: {
      grid: [VirtualScroll, Sort, Filter, Freeze, ContextMenu]
  }
}
</script>