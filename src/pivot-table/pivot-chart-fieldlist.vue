<template>
<div>
<div class="control-section" style="overflow: auto">
  <div class="content-wrapper" style="width: 100%;">
    <div style="width: 100%;">
    <ejs-toolbar id="defaultToolbar" ref="toolbar" cssClass="defaultToolbar" height="50px" v-on:clicked="ToolbarCliked" v-on:beforeCreate="beforeCreate">
    <e-items>
      <e-item id="layout" template='<div class="toolbar-template" id="layout_switch"><label for="toolbar-switch" class="label_option">Show/hide Toolbar:</label><div id="toolbar-switch"></div></div>'></e-item>
      <e-item id="display" template='<div class="toolbar-template toolbar-temp"><label class="label_option display_label">Display Option:</label><select id="displayOptionddl" name="ddl-display-option"><option value="Both">Both</option><option value="Table">Table</option><option value="Chart">Chart</option></select></div>'></e-item>
      <e-item id="preference" template='<div class="toolbar-template toolbar-temp"><label class="label_option display_label">Primary View:</label><select id="primaryViewddl" name="ddl-primary-view"><option value="Table">Table</option><option value="Chart">Chart</option></select></div>'></e-item>
      <e-item prefixIcon="sb-icons sb-icon-Next" id='fieldlist' tooltipText="Collapse Field List" align='Right'></e-item>
    </e-items>
    </ejs-toolbar>
    </div>
    <div id="pivot_sidebar" class="maincontent" style="width: 100%; height: 720px;">
     <div id="pivot_container" style="width: 64%;">
          <ejs-pivotview id="PivotView" ref="PivotView" :gridSettings="gridSettings" :enginePopulated="enginePopulated" :dataBound="onPivotDataBound" :toolbar="toolbar" :showToolbar="showToolbar" :displayOption="displayOption" :chartSettings="chartSettings" :width="width" :height="height"></ejs-pivotview>
     </div>  
    </div>
    <aside style="height: 100%;">
        <ejs-sidebar id="defaultSidebar" ref="sideObj" class="default-sidebar" target=".maincontent" type="Auto" isOpen="true" position="Right" enableGestures="false" v-on:change="onChange">
        <ejs-pivotfieldlist id="PivotFieldList" ref="PivotFieldList" :dataSourceSettings="dataSourceSettings" :enginePopulated="fieldEnginePopulated" :load="load" :dataBound="dataBound" :allowCalculatedField="allowCalculatedField" :enableFieldSearching="enableFieldSearching" :renderMode="renderMode"></ejs-pivotfieldlist>
        </ejs-sidebar>
    </aside>
  </div>
</div>

<div id="action-description">
    <p>This sample demonstrates rendering a pivot table and pivot chart along with the Excel-like field list feature. It
        also provides interactive controls to toggle the toolbar and dynamically switch between different display modes.
    </p>
</div>
<div id="description">
    <p>
        This example showcases the Syncfusion Pivot Table component alongside a Pivot Chart and a field list rendered
        statically within a sidebar layout. The static field list allows users to configure and customize the report by
        dragging and dropping fields into the appropriate sections such as rows, columns, values, and filters—without
        relying on a popup interface. This enhances accessibility and usability, especially in wide-screen or dashboard
        environments.
    </p>
    <p>
        The Pivot Table component supports three display modes, which are implemented in this sample and can be
        configurable using the <a target="_blank" 
        href="https://ej2.syncfusion.com/angular/documentation/api/pivotview/displayOptionModel/#view">displayOption.view</a> property:
    </p>
    <table>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>Table :</code>
            </td>
            <td>Displays only the pivot table (default).</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>Chart :</code>
            </td>
            <td>Displays only the pivot chart.</td>
        </tr>
        <tr>
            <td style="vertical-align: top;padding: 4px 0;">
                <code>Both :</code>
            </td>
            <td>Displays both the pivot table and pivot chart.</td>
        </tr>
    </table>
    <br />
    <p>
        A <strong>Primary View</strong> dropdown lets users choose whether to prioritize the chart or table when both
        are shown.</p>
    <p>
        Additionally, the <strong>Show/Hide Toolbar</strong> toggle controls the visibility of the built-in toolbar,
        which includes
        options for switching views and chart types.</p><br />
    <p>
        <strong>Injecting Module:</strong>
    </p>
    <p>
        The pivot table features are segregated into individual modules. To take advantage of chart support,
        we need to inject the <code>PivotChart</code> and <code>ToolBar</code> module using the <code>provide</code> section.
    </p><br />
    <p>
        More information on the pivot chart can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/pivotview/pivot-chart">
            documentation section</a>.
    </p>
