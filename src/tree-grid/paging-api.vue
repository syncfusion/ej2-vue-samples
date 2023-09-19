<template>
    <div class="control-section">
      <div class="col-md-9 control-section">
          <ejs-treegrid ref='treegrid' :dataSource='data' :allowPaging='true' childMapping='subtasks' :height='350' :treeColumnIndex='1' >
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
            <td style="width: 50%">
                <div>Allow Paging</div>
            </td>
            <td style="width: 50%;padding-right: 10px">
                <div>
                    <ejs-checkbox ref='checkbox' :checked="true" :change="oncheck"></ejs-checkbox>
                </div>
            </td>
        </tr>
        <tr class='con-prop1'>
            <td style="width: 70%">
                <div style="padding-top: 7px;">
                    Page Size Mode
                </div>
            </td>
            <td style="width: 30%;  padding:10px 10px 10px 0px">
                <div id='dropdown'>
                    <ejs-dropdownlist ref='ddl' width='100px' id='ddl' :dataSource='ddldata' value='All' :fields='ddlfields' :change="onChange"></ejs-dropdownlist>
                </div>
            </td>
        </tr>
        <tr class='con-prop2'>
            <td style="width: 70%">
                <div style="padding-top: 7px;">
                    Page Size
                </div>
            </td>
            <td style="width: 30%;  padding:10px 10px 10px 0px">
                <div id='numericbox'>
                    <ejs-numerictextbox ref='pagesize' :min=1 :max=200 :value=10 format='##' :change='sizechange'></ejs-numerictextbox>
                </div>
            </td>
        </tr>
        <tr class='con-prop2'>
            <td style="width: 70%">
                <div style="padding-top: 7px">
                    Page Count
                </div>
            </td>
            <td style="width: 30%; padding:10px 10px 10px 0px">
                <div>
                    <ejs-numerictextbox ref='pagecount' :min=1 :max=4 :value=4 format='##' :change='countchange'></ejs-numerictextbox>
                </div>
            </td>
        </tr>
        <tr class='con-prop2'>
            <td style="width: 70%">
                <div style="padding-top: 7px">
                    Current Page
                </div>
            </td>
            <td style="width: 30%; padding:10px 10px 10px 0px">
                <div>
                    <ejs-numerictextbox ref='currentpage' :min=1 :max=17 :value=1 format='##' :change='pagechange'></ejs-numerictextbox>
                </div>
            </td>
        </tr>
    </table>
    </div>
</div>

<div id="action-description">
    <p>This sample demonstrates the usage of paging API in Tree Grid. In this sample, use the properties panel to change the page size mode, page size, page count and current page of the Tree Grid.</p>
</div>

<div id="description">

    <p>Paging allows you to display the contents of the Tree Grid in page segments. The number of items on a page is determined by
        the <code>pageSettings->pageSize</code> property. If no value is specified for the <code>pageSettings->pageSize</code> property, the Tree Grid will display 12 items on a page. By default, paging is disabled. To enable paging,
        set <code>allowPaging</code> property to true.</p>
    <p>In this demo,</p>
    <ul>
        <li>Click the <strong>Allow Paging</strong> check box to enable/disable paging feature.</li>
        <li>Change the value of <strong>Page Size Mode</strong> Dropdown to change <code>pageSettings->pageSizeMode.</code></li>
        <li>Change the value of <strong>Page Size</strong> textbox to change <code>pageSettings->pageSize.</code></li>
        <li>Change the value of <strong>Page Count</strong> textbox to change <code>pageSettings->pageCount.</code></li>
        <li>Change the value of <strong>Current Page</strong> textbox to change
        <code> pageSettings->currentPage.</code></li>
    </ul>
    
    <p style="font-weight: 500">Injecting Module:</p>
    <p>
        Tree Grid features are segregated into individual feature-wise modules. To use paging feature, we need to inject <code>Page</code> module into the <code>provide</code> section.
    </p>
    <p>
        More information on the paging configuration can be found in the  documentation section.
    </p>
