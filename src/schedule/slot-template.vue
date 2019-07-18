<template>
<div v-if="type === 'monthCells' && getCellContent(data.date) !== '' ">
    <div class="templatewrap">
        <p v-html=getCellContent(data.date)></p>
    </div>
</div>
</template>
<script lang='ts'>
    import { Internationalization } from '@syncfusion/ej2-base';

    let instance: Internationalization = new Internationalization();

    export default {
        data() {
            return {
                data: {}
            }
        },
        methods: {
            getCellContent: function (date: Date) {
                if (date.getMonth() === 10 && date.getDate() === 23) {
                    return '<img src="src/schedule/images/thanksgiving-day.svg" /><div class="caption">Thanksgiving day</div>';
                } else if (date.getMonth() === 11 && date.getDate() === 9) {
                    return '<img src="src/schedule/images/get-together.svg" /><div class="caption">Party time</div>';
                } else if (date.getMonth() === 11 && date.getDate() === 13) {
                    return '<img src="src/schedule/images/get-together.svg" /><div class="caption">Party time</div>';
                } else if (date.getMonth() === 11 && date.getDate() === 22) {
                    return '<img src="src/schedule/images/birthday.svg" /><div class="caption">Happy birthday</div>';
                } else if (date.getMonth() === 11 && date.getDate() === 24) {
                    return '<img src="src/schedule/images/christmas-eve.svg" /><div class="caption">Christmas Eve</div>';
                } else if (date.getMonth() === 11 && date.getDate() === 25) {
                    return '<img src="src/schedule/images/christmas.svg" /><div class="caption">Christmas Day</div>';
                } else if (date.getMonth() === 0 && date.getDate() === 1) {
                    return '<img src="src/schedule/images/newyear.svg" /><div class="caption">New Year\'s Day</div>';
                } else if (date.getMonth() === 0 && date.getDate() === 14) {
                    return '<img src="src/schedule/images/get-together.svg" /><div class="caption">Get together</div>';
                }
                return '';
            }
        }
    }

</script>