<template>
<div>
    <div class="control-section">
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-combobox ref='countryObj' id='country' :popupHeight='height' :fields='countryFields' :dataSource='countryData' :allowCustom='allowCustom' :change='onChange' :placeholder='countryWaterMark'></ejs-combobox>
        </div>
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-combobox ref='stateObj' id='state' :query='stateQuery' :popupHeight='height' :enabled='stateEnabled' :fields='stateFields' :dataSource='stateData' :allowCustom='allowCustom' :change='onChange1' :placeholder='stateWaterMark'></ejs-combobox>
        </div>
        <div id='content' style="margin: 0px auto; width:300px; padding-top: 40px;">
            <ejs-combobox ref='cityObj' id='city' :query='cityQuery' :popupHeight='height' :enabled='cityEnabled' :fields='cityFields' :dataSource='cityData' :allowCustom='allowCustom' :placeholder='cityWaterMark'></ejs-combobox>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the Cascading functionalities of the ComboBox. Choose a country from countries ComboBox, then respective states will be loaded in the second ComboBox
        and the same has to done between states and cities ComboBox.</p> 
    </div>
    <div id="description">
        <p>The <code>Cascading</code> ComboBox is the series of ComboBox, where the value of one ComboBox depends on the another
        ComboBox value. This can be configured by using the <code>change</code> event of parent ComboBox. Within
        that change event handler, you should load the data to child ComboBox based on the selected value of parent ComboBox.</p>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { Query } from '@syncfusion/ej2-data';
import * as data from './dataSource.json';

Vue.use(ComboBoxPlugin);

export default Vue.extend ({
    data: function() {
        return {
        countryData:data['country'] ,
        //define the state ComboBox data
        stateData:data['state'],
        //define the city ComboBox data
        cityData:data['cities'],
        countryFields: { value: 'CountryId', text: 'CountryName' },
        // maps the state columns to fields property
        stateFields: { value: 'StateId', text: 'StateName' },
        // maps the city columns to fields property
        cityFields: { text: 'CityName', value: 'CityId' },
        height: '220px',
        countryWaterMark: 'Select a country',
        stateWaterMark: 'Select a state',
        cityWaterMark: 'Select a city',
        allowCustom: false,
        countryValue: '',
        stateValue: '',
        cityValue: '',
        stateEnabled: false,
        cityEnabled: false,
        tempQuery: '',
        stateQuery: '',
        cityQuery: ''
        };
    },
    methods: {
        onChange: function() {
            if (this.$refs.countryObj.$el.value === null) {
                // disable the state ComboBox
                this.stateEnabled = false;
                // disable the city ComboBox
                this.cityEnabled = false;
                // clear the existing selection
                this.stateValue = null;
                // clear the existing selection
                this.cityValue = null;
            } else {
                this.stateEnabled = true;
                // query the data source based on country ComboBox selected value
                this.tempQuery = new Query().where('CountryId', 'equal', this.$refs.countryObj.$data.ej2Instances.value);
                this.stateQuery = this.tempQuery;
                // clear the existing selection
                this.stateValue = null;
                // clear the existing selection
                this.cityValue = null;
                // disable the city ComboBox
                this.cityEnabled = false;
            }
            // bind the property change to state ComboBox
            this.$refs.stateObj.dataBind();
            // bind the property change to city ComboBox
            this.$refs.cityObj.dataBind();
        },
        onChange1: function() {
            if (this.$refs.stateObj.$el.value === null) {
                // disable the city ComboBox
                this.cityEnabled = false;
                // clear the existing selection
                this.cityValue = null;
            } else {
                // enable the city ComboBox
                this.cityEnabled = true;
                // query the data source based on state ComboBox selected value
                this.tempQuery = new Query().where('StateId', 'equal', this.$refs.stateObj.$data.ej2Instances.value);
                this.cityQuery = this.tempQuery;
                // clear the existing selection
                this.cityValue = null;
            }
            // bind the property change to city ComboBox
            this.$refs.cityObj.dataBind();
        },
    }
});
</script>