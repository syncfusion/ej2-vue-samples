<template>
  <div class="schedule-vue-sample">
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <div class="schedule-container" style="width: 100%">
          <ejs-schedule
            ref="scheduleRef"
            cssClass="custom-scheduler"
            height="600px"
            :selectedDate="selectedDate"
            :group="group"
            :eventSettings="eventSettings"
            :popupOpen="onPopupOpen"
            :popupClose="onPopupClose"
            :eventRendered="onEventRendered"
            :eventCreate="onEventCreate"
            :eventChange="onEventChange"
            editorTemplate="editorTemplate"
            headerIndentTemplate="#headerIndentTemplate"
            resourceHeaderTemplate="#resourceTemplate"
          >
            <e-views>
              <e-view option="TimelineDay" />
            </e-views>

            <e-resources>
              <e-resource
                field="StaffId"
                name="Staff"
                :dataSource="staffData"
                textField="text"
                idField="id"
                colorField="color"
              >
              </e-resource>
            </e-resources>

            <!-- ✅ KEY FIX: Force re-render with :key binding -->
            <template v-slot:editorTemplate="{ data }">
              <div>
                <table
                  class="cascading-editor-dialog"
                  width="100%"
                  cellpadding="5"
                >
                  <tbody>
                    <tr>
                      <td class="e-textlabel">Name</td>
                      <td colspan="4">
                        <input
                          id="Subject"
                          class="e-field e-input"
                          type="text"
                          name="Subject"
                          style="width: 100%"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td class="e-textlabel">Type</td>
                      <td colspan="4">
                        <ejs-dropdownlist
                          id="Type"
                          class="e-field"
                          :dataSource="typeOptions"
                          name="Type"
                          @change="onTypeChange"
                        />
                      </td>
                    </tr>

                    <tr v-if="isMeetingType">
                      <td class="e-textlabel">Floor</td>
                      <td colspan="4">
                        <ejs-dropdownlist
                          id="FloorId"
                          class="e-field"
                          :dataSource="floors"
                          :fields="{ text: 'name', value: 'id' }"
                          name="FloorId"
                          @change="onFloorChange"
                        />
                      </td>
                    </tr>

                    <tr v-if="isMeetingType">
                      <td class="e-textlabel">Room</td>
                      <td colspan="4">
                        <ejs-dropdownlist
                          id="RoomId"
                          class="e-field"
                          :dataSource="filteredRooms"
                          :fields="{ text: 'name', value: 'id' }"
                          name="RoomId"
                          @change="onRoomChange"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td class="e-textlabel">Resource</td>
                      <td colspan="4">
                        <ejs-dropdownlist
                          id="StaffId"
                          class="e-field"
                          :dataSource="staffData"
                          :fields="{ text: 'text', value: 'id' }"
                          name="StaffId"
                          placeholder="Select Resource"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td class="e-textlabel">Start</td>
                      <td colspan="4">
                        <ejs-datetimepicker
                          id="StartTime"
                          class="e-field"
                          name="StartTime"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td class="e-textlabel">End</td>
                      <td colspan="4">
                        <ejs-datetimepicker
                          id="EndTime"
                          class="e-field"
                          name="EndTime"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </ejs-schedule>
        </div>
      </div>
    </div>

    <div id="headerIndentTemplate" style="display: none">
      <div class="template-wrap header-indent">
        <div style="flex: 0 0 65%; font-weight: 600">Staff</div>
        <div style="flex: 1; font-weight: 600">Type</div>
      </div>
    </div>

    <div id="resourceTemplate" style="display: none">
      <div class="template-wrap">
        <div
          style="flex: 0 0 65%; display: flex; align-items: center; gap: 8px"
        >
          <div class="avatar-circle" style="background: ${resourceData.color}">
            ${resourceData.text[0]}
          </div>
          <div>${resourceData.text}</div>
        </div>
        <div style="flex: 1">${resourceData.type}</div>
      </div>
    </div>
    <div id="action-description">
      <p>
        This demo showcases the Cascading Event Editor in the <a href="https://www.syncfusion.com/scheduler-sdk/vue-scheduler"> Vue Scheduler</a>.
        Editor fields dynamically update based on user selections, enabling guided input,
        improving accuracy, and enhancing usability for complex scheduling scenarios.
    </p>
    </div>
    <div id="description">
      <p>
        This example demonstrates a
        <strong>Cascading Event Editor</strong> built with the Syncfusion
        Scheduler component. It enhances the default editor by introducing
        dependent fields that react to user input, creating a more structured
        and efficient event creation experience.
      </p>

      <p><strong>Cascading Dropdowns</strong></p>
      <p>
        Dropdown selections dynamically filter related fields, ensuring users
        only see relevant options. This reduces clutter and simplifies the form
        interaction.
      </p>

      <p><strong>Improved Data Consistency</strong></p>
      <p>
        Field dependencies enforce logical relationships, minimizing invalid
        entries and maintaining clean, structured data—ideal for hierarchical
        scenarios like resources, categories, or services.
      </p>

      <p><strong>Flexible Customization</strong></p>
      <p>
        The editor layout is fully customizable, allowing integration of custom
        inputs, validation, and UI enhancements to match specific business
        needs.
      </p>

      <p><strong>Key Benefits</strong></p>
      <p>
        This approach simplifies data entry, reduces errors, and boosts
        productivity through intelligent field interactions—making it
        well-suited for advanced scheduling and booking applications.
      </p>
    </div>
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
  TimelineViews,
  Resize,
  DragAndDrop,
  PopupOpenEventArgs,
  PopupCloseEventArgs,
  ActionEventArgs,
} from '@syncfusion/ej2-vue-schedule';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { DateTimePickerComponent } from '@syncfusion/ej2-vue-calendars';

