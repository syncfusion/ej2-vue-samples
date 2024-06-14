<template>
    <div class="control-section">
        <div class='control-wrapper keyboard-multicolumn'>
            <div style='padding-top:60px;'>
                <ejs-multicolumncombobox type="text" id='keyboard' :dataSource="dataSource" :fields="fields" placeholder="Select an order ID" popupHeight="230px">
                    <e-columns>
                        <e-column field='OrderID' header='Order ID' width="110"/>
                        <e-column field='CustomerID' header='Customer ID' width="130"/>
                        <e-column field='Freight' header='Freight' width="90"/>
                        <e-column field='ShipCountry' header='ShipCountry' width="140"/>
                    </e-columns>
                </ejs-multicolumncombobox>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates keyboard navigations support in the MultiColumn Combobox.</p>
    </div>

    <div id="description">
        <p>To provide users with the ability to navigate, select, and interact with popup data in a MultiColumn ComboBox using keyboard shortcuts for improved accessibility.</p>
        <p>Keyboards Actions :</p>
        <p><ul>
            <li><code>Enter</code>-  Select the focused item and close the popup.</li>
            <li><code>Esc</code>- Close the popup.</li>
            <li><code>Alt + Down Arrow</code>- Open the popup.</li>
            <li><code>Alt + Up Arrow</code>- Close the popup.</li>
            <li><code>Up Arrow</code>- Select the previous item.</li>
            <li><code>Down Arrow</code>- Select the next item.</li>
            <li><code>Home</code>- Select the first item.</li>
            <li><code>End</code>- Select the last item.</li>
            <li><code>Tab</code>- Select the focused item, close the popup, and move to the next focusable element.</li>
            <li><code>Shift + Tab</code>- Select the focused item, close the popup, and move to the previous focusable element.</li>
        </ul></p>
    </div>
</template>

<style>
    .control-wrapper.keyboard-multicolumn {
        margin: 0 auto;
        width: 500px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.keyboard-multicolumn {
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
            dataSource: data['orderDetails'],
            fields: { text: 'OrderID', value: 'CustomerID' },
        }
    }
}
</script>