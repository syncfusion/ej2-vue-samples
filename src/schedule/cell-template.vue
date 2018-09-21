<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' height="650px" :selectedDate='selectedDate' :cssClass='cssClass' :currentView='currentView' :cellTemplate='cellTemplate'>
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
    .schedule-celltemplate.e-schedule .e-month-view .e-work-cells {
        position: relative;
    }

    .schedule-celltemplate.e-schedule .templatewrap {
        text-align: center;
        position: absolute;
        width: 100%;
    }

    .schedule-celltemplate.e-schedule .templatewrap img {
        width: 30px;
        height: 30px;
    }

    .schedule-celltemplate.e-schedule .caption {
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
    }
</style>
<script>
    import Vue from "vue";
    import { SchedulePlugin, Month, View, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
    import celltemplate from "./slot-template.vue";
    Vue.use(SchedulePlugin);

    export default Vue.extend({
        data: function () {
            return {
                selectedDate: new Date(2017, 11, 15),
                currentView: 'Month',
                cssClass: 'schedule-celltemplate',
                cellTemplate: function () {
                    return { template: celltemplate }
                },
            }
        },
        provide: {
            schedule: [Month, Resize, DragAndDrop]
        }
    });

</script>