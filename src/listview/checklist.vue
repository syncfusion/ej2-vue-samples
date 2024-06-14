<template>
  <div class="checklist control-section">
    <div id="checklist-wrapper">
      <div id = 'flat-list'>
        <p class="displayText">Flat List</p>
        <!-- ListView element -->
        <ejs-listview id='sample-list-flat' :dataSource='data' showCheckBox='true'></ejs-listview>
      </div>
      <div id = 'group-list'>
        <p class="displayText">Group List</p>
        <!-- Group ListView element -->
        <ejs-listview id='sample-list-group' :dataSource='groupData' :fields='fields' showCheckBox='true'></ejs-listview>
      </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the checkbox functionalities of the ListView. Click multiple list item to check or uncheck the items.</p>
    </div>
    <div id="description">
        <p>The ListView component has checkbox feature, which is used to select multiple items from the list. This feature can be enabled using the 
           <code><a target='_blank' class='code' href='https://ej2.syncfusion.com/vue/documentation/api/list-view#showcheckbox'>showCheckBox</a></code>property.</p>
                    
        <p>In this sample, the checkbox is enabled on default list and group list.</p>
    </div>
  </div>
</template>
<style>
#checklist-wrapper {
    width: 85%;
    margin: auto;
    display: flex;
}
#flat-list, #group-list {
  margin: auto;
    width: 40%;
}
.checklist #sample-list-flat,.checklist #sample-list-group {
    border: 1px solid #dddddd;
    border-radius: 3px;
    margin: auto;    
}
.checklist.control-section {
    overflow: auto;
    padding-bottom: 10px;
}
.checklist #flat-list, .checklist #group-list {
    width: 50%;
    padding: 10px;
    margin: auto;
}
.checklist #flat-list {
    float: left;
}
.checklist #group-list {
    float: right;
}
.checklist #flat-list .displayText, .checklist #group-list .displayText {
    padding-left: 15px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    margin-top: 10px;
    margin-bottom: 10px;
}
.checklist .e-listview .e-list-icon {
    height: 24px;
    width: 30px;
}
@media (max-width: 590px) {
    .checklist #flat-list, .checklist #group-list {
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
};
</script>