<template>
<div id="tooltip">
<table>
        <tbody>
            <tr><td colspan="3">{{data.TaskName}}</td></tr>
            <tr>
                <td > Start Time </td> <td>:</td>
                <td>{{format(data.StartDate)}}</td>
            </tr>
            <tr>
                <td> End Time</td> <td>:</td>
                <td >{{format(data.EndDate)}}</td>
            </tr>
            <tr>
                <td> Planned start time</td> <td>:</td>
                <td>{{format(data.BaselineStartDate)}}</td>
            </tr>
            <tr>
                <td> Planned end time</td> <td>:</td>
                <td>{{format(data.BaselineEndDate)}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
import { Internationalization } from '@syncfusion/ej2-base';

let instance = new Internationalization();

    export default {
        data() {
            return {
                data: {}
            };
        },
        methods: {
            format: function(value) {
                return instance.formatDate(value, { skeleton: 'hm', type: 'date' });
            }
        }
    };
</script>
