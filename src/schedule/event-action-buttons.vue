<template>
    <div class="schedule-vue-sample">
        <div class="control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" width="100%" height="650px" :selectedDate="selectedDate" cssClass="event-action-buttons" 
                    :eventSettings="eventSettings" :popupOpen="onPopupOpen" :eventRendered="onEventRendered" >
                    <e-views>
                        <e-view option="Day" :eventTemplate="'eventTemplate'"></e-view>
                        <e-view option="Week" :eventTemplate="'eventTemplate'"></e-view>
                        <template v-slot:eventTemplate="{ data }">
                            <div class="custom-event">
                                <div class="event-subject">
                                    <div class="event-title">{{ data.Subject }}</div>
                                </div>
                                <div class="event-actions">
                                    <button class="icon-btn" @click.stop="editEvent(data)">
                                        <span class="e-icons e-edit"></span>
                                    </button>
                                    <button class="icon-btn" @click.stop="deleteEvent(data)">
                                        <span class="e-icons e-trash"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="event-time">Time: {{ getTimeString(data.StartTime) }} - {{ getTimeString(data.EndTime) }}</div>
                        </template>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo showcases the event action buttons for editing and deleting events in day and week views. Click the edit or delete icons to manage your events.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, we have implemented custom event templates with action buttons for each event displayed in the Scheduler. These action buttons allow users to edit or delete events directly from the event cells. When the Edit button is clicked, the event editor is opened using the <code>openEditor</code> method. When the Delete button is clicked, the selected event is removed using the <code>deleteEvent</code> method.
            </p>
            <p> 
                Looking for the full Vue Scheduler component overview, features, pricing, and documentation? Visit our <a href="https://www.syncfusion.com/scheduler-sdk/vue-scheduler">Vue Scheduler</a> page.
            </p>
        </div>
    </div>
</template>

<script>
    import { Internationalization, extend } from '@syncfusion/ej2-base';
    import {
        ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, Resize, DragAndDrop,
    } from '@syncfusion/ej2-vue-schedule';
    import { actionEventData } from './datasource';

    const instance = new Internationalization();

    export default {
        components: {
            'ejs-schedule': ScheduleComponent,
            'e-views': ViewsDirective,
            'e-view': ViewDirective,
        },

        data() {
            return {
            selectedDate: new Date(new Date().getFullYear(), 0, 16),
            eventSettings: {
                dataSource: extend([], actionEventData, null, true),
            },
            };
        },

        methods: {
            getTimeString(value) {
                return instance.formatDate(value, { format: 'HH:mm' });
            },

            editEvent(data) {
                this.$refs.ScheduleObj.ej2Instances.openEditor(data, 'Save');
            },

            deleteEvent(data) {
                this.$refs.ScheduleObj.ej2Instances.deleteEvent(data);
            },

            onPopupOpen(args) {
                if (args.type === 'QuickInfo' && args.data?.Id > 0) {
                    args.cancel = true;
                }

                if (args.type === 'Editor') {
                    const dialog = args.element.closest('.e-dialog');
                    if (dialog) {
                        const elements = dialog.querySelectorAll(
                            '.e-repeat-parent-row, .e-recurrenceeditor'
                        );
                        elements.forEach((el) => (el.style.display = 'none'));
                    }
                }
            },

            applyCategoryColor(args, currentView) {
                const categoryColor = args.data.CategoryColor;

                if (!args.element || !categoryColor) {
                    return;
                }

                if (currentView === 'Agenda') {
                    args.element.firstChild.style.borderLeftColor = categoryColor;
                } else {
                    args.element.style.backgroundColor = categoryColor;
                }
            },

            onEventRendered(args) {
                const scheduleObj = this.$refs.ScheduleObj.ej2Instances;
                this.applyCategoryColor(args, scheduleObj.currentView);
            }
        },

        provide: {
            schedule: [Day, Week, Resize, DragAndDrop],
        },
    };
</script>

<style>
    .event-action-buttons.e-schedule .custom-event {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 2px 4px;
        overflow: hidden;
        width: 100%;
    }
    .event-action-buttons.e-schedule .event-subject {
        flex: 1;
        display: flex;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .event-action-buttons.e-schedule .event-title {
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .event-action-buttons.e-schedule .event-time {
        font-size: 12px;
        text-wrap: auto;
    }
    .event-action-buttons.e-schedule .event-actions {
        display: flex;
        gap: 4px;
        padding: 4px;
    }
    .event-action-buttons.e-schedule .icon-btn {
        background: transparent;
        border: none;
        padding: 2px;
        cursor: pointer;
    }
    .event-action-buttons.e-schedule .icon-btn .e-icons {
        font-size: 12px;
    }
    .event-action-buttons.e-schedule .e-vertical-view .e-all-day-appointment-wrapper .event-time {
        display: none;
    }
    @media (max-width: 768px) {
        .event-action-buttons.e-schedule .e-week-view .event-title {
            font-size: 10px;
        }

        .event-action-buttons.e-schedule .e-week-view .icon-btn .e-icons {
            font-size: 10px;
        }

        .event-action-buttons.e-schedule .e-week-view .event-time {
            font-size: 10px;
        }

        .event-action-buttons.e-schedule .e-week-view .event-actions {
            gap: 2px;
            padding: 0px;
        }

        .event-action-buttons.e-schedule .e-week-view .custom-event {
            display: contents;
        }
    }
</style>
