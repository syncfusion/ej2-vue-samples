<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates copy to clipboard functionality of the Grid component. Select rows and click Copy button from
        toolbar to copy content. To copy with header click Copy with header button from toolbar.
        </p>
    </div>
    <div>
       <div class="col-md-9 control-section">
           <ejs-treegrid ref='treegrid' id='treegrid' :dataSource='data' :height='350' childMapping='subtasks' :allowSelection='true' :treeColumnIndex='1' :allowPaging= 'true' :pageSettings='pageSettings' :selectionSettings="selectOptions"
         :toolbar='toolbar' :toolbarClick='clickHandler'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width='90'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right' format='yMd' type='date' width='100'></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right' width='90'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
     <ejs-dialog :buttons='alertDlgButtons' ref="alertDialog" v-bind:visible="false" :header='alertHeader' :animationSettings='animationSettings' :content='alertContent' :showCloseIcon='showCloseIcon' :target='target'
            :width='alertWidth'>
        </ejs-dialog>
    </div>
     <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <br/><br/>
                <tr style="height: 50px">
                    <td style="width: 70%">
                        <div>Hierarchy Mode</div>
                    </td>
                    <td style="width: 50%; padding-left: 10px">
                        <ejs-dropdownlist id='ddlelement' width='90px' :dataSource='ddldata' value='Parent' :fields='ddlfields' :change="onChange"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>

    <div id="description">
    <p>Selected rows or cells data in the Tree Grid can be copied into the clipboard using the Keyboard shortcuts and
        <code><a target="_blank"
        href="https://ej2.syncfusion.com/documentation/api/treegrid/#copy">copy
        </a></code> method.
    </p>
    <p>In this demo, selected rows data can be copied into the clipboard using the below Keyboard shortcuts or toolbar
        interactions.
        <ul>
            <li><code>Ctrl + C</code> - Selected rows or cells data without header.</li>
            <li><code>Ctrl + Shift + H</code> - Selected rows or cells data with header.</li>
        </ul>
    </p>
    <p>Tree Grid provides support for a set of copy modes with <code>copyHierarchyMode</code> property.
     The below are the type of copy mode available in Tree Grid. </p>
    <ul>
        <li><code>Parent</code> - This is the default copy hierarchy mode in Tree Grid. 
        Clipboard value have the selected records with its parent records,
         if the selected records not have any parent record then the selected record will be in clipboard.</li>
        <li><code>Child</code> - Clipboard value have the selected records with its child record,
         if the selected records do not have any child record then the selected records will be in clipboard.</li>
        <li><code>Both</code> - Clipboard value have the selected records with its both parent and child record.
        If the selected records do not have any parent and child record then the selected records will be in clipboard.</li>
        <li><code>None</code> - Only the Selected records will be in clipboard.</li>
    </ul>
    <p>While using the Tree Grid in a touch device environment, there is an option for multi-selection 
        through single tap on the row and it will show a popup with the multi-selection symbol. 
        Tap the icon to enable multi-selection in a single tap and click for the toolbar to copy the selected records into clipboard.
    </p>
    <p>More information on the Clipboard feature can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/clipboard/">
            documentation section</a>.
    </p>
    </div>

</div>
</template>
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListComponent, ChangeEventArgs, DropDownList} from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./data-source";
import { ClickEventArgs } from "@syncfusion/ej2-vue-navigations";
import { DialogComponent } from '@syncfusion/ej2-vue-popups';

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-dialog': DialogComponent
  },  
  data: function() {
    return {
      alertHeader: 'Copy with Header',
      alertContent: 'Atleast one row should be selected to copy with header',
      showCloseIcon: false,
      target: '.control-section',
      alertWidth: '300px',
      animationSettings: { effect: 'None' },
      alertDlgButtons: [{ click: (((this as any)).alertDlgBtnClick as any), buttonModel: { content: 'OK', isPrimary: true } }],
      data: sampleData,
      selectOptions: { type: 'Multiple' },
      toolbar: [{ text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy' },
        { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }],
      pageSettings: { pageSize: 10 },
      ddldata: [
        { Id: 'Parent', type: 'Parent' },
        { Id: 'Child', type: 'Child' },
        { Id: 'Both', type: 'Both' },
        { Id: 'None', type: 'None' }],
      ddlfields: { text: 'type', value: 'Id' },
    };
  },
  methods: {
   clickHandler: function(args: ClickEventArgs) {
            if(((this as any).$refs.treegrid).getSelectedRecords().length>0){
                let withHeader: boolean = false;
                if (args.item.id === 'copyHeader') {
                    withHeader = true;
                }
                    ((this as any).$refs.treegrid).copy(withHeader);
                } else {
                  ((this as any).$refs.alertDialog).ej2Instances.show();
                }
            },
  alertDlgBtnClick: function() {
        (((this as any)).$refs.alertDialog as any).ej2Instances.hide();
  },
      onChange: function(e: ChangeEventArgs): void {
                let mode:any = e.value.toString();
                ((this as any).$refs.treegrid).ej2Instances.copyHierarchyMode = mode;
            }
  },
  provide: {
    treegrid: [ Page, Toolbar ]
  }
}
</script>