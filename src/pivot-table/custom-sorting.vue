<template>
<div>
<div class="col-lg-8 control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings"
        :gridSettings="gridSettings"
        :showGroupingBar="showGroupingBar"
        :groupingBarSettings="groupingBarSettings"
        :dataBound="dataBound"
        :actionComplete="actionComplete"
        :maintainCheckedState="maintainCheckedState"
        :updateSelectedMembers="updateSelectedMembers"
        :updateOrder="updateOrder"
        :width="width" 
        :height="height">        
        </ejs-pivotview>
    </div>
</div>

<div class="col-lg-4 property-section pivot-property-section">
    <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
            <tr style="height: 50px">
                <td colspan="2">
                    <div class="row">
                        <ejs-checkbox id='sorting' ref="sorting" type="checkbox" label="Enable Sorting" labelPosition="After" checked="true" :change="checkbox_onChange"></ejs-checkbox>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="hdrlabel">Field:
                    </div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist id='sorting-fields' ref='sorting_fields' type="text" tabindex="0" :change="fieldOnChange" enabled="true" :fields="fields" :dataSource='fieldData' index=0></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="hdrlabel">Headers:
                    </div>
                </td>
                <td>
                    <div>
                        <ejs-multiselect id='sorting-members' ref='sorting_members' placeholder="Select headers" type="text" tabindex="0" :select="memberOnSelect" :removed="memberOnRemoved" :open="memberOnOpened" enabled="true" :fields="members" mode="CheckBox" showDropDownIcon="true" :dataSource="memberDataSource" index=0 aria-label="multiselect"></ejs-multiselect>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div class="hdrlabel">Order:
                    </div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist id='sorting-order' ref='sorting_order' type="text" tabindex="0" enabled="true" :change="orderOnChange" :dataSource='orderData' index=0></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
              <td></td>
                <td>
                    <div style="float: right">
                        <ejs-button id="apply" ref="apply" v-on:click="btnClick" isPrimary='true'>Apply</ejs-button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div id="action-description">
    <p>This sample demonstrates ordering used-defined member(s), aka header name(s), of specific field in row and column axes in ascending or descending order.</p>
</div>
<div id="description">
    <p>In this sample, any field from the <b>Field</b> dropdown list and its member(s), aka header name(s), from the <b>Headers</b> dropdown list can be ordered ascending or descending.
    It is possible to achieve this by setting the <code>enableSorting</code> property to <b>true</b>, 
    as well as the field name, sort order, and member(s) (which can be in any order) inside the pivot table's <code>sortSettings</code> property.
    The <code>dataSourceSettings</code> includes <code>enableSorting</code> and <code>sortSettings</code> properties.</p><br />
    <p>
        More information on the custom sorting can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/sorting#custom-sorting">
        documentation section</a>.
    </p>
</div>

