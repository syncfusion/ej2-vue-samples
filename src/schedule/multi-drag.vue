<template>
  <div class="schedule-vue-sample">
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-schedule
          id="Schedule"
          height="650px"
          :selectedDate="selectedDate"
          :allowMultiDrag="allowMultiDrag"
          :currentView="currentView"
          :eventSettings="eventSettings"
          :group="group"
          :showQuickInfo="showQuickInfo"
          :allowResizing="allowResizing"
        >
          <e-views>
            <e-view option="Month"></e-view>
            <e-view option="TimelineMonth"></e-view>
          </e-views>
          <e-resources>
            <e-resource
              field="TaskId"
              title="Owners"
              name="Owners"
              :dataSource="employeeDataSource"
              textField="text"
              idField="id"
              colorField="color"
            >
            </e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
    <div id="action-description">
      <p>
        This example showcases how to select the multiple events and drag them simultaneously. 
        We can select multiple events by pressing the CTRL key with a click. We can also drag the multiple events from one resource to another resource.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, <code>allowMultiDrag</code> property is set as <code>true</code> to drag the multiple selected events simultaneously . 
        We can simply reschedule the multiple events in single drag action. We can select multiple events by pressing the CTRL key. 
        Once the events are selected, we can leave the CTRL key and start dragging the event. 
      </p>
      <p>
        Here, we can also drag the multiple events from one resource to another resource. 
        In this case, if all the selected events are in the different resources, 
        then all the events should be moved to the single resource which is related to the target event.
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { resourceData, timelineResourceData } from "./datasource";
import {
  SchedulePlugin,
  Month,
  TimelineMonth,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-vue-schedule";
Vue.use(SchedulePlugin);
export default Vue.extend({
  data: function () {
    return {
      eventSettings: {
        dataSource: this.generateData(),
      },
      selectedDate: new Date(2018, 3, 4),
      currentView: "Month",
      allowMultiDrag: true,
      showQuickInfo: false,
      allowResizing:false,
      group: {
        resources: ["Owners"],
      },
      employeeDataSource: [
        { text: "Nancy", id: 1, color: "#df5286" },
        { text: "Steven", id: 2, color: "#7fa900" },
        { text: "Robert", id: 3, color: "#ea7a57" },
        { text: "Smith", id: 4, color: "#5978ee" },
        { text: "Micheal", id: 5, color: "#df5286" },
      ],
    };
  },
  provide: {
    schedule: [Month, TimelineMonth, Resize, DragAndDrop],
  },
  methods: {
    generateData: function () {
      var collections = [];
      var dataCollections = [resourceData, timelineResourceData];
      for (var i = 0; i < dataCollections.length; i++) {
        collections = collections.concat(dataCollections[i]);
      }
      return collections;
    },
  },
});
</script>