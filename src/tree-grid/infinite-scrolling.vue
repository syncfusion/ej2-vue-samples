<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
        <p>This sample demonstrates the Tree Grid component with the infinite scrolling feature.
        </p>
    </div>
    <div>

        <ejs-treegrid ref='treegrid' :dataSource="virtualData" :enableInfiniteScrolling='true' :treeColumnIndex='1' childMapping='Crew' :height='400' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='TaskID' headerText='Player Jersey' width='140' textAlign='Right'></e-column>
                <e-column field='FIELD1' headerText='Player Name' width='140'></e-column>
                <e-column field='FIELD2' headerText='Year' width='105' textAlign='Right'></e-column>
                <e-column field='FIELD3' headerText='Stint' width='90' textAlign='Right'></e-column>
                <e-column field='FIELD4' headerText='TMID' width='90' textAlign='Right'></e-column>
                <e-column field='FIELD5' headerText='LGID' width='90' textAlign='Right'></e-column>
                <e-column field='FIELD6' headerText='GS' width='90' textAlign='Right'></e-column>
                <e-column field='FIELD7' headerText='GP' width='90' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>

    <div id="description">
        <p>
            The Tree Grid Infinite scrolling, allows you to load data in lazy loading concept, which means the buffer data is loaded only when the scrollbar reaches the end of the scroller.
            To enable Infinite scrolling, set <code>enableInfiniteScrolling</code> property as true.
        </p>
        <p>
            Note: The <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/documentation/api/treegrid/#height">
            height</a></code> property must be defined when enabling <code>enableInfiniteScrolling</code>.
        </p>
        <p style='font-weight: 500'>Injecting Module:</p>
        <p>
            Tree Grid features are segregated into individual feature-wise modules.
            To use infinite scrolling feature, we need to inject
            <code>InfiniteScroll</code> using the <code>TreeGrid.Inject(InfiniteScroll)</code> section.
        </p>
    </div>
</div>
</template>
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, InfiniteScroll, TreeGridComponent, Page } from "@syncfusion/ej2-vue-treegrid";
import { DataManager, JsonAdaptor } from '@syncfusion/ej2-data';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { infiniteData, infiniteDataSource } from './data-source';

Vue.use(TreeGridPlugin);

infiniteDataSource();

export default Vue.extend({
  data: function() {
    return {
        virtualData: infiniteData,
        pageSettings: { pageSize: 50 }
    };
  },
  provide: {
      treegrid: [InfiniteScroll, Page]
  }
});
</script>