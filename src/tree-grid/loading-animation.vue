<template>
<div class="control-section">
<div class="col-md-9 control-section">
    <ejs-treegrid ref='treegrid' :dataSource='data' idMapping='TaskID' :height='400' parentIdMapping='parentItem' hasChildMapping='isParent' :treeColumnIndex='1' :allowPaging='true' :allowSorting='true' :pageSettings='pageSettings' :loadingIndicator='loadingIndicator'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width='120' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='240'></e-column>
            <e-column field='StartDate' headerText='Start Date' width='140' format="yMd" textAlign='Right'></e-column>
            <e-column field='Duration' headerText='Duration' width='130' textAlign='Right'></e-column>
            <e-column field='Progress' headerText='Progress' width='130'></e-column>
        </e-columns>
    </ejs-treegrid>
</div>

<div class="col-lg-3 property-section">
    <table id="property" title="Properties" style="width: 100%;">
        <colgroup>
             <col span="1" style="width: 40%;">
             <col span="1" style="width: 60%;">
          </colgroup>
          <tbody>
        <tr style="height: 50px">
            <td>
                <div >Indicator Type</div>
            </td>
            <td>
            <div id='dropdownindicator' style="padding-left:10%">
              <ejs-dropdownlist ref='dropdown' id='dropdown' :dataSource='indicatortypes' index=0 :fields='fields' :change="indicatorChange" width="130" ></ejs-dropdownlist>
             </div>                                 
            </td>
        </tr>
        </tbody>
    </table>
</div>  
    
<div id="action-description">
    <p>This sample shows the loading indicator while tree grid loading and refreshing especially when using remote data. In this sample, you can change the loading indicators from the properties panel.
    </p>
</div>

<div id="description">
     <p>
       The Tree Grid has an option to show a loading indicator in-between the time of fetching the data and binding it to the tree grid during initial rendering or refreshing or after performing any tree grid action like sorting, filtering, and more.
    </p>
    <p>The Tree Grid supports the following loading indicator types. They are: </p>
        <ul>
            <li><code>Spinner</code></li>
            <li><code>Shimmer</code></li>
        </ul>
    <p>Use the loading indicator by setting the <code><a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/#loadingindicator">
    loadingIndicator.indicatorType</a></code> property as <code>Spinner</code> or <code>Shimmer</code>. The default value of the indicatorType is <code>Spinner</code>. In this demo, the <code>Shimmer</code> type is initially enabled.
    </p>
</div>
</div>  
</template>

<!-- custom code start -->
<style scoped>
    #control-container {
        padding: 0px !important;
    }
</style>
<!-- custom code end -->

<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, Sort } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-vue-dropdowns';

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-dropdownlist': DropDownListComponent
  },  
  data: () => {
    return {
      data: new DataManager({
        url: "https://services.syncfusion.com/vue/production/api/SelfReferenceData",
        adaptor: new WebApiAdaptor()
      }),
      pageSettings: { pageCount: 3 },
      loadingIndicator: { indicatorType: 'Shimmer' },
      fields: { text: 'name', value: 'id' },
      indicatortypes: [
          { id: 'Shimmer', name: 'Shimmer' },
	      { id: 'Spinner', name: 'Spinner' }
	  ]
    };
  },
  methods: {
    indicatorChange: function(e: ChangeEventArgs): void {
        if (((this as any).$refs.dropdown).ej2Instances.value === "Shimmer") {
            ((this as any).$refs.treegrid).ej2Instances.loadingIndicator.indicatorType = 'Shimmer';
	    ((this as any).$refs.treegrid).ej2Instances.refresh();
        } else {
            ((this as any).$refs.treegrid).ej2Instances.loadingIndicator.indicatorType = 'Spinner';
	    ((this as any).$refs.treegrid).ej2Instances.refresh();
        }
    }
  },
  provide: {
      treegrid: [Page, Sort]
  }
}
</script>
