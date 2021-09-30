<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder id="querybuilder" :dataSource="dataSource" ref="querybuilder" :rule="importRules" width="100%" :fieldMode="fieldMode" :separator="separator">
                <e-columns>
                    <e-column field="Employee" label="Employee" :columns='columns1'/>
                    <e-column field="Name" label="Name" :columns="columns2" />
                    <e-column field='Country' label='Country' :columns="columns3"/>
                </e-columns>
            </ejs-querybuilder>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the Complex Databinding functionalities of the Query Builder component. In the <b>Complex Databinding</b>, select an item from the hierarchical structure options list.</p>
        </div>
        <div id="description">
            <p>In <b>Query Builder</b>, the Complex Databinding input field can be change neither <b>Dropdown List</b> nor <b>Dropdown Tree</b> using the <code>fieldMode</code> property.</p>
            <p>In this sample, the Complex Databinding integrated with the Dropdown Tree.</p>
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
import Vue from "vue";
import { QueryBuilderPlugin } from "@syncfusion/ej2-vue-querybuilder";
import * as dataSource from './data-source.json';

Vue.use(QueryBuilderPlugin);

export default Vue.extend({
    data: function() {
        return {
            dataSource: dataSource.complexData,
            fieldMode: 'DropdownTree',
            separator: '.',
            importRules: {
                condition: 'and',
                rules: [{
                    label: 'ID',
                    field: 'Employee.ID',
                    type: 'number',
                    operator: 'equal',
                    value: 1001
                },
                {
                   label: 'First Name',
                   field: 'Name.FirstName',
                   type: 'string',
                   operator: 'equal',
                   value: 'Mark'
                },
                {
                condition: 'or',
                rules: [{
                    label: 'City',
                    field: 'Country.State.City',
                    operator: 'equal',
                    type: 'string',
                    value: 'Jersey City'
                }, {
                    label: 'Date of birth',
                    field: 'Employee.DOB',
                    operator: 'equal',
                    type: 'date',
                    value: '7/7/96'
                }]
                }]
            },
            columns1: [
                { field: 'ID', label: 'ID', type: 'number'},
                { field: 'DOB', label: 'Date of birth', type: 'date'},
                { field: 'HireDate', label: 'Hire Date', type: 'date'},
                { field: 'Salary', label: 'Salary', type: 'number'},
                { field: 'Age', label: 'Age', type: 'number'},
                { field: 'Title', label: 'Title', type: 'string'}
            ],
            columns2: [
                { field: 'FirstName', label: 'First Name', type: 'string'},
                { field: 'LastName', label: 'Last Name', type: 'string'}
            ],
            columns3: [
                { field: 'State', label: 'State', columns : [
                    { field: 'City', label: 'City', type: 'string'},
                    { field: 'Zipcode', label: 'Zip Code', type: 'number'}] },
                { field: 'Region', label: 'Region', type: 'string'},
                { field: 'Name', label: 'Name', type: 'string'}
            ],
        };
    }
});
</script>