<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' width="100%" height="650px" :selectedDate='selectedDate' :currentView='currentView'
                :eventRendered="onEventRendered" :eventSettings="eventSettings">
                    <e-header-rows>
                        <e-header-row option="Month" :template="monthHeaderTemplate"></e-header-row>
                        <e-header-row option="Week" :template="weekHeaderTemplate"></e-header-row>
                        <e-header-row option="Date"></e-header-row>
                    </e-header-rows>
                    <e-views>
                        <e-view option="TimelineMonth" :interval='interval'></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo showcases how to display the additional header rows on timeline view. In this demo, an additional row for displaying
                <b>month</b> and
                <b>week number</b> has been added.
            </p>
        </div>

        <div id="description">
            <p>
                Unlike the usual date and time rows, timeline view can be displayed with additional header rows to display the years, months
                and week numbers. To do so, define the
                <code>headerRows</code> property which accepts an array of object and each object includes the
                <code>option</code> API to define the specific header row type such as
                <code>Year</code>,
                <code>Month</code>,
                <code>Week</code> and
                <code>Date</code>. The object also includes the
                <code>template</code> option to provide label customization on these rows. This
                <code>headerRows</code> property is application only on timeline views.
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { extend, Internationalization } from '@syncfusion/ej2-base';
    import { SchedulePlugin, TimelineMonth, TimelineViews, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
    import { getWeekNumber, CellTemplateArgs } from '@syncfusion/ej2-schedule';
    import { headerRowData } from './datasource';
    Vue.use(SchedulePlugin);

    var instance = new Internationalization();
    var monthHeaderVue = Vue.component("month-header", {
        template: '<span class="month">{{getMonthDetails(data)}}</span>',
        data() {
            return {
                data: {}
            };
        },
        methods: {
            getMonthDetails: function (value) {
                return instance.formatDate(value.date, { skeleton: 'yMMMM' });
            }
        }
    });

    var weekHeaderVue = Vue.component("week-header", {
        template: '<span class="week">{{getWeekDetails(data)}}</span>',
        data() {
            return {
                data: {}
            };
        },
        methods: {
             getWeekDetails: function (value) {
                return 'Week ' + getWeekNumber(value.date);
            }
        }
    });

    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], headerRowData, null, true)
                },
                selectedDate: new Date(2018, 0, 1),
                currentView: 'Month',
                interval: 12,
                monthHeaderTemplate: function (e) {
                    return {
                        template: monthHeaderVue
                    };
                },
                weekHeaderTemplate: function (e) {
                    return {
                        template: weekHeaderVue
                    };
                }
            }
        },
        provide: {
            schedule: [TimelineMonth, TimelineViews, Resize, DragAndDrop]
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