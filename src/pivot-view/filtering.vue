<template>
<div>
    <div class="col-lg-8 control-section">
    <div class="content-wrapper">
        <ejs-pivotview id="pivotview" :dataSource="dataSource" :gridSettings="gridSettings" :dataBound="dataBound" :width="width" :height="height">        
        </ejs-pivotview>
    </div>
</div>

<div class="col-lg-4 property-section">
    <table id="property" title="Properties" style="width: 100%;height:100%;">
        <tbody>
            <tr style="height: 50px">
                <td>
                    <div>Fields:
                    </div>
                </td>
                <td>
                    <div style="margin-left: -40px">
                        <ejs-dropdownlist id='fields' :dataSource='fieldDataSource' index=0 width='98%' :change='fieldOnChange'></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Members:
                    </div>
                </td>
                <td style="padding-bottom: 16px">
                    <div class="valuecls" style="margin-left: -40px">
                        <ejs-multiselect id='values' :dataSource='memberDataSource' mode='CheckBox' showDropDownIcon='true' :showClearButton='showClearButton' :enableSelectionOrder='enableSelectionOrder' :fields='memberFields' :select='memberOnSelect' :removed='memberOnRemoved' :open='memberOnOpened' ></ejs-multiselect>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Filter Type:
                    </div>
                </td>
                <td>
                    <div style="margin-left: -40px;margin-top:-5px">
                        <ejs-dropdownlist id='type' :dataSource='typeDataSource' width='98%' index=1></ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
              <td></td>
                <td>
                    <div style="float: right;margin-right: 4px">
                        <ejs-button id="apply" v-on:click.native="btnClick" iconCss="e-icons e-play-icon" isPrimary='true' disabled='true'>Apply</ejs-button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div id="action-description">
    <p>This sample demonstrates filtering of field headers either by including or excluding them.</p>
</div>
<div id="description">
    <p>In this sample, any field can be selected from
        <b>Fields</b> dropdown list along with its members from be subsequent
        <b>Members</b> dropdown list and finally select whether to include or exclude them from filtering. It can be achieved
        using the
        <code>name</code> and
        <code>items</code> options inside the
        <code>filterSettings</code> property in the pivotgrid widget.
    </p>
</div>

</div>
</template>
<script lang="ts">
import Vue from "vue";
import { IDataSet, PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import { Pivot_Data } from "./data-source";
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
import { extend, enableRipple } from '@syncfusion/ej2-base';
import { FilterModel } from "@syncfusion/ej2-pivotview/src/pivotview/model/dataSource-model";
enableRipple(false);

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);
Vue.use(DropDownListPlugin);
Vue.use(MultiSelectPlugin);

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

/** To get the checked members here as string array. */
function getSelectedMembers(field: string) {
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
}

/** To set the filter type of the field maintained in the object filterCollections. */
function updateFilterType(fieldName: string) {
  let fieldsddl = (<any>document.getElementById("fields")).ej2_instances[0];
  let typeddl = (<any>document.getElementById("type")).ej2_instances[0];
    if ((fieldsddl as any).itemData === fieldName) {
        return (typeddl as any).itemData;
    } else if (filterCollections[fieldName]) {
        return filterCollections[fieldName].type;
    } else {
        return 'Exclude'
    }
}

/** To set the checked status of the members maintained in the object fieldCollections. */
function setMemberCheckedState(
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

/** To set disabled/enabled state in the Apply button. */
function setApplyBtnState() {
  let applyBtn = (<any>document.getElementById("apply")).ej2_instances[0];
  let fieldArray: string[] = ["Country", "Products", "Year"];
  let loopCount = fieldArray.length - 1;
  let isSelected: boolean = false;
  while (loopCount > -1) {
    if (getSelectedMembers(fieldArray[loopCount]).length > 0) {
      isSelected = true;
      break;
    }
    loopCount--;
  }
  applyBtn.disabled = !isSelected;
}

export default Vue.extend({
  data: () => {
    return {
      dataSource: {
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
        data: Pivot_Data,
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
          let pivotGridObj = (<any>document.getElementById("pivotview"))
            .ej2_instances[0];
          let members: string[] = Object.keys(
            pivotGridObj.engineModule.fieldList[fields[fieldCnt]].members
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
      let pivotGridObj = (<any>document.getElementById("pivotview")).ej2_instances[0];
      for (let field of pivotGridObj.dataSource.filterSettings) {
          filterCollections[field.name] = field;
      }
    },
    btnClick: function(args: ChangeEventArgs) {
      let pivotGridObj = (<any>document.getElementById("pivotview")).ej2_instances[0];
      let typeddl = (<any>document.getElementById("type")).ej2_instances[0];
      /** You can set your filter settings here. */
      pivotGridObj.dataSource.filterSettings = [
        { name: fields[0], items: getSelectedMembers(fields[0]), type: updateFilterType(fields[0]) },
        { name: fields[1], items: getSelectedMembers(fields[1]), type: updateFilterType(fields[1]) },
        { name: fields[2], items: getSelectedMembers(fields[2]), type: updateFilterType(fields[2]) }
      ];
    },
    fieldOnChange: function(args: dropEventArgs) {
      let valuesddl = (<any>document.getElementById("values")).ej2_instances[0];
      let typeddl = (<any>document.getElementById("type")).ej2_instances[0];
      valuesddl.dataSource = fieldCollections[args.value.toString()];
      valuesddl.value = getSelectedMembers(args.value.toString());
      if (filterCollections[args.value.toString()]) {
          typeddl.value = filterCollections[args.value.toString()].type;
      }
      valuesddl.dataBind();
      typeddl.dataBind();
    },
    memberOnSelect: function(args: SelectEventArgs) {
      let fieldsddl = (<any>document.getElementById("fields")).ej2_instances[0];
      let applyBtn = (<any>document.getElementById("apply")).ej2_instances[0];
      applyBtn.disabled = false;
      setMemberCheckedState(
        (<any>fieldsddl).itemData,
        <any>args.item.textContent,
        args.item.textContent + "_" + true
      );
    },
    memberOnRemoved: function(args: RemoveEventArgs) {
      let fieldsddl = (<any>document.getElementById("fields")).ej2_instances[0];
      setMemberCheckedState(
        (<any>fieldsddl).itemData,
        <any>args.item.textContent,
        args.item.textContent + "_" + false
      );
      setApplyBtnState();
    },
    memberOnOpened: function(args: PopupEventArgs) {
      let valuesddl = (<any>document.getElementById("values")).ej2_instances[0];
      (args.popup.element.querySelector(
        ".e-filter-parent"
      ) as HTMLElement).style.display =
        "none";
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

/* .e-remain {
        display: none !important;
    }

    .e-delim-view.e-delim-values {
        display: none !important;
    } */

.e-disabled {
  display: none !important;
}

.e-play-icon::before {
  content: "\e728";
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
</style>