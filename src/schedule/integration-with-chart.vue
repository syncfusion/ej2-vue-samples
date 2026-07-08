<template>
  <div id="action-description">
  <p>
    <strong>Fleet Management Dashboard:</strong> A modern timeline scheduler with real-time analytics visualization.
    Manage driver schedules and monitor fleet metrics through an integrated analytics dashboard.
  </p>
</div>
  <div class="col-lg-12 schedule-with-chart control-section">
    <div class="content-wrapper">
      <!-- SAME AS REFERENCE -->
      <div
        class="control-section modern-layout"
        style="display: flex; gap: 10px"
      >
        <!-- ===== Scheduler ===== -->
        <div id="scheduler" class="scheduler-wrapper">
          <ejs-schedule
            v-if="isReady"
            height="650px"
            :selectedDate="selectedDate"
            :group="group"
            :rowAutoHeight="true"
            :allowOverlap="false"
            headerIndentTemplate="#headerIndentTemplate"
            resourceHeaderTemplate="#resourceTemplate"
            :eventSettings="{ dataSource: events }"
            :actionComplete="onScheduleActionComplete"
          >
            <e-views>
              <e-view option="TimelineMonth" />
            </e-views>

            <e-resources>
              <e-resource
                field="DriverID"
                name="TruckDetails"
                :dataSource="drivers"
                textField="driver"
                idField="id"
                colorField="color"
              />
            </e-resources>
          </ejs-schedule>
        </div>

        <!-- ===== Chart ===== -->
        <div id="chart-container" class="chart-section" v-if="isReady">
          <div class="chart-header">
            <h4 class="chart-title">Analytics</h4>
            <div id="chart-ddl" class="dropdown-wrapper">
              <ejs-dropdownlist
                :dataSource="modes"
                :fields="{ text: 'text', value: 'value' }"
                :value="mode"
                @change="onModeChange"
              />
            </div>
          </div>

          <div id="chart" class="chart-area">
            <ejs-chart
              :primaryXAxis="primaryXAxis"
              :primaryYAxis="primaryYAxis"
              :legendSettings="{ visible: false }"
              :theme='theme'
              :load='load'
              :tooltip="tooltip"
              :title="chartTitle"
              :pointRender="onPointRender"
            >
              <e-series-collection>
                <e-series
                  type="Column"
                  :xName="mode === 'capacity' ? 'Truck' : 'Driver'"
                  yName="Value"
                  :dataSource="chartData"
                  :cornerRadius="{ topLeft: 10, topRight: 10 }"
                />
              </e-series-collection>
            </ejs-chart>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== Templates (same as reference) ===== -->

    <div id="resourceTemplate" style="display: none">
      <div class="template-wrap">
        <div class="room-name">${resourceData.driver}</div>
        <div class="truck-type">${resourceData.truck}</div>
        <div class="capacity">${resourceData.capacity} t</div>
      </div>
    </div>

    <div id="tooltipTemplate" style="display: none">
      <div class="template-wrap">
        <div>Name : ${resourceData.driver}</div>
        <div>Truck : ${resourceData.truck}</div>
        <div>Capacity : ${resourceData.capacity} t</div>
      </div>
    </div>

    <div id="headerIndentTemplate" style="display: none">
      <div class="template-wrap header-indent">
        <div class="room-name">Driver</div>
        <div class="truck-type">Truck</div>
        <div class="capacity">Capacity</div>
      </div>
    </div>
  </div>
  <div id="description">
    <p>
      This sample demonstrates a fleet-management solution that pairs a
      <strong>Timeline Month Scheduler</strong> with a real-time
      <strong>Analytics Chart</strong>. The left panel shows driver routes
      grouped by resource; the right panel delivers analytics for quick insights
      and decision-making.
    </p>

    <p><strong>Key components</strong></p>
    <ul>
      <li>
        <strong>Timeline Scheduler:</strong> Monthly timeline with resource
        grouping for drivers and routes.
      </li>
      <li>
        <strong>Analytics Dashboard:</strong> Three switchable views —
        <em>Trip Count</em>, <em>Truck Capacity</em>, and
        <em>Longest Trips</em>.
      </li>
      <li>
        <strong>Real-time sync:</strong> Charts update immediately on event
        create/edit/delete.
      </li>
      <li>
        <strong>Visual consistency:</strong> Chart bars inherit scheduler
        resource colors.
      </li>
    </ul>
    <p>Looking for the full Vue Scheduler component overview, features, pricing, and documentation? Visit our <a href="https://www.syncfusion.com/vue-components/vue-scheduler">Vue Scheduler</a> page.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  ScheduleComponent,
  ResourcesDirective,
  ResourceDirective,
  ViewsDirective,
  ViewDirective,
  TimelineMonth,
  Resize,
  DragAndDrop,
  ActionEventArgs,
} from '@syncfusion/ej2-vue-schedule';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  ColumnSeries,
  Category,
  Tooltip,
  Highlight,
  IPointRenderEventArgs,
  ILoadedEventArgs
} from '@syncfusion/ej2-vue-charts';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { Browser } from '@syncfusion/ej2-base';
import { loadChartTheme } from "./theme-color";

