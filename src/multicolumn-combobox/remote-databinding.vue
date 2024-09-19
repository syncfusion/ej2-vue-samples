<template>
    <div class="control-section">
        <div class='control-wrapper remote-multicolumn'>
            <div style='padding-top:60px;'>
                <ejs-multicolumncombobox type="text" id='remote' :dataSource="dataSource" :fields="fields" :query="query" placeholder="Select a name" popupHeight="230px" :allowSorting="allowSorting">
                    <e-columns>
                        <e-column field='EmployeeID' header='Employee ID' width="120"/>
                        <e-column field='FirstName' header='Name' width="130"/>
                        <e-column field='Designation' header='Designation' width="120"/>
                        <e-column field='Country' header='Country' width="90"/>
                    </e-columns>
                </ejs-multicolumncombobox>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the remote data-binding supported in the MultiColumn ComboBox.</p>
    </div>

    <div id="description">
        <p>The MultiColumn ComboBox loads the remote data services through the <code>dataSource</code> property. It supports data types such as <code>JavaScript object arrays</code> or <code>DataManager</code>.</p>
        <p>The <code>DataManager</code>, act as an interface between service endpoint and MultiColumn ComboBox will require the following minimal information to interact with the service endpoint properly.</p>
        <ul>
            <li><code>DataManager{'->'}url</code> - Defines the service endpoint to fetch data.</li>
            <li><code>DataManager{'->'}adaptor</code> - Defines the adaptor option. By default, <code>ODataAdaptor</code> is used for
                remote binding.</li>
        </ul>
        <p>The adaptor is responsible for processing response and request from/to the service endpoint.
            <code>@syncfusion/ej2-data</code> package provides some predefined adaptors which are designed to interact with particular
            service endpoints. They are:</p>
        <ul>
            <li><code>UrlAdaptor</code> - Use this to interact any remote services.</li>
            <li><code>ODataAdaptor</code> - Use this to interact with OData endpoints.</li>
            <li><code>ODataV4Adaptor</code> - Use this to interact with OData V4 endpoints.</li>
            <li><code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li>
            <li><code>WebMethodAdaptor</code> - Use this to interact with web methods.</li>
        </ul>
        <p>In this sample, remote data is bound to a collection of employees data as an instance of <code>DataManager</code> and <code>WebApiAdaptor</code>.</p>
    </div>
</template>

<!-- custom code start -->
<style>
    .control-wrapper.remote-multicolumn {
        margin: 0 auto;
        width: 500px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.remote-multicolumn {
            width: 300px;
        }
    }
</style>
<!-- custom code end -->

<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
import data from './dataSource.json';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

export default {
    components: {
        'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
    },
    data: function () {
        return {
            dataSource: new DataManager({ url: 'https://services.syncfusion.com/js/production/api/Employees', adaptor: new WebApiAdaptor, crossDomain: true }),
            query: new Query().select(['FirstName', 'EmployeeID', 'Designation', 'Country']).take(10).requiresCount(),
            fields: { text: 'FirstName', value: 'EmployeeID'},
            allowSorting: false
        }
    }
}
</script>