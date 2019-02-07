<template>
    <div>
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id="Schedule" ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :currentView='scheduleView'>
                    <e-views>
                        <e-view option="Agenda" :allowVirtualScrolling="virtualscroll"></e-view>
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
                                Allow Virtual Scrolling
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-dropdownlist id="allow-virtual-scroll" :dataSource='datas' :value='value' popupHeight='200px' :change='change'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 30%">
                            <div>
                                Hide Empty Days
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-dropdownlist id="hide-empty-days" :dataSource='datas' :value='values' :change='onChange' popupHeight="200px"></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 30%">
                            <div>
                                Days Count
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div>
                                <ejs-numerictextbox :min='1' :max='15' :value='7' format='n0' :change='onCountChange'>
                                </ejs-numerictextbox>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>
                This demo showcases the agenda view and the configurations available in it.
            </p>
        </div>
        <div id="description">
            <p>
                In this demo, Agenda view is set as active view on Scheduler and made its
                <code>allowVirtualScrolling</code> option as false. With this settings, the Agenda view loads the initial
                data for the next 7 days count from the date value assigned to the
                <code>selectedDate</code> property of the Schedule. The initial data loading for 7 days count is due to the
                default value assigned to the
                <code>agendaDaysCount</code> property which can be customized as per the user needs.
            </p>
            <p>
                When the
                <code>allowVirtualScrolling</code> property is set to true, the user is allowed to scroll through all the
                events simply by scrolling up and down upto the last event available in Schedule.
            </p>
            <p>
                By default, the days which doesn’t have any events will be hidden on this view – but by setting
                <code>hideEmptyAgendaDays</code> property to false will allow the
                <code>No Events</code> text to be displayed against the dates that has no events.
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { generateObject } from './datasource';
    import { SchedulePlugin, Agenda, View } from '@syncfusion/ej2-vue-schedule';
    import { NumericTextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
    import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';

    Vue.use(NumericTextBoxPlugin);
    Vue.use(DropDownListPlugin);
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: generateObject() },
                selectedDate: new Date(2018, 1, 15),
                datas: ['Agenda'],
                scheduleView: 'Agenda',
                virtualscroll: false,
                value: 'False',
                datas: ['True', 'False'],
                values: 'True'
            }
        },
        provide: {
            schedule: [Agenda]
        },
        methods: {
            change: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                let allowVS = (args.value === 'True') ? true : false;
                scheduleObj.views = [{ option: 'Agenda', allowVirtualScrolling: allowVS }];
                scheduleObj.dataBind();
            },

            onChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.hideEmptyAgendaDays = (args.value === 'True') ? true : false;
                scheduleObj.dataBind();
            },

            onCountChange: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                scheduleObj.agendaDaysCount = args.value !== null ? args.value : 7;
                scheduleObj.dataBind();
            }
        }
    });

</script>