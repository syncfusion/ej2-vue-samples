<template>
  <div class="control-section progress-bar-parent">
    <div class="row">
        <div class="col-lg-3 col-md-3 col-3 progress-container">
          <div class="col-lg-3 col-md-3 col-3 progress-container">
          <div id="angle-container">
           <ejs-progressbar
            ref="angle"
            id="angle-progress"
            type='Circular'
            :startAngle='startAngle1'
            :endAngle='endAngle1'
            :minimum='minimum'
            width='160px'
            height='160px'
            :maximum='maximum'
            :value='value1'
            cornerRadius='Round'
            :trackThickness='trackThickness'
            :progressThickness='progressThickness'
            :animation="animation"
            :load='load'
            >
            <e-progressbar-annotations>
              <e-progressbar-annotation
               :content="content1"
              ></e-progressbar-annotation>
            </e-progressbar-annotations>
            </ejs-progressbar>
            </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-3 progress-container">
            <div class="progress-container-align">
             <div id="vertical-container">
            <ejs-progressbar
            ref="vertical"
            id="vertical-progress"
            type='Circular'
            :startAngle='startAngle2'
            :endAngle='endAngle2'
            :minimum='minimum'
            width='160px'
            height='160px'
            :maximum='maximum'
            :value='value2'
            cornerRadius='Round'
            :trackThickness='trackThickness'
            :progressThickness='progressThickness'
            :animation="animation"
            :load='load'
            >
            <e-progressbar-annotations>
              <e-progressbar-annotation
               :content="content2"
              ></e-progressbar-annotation>
            </e-progressbar-annotations>
            </ejs-progressbar>
            </div>
            </div>
           </div>
           <div class="col-lg-3 col-md-3 col-3 progress-container">
             <div class="progress-container-align">
                <div id="vsemi-container">
            <ejs-progressbar
            ref="vsemi"
            id="vsemi-progress"
            type='Circular'
            :startAngle='startAngle3'
            :endAngle='endAngle3'
            :minimum='minimum'
            width='160px'
            height='160px'
            :maximum='maximum'
            :value='value3'
            cornerRadius='Round'
            :trackThickness='trackThickness'
            :progressThickness='progressThickness'
            :animation="animation"
            :load='load'
            >
            <e-progressbar-annotations>
              <e-progressbar-annotation
                :content="content3"
              ></e-progressbar-annotation>
            </e-progressbar-annotations>
            </ejs-progressbar>  
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-3 progress-container">
          <div class="progress-container-align">
             <div id="semi-container">
           <ejs-progressbar
            ref="semi"
            id="semi-progress"
            type='Circular'
            :startAngle='startAngle4'
            :endAngle='endAngle4'
            :minimum='minimum'
            width='160px'
            height='160px'
            :maximum='maximum'
            :value='value4'
            cornerRadius='Round'
            :trackThickness='trackThickness'
            :progressThickness='progressThickness'
            :animation="animation"
            :load='load'
            >
             <e-progressbar-annotations>
              <e-progressbar-annotation
                :content="content4"
              ></e-progressbar-annotation>
            </e-progressbar-annotations>
            </ejs-progressbar>  
             </div>
          </div>
       </div>
     </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-12 reload-btn">
            <button id="reLoad" class="e-control e-btn e-lib e-outline e-primary" @click="onclick">Reload</button>
        </div>
    </div>
 <div id="action-description">
      <p>This sample illustrates a circular progress bar with start and end angle customized.</p>
    </div>
    <div id="description">
      <p> This demo for Essential<sup>®</sup> JS2 Progress Bar control shows the customizing options for angle in circular progress bar. Annotation is enabled in the sample to represent the progress value with animation.</p>
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
            font-size: 12px;
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

