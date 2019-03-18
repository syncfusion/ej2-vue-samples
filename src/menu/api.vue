<template>
<div>
<div class="col-lg-8 control-section">
    <div class="api-menu-control">
        <ejs-menu ref="menu" id="menu" :items="menuItems" :fields="menuFields"></ejs-menu>
    </div>
</div>
<div class="col-lg-4 menu-section property-section">
    <table id="property" title="Properties" style="width: 100%">
        <tbody>
            <tr>
                <td style="width: 50%;padding-top:10px">
                    <div>Orientation</div>
                </td>
                <td style="width: 50%;padding-top:10px">
                    <div style="max-width: 200px">
                        <ejs-dropdownlist value="Horizontal" :dataSource="modeData" :change="modeChange">
                        </ejs-dropdownlist>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 50%;padding-top:10px">
                    <div>Enable / Disable item</div>
                </td>
                <td style="width: 50%;padding-top:10px">
                    <div style="max-width: 200px">
                        <ejs-multiselect :dataSource="headerData" popupHeight="250px" width="160px" mode="CheckBox" placeholder="Select item" showDropDownIcon=true :change="enableDisableChange">
                        </ejs-multiselect>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="width: 50%;padding-top:15px">
                    <div>Show Item on Click</div>
                </td>
                <td style="width: 50%;padding-top:15px">
                    <ejs-checkbox :change="itemOnClick"></ejs-checkbox>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div id="action-description">
    <p>This sample demonstrates the customization of <code>menu</code> component by using its properties from the property pane. Select any combination of properties from the property pane to customize <code>menu</code> component.</p>
</div>
<div id="description">
    <p>In this demo, default menu is rendered with minimal configuration.</p>
    <p>This sample can be customized further with the combination of <code>menu</code> properties from the property pane. For example,</p>
    <ul>
        <li>You can switch to <b>Vertical</b> and <b>Horizontal</b> modes by clicking and selecting the 
            <code>orientation</code> mode from <i>Orientation</i> dropdownlist.</li>
        <li>You can enable or disable menu items by clicking and selecting the item
            from <i>Enable item</i> or <i>Disable item</i> dropdownlists.</li>
        <li>You can also enable the show menu item on mouse click <code>showItemOnClick</code> property by checking the 
            <i>Show item on Click</i> checkbox.</li>
    </ul>
    <p>
        More information about Menu can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/api/menu">documentation</a> section.
    </p>
</div>
</div>
</template>
<!-- custom code start -->
<style>
    /**
    * ej2 Menu styles
    */
    .api-menu-control {
        margin-top: 45px;
        text-align: center;
    }

    .property-panel-content {
        padding: 0 10px 10px 0;
        overflow: auto;
    }
    
    .property-panel-table .e-multiselect {
        padding: 0;
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { MenuPlugin } from "@syncfusion/ej2-vue-navigations";
import { MultiSelectPlugin, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import * as dataSource from './menu-data.json';

import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MenuPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(MultiSelectPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: function() {
    return {
        menuItems: dataSource.apiData,
            menuFields: {
                text: ['header', 'text', 'value'],
                children: ['subItems', 'options']
            },
            modeData: [
                { text: 'Horizontal', value: 'Horizontal' },
                { text: 'Vertical', value: 'Vertical' }
            ],
            headerData: dataSource.headerData
        };
    },
    methods: {
        modeChange: function(args) {
        this.$refs.menu.orientation = args.value;
        },
        itemOnClick: function(args) {
        this.$refs.menu.showItemOnClick = args.checked;
        },
        enableDisableChange: function(args) {
            if (args.value) {
                this.$refs.menu.enableItems(['Events', 'Movies', 'Directory', 'Queries', 'Services'], true);
                this.$refs.menu.enableItems(args.value, false);
            }
        }
    },
    provide: {
        multiselect: [CheckBoxSelection]
    }
});
</script>