<template>
<div class="control-section">
      <div class="col-md-9 control-section">
           <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :height='350' :searchSettings='searchSettings' :toolbar='toolbar' :treeColumnIndex='1' :allowPaging= 'true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width='80'></e-column>
                <e-column field='taskName' headerText='Task Name' width='190'></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right' format='yMd' type='date' width='100'></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right'  width='90'></e-column>
                <e-column field='progress' headerText='Progress' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <br/><br/>
                <tr style="height: 50px">
                    <td>
                        <div>Hierarchy Mode</div>
                    </td>
                    <td style="width: 70%;; padding-left:10%">
                        <ejs-dropdownlist id='ddlelement' width='110px' popUpWidth='110px' :dataSource='ddldata' value='Parent' :fields='ddlfields' :change="onChange"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    </div>

   <div id="action-description">
    <p>
        This sample demonstrates the Tree Grid searching feature. In this sample, use the search box from toolbar to search Tree Grid records and the hierarchy mode of searching can be changed using property panel.
    </p>
</div>

<div id="description">
    <p>The Tree Grid has an option to search its content using the search method with search key as the parameter.</p>

    <p>The Tree Grid supports different types of search mode through the <code>searchSettings.hierarchyMode property</code>.</p>

    <p>The following are the types of search modes available in the Tree Grid.</p>

    <ul>
        <li><code>Parent</code> - This is the default search hierarchy mode in the Tree Grid. It displays a searched record with its parent records. 
            If the searched records do not have any parent record, it displays only the searched record.</li>

        <li><code>Child</code> - Displays the searched record with its child record. 
            If the searched records do not have any child record, it displays only the searched record.</li>

        <li><code>Both</code> - Displays the searched record with both its parent and child records. 
            If the searched records do not have any parent and child records, it displays only the searched record.</li>
            
        <li><code>None</code> - Displays only the searched record.</li>
    </ul>

    <p>In this demo, The Tree Grid toolbar provides an option to search the Tree Grid's records. The user can type the text box in the toolbar and click search button or press Enter key to perform search operation. 
        And also we have an option to change the searching hierarchy mode through property panel.</p>
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        Tree Grid features are segregated into individual feature-wise modules. To use searching feature, we need to inject Filter
        into the <code>provide</code> section.
    </p>
    <p>
        More information on the searching configuration can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/searching">documentation section</a>.
    </p>
</div>
</div>
</template>

<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, Filter, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListComponent, ChangeEventArgs} from "@syncfusion/ej2-vue-dropdowns";
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
      pageSettings: { pageCount: 4, pageSize: 10 },
      toolbar: ['Search'],
      ddlfields: { text: 'type', value: 'Id' },
      searchSettings: { hierarchyMode: 'Parent' },
       ddldata: [
        { Id: 'Parent', type: 'Parent' },
        { Id: 'Child', type: 'Child' },
        { Id: 'Both', type: 'Both' },
        { Id: 'None', type: 'None' }]
    };
  },
  provide: {
      treegrid: [ Page, Filter, Toolbar ]
    },
   methods:{
       onChange: function(e: ChangeEventArgs): void {
        (this as any).searchSettings = { hierarchyMode: <any>e.value };
        ((this as any).$refs.treegrid).search('');
    }
  }
}
</script>
