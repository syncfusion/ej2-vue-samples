<template>
<div>
    <div class="col-lg-8 control-section">
        <div class="col-lg-12  content_wrapper" style="height: 350px">
            <div id='content' style="margin: 0 auto; width:280px; padding-top: 30px">
                <ejs-dropdowntree ref="ddtInstance" :fields='fields' :changeOnBlur="false" @change='onchange' :placeholder='waterMark' :popupHeight='height' ></ejs-dropdowntree>
            </div>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%; margin:10px">
            <tr>
                <td style="padding:5px; width:25%">Value</td>
                <td>:<span id='value' style='padding-left:10px'></span></td>
            </tr>
            <tr>
                <td style="padding:5px; width:25%">Text</td>
                <td>:<span id='text' style='padding-left:10px'></span></td>
            </tr>
        </table>
    </div>
    <div id="action-description">
        <p>This sample explains you about the default functionalities of the Dropdown Tree component.
            Click the Dropdown Tree element, and then select an item from the hierarchical structure <code>options</code>
            list.
            The selected item's <code>value</code> and <code>text</code> property values will be shown in the property
            panel.</p>
    </div>
    <div id="description">
        <p>The <code>Dropdown Tree</code> component contains a hierarchical structure list of pre-defined values from that
            the user can
            choose a single value. </p>
        <p>The default sample explains you about the use of Dropdown Tree that allows the end-users to select an item from
            the hierarchical structure <code>options</code> list. The selected item's <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#value">value</a> and
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#text">text</a> property values will be displayed in
            the property panel.
        </p>
    </div>
</div>
</template>

<script>
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";
import dataSource from './default-data.json';

export default {
    components: {
        'ejs-dropdowntree': DropDownTreeComponent
    },
    data: function() {
        return {
           fields: { dataSource: dataSource.defaultData , value: 'id', text: 'name', child: 'subChild' },
           height: '200px',
           waterMark: 'Select a folder or file',
        };
    },
    methods: {
        onchange: function() {
            var defaultObj = this.$refs.ddtInstance.ej2Instances;
            var value = document.getElementById('value');
            var text = document.getElementById('text');
            value.innerHTML = defaultObj.value.toString();
            text.innerHTML = defaultObj.text;
        }
    }
}
</script>