interface Floor {
  id: number;
  name: string;
}

interface Room {
  id: number;
  name: string;
  floorId: number;
}

interface EventData {
  Id?: number;
  Subject?: string;
  Type: string;
  StartTime?: Date;
  EndTime?: Date;
  ResourceId?: number;
  FloorId?: number | null;
  RoomId?: number | null;
}

export default defineComponent({
  components: {
    'ejs-schedule': ScheduleComponent,
    'e-resources': ResourcesDirective,
    'e-resource': ResourceDirective,
    'e-views': ViewsDirective,
    'e-view': ViewDirective,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-datetimepicker': DateTimePickerComponent,
  },

  provide() {
    return {
      schedule: [TimelineViews, DragAndDrop, Resize],
    };
  },

  data() {
    return {
      scheduleRef: null as any,
      selectedDate: new Date(2026, 4, 11),
      group: {
        resources: ['Staff'],
      },

      floors: [
        { id: 1, name: 'Floor 1' },
        { id: 2, name: 'Floor 2' },
      ] as Floor[],

      rooms: [
        { id: 101, name: 'Room 101', floorId: 1 },
        { id: 102, name: 'Room 102', floorId: 1 },
        { id: 201, name: 'Room 201', floorId: 2 },
        { id: 202, name: 'Room 202', floorId: 2 },
      ] as Room[],

      typeOptions: ['Meeting', 'Appointment', 'Internal'],

      staffData: [
        { id: 1, text: 'Mike Anderson', color: '#1aaa55', type: 'Consultants' },
        { id: 2, text: 'Kevin Larson', color: '#357cd2', type: 'Sales' },
        { id: 3, text: 'Sarah Johnson', color: '#f57f17', type: 'Sales' },
        { id: 4, text: 'David Miller', color: '#7fa900', type: 'Testers' },
        { id: 5, text: 'Emma Wilson', color: '#df5286', type: 'Testers' },
      ],

      eventSettings: {
        dataSource: [
        {
          Id: 1,
          Subject: 'Meeting',
          Type: 'Meeting',
          StartTime: new Date(2026, 4, 11, 9, 0),
          EndTime: new Date(2026, 4, 11, 12, 0),
          StaffId: 1,
          FloorId: 1,
          RoomId: 101
        },
        {
          Id: 2,
          Subject: 'Appointment',
          Type: 'Appointment',
          StartTime: new Date(2026, 4, 11, 13, 0),
          EndTime: new Date(2026, 4, 11, 14, 0),
          StaffId: 2
        },
        {
          Id: 3,
          Subject: 'Internal Review',
          Type: 'Internal',
          StartTime: new Date(2026, 4, 11, 10, 0),
          EndTime: new Date(2026, 4, 11, 11, 0),
          StaffId: 3
        },
        {
          Id: 4,
          Subject: 'Planning',
          Type: 'Meeting',
          StartTime: new Date(2026, 4, 11, 15, 0),
          EndTime: new Date(2026, 4, 11, 17, 0),
          StaffId: 4,
          FloorId: 1,
          RoomId: 101
        },
        {
          Id: 5,
          Subject: 'Discussion',
          Type: 'Meeting',
          StartTime: new Date(2026, 4, 11, 11, 0),
          EndTime: new Date(2026, 4, 11, 12, 30),
          StaffId: 5,
          FloorId: 2,
          RoomId: 201
        },
        {
          Id: 6,
          Subject: 'Morning Sync',
          Type: 'Meeting',
          StartTime: new Date(2026, 4, 11, 8, 0),
          EndTime: new Date(2026, 4, 11, 9, 0),
          StaffId: 1,
          FloorId: 1,
          RoomId: 101
        },
        {
          Id: 7,
          Subject: 'Follow-up Call',
          Type: 'Appointment',
          StartTime: new Date(2026, 4, 11, 12, 0),
          EndTime: new Date(2026, 4, 11, 13, 0),
          StaffId: 1
        },
        {
          Id: 8,
          Subject: 'Client Discussion',
          Type: 'Appointment',
          StartTime: new Date(2026, 4, 11, 10, 0),
          EndTime: new Date(2026, 4, 11, 11, 0),
          StaffId: 2
        },
        {
          Id: 9,
          Subject: 'Demo Presentation',
          Type: 'Meeting',
          StartTime: new Date(2026, 4, 11, 14, 0),
          EndTime: new Date(2026, 4, 11, 15, 0),
          StaffId: 2,
          FloorId: 1,
          RoomId: 102
        },
        {
          Id: 10,
          Subject: 'Code Refactoring',
          Type: 'Internal',
          StartTime: new Date(2026, 4, 11, 8, 30),
          EndTime: new Date(2026, 4, 11, 9, 30),
          StaffId: 3
        },
        {
          Id: 11,
          Subject: 'System Testing',
          Type: 'Internal',
          StartTime: new Date(2026, 4, 11, 11, 0),
          EndTime: new Date(2026, 4, 11, 12, 0),
          StaffId: 3
        },
        {
          Id: 12,
          Subject: 'Project Review',
          Type: 'Meeting',
          StartTime: new Date(2026, 4, 11, 13, 0),
          EndTime: new Date(2026, 4, 11, 14, 0),
          StaffId: 4,
          FloorId: 1,
          RoomId: 101
        },
        {
          Id: 13,
          Subject: 'Wrap-up Meeting',
          Type: 'Meeting',
          StartTime: new Date(2026, 4, 11, 17, 0),
          EndTime: new Date(2026, 4, 11, 18, 0),
          StaffId: 4,
          FloorId: 1,
          RoomId: 101
        },
        {
          Id: 14,
          Subject: 'Bug Fixing',
          Type: 'Internal',
          StartTime: new Date(2026, 4, 11, 9, 0),
          EndTime: new Date(2026, 4, 11, 10, 30),
          StaffId: 5
        },
        {
          Id: 15,
          Subject: 'QA Review',
          Type: 'Internal',
          StartTime: new Date(2026, 4, 11, 13, 0),
          EndTime: new Date(2026, 4, 11, 14, 0),
          StaffId: 5
        }
      ],
        fields: {
          id: 'Id',
          subject: 'Subject',
          startTime: 'StartTime',
          endTime: 'EndTime',
          resourceIdField: 'StaffId'
        }
      },

      isMeetingType: false,
      currentType: 'Meeting',
      currentFloorId: null as number | null,
      currentRoomId: null as number | null,
      filteredRooms: [] as Room[],
      isInitializing: false,
    };
  },

  watch: {
    currentFloorId(val) {
      if (val) {
        this.filteredRooms = this.rooms.filter((r) => r.floorId === val);
      } else {
        this.filteredRooms = [];
      }

      if (!this.isInitializing) {
        this.currentRoomId = null;
        this.$nextTick(() => {
          const room = (document.getElementById('RoomId') as any)
            ?.ej2_instances?.[0];
          if (room) room.value = null;
        });
      }
    },
  },

  methods: {
    onTypeChange(e: any) {
      this.currentType = e.value;
      this.isMeetingType = e.value === 'Meeting';

      if (!this.isMeetingType) {
        this.currentFloorId = null;
        this.currentRoomId = null;
        this.filteredRooms = [];
      }
    },

    onFloorChange(e: any) {
      this.currentFloorId = parseInt(e.value);
    },

    onRoomChange(e: any) {
      this.currentRoomId = parseInt(e.value);
    },

    onPopupOpen(args: PopupOpenEventArgs) {
      if (args.type === 'Editor') {
        args.element.classList.add('cascading-editor-dialog');
        const data = (args.data || {}) as EventData;

        this.isInitializing = true;

        this.currentType = 'Meeting';
        this.currentFloorId = null;
        this.currentRoomId = null;
        this.filteredRooms = [];
        this.isMeetingType = true;

        this.currentType = data.Type || 'Meeting';
        this.isMeetingType = this.currentType === 'Meeting';
        this.currentFloorId = data.FloorId || null;
        this.currentRoomId = data.RoomId || null;

        if (this.isMeetingType && this.currentFloorId) {
          this.filteredRooms = this.rooms.filter(
            (r) => r.floorId === this.currentFloorId
          );
        }

        this.$nextTick(() => {
          const typeDropdown = (document.getElementById('Type') as any)
            ?.ej2_instances?.[0];
          const floorDropdown = (document.getElementById('FloorId') as any)
            ?.ej2_instances?.[0];
          const roomDropdown = (document.getElementById('RoomId') as any)
            ?.ej2_instances?.[0];
          const resourceDropdown = (
            document.getElementById('StaffId') as any
          )?.ej2_instances?.[0];

          if (typeDropdown) typeDropdown.value = this.currentType;

          if (floorDropdown && this.currentFloorId) {
            floorDropdown.value = this.currentFloorId;
          }

          if (roomDropdown) {
            roomDropdown.dataSource = this.filteredRooms;
            roomDropdown.dataBind();
            if (this.currentRoomId) {
              roomDropdown.value = this.currentRoomId;
            }
          }

          if (resourceDropdown && data.ResourceId) {
            resourceDropdown.value = data.ResourceId;
          }

          this.isInitializing = false;
        });
      }
    },

    onPopupClose(args: PopupCloseEventArgs) {
      if (args.type === 'Editor' && args.element) {
        args.element.classList.remove('cascading-editor-dialog');
      }
      this.isInitializing = false;
    },

    onEventRendered(args: any) {
      const color = this.getTypeColor(args.data.Type || 'Meeting');
      args.element.style.backgroundColor = color;
      args.element.style.color = '#fff';
    },

    onEventCreate(args: ActionEventArgs) {
      const eventData = Array.isArray(args.data) ? args.data[0] : args.data;
      if (!eventData) {
        args.data = {} as EventData;
        return;
      }
      (eventData as EventData).Type =
        (eventData as EventData).Type || 'Meeting';
      (eventData as EventData).FloorId =
        (eventData as EventData).FloorId || null;
      (eventData as EventData).RoomId = (eventData as EventData).RoomId || null;
    },

    onEventChange(args: ActionEventArgs) {
      const eventData = Array.isArray(args.data) ? args.data[0] : args.data;
      if (!eventData) {
        args.data = {} as EventData;
        return;
      }
      (eventData as EventData).Type =
        (eventData as EventData).Type || 'Meeting';
    },

    getTypeColor(type: string): string {
      switch (type) {
        case 'Meeting':
          return '#22c55e';
        case 'Appointment':
          return '#3b82f6';
        case 'Internal':
          return '#f59e0b';
        default:
          return '#6b7280';
      }
    },
  },
});
</script>

