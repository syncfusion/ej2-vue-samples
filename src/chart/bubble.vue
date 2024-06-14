<template>
  <div class="control-section">
    <div class="trackball-control-section" align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
             :width='width' :tooltip='tooltip' :pointRender='pointRender' :legendSettings='legendSettings' >
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Bubble' xName='Literacy' size='BubbleSize' yName='GDPGrowth' name='Pound' :marker='marker' minRadius=3  maxRadius=8 :border='border' tooltipMappingName='Text'> </e-series>
                
            </e-series-collection>
        </ejs-chart>
    </div>
   <div id="action-description">
    <p>
        This Vue bubble chart example visualizes the literacy rates and GDP growth rates of countries. A tooltip shows more information about the countries.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the bubble chart. The bubble chart is a type of chart that shows three dimensions of the data. Each point is drawn as a bubble, where the bubble's size depends on the <code>Size</code> property. You can also use the <code>Fill</code> property to customize the data appearance.         
    </p>
    <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
    </p>
    
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use bubble series, we need to inject
        <code>BubbleSeries</code> module using <code>provide: { chart: [BubbleSeries] },</code> method.
    </p>
    <p>
        More information about the bubble series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/bubble" aria-label="Navigate to the documentation for Bubble Chart in Vue Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style >
.trackball-control-section ellipse[id*=_Trackball_0] {
        stroke-width: 1 !important;
    } 
