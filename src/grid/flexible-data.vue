<template>
    <div class="control-section">
        <div id="action-description">
            <p>This sample demonstrates how to bind a data from various remote services to the Grid component.
            </p>
        </div>

        <div class="col-lg-9 control-section">
            <div v-html="payloadInfo" id="payload-detail"></div>
            <ejs-grid ref='dataGrid' :dataSource="data" :allowPaging='true'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width='140'></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right"></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width='140'></e-column>
                </e-columns>
            </ejs-grid>
        </div>

        <div class="col-lg-3 property-section e-flexible-grid-panel e-mac">
            <div>
                <table id="property" title="Properties" style="width: 100%">
                    <tr style="height: 50px">
                        <td style="width : 50%">
                            <div class="prop-name">Service</div>
                        </td>
                        <td style="width : 50%; ">
                            <div class="prop-value">
                                <ejs-dropdownlist ref='dropdown' id='service_drop' :dataSource='serviceURL'
                                    popupWidth='auto' :fields='fields' :change='serviceChange'
                                    :value='adaptorValue'></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 50%">
                            <div class="prop-name">Adaptor</div>
                        </td>
                        <td style="width : 50%;">
                           <div><input class="e-input" style="width : 100%" type="text" readonly="true" id="adaptor_txt"
                                    :value='adaptorName' aria-label="Adaptor"></div>
                        </td>
                    </tr>
                    <tr style="height: 40px">
                        <td colspan="2">
                            <ejs-checkbox ref="chkbox" checked=true label="Enable Paging"></ejs-checkbox>
                        </td>
                    </tr>
                    <tr class="params_show_hide" style="height: 40px">
                        <td style="width : 50%" colspan="2">
                            <div class="prop-name" style="font-size: 15px;">Additional Parameters</div>
                        </td>
                        <td style="width : 50%;">
                        </td>
                    </tr>
                    <tr class="params_show_hide" style="height: 50px">
                        <td style="width : 50%">
                            <div><input class="e-input" style="width : 100%" type="text" id="paramsKey"
                                    placeholder="Enter Name"></div>
                        </td>
                        <td style="width : 50%;">
                            <div>
                                <input class="e-input" style="width : 100%" type="text" id="paramsValue"
                                    placeholder="Enter Value">
                            </div>
                        </td>
                    </tr>
                    <tr class="params_show_hide" style="height: 50px">
                        <td style="width : 50%">
                            <div class="prop-name">
                                <ejs-button style=" width :100%;" data-ripple="true" id="additionalParams"
                                    cssClass='samplebtn e-control e-btn e-primary' v-on:click='parameterOnClick'
                                    >Add</ejs-button>
                            </div>
                        </td>
                        <td style="width : 50%;">
                            <div>
                                <textarea style="width: 100%; height: 45px;" class="e-input e-textarea" rows="2" id="addParams" readonly aria-label="Additional parameter"
                                    ></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr class="params_show_hide header_show_hide" style="height: 40px">
                        <td style="width: 50%" colspan="2">
                            <div class="prop-name" style="font-size: 15px;">HTTP Headers</div>
                        </td>
                    </tr>
                    <tr class="params_show_hide header_show_hide" style="height: 50px">
                        <td style="width : 50%">
                            <div>
                                <input class="e-input" style="width : 100%" type="text" id="hkey" placeholder="Enter Key">
                            </div>
                        </td>
                        <td style="width : 50%;">
                            <div>
                                <input class="e-input" style="width : 100%" type="text" id="hvalue"
                                    placeholder="Enter Value">
                            </div>
                        </td>
                    </tr>
                    <tr class="params_show_hide header_show_hide" style="height: 50px">
                        <td style="width : 50%">
                            <div class='e-flexible-grid-add'>
                                <ejs-button style=" width :100%;" data-ripple="true" id="headerId"
                                    cssClass='samplebtn e-control e-btn e-primary' v-on:click='headerOnClick'
                                    >Add</ejs-button>
                            </div>
                        </td>
                        <td style="width : 50%;">
                            <div>
                                <textarea style="width: 100%; height: 45px;" class="e-input e-textarea" rows="2" id="hdvalue" readonly aria-label="HTTP headers"
                                    ></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width : 50%;" colspan="2">
                            <div>
                                <ejs-button style="width:100%" data-ripple="true" id="validateSubmit"
                                    ref="connect" cssClass='samplebtn e-control e-btn e-primary'
                                    v-on:click='connectOnclick'>Connect</ejs-button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div id="description">
            <p>The Grid supports data binding. The <code><a target="_blank" class="code"
                                    href="https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource">
                            dataSource</a></code> property can be assigned with the instance of <code><a target="_blank" class="code"
                                href="http://ej2.syncfusion.com/documentation/data/api-dataManager.html">
                            DataManager</a></code> to bind remote data.</p>

            <p>The DataManager, which will act as an interface between the service endpoint and the Grid, will require the
                below
                minimal information to interact with service endpoint properly.
            </p>
            <ul>
                <li><code>DataManager->url</code> - Defines the service endpoint to fetch data</li>
                <li><code>DataManager->adaptor</code> - Defines the adaptor option.</li>
            </ul>
            <p><a target="_blank" href="https://ej2.syncfusion.com/documentation/data/adaptors/">Adaptor</a> is responsible
                for
                processing response and request from/to the service endpoint.
                <code>@syncfusion/ej2-data</code> package provides some predefined adaptors which are designed to interact
                with
                particular service endpoints. They are,
            </p>
            <ul>
                <li><code>UrlAdaptor</code> - Use this to interact any remote services. This is the base adaptor for all
                    remote
                    based
                    adaptors.</li>
                <li><code>ODataV4Adaptor</code> - Use this to interact with OData V4 endpoints.</li>
                <li><code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li>
                <li>Own Service - Custom databinding is used where data actions like paging, sorting are perfromed in
                    <code>dataStateChange</code> event of grid.
                </li>
            </ul>
            <p>By default ODataV4Adaptor is used in this demo. The adaptor type will be automatically assigned based on the
                selected
                data service. </p> <br>
            <p>The dataSource of grid can be dynamically changed using <code>changeDataSource</code> method by following the
                below
                steps</p>
            <ul>
                <li>Select any URL from the <b>Service</b> dropdown.</li>
                <li>To enable or disable the paging feature, check or uncheck the <b>Enable Paging</b> checkbox.</li>
                <li>Enter the <b>name</b> and <b>value</b> in the respective input boxes, then click the <b>Add</b> button to send
                    extra parameters with the grid query.
                    However, note that this demonstration only covers the <b>skip</b> and <b>take</b> query from the additional
                    parameters, excluding the custom binding feature.</li>
                <li>In this demo, if you enable pagination by checking the <b>Enable Paging</b> checkbox, the additional parameter of
                <b>skip</b> and <b>take</b> query will not be processed separately,
                    as it will be processed inbuilt with the pagination feature.</li>
                <li>To add http request headers enter the <b>key</b> and <b>value</b> in the respective input fields and
                    click the <b>Add</b> button.</li>
                <li>In this demo, custom headers are not included in the payload information due to the limitations of both
                    the OData service and the custom binding service.
                    These services do not accept any additional headers based on the CORS policy. To send HTTP headers, it
                    is important to ensure the CORS policy in your service.</li>
                <li>Multiple headers and parameters can be added as well.</li>
                <li> Press the <b>Connect</b> button to update the grid dataSource.</li>
                <li>The connected service with the respective adaptor, the parameters and header that passed along with the
                    grid query will be listed under <b>Payload Information.</b></li>
            </ul>
            <p>
                More information on the data binding can be found in this
                <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/grid/data-binding/data-binding/">documentation
                    section</a>.
            </p>
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 590px) {
    #property tr:nth-child(3) {
        display: none;
    }
}

