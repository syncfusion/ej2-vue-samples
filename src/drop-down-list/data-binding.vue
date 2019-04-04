<template>
<div>
    <div class="control-section ddl-databinding">
        <div class="col-lg-9 content-wrapper ddl-data-binding">
            <div id='local' class='col-lg-6' style="margin: 0 auto;padding-top: 15px;">
                <div style="width: 250px;margin: 0 auto;">
                    <h4> Local Data</h4>
                    <ejs-dropdownlist id='games' :dataSource='sportsData' :fields='localFields'
                        :placeholder='localWaterMark' :popupHeight='height'></ejs-dropdownlist>
                </div>
            </div>
            <div id='remote' class='col-lg-6' style="margin: 0 auto;padding-top: 15px;">
                <div style="width: 250px; margin: 0 auto;">
                    <h4>Remote Data</h4>
                    <ejs-dropdownlist id='customers' :dataSource='data' :fields='remoteFields' 
                    :query='query' :placeholder='remoteWaterMark' sortOrder='Ascending'></ejs-dropdownlist>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>This sample demonstrates the different data binding supports of the DropDownList. Click the DropDownList element and select an item from the suggestion list. At the very first time, when click on the remote data DropDownList,
        the loader icon will be shown until the remote request get the data from the server and display it.
        </p>
    </div>
    <div id="description">
        <p>The DropDownList loads the data either from the local data sources, or remote data services that is is through the <code>dataSource</code> property. It supports the data type of <code>array</code> or <code>DataManager</code>.
    </p>
    <p>The DataManager that act as an interface between service endpoint and DropDownList, will require the below minimal
        information to interact with the service endpoint properly.
    </p>
    <ul>
        <li><code>DataManager->url</code> - Defines the service endpoint to fetch data</li>
        <li><code>DataManager->adaptor</code> - Defines the adaptor option. By default, <code>ODataAdaptor</code> is used for
            remote binding.</li>
    </ul>
    <p>Adaptor is responsible for processing response and request from/to the service endpoint.
        <code>@syncfusion/ej2-data</code> package provides some predefined adaptors that are designed to interact with the particular
        service endpoints. They are:</p>
    <ul>
        <li><code>UrlAdaptor</code> - Use this to interact any remote services.</li>
        <li><code>ODataAdaptor</code> - Use this to interact with OData endpoints.</li>
        <li><code>ODataV4Adaptor</code> - Use this to interact with OData V4 endpoints.</li>
        <li><code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li>
        <li><code>WebMethodAdaptor</code> - Use this to interact with web methods.</li>
    </ul>
    <p>In this sample, the local data is bound to a collection of sports data, and the remote data is bound to a collection of
        customer data as an instance of <code>DataManager</code>.
    </p>
    </div>
</div>
</template>
<style>
    .property-panel-content {
        padding: 0 10px 10px 0;
    }

    .content {
        width: 43%;
        margin: 0 auto;
        min-width: 185px;
        padding: 25px 0px;
    }

    .control-label {
        padding: 24px 0px 0px 0px;
        font-size: 12px;
        opacity: 0.54;
    }

    .control-section.ddl-databinding,
    .content-wrapper.ddl-data-binding {
        min-height: 350px;
    }
</style>
<script>
import Vue from "vue";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import * as data from './dataSource.json';

Vue.use(DropDownListPlugin);
Vue.use(CheckBoxPlugin);

var remoteData = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

export default Vue.extend ({
    data: function() {
        return {
            localFields: { text: 'Game', value: 'Id' },
            localWaterMark: 'Select a game',
            height: '200px',
            sportsData: data['sportsData'],
            data: remoteData,
            remoteFields: { text: 'FirstName', value: 'EmployeeID' },
            query: new Query().select(['FirstName', 'EmployeeID']).take(10).requiresCount(),
            remoteWaterMark: 'Select a name',
        };
    }
});
</script>