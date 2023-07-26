<template>
    <div class="schedule-vue-sample">
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <div class="schedule-demo-heading">
                    Cheapest one way fares from Barcelona to Los Angeles
                </div>
                <ejs-schedule id="Schedule" width="100%" height="650px" :cssClass="cssClass" :readonly="readonly" :selectedDate="selectedDate"
                    :eventSettings="eventSettings" :dataBinding="dataBinding" :dataBound="dataBound" :actionBegin="actionBegin"
                    :popupOpen="popupOpen">
                    <e-resources>
                        <e-resource field="AirlineId" title="Airline" :dataSource="resourceDataSource" :allowMultiple="allowMultiple" name="Airlines"
                            textField="text" idField="id">
                        </e-resource>
                    </e-resources>
                    <e-views>
                        <e-view option="Month"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <div id="property" class="property-panel-table" title="Properties">
                <table id="property" title="Properties" style="width: 100%">
                    <tbody>
                        <tr style="height: 50px">
                            <td>
                                <div>
                                    <ejs-checkbox label="Airways 1" cssClass="e-resource e-airways-1" :checked="true" :change="onChange"></ejs-checkbox>
                                </div>
                            </td>
                        </tr>
                        <tr style="height: 50px">
                            <td>
                                <div>
                                    <ejs-checkbox label="Airways 2" cssClass="e-resource e-airways-2" :checked="true" :change="onChange"></ejs-checkbox>
                                </div>
                            </td>
                        </tr>
                        <tr style="height: 50px">
                            <td>
                                <div>
                                    <ejs-checkbox label="Airways 3" cssClass="e-resource e-airways-3" :checked="true" :change="onChange"></ejs-checkbox>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="action-description">
            <p>
                This demo illustrates how to customize the Scheduler to showcase it as an
                <strong>Airfare calendar</strong> depicting the lowest available price on each day of a month for a specific
                route, say between Barcelona and Los Angeles.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, Scheduler initially displays the fare of the airline service which offers lowest price on each day by comparing
                between the 3 available airlines. Here, the 3 airline services acts as the Scheduler resources. Appointment
                collection has been dynamically generated for a month (for all the 3 resources) within the
                <code>generateEvents</code> method and then filtered externally based on the ascending Fare value within
                the
                <code>filterByFare</code> method. Since each day of the Scheduler needs to display only a single appointment
                showing the fare value, therefore it’s been queried to take only the first 30 values from the sorted list
                and assigned it to the Schedule
                <code>dataSource</code>. Here, the filtering process needs to be carried out during the
                <code>databinding</code> event and therefore, the dataSource of Scheduler is assigned within this event.
            </p>
            <p>
                Scheduler has been rendered in a readonly mode and therefore no editing actions are allowed here. To customize the look of
                the appointments that displays the fare value,
                <code>template</code> option within the
                <code>eventSettings</code> is being used. To highlight the day that holds the overall lowest price of a month,
                the background color of that day’s cell is customized within the
                <code>dataBound</code> event. Also, the tooltip has been enabled with
                <code>template</code> option to display the flight details in a customized style.
            </p>
        </div>

    </div>
