<template>
    <div class="control-pane">
        <div class="control-section">
            <div style="display:flex">
                <div style="width:130px;padding-bottom:10px">
                    <ejs-dropdownlist
                        :dataSource="dropdownData"
                        :fields="dropdownFields"
                        :value="count"
                        placeholder="5,000 Rows"
                        :change="onDropdownChange">
                    </ejs-dropdownlist>
                </div>
                <span
                    style="padding-left:20px;font-size:15px;margin-top:5px">
                    <b>Data initial load time:</b>
                    {{ loadTime }} sec
                </span>
            </div>

            <ejs-gantt
                id="RenderOptimization"
                :dataSource="virtualData"
                :enablePredecessorValidation="false"
                :autoCalculateDateScheduling="false"
                :treeColumnIndex="1"
                :dataBound="onDataBound"
                :labelSettings="labelSettings"
                :allowSelection="true"
                :highlightWeekends="true"
                :enableVirtualization="true"
                :taskFields="taskFields"
                :splitterSettings="splitterSettings"
                height="650px"
                width="100%"
                :taskbarHeight="25"
                :rowHeight="46"
                :projectStartDate="projectStartDate"
                :projectEndDate="projectEndDate"
            >
                <e-columns>
                    <e-column field="TaskID"></e-column>
                    <e-column field="TaskName" headerText="Task Name" :width="300"></e-column>
                    <e-column field="StartDate"></e-column>
                    <e-column field="Duration"></e-column>
                    <e-column field="Progress"></e-column>
                </e-columns>
            </ejs-gantt>
        </div>

        <div id="action-description">
            <p>
                This sample demonstrates render optimization in Gantt by
                minimizing DOM updates during rendering. The sample disables
                <code>autoCalculateDateScheduling</code> and uses a valid,
                pre-calculated data source so task dates are not recomputed
                during rendering, improving initial load performance.
            </p>
        </div>

        <div id="description">
            <p>
                This demo measures initial data load time and demonstrates render optimization by disabling <code>autoCalculateDateScheduling</code> and
                providing a valid (pre-calculated) data source so the Gantt does not recompute task dates during rendering. When combined with
                virtualization, this reduces DOM updates and improves both initial load and scroll performance.
            </p>
            <p>
                Gantt component features are segregated into individual
                feature-wise modules. To use virtual scrolling and selection,
                inject <code>VirtualScroll</code> and
                <code>Selection</code> in the
                <code>provide</code> sections.
            </p>
            <p>More information on the Essential<sup>®</sup> Vue Gantt Chart can be found in this <a target="_blank"
                href="https://ej2.syncfusion.com/vue/documentation/gantt/performance#optimizing-performance-with-autocalculatedatescheduling">documentation section</a>.</p>
            <p>Looking for the full Vue Gantt Chart component overview, features, pricing, and documentation? Visit the <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-gantt-chart">Vue Gantt Chart</a> page.</p>
        </div>
    </div>
</template>

<script>
import { GanttComponent, ColumnsDirective, ColumnDirective, Selection, VirtualScroll } from "@syncfusion/ej2-vue-gantt";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { generateVirtualData } from "./data-source";

export default {
    components: {
        "ejs-gantt": GanttComponent,
        "e-columns": ColumnsDirective,
        "e-column": ColumnDirective,
        "ejs-dropdownlist": DropDownListComponent
    },
    data() {
        return {
            count: 5000,
            dropdownData: [
                {
                    Text: "5,000 Rows",
                    Value: "5000"
                },
                {
                    Text: "10,000 Rows",
                    Value: "10000"
                }
            ],
            dropdownFields: {
                text: "Text",
                value: "Value"
            },
            loadTime: "",
            startLoadTime: new Date(),
            shouldCalculateLoadTime: true,
            taskFields: {
                id: "TaskID",
                name: "TaskName",
                startDate: "StartDate",
                endDate: "EndDate",
                duration: "Duration",
                progress: "Progress",
                parentID: "parentID",
                dependency: "Predecessor"
            },
            splitterSettings: {
                columnIndex: 2
            },
            labelSettings: {
                taskLabel: "Progress"
            },
            projectStartDate: new Date("03/29/2026"),
            projectEndDate: new Date("09/20/2026")
        };
    },

    computed: {
        virtualData() {
            return generateVirtualData(Number(this.count));
        }
    },

    methods: {
        loadGanttData() {
            this.startLoadTime = new Date();
            this.shouldCalculateLoadTime = true;
        },

        onDropdownChange(args) {
            this.count = Number(args.value);
            this.loadGanttData();
        },

        onDataBound() {
            if (this.shouldCalculateLoadTime && this.startLoadTime) {
                this.shouldCalculateLoadTime = false;
                const endLoadTime = new Date();
                const diff = endLoadTime.getTime() - this.startLoadTime.getTime();
                this.loadTime = (diff / 1000).toFixed(2);
            }
        }
    },
    provide: {
        gantt: [Selection, VirtualScroll]
    }
};
</script>