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
Vue.use(ListViewPlugin);
export default Vue.extend({
  data: function() {
    return {
      data: [
        { text: 'Hennessey Venom', id: 'list-01' },
        { text: 'Bugatti Chiron', id: 'list-02' },
        { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
        { text: 'SSC Ultimate Aero', id: 'list-04' },
        { text: 'Koenigsegg CCR', id: 'list-05' },
        { text: 'McLaren F1', id: 'list-06' },
        { text: 'Aston Martin One- 77', id: 'list-07' },
        { text: 'Jaguar XJ220', id: 'list-08' },
        { text: 'McLaren P1', id: 'list-09' },
        { text: 'Ferrari LaFerrari', id: 'list-10' },
      ],
      groupData: [
        {
            'text': 'Audi A4',
            'id': '9bdb',
            'category': 'Audi'
        },
        {
            'text': 'Audi A5',
            'id': '4589',
            'category': 'Audi'
        },
        {
            'text': 'Audi A6',
            'id': 'e807',
            'category': 'Audi'
        },
        {
            'text': 'Audi A7',
            'id': 'a0cc',
            'category': 'Audi'
        },
        {
            'text': 'Audi A8',
            'id': '5e26',
            'category': 'Audi'
        },
        {
            'text': 'BMW 501',
            'id': 'f849',
            'category': 'BMW'
        },
        {
            'text': 'BMW 502',
            'id': '7aff',
            'category': 'BMW'
        },
        {
            'text': 'BMW 503',
            'id': 'b1da',
            'category': 'BMW'
        },
        {
            'text': 'BMW 507',
            'id': 'de2f',
            'category': 'BMW'
        },
        {
            'text': 'BMW 3200',
            'id': 'b2b1',
            'category': 'BMW'
        }
    ],
    fields: { groupBy: 'category' },
    };
  }
});
</script>