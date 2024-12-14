<template>
    <div class="control-section">
        <div class='control-wrapper sorting-multicolumn'>
            <div style='padding-top:60px;'>
            <label>Select a product</label>
                <ejs-multicolumncombobox type="text" id='sorting' :dataSource="dataSource" :fields="fields" placeholder="e.g. laptop" popupHeight="210px" popupWidth="615px" :allowSorting="allowSorting" :sortOrder="sortOrder" sortType="MultiColumn">
                    <e-columns>
                        <<e-column field='Name' header='Name' width="110"/>
                        <e-column field='Price' header='Price' width="70"/>                       
                        <e-column field='Availability' header='Availability' width="98"/>
                        <e-column field='Category' header='Category' width="95"/>
                        <e-column field='Rating' header='Rating' width="70"/>                        
                    </e-columns>
                </ejs-multicolumncombobox>

            </div>
        </div>
    </div>

    <div id="action-description">
        <p>This example demonstrates the sorting support in the MultiColumn ComboBox.</p>
    </div>

    <div id="description">
        <p>In this sample, you can click the column header to sort/unsort the column. Any field can be selected from the Fields dropdown list and its order can be changed to display headers either in ascending or descending order. Sorting can be enabled using the <code>allowSorting</code> property and the sort order can be customized using the <code>sortOrder</code> property in the MultiColumn ComboBox.</p>
    </div>
</template>

<!-- custom code start -->
<style>
    .control-wrapper.sorting-multicolumn {
        margin: 0 auto;
        width: 250px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.sorting-multicolumn {
            width: 300px;
        }
    }
</style>
<!-- custom code end -->

<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective, SortOrder } from "@syncfusion/ej2-vue-multicolumn-combobox";
import data from './dataSource.json';

export default {
    components: {
        'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
    },
    data: function() {
        return {
            dataSource: data['products'],
            fields: { text: 'Name', value: 'Category' },
            allowSorting: true,
            sortOrder: SortOrder.Ascending,
        }
    }
}
</script>