</div>
</template>
<script lang="ts">
import { IDataSet, PivotViewComponent, GroupingBar, PivotActionCompleteEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { SortModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import {
  CheckBoxComponent,
  ButtonComponent,
  ChangeEventArgs as checkEventArgs,
ChangeEventArgs
} from "@syncfusion/ej2-vue-buttons";
import {
  DropDownListComponent,
  MultiSelectComponent,
  SelectEventArgs,
  RemoveEventArgs,
  PopupEventArgs,
  CheckBoxSelection,
  ChangeEventArgs as dropEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from '@syncfusion/ej2-base';
import { Pivot_Data } from "./data-source";
enableRipple(false);

/* tslint:disable */
declare var require: any;
let fieldCollections: { [key: string]: { [key: string]: Object }[] } = {};
let isInitial: boolean = true;
let isMemberAdded: boolean = true;
let isMemberAdded_1: boolean = true;
let getMembers: { [key: string]: string[] } = { 'Country': [], 'Products': [], 'Year': [], 'Order_Source': [] };
let memOrder: string[] = [];
let index: number;
let membersData: { [key: string]: Object; }[] = [];

export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-checkbox': CheckBoxComponent,
    'ejs-button': ButtonComponent,
    'ejs-multiselect': MultiSelectComponent,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: () => {
    return {
      dataSourceSettings: {
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        dataSource: Pivot_Data,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{name: 'Country', items: ['Germany']}],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        sortSettings: [{ name: 'Country', order: 'Ascending', membersOrder: ['France', 'United States'] }, { name: 'Year', order: 'Descending', membersOrder: ['FY 2018', 'FY 2017'] },
        { name: 'Products', order: 'Descending', membersOrder: ['Gloves', 'Bottles and Cages'] }],
        columns: [{ name: 'Year', dataType: 'string' }, { name: 'Order_Source', caption: 'Order Source' }],
        filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }]
      },
      gridSettings: { columnWidth: 140 },
      width: "100%",
      height: 300,
      groupingBarSettings: { showRemoveIcon: false, showFilterIcon: false, showSortIcon: true, showValueTypeIcon: false, allowDragAndDrop: false },
      showGroupingBar: true,
      fields: { text: "caption", value: "Order" },
      members: { text: 'Member' },
      memberDataSource: membersData,
      fieldData: [
  { Field: 'Country', Order: 'Country_asc', caption: 'Country' },
  { Field: 'Products', Order: 'Products_desc', caption: 'Products' },
  { Field: 'Year', Order: 'Year_desc', caption: 'Year' },
  { Field: 'Order_Source', Order: 'Order_Source_asc', caption: 'Order Source' }
   ],
orderData: ["Ascending", "Descending"]
    };
  },
