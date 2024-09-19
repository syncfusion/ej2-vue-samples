<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>This sample demonstrates the usage of the empty record template in the DataGrid. In this sample, we show a custom image in the place of the default no-record message typically shown by the DataGrid.</p>
        </div>

        <div>
            <ejs-grid :dataSource="data" :emptyRecordTemplate="'emptyRecordTemplate'" :editSettings='editSettings' :toolbar='toolbar' :allowPaging='true'
                :pageSettings='pageSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width='120' :validationRules='customeridrules'></e-column>
                    <e-column field='Freight' headerText='Freight' width='180' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
                    <e-column field='OrderDate' headerText='Order Date' width='130' editType='datetimepickeredit' :format='formatoptions' textAlign='Right'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editparams'></e-column>
                </e-columns>
                <template v-slot:emptyRecordTemplate>
                    <div class='emptyRecordTemplate'>
                        <img v-bind:src="imageSrc()" class="e-emptyRecord" alt="No record">
                        <span>There is no data available to display at the moment.</span>
                    </div>
                </template>
            </ejs-grid>
        </div>

        <div id="description">
            <p>The DataGrid provides a way to use a custom content when it has no data to present.
                The <code>emptyRecordTemplate</code> property accepts either a string or an HTML element ID value, which will be used as the template when there's no data.</p>
            <p>
                More information on the data binding can be found in this 
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/grid/data-binding/data-binding">documentation section</a>.
            </p>
        </div>

    </div>
</template>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Edit, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { orderDataSource } from "./data-source";

export default {
    components: {
        'ejs-grid': GridComponent,
        'e-column': ColumnDirective,
        'e-columns': ColumnsDirective
    },
    data: () => {
        return {
            data: [],
            pageSettings: { pageCount: 5 },
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            orderidrules: { required: true, number: true },
            formatoptions: { type: 'dateTime', format: 'M/d/y hh:mm a' },
            freightrules:  { required: true, number: true },
            editparams: { params: { dataSource: orderDataSource, fields: {text:"ShipCountry",value:"ShipCountry"}}},
            customeridrules: { required: true },
        };
    },
    methods: {
        imageSrc: function() {
            if (document.body.classList.value.indexOf('dark') > -1 || document.body.classList.value.indexOf('highcontrast') > -1) {
                return 'src/grid/images/emptyRecordTemplate_dark.svg';
            } else {
                return 'src/grid/images/emptyRecordTemplate_light.svg';
            }
        }
    },
    provide: {
      grid: [Edit, Page, Toolbar]

    }
}
</script>

<style>
    .emptyRecordTemplate {
        text-align: center;
    }
    .e-emptyRecord {
        display: block;
        margin: 10px auto;
    }
</style>
    
