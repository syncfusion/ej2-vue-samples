<template>
  <div class="schedule-vue-sample">
    <div class="col-md-12 control-section">
      <div class="content-wrapper grid-to-schedule">
        <div class="schedule-container">
          <div>
            <h5 style="text-align: center; margin: 0;position: relative; bottom: 10px;">Tasks Management</h5>
            <ejs-schedule id="Schedule" ref="ScheduleObj" :rowAutoHeight="true" width="100%" height="100%" :cssClass="'grid-schedule'" :selectedDate="selectedDate"
              :eventSettings="eventSettings" :group="group" :currentView="currentView" :dragStop="onDragStop" :eventDragArea="'.content-wrapper'" :dataBound="onDataBound"
            >
              <e-views>
                <e-view option="TimelineDay"></e-view>
              </e-views>
              <e-resources>
                <e-resource field="TaskId" title="Name" name="Names" :dataSource="resourceData" textField="text" idField="id" colorField="color"
                ></e-resource>
              </e-resources>
            </ejs-schedule>
          </div>
          <div class="Grid-container">
            <h5 style="text-align: center; margin: 0;position: relative; bottom: 10px;">Unplanned Tasks</h5>
            <ejs-grid id="Grid" ref="GridObj" width="280px" height="100%"
              :dataSource="gridData" :editSettings="editSettings" :allowRowDragAndDrop="true" :rowDropSettings="rowDropSettings"
              :rowDrag="onRowDrag" :cssClass="'drag-grid'" :rowDrop="onRowDrop" :dataBound="onGridDataBound">
              <e-columns>
                <e-column field="Task" headerText="Task" width="50"></e-column>
                <e-column field="Duration" headerText="Duration" width="30"></e-column>
              </e-columns>
            </ejs-grid>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div id="action-description">
      <p>
        This example illustrates how to drag and drop events between the DataGrid and the Scheduler.
      </p>
    </div>
    <div id="description">
        <p>
          In this example, the DataGrid's <code>allowRowDragAndDrop</code> and <code>rowDropSettings</code> are used to drag
        and drop items from the DataGrid to the Scheduler. The <code>rowDrop</code> event of the DataGrid is triggered when an item
        is dropped to the Scheduler. Within the <code>rowDrop</code> event, the <code>addEvent</code> method
        is used to add the dropped item to the target Scheduler, and the <code>deleteRecord</code> method is used to remove
        the dragged item from the DataGrid.<br>

        For Scheduler to DataGrid, <code>eventDragArea</code> is used to drag a range of events. The <code>dragStop</code> event of the Scheduler is triggered when an item is dropped from the Scheduler to the
        DataGrid. Within the <code>dragStop</code> event, the DataGrid's <code>addRecord</code> method is used to add the
        dropped event to the target DataGrid, and the <code>deleteEvent</code> method is used to remove the dragged event from the
        Scheduler.
        </p>
    </div>
</template>

<style>

  .content-wrapper.grid-to-schedule .schedule-container {
    display: flex;
    height: 500px;
  }

  .content-wrapper.grid-to-schedule .Grid-container {
    margin-left: 10px;
  }

  .grid-schedule.e-schedule.e-device .e-timeline-view .e-resource-left-td {
    width: 110px;
  }

  .drag-grid.e-grid .e-cloneproperties.e-draganddrop {
    margin-top: 40px;
  }

  .grid-schedule.e-schedule .e-timeline-view .e-date-header-wrap table col,
  .grid-schedule.e-schedule .e-timeline-view .e-content-wrap table col {
    width: 100px;
  }

  @media screen and (max-width: 768px) {
      .content-wrapper.grid-to-schedule .schedule-container {
        flex-direction: column;
      }

      .content-wrapper.grid-to-schedule .schedule-container .grid-content {
        margin-top: 10px;
      }

      .drag-grid.e-grid {
        width: 100% !important;
      }

      .drag-grid.e-grid .e-cloneproperties.e-draganddrop {
        margin-top: 20px;
      }

      #Grid-container {
        margin-top: 15px;
      }

      .content-wrapper.grid-to-schedule .schedule-container {
        display: flex;
        height: 100% !important;
      }
  }

</style>

<script>
import { closest } from '@syncfusion/ej2-base';
import { resourceData, timelineResourceData } from './datasource';
import { ScheduleComponent, ViewDirective, ViewsDirective, ResourceDirective, ResourcesDirective, TimelineViews, TimelineMonth, Resize, DragAndDrop,
} from '@syncfusion/ej2-vue-schedule';
import { GridComponent, ColumnDirective, ColumnsDirective, RowDD, Selection, Page, Sort, Edit} from '@syncfusion/ej2-vue-grids';

