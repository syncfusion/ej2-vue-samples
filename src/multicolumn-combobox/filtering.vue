<template>
    <div class="col-lg-8 control-section">
        <div class='control-wrapper filtering-multicolumn'>
            <div style='padding-top:60px;'>
            <label>Select an employee</label>
                <ejs-multicolumncombobox id='filtering' :dataSource="dataSource" :fields="fields" placeholder="e.g. Alice Johnson" popupHeight="210px" popupWidth="660px" :filterType="filterType">
                    <e-columns>
                        <e-column field='Name' header='Name' width="115"/>
                        <e-column field='Department' header='Department' width="125"/>                                                
                        <e-column field='Role' header='Role' width="140"/>
                        <e-column field='Location' header='Location' width="105"/>
                        <e-column field='Experience' header='Experience in Years' width="155"/>                       
                    </e-columns>
                </ejs-multicolumncombobox>
            </div>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <div class="property-panel-header"> Properties </div>
        <div class="property-panel-content">
            <table class="property-panel-table">
                <tbody>
                    <tr>
                        <td> Choose filter type </td>
                        <td style="padding-right: 10px">
                           <ejs-dropdownlist id='filterType' popupHeight="200px" popupWidth="300px" placeholder="select a filter type" :change="change" :dataSource="mccbDropdownListData" :index="0"></ejs-dropdownlist>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the built-in support to filter the <code>datasource</code> in the MultiColumn ComboBox.</p>
    </div>

    <div id="description">
        <p>The <code>MultiColumn ComboBox</code> supports filtering, which allows users to search for and select items by typing keywords. The available items are dynamically filtered based on the input, ensuring quick access to the desired data.</p>
    </div>
</template>

<!-- custom code start -->
<style>
    .control-wrapper.filtering-multicolumn {
        margin: 0 auto;
        width: 250px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.filtering-multicolumn {
            width: 300px;
        }
    }
</style>
<!-- custom code end -->

<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import data from './dataSource.json';
import { Query } from '@syncfusion/ej2-data';


export default {
    components: {
        'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
        'ejs-dropdownlist': DropDownListComponent
    },
    data: function() {
        return {
            dataSource: data['employee'],
            fields: { text: 'Name', value: 'Experience' },
            query: '',
            mccbDropdownListData: ['StartsWith','EndsWith','Contains'],
            filterType: ''
        }
    },
    methods: {
        change: function (args) { 
            this.filterType = args.value; 
        }
    }
}
</script>