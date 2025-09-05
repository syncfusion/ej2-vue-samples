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
      <p>This sample shows the loading indicator while initial rendering, refreshing and all gantt action. In this
        sample, you can change the loading indicators from the properties panel.</p>
    </div>
    <div id="description">
      <p>
        The Gantt has an option to show a loading indicator in-between the time of fetching the data and binding it to
        the gantt during initial rendering, refreshing or
        while performing action like sorting, filtering and more.
      <p>The Gantt support the following loading indicator types</p>
      <ul>
        <li><code>Shimmer</code></li>
        <li><code>Spinner</code></li>
      </ul>
      Use the loading indicator by setting the <a target="_blank"
        href="https://ej2.syncfusion.com/vue/documentation/api/gantt/loadingIndicatorModel/#indicatortype">loadingIndicator.indicatorType</a>
      property as Spinner or Shimmer. The default value of the indicatorType is Spinner.
      </p>
      <p>By default <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/api/gantt#enablevirtualmaskrow">enableVirtualMaskRow</a> is
        set to true which renders Shimmer during virtual scrolling.</p>
      <br>
      <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/gantt/getting-started">documentation section</a>.</p>
    </div>
  </div>
</template>
<script>
import {
  GanttComponent, Selection, VirtualScroll, Sort, Filter
} from "@syncfusion/ej2-vue-gantt";
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
        { Id: "Spinner", type: "Spinner" },
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
        { field: 'TaskName', width: '200px' },
        { field: 'StartDate',width: 170 },
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
      }
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
