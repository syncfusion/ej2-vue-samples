<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule height="650px" :eventSettings='eventSettings'>
                    <e-views>
                        <e-view option="Month" :displayDate='displayDate' :numberOfWeeks='numberOfWeeks'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo showcases how to customize the starting week of the month and also customize the number of weeks to be
                rendered in month view.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the starting week of the month view can be customized by using the <code>displayDate</code>
                property and also the number of weeks to be rendered in a month view can be customized by using the
                <code>numberOfWeeks</code> property. These properties have been configured under the <code>e-view</code> directive.
                <code>displayDate</code> and <code>numberOfWeeks</code> properties can be applicable only for month view.
            </p>
        </div>
    </div>
</template>
<script>
    import { generateObject } from './datasource';
    import { ScheduleComponent, ViewDirective, ViewsDirective, Month, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";

    export default {
        components: {
          'ejs-schedule': ScheduleComponent,
          'e-view': ViewDirective,
          'e-views': ViewsDirective
        },
        data: function () {
            return {
                eventSettings: { dataSource: generateObject(new Date(2021, 11, 19).getTime(), new Date(2022, 2, 12).getTime(), true) },
                displayDate: new Date(2022, 0, 16),
                numberOfWeeks: 4
            }
        },
        provide: {
            schedule: [Month, Resize, DragAndDrop]
        },
        methods: {
        }
    }
</script>