<style>
/* ---------- LIMIT EVERYTHING TO THIS SCHEDULER ---------- */

.e-schedule.custom-scheduler .template-wrap {
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
}

.e-schedule.custom-scheduler .template-wrap > div {
  display: flex;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
}

.e-schedule.custom-scheduler .template-wrap.header-indent > div {
  font-weight: 600;
  padding-left: 7px;
}

/* Avatar */
.e-schedule.custom-scheduler .avatar-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  flex-shrink: 0;
}

.e-dialog.e-schedule-dialog.cascading-editor-dialog .e-dlg-content table {
  width: 100%;
  border-collapse: collapse;
}

/* cells */
.e-dialog.e-schedule-dialog.cascading-editor-dialog td {
  padding: 6px 4px;
  vertical-align: middle;
}

.e-dialog.e-schedule-dialog.cascading-editor-dialog td:first-child {
  width: 110px;
  font-weight: 500;
  padding-right: 12px;
}

.e-dialog.e-schedule-dialog.cascading-editor-dialog .e-field,
.e-dialog.e-schedule-dialog.cascading-editor-dialog .e-control-wrapper,
.e-dialog.e-schedule-dialog.cascading-editor-dialog .e-input-group {
  width: 100% !important;
  max-width: 350px;
  height: 36px;
  box-sizing: border-box;
}

