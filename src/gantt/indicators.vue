<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample visualizes how to mention special moment in any mentioned day for a particular task with
                different icon and label.</p>
        </div>
        <div>
            <ejs-gantt ref='gantt' id="Indicators" :dataSource="data" :height="height" :rowHeight="46"
                :taskbarHeight="25" :highlightWeekends='true' :taskFields="taskFields" :labelSettings="labelSettings"
                :treeColumnIndex="1" :columns="columns" :splitterSettings="splitterSettings"
                :projectStartDate="projectStartDate" :projectEndDate="projectEndDate">
            </ejs-gantt>
        </div>

        <div id="description">
            <p>
                In this example, <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFieldsModel/#indicators">indicators</a>
                are displayed with some custom text in specified day of task, which are defined in dataSource. You can
                define the indicators with the following properties for tasks:
            </p>
            <ul>
                <li><code>date</code>: Defines the date value to where we want to display the indicators.</li>
                <li><code>iconClass </code>: Defines the icon to highlight the indicator.</li>
                <li><code>name</code>: Defines text to be displayed in the mentioned date.</li>
                <li><code>tooltip</code>: The text to be displayed when hover the mouse over the indicator.</li>
            </ul>
            <p style="font-weight: 500">Injecting Module:</p>
            <p>
                Gantt component features are segregated into individual feature-wise modules. To use selection and markers features,
                inject the <code>Selection</code> and <code>DayMarkers</code> modules using the <code>provide</code> section.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/gantt/data-markers">documentation section</a>.
            </p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source';

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: projectNewData,
            height: '650px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                parentID: 'ParentId',
                indicators: 'Indicators'
            },
            columns: [
                { field: 'TaskID', width: 75 },
                { field: 'TaskName', width: 280 },
                { field: 'StartDate' },
                { field: 'Duration' },
                { field: 'Progress' },
                { field: 'Predecessor' }
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('07/20/2025')
        };
    },
    provide: {
        gantt: [DayMarkers, Selection]
    }
}
</script>

<style scoped>
.okIcon::before {
    content: '\e72b';
    font-size: 16px;
    font-family: "e-icons"
}

.description::before {
    content: '\e72b';
    font-size: 16px;
    font-family: "e-icons"
}

#Indicators ::v-deep .okIcon::before {
    content: '\ea84';
    font-size: 16px;
    font-family: "e-icons"
}

#Indicators ::v-deep .description::before {
    content: '\e30d';
    font-size: 16px;
    font-family: "e-icons"
}

.bootstrap4 #Indicators ::v-deep .okIcon::before {
    content: '\e7d9';
    font-size: 16px;
    font-family: "e-icons"
}

.bootstrap4 #Indicators ::v-deep .description::before {
    content: '\e7cb';
    font-size: 16px;
    font-family: "e-icons"
}

.bootstrap5 #Indicators ::v-deep .okIcon::before,
.bootstrap5-dark #Indicators ::v-deep .okIcon::before {
    content: '\e72b';
    font-size: 16px;
    font-family: "e-icons"
}

.bootstrap5 #Indicators ::v-deep .description::before,
.bootstrap-dark #Indicators ::v-deep .description::before {
    content: '\e72b';
    font-size: 16px;
    font-family: "e-icons"
}

.tailwind #Indicators ::v-deep .okIcon::before,
.tailwind-dark #Indicators ::v-deep .okIcon::before,
.material3-dark #Indicators ::v-deep .okIcon::before,
.material3 #Indicators ::v-deep .okIcon::before,
.material3-dark #Indicators ::v-deep .description::before,
.material3 #Indicators ::v-deep .description::before,
.tailwind3 #Indicators ::v-deep .okIcon::before,
.tailwind3-dark #Indicators ::v-deep .okIcon::before {
    content: '\e72b';
    font-size: 16px;
    font-family: "e-icons"
}

.tailwind #Indicators ::v-deep .description::before,
.tailwind-dark #Indicators ::v-deep .description::before,
.tailwind3 #Indicators ::v-deep .description::before,
.tailwind3-dark #Indicators ::v-deep .description::before {
    content: '\e7c0';
    font-size: 16px;
    font-family: "e-icons"
}

.fabric #Indicators ::v-deep .description::before {
    content: '\e310';
    font-size: 16px;
    font-family: "e-icons"
}

.highcontrast #Indicators ::v-deep .description::before {
    content: '\e310';
    font-size: 16px;
    font-family: "e-icons"
}

.fluent #Indicators ::v-deep .okIcon::before,
.fluent2 #Indicators ::v-deep .okIcon::before,
.fluent2-dark #Indicators ::v-deep .okIcon::before,
.fluent2-highcontrast #Indicators ::v-deep .okIcon::before,
.fluent-dark #Indicators ::v-deep .okIcon::before {
    content: '\e72b';
    font-size: 16px;
    font-family: "e-icons"
}

.fluent #Indicators ::v-deep .description::before,
.fluent2 #Indicators ::v-deep .description::before,
.fluent2-highcontrast #Indicators ::v-deep .description::before,
.fluent2-dark #Indicators ::v-deep .description::before,
.fluent-dark #Indicators ::v-deep .description::before {
    content: '\e7c0';
    font-size: 16px;
    font-family: "e-icons"
}

.bootstrap5_3 #Indicators ::v-deep .okIcon::before,
.bootstrap5_3-dark-lite #Indicators ::v-deep .okIcon::before,
.bootstrap5_3-dark #Indicators ::v-deep .okIcon::before,
.bootstrap5_3-lite #Indicators ::v-deep .okIcon::before {
    content: '\e72b';
    font-size: 16px;
    font-family: "e-icons"
}

.bootstrap5_3 #Indicators ::v-deep .description::before,
.bootstrap5_3-dark-lite #Indicators ::v-deep .description::before,
.bootstrap5_3-dark #Indicators ::v-deep .description::before,
.bootstrap5_3-lite #Indicators ::v-deep .description::before {
    content: '\e72b';
    font-size: 16px;
    font-family: "e-icons"
}
</style>