</div> 
    
  
  </div>
  
  </template>

  <script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, Filter, Column } from "@syncfusion/ej2-vue-treegrid";
import { DropDownListComponent, ChangeEventArgs } from "@syncfusion/ej2-vue-dropdowns";
import { sampleData } from "./data-source";
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { CheckBoxComponent, ChangeEventArgs as checkboxchangeargs } from '@syncfusion/ej2-vue-buttons';

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-numerictextbox': NumericTextBoxComponent,
    'ejs-checkbox': CheckBoxComponent
  },  
  data: () => {
    return {
      data: sampleData,
      pageSettings: { pageCount: 4, pageSize:10 },
      ddldata: [
        { Id: 'All', name: 'All' },
        { Id: 'Root', name: 'Root' }
       ],
      ddlfields: { text: 'name', value: 'Id' }
    };
  },
  provide: {
      treegrid: [ Page ]
    },
   methods:{
       oncheck: function(e: checkboxchangeargs) {
           ((this as any).$refs.treegrid).ej2Instances.allowPaging = e.checked;
           (this as any).toggleInputs(e.checked as boolean, true);
       },
       onChange: function(e: ChangeEventArgs): void {
         let type: string = <string>e.value;
         let pagesize = ((this as any).$refs.pagesize).ej2Instances.value;
            if (type === 'Root') {
                ((this as any).$refs.treegrid).ej2Instances.pageSettings = { pageSizeMode: 'Root', pageSize: 2 };
            } else {
                ((this as any).$refs.treegrid).ej2Instances.pageSettings = { pageSizeMode: 'All', pageSize: pagesize };
            }
            (this as any).toggleInputs(type === 'All',false);
       },
        sizechange: function(e: ChangeEventArgs) {
            let pagesize = ((this as any).$refs.pagesize).ej2Instances.value;
            ((this as any).$refs.pagesize).ej2Instances.value = pagesize > ((this as any).$refs.treegrid).ej2Instances.pageSettings.totalRecordsCount ?
                 ((this as any).$refs.treegrid).ej2Instances.pageSettings.totalRecordsCount : pagesize;
            ((this as any).$refs.treegrid).ej2Instances.pageSettings.pageSize = pagesize;
            ((this as any).$refs.currentpage).ej2Instances.max = Math.ceil(((this as any).$refs.treegrid).ej2Instances.pageSettings.totalRecordsCount / ((this as any).$refs.treegrid).ej2Instances.pageSettings.pageSize);
        },
        countchange: function(e: ChangeEventArgs) {
            let pagecount = ((this as any).$refs.pagecount).ej2Instances.value;
            ((this as any).$refs.pagecount).ej2Instances.value = pagecount > 8 ? 8 : pagecount;
            ((this as any).$refs.treegrid).ej2Instances.pageSettings.pageCount = ((this as any).$refs.pagecount).ej2Instances.value;

        },
        pagechange: function(e: ChangeEventArgs) {
            let currentpage = ((this as any).$refs.currentpage).ej2Instances.value;
            let max = ((this as any).$refs.currentpage).ej2Instances.max;
            ((this as any).$refs.currentpage).ej2Instances.value = currentpage > max ? max : currentpage;
            let pageNumber: number = ((this as any).$refs.currentpage).ej2Instances.value;
            ((this as any).$refs.treegrid).goToPage(pageNumber);
        },
        toggleInputs: function(state: boolean, isPager?: boolean): void {
        if (isPager) {
            (<HTMLElement>document.getElementsByClassName('con-prop1')[0]).style.display = state ? 'table-row' : 'none';
        }
        let flag: Boolean = ((this as any).$refs.ddl).ej2Instances.value === 'All';
        let elem: HTMLCollectionOf<Element> = document.getElementsByClassName('con-prop2');
        for (let i: number = 0; i < elem.length; i++) {
            (<HTMLElement>elem[i]).style.display = state && flag ? 'table-row' : 'none';
        }
  }
}

}
</script>