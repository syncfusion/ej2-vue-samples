<template>
<div>
    <div class="control-section">
        <div class='content' style="width: 280px;margin: 0 auto; padding-top:15px">
            <ejs-dropdowntree id='filter' :fields='fields' :filterBarPlaceholder="filterPlaceholder"
                :popupHeight='height' :allowFiltering='true' :placeholder='waterMark'></ejs-dropdowntree>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the filtering functionalities of the Dropdown Tree. Click the Dropdown Tree element, and then type a character in the search box. It will display the
            filtered list items based on the typed characters.</p>
    </div>
    <div id="description">
        <p>The Dropdown Tree has the built-in support to filter the data source when the <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/drop-down-tree/#allowfiltering">allowFiltering</a> is enabled. It performs
            when the characters are typed in the search box.</p>
    </div>
</div>
</template>
<script>
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";
import dataSource from './filtering-data.json';

export default {
    components: {
        'ejs-dropdowntree': DropDownTreeComponent
    },
    data: function() {
        return {
            fields: { dataSource: dataSource.filterData, value: 'id', parentValue: 'pid', text: 'name', hasChildren: 'hasChild' },
            height: '200px',
            waterMark: 'Select an item',
            filterPlaceholder: 'Search',
        };
    }
}
</script>