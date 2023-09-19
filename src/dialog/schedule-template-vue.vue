<template>
    <div>
        <ejs-schedule height="650px" ref="scheduleObj" :selectedDate='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
      </div>
</template>
<script>
    import { scheduleData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    
    export default {
        components: {
          'ejs-schedule': ScheduleComponent
        },
        data: function () {
            return {
                eventSettings: { dataSource: extend([], scheduleData, null, true) },
                selectedDate: new Date(2019, 0, 10)
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        },
        methods: {
            onDateChange: function (args) {
                this.selectedDate = args.value;
            }
        }
    }

</script>