<template>
  <div class="control-section">
    <div class="row linear-parent">
        <div style="margin-top:1%">
           <div class="col-lg-12 col-md-12 progressbar-label-linear" >Determinate</div>
            <div class="linear-progress">
            <div id="lineardeterminate">
            <ejs-progressbar
            ref="determinate"
            id="linear-determinate"
            type='Linear'
            height='60'
            width='90%'
            :value='value1'
            :animation="animation"
            :load='load'
            >
            </ejs-progressbar>
          </div>
        </div>
        </div>
        <div style="margin-top:2.5%">
        <div class="col-lg-12 col-md-12 progressbar-label-linear">Indeterminate</div>
        <div class="linear-progress">
        <div id="linearindeterminate">
          <ejs-progressbar
            ref="indeterminate"
            id="successcontainer"
            type='Linear'
            height='60'
            width='90%'
            isIndeterminate=true
            :value='value2'
            :load='load'
            >
            </ejs-progressbar>
            </div>
          </div>
        </div>
         <div style="margin-top:2.5%">
           <div class="col-lg-12 col-md-12 progressbar-label-linear" >Segment</div>
            <div  class="linear-progress">
            <div id="linearsegment">
           <ejs-progressbar
            ref="segment"
            id="errorcontainer" 
            type='Linear'
            height='60'
            width='90%'
            :segmentCount='count'
            :value='value3'
            :animation="animation"
            :load='load'
            >
            </ejs-progressbar> 
            </div>
          </div>
        </div>
        <div  style="margin-top:2.5%">
           <div class="col-lg-12 col-md-12 progressbar-label-linear" >Buffer</div>
          <div class="linear-progress">
          <div id="linearbuffer">
          <ejs-progressbar
            ref="buffer"
            id="warningscontainer"                           
            type='Linear'
            height='60'
            width='90%'
            :value='value4'
            :secondaryProgress='secvalue'
            secondaryProgressColor=" "
            :animation="animation"
            :load='load'
            >
            </ejs-progressbar>
            </div>
         </div>
        </div>
         <div style="margin-top:2.5%">
          <div class="col-lg-12 col-md-12 progressbar-label-linear" >Active</div>
          <div class="linear-progress">
          <div id="linearactive">
          <ejs-progressbar
            ref="active"
            id="activecontainer"                           
            type='Linear'
            height='60'
            width='90%'
            :value='value3'
            isActive=true
            :load='load'
            >
            </ejs-progressbar>
            </div>
         </div>
        </div>
    </div>
    <div id="replay-progressbar" style="margin-top:2%;margin-left:45.5%">
      <button id="reLoad" class="e-control e-btn e-lib e-outline e-primary" @click="onclick">Reload</button>
    </div>
  <div id="action-description">
      <p>This sample illustrates a linear progress bar with determinate and indeterminate states, segments, and buffer values.</p>
    </div>
    <div id="description">
      <p>In this example, you can see how to render and configure a linear progress bar. A progress bar is used to visualize the progression of an extended operation. The sample shows the determinate and indeterminate states, buffer values, and segments of a linear progress bar.</p>
    </div>
  </div>
</template>
<style scoped>     
  .e-progressbar, #lineardeterminate, #linearindeterminate, #linearbuffer, #linearsegment {
            display: block;
        }            .actual-txt{
            font-size: 14px;
        }
         #control-container {
            padding: 0px !important;
        }
        .replay-progressbar {
            right: 100px;
        }

        .linear-parent {
            text-align: center;
        }

        .progressbar-label-linear {
            text-align: left;
            font-family: Roboto-Regular;
            font-size: 14px;
            color: #3D3E3C;
            letter-spacing: 0;
            margin-left: 13.5%;
        }

        .linear-progress {
            width: 80%;
            margin: auto;
        }

        .lineartxt {
            color: black;
            top: 20px;
            left: 13.5%;
        }

        #successtext {
            color: black;
            top: 20px;
            right: 245px;
        }

        #warningtext {
            color: black;
            top: 20px;
            right: 268px;
        }

        #errortext {
            color: black;
            top: 20px;
            right: 260px;
        }


        .reload-btn {
            text-align: center;
        }

        #reLoad {
            border-radius: 4px;
            text-transform: capitalize;
        }

