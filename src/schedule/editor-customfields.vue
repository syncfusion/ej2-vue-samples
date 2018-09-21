<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :eventRendered="oneventRendered"
                    :popupOpen="onPopupOpen">
                </ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo shows how to add additional fields to the default editor window. Here, an additional field
                <code>Event Type</code> has been added to the default event editor and its value is processed accordingly.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the additional field is added to the default event editor by making use of the
                <code>popupOpen</code> event which gets triggered before the event editor getting opened on Schedule.
                <code>popupOpen</code> is a client-side event that triggers before any of the popups getting opened on Schedule.
            </p>
            <p>
                Here, the additional field (any of the form elements) is needed to be provided with the common class
                <code>e-field</code>, so as to handle and process those additional data into the default event object.
            </p>
        </div>
    </div>
</template>
<style>
    .custom-field-row {
        margin-bottom: 20px;
    }
</style>
<script>
    import Vue from "vue";
    import { eventsData } from './datasource';
    import { createElement, extend, compile } from '@syncfusion/ej2-base';
    import { DropDownList } from '@syncfusion/ej2-dropdowns';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
    import dropdownTemplate from "./custom-field.vue";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], eventsData, null, true)
                },
                selectedDate: new Date(2018, 1, 15),
                dropdownTemplate: function () {
                    return { template: dropdownTemplate }
                },
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        },
        methods: {
            oneventRendered: function (args) {
                let scheduleObj = document.getElementById('Schedule');
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                if (scheduleObj.ej2_instances[0].currentView === 'Agenda') {
                    (args.element.firstChild).style.borderLeftColor = categoryColor;
                } else {
                    args.element.style.backgroundColor = categoryColor;
                }
            },
            onPopupOpen: function (args) {
                if (args.type === 'Editor') {
                    // Create required custom elements in initial time
                    if (!args.element.querySelector('.custom-field-row')) {
                        let row = createElement('div', { className: 'custom-field-row' });
                        let formElement = args.element.querySelector('.e-schedule-form');
                        formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
                        let container = createElement('div', { className: 'custom-field-container' });
                        let inputEle = createElement('input', {
                            className: 'e-field', attrs: { name: 'EventType' }
                        });
                        container.appendChild(inputEle);
                        row.appendChild(container);
                       /* var drowDownList = new DropDownList({
                            dataSource: [
                                { text: 'Public Event', value: 'public-event' },
                                { text: 'Maintenance', value: 'maintenance' },
                                { text: 'Commercial Event', value: 'commercial-event' },
                                { text: 'Family Event', value: 'family-event' }
                            ],
                            fields: { text: 'text', value: 'value' },
                            value: '',
                            floatLabelType: 'Always', placeholder: 'Event Type'
                        });*/
                        //drowDownList.appendTo(inputEle);
                        //let drowDownList = document.getElementById('scheduletimezone').ej2_instances[0];
                        let getDOMString = compile(this.dropdownTemplate);
                        let output = getDOMString({});
                        let ele = output[0].firstChild;
                        ele.appendChild(inputEle);
                        inputEle.setAttribute('name', 'EventType');
                    }
                }
            }
        }
    });

</script>