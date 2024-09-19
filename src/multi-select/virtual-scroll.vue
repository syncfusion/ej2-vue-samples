<template>
<div>
    <div class="control-section col-lg-9">
    <div class="control-wrapper">
        <label class="h4">Local Data</label>
        <ejs-multiselect id='local' ref='localObj' :dataSource='itemData' :mode='boxMode' placeholder='e.g Item 1' :fields='fields' :allowFiltering='allowFiltering' :allowCustomValue='allowCustomValue' :hideSelectedItem='hideSelectedItem' :closePopupOnSelect='closePopupOnSelect' :enableVirtualization='true' popupHeight="200px"></ejs-multiselect>
    </div>
    <div class="control-wrapper">
        <label class="h4">Remote Data</label>
        <ejs-multiselect id='remote' ref='remoteObj' :dataSource='data' :mode='delimiterMode' placeholder='e.g OrderID' :fields='customerfields' :allowFiltering='allowFiltering' :allowCustomValue='allowCustomValue' :hideSelectedItem='hideSelectedItem' :closePopupOnSelect='closePopupOnSelect' :enableVirtualization='true' popupHeight="200px"></ejs-multiselect>
    </div>
    <div class="control-wrapper">
        <label class="h4">Default Values</label>
        <ejs-multiselect id='default' ref='defaultObj' :dataSource='itemData' :value='chipValue' :mode='defaultMode' placeholder='e.g Item 1' :fields='fields' :allowFiltering='allowFiltering' :allowCustomValue='allowCustomValue' :hideSelectedItem='hideSelectedItem' :closePopupOnSelect='closePopupOnSelect' :enableVirtualization='true' popupHeight="200px"></ejs-multiselect>
    </div>
    <div class="control-wrapper">
        <label class="h4">Grouping</label>
        <ejs-multiselect id='group' ref='groupObj' :dataSource='itemData' :mode='multiMode' placeholder='e.g Item 1' :enableSelectionOrder='enableSelectionOrder' :fields='groupfields' :allowFiltering='allowFiltering' :allowCustomValue='allowCustomValue' :enableVirtualization='true' popupHeight="200px"></ejs-multiselect>
    </div>
    <div class="control-wrapper">
        <label class="h4">Template</label>
        <ejs-multiselect id='template' ref='templateObj' :dataSource='itemData' :mode='defaultMode' placeholder='e.g Item 1' :fields='fields' :allowFiltering='allowFiltering' :allowCustomValue='allowCustomValue' :hideSelectedItem='hideSelectedItem' :closePopupOnSelect='closePopupOnSelect' :enableVirtualization='true' popupHeight="200px" :headerTemplate="'hTemplate'" :itemTemplate="'iTemplate'" :valueTemplate="'vTemplate'">
            <template v-slot:hTemplate="{data}">
                <div class="header"><span style="margin-left:17px">Items Info</span></div>
              </template>
              <template v-slot:iTemplate="{data}">
                <div class="ename" style="height: 40px"> {{data.text}}  </div>
              </template>
              <template v-slot:vTemplate="{data}">
                <div class="name"> {{data.text}} </div>
              </template>
        </ejs-multiselect>
    </div>
</div>
<div class="col-lg-3 property-section">
    <div id="property" title="Properties">
        <table id="property" title="Properties">
            <tbody>
                <tr>
                    <td style="width: 50%;">
                        <div>
                            <ejs-checkbox ref="checkboxInstance1" label="AllowFiltering" :checked="true" :change="onChange"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%;">
                        <div>
                            <ejs-checkbox ref="checkboxInstance2" label="AllowCustomValue" :checked="true" :change="onChangeCustom"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%;">
                        <div>
                            <ejs-checkbox ref="checkboxInstance3" label="HideSelectedItem" :checked="true" :change="onChangeHide"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%;">
                        <div>
                            <ejs-checkbox ref="checkboxInstance4" label="ClosePopupOnSelect" :checked="true" :change="onChangeClose"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    <div id="action-description">
        <p>This example demonstrates the virtualization support of the MultiSelect. The component has 150 items bound to it; however, when you open the suggestion list, only few items are loaded based on the popup height, and the remaining items are loaded while scrolling.</p>
    </div>

    <div id="description">
        <p>The <code>MultiSelect</code> component supports virtualization, which improves UI performance for large amounts of data. To enable virtualization, set the <code>enableVirtualization</code> property to true. When virtualization is enabled, ComboBox doesn't render the entire suggestion data source on initial component rendering. It loads the N number of items in the popup on initial rendering and the remaining set number of items will load while scrolling.
            Virtualization works with both local and remote data.</p>
        <p>To perform the virtualization feature in DropDownList, the <code>VirtualSCroll</code> module
            have to be injected in the application end.</p>
    </div>
