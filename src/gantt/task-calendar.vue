<template>
    <div class="control-pane">
        <div class="control-section task-calendar-container">
            <div class="task-calendar-left">
                <div class="hours-input-row">
                    <label>Hours per day</label>
                    <ejs-numerictextbox
                        v-model="hours"
                        format="n"
                        :strictMode="false"
                        width="120px"
                        :change="onHoursChange">
                    </ejs-numerictextbox>
                    <ejs-button
                        cssClass="e-primary"
                        @click="updateHours">
                        Update
                    </ejs-button>
                    <span
                        v-if="warning"
                        class="hours-warning">
                        {{ warning }}
                    </span>
                </div>
                <ejs-gantt
                    ref="gantt"
                    id="TaskCalendarGantt"
                    :dataSource="data"
                    :allowSorting="true"
                    :treeColumnIndex="1"
                    :taskFields="taskFields"
                    :editSettings="editSettings"
                    :toolbar="toolbar"
                    :splitterSettings="splitterSettings"
                    :allowSelection="true"
                    gridLines="Both"
                    :showColumnMenu="false"
                    :highlightWeekends="true"
                    :labelSettings="labelSettings"
                    :timelineSettings="timelineSettings"
                    :calendarSettings="calendarSettings"
                    height="550px"
                    :taskbarHeight="25"
                    :rowHeight="46"
                    :projectStartDate="projectStartDate"
                    :projectEndDate="projectEndDate"
                >
                    <e-columns>
                        <e-column field="TaskID" :visible="false" width="90"></e-column>
                        <e-column field="TaskName" headerText="Task Name" width="200" clipMode="EllipsisWithTooltip"></e-column>
                        <e-column field="calendar" headerText="Calendar Profile" width="150"></e-column>
                        <e-column field="Duration" headerText="Duration" width="90"></e-column>
                        <e-column field="Predecessor" headerText="Dependency" width="120"></e-column>
                        <e-column field="StartDate" headerText="Start Date" width="100"></e-column>
                        <e-column field="Progress" width="90"></e-column>
                    </e-columns>
                </ejs-gantt>
            </div>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates how different tasks can use different calendars in the Gantt chart. Leadership, compliance, and technical reviews each have their own working rules, while the hours per day field still controls the default duration calculation for the project.
            </p>
        </div>
        <div id="description">
            <p>This task calendar sample shows that a Gantt Chart project can assign a unique <code>calendar</code> to each task. Different tasks can follow different working patterns without changing the rest of the schedule.</p>
            <p>This sample uses the following calendar configurations:</p>
            <ul>
                <li><strong>Project Calendar:</strong> Standard working hours from 8:00 AM to 12:00 PM and 1:00 PM to 5:00 PM, with a holiday on 07/06/2026 (Company Foundation Day) and an exception working day on 07/05/2026 (Extended Work Day).</li>
                <li><strong>Steering-committee:</strong> Holidays on 07/07/2026 (SC Strategy Day) and 07/22/2026 (Board Offsite), with exception working days on 07/05/2026 and 07/19/2026 (Compensatory Working).</li>
                <li><strong>Tech-review:</strong> Holiday period from 07/16/2026 to 07/17/2026 (Architecture Review Freeze), with an exception working day on 07/26/2026 (Extra Review Slot).</li>
                <li><strong>Compliance-audit:</strong> Holiday period from 07/09/2026 to 07/10/2026 (Compliance Blackout), with an exception working day on 07/25/2026 (Mandatory Audit Working Day).</li>
            </ul>
            <p>The <code>hoursPerDay</code> property controls the working hours considered for duration calculations, while the project calendar serves as the default schedule for tasks that do not specify a custom calendar.</p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/getting-started">task calendar</a> documentation section.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>

