<template>
  <div>
    <div class="col-lg-8 control-section" style="overflow: auto">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :gridSettings="gridSettings"
          :dataBound="dataBound"
          :width="width"
          :height="height"
        ></ejs-pivotview>
      </div>
    </div>

    <div class="col-lg-4 property-section pivottable-property-section">
      <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
          <tr style="height: 50px">
            <td>
              <div>Fields:</div>
            </td>
            <td>
              <div>
                <ejs-dropdownlist
                  id="fields"
                  ref="fields"
                  :dataSource="fieldDataSource"
                  index="0"
                  width="98%"
                  :change="fieldOnChange"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>Members:</div>
            </td>
            <td style="padding-bottom: 16px">
              <div class="valuecls">
                <ejs-multiselect
                  id="values"
                  ref="values"
                  :dataSource="memberDataSource"
                  mode="CheckBox"
                  showDropDownIcon="true"
                  :showClearButton="showClearButton"
                  :enableSelectionOrder="enableSelectionOrder"
                  :fields="memberFields"
                  :select="memberOnSelect"
                  :removed="memberOnRemoved"
                  :open="memberOnOpened"
                ></ejs-multiselect>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td>
              <div>Filter Type:</div>
            </td>
            <td>
              <div style="margin-top:-5px">
                <ejs-dropdownlist
                  id="type"
                  ref="type"
                  :dataSource="typeDataSource"
                  width="98%"
                  index="1"
                ></ejs-dropdownlist>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td></td>
            <td>
              <div style="float: right;margin-right: 4px">
                <ejs-button
                  id="apply"
                  ref="apply"
                  v-on:click.native="btnClick"
                  isPrimary="true"
                  disabled="true"
                >Apply</ejs-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="action-description">
      <p>This sample demonstrates filtering row and column headers either by including or excluding them from the pivot table.</p>
    </div>
    <div id="description">
      <p>
        In this sample, any field can be selected from
        <b>Fields</b> dropdown list along with its members from be subsequent
        <b>Members</b> dropdown list and finally select whether to include or exclude them from filtering. It can be achieved
        using the
        <code>name</code> and
        <code>items</code> options inside the
        <code>filterSettings</code> property in the pivot table.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { IDataSet, PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin, ChangeEventArgs } from "@syncfusion/ej2-vue-buttons";
import {
  DropDownListPlugin,
  MultiSelectPlugin,
  ChangeEventArgs as dropEventArgs,
  SelectEventArgs,
  RemoveEventArgs,
  PopupEventArgs,
  CheckBoxSelection
} from "@syncfusion/ej2-vue-dropdowns";
import { extend, enableRipple } from "@syncfusion/ej2-base";
import { FilterModel } from "@syncfusion/ej2-pivotview/src/pivotview/model/datasourcesettings-model";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);
Vue.use(MultiSelectPlugin);
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require("./Pivot_Data.json");
let fieldCollections: { [key: string]: { [key: string]: Object }[] } = {};
let filterCollections: { [key: string]: FilterModel } = {};
let isInitial: boolean = true;
let type: string[] = ["Include", "Exclude"];
let values: { [key: string]: Object }[] = [
  { Member: "United States", Checked: "United States_false" },
  { Member: "United Kingdom", Checked: "United Kingdom_false" },
  { Member: "Germany", Checked: "Germany_false" },
  { Member: "France", Checked: "France_false" }
];
let fields: string[] = ["Country", "Products", "Year"];

