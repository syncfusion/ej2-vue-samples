<template>
    <div class="control-section">
        <div class='control-wrapper grouping-multicolumn'>
            <div style='padding-top:60px;'>
                <ejs-multicolumncombobox type="text" id='grouping' :dataSource="dataSource" :fields="fields" placeholder="Select a customer name" popupHeight="230px" :allowSorting="allowSorting">
                    <e-columns>
                        <e-column field='OrderID' header='Order ID' width="80"/>
                        <e-column field='CustomerName' header='Customer Name' width="80"/>
                        <e-column field='Freight' header='Freight' width="80"/>
                        <e-column field='ShipPostalCode' header='Ship PostalCode' width="100"/>
                        <e-column field='ShipCountry' header='ShipCountry' width="120"/>
                    </e-columns>
                </ejs-multicolumncombobox>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates grouping feature of the MultiColumn ComboBox.</p>
    </div>

    <div id="description">
        <p>The MultiColumn ComboBox allows to group the relevant items under a corresponding category by mapping the <code>groupBy</code> property in the <code>fieldSettings</code> which allows to load the list items. In this sample, the order data is grouped against <code>ShipCountry</code> column, which illustrates how the orders details are grouped based on its category.</p>
    </div>
</template>

<style scoped>
    .control-wrapper.grouping-multicolumn {
        margin: 0 auto;
        width: 550px;
    }
    @media screen and (max-width: 480px) {
        .control-wrapper.grouping-multicolumn {
            width: 300px;
        }
    }
</style>

<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
import data from './dataSource.json';
export default {
    components: {
        'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
    },
    data: function() {
        return {
            allowSorting: false,
            dataSource: data['orderDetails'],
            fields: { text: 'CustomerName', value: 'OrderID', groupBy: 'ShipCountry' },
        }
    }
}
</script>