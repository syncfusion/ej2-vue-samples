<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule height="650px" :eventSettings='eventSettings'>
                    <e-views>
                        <e-view option="Month" :displayDate='displayDate' :numberOfWeeks='numberOfWeeks'
                            :maxEventsPerRow='maxEventsPerRow'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo showcases how to customize the starting week of the month, the number of weeks rendered, and 
                the maximum number of events rendered in month view.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, the starting week of the month view is customized by using the <code>displayDate</code>
                property. The number of weeks rendered in a month is customized by using the <code>numberOfWeeks</code>
                property and the maximum number of events displayed in a single row is customized by using the
                <code>maxEventsPerRow</code> property. These properties have been configured under the <code>views</code>
                property view options. <code>displayDate</code> and <code>numberOfWeeks</code> properties can be applicable
                only for month view. The <code>maxEventsPerRow</code> property is only applicable for month, timeline, and
                timeline year views.
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
            numberOfWeeks: 4,
            maxEventsPerRow: 3
        }
    },
    provide: {
        schedule: [Month, Resize, DragAndDrop]
    },
    methods: {
    }
}
</script>