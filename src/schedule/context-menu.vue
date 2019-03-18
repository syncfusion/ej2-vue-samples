<template>
    <div>
        <div class="control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="scheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
            </div>
            <div>
                <ejs-contextmenu id="contextmenu" ref="menuObj" cssClass="schedule-context-menu" target=".e-schedule" :items="menuItems" :beforeOpen="onContextMenuBeforeOpen" :select="onMenuItemSelect" ></ejs-contextmenu>
            </div>
        </div>
        <div id="action-description">
            <p>This example illustrates how to enable the context menu on Scheduler and perform its related actions based on
                the selected menu options.</p>
        </div>
        <div id="description">
            <p>
                 In this example, we have integrated the ContextMenu control separately from application end and set its target
                to Scheduler control. Also, we have used the public methods <code>openEditor</code> through which the default event editor
                is set to open for saving or updating the appointments, <code>deleteEvent</code> to delete the selected appointment, and
                <code>selectedDate</code> to navigate to today's date. In mobile devices, the context menu will open when you tap hold on
                the cells or events.
            </p>
        </div>
    </div>
</template>
<style>
    .schedule-context-menu .e-menu-item .new::before {
        content: '\e7f9';
    }

    .schedule-context-menu .e-menu-item .edit::before {
        content: '\ea9a';
    }

    .schedule-context-menu .e-menu-item .recurrence::before {
        content: '\e308';
        font-weight: bold;
    }

    .schedule-context-menu .e-menu-item .today::before {
        content: '\e322';
    }

    /* custom code start*/
    .highcontrast .schedule-context-menu .e-menu-item .today::before,
    .fabric .schedule-context-menu .e-menu-item .today::before {
        content: '\e321';
    }

    .bootstrap .schedule-context-menu .e-menu-item .today::before {
        content: '\e312';
    }

    .highcontrast .schedule-context-menu .e-menu-item .delete::before,
    .fabric .schedule-context-menu .e-menu-item .delete::before {
        content: '\eb00';
    }

    .highcontrast .schedule-context-menu .e-menu-item .new::before,
    .fabric .schedule-context-menu .e-menu-item .new::before {
        content: '\e823';
    }

    .highcontrast .schedule-context-menu .e-menu-item .recurrence::before,
    .fabric .schedule-context-menu .e-menu-item .recurrence::before {
        content: '\e309';
        font-weight: bold;
    }
    /* custom code end*/

    .schedule-context-menu .e-menu-item .delete::before {
        content: '\e94a';
    }

    .e-bigger .schedule-context-menu ul .e-menu-item .e-menu-icon {
        font-size: 14px;
    }

    .schedule-context-menu ul .e-menu-item .e-menu-icon {
        font-size: 12px;
    }

    .schedule-context-menu .e-menu-parent.e-ul .e-menu-item {
        font-family: "Roboto", "Segoe UI", "GeezaPro", "DejaVu Serif", "sans-serif", "-apple-system", "BlinkMacSystemFont";
    }
