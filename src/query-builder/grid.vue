<template>
    <div>
        <div class="col-lg-12 control-section" style="min-height: auto;">
            <ejs-querybuilder id="querybuilder" ref="querybuilder" :dataSource="dataSource" :rule="importRules" width="100%" :ruleChange="updateRule">
                <e-columns>
                    <e-column field='TaskID' label='Task ID' type='number' />
                    <e-column field='Name' label='Name' type='string' />
                    <e-column field='Category' label='Category' type='string' />
                    <e-column field='SerialNo' label='Serial No' type='string' />
                    <e-column field='InvoiceNo' label='Invoice No' type='string' />
                    <e-column field='Status' label='Status' type='string' />
                </e-columns>
            </ejs-querybuilder>
        </div>
        <div class="col-lg-12 control-section">
            <div class="content-wrapper">
                <ejs-grid id="grid" ref="grid" :dataSource="gridDataSource" width="100%" :allowPaging="true" :allowSelection="true" :pageSettings="pageSettings" :created="onGridCreated">
                    <e-columns>
                        <e-column field='TaskID' headerText='Task ID' width='120' textAlign='Right'></e-column>
                        <e-column field='Name' headerText='Name' width='140'></e-column>
                        <e-column field='Category' headerText='Category' width='140' textAlign='Right'></e-column>
                        <e-column field='InvoiceNo' headerText='Invoice No' width='130'></e-column>
                        <e-column field='Status' headerText='Status' width='120'></e-column>
                        <e-column field='SerialNo' headerText='Serial No' width='130'></e-column>
                    </e-columns>
                </ejs-grid>
            </div>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the integration of the Data Grid component to showcase data population based on the created filters using the Query Builder component.</p>
        </div>
        <div id="description">
            <p>
                This sample illustrates how to integrate the Data Grid component with the Query Builder. The Data Grid component will be refreshed while editing the filters in Query Builder.
            </p>
            <p>
                More information about Query Builder can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/query-builder/getting-started/">
                    documentation</a> section.
            </p>
        </div>
    </div>
</template>

<!-- custom code start -->
<style>
    .e-querybuilder {
        margin: 4% auto;
    }
    #grid {
        margin: 0 auto;
    }
</style>
<!-- custom code end -->

<script>
import Vue from "vue";
import { QueryBuilderPlugin } from "@syncfusion/ej2-vue-querybuilder";
import { GridPlugin, Page, Selection } from "@syncfusion/ej2-vue-grids";
import { DataManager, Query, Predicate } from '@syncfusion/ej2-data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import * as dataSource from './data-source.json';

Vue.use(QueryBuilderPlugin);
Vue.use(GridPlugin);

export default Vue.extend({
  data: function() {
    return {
      dataSource: dataSource.hardwareData,
      gridDataSource: dataSource.hardwareData,
      pageSettings: { pageSize: 8, pageCount: 5 },
      importRules: {
        'condition': 'or',
        'rules': [{
            'label': 'Category',
            'field': 'Category',
            'type': 'string',
            'operator': 'equal',
            'value': 'Laptop'
        }]
      }
    };
  },
  methods: {
        updateRule: function(args) {
            var predicate = this.$refs.querybuilder.ej2Instances.getPredicate(args.rule);
            var fltrDataSource = [];
            var dataManagerQuery;
            if (isNullOrUndefined(predicate)) {
                dataManagerQuery = new Query().select(['TaskID', 'Name', 'Category', 'SerialNo', 'InvoiceNo', 'Status']);
            } else {
                dataManagerQuery = new Query().select(['TaskID', 'Name', 'Category', 'SerialNo', 'InvoiceNo', 'Status'])
                .where(predicate);
            }
            new DataManager(dataSource.hardwareData)
            .executeQuery(dataManagerQuery)
            .then((e) => {
                (e.result).forEach((data) => {
                    fltrDataSource.push(data);
                });
            });
            this.gridDataSource = fltrDataSource;
            this.$refs.grid.ej2Instances.refresh();
        },
        onGridCreated: function() {
            this.updateRule({rule: this.$refs.querybuilder.ej2Instances.getValidRules(this.$refs.querybuilder.ej2Instances.rule)});
        }
    },
  provide: {
      grid: [Page, Selection]
   }
});
</script>