<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='currentView'
                    :eventRendered="oneventRendered">
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
                        <td style="width: 30%">
                            <div>
                                Scroll To
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-timepicker :value="date" format='HH:mm' :change="onChange">
                                </ejs-timepicker>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>This demo illustrates the way of manually scrolling to specific time on Schedule.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the way of manually scrolling to specific time on Scheduler has been demonstrated by making use of the
                <code>scrollTo</code> method of Schedule.
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { scheduleData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, TimelineViews, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { TimePickerPlugin } from '@syncfusion/ej2-vue-calendars';
    Vue.use(SchedulePlugin);
    Vue.use(TimePickerPlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2019, 0, 10),
                currentView: 'Week',
                date: new Date(2000, 0, 1, 9)
            }
        },
        provide: {
            schedule: [Day, Week, TimelineViews, Resize, DragAndDrop]
        },
        methods: {
            onChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.scrollTo(args.text);
            },
            oneventRendered: function (args) {
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                args.element.style.backgroundColor = categoryColor;
            }
        }
    });

</script>