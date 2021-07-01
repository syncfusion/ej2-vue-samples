<template>
    <div class="schedule-vue-sample">
        <div class="col-md-10 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" :cssClass="cssClass" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings'>
                </ejs-schedule>
            </div>
        </div>
        <div class="col-lg-2 property-section">
            <table id="property" title="Properties">
                <tbody>
                    <tr>
                        <td style="height: 50px">
                            <ejs-checkbox labelPosition="Before" label="Print with options" id="printWithOptionsElement" ref="printWithOptionsObj" :change='onChange'></ejs-checkbox>
                        </td>
                    </tr>
                    <tr class="e-height-row e-hide-row">
                        <td>
                            <ejs-dropdownlist id="heightElement" ref="heightObj" width="auto" placeholder="Height" floatLabelType="Always" :dataSource='printHeightAndWidthData' value='auto'></ejs-dropdownlist>
                        </td>
                    </tr>
                    <tr class="e-width-row e-hide-row">
                        <td>
                            <ejs-dropdownlist id="widthElement" ref="widthObj" width="auto" placeholder="Width" floatLabelType="Always" :dataSource='printHeightAndWidthData' value='auto'></ejs-dropdownlist>
                        </td>
                    </tr>
                    <tr class="e-selected-date-row e-hide-row">
                        <td>
                            <ejs-datepicker id="selectedDateElement" ref="selectedDateObj" width="auto" placeholder="Selected date" floatLabelType="Always" :value="selectedDate"></ejs-datepicker>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; text-align: center">
                            <ejs-button id="print-btn" iconCss="e-icons e-icon-schedule-print" cssClass="e-print-btn" v-on:click.native="onPrintIconClick">Print</ejs-button>
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
    @font-face {
        font-family: 'Schedule_print';
        src:
            url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .col-lg-2.property-section .property-panel-table td {
        padding-bottom: 1rem;
    }

    /* custom code end*/
    .e-print-btn .e-icons {
        font-family: 'Schedule_print', 'e-icons';
    }

    .e-print-btn .e-icon-schedule-print::before {
        content: '\e204';
    }

    .schedule-vue-sample .print.e-schedule .e-schedule-toolbar .e-toolbar-item.e-today,
    .e-hide-row {
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
                selectedDate: new Date(2019, 0, 10),
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