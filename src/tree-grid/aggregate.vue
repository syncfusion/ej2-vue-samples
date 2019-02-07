<template>
<div class="control-section">
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' :dataSource="data" childMapping='children' :treeColumnIndex='0' :height='380' >
            <e-columns>
                <e-column field='FreightID' headerText='Freight ID' width='150'></e-column>
                <e-column field='FreightName' headerText='Freight Name' width='200'></e-column>
                <e-column field='UnitWeight' headerText='Weight Per Unit' width='130' textAlign='Right'></e-column>
                <e-column field='TotalUnits' headerText='Total Units' width='140' textAlign='Right'></e-column>
            </e-columns>
            <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Max" field="UnitWeight" columnName='UnitWeight' :footerTemplate="maxTemplate" >
                        </e-column>
                        <e-column type="Min" field="TotalUnits" columnName='TotalUnits' :footerTemplate="minTemplate">
                        </e-column>
                    </e-columns>
                </e-aggregate>
            </e-aggregates>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
        <tr>
            <td style="width: 70%;padding-right:10px">
                <div>
                    Show Child Summary
                </div>
            </td>
            <td style="width: 30%;padding-bottom: 10px">
                <div>
                    <ejs-checkbox ref='childsummary' :checked="true" :change="onchange"></ejs-checkbox>
                </div>
            </td>
        </tr>
    </table>
        </div>
    </div>

     <div id="action-description">
    <p>This sample demonstrates aggregate functionality of the TreeGrid. In this sample, the aggregate value for the columns “Total Units”, “Total Cost” and “Unit Weight” is displayed in column footer and provide an option to show child summary.</p>
</div>
<div id="description">
    <p>The TreeGrid supports aggregates which will be displayed at the footer and every hierarchy level.
    The aggregate configurations can be provided by the <code>
        aggregates</code> property.</p>
    <p>The built-in aggregates are,</p>
     <ul>
        <li><code>Sum</code></li>     
        <li><code>Average</code></li>     
        <li><code>Min</code></li>     
        <li><code>Max</code></li>     
        <li><code>Count</code></li>     
        <li><code>TrueCount</code></li>     
        <li><code>FalseCount</code></li>     
        <li><code>Custom</code> - Requires the <code>customAggregate</code> property to perform aggregation.
        The custom aggregate value can be accessed inside template using the key <code>${custom}</code></li>     
    </ul>    
    <p>
        In this demo, the <code>footerTemplate</code> property is used to display three different aggregates in the TreeGrid footer. 
        <ul>
            <li>Showing minimum aggregate for “Total Units” column and the footerTemplate using its type name as <code>(${Min})</code>.</li>
            <li>Showing maximum aggregate for “Total Cost” column and the footerTemplate using its type name as <code>(${Max})</code>.</li>
            <li>Showing average aggregate for “Unit weight column” column and the footerTemplate using its type name as <code>(${Average})</code>.</li>
        </ul>
    </p>
    <p>The template expression should be provided inside <code>${...}</code> the interpolation syntax.</p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        TreeGrid features are segregated into individual feature-wise modules. 
        To use aggregate feature, we need to inject
        <code>Aggregate</code>module into the <code>provide</code> section. 
    </p>
    <p>
        More information about aggregate can be found in this documentation section.
    </p>
</div>


</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, TreeGridComponent, Aggregate, Page } from "@syncfusion/ej2-vue-treegrid";
import { summaryRowData } from "./data-source";
import { CheckBoxPlugin, CheckBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-vue-buttons';

Vue.use(TreeGridPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: summaryRowData,
      maxTemplate: function() {
        return {
            template: Vue.component('maxTemplate', {
            template: `<span>Max: {{data.Max}}</span>`,
            data: function () {return {data: {data: {}}};}
            })
        }
      },
      minTemplate: function() {
        return {
            template : Vue.component('minTemplate', {
            template: `<span>Minimum: {{data.Min}}</span>`, 
            data: function () {return { data: {data: {}}};}
            })
        }
      }
    };
  },
  provide: {
      treegrid: [Aggregate, Page]
  },
  methods: {
      onchange: function( args: ChangeEventArgs): void {
        if (args.checked) {
            (<TreeGridComponent>this.$refs.treegrid).ej2Instances.aggregates[0].showChildSummary = true;
            (<TreeGridComponent>this.$refs.treegrid).refresh();
         } else {
            (<TreeGridComponent>this.$refs.treegrid).ej2Instances.aggregates[0].showChildSummary = false;
            (<TreeGridComponent>this.$refs.treegrid).refresh();
        }
  }
  }
});
</script>