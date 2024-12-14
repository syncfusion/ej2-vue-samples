<template>
    <div class="col-lg-8 control-section">
        <div class="control-wrapper multicolumn">
            <div style='padding-top:50px;'>
            <label>Select a product</label>
                <ejs-multicolumncombobox type="text" id="default" :dataSource="dataSource" :fields="fields" :value="value" :text="text" :placeholder="placeholder" popupHeight="220px" popupWidth="530px" :change="valueChange" :showClearButton="showClearButton">
                    <e-columns>                        
                        <e-column field='Name' header='Name' width="110"/>
                        <e-column field='Price' header='Price' width="70"/>                       
                        <e-column field='Availability' header='Availability' width="98"/>
                        <e-column field='Category' header='Category' width="95"/>
                        <e-column field='Rating' header='Rating' width="70"/>
                    </e-columns>
                </ejs-multicolumncombobox>
            </div>
        </div>
    </div>
    <div class="col-lg-4 property-section">
        <table id="property" title="Properties" style="width: 100%; margin:10px">
            <tr>
                <td class="left-side">Value</td>
                <td>:<span id='value' class="right-side">{{ value }}</span></td>
            </tr>
            <tr>
                <td class="left-side">Text</td>
                <td>:<span id='text' class="right-side">{{ text }}</span></td>
            </tr>
        </table>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the default functionalities of the <code>MultiColumn ComboBox</code>.</p>
    </div>

    <div id="description">
        <p>The <code>MultiColumn ComboBox</code> allows the user to display detailed information about items in multiple columns. In the above sample, type any character in the MultiColumn ComboBox or click the dropdown icon to choose an product from the options available in the list. The selected item's <code>value</code> and <code>text</code> property values will be shown in the property panel.</p>
    </div>
</template>

<!-- custom code start -->
<style>
    .control-wrapper.multicolumn {
        margin: 0 auto;
        width: 250px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.multicolumn {
            width: 300px;
        }
    }

    .property-section .right-side {
        padding-left: 10px;
    }

    .property-section .left-side {
        padding: 5px;
        width: 25%
    }
</style>
<!-- custom code end -->

<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
import data from './dataSource.json';

export default {
    components: {
        'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
    },
    data:function () {
        return {
            value: 'Electronics',
            text: 'Laptop',
            dataSource: data['products'],
            showClearButton: true,
            fields: { text: 'Name', value: 'Category' },
            placeholder: 'Select any product'
        }
    },
    methods: {
        valueChange: function(args) {
            this.value = args.itemData.value || 'null';
            this.text = args.itemData.text || 'null';
        }
    }
}
</script>