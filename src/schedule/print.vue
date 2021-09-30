<template>
    <div class="schedule-vue-sample">
        <div class="col-md-9 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" :cssClass="cssClass" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings'>
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-3 property-section">
            <table id="property" title="Properties" class="print-property-panel">
                <tbody>
                    <tr>
                        <td style="height: 50px">
                            <ejs-checkbox labelPosition="Before" label="Print with options" id="printWithOptionsElement" ref="printWithOptionsObj" :change='onChange'></ejs-checkbox>
                        </td>
                    </tr>
                    <tr class="e-height-row e-hide-row">
                        <td>
                            <ejs-dropdownlist id="heightElement" ref="heightObj" placeholder="Height" floatLabelType="Always" :dataSource='printHeightAndWidthData' value='auto'></ejs-dropdownlist>
                        </td>
                    </tr>
                    <tr class="e-width-row e-hide-row">
                        <td>
                            <ejs-dropdownlist id="widthElement" ref="widthObj" placeholder="Width" floatLabelType="Always" :dataSource='printHeightAndWidthData' value='auto'></ejs-dropdownlist>
                        </td>
                    </tr>
                    <tr class="e-selected-date-row e-hide-row">
                        <td>
                            <ejs-datepicker id="selectedDateElement" ref="selectedDateObj" placeholder="Selected date" floatLabelType="Always" :value="selectedDate"></ejs-datepicker>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; text-align: center">
                            <ejs-button id="print-btn" iconCss="e-icons e-print" cssClass="e-print-btn" v-on:click.native="onPrintIconClick">Print</ejs-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>This example demonstrates how to print the Scheduler element at client-side.</p>
        </div>

        <div id="description">
            <p>In this example, the Scheduler element is Printed by making use of the public method <code>print</code>.</p>
            <p>
                Also, we can print the schedule based on the custom rendering by passing the <code>ScheduleModel</code> in the <code>print</code> method.
                In the above demo, we have demonstrated the <code>print</code> method with the below properties of the <code>ScheduleModel</code>.
            </p>
            <ul>
                <li>height</li>
                <li>width</li>
                <li>selectedDate</li>
            </ul>
            <p>
                <strong>Module Injection</strong>
            </p>
            <p>To start using Print functionality in Scheduler, you need to import the
                <code>Print</code> module from <code>@syncfusion/ej2-vue-schedule</code>
                package and then inject them into the <code>provide</code> section.
            </p>
        </div> 
    </div>
</template>
<style>
    /* custom code start*/

    .print-property-panel td {
        padding-bottom: 1rem;
    }

    .print-property-panel .e-checkbox-wrapper {
        padding-left: 0;
    }

    /* custom code end*/

    .schedule-vue-sample .print.e-schedule .e-schedule-toolbar .e-toolbar-item.e-today,
    .print-property-panel .e-hide-row {
        display: none;
    }
</style>
<script>
    import Vue from "vue";
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, Print
    } from "@syncfusion/ej2-vue-schedule";
    import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
    import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
    import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";
    import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
    import { scheduleData } from './datasource';
    Vue.use(SchedulePlugin);
    Vue.use(DropDownListPlugin);
    Vue.use(CheckBoxPlugin);
    Vue.use(DatePickerPlugin);
    Vue.use(ButtonPlugin);

    export default Vue.extend({
        data: function () {
            return {
                cssClass: 'print',
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2021, 0, 10),
                printHeightAndWidthData: ['auto', '100%', '500px'],
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, Print]
        },
        methods: {
            onChange: function(args) {
                let classList = ['.e-height-row', '.e-width-row', '.e-selected-date-row'];
                for (let i = 0; i < classList.length; i++) {
                    let element = document.querySelector(classList[i]);
                    if (args.checked) {
                        element.classList.remove('e-hide-row');
                    } else {
                        element.classList.add('e-hide-row');
                    }
                }
            },
            onPrintIconClick: function () {
                let scheduleObj = this.$refs.ScheduleObj.ej2Instances;
                if (this.$refs.printWithOptionsObj.ej2Instances.checked) {
                    let printOptions = {
                        height: this.$refs.heightObj.ej2Instances.value,
                        width: this.$refs.widthObj.ej2Instances.value,
                        selectedDate: this.$refs.selectedDateObj.ej2Instances.value
                    };
                    scheduleObj.print(printOptions);
                } else {
                    scheduleObj.print();
                }
            }
        }
    });
</script>