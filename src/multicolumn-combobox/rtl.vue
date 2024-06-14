<template>
    <div class="control-section">
        <div class='control-wrapper rtl-multicolumn'>
            <div style='padding-top:60px;'>
                <ejs-multicolumncombobox type="text" id='rtl' :dataSource="dataSource" :fields="fields" placeholder="Select an employee" popupHeight="230px" :enableRtl="rtl" >
                    <e-columns>
                        <e-column field='Eimg' header='Employee ID' width="120"/>
                        <e-column field='Name' header='Employee Name' width="160"/>
                        <e-column field='Designation' header='Designation' width="150"/>
                        <e-column field='Country' header='Country' width="100"/>
                    </e-columns>
                </ejs-multicolumncombobox>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>This example demonstrates the RTL support in the MultiColumn ComboBox.</p>
    </div>

    <div id="description">
        <p>The MultiColumn ComboBox has the support to enable the right-to-left (RTL) text direction when the <code>enableRtl</code> property is enabled.</p>
    </div>
</template>

<style>
    .control-wrapper.rtl-multicolumn {
        margin: 0 auto;
        width: 550px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.rtl-multicolumn {
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
            dataSource: data['empList'],
            fields: { text: 'Name', value: 'Designation' },
            rtl: true
        }
    }
}
</script>