let theme = loadChartTheme();

interface ChartItem {
  Driver: string;
  Value: number;
}

export default defineComponent({
  provide: {
    schedule: [TimelineMonth, Resize, DragAndDrop],
    chart: [ColumnSeries, Category, Tooltip, Highlight],
  },

  components: {
    'ejs-schedule': ScheduleComponent,
    'e-resources': ResourcesDirective,
    'e-resource': ResourceDirective,
    'e-views': ViewsDirective,
    'e-view': ViewDirective,
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'ejs-dropdownlist': DropDownListComponent,
  },

  data() {
    return {
      theme: theme,
      isReady: false,
      chartKey: 0,
      selectedDate: new Date(2026, 0, 12),
      group: {
        resources: ['TruckDetails'],
        headerTooltipTemplate: '#tooltipTemplate'
      },

      drivers: [
        {
          id: 1,
          driver: 'Ben Smith',
          color: '#ea7a57',
          truck: 'Volvo FH16',
          capacity: 325,
        },
        {
          id: 2,
          driver: 'Sarah Johnson',
          color: '#7fa900',
          truck: 'Scania R730',
          capacity: 310,
        },
        {
          id: 3,
          driver: 'Mike Chen',
          color: '#5978ee',
          truck: 'Mercedes Actros',
          capacity: 290,
        },
        {
          id: 4,
          driver: 'Emma Davis',
          color: '#fec200',
          truck: 'MAN TGX',
          capacity: 280,
        },
        {
          id: 5,
          driver: 'Carlos Rodriguez',
          color: '#df5286',
          truck: 'DAF XF',
          capacity: 300,
        },
        {
          id: 6,
          driver: 'Olivia Wilson',
          color: '#00bdae',
          truck: 'Kenworth T680',
          capacity: 315,
        },
        {
          id: 7,
          driver: 'James Taylor',
          color: '#865fcf',
          truck: 'Peterbilt 579',
          capacity: 305,
        },
        {
          id: 8,
          driver: 'Sophia Martinez',
          color: '#1aaa55',
          truck: 'Freightliner Cascadia',
          capacity: 295,
        },
        {
          id: 9,
          driver: 'Daniel Lee',
          color: '#e56590',
          truck: 'Mack Anthem',
          capacity: 285,
        },
        {
          id: 10,
          driver: 'Ava Thompson',
          color: '#8e24aa',
          truck: 'International LT',
          capacity: 275,
        },
      ],

      events: [
        {
          Id: 1,
          Subject: 'Long haul trip',
          StartTime: new Date(2026, 0, 15, 2, 30),
          EndTime: new Date(2026, 0, 15, 7, 30),
          DriverID: 1,
        },
        {
          Id: 2,
          Subject: 'Delivery to New York',
          StartTime: new Date(2026, 0, 13, 18, 30),
          EndTime: new Date(2026, 0, 14, 6, 30),
          DriverID: 2,
        },
        {
          Id: 3,
          Subject: 'Cross-country route',
          StartTime: new Date(2026, 0, 14, 0, 40),
          EndTime: new Date(2026, 0, 14, 4, 30),
          DriverID: 3,
        },
        {
          Id: 4,
          Subject: 'Refrigerated goods',
          StartTime: new Date(2026, 0, 14, 8, 30),
          EndTime: new Date(2026, 0, 14, 19, 30),
          DriverID: 4,
        },
        {
          Id: 5,
          Subject: 'Container transport',
          StartTime: new Date(2026, 0, 14, 20, 30),
          EndTime: new Date(2026, 0, 15, 3, 30),
          DriverID: 5,
        },
        {
          Id: 6,
          Subject: 'Furniture transport',
          StartTime: new Date(2026, 0, 15, 20, 30),
          EndTime: new Date(2026, 0, 16, 10, 30),
          DriverID: 6,
        },
        {
          Id: 7,
          Subject: 'Food products',
          StartTime: new Date(2026, 0, 14, 12, 30),
          EndTime: new Date(2026, 0, 15, 9, 30),
          DriverID: 7,
        },
        {
          Id: 8,
          Subject: 'Construction materials',
          StartTime: new Date(2026, 0, 15, 16, 30),
          EndTime: new Date(2026, 0, 16, 1, 30),
          DriverID: 8,
        },
        {
          Id: 9,
          Subject: 'Medical supplies',
          StartTime: new Date(2026, 0, 15, 1, 30),
          EndTime: new Date(2026, 0, 15, 7, 30),
          DriverID: 9,
        },
        {
          Id: 9,
          Subject: 'Delivery to India',
          StartTime: new Date(2026, 0, 15, 18, 30),
          EndTime: new Date(2026, 0, 16, 6, 30),
          DriverID: 2,
        },
        {
          Id: 10,
          Subject: 'Delivery to Newyork',
          StartTime: new Date(2026, 0, 16, 8, 30),
          EndTime: new Date(2026, 0, 16, 19, 30),
          DriverID: 4,
        },
        {
          Id: 11,
          Subject: 'Refrigerated goods',
          StartTime: new Date(2026, 0, 18, 8, 30),
          EndTime: new Date(2026, 0, 18, 19, 30),
          DriverID: 4,
        },
        {
          Id: 12,
          Subject: 'Delivery to India',
          StartTime: new Date(2026, 0, 17, 20, 30),
          EndTime: new Date(2026, 0, 18, 10, 30),
          DriverID: 6,
        },
        {
          Id: 13,
          Subject: 'Deliver to UAE',
          StartTime: new Date(2026, 0, 17, 16, 30),
          EndTime: new Date(2026, 0, 18, 1, 30),
          DriverID: 8,
        },
      ],

      modes: [
        { text: 'Trip Count', value: 'tripcount' },
        { text: 'Truck Capacity', value: 'capacity' },
        { text: 'Longest Trips', value: 'longest' },
      ],

      mode: 'tripcount',
      chartData: [] as ChartItem[],
      primaryXAxis: {
        valueType: 'Category',
        labelIntersectAction: 'None',
        labelRotation: -45,
        labelAlignment: 'Far',
        tickPosition: 'Outside',
        edgeLabelPlacement: 'Shift',
      },
      tooltip: {
                enable: true,
                enableHighlight: true
              },
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.isReady = true;
      this.updateChart();
    });
  },

  methods: {
    onScheduleActionComplete(args: ActionEventArgs) {
      if (args.requestType === 'eventCreated' && Array.isArray(args.data)) {
        args.data.forEach((e: any) => {
          if (!this.events.some((ev) => ev.Id === e.Id)) {
            this.events.push(e);
          }
        });

        this.updateChart();
      }
      if (args.requestType === 'eventChanged' && Array.isArray(args.data)) {
        args.data.forEach((e: any) => {
          const index = this.events.findIndex((x) => x.Id === e.Id);
          if (index > -1) {
            this.events.splice(index, 1, e);
          }
        });
      }

      if (args.requestType === 'eventRemoved' && Array.isArray(args.data)) {
        args.data.forEach((removed: any) => {
          const index = this.events.findIndex((e) => e.Id === removed.Id);
          if (index > -1) {
            this.events.splice(index, 1);
          }
        });
      }

      this.updateChart();
    },
    load(args: ILoadedEventArgs) {
      loadChartTheme(args);
    },

    updateChart() {
      if (this.mode === 'capacity') {
        this.chartData = this.drivers.map((d) => ({
          Truck: d.truck, 
          Driver: d.driver,
          Value: d.capacity,
        }));
        return;
      }
      if (this.mode === 'longest') {
        const map: any = {};

        this.events.forEach((e) => {
          const d = this.drivers.find((x) => x.id === e.DriverID)?.driver;
          if (!d || !e.StartTime || !e.EndTime) return;

          const hours = (+e.EndTime - +e.StartTime) / 3600000;

          if (!map[d] || hours > map[d]) {
            map[d] = hours;
          }
        });

        this.chartData = this.drivers
          .map(d => ({
            Driver: d.driver,
            Value: map[d.driver] ? Math.round(map[d.driver] * 100) / 100 : 0
          }))
          .filter(d => d.Value > 0);

        return;
      }
      const c: any = {};
      this.events.forEach((e) => {
        const d = this.drivers.find((x) => x.id === e.DriverID)?.driver;
        if (d) c[d] = (c[d] || 0) + 1;
      });
      this.chartData = this.drivers
        .map(d => ({ Driver: d.driver, Value: c[d.driver] || 0 }))
        .filter(d => d.Value > 0);
    },

    onModeChange(e: any) {
      this.mode = e.value;
      this.updateChart();
    },

    onPointRender(args: IPointRenderEventArgs) {
    if (!args.point) return;
    let resource;
    if (this.mode === 'capacity') {
      resource = this.drivers.find(d => d.truck === args.point.x);
    } else {
      resource = this.drivers.find(d => d.driver === args.point.x);
    }
    if (resource?.color) {
      args.fill = resource.color;
    }
    },
  },

  computed: {
    chartTitle() {
      return this.mode === 'capacity'
        ? 'Truck Capacity'
        : this.mode === 'longest'
        ? 'Longest Trips'
        : 'Trip Count';
    },
    primaryYAxis() {
      const axis: any = {
        title:
          this.mode === 'capacity'
            ? 'Capacity (t)'
            : this.mode === 'longest'
            ? 'Duration (hours)'
            : 'Count',

        minimum: this.mode === 'capacity' ? null : 0,
        labelFormat: '{value}',
      };

      if (this.mode === 'tripcount') {
        axis.interval = 2;
      } else {
        axis.interval = null;
      }

      return axis;
    },
  },
});
</script>

