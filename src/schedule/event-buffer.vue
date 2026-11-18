<template>
  <div class="schedule-vue-sample">
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-dialog
          ref="dialogObj"
          :visible="false"
          :isModal="true"
          width="320px"
          header="Alert"
          :showCloseIcon="true"
          :buttons="dialogButtons"
          content="Events cannot be scheduled in this operating room because it does not match the required specialty."
        >
        </ejs-dialog>

        <ejs-schedule
          ref="scheduleObj"
          cssClass="medical-scheduler"
          width="100%"
          height="650px"
          :selectedDate="selectedDate"
          :currentView="currentView"
          :allowOverlap="false"
          :navigating="onNavigating"
          :workHours="workHours"
          :group="group"
          :timeScale="timeScale"
          :eventSettings="eventSettings"
          resourceHeaderTemplate="#resourceTemplate"
          :headerIndentTemplate="'headerIndentTemplate'"
          :dragStop="onDragStop"
          :actionBegin="onActionBegin"
        >
          <e-views>
            <e-view option="Day"></e-view>
            <e-view option="TimelineDay"></e-view>
            <e-view option="TimelineWeek"></e-view>
          </e-views>

          <e-resources>
            <e-resource
              field="RoomId"
              title="Operating Room"
              name="Rooms"
              :dataSource="roomData"
              textField="RoomText"
              idField="RoomId"
              colorField="RoomColor"
            >
            </e-resource>
          </e-resources>

          <template v-slot:bufferTemplate="{ data }">
            <template v-if="getBufferDuration(data) >= 10">
              <!-- Day View -->
              <div v-if="currentView === 'Day'" class="buffer-minimal">
                <img
                  v-if="getBufferDuration(data) >= 20"
                  :src="getBufferIcon(data)"
                  class="buffer-svg-icon"
                  alt=""
                />

                <span class="buffer-duration">
                  {{ getBufferDuration(data) }} min
                </span>
              </div>

              <!-- TimelineDay / TimelineWeek -->
              <div v-else class="buffer-minimal">
                <img
                  :src="getBufferIcon(data)"
                  class="buffer-svg-icon"
                  alt=""
                />

                <span
                  v-if="getBufferDuration(data) > 20"
                  class="buffer-duration"
                >
                  {{ getBufferDuration(data) }} min
                </span>
              </div>
            </template>
          </template>

          <template v-slot:headerIndentTemplate>
            <div v-if="currentView !== 'Day'" class="resource-header-title">
              <div class="resource-header-main">Operating Rooms</div>

              <div class="resource-header-sub">Surgery Suites</div>
            </div>
          </template>
        </ejs-schedule>

        <div id="resourceTemplate" style="display: none">
          <div class="medical-resource">
            <div class="medical-resource-icon">${resourceData.Icon}</div>

            <div class="medical-resource-content">
              <div class="medical-resource-specialty">
                ${resourceData.Specialty}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="action-description">
      <p>
        This surgery scheduling demo highlights efficient operating room
        management using configurable pre-procedure and post-procedure buffer
        times within the Scheduler. Plan surgeries with dedicated preparation
        and recovery periods, reduce scheduling overlaps, maximize operating
        room utilization, and streamline healthcare appointment coordination.
      </p>
    </div>
    <div id="description">
      <p>
        The
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/api/schedule/eventSettings#enablebuffer"
        >
          <code>enableBuffer</code>
        </a>
        property of <code>eventSettings</code> activates the buffer feature. The
        <code>bufferBefore</code> and <code>bufferAfter</code> field mappings
        (in minutes) are configured through <code>eventSettings.fields</code>,
        and a custom <code>bufferTemplate</code> renders an icon and the buffer
        duration inside the buffer pill. Conflict detection with
        <code>allowOverlap=false</code>
        also flags the buffered reserved range, and drag-and-drop is restricted
        to the room matching the event&rsquo;s required specialty.
      </p>
      <p>
        Buffers are supported across timeline and vertical time-grid views (Day,
        Week, WorkWeek, Timeline Day, Timeline Week, Timeline WorkWeek) and
        re-anchor on the EVENT edges during drag and resize previews.
      </p>
      <p>
        Looking for the full Vue Scheduler component overview, features,
        pricing, and documentation? Visit our
        <a
          target="_blank"
          href="https://www.syncfusion.com/vue-components/vue-scheduler"
        >
          Vue Scheduler</a
        >
        component page.
      </p>
    </div>
  </div>
