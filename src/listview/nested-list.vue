<template>
  <div class="control-section nestedlist">
    <!-- ListView element -->
    <ejs-listview id='listview' :dataSource='data' :fields='fields' :headerTitle='headerTitle' showIcon='true' showHeader='true'></ejs-listview>
    <div id="action-description">
        <p>This sample demonstrates the nested list functionalities, which allows to navigate
        to the sub list-items by clicking on any item and navigate back to list-item by using top left back icon.
        </p>
    </div>

    <div id="description">
        <p>ListView component supports Nested list. To achieve list navigation, the <code>child</code> property should be defined for the nested list in the array of JSON.</p>

        <p>This sample have Nested folder with the sub folders/files.</p>
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
.nestedlist.control-section {
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
.folder {
    background-repeat: no-repeat;
    background-image: url('./images/file_icons.png');
    background-position: -8px -637px;;
    background-size: 150%;
}

.file {
    background-repeat: no-repeat;
    background-image: url('./images/file_icons.png');
    background-position: -5px -216px;
    background-size: 150%;
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
import { nestedListData } from "./listData";
Vue.use(ListViewPlugin);
export default Vue.extend({
  data: function() {
    return {
      data:nestedListData,
    fields: { iconCss: 'icon', tooltip: 'text'},
    headerTitle: 'Folders',
    };
  }
});
</script>