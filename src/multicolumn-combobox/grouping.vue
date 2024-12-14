<template>
    <div class="control-section">
        <div class='control-wrapper grouping-multicolumn'>
            <div style='padding-top:60px;'>
            <label>Select a product</label>
                <ejs-multicolumncombobox type="text" id='grouping' :dataSource="dataSource" :fields="fields" placeholder="e.g. Laptop" popupHeight="210px" popupWidth="550px" :allowSorting="allowSorting">
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

    <div id="action-description">
        <p>This sample demonstrates grouping feature of the MultiColumn ComboBox.</p>
    </div>

    <div id="description">
        <p>The MultiColumn ComboBox allows to group the relevant items under a corresponding category by mapping the <code>groupBy</code> property in the <code>fieldSettings</code> which allows to load the list of employees. In this sample, the employee data is grouped against <code>Category</code> column, which illustrates how the orders details are grouped based on its category.</p>
    </div>
</template>

<!-- custom code start -->
<style scoped>
    .control-wrapper.grouping-multicolumn {
        margin: 0 auto;
        width: 250px;
    }
    @media screen and (max-width: 480px) {
        .control-wrapper.grouping-multicolumn {
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
            allowSorting: false,
            dataSource: data['products'],
            fields: { text: 'Name', value: 'Name', groupBy: 'Category' },
        }
    }
}
</script>