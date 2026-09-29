<template>
  <div class="col-lg-12 control-section">
    <div class="content-wrapper">
      <ejs-schedule
        id="Schedule"
        ref="scheduleObj"
        cssClass="event-customization-schedule"
        width="100%"
        height="550px"
        :selectedDate="selectedDate"
        currentView="TimelineWeek"
        :popupOpen="onPopupOpen"
        :allowOverlap="false"
        startHour="09:00"
        endHour="18:00"
        :showWeekend="false"
        :views="views"
        :group="group"
        :resources="resources"
        :eventSettings="eventSettings"
      >
      </ejs-schedule>
    </div>
  </div>

    <div id="action-description">
        <p>
        This demo showcases an advanced task progress tracker in the Scheduler with elegant event customization, vibrant status indicators, real-time progress visualization, and interactive editing. Track and manage team task assignments with visual status icons and completion percentage indicators.
        </p>
    </div>

    <div id="description">
        <p>
            The Task Progress Tracker displays team tasks with a refined visual design. Each event shows the task subject on the left and completion percentage on the right, while the status indicator icon is positioned at the bottom left with a colored background matching the task status.
        </p>
        <p><b>Status Tracking</b></p>
        <p>
            Tasks are displayed with visual status indicators: clock icon for pending tasks, play icon for in-progress work, eye icon for tasks under review, and checkmark icon for completed tasks. Each status has a distinct color for quick visual identification.
        </p>
        <p><b>Progress Visualization</b></p>
        <p>
            Each event displays the completion percentage in real-time. The progress indicator updates dynamically as tasks advance through different status states.
        </p>
        <p><b>Interactive Editing</b></p>
        <p>
            Edit task details directly from the Scheduler using the editor. Customize task status and progress percentage with automatic validation rules ensuring data consistency based on the selected status.
        </p>
        <p>Looking for the full Vue Scheduler component overview, features, pricing, and documentation? Visit our <a href="https://www.syncfusion.com/scheduler-sdk/vue-scheduler" target="_blank">Vue Scheduler</a> page.</p>
    </div>
</template>

