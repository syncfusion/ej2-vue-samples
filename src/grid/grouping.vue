<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
         <p>This sample demonstrates grouping feature of the Grid component. In this sample, the Grid data is grouped against
        Country column. To group any other column simply drag the column header and drop on the group drop area.</p>
    </div>
    <div>
        <div class="control-section">
        <ejs-grid ref="grid" :dataSource="data" :allowGrouping='true' :allowPaging='true' :allowSorting='true' :groupSettings='groupOptions' :pageSettings='pageOptions' :created='created' height=320>
            <e-columns>
                <e-column field='Inventor' headerText='Inventor Name' width='180'></e-column>
                <e-column field='NumberofPatentFamilies' headerText="Number of Patent Families" width='220' textAlign='Right'></e-column>
                <e-column field='Country' headerText='Country' width='140'></e-column>
                <e-column field='Active' width='120'></e-column>
                <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' :allowGrouping='false' width='200'></e-column>
            </e-columns>
        </ejs-grid>
        </div>
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
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowgrouping-boolean">
        allowGrouping</a></code> property as true.</p>
        <p>Columns can be grouped by simply dragging the column header and drop on the group drop area.</p>
        <p>In this demo, to group a specify column, drag and drop the column in the group drop area.</p>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use grouping feature, we need to inject
            <code>Group</code> into the <code>provide</code> section.
        </p>
        <p>
            More information on the grouping feature configuration can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#groupsettings-groupsettingsmodel">documentation section</a>.
        </p>
    </div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { GridPlugin, Group, Page, Sort } from "@syncfusion/ej2-vue-grids";
import { inventoryData } from "./data-source";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';


Vue.use(GridPlugin);
Vue.use(DialogPlugin);

export default Vue.extend({
  data: function() {
    return {
      alertHeader: 'Grouping',
      alertContent: 'Grouping is disabled for this column',
      showCloseIcon: false,
      target: '.control-section',  
      alertWidth: '300px',
      animationSettings: { effect: 'None' },
      alertDlgButtons: [{ click: ((<any>this).alertDlgBtnClick as any), buttonModel: { content: 'OK', isPrimary: true } }],
      data: inventoryData,
      pageOptions: { pageCount: 5 },
      groupOptions: { columns: ["Country"] }
    };
  },
  methods: {
    created: function() {
        ((<any>this).$refs.grid.ej2Instances as any).on("columnDragStart", this.columnDragStart, this);
    },
    columnDragStart: function(args: any) {
        if(args.column.field === "Mainfieldsofinvention"){
             (<any>this.$refs.alertDialog).show();
        }
    },
    alertDlgBtnClick: function() {
        ((<any>this).$refs.alertDialog as any).hide();
    },
  },
  provide: {
    grid: [Group, Page, Sort]
  }
});
</script>