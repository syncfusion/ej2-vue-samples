<template>
  <div class="schedule-control-section">
    <div class="col-lg-12 control-section">
      <div class="control-wrapper auto-scheduling">
        <div class="schedule-container">
          <div class="schedule-content">
            <h5
              style="
                text-align: center;
                margin: 0;
                position: relative;
                bottom: 10px;
              "
            >
              Automated Appointment Assignment
            </h5>
            <ejs-schedule
              ref="scheduleObj"
              id="Schedule"
              :width="'100%'"
              :height="'100%'"
              :cssClass="'grid-auto-scheduling'"
              :currentView="'TimelineDay'"
              :selectedDate="selectedDate"
              :group="{ resources: ['Staff'] }"
              :views="[{ option: 'TimelineDay' }]"
              :resources="scheduleResources"
              :eventSettings="eventSettings"
              :toolbarItems="toolbarItems"
              :resourceHeaderTemplate="'resourceHeaderTemplate'"
              :allowOverlap="false"
              :allowResizing="false"
              @dragStart="onSchedulerDragStart"
              @dragStop="onSchedulerDragStop"
              @actionComplete="onSchedulerActionComplete"
              @cellClick="onSchedulerCellClick"
              @popupOpen="onSchedulerPopupOpen"
              @dataBound="onSchedulerDataBound"
              @toolbarClick="onToolbarItemClicked"
            >
              <ejs-resources-directive>
                <ejs-resource-directive
                  field="StaffId"
                  title="Staff"
                  name="Staff"
                  :allowMultiple="false"
                  :dataSource="resourceData"
                  textField="text"
                  idField="id"
                  colorField="color"
                  groupIDField="group"
                />
              </ejs-resources-directive>
              <ejs-views-directive>
                <ejs-view-directive option="TimelineDay"></ejs-view-directive>
              </ejs-views-directive>
              <template v-slot:resourceHeaderTemplate="{ data }">
                <div class="resource-header-container">
                  <div
                    class="resource-header-avatar"
                    :style="{ backgroundColor: data.resourceData.color }"
                  >
                    {{ data.resourceData.text.charAt(0) }}
                  </div>

                  <div class="resource-header-info">
                    <div class="resource-header-name">
                      {{ data.resourceData.text }}
                    </div>

                    <div class="resource-header-skills">
                      <span
                        v-for="skill in data.resourceData.skills"
                        :key="skill"
                        class="skill-badge"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>

                  <div class="resource-header-workload">
                    {{ workloadMap[data.resourceData.id] || 0 }} / 8h
                  </div>
                </div>
              </template>
            </ejs-schedule>
          </div>

          <div class="grid-content">
            <h5
              style="
                text-align: center;
                margin: 0;
                position: relative;
                bottom: 10px;
              "
            >
              Unplanned Appointments
            </h5>
            <ejs-grid
              ref="gridObj"
              id="Grid"
              cssClass="drag-grid-data"
              :dataSource="gridData"
              :width="'300px'"
              :height="'100%'"
              :allowRowDragAndDrop="true"
              :rowDropSettings="{ targetID: 'Schedule' }"
              :editSettings="gridEditSettings"
              @rowDrop="onGridRowDrop"
              @rowDrag="onGridRowDrag"
            >
              <ejs-columns-directive>
                <ejs-column-directive
                  field="Id"
                  :isPrimaryKey="true"
                  :visible="false"
                ></ejs-column-directive>
                <ejs-column-directive
                  field="Task"
                  headerText="Task"
                  :width="200"
                  template="taskTemplate"
                ></ejs-column-directive>
                <ejs-column-directive
                  field="Duration"
                  headerText="Duration"
                  :width="110"
                ></ejs-column-directive>
              </ejs-columns-directive>
              <template #taskTemplate="{ data }">
                <div class="task-template">
                  <div class="task-name">
                    {{ data.Task }}
                  </div>
                  <div class="task-skill">
                    {{ data.RequiredSkill }}
                  </div>
                </div>
              </template>
            </ejs-grid>
          </div>
        </div>
      </div>
    </div>

    <div id="action-description">
      <p>
        This demo showcases Auto Scheduling in the Scheduler with skill-based
        resource allocation, workload balancing, and automated appointment
        assignment. Automatically assign unplanned appointments to the most
        suitable doctor or nurse based on required skills, availability, and
        optimized time slot matching.
      </p>
    </div>

    <div id="description">
      <p>
        Auto Scheduling in the Scheduler helps healthcare teams efficiently
        assign patient appointments to qualified staff members. Unplanned
        appointments are listed in the grid with their required skills, while
        the Scheduler displays the current workload and availability of each
        resource.
      </p>

      <p>
        <strong>Skill-Based Assignment</strong><br />
        Appointments are automatically matched to doctors and nurses who possess
        the required skill. The scheduler ensures that only qualified resources
        can be assigned to specialized tasks such as Cardiology, Pediatrics,
        Surgery, ICU, ER, and Ward care.
      </p>

      <p>
        <strong>Workload Balancing</strong><br />
        The scheduling algorithm distributes appointments across available
        resources while respecting the configured daily workload limit. This
        helps prevent overbooking and promotes balanced utilization of staff
        members.
      </p>

      <p>
        <strong>Automatic Scheduling</strong><br />
        Clicking the <b>Auto Scheduling</b> button analyzes resource skills,
        workload capacity, and available schedule gaps to find the most
        appropriate time slot for each unplanned appointment.
      </p>

      <p>
        <strong>Interactive Scheduling</strong><br />
        Appointments can also be manually assigned by dragging records from the
        grid into the Scheduler. Skill matching, workload limits, and schedule
        conflict validation are automatically enforced during drag-and-drop
        operations.
      </p>

      <p>
        Looking for the full Vue Scheduler component overview, features,
        pricing, and documentation? Visit our
        <a
          href="https://www.syncfusion.com/scheduler-sdk/vue-scheduler"
          target="_blank"
        >
          Vue Scheduler
        </a>
        page.
      </p>
    </div>
  </div>