<script>
  import { extend } from '@syncfusion/ej2-base';
  import {
    ScheduleComponent,
    TimelineViews,
    Resize,
    DragAndDrop,
  } from '@syncfusion/ej2-vue-schedule';
  import { DropDownList } from '@syncfusion/ej2-dropdowns';
  import { createApp } from 'vue';
  import { taskData } from './datasource';

  const app = createApp({});
  const STATUS_MAP = {
    pending: { icon: 'e-clock', color: '#DC2626' },
    'in-progress': { icon: 'e-play', color: '#3B82F6' },
    review: { icon: 'e-eye', color: '#F59E0B' },
    done: { icon: 'e-check', color: '#10B981' },
  };
  var eventTemplateVue = app.component('event-template', {
    template:
      '<div class="custom-event" :style="styleObj">' +
      '<div class="event-header">' +
      '<div class="event-subject">{{ subject }}</div>' +
      '<div class="event-progress-percent">{{ progressText }}</div>' +
      '</div>' +
      '<div class="event-footer">' +
      '<div class="label-wrapper">' +
      '<span class="e-icons" :class="iconClass"></span>' +
      '<span class="status-label">{{ statusLabel }}</span>' +
      '</div>' +
      '</div>' +
      '</div>',

    data() {
      return {
        data: {},
      };
    },

    computed: {
      config() {
        return STATUS_MAP[this.data.Status] || STATUS_MAP.pending;
      },
      subject() {
        return this.data.Subject || 'Task';
      },
      progressText() {
        return (this.data.Progress || 0) + '%';
      },
      statusLabel() {
        return this.data.Status || 'pending';
      },
      iconClass() {
        return this.config.icon;
      },
      styleObj() {
        return '--status-color:' + this.config.color;
      },
      statusClass() {
        return 'status-' + this.statusLabel;
      },
    },
  });

  export default {
    components: {
      'ejs-schedule': ScheduleComponent,
    },

    data: function () {
      var employeeData = [
        { Text: 'Sarah', Id: 1, Color: '#EF4444' },
        { Text: 'John', Id: 2, Color: '#10B981' },
        { Text: 'Emma', Id: 3, Color: '#3B82F6' },
        { Text: 'Michael', Id: 4, Color: '#F59E0B' },
        { Text: 'Lisa', Id: 5, Color: '#8B5CF6' },
        { Text: 'David', Id: 6, Color: '#EC4899' },
      ];

      return {
        employeeData: employeeData,
        eventData: taskData,
        STATUS_MAP: STATUS_MAP,
        eventTemplate: eventTemplateVue,

        selectedDate: new Date(2026, 3, 24),

        views: ['TimelineWeek'],

        group: { resources: ['Employees'] },

        resources: [
          {
            field: 'EmployeeId',
            name: 'Employees',
            dataSource: employeeData,
            textField: 'Text',
            idField: 'Id',
            colorField: 'Color',
          },
        ],

        eventSettings: {
          dataSource: taskData,
          fields: {
            id: 'Id',
            subject: { name: 'Subject' },
            startTime: { name: 'StartTime' },
            endTime: { name: 'EndTime' },
            description: { name: 'Description' },
            status: { name: 'Status' },
            progress: { name: 'Progress' },
          },
          template: function () {
            return {
              template: eventTemplateVue,
            };
          },
        },
      };
    },

    provide: {
      schedule: [TimelineViews, Resize, DragAndDrop],
    },

    methods: {
      onPopupOpen: function (args) {
        if (args.type !== 'Editor') return;

        var dialog = args.element.closest('.e-dialog');
        if (dialog) {
          var elementsToHide = dialog.querySelectorAll(
            '.e-repeat-parent-row, .e-recurrenceeditor'
          );
          elementsToHide.forEach(function (el) {
            el.style.display = 'none';
          });
        }

        var form = args.element.querySelector('.e-schedule-form');
        if (!form) return;

        var existingCustomFields = form.querySelector('.custom-fields');
        if (existingCustomFields) {
          existingCustomFields.remove();
        }

        var container = document.createElement('div');
        container.className = 'custom-fields';

        container.innerHTML = [
          '<div class="e-field-group e-custom-row">',
          '<input id="statusDropdown" name="Status" type="text" class="e-field" />',
          '</div>',

          '<div class="e-field-group e-custom-row">',
          '<div class="e-float-input e-control-wrapper e-input-group">',
          '<input id="progressInput"',
          ' name="Progress"',
          ' type="number"',
          ' min="0"',
          ' max="100"',
          ' step="1"',
          ' class="e-field e-input"',
          ' value="',
          args.data.Progress || '0',
          '" />',
          '<label class="e-float-text e-label-top">Progress (%)</label>',
          '</div>',
          '</div>',
        ].join('');

        form.appendChild(container);

        var progressEl = container.querySelector('[name="Progress"]');

        var statusDropdown = new DropDownList({
          dataSource: [
            { text: 'Pending', value: 'pending' },
            { text: 'In-Progress', value: 'in-progress' },
            { text: 'Review', value: 'review' },
            { text: 'Done', value: 'done' },
          ],
          fields: { text: 'text', value: 'value' },
          value: args.data.Status || 'pending',
          change: function (e) {
            applyStatusRules(e.value);
          },
          placeholder: 'Status',
          floatLabelType: 'Auto',
        });
        statusDropdown.appendTo('#statusDropdown');

        progressEl.value =
          args.data.Progress !== undefined && args.data.Progress !== null
            ? args.data.Progress
            : 0;
        applyStatusRules(statusDropdown.value);

        progressEl.addEventListener('input', function (e) {
          var value = Number(e.target.value) || 0;
          var currentStatus = statusDropdown.value;
          if (currentStatus === 'in-progress') {
            if (value >= 99) value = 98;
            if (value <= 0) value = 0;
          }

          e.target.value = value;
        });

        function applyStatusRules(status) {
          if (status === 'done') {
            progressEl.value = 100;
            progressEl.disabled = true;
          } else if (status === 'review') {
            progressEl.value = 99;
            progressEl.disabled = true;
          } else if (status === 'pending') {
            progressEl.value = 0;
            progressEl.disabled = true;
          } else if (status === 'in-progress') {
            var currentValue = Number(progressEl.value) || 0;
            if (currentValue >= 99) {
              progressEl.value = 98;
            }
            progressEl.disabled = false;
          } else {
            progressEl.disabled = false;
          }
        }
      },
    },
  };  
</script>

<style>
  .event-customization-schedule.e-schedule .e-appointment .e-appointment-details {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
  }

  .event-customization-schedule.e-schedule .e-event-resize.e-right-handler {
    background: #f3f4f6;
  }

  .event-customization-schedule.e-schedule .custom-event {
    background: #f3f4f6;
    height: 100%;
    width: 100%;
    box-shadow: none;
    padding: 2px 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .event-customization-schedule.e-schedule .custom-event .event-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    width: 100%;
    padding: 1px 0;
  }

  .event-customization-schedule.e-schedule
    .custom-event
    .event-header
    .event-subject {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 11px;
    font-weight: 600;
    color: #1f2937;
    line-height: 1.1;
  }

  .event-customization-schedule.e-schedule
    .custom-event
    .event-header
    .event-progress-percent {
    background: rgba(0, 0, 0, 0.5);
    padding: 1px 4px;
    border-radius: 2px;
    color: #fff;
    font-weight: 700;
    font-size: 9px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .event-customization-schedule.e-schedule .custom-event .event-footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3px;
    width: 100%;
    line-height: 1;
    padding: 1px 0;
  }

  .event-customization-schedule.e-schedule
    .custom-event
    .event-footer
    .label-wrapper {
    color: #ffffff;
    background-color: var(--status-color, #dc2626);
    padding: 2px 4px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 8px;
    font-weight: 500;
  }

  .event-customization-schedule.e-schedule
    .custom-event
    .event-footer
    .label-wrapper
    .status-label {
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }

  .event-customization-schedule.e-schedule .e-timeline-view .e-resource-left-td {
    width: 150px;
  }

  .event-customization-schedule.e-schedule
    .e-timeline-view
    .e-date-header-wrap
    table
    col,
  .event-customization-schedule.e-schedule
    .e-timeline-view
    .e-content-wrap
    table
    col {
    width: 90px;
  }

  .event-customization-schedule.e-schedule .e-field-group.e-custom-row {
    margin-top: 16px;
  }
</style>
