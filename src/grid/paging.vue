<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>
            This sample demonstrates the Grid paging feature. In this sample, click the numeric items to navigate to particular page.
            You can also change the page size using the dropdown.
        </p>
    </div>
    <div class="paging-api">
        <ejs-grid :dataSource="data" locale='en-US' height='365' :allowPaging='true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width='150'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign='Right'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='170'></e-column>
            </e-columns>
        </ejs-grid>
    </div>

     <div id="description">
       <p>Paging allows you to display the contents of the Grid in page segments. By default, paging is disabled. To enable
            paging, set <code><a target="_blank" class="code"
            href="http://ej2.syncfusion.com/vue/documentation/grid/api-gridComponent.html#allowpaging">
            allowPaging
            </a></code> property to true.
            <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-pageSettings.html#pagesizes">
        pageSettings->pageSizes
        </a></code> property enables a dropdown in pager which allows you to change the number of records in the 
                    Grid dynamically.
        </p>
        <p>
            In this demo, the Grid is rendered with
            <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-pageSettings.html#pagesizes">
        pageSettings->pageSizes
        </a></code>set to true, and
            <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/vue/documentation/grid/api-pageSettings.html#pagecount">
        pageSettings->pageCount
        </a></code>set to 4.
        </p>
        <p>
            The Pager component has been enhanced to be more responsive. 
            It now includes the ability to automatically resize itself and dynamically show or hide pager items based on the width of the Grid
        </p>  
        <p>Changed default pager details information using the <code>totalItemsInfo</code> locale property.</p>
        <br>
        <p style="font-weight: 500">Injecting Module:</p>
        <p>
            Grid component features are segregated into individual feature-wise modules. To use paging feature, we need to inject
            <code>Page</code> into the <code>provide</code> section.
        </p>
        <p>
            More information on the paging feature configuration can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/vue/documentation/grid/paging.html">documentation section</a>.
        </p>
    </div>

</div>
</template>
<style>
    .paging-api .e-pager .e-pagecountmsg {
        display: inline-block;
    }
</style>
<script lang="ts">
import Vue from "vue";
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { data } from "./data-source";

setCulture('de-DE');

L10n.load({
    'en-US': {
        'pager': {
            'currentPageInfo': '',
            'totalItemsInfo': '{1} to {2} of {0}',
        }
    }
});

Vue.use(GridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: data,
       pageSettings: { pageSizes: [12,50,100,200], pageCount: 4 }
    };
  },
  provide: {
      grid: [Page]
  }
});
</script>