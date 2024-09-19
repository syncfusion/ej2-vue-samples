<template>
    <div class="control-section">
        <div class='control-wrapper rtl-multicolumn'>
            <div style='padding-top:60px;'>
                <ejs-multicolumncombobox type="text" id='rtl' :dataSource="dataSource" :fields="fields" placeholder="Select a title" popupHeight="230px" :enableRtl="rtl" >
                    <e-columns>
                        <e-column field='Title' header='Title' width="200"/>
                        <e-column field='Author' header='Author' width="150"/>
                        <e-column field='Genre' header='Genre' width="100"/>
                        <e-column field='PublishedYear' header='Published Year' width="125"/>
                        <e-column field='Price' header='Price' width="80"/>
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

<!-- custom code start -->
<style>
    .control-wrapper.rtl-multicolumn {
        margin: 0 auto;
        width: 680px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.rtl-multicolumn {
            width: 300px;
        }
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
    data: function() {
        return {
            dataSource: data['bookDetails'],
            fields: { text: 'Title', value: 'Author' },
            rtl: true
        }
    }
}
</script>
