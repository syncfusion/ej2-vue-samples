<template>
    <div>
        <div class="col-lg-8 control-section">
            <div id="listbox-api-control">
                <ejs-listbox ref="listBoxObj" :dataSource="data" :fields="fields" :selectionSettings="selectionSettings" :sortOrder="sortOrder"></ejs-listbox>
            </div>
        </div>
        <div class="col-lg-4 property-section">
            <table id="property" title="Properties" style="width: 100%">
                <tbody>
                    <tr>
                        <td style="width: 50%;padding-top:10px">
                            <div>Sort order</div>
                        </td>
                        <td style="width: 50%;padding-top:10px">
                            <div style="max-width: 200px">
                                <ejs-dropdownlist :dataSource="ddlData1" value="None" :fields="ddlFields" @change="sortChange"></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 50%;padding-top:10px">
                            <div>Selection Mode</div>
                        </td>
                        <td style="width: 50%;padding-top:10px">
                            <div style="max-width: 200px">
                                <ejs-dropdownlist :dataSource="ddlData2" value="Multiple" :fields="ddlFields" @change="selectionChange"></ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="action-description">
            <p>This sample demonstrates the API functionalities of the ListBox component by using its properties from the property pane. Select any combination of properties from the property pane to achieve desired functionalities in ListBox.</p>
        </div>
        <div id="description">
            <p>In this demo, a ListBox is rendered with grouping feature by setting the <code>groupBy</code> property in <code>fields.</code> This sample has been showcased with following set of properties,</p>
            <ul>
                <li>You can switch to <code>Single</code> or <code>Multiple</code> selection mode by selecting the mode from the selection mode dropdown list.</li>
                <li>You can switch to <code>None</code>, <code>Ascending</code>, or <code>Descending</code> sort orders by selecting the sort order from the sort order dropdown list.</li>
            </ul>
            <p>In this sample, by default, grouping is enabled and <code>vegetableData</code> is grouped based on its category. The user can change the sort order and selection type using dropdownlist.</p>
            <p>More information about the ListBox api can be found in the
                <a href="https://ej2.syncfusion.com/documentation/api/list-box/" target="_blank"> documentation section</a>.
            </p>
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
    #listbox-api-control {
        width: 49%;
        margin: auto;
        margin-bottom: 15px;
    }
    @media screen and (max-width: 590px) {
        #listbox-api-control {
            width: 100%;
        }
    }
</style>
<!-- custom code end -->
<script>
import Vue from "vue";
import { ListBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from './datasource.json';

Vue.use(ListBoxPlugin);

export default Vue.extend({
    data: function() {
        return {
            data: data.vegetableData,
            fields: { groupBy: 'Category', text: 'Vegetable', value: 'Id' },
            ddlData1: data.sort,
            ddlData2: data.selectionMode,
            ddlFields: { text: 'type', value: 'type' },
            selectionSettings: { mode: 'Multiple' },
            sortOrder: 'None'
        };
    },
    methods: {
        sortChange(args) {
            this.sortOrder = args.value;
        },
        selectionChange(args) {
            this.selectionSettings = { mode: args.value };
        }
    }
});
</script>