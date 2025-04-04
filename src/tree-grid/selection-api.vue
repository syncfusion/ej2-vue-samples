<template>
    <div class="control-section" role="region" aria-label="Tree Grid Control Section"   >
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :height='350' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :selectionSettings='selectionSettings' >
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='80' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='190'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='90' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
             <table id="property" title="Properties" style="width: 100%">
        <tr >
            <td>
                <div><b>Select Rows</b></div>
            </td>
        </tr>
        <tr>
            <td>
                <div style="padding-top: 8px">Start</div>

            </td>
            <td style="width: 70%;padding-right: 5px;padding-bottom:10px">
                <div id='numericbox' aria-label="Start Input">
                    <ejs-numerictextbox ref='start' width='110px' :min=0 format='##'></ejs-numerictextbox>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div style="padding-top: 8px">To</div>
            </td>
            <td style="width: 70%;padding-right: 5px">
                <div id='numericbox' aria-label="Start Input">
                    <ejs-numerictextbox ref='to' width='110px' :min=0 format='##'></ejs-numerictextbox>
                </div>
            </td>
        </tr>
        <tr style='padding-top: 10px'>
            <td colspan="2">
                <ejs-button ref='select' v-on:click="select" aria-label="Select Rows Button">Select Rows</ejs-button>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <div class="col-md-12"><b>Clear Selection</b></div>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <div class="col-md-6" style="padding-bottom: 10px">
                    <ejs-button ref='clear' v-on:click="clear" aria-label="Clear Selection Button">Clear Selection</ejs-button>
                </div>
            </td>
        </tr>
    </table>
        </div>
    </div>

<div id="action-description">
    <p>This sample demonstrates the selection functionality of the Tree Grid, you can select multiple row by entering start and end index then click the select row button.
        To clear all selected rows, click clear selection button. </p>
</div>

<div id="description">
    <p>
        Selection provides an interactive support to highlight the row or cell that you select. 
        Selection can be done through a simple Mouse down or Keyboard interaction. 
        To enable selection, set <code>
        allowSelection
        </code> as true.
    </p>
    <p>Tree Grid supports two types of selection which can be set using 
        <code>selectionSettings->type
        </code> property. They are,</p>
    <ul>
        <li><code>single</code> - Enabled by default. Allows the user to select single row/cell at a time.</li>
        <li><code>multiple</code> - Allows the user to select more than one row/cell at a time.</li>
    </ul>
    <p>Also, supports three modes of selection which can be set using 
        <code>selectionSettings->mode
        </code> property. They are,
    </p>
    <ul>
        <li><code>Row</code> - Enabled by default. Enables row selection in Tree Grid.</li>
        <li><code>Cell</code> - Enables cell selection in Tree Grid.</li>
        <li><code>Both</code> - Enables both row and cell selection in Tree Grid. 
        Clicking any cell will select both the row and cell simultaneously.
        </li>
    </ul>
    <p>The Tree Grid supports two types of cell selection mode that can be set by using the  
            <code>
            selectionSettings->cellSelectionMode
            </code> property. They are,</p>
        <ul>
            <li><code>Flow</code> - The Flow value is set by default. The range of cells are selected between the start index
                and end index that includes in between cells of rows.</li>
            <li><code>Box</code> - Range of cells are selected from the start and 
                end column indexes that includes in between cells of rows within the range.</li>
        </ul>
    <p>To perform the multi-selection, hold <strong>CTRL</strong> key and click the desired rows/cells. 
    To select range of rows/cells, hold <strong>SHIFT</strong> key and click the rows/cells.</p>
    <p>While using the Tree Grid in a touch device environment, there is an option for multi-selection 
        through single tap on the row and it will show a popup with the multi-selection symbol. 
        Tap the icon to enable multi-selection in a single tap.
    </p>
    <p>In this demo, enter the values in the Start and To text box to select range of rows.
        And click the Clear Selection button to deselect the rows.
    </p>
    <p>
        More information on the selection configuration can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/selection/selection">documentation section</a>.
    </p>
</div>

  </div>
</template>

<script lang="ts">
import { removeClass, addClass } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Column } from "@syncfusion/ej2-vue-treegrid";
import { ChangeEventArgs, DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { ClickEventArgs, ButtonComponent} from '@syncfusion/ej2-vue-buttons';
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { sampleData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-numerictextbox': NumericTextBoxComponent
  },
  data: () => {
    return {
      data: sampleData,
      flag: false,
      selectionSettings: {type:'Multiple'},
      pageSettings: {pageSize: 10}
    };
  },
  provide: {
      treegrid: [ Page ]
    },
    methods: {
        select: function(e: ClickEventArgs) {
             let startRow: number = ((this as any).$refs.start).ej2Instances.value;
             let toRow: number = ((this as any).$refs.to).ej2Instances.value;
             let rows: number[] = [];
             for ( let i: number = startRow ; i <= toRow ; i++ ) {
                 rows.push(i);
             }
             ((this as any).$refs.treegrid).selectRows(rows);           
        },
        clear: function(e: ClickEventArgs){
            ((this as any).$refs.treegrid).clearSelection();
        }
    }

};
</script>