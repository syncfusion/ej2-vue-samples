<template>
<div class="col-lg-12 control-section">
    <div>
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :height='350' :treeColumnIndex='0' :allowPaging='true' :pageSettings='pageSettings'>
            <e-columns>
                <e-column field='taskName' width='200' :headerTemplate='nametemplate'></e-column>
                <e-column field='startDate' width='100' :headerTemplate='datetemplate' format='yMd'  textAlign='Right'></e-column>
                <e-column field='resourceId' width='100' :headerTemplate='resourcetemplate' textAlign='Right'></e-column>
                <e-column field='duration' width='100' :headerTemplate='durationtemplate'  textAlign='Right' ></e-column>
                <e-column field='progress' width='100' :headerTemplate='progresstemplate'  textAlign='Right'></e-column>
            </e-columns>
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
        More information about Header template can be found in this documentation section.
    </p>   
</div>

</div>
</template>
<!-- custom code start -->
<style scoped>
    /deep/ .e-image {
        margin-right: 8px;
    }
</style>
<!-- custom code end -->
<script lang="ts">
import Vue from "vue";
import { TreeGridPlugin, Page } from "@syncfusion/ej2-vue-treegrid";
import { headerData } from "./data-source";

Vue.use(TreeGridPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: headerData,
      pageSettings: { pageSize: 10 },
      nametemplate: function () {
          return { template : Vue.component('columnTemplate',{
             template: `<div class="image">
                    <img :src="image" width=20 height=20 style="padding-bottom: 2px" class="taskname"/> Task Name
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    image: function() {
                        var classNames = document.body.classList;
                        var normalTheme = classNames.contains("material") || classNames.contains("fabric") || classNames.contains("bootstrap") || classNames.contains("bootstrap4") || classNames.contains("bootstrap5") || classNames.contains("tailwind");
                        return (normalTheme ? "source/tree-grid/images/taskname.png": "source/tree-grid/images/darkTaskname.png");
                    }
                }
          })}
      },
     datetemplate: function () {
          return { template : Vue.component('columnTemplate',{
             template: `<div class="image">
                    <img :src="image" width=20 height=20 style="padding-bottom: 2px" class="startdate"/> Start Date
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    image: function() {
                        var classNames = document.body.classList;
                        var normalTheme = classNames.contains("material") || classNames.contains("fabric") || classNames.contains("bootstrap") || classNames.contains("bootstrap4") || classNames.contains("bootstrap5") || classNames.contains("tailwind");
                        return (normalTheme ? "source/tree-grid/images/startdate.png": "source/tree-grid/images/darkStartname.png");
                    }
                }
          })}
      },
      resourcetemplate: function () {
          return { template : Vue.component('columnTemplate',{
             template: `<div class="image">
                    <img :src="image" width=20 height=20 style="padding-bottom: 2px" class="resources"/> Resources
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    image: function() {
                        var classNames = document.body.classList;
                        var normalTheme = classNames.contains("material") || classNames.contains("fabric") || classNames.contains("bootstrap") || classNames.contains("bootstrap4") || classNames.contains("bootstrap5") || classNames.contains("tailwind");
                        return (normalTheme ? "source/tree-grid/images/resources.png": "source/tree-grid/images/darkResources.png");
                    }
                }
          })}
      },
      durationtemplate: function () {
          return { template : Vue.component('columnTemplate',{
             template: `<div class="image">
                    <img :src="image" width=20 height=20 style="padding-bottom: 2px" class="duration"/> Duration
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    image: function() {
                        var classNames = document.body.classList;
                        var normalTheme = classNames.contains("material") || classNames.contains("fabric") || classNames.contains("bootstrap") || classNames.contains("bootstrap4") || classNames.contains("bootstrap5") || classNames.contains("tailwind");
                        return (normalTheme ? "source/tree-grid/images/duration.png": "source/tree-grid/images/darkduration.png");
                    }
                }
          })}
      },
      progresstemplate: function () {
          return { template : Vue.component('columnTemplate',{
             template: `<div class="image">
                    <img :src="image" width=20 height=20 style="padding-bottom: 2px" class="Progress"/> Progress
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    image: function() {
                        var classNames = document.body.classList;
                        var normalTheme = classNames.contains("material") || classNames.contains("fabric") || classNames.contains("bootstrap") || classNames.contains("bootstrap4") || classNames.contains("bootstrap5") || classNames.contains("tailwind");
                        return (normalTheme ? "source/tree-grid/images/progress.png" :"source/tree-grid/images/darkprogress.png");
                    }
                }
          })}
      }
    };
  },
   provide : {
      treegrid: [Page],
    },
   methods:{
      
  }

});
</script>