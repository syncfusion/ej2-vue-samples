<template>
    <div class="col-lg-12 control-section">
        <div id="action-description">
            <p>
                This sample illustrates the Grid's filtering bar feature, utilizing custom components in the filter
                cells
                through the
                <code><a target="_blank" className="code"
                        href="https://helpej2.syncfusion.com/vue/documentation/api/grid/column/#filtertemplate">filterTemplate</a></code>
                feature. This functionality allows users to filter records based on specified
                criteria, displaying a reduced set of data. To enable filtering, set the
                <code><a target="_blank" className="code"
                        href="https://helpej2.syncfusion.com/vue/documentation/api/grid/#allowfiltering">allowFiltering</a></code>
                property to <code>true</code>,
                which renders a filter bar row next to the header. Users can then filter data by entering text into the
                cells of
                this row.
            </p>
        </div>
        <div>
            <ejs-grid ref='grid' :dataSource="data" :allowPaging='true' :allowFiltering='true' :allowSorting='true'
                :filterSettings="{ showFilterBarOperator: true, showFilterBarStatus: false }" gridLines='Both'
                :pageSettings="{ pageCount: 5 }" :dataBound="dataBound" :keyPressed="keyPressed">
                <e-columns>
                    <e-column field='ProductID' headerText='Product ID' width='120' textAlign='Right'
                        :isPrimaryKey='true' :filterTemplate="'templateOptionsNumericTextBox'">
                        <template v-slot:templateOptionsNumericTextBox>
                            <div>
                                <div className="e-cus-label">Id</div>
                                <ejs-numerictextbox ref='productIDTxtObj' class='e-fltrtemp-focus'
                                    format='n'></ejs-numerictextbox>
                            </div>
                        </template>
                    </e-column>
                    <e-column field='ProductName' headerText='Product Name' width='220'
                        :filterTemplate="'templateOptionsStringTextBox'">
                        <template v-slot:templateOptionsStringTextBox>
                            <div>
                                <div className="e-cus-label">Name</div>
                                <ejs-textbox ref='ProductNameTxtObj' class='e-fltrtemp-focus'></ejs-textbox>
                            </div>
                        </template>
                    </e-column>
                    <e-column field='UnitPrice' headerText='Price' width='200' format='C2' textAlign='Right'
                        :filterTemplate="'templateOptionsMinMax'">
                        <template v-slot:templateOptionsMinMax>
                            <div className='e-flex-layout'>
                                <div className='e-min-max-separator'>
                                    <div className="e-cus-label">Min</div>
                                    <ejs-numerictextbox ref='minTextBox' class='e-fltrtemp-focus'
                                        format='n'></ejs-numerictextbox>
                                </div>
                                <div>
                                    <div className="e-cus-label">Max</div>
                                    <ejs-numerictextbox ref='maxTextBox' class='e-fltrtemp-focus'
                                        format='n'></ejs-numerictextbox>
                                </div>
                            </div>
                        </template>
                    </e-column>
                    <e-column field='UnitsInStock' headerText='Stock' width='120' format='N'
                        textAlign='Right'></e-column>
                    <e-column field='Discontinued' :displayAsCheckBox='true' type='boolean' headerText='Discontinued'
                        width='150' :filterTemplate="'templateOptionsDropDown'">
                        <template v-slot:templateOptionsDropDown>
                            <div>
                                <div className="e-cus-label">Status</div>
                                <ejs-dropdownlist cssClass='e-fltrtemp-focus' :dataSource="['Both', 'true', 'false']"
                                    value="Both" :change="discontinuedChange"></ejs-dropdownlist>
                            </div>
                        </template>
                    </e-column>
                </e-columns>
            </ejs-grid>
        </div>

        <div id="description">
            <p>
                The
                <code><a target="_blank" className="code"
                href="https://helpej2.syncfusion.com/vue/documentation/api/grid/column/#filtertemplate">filterTemplate</a></code>
                feature in the Syncfusion EJ2 Vue Grid allows customization of the controls in
                the filter bar. By default, a text box appears in the filter bar cell. In this demo, the Grid showcases
                various
                custom input components: a custom input component for the ID, Name and Price columns, and a Syncfusion
                DropDownList for the Discontinued column, all achieved through
                the filter template feature. You can customize the filter components in the filter cells by setting
                the
                <code><a target="_blank" className="code"
                href="https://helpej2.syncfusion.com/vue/documentation/api/grid/column/#filtertemplate">filterTemplate</a></code>
                property for each column. The Unit Stock column uses the default filter bar cell with
                operator functionality.
            </p>
            <p style="font-weight: 500">
                Injecting Module:
            </p>
            <p>
                Grid features are divided into individual modules. To use filtering feature, inject the
                <code>Filter</code> using the <code>provide</code> section. For more details on configuring filters,
                refer to the relevant <a target="_blank"
                    href="https://ej2.syncfusion.com/vue/documentation/grid/filtering/filter-bar#filter-bar-template-with-custom-component">
                    documentation section</a>.
            </p>
        </div>

    </div>