/* text input */
.e-dialog.e-schedule-dialog.cascading-editor-dialog .e-field {
  padding: 8px 12px !important;
  border-radius: 4px !important;
  font-size: 14px;
}

.e-dialog.e-schedule-dialog.cascading-editor-dialog .e-input-group {
  border: 1px solid #d1d5db !important;
  border-radius: 4px !important;
}

/* remove underline */
.e-dialog.e-schedule-dialog.cascading-editor-dialog .e-input-group::before,
.e-dialog.e-schedule-dialog.cascading-editor-dialog .e-input-group::after {
  display: none !important;
}

/* subject box */
.e-dialog.e-schedule-dialog.cascading-editor-dialog input[name='Subject'] {
  width: 100%;
  max-width: 350px;
}

/* dialog padding */
.e-dialog.e-schedule-dialog.cascading-editor-dialog .e-dlg-content {
  padding: 20px 24px;
}

.e-dialog.e-schedule-dialog.cascading-editor-dialog .e-footer-content {
  padding: 12px 20px;
}

/* ---------- EXISTING SAFE RULES (already scoped, keeping clean) ---------- */

.e-schedule.custom-scheduler {
  margin-top: 12px;
}

.e-schedule.custom-scheduler .header-indent {
  font-weight: 500;
  padding-left: 7px;
}

