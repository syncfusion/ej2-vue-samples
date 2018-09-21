<template>
<div>
    <div class="control-section">
        <div class='control-wrapper' style='width: 250px; margin: 0 auto'>
            <div style='padding-top: 35px;'>
                <ejs-dropdownlist id='country' :dataSource='country' :fields='countryFields' :change='onChange1' popupHeight='auto' :placeholder='countryWaterMark'></ejs-dropdownlist>
            </div>
            <div style='padding-top: 35px;'>
                <ejs-dropdownlist id='state' :dataSource='state' :fields='stateFields' :change='onChange2' :placeholder='stateWaterMark' popupHeight='auto'
                    :enabled='stateEnabled' :query="stateQuery" :text="stateText"></ejs-dropdownlist>
            </div>
            <div style='padding-top: 35px;'>
                <ejs-dropdownlist id='city' :dataSource='cities' :fields='cityFields' :placeholder='cityWaterMark' popupHeight='auto'
                    :enabled='cityEnabled' :query='cityQuery' :text='cityText'></ejs-dropdownlist>
            </div>
        </div>
    </div>
    <div id="action-description">    
        <p>This sample demonstrates the Cascading functionalities of the DropDownList. Choose a country from the countries DropDownList, then respective states will be loaded in the second DropDownList
            and the same has to be done between states and cities DropDownList.</p>   
    </div>
    <div id="description">
        <p>The <code>Cascading</code> DropDownList is the series of DropDownList, where the value of one DropDownList depends on
            the another DropDownList value. This can be configured by using the <code>change</code> event of parent DropDownList.
            Within that change event handler, you should load the data to child DropDownList based on the selected value of parent
            DropDownList.
        </p>

        <p>In this sample, if a country is selected from countries DropDownList, the respective states will be loaded in the second DropDownList
            and the same has to be done between states and cities DropDownList.</p>
        <p> More information on the Cascading feature configuration can be found in the
            <a href="http://ej2.syncfusion.com/angular/documentation/drop-down-list/how-to.html#configure-the-cascading-combobox" target="_blank"> documentation section</a>.
        </p>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { Query } from '@syncfusion/ej2-data';

Vue.use(MultiSelectPlugin);

export default Vue.extend ({
    data: function() {
        return {
            countryFields: { value: 'CountryId', text: 'CountryName' },
            countryWaterMark: 'Select a country',
            country: [
                { CountryName: 'Australia', CountryId: '2' },
                { CountryName: 'United States', CountryId: '1' }
            ],
            stateFields: { value: 'StateId', text: 'StateName' },
            stateWaterMark: 'Select a state',
            stateEnabled: false,
            stateQuery: null,
            stateText: null,
            state: [
                { StateName: 'New York', CountryId: '1', StateId: '101' },
                { StateName: 'Queensland', CountryId: '2', StateId: '104' },
                { StateName: 'Tasmania ', CountryId: '2', StateId: '105' },
                { StateName: 'Victoria', CountryId: '2', StateId: '106' },
                { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
                { StateName: 'Washington', CountryId: '1', StateId: '103' }
            ],
            cityFields: { text: 'CityName', value: 'CityId' },
            cityWaterMark: 'Select a city',
            cityEnabled: false,
            cityQuery: null,
            cityText: null,
            cities: [
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
            ]
        };
    },
    methods: {
        onChange1: function(args) {
            // disable the state DropDownList
            this.stateEnabled = true;
            // frame the query based on selected value in country DropDownList.
            var tempQuery = new Query().where('CountryId', 'equal', args.value);
            // set the framed query based on selected value in country DropDownList.
            this.stateQuery = tempQuery;
            // set null value to state DropDownList text property
            this.stateText = null;
            // set null value to city DropDownList text property
            this.cityText = null;
            // disable the city DropDownList
            this.cityEnabled = false;
        },
        onChange2: function(args) {
            // enable the city DropDownList
            this.cityEnabled = true;
            // Query the data source based on state DropDownList selected value
            var tempQuery1 = new Query().where('StateId', 'equal', args.value);
            // set the framed query based on selected value in city DropDownList.
            this.cityQuery = tempQuery1;
            //clear the existing selection
            this.cityText = null;
        }
    }
});
</script>