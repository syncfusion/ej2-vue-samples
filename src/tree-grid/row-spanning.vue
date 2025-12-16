<template>
  <div class="col-lg-12 control-section">
 <div id="action-description">
    <p>
        This sample demonstrates how the Tree Grid automatically merges adjacent cells containing same value across both rows and columns. 
    </p>
</div>
<div id="description">
    <p>
        In this demo, the <b>"Start Date"</b>, <b>"End Date"</b>, <b>"Status"</b>, and <b>"Permit Status"</b> columns are merged when they share the same value. Row and column spanning can be enabled by setting <code>enableRowSpan</code> and <code>enableColumnSpan</code> to <b>true</b>, allowing the Tree Grid to merge adjacent cells both horizontally and vertically.
    </p>
    <p>
        The <b>"Phase Name"</b> column remains frozen on the left side, achieved using the <a href="https://ej2.syncfusion.com/vue/documentation/treegrid/frozen#freeze-direction">freeze</a> property in the column definition.
    </p>
    <p>Tree Grid features are separated into feature-wise modules. To use the frozen rows and columns feature, we need to inject the <code>Freeze</code> module into the <code>provide</code> section.</p>
    <p>
        More information on the Tree Grid component can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/getting-started">
            documentation</a> section.
    </p>
</div>
    <div>
      <ejs-treegrid :dataSource="data" childMapping="children" :treeColumnIndex="0" :enableColumnSpan="true"
        :enableRowSpan="true" :height=400 gridLines="Both" :enableHover=false :allowSelection=false :allowPaging='true'
        :pageSettings='pageSettings' clipMode='EllipsisWithTooltip'>
        <e-columns>
          <e-column field="activityName" headerText="Phase Name" width="250" freeze='Left'></e-column>
          <e-column headerText="Schedule" textAlign="Center" :columns="scheduleColumns"></e-column>
          <e-column headerText="Work Status" textAlign="Center" :columns="statusColumns"></e-column>
          <e-column headerText="Compliance" textAlign="Center" :columns="complianceColumns"></e-column>
          <e-column headerText="Personnel" textAlign="Center" :columns="personnelColumns"></e-column>
          <e-column headerText="Materials" textAlign="Center" :columns="materialsColumns"></e-column>
          <e-column headerText="Cost Summary" textAlign="Center" :columns="budgetColumns"></e-column>
        </e-columns>
      </ejs-treegrid>
    </div>

  </div>
</template>

<script>
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Freeze, Page } from "@syncfusion/ej2-vue-treegrid";
import { rowSpanData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: rowSpanData,
      pageSettings: { pageSizeMode: 'All', pageSize: 18 },
      scheduleColumns: [
        { field: 'startDate', headerText: 'Start Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' },
        { field: 'endDate', headerText: 'End Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' }
      ],
      personnelColumns: [
        {
          field: 'supervisor',
          headerText: 'Supervisor',
          width: 180,
        },
        { field: 'team', headerText: 'Crew', width: 200 }
      ],
      statusColumns: [
        { field: 'status', headerText: 'Status', width: 180, textAlign: 'Center' }
      ],
      complianceColumns: [
        { field: 'permitStatus', headerText: 'Permit Status', width: 160, textAlign: 'Center' },
        { field: 'inspectionDate', headerText: 'Inspection Date', width: 180, type: 'date', format: 'MM/dd/yyyy', textAlign: 'Center' },
        { field: 'inspectionStatus', headerText: 'Inspection Status', width: 180, textAlign: 'Center' },
        { field: 'punchListStatus', headerText: 'Punch List Status', width: 180, textAlign: 'Center' }
      ],
      materialsColumns: [
        { field: 'materialUsed', headerText: 'Materials Used', width: 180, textAlign: 'Center' },
        { field: 'materialCost', headerText: 'Material Cost', width: 140, format: 'C2', textAlign: 'Right', enableRowSpan: false }
      ],
      budgetColumns: [
        { field: 'totalBudget', headerText: 'Planned Budget', width: 140, format: 'C2', textAlign: 'Center', enableColSpan: false, enableRowSpan: false },
        { field: 'paidToDate', headerText: 'Actual Spend', width: 140, format: 'C2', textAlign: 'Center', enableColSpan: false, enableRowSpan: false }
      ]
    }
  },
  provide: {
    treegrid: [Freeze, Page]
  }
}
</script>
