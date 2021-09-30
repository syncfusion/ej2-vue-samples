<template>
  <div class="schedule-vue-sample">
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-schedule id="Schedule" height="650px" :selectedDate="selectedDate" cssClass='inline-edit' :allowInline="allowInline" :workDays="workDays" :currentView="currentView" :eventSettings="eventSettings" :group="group">
          <e-views>
            <e-view option="TimelineWeek"></e-view>
            <e-view option="TimelineMonth"></e-view>
          </e-views>
          <e-resources>
            <e-resource field="TaskId" title="Category" name="Categories" :dataSource="categoriesData" :allowMultiple="allowMultiple" 
              textField="text" idField="id" groupIDField="groupId" colorField="color"></e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
    <div id="action-description">
      <p>This demo shows the experience of adding a new appointment or editing the existing appointment through inline mode. 
        Click on the cells to add an appointment with the subject alone and click on the appointment to edit the subject of the appointment.</p>
    </div>
    <div id="description">
      <p>
        The features enable user to add or edit the appointment through inline mode. 
        Click on the cells or the existing appointments to enable inline mode. You can press the ENTER key on the selected cell or appointment.  
      </p>
      <p>The feature activates when you enable the <code>allowInline</code> property.</p>
      <ul>
        <li>For adding an appointment, the appointment will be created based on the selected time and subject once you focused-out or press ENTER key.</li>
        <li>For editing an appointment, the appointment will be saved based on the modified subject.</li>
      </ul>
    </div>
  </div>
</template>
<style>
  .inline-edit.e-schedule .e-timeline-view .e-resource-left-td,
  .inline-edit.e-schedule .e-timeline-month-view .e-resource-left-td {
    width: 150px;
  }
</style>
<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { resourceData, timelineResourceData } from "./datasource";
import { SchedulePlugin, TimelineViews, TimelineMonth, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
Vue.use(SchedulePlugin);
export default Vue.extend({
  data: function() {
    return {
      eventSettings: {
        dataSource: extend([], resourceData.concat(timelineResourceData), null, true)
      },
      allowInline: true,
      workDays: [0, 1, 2, 3, 4, 5],
      selectedDate: new Date(2021, 3, 4),
      currentView: "TimelineWeek",
      allowMultiple: true,
      group: {
        resources: ["Categories"]
      },
      categoriesData: [
        { text: "Nancy", id: 1, groupId: 1, color: "#df5286" },
        { text: "Steven", id: 2, groupId: 1, color: "#7fa900" },
        { text: "Robert", id: 3, groupId: 2, color: "#ea7a57" },
        { text: "Smith", id: 4, groupId: 2, color: "#5978ee" },
        { text: "Michael", id: 5, groupId: 3, color: "#df5286" },
        { text: "Root", id: 6, groupId: 3, color: "#00bdae" }
      ]
    };
  },
  provide: {
    schedule: [TimelineViews, TimelineMonth, Resize, DragAndDrop]
  }
});
</script>