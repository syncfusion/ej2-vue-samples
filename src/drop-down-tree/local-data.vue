<template>
<div>
    <div class="control-section dropdowntree-local">
        <div class="col-lg-12 content_wrapper">
            <div  class='col-lg-6' style="margin: 0 auto;padding-top: 15px;">
                <div style="width: 250px;margin: 0 auto;">
                    <h4> Hierarchical Data</h4>
                    <ejs-dropdowntree id="ddtlocal" :fields='fields' :popupHeight='height' :placeholder='waterMark'></ejs-dropdowntree>
                </div>
            </div>
            <div  class='col-lg-6' style="margin: 0 auto;padding-top: 15px;">
                <div style="width: 250px; margin: 0 auto;">
                    <h4>List Data</h4>
                    <ejs-dropdowntree id="ddtlist" :fields='listfields' :popupHeight='height' :placeholder='waterMark'></ejs-dropdowntree>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample explains you about the different local data binding supports of the Dropdown Tree component. Click
            the Dropdown Tree element, and then select an item from the hierarchical structure suggestion list.
        </p>
    </div>

   <div id="description">
        <p>The <code>Dropdown Tree</code> component loads the data through the dataSource property, where the data can be
            either local data or remote data. In case of local data, the data structure can be hierarchical data or list
            data (with self-referential format i.e., mapped with the <b>value</b> and <b>parentValue</b> fields).</p>
        <p>In this demo, the first Dropdown Tree is bound with the hierarchical data that contains the array of nested
            objects. And, the second Dropdown Tree is bound with the list type data where the parent-child relation is
            referred by the <b>value</b> and <b>parentValue</b> mapping fields.</p>
    </div>
</div>
</template>
/* custom code start */
<style>
    .control-section.dropdowntree-local,
    .dropdowntree-local .content_wrapper {
        min-height: 350px;
    }
</style>
/* custom code end */
<script>
import { DropDownTreeComponent } from "@syncfusion/ej2-vue-dropdowns";
import dataSource from './local-data.json';

export default {
    components: {
        'ejs-dropdowntree': DropDownTreeComponent
    },
    data: function() {
        return {
            fields: { dataSource: dataSource.hierarchicalData, value: 'code', text: 'name', child: 'countries' },
            listfields: { dataSource: dataSource.localData, value: 'id', parentValue: 'pid', text: 'name', hasChildren: 'hasChild' },
            height: '200px',
            waterMark: 'Select an item',
        };
    }
}
</script>