<script>
import { GanttComponent, ColumnsDirective, ColumnDirective, Toolbar, Selection, Edit, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { ploMeetingsData } from './data-source';

export default {
    components: {
        "ejs-gantt": GanttComponent,
        "e-columns": ColumnsDirective,
        "e-column": ColumnDirective,
        "ejs-numerictextbox": NumericTextBoxComponent,
        "ejs-button": ButtonComponent
    },
    data() {
        return {
            hours: 8,
            warning: "",
            data: ploMeetingsData,
            taskFields: {
                id: "TaskID",
                name: "TaskName",
                startDate: "StartDate",
                duration: "Duration",
                progress: "Progress",
                dependency: "Predecessor",
                child: "subtasks",
                calendarId: "calendar"
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            toolbar: ["Add", "Edit", "Update", "Delete", "Cancel", "ExpandAll", "CollapseAll", "Search", "PrevTimeSpan", "NextTimeSpan"],
            splitterSettings: {
                columnIndex: 3
            },
            labelSettings: {
                rightLabel: "TaskName",
                taskLabel: "Progress"
            },
            timelineSettings: {
                topTier: {
                    unit: "Week",
                    format: "MM/dd/yyyy"
                },
                bottomTier: {
                    unit: "Day",
                    count: 1
                }
            },
            calendarSettings: {
                projectCalendar: {
                    workingTime: [
                        { from: 8, to: 12 },
                        { from: 13, to: 17 }
                    ],
                    holidays: [
                        {
                            from: "07/06/2026",
                            to: "07/06/2026",
                            label: "Company Foundation Day"
                        }
                    ],
                    exceptions: [
                        {
                            from: "07/05/2026",
                            to: "07/05/2026",
                            label: "Extended Work Day"
                        }
                    ]
                },
                taskCalendars: [
                    {
                        calendarId: "Steering-committee",
                        holidays: [
                            {
                                from: "07/07/2026",
                                to: "07/07/2026",
                                label: "SC Strategy Day"
                            },
                            {
                                from: "07/22/2026",
                                to: "07/22/2026",
                                label: "Board Offsite"
                            }
                        ],
                        exceptions: [
                            {
                                from: "07/05/2026",
                                to: "07/05/2026",
                                label: "Compensatory Working"
                            },
                            {
                                from: "07/19/2026",
                                to: "07/19/2026",
                                label: "Compensatory Working"
                            }
                        ]
                    },
                    {
                        calendarId: "Tech-review",
                        holidays: [
                            {
                                from: "07/16/2026",
                                to: "07/17/2026",
                                label: "Architecture Review Freeze"
                            }
                        ],
                        exceptions: [
                            {
                                from: "07/26/2026",
                                to: "07/26/2026",
                                label: "Extra Review Slot"
                            }
                        ]
                    },
                    {
                        calendarId: "Compliance-audit",
                        holidays: [
                            {
                                from: "07/09/2026",
                                to: "07/10/2026",
                                label: "Compliance Blackout"
                            }
                        ],
                        exceptions: [
                            {
                                from: "07/25/2026",
                                to: "07/25/2026",
                                label: "Mandatory Audit Working Day"
                            }
                        ]
                    }
                ]
            },
            projectStartDate: new Date("07/01/2026"),
            projectEndDate: new Date("08/31/2026")
        };
    },
    methods: {
        onHoursChange(args) {
            const warningMessage = "Hours per day value must be greater than 1 and less than 24.";
            if (args.value == null || args.value < 1 || args.value > 24) {
                this.warning = warningMessage;
                return;
            }
            this.warning = "";
            this.hours = args.value;
        },
        updateHours() {
            const warningMessage = "Hours per day value must be greater than 1 and less than 24.";
            if (this.hours == null || this.hours < 1 || this.hours > 24) {
                this.warning = warningMessage;
                return;
            }
            this.warning = "";
            const gantt = this.$refs.gantt?.ej2Instances;
            if (gantt) {
                gantt.hoursPerDay = this.hours;
            }
        }
    },
    provide: {
        gantt: [Selection, Toolbar, DayMarkers, Edit]
    }
};
</script>

<style scoped>
.hours-input-row {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
    gap: 8px;
    flex-wrap: wrap;
    max-width: 760px;
}

.hours-warning {
    color: #b71c1c;
    font-size: 13px;
    margin-left: 4px;
}
</style>