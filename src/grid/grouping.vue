<template>
<div class="col-lg-12">
    <div id="action-description">
         <p>This sample demonstrates grouping feature of the Grid component. In this sample, the Grid data is grouped against
            ShipCountry  column. To group any other column simply drag the column header and drop on the group drop area.</p>
    </div>
    <div class="control-section">
        <ejs-grid ref="grid" :dataSource="data" :allowGrouping='true' :allowPaging='true' :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' :groupSettings='groupOptions' :editSettings='editSettings' :toolbar='toolbar' :pageSettings='pageOptions' :created='created' height=320>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='120' :validationRules='customeridrules'></e-column>
                <e-column field='Freight' headerText='Freight' width='180' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' editType='datetimepickeredit' :allowGrouping='false' :format='formatoptions' textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editparams'></e-column>
            </e-columns>
        </ejs-grid>
        <ejs-dialog :buttons='alertDlgButtons' ref="alertDialog" v-bind:visible="false" :header='alertHeader' :animationSettings='animationSettings' :content='alertContent' :showCloseIcon='showCloseIcon' :target='target'
            :width='alertWidth'>
        </ejs-dialog>
        <div style="margin-top: 10px; text-align: right">Source:
            <a href="https://en.wikipedia.org/wiki/List_of_prolific_inventors" target='_blank'>Wikipedia: List of Prolific inventors</a>
        </div>
    </div>

     <div id="description">
        <p>The Grid control has options to group the records based on the required column. When grouping is applied, grouped
            records are organized into a hierarchical structure to facilitate easier expansion and collapse of records. To enable
            grouping, set <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowgrouping">
        allowGrouping</a></code> property as true.</p>
        <p>Columns can be grouped by simply dragging the column header and drop on the group drop area.</p>
        <p>In this demo, to group a specify column, drag and drop the column in the group drop area.</p>
        <p> 
            In this demo, editing options can be enabled by setting <code>editSettings.allowEditing</code> as <code>true</code>.
            You can start editing by double-clicking a row or the toolbar `Edit` button. 
            Once in edit mode, you have the ability to modify the values of the selected row. 
            When saving the record, the Grid will refresh the specific edited row without affecting the expanded group state.
        </p>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use grouping and editing features, we need to inject
            <code>Group</code>, <code>Edit</code> modules into the <code>provide</code>.
        </p>
        <p>
            More information on the grouping feature configuration can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/grid/#groupsettings">documentation section</a>.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Group, Page, Sort, Edit, Toolbar, Filter } from "@syncfusion/ej2-vue-grids";
import { orderDataSource } from "./data-source";
import { DialogComponent } from '@syncfusion/ej2-vue-popups';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-dialog': DialogComponent
  },
  data: function() {
    return {
      alertHeader: 'Grouping',
      alertContent: 'Grouping is disabled for this column',
      showCloseIcon: false,
      target: '.control-section',  
      alertWidth: '300px',
      animationSettings: { effect: 'None' },
      alertDlgButtons: [{ click: ((<any>this).alertDlgBtnClick as any), buttonModel: { content: 'OK', isPrimary: true } }],
      data: orderDataSource,
      editSettings: { allowEditing: true },
      toolbar: ['Edit', 'Update', 'Cancel'],
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
      formatoptions: { type: 'dateTime', format: 'M/d/y hh:mm a' },
      freightrules:  { required: true },
      editparams: { params: { popupHeight: '300px' }},
      pageOptions: { pageCount: 5 },
      groupOptions: { columns: ["ShipCountry"] },
      filterSettings: { type: 'Excel' },
    };
  },
  methods: {
    created: function() {
        ((<any>this).$refs.grid.ej2Instances as any).on("columnDragStart", this.columnDragStart, this);
    },
    columnDragStart: function(args: any) {
        if(args.column.field === "OrderDate"){
             ((this as any).$refs.alertDialog).show();
        }
    },
    alertDlgBtnClick: function() {
        ((<any>this).$refs.alertDialog as any).hide();
    },
  },
  provide: {
    grid: [Group, Page, Sort, Edit, Toolbar, Filter]
  }
}
</script>