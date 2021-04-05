<template>
  <div class="control-section">
    <div class="row linear-parent">
          <div>
             <div class="col-lg-12 col-sm-12 progressbar-mode"></div>
                <div id="linearprogress">
                 <ejs-progressbar
                   id="Linearsegment"
                   ref="linearseg"
                   type='Linear'
                   height='30'
                   width='70%'
                   :trackThickness='trackThickness'
                   :progressThickness='progressThickness'
                   :value=value
                   :segmentCount=count
                   :gapWidth=gap
                   :loaded='loaded'
                   :animation='animation'
                   cornerRadius='Square'
                   :load='progressLoad'
                  >
                 </ejs-progressbar>
                 </div>
             </div>
             <div>
              <div class="col-lg-12 col-sm-12 progressbar-mode"></div>
                <div id="circularprogress">
                  <ejs-progressbar
                   id="Circularsegment"
                   ref="circularseg"
                   type='Circular'
                   height='200px'
                   width='200px'
                   :trackThickness='trackThickness'
                   :progressThickness='progressThickness'
                   :startAngle='startAngle'
                   :endAngle='endAngle'
                   :value=value
                   :segmentCount=count
                   :gapWidth=gap
                   cornerRadius='Square'
                   :load='load'
                   :loaded='loaded'
                   :animation='animation'
                  >
                 </ejs-progressbar>
                <e-progressbar-annotations>
                 <e-progressbar-annotation
                  :content="content"
                 ></e-progressbar-annotation>
               </e-progressbar-annotations>
                </div>
            </div>
     </div>
     <div id="action-description">
      <p>
        This sample illustrates a segmented progress of a task
      </p>
    </div>
    <div id="description">
      <p>
         This demo for Essential JS2 Progress Bar control shows the segmented progress of a task using <code>segmentCount</code> and <code>gapWidth</code> property.
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
            width: 75%;
            margin: auto;
            margin-top: 5%;
        }
        
        .linear-button {
           text-align: center;
           padding:2%;
        }

        .progressbar-mode {
            text-align: left;
            font-family: Roboto-Regular;
            font-size: 14px;
            color: #3D3E3C;
            margin-left: 10px;
            margin-top: 5%;
            padding: 0px;
            top: 20px;
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
      value:40,
      trackThickness:15,
      progressThickness:15,
      count:50,
      gap:5,
      startAngle: 220,
      endAngle: 140,
      content: '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6"><span></span></div>',
      animation: {
          enable: true,
          duration: 2000,
          delay: 0,
        },
    };
  },
  provide: {
    progressbar: [ProgressAnnotation]
  },
  methods: {
     progressLoad: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
     },
  load: function(args) {
            let selectedTheme = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
            switch (selectedTheme) {
                case 'material':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#e91e63"><span></span></div>';
                    break;
                case 'fabric':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6"><span></span></div>';
                    break;
                case 'bootstrap':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#317ab9"><span></span></div>';
                    break;
                case 'bootstrap4':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#007bff"><span></span></div>';
                    break;
                default:
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#FFD939"><span></span></div>';
                    break;
    
            }
        },
  loaded: function(args) {
       let timer = setInterval(timing,2500)
       function timing() {
        if( args.progressBar.value >=  args.progressBar.maximum) {
        clearInterval(timer)
        } else {
         args.progressBar.value += 20;
       } 
      }
   }
  }
});
</script>
