<template>
  <div class="control-section progress-bar-parent">
    <div class="row" style="margin-top: 2%">
      <div class="col-lg-3 col-md-3 col-3" align="center">
        <div id="full-background">
          <ejs-progressbar
            ref="circluar"
            id="full-container"
            type="Circular"
            :value="value1"
            width="160px"
            height="160px"
            radius="100%"
            innerRadius="190%"
            :progressThickness="progressthickness1"
            :trackThickness="trackthickness1"
            cornerRadius="Round"
            :animation="animation"
            :load="load1"
          >
            <e-progressbar-annotations>
              <e-progressbar-annotation
                :content="content"
              ></e-progressbar-annotation>
            </e-progressbar-annotations>
          </ejs-progressbar>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-3" align="center">
        <div id="outer-radius">
          <ejs-progressbar
            ref="rtl"
            id="rtl-container"
            type="Circular"
            :value="value2"
            width="160px"
            height="160px"
            innerRadius="72"
            :progressThickness="progressthickness2"
            cornerRadius="Round"
            :animation="animation"
            :load="load"
          >
          </ejs-progressbar>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-3" align="center">
        <div id="on-radius">
          <ejs-progressbar
            ref="track"
            id="track-container"
            type="Circular"
            :value="value3"
            width="160px"
            height="160px"
            :trackThickness="trackthickness3"
            :progressThickness="progressthickness3"
            :animation="animation"
            :load="load"
          >
          </ejs-progressbar>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-3" align="center">
        <div id="pie">
          <ejs-progressbar
            ref="pie"
            id="pie-container"
            type="Circular"
            :value="value4"
            width="160px"
            height="160px"
            :enablePieProgress="pie"
            :animation="animation"
            :load="load"
          >
          </ejs-progressbar>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-12 reload-btn">
        <button
          id="reLoad"
          class="e-control e-btn e-lib e-outline e-primary"
          @click="onclick"
        >
          Reload
        </button>
      </div>
    </div>
    <div id="action-description">
      <p>
        This sample illustrates a circular progress bar with customization
        options like radius, inner-radius, pie progress, track and progress
        thickness.
      </p>
    </div>
    <div id="description">
      <p>
        This demo for Essential JS2 Progress Bar control shows the customizing
        options for radius, inner-radius, pie progress, track and progress
        thickness.
      </p>
    </div>
  </div>
</template>
<style>
#control-container {
  padding: 0px !important;
}
.reload-btn {
  text-align: center;
  margin-top: 6%;
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
import { loadProgressBarTheme } from "./theme-color";

export default {
  data: function () {
    return {
      animation: {
        enable: true,
        duration: 2000,
        delay: 0,
      },
      pie: true,
      value1: 60,
      value2: 90,
      value3: 90,
      value4: 70,
      trackthickness1: 80,
      progressthickness1: 10,
      progressthickness2: 8,
      trackthickness3: 3,
      progressthickness3: 8,
      trackthickness4: 70,
      progressthickness4: 70,
      content:
        '<div id="point1" style="font-size:20px;font-weight:bold;color:#ffffff;fill:#ffffff"><span>60%</span></div>',
    };
  },
  components: { 
    'ejs-progressbar': ProgressBarComponent,
    'e-progressbar-annotations':  ProgressBarAnnotationsDirective,
    'e-progressbar-annotation':  ProgressBarAnnotationDirective
   },
  provide: {
    progressbar: [ProgressAnnotation],
  },
  methods: {
    onclick: function () {
      this.$refs.circluar.ej2Instances.refresh();
      this.$refs.rtl.ej2Instances.refresh();
      this.$refs.track.ej2Instances.refresh();
      this.$refs.pie.ej2Instances.refresh();
    },
    load1: function (args) {
      loadProgressBarTheme(args);
         args.progressBar.progressColor = '#FFFFFF';
      switch (args.progressBar.theme) {
        case "Material":
          args.progressBar.trackColor = '#f8c2d4';
          args.progressBar.progressColor = '#e91e63';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#e91e63"><span></span></div>';
          break;
        case "Fabric":
          args.progressBar.progressColor = '#0078D6';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0078D6"><span></span></div>';
          break;
        case "Bootstrap":
          args.progressBar.progressColor = '#317ab9';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#317ab9"><span></span></div>';
          break;
        case 'Tailwind':
        case 'Tailwind3':
          args.progressBar.progressColor = '#4F46E5';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#4F46E5"><span></span></div>';
          break;
        case "HighContrast":
          args.progressBar.progressColor = '#FFD939';
          args.progressBar.annotations[0].content =
            '<div id="point1" style="font-size:20px;font-weight:bold;color:#FFD939;"><span>60%</span></div>';
          break;
        case 'BootstrapDark':
        case 'FabricDark':
        case 'MaterialDark':
            args.progressBar.progressColor = '#9A9A9A';
            args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#9A9A9A"><span></span></div>';
            break;
        case 'TailwindDark':
          args.progressBar.progressColor = '#22D3EE';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#22D3EE"><span></span></div>';
          break;
        case 'Tailwind3Dark':
            args.progressBar.progressColor = '#6366F1';
            args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#6366F1"><span></span></div>';
            break;
        case 'Bootstrap4':
            args.progressBar.progressColor = '#007bff';
            args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#007bff"><span></span></div>';
            break;
        case 'Bootstrap5':
        case 'bootstrap5-dark':
        case 'FluentDark':
            args.progressBar.progressColor = '#0D6EFD';
            args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0D6EFD"><span></span></div>';
            break;
        case 'Material3':
            args.progressBar.progressColor = '#6750A4';
            args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#6750A4"><span></span></div>';
            break;
        case 'Material3Dark':
            args.progressBar.progressColor = '#D0BCFF';
            args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#D0BCFF"><span></span></div>';
            break; 
        case 'Fluent':
            if (args.progressBar.element.id === "full-background") {
              args.progressBar.progressColor = '#0D6EFD';
            } else {
              args.progressBar.trackColor = '#0D6EFD';
            }
            break;
        case 'Fluent2':
            args.progressBar.progressColor = '#0F6CBD';
            args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#0F6CBD"><span></span></div>';
            break;
        case 'Fluent2Dark':
            args.progressBar.progressColor = '#115EA3';
            args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#115EA3"><span></span></div>';
            break;
        case 'Fluent2HighContrast':
            args.progressBar.progressColor = '#1AEBFF';
            args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#1AEBFF"><span></span></div>';
            break;
        default:
          args.progressBar.progressColor = '#D0BCFF';
          args.progressBar.annotations[0].content = '<div id="point1" style="font-size:24px;font-weight:bold;color:#D0BCFF"><span></span></div>';
          break;
      }
    },
    load: function (args) {
      loadProgressBarTheme(args);
    },
    // loaded: function (args) {
    //   if (args.progressBar.theme === "Material") {
    //     let element = document.getElementById(
    //       "circular-container_Circulartrack"
    //     );
    //     element.setAttribute("style", "opacity:1");
    //   }
    // },
  },
};
</script>
