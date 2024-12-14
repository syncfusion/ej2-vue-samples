<template>
    <div class="control-section">
        <div class='control-wrapper virtualization-multicolumn'>
            <div style='padding-top:55px;'>
            <label>Select an employee</label>
                <ejs-multicolumncombobox type="text" id='virtual' :dataSource="dataSource" :enableVirtualization="enableVirtualization" :fields="fields" placeholder="e.g. Alice Johnson" popupHeight="210px" popupWidth="530px" :gridSettings="gridSettings">
                    <e-columns>
                        <e-column field='Name' header='Name' width="100"/>
                        <e-column field='Department' header='Department' width="100"/>
                        <e-column field='Role' header='Role' width="90"/>
                        <e-column field='Location' header='Location' width="90"/>
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

<!-- custom code start -->
<style>
    .control-wrapper.virtualization-multicolumn {
        margin: 0 auto;
        width: 250px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.virtualization-multicolumn {
            width: 300px;
        }
    }
</style>
<!-- custom code end -->

<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
import data from './dataSource.json';

let names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Emily Davis"];
let departments = ["HR", "IT", "Finance", "Marketing", "Sales"];
let roles = ["Manager", "Developer", "Analyst", "Consultant", "Executive"];
let locations = ["New York", "San Francisco", "London", "Berlin", "Tokyo"];
let records = [];
function datas() {
    for (var i = 1; i <= 150; i++) {
        records.push({
                Name: names[Math.floor(Math.random() * names.length)],
                Department: departments[Math.floor(Math.random() * departments.length)],
                Role: roles[Math.floor(Math.random() * roles.length)],
                Location: locations[Math.floor(Math.random() * locations.length)]
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
            fields: { text: 'Name', value: 'Name'},
        }
    }
}
</script>