.hide_elem {
    display: none;
}

#numericbox {
    min-width: 130px;
}

.prop-name {
    padding-right: 10px;
}

.e-mac-safari .e-flexible-grid-panel.e-mac .prop-value {
    width: 100px !important;
}

#payload-detail {
    word-wrap: break-word;
    margin-bottom: 10px;
    border: 1px solid rgb(215, 215, 215);
    padding: 10px;
}

.e-flexible-grid-panel {
    padding-left: 5px !important;
    padding-right: 5px !important;
}

.e-flexible-grid-panel .property-panel-table div {
    padding: 10px 0 0 10px !important;
}

.e-flexible-grid-panel .e-flexible-grid-add,
.e-flexible-grid-panel .prop-name {
    padding-right: 10px !important;
}
</style>

<script >
import { createApp } from "vue";
import { GridComponent, ColumnsDirective, ColumnDirective, Grid, Filter, Page, Selection, ColumnModel, CheckBoxChangeEventArgs, DataResult, DataStateChangeEventArgs, Sorts } from "@syncfusion/ej2-vue-grids";
import { Ajax, removeClass, addClass } from '@syncfusion/ej2-base';
import { DropDownList, DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxComponent, ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DataManager, WebApiAdaptor, UrlAdaptor, ODataV4Adaptor, Query } from "@syncfusion/ej2-data";

