<template>
  <div>
    <div class="control-section">
      <div className="tabular-layout-switch">
        <label id="layout-label" fsor="layout-switch">Classic (Tabular) layout</label>
        <ejs-switch id="layout-switch" :checked="true" :change="onChange" :cssClass="cssClass"></ejs-switch>
      </div>
      <div>
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings" :width="width" :height="height" :showGroupingBar="true" :showFieldList="true">
        </ejs-pivotview>
      </div>
    </div>

    <div id="action-description">
      <p>This sample showcases the classic layout option of the Pivot Table, also known as the Excel-like tabular
        format.
        In this layout, each field from the row and column axes is arranged sequentially, displayed side by side in
        separate rows or columns. Subtotals and grand totals are prominently shown, making it easy to compare and
        analyze data effectively.
      </p>
    </div>
    <div id="description">
      <p>The Pivot Table's classic (tabular) layout displays each field in the row axis side by side in separate
        columns. By default, grand totals are displayed at the end of all rows, while subtotals are placed in a separate
        row beneath
        each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse
        functionality, and more, remain the same as in the Compact (Excel-like) layout, which serves as the default
        layout for the Syncfusion Pivot Table.
      </p>
      <p>
        This layout can be enabled by setting the <code>layout</code>
        property to <b>Tabular</b> within the <code>gridSettings</code>.
        Using the <b>Classic (Tabular) Layout</b> toggle switch, the pivot table layout can be dynamically switched
        between
        Compact and Classic (Tabular) layouts at runtime.
      </p>
      <p><b>Note:</b> For pivot table reports containing multi-level hierarchies with extensive sublevels, the default
        layout (i.e., compact view) is recommended, as it effectively displays data in a simple and compact manner.
      </p><br />
      <p>
        More information on the Essential JS2 Pivot Table can be found in this <a target="_blank"
          href="https://ej2.syncfusion.com/documentation/pivotview/getting-started#adding-pivot-table-component">
          documentation section</a>.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { PivotViewComponent, IDataSet, FieldList, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { Browser, extend, enableRipple } from '@syncfusion/ej2-base';
import { Pivot_Data } from "./data-source";
enableRipple(false);

/* tslint:disable */

export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-switch': SwitchComponent
  },
  data: () => {
    return {
      dataSourceSettings: {
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        filterSettings: [{
          name: 'Products', type: 'Include', items: ['Bottles and Cages', 'Cleaners', 'Fenders', 'Gloves', 'Helmets',
            'Hydration Packs', 'Jerseys', 'Mountain Bikes']
        }],
        dataSource: Pivot_Data,
        expandAll: false,
        values: [{ name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
        filters: []
      },
      width: "100%",
      gridSettings: { columnWidth: Browser.isDevice ? 100 : 140, layout: 'Tabular' },
      height: 450,
      cssClass: "pivot-layout-switch"
    };
  },
  methods: {
    onChange: function (args: any) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      pivotObj.gridSettings.layout = pivotObj.gridSettings.layout === 'Compact' ? 'Tabular' : 'Compact';
    }
  },
  provide: {
    pivotview: [
      FieldList,
      GroupingBar
    ]
  }
}
</script>

<style scoped>
/deep/ #pivotview {
  width: 100%;
}

/deep/ .sb-sample-content-area {
  min-height: 255px !important;
}

/deep/ .control-section {
  min-height: 255px !important;
}

.tabular-layout-switch {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.pivot-layout-switch,
#layout-switch {
  margin-left: 10px;
}
</style>