</template>

<script>
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  MonthAgenda,
  TimelineViews,
  TimelineMonth,
  Resize,
  DragAndDrop,
  ExcelExport,
  PDFExport,
  Toolbar,
} from '@syncfusion/ej2-vue-schedule';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Selection,
  Edit,
  Sort,
  Filter,
  ExcelExport as GridExcelExport,
  PDFExport as GridPDFExport,
  RowDD,
} from '@syncfusion/ej2-vue-grids';
import { closest } from '@syncfusion/ej2-base';

export default {
  provide: {
    schedule: [TimelineViews, Resize, DragAndDrop, Toolbar],
    grid: [RowDD, Page, Selection, Sort, Edit],
  },

  name: 'AutoScheduling',
  components: {
    'ejs-schedule': ScheduleComponent,
    'ejs-views-directive': ViewsDirective,
    'ejs-view-directive': ViewDirective,
    'ejs-resources-directive': ResourcesDirective,
    'ejs-resource-directive': ResourceDirective,
    'ejs-grid': GridComponent,
    'ejs-columns-directive': ColumnsDirective,
    'ejs-column-directive': ColumnDirective,
  },

  data() {
    return {
      workloadMap: {},
      toolbarItems: [
        { name: 'Previous' },
        { name: 'Next' },
        { name: 'DateRangeText' },
        { name: 'Today', align: 'Right' },
        {
          name: 'Custom',
          align: 'Right',
          template:
            '<button id="autoScheduling" class="e-btn e-primary">Auto Scheduling</button>',
        },
      ],
      MAX_DAILY_WORKLOAD: 8,
      draggedEventData: null,
      scheduledAppointments: new Set(),
      selectedDate: new Date(),

      resourceData: [
        {
          text: 'Smith',
          id: 1,
          color: '#df5286',
          group: 'Doctor',
          skills: ['Cardiology', 'General'],
          skillsText: 'Cardiology, General',
        },
        {
          text: 'Lee',
          id: 2,
          color: '#7fa900',
          group: 'Doctor',
          skills: ['Pediatrics', 'General'],
          skillsText: 'Pediatrics, General',
        },
        {
          text: 'Patel',
          id: 3,
          color: '#ea7a57',
          group: 'Doctor',
          skills: ['Surgery', 'General'],
          skillsText: 'Surgery, General',
        },
        {
          text: 'Amy',
          id: 4,
          color: '#007bff',
          group: 'Nurse',
          skills: ['ICU', 'Ward'],
          skillsText: 'ICU, Ward',
        },
        {
          text: 'John',
          id: 5,
          color: '#00bdae',
          group: 'Nurse',
          skills: ['ER', 'Ward'],
          skillsText: 'ER, Ward',
        },
        {
          text: 'Sara',
          id: 6,
          color: '#f57b42',
          group: 'Nurse',
          skills: ['ICU', 'ER'],
          skillsText: 'ICU, ER',
        },
      ],

      gridData: [
        {
          Id: 101,
          Task: 'Cardiology Consultation',
          Duration: '2 Hours',
          RequiredSkill: 'Cardiology',
        },
        {
          Id: 102,
          Task: 'Pediatric Health Assessment',
          Duration: '1 Hour',
          RequiredSkill: 'Pediatrics',
        },
        {
          Id: 103,
          Task: 'Pre-Surgical Evaluation',
          Duration: '3 Hours',
          RequiredSkill: 'Surgery',
        },
        {
          Id: 104,
          Task: 'Critical Care Monitoring',
          Duration: '2 Hours',
          RequiredSkill: 'ICU',
        },
        {
          Id: 105,
          Task: 'Emergency Patient Intake',
          Duration: '1 Hour',
          RequiredSkill: 'ER',
        },
        {
          Id: 106,
          Task: 'Inpatient Care Management',
          Duration: '2 Hours',
          RequiredSkill: 'Ward',
        },
        {
          Id: 107,
          Task: 'General Medical Examination',
          Duration: '1 Hour',
          RequiredSkill: 'General',
        },
        {
          Id: 108,
          Task: 'Emergency Case Assessment',
          Duration: '1 Hour',
          RequiredSkill: 'ER',
        },
      ],

      scheduleResources: [
        {
          field: 'StaffId',
          title: 'Staff',
          name: 'Staff',
          allowMultiple: false,
          dataSource: null,
          textField: 'text',
          idField: 'id',
          colorField: 'color',
          groupIDField: 'group',
        },
      ],

      eventSettings: {
        dataSource: [],
      },

      gridEditSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
      },
    };
  },

  computed: {
    scheduleObj() {
      return this.$refs.scheduleObj?.ej2Instances;
    },

    gridObj() {
      return this.$refs.gridObj?.ej2Instances;
    },
  },

  mounted() {
    this.initializeScheduleResources();
    this.initializeScheduleEvents();
  },

  methods: {
    initializeScheduleResources() {
      this.scheduleResources[0].dataSource = this.resourceData;
    },

    initializeScheduleEvents() {
      this.eventSettings = {
        dataSource: this.getInitialEvents(),
      };
    },

    getInitialEvents() {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return [
        {
          Id: 1,
          Subject: 'Cardiac Checkup - Mr. Johnson',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            9,
            0
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            11,
            30
          ),
          IsAllDay: false,
          StaffId: 1,
          RequiredSkill: 'Cardiology',
        },
        {
          Id: 2,
          Subject: 'Consultation - ECG Review',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            12,
            0
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            14,
            0
          ),
          IsAllDay: false,
          StaffId: 1,
          RequiredSkill: 'Cardiology',
        },
        {
          Id: 3,
          Subject: 'Child Wellness Exam - Emma',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            9,
            0
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            11,
            0
          ),
          IsAllDay: false,
          StaffId: 2,
          RequiredSkill: 'Pediatrics',
        },
        {
          Id: 4,
          Subject: 'Vaccination Clinic',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            11,
            30
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            13,
            0
          ),
          IsAllDay: false,
          StaffId: 2,
          RequiredSkill: 'General',
        },
        {
          Id: 5,
          Subject: 'Pre-Op Assessment',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            9,
            0
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            10,
            30
          ),
          IsAllDay: false,
          StaffId: 3,
          RequiredSkill: 'Surgery',
        },
        {
          Id: 6,
          Subject: 'Surgical Consultation - Mrs. Smith',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            11,
            0
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            13,
            30
          ),
          IsAllDay: false,
          StaffId: 3,
          RequiredSkill: 'Surgery',
        },
        {
          Id: 7,
          Subject: 'ICU Patient Monitoring',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            9,
            30
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            12,
            30
          ),
          IsAllDay: false,
          StaffId: 4,
          RequiredSkill: 'ICU',
        },
        {
          Id: 8,
          Subject: 'Vitals Check - ICU Ward',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            13,
            0
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            14,
            0
          ),
          IsAllDay: false,
          StaffId: 4,
          RequiredSkill: 'Ward',
        },
        {
          Id: 9,
          Subject: 'ER Triage - Patient Intake',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            9,
            0
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            11,
            0
          ),
          IsAllDay: false,
          StaffId: 5,
          RequiredSkill: 'ER',
        },
        {
          Id: 10,
          Subject: 'Emergency Response Team',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            15,
            30
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            17,
            0
          ),
          IsAllDay: false,
          StaffId: 5,
          RequiredSkill: 'ER',
        },
        {
          Id: 11,
          Subject: 'ICU Support & Monitoring',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            11,
            0
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            13,
            0
          ),
          IsAllDay: false,
          StaffId: 6,
          RequiredSkill: 'ICU',
        },
        {
          Id: 12,
          Subject: 'ER Support - Critical Care',
          StartTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            16,
            0
          ),
          EndTime: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            17,
            30
          ),
          IsAllDay: false,
          StaffId: 6,
          RequiredSkill: 'ER',
        },
      ];
    },

    parseDuration(duration) {
      return parseInt(duration.split(' ')[0], 10);
    },
    onToolbarItemClicked(args) {
      // Handle toolbar item clicks (for standard items)
      if (
        args.item &&
        (args.item.id === 'autoScheduling' ||
          args.item.text === 'Auto Scheduling')
      ) {
        this.handleAutoScheduling();
      }
    },

    safeDeleteGridRecord(record) {
      if (!record) {
        return;
      }

      this.gridData = this.gridData.filter((item) => item.Id !== record.Id);

      if (this.gridObj) {
        this.gridObj.dataSource = this.gridData;
        this.gridObj.refresh();
      }
    },

    getResourceWorkloadForDate(resourceId, date, excludeEventId) {
      let totalHours = 0;
      const events = this.scheduleObj?.getEvents?.() || [];

      events.forEach((event) => {
        if (event.StaffId === resourceId && excludeEventId !== event.Id) {
          const eventDate = new Date(event.StartTime);
          eventDate.setHours(0, 0, 0, 0);
          const targetDate = new Date(date);
          targetDate.setHours(0, 0, 0, 0);

          if (eventDate.getTime() === targetDate.getTime()) {
            const startHours = new Date(event.StartTime).getHours();
            const startMinutes = new Date(event.StartTime).getMinutes();
            const endHours = new Date(event.EndTime).getHours();
            const endMinutes = new Date(event.EndTime).getMinutes();

            const startTotalMinutes = startHours * 60 + startMinutes;
            const endTotalMinutes = endHours * 60 + endMinutes;
            const durationMinutes = endTotalMinutes - startTotalMinutes;
            const durationHours = durationMinutes / 60;

            totalHours += durationHours;
          }
        }
      });

      return totalHours;
    },

    isTimeSlotAvailableForResource(resourceId, startTime, endTime) {
      const events = this.scheduleObj.getEvents();

      for (const event of events) {
        if (event.StaffId === resourceId) {
          const eventStart = new Date(event.StartTime).getTime();
          const eventEnd = new Date(event.EndTime).getTime();
          const slotStart = new Date(startTime).getTime();
          const slotEnd = new Date(endTime).getTime();

          if (!(slotEnd <= eventStart || slotStart >= eventEnd)) {
            return false;
          }
        }
      }

      return true;
    },
    updateWorkloadMap() {
      if (!this.scheduleObj) {
        return;
      }

      const workloadMap = {};

      this.resourceData.forEach((resource) => {
        workloadMap[resource.id] = this.getResourceWorkloadForDate(
          resource.id,
          this.scheduleObj.selectedDate
        );
      });

      this.workloadMap = workloadMap;
    },

    getEventSkill(eventData) {
      if (eventData && eventData.RequiredSkill) {
        return eventData.RequiredSkill;
      }
      return null;
    },

    findAvailableTimeSlotForResource(
      resourceId,
      durationHours,
      date,
      tempScheduledEvents
    ) {
      const workingHourStart = 9;
      const workingHourEnd = 23;
      const timeSlots = [];

      for (let hour = workingHourStart; hour < workingHourEnd; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const slotStart = new Date(date);
          slotStart.setHours(hour, minute, 0, 0);
          const slotEnd = new Date(slotStart);
          slotEnd.setHours(
            slotStart.getHours() + Math.floor(durationHours),
            slotStart.getMinutes() + (durationHours % 1) * 60
          );

          if (slotEnd.getHours() > workingHourEnd) {
            continue;
          }

          let isAvailable = true;

          const events = this.scheduleObj.getEvents();
          for (const event of events) {
            if (event.StaffId === resourceId) {
              const eventStart = new Date(event.StartTime).getTime();
              const eventEnd = new Date(event.EndTime).getTime();
              const slotStartTime = slotStart.getTime();
              const slotEndTime = slotEnd.getTime();

              if (!(slotEndTime <= eventStart || slotStartTime >= eventEnd)) {
                isAvailable = false;
                break;
              }
            }
          }

          if (tempScheduledEvents) {
            for (const tempEvent of tempScheduledEvents) {
              if (tempEvent.StaffId !== resourceId) {
                continue;
              }

              const eventStart = new Date(tempEvent.StartTime).getTime();
              const eventEnd = new Date(tempEvent.EndTime).getTime();
              const slotStartTime = slotStart.getTime();
              const slotEndTime = slotEnd.getTime();

              if (!(slotEndTime <= eventStart || slotStartTime >= eventEnd)) {
                isAvailable = false;
                break;
              }
            }
          }

          if (isAvailable) {
            timeSlots.push({
              startTime: slotStart,
              endTime: slotEnd,
            });
          }
        }
      }

      if (timeSlots.length === 0) {
        return null;
      }

      for (const slot of timeSlots) {
        let workload = this.getResourceWorkloadForDate(
          resourceId,
          slot.startTime
        );

        // Include events scheduled during the current auto-scheduling run
        if (tempScheduledEvents) {
          tempScheduledEvents.forEach((event) => {
            if (event.StaffId === resourceId) {
              workload +=
                (new Date(event.EndTime) - new Date(event.StartTime)) /
                (1000 * 60 * 60);
            }
          });
        }

        if (workload + durationHours <= this.MAX_DAILY_WORKLOAD) {
          return slot;
        }
      }

      return null;
    },

    handleAutoScheduling() {
      const tempScheduledEvents = [];
      const workloadMap = {};
      const scheduleDate = this.scheduleObj.selectedDate || new Date();

      const dayStart = new Date(scheduleDate);
      dayStart.setHours(0, 0, 0, 0);

      this.resourceData.forEach((resource) => {
        workloadMap[resource.id] = this.getResourceWorkloadForDate(
          resource.id,
          dayStart
        );
      });

      const appointmentsToSchedule = this.gridData.filter((item) => {
        const key = item.Task + '|' + item.RequiredSkill;
        return !this.scheduledAppointments.has(key);
      });

      const allEvents = this.scheduleObj.getEvents() || [];

      let nextEventId = allEvents.length
        ? Math.max(...allEvents.map((e) => e.Id || 0)) + 1
        : 1;

      appointmentsToSchedule.forEach((appt) => {
        const matchingResources = this.resourceData.filter((resource) =>
          resource.skills.includes(appt.RequiredSkill)
        );

        const durationHours = this.parseDuration(appt.Duration);

        let bestResource = null;
        let bestSlot = null;
        let bestWorkload = Infinity;

        matchingResources.forEach((resource) => {
          const workload = workloadMap[resource.id] || 0;

          if (workload + durationHours > this.MAX_DAILY_WORKLOAD) {
            return;
          }

          const slot = this.findAvailableTimeSlotForResource(
            resource.id,
            durationHours,
            dayStart,
            tempScheduledEvents
          );

          if (!slot) {
            return;
          }

          if (workload < bestWorkload) {
            bestResource = resource;
            bestSlot = slot;
            bestWorkload = workload;
          }
        });

        if (!bestResource || !bestSlot) {
          return;
        }

        const eventData = {
          Id: nextEventId++,
          Subject: appt.Task,
          StartTime: bestSlot.startTime,
          EndTime: bestSlot.endTime,
          IsAllDay: false,
          StaffId: bestResource.id,
          RequiredSkill: appt.RequiredSkill,
        };

        this.scheduleObj.addEvent(eventData);

        tempScheduledEvents.push(eventData);

        workloadMap[bestResource.id] = bestWorkload + durationHours;

        this.scheduledAppointments.add(appt.Task + '|' + appt.RequiredSkill);
      });

      this.gridData = this.gridData.filter((item) => {
        const key = item.Task + '|' + item.RequiredSkill;
        return !this.scheduledAppointments.has(key);
      });

      this.gridObj.dataSource = this.gridData;
      this.gridObj.dataBind();

      this.scheduleObj.refreshTemplates('resourceHeaderTemplate');
    },

    refreshResourceHeaderTemplates() {
      if (this.scheduleObj) {
        this.scheduleObj.refreshTemplates('resourceHeaderTemplate');
      }
    },

    onSchedulerDragStart(args) {
      this.draggedEventData = args.data;
    },

    onSchedulerDragStop(args) {
      if (!args.data) {
        return;
      }

      const draggedEvent = args.data;
      const targetResourceId = args.data.StaffId;

      if (!targetResourceId) {
        args.cancel = true;
        return;
      }

      const requiredSkill = this.getEventSkill(draggedEvent);
      const targetResource = this.resourceData.find(
        (r) => r.id === targetResourceId
      );

      if (requiredSkill && targetResource) {
        if (
          !targetResource.skills ||
          !targetResource.skills.includes(requiredSkill)
        ) {
          args.cancel = true;
          this.draggedEventData = null;
          return;
        }
      }

      const startTime = new Date(draggedEvent.StartTime);
      const endTime = new Date(draggedEvent.EndTime);
      const durationHours = (endTime - startTime) / (1000 * 60 * 60);

      const currentWorkload = this.getResourceWorkloadForDate(
        targetResourceId,
        startTime,
        draggedEvent.Id
      );

      if (currentWorkload + durationHours > this.MAX_DAILY_WORKLOAD) {
        args.cancel = true;
        this.draggedEventData = null;
        return;
      }

      this.draggedEventData = null;
    },

    onSchedulerActionComplete(args) {
      if (
        args.requestType === 'eventCreated' ||
        args.requestType === 'eventChanged' ||
        args.requestType === 'eventRemoved'
      ) {
        this.updateWorkloadMap();
      }
    },
    onSchedulerCellClick(args) {
      args.cancel = true;
    },

    onSchedulerPopupOpen(args) {
        if (args.type === 'Editor') {
            args.cancel = true;
        }
    },

    onSchedulerDataBound() {
      this.updateWorkloadMap();
      const btn = document.getElementById('autoScheduling');

      if (btn && !btn.dataset.bound) {
        btn.dataset.bound = 'true';

        btn.addEventListener('click', () => {
          this.handleAutoScheduling();
        });
      }
    },

    onGridRowDrag(args) {
      args.cancel = true;
    },

    onGridRowDrop(args) {
      args.cancel = true;

      const scheduleElement = closest(args.target, '.e-content-wrap');

      if (!scheduleElement || !args.target.classList.contains('e-work-cells')) {
        return;
      }

      const cellData = this.scheduleObj.getCellDetails(args.target);

      const resourceDetails = this.scheduleObj.getResourcesByIndex(
        cellData.groupIndex
      );

      const draggedRecord = args.data[0];

      const durationHours = this.parseDuration(draggedRecord.Duration);

      const requiredSkill = draggedRecord.RequiredSkill;

      if (
        requiredSkill &&
        resourceDetails.resourceData.skills.indexOf(requiredSkill) === -1
      ) {
        return;
      }

      const startTime = new Date(cellData.startTime);

      const endTime = new Date(startTime.getTime() + durationHours * 3600000);

      const currentWorkload = this.getResourceWorkloadForDate(resourceDetails.resourceData.id, startTime);

      if (currentWorkload + durationHours > this.MAX_DAILY_WORKLOAD)
      {
        return;
      }

      const newEvent = {
        Id: this.scheduleObj.getEventMaxID() + 1,
        Subject: draggedRecord.Task,
        StartTime: startTime,
        EndTime: endTime,
        IsAllDay: false,
        StaffId: resourceDetails.resourceData.id,
        RequiredSkill: requiredSkill,
      };

      this.scheduleObj.addEvent(newEvent);

      this.safeDeleteGridRecord(draggedRecord);
    },
  },
};
</script>

