<template>
  <div class="schedule-vue-sample">
    <div class="col-md-9 control-section">
      <div class="content-wrapper">
        <ejs-schedule id="Schedule" ref="ScheduleObj" cssClass="year-view" height="650px" :firstMonthOfYear="firstMonthValue" :monthsCount='monthsCount' :eventSettings="eventSettings" :eventRendered="onEventRendered">
          <e-views>
            <e-view option="Year" isSelected="true"></e-view>
            <e-view option="TimelineYear" displayName="Horizontal TimelineYear"></e-view>
            <e-view option="TimelineYear" displayName="Vertical TimelineYear" orientation="Vertical" :group="groupSettings"></e-view>
          </e-views>
          <e-resources>
            <e-resource field="TaskId" title="Category" name="Categories" allowMultiple="true" :dataSource="categoriesData" textField="text" idField="id" colorField="color"></e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
    <div class="col-lg-3 property-section">
      <table id="property" title="Properties" class="year-property-panel">
        <tbody>
          <tr>
            <td>
              <ejs-dropdownlist id="firstMonthElement" placeholder="First month of year" floatLabelType="Always" :dataSource='months' :value='firstMonthValue' :fields="fields" :change="firstMonthOfYear"></ejs-dropdownlist>
            </td>
          </tr>
          <tr>
            <td>
              <ejs-numerictextbox id="numberOfMonthsElement" placeholder="Number of months" floatLabelType="Always" :min="min" :max="max" :value="monthsCount" format="###.##" :change="numberOfMonths"></ejs-numerictextbox>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>
        This example showcases the year and timeline year views of the Scheduler with the firstMonthOfYear and monthCount properties customizations.
        Once the property value has been changed in the properties, it will be reflected in the Scheduler.
      </p>
    </div>

    <div id="description">
      <p>
        In this demo, we have showcased the
        <code>Year</code> and
        <code>TimelineYear</code> views that help to view the appointment in an annual calendar view. The view options are enabled by using the views property.
        In the
        <code>TimelineYear</code>,
        <code>Horizontal</code> and
        <code>Vertical</code> orientations are available to view the events with a different layout. Also this demo explains the customization of the different
        starting month of the year using <code>firstMonthOfYear</code> property and the number of months using the <code>monthsCount</code> property.
      </p>
      <p>
        <strong>Module Injection</strong>
      </p>
      <p>
        To work with Year and TimelineYear views on Scheduler – it is necessary to inject the
        <code>Year</code> and
        <code>TimelineYear</code> module into the
        <code>provide</code> section.
      </p>
    </div>
  </div>
</template>

<style>
  .year-view.e-schedule .e-timeline-year-view .e-resource-column-table,
  .year-view.e-schedule .e-timeline-year-view .e-resource-left-td {
    width: 120px;
  }

  .year-property-panel td {
    padding-bottom: 1rem;
  }
</style>

<script>
import Vue from "vue";
import { SchedulePlugin, Year, TimelineYear, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(SchedulePlugin);
Vue.use(DropDownListPlugin);
Vue.use(NumericTextBoxPlugin);

export default Vue.extend({
  data: function() {
    return {
      eventSettings: {
        dataSource: this.generateEvents()
      },
      categoriesData: [
        { text: "Nancy", id: 1, color: "#df5286" },
        { text: "Steven", id: 2, color: "#7fa900" },
        { text: "Robert", id: 3, color: "#ea7a57" },
        { text: "Smith", id: 4, color: "#5978ee" },
        { text: "Michael", id: 5, color: "#df5286" }
      ],
      groupSettings: { resources: ["Categories"] },
      months: [
        { text: 'January', value: 0 },
        { text: 'February', value: 1 },
        { text: 'March', value: 2 },
        { text: 'April', value: 3 },
        { text: 'May', value: 4 },
        { text: 'June', value: 5 },
        { text: 'July', value: 6 },
        { text: 'August', value: 7 },
        { text: 'September', value: 8 },
        { text: 'October', value: 9 },
        { text: 'November', value: 10 },
        { text: 'December', value: 11 }
      ],
      fields: { text: 'text', value: 'value' },
      firstMonthValue: 0,
      monthsCount: 12,
      min: 1,
      max: 24,
    };
  },
  provide: {
    schedule: [Year, TimelineYear, Resize, DragAndDrop]
  },
  methods: {
    onEventRendered: function(args) {
      let eventColor = args.data.EventColor;
      if (!args.element || !eventColor) {
        return;
      }
      args.element.style.backgroundColor = eventColor;
    },
    firstMonthOfYear: function(args) {
      this.$refs.ScheduleObj.ej2Instances.firstMonthOfYear = args.value;
    },
    numberOfMonths: function(args) {
      this.$refs.ScheduleObj.ej2Instances.monthsCount = args.value;
    },
    generateEvents(count = 250, date = new Date()) {
      const names = [
        "Bering Sea Gold", "Technology", "Maintenance", "Meeting", "Travelling", "Annual Conference",
        "Birthday Celebration", "Farewell Celebration", "Wedding Anniversary", "Alaska: The Last Frontier",
        "Deadliest Catch", "Sports Day", "MoonShiners", "Close Encounters", "HighWay Thru Hell", "Daily Planet",
        "Cash Cab", "Basketball Practice", "Rugby Match", "Guitar Class", "Music Lessons", "Doctor checkup",
        "Brazil - Mexico", "Opening ceremony", "Final presentation"
      ];
      const colors = [
        "#ff8787", "#9775fa", "#748ffc", "#3bc9db", "#69db7c", "#fdd835", "#748ffc", 
        "#9775fa", "#df5286", "#7fa900", "#fec200", "#5978ee", "#00bdae", "#ea80fc"
      ];
      const startDate = new Date(date.getFullYear() - 2, 0, 1);
      const endDate = new Date(date.getFullYear() + 2, 11, 31);
      const dateCollections = [];
      for (let a = 0, id = 1; a < count; a++) {
        const start = new Date(Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime());
        const end = new Date(new Date(start.getTime()).setHours(start.getHours() + 1));
        const nCount = Math.floor(Math.random() * names.length);
        const n = Math.floor(Math.random() * colors.length);
        dateCollections.push({
          Id: id,
          Subject: names[nCount],
          StartTime: new Date(start.getTime()),
          EndTime: new Date(end.getTime()),
          IsAllDay: id % 10 ? true : false,
          EventColor: colors[n],
          TaskId: (id % 5) + 1
        });
        id++;
      }
      return dateCollections;
    }
  }
});
</script>
