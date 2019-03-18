<template>
<div>
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
            <div class="col-md-12">
                <ejs-schedule id="schedule" ref="ScheduleObj" width='100%' height='650px'
                :selectedDate='selectedDate' :eventSettings='eventSettings'>
                </ejs-schedule>
                <ejs-grid id="grid" ref="GridObj" width='auto' height='505px' :dataSource="data" style="display: none;">
                    <e-columns>
                        <e-column field='Subject' headerText='Subject' width='120'></e-column>
                        <e-column field='Location' headerText='Location' width='120'></e-column>
                        <e-column field='StartTime' headerText='Start Time' width='120' :format='formatoptions'></e-column>
                        <e-column field='EndTime' headerText='End Time' width='120' :format='formatoptions'></e-column>
                    </e-columns>
                </ejs-grid>
            </div>
        </div>
    </div>
    <div class="col-lg-3 property-section property-customization">
            <p class="property-panel-header header-customization" style="width: 100%">Search by all event fields</p>
            <div class="property-panel-content">
                <input type="text" class='e-input' id="events-search" placeholder="Enter the Search text"
                v-on:keyup="globalSearch"/>
            </div>
            <form class="event-search" id="form-search">
                <p class="property-panel-header  header-customization" style="width: 100%">Search by specific event fields</p>
                <table id="property-specific" style="width: 100%">
                    <tbody>
                        <tr class="row">
                            <td class="property-panel-content" colspan="2">
                                <input type="text" class="e-input search-field" name="Subject" id="searchEventName"
                                placeholder="Subject"/>
                            </td>
                        </tr>
                        <tr class="row" style="height: 45px">
                            <td class="property-panel-content" colspan="2">
                                <input type="text" class="e-input search-field" name="Location" id="searchEventLocation"
                                placeholder="Location"/>
                            </td>
                        </tr>
                        <tr class="row" style="height: 45px">
                            <td class="property-panel-content" colspan="2">
                                <ejs-datepicker id='startScheduleDate' class="search-field e-start-time"
                                :showClearButton='false' name="StartTime" placeholder="StartTime" ></ejs-datepicker>
                            </td>
                        </tr>
                        <tr class="row" style="height: 45px">
                            <td class="property-panel-content" colspan="2">
                                <ejs-datepicker id='endScheduleDate' class="search-field e-end-time"
                                :showClearButton='false' name="EndTime" placeholder="EndTime" ></ejs-datepicker>
                            </td>
                        </tr>
                        <tr class="row" style="height: 45px">
                            <td class="e-field button-customization" style="width: 50%;">
                                <ejs-button id="seperateSearch" type="button" content="Search"
                                v-on:click.native="searchOnClick"></ejs-button>
                            </td>
                            <td class="e-field button-customization" style="width: 50%;">
                                <ejs-button id="clear" type="button" content="Clear" v-on:click.native="clearOnClick"></ejs-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
    </div>
    <div id="action-description">
    <p>
        This example showcases the search results of Scheduler appointments in a grid. When the user provides the
        search string on appropriate fields, the resulting event collection based on the search criteria will be
        displayed in a Grid.
    </p>
    </div>
    <div id="description">
    <p>
        In this example, the search text value is compared with the event field values of Scheduler DataSource and then
        the filtered resultant event data collection is assigned to the DataSource of Grid.
    </p>
    </div>
    </div>
</template>
<!-- custom code start -->
<style>
    .header-customization {
        padding-bottom: 10px;
    }

    .property-customization {
        padding-right: 5px;
    }

    .button-customization {
        padding: 15px;
    }

    @media (max-width: 441px){
        .button-customization {
            padding: 30px;
        }
    }
</style>
<!-- custom code end -->
<script>
    import Vue from "vue";
    import { Predicate, Query, DataManager } from '@syncfusion/ej2-data';
    import { scheduleData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { DatePickerPlugin, ChangeEventArgs } from '@syncfusion/ej2-vue-calendars';
    import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
    import { GridPlugin } from '@syncfusion/ej2-vue-grids'
    Vue.use(SchedulePlugin);
    Vue.use(GridPlugin);
    Vue.use(DatePickerPlugin);
    Vue.use(ButtonPlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2019, 0, 10),
                formatoptions: { type: 'dateTime', format: 'M/d/y hh:mm a' }
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        },
        methods: {
            searchOnClick: function () {
                let scheduleObj = this.$refs.ScheduleObj;
                let searchObj = [];
                let startDate;
                let endDate;
                let formElements = [].slice.call(document.querySelectorAll('.event-search .search-field'));
                formElements.forEach((node) => {
                    if (node.value && node.value !== '') {
                        let fieldOperator = 'contains';
                        let predicateCondition = 'or';
                        let fieldValue = node.value;
                        let matchCase = true;
                        if (node.classList.contains('e-datepicker')) {
                            fieldOperator = node.classList.contains('e-start-time') ? 'greaterthanorequal' : 'lessthanorequal';
                            predicateCondition = 'and';
                            let fieldInstance = ((node)).ej2_instances[0];
                            fieldValue = fieldInstance.value;
                            if (node.classList.contains('e-start-time')) {
                                startDate = new Date(+fieldValue);
                            }
                            if (node.classList.contains('e-end-time')) {
                                let date = new Date(+fieldInstance.value);
                                fieldValue = new Date(date.setDate(date.getDate() + 1));
                                endDate = fieldValue;
                            }
                            matchCase = false;
                        }
                        searchObj.push({
                            field: node.name, operator: fieldOperator, value: fieldValue, predicate: predicateCondition,
                            matchcase: matchCase
                        });
                    }
                });
                if (searchObj.length > 0) {
                    let filterCondition = searchObj[0];
                    let predicate = new Predicate(
                        filterCondition.field, filterCondition.operator, filterCondition.value, filterCondition.matchcase);
                    for (let i = 1; i < searchObj.length; i++) {
                        predicate = predicate.and(searchObj[i].field, searchObj[i].operator, searchObj[i].value, searchObj[i].matchcase);
                    }
                    let result = new DataManager(scheduleObj.getEvents(startDate, endDate, true)).executeLocal(new Query().where(predicate));
                    this.showSearchEvents('show', result);
                } else {
                    this.showSearchEvents('hide');
                }
            },

            clearOnClick: function () {
                document.getElementById('schedule').style.display = 'block';
                document.getElementById('form-search').reset();
                this.showSearchEvents('hide');
            },

            globalSearch: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                let searchString = (args.target).value;
                if (searchString !== '') {
                    new DataManager(scheduleObj.getEvents(null, null, true)).executeQuery(new Query().
                        search(searchString, ['Subject', 'Location', 'Description'], null, true, true)).then((e) => {
                            if ((e.result).length > 0) {
                                this.showSearchEvents('show', e.result);
                            } else {
                                this.showSearchEvents('hide');
                            }
                        });
                } else {
                    this.showSearchEvents('hide');
                }
            },

            showSearchEvents:  function (type, data) {
                let scheduleObj = this.$refs.ScheduleObj;
                let gridObj = this.$refs.GridObj;
                if (type === 'show') {
                    gridObj.ej2Instances.dataSource = data;
                    gridObj.ej2Instances.dataBind();
                    scheduleObj.ej2Instances.element.style.display = 'none';
                    gridObj.ej2Instances.element.style.display = 'block';
                } else {
                    gridObj.ej2Instances.element.style.display = 'none';
                    scheduleObj.ej2Instances.element.style.display = 'block';
                }
            }
        },
    });
</script>