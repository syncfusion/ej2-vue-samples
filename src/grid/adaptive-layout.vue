<template>
<div>
<div class="col-lg-9 control-section">
    <div id="action-description">
        <p>This sample demonstrates optimal viewing experience and improve usability on small screens.</p>
    </div>
    <div class="e-bigger e-adaptive-demo">
    <div v-if="isDesktop" class="e-mobile-layout">
        <div class="e-mobile-content">
            <ejs-grid ref='grid' id='adaptivebrowser' :dataSource="data" height='100%' :rowRenderingMode='rowMode' :enableAdaptiveUI='true' :allowPaging='true' :allowSorting='true' :allowGrouping='false' :allowFiltering='true' :showColumnChooser='true' :showColumnMenu='true' :groupSettings='groupOptions' :pageSettings='pageSettings' :editSettings='editSettings' :toolbar='toolbar' :toolbarClick='toolbarClick' :filterSettings='filterSettings' :load='load' :allowExcelExport='true' :allowPdfExport='true'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='180' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                    <e-column field='Freight' headerText='Freight' width='180' format='C2' editType='numericedit' :validationRules='freightrules'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width='180' :validationRules='customeridrules'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width='180'></e-column>
                </e-columns>
                <e-aggregates>
                    <e-aggregate>
                        <e-columns>
                            <e-column type="Sum" field="Freight" format="C2" :footerTemplate="sumTemplate" >
                            </e-column>
                        </e-columns>
                    </e-aggregate>
                </e-aggregates>
            </ejs-grid>
        </div>
    </div>
    <div v-else class="e-desktop-layout">
        <ejs-grid ref='grid' id='adaptivedevice' :dataSource="data" height='100%' :rowRenderingMode='rowMode' :enableAdaptiveUI='true' :allowPaging='true' :allowSorting='true' :allowGrouping='false' :allowFiltering='true' :showColumnChooser='true' :showColumnMenu='true' :groupSettings='groupOptions' :pageSettings='pageSettings' :editSettings='editSettings' :toolbar='toolbar' :toolbarClick='toolbarClick' :filterSettings='filterSettings' :load='load' :allowExcelExport='true' :allowPdfExport='true'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' width='180' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
                    <e-column field='Freight' headerText='Freight' width='180' format='C2' editType='numericedit' :validationRules='freightrules'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width='180' :validationRules='customeridrules'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width='180'></e-column>
                </e-columns>
                <e-aggregates>
                    <e-aggregate>
                        <e-columns>
                            <e-column type="Sum" field="Freight" format="C2" :footerTemplate="sumTemplate" >
                            </e-column>
                        </e-columns>
                    </e-aggregate>
                </e-aggregates>
            </ejs-grid>
    </div>
    </div>
     <div id="description" style="padding-top: 32px">
     <p>
        The <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/grid/#enableadaptiveui">
            enableAdaptiveUI</a></code> property is used to render the grid filter, sort, edit, pager and toolbars like column chooser, pdf export, excel export, etc... dialogs adaptively and
        <code><a target="_blank" class="code"
                href="https://ej2.syncfusion.com/vue/documentation/api/grid/#rowrenderingmode"> rowRenderingMode</a></code>
        property is used to render the grid row elements in the following directions,
    </p>
    <ul>
        <li><code>Horizontal</code> - Renders the grid row elements in the horizontal direction.</li>
        <li><code>Vertical</code> - Renders the grid row elements in the vertical direction.</li>
    </ul>
    <p> In this sample, you can change the row elements rendering direction by using the properties panel checkbox
    </p>
    <p> In this demo, the column menu feature is only supported for the Grid <code>rowRenderingMode</code> mode as <code>Vertical</code>.
        This feature includes grouping, sorting, autofit, filter, and column chooser feature.
    </p>
    <p>
        More information on the rowRenderingMode configuration can be found in this
        <a target="_blank" 
        href="https://ej2.syncfusion.com/vue/documentation/api/grid/#rowrenderingmode">
        documentation section</a>.
    </p>
    </div>
</div>
<div class="col-lg-3 property-section">
    <table id="property" title="Properties" style="width: 100%">
        <tr>
            <div class="checkbox-control" style="padding-left: 0px">
                <div class="row" style="padding-left: 5px">
                    <ejs-checkbox label='Enable horizontal row mode' labelPosition='Before' :change="onChange"></ejs-checkbox>
                 </div>
            </div>
        </tr>
    </table>
</div>
</div>
</template>

