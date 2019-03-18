<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="550px" :selectedDate='selectedDate' :currentView='currentView' :eventSettings='eventSettings'>   
                    <e-views>
                        <e-view option="TimelineDay"></e-view>
                        <e-view option="TimelineWeek"></e-view>
                        <e-view option="TimelineWorkWeek"></e-view>
                        <e-view option="TimelineMonth"></e-view>
                        <e-view option="Agenda"></e-view>
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
                                Current Date
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-datepicker id='datepicker' :value='selectedDate' :showClearButton='false' :change='onDateChange'></ejs-datepicker>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>This demo showcases how the timeline scheduler looks like with its default set of configurations.</p>
        </div>
        <div id="description">
            <p>
                Like the vertical scheduler, timeline view has the similar view types such as
            </p>
            <ul>
                <li>Timeline Day</li>
                <li>Timeline Week</li>
                <li>Timeline WorkWeek</li>
                <li>Timeline Month</li>
            </ul>
            <p>The Agenda and MonthAgenda views shares the same layout for both the vertical and timeline views.</p> <br>
            <p>To use any of the timeline views such as day, week and work week in your application, the common <code>TimelineViews</code> module needs to be injected into the <code>provide</code> section. If in case, the timeline month view needs to be utilized, then <code>TimelineMonth</code> module needs to be injected.</p>
        </div>
    </div>
</template>
<style>
    .e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {
        width: 90px;
    }

    .e-schedule .e-agenda-view .e-resource-column {
        width: 100px;
    }
</style>

<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { scheduleData, timelineData } from './datasource';
    import { SchedulePlugin, TimelineMonth, TimelineViews, Agenda, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], scheduleData.concat(timelineData), null, true),
                },
                selectedDate: new Date(2019, 0, 10),
                currentView: 'TimelineWeek'
            }
        },
        provide: {
            schedule: [TimelineViews, TimelineMonth, Agenda, Resize, DragAndDrop]
        },
        methods: {
            onDateChange: function (args) {
                this.selectedDate = args.value;
            }
        }
    });
</script>