</div>

</div>
</template>
<script lang="ts">
import { PivotViewComponent, PivotFieldListComponent, IDataSet, PivotChart, CalculatedField, Toolbar, FieldList } from '@syncfusion/ej2-vue-pivotview';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-vue-charts';
import { Browser, setStyleAttribute, enableRipple, isNullOrUndefined } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ToolbarComponent, ItemDirective, ItemsDirective, SidebarComponent } from "@syncfusion/ej2-vue-navigations";
import { Switch } from '@syncfusion/ej2-buttons';
import { Pivot_Data } from "./data-source";
enableRipple(false);

/* tslint:disable */
declare var require: any;
let displayOptionDropDown: DropDownList;
let primaryViewDropDown: DropDownList;
let isInitial: boolean = false;
let isChecked: boolean = true;
let displayOption: string = 'Both';
let preference: string = 'Chart';
export default {
  components: {
    'ejs-pivotview': PivotViewComponent,
    'ejs-toolbar': ToolbarComponent,
    'e-item': ItemDirective,
    'e-items': ItemsDirective,
    'ejs-pivotfieldlist': PivotFieldListComponent,
    'ejs-sidebar': SidebarComponent
  },
  data: function() {
    return {
      dataSourceSettings: {
        dataSource: Pivot_Data,
        expandAll: false,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
        enableSorting: true
      },
      allowCalculatedField: true,
      enableFieldSearching: true,
      renderMode: 'Fixed',
      width: '100%',
      height: 350,
      toolbar: ['Grid', 'Chart'],
      showToolbar: true,
      displayOption: { view: 'Both', primary: 'Chart' },
      chartSettings: {
        title: 'Sales Analysis',
        chartSeries: { type: 'Column' },
        load: (args: ILoadedEventArgs) => {
          let selectedTheme: string = location.hash.split('/')[1];
          selectedTheme = selectedTheme ? selectedTheme : 'Material';
          args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
          selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
      },
      gridSettings: { columnWidth: 140 }
    };
  },
  mounted() {
    setTimeout(() => {
      let pivotObj = ((this as any).$refs.PivotView).ej2Instances;
      if (pivotObj) {
      if (Browser.isDevice) {
          let sideBar = ((this as any).$refs.sideObj).ej2Instances;
          sideBar.isOpen = false;
          let toolbarObj = ((this as any).$refs.toolbar).ej2Instances;
          toolbarObj.items[3].prefixIcon = 'sb-icons sb-icon-Next pivot-fieldList';
          pivotObj.toolbar = ['Grid', 'Chart', 'FieldList'];
      }
        pivotObj.layoutRefresh();
      }
    }, 700);
  },
  methods: {
    enginePopulated: function () {
        let pivotObj = ((this as any).$refs.PivotView).ej2Instances;
        let fieldlistObj = ((this as any).$refs.PivotFieldList).ej2Instances;
        if (!Browser.isDevice && fieldlistObj && pivotObj) {
            fieldlistObj.update(pivotObj);
        }
    },
    onPivotDataBound: function () {
        let pivotObj = ((this as any).$refs.PivotView).ej2Instances;
        if (document.getElementById('displayOptionddl') && document.getElementById('displayOptionddl') && document.getElementById('toolbar-switch') && !isInitial) {
            isInitial = true;
            displayOptionDropDown = new DropDownList({
              floatLabelType: 'Auto',
              width: 100,
              value: displayOption,
              change: (args: any) => {
                displayOption = args.value;
                if (args.value !== 'Both') {
                  primaryViewDropDown.readonly = true;
                  pivotObj.displayOption = { view: args.value as any };
                } else if (args.value == 'Both') {
                  primaryViewDropDown.readonly = false;
                  pivotObj.displayOption = {
                    view: args.value,
                    primary: primaryViewDropDown.value as any,
                  };
                }
                pivotObj.refresh();
              }
            });
            displayOptionDropDown.appendTo('#displayOptionddl');
            primaryViewDropDown = new DropDownList({
              floatLabelType: 'Auto',
              width: 100,
              value: preference,
              change: (args: any) => {
                preference = args.value;
                if (pivotObj.displayOption.view == 'Both') {
                  pivotObj.displayOption = { view: 'Both', primary: args.value as any };
                  pivotObj.refresh();
                }
              }
            });
            primaryViewDropDown.appendTo('#primaryViewddl');
            let layoutSwitch: Switch = new Switch({
              checked: isChecked,
              cssClass: 'pivot-toolbar-switch',
              change: (args: any) => {
                isChecked = args.checked;
                pivotObj.showToolbar = !pivotObj.showToolbar;
                pivotObj.refresh();
              }
            });
            layoutSwitch.appendTo('#toolbar-switch');
          }
    },
    load: function () {
      let fieldlistObj = ((this as any).$refs.PivotFieldList).ej2Instances;
      if (Browser.isDevice) {
          fieldlistObj.renderMode = 'Popup';
          fieldlistObj.target = '.control-section';
          setStyleAttribute((document.getElementById('PivotFieldList') as any), {
            width: '0',
            height: '0',
            float: 'left',
            'display': 'none'
          });
        }
    },
    dataBound: function () {
      let pivotObj = ((this as any).$refs.PivotView).ej2Instances;
      if (Browser.isDevice) {
        pivotObj.element.style.width = '100%';
        pivotObj.allowCalculatedField = true;
        pivotObj.showFieldList = true;
      }
      pivotObj.tooltip.destroy();
      pivotObj.refresh();
    },
    fieldEnginePopulated: function () {
      let pivotObj = ((this as any).$refs.PivotView).ej2Instances;
      let fieldlistObj = ((this as any).$refs.PivotFieldList).ej2Instances;
      fieldlistObj.updateView(pivotObj);
    },
    beforeCreate: function () {
      let pivotObj = ((this as any).$refs.PivotView).ej2Instances;
      isInitial = false;
      pivotObj.layoutRefresh();
    },
    ToolbarCliked: function (args: any) {
      let sideBar = ((this as any).$refs.sideObj).ej2Instances;
      let toolbarObj = ((this as any).$refs.toolbar).ej2Instances;
      if (args.item.id == "fieldlist") {
          sideBar.toggle();
          toolbarObj.items[3].prefixIcon = sideBar.isOpen ? 'sb-icons sb-icon-Next' : 'sb-icons sb-icon-Previous';
          toolbarObj.items[3].tooltipText = sideBar.isOpen ? 'Collapse Field List' : 'Expand Field List';
      }
      if (Browser.isDevice) {
          sideBar.isOpen = false;
          toolbarObj.items[3].prefixIcon = 'sb-icons sb-icon-Next pivot-fieldList';
      }
    },
    onChange: function () {
      let pivotObj = ((this as any).$refs.PivotView).ej2Instances;
      let sideObj = ((this as any).$refs.sideObj).ej2Instances;
      let pivotContainer = document.getElementById('pivot_container');
      if (pivotContainer) {
        pivotContainer.style.width = sideObj.isOpen ? '64%' : '100%';
      }
      setTimeout(() => {
        pivotObj.layoutRefresh();
      }, 700);
    },
    actionBegin: function (args: any) {
      if (args.actionName == "Show table view") {
        primaryViewDropDown.value = 'Table';
      } else if (args.actionName == "Show chart view") {
        primaryViewDropDown.value = 'Chart';
      }
    }
  },
  provide: {
    pivotview: [CalculatedField, Toolbar, PivotChart, FieldList]
  }
}
</script>

<style scoped>
/deep/ #PivotViewcontainerwrapper {
    height: auto !important;
}

/deep/ .e-bigger .e-tbar-btn .tb-icons {
    font-size: 20px;
}

/deep/ .e-tbar-btn .tb-icons {
    font-family: 'e-icons';
    speak: none;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
}

/deep/ .e-tbar-menu-icon:before {
    content: "\e725";
}

/deep/ #layout_switch {
    align-items: center;
    display: flex;
    gap: 10px;
}

/deep/ .label_option {
    margin-bottom: unset;
}

/deep/ .toolbar-temp {
    margin-left: 10px;
}

/deep/ .display_label {
    margin-right: 10px;
}

/deep/ #pivot_sidebar .e-sidebar.e-right {
    border-left: unset !important;
}

/deep/ #defaultSidebar {
  width: 35% !important;
}

/deep/ #defaultToolbar .sb-icons {
  font-size: 20px !important;
}

/deep/ .pivot-fieldList{
  display: none !important;
}
</style>