if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    document.body.classList.add('e-mac-safari');
}
export default {
    components: {
        'ejs-grid': GridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-checkbox': CheckBoxComponent,
        'ejs-button': ButtonComponent
    },
    data: () => {
        return {
            payloadInfo: "<b><u>Payload Information</u></b><br> Service URL: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/' <br> Adaptor Type: ODataV4Adaptor",
            changedAdaptor: 'ODataV4Adaptor',
            selectedService: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
            defaultParam: '',
            defaultHeader: '',
            params: '',
            header: '',
            ajax: new Ajax({
                type: 'GET',
                mode: true,
                onFailure: () => {
                    return false;
                },
            }),
            BASE_URL: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
            serviceURL: [
                { text: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/', value: 'ODataV4Adaptor' },
                { text: 'https://services.syncfusion.com/vue/production/api/Orders', value: 'WebApiAdaptor' },
                { text: 'https://services.syncfusion.com/js/production/api/UrlDataSource', value: 'UrlAdaptor' },
                { text: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders', value: 'Custom Binding' }
            ],
            defaultColumns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
                { field: 'CustomerID', width: 140, headerText: 'Customer ID' },
                { field: 'EmployeeID', headerText: 'Employee ID', width: 120, textAlign: 'Right' },
                { field: 'ShipCity', headerText: 'Ship City', width: 140 },
            ],
            empColumns: [
                { field: 'EmployeeID', headerText: 'Employee ID', width: 130, textAlign: 'Right' },
                { field: 'Employees', headerText: 'Employee Name', width: 150 },
                { field: 'Designation', headerText: 'Designation', width: 130 },
                { field: 'CurrentSalary', headerText: 'Current Salary', format: "C2", textAlign: 'Right', width: 140 }
            ],
            adaptorValue: 'ODataV4Adaptor',
            adaptorName: 'ODataV4Adaptor',
            fields: { text: 'text', value: 'value' },
            data: new DataManager({
                url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
                adaptor: new ODataV4Adaptor(),
                crossDomain: true
            }),
        }
    },
    methods: {
        serviceChange: function (args) {
            this.changedAdaptor = this.$refs.dropdown.$el.ej2_instances[0].value;
            this.selectedService = this.$refs.dropdown.$el.ej2_instances[0].text;
            this.adaptorName = this.$refs.dropdown.$el.ej2_instances[0].value;
            let paramElements = document.querySelectorAll('.params_show_hide');
            let headerElements = document.querySelectorAll('.header_show_hide');
            removeClass(paramElements, 'hide_elem');
            removeClass(headerElements, 'hide_elem');
            if (this.changedAdaptor === 'Custom Binding') {
                addClass(paramElements, 'hide_elem');
            }
        },
        httpAdditionalInfo: (name, val, btn) => {
            let parameterKey = document.getElementById(name).value;
            let parameterValue = document.getElementById(val).value;
            parameterKey && parameterValue ? document.getElementById(btn).value += `{"${parameterKey}": "${parameterValue}"}\n` : null;
            document.getElementById(name).value = '';
            document.getElementById(val).value = '';
        },
        async executeCustomData(state) {
            let result = await this.getData(state);
            this.$refs.dataGrid.ej2Instances.changeDataSource(result, this.defaultColumns);
        },
        parameterOnClick: function () {
            this.httpAdditionalInfo("paramsKey", "paramsValue", "addParams")
        },
        headerOnClick: function () {
            this.httpAdditionalInfo("hkey", "hvalue", "hdvalue")
        },
        createObjectArray: (headers) => {
            let result = headers
                .trim()
                .split('\n')
                .map((head) => JSON.parse(head));
            return result;
        },
        getData: function (state) {
            this.changedAdaptor = this.$refs.dropdown.$el.ej2_instances[0].value;
            this.defaultParam = document.getElementById("addParams").value
            this.params = this.defaultParam ? this.createObjectArray(this.defaultParam) : [];
            var pageQuery = `$skip=${state.skip}&$top=${state.take}`;
            if (this.$refs.chkbox.ej2Instances.checked) {
                this.ajax.url = this.BASE_URL + "?" + pageQuery + "&$count=true";
            }
            else {
                this.ajax.url = this.BASE_URL + "?" + "&$count=true";
            }
            return this.ajax.send().then((response) => {
                let data = JSON.parse(response);
                return { result: data['value'], count: parseInt(data['@odata.count'], 10) };
            });
        },
        connectOnclick: function (e) {
            var grid = this.$refs.dataGrid.ej2Instances;
            grid.query.params = [];
            grid.query.queries = [];
            this.defaultParam = document.getElementById("addParams").value
            this.defaultHeader = document.getElementById('hdvalue').value;
            this.header = this.defaultHeader ? this.createObjectArray(this.defaultHeader) : [];
            this.params = this.defaultParam ? this.createObjectArray(this.defaultParam) : [];
            let newDataSource;
            let checkboxState = this.$refs.chkbox.ej2Instances.checked;
            let newQuery = new Query();
            this.params.forEach((obj) => {
                for (const key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        const value = obj[key];
                        newQuery.addParams(key, value);
                        if (this.changedAdaptor !== 'UrlAdaptor' && this.changedAdaptor !== 'Custom Binding' && !checkboxState) {
                            if (key == 'skip') {
                                newQuery.skip(value);
                            }
                            if (key == 'take') {
                                newQuery.take(value);
                            }
                        }
                    }
                }
            });
            grid.setProperties({ query: newQuery, allowPaging: checkboxState }, true);
            grid.setProperties({ allowPaging: checkboxState }, true);
            if (this.changedAdaptor === 'Custom Binding') {
                let state = { skip: 0, take: 12 };
                this.executeCustomData(state);
                grid.dataStateChange = this.executeCustomData;
            }
            else {
                let col = this.changedAdaptor === 'UrlAdaptor' ? this.empColumns : this.defaultColumns;
                if (this.changedAdaptor === 'ODataV4Adaptor') {
                    newDataSource = new DataManager({
                        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
                        adaptor: new ODataV4Adaptor(),
                        headers: this.header,
                        crossDomain: true
                    });
                }
                else if (this.changedAdaptor === 'UrlAdaptor') {
                    newDataSource = new DataManager({
                        url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
                        adaptor: new UrlAdaptor(),
                        headers: this.header,
                        crossDomain: true
                    });
                    grid.query.addParams('dataCount', '1000');
                }
                else if (this.changedAdaptor === 'WebApiAdaptor') {
                    newDataSource = new DataManager({
                        url: 'https://services.syncfusion.com/vue/production/api/Orders',
                        adaptor: new WebApiAdaptor(),
                        headers: this.header,
                        crossDomain: true
                    });
                }
                grid.changeDataSource(newDataSource, col)
            }
            let payloadInfo;
            if (this.changedAdaptor === 'Custom Binding') {
                payloadInfo = `<b><u>Payload Information</u></b><br> Custom Binding <br> Service URL: ${this.selectedService}`;
            }
            else {
                payloadInfo = `<b><u>Payload Information</u></b><br> Service URL: ${this.selectedService} <br> Adaptor Type: ${this.changedAdaptor} <br> Additional Parameters: ${this.defaultParam} <br> Headers: ${this.defaultHeader}`;
            }
            document.getElementById('payload-detail').innerHTML = '';
            document.getElementById('payload-detail').innerHTML += payloadInfo;
            document.getElementById("addParams").value = '';
            document.getElementById("hdvalue").value = '';
        }
    },
    provide: {
        grid: [Page]
    }
};
</script>
