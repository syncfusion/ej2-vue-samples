<template>
    <div class="control-section">
        <div class='control-wrapper filtering-multicolumn'>
            <div style='padding-top:60px;'>
                <ejs-multicolumncombobox id='filtering' :dataSource="dataSource" :fields="fields" placeholder="Select a name" popupHeight="230px" :filtering="filtering">
                    <e-columns>
                        <e-column field='Name' header='Name' width="100"/>
                        <e-column field='YearOfJoining' header='Year Of Joining' width="120"/>                                                
                        <e-column field='Status' header='Status' width="90"/>
                        <e-column field='Location' header='Location' width="100"/>
                        <e-column field='Experience' header='Experience in Year' width="150"/>                       
                    </e-columns>
                </ejs-multicolumncombobox>
            </div>
        </div>
    </div>

    <div id="action-description">
        <p>This sample demonstrates the built-in support to filter the <code>datasource</code> in the MultiColumn ComboBox.</p>
    </div>

    <div id="description">
        <p>This sample illustrates to query the datasource and pass the resulted data when characters are typed in the search box triggers the <code>filtering</code> event and using the <code>updateData</code> method to display the list of employees in the MultiColumn ComboBox.</p>
    </div>
</template>

<!-- custom code start -->
<style>
    .control-wrapper.filtering-multicolumn {
        margin: 0 auto;
        width: 575px;
    }

    @media screen and (max-width: 480px) {
        .control-wrapper.filtering-multicolumn {
            width: 300px;
        }
    }
</style>
<!-- custom code end -->

<script>
import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-multicolumn-combobox";
import data from './dataSource.json';
import { Query } from '@syncfusion/ej2-data';

export default {
    components: {
        'ejs-multicolumncombobox': MultiColumnComboBoxComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
    },
    data: function() {
        return {
            dataSource: data['workDetails'],
            fields: { text: 'Name', value: 'Experience' },
            query: ''
        }
    },
    methods: {
        filtering: function(e) {
            this.query = new Query();
            this.query = (e.text !== '') ? this.query.where('Name', 'startswith', e.text, true) : this.query;
            e.updateData(this.dataSource, this.query);
        }
    }
}
</script>