<style>
.schedule-with-chart .control-section {
  background: var(--bg-card);
  border-radius: var(--border-radius);
  padding: 10px;
  overflow: hidden;
}

.schedule-with-chart .modern-layout {
  display: flex;
  gap: 16px;
  align-items: stretch !important;
  flex-wrap: wrap;
}

.schedule-with-chart .scheduler-wrapper {
  flex: 1;
  min-width: 0;
  border-radius: 10px;
  overflow: visible;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}
.schedule-with-chart .chart-section {
  flex: 0 0 360px;
  height: 650px;
  border: 2px solid #e9ecef;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: var(--transition);
  position: relative;
  overflow: visible;
}
.schedule-with-chart .chart-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  opacity: 0.3;
}
.schedule-with-chart .chart-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-bottom: 2px solid #e9ecef;
  flex-shrink: 0;
}
.schedule-with-chart .chart-title {
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 8px;
}
.schedule-with-chart .chart-title::before {
  content: '';
  width: 3px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}
.schedule-with-chart .dropdown-wrapper {
  width: 100%;
  position: relative;
}
.schedule-with-chart .dropdown-wrapper label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}
.schedule-with-chart .dropdown-wrapper .e-ddl {
  border-radius: 10px;
  border: 2px solid #e0e3e8;
  padding: 12px 14px;
  font-size: 14px;
  font-weight: 500;
  transition: var(--transition);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  color: var(--text-primary);
  box-sizing: border-box;
}

