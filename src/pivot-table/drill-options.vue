<template>
<div>
    <div class="col-lg-8 control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :width="width" :height="height">        
        </ejs-pivotview>
    </div>
</div>

<div class="col-lg-4 property-section">
    <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
            <tr>
                <td>
                    <div>
                        <ejs-radiobutton id="collapse" label="Collapse All" name="DrillOperation" :change="onRadioChange" checked="true"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <ejs-radiobutton id="expand" label="Expand All" name="DrillOperation" :change="onRadioChange"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <ejs-radiobutton id="fy15" label="FY 2015" name="DrillOperation" :change="onRadioChange"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <ejs-radiobutton id="fy15_q1" label="FY 2015 >> Q1" name="DrillOperation" :change="onRadioChange"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <ejs-radiobutton id="us" label="United States" name="DrillOperation" :change="onRadioChange"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div>
                        <ejs-radiobutton id="us_clothing" label="United States >> Clothing" name="DrillOperation" :change="onRadioChange"></ejs-radiobutton>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div id="action-description">
    <p>This sample demonstrates the drill up and drill down capabilities of pivot table.</p>
</div>
<div id="description">
    <p>In the sample, the pivot table can be completely expanded as well as collapsed. It can be done using
        <code>expandAll</code> property in pivot table. 
        <br><br>Meanwhile a particular row or column header can also be drilled during initial
        loading of the pivot table. It can be done using the
        <code>name</code> and
        <code>items</code> options inside the
        <code>drilledMembers</code> property in pivot table.
    </p>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { PivotViewPlugin, IDataSet } from "@syncfusion/ej2-vue-pivotview";
import {
  RadioButtonPlugin ,
} from "@syncfusion/ej2-vue-buttons";
import { extend, enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(RadioButtonPlugin );
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');
export default Vue.extend({
  data: () => {
    return {
        dataSourceSettings: {
            enableSorting: true,
            columns: [{ name: 'Year' }, { name: 'Quarter' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Product_Categories', caption: 'Product Categories' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            dataSource: Pivot_Data,
            expandAll: false,
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            filters: []
        },
        gridSettings: { columnWidth: 140 },
        width: '100%',
        height: 300
    };
  },
  methods: {
    onRadioChange: function(args: any) {
        let pivotObj = (<any>this.$refs.pivotview).ej2Instances; 
        let id: string = (args.event.target as HTMLElement).id;
        if (id !== 'collapse') {
            /** To restrict multiple times grid rendering on property change. */
            pivotObj.setProperties({ dataSourceSettings: { expandAll: false, drilledMembers: [] } }, true);
        } else {
            pivotObj.dataSourceSettings.drilledMembers = [];
        }
        if (id === 'collapse') {
            pivotObj.dataSourceSettings.expandAll = false;
        } else if (id === 'expand') {
            pivotObj.dataSourceSettings.expandAll = true;
        } else if (id === 'fy15') {
            pivotObj.dataSourceSettings.drilledMembers = [{ name: 'Year', items: ['FY 2015'] }];
        } else if (id === 'fy15_q1') {
            pivotObj.dataSourceSettings.drilledMembers = [{ name: 'Year', items: ['FY 2015'] },
            { name: 'Quarter', items: ['Q1'] }];
        } else if (id === 'us') {
            pivotObj.dataSourceSettings.drilledMembers = [{ name: 'Country', items: ['United States'] }];
        } else {
            pivotObj.dataSourceSettings.drilledMembers = [{ name: 'Country', items: ['United States'] },
            { name: 'Product_Categories', items: ['Clothing'] }];
        }
    }
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}
</style>