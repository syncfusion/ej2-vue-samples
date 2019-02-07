<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-combobox id='country' ref='countryObj' :popupHeight='height' :filtering='onFiltering' :allowFiltering='allowFiltering' :noRecordsTemplate='nTemplate' :fields='fields' :dataSource='data' :placeholder='waterMark'></ejs-combobox>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the custom value functionalities of the ComboBox. When the typed character(s) is not present in the list, a button will be shown in the popup list.
        By clicking on this button, the custom value character is added in the existing list as a new item.</p>
    </div>
    <div id="description">
        <p>The ComboBox allows the user to give input as <code>custom value</code> which is not required to
        present in the predefined set of values. By default, this support is enabled by <code>allowCustom</code>
        property. In this case, both text field and value field are considered as same. The custom value will be
        sent to post back handler when a form is about to be submitted.</p>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { Query } from '@syncfusion/ej2-data';
import * as data from './dataSource.json';

Vue.use(ComboBoxPlugin);
Vue.use(ButtonPlugin);

var noTemplateVue = Vue.component("noRecordsTemplate", {
  template: '<div id="nodata"> No matched item, do you want to add it as new item in list? <ejs-button v-on:click.native="onclick">Add New Item</ejs-button></div>',
  data() {
    return {
      data: {},
      customValue: '',
      newItem: ''
    };
  },
  methods: {
        onclick: function() {
            // get the typed characters
            var x=document.getElementById("country").ej2_instances[0];
            this.customValue = x.element.value;
            // make new object based on typed characters
            this.newItem = {'Name': this.customValue, 'Code': this.customValue };
            // new object added to data source.
            x.dataSource.push(this.newItem);
            // close the popup element.
            x.hidePopup();
            // pass new object to addItem method.
            x.addItem(this.newItem);
            // select the newly added item.
            x.value = this.customValue;
        }
 }
});

export default Vue.extend ({
    data: function() {
        return {
            data: data['countries'],
            fields: {text: 'Name', value:'Code'},
            height: '220px',
            waterMark: 'Select a country',
            query: '',
            nTemplate: function(e) {
                return {
                    template: noTemplateVue
                };
            },
            allowFiltering: true,
        };
    },
    methods: {
        onFiltering: function(e) {
            this.query = new Query();
            // frame the query based on search string with filter type.
            this.query = (e.text !== '') ? this.query.where('Name', 'startswith', e.text, true) : this.query;
            // pass the filter data source, filter query to updateData method.
            e.updateData(this.data, this.query);
        }
    }
});
</script>