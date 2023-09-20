<template>
    <div class="control-section">
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' :dataSource='data' :allowPaging='true' childMapping='subtasks' :height='350' :treeColumnIndex='1' :pageSettings='pageSettings'>
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
        <tr>
            <td style="width: 30%">
                <div>Column</div>
            </td>
            <td style="width: 70%;padding-right: 10px">
                <div id='columnddl'>
                    <ejs-dropdownlist width='100px' ref='columns' id='columns' :dataSource='columnNames' value='taskID' :fields='colfields' :change="onColChange"></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div>
                   <ejs-button ref='hide' v-on:click="hide">Hide</ejs-button>
                </div>
            </td>
            <td style="width: 70%">
                <div>
                    <ejs-button ref='show' disabled='true' v-on:click="show">Show</ejs-button>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 30%">
                <div style="padding-top: 10px">
                    Hidden Columns
                </div>
            </td>
            <td style="width: 70%; padding:10px 10px 10px 0px">
                <div>
                    <textarea id="hiddencolumns" style="resize: none;height:65px;background-color: #fff; padding: 6px" 
                    class="form-control"></textarea>
                </div>
            </td>
        </tr>
    </table>
        </div>
    </div>

<div id="action-description">
    <p>This sample demonstrates dynamic show/hide columns feature of Tree Grid.
       Select column name from the properties panel and click hide/show to toggle visibility.
    </p>
</div>

<div id="description">
    <p>The Tre Grid column can be showed/hidden dynamically using <code>showColumns
        </code> and <code>hideColumns</code> method of the Grid.</p>
    <p>In this demo, the columns can be showed and hidden by selecting the column name in the dropdown
        and click the Show or Hide buttons to toggle visibility. And the column`s visibility is toggled based on the 
        <code>columns->headerText</code> value.</p>
    <br/>
    <p>The <code>columns->visible</code> property specifies the visibility of a column. 
    To hide a column at the initial rendering, set the <code>columns->visible</code> property to false.</p>
</div>

  </div>
</template>
<!-- custom code start -->
  <style scoped>
    #columnddl {
        min-width: 120px;
    }
    #hide:disabled:hover,
    #show:disabled:hover {
        color: #000000;
    }    
</style>
<!-- custom code end -->
<script lang="ts">
import { removeClass, addClass } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Column } from "@syncfusion/ej2-vue-treegrid";
import { ChangeEventArgs, DropDownListComponent} from "@syncfusion/ej2-vue-dropdowns";
import { ClickEventArgs, ButtonComponent} from '@syncfusion/ej2-vue-buttons';
import { sampleData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-button': ButtonComponent,
    'ejs-dropdownlist': DropDownListComponent,
  },
  data: () => {
    return {
      data: sampleData,
      pageSettings: { pageCount: 4, pageSize: 10 },
      flag: false,
       columnNames: [
        { Id: 'taskID', type: 'Task ID' },
        { Id: 'startDate', type: 'Start Date' },
        { Id: 'duration', type: 'Duration' },
        { Id: 'progress', type: 'Progress' }
       ],
      colfields: { text: 'type', value: 'Id' },
    };
  },
  provide: {
      treegrid: [ Page ]
    },
    methods: {
        onColChange: function(e: ChangeEventArgs): void {
          let columnName = <string>e.value;
          let column: Column = ((this as TreeGridComponent).$refs.treegrid).getColumnByField(columnName) as Column;
          if (column.visible === undefined || column.visible) {
                ((this as ButtonComponent).$refs.show).ej2Instances.disabled = true;
                ((this as ButtonComponent).$refs.hide).ej2Instances.disabled = false;
            } else {
                ((this as ButtonComponent).$refs.hide).ej2Instances.disabled = true;
                ((this as ButtonComponent).$refs.show).ej2Instances.disabled = false;
            }
        },
        hide: function(e: ClickEventArgs) {
             let columnName = ((this as DropDownListComponent).$refs.columns).ej2Instances.value;
             let column: Column = ((this as TreeGridComponent).$refs.treegrid).getColumnByField(columnName) as Column;
             ((this as ButtonComponent).$refs.hide).ej2Instances.disabled = true;
             ((this as ButtonComponent).$refs.show).ej2Instances.disabled = false;
             let hiddencols: HTMLTextAreaElement = document.getElementById('hiddencolumns') as HTMLTextAreaElement;
             let value: string = <string>column.headerText + '\n';
             hiddencols.value = hiddencols.value + value;
             console.log(hiddencols.value);
             ((this as TreeGridComponent).$refs.treegrid).ej2Instances.grid.hideColumns(column.headerText, 'headerText');
        },
        show: function(e: ClickEventArgs){
            let columnName = ((this as DropDownListComponent).$refs.columns).ej2Instances.value;
            let column: Column = ((this as TreeGridComponent).$refs.treegrid).getColumnByField(columnName) as Column;
            ((this as ButtonComponent).$refs.show).ej2Instances.disabled = true;
            ((this as ButtonComponent).$refs.hide).ej2Instances.disabled = false;
            let hiddencols: HTMLTextAreaElement = document.getElementById('hiddencolumns') as HTMLTextAreaElement;
            let value = hiddencols.value.replace(column.headerText + '\n','');
            hiddencols.value = value;
            ((this as TreeGridComponent).$refs.treegrid).ej2Instances.grid.showColumns(column.headerText, 'headerText');
        }
    }

};
</script>