<template>
  <div class="control-section nestedlist">
    <!-- ListView element -->
    <ejs-listview id='listview' :dataSource='data' :fields='fields' :headerTitle='headerTitle' showIcon='true' showHeader='true'></ejs-listview>
    <div id="action-description">
        <p>This sample demonstrates the nested list functionalities, which allows you to navigate to the sub list items by clicking any item and navigating back to the list item using the back icon at the top left.
        </p>
    </div>

    <div id="description">
        <p>The ListView component supports nested list. To achieve list navigation, the <code><a target='_blank' class='code' href='https://ej2.syncfusion.com/vue/documentation/api/list-view/fieldSettings/#child'>child</a></code> property should be defined for the nested list in the array of JSON.</p>
    
        <p>This sample have nested folder with the sub folders or files.</p>
    </div>
</div>
</template>
<style>
.nestedlist.control-section {
    overflow: auto;
    padding-bottom: 10px;
}
.nestedlist .e-listview .e-list-icon {
    height: 24px;
    width: 30px;
}
.nestedlist #listview {
    max-width: 500px;
    margin: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}
.nestedlist .folder {
    background-repeat: no-repeat;
    background-image: url('../images/icons/file_icons.png');
    background-position: -8px -637px;;
    background-size: 150%;
}

.nestedlist .file {
    background-repeat: no-repeat;
    background-image: url('../images/icons/file_icons.png');
    background-position: -5px -216px;
    background-size: 150%;
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