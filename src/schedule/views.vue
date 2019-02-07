<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='scheduleView'
                    :eventRendered="oneventRendered">
                    <e-views>
                        <e-view option="Day"></e-view>
                        <e-view option="Week"></e-view>
                        <e-view option="WorkWeek"></e-view>
                        <e-view option="Month"></e-view>
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
                                Current View
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-dropdownlist id='scheduleview' :dataSource='datas' :value='scheduleView' :change='changevalue'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>
                This demo showcases the usage of basic views available in Scheduler such as Day, Week, Work Week and Month. Here, the wildlife
                events being held in zoos are displayed against its respective timings.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, Scheduler is showcased with 4 basic views namely
            </p>
            <ul>
                <li>Day</li>
                <li>Week</li>
                <li>Work Week</li>
                <li>Month</li>
            </ul>
            <p>
                The user can navigate between different view options available on the header section just by clicking on it. From any of
                the views, the user can switch back to the day view by clicking dates in the date header section. These view
                options to be displayed on the Scheduler header bar is based on the values ['Day', 'Week', 'WorkWeek', 'Month']
                assigned to the
                <code>views</code> property.
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { zooEventsData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], zooEventsData, null, true) },
                selectedDate: new Date(2018, 1, 15),
                datas: ['Day', 'Week', 'WorkWeek', 'Month'],
                scheduleView: 'Week'
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Resize, DragAndDrop]
        },
        methods: {

            oneventRendered: function (args) {
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                args.element.style.backgroundColor = categoryColor;
            },
            changevalue: function (args) {
                let cotainerObj = this.$refs.ScheduleObj;
                cotainerObj.currentView = args.value;
                cotainerObj.dataBind();
            }
        }
    });

</script>