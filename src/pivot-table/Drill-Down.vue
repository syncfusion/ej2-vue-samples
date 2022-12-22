<template>
<div>
<div class="col-lg-8 control-section" style="overflow: auto">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings"
        :gridSettings="gridSettings"
        :dataBound="dataBound"
        :setMemberCheckedState="setMemberCheckedState"
        :getSelectedMembers="getSelectedMembers"
        :updateRowColumn="updateRowColumn"
        :clear="clear"
        :width="width" 
        :height="height">        
        </ejs-pivotview>
    </div>
</div>

<div class="col-lg-4 property-section pivot-property-section">
    <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
            <tr style="height: 50px">
                <td>
                    <div class="hdrlabel">Drill Down:
                    </div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist id='expandall' ref='expandall' type="text" tabindex="1" :change="onChangeOption" enabled="true" :fields="optionData" :dataSource='options' index=0 value='rowHeaders'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr class="field_cls" style="height: 50px; display: none">
                <td>
                    <div class="hdrlabel">Fields:
                    </div>
                </td>
                <td>
                    <div>
                        <ejs-multiselect id='expand_fields' ref='expand_fields' placeholder='Select fields' type="text" tabindex="1" :select="fieldOnSelect" :removed="fieldOnRemoved" :open="memberOnOpened" enabled="true" :fields="fieldData" mode='CheckBox' showDropDownIcon="true" :dataSource='fields'></ejs-multiselect>
                    </div>
                </td>
            </tr>
            <tr class="field_cls_1" style="height: 50px; display: none">
                <td>
                    <div class="hdrlabel">Fields:
                    </div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist id='expand_fields_1' ref='expand_fields_1' placeholder='Select fields' type="text" tabindex="1" :change="fieldOnChange" enabled="true" :fields="fieldData" :dataSource='fields' index=0 value='Country'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr class="members_cls" style="height: 50px; display: none">
                <td>
                    <div class="hdrlabel">Headers:
                    </div>
                </td>
                <td>
                    <div>
                        <ejs-multiselect id='expand_members' ref='expand_members' placeholder="Select headers" type="text" tabindex="1" :select="memberOnSelect" :removed="memberOnRemoved" :open="memberOnOpened" enabled="true" :fields="members" mode='CheckBox' showDropDownIcon="true" :dataSource='memberDataSource'></ejs-multiselect>
                    </div>
                </td>
            </tr>
            <tr class="apply_cls" style="height: 50px; display: none">
              <td></td>
                <td>
                    <div style="float: right">
                        <ejs-button id="apply" ref="apply" v-on:click.native="btnClick" isPrimary='true'>Apply</ejs-button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div id="action-description">
    <p>This sample demonstrates how to drill down on all headers, column headers only, row headers only, specific field(s), and specific member(s) within the specific field(s).</p>
