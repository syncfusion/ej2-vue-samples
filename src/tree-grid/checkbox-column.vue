<template>
    <div class="control-section">
        <div class="content-wrapper">
            <div class="checkboxprop">
                <div class="checkboxmode">
                    <span> Hierarchy Checkbox Mode </span>
                    <div class="checkboxmode">
                        <ejs-dropdownlist id="hierarchyModes" width="180px" :dataSource="hierarchyModeData"
                            :fields="hierarchyModeFields" value="Self" :change="hierarchyModeChange"
                            :htmlAttributes="dropDownAttributes">
                        </ejs-dropdownlist>
                    </div>
                </div>
            </div>
            <ejs-treegrid id="TreeGrid" aria-label="Tree Grid" :dataSource="data" childMapping="subTasks"
                :treeColumnIndex="1" :toolbar="toolbarOptions" :allowFiltering="true" :height="380"
                :hierarchyCheckboxMode="hierarchyCheckboxMode" :editSettings='editSettings'
                :queryCellInfo="queryCellInfo">
                <e-columns>
                    <e-column field="taskID" :visible="false" :isPrimaryKey="true"> </e-column>
                    <e-column field="taskName" headerText="Task Name" width="270" :showCheckbox="true">
                    </e-column>
                    <e-column field="assignee" headerText="Employee" width="180">
                    </e-column>
                    <e-column field="designation" headerText="Designation" width="220">
                    </e-column>
                    <e-column field="priority" headerText="Priority" width="140">
                    </e-column>
                    <e-column field="status" headerText="Status" width="120" textAlign="Center">
                    </e-column>
                    <e-column field="progress" headerText="Progress" width="120" textAlign="Right">
                    </e-column>
                </e-columns>
            </ejs-treegrid>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates hierarchical checkbox selection in the TreeGrid
                using the <code>hierarchyCheckboxMode</code> property.
            </p>
        </div>
        <div id="description">
            <p>
                Checkboxes are displayed in the Tree Grid tree column by enabling the
                <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/treegridcolumn#showcheckbox">showCheckbox</a></code>
                property. The checkbox selection behavior across hierarchical records is controlled through the
                <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#hierarchycheckboxmode">hierarchyCheckboxMode</a></code>
                property.
            </p>

            <p>
                In <strong>self</strong> mode, selecting a checkbox affects only the clicked row.
                In <strong>hierarchy</strong> mode, selecting a parent row automatically selects all its child rows, and
                changes made to child rows are reflected in their parent rows.
                The <strong>filteredHierarchy</strong> mode behaves similarly to hierarchy mode but applies selection
                only to the rows currently visible after filtering or searching.
            </p>

            <p>
                On touch-enabled devices, checkboxes can be selected or cleared by tapping them directly.
            </p>

            <p>
                More information on checkbox column can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/columns#checkbox-column">
                    documentation section</a>.
            </p>

            <p>
                Looking for the full Vue Tree Grid component overview, features, pricing, and documentation?
                Visit our
                <a target="_blank" href="https://www.syncfusion.com/vue-components/vue-tree-grid">
                    Vue Tree Grid component</a>
                page.
            </p>
        </div>
    </div>
</template>
<style>
.e-bigger.bootstrap5 .e-treegrid .e-hierarchycheckbox .e-frame,
.e-bigger.bootstrap5-dark .e-treegrid .e-hierarchycheckbox .e-frame,
.e-bigger.bootstrap4 .e-treegrid .e-hierarchycheckbox .e-frame {
    height: 17px;
    width: 17px;
}

.checkboxprop {
    padding-bottom: 5px;
}

.checkboxmode {
    display: inline-block;
}

.checkboxprop>.checkboxmode {
    display: flex;
    align-items: center;
    gap: 12px;
}

.checkboxprop>.checkboxmode>span {
    white-space: nowrap;
}

.checkboxprop>.checkboxmode>.checkboxmode {
    flex: 0 0 180px;
    width: 180px;
}

.status-badge {
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    display: inline-block;
}

.completed {
    background: #dcfce7;
    color: #15803d;
}

.in-progress {
    background: #dbeafe;
    color: #1d4ed8;
}

.not-started {
    background: #f3f4f6;
    color: #4b5563;
}

.under-review {
    background: #fef3c7;
    color: #b45309;
}

.blocked {
    background: #fee2e2;
    color: #dc2626;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import {
    ColumnDirective,
    ColumnsDirective,
    Filter,
    Toolbar,
    Edit,
    TreeGridComponent
} from '@syncfusion/ej2-vue-treegrid';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { ChangeEventArgs} from '@syncfusion/ej2-dropdowns';
import { QueryCellInfoEventArgs} from '@syncfusion/ej2-grids';
import { showCheckBoxData} from './data-source';
type HierarchyCheckboxMode =
    | 'self'
    | 'hierarchy'
    | 'filteredHierarchy';
interface HierarchyModeItem {
    id: string;
    name: string;
}
interface TaskData {
    taskID: number;
    taskName: string;
    assignee: string;
    designation: string;
    priority: string;
    status: string;
    progress: string;
    expanded?: boolean;
    subTasks?: TaskData[];
}
export default defineComponent({
    components: {
        'ejs-treegrid': TreeGridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'ejs-dropdownlist': DropDownListComponent
    },
    data() {
        return {
            data: showCheckBoxData as TaskData[],
            editSettings: { allowDeleting: true },
            toolbarOptions: ['Search', 'Delete'],
            hierarchyCheckboxMode:
                'self' as HierarchyCheckboxMode,
            hierarchyModeData: [
                {
                    id: 'Self',
                    name: 'Self'
                },
                {
                    id: 'Hierarchy',
                    name: 'Hierarchy'
                },
                {
                    id: 'FilteredHierarchy',
                    name: 'Filtered Hierarchy'
                }
            ] as HierarchyModeItem[],
            hierarchyModeFields: {
                text: 'name',
                value: 'id'
            },
            dropDownAttributes: {
                tabindex: '1'
            }
        };
    },
    methods: {
        hierarchyModeChange(
            args: ChangeEventArgs
        ): void {
            if (args.value === 'Hierarchy') {
                this.hierarchyCheckboxMode = 'hierarchy';
            } else if (
                args.value === 'FilteredHierarchy'
            ) {
                this.hierarchyCheckboxMode =
                    'filteredHierarchy';
            } else {
                this.hierarchyCheckboxMode = 'self';
            }
        },
        queryCellInfo(
            args: QueryCellInfoEventArgs
        ): void {
            if ( args.column?.field !== 'status' ||
                !args.cell ||
                !args.data ) {
                return;
            }
            const task: TaskData = args.data as TaskData;
            const statusClass: string = task.status
                .toLowerCase()
                .replace(/\s+/g, '-');
            args.cell.innerHTML = `
                <span class="status-badge ${statusClass}">
                ${task.status}
                </span>
            `;
        }
    },
    provide: {
        treegrid: [
            Filter,
            Toolbar,
            Edit
        ]
    }
});
</script>