</template>

<style>
.medical-resource {
  display: flex;
  align-items: center;
  height: 50px;
  gap: 16px;
  padding-left: 16px;
  box-sizing: border-box;
}

.medical-scheduler.e-schedule .e-resource-cells {
  height: 70px !important;
}

.medical-scheduler.e-schedule .e-buffer-app {
  display: flex;
  align-items: center;
  justify-content: center;
}

.medical-scheduler.e-schedule img {
  height: 35px;
  width: 35px;
}

/* Buffer pill (before/after) */
.buffer-minimal {
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  overflow: hidden;
}

.e-day-wrapper .buffer-minimal {
  width: 100%;
  height: fit-content;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 6px;
  overflow: hidden;
}

.buffer-svg-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.buffer-duration {
  font-size: 10px;
  font-weight: 600;
  white-space: nowrap;
}

/* Small buffers: keep only the icon visible, but allow ellipsis on the duration */
.buffer-minimal .buffer-duration {
  overflow: hidden;
  text-overflow: ellipsis;
}

.buffer-info {
  min-width: 0;
  overflow: hidden;
}

/* Resource header (left panel) */
.medical-resource-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  flex-shrink: 0;
}

.medical-resource-content {
  min-width: 0;
}

.medical-resource-name {
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
}

.medical-resource-specialty {
  font-size: 11px;
  line-height: 16px;
}

/* Empty header (top-left) */
.resource-header-title {
  padding: 12px 16px;
}

.resource-header-main {
  font-size: 15px;
  font-weight: 600;
}

.resource-header-sub {
  margin-top: 2px;
  font-size: 11px;
}
</style>

<script>
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  Day,
  TimelineViews,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-vue-schedule';

import { DialogComponent } from '@syncfusion/ej2-vue-popups';

