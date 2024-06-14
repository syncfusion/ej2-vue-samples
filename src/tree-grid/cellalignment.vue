<template>
    <div class="control-section">
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' :dataSource='data' :allowPaging='true' childMapping='subtasks' :height='350' :treeColumnIndex='1' :pageSettings='pageSettings' >
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
                    <td style="width: 30%">
                        <div>Column</div>
                    </td>
                    <td style="width: 70%;padding-top:5px;padding-left: 10px;">
                        <ejs-dropdownlist ref='columns' width='100px' id='columns' :dataSource='columnsdata' value='taskID' :fields='colfields' :change="onColChange"></ejs-dropdownlist>                      
                    </td>
                </tr>
                <tr id='' style="height: 50px">
                    <td style="width: 30%">
                        <div> Alignment</div>
                    </td>
                    <td style="width: 80%; padding-left: 10px; padding-right:10px;padding-top:5px">
                        <ejs-dropdownlist ref='alignment' width='100px' id='alignment' :dataSource='alignmentdata' value='Right' :fields='alignmentfields' :change="onChange"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div id="action-description">
    <p>This sample demonstrates the text alignment functionalities of the Tree Grid columns.</p>
</div>

<div id="description">
    <p>
            Align both content and header text of particular column using the <code>textAlign
            </code> property of columns. There are four possible ways to align content and header text of column, they are.
        <br>
    </p>
    <ul>
            <li><code>Right</code></li>
            <li><code>Left</code></li>
            <li><code>Center</code></li>
            <li><code>Justify</code></li>
    </ul>
    
    <br/>

    <p>
            In this sample, we have initially set the <code>textAlign</code> property as “Right” for Duration, Start Date and End Date columns
            and also we have an option to align the values of content and header text dynamically by select the column and text align value from property panel.        
    </p>
    <p>
            More information about Cell Alignment can be found in this documentation section.
        </p>
</div>
    
  
  </div>
  
  </template>

  <script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, Column } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListComponent, ChangeEventArgs } from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: () => {
    return {
      data: sampleData,
      pageSettings: { pageSize: 10 },
      columnsdata: [
        { Id: 'taskID', type: 'Task ID' },
        { Id: 'startDate', type: 'Start Date' },
        { Id: 'duration', type: 'Duration' },
        { Id: 'progress', type: 'Progress' }
      ],
      colfields: { text: 'type', value: 'Id' },
      alignmentdata: [
        { Id: 'Right', type: 'Right' },
        { Id: 'Left', type: 'Left' },
        { Id: 'Center', type: 'Center' },
        { Id: 'Justify', type: 'Justify' }],
      alignmentfields: { text: 'type', value: 'Id' }
    };
  },
  provide: {
      treegrid: [ Page ]
    },
   methods:{
       onColChange: function(e: ChangeEventArgs): void {
        let column: Column = ((this as any).$refs.treegrid).getColumnByField(<string>e.value) as Column;
        let alignment: string = column.textAlign;
        var dropdownlistObject = ((this as any).$refs.alignment).ej2Instances;
        dropdownlistObject.value = alignment;
       },
       onChange: function(e: ChangeEventArgs): void {
        let columnName = ((this as any).$refs.columns).ej2Instances.value;
        let alignment = ((this as any).$refs.alignment).ej2Instances.value;
        (((this as any).$refs.treegrid).getColumnByField(columnName) as Column).textAlign = alignment;
        ((this as any).$refs.treegrid).refreshColumns();
    }
  }

}
</script>
<!-- custom code start -->
<style>
    .fluent2,
    .fluent2-dark,
    .fluent2-highcontrast {
        .property-section #columns {
            width: 75px;
        }
    }
</style>
<!-- custom code end -->