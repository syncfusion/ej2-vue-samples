<template>
  <div>
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-schedule id="Schedule" ref="ScheduleObj" height="650px" :eventSettings="eventSettings" :currentView="currentView" :eventRendered="onEventRendered">
          <e-views>
            <e-view option="Year"></e-view>
            <e-view option="TimelineYear" displayName="Horizontal TimelineYear" isSelected="true"></e-view>
            <e-view option="TimelineYear" displayName="Vertical TimelineYear" orientation="Vertical" :group="groupSettings"></e-view>
          </e-views>
          <e-resources>
            <e-resource field="TaskId" title="Category" name="Categories" allowMultiple="true" :dataSource="categoriesData" textField="text" idField="id" colorField="color"></e-resource>
          </e-resources>
        </ejs-schedule>
      </div>
    </div>
    <div id="action-description">
      <p>This demo shows the experience of showing the annual year events in a single view with different orientations.</p>
    </div>

    <div id="description">
      <p>
        In this demo, we have showcased the
        <code>Year</code> and
        <code>TimelineYear</code> views that help to view the appointment in an annual calendar view. The view options are enabled by using the views property.
        In the
        <code>TimelineYear</code>,
        <code>Horizontal</code> and
        <code>Vertical</code> orientations are available to view the events with a different layout.
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

<script>
import Vue from "vue";
import { SchedulePlugin, Year, TimelineYear } from "@syncfusion/ej2-vue-schedule";

Vue.use(SchedulePlugin);

export default Vue.extend({
  data: function() {
    return {
      eventSettings: {
        dataSource: this.generateEvents()
      },
      currentView: "TimelineYear",
      categoriesData: [
        { text: "Nancy", id: 1, color: "#df5286" },
        { text: "Steven", id: 2, color: "#7fa900" },
        { text: "Robert", id: 3, color: "#ea7a57" },
        { text: "Smith", id: 4, color: "#5978ee" },
        { text: "Micheal", id: 5, color: "#df5286" }
      ],
      groupSettings: { resources: ["Categories"] }
    };
  },
  provide: {
    schedule: [Year, TimelineYear]
  },
  methods: {
    onEventRendered: function(args) {
      let eventColor = args.data.EventColor;
      if (!args.element || !eventColor) {
        return;
      }
      args.element.style.backgroundColor = eventColor;
    },
    generateEvents(count = 250, date = new Date()) {
      const names = [
        "Bering Sea Gold", "Technology", "Maintenance", "Meeting", "Travelling", "Annual Conference",
        "Birthday Celebration", "Farewell Celebration", "Wedding Aniversary", "Alaska: The Last Frontier",
        "Deadest Catch", "Sports Day", "MoonShiners", "Close Encounters", "HighWay Thru Hell", "Daily Planet",
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
