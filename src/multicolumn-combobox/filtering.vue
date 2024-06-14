<template>
    <div class="control-section">
        <div class='control-wrapper filtering-multicolumn'>
            <div style='padding-top:60px;'>
                <ejs-multicolumncombobox id='filtering' :dataSource="dataSource" :fields="fields" placeholder="Select a country" popupHeight="200px" :filtering="filtering">
                    <e-columns>
                        <e-column field='OrderID' header='Order ID' width="110"/>
                        <e-column field='CustomerID' header='Customer ID' width="130"/>
                        <e-column field='Freight' header='Freight' width="90"/>
                        <e-column field='ShipCountry' header='Ship Country' width="140"/>
                    </e-columns>
                </ejs-multicolumncombobox>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the built-in support to filter the <code>datasource</code> in the MultiColumn ComboBox.</p>
    </div>

    <div id="description">
        <p>This sample illustrates to query the datasource and pass the resulted data when characters are typed in the search box triggers the <code>filtering</code> event and using the <code>updateData</code> method to display the list items in the MultiColumn ComboBox.</p>
    </div>
</template>

<style>
    .control-wrapper.filtering-multicolumn {
        margin: 0 auto;
        width: 500px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.filtering-multicolumn {
            width: 300px;
        }
    }
</style>

<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
import data from './dataSource.json';
import { Query } from '@syncfusion/ej2-data';

export default {
    components: {
        'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
    },
    data: function() {
        return {
            dataSource: data['orderDetails'],
            fields: { text: 'ShipCountry', value: 'OrderID' },
            query: ''
        }
    },
    methods: {
        filtering: function(e) {
            this.query = new Query();
            this.query = (e.text !== '') ? this.query.where('ShipCountry', 'startswith', e.text, true) : this.query;
            e.updateData(this.data, this.query);
        }
    }
}
</script>