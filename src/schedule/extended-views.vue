<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :eventRendered="oneventRendered">
                    <e-views>
                        <e-view option="Day" displayName='3 Days' :interval='dayInterval'></e-view>
                        <e-view option="Week" displayName='2 Weeks' isSelected=true :interval='weekInterval'></e-view>
                        <e-view option="Month" displayName="4 Months" :interval='monthInterval'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo illustrates how to display n number of days, weeks and months on a single view.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the
                <code>interval</code> property has been defined with different values on each view such as 3 on day view,
                2 on week view and 4 on month view – so that 3 days, 2 weeks and 4 months displayed on the respective views.
                This property is not applicable on agenda and month agenda views
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { fifaEventsData } from './datasource';
    import { Internationalization, extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, Month, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);

    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], fifaEventsData, null, true) },
                selectedDate: new Date(2018, 5, 21),
                showWeekend: false,
                dayInterval: 3,
                weekInterval: 2,
                monthInterval: 4
            }
        },
        provide: {
            schedule: [Day, Week, Month, Resize, DragAndDrop]
        },
        methods: {
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