.e-schedule.custom-scheduler .e-resource-left-td {
  width: 224px !important;
  position: relative;
}

.e-schedule.custom-scheduler .e-resource-cells {
  vertical-align: middle;
  padding-right: 10px;
  position: relative;
}

.e-schedule.custom-scheduler .e-resource-cells > div {
  padding: 6px 0;
}

.e-schedule.custom-scheduler .e-resource-text {
  padding: 0 !important;
  display: flex !important;
  align-items: center;
  height: 100%;
}

.e-schedule.custom-scheduler .template-wrap > div:first-child {
  padding-left: 0 !important;
}

/* Divider line */
.e-schedule.custom-scheduler .e-resource-cells::after,
.e-schedule.custom-scheduler .e-resource-left-td::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 65%;
  width: 1px;
  background-color: var(--color-sf-border-light, #dee2e6);
}

/* RTL */
.e-schedule.custom-scheduler.e-rtl .template-wrap {
  flex-direction: row-reverse;
}

/* Dark themes */
.material3-dark .e-schedule.custom-scheduler .e-resource-cells::after,
.material3-dark .e-schedule.custom-scheduler .e-resource-left-td::after {
  background-color: #444746;
}

.material-dark .e-schedule.custom-scheduler .e-resource-cells::after,
.material-dark .e-schedule.custom-scheduler .e-resource-left-td::after {
  background-color: #616161;
}
</style>