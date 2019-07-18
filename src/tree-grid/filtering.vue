<template>
<div class="control-section">
      <div class="col-md-9 control-section">
           <ejs-treegrid ref='treegrid' id='treegrid' :dataSource='data' childMapping='subtasks' :allowFiltering='true' :filterSettings='filterSettings' :treeColumnIndex='1' :allowPaging= 'true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width='90'></e-column>
                <e-column field='taskName' headerText='Task Name' width='200'></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right' format='yMd' type='date' width='100'></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right' :filterBarTemplate='templateOptions' width='90'></e-column>
            </e-columns>
        </ejs-treegrid>
      </div>
      <div>
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
    </div>

    <div id="action-description">
    <p>
        This sample demonstrates the default and template support of filterbar in TreeGrid.
        In this sample, type the value in the filterbar and press enter to filter particular column or select the date value from filterbar template of Start Date column. The filtering is based on hierarchy mode.
    </p>
</div>
    <div id="description">
    <p>The filtering feature enables the user to view the reduced amount of records based on filter criteria. It can be enabled
        by setting <code>allowFiltering
        </code> property as true. A filter bar row will be rendered next to header which allows the end-users to filter
        data by entering text within its cells.</p>
    <p>Filterbar uses two modes which specifies how to start filtering. They are,</p>
    <ul>
        <li><code>OnEnter</code> - Enabled by default, filter will be initiated after pressing <code>Enter</code> key.</li>
        <li><code>Immediate</code> - Filter will start after user ends typing. This uses a time delay of <i>1500ms</i> to initiate
            filter after use stops typing. It can be overridden using the <code>
        filterSettings->immediateModeDelay
        </code> property.</li>
    </ul>
    <p>TreeGrid provides support for a set of filtering modes with <code>hierarchyMode</code> property. The below are the type of filter mode available in TreeGrid. </p>
    <ul>
        <li><code>Parent</code> - This is the default filter hierarchy mode in TreeGrid. 
        The filtered records are displayed with its parent records, if the filtered records not have any parent record then the filtered record only displayed.</li>
        <li><code>Child</code> - The filtered records are displayed with its child record, if the filtered records do not have any child record then only the filtered records are displayed.</li>
        <li><code>Both</code> - The filtered records are displayed with its both parent and child record.
        If the filtered records do not have any parent and child record then only the filtered records are displayed.</li>
        <li><code>None</code> - Only the filtered records are displayed.</li>
    </ul>
    <p style="font-weight: 500">Injecting Module:</p>
        <p>
            TreeGrid features are segregated into individual feature-wise modules. To use Filtering feature, we need to inject
            <code>
            Filter
            </code> module into the <code>provide</code> section.
        </p>
    <p>In this demo, you can type the value in the filterbar and press enter to filter particular column or select the value from filterbar template of Duration column.</p>
    <br/>
    <p>
        More information on the filter configuration can be found in this documentation section.
    </p>
</div> 
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page, Filter, TreeGridComponent } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListPlugin, ChangeEventArgs, DropDownList} from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./data-source";

Vue.use(TreeGridPlugin);
Vue.use(DropDownListPlugin);

let dropDownFilter: DropDownList;

export default Vue.extend({
  data: () => {
    return {
      data: sampleData,
      pageSettings: { pageCount: 4, pageSize: 10 },
      filterSettings: { type: 'FilterBar', hierarchyMode: 'Parent', mode: 'Immediate' },
      ddldata: [
        { Id: 'Parent', type: 'Parent' },
        { Id: 'Child', type: 'Child' },
        { Id: 'Both', type: 'Both' },
        { Id: 'None', type: 'None' }],
      ddlfields: { text: 'type', value: 'Id' },
      templateOptions: {
            create: function (args: any) {
                let dd = document.createElement('input');
                dd.id = 'duration';
                return dd;
            },
            write: function (args: any) {
                let treeGridObj:any = (document.getElementById('treegrid') as any).ej2_instances[0];
                let dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
                dropDownFilter = new DropDownList({
                    dataSource: dataSource,
                    value: 'All',
                    change: function(e: any){
                        let valuenum: any = +e.value;
                        let id: any = <string>dropDownFilter.element.id;
                        let value: any = <string>e.value;
                        if ( value !== 'All') {
                            treeGridObj.filterByColumn( id, 'equal', valuenum );
                        } else {
                            treeGridObj.removeFilteredColsByField(id);
                            }
                    }
                });
                dropDownFilter.appendTo('#duration');
            }
        }
    };
  },
  provide: {
      treegrid: [ Page, Filter ]
    },
   methods:{
       onChange: function(e: ChangeEventArgs): void {
        // this.filterSettings = { type: 'FilterBar', hierarchyMode: <any>e.value, mode: 'Immediate'};
        (<TreeGridComponent>this.$refs.treegrid).clearFiltering();
        dropDownFilter.value = 'All';
    }
  }

});
</script>