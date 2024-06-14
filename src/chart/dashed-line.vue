<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='dashed-chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip' :crosshair='crosshair' :load='load'>
          <e-annotations>
            <e-annotation content='<div >Actual</div>' coordinateUnits='Point' x='Feb' y='125' >
            </e-annotation>
            <e-annotation content='<div >Forecast</div>' coordinateUnits='Point' x='Aug' y='210'>
            </e-annotation>
          </e-annotations>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='Period' yName='Banana_ProductionRate' opacity=1 width=2 :marker='marker'> </e-series>
                <e-series :dataSource='seriesData1' type='Line' xName='Period' yName='Banana_ProductionRate' opacity=1 dashArray=10 width=2 :marker='marker'> </e-series>  
            </e-series-collection>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample shows the rate of fruit production statistics with default line series and dash array in the chart. Dashed lines are animated using CSS animation.
    </p>
</div>
<div id="description">
    <p>
        In this example, you will see how to render and configure the line chart. Line charts are used to represent time-dependent data, showing trends in data at equal intervals. You can use
        <code>DashArray</code>,
        <code>Width</code>, and 
        <code>Fill</code> properties to customize the line.
    </p>
    <p>
        <code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use line series, we need to inject
        <code>LineSeries</code> module using
        <code>provide: { chart: [LineSeries, Legend, DateTime, Tooltip, Crosshair]},</code> method.
    </p>
    <p>
        More information about the dashed line series can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/line#series-customization" aria-label="Navigate to the documentation for Series customization in Vue Chart component">documentation section</a>.
    </p>
</div>
</div>


</template>
<style >
#control-container {
        padding: 0px !important;
    }
    
        #dashed-chartcontainer_Series_1 {
            stroke-dasharray: 10px 10px;
            stroke-linejoin: round;
            stroke-linecap: round;
            animation: dash 1s linear infinite;
        }
    
    
    @-webkit-keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }
    
    @keyframes dash {
        100% {
            stroke-dashoffset: -20px;
        }
    }
    
    @keyframes opac {
        0% {
            stroke-opacity: 1;
            stroke-width: 0px;
        }
        100% {
            stroke-opacity: 0;
            stroke-width: 10px;
        }
    }
    .dashed-chartcontainer_Annotation_0{
        color: black ;
        background-color: red;
    }
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, AnnotationDirective, AnnotationsDirective, LineSeries, DateTime, Legend, Tooltip, Crosshair, Category, ChartAnnotation } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'e-annotations': AnnotationsDirective,
    'e-annotation': AnnotationDirective
  },
  data: function() {
    return {
         theme: theme,
      seriesData: [
                    { Period : "Jan", Banana_ProductionRate : 100 },
                    { Period : "Feb", Banana_ProductionRate : 110 },
                    { Period : "Mar", Banana_ProductionRate : 125 },
                    { Period : "Apr", Banana_ProductionRate : 150 },
                    { Period : "May", Banana_ProductionRate : 140 },
                    { Period : "Jun", Banana_ProductionRate : 160 }
                ],
      seriesData1: [
                     { Period : "Jun", Banana_ProductionRate : 160 },
                     { Period : "Jul", Banana_ProductionRate : 170 },
                     { Period : "Aug", Banana_ProductionRate : 180 },
                     { Period : "Sep", Banana_ProductionRate : 190 },
                     { Period : "Oct", Banana_ProductionRate : 200 },
                     { Period : "Nov", Banana_ProductionRate : 230 },
                     { Period : "Dec", Banana_ProductionRate : 270 }            
      ],
      //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
            interval: 1,
            majorTickLines: {width : 0},
            minorTickLines: {width: 0},
            majorGridLines: { width: 0 },
            labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45',
            labelRotation: Browser.isDevice ? -45 : 0,
        },

      //Initializing Primary Y Axis
        primaryYAxis:
        {
            labelFormat: '{value}K',
            rangePadding: 'None',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 300,
            interval: 50,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },

      marker: {  visible: false },
      width : Browser.isDevice ? '100%' : '75%',
       tooltip: {
          header: '<b>Fruits Production</b>',
          enable: true,
          shared: true,
          format: '${point.x} : <b>${point.y}</b>'
      },
      crosshair: {
            enable: false,
        },
      
      title: "Fruits Production Statistics"
    };
  },
  provide: {
    chart: [LineSeries, Legend, DateTime, Tooltip, Crosshair, Category, ChartAnnotation]
  },
  
  methods: {
    load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        args.chart.annotations[0].content = '<div style="color:black; font-family: bold ">Actual</div>';
        args.chart.annotations[1].content = '<div style="color:black; font-family: bold ">Forecast</div>';
        if (selectedTheme==='material-dark')
        {
            this.AnnotationColor = 'dark';
        }
        else if(selectedTheme==='material')
        {
            this.AnnotationColor = "light";  
        }
        else if (selectedTheme==='fabric-dark')
        {
            this.AnnotationColor = 'dark';
        }
        else if(selectedTheme==='fabric')
        {
            this.AnnotationColor = "light";  
        }
        else if (selectedTheme==='bootstrap5-dark')
        {
            this.AnnotationColor = 'dark';
        }
        else if (selectedTheme==='bootstrap5')
        {
            this.AnnotationColor = "light";  
        }
        else if (selectedTheme==='fluent-dark')
        {
            this.AnnotationColor = "dark";    
        }
        else if (selectedTheme==='fluent')
        {
            this.AnnotationColor = "light";  
        }
        else if (selectedTheme==='bootstrap4')
        {
            this.AnnotationColor = "light";          
        }
        else if (selectedTheme==='bootstrap-dark')
        {
            this.AnnotationColor = "dark";         
        }
        else if (selectedTheme==='bootstrap')
        {
            this.AnnotationColor = "light";          
        }
        else if (selectedTheme==='tailwind-dark')
        {
            this.AnnotationColor = "dark";    
        }
        else if (selectedTheme==='tailwind')
        {                    
            this.AnnotationColor = "light";  
        }
        else if (selectedTheme==='highcontrast')
        {
            this.AnnotationColor = "dark";            
        }
        else if (selectedTheme === 'material3-dark') {
            this.AnnotationColor = "dark";  
        }
        else if (selectedTheme === 'material3') {
            this.AnnotationColor = "light"; 
        }
        else if (selectedTheme === 'fluent2') {
            this.AnnotationColor = 'light';
        } 
        else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') 
        {
            this.AnnotationColor = 'dark';
        }
        else
        {
            this.AnnotationColor = "light";  
        }
        
        if(this.AnnotationColor=="light")
        {
            args.chart.annotations[0].content = '<div style="color:black; font-weight: bold ">Actual</div>';
            args.chart.annotations[1].content = '<div style="color:black; font-weight: bold ">Forecast</div>';
        }
        else
        {
            args.chart.annotations[0].content = '<div style="color:whitesmoke; font-weight: bold ">Actual</div>';
            args.chart.annotations[1].content = '<div style="color:whitesmoke; font-weight: bold ">Forecast</div>';
        }
  },
  },
 
};
</script>