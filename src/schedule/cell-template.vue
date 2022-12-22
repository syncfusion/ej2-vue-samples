<template>
    <div class="schedule-vue-sample">
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :selectedDate='selectedDate' :cssClass='cssClass' :currentView='currentView' :cellTemplate="'cellTemplate'" :eventSettings='eventSettings'>
                    <template v-slot:cellTemplate="{ data }">
                        <div v-if="data.type === 'monthCells' && getCellContent(data.date) !== '' ">
                            <div class="templatewrap">
                                <p v-html=getCellContent(data.date)></p>
                            </div>
                        </div>
                    </template>
                    <e-views>
                        <e-view option="Month"></e-view>
                    </e-views>
                </ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>This demo illustrates how to customize the background of the specific date cells by adding images and custom
                text to it by using the cell template option.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the
                <code>cellTemplate</code> option which accepts the template string is used to customize the cell background
                with specific images and appropriate text on the given date values.
            </p>
        </div>

    </div>
</template>
<style>
    .schedule-vue-sample .schedule-celltemplate.e-schedule .e-month-view .e-work-cells {
        position: relative;
    }

    .schedule-vue-sample .schedule-celltemplate.e-schedule .templatewrap {
        text-align: center;
        position: absolute;
        width: 100%;
    }

    .schedule-vue-sample .schedule-celltemplate.e-schedule .templatewrap img {
        width: 30px;
        height: 30px;
    }

    .schedule-vue-sample .schedule-celltemplate.e-schedule .caption {
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
    }
</style>
<script>
    import Vue from "vue";
    import { SchedulePlugin, Month, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
    import { extend } from '@syncfusion/ej2-base';
    Vue.use(SchedulePlugin);

    export default Vue.extend({
        data: function () {
            return {
                selectedDate: new Date(2021, 11, 15),
                currentView: 'Month',
                cssClass: 'schedule-celltemplate',
                eventSettings: { dataSource: extend([], null, true) },
            }
        },
        methods: {
            getCellContent: function (date) {
                if (date.getMonth() === 10 && date.getDate() === 23) {
                    return '<img src="source/schedule/images/thanksgiving-day.svg" /><div class="caption">Thanksgiving day</div>';
                } else if (date.getMonth() === 11 && date.getDate() === 9) {
                    return '<img src="source/schedule/images/get-together.svg" /><div class="caption">Party time</div>';
                } else if (date.getMonth() === 11 && date.getDate() === 13) {
                    return '<img src="source/schedule/images/get-together.svg" /><div class="caption">Party time</div>';
                } else if (date.getMonth() === 11 && date.getDate() === 22) {
                    return '<img src="source/schedule/images/birthday.svg" /><div class="caption">Happy birthday</div>';
                } else if (date.getMonth() === 11 && date.getDate() === 24) {
                    return '<img src="source/schedule/images/christmas-eve.svg" /><div class="caption">Christmas Eve</div>';
                } else if (date.getMonth() === 11 && date.getDate() === 25) {
                    return '<img src="source/schedule/images/christmas.svg" /><div class="caption">Christmas Day</div>';
                } else if (date.getMonth() === 0 && date.getDate() === 1) {
                    return '<img src="source/schedule/images/newyear.svg" /><div class="caption">New Year\'s Day</div>';
                } else if (date.getMonth() === 0 && date.getDate() === 14) {
                    return '<img src="source/schedule/images/get-together.svg" /><div class="caption">Get together</div>';
                }
                return '';
            }
        },
        provide: {
            schedule: [Month, Resize, DragAndDrop]
        }
    });

</script>