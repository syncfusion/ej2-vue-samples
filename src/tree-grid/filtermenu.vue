<template>
<div class="control-section">
      <div class="col-md-9 control-section">
           <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :height='350' :allowFiltering='true' :filterSettings='filterSettings' :treeColumnIndex='1' :allowPaging= 'true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width='100'></e-column>
                <e-column field='taskName' headerText='Task Name' width='190'></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right' format='yMd' type='date' width='125'></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right'  width='110'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
        <div class="col-md-3 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <br/><br/>
                <tr style="height: 50px">
                    <td>
                        <div>Filter Type</div>
                    </td>
                    <td style="width: 70%; padding-left:10%">
                        <ejs-dropdownlist id='element' width='110px' :dataSource='typedata' value='Menu' :fields='typefields' :change="onTypechange"></ejs-dropdownlist>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td>
                        <div>Hierarchy Mode</div>
                    </td>
                    <td style="width: 70%; padding-left:10%">
                        <ejs-dropdownlist id='ddlelement' width='110px' :dataSource='ddldata' value='Parent' :fields='ddlfields' :change="onChange"></ejs-dropdownlist>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div id="action-description">
    <p>
            This sample demonstrates the way of filtering Tree Grid columns using menu and excel filter UI. In this sample, click the filtering
            icon from column header to show filter UI for a particular column. You can change the filter type from the properties
            panel.
    </p>
</div>
    <div id="description">
    <p>The filtering feature enables the user to view the reduced amount of records based on filter criteria. It can be enabled
        by setting <code>allowFiltering
        </code> property as true. </p>
    <p>Tree Grid supports the following filter types. They are </p>
            <ul>
                <li><code>FilterBar</code></li>
                <li><code>Menu</code></li>
                <li><code>Excel</code></li>
            </ul>
            you can change the filter type by setting <code>filterSettings->type</code>

    <p>Tree Grid provides support for a set of filtering modes with <code>hierarchyMode</code> property. The below are the type of filter mode available in Tree Grid. </p>
    <ul>
        <li><code>Parent</code> - This is the default filter hierarchy mode in Tree Grid. 
        The filtered records are displayed with its parent records, if the filtered records not have any parent record then the filtered record only displayed.</li>
        <li><code>Child</code> - The filtered records are displayed with its child record, if the filtered records do not have any child record then only the filtered records are displayed.</li>
        <li><code>Both</code> - The filtered records are displayed with its both parent and child record.
        If the filtered records do not have any parent and child record then only the filtered records are displayed.</li>
        <li><code>None</code> - Only the filtered records are displayed.</li>
    </ul>
     <p>The Tree Grid now supports improved <code>in</code> and <code>not in</code> filter operators, allowing users to filter multiple values within the same column. When the menu filter is enabled, a Syncfusion DropDownList component with checkboxes appears to select the <code>in</code> or <code>not in</code> operators.</p>
     <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Tree Grid features are segregated into individual feature-wise modules. To use Filtering feature, we need to inject
            <code>
            Filter
            </code> module into the <code>provide</code> section.
        </p>
    <p>In this demo, you can type the value in the filterbar and press enter to filter particular column or select the value from filterbar template of Duration column.</p>
    <br/>
    <p>
        More information on the filter configuration can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/filtering/filter-menu">documentation section</a>.
    </p>
</div> 
</div>
</template>

<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, Filter } from "@syncfusion/ej2-vue-treegrid";
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
      ddlfields: { text: 'type', value: 'Id' },
      typefields: { text: 'type', value: 'Id' },
      filterSettings: { type: 'Menu', hierarchyMode: 'Parent' },
       ddldata: [
        { Id: 'Parent', type: 'Parent' },
        { Id: 'Child', type: 'Child' },
        { Id: 'Both', type: 'Both' },
        { Id: 'None', type: 'None' }],
       typedata: [
        { Id: 'Menu', type: 'Menu' },
        { Id: 'Excel', type: 'Excel' },]
    };
  },
  provide: {
      treegrid: [ Page, Filter ]
    },
   methods:{
       onChange: function(e: ChangeEventArgs): void {
        let value: string = <string>e.value;
        ((this as any).$refs.treegrid).ej2Instances.filterSettings.hierarchyMode = value;
        ((this as any).$refs.treegrid).clearFiltering();    
    },
    	onTypechange: function(e: ChangeEventArgs): void {
        let value: string = <string>e.value;
        ((this as any).$refs.treegrid).ej2Instances.filterSettings.type = value;
        ((this as any).$refs.treegrid).clearFiltering();    
    }
  }
}
</script>
