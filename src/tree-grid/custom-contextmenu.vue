<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :height='380' :contextMenuItems='contextMenuItems' :contextMenuOpen='contextMenuOpen' :contextMenuClick='contextMenuClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='70' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='endDate' headerText='End Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='80' textAlign='Right'></e-column>
                <e-column field='priority' headerText='Priority' width='90'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    <div id="action-description">
    <p>This sample demonstrates the usage of custom context menu in TreeGrid component. Right click anywhere on a parent row in the TreeGrid to view custom context menu.
    </p>
</div>

<div id="description">
    <p>
        TreeGrid has an option to show the custom context menu when right click on it. To configure the custom items in context menu, you should define custom item in  <code>contextMenuItems</code>. 
        
        In this demo, Custom Context Menu feature has enabled by defining the custom context menu <code>Expand the Row</code> and <code>Collapse the Row</code> for the parent nodes in <code>contextMenuItems</code>  property.
    </p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
            TreeGrid features are segregated into individual feature-wise modules. 
            To use context menu feature, we need to inject
            <code>ContextMenu</code> module into the <code>provide</code> section. 
    </p>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, ContextMenu, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-vue-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-vue-navigations';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
      contextMenuItems: [
                {text: 'Collapse the Row', target: '.e-content', id: 'collapserow'},
                {text: 'Expand the Row', target: '.e-content', id: 'expandrow'}
            ],
    };
  },
  provide : {
      treegrid: [ ContextMenu ]
    },
   methods:{
      contextMenuOpen:function (arg: BeforeOpenCloseEventArgs) {
                let elem: Element = arg.event.target as Element;
                let row: Element | null = elem.closest('.e-row');
                let uid = row && row.getAttribute('data-uid');
                if (uid === null || isNullOrUndefined(getValue('hasChildRecords', (<TreeGridComponent>this.$refs.treegrid).ej2Instances.grid.getRowObjectFromUID(uid).data))) {
                    arg.cancel = true;
                } else {
                    let flag: boolean = getValue('expanded', (<TreeGridComponent>this.$refs.treegrid).ej2Instances.grid.getRowObjectFromUID(uid).data);
                    let val: string = flag ? 'none' : 'block';
                    document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
                    val = !flag ? 'none' : 'block';
                    document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
                }
            },
            contextMenuClick:function (args: MenuEventArgs) {
                let selectedRows = (<TreeGridComponent>this.$refs.treegrid).getSelectedRows() as any;
                let selectedRecords = (<TreeGridComponent>this.$refs.treegrid).getSelectedRecords() as any;
                if (args.item.id === 'collapserow') {
                    (<TreeGridComponent>this.$refs.treegrid).collapseRow(<HTMLTableRowElement>selectedRows[0], selectedRecords[0]);
                } else {
                    (<TreeGridComponent>this.$refs.treegrid).expandRow(<HTMLTableRowElement>(selectedRows[0]), selectedRecords[0]);
                    }
            }
  }

});
</script>