</style>
<script>
    import Vue from "vue";
    import { scheduleData } from './datasource';
    import { extend, closest, isNullOrUndefined, Browser, remove, removeClass } from '@syncfusion/ej2-base';
    import { DataManager, Query } from '@syncfusion/ej2-data';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-vue-schedule";
    import { ContextMenuPlugin } from '@syncfusion/ej2-vue-navigations';
    Vue.use(SchedulePlugin);
    Vue.use(ContextMenuPlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2019, 0, 10),
                menuItems: [
                    {
                        text: 'New Event',
                        iconCss: 'e-icons new',
                        id: 'Add'
                    }, {
                        text: 'New Recurring Event',
                        iconCss: 'e-icons recurrence',
                        id: 'AddRecurrence'
                    }, {
                        text: 'Today',
                        iconCss: 'e-icons today',
                        id: 'Today'
                    }, {
                        text: 'Edit Event',
                        iconCss: 'e-icons edit',
                        id: 'Save'
                    }, {
                        text: 'Edit Event',
                        id: 'EditRecurrenceEvent',
                        iconCss: 'e-icons edit',
                        items: [{
                            text: 'Edit Occurrence',
                            id: 'EditOccurrence'
                        }, {
                            text: 'Edit Series',
                            id: 'EditSeries'
                        }]
                    }, {
                        text: 'Delete Event',
                        iconCss: 'e-icons delete',
                        id: 'Delete'
                    }, {
                        text: 'Delete Event',
                        id: 'DeleteRecurrenceEvent',
                        iconCss: 'e-icons delete',
                        items: [{
                            text: 'Delete Occurrence',
                            id: 'DeleteOccurrence'
                        }, {
                            text: 'Delete Series',
                            id: 'DeleteSeries'
                        }]
                    }
                ],
                selectedTarget: null
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        },
        methods: {
            onContextMenuBeforeOpen: function(args) {
                let newEventElement = document.querySelector('.e-new-event');
                if (newEventElement) {
                    remove(newEventElement);
                    removeClass([document.querySelector('.e-selected-cell')], 'e-selected-cell');
                }
                let targetElement = args.event.target;
                if (closest(targetElement, '.e-contextmenu')) {
                    return;
                }
                let menuObj = this.$refs.menuObj;
                let scheduleObj = this.$refs.scheduleObj;
                this.selectedTarget = closest(targetElement, '.e-appointment,.e-work-cells,' +
                        '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
                if (isNullOrUndefined(this.selectedTarget)) {
                    args.cancel = true;
                    return;
                }
                if (this.selectedTarget.classList.contains('e-appointment')) {
                    let eventObj= scheduleObj.getEventDetails(this.selectedTarget);
                    if (eventObj.RecurrenceRule) {
                        menuObj.showItems(['EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
                        menuObj.hideItems(['Add', 'AddRecurrence', 'Today', 'Save', 'Delete'], true);
                    } else {
                        menuObj.showItems(['Save', 'Delete'], true);
                        menuObj.hideItems(['Add', 'AddRecurrence', 'Today', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
                    }
                    return;
                }
                menuObj.hideItems(['Save', 'Delete', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
                menuObj.showItems(['Add', 'AddRecurrence', 'Today'], true);
            },
            onMenuItemSelect: function(args) {
                let scheduleObj = this.$refs.scheduleObj.ej2Instances;
                let selectedMenuItem = args.item.id;
                let eventObj;
                if (this.selectedTarget.classList.contains('e-appointment')) {
                    eventObj = scheduleObj.getEventDetails(this.selectedTarget);
                }
                switch (selectedMenuItem) {
                    case 'Today':
                        scheduleObj.selectedDate = new Date();
                        break;
                    case 'Add':
                    case 'AddRecurrence':
                        let selectedCells = scheduleObj.getSelectedElements();
                        let activeCellsData = scheduleObj.getCellDetails(selectedCells.length > 0 ? selectedCells : this.selectedTarget);
                        if (selectedMenuItem === 'Add') {
                            scheduleObj.openEditor(activeCellsData, 'Add');
                        } else {
                            scheduleObj.openEditor(activeCellsData, 'Add', null, 1);
                        } 
                        break;
                    case 'Save':
                    case 'EditOccurrence':
                    case 'EditSeries':
                        if (selectedMenuItem === 'EditSeries') {
                            eventObj = new DataManager(scheduleObj.eventsData).
                                executeLocal(new Query().where(scheduleObj.eventFields.id, 'equal', eventObj[scheduleObj.eventFields.recurrenceID]))[0];
                        }
                        scheduleObj.openEditor(eventObj, selectedMenuItem);
                        break;
                    case 'Delete':
                        scheduleObj.deleteEvent(eventObj);
                        break;
                    case 'DeleteOccurrence':
                    case 'DeleteSeries':
                        scheduleObj.deleteEvent(eventObj, selectedMenuItem);
                        break;
                }
            }
        }
    });

</script>