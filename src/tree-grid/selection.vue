<template>
<div class="control-section">
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :selectionSettings='selectionSettings' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='80' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='190'></e-column>
                <e-column field='startDate' headerText='Start Date' width='100' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <br/><br/>
                <tr style="height: 50px">
                    <td style="width: 70%">
                        <div>Selection Type</div>
                    </td>
                    <td style="width: 70%;padding-left: 10px; padding-right:10px;padding-top:5px">
                        <ejs-dropdownlist ref='type' width='90px' id='type' :dataSource='typedata' value='Multiple' :fields='ddlfields' :change="ontypeChange"></ejs-dropdownlist>                      
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 80%">
                        <div>Selection Mode</div>
                    </td>
                    <td style="width: 80%; padding-left: 10px; padding-right:10px;padding-top:5px">
                        <ejs-dropdownlist ref='mode' width='90px' id='mode' :dataSource='modedata' value='Row' :fields='ddlfields' :change="onmodeChange"></ejs-dropdownlist>
                    </td>
                </tr>
                <tr class='con-prop' style="height: 50px;display: none">
                    <td style="width: 80%">
                        <div> Cell Selection Mode</div>
                    </td>
                    <td style="width: 80%; padding-left: 10px; padding-right:10px;padding-top:5px">
                        <ejs-dropdownlist ref='cellmode' width='90px' id='cellmode' :dataSource='celldata' value='Flow' :fields='ddlfields' :change="oncellChange"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    </div>
   <div id="action-description">
        <p>This sample demonstrates the selection feature in TreeGrid, which allows you to select row or cell through simple mouse down or keyboard interaction.
       You can change selection type, selection mode and cell selection mode from the properties panel.</p>
   </div>

<div id="description">
    <p>
        Selection provides an interactive support to highlight the row or cell that you select. 
        Selection can be done through a simple
        Mouse down or Keyboard interaction. To enable selection, set <code>
        allowSelection
        </code> as true.
    </p>
    <p>TreeGrid supports two types of selection which can be set using 
        <code>
        selectionSettings->type
        </code> property. They are,</p>
    <ul>
        <li><code>Single</code> - Enabled by default. Allows the user to select single row/cell at a time.</li>
        <li><code>Multiple</code> - Allows the user to select more than one row/cell at a time.</li>
    </ul>
    <p>Also, supports three modes of selection which can be set using 
        <code>selectionSettings->mode
        </code> property. They are,
    </p>
    <ul>
        <li><code>Row</code> - Enabled by default. Enables the row selection in TreeGrid.</li>
        <li><code>Cell</code> - Enables the cell selection in TreeGrid.</li>
        <li><code>Both</code> - Enables both the row and cell selection in TreeGrid. 
        Clicking any cell will select the both row and cell simultaneously.
        </li>
    </ul>
    <p>The treegrid supports two types of cell selection mode that can be set by using the  
            <code>selectionSettings->cellSelectionMode
            </code> property. They are,</p>
        <ul>
            <li><code>Flow</code> - The Flow value is set by default. The range of cells are selected between the start index
                and end index that includes in between cells of rows.</li>
            <li><code>Box</code> - Range of cells are selected from the start and 
                end column indexes that includes in between cells of rows within the range.</li>
        </ul>
    <p>To perform the multi-selection, hold <strong>CTRL</strong> key and click the desired rows/cells. 
    To select range of rows/cells, hold <strong>SHIFT</strong> key and click the rows/cells.</p>
    <p>While using the TreeGrid in a touch device environment, there is an option for multi-selection 
        through single tap on the row and it will show a popup with the multi-selection symbol. 
        Tap the icon to enable multi-selection in a single tap.
    </p>
    <p>In this demo, enter the values in the Start and To text box to select range of rows.
        And click the Clear Selection button to deselect the rows.
    </p>
    <p>
        More information on the selection configuration can be found in this documentation section.
    </p>
</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListPlugin, ChangeEventArgs, DropDownListComponent} from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
      selectionSettings: { type: 'Multiple' },
      pageSettings: { pageCount: 5, pageSize: 10 },
      typedata: [
        { id: 'Single', name: 'Single' },
        { id: 'Multiple', name: 'Multiple' }
    ],
      modedata:  [
        { id: 'Row', name: 'Row' },
        { id: 'Cell', name: 'Cell' },
    ],
      celldata: [
        { id: 'Flow', name: 'Flow' },
        { id: 'Box', name: 'Box' }
    ],
    ddlfields: {text: 'name', value: 'id'}
    };
  },
  provide: {
      treegrid: [ Page ]
    },
   methods:{
        ontypeChange: function(e: ChangeEventArgs) {
            let value: string = <string>e.value;
            let modeval: any = <string>(<DropDownListComponent>this.$refs.mode).ej2Instances.value;
            (<TreeGridComponent>this.$refs.treegrid).ej2Instances.selectionSettings.type = value;
            if ( value === 'Multiple' && modeval === 'Cell' ) {
                (<HTMLElement>document.getElementsByClassName('con-prop')[0]).style.display = 'table-row';
            } else {
                (<HTMLElement>document.getElementsByClassName('con-prop')[0]).style.display = 'none';
            }
        },
        onmodeChange: function(e: ChangeEventArgs) {
            let value: string = <string>e.value;
            let typeval: string = <string>(<DropDownListComponent>this.$refs.type).ej2Instances.value;
            (<TreeGridComponent>this.$refs.treegrid).ej2Instances.selectionSettings.mode = value;
            if ( typeval === 'Multiple' && value === 'Cell' ) {
                (<HTMLElement>document.getElementsByClassName('con-prop')[0]).style.display = 'table-row';
            } else {
                (<HTMLElement>document.getElementsByClassName('con-prop')[0]).style.display = 'none';
            }
        },
         oncellChange: function(e: ChangeEventArgs) {
            let value: string = <string>e.value;
            (<TreeGridComponent>this.$refs.treegrid).ej2Instances.selectionSettings.cellSelectionMode = value;
        }
  }

});
</script>