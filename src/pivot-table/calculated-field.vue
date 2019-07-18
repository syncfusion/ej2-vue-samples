<template>
<div>
    <div class="col-lg-9 control-section">
        <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height" :allowCalculatedField="allowCalculatedField" :showFieldList="showFieldList">        
        </ejs-pivotview>
        </div>
    </div>
    
    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td>
                        <div>
                          <ejs-button id="calculated-field-btn" v-on:click.native="btnClick" isPrimary='true'>Calculated Field</ejs-button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div id="action-description">
        <p>In this sample, <b>Total Units</b> acts as the calculated field. Users can insert a new basic arithmetic expression based on the existing measure items either through a dialog at runtime or through code behind.</p>
    </div>
    <div id="description">
        <p>The calculated field feature allows users to create custom fields which are not present in the actual data. Users can
            create these fields using basic mathematical expression collaborating with existing fields. Calculated fields can
            be created through UI dialog as well as code behind and it can be enabled by setting
            <code>allowCalculatedField</code> as true. The
            <code>calculatedFieldSettings</code> property is available to configure the calculated field in code behind.
            <br>
            <br>The pivot table features are segregated into individual modules. To add calculated field, we need to inject
            <code>CalculatedField</code> module into the
            <code>provide</code> section.</p>
    </div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  PivotViewPlugin,
  IDataSet,
  CalculatedField,
  FieldList
} from "@syncfusion/ej2-vue-pivotview";
import {
  ButtonPlugin,
  ChangeEventArgs as checkEventArgs
} from "@syncfusion/ej2-vue-buttons";
import { extend, enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');
export default Vue.extend({
  data: () => {
    return {
        dataSourceSettings: {
            dataSource: Pivot_Data,
            expandAll: false,
            enableSorting: true,
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' },
            { name: 'Sold', caption: 'Units Sold' }, { name: 'Total', caption: 'Total Units', type: 'CalculatedField' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            calculatedFieldSettings: [
                {
                    name: 'Total',
                    formula: '"Sum(In_Stock)"+"Sum(Sold)"'
                }]
        },
        allowCalculatedField: true,
        showFieldList: true,
        gridSettings: { columnWidth: 140 },
        width: '100%',
        height: 300
    };
  },
  methods: {
    btnClick: function(args: checkEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      pivotObj.calculatedFieldModule.createCalculatedFieldDialog();
    }
  },
  provide: {
    pivotview: [CalculatedField,FieldList]
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}
</style>