</template>
<style>
    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .airline-flex-row {
        display: flex;
        padding: 0 5px;
        line-height: 20px;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .airline-flex-col {
        flex: 0 0 50%;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .text-right {
        text-align: right;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .margin-right {
        margin-left: -21px;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .text-size {
        font-size: 14px;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .border-right {
        border-right: 1px solid #fff;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .airline-fare {
        padding-left: 8px;
    }

    .schedule-vue-sample .e-schedule .e-appointment .template-wrap {
        color: black;
        width: 100%;
    }

    .fluent-dark .schedule-vue-sample .e-schedule .e-appointment .template-wrap,
    .bootstrap5-dark .schedule-vue-sample .e-schedule .e-appointment .template-wrap,
    .tailwind-dark .schedule-vue-sample .e-schedule .e-appointment .template-wrap,
    .bootstrap-dark .schedule-vue-sample .e-schedule .e-appointment .template-wrap,
    .fabric-dark .schedule-vue-sample .e-schedule .e-appointment .template-wrap,
    .material-dark .schedule-vue-sample .e-schedule .e-appointment .template-wrap,
    .highcontrast .schedule-vue-sample .e-schedule .e-appointment .template-wrap,
    .material3-dark .schedule-vue-sample .e-schedule .e-appointment .template-wrap {
        color: #fff;
    }

    .schedule-vue-sample .schedule-resources.e-schedule .e-work-cells.best-price {
        background-color: #FFFBDF;
    }

    .schedule-vue-sample .schedule-resources.e-schedule .best-price:not(.e-work-cells) {
        color: #1A961A;
        float: right;
        margin-top: -22px;
        margin-right: 3px;
        width: auto;
        font-size: 12px;
    }

    .fluent-dark .schedule-vue-sample .e-schedule .best-price:not(.e-work-cells),
    .bootstrap5-dark .schedule-vue-sample .e-schedule .best-price:not(.e-work-cells),
    .tailwind-dark .schedule-vue-sample .e-schedule .best-price:not(.e-work-cells),
    .bootstrap-dark .schedule-vue-sample .e-schedule .best-price:not(.e-work-cells),
    .fabric-dark .schedule-vue-sample .e-schedule .best-price:not(.e-work-cells),
    .material-dark .schedule-vue-sample .e-schedule .best-price:not(.e-work-cells),
    .highcontrast .schedule-vue-sample .e-schedule .best-price:not(.e-work-cells),
    .material3-dark .schedule-vue-sample .e-schedule .best-price:not(.e-work-cells) {
        color: #33DB33;
    }

    .fluent-dark .schedule-vue-sample .e-schedule .e-work-cells.best-price,
    .bootstrap5-dark .schedule-vue-sample .e-schedule .e-work-cells.best-price,
    .tailwind-dark .schedule-vue-sample .e-schedule .e-work-cells.best-price,
    .bootstrap-dark .schedule-vue-sample .e-schedule .e-work-cells.best-price,
    .fabric-dark .schedule-vue-sample .e-schedule .e-work-cells.best-price,
    .material-dark .schedule-vue-sample .e-schedule .e-work-cells.best-price,
    .highcontrast .schedule-vue-sample .e-schedule .e-work-cells.best-price,
    .material3-dark .schedule-vue-sample .e-schedule .e-work-cells.best-price {
        background-color: #393939;
    }

    .schedule-vue-sample .schedule-resources.e-schedule.e-device .best-price:not(.e-work-cells) {
        display: none;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .event-tooltip {
        width: 217px;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .airline {
        width: 40%;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .event-tooltip .airline-header {
        display: flex;
        padding: 8px 0px 8px 0px;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .event-tooltip .airline-details {
        display: flex;
        padding: 8px 5px 8px 5px;
    }

    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .event-tooltip .airline-timings,
    .schedule-resources.e-tooltip-wrap.e-schedule-event-tooltip .event-tooltip .airline-timings-title {
        display: flex;
        padding: 5px;
    }

    .schedule-resources.e-schedule-event-tooltip .event-tooltip .airline-header {
        border-bottom: 1px solid #e0e0e0;
    }

    .schedule-resources.e-schedule-event-tooltip .event-tooltip .airline-logo,
    .schedule-vue-sample .schedule-resources.e-schedule .template-wrap .airline-logo {
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: -3px;
        width: 25px;
        height: 25px;
    }

    .schedule-resources.e-schedule-event-tooltip .event-tooltip .airline-logo.airways-1,
    .schedule-vue-sample .schedule-resources.e-schedule .template-wrap .airline-logo.airways-1 {
        background-image: url('./images/airways-1.svg');
    }

    .schedule-resources.e-schedule-event-tooltip .event-tooltip .airline-logo.airways-2,
    .schedule-vue-sample .schedule-resources.e-schedule .template-wrap .airline-logo.airways-2 {
        background-image: url('./images/airways-2.svg');
    }

    .schedule-resources.e-schedule-event-tooltip .event-tooltip .airline-logo.airways-3,
    .schedule-vue-sample .e-schedule .template-wrap .airline-logo.airways-3 {
        background-image: url('./images/airways-3.svg');
    }

    .schedule-vue-sample .schedule-resources.e-schedule .fare-detail {
        color: #00837B;
        font-size: 16px;
        font-weight: 500;
        height: 25px;
        padding-left: 5px;
    }

    .highcontrast .schedule-vue-sample .e-schedule .fare-detail {
        color: #1B96BB;
    }

    .schedule-vue-sample .schedule-resources.e-schedule.e-device .fare-detail {
        font-size: 11px;
    }

    .schedule-vue-sample .schedule-resources.e-schedule .e-toolbar-item.e-date-range {
        margin-left: 8px;
        pointer-events: none;
    }

    .schedule-vue-sample .schedule-resources.e-schedule .airway-name {
        font-size: 12px;
        overflow: hidden;
        padding-left: 5px;
        text-overflow: ellipsis;
    }

    .schedule-vue-sample .schedule-resources.e-schedule.e-device .airway-name {
        display: none;
    }

    .schedule-vue-sample .schedule-resources.e-schedule .e-month-view .e-appointment {
        height: 45px;
        background: none;
        border-width: 0;
        top: 10px !important;
    }

    .schedule-vue-sample .schedule-resources.e-schedule.e-device .e-month-view .e-appointment {
        height: 45px;
    }

    .e-bigger .schedule-vue-sample .schedule-resources.e-schedule .e-month-view .e-appointment {
        height: 40px;
    }

    .schedule-vue-sample .schedule-resources.e-schedule .e-month-view .e-appointment .e-appointment-details {
        height: inherit;
    }

    .schedule-vue-sample .schedule-resources.e-schedule .e-month-view .e-more-indicator {
        display: none
    }

    .schedule-vue-sample .schedule-resources.e-schedule .e-month-view .e-appointment.e-appointment-border,
    .schedule-vue-sample .schedule-resources.e-schedule .e-month-view .e-appointment:focus {
        border-width: 0;
    }

    .schedule-resources.e-tooltip-wrap.e-popup.e-schedule-event-tooltip {
        opacity: 1;
    }

    .highcontrast .schedule-resources.e-tooltip-wrap.e-popup.e-schedule-event-tooltip {
        border-color: #e0e0e0;
        background-color: #fff;
    }

    .highcontrast .schedule-resources.e-tooltip-wrap.e-popup.e-schedule-event-tooltip .e-tip-content {
        color: #000;
    }

    .schedule-resources.e-tooltip-wrap.e-popup.e-schedule-event-tooltip .event-tooltip .airline-name {
        font-weight: 500;
        font-size: 16px;
        padding-left: 10px;
        padding-top: 3px;
    }

    .schedule-resources.e-tooltip-wrap.e-popup.e-schedule-event-tooltip .event-tooltip .airline-title {
        font-weight: 500;
        font-size: 14px;
    }

    .schedule-resources.e-tooltip-wrap.e-popup.e-schedule-event-tooltip .event-tooltip .airline-logo {
        margin-left: 5px;
        background-size: 25px;
        height: 25px;
        width: 25px;
        margin-top: 0px;
    }

    .schedule-vue-sample .schedule-demo-heading {
        font-size: 16px;
        padding-bottom: 15px;
        text-align: center;
        font-weight: 500
    }
    
    .schedule-vue-sample .property-panel-content .e-checkbox-wrapper.e-resource.e-airways-1 .e-frame {
        background-color: #EA7A57;
        border-color: transparent;
    }

    .schedule-vue-sample .property-panel-content .e-checkbox-wrapper.e-resource.e-airways-2 .e-frame {
        background-color: #357CD2;
        border-color: transparent;
    }

    .schedule-vue-sample .property-panel-content .e-checkbox-wrapper.e-resource.e-airways-3 .e-frame {
        background-color: #7FA900;
        border-color: transparent;
    }

    @media (max-width: 550px) {
        .schedule-vue-sample .schedule-demo-heading {
            font-size: 14px;
        }
    }
</style>
<script>
    import Vue from "vue";
    import { Month } from '@syncfusion/ej2-vue-schedule';
    import { extend, Internationalization, createElement, closest, remove, addClass, removeClass } from '@syncfusion/ej2-base';
    import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
    import { SchedulePlugin } from '@syncfusion/ej2-vue-schedule';
    import tooltipTemplate from "./resource-tooltipTemplate.vue";
    Vue.use(DropDownListPlugin);
    Vue.use(SchedulePlugin);
    var dManager = [];
    var initialLoad = true;

    var instance = new Internationalization();
    var eventTemplateVue = Vue.component("event-template", {
        template: '<div class="template-wrap"><div class="fare-detail">${{data.Fare}}</div>' +
        '<div class="airline-name" style="display:flex;padding-left:5px;">' +
        '<div :class="getClass"></div>' +
        '<div class="airway-name">{{getAirwaysName(data.AirlineId)}}</div></div></div>',
        data() {
            return {
                data: {}
            };
        },
        computed: {
            getClass: function() {
                return 'airline-logo ' + this.getAirwaysImage(this.data.AirlineId);
            }
        },
        methods: {
            getAirwaysName: function (value) {
                return (value === 1) ? 'Airways 1' : (value === 2) ? 'Airways 2' : 'Airways 3';
            },
            getAirwaysImage: function (value) {
                return (value === 1) ? 'airways-1' : (value === 2) ? 'airways-2' : 'airways-3';
            },
            getFormattedTime: function (date) {
                return instance.formatDate(date, { skeleton: 'Hm' });
            }
        }
    });

    export default Vue.extend({
        data: function () {
            let tooltip = function () {
                return { template: tooltipTemplate }
            };
            let eventTemplate = function () {
                return { template: eventTemplateVue }
            };
            return {
                eventSettings: { template: eventTemplate, enableTooltip: true, tooltipTemplate: tooltip },
                cssClass: "schedule-resources",
                selectedDate: new Date(2021, 3, 1),
                allowMultiple: true,
                initialLoad: true,
                readonly: true,
                resourceDataSource: [
                    { text: 'Airways 1', id: 1 },
                    { text: 'Airways 2', id: 2 },
                    { text: 'Airways 3', id: 3 }
                ],
            }
        },
        provide: {
            schedule: [Month]
        },
        methods: {
            actionBegin: function (args) {
                if (args.requestType === 'toolbarItemRendering') {
                    args.items[2].align = 'Center';
                    args.items[2].suffixIcon = '';
                    args.items = args.items.splice(2, 1);
                }
            },
            dataBinding: function (args) {
                if (this.initialLoad) {
                    let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
                    scheduleObj.eventSettings.dataSource = this.generateEvents(scheduleObj);
                    this.initialLoad = false;
                }
            },
            popupOpen: function (args) {
                args.cancel = true;
            },
            dataBound: function () {
                let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
                var eventCollections = scheduleObj.getCurrentViewEvents();
                eventCollections.sort(function (a, b) {
                    return ((a.Fare) - (b.Fare));
                });
                var indexDate = new Date(((eventCollections[0]).StartTime).getTime());
                indexDate.setHours(0, 0, 0, 0);
                var index = scheduleObj.getIndexOfDate(scheduleObj.activeView.renderDates, indexDate);
                var target = scheduleObj.element.querySelectorAll('.e-work-cells')[index];
                addClass([target], 'best-price');
                target.appendChild(createElement('div', { className: 'best-price', innerHTML: 'Best Price' }));
            },

            filterByFare: function (appointments, scheduleObj) {
                appointments.sort(function (object1, object2) {
                    var d1 = (object1.StartTime).getTime();
                    var d2 = (object2.StartTime).getTime();
                    var d3 = (object1.EndTime).getTime();
                    var d4 = (object2.EndTime).getTime();
                    return ((d1 - d2) || ((d4 - d2) - (d3 - d1)));
                });
                var selectedDate = new Date(2021, 3, 1);
                var renderDate = scheduleObj.activeView.getRenderDates();
                var finalData = [];
                for (var i = 0; i < renderDate.length; i++) {
                    var date = renderDate[i];
                    if (selectedDate.getMonth() === date.getMonth()) {
                        var strTime = new Date(date.getTime());
                        var endTime = new Date(new Date(strTime.getTime()).setHours(23, 59, 59, 59));
                        var perDayData = scheduleObj.eventBase.filterEvents(strTime, endTime, appointments);
                        if (perDayData.length > 0) {
                            perDayData.sort(function (a, b) { return ((a.Fare) - (b.Fare)); });
                            finalData.push(perDayData[0]);
                        }
                    }
                }
                return finalData;
            },

            generateEvents: function (scheduleObj) {
                var collections = [];
                var dataCollections = [
                    {
                        Id: 100,
                        StartTime: new Date(2021, 3, 1, 8, 30),
                        EndTime: new Date(2021, 3, 1, 10, 0),
                        AirlineId: 1
                    }, {
                        Id: 102,
                        StartTime: new Date(2021, 3, 1, 11, 0),
                        EndTime: new Date(2021, 3, 1, 12, 0),
                        AirlineId: 2
                    }, {
                        Id: 103,
                        StartTime: new Date(2021, 3, 1, 14, 0),
                        EndTime: new Date(2021, 3, 1, 15, 0),
                        AirlineId: 3
                    }
                ];
                var start = new Date(2021, 3, 1);
                var dateCollections = Array.apply(null, { length: 30 })
                    .map(function (value, index) { return new Date(start.getTime() + (1000 * 60 * 60 * 24 * index)); });
                var id = 1;
                var day = 0;
                for (var i = 0; i < dateCollections.length; i++) {
                    var resource = 1;
                    for (var j = 0; j < dataCollections.length; j++) {
                        var strDate = new Date((dataCollections[j].StartTime).getTime());
                        var endDate = new Date((dataCollections[j].EndTime).getTime());
                        collections.push({
                            Id: id,
                            StartTime: new Date(strDate.setDate(strDate.getDate() + day)),
                            EndTime: new Date(endDate.setDate(endDate.getDate() + day)),
                            AirlineId: resource,
                            Fare: ((Math.random() * 500) + 100).toFixed(2)
                        });
                        resource += 1;
                        id += 1;
                    }
                    day += 1;
                }
                dManager = extend([], collections, null, true);
                var filteredCollection = this.filterByFare(collections, scheduleObj);
                return filteredCollection;
            },

            onChange: function (args) {
                let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
                var tdElement = scheduleObj.element.querySelector('.best-price:not(.e-work-cells)');
                if (tdElement) {
                    removeClass([closest(tdElement, 'td')], 'best-price');
                    remove(tdElement);
                }

                var scheduleData = new extend([], dManager, null, true);
                var selectedResource = [];
                var resourceCollection = [].slice.call(document.querySelectorAll('.e-resource'));
                resourceCollection.forEach(function (element, index) {
                    var resEle = element.querySelector('.e-icons');
                    if (resEle && resEle.classList.contains('e-check')) {
                       selectedResource.push(index);
                    }
                });
                var filteredData = [];
                var resources = scheduleObj.resourceBase.resourceCollection.slice(-1)[0].dataSource;
                var _loop_1 = function (resource) {
                    var data = scheduleData.filter(function (event) { return resources[resource].id === event.AirlineId; });
                    filteredData = filteredData.concat(data);
                };
                for (var _i = 0, selectedResource_1 = selectedResource; _i < selectedResource_1.length; _i++) {
                    var resource = selectedResource_1[_i];
                    _loop_1(resource);
                }
                filteredData = this.filterByFare(filteredData, scheduleObj);
                scheduleObj.eventSettings.dataSource = filteredData;
                scheduleObj.dataBind();
            }

        }
    });

</script>