<template>
    <div class="control-section">
      <div class="row linear-parent">
             <div class="col-lg-12 col-md-12 progressbar-label-tooltip" >HTML5</div>
              <div class="linear-progress">
              <div id="lineardeterminate1">
              <ejs-progressbar
              ref="determinate1"
              id="lineardeterminate"
              type='Linear'
              height='60'
              :value='value1'
              :animation="animation"
              :tooltip="tooltip"
              :trackThickness='trackThickness'
              :progressThickness='progressThickness'
              :load='load'
              >
              </ejs-progressbar>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 progressbar-label-tooltip">CSS3</div>
          <div class="linear-progress">
          <div id="lineardeterminate3">
            <ejs-progressbar
              ref="determinate3"
              id="successcontainer"
              type='Linear'
              height='60'
              :tooltip="tooltip"
              :value='value2'
              :trackThickness='trackThickness'
              :progressThickness='progressThickness'
              :load='load'
              :animation="animation"
              >
              </ejs-progressbar>
              </div>
            </div>
             <div class="col-lg-12 col-md-12 progressbar-label-tooltip" >Bootstrap</div>
              <div  class="linear-progress">
              <div id="lineardeterminate4">
             <ejs-progressbar
              ref="determinate4"
              id="errorcontainer" 
              type='Linear'
              :tooltip="tooltip"
              height='60'
              :value='value3'
              :animation="animation"
              :trackThickness='trackThickness'
              :progressThickness='progressThickness'
              :load='load'
              >
              </ejs-progressbar> 
              </div>
            </div>
             <div class="col-lg-12 col-md-12 progressbar-label-tooltip" >JavaScript</div>
            <div class="linear-progress">
            <div id="lineardeterminate5">
            <ejs-progressbar
              ref="determinate5"
              id="warningscontainer"                           
              type='Linear'
              :tooltip="tooltip"
              height='60'
              :value='value4'
              :animation="animation"
              :trackThickness='trackThickness'
              :progressThickness='progressThickness'
              :load='load'
              >
              </ejs-progressbar>
              </div>
           </div>
             <div class="col-lg-12 col-md-12 progressbar-label-tooltip" >MySQL</div>
              <div class="linear-progress">
              <div id="lineardeterminate2">
              <ejs-progressbar
              ref="determinate2"
              id="lineadrdeterminate"
              type='Linear'
              height='60'
              :value='value1'
              :animation="animation"
              :tooltip="tooltip"
              :trackThickness='trackThickness'
              :progressThickness='progressThickness'
              :load='load'
              >
              </ejs-progressbar>
            </div>
          </div>
          
      </div>
      <div id="action-description">
        <p>This sample illustrates a linear progress bar with a tooltip.</p>
      </div>
      <div id="description">
        <p>In this example, you can see how to render and configure the linear progress bar with a tooltip. The <code>format</code> and <code>textStyle</code> properties in the tooltip settings can be used to format and customize the tooltip text.</p>
      </div>
    </div>
  </template>
  <style scoped>
    .e-progressbar, #lineardeterminate, #linearindeterminate, #linearbuffer, #linearsegment {
              display: block;
          }
          .actual-txt{
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
  
          .progressbar-label-tooltip {
            text-align: left;
            font-family: Roboto-Regular;
            font-size: 14px;
            color: #3D3E3C;
            letter-spacing: 0;
            margin-left: 9.5%;
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

  
  </style>
  <script>
  import { ProgressBarComponent } from "@syncfusion/ej2-vue-progressbar";
  
  let div = document.getElementsByClassName('progressbar-label-tooltip');
  
  export default {
    components: {
      'ejs-progressbar': ProgressBarComponent
    },
    data: function() {
      return {
        value1: 75,
        value2: 65,
        value3: 55,
        value4: 75,
        value5: 45,
        value6: 60,
        trackThickness:20,
        progressThickness:20,
        animation: {
          enable: true,
          duration: 2000,
          delay: 0
        },
        tooltip: {
            enable: true,
        }
      };
    },
    provide: {},
    methods: {
      onclick: function() {
        this.$refs.determinate1.ej2Instances.refresh();
        this.$refs.determinate2.ej2Instances.refresh();
        this.$refs.determinate3.ej2Instances.refresh();
        this.$refs.determinate4.ej2Instances.refresh();
        this.$refs.determinate5.ej2Instances.refresh();
      },
      load: function(args) {
          let selectedTheme = location.hash.split('/')[1];
          selectedTheme = selectedTheme ? selectedTheme : 'Material';
          args.progressBar.theme = (selectedTheme.charAt(0).toUpperCase() +
          selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
          if(args.progressBar.theme === 'HighContrast' || args.progressBar.theme === 'Bootstrap5Dark' || args.progressBar.theme === 'BootstrapDark' || args.progressBar.theme === 'FabricDark'
                  || args.progressBar.theme === 'TailwindDark' || args.progressBar.theme === 'MaterialDark' || args.progressBar.theme === 'FluentDark' || args.progressBar.theme === 'Material3Dark') {
              for (let i = 0; i < div.length; i++) {
                  div[i].setAttribute('style', 'color:white');
              }
           }
    }
    }
  };
  </script>
  
