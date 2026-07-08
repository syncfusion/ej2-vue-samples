<template>
  <ejs-grid :dataSource="gridData" :allowPaging="false" width="min-content">
    <e-columns>
      <e-column field="Region" headerText="Region"   width="150" textAlign="Center" />
      <e-column field="Sales"  headerText="Sales %"  width="120" textAlign="Center" />
      <e-column field="Growth" headerText="Growth %" width="120" textAlign="Center" />
      <e-column field="Status" headerText="Status"   width="130" textAlign="Center" />
    </e-columns>
  </ejs-grid>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";

export default {
  name: "SalesGrid",
  components: {
    "ejs-grid":  GridComponent,
    "e-columns": ColumnsDirective,
    "e-column":  ColumnDirective
  },
  props: {
    gridData: {
      type: Array,
      default: () => []
    }
  }
};
</script>