<template>
<div id="tooltip">
<table>
    <tbody>
        <tr>
            <td>Planned Start Date: </td>
            <td>{{format(data.BaselineStartDate)}}</td>
        </tr>
        <tr>
            <td>Planned End Date: </td>
            <td>{{format(data.BaselineEndDate)}}</td>
        </tr>
        <tr>
            <td>Current Start Date: </td>
            <td>{{format(data.StartDate)}}</td>
        </tr>
        <tr>
            <td>Current End Date: </td>
            <td>{{format(data.EndDate)}}</td>
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
                return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
            }
        }
    };
</script>
