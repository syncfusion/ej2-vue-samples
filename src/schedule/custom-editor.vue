<template>
    <table class="custom-event-editor" width="100%" cellpadding="5">
        <tbody>
            <tr>
                <td class="e-textlabel">Summary</td>
                <td colspan="4">
                    <input id="Subject" class="e-field e-input" type="text" value="" name="Subject" style="width: 100%" />
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">Status</td>
                <td colspan="4">
                    <ejs-dropdownlist id='EventType' name="EventType" class="e-field" placeholder= 'Choose status'  :dataSource='eventData' >
                    </ejs-dropdownlist>
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">From</td>
                <td colspan="4">
                    <ejs-datetimepicker id="StartTime" class="e-field" name="StartTime"></ejs-datetimepicker>
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">To</td>
                <td colspan="4">
                    <ejs-datetimepicker id="EndTime" class="e-field" name="EndTime" ></ejs-datetimepicker>
                </td>
            </tr>
            <tr>
                <td class="e-textlabel">Reason</td>
                <td colspan="4">
                    <textarea id="Description" class="e-field e-input" name="Description" rows="3" cols="50" style="width: 100%; height: 60px !important; resize: vertical"></textarea>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang='ts'>
import Vue from "vue";
import { DateTimePickerPlugin } from '@syncfusion/ej2-vue-calendars';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
Vue.use(DropDownListPlugin);
Vue.use(DateTimePickerPlugin);
    export default {
        data() {
            return {
                eventData:  ['New', 'Requested', 'Confirmed'],
                data: {}
            }
        },
    }

</script>