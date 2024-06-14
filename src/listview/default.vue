<template>
  <div class="list-default control-section">
    <div id= "default-wrapper">
      <div id = 'flat-list'>
        <p class="displayText">Flat List</p>
        <!-- ListView element -->
        <ejs-listview id='sample-list-flat' :dataSource='data'></ejs-listview>
      </div>
      <div id = 'group-list'>
        <p class="displayText">Group List</p>
        <!-- Group ListView element -->
        <ejs-listview id='sample-list-group' :dataSource='groupData' :fields='fields'></ejs-listview>
      </div>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the default functionalities of the ListView. Click any item from the list to select and highlight it.</p>
    </div>
    <div id="description">
      <p>The ListView component represents data in interactive hierarchical structure interface across different layouts or views, that also has the features such as data binding, template rendering, and grouping.</p>

      <p>The group list allows you to group the relevant items under a logical category by mapping the <code><a target='_blank' class='code' href='https://ej2.syncfusion.com/vue/documentation/api/list-view/fieldSettings/#groupby'>groupBy</a></code> field.</p>

      <p>In this sample, <b>Cars</b> are grouped based on their <b>Category</b>.</p>
    </div>
  </div>
</template>
<style>
#default-wrapper {
    width: 85%;
    margin: auto;
    display: flex;
}
#flat-list, #group-list {
  margin: auto;
    width: 40%;
}
.list-default #sample-list-flat,.list-default #sample-list-group {
    border: 1px solid #dddddd;
    border-radius: 3px;
    margin: auto;    
}
.list-default.control-section {
    overflow: auto;
    padding-bottom: 10px;
}
.list-default #flat-list, .list-default #group-list {
    width: 50%;
    padding: 10px;
    margin: auto;
}
.list-default #flat-list {
    float: left;
}
.list-default #group-list {
    float: right;
}
.list-default #flat-list .displayText, .list-default #group-list .displayText {
    padding-left: 15px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    margin-top: 10px;
    margin-bottom: 10px;
}
.list-default .e-listview .e-list-icon {
    height: 24px;
    width: 30px;
}
@media (max-width: 590px) {
    .list-default #flat-list, .list-default #group-list {
        width: 100%;
    }
}
</style>
<script>
import { ListViewComponent } from "@syncfusion/ej2-vue-lists";
import { flatData, groupDataList } from "./listData";

export default {
  components: {
    'ejs-listview': ListViewComponent
  },
  data: function() {
    return {
       data: flatData,
     groupData: groupDataList,
    fields: { groupBy: 'category' },
    };
  }
}
</script>