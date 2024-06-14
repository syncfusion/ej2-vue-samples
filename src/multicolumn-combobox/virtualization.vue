<template>
    <div class="control-section">
        <div class='control-wrapper virtualization-multicolumn'>
            <div style='padding-top:55px;'>
                <ejs-multicolumncombobox type="text" id='virtual' :dataSource="dataSource" :enableVirtualization="enableVirtualization" :fields="fields" placeholder="Select an engineer" popupHeight="230px" :gridSettings="gridSettings">
                    <e-columns>
                        <e-column field='TaskID' header='Task ID' width="100"/>
                        <e-column field='Engineer' header='Engineer' width="140"/>
                        <e-column field='Designation' header='Designation' width="130"/>
                        <e-column field='Estimation' header='Estimation' width="120"/>
                        <e-column field='Status' header='Status' width="120"/>
                    </e-columns>
                </ejs-multicolumncombobox>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>This example demonstrates the virtualization support in the MultiColumn ComboBox. It has 150 items bound to it. However, when you open the suggestion list only few items are loaded based on the popup height and the remaining items are loaded while scrolling.</p>
    </div>

    <div id="description">
        <p>The MultiColumn ComboBox supports virtualization, which improves UI performance for large amounts of data. To enable virtualization, set the <code>enableVirtualization</code> property to <code>true</code>. When virtualization is enabled, MultiColumn ComboBox doesn't render the entire suggestion data source on initial rendering. It loads the N number of items in the popup on initial rendering and the remaining set number of items will load while scrolling. Virtualization works with both local and remote data.</p>
    </div>
</template>

<style>
    .control-wrapper.virtualization-multicolumn {
        margin: 0 auto;
        width: 550px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.virtualization-multicolumn {
            width: 300px;
        }
    }
</style>

<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
import data from './dataSource.json';

let names = ["John", "Alice", "Bob", "Mario Pontes", "Yang Wang", "Michael", "Nancy", "Robert King"];
let hours = [8, 12, 16];
let status = ["Pending", "Completed", "In Progress"];
let designation = ["Engineer", "Manager", "Tester"];
let records = [];
function datas() {
    for (var i = 1; i <= 150; i++) {
        records.push({
                    TaskID: i,
                    Engineer: names[Math.floor(Math.random() * names.length)],
                    Designation: designation[Math.floor(Math.random() * designation.length)],
                    Estimation: hours[Math.floor(Math.random() * hours.length)],
                    Status: status[Math.floor(Math.random() * status.length)]
                });
    }
};
datas();
export default {
    components: {
        'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
    },
    data: function() {
        return {
            dataSource: records,
            enableVirtualization: true,
            gridSettings: { rowHeight: 40 },
            fields: { text: 'Engineer', value: 'TaskID'}
        }
    }
}
</script>