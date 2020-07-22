<template>
  <div class="control-section">
    <div class="row linear-parent">
      <div id="percentage" class="linear-progress">
          <ejs-progressbar
            id="percentage"
            ref="percentage"
            type='Linear'
            height='40'
            width='100%'
            :trackThickness='trackThickness'
            :progressThickness='progressThickness'
            :value=value1
            showProgressValue=true
            role='Success'
            :labelStyle='label1'
            :animation='animation'
            :load='load'
            >
            </ejs-progressbar>
        </div>
    <div id="ratio" class="linear-progress">
          <ejs-progressbar
            id="Ratio"
            ref="ratio"
            type='Linear'
            height='40'
            width='100%'
            :trackThickness='trackThickness'
            :progressThickness='progressThickness'
            :value=value2
            role='Info'
            showProgressValue=true
            :labelStyle='label2'
            :animation='animation'
            :load='load'
           >
           </ejs-progressbar>
      </div>
      <div id="acutal" class="linear-progress">
       <ejs-progressbar
            id="Actual"
            ref="actual"
            type='Linear'
            height='40'
            width='100%'
            :trackThickness='trackThickness'
            :progressThickness='progressThickness'
            :value=value3
            role='Warning'
            showProgressValue=true
            :labelStyle='label3'
            :animation='animation'
            :load='load'
            >
            </ejs-progressbar>
        </div>
      <div id="custom" class="linear-progress">
        <ejs-progressbar
            id="Custom"
            ref="custom"
            type='Linear'
            height='40'
            width='100%'
            :trackThickness='trackThickness'
            :progressThickness='progressThickness'
            :value=value4
            role='Danger'
            showProgressValue=true
            :labelStyle='label4'
            :animation='animation'
            :load='load'
            >
            </ejs-progressbar>
           </div>
      </div>
      <div class="row linear-button">
      <button id="reLoad" class="e-control e-btn e-lib e-outline e-primary" @click="onclick">Reload</button>
    </div>
     <div id="action-description">
      <p>
        This sample illustrates a linear progress bar to demonstrate different types of labels rendering.
      </p>
    </div>
    <div id="description">
      <p>
        This demo for Essential JS2 Progress Bar control shows the linear progress bar with different labels format with help of <code>labelStyle</code> and provide different modes using <code>role</code> property
      </p>
    </div>
  </div>
</template>
<style scoped>
   #control-container {
        padding: 0px !important;
    }
    .linear-parent {
        text-align: center;
        margin-top: 7%;
    }
    .linear-button {
        text-align: center;
    }
    .linear-progress {
        width: 80%;
        margin: auto;
        margin-bottom: 3%;
    }
    #reLoad {
        border-radius: 4px;
        text-transform: capitalize;
    }
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  ProgressBarPlugin,
  ProgressAnnotation
} from "@syncfusion/ej2-vue-progressbar";

Vue.use(ProgressBarPlugin);

export default Vue.extend({
  data: function() {
    return {
      value1:40,
      value2:50,
      value3:60,
      value4:70,
      trackThickness:24,
      progressThickness:24,
      label1:{
         textAlignment: 'Center',
         text: '40% Complete (Success)',
         color: '#ffffff'
      },
      label2:{
         textAlignment: 'Center',
         text: '50% Complete (Info)',
         color: '#ffffff'
      },
      label3:{
         textAlignment: 'Center',
         text: '60% Complete (Warning)',
         color: '#ffffff'
      },
      label4:{
         textAlignment: 'Center',
         text: '70% Complete (Danger)',
         color: '#ffffff'
      },
      animation: {
          enable: true,
          duration: 2000,
          delay: 0,
        },
    };
  },
  provide: {},
  methods: {
    onclick: function() {
      this.$refs.percentage.ej2Instances.refresh();
      this.$refs.ratio.ej2Instances.refresh();
      this.$refs.actual.ej2Instances.refresh();
      this.$refs.custom.ej2Instances.refresh();
     },
  load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        if(args.progressBar.theme === 'Material') {
                args.progressBar.trackColor = '#EAEAEA';
            }
      }
   }
});
</script>
