<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :currentView='currentView' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :eventRendered="oneventRendered">
                    <e-views>
                        <e-view option="Day" startHour="07:00" endHour="18:00"></e-view>
                        <e-view option="Week" startHour="09:00" endHour="19:00" :timeScale='timeScale' :showWeekend="showWeekend"></e-view>
                        <e-view option="Month" :group="group" :eventTemplate='monthEventTemplate'></e-view>
                        <e-view option="Agenda" :eventTemplate='agendaEventTemplate'></e-view>
                    </e-views>
                    <e-resources>
                        <e-resource field='GroupId' title='Owner' name='Owners' :dataSource='resourceData' textField='GroupText' idField='GroupId'
                            colorField='GroupColor'>
                        </e-resource>
                    </e-resources>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo illustrates how to customize each view with specific configurations like applying event template on agenda view,
                setting different start/end hour to day and week views and enabling grouping in month view. It also shows
                how to hide the weekend days and to set different time intervals on week view.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the
                <code>views</code> property is defined to accept the array of view options and therefore for each view, it
                is possible to set different configurations. In day view, the
                <code>startHour</code> is set to 7 and
                <code>endHour</code> set to 18 whereas in week view, the same is set as 9 and 19 respectively. Also, the
                <code>showWeekend</code> property is set to false only on week view along with different timescale interval.
                The customized template is applied to the events on Agenda view and on month view, the grouping functionality
                is enabled by setting
                <code>group</code> property.
            </p>
        </div>
    </div>
</template>
<style>
    .e-schedule .e-agenda-view .e-appointment .subject {
        font-size: 14px;
    }

    .e-schedule .e-agenda-view .e-appointment .group {
        font-size: 12px;
        font-weight: 500;
    }

    .e-schedule .e-agenda-view .e-appointment .location {
        font-size: 12px;
    }

    .e-schedule .e-date-header-wrap .e-resource-cells {
        font-weight: 500;
    }

    .e-schedule .e-month-view .e-appointment .e-appointment-details {
        padding: 1px;
        padding-left: 3px;
    }
</style>
<script>
    import Vue from "vue";
    import { fifaEventsData } from './datasource';
    import { Internationalization, extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, Month, Agenda, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);

    var instance = new Internationalization();
    var monthVue = Vue.component("month-eventTemplate", {
        template: '<div class="subject">{{data.Subject}}</div>',
        data() {
            return {
                data: {}
            };
        }
    });

    var agendaVue = Vue.component("agenda-eventTemplate", {
        template: '<div><div class="subject">{{data.Subject}}</div><div v-if="data.Description !== null && data.Description !== undefined" class="group">{{data.Description}}</div>' +
        '<div class="location">{{getTimeString(data.StartTime)}}, <span v-if="data.City!== null && data.City!==undefined">{{data.City}}</span></div></div>',
        data() {
            return {
                data: {}
            };
        },
        methods: {
            getTimeString: function (value) {
                return instance.formatDate(value, { skeleton: 'Hm' });
            }
        }
    });

    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], fifaEventsData, null, true) },
                selectedDate: new Date(2018, 5, 20),
                showWeekend: false,
                currentView: 'Month',
                timeScale: { interval: 60, slotCount: 4 },
                agendaEventTemplate: function () {
                    return { template: agendaVue }
                },
                monthEventTemplate: function (e) {
                    return { template: monthVue };
                },
                group: { resources: ['Owners'] },
                resourceData: [
                    { GroupText: 'Group A', GroupId: 1, GroupColor: '#1aaa55' },
                    { GroupText: 'Group B', GroupId: 2, GroupColor: '#357cd2' }
                ],
            }
        },
        provide: {
            schedule: [Day, Week, Month, Agenda, Resize, DragAndDrop]
        },
        methods: {
            oneventRendered: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                if (scheduleObj.ej2Instances.currentView === 'Agenda') {
                    (args.element.firstChild).style.borderLeftColor = categoryColor;
                } else {
                    args.element.style.backgroundColor = categoryColor;
                }

            }
        }
    });

</script>