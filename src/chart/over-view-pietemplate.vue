<template>
    <div id="app" style='height:100%; width:100%;'>
         <ejs-accumulationchart class="chart-content" :theme='theme' ref="accumulationInstance" style='height:100%; width:100%;' :legendSettings="legendSettings" :tooltip="tooltip" :enableAnimation='enableAnimation' :enableBorderOnMouseMove='false' enableSmartLables='false' :pointRender="onPointRender"> 
            <e-accumulation-series-collection>
                <e-accumulation-series startAngle=270 endAngle=270 :palettes='palettes' :dataSource='seriesData' xName='Product' yName='Percentage' innerRadius="40%" radius="75%" :dataLabel="dataLabel" :border='border' > </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>
<script>
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";
let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data() {
    return {
      theme: theme,
      seriesData:  [
      { Product : "TV : 30 (12%)", Percentage : 12, TextMapping : "TV, 30 <br>12%"},
      { Product : "PC : 20 (8%)", Percentage : 8, TextMapping : "PC, 20 <br>8%"},
      { Product : "Laptop : 40 (16%)",  Percentage : 16, TextMapping : "Laptop, 40 <br>16%"},
      { Product : "Mobile : 90 (36%)", Percentage : 36, TextMapping : "Mobile, 90 <br>36%"},
      { Product : "Camera : 27 (11%)", Percentage : 11, TextMapping : "Camera, 27 <br>11%"}
     ],
     enableAnimation: true,
     border: { width: 3},
     legendSettings: { visible: false },
     dataLabel: { 
      visible: true,
      position: 'Outside', 
      name: 'TextMapping',
      connectorStyle: { length: '10px', type:'Curve' }},

     tooltip: {
      enable: true, format: '${point.x}', enableHighlight: true
     },
     palettes: ["#61EFCD", "#CDDE1F", "#FEC200", "#CA765A", "#2485FA", "#F57D7D", "#C152D2",
    "#8854D9", "#3D4EB8", "#00BCD7", "#4472c4", "#ed7d31", "#ffc000", "#70ad47", "#5b9bd5", "#c1c1c1", "#6f6fe2", "#e269ae", "#9e480e", "#997300"],
    };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
  methods: {
    onPointRender: function (args) {
      let selectedTheme= location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        if (selectedTheme.indexOf('dark') > -1 )
        {
          if(selectedTheme.indexOf('material') > -1 )
          {
            args.border.color = '#303030' ;
            this.layoutColor= '#303030' ;
          }
          else if(selectedTheme.indexOf('bootstrap5') > -1 )
          {
            args.border.color = '#212529' ;
            this.layoutColor= '#212529' ;
          }
          else if(selectedTheme.indexOf('bootstrap') > -1 )
          {
            args.border.color = '#1A1A1A' ;
            this.layoutColor= '#1A1A1A' ;
          }
          else if(selectedTheme.indexOf('tailwind') > -1 )
          {
            args.border.color = '#1F2937' ;
            this.layoutColor= '#1F2937' ;
          }
          else if(selectedTheme.indexOf('fluent') > -1 )
          {
            args.border.color = '#252423' ;
            this.layoutColor= '#252423' ;
          }
          else if(selectedTheme.indexOf('fabric') > -1 )
          {
            args.border.color = '#201f1f' ;
            this.layoutColor= '#201f1f' ;
          }
          else
          {
            args.border.color = '#222222' ;
            this.layoutColor= '#222222' ;
          }
        }
        else if(selectedTheme.indexOf('highcontrast') > -1)
        {
          args.border.color = '#000000' ;
          this.layoutColor= '#000000' ;
        }
        else if(selectedTheme.indexOf('fluent2-highcontrast') > -1) {
          args.border.color = '#000000';
          this.layoutColor = '#000000';
        }
        else
        {
          args.border.color = '#FFFFFF' ;
          this.layoutColor= '#FFFFFF' ;
        }
      if (selectedTheme.indexOf('highcontrast') > -1 || selectedTheme.indexOf('dark') > -1) {
        let element = document.querySelector('#header1')
        element.style.color = '#F3F2F1';
        let element1 = document.querySelector('#header2')
        element1.style.color = '#F3F2F1';
        let element2 = document.querySelector('#header3')
        element2.style.color = '#F3F2F1';
      }
      let elementBody =  document.querySelector('#layout_0_body')
      if (elementBody != null) {
      elementBody.style.background= this.layoutColor;
      }
      let elementBody1 =  document.querySelector('#layout_2_body') 
      if (elementBody1 != null) {
        elementBody1.style.background = this.layoutColor;
      }
      let elementBody2 =  document.querySelector('#layout_1_body') 
      if (elementBody2 != null) {
        elementBody2.style.background = this.layoutColor;
      }
      let element = document.querySelector('#layout_0template')
      if (element != null) {
        element.style.background = this.layoutColor;
      }
      let element1 = document.querySelector('#layout_1template')
      if (element1 != null) {
        element1.style.background = this.layoutColor;
      }
      let element2 = document.querySelector('#layout_2template')
      if (element2 != null) {
        element2.style.background = this.layoutColor;
      }
    }
  },
    mounted(){
    this.$refs.accumulationInstance.ej2Instances.height ="100%";
    this.$refs.accumulationInstance.ej2Instances.width ="100%";
  }
};
</script>
<style>
  .dashboard-dynamic .chart-content{
    height: 100%;
    width:100%;
  }
  .dashboard-dynamic #container{
    width: 100%;
    height: 100%;
  }
</style>
