<template>
  <div>
    <div class="control-section">
      <div class="col-md-9 control-section">
        <ejs-gantt ref="gantt" id="GanttContainer" :dataSource="data" :taskFields="taskFields" :allowSelection="true"
          :enableVirtualization="true" :labelSettings="labelSettings" :loadingIndicator="loadingIndicator"
          :allowSorting='true' :allowFiltering="true" :height="height" :rowHeight="46" :taskbarHeight="25"
          :treeColumnIndex="1" :highlightWeekends="true" :columns="columns" :splitterSettings="splitterSettings">
        </ejs-gantt>
      </div>
      <div>
        <div class="col-md-3 property-section" style="padding-left: 0px;">
          <table id="property" title="Properties" style="width: 100%">
            <br /><br />
            <tr style="height: 50px">
              <td style="width: 70%; padding-left: 0;">
                <div style="padding-left: 0;">Indicator Type</div>
              </td>
              <td style="width: 70%; padding-left: 10px">
                <ejs-dropdownlist id="element" width="125px" :dataSource="typedata" value="Shimmer" :fields="typefields"
                  :change="onTypechange"></ejs-dropdownlist>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the loading animation support in the Gantt Chart. Use the property panel to switch between the <code>Shimmer</code> and <code>Spinner</code> loading indicators displayed during data loading, refreshing, virtual scrolling, and other Gantt actions.</p>
    </div>
    <div id="description">
      <p>
        This example demonstrates the loading indicator functionality in the Gantt Chart. Loading indicators are displayed during initial rendering, data refreshing, virtual scrolling, and while performing operations such as sorting and filtering.
      </p>
      <p>
        The Gantt Chart supports the following loading indicator types:
      </p>
      <ul>
        <li><code>Shimmer</code> - Displays placeholder rows that mimic the layout of the content while data is loading.</li>
        <li><code>Spinner</code> - Displays a loading spinner until the requested operation is completed</li>
      </ul>
      <p>Use the <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/loadingIndicatorModel/#indicatortype">Indicator Type</a></code> option in the property panel to switch between <code>Shimmer</code> and <code>Spinner</code> loading indicators. This behavior can also be configured using the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt/loadingIndicatorModel/#indicatortype">loadingIndicator.indicatorType</a> property.</p>
      
      <p>
        When <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/gantt#enablevirtualmaskrow">enableVirtualMaskRow</a></code> is enabled, shimmer placeholders are displayed during virtual scrolling to provide a smoother loading experience when working with large datasets
      </p>
      <p style="font-weight: 500">Injecting Module:</p>
      <p>
          Gantt component features are segregated into individual feature-wise modules. To use selection, virtual scroll, sort and
          filter features, inject the <code>Selection</code>, <code>VirtualScroll</code>, <code>Sort</code> and <code>Filter</code>
          modules using the <code>provide</code> section.
      </p>
      <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/gantt/loading-animation">loading animation</a> documentation section.</p>
      <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
    </div>
  </div>
</template>
<script>
import { GanttComponent, Selection, VirtualScroll, Sort, Filter } from "@syncfusion/ej2-vue-gantt";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { virtualData } from "./data-source";

export default {
  components: {
    'ejs-gantt': GanttComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: function () {
    return {
      data: virtualData,
      typefields: { text: "type", value: "Id" },
      typedata: [
        { Id: "Shimmer", type: "Shimmer" },
        { Id: "Spinner", type: "Spinner" }
      ],
      taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'parentID'
      },
      columns: [
        { field: 'TaskID' },
        { field: 'TaskName', width: 300 },
        { field: 'StartDate', width: 170 },
        { field: 'Duration' },
        { field: 'Progress' }
      ],
      loadingIndicator: { indicatorType: 'Shimmer' },
      height: '650px',
      labelSettings: {
        taskLabel: 'Progress'
      },
      splitterSettings: {
        columnIndex: 2
      },
      projectEndDate: new Date('09/21/2025')
    };
  },
  methods: {
    onTypechange: function (e) {
      var value = e.value;
      if (value === "Shimmer") {
        this.$refs.gantt.ej2Instances.loadingIndicator.indicatorType = "Shimmer";
        this.$refs.gantt.ej2Instances.enableVirtualMaskRow = true;
        this.$refs.gantt.ej2Instances.refresh();
      } else {
        this.$refs.gantt.ej2Instances.loadingIndicator.indicatorType = "Spinner";
        this.$refs.gantt.ej2Instances.enableVirtualMaskRow = false;
        this.$refs.gantt.ej2Instances.refresh();
      }
    }
  },
  provide: {
    gantt: [Selection, VirtualScroll, Sort, Filter],
  },
}
</script>