</style>
<script>
import { EmitType } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, BubbleSeries, Tooltip, Legend, DataLabel} from "@syncfusion/ej2-vue-charts";
import {bubblePointMaterialColors, bubblePointMaterialDarkColors, bubblePointFabricColors, bubblePointBootstrapColors, bubblePointHighContrastColors, bubblePointBootstrap5Colors, bubblePointBootstrap5DarkColors, bubblePointFluentColors, bubblePointFluentDarkColors, bubblePointTailwindColors, bubblePointTailwindDarkColors, pointMaterialColors, pointMaterialDarkColors, pointFabricColors, pointBootstrapColors, pointHighContrastColors, pointBootstrap5Colors, pointBootstrap5DarkColors, pointFluentColors, pointFluentDarkColors, pointTailwindColors, pointTailwindDarkColors, bubbleMaterial3Colors, pointMaterial3Colors, bubbleMaterial3DarkColors, pointMaterial3DarkColors, pointFluent2Colors, bubbleFluent2Colors, pointFluent2DarkColors, bubbleFluent2DarkColors } from './theme-color';

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
     theme: theme,
     seriesData: [
        { Literacy : 92.2, GDPGrowth : 7.8, BubbleSize : 1.347, TooltipMappingName : "China", Text : "China" },
        { Literacy : 74, GDPGrowth : 6.5, BubbleSize : 1.241, TooltipMappingName : "India", Text : "India" },
        { Literacy : 90.4, GDPGrowth : 6.0, BubbleSize : 0.238, TooltipMappingName : Browser.isDevice ? 'ID': "Indonesia", Text : "Indonesia" },
        { Literacy : 99.4, GDPGrowth : 2.2, BubbleSize : 0.312, TooltipMappingName : "US", Text : "United States" },
        { Literacy : 88.6, GDPGrowth : 1.3, BubbleSize : 0.197, TooltipMappingName : Browser.isDevice ? 'BR' : "Brazil", Text : "Brazil" },
        { Literacy : 99, GDPGrowth : 0.7, BubbleSize : 0.0818, TooltipMappingName : Browser.isDevice ? 'DE' : "Germany", Text : "Germany" },
        { Literacy : 72, GDPGrowth : 2.0, BubbleSize : 0.0826, TooltipMappingName : Browser.isDevice ? 'EG': "Egypt", Text : "Egypt" },
        { Literacy : 99.6, GDPGrowth : 3.4, BubbleSize : 0.143, TooltipMappingName : Browser.isDevice ? 'RUS': "Russia", Text : "Russia" },
        { Literacy : 96.5, GDPGrowth : 0.2, BubbleSize : 0.128, TooltipMappingName : Browser.isDevice ? 'JP': "Japan", Text : "Japan" },
        { Literacy : 86.1, GDPGrowth : 4.0, BubbleSize : 0.115, TooltipMappingName : "MLI", Text : "MeLiteracy Ion" },
        { Literacy : 92.6, GDPGrowth : 5.2, BubbleSize : 0.096, TooltipMappingName : "PH", Text : "Philipines" },
        { Literacy : 61.3, GDPGrowth : 1.45, BubbleSize : 0.162, TooltipMappingName : "Nigeria", Text : "Nigeria" },
        { Literacy : 82.2, GDPGrowth : 3.97, BubbleSize : 0.7, TooltipMappingName : Browser.isDevice ? 'HK' : "Hong Kong", Text : "Hong Kong" },
        { Literacy : 79.2, GDPGrowth : 4.9, BubbleSize : 0.162, TooltipMappingName : "NL", Text : "NetherLand" },
        { Literacy : 72.5, GDPGrowth : 4.5, BubbleSize : 0.7, TooltipMappingName : "Jordan", Text : "Jordan" },
        { Literacy : 81, GDPGrowth : 2.5, BubbleSize : 0.21, TooltipMappingName : Browser.isDevice ? 'AU' : "Australia", Text : "Australia" },
        { Literacy : 66.8, GDPGrowth : 3.9, BubbleSize : 0.028, TooltipMappingName : "MN", Text : "Mongolia" },
        { Literacy : 78.4, GDPGrowth : 2.9, BubbleSize : 0.231, TooltipMappingName : Browser.isDevice ? 'TW' :"Taiwan", Text : "Taiwan" }
   ],
    
           //Initializing Primary X Axis
     primaryXAxis: {
            crossesAt: 5,
            minimum: 65,
            maximum: 102,
            interval: 5
        },
        
     //Initializing Primary Y Axis
       primaryYAxis: {
            crossesAt: 85,
            minimum: 0,
            maximum: 10,
            interval: 2.5
        },

      width : Browser.isDevice ? '100%' : '75%',
      marker: {  dataLabel: { name: 'TooltipMappingName' , visible: true , position: 'Middle' , font: { fontWeight: '500'}} },
      border: { width: 2 },
      legendSettings: { visible: false },
      tooltip: {
        header: '<b>${point.tooltip}</b>',
        enableMarker: false,
        enable: true,
        format: "Literacy Rate : <b>${point.x}%</b> <br/>GDP Annual Growth Rate : <b>${point.y}</b><br/>Population : <b>${point.size} Billion</b>"
    },

    title: "World Countries Details",

       pointRender: function(args) {
       let selectedTheme = location.hash.split('/')[1];
       selectedTheme = selectedTheme ? selectedTheme : 'Material';

        if (selectedTheme==='material-dark')
        {
            args.fill = bubblePointMaterialDarkColors[args.point.index % 10];
            args.border.color = pointMaterialDarkColors[args.point.index % 10];
        }
        else if(selectedTheme==='material')
        {
            args.fill = bubblePointMaterialColors[args.point.index % 10];
            args.border.color = pointMaterialColors[args.point.index % 10];
        }
        else if (selectedTheme==='fabric-dark' || selectedTheme==='fabric')
        {
            args.fill = bubblePointFabricColors[args.point.index % 10];
            args.border.color = pointFabricColors[args.point.index % 10];
        }
        else if (selectedTheme==='bootstrap5-dark')
        {
            args.fill = bubblePointBootstrap5DarkColors[args.point.index % 10];
            args.border.color = pointBootstrap5DarkColors[args.point.index % 10];
        }
        else if (selectedTheme==='bootstrap5')
        {
            args.fill = bubblePointBootstrap5Colors[args.point.index % 10];
            args.border.color = pointBootstrap5Colors[args.point.index % 10];
        }
        else if (selectedTheme==='fluent-dark')
        {
            args.fill = bubblePointFluentDarkColors[args.point.index % 10];
            args.border.color = pointFluentDarkColors[args.point.index % 10];
        }
        else if (selectedTheme==='fluent')
        {
            args.fill = bubblePointFluentColors[args.point.index % 10];
            args.border.color = pointFluentColors[args.point.index % 10];
        }
        else if (selectedTheme==='bootstrap4' || selectedTheme==='bootstrap')
        {
                args.fill = bubblePointBootstrapColors[args.point.index % 10];
                args.border.color = pointBootstrapColors[args.point.index % 10];           
        }
        else if (selectedTheme==='tailwind-dark')
        {
            args.fill = bubblePointTailwindDarkColors[args.point.index % 10];
            args.border.color = pointTailwindDarkColors[args.point.index % 10];                     

        }
        else if (selectedTheme==='tailwind')
        {                    
            args.fill = bubblePointTailwindColors[args.point.index % 10];
            args.border.color = pointTailwindColors[args.point.index % 10];
        }
        else if (selectedTheme==='highcontrast')
        {
            args.fill = bubblePointHighContrastColors[args.point.index % 10];
            args.border.color = pointHighContrastColors[args.point.index % 10];           
        }
        else if (selectedTheme === 'material3') {
            args.fill = bubbleMaterial3Colors[args.point.index % 10];
            args.border.color = pointMaterial3Colors[args.point.index % 10];
        }
        else if (selectedTheme === 'material3-dark') {
            args.fill = bubbleMaterial3DarkColors[args.point.index % 10];
            args.border.color = pointMaterial3DarkColors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent2') {
            args.fill = bubbleFluent2Colors[args.point.index % 10];
            args.border.color = pointFluent2Colors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent2-dark') {
            args.fill = bubbleFluent2DarkColors[args.point.index % 10];
            args.border.color = pointFluent2DarkColors[args.point.index % 10];
        }
        else
        {
            args.fill = bubblePointBootstrapColors[args.point.index % 10];
            args.border.color = pointBootstrapColors[args.point.index % 10];           
        }

   },

    };
  },
  provide: {
    chart: [BubbleSeries, Tooltip, Legend, DataLabel]
  },
  methods: {
  }
 
};
</script>