.schedule-with-chart .dropdown-wrapper .e-ddl:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.12);
}
.schedule-with-chart .dropdown-wrapper .e-ddl:focus,
.schedule-with-chart .dropdown-wrapper .e-ddl.e-active {
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1),
    0 4px 12px rgba(102, 126, 234, 0.15);
  outline: none;
}

.schedule-with-chart .chart-area {
  flex: 1;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.02) 0%,
    rgba(118, 75, 162, 0.02) 100%
  );
  border-radius: 10px;
  overflow: visible;
}
.schedule-with-chart .chart-area svg {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05));
  max-height: 100%;
  width: 100%;
  object-fit: contain;
}
.schedule-with-chart .e-schedule {
  border-radius: 10px;
  overflow: hidden;
}

.schedule-with-chart .e-schedule .e-timeline-month-view .e-resource-left-td {
  width: 195px !important;
  min-width: 195px !important;
  max-width: 195px !important;
}

/* Resource container */
.schedule-with-chart .e-schedule .e-resource-text {
  display: flex;
  padding: 0;
  margin: 0;
}

/* Header + resource rows (SINGLE HEIGHT SOURCE) */
.schedule-with-chart .e-schedule .template-wrap {
  display: flex;
  height: 100%;
}

/* Individual columns */
.schedule-with-chart .e-schedule .template-wrap > div {
  flex: 0 0 33.333%;
  height: 100%;
  line-height: 36px;
  padding-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  font-weight: 500;
  border-right: 1px solid var(--color-sf-border-light, #e5e7eb);
}

/* Remove last border */
.schedule-with-chart .e-schedule .template-wrap > div:last-child,
.schedule-with-chart .e-schedule .e-resource-text > div:last-child {
  border-right: 0;
}

/* Header styling */
.schedule-with-chart .e-schedule .header-indent > div {
  font-weight: 600;
}

.schedule-with-chart .e-schedule .e-content-wrap tr {
  height: 36px;
}

.schedule-with-chart .e-schedule .e-date-header-wrap table,
.schedule-with-chart .e-schedule .e-content-wrap table {
  table-layout: fixed;
}

.schedule-with-chart .e-schedule .e-timeline-month-view .e-resource-cells {
  padding-left: 0;
}

.schedule-with-chart .e-rtl .e-resource-text,
.schedule-with-chart .e-rtl .template-wrap,
.schedule-with-chart .e-rtl .header-indent {
  flex-direction: row-reverse;
}

.schedule-with-chart .e-rtl .e-resource-text > div,
.schedule-with-chart .e-rtl .template-wrap > div {
  direction: rtl;
  text-align: right;
}

.schedule-with-chart
  .e-schedule:not(.e-rtl)
  .e-timeline-view
  .e-resource-left-td
  .e-resource-text
  > div:last-child {
  border-right: 0;
}

.schedule-with-chart .e-schedule.e-rtl .e-timeline-view .e-resource-cells,
.schedule-with-chart
  .e-schedule.e-rtl
  .e-timeline-month-view
  .e-resource-cells {
  padding-right: 0;
}

.schedule-with-chart .e-schedule.e-rtl .template-wrap {
  text-align: right;
}
.schedule-with-chart .e-schedule:not(.e-rtl) .template-wrap > div:last-child {
  border-right: 0;
}

.fluent2-highcontrast .schedule-with-chart .e-schedule .e-resource-cells .template-wrap > div,
.fluent2-highcontrast .schedule-with-chart .e-schedule .e-timeline-view .e-resource-left-td .e-resource-text > div {
  border-color: #fff;
}

/* Tailwind light header fix */
.tailwind
  .schedule-with-chart
  .e-schedule
  .e-timeline-view
  .e-resource-left-td
  .e-resource-text
  > div,
.tailwind3
  .schedule-with-chart
  .e-schedule
  .e-timeline-view
  .e-resource-left-td
  .e-resource-text
  > div {
  background-color: #f3f4f6;
  border-color: #e5e7eb;
}

/* ========== Material 3 Dark ========== */
.material3-dark .schedule-with-chart .e-schedule .e-resource-cells .template-wrap > div,
.material3-dark .schedule-with-chart .e-schedule .e-timeline-view .e-resource-left-td .e-resource-text > div {
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

/* ========== Material Dark ========== */
.material-dark .schedule-with-chart .e-schedule .e-resource-cells .template-wrap > div,
.material-dark .schedule-with-chart .e-schedule .e-timeline-view .e-resource-left-td .e-resource-text > div {
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

.material3-dark .schedule-with-chart .e-schedule .header-indent > div {
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}
.material-dark .schedule-with-chart .e-schedule .header-indent > div {
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}


/* Chart Section Border */
.material-dark .schedule-with-chart .chart-section,
.material3-dark .schedule-with-chart .chart-section,
.fluent-dark .schedule-with-chart .chart-section,
.fluent2-dark .schedule-with-chart .chart-section,
.bootstrap-dark .schedule-with-chart .chart-section,
.bootstrap5-dark .schedule-with-chart .chart-section,
.bootstrap5_3-dark .schedule-with-chart .chart-section,
.fabric-dark .schedule-with-chart .chart-section,
.tailwind-dark .schedule-with-chart .chart-section,
.tailwind3-dark .schedule-with-chart .chart-section {
  border: 2px solid #4b5563 !important;
}


/* Chart Header Bottom Border */
.material-dark .schedule-with-chart .chart-header,
.material3-dark .schedule-with-chart .chart-header,
.fluent-dark .schedule-with-chart .chart-header,
.fluent2-dark .schedule-with-chart .chart-header,
.bootstrap-dark .schedule-with-chart .chart-header,
.bootstrap5-dark .schedule-with-chart .chart-header,
.bootstrap5_3-dark .schedule-with-chart .chart-header,
.fabric-dark .schedule-with-chart .chart-header,
.tailwind-dark .schedule-with-chart .chart-header,
.tailwind3-dark .schedule-with-chart .chart-header {
  border-bottom: 2px solid #4b5563 !important;
}


/* Dropdown Border */
.material-dark .schedule-with-chart .dropdown-wrapper .e-ddl,
.material3-dark .schedule-with-chart .dropdown-wrapper .e-ddl,
.fluent-dark .schedule-with-chart .dropdown-wrapper .e-ddl,
.fluent2-dark .schedule-with-chart .dropdown-wrapper .e-ddl,
.bootstrap-dark .schedule-with-chart .dropdown-wrapper .e-ddl,
.bootstrap5-dark .schedule-with-chart .dropdown-wrapper .e-ddl,
.bootstrap5_3-dark .schedule-with-chart .dropdown-wrapper .e-ddl,
.fabric-dark .schedule-with-chart .dropdown-wrapper .e-ddl,
.tailwind-dark .schedule-with-chart .dropdown-wrapper .e-ddl,
.tailwind3-dark .schedule-with-chart .dropdown-wrapper .e-ddl {
  border: 2px solid #4b5563 !important;
}

/* ===== FIX WHITE LINE UNDER DROPDOWN ===== */

.material-dark .schedule-with-chart .dropdown-wrapper .e-input-group,
.material3-dark .schedule-with-chart .dropdown-wrapper .e-input-group,
.bootstrap-dark .schedule-with-chart .dropdown-wrapper .e-input-group,
.bootstrap5-dark .schedule-with-chart .dropdown-wrapper .e-input-group,
.bootstrap5_3-dark .schedule-with-chart .dropdown-wrapper .e-input-group,
.fabric-dark .schedule-with-chart .dropdown-wrapper .e-input-group,
.tailwind-dark .schedule-with-chart .dropdown-wrapper .e-input-group,
.tailwind3-dark .schedule-with-chart .dropdown-wrapper .e-input-group,
.fluent-dark .schedule-with-chart .dropdown-wrapper .e-input-group,
.fluent2-dark .schedule-with-chart .dropdown-wrapper .e-input-group {
  
  border: 2px solid #4b5563 !important;  /* same as scheduler */
}

@media (max-width: 1200px) {
  .schedule-with-chart .modern-layout {
    flex-direction: column;
  }

  .schedule-with-chart .chart-section {
    width: 100%;
    max-width: 100%;
  }

  .schedule-with-chart .scheduler-wrapper {
    width: 100%;
  }
}
</style>