</style>
<script>
import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";
import { loadProgressBarTheme } from "./theme-color";

let div = document.getElementsByClassName('progressbar-label-linear');

export default {
  data: function() {
    return {
      value1: 100,
      value2: 20,
      value3: 100,
      value4: 40,
      secvalue:60,
     
      count:8,
      animation: {
        enable: true,
        duration: 2000,
        delay: 0
      },

    };
  },
  components: { 'ejs-progressbar': ProgressBarComponent },
  provide: {},
  methods: {
    onclick: function() {
      this.$refs.determinate.ej2Instances.refresh();
      this.$refs.indeterminate.ej2Instances.refresh();
      this.$refs.buffer.ej2Instances.refresh();
      this.$refs.segment.ej2Instances.refresh();
    },
    load: function(args) {
      loadProgressBarTheme(args);
        if(args.progressBar.theme === 'HighContrast' || args.progressBar.theme === 'Bootstrap5Dark' || args.progressBar.theme === 'BootstrapDark' || args.progressBar.theme === 'FabricDark'
                || args.progressBar.theme === 'TailwindDark' || args.progressBar.theme === 'Tailwind3Dark' || args.progressBar.theme === 'MaterialDark' || args.progressBar.theme === 'FluentDark' || args.progressBar.theme === 'Material3Dark' || args.progressBar.theme === 'Fluent2Dark' || args.progressBar.theme === 'Fluent2HighContrast') {
            for (let i = 0; i < div.length; i++) {
                div[i].setAttribute('style', 'color:white');
            }
         }
         if (args.progressBar.theme === 'Fabric') {
          args.progressBar.secondaryProgressColor = '#b0d0e9'
        } else if (args.progressBar.theme === 'MaterialDark') {
          args.progressBar.secondaryProgressColor = '#b8b8b8'
        } else if (args.progressBar.theme === 'Material') {
          args.progressBar.secondaryProgressColor = '#f087ab'
        } else if (args.progressBar.theme === 'Bootstrap5Dark') {
          args.progressBar.secondaryProgressColor = '#2b5288'
        } else if (args.progressBar.theme === 'Bootstrap5') {
          args.progressBar.secondaryProgressColor = '#98c5f5'
        } else if (args.progressBar.theme === 'Bootstrap') {
          args.progressBar.secondaryProgressColor = '#acc6dc'
        }
        else if (args.progressBar.theme === 'Bootstrap4') {
          args.progressBar.secondaryProgressColor = '#98c5f5'
        }
        else if (args.progressBar.theme === 'BootstrapDark') {
          args.progressBar.secondaryProgressColor = '#b8b8b8'
        } else if (args.progressBar.theme === 'HighContrast') {
          args.progressBar.secondaryProgressColor = '#aca379'
        } else if (args.progressBar.theme === 'FluentDark') {
          args.progressBar.secondaryProgressColor = '#2b5288'
        } else if (args.progressBar.theme === 'Fluent') {
          args.progressBar.secondaryProgressColor = '#98c5f5'
        } else if (args.progressBar.theme === 'TailwindDark') {
          args.progressBar.secondaryProgressColor = '#22D3EE'
        } else if (args.progressBar.theme === 'Tailwind') {
          args.progressBar.secondaryProgressColor = '#4F46E5'
        } else if (args.progressBar.theme === 'Fluent2') {
          args.progressBar.secondaryProgressColor = '#0F6CBD'
        } else if (args.progressBar.theme === 'Fluent2Dark') {
          args.progressBar.secondaryProgressColor = '#115EA3'
        } else if (args.progressBar.theme === 'Fluent2HighContrast') {
          args.progressBar.secondaryProgressColor = '#1AEBFF'
        }
         else if (args.progressBar.theme === 'Tailwind3Dark') {
           args.progressBar.secondaryProgressColor = '#6366F1'
         } else if (args.progressBar.theme === 'Tailwind3') {
           args.progressBar.secondaryProgressColor = '#4F46E5'
         }
  }
  }
};
</script>