</template>

<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective, Filter, Page, Selection, Sort, KeyboardEventArgs, PredicateModel, Column } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent, ChangeEventArgs } from "@syncfusion/ej2-vue-dropdowns";
import { categoryData } from "./data-source";
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { closest } from '@syncfusion/ej2-base';

export default {
    components: {
        'ejs-grid': GridComponent,
        'e-column': ColumnDirective,
        'e-columns': ColumnsDirective,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-textbox': TextBoxComponent,
        'ejs-numerictextbox': NumericTextBoxComponent
    },
    data: () => {
        return {
            data: categoryData,
        };
    },
    methods: {
        dataBound: function () {
            const filterBarOperatorDiv: HTMLDivElement = ((this as any).$refs.grid).getHeaderTable()
                .querySelector('.e-filterdiv.e-fltrinputdiv');
            if (!filterBarOperatorDiv.querySelector('.e-cus-label')) {
                const label: HTMLDivElement = document.createElement('div');
                label.classList.add('e-cus-label');
                label.innerText = 'Stock';
                filterBarOperatorDiv.insertBefore(label, filterBarOperatorDiv.firstChild);
            }
        },
        discontinuedChange: function (args: ChangeEventArgs) {
            if (args.value !== 'Both') {
                ((this as any).$refs.grid).filterByColumn('Discontinued', 'equal', args.value === 'true' ? true : false);
            } else {
                ((this as any).$refs.grid).ej2Instances.removeFilteredColsByField('Discontinued');
            }
        },
        keyPressed: function (args: KeyboardEventArgs) {
            if (args.keyCode === 13) {
                const target: Element = args.target as Element;
                const th: Element = closest(target, 'th');
                if (
                    th &&
                    th.classList.contains('e-filterbarcell') &&
                    th.hasAttribute('data-mappinguid')
                ) {
                    const field: string = ((this as any).$refs.grid).getColumnByUid(
                        th.getAttribute('data-mappinguid')
                    ).field;
                    if (field === 'UnitPrice') {
                        args.cancel = true;
                        if (((this as any).$refs.minTextBox).ej2Instances.element.value || ((this as any).$refs.maxTextBox).ej2Instances.element.value) {
                            const filterColumns: PredicateModel[] =
                                ((this as any).$refs.grid).ej2Instances.filterSettings.columns.filter(
                                    (data: Column) => data.field !== 'UnitPrice'
                                );
                            if (((this as any).$refs.minTextBox).ej2Instances.element.value) {
                                filterColumns.push({
                                    field: 'UnitPrice',
                                    operator: 'greaterthanorequal',
                                    predicate: 'and',
                                    value: parseFloat(((this as any).$refs.minTextBox).ej2Instances.element.value),
                                });
                            }
                            if (((this as any).$refs.maxTextBox).ej2Instances.element.value) {
                                filterColumns.push({
                                    field: 'UnitPrice',
                                    operator: 'lessthanorequal',
                                    predicate: 'and',
                                    value: parseFloat(((this as any).$refs.maxTextBox).ej2Instances.element.value),
                                });
                            }
                            setTimeout(() => {
                                ((this as any).$refs.grid).setProperties({
                                    filterSettings: { columns: filterColumns },
                                });
                            }, 0);
                        } else {
                            const filterColumns: PredicateModel[] =
                                ((this as any).$refs.grid).ej2Instances.filterSettings.columns.filter(
                                    (data: Column) => data.field === 'UnitPrice'
                                );
                            if (filterColumns.length) {
                                ((this as any).$refs.grid).ej2Instances.removeFilteredColsByField('UnitPrice');
                            }
                        }
                    }
                    if (field === 'ProductID' || field === 'ProductName') {
                        args.cancel = true;
                        let elemValue: string | number =
                            field === 'ProductID'
                                ? ((this as any).$refs.productIDTxtObj).ej2Instances.element.value
                                : ((this as any).$refs.ProductNameTxtObj).ej2Instances.element.value.trim();
                        const operator: string = field === 'ProductID' ? 'equal' : 'startswith';
                        if ((elemValue as string).length > 0) {
                            if (field === 'ProductID') elemValue = parseFloat(elemValue as string);
                            ((this as any).$refs.grid).filterByColumn(field, operator, elemValue);
                        } else {
                            ((this as any).$refs.grid).clearFiltering([field]);
                        }
                    }
                }
            }
        }
    },
    provide: {
        grid: [Filter, Page, Selection, Sort]
    }
}
</script>

<style>
    .e-cus-label {
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 5px;
        text-align: start;
    }

    .e-flex-layout {
        display: flex;
    }

    .e-grid:not(.e-rtl) .e-min-max-separator {
        margin-right: 5px;
    }

    .e-rtl .e-min-max-separator {
        margin-left: 5px;
    }

    .e-grid .e-gridheader tr th:first-child.e-filterbarcell.e-fltrtemp {
        padding-left: 6px;
    }
</style>