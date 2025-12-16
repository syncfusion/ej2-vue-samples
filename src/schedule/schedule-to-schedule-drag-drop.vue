<template>
  <div class="schedule-vue-sample">
    <div class="col-md-12 control-section">
      <div class="content-wrapper multiple-schedulers">
       <div class="schedule-container">
        <ejs-schedule id="first-schedule" ref="firstScheduleObj" width="100%" height="500px" :rowAutoHeight="true" :selectedDate="selectedDate" :currentView="currentView"
          :eventDragArea="'.content-wrapper'" :group="group" :eventSettings="firstScheduleEventSettings" :dragStop="DragEventFromFirstSchedule">
          <e-views>
            <e-view option="Month"></e-view>
          </e-views>
          <e-resources>
              <e-resource field='TaskId' title='Employee' name='Employees' :dataSource='firstScheduleResourceDataSource' textField='text'
                idField='id' colorField='color'>
              </e-resource>
          </e-resources> 
        </ejs-schedule>
        <ejs-schedule id="second-schedule" ref="secondScheduleObj" :group="group"  :rowAutoHeight="true"  :eventDragArea="'.content-wrapper'" width="100%" height="500px" :selectedDate="selectedDate" :currentView="currentView"
          :eventSettings="secondScheduleEventSettings" :dragStop="DragEventFromSecondSchedule">
          <e-views>
            <e-view option="Month"></e-view>
          </e-views>
            <e-resources>
              <e-resource field='TaskId' title='Employee' name='Employees' :dataSource='secondScheduleResourceDataSource' textField='text'
                idField='id' colorField='color'>
              </e-resource>
          </e-resources> 
        </ejs-schedule>
       </div>
      </div>
    </div>
    <div id="action-description">
        <p>
          This example illustrates how to drag and drop events among multiple Scheduler. You can drag
          events from one Scheduler to another.
        </p>
    </div>
    <div id="description">
        <p>
          In this example, <code>eventDragArea</code> is used to drag a range of events from one Scheduler to another. The
          <code>dragStop</code> event of the Scheduler is triggered when an item is dropped from one Scheduler onto
          another. Within the <code>dragStop</code> event, the <code>addEvent</code> method is used to add the dropped event to the
          target Scheduler, and the <code>deleteEvent</code> method is used to remove the dragged event from the source
          Scheduler.
        </p>
    </div>
  </div>
</template>
<style>
    .content-wrapper.multiple-schedulers .schedule-container {
      display: flex;
    }

    .multiple-schedulers .e-drag-clone,
    .multiple-schedulers .e-schedule-event-clone {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #first-schedule {
      margin-right: 10px;
    }

    @media screen and (max-width: 768px) {
        .content-wrapper.multiple-schedulers .schedule-container {
          flex-direction: column;
        }

        #first-schedule {
          margin-right: 0;
        }

        #second-schedule {
          margin-top: 10px;
        }
    }
</style>

<script>
import { resourceData, timelineResourceData } from "./datasource";
import { ScheduleComponent, ViewDirective, ResourceDirective, ResourcesDirective, ViewsDirective, Resize, DragAndDrop,  Month } from "@syncfusion/ej2-vue-schedule";
import { closest } from "@syncfusion/ej2-base";

export default {
  components: {
    "ejs-schedule": ScheduleComponent,
    "e-view": ViewDirective,
    "e-views": ViewsDirective,
    'e-resource': ResourceDirective,
    'e-resources': ResourcesDirective
  },
  data: function () {
    return {
      firstScheduleEventSettings: {
        dataSource: resourceData,
      },
      secondScheduleEventSettings: {
        dataSource: timelineResourceData,
      },
      firstScheduleResourceDataSource: [
        { text: 'Steven', id: 1, color: '#7fa900' }
      ],
      secondScheduleResourceDataSource: [
        { text: 'John', id: 2, color: '#ffb74d' }
      ],
      group: { resources: ['Employees'] },
      selectedDate: new Date(2023, 0, 4),
      currentView: "Month"
    };
  },
  provide: {
    schedule: [ Month, Resize, DragAndDrop],
  },
  methods: {
    handleDragStop(args, sourceSchedule, targetSchedule, targetSelector) {
      if (closest(args.event.target, targetSelector)) {
        args.cancel = true;
        const cellData = targetSchedule.getCellDetails(args.event.target);
        if (cellData) {
          sourceSchedule.deleteEvent(args.data.Id);
          const resourceDetails = targetSchedule.getResourcesByIndex(cellData.groupIndex);
          let droppedEventStartTime;
          let droppedEventEndTime;
          const eventDuration = new Date(args.data.EndTime).getTime() - new Date(args.data.StartTime).getTime();
          if (!args.data.IsAllDay) {
              droppedEventStartTime = new Date(cellData.startTime);
              droppedEventStartTime.setHours(args.data.StartTime.getHours(), args.data.StartTime.getMinutes());
              droppedEventEndTime = new Date(droppedEventStartTime.getTime() + eventDuration);
          } else {
              droppedEventStartTime = cellData.startTime;
              droppedEventEndTime = new Date(droppedEventStartTime.getTime() + eventDuration);
          }
          const eventData = {
            Id: targetSchedule.getEventMaxID(),
            Subject: args.data.Subject,
            StartTime: droppedEventStartTime,
            EndTime: droppedEventEndTime,
            IsAllDay: args.data.IsAllDay,
            Location: args.data.Location,
            Description: args.data.Description,
            StartTimezone: args.data.StartTimezone,
            EndTimezone: args.data.EndTimezone,
            TaskId: resourceDetails.resourceData.id
          };
          targetSchedule.addEvent(eventData);
          const classElement = document.querySelector(".e-selected-cell");
          if (classElement) {
            classElement.classList.remove("e-selected-cell");
          }
        }
      }
    },
    DragEventFromFirstSchedule(args) {
      const firstScheduleObj = this.$refs.firstScheduleObj;
      const secondScheduleObj = this.$refs.secondScheduleObj;
      this.handleDragStop( args, firstScheduleObj, secondScheduleObj, "#second-schedule");
    },
    DragEventFromSecondSchedule(args) {
      const secondScheduleObj = this.$refs.secondScheduleObj;
      const firstScheduleObj = this.$refs.firstScheduleObj;
      this.handleDragStop( args, secondScheduleObj, firstScheduleObj, "#first-schedule");
    },
  },
};
</script>