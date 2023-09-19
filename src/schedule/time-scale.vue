<template>
    <div class="schedule-vue-sample">
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" :cssClass="cssClass" height="650px" :selectedDate='selectedDate' :currentView='currentView' :workDays='workDays' :timeScale="timeScale" :eventSettings='eventSettings'>
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="TimelineDay"></e-view>
                        <e-view option="TimelineWeek"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <tbody>
                    <tr style="height: 50px">
                        <td style="width: 100%;">
                            <div>
                                <ejs-dropdownlist id="interval" :dataSource='intervalData' :value='intervalValue' :change='changeInterval' popupHeight="200px"
                                placeholder="Interval (in minutes)" floatLabelType="Always"></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 100%;">
                            <div>
                                <ejs-dropdownlist id="slotCount" :dataSource='slotCountData' :value='slotCountValue' :change='changeSlotCount' popupHeight="200px"
                                placeholder="Slot Count" floatLabelType="Always"></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 100%;">
                            <div>
                                <ejs-dropdownlist id="timescale" :dataSource='timescaleData' :value='timescaleValue' :change='changeTimescale'
                                placeholder="Gridlines" floatLabelType="Always"></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 100%;">
                            <div>
                                <ejs-dropdownlist id="template" :dataSource='templateData' :value='templateValue' :change='changeTemplate'
                                placeholder="Apply Template" floatLabelType="Always"></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="action-description">
            <p>
                This demo depicts how to customize the grid lines of Scheduler with different duration, count and also, how to apply template
                customizations on it.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, Scheduler has been allowed to display different number of grid lines per hour assigned with different duration
                to each cell, by making use of the
                <code>interval</code> and
                <code>slotCount</code> properties. The grid lines can also be disabled on schedule, by setting `false` to
                the
                <code>enable</code> property available within
                <code>timeScale</code>. The time header text can be customized by making use of the
                <code>majorSlotTemplate</code> and
                <code>minorSlotTemplate</code> properties.
            </p>
        </div>
    </div>
</template>

<style>
    .time-scale.e-schedule.e-device .e-vertical-view .e-left-indent,
    .time-scale.e-schedule.e-device .e-vertical-view .e-time-cells-wrap {
        width: 50px;
    }

    .time-scale.e-schedule .e-timeline-view .e-date-header-wrap table col,
    .time-scale.e-schedule .e-timeline-view .e-content-wrap table col {
        width: 75px;
    }
</style>

<script>
    import { createApp } from 'vue';
    import { scheduleData } from './datasource';
    import { Internationalization, extend } from '@syncfusion/ej2-base';
    import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, TimelineViews, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';

    var app = createApp();
    let instance = new Internationalization();

    var majorTemplateVue = app.component("major-template", {
        template: '<div>{{majorSlotTemplate(data.date)}}</div>',
        data() {
            return {
                data: {}
            };
        },
        methods: {
            majorSlotTemplate: function (date) {
                return instance.formatDate(date, { skeleton: 'hm' });
            }
        }
    });

    var minorTemplateVue = app.component("minor-template", {
        template: '<div style="text-align: center">{{minorSlotTemplate(data.date)}}</div>',
        data() {
            return {
                data: {}
            };
        },
        methods: {
            minorSlotTemplate: function (date) {
                return instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
            }
        }
    });

    export default {
        components: {
          'ejs-schedule': ScheduleComponent,
          'e-view': ViewDirective,
          'e-views': ViewsDirective,
          'ejs-dropdownlist': DropDownListComponent
        },
        data: function () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2021, 0, 10),
                currentView: 'TimelineWeek',
                timeScale: { enable: true, interval: 60, slotCount: 6 },
                workDays: [0, 1, 2, 3, 4, 5],
                cssClass: 'time-scale',
                intervalValue: '60',
                intervalData: ['30', '60', '90', '120', '150', '180', '240', '300', '720'],
                slotCountValue: '6',
                slotCountData: ['1', '2', '3', '4', '5', '6'],
                timescaleValue: 'Show',
                timescaleData: ['Show', 'Hide'],
                templateValue: 'No',
                templateData: ['No', 'Yes'],
                minorSlotTemplate: function (e) {
                    return { template: minorTemplateVue }
                },
                majorSlotTemplate: function (e) {
                    return {
                        template: majorTemplateVue
                    };
                }
            }
        },
        provide: {
            schedule: [Day, Week, TimelineViews, Resize, DragAndDrop]
        },
        methods: {
            changeInterval: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.ej2Instances.timeScale.interval = parseInt(args.value, 10);
                scheduleObj.dataBind();
            },

            changeSlotCount: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.ej2Instances.timeScale.slotCount = parseInt(args.value, 10);
                scheduleObj.dataBind();
            },

            changeTimescale: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.ej2Instances.timeScale.enable = (args.value === 'Show') ? true : false;
                scheduleObj.dataBind();
            },

            changeTemplate: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.ej2Instances.timeScale.majorSlotTemplate = (args.value === 'Yes') ? this.majorSlotTemplate : null;
                scheduleObj.ej2Instances.timeScale.minorSlotTemplate = (args.value === 'Yes') ? this.minorSlotTemplate : null;
                scheduleObj.dataBind();
            }
        }
    };

</script>
