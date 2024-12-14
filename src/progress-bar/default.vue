<template>
 <div class="control-section progress-bar-parent">
     <div class="row">
        <div class="col-lg-3 col-md-3 col-3 progress-container">
            <div class="row progress-container-align">
           <div class="col-lg-12 col-md-12 col-12" id="circular-container">
           <ejs-progressbar
            ref="circluar"
            id="circular-progress"
            type='Circular'
            :value ='value1'
            width='160px'
            height='160px'
            :startAngle='startAngle'
            :endAngle='endAngle'
            :animation="animation"
            :load='load'
            >
           </ejs-progressbar>
        </div>
        <div class="col-lg-12 col-md-12 col-12 progress-text">
        <div class="progress-text-align">Determinate</div>  
        </div>
        </div>
        </div>
         <div class="col-lg-3 col-md-3 col-3 progress-container">
          <div class="row progress-container-align">
          <div class="col-lg-12 col-md-12 col-12" id="rtl-container">
          <ejs-progressbar
           ref="rtl"
           id="rtl-progress"
           type='Circular'
           :value='value2'
           width='160px'
           height='160px'
           :secondaryProgress='secondary' 
           :animation='animation'         
           :load='load'
           >
          </ejs-progressbar>
        </div>
      <div class="col-lg-12 col-md-12 col-12 progress-text">
      <div class="progress-text-align">Buffer </div>
      </div>
      </div>
      </div>
      <div class="col-lg-3 col-md-3 col-3 progress-container">
       <div class="row progress-container-align">
        <div class="col-lg-12 col-md-12 col-12" id="track-container">
          <ejs-progressbar
            ref="track"
            id="track-progress"
            type='Circular'
             minimum=0
             maximum=100
            :value='value3'
             width='160px'
             height='160px'
            :segmentCount='count'
            :animation="animation"
            :load='load'
           >
          </ejs-progressbar>
        </div>
        <div class="col-lg-12 col-md-12 col-12 progress-text">
        <div class="progress-text-align">Segment</div>
        </div>
        </div>
       </div>
       <div class="col-lg-3 col-md-3 col-3 progress-container">
       <div class="row progress-container-align">
       <div class="col-lg-12 col-md-12 col-12" id="rounded-container">
          <ejs-progressbar
            ref="rounded"
            id="rounded-progress"
            type='Circular'
            :value='value4'
            width='160px'
            height='160px'
            cornerRadius='Round'
            isIndeterminate=true
            :load='load'
            >
         </ejs-progressbar>
        </div>
         <div class="col-lg-12 col-md-12 col-12 progress-text">
         <div class="progress-text-align">Indeterminate</div>
      </div>
     </div>
    </div>
  </div>
    <div class="row">
    <div class="col-lg-12 col-md-12 col-12 reload-btn">
    <button  id=reLoad class="e-control e-btn e-lib e-outline e-primary" @click='onclick'>
      Reload
    </button>
  </div>
 </div>
<div id="action-description">
      <p>This sample illustrates a circular progress bar with determinate and indeterminate states, segments and buffer value.</p>
    </div>
    <div id="description">
      <p> In this example, you can see how to render and configure the circular progress bar. Progress bar is used to visualize the progression of an extended operation. The sample shows the determinate and indeterminate states, buffer and segments of circular progress bar.</p>
    </div>
 </div>
 </template>
<style scoped>
   #control-container {
        padding: 0px !important;
    }
    .annotaion-pro {
            font-family: Roboto-Regular;
            font-size: 20px;
            color: #1B1C1A;
            letter-spacing: 0.01px;
        }
        .progress-bar-parent {
            margin-top: 8%;
            text-align: center;
        }
        .progress-text {
            display: inline-flex;
            margin: auto;
        }
        .progress-text-align {
            font-family: Roboto-Regular;
            font-size: 14px;
            color: #3D3E3C;
            letter-spacing: 0;
            margin: auto;
        }

        #control-container {
            padding: 0px !important;
        }

        .progress-container-align {
            text-align: center;
        }

        .reload-btn {
            text-align: center;
            margin-top:6%;
        }

        #reLoad {
            border-radius: 4px;
            text-transform: capitalize;
        }

        .progress-container {
            /*height: -webkit-fill-available; */
            display: inline-flex;
        }
</style>
<script>
import {
  ProgressBarComponent,
  ProgressAnnotation
} from "@syncfusion/ej2-vue-progressbar";
 
let div = document.getElementsByClassName('progress-text-align');

export default {
  components: {
    'ejs-progressbar': ProgressBarComponent
  },
  data: function() {
    return {
      value1: 100,
      value2: 70,
      value3: 100,
      value4: 20,
      secondary:90,
      startAngle:180,
      endAngle:180,
      animation: {
        enable: true,
        duration: 2000,
        delay: 0
      },
      count:4,
     };
  },
  provide: {
    progressbar: [ProgressAnnotation]
  },
  methods: {
    onclick: function() {
      this.$refs.circluar.ej2Instances.refresh();
      this.$refs.rtl.ej2Instances.refresh();
      this.$refs.track.ej2Instances.refresh();
      this.$refs.rounded.ej2Instances.refresh();
    },
    load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        if(args.progressBar.theme === 'HighContrast' || args.progressBar.theme === 'Bootstrap5Dark' || args.progressBar.theme === 'BootstrapDark' || args.progressBar.theme === 'FabricDark'
                || args.progressBar.theme === 'TailwindDark' || args.progressBar.theme === 'Tailwind3Dark' || args.progressBar.theme === 'MaterialDark' || args.progressBar.theme === 'FluentDark' || args.progressBar.theme === 'Material3Dark' || args.progressBar.theme === 'Fluent2Dark' || args.progressBar.theme === 'Fluent2HighContrast') {
            for (let i = 0; i < div.length; i++) {
                div[i].setAttribute('style', 'color:white');
            }
         }
      }
  }
}
</script>