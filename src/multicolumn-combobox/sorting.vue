<template>
    <div class="control-section">
        <div class='control-wrapper sorting-multicolumn'>
            <div style='padding-top:60px;'>
                <ejs-multicolumncombobox type="text" id='sorting' :dataSource="dataSource" :fields="fields" placeholder="Select a name" popupHeight="230px" :allowSorting="allowSorting" :sortOrder="sortOrder" sortType="MultiColumn">
                    <e-columns>
                        <e-column field='Name' header='Name' width="100"/>
                        <e-column field='YearOfJoining' header='Year Of Joining' width="100"/>                        
                        <e-column field='Status' header='Status' width="60"/>
                        <e-column field='Location' header='Location' width="90"/>
                        <e-column field='Experience' header='Experience in Year' width="120"/>                        
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
        width: 600px;
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
            dataSource: data['workDetails'],
            fields: { text: 'Name', value: 'YearOfJoining' },
            allowSorting: true,
            sortOrder: SortOrder.Ascending,
        }
    }
}
</script>