export default {
  components: {
    'ejs-schedule': ScheduleComponent,
    'e-view': ViewDirective,
    'e-views': ViewsDirective,
    'e-resource': ResourceDirective,
    'e-resources': ResourcesDirective,
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
  },
  data() {
    return {
      selectedDate: new Date(2023, 0, 4),
      currentView: 'TimelineDay',
      eventSettings: { dataSource: this.getDataSource() },
      group: { enableCompactView: false, resources: ['Names'] },
      resourceData: [
        { text: 'Nancy', id: 1, color: '#df5286' },
        { text: 'Steven', id: 2, color: '#7fa900' },
        { text: 'Robert', id: 3, color: '#ea7a57' },
        { text: 'Smith', id: 4, color: '#5978ee' },
        { text: 'Michael', id: 5, color: '#00bdae' },
        { text: 'Root', id: 6, color: '#f57b42' },
        { text: 'John', id: 7, color: '#1aaa55' },
        { text: 'Stellah', id: 8, color: '#ffb74d' },
        { text: 'Chirish', id: 9, color: '#7460ee' },
        { text: 'Megan', id: 10, color: '#c0ca33' },
      ],
      gridData: [
        { Task: 'Test report validation', Duration: '3 Hours' },
        { Task: 'Timeline estimation', Duration: '4 Hours' },
        { Task: 'Workflow Analysis', Duration: '2 Hours' },
        { Task: 'Quality Analysis', Duration: '5 Hours' },
        { Task: 'Cross-browser testing', Duration: '1 Hour' },
        { Task: 'Resolution-based testing', Duration: '3 Hours' },
        { Task: 'Project Preview', Duration: '6 Hours' },
        { Task: 'Developers Meeting', Duration: '2 Hours' },
        { Task: 'Test case correction', Duration: '7 Hours' },
        { Task: 'Debugging', Duration: '4 Hours' },
        { Task: 'Exception handling', Duration: '5 Hours' },
        { Task: 'Bug fixing', Duration: '1 Hour' },
        { Task: 'Bug Automation', Duration: '3 Hours' },
        { Task: 'Bug fixing', Duration: '6 Hours' },
      ],
      editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
      },
      rowDropSettings: {
        targetID: 'Schedule',
      },
    };
  },
  provide: {
    schedule: [TimelineViews, TimelineMonth, Resize, DragAndDrop],
    grid: [RowDD, Page, Selection, Sort, Edit],
  },
  methods: {
    getDataSource() {
      return [...resourceData, ...timelineResourceData];
    },
    calculateEventDuration(startTime, endTime) {
      var durationInMilliseconds = endTime - startTime;
      var durationInHours = durationInMilliseconds / (1000 * 60 * 60);
      return durationInHours + ' Hours';
    },
    onDataBound() {
      let resourceDataCounter = 0;
      document.querySelectorAll('.e-resource-cells .e-resource-text').forEach((cell) => {
        const workcells = document.querySelector('.e-work-cells');
        if (!workcells) return;
        const timestamp = Number(workcells.getAttribute('data-date'));
        const startDate = new Date(timestamp);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 1);
        const events = this.$refs.ScheduleObj.ej2Instances.getEvents(startDate, endDate, true);
        if (resourceDataCounter < this.$refs.ScheduleObj.ej2Instances.resourceCollection[0].dataSource.length) {
          resourceDataCounter++;
        }
        const resourceEvents = events.filter((event) => event.TaskId === resourceDataCounter);
        const currentText = cell.innerText;
        const eventCount = resourceEvents.length;
        const resourceName = currentText.split('(')[0].trim();
        cell.innerText = resourceName + ' (' + eventCount + ')';
      });
    },
    handleDragStop(args, scheduleObj, gridObj) {
      if (closest(args.event.target, '#Grid')) {
        scheduleObj.deleteEvent(args.data.Id);
        var startTime = new Date(args.data.StartTime);
        var endTime = new Date(args.data.EndTime);
        var formattedDuration = this.calculateEventDuration(startTime, endTime);
        var gridRecord = {
          Task: args.data.Subject,
          Duration: formattedDuration,
        };
        gridObj.addRecord(gridRecord);
      }
    },
    onDragStop(args) {
      this.handleDragStop(args, this.$refs.ScheduleObj, this.$refs.GridObj);
    },
    onRowDrag(args) {
      args.cancel = true;
    },
    onRowDrop(args) {
      args.cancel = true;
      var scheduleElement = closest(args.target, '.e-content-wrap');
      if (scheduleElement && args.target.classList.contains('e-work-cells')) {
        var cellData = this.$refs.ScheduleObj.getCellDetails(args.target);
        var resourceDetails = this.$refs.ScheduleObj.getResourcesByIndex( cellData.groupIndex);
        var durationStr = args.data[0].Duration;
        var durationHours = parseInt(durationStr.split(' ')[0], 10);
        var startTime = new Date(cellData.startTime);
        var endTime = new Date(
          startTime.getTime() + durationHours * 60 * 60 * 1000
        );
        var eventData = {
          Id: this.$refs.ScheduleObj.getEventMaxID() + 1,
          Subject: args.data[0].Task,
          StartTime: startTime,
          EndTime: endTime,
          TaskId: resourceDetails.resourceData.id,
        };
        this.$refs.ScheduleObj.addEvent(eventData);
        this.$refs.GridObj.deleteRecord(args.data[0]);
      }
    },
  },
};
</script>