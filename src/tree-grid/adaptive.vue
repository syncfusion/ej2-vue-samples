<template>
<div>
<div class="col-lg-9 control-section">
    <div id="action-description">
        <p>This sample demonstrates the adaptive rendering behavior of Tree Grid features such as Filtering, Paging, Searching and etc.,</p>
    </div>
    <div class="e-bigger e-adaptive-demo">
    <div v-if="isDesktop" class="e-mobile-layout">
        <div class="e-mobile-content">
            <ejs-treegrid ref='treegrid' id='adaptivebrowser' :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' height='100%' :enableAdaptiveUI='true' :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' :isPrimaryKey='true' width='135' :validationRules='taskidrules' textAlign='Right'></e-column>
                    <e-column field='taskName' headerText='Task Name' :validationRules='tasknamerules' width='280'></e-column>
                    <e-column field='duration' headerText='Duration' width='140' textAlign='Right'></e-column>
                    <e-column field='progress' headerText='Progress' width='145' textAlign='Right'></e-column>
                </e-columns>
            </ejs-treegrid>
        </div>
    </div>
    <div v-else class="e-desktop-layout">
            <ejs-treegrid ref='treegrid' id='adaptivedevice' :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' height='100%' :enableAdaptiveUI='true' :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' :isPrimaryKey='true' width='135' :validationRules='taskidrules' textAlign='Right'></e-column>
                    <e-column field='taskName' headerText='Task Name' :validationRules='tasknamerules' width='280'></e-column>
                    <e-column field='duration' headerText='Duration' width='140' textAlign='Right'></e-column>
                    <e-column field='progress' headerText='Progress' width='145' textAlign='Right'></e-column>
                </e-columns>
            </ejs-treegrid>
    </div>
    </div>
     <div id="description" style="padding-top: 32px">
    <p>
        The  <code><a target="_blank" class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/treegrid#enableAdaptiveUI">
            enableAdaptiveUI</a></code> property is set to true. The filtering, CRUD actions, paging and other various user interactions in tree grid will be adaptive to the smaller screens. For example, Filtering opens the UI for user in a pop-up occupying the entire screen. 
    </p>
    <p>
        For more information, refer this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/adaptive/">
            documentation section</a>.
    </p>
    </div>
</div>
</div>
</template>

<style scoped>
    .e-responsive-dialog {
    box-shadow: none;
    border: 1px solid #dddddd;
}

#adaptivebrowser:not(.e-grid.e-row-responsive) > .e-gridcontent {
    height: calc(100% - 224px) !important;
}

/* Render the mobile pager by default */
@media (max-width: 3840px) {
    .e-adaptive-demo .e-pager {
        padding: 13px 0;
    }
    .fluent2,
    .fluent2-dark,
    .fluent2-highcontrast {
        .e-adaptive-demo .e-pager {
            .e-mfirst,
            .e-mprev,
            .e-mnext,
            .e-mlast {
                padding: 1% 3.4%;
            }
        }
    }
    .e-adaptive-demo .e-pager div.e-parentmsgbar {
        box-sizing: border-box;
        display: inline-block;
        float: initial;
        padding-bottom: 0;
        padding-right: 0;
        padding-top: 0;
        text-align: center;
        vertical-align: top;
        width: calc(60% - 48px);
    }
    .e-adaptive-demo .e-pager .e-pagesizes {
        display: none;
    }
    .e-adaptive-demo .e-pager .e-pagecountmsg {
        display: none;
    }
    .e-adaptive-demo .e-pager .e-pagercontainer {
        display: none;
    }
    .e-adaptive-demo .e-pager .e-icons {
        font-size: 11px;
    }
    .e-adaptive-demo .e-pager .e-mfirst,
    .e-adaptive-demo .e-pager .e-mprev,
    .e-adaptive-demo .e-pager .e-mnext,
    .e-adaptive-demo .e-pager .e-mlast {
        border: 0;
        box-sizing: border-box;
        display: inline-block;
        padding: 1% 5%;
    }
    .e-adaptive-demo .e-pager .e-mfirst {
        margin-right: 4px;
        text-align: right;
        width: calc(10% + 11px);
    }
    .e-adaptive-demo .e-pager .e-mprev {
        margin: 0 4px;
        text-align: right;
        width: 10%;
    }
    .e-adaptive-demo .e-pager .e-mnext {
        margin: 0 4px;
        text-align: left;
        width: 10%;
    }
    .e-adaptive-demo .e-pager .e-mlast {
        margin-left: 4px;
        text-align: left;
        width: calc(10% + 11px);
    }
    .e-adaptive-demo .e-bigger .e-pager,
    .e-adaptive-demo .e-pager.e-bigger {
        padding: 19px 0;
    }
    .e-adaptive-demo .e-bigger .e-pager.e-rtl div.e-parentmsgbar,
    .e-adaptive-demo .e-pager.e-bigger.e-rtl div.e-parentmsgbar {
        margin-right: 0;
    }
    .e-adaptive-demo .e-bigger .e-pager div.e-parentmsgbar,
    .e-adaptive-demo .e-pager.e-bigger div.e-parentmsgbar {
        padding: 0;
    }
}
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
        overflow-x: hidden;
        width: 328px;
        height: 521px;
        background: white;
        border: 0px solid #dddddd;
    }

    .highcontrast .e-mobile-layout {
        border: 16px #000000 solid;
        border-top-width: 60px;
        border-bottom-width: 60px;
        box-shadow: -1px 2px white, -2px -2px white, 2px -2px white, 2px 1px white;
    }
 
    .e-bigger .e-responsive-dialog .e-dlg-header-content .e-btn .e-btn-icon {
        margin-top: 0px !important;
    }
</style>

<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page, Edit, Sort, Filter, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./data-source";
import { Browser } from "@syncfusion/ej2-base";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },  
  data: () => {
    return {
      data: sampleData,
      editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
      filterSettings: { type: 'Excel' },
      taskidrules: { required: true, number: true },
      tasknamerules: { required: true },
      isDesktop: !Browser.isDevice,
    };
  },
  methods: {
    load: function() {
        ((this as any).$refs.treegrid as any).$el.ej2_instances[0].grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
    }
  },
  provide: {
      treegrid: [Page, Edit, Sort, Filter, Toolbar]
  }
}
</script>