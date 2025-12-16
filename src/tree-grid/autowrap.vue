<template>
    <div class="control-section">
        <div id="action-description">
            <p>This sample demonstrates the Tree Grid with the text wrap option enabled
                for both headers and cell content. This setting ensures that long header
                text and cell values are fully visible by wrapping onto multiple lines
                instead of being truncated with an ellipsis. </p>
        </div>
        <div id="description">
            <p>In this demo, the <strong>"Title"</strong> and <strong>"Description"</strong> columns
                exceeds the available width, so its header and cell content are wrapped
                across multiple lines for better readability. Text wrapping is enabled
                by setting the Tree Grid's
                <code><a aria-label="API link for documentation"
                target="_blank" class="code"
                href="https://ej2.syncfusion.com/vue/documentation/api/treegrid/index-default#allowtextwrap">allowTextWrap</a></code>
                property to <strong>true</strong>, which automatically applies wrapping
                to both header and cell content.</p>
            <p>
                More information about text wrap can be found in this
                <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/cell/auto-wrap">
                    documentation
                </a>section.
            </p>
        </div>
        <div>
            <ejs-treegrid :dataSource='data' childMapping='subtasks' :allowTextWrap='true' :height='400'
                :allowSorting='true' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings'
                :allowFiltering='true' :filterSettings='filterSettings'>
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width='140'></e-column>
                    <e-column field='taskName' headerText='Title' width='240'></e-column>
                    <e-column field='description' headerText='Description (Comprehensive Objectives for Deliverables)'
                        width='370'></e-column>
                    <e-column field='employeeName' headerText='Assigned To' width='180'></e-column>
                    <e-column field='priority' headerText='Priority' width='150' textAlign='Center'></e-column>
                    <e-column field='status' headerText='Status' width='130' textAlign='Center'></e-column>
                    <e-column field='startDate' headerText='Start Date' width='160' format="yMd"
                        textAlign='Right'></e-column>
                    <e-column field='endDate' headerText='End Date' width='160' format="yMd"
                        textAlign='Right'></e-column>
                </e-columns>
            </ejs-treegrid>
        </div>
    </div>
</template>
<!-- custom code start -->
<style>
.e-bigger.bootstrap5 .e-treegrid .e-treegridexpand,
.e-bigger.bootstrap5 .e-treegrid .e-treegridcollapse,
.e-bigger.bootstrap5-dark .e-treegrid .e-treegridexpand,
.e-bigger.bootstrap5-dark .e-treegrid .e-treegridcollapse {
    width: 18px;
}
</style>
<!-- custom code end -->
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, Filter, Sort } from "@syncfusion/ej2-vue-treegrid";
import { wrapData } from "./data-source";
 
export default {
    components: {
        'ejs-treegrid': TreeGridComponent,
        'e-column': ColumnDirective,
        'e-columns': ColumnsDirective
    },
    data: () => {
        return {
            data: wrapData,
            filterSettings: { type: 'Excel', hierarchyMode: 'Parent' },
            pageSettings: { pageCount: 4, pageSize: 10 }
        };
    },
    provide: {
        treegrid: [Page, Filter, Sort]
    },
    methods: {
    }
 
}
</script>