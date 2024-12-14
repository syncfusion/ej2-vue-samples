<template>
  <div class="col-lg-12 control-section">
      <div id="action-description">
            <p>This sample demonstrates the usage of template columns in a Grid. In this sample, custom images are shown in the Employee
            Image column.
      </p>
      </div>
      <div>
          <ejs-grid ref="grid" id="column-template-grid" :dataSource="data" height=400 :allowSorting='true' :allowFiltering='true' :filterSettings='filterSettings' >
              <e-columns>
                <e-column headerText='Image' width='180' textAlign='Center' :template="'cTemplate'" ></e-column>
                <e-column field='EmployeeID' headerText='ID' width='160'></e-column>
                <e-column field='Name' headerText='Name' width='120'></e-column>
                <e-column field='MailID' headerText='Email ID' width='150' :template="'mailIDTemplate'"></e-column>
                <e-column field='DateOfJoining' headerText='Date Joined' width='170' format='yMd' textAlign='Right' type="date"></e-column>
                <e-column field='Designation' headerText='Designation' width='150'></e-column>
                <e-column field='Team' headerText='Team(s)' width='150'></e-column>
                <e-column field='ReportTo' headerText='Reporter' width='150'></e-column>
                <e-column field='EmployeeAvailability' headerText='Availability' width='200' :template="'statusTemplate'"></e-column>
                <e-column field='YearOfExperience' headerText='Experience' width='200'></e-column>
                <e-column field='AssetKit' headerText='Asset Kit' width='180' :filter= 'filter' :template="'assetTemplate'"></e-column>
                <e-column field='AssetKitDistribution' headerText='Assigned Date' width='170' format='yMd' textAlign='Right' type="date"></e-column>
                <e-column field='Location' headerText='Location' width='150' :template="'locationTemplate'"></e-column>
                <e-column field='PhoneNumber' headerText='Contact No' width='150' textAlign='Right'></e-column>
              </e-columns>
              <template v-slot:cTemplate="{data}">
                <div class="image">
                  <img :src="'src/grid/images/' + data.EmployeeID.replace('Emp100', '') + '.png'" :alt="data.EmployeeID"/>
                </div>
              </template>
              <template v-slot:mailIDTemplate="{data}">
                <a :href="'mailto:' + data.MailID">{{ data.MailID }}</a>
              </template>
              <template v-slot:locationTemplate="{data}">
                <div>
                  <span class="e-location e-icons"></span>{{data.Location}}
                </div>
              </template>
              <template v-slot:statusTemplate="{data}">
                <div>
                  <div v-if="data.EmployeeAvailability === 'Available'" id="status" class="statuscolor e-availablecolor">
                    <span class="statustxt e-availablecolor">{{ data.EmployeeAvailability }}</span>
                  </div>
                  <div v-else id="status" class="statuscolor e-notavailablecolor">
                    <span class="statustxt e-notavailablecolor">{{ data.EmployeeAvailability }}</span>
                  </div>
                </div>
              </template>
              <template v-slot:assetTemplate="{data}">
                <div><ejs-chiplist id="chip" :chips='splitAssetKit(data.AssetKit)'></ejs-chiplist></div>
              </template>
            </ejs-grid>
      </div>
  
        <div id="description">
        <p>
          The Grid creates a custom layout for each cell using the column template feature. The 
          <code><a target="_blank" class="code"
          href="https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template">columns->template
          </a></code> property accepts either string or HTML element`s ID value, which will be used 
          as the template for the cell.  
      </p>
      <p>
          The column template feature allows the customization of grid cells. In this demo, the Grid showcases the <strong>Employee Image</strong>
          column with employee photos, <strong>Mail ID</strong> column with link tags, <strong>Location</strong> column with location icons, <strong>Asset Kit</strong> column with Syncfusion<sup>®</sup> Chip components and <strong>Employee Availability</strong> column with HTML span elements, using green to indicate available and red to indicate for not available.
      </p>
      <p>
          More information on the column template can be found in this
          <a target="_blank" 
          href="https://ej2.syncfusion.com/vue/documentation/grid/columns/column-template">
          documentation section</a>.
      </p>
      </div>
  
  </div>
  </template>
  
  <style scoped>
  .image img {
      height: 55px;
      width: 55px;
      border-radius: 50px;
      box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
  }
  td.e-rowcell .statustxt.e-availablecolor {
    color: white;
    position: relative;
          top: 4px;
  }
  
  td.e-rowcell .statustxt.e-notavailablecolor {
    color: white;
    position: relative;
          top: 4px;
  }
  .statuscolor.e-notavailablecolor {
    background-color: indianred;
    width: 100px;
    height: 30px;
  }
  .statuscolor.e-availablecolor {
    background-color: #58d378;
    width: 100px;
    height: 30px;
  }
  .statustxt.e-availablecolor {
    color: white;
    position: relative;
  }
  .statustxt.e-notavailablecolor {
    color: white;
    position: relative;
  }
  .statuscolor {
    position: relative;
    height: 19px;
    text-align: center
  }
  .e-icon-location::before {
    content: "\e30c";
  }
  .e-location {
    margin-right: 5px;
  }
  .highcontrast .e-grid td.e-rowcell.e-selectionbackground.e-active .e-icons,
  .fluent2-highcontrast .e-grid .e-row:hover:not(.e-editedrow) .e-icons,
  .fluent2-highcontrast .e-grid td.e-rowcell.e-selectionbackground.e-active .e-icons {
    color: black;
  }
  </style>
  
  <script lang="ts">
  import { GridComponent, ColumnDirective, ColumnsDirective, Sort, Filter, Column } from "@syncfusion/ej2-vue-grids";
  import { ChipListComponent } from '@syncfusion/ej2-vue-buttons';
  import { employeeDetail } from "./data-source";
  import {createElement} from "@syncfusion/ej2-base";
  import { MultiSelect, CheckBoxSelection } from "@syncfusion/ej2-dropdowns";
  MultiSelect.Inject(CheckBoxSelection);
  
  export default {
    components: {
      'ejs-grid': GridComponent,
      'ejs-chiplist': ChipListComponent,
      'e-column': ColumnDirective,
      'e-columns': ColumnsDirective
    },
    data: () => {
      let dropInstance : any = null;
      return {
        data: employeeDetail,
        filterSettings: { type: 'CheckBox', operators: {
          stringOperator: [
            { value: 'contains', text: 'Contains' },
            { value: 'doesnotcontain', text: 'Does Not Contains' },
          ],
        }, },
        operator : {
          stringOperator: [
              { value: 'contains', text: 'Contains' },
              { value: 'doesnotcontain', text: 'Does Not Contain' }],
      },
      filter : {
        type: 'Menu',
        ui: {
          create: (args: { target: Element; column: object }) => {
            const flValInput: HTMLElement = createElement('input', {
              className: 'flm-input',
            });
            args.target.appendChild(flValInput);  
            let dropdownData: string[] = [
              'Phone',
              'Mouse',
              'Laptop',
              'Keyboard',
              'Headset',
              'Tablet',
              'Projector',
              'Printer',
              'Calculator',
            ];
            dropInstance = new MultiSelect({
              dataSource: dropdownData,
              placeholder: 'Select a value',
              popupHeight: '200px',
              allowFiltering: true,
              mode: 'Box',
            });
            dropInstance.appendTo(flValInput);
          },
          write: (args: any) => {
            const fieldName: string = args.column.field;
            const filteredValue: string[] = [];
            if (args.filteredValue && args.filteredValue.length > 0 ) {
              (dropInstance as MultiSelect).value = args.filteredValue.split(', ');
            }
          },
          read: (args: {
            column: Column;
            operator: string;
            fltrObj: Filter;
          }) => {
            var grid = (document.getElementById("column-template-grid") as any).ej2_instances[0];
            grid.removeFilteredColsByField(
              args.column.field
            );
            if(dropInstance?.value && dropInstance?.value.length){
            args.fltrObj.filterByColumn(
              args.column.field,
              args.operator,
              dropInstance?.value.sort().join(', ')
            );
            }
          },
        },
      }
      };
    },
    methods: {
      splitAssetKit(assetKit:any) {
          return assetKit.split(',');
      }
    },
    provide: {
        grid: [Sort, Filter]
    }
  }
  </script>
