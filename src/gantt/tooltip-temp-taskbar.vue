<template>
<div>
    <table>
        <template v-if="data.ganttProperties.resourceNames">
        <tr>
            <td rowspan="3" style="padding:3px"><img :src="image" height="40px" /></td>
            <td style="padding:3px">Task done By:</td>
            <td style="padding:3px">{{data.ganttProperties.resourceNames}}</td>
        </tr>
        </template>
        <template>
        <tr>
            <td style="padding:3px">Starts On:</td>
            <td style="padding:3px">{{format(data.StartDate)}}</td>
        </tr>
        <tr>
            <td style="padding:3px">Ends On:</td>
            <td style="padding:3px">{{format(data.EndDate)}}</td>
        </tr>
        </template>
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
        },
        computed: {
            image: function() {
                return 'src/gantt/images/' + this.data.ganttProperties.resourceNames + '.png';
            }
        }
    };
</script>