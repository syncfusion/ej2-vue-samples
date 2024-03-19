<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder id="querybuilder" :dataSource="dataSource" ref="querybuilder" :rule="importRules" width="100%" :showButtons="{ cloneGroup: true, cloneRule: true }">
                <e-columns>
                    <e-column field='EmployeeID' label='Employee ID' type='number' />
                    <e-column field='FirstName' label='First Name' type='string' />
                    <e-column field='LastName' label='Last Name' type='string' />
                    <e-column field='Age' label='Age' type='number' />
                    <e-column field='IsDeveloper' label='Is Developer' type='boolean'/>
                    <e-column field='PrimaryFramework' label='Primary Framework' type='string' />
                    <e-column field='HireDate' label='Hire Date' type='date' format='MM/dd/yyyy' />
                    <e-column field='Country' label='Country' type='string' />
                </e-columns>
            </ejs-querybuilder>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the clone support of the Query Builder component. Click the clone button to clone the group or rule.</p>
        </div>
        <div id="description">
            <p>
                The Clone options will create an exact replica of a rule or group next to the original.
            </p>
            <p>
                In mobile mode, the component is shown vertically.
            </p>
            <p>
                More information about Query Builder can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/query-builder/getting-started/">documentation</a> section.
            </p>
        </div>
    </div>
</template>

<!-- custom code start -->
<style scoped>
    .e-query-builder {
        margin: 0 auto;
    }
</style>
<!-- custom code end -->

<script>

import { QueryBuilderComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-querybuilder";
import { Browser } from '@syncfusion/ej2-base';
import dataSource from './data-source.json';

export default {
    data: function() {
    return {
      dataSource: dataSource.employeeData,
      values: ['Mr.', 'Mrs.'],
      importRules:  {
        condition: "and",
        rules: [
            { label: "First Name", field: "FirstName", type: "string", operator: "startswith", value: "Andre" },
            { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'] },
            { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 29 },
            {
                condition: "or", rules: [
                    { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true },
                    { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "React" }
                ]
            },
            { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/22/2023", "11/30/2023"] },
        ],
    }
    };
    },
    components: { 
        'ejs-querybuilder': QueryBuilderComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective
    },
    methods: {
        onQrybldrCreated: function() {
            if(Browser.isDevice) {
             this.$refs.querybuilder.$el.ej2_instances[0].summaryView = true;
            }
        }
    }
};
</script>
