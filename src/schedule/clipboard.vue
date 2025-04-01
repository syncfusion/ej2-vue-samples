<template>
  <div class="schedule-vue-sample">
    <div class="control-section">
      <div class="content-wrapper">
        <ejs-schedule id="Schedule" ref="scheduleObj" width="100%" height="550px" :views="scheduleViews"
          :currentView="currentView" :selectedDate="selectedDate" :allowClipboard="true" :showQuickInfo= "false"
          :eventSettings="eventSettings"></ejs-schedule>
      </div>
    </div>
    <ejs-contextmenu id="ScheduleContextMenu" ref="menuObj" :target="'.e-schedule'" :items="menuItems"
      :beforeOpen="onContextMenuBeforeOpen" :select="onMenuItemSelect"
      cssClass="schedule-context-menu"></ejs-contextmenu>
  </div>
  <div id="action-description">
    <p>This example demonstrates how to integrate clipboard functionality (cut, copy, paste) and a custom context menu into the Scheduler control.</p>
  </div>

  <div id="description">
    <p>In this example, the <code>allowClipboard</code> property is set to <code>true</code> to enable clipboard functionality. This property allows the following keyboard shortcuts:</p>
    <ul>
        <li><strong>Ctrl + X:</strong> To cut the selected appointment from the scheduler.</li>
        <li><strong>Ctrl + C:</strong> To copy the selected appointment.</li>
        <li><strong>Ctrl + V:</strong> To paste the cut/copied appointment.</li>
    </ul>
    <p>Additionally, we have integrated the ContextMenu control separately from the application end and set its target to the Scheduler control. Also, we have used the following Scheduler's public methods in the context menu handlers:</p>
    <ul>
        <li><strong>cut()</strong> method to remove the selected appointment.</li>
        <li><strong>copy()</strong> method to duplicate the selected appointment.</li>
        <li><strong>paste()</strong> method to insert the appointment into the target time slot.</li>
    </ul>
    <p>On mobile devices, the context menu will open when you tap and hold on the cells or events.</p>
  </div>
</template>

<style>
.e-bigger .schedule-context-menu ul .e-menu-item .e-menu-icon {
  font-size: 14px;
}

.schedule-context-menu ul .e-menu-item .e-menu-icon {
  font-size: 12px;
}
</style>

<script>
import { extend, closest, isNullOrUndefined, removeClass, remove } from '@syncfusion/ej2-base';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Resize, DragAndDrop, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { ContextMenuComponent } from '@syncfusion/ej2-vue-navigations';
import { scheduleData } from './datasource';

export default {
  components: {
    'ejs-schedule': ScheduleComponent,
    'ejs-contextmenu': ContextMenuComponent
  },
  data() {
    return {
      scheduleViews: [
        { option: 'Week' },
        { option: 'Day' },
        { option: 'Month' },
        { option: 'TimelineDay' },
        { option: 'TimelineWeek' },
        { option: 'TimelineWorkWeek' },
        { option: 'TimelineMonth' },
      ],
      currentView: 'Week',
      selectedDate: new Date(2021, 0, 10),
      eventSettings: { dataSource: extend([], scheduleData, null, true) },
      menuItems: [
        { text: 'Cut Event', iconCss: 'e-icons e-cut', id: 'Cut' },
        { text: 'Copy Event', iconCss: 'e-icons e-copy', id: 'Copy' },
        { text: 'Paste', iconCss: 'e-icons e-paste', id: 'Paste' }
      ],
      selectedTarget: null,
      targetElement: null,
    };
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Resize, DragAndDrop, TimelineViews, TimelineMonth]
  },
  methods: {
    onContextMenuBeforeOpen(args) {
      let newEventElement = document.querySelector('.e-new-event');
      if (newEventElement) {
        remove(newEventElement);
      }
      this.$refs.scheduleObj.closeQuickInfoPopup();
      this.targetElement = args.event.target;
      if (closest(this.targetElement, '.e-contextmenu')) {
        return;
      }
      this.selectedTarget = closest(this.targetElement, '.e-appointment,.e-work-cells,' +
        '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
      if (isNullOrUndefined(this.selectedTarget)) {
        args.cancel = true;
        return;
      }
      if (this.selectedTarget.classList.contains('e-appointment')) {
        this.$refs.menuObj.showItems(['Cut', 'Copy'], true);
        this.$refs.menuObj.hideItems(['Paste'], true);
      } else {
        this.$refs.menuObj.showItems(['Paste'], true);
        this.$refs.menuObj.hideItems(['Cut', 'Copy'], true);
      }
    },
    onMenuItemSelect(args) {
      let selectedMenuItem = args.item.id;
      switch (selectedMenuItem) {
        case 'Cut':
          this.$refs.scheduleObj.cut([this.selectedTarget]);
          break;
        case 'Copy':
          this.$refs.scheduleObj.copy([this.selectedTarget]);
          break;
        case 'Paste':
          this.$refs.scheduleObj.paste(this.targetElement);
          break;
      }
    }
  }
};
</script>