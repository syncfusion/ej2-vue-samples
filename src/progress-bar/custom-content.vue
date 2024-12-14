<template>
 <div class="control-section progress-bar-parent">
 <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4 paligncenter">
      <div id="label-container">
          <ejs-progressbar
            ref="label"
            id="label-progress"
            type='Circular'
            :value='value1'
            width='160px'
            height='160px'
            :startAngle='start'
            :endAngle='end'
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
   <div class="col-lg-4 col-md-4 col-sm-4 paligncenter">
      <div id="pause-container">
        <ejs-progressbar
            ref="pause"
            id="pause-progress"
            type='Circular'
            :value='value'
            width='160px'
            height='160px'
            :progressCompleted='progressCompleted1'
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
    <div class="col-lg-4 col-md-4 col-sm-4 paligncenter">
     <div id="download-container">
        <ejs-progressbar
            ref="download"
            id="download-progress"
            type='Circular'
            :value='value'
            width='160px'
            height='160px'
            :progressCompleted='progressCompleted2'
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
  <div class="row">
    <div class="col-lg-12 col-md-12 col-12 reload-btn">
          <button id="reLoad" class="e-control e-btn e-lib e-outline e-primary" @click="onclick">Reload</button>
     </div>
  </div>
  <div id="action-description">
      <p> This sample illustrates a circular progress bar to show <code>progressCompleted</code> event with <code>annotation</code>.</p>
    </div>
    <div id="description">
      <p> This demo for Essential<sup>®</sup> JS2 Progress Bar control shows the progress bar with custom content with the help of annotation.</p>
    </div>
  </div>
</template>
   <style>
    #control-container {
        padding: 0px !important;
    }
    .progress-bar-parent {
        margin-top: 8%;
        text-align: center;
    }
    .paligncenter {
        text-align: center;
    }
    .plabeltxt {
        font-size: 20px;
        font-weight: bold;
    }
    .reload-btn {
        text-align: center;
        margin-top: 3%;
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

    let clearTimeout1;
    let clearTimeout2;
    let annotationColors = { fluent: '#0D6EFD', fluentdark: '#0D6EFD', material: '#e91e63', fabric: '#0078D6', bootstrap: '#317ab9', bootstrap4: '#007bff', highcontrast: '#FFD939', tailwind: '#4F46E5', bootstrap5: '#0D6EFD', bootstrap5dark: '#0D6EFD', bootstrapdark: '#9A9A9A', fabricdark: '#9A9A9A', materialdark: '#9A9A9A', tailwinddark: '#6366F1', material3 : '#6750A4', material3dark: '#D0BCFF', fluent2: '#0F6CBD', fluent2dark: '#115EA3', fluent2highcontrast: '#1AEBFF' , tailwind3: '#4F46E5', tailwind3dark: '#6366F1' };

export default {
  data: function() {
    return {
      value: 100,
      value1:80,
      start:180,
      end:180,
      animation: {
        enable: true,
        duration: 2000,
        delay: 0
      },
      content1: '<img src="src/progress-bar/images/pause.svg" alt="Pause Icon"></img>',
      content2: '<img src="src/progress-bar/images/Download.svg" alt="Download Icon"></img>',
      content3: '<div id="point1" style="font-size:20px;font-weight:bold;color:#b52123;fill:#b52123"><span>80%</span></div>',
    };
  },
  components: { 
    'ejs-progressbar': ProgressBarComponent,
    'e-progressbar-annotations':  ProgressBarAnnotationsDirective,
    'e-progressbar-annotation':  ProgressBarAnnotationDirective
   },
  provide: {
    progressbar: [ProgressAnnotation]
  },
  methods: {
      onclick: function() {
      this.$refs.label.ej2Instances.refresh();
      this.$refs.pause.ej2Instances.refresh();
      this.$refs.download.ej2Instances.refresh();
    },
    load: function(args) {
      let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        if (args.progressBar.element.id === 'label-progress') {
            // tslint:disable-next-line:max-line-length
            args.progressBar.annotations[0].content = '<div id="point1" class="plabeltxt" style="color: ' + annotationColors[selectedTheme.replace(/-/i, '')] + ' "><span>80%</span></div>';
        } else if (args.progressBar.element.id === 'download-progress') {
            args.progressBar.annotations[0].content = '<img src="src/progress-bar/images/' + selectedTheme.replace(/-/i, '') + '-Download.svg" alt="Download Icon"></img>';
        } else {
            args.progressBar.annotations[0].content = '<img src="src/progress-bar/images/' + selectedTheme.replace(/-/i, '') + '-pause.svg" alt="Pause Icon"></img>';
        }
    },
    progressCompleted1: function() {
      clearTimeout(clearTimeout1);
      clearTimeout1 = setTimeout(
      () => {
      //tslint:disable-next-line
      this.$refs.pause.ej2Instances.annotations[0].content = '<img src="src/progress-bar/images/' + (this.$refs.pause.ej2Instances.theme).toLowerCase() + '-Play.svg" alt="Play Icon"></img>';
      this.$refs.pause.ej2Instances.dataBind();
      },
      2000);

    },
    progressCompleted2: function() {
      clearTimeout(clearTimeout2);
      clearTimeout2 = setTimeout(
      () => {
       //tslint:disable-next-line
      this.$refs.download.ej2Instances.annotations[0].content = '<img src="src/progress-bar/images/' + ( this.$refs.download.ej2Instances.theme).toLowerCase() + '-Tick.svg" alt="Tick Icon"></img>';
      this.$refs.download.ej2Instances.dataBind();
       },
       2000);

    }
  }
};
</script>