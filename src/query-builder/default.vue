<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder id="querybuilder" :dataSource="dataSource" ref="querybuilder" :rule="importRules" width="70%" :created="onQrybldrCreated">
                <e-columns>
                    <e-column field='EmployeeID' label='Employee ID' type='number' />
                    <e-column field='FirstName' label='First Name' type='string' />
                    <e-column field='TitleOfCourtesy' label='Title Of Courtesy' type='boolean' :values="values" />
                    <e-column field='Title' label='Title' type='string' />
                    <e-column field='HireDate' label='Hire Date' type='date' format='dd/MM/yyyy' />
                    <e-column field='Country' label='Country' type='string' />
                    <e-column field='City' label='City' type='string' />
                </e-columns>
            </ejs-querybuilder>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the default functionalities of the Query Builder component. Click the plus button to add a group or conditions.</p>
        </div>
        <div id="description">
            <p>
                The Query Builder component is used to create or edit filters. You can edit filters by changing the fields.
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
<style>
    .e-query-builder {
        margin: 0 auto;
    }
</style>
<!-- custom code end -->

<script>
import Vue from "vue";
import { QueryBuilderPlugin } from "@syncfusion/ej2-vue-querybuilder";
import { Browser } from '@syncfusion/ej2-base';
import * as dataSource from './data-source.json';

Vue.use(QueryBuilderPlugin);

export default Vue.extend({
  data: function() {
    return {
      dataSource: dataSource.employeeData,
      values: ['Mr.', 'Mrs.'],
      importRules: {
        'condition': 'and',
        'rules': [{
                'label': 'Employee ID',
                'field': 'EmployeeID',
                'type': 'number',
                'operator': 'equal',
                'value': 1
            },
            {
                'label': 'Title',
                'field': 'Title',
                'type': 'string',
                'operator': 'equal',
                'value': 'Sales Manager'
            }]
        }
    };
  },
   methods: {
        onQrybldrCreated: function() {
            if(Browser.isDevice) {
             this.$refs.querybuilder.$el.ej2_instances[0].summaryView = true;
            }
        }
    }
});
</script>