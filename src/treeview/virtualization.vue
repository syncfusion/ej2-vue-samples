<template>
<div>
    <div class="col-lg-12 control-section tree-virtualization">
        <div class="tree-control-wrapper">
            <ejs-treeview
                id="treeview"
                :fields="fields"
                :height="height"
                :enableVirtualization="true"
                :showCheckBox="true">
            </ejs-treeview>
        </div>
    </div>

    <div id="action-description">
        <p>
            This example demonstrates virtualization support in Vue TreeView. The component has 8000 items bound to it including children; however, when you open the suggestion list, only few items are loaded based on the height specified, and the remaining items are loaded while scrolling.
        </p>
    </div>

    <div id="description">
    <p>The TreeView supports UI virtualization to improve rendering performance when handling a large amount of data. Enable this feature by setting the <code>enableVirtualization</code> property to <code>true</code> and providing a fixed <code>height</code> for the TreeView container.</p>
    <p>In this demo, a large organization-like dataset is generated programmatically and virtualization is enabled to render the nodes efficiently.</p>
    <p>For more details, refer to the <a href="https://ej2.syncfusion.com/vue/documentation/treeview/virtualization/" target="_blank">Virtualization documentation</a>.</p>
</div>
</div>
</template>

<style>
.tree-virtualization .tree-control-wrapper {
    max-width: 700px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}
</style>

<script>
import { TreeViewComponent } from "@syncfusion/ej2-vue-navigations";

export default {
    components: {
        "ejs-treeview": TreeViewComponent
    },
    data() {

        var totalNodes = 8000;
        var employeesPerDept = 20;

        var departments = [
            'Engineering',
            'Sales',
            'Human Resources',
            'Finance',
            'Marketing',
            'Customer Support',
            'Operations',
            'Legal',
            'Research',
            'IT Infrastructure'
        ];

        var employeeRoles = [
            'Manager',
            'Senior Engineer',
            'Software Engineer',
            'Business Analyst',
            'QA Engineer',
            'Consultant',
            'Specialist',
            'Coordinator',
            'Executive',
            'Associate'
        ];

        function generateOrganizationData(total, children) {
            var data = [];
            var index = 0;
            var id = 1;
            var deptIndex = 0;

            while (index < total) {

                var deptId = id++;
                var parentIndex = index;

                data[index++] = {
                    id: deptId,
                    pid: null,
                    name: departments[deptIndex % departments.length],
                    hasChild: false,
                    isChecked: true,
                    isExpanded: false
                };

                var childCount = 0;

                for (var i = 0; i < children && index < total; i++) {
                    data[index++] = {
                        id: id++,
                        pid: deptId,
                        name: employeeRoles[i % employeeRoles.length] + ' - Employee ' + (i + 1),
                        isChecked: true,
                        isExpanded: false
                    };

                    childCount++;
                }

                if (childCount > 0) {
                    data[parentIndex].hasChild = true;
                }

                deptIndex++;
            }

            return data;
        }

        return {
            height: "400px",
            fields: {
                dataSource: generateOrganizationData(totalNodes, employeesPerDept),
                id: 'id',
                parentID: 'pid',
                text: 'name',
                hasChildren: 'hasChild',
                isChecked: 'isChecked',
                expanded: 'isExpanded'
            }
        };
    }
}
</script>