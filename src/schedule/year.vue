<template>
  <div>
    <div class="col-md-9 control-section">
      <div class="content-wrapper">
        <ejs-schedule
          id="Schedule"
          ref="ScheduleObj"
          height="650px"
          :eventSettings="eventSettings"
          :currentView="currentView"
          :eventRendered="onEventRendered"
        >
          <e-views>
            <e-view option="TimelineYear"></e-view>
          </e-views>
        </ejs-schedule>
      </div>
    </div>
    <div class="col-lg-3 property-section">
      <table id="property" title="Properties" style="width: 100%">
        <tbody>
          <tr style="height: 50px">
            <td style="width: 30%">
              <div>Orientation</div>
            </td>
            <td style="width: 70%;">
              <div>
                <ejs-dropdownlist
                  id="orientation"
                  :dataSource="orientationData"
                  :value="orientationValue"
                  :fields="orientationFields"
                  :change="orientationChange"
                  popupWidth="180px"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>This demo showcases how the scheduler looks like in Year view with its default set of configurations.</p>
    </div>

    <div id="description">
      <p>
        This demo showcases how the scheduler looks like in Year view with its default set of configurations. In this demo,
        the
        active view of Scheduler is set to
        <code>Vertical Year</code> and
        <code>Horizontal Year</code> view options are provided to
        <code>views</code> property.
      </p>
      <p>
        <strong>Module Injection</strong>
      </p>
      <p>
        To work with TimelineYear view on Scheduler – it is necessary to inject the
        <code>TimelineYear</code> module into the
        <code>provide</code> section.
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { generateEvents } from "./datasource";
import { SchedulePlugin, TimelineYear } from "@syncfusion/ej2-vue-schedule";
Vue.use(SchedulePlugin);
export default Vue.extend({
  data: function() {
    return {
      eventSettings: {
        dataSource: generateEvents()
      },
      currentView: "TimelineYear",
      orientationData: [
        {
          text: "Horizontal",
          value: "Horizontal"
        },
        {
          text: "Vertical",
          value: "Vertical"
        }
      ],
      orientationValue: "Horizontal",
      orientationFields: {
        text: "text",
        value: "value"
      }
    };
  },
  provide: {
    schedule: [TimelineYear]
  },
  methods: {
    orientationChange: function(args) {
      let scheduleObj = this.$refs.ScheduleObj;
      scheduleObj.views = [
        {
          option: "TimelineYear",
          orientation: args.value
        }
      ];
      scheduleObj.dataBind();
    },

    onEventRendered: function(args) {
      let eventColor = args.data.EventColor;
      if (!args.element || !eventColor) {
        return;
      }
      args.element.style.backgroundColor = eventColor;
    },
    generateEvents(count = 250, date = new Date()) {
      const names = [
        "Bering Sea Gold",
        "Technology",
        "Maintenance",
        "Meeting",
        "Travelling",
        "Annual Conference",
        "Birthday Celebration",
        "Farewell Celebration",
        "Wedding Aniversary",
        "Alaska: The Last Frontier",
        "Deadest Catch",
        "Sports Day",
        "MoonShiners",
        "Close Encounters",
        "HighWay Thru Hell",
        "Daily Planet",
        "Cash Cab",
        "Basketball Practice",
        "Rugby Match",
        "Guitar Class",
        "Music Lessons",
        "Doctor checkup",
        "Brazil - Mexico",
        "Opening ceremony",
        "Final presentation"
      ];
      const colors = [
        "#ff8787",
        "#9775fa",
        "#748ffc",
        "#3bc9db",
        "#69db7c",
        "#fdd835",
        "#748ffc",
        "#9775fa",
        "#df5286",
        "#7fa900",
        "#fec200",
        "#5978ee",
        "#00bdae",
        "#ea80fc"
      ];
      const startDate = new Date(date.getFullYear() - 2, 0, 1);
      const endDate = new Date(date.getFullYear() + 2, 11, 31);
      const dateCollections = [];
      for (let a = 0, id = 1; a < count; a++) {
        const start = new Date(
          Math.random() * (endDate.getTime() - startDate.getTime()) +
            startDate.getTime()
        );
        const end = new Date(
          new Date(start.getTime()).setHours(start.getHours() + 1)
        );
        const nCount = Math.floor(Math.random() * names.length);
        const n = Math.floor(Math.random() * colors.length);
        dateCollections.push({
          Id: id,
          Subject: names[nCount],
          StartTime: new Date(start.getTime()),
          EndTime: new Date(end.getTime()),
          IsAllDay: id % 10 ? true : false,
          EventColor: colors[n]
        });
        id++;
      }
      return dateCollections;
    }
  }
});
</script>
