<template>
    <div>
        <div class="control-section">
            <div class="content-wrapper">
                <ejs-gantt ref='gantt' id="virtualscroll" :dataSource="data" :taskFields="taskFields"
                    :allowSelection="true" :enableVirtualization="true" :labelSettings="labelSettings" :height="height"
                    :rowHeight="46" :taskbarHeight="25" :treeColumnIndex="1" :highlightWeekends="true"
                    :columns="columns" :enableTimelineVirtualization="true" :projectStartDate="projectStartDate"
                    :projectEndDate="projectEndDate" :splitterSettings="splitterSettings">
                </ejs-gantt>
            </div>
        </div>

        <div id="action-description">
            <p>This sample demonstrates the Virtual Scroll support in the Gantt Chart. This feature allows users to load
                a large amount of data effectively.
                It also reduces the DOM element's weight by virtually updating DOM during the vertical scroll and also
                in timeline during horizontal scroll.</p>
        </div>

        <div id="description">
            <p>Virtualization support is used to render large number tasks in Gantt with effective performance. In this
                mode all the tasks are
                fetched from data source initially, then some of the records are rendered in DOM which are compact to
                the current viewport area.
                While scrolling tasks are updated in DOM as per current viewport position. This mode can be enabled by
                setting
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#enablevirtualization">enableVirtualization</a>
                property as true. Additionally, the Gantt component now includes the timeline virtualization feature by
                setting the <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#enabletimelinevirtualization">enableTimelineVirtualization</a>
                to true.
            </p>
            <p>This demo highlights the utilization of row and timeline virtualization features within the Gantt.</p>
            <p>By default during Virtual scroll Shimmer effect is enabled you can disable this by changing <a
                    target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt#enablevirtualmaskrow">enableVirtualMaskRow</a>
                to false</p>
            <br>
            <p>More information on the Essential<sup>®</sup> JS2 Gantt Chart can be found in this <a target="_blank"
                    href="https://ej2.syncfusion.com//vue/documentation/gantt/virtual-scroll">documentation section</a>.
            </p>
        </div>
    </div>
</template>
<script>
import { GanttComponent, Selection, VirtualScroll } from "@syncfusion/ej2-vue-gantt";
import { virtualData } from './data-source';

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: virtualData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                parentID: 'parentID'
            },
            columns: [
                { field: 'TaskID' },
                { field: 'TaskName', width: '200px' },
                { field: 'StartDate' },
                { field: 'Duration' },
                { field: 'Progress' }
            ],
            height: '650px',
            labelSettings: {
                taskLabel: 'Progress'
            },
            splitterSettings: {
                columnIndex: 2
            },
            projectStartDate: new Date('04/01/2025'),
            projectEndDate: new Date('12/31/2030')
        };
    },
    provide: {
        gantt: [Selection, VirtualScroll]
    }
}
</script>