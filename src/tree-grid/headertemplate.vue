<template>
<div class="col-lg-12 control-section">
    <div aria-label="TreeGrid">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :height='350' :treeColumnIndex='0' :allowPaging='true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='taskName' width='200' :headerTemplate="'nametemplate'"></e-column>
                <e-column field='startDate' width='120' :headerTemplate="'datetemplate'" format='yMd'  textAlign='Right'></e-column>
                <e-column field='resourceId' width='120' :headerTemplate="'resourcetemplate'" textAlign='Right'></e-column>
                <e-column field='duration' width='110' :headerTemplate="'durationtemplate'"  textAlign='Right' ></e-column>
                <e-column field='progress' width='150' :headerTemplate="'progresstemplate'"  textAlign='Right'></e-column>
            </e-columns>
            <template v-slot:nametemplate="{data}">
                <div class="image">
                    <img :src="image1()" class="taskname" alt="Task Name"/> Task Name
                </div>
            </template>
            <template v-slot:datetemplate="{data}">
                <div class="image">
                    <img :src="image2()" class="startdate" alt="Start Date"/> Start Date
                </div>
            </template>
            <template v-slot:resourcetemplate="{data}">
                <div class="image">
                    <img :src="image3()" class="resources" alt="Resources"/> Resources
                </div>
            </template>
            <template v-slot:durationtemplate="{data}">
                <div class="image">
                    <img :src="image4()" class="duration" alt="Duration"/> Duration
                </div>
            </template>
            <template v-slot:progresstemplate="{data}">
                <div class="image">
                    <img :src="image5()" class="Progress" alt="Progress"/> Progress
                </div>
            </template>
        </ejs-treegrid>
    </div>

     <div id="action-description">
    <p>This sample demonstrates the Tree Grid header template feature. In this sample, we have shown custom icons in the column headers.
    </p>
</div>
<div id="description">
    <p>
        The Tree Grid provides a way to define a custom element in header element. 
        columns->headertemplate property accepts either string or HTML element`s ID value, which will be used as the template for the header cell.  
    </p>
    <p>
        In this demo, we have render customized template for all column headers.
    </p> 
    <p>
        More information about Header template can be found in this <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/treegrid/columns/headers#header-template">documentation section</a>.
    </p>   
</div>

</div>
</template>
<!-- custom code start -->
<style>
   .e-image {
        margin-right: 8px;
    }
    .taskname, .startdate, .resources, .duration, .Progress{
      width: 20px !important;
      height: 20px !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      padding-bottom: 4px;
    };
</style>
<!-- custom code end -->
<script lang="ts">
import { TreeGridComponent, ColumnDirective, ColumnsDirective, Page } from "@syncfusion/ej2-vue-treegrid";
import { headerData } from "./data-source";

export default {
  components: {
    'ejs-treegrid': TreeGridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },   
  data: () => {
    return {
      data: headerData,
      pageSettings: { pageSize: 10 },
    };
  },
   provide : {
      treegrid: [Page],
    },
    methods : {
        getTheme() {
              let themeName: string = location.hash.split('/')[1];
              return ["material","material3","fabric","bootstrap","bootstrap4","bootstrap5","bootstrap5.3","tailwind","fluent","fluent2" ].includes(themeName);
        },
        image1() {
            return (this.getTheme() ? "source/tree-grid/images/taskname.png": "source/tree-grid/images/darkTaskname.png");
        },
        image2() {
            return (this.getTheme() ? "source/tree-grid/images/startdate.png": "source/tree-grid/images/darkStartname.png");
        },
        image3() {
            return (this.getTheme() ? "source/tree-grid/images/resources.png": "source/tree-grid/images/darkResources.png");
        },
        image4() {
            return (this.getTheme() ? "source/tree-grid/images/duration.png": "source/tree-grid/images/darkduration.png");
        },
        image5() {
            return (this.getTheme() ? "source/tree-grid/images/progress.png" :"source/tree-grid/images/darkprogress.png");
        }
  }

}
</script>