</style>
<script>
import {
  ProgressBarComponent,
  ProgressAnnotation,
  ProgressBarAnnotationsDirective,
  ProgressBarAnnotationDirective
} from "@syncfusion/ej2-vue-progressbar";
 function annotationElementContent(color, controlID) {
        let content;
        switch (controlID) {
            case 'angle-container':
                content = '100%';
                break;
            case 'vertical-container':
                content = '100%';
                break;
            case 'semi-container':
                content = '100%';
                break;
            case 'vsemi-container':
                content = '100%';
                break;
        }
        return ('<div id="point1" style="font-size:24px;font-weight:bold;color: ' + color + ' "><span>' + content + '</span></div>');
    }
    let annotationColors = ['#e91e63', '#0078D6', '#317ab9', '#007bff', '#4F46E5', '#FFD939', '#9A9A9A', '#22D3EE', '#0D6EFD', '#6750A4', '#D0BCFF', '#0F6CBD', '#1AEBFF', '#115EA3', '#6366F1'];

export default {
  components: {
    'ejs-progressbar': ProgressBarComponent,
    'e-progressbar-annotations':  ProgressBarAnnotationsDirective,
    'e-progressbar-annotation':  ProgressBarAnnotationDirective
  },
  data: function() {
    return {
      startAngle1:240,
      endAngle1:120,
      value1:100,
      startAngle2:180,
      endAngle2:0,
      value2:100,
      startAngle3:0,
      endAngle3:180,
      value3:100,
      startAngle4:270,
      endAngle4:90,
      value4:100,
      minimum:0,
      maximum:100,
      trackThickness:5,
      progressThickness:5,
      cornerRadius: 'Round',
       animation: {
        enable: true,
        duration: 2000,
        delay: 0
      },
      angle1:310,
      angle2:340,
      angle3:330,
      content1: '<div id="point1" style="font-size:35px;font-weight:bold;color:#0078D6;fill:#0078D6"><span>100%</span></div>',
      content2: '<div id="point1" style="font-size:35px;font-weight:bold;color:#0078D6;fill:#0078D6"><span>100%</span></div>',
      content3: '<div id="point1" style="font-size:35px;font-weight:bold;color:#0078D6;fill:#0078D6"><span>100%</span></div>',
      content4: '<div id="point1" style="font-size:35px;font-weight:bold;color:#0078D6;fill:#0078D6"><span>100%</span></div>',
     };
  },
  provide: {
    progressbar: [ProgressAnnotation]
  },
  methods: {
     onclick: function() {
      this.$refs.angle.ej2Instances.refresh();
      this.$refs.vertical.ej2Instances.refresh();
       this.$refs.vsemi.ej2Instances.refresh();
      this.$refs.semi.ej2Instances.refresh();
     },
     load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        switch (selectedTheme) {
            case 'material':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[0], args.progressBar.element.id);
                break;
            case 'fabric':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[1], args.progressBar.element.id);
                break;
            case 'bootstrap':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[2], args.progressBar.element.id);
                break;
            case 'bootstrap4':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[3], args.progressBar.element.id);
                break;
            case 'tailwind':
            case 'tailwind3':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[4], args.progressBar.element.id);
                break;
            case 'bootstrap-dark':
            case 'fabric-dark':
            case 'material-dark':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[6], args.progressBar.element.id);
                break;
            case 'bootstrap5':
            case 'bootstrap5-dark':
            case 'fluent':
            case 'fluent-dark':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[8], args.progressBar.element.id);
                break;
            case 'tailwind3-dark':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[14], args.progressBar.element.id);
                break;
            case 'tailwind-dark':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[7], args.progressBar.element.id);
                break;
            case 'material3':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[9], args.progressBar.element.id);
                break;
            case 'material3-dark':
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[10], args.progressBar.element.id);
                break;
            case "fluent2":
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[11], args.progressBar.element.id);
                break;
            case "fluent2-dark":
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[13], args.progressBar.element.id);
                break;
            case "fluent2-highcontrast":
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[12], args.progressBar.element.id);
                break;
            default:
                args.progressBar.annotations[0].content = annotationElementContent(annotationColors[5], args.progressBar.element.id);
                break;
          }
      }
  }
}
</script>
