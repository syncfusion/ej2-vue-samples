<template>
    <div class="control-section">
        <div class='control-wrapper grouping-multicolumn'>
            <div style='padding-top:60px;'>
                <ejs-multicolumncombobox type="text" id='grouping' :dataSource="dataSource" :fields="fields" placeholder="Select a name" popupHeight="230px" :allowSorting="allowSorting">
                    <e-columns>
                        <e-column field='Name' header='Name' width="90"/>
                        <e-column field='Position' header='Position' width="85"/>
                        <e-column field='Department' header='Department' width="98"/>
                        <e-column field='PhoneNo' header='Phone No' width="105"/>
                        <e-column field='Location' header='Location' width="98"/>
                    </e-columns>
                </ejs-multicolumncombobox>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates grouping feature of the MultiColumn ComboBox.</p>
    </div>

    <div id="description">
        <p>The MultiColumn ComboBox allows to group the relevant items under a corresponding category by mapping the <code>groupBy</code> property in the <code>fieldSettings</code> which allows to load the list of employees. In this sample, the employee data is grouped against <code>Position</code> column, which illustrates how the orders details are grouped based on its category.</p>
    </div>
</template>

<!-- custom code start -->
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
            dataSource: data['employeeData'],
            fields: { text: 'Name', value: 'Department', groupBy: 'Position' },
        }
    }
}
</script>