</div>
</template>
<style scoped>
    .control-section .control-wrapper {
        width: 80%;
        margin: 0 auto;
        width: 250px;
        padding-top: 15px;
        height: 90px !important;
    } 

    .control-wrapper .h4 {
      font-size: 16px;
      margin: 0 0 10px;
      font-weight: bold;
  }

    .header {
        font-weight: 600;
        color: rgba(0, 0, 0, .54);
        height: 48px;
        padding: 15px 0 0 16px;
        font-size: 16px;
        background-color: #f5f5f5;
    }

    /* custom code start*/
    .fabric .header {
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        color: #0078d7;
        font-weight: 400;
    }

    .fluent-dark .header,
    .fluent2-dark .header,
    .fluent2-highcontrast .header {
        background: #252423;
        color: #2899F5;
    }

    .bootstrap5-dark .header {
        background: #343A40;
        color: #7B848D;
    }

    .fluent .header{
         color: #2899F5;
    }

    .tailwind-dark .header {
        background: #374151;
        color: rgb(255, 255, 255);
    }

    .material3-dark .header,
    .material-dark .header {
        background: rgb(66, 66, 66);
        color: rgb(255, 255, 255);
    }

    .fabric-dark .header {
        background: rgb(40, 39, 39);
        color: rgb(255, 255, 255);
    }

    .bootstrap-dark .header {
        background: rgb(49, 49, 49);
        color: rgb(255, 255, 255);
    }

    .bootstrap .header {
        background-color: #f5f5f5;
        border-bottom: 1px solid #ccc;
        color: #777;
        font-family: "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
        font-weight: 600;
        font-size: 15px;
        height: 48px;
        padding: 15px 0 0 16px;
    }

    .highcontrast .header {
        color: #fff;
        background-color: #000;
    }
    
    .bootstrap4 .header {
        color: #6c757d;
    }
    
    .e-bigger.bootstrap .header {
        height: 44px;
        font-size: 13px;
    }
</style>
<script>
import { DropDownListComponent, VirtualScroll, MultiSelectComponent, CheckBoxSelection } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { Query, DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
let records = [];
function dataSource() {
    for (var i = 1; i <= 150; i++) {
        var item = {};
        item.id = 'id' + i;
        item.text = "Item ".concat(i);
        var randomGroup = Math.floor(Math.random() * 4) + 1;
        switch (randomGroup) {
            case 1:
                item.group = 'Group A';
                break;
            case 2:
                item.group = 'Group B';
                break;
            case 3:
                item.group = 'Group C';
                break;
            case 4:
                item.group = 'Group D';
                break;
            default:
                break;
        }
        records.push(item);
    }
}
dataSource();
var remoteData = new DataManager({
    url: 'https://services.syncfusion.com/vue/production/api/VirtualDropdownData',
    adaptor: new UrlAdaptor,
    crossDomain: true
});

//Component registeration
export default {
    name: 'App',
    components: {
        'ejs-multiselect': MultiSelectComponent,
        'ejs-checkbox': CheckBoxComponent,
        "ejs-dropdownlist": DropDownListComponent,
    },
    data (){
        return {
            itemData: records,
            data: remoteData,
            defaultMode: 'Default',
            boxMode: 'Box',
            delimiterMode: 'Delimiter',
            multiMode: 'CheckBox',
            allowFiltering: true,
            allowCustomValue: true,
            hideSelectedItem: true,
            closePopupOnSelect: true,
            enableSelectionOrder: false,
            chipValue: ['id10', 'id50', 'id100', "custom"],
            fields: { value: 'id', text: 'text' },
            customerfields: { text: 'OrderID', value: 'OrderID' },
            groupfields: { groupBy: 'group', text: 'text', value: 'id' },
        }
    },
    methods: {
        onChange: function() {
            var checkboxObj = this.$refs.checkboxInstance1.ej2Instances;
            this.$refs.localObj.ej2Instances.allowFiltering = checkboxObj.checked;
            this.$refs.remoteObj.ej2Instances.allowFiltering = checkboxObj.checked;
            this.$refs.defaultObj.ej2Instances.allowFiltering = checkboxObj.checked;
            this.$refs.groupObj.ej2Instances.allowFiltering = checkboxObj.checked;
            this.$refs.templateObj.ej2Instances.allowFiltering = checkboxObj.checked;
        },
       onChangeCustom: function() {
            var checkboxObj = this.$refs.checkboxInstance2.ej2Instances;
            this.$refs.localObj.ej2Instances.allowCustomValue = checkboxObj.checked;
            this.$refs.remoteObj.ej2Instances.allowCustomValue = checkboxObj.checked;
            this.$refs.defaultObj.ej2Instances.allowCustomValue = checkboxObj.checked;
            this.$refs.groupObj.ej2Instances.allowCustomValue = checkboxObj.checked;
            this.$refs.templateObj.ej2Instances.allowCustomValue = checkboxObj.checked;
        },
        onChangeHide: function() {
            var checkboxObj = this.$refs.checkboxInstance3.ej2Instances;
            this.$refs.localObj.ej2Instances.hideSelectedItem = checkboxObj.checked;
            this.$refs.remoteObj.ej2Instances.hideSelectedItem = checkboxObj.checked;
            this.$refs.defaultObj.ej2Instances.hideSelectedItem = checkboxObj.checked;
            this.$refs.templateObj.ej2Instances.hideSelectedItem = checkboxObj.checked;
        },
        onChangeClose: function() {
            var checkboxObj = this.$refs.checkboxInstance4.ej2Instances;
            this.$refs.localObj.ej2Instances.closePopupOnSelect = checkboxObj.checked;
            this.$refs.remoteObj.ej2Instances.closePopupOnSelect = checkboxObj.checked;
            this.$refs.defaultObj.ej2Instances.closePopupOnSelect = checkboxObj.checked;
            this.$refs.templateObj.ej2Instances.closePopupOnSelect = checkboxObj.checked;
        },
    },
    provide: {
        multiselect: [CheckBoxSelection, VirtualScroll]
    }
    
}
</script>