</div>
<div id="description">
        <p>In this sample, drill down can be performed based on the option selected from the <b>Drill Down</b> dropdown list. The available options are described in detail below.</p>
    <table>
        <tr>
            <td style="vertical-align: top;padding: 10px 0;width: 150px">
                <code>All headers :</code>
            </td>
            
            <td style="padding-top: 10px;">Allows to expand all headers of row and column axes in the pivot table. 
                It can be achieved by setting the <code>expandAll</code> property to <b>true</b> in the <code>dataSourceSettings</code>.</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>Row headers :</code>
            </td>
            <td style="padding-top: 2px;">Allows to expand all row headers in the pivot table. 
                It can be achieved by setting the <code>expandAll</code> property to <b>true</b> for row fields only.</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>Column headers :</code>
            </td>
            <td style="padding-top: 2px;">Allows to expand all column headers in the pivot table. 
                It can be achieved by setting the <code>expandAll</code> property to <b>true</b> for column fields only.</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>Specific fields :</code>
            </td>
            <td style="padding-top: 3px;">Allows to expand specific field(s) in the pivot table's row or column axes. 
                It can be achieved by setting the <code>expandAll</code> property for the relevant field(s) in the row and column axes to <b>true</b>.</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>Specific headers :</code>
            </td>
            <td style="padding-top: 3px;">Allows to expand specific header(s) within the respective field available in the pivot table's row or column axes.
                 It can be achieved by specifying the respective field name and its member(s), aka header name(s), inside the <code>drilledMembers</code> property in the <code>dataSourceSettings</code>.</td>
        </tr>
    </table>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { IDataSet, PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import {
  CheckBoxPlugin,
  ButtonPlugin,
  ChangeEventArgs as checkEventArgs
} from "@syncfusion/ej2-vue-buttons";
import {
  DropDownListPlugin,
  MultiSelectPlugin,
  SelectEventArgs,
  RemoveEventArgs,
  PopupEventArgs,
  CheckBoxSelection,
  ChangeEventArgs as dropEventArgs
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from '@syncfusion/ej2-base';
import { Pivot_Data } from "./data-source";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(ButtonPlugin);
Vue.use(MultiSelectPlugin);
Vue.use(DropDownListPlugin);
/* tslint:disable */
declare var require: any;
    let fieldCollections: { [key: string]: { [key: string]: Object }[] } = {};
    let isInitial: boolean = true;
    let storeMembers: { [key: string]: string[] } = { 'Country': [], 'Year': [] };
    let isRowSelect: boolean = false;
    let isColumnSelect: boolean = false;
    let values: { [key: string]: Object }[] = [];
    let index: number;

export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        dataSource: Pivot_Data,
        expandAll: false,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country', expandAll: true }, { name: 'Products' }],
        columns: [{ name: 'Year', dataType: 'string' }, { name: 'Order_Source', caption: 'Order Source' }],
        values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
        filters: [{ name: 'Product_Categories', caption: 'Product Categories' }]
      },
      gridSettings: { columnWidth: 140 },
      width: "100%",
      height: 300,
      fieldData: { text: 'Field' },
      members: { text: 'Member' },
      optionData: { value: 'value', text: 'text' },
      memberDataSource: values,
      fields: [
        { Field: 'Country', expandAll: false },
        { Field: 'Year', expandAll: false }
    ],
      options: [
        { value: 'allHeaders', text: 'All headers' },
        { value: 'rowHeaders', text: 'Row headers' },
        { value: 'columnHeader', text: 'Column headers' },
        { value: 'specificFields', text: 'Specific fields' },
        { value: 'specificHeaders', text: 'Specific headers' }
    ]
    };
  },