methods: {
    dataBound: function(args: any) {
      if (isInitial) {
          /** To fill the members for each fields into the object fieldCollections. */
          let fieldCount: number = (this as any).fieldData.length - 1;
          while (fieldCount > -1) {
            let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
              let members: string[] = Object.keys(pivotObj.engineModule.fieldList[(this as any).fieldData[fieldCount].Field as string].members);
              let memberCnt: number = members.length;
              let memberColl: { Member: string; Checked: string; }[] = [];
              for (let i: number = 0; i < memberCnt; i++) {
                  memberColl.push({ Member: members[i], Checked: members[i] + '_' + false });
              }
              fieldCollections[(this as any).fieldData[fieldCount].Field as string] = memberColl;
              fieldCount--;
          }
          let membersOrder = ((this as any).$refs.sorting_members).ej2Instances;
          fieldCollections.Order_Source.reverse();
          membersData = (fieldCollections[(this as any).fieldData[0].Field as string]) as { [key: string]: Object }[];
          membersOrder.dataSource = membersData;
          fieldCollections.Country[0].Checked = "France_true";
          fieldCollections.Country[3].Checked = "United States_true";
          getMembers.Country.push('France', 'United States');
          getMembers.Year.push('FY 2018', 'FY 2017');
          getMembers.Products.push('Gloves', 'Bottles and Cages');
          membersOrder.value = this.updateSelectedMembers("Country").reverse();
          membersOrder.dataBind();
          isInitial = false;
      }
    },
    actionComplete: function(args: PivotActionCompleteEventArgs) {
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      let sortDetails: SortModel[] = pivotObj.dataSourceSettings.sortSettings;
            for (let i: number = 0; i < (pivotObj.dataSourceSettings.rows.length + pivotObj.dataSourceSettings.columns.length); i++) {
                if (sortDetails.length > 0) {
                    if (sortDetails[i] && sortDetails[i].name === 'Country') {
                        this.updateOrder(sortDetails, i, 'Country', 0);
                    }
                    else if (sortDetails[i] && sortDetails[i].name === 'Products') {
                        this.updateOrder(sortDetails, i, 'Products', 1);
                    }
                    else if (sortDetails[i] && sortDetails[i].name === 'Year') {
                        this.updateOrder(sortDetails, i, 'Year', 2);
                    }
                    else if (sortDetails[i] && sortDetails[i].name === 'Order_Source') {
                        this.updateOrder(sortDetails, i, 'Order_Source', 3);
                    }
                }
            }
    },
    fieldOnChange: function(args: ChangeEventArgs) {
      let fieldsObj = ((this as any).$refs.sorting_fields).ej2Instances;
      let orderInfo = ((this as any).$refs.sorting_order).ej2Instances;
      let membersOrder = ((this as any).$refs.sorting_members).ej2Instances;
     if (fieldsObj.dataSource[fieldsObj.index].Order === fieldsObj.dataSource[fieldsObj.index].Field + '_asc') {
                orderInfo.index = 0;
            }
            else {
                orderInfo.index = 1;
            }
            if (memOrder.length > 0) {
                if (memOrder[fieldsObj.index] === 'Ascending') {
                    orderInfo.index = 0;
                }
                else if (memOrder[fieldsObj.index] === 'Descending') {
                    orderInfo.index = 1;
                }
            }
            if ((<any>args).itemData['Field'] === 'Year' && isMemberAdded) {
                fieldCollections.Year[3].Checked = "FY 2018_true";
                fieldCollections.Year[2].Checked = "FY 2017_true";
                membersOrder.value = this.updateSelectedMembers("Year").reverse();
                isMemberAdded = false;
            }
            else if ((<any>args).itemData['Field'] === 'Products' && isMemberAdded_1) {
                fieldCollections.Products[9].Checked = "Gloves_true";
                fieldCollections.Products[0].Checked = "Bottles and Cages_true";
                membersOrder.value = this.updateSelectedMembers("Products").reverse();
                isMemberAdded_1 = false;
            }
            membersOrder.dataSource = fieldCollections[(<any>args).itemData['Field']];
            membersOrder.value = this.updateSelectedMembers((<any>args).itemData['Field']);
            membersOrder.dataBind();
            orderInfo.dataBind();
    },
    memberOnSelect: function(args: SelectEventArgs) {
      let fieldsObj = ((this as any).$refs.sorting_fields).ej2Instances;
      let applyBtn = ((this as any).$refs.apply).ej2Instances;
      applyBtn.disabled = false;
      this.maintainCheckedState((<any>fieldsObj).itemData.Field, (args.item.textContent as string), args.item.textContent + '_' + true);
      getMembers[(<any>fieldsObj).itemData.Field].push((<any>args).itemData['Member']);
    },
    memberOnRemoved: function(args: RemoveEventArgs) {
      let fieldsObj = ((this as any).$refs.sorting_fields).ej2Instances;
      this.maintainCheckedState((<any>fieldsObj).itemData.Field, (args.item.textContent as string), args.item.textContent + '_' + false);
      index = getMembers[(<any>fieldsObj).itemData.Field].indexOf((<any>args).itemData['Member']);
      if (getMembers[(<any>fieldsObj).itemData.Field].indexOf((<any>args).itemData['Member']) > -1) {
          getMembers[(<any>fieldsObj).itemData.Field].splice(index, 1);
      }
    },
    memberOnOpened: function(args: PopupEventArgs) {
      (args.popup.element.querySelector(
        ".e-filter-parent"
      ) as HTMLElement).style.display = "none";
    },
    orderOnChange: function(args: dropEventArgs) {
      let fieldsObj = ((this as any).$refs.sorting_fields).ej2Instances;
      if (args.value === 'Ascending') {
                fieldsObj.dataSource[fieldsObj.index].Order = fieldsObj.dataSource[fieldsObj.index].Field + '_asc';
            }
            else {
                fieldsObj.dataSource[fieldsObj.index].Order = fieldsObj.dataSource[fieldsObj.index].Field + '_desc';
            }
            fieldsObj.refresh();
    },
    checkbox_onChange: function(args: checkEventArgs) {
      let fieldsObj = ((this as any).$refs.sorting_fields).ej2Instances;
      let orderInfo = ((this as any).$refs.sorting_order).ej2Instances;
      let membersOrder = ((this as any).$refs.sorting_members).ej2Instances;
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      let btn = ((this as any).$refs.apply).ej2Instances;
      let ischecked: boolean = args.checked as boolean;
          fieldsObj.enabled = ischecked;
          orderInfo.enabled = ischecked;
          membersOrder.enabled = ischecked;
          btn.disabled = !ischecked;
          pivotObj.dataSourceSettings.enableSorting = ischecked;
    },
    btnClick: function(args: checkEventArgs) {
      let checkBoxObj = ((this as any).$refs.sorting).ej2Instances;
      let fieldsObj = ((this as any).$refs.sorting_fields).ej2Instances;
      let pivotObj = ((this as any).$refs.pivotview).ej2Instances;
      if (checkBoxObj.checked) {
          pivotObj.setProperties({
              dataSourceSettings: {
                  enableSorting: true, sortSettings: [
                      { name: 'Country', order: fieldsObj.dataSource[0].Order === 'Country_asc' ? 'Ascending' : 'Descending', membersOrder: getMembers['Country'] },
                      { name: 'Products', order: fieldsObj.dataSource[1].Order === 'Products_asc' ? 'Ascending' : 'Descending', membersOrder: getMembers['Products'] },
                      { name: 'Year', order: fieldsObj.dataSource[2].Order === 'Year_asc' ? 'Ascending' : 'Descending', membersOrder: getMembers['Year'] },
                      { name: 'Order_Source', order: fieldsObj.dataSource[3].Order === 'Order_Source_asc' ? 'Ascending' : 'Descending', membersOrder: getMembers['Order_Source'] }
                  ]
              }
          }, true);
        }
        else {
            pivotObj.setProperties({ dataSourceSettings: { enableSorting: false, sortSettings: [] } }, true);
        }
        pivotObj.refreshData();
    },
    /** To set the checked status of the members maintained in the object fieldCollections. */
    maintainCheckedState: function(field: string, member: string, checkedState: string) {
        let members: { [key: string]: Object; }[] = fieldCollections[field];
        let count: number = members.length - 1;
        while (count > -1) {
            if (members[count].Member === member) {
                members[count].Checked = checkedState;
                break;
            }
            count--;
        }
    },
    /** To get the checked members/status here as string array. */
    updateSelectedMembers: function(field: string) {
        let membersCollections: string[] = [];
        let members: { [key: string]: Object; }[] = fieldCollections[field];
        let count: number = members.length - 1;
        while (count > -1) {
            if (members[count].Checked === members[count].Member + '_' + true) {
                membersCollections.push(members[count].Member.toString());
            }
            count--;
        }
        return membersCollections;
    },
    updateOrder: function(sortDetails: SortModel[] , i: number, fieldName: string, j: number) {
      let fieldsObj = ((this as any).$refs.sorting_fields).ej2Instances;
      let orderInfo = ((this as any).$refs.sorting_order).ej2Instances;
      if (sortDetails[i].order === 'Ascending') {
          if ((<any>fieldsObj).itemData.Field === fieldName) {
              orderInfo.index = 0;
          }
          memOrder[j] = 'Ascending';
      }
      else {
          if ((<any>fieldsObj).itemData.Field === fieldName) {
              orderInfo.index = 1;
          }
          memOrder[j] = 'Descending';
      }
    }
  },
  provide: {
    multiselect: [CheckBoxSelection],
    pivotview: [GroupingBar]
  }
}
</script>

<style scoped>
/deep/ .row{
        margin-left: -10px;
    }

 /deep/ .pivot-property-section .e-multiselect.e-input-group {
        padding: 0px !important;
    }

 /deep/ .pivot-property-section table tr td:first-child {
        width: 20%;
    }
</style>