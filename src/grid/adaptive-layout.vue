<template>
<div>
<div class="col-lg-9 control-section">
    <div id="action-description">
        <p>This sample demonstrates the rendering order of the grid row elements and adaptive dialogs.</p>
    </div>
    <div class="e-bigger e-adaptive-demo">
    <div v-if="isDesktop" class="e-mobile-layout">
        <div class="e-mobile-content">
            <ejs-grid ref='grid' id='adaptivebrowser' :dataSource="data" height='100%' :rowRenderingMode='rowMode' :enableAdaptiveUI='true' :allowPaging='true' :allowSorting='true' :allowFiltering='true' :pageSettings='pageSettings' :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
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
        <ejs-grid ref='grid' id='adaptivedevice' :dataSource="data" height='100%' :rowRenderingMode='rowMode' :enableAdaptiveUI='true' :allowPaging='true' :allowSorting='true' :allowFiltering='true' :pageSettings='pageSettings' :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
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
            href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#enableadaptiveui">
            enableAdaptiveUI</a></code> property is used to render the grid filter, sort and edit dialogs adaptively and
        <code><a target="_blank" class="code"
                href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#rowrenderingmode"> rowRenderingMode</a></code>
        property is used to render the grid row elements in the following directions,
    </p>
    <ul>
        <li><code>Horizontal</code> - Renders the grid row elements in the horizontal direction.</li>
        <li><code>Vertical</code> - Renders the grid row elements in the vertical direction.</li>
    </ul>
    <p> In this sample, you can change the row elements rendering direction by using the properties panel checkbox
    </p>
    <p>
        More information on the rowRenderingMode configuration can be found in this
        <a target="_blank" 
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#rowrenderingmode">
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
import Vue from "vue";
import { GridPlugin, Page, Edit, Sort, Filter, Toolbar, Aggregate } from "@syncfusion/ej2-vue-grids";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { Browser } from "@syncfusion/ej2-base";
import { orderDetails } from "./data-source";

Vue.use(GridPlugin);
Vue.use(CheckBoxPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: orderDetails,
      rowMode: 'Vertical',
      editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
      filterSettings: { type: 'Excel' },
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
      freightrules:  { required: true },
      pageSettings: { pageCount: 3 },
      isDesktop: !Browser.isDevice,
      sumTemplate: function() {
        return {
            template: Vue.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data: function () {return {data: {data: {}}};}
            })
        }
      },
      avgTemplate: function() {
        return {
            template : Vue.component('avgTemplate', {
            template: `<span>Average: {{data.Average}}</span>`, 
            data: function () {return { data: {data: {}}};}
            })
        }
      }
    };
  },
  methods: {
    onChange: function(args: any) {
        let gObj = (this.$refs.grid as any).$el.ej2_instances[0];
        if (args.checked) {
            gObj.rowRenderingMode = 'Horizontal';
        } else {
            gObj.rowRenderingMode = 'Vertical';
        }
    },
    load: function() {
        (this.$refs.grid as any).$el.ej2_instances[0].adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
    }
  },
  provide: {
      grid: [Page, Edit, Sort, Filter, Toolbar, Aggregate]
  }
});
</script>