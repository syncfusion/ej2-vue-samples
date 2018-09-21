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

Vue.use(ComboBoxPlugin);

export default Vue.extend ({
    data: function() {
        return {
        countryData: [
                { CountryName: 'Australia', CountryId: '2' },
                { CountryName: 'United States', CountryId: '1' }
        ],
        //define the state ComboBox data
        stateData: [
                { StateName: 'New York', CountryId: '1', StateId: '101' },
                { StateName: 'Queensland', CountryId: '2', StateId: '104' },
                { StateName: 'Tasmania ', CountryId: '2', StateId: '105' },
                { StateName: 'Victoria', CountryId: '2', StateId: '106' },
                { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
                { StateName: 'Washington', CountryId: '1', StateId: '103' }
        ],
        //define the city ComboBox data
        cityData: [
                { CityName: 'Aberdeen', StateId: '103', CityId: 207 },
                { CityName: 'Alexandria', StateId: '102', CityId: 204 },
                { CityName: 'Albany', StateId: '101', CityId: 201 },
                { CityName: 'Beacon ', StateId: '101', CityId: 202 },
                { CityName: 'Brisbane ', StateId: '104', CityId: 211 },
                { CityName: 'Cairns', StateId: '104', CityId: 212 },
                { CityName: 'Colville ', StateId: '103', CityId: 208 },
                { CityName: 'Devonport', StateId: '105', CityId: 215 },
                { CityName: 'Emporia', StateId: '102', CityId: 206 },
                { CityName: 'Geelong', StateId: '106', CityId: 218 },
                { CityName: 'Hampton ', StateId: '102', CityId: 205 },
                { CityName: 'Healesville ', StateId: '106', CityId: 217 },
                { CityName: 'Hobart', StateId: '105', CityId: 213 },
                { CityName: 'Launceston ', StateId: '105', CityId: 214 },
                { CityName: 'Lockport', StateId: '101', CityId: 203 },
                { CityName: 'Melbourne', StateId: '106', CityId: 216 },
                { CityName: 'Pasco', StateId: '103', CityId: 209 },
                { CityName: 'Townsville', StateId: '104', CityId: 210 }
        ],
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