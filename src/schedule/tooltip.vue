<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :currentView='currentView' :eventSettings='eventSettings'
                    :eventRendered="onEventRendered">
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <tbody>
                    <tr style="height: 50px">
                        <td>
                            <div>
                                <ejs-checkbox id="checkbox" label="Enable Tooltip" checked="true" :change="onChange"></ejs-checkbox>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td>
                            <div>
                                <ejs-checkbox id="checkbox1" label="Enable Tooltip Template" checked="true" :change="onTemplateChange"></ejs-checkbox>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="action-description">
            <p>This demo illustrates how to enable tooltip on Scheduler events as well as the way to customize it. The tooltip
                can be customized to display any of the information in a formatted style by making use of the tooltip template
                option.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the tooltip is enabled to display on events by setting true to
                <code>enableTooltip</code> option within the
                <code>eventSettings</code> property. After enabling the default tooltip, it is customized to display the
                needed event information along with the appropriate images by making use of the
                <code>tooltipTemplate</code> option within the
                <code>eventSettings</code>.
            </p>
            <p>
                The
                <code>tooltipTemplate</code> option will not work, if
                <code>enableTooltip</code> is set to false. In mobile devices, tap holding the events will open the tooltip.
            </p>
        </div>
    </div>
</template>
<style>
    .e-schedule-event-tooltip .tooltip-wrap {
        display: flex;
    }

    .e-schedule-event-tooltip .tooltip-wrap .image {
        background-image: url('./images/public-event.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 50px;
        height: 50px;
    }

    .e-schedule-event-tooltip .tooltip-wrap .content-area {
        padding-left: 6px;
        font-size: 12px;
    }

    .e-schedule-event-tooltip .tooltip-wrap .maintenance {
        background-image: url('./images/maintenance.png');
    }

    .fabric .e-schedule-event-tooltip .tooltip-wrap .maintenance,
    .highcontrast .e-schedule-event-tooltip .tooltip-wrap .maintenance {
        background-image: url('./images/maintenance1.png');
    }

    .e-schedule-event-tooltip .tooltip-wrap .public-event {
        background-image: url('./images/public-event.png');
    }

    .fabric .e-schedule-event-tooltip .tooltip-wrap .public-event,
    .highcontrast .e-schedule-event-tooltip .tooltip-wrap .public-event {
        background-image: url('./images/public-event1.png');
    }

    .e-schedule-event-tooltip .tooltip-wrap .family-event {
        background-image: url('./images/family-event.png');
    }

    .fabric .e-schedule-event-tooltip .tooltip-wrap .family-event,
    .highcontrast .e-schedule-event-tooltip .tooltip-wrap .family-event {
        background-image: url('./images/family-event1.png');
    }

    .e-schedule-event-tooltip .tooltip-wrap .commercial-event {
        background-image: url('./images/commercial-event.png');
    }

    .fabric .e-schedule-event-tooltip .tooltip-wrap .commercial-event,
    .highcontrast .e-schedule-event-tooltip .tooltip-wrap .commercial-event {
        background-image: url('./images/commercial-event1.png');
    }

    .e-schedule-event-tooltip .tooltip-wrap .name {
        font-weight: 500;
        font-size: 14px;
    }
</style>
<script>
    import Vue from "vue";
    import { eventsData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { CheckBoxPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-buttons';
    Vue.use(SchedulePlugin);
    Vue.use(CheckBoxPlugin);

    var tooltipVue = Vue.component("tooltipTemplate", {
        template: '<div class="tooltip-wrap"><div :class="getClass"></div><div class="content-area">' +
        '<div class="name">{{data.Subject}}</div><div v-if="data.City!== null && data.City!==undefined" class="city">{{data.City}}</div>' +
        '<div class="time">From&nbsp;:&nbsp;{{(data.StartTime).toLocaleString()}} </div>' +
        '<div class="time">To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{{(data.EndTime).toLocaleString()}} </div></div></div>',
        data() {
            return {
                data: {}
            };
        },
        computed: {
            getClass: function() {
                return 'image ' + this.data.EventType;
            }
        }
    });


    export default Vue.extend({
        data: function () {
            let tooltipTemplate = function () {
                return { template: tooltipVue }
            };
            return {
                eventSettings: { dataSource: extend([], eventsData, null, true), enableTooltip: true, tooltipTemplate: tooltipTemplate },
                selectedDate: new Date(2018, 1, 15),
                currentView: 'Week'
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        },
        methods: {
            onChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                if (args.checked) {
                    scheduleObj.ej2Instances.eventSettings.enableTooltip = true;
                } else {
                    scheduleObj.ej2Instances.eventSettings.enableTooltip = false;
                }
                scheduleObj.dataBind();
            },

            onTemplateChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                if (args.checked) {
                    scheduleObj.ej2Instances.eventSettings.tooltipTemplate = this.template;
                } else {
                    scheduleObj.ej2Instances.eventSettings.tooltipTemplate = null;
                }
                scheduleObj.dataBind();
            },

            onEventRendered: function (args) {
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