methods: {
    dataBound: function(args: any) {
    if (isInitial) {
        /** To fill the members for each fields into the object fieldCollections. */
        let fieldCnt: number = this.fields.length - 1;
        while (fieldCnt > -1) {
            let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
            let members: string[] = Object.keys(pivotObj.engineModule.fieldList[this.fields[fieldCnt].Field as string].members);
            let memberCnt: number = members.length;
            let membersCollection: { Member: string; Checked: string; }[] = [];
            for (let i: number = 0; i < memberCnt; i++) {
                membersCollection.push({ Member: members[i], Checked: members[i] + '_' + false });
            }
            fieldCollections[this.fields[fieldCnt].Field as string] = membersCollection;
            fieldCnt--;
        }
        let membersOrder = (<any>this.$refs.expand_members).ej2Instances;
        let fieldsddl = (<any>this.$refs.expand_fields).ej2Instances;
        values = fieldCollections[this.fields[0].Field as string];
        membersOrder.dataSource = values;
        membersOrder.dataBind();
        fieldsddl.dataBind();
        isInitial = false;
      }
    },
    fieldOnChange: function(args: dropEventArgs) {
        let field1 = (<any>this.$refs.expand_fields_1).ej2Instances;
        let membersOrder = (<any>this.$refs.expand_members).ej2Instances;
        membersOrder.dataSource = fieldCollections[(<any>args).itemData['Field']];
        membersOrder.value = this.getSelectedMembers((<any>args).itemData['Field']);
        membersOrder.dataBind();
        field1.dataBind();
    },
    onChangeOption: function(args: dropEventArgs) {
        let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
       (document.querySelector('.field_cls') as HTMLElement).style.display = 'none';
            (document.querySelector('.field_cls_1') as HTMLElement).style.display = 'none';
            (document.querySelector('.members_cls') as HTMLElement).style.display = 'none';
            (document.querySelector('.apply_cls') as HTMLElement).style.display = 'none';
            if (args.value == 'allHeaders') {
                this.clear();
                pivotObj.setProperties({ dataSourceSettings: { expandAll: true, drilledMembers: [{ name: 'Country', items: [] }, { name: 'Year', items: [] }] } }, true);
                pivotObj.refreshData();
            } else if (args.value == 'rowHeaders') {
                this.clear();
                pivotObj.setProperties({ dataSourceSettings: { drilledMembers: [{ name: 'Country', items: [] }, { name: 'Year', items: [] }] } }, true);
                this.updateRowColumn(false, true, false);
            } else if (args.value == 'columnHeader') {
                this.clear();
                pivotObj.setProperties({ dataSourceSettings: { drilledMembers: [{ name: 'Country', items: [] }, { name: 'Year', items: [] }] } }, true);
                this.updateRowColumn(false, false, true);
            } else if (args.value == 'specificFields') {
                (document.querySelector('.field_cls') as HTMLElement).style.display = '';
            } else if (args.value == 'specificHeaders') {
                (document.querySelector('.field_cls_1') as HTMLElement).style.display = '';
                (document.querySelector('.members_cls') as HTMLElement).style.display = '';
                (document.querySelector('.apply_cls') as HTMLElement).style.display = '';
            }
    },
     fieldOnSelect: function(args: SelectEventArgs) {
      let fieldsddl = (<any>this.$refs.expand_fields).ej2Instances;
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      let membersOrder = (<any>this.$refs.expand_members).ej2Instances;
     membersOrder.value = [];
            if (storeMembers['Country'].length > 0 || storeMembers['Year'].length > 0) {
                storeMembers = { 'Country': [], 'Year': [] };
                isInitial = true;
            }
            if ((<any>args).itemData['Field'] === 'Country') {
                pivotObj.setProperties({ dataSourceSettings: { drilledMembers: [{ name: 'Country', items: [] }, { name: 'Year', items: [] }] } }, true);
                this.updateRowColumn(false, true, isColumnSelect);
                isRowSelect = true;
            }
            else if ((<any>args).itemData['Field'] === 'Year') {
                pivotObj.setProperties({ dataSourceSettings: { drilledMembers: [{ name: 'Country', items: [] }, { name: 'Year', items: [] }] } }, true);
                this.updateRowColumn(false, isRowSelect, true);
                isColumnSelect = true;
            }
    },
    fieldOnRemoved: function(args: RemoveEventArgs) {
        let fieldsddl = (<any>this.$refs.expand_fields).ej2Instances;
      if ((<any>args).itemData['Field'] === 'Country') {
                this.updateRowColumn(false, false, isColumnSelect);
                isRowSelect = false;
            }
            else if ((<any>args).itemData['Field'] === 'Year') {
                this.updateRowColumn(false, isRowSelect, false);
                isColumnSelect = false;
            }
    },
    memberOnSelect: function(args: SelectEventArgs) {
      let field1 = (<any>this.$refs.expand_fields_1).ej2Instances;
      let applyBtn = (<any>this.$refs.apply).ej2Instances;
        this.setMemberCheckedState((<any>field1).itemData.Field, (args['item'].textContent as string), args['item'].textContent + '_' + true);
            applyBtn.disabled = false;
            storeMembers[(<any>field1).itemData.Field].push((<any>args).itemData['Member']);
    },
    memberOnRemoved: function(args: RemoveEventArgs) {
      let field1 = (<any>this.$refs.expand_fields_1).ej2Instances;
        this.setMemberCheckedState((<any>field1).itemData.Field, (args['item'].textContent as string), args['item'].textContent + '_' + false);
            index = storeMembers[(<any>field1).itemData.Field].indexOf((<any>args).itemData['Member']);
            if (storeMembers[(<any>field1).itemData.Field].indexOf((<any>args).itemData['Member']) > -1) {
                storeMembers[(<any>field1).itemData.Field].splice(index, 1);
            }
    },
    memberOnOpened: function(args: PopupEventArgs) {
      (args.popup.element.querySelector(
        ".e-filter-parent"
      ) as HTMLElement).style.display = "none";
    },
    btnClick: function(args: checkEventArgs) {
      let fieldsddl = (<any>this.$refs.expand_fields).ej2Instances;
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
       fieldsddl.value = [];
        isRowSelect = false;
        isColumnSelect = false;
        pivotObj.setProperties({ dataSourceSettings: { drilledMembers: [{ name: 'Country', items: storeMembers['Country'] }, { name: 'Year', items: storeMembers['Year'] }] } }, true);
        this.updateRowColumn(false, false, false);
    },
     /** To set the checked status of the members maintained in the object fieldCollections. */
    setMemberCheckedState: function(field: string, member: string, checkedState: string) {
        let members: { [key: string]: Object; }[] = fieldCollections[field];
        let membersLength: number = members.length - 1;
        while (membersLength > -1) {
            if (members[membersLength].Member === member) {
                members[membersLength].Checked = checkedState;
                break;
            }
            membersLength--;
        }
    },

    /** To get the checked members/status here as string array. */
    getSelectedMembers: function(field: string) {
        let membersCollection: string[] = [];
        let members: { [key: string]: Object; }[] = fieldCollections[field];
        let membersLength = members.length - 1;
        while (membersLength > -1) {
            if (members[membersLength].Checked === members[membersLength].Member + '_' + true) {
                membersCollection.push(members[membersLength].Member.toString());
            }
            membersLength--;
        }
        return membersCollection;
    },

    updateRowColumn: function(isExpand: boolean, isRowExpand: boolean, isColumnExpand: boolean) {
        let fieldsddl = (<any>this.$refs.expand_fields).ej2Instances;
         let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
        pivotObj.setProperties({
            dataSourceSettings: {
                expandAll: isExpand, rows: [
                    { name: 'Country', expandAll: fieldsddl.dataSource[0].expandAll = isRowExpand },
                    { name: 'Products' }
                ], columns: [
                    { name: 'Year', expandAll: fieldsddl.dataSource[1].expandAll = isColumnExpand },
                    { name: 'Order_Source' }
                ]
            }
        }, true);
        pivotObj.refreshData();
    },

    clear: function() {
        let membersOrder = (<any>this.$refs.expand_members).ej2Instances;
        let fieldsddl = (<any>this.$refs.expand_fields).ej2Instances;
        fieldsddl.value = [];
        isRowSelect = false;
        isColumnSelect = false;
        membersOrder.value = [];
        if (storeMembers['Country'].length > 0 || storeMembers['Year'].length > 0) {
            storeMembers = { 'Country': [], 'Year': [] };
            isInitial = true;
        }
    }
  },
  provide: {
    multiselect: [CheckBoxSelection]
  }
});
</script>

<style scoped>
/deep/  .e-multiselect.e-input-group {
        padding: 0px !important;
    }

/deep/  .pivot-property-section table tr td:first-child {
        width: 20%;
    }

/deep/ .e-bigger .pivot-property-section .e-input-group.e-control-wrapper .e-input-group-icon {
        padding: 0px !important;
        min-height: 36px;
        min-width: 36px;
    }
</style>