export default Vue.extend({
  data: () => {
    return {
      dataSourceSettings: {
        values: [
          { name: "In_Stock", caption: "In Stock" },
          { name: "Sold", caption: "Units Sold" },
          { name: "Amount", caption: "Sold Amount" }
        ],
        filters: [
          { name: "Product_Categories", caption: "Product Categories" }
        ],
        rows: [{ name: "Country" }, { name: "Products" }],
        formatSettings: [{ name: "Amount", format: "C0" }],
        columns: [{ name: "Year" }],
        dataSource: Pivot_Data,
        expandAll: false
      },
      width: "100%",
      height: 300,
      gridSettings: { columnWidth: 140 },
      memberFields: { text: "Member" },
      fieldDataSource: fields,
      memberDataSource: values,
      typeDataSource: type,
      showClearButton: false,
      enableSelectionOrder: false
    };
  },
  methods: {
    dataBound: function(args: any) {
      if (isInitial) {
        /** To fill the members for each fields into the object fieldCollections. */
        let fieldCnt: number = fields.length - 1;
        while (fieldCnt > -1) {
          let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
          let members: string[] = Object.keys(
            pivotObj.engineModule.fieldList[fields[fieldCnt]].members
          );
          let memberCnt: number = members.length - 1;
          let memberColl: { [key: string]: Object }[] = [];
          while (memberCnt > -1) {
            memberColl.push({
              Member: members[memberCnt],
              Checked: members[memberCnt] + "_" + false
            });
            memberCnt--;
          }
          fieldCollections[fields[fieldCnt]] = memberColl;
          fieldCnt--;
        }
        values = fieldCollections[fields[0]];
        isInitial = false;
      }
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      for (let field of pivotObj.dataSourceSettings.filterSettings) {
        filterCollections[field.name] = field;
      }
    },
    btnClick: function(args: ChangeEventArgs) {
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      let typeddl = (<any>this.$refs.type).ej2Instances;
      let applyBtn = (<any>this.$refs.apply).ej2Instances;
      /** You can set your filter settings here. */
      let filterItems0: string[] = this.getSelectedMembers(fields[0]);
      let filterItems1: string[] = this.getSelectedMembers(fields[1]);
      let filterItems2: string[] = this.getSelectedMembers(fields[2]);
      pivotObj.dataSourceSettings.filterSettings = [
        {
          name: fields[0],
          items: this.getSelectedMembers(fields[0]),
          type: this.updateFilterType(fields[0])
        },
        {
          name: fields[1],
          items: this.getSelectedMembers(fields[1]),
          type: this.updateFilterType(fields[1])
        },
        {
          name: fields[2],
          items: this.getSelectedMembers(fields[2]),
          type: this.updateFilterType(fields[2])
        }
      ];
      if (filterItems0.length === 0 && filterItems1.length === 0 && filterItems2.length === 0) {
          applyBtn.disabled = true;
      }
    },
    fieldOnChange: function(args: dropEventArgs) {
      let valuesddl = (<any>this.$refs.values).ej2Instances;
      let typeddl = (<any>this.$refs.type).ej2Instances;
      valuesddl.dataSource = fieldCollections[args.value.toString()];
      valuesddl.value = this.getSelectedMembers(args.value.toString());
      if (filterCollections[args.value.toString()]) {
        typeddl.value = filterCollections[args.value.toString()].type;
      }
      valuesddl.dataBind();
      typeddl.dataBind();
    },
    memberOnSelect: function(args: SelectEventArgs) {
      let fieldsddl = (<any>this.$refs.fields).ej2Instances;
      let applyBtn = (<any>this.$refs.apply).ej2Instances;
      applyBtn.disabled = false;
      this.setMemberCheckedState(
        (<any>fieldsddl).itemData,
        <any>args.item.textContent,
        args.item.textContent + "_" + true
      );
    },
    memberOnRemoved: function(args: RemoveEventArgs) {
      let fieldsddl = (<any>this.$refs.fields).ej2Instances;
      this.setMemberCheckedState(
        (<any>fieldsddl).itemData,
        <any>args.item.textContent,
        args.item.textContent + "_" + false
      );
      this.setApplyBtnState();
    },
    memberOnOpened: function(args: PopupEventArgs) {
      let valuesddl = (<any>this.$refs.values).ej2Instances;
      (args.popup.element.querySelector(
        ".e-filter-parent"
      ) as HTMLElement).style.display = "none";
    },
    /** To set disabled/enabled state in the Apply button. */
    setApplyBtnState: function() {
      let applyBtn = (<any>this.$refs.apply).ej2Instances;
      let pivotObj = (<any>this.$refs.pivotview).ej2Instances;
      let fieldArray: string[] = ["Country", "Products", "Year"];
      let loopCount = fieldArray.length - 1;
      let isSelected: boolean = false;
        let isFiltersAvail: boolean = false;
      while (loopCount > -1) {
        if (this.getSelectedMembers(fieldArray[loopCount]).length > 0) {
          isSelected = true;
          break;
        }
        if (pivotObj.dataSourceSettings.filterSettings &&
            pivotObj.dataSourceSettings.filterSettings[loopCount] &&
            pivotObj.dataSourceSettings.filterSettings[loopCount].items.length > 0) {
            isFiltersAvail = true;
        }
        loopCount--;
      }
      applyBtn.disabled = (!isSelected && isFiltersAvail) ? isSelected : !isSelected;
    },
    /** To set the filter type of the field maintained in the object filterCollections. */
    updateFilterType: function(fieldName: string) {
      let fieldsddl = (<any>this.$refs.fields).ej2Instances;
      let typeddl = (<any>this.$refs.type).ej2Instances;
      if ((fieldsddl as any).itemData === fieldName) {
        return (typeddl as any).itemData;
      } else if (filterCollections[fieldName]) {
        return filterCollections[fieldName].type;
      } else {
        return "Exclude";
      }
    },
    /** To get the checked members here as string array. */
    getSelectedMembers: function(field: string) {
      let membersColl: string[] = [];
      let members: { [key: string]: Object }[] = fieldCollections[field];
      let memLength: number = members.length - 1;
      while (memLength > -1) {
        if (
          members[memLength]["Checked"] ===
          members[memLength]["Member"] + "_" + true
        ) {
          membersColl.push(members[memLength]["Member"].toString());
        }
        memLength--;
      }
      return membersColl;
    },
    /** To set the checked status of the members maintained in the object fieldCollections. */
    setMemberCheckedState: function(
      field: string,
      member: string,
      checkedState: string
    ) {
      let members: { [key: string]: Object }[] = fieldCollections[field];
      let memLength: number = members.length - 1;
      while (memLength > -1) {
        if (members[memLength]["Member"] === member) {
          members[memLength]["Checked"] = checkedState;
          break;
        }
        memLength--;
      }
    }
  },
  provide: {
    multiselect: [CheckBoxSelection]
  }
});
</script>

<style>
#pivotview {
  width: 100%;
}

.e-pivottable .e-static {
  width: 80% !important;
}

.e-disabled {
  display: none !important;
}

.valuecls {
  margin-top: 13px;
}

.material .valuecls {
  margin-top: 8px;
}

.e-multiselect.e-input-group {
  padding: 0px !important;
  width: 98% !important;
}

.material .e-multiselect.e-input-group {
  width: 100% !important;
}

.pivottable-property-section table tr td:first-child {
  width: 20%;
}

.pivottable-property-section {
  overflow: auto;
}
</style>