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
                   :segmentCount=countValue
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
        This sample illustrates a segmented progress of a task.
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
import { Browser } from "@syncfusion/ej2-base";
import {
  ProgressBarComponent,
  ProgressAnnotation,
  ProgressBarAnnotationsDirective,
  ProgressBarAnnotationDirective
} from "@syncfusion/ej2-vue-progressbar";
import { loadProgressBarTheme } from "./theme-color";

export default {
  components: {
    'ejs-progressbar': ProgressBarComponent,
    'e-progressbar-annotations':  ProgressBarAnnotationsDirective,
    'e-progressbar-annotation':  ProgressBarAnnotationDirective
  },
  data: function() {
    return {
      value:40,
      trackThickness:15,
      progressThickness:15,
      count:50,
      countValue: Browser.isDevice ? 25 : 50,
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
       loadProgressBarTheme(args);
     },
  load: function(args) {
            loadProgressBarTheme(args);
            switch (args.progressBar.theme) {
                case 'Material':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#e91e63"><span></span></div>';
                    break;
                case 'Fabric':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6"><span></span></div>';
                    break;
                case 'Bootstrap':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#317ab9"><span></span></div>';
                    break;
                case 'Bootstrap4':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#007bff"><span></span></div>';
                    break;
                case 'Tailwind':
                case 'Tailwind3':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#4F46E5"><span></span></div>';
                    break;
                case 'BootstrapDark':
                case 'FabricDark':
                case 'MaterialDark':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#9A9A9A"><span></span></div>';
                    break;
                case 'Bootstrap5':
                case 'Bootstrap5Dark':
                case 'Fluent':
                case 'FluentDark':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0D6EFD"><span></span></div>';
                    break;
                case 'TailwindDark':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#22D3EE"><span></span></div>';
                    break;
                case 'Tailwind3Dark':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#6366F1"><span></span></div>';
                    break;
                case 'Material3':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#6750A4"><span></span></div>';
                    break;
                case 'Material3Dark':
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#D0BCFF"><span></span></div>';
                    break;
                case "Fluent2":
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0F6CBD"><span></span></div>';
                    break;
                case "Fluent2Dark":
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#115EA3"><span></span></div>';
                    break;
                case "Fluent2HighContrast":
                    args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#1AEBFF"><span></span></div>';
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
}
</script>