<style>
.grid-auto-scheduling.e-schedule .skill-badge {
  display: inline-block;
  background-color: #e0e7ff !important;
  color: #4f46e5 !important;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 500;
  margin: 1px 2px;
  white-space: nowrap;
}

.grid-auto-scheduling.e-schedule .resource-header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
}

.grid-auto-scheduling.e-schedule .resource-header-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 16px;
  flex: 0 0 40px;
}

.grid-auto-scheduling.e-schedule .resource-header-info {
  flex: 1 1 auto;
  min-width: 0;
}

.grid-auto-scheduling.e-schedule .resource-header-name {
  font-weight: bold;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.grid-auto-scheduling.e-schedule .resource-header-skills {
  display: flex;
  gap: 2px;
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.grid-auto-scheduling.e-schedule .resource-header-workload {
  font-weight: bold;
  font-size: 13px;
  white-space: nowrap;
  margin-right: 8px;
  flex: 0 0 auto;
}

.grid-auto-scheduling.e-schedule
  .e-resource-cells
  .e-resource-text
  .resource-header-container {
  display: flex;
  align-items: center;
}

.grid-auto-scheduling.e-schedule
  .e-resource-cells
  .e-resource-text
  .resource-header-avatar {
  margin-top: 0;
}

.grid-auto-scheduling.e-schedule .e-resource-left-td {
  min-width: 280px;
  width: 280px;
  max-width: 280px;
}

.auto-scheduling .schedule-container {
  display: flex;
  flex: 1;
  gap: 10px;
  padding: 16px 10px 10px;
  height: 650px;
  box-sizing: border-box;
}

.auto-scheduling .schedule-container .schedule-content {
  flex: 1;
  min-width: 0;
}

.grid-auto-scheduling.e-schedule .e-timeline-view .e-resource-left-panel {
  min-width: 280px;
  width: 280px;
  max-width: 280px;
}

.drag-grid-data .task-template {
  display: flex;
  flex-direction: column;
}

.drag-grid-data .task-name {
  font-weight: 600;
  font-size: 13px;
}

.drag-grid-data .task-skill {
  display: inline-block;
  width: fit-content;
  padding: 2px 8px;
  border-radius: 3px;
  background-color: #e0e7ff;
  color: #4f46e5;
  font-size: 11px;
  font-weight: 500;
}
.grid-auto-scheduling .e-quick-popup-wrapper .e-event-edit,
.grid-auto-scheduling .e-quick-popup-wrapper .e-edit {
      visibility: hidden;
}
</style>
