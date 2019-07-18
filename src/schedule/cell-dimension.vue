<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' width='100%' :cssClass='cssClass' height='650px' :selectedDate='selectedDate' :eventSettings='eventSettings'
                    :eventRendered="onEventRendered" :currentView="currentView" :actionComplete="onActionComplete" :showTimeIndicator="showTimeIndicator">
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="WorkWeek"></e-view>
                        <e-view option="Month"></e-view>
                        <e-view option="TimelineWeek"></e-view>
                        <e-view option="TimelineMonth"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo shows how to set the width and height of the cells by overriding the default CSS classes, so that the Schedule
                events are viewable in a zoomed in style.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the height and width of the Scheduler cells are set by overriding the default CSS class.
            </p>
        </div>
    </div>
</template>

<style>
    .schedule-cell-dimension.e-schedule .e-vertical-view .e-date-header-wrap table col,
    .schedule-cell-dimension.e-schedule .e-vertical-view .e-content-wrap table col {
        width: 200px;
    }

    .schedule-cell-dimension.e-schedule .e-vertical-view .e-time-cells-wrap table td,
    .schedule-cell-dimension.e-schedule .e-vertical-view .e-work-cells {
        height: 100px;
    }

    .schedule-cell-dimension.e-schedule .e-month-view .e-work-cells,
    .schedule-cell-dimension.e-schedule .e-month-view .e-date-header-wrap table col {
        width: 200px;
    }

    .schedule-cell-dimension.e-schedule .e-month-view .e-work-cells {
        height: 200px;
    }

    .schedule-cell-dimension.e-schedule .e-timeline-month-view .e-content-wrap table col,
    .schedule-cell-dimension.e-schedule .e-timeline-view .e-content-wrap table col {
        width: 100px;
    }

    .schedule-cell-dimension.e-schedule .e-timeline-view .e-work-cells,
    .schedule-cell-dimension.e-schedule .e-timeline-month-view .e-work-cells {
        height: 600px;
    }
</style>
<script>
    import Vue from "vue";
    import { employeeEventData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, TimelineMonth, TimelineViews, View, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], employeeEventData, null, true) },
                selectedDate: new Date(2018, 1, 15),
                currentView: 'Week',
                selectedDate: new Date(2018, 1, 15),
                cssClass: 'schedule-cell-dimension',
                showTimeIndicator: false
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, TimelineMonth, TimelineViews, Resize, DragAndDrop]
        },
        methods: {
            onEventRendered: function (args) {
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                args.element.style.backgroundColor = categoryColor;
            }
        }
    });

</script>