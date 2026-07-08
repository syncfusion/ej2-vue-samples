<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-gantt ref="ganttObj"
            :dataSource="data"
            :taskFields="taskSettings"
            :columns="columns"
            :splitterSettings="splitterSettings"
            :tooltipSettings="tooltipSettings"
            :projectStartDate="projectStartDate"
            :projectEndDate="projectEndDate"
            height="650px"
            :rowHeight="70"
            :taskbarHeight="20"
            :treeColumnIndex="1"
            :renderBaseline="true"
            :allowSelection="true"
            gridLines="Both"
            :baselineTemplate="'baselineTemplate'">
            
            <template v-slot:baselineTemplate="{ data }">
                <div v-if="!data.subtasks" style="position: relative; height: 100%;">
                <div v-if="data.taskData.BaselineStartDate && data.taskData.BaselineDuration !== 0"
                    class="e-baseline-bar"
                    :style="{
                    position: 'absolute',
                    height: '8px',
                    left: getLeft(data.taskData.BaselineStartDate, data) + 'px',
                    width: getWidth(data.taskData.BaselineStartDate, data.taskData.BaselineDuration, data) + 'px',
                    marginTop: getBaselineTop(0) + 'px'
                    }">
                </div>

                <div v-if="data.taskData.BaselineStartDate1 && data.taskData.BaselineDuration1 !== 0"
                    class="e-baseline-bar"
                    :style="{
                    position: 'absolute',
                    height: '8px',
                    left: getLeft(data.taskData.BaselineStartDate1, data) + 'px',
                    width: getWidth(data.taskData.BaselineStartDate1, data.taskData.BaselineDuration1, data) + 'px',
                    marginTop: getBaselineTop(1) + 'px'
                    }">
                </div>

                <div v-if="data.taskData.BaselineStartDate2 && data.taskData.BaselineDuration2 !== 0"
                    class="e-baseline-bar"
                    :style="{
                    position: 'absolute',
                    height: '8px',
                    left: getLeft(data.taskData.BaselineStartDate2, data) + 'px',
                    width: getWidth(data.taskData.BaselineStartDate2, data.taskData.BaselineDuration2, data) + 'px',
                    marginTop: getBaselineTop(2) + 'px'
                    }">
                </div>

                <div v-if="data.taskData.BaselineStartDate && data.taskData.BaselineDuration === 0"
                    class="e-baseline-gantt-milestone-container"
                    :style="getMilestoneStyle(data.taskData.BaselineStartDate, data, 0)">
                </div>

                <div v-if="data.taskData.BaselineStartDate1 && data.taskData.BaselineDuration1 === 0"
                    class="e-baseline-gantt-milestone-container"
                    :style="getMilestoneStyle(data.taskData.BaselineStartDate1, data, 1)">
                </div>

                <div v-if="data.taskData.BaselineStartDate2 && data.taskData.BaselineDuration2 === 0"
                    class="e-baseline-gantt-milestone-container"
                    :style="getMilestoneStyle(data.taskData.BaselineStartDate2, data, 2)">
                </div>

                </div>
            </template>
        </ejs-gantt>    
    </div>

    <div id="action-description">
        <p> This sample demonstrates how multiple baselines can be displayed within a single task
            to highlight variations across different planning stages and improve visibility into project changes.
        </p>
    </div>

    <div id="description">
        <p>
            In this example, the Gantt Chart visualizes a product workflow where each task includes
            multiple baseline bars using custom baseline fields. This allows users to view different
            planned schedules such as initial, revised, and final plans together.The <a target="_blank" rel="noopener noreferrer"
                    href="https://ej2.syncfusion.com/vue/documentation/api/gantt/index-default#baselinetemplate">
                    baselineTemplate
                </a> property is used to customize the appearance of each
            baseline bar. It provides control over styling, colors, and positioning, making it easy
            to distinguish between baseline representations.
        </p>
        
        <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/gantt/baseline">baseline</a> documentation section.</p>
    </div>

</div>
</template>

<script>
import { GanttComponent, Selection } from "@syncfusion/ej2-vue-gantt";
import { baselineTemplateData } from "./data-source";

export default {
    components: {
        'ejs-gantt': GanttComponent
    },
    data: function () {
        return {
            data: baselineTemplateData,
            taskSettings: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                baselineStartDate: 'BaselineStartDate',
                baselineDuration: 'BaselineDuration',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            projectStartDate: new Date('2024-05-01'),
            projectEndDate: new Date('2024-05-30'),
            splitterSettings: { columnIndex: 3 },
            tooltipSettings: { showTooltip: false },
            columns: [
                { field: 'TaskID', headerText: 'ID'},
                { field: 'TaskName', headerText: 'Name', width: '270'  },
                { field: 'BaselineStartDate', headerText: 'Baseline Start Date', width:'180' },
                { field: 'BaselineDuration',headerText: 'Baseline Duration', width:'180' },
                { field: 'BaselineStartDate1',  headerText: 'Baseline1 Start Date', format: { skeleton: 'yMd', type: 'date' }, width:'180' },
                { field: 'BaselineDuration1', headerText: 'Baseline1 Duration', width:'180' },
                { field: 'BaselineStartDate2', headerText: 'Baseline2 Start Date', format: { skeleton: 'yMd', type: 'date' }, width:'180' },
                { field: 'BaselineDuration2', headerText: 'Baseline2 Duration', width:'180' }
            ],
        };
    },

    provide: {
        gantt: [Selection]
    },
   
    methods: {
        getLeft(date, row) {
        const gp = row.taskData.ganttProperties;
        return this.$refs.ganttObj.ej2Instances.dataOperation.getTaskLeft(
            new Date(date),
            false,
            gp.calendarContext
        );
        },

        getWidth(start, duration, row) {
        if (!start || duration === 0) return 0;
        const end = new Date(start);
        end.setDate(end.getDate() + duration);
        return this.getLeft(end, row) - this.getLeft(start, row);
        },

        getBaselineTop(index) {
        const chart = this.$refs.ganttObj.ej2Instances.chartRowsModule;
        return chart.baselineTop + (index * 12);
        },

        getBaselineMilestoneTop(index) {
        const chart = this.$refs.ganttObj.ej2Instances.chartRowsModule;
        const rowHeight = this.$refs.ganttObj.ej2Instances.rowHeight;
        return (-Math.floor(rowHeight - chart.milestoneMarginTop) + 5) + 2 + (index * 4);
        },

        getMilestoneLeft(date, row) {
        const chart = this.$refs.ganttObj.ej2Instances.chartRowsModule;
        const left = this.getLeft(date, row);
        return left - (chart.milestoneHeight / 2) + 1;
        },

        getMilestoneStyle(date, row, index) {
        const chart = this.$refs.ganttObj.ej2Instances.chartRowsModule;
        return {
            position: 'absolute',
            transform: 'rotate(45deg)',
            left: this.getMilestoneLeft(date, row) + 'px',
            top: this.getBaselineMilestoneTop(index) + 'px',
            width: chart.taskBarHeight + 'px',
            height: chart.taskBarHeight + 'px'
        };
        }
    }
};
</script>