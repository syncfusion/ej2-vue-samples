<template>
    <div>
        <div class="col-md-12 control-section">
            <div class="content-wrapper">
                <ejs-schedule id='Schedule' ref="ScheduleObj" height="650px" :selectedDate='selectedDate' :eventSettings='eventSettings' :eventRendered="oneventRendered"></ejs-schedule>
            </div>
        </div>

        <div id="action-description">
            <p>
                This demo shows the way of adding default and custom validation rules to the editor fields of Schedule.
            </p>
        </div>

        <div id="description">
            <p>
                In this demo, the specific fields of Scheduler editor window such as
                <code>subject</code>,
                <code>location</code>,
                <code>description</code>,
                <code>startTime</code> and
                <code>endTime</code> are made to undergo validation such that if it is left as blank, then the default required
                validation message will be displayed in a separate tooltip, on clicking a save button.
            </p>
            <p>
                Additionally, the regex condition has been added to the
                <code>location</code> field, so that if any special characters are typed into it, then the custom validation
                message will be displayed. The
                <code>description</code> field has been validated to restrict the character count to be typed into it between
                5 and 500 and not beyond that. This validation can be given by making use of the
                <code>validation</code> API available within each
                <code>fields</code> of
                <code>eventSettings</code> property.
            </p>
            <p>
                Apart from this validation feature, the built-in validation has been provided to the start and end time fields - so that,
                when the selected end time occurs before the start time, a validation message will be displayed as well as
                when some unwanted characters are typed into the date fields, the invalid date message will be alerted.
            </p>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import { scheduleData } from './datasource';
    import { extend } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda, View, Resize, DragAndDrop } from "@syncfusion/ej2-vue-schedule";
    Vue.use(SchedulePlugin);
    export default Vue.extend({
        data: function () {
            return {
                eventSettings: {
                    dataSource: extend([], scheduleData, null, true),
                    fields: {
                        subject: { name: 'Subject', validation: { required: true } },
                        location: {
                            name: 'Location',
                            validation: {
                                required: true,
                                regex: ['^[a-zA-Z0-9- ]*$', 'Special character(s) not allowed in this field']
                            }
                        },
                        description: {
                            name: 'Description',
                            validation: {
                                required: true, minLength: 5, maxLength: 500
                            }
                        },
                        startTime: { name: 'StartTime', validation: { required: true } },
                        endTime: { name: 'EndTime', validation: { required: true } }
                    }                
},
                selectedDate: new Date(2019, 0, 10),
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]
        },
        methods: {
            oneventRendered: function (args) {
                let scheduleObj = this.$refs.ScheduleObj;
                let categoryColor = args.data.CategoryColor;
                if (!args.element || !categoryColor) {
                    return;
                }
                if (scheduleObj.ej2Instances.currentView === 'Agenda') {
                    (args.element.firstChild).style.borderLeftColor = categoryColor;
                } else {
                    args.element.style.backgroundColor = categoryColor;
                }

            }
        }
    });

</script>