export default {
  components: {
    'ejs-schedule': ScheduleComponent,
    'e-views': ViewsDirective,
    'e-view': ViewDirective,
    'e-resources': ResourcesDirective,
    'e-resource': ResourceDirective,
    'ejs-dialog': DialogComponent,
  },

  provide: {
    schedule: [Day, TimelineViews, Resize, DragAndDrop],
  },

  data() {
    return {
      selectedDate: new Date(),

      currentView: 'TimelineDay',

      workHours: {
        start: '08:00',
        end: '18:00',
      },

      timeScale: {
        enable: true,
        interval: 60,
        slotCount: 4,
      },

      group: {
        resources: ['Rooms'],
      },

      roomData: [
        {
          RoomId: 1,
          RoomText: 'Cardiac Surgery Suite',
          Specialty: 'Cardiology',
          RoomColor: '#ef4444',
          Icon: '❤️',
        },
        {
          RoomId: 2,
          RoomText: 'Orthopedic Center',
          Specialty: 'Orthopedics',
          RoomColor: '#2563eb',
          Icon: '🦴',
        },
        {
          RoomId: 3,
          RoomText: 'Neuroscience Unit',
          Specialty: 'Neurology',
          RoomColor: '#8b5cf6',
          Icon: '🧠',
        },
        {
          RoomId: 4,
          RoomText: 'Pediatric Care Suite',
          Specialty: 'Pediatrics',
          RoomColor: '#10b981',
          Icon: '👶',
        },
        {
          RoomId: 5,
          RoomText: 'Emergency Trauma Bay',
          Specialty: 'Emergency',
          RoomColor: '#f97316',
          Icon: '🚑',
        },
        {
          RoomId: 6,
          RoomText: 'Diagnostic Imaging Center',
          Specialty: 'Radiology',
          RoomColor: '#0ea5e9',
          Icon: '🔬',
        },
      ],

      dialogButtons: [
        {
          buttonModel: {
            content: 'Ok',
            isPrimary: true,
          },
          click: () => {
            this.$refs.dialogObj.hide();
          },
        },
      ],

      eventSettings: {
        enableBuffer: true,
        dataSource: [],
        bufferTemplate: 'bufferTemplate',
        fields: {
          bufferBefore: { name: 'bufferBefore' },
          bufferAfter: { name: 'bufferAfter' },
        },
      },
    };
  },

  mounted() {
    const events = this.generateAllEvents(this.selectedDate);

    this.eventSettings = {
      ...this.eventSettings,
      dataSource: events,
    };
  },

  methods: {
    resourceHeaderTemplate() {
      return {
        template: this.$slots.resourceHeaderTemplate,
      };
    },

    bufferTemplate() {
      return {
        template: this.$slots.bufferTemplate,
      };
    },
    getBufferDuration(args) {
      const isBefore = args.bufferType === 'before';

      return isBefore ? args.data.bufferBefore : args.data.bufferAfter;
    },

    getBufferIcon(args) {
      const isBefore = args.bufferType === 'before';

      return isBefore
        ? 'https://ej2.syncfusion.com/demos/src/schedule/images/health-day.svg'
        : 'https://ej2.syncfusion.com/demos/src/schedule/images/cancer-day.svg';
    },

    generateEvents(date) {
      const events = [];
      let id = date.getDate() * 100;

      const subjects = {
        Cardiology: ['Cardiac Workup', 'Heart Valve Assessment', 'Stress Test', 'ECG Review',],
        Orthopedics: ['Knee Replacement', 'Bone Fracture Assessment', 'Spinal Workup',],
        Neurology: ['Neurology Workup', 'Brain MRI Review'],
        Pediatrics: ['Child Wellness Review', 'Immunization Follow-up'],
        Emergency: ['Emergency Care', 'Acute Care', 'Trauma Care', 'Critical Care'],
        Radiology: ['CT Scan Analysis', 'MRI Scan Review'],
      };

      this.roomData.forEach((room) => {
        const roomSubjects = subjects[room.Specialty] || ['Procedure'];

        const startPatterns = [
          { hour: 9, minute: 0 },
          { hour: 9, minute: 15 },
          { hour: 9, minute: 30 },
          { hour: 9, minute: 45 },
        ];

        const secondPatterns = [
          { hour: 11, minute: 0 },
          { hour: 11, minute: 15 },
          { hour: 11, minute: 30 },
          { hour: 11, minute: 45 },
        ];

        const pattern1 =
          startPatterns[Math.floor(Math.random() * startPatterns.length)];

        const pattern2 =
          secondPatterns[Math.floor(Math.random() * secondPatterns.length)];

        const createEvent = (startHour, startMinute) => {
          const duration = [75, 90][Math.floor(Math.random() * 2)];

          const bufferBefore = [30, 45, 60][Math.floor(Math.random() * 3)];

          const bufferAfter = [30, 45, 60][Math.floor(Math.random() * 3)];

          const subject =
            roomSubjects[Math.floor(Math.random() * roomSubjects.length)];

          const startTime = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            startHour,
            startMinute
          );

          const endTime = new Date(startTime.getTime() + duration * 60000);

          return {
            Id: id++,
            Subject: subject,
            StartTime: startTime,
            EndTime: endTime,
            IsAllDay: false,
            RoomId: room.RoomId,
            RequiredSkill: room.Specialty,
            bufferBefore: bufferBefore,
            bufferAfter: bufferAfter,
          };
        };

        events.push(createEvent(pattern1.hour, pattern1.minute));

        events.push(createEvent(pattern2.hour, pattern2.minute));
      });

      return events;
    },

    generateAllEvents(selectedDate) {
      const previousDate = new Date(selectedDate);

      previousDate.setDate(previousDate.getDate() - 1);

      const nextDate = new Date(selectedDate);

      nextDate.setDate(nextDate.getDate() + 1);

      return [
        ...this.generateEvents(previousDate),
        ...this.generateEvents(selectedDate),
        ...this.generateEvents(nextDate),
      ];
    },

    onDragStop(args) {
      const data = Array.isArray(args.data) ? args.data[0] : args.data;

      const room = this.roomData.find((r) => r.RoomId === data.RoomId);

      if (!room) {
        return;
      }

      if (room.Specialty !== data.RequiredSkill) {
        args.cancel = true;

        this.$refs.dialogObj.show();
      }
    },
    onNavigating(args) {
      if (args.action === 'view') {
        this.currentView = args.currentView;
      }
    },

    onActionBegin(args) {
      if (args.requestType === 'eventCreate') {
        const records = Array.isArray(args.data) ? args.data : [args.data];

        records.forEach((event) => {
          const room = this.roomData.find((r) => r.RoomId === event.RoomId);

          if (room) {
            event.RequiredSkill = room.Specialty;
          }
        });
      }
    },
  },
};
</script>
