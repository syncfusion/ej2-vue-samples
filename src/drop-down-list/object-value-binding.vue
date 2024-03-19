<template>
<div>
<div class="col-lg-8 control-section">
    <div class="control-wrapper">
        <div id="default" style='padding-top:75px;'>
            <ejs-dropdownlist id='object' :dataSource='itemData' placeholder='e.g Item 1' :fields='fields' allowObjectBinding='true' v-model="value" popupHeight="200px"></ejs-dropdownlist>
        </div>
    </div>
</div>
<div class="col-lg-4 property-section">
    <textarea id="value" title="Properties" style="width: 100%; margin-top:90px; height: 60px;" readonly >Selected value : {{value}}</textarea>
</div>

<div id="action-description">
    <p>This sample demonstrates the object value binding functionalities of the DropDownList. Click the DropDownList
        element and select an item from the <code>options</code> list.The corresponding object value of the selected
        item is then assigned to the value property.</p>
    In the property panel, the <code>value</code> property of the selected item's will be displayed.
</div>

<div id="description">
    <p>The <code>DropDownList</code> component contains a list of predefined values from that the user can choose a
        single
        value. </p>
    <p>The object value binding sample illustrates the use of DropDownList that allows the end-users to select an item
        from the <code>options</code> list. Once an item is selected, its associated object value is automatically
        assigned to the <code>value</code> property. This behavior is enabled by the <code>allowObjectBinding</code>
        property.</p>
</div>
</div>
</template>
<style scoped>
    .control-wrapper {
        margin: 0 auto;
        width: 250px;
    }

    .property-section .right-side {
        padding-left: 10px;
    }

    .property-section .left-side {
        padding: 5px;
        width: 25%
    }
</style>
<script>
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';
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
export default {
    components: {
        'ejs-dropdownlist': DropDownListComponent
    },
    data: function() {
        return {
            itemData: records,
            fields: { value: 'id', text: 'text' },
            value:null
        };
    }
}
</script>