<style scoped>
    @import "../../styles/Grid/adaptive.css";
     /* The device with borders */
    .e-mobile-layout {
        position: relative;
        width: 360px;
        height: 640px;
        margin: auto;
        border: 16px #f4f4f4 solid;
        border-top-width: 60px;
        border-bottom-width: 60px;
        border-radius: 36px;
        box-shadow: 0 0px 2px rgb(144 144 144), 0 0px 10px rgb(0 0 0 / 16%);
    }

    .tailwind-dark .e-mobile-layout,
    .material-dark .e-mobile-layout,
    .fabric-dark .e-mobile-layout,
    .bootstrap-dark .e-mobile-layout,
    .bootstrap5-dark .e-mobile-layout {
      border: 16px rgb(255 255 255 / 10%) solid;
      border-top-width: 60px;
      border-bottom-width: 60px;
    }

    /* The horizontal line on the top of the device */
    .e-mobile-layout:before {
        content: '';
        display: block;
        width: 60px;
        height: 5px;
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ebebeb;
        border-radius: 10px;
    }

    .tailwind-dark .e-mobile-layout::before,
    .tailwind-dark .e-mobile-layout::after,
    .material-dark .e-mobile-layout::before,
    .material-dark .e-mobile-layout::after,
    .fabric-dark .e-mobile-layout::before,
    .fabric-dark .e-mobile-layout::after,
    .bootstrap-dark .e-mobile-layout::before,
    .bootstrap-dark .e-mobile-layout::after,
    .bootstrap5-dark .e-mobile-layout::before,
    .bootstrap5-dark .e-mobile-layout::after {
      background: rgb(255 255 255  / 20%);
    }

    /* The circle on the bottom of the device */
    .e-mobile-layout:after {
        content: '';
        display: block;
        width: 35px;
        height: 35px;
        position: absolute;
        left: 50%;
        bottom: -65px;
        transform: translate(-50%, -50%);
        background: #e8e8e8;
        border-radius: 50%;
    }

    /* The screen (or content) of the device */
    .e-mobile-layout .e-mobile-content {
        overflow: hidden;
        width: 328px;
        height: 100%;
        background: transparent;
        border: 0px solid #dddddd;
    }

    .highcontrast .e-mobile-layout {
        border: 16px #000000 solid;
        border-top-width: 60px;
        border-bottom-width: 60px;
        box-shadow: -1px 2px white, -2px -2px white, 2px -2px white, 2px 1px white;
    }
</style>

<script lang="ts">
import { createApp } from 'vue';
import { GridComponent, ColumnDirective, ColumnsDirective, AggregatesDirective, AggregateDirective, Page, Edit, Sort, Group, Filter, Resize, Toolbar, Aggregate, ExcelExport, PdfExport, ColumnChooser, ColumnMenu } from "@syncfusion/ej2-vue-grids";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { Browser } from "@syncfusion/ej2-base";
import { orderDetails } from "./data-source";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'e-aggregates': AggregatesDirective,
    'e-aggregate': AggregateDirective,
    'ejs-checkbox': CheckBoxComponent
  },
  data: () => {
    return {
      data: orderDetails,
      rowMode: 'Vertical',
      editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'],
      filterSettings: { type: 'Excel' },
      groupOptions: { showGroupedColumn: true },
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
      freightrules:  { required: true },
      pageSettings: { pageCount: 3, pageSizes: true },
      isDesktop: !Browser.isDevice,
      sumTemplate: function() {
        return {
            template: createApp({}).component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data: function () {return {data: {data: {}}};}
            })
        }
      },
      avgTemplate: function() {
        return {
            template : createApp({}).component('avgTemplate', {
            template: `<span>Average: {{data.Average}}</span>`, 
            data: function () {return { data: {data: {}}};}
            })
        }
      }
    };
  },
  methods: {
    onChange: function(args: any) {
        let gObj = ((this as any).$refs.grid as any).$el.ej2_instances[0];
        gObj.rowRenderingMode = args.checked ? 'Horizontal' : 'Vertical';
        gObj.allowGrouping = args.checked;
    },
    load: function() {
        ((this as any).$refs.grid as any).$el.ej2_instances[0].adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
        if (((this as any).$refs.grid as any).$el.ej2_instances[0].pageSettings.pageSizes) {
            document.querySelector('.e-adaptive-demo')?.classList.add('e-pager-pagesizes');
        }
        else{
            document.querySelector('.e-adaptive-demo')?.classList.remove('e-pager-pagesizes');
        }
    },
    toolbarClick: function (args: ClickEventArgs) {
        let gObj = ((this as any).$refs.grid as any).$el.ej2_instances[0];
        switch (args.item.id) {
            case gObj.element.id + '_pdfexport':
                gObj.pdfExport();
                break;
            case gObj.element.id + '_excelexport':
                gObj.excelExport();
                break;
        }
    }
  },
  provide: {
      grid: [Page, Edit, Sort, Group, Filter, Resize, Toolbar, Aggregate, ExcelExport, PdfExport, ColumnChooser, ColumnMenu]
  }
};
</script>
