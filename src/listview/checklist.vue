<template>
  <div class="checklist control-section">
    <div id = 'flat-list'>
    <h4>Flat List</h4>
    <!-- ListView element -->
    <ejs-listview id='sample-list-flat' :dataSource='data' showCheckBox='true'></ejs-listview>
    </div>
    <div id = 'group-list'>
    <h4>Group List</h4>
    <!-- Group ListView element -->
    <ejs-listview id='sample-list-group' :dataSource='groupData' :fields='fields' showCheckBox='true'></ejs-listview>
    </div>
   <div id="action-description">
        <p>This sample demonstrates the checkbox functionalities of the ListView. Click multiple list item to check or uncheck the items.</p>
    </div>

    <div id="description">
        <p>ListView component support checkbox feature which used to select multiple items from the list. This feature can be
		enabled by the property <code>showCheckBox</code>.</p>

        <p>In this sample, the checkbox is enabled on default list and group list.</p>
    </div>
  </div>
</template>
<style>
#sample-list {
    max-width: 500px;
}
#sample-list,#sample-list-flat,#sample-list-group {
    border: 1px solid #dddddd;
    border-radius: 3px;
    margin: auto;    
}
.checklist.control-section {
    overflow: auto;
    padding-bottom: 10px;
}
#flat-list, #group-list {
    width: 50%;
    padding: 10px;
    margin: auto;
}
#flat-list {
    float: left;
}
#group-list {
    float: right;
}
#flat-list h4, #group-list h4 {
    padding-left: 15px;
}
.e-listview .e-list-icon {
    height: 24px;
    width: 30px;
}
#listview {
    max-width: 500px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}
@media (max-width: 590px) {
    #flat-list, #group-list {
        width: 100%;
    }
}
</style>
<script>
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import { flatData, groupDataList } from "./listData";
Vue.use(ListViewPlugin);
export default Vue.extend({
  data: function() {
    return {
      data: flatData,
     groupData: groupDataList,
    fields: { groupBy: 'category' },
    };
  }
});
</script>