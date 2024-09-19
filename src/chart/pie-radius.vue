    <template>
  <div class="control-section">
    <div class="control-section">
        <ejs-accumulationchart id="container" ref="pie" style='display:block;' :title='title' :theme='theme' :legendSettings="legendSettings" :tooltip="tooltip" :enableAnimation='enableAnimation' :enableSmartLabels='enableSmartLabels' :enableBorderOnMouseMove='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series  :dataSource='data' xName='Country' yName='Population' :radius='radius' innerRadius="20%" :dataLabel="dataLabel" tooltipMappingName='Radius'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>

    </div>
    <div id="action-description">
    <p>
        This sample compares countries by population density and total area using various radius in a pie series.
    </p>
</div>
<div id="description">
    <p> 
        In this example, you can see how to render a doughnut chart with different radius. You can use the <code>Radius</code> mapping property to achieve this feature. DataLabels are used to represent individual data and its values. In addition, the sample shows how to change the order of legends for the doughnut chart by using the Reverse property.
    </p>
    <p> 
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point
        in touch-enabled devices.
    </p>

<p style="font-weight: 500"><b>Injecting Module</b></p>
<p>
AccumulationChart component features are segregated into individual feature-wise modules. To use legend, we need to Inject <code>AccumulationLegend</code> module using <code>provide: { accumulationchart: [ AccumulationLegend ] }</code> method. 
</p>
<p>
        More information about the pie series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#various-radius-pie-chart" aria-label="Navigate to the documentation for Various Radius Pie Chart in Vue Accumulation Chart component">documentation section</a>.
    </p>

</div>

</div>
</template>
<style scoped>
.control-section {
    min-height: 450px;
}
</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data: function() {
    return {
        theme: theme,
        data: [
        { Country : " Argentina", Population : 505370, Radius :  Browser.isDevice ? '110' :  "100", text: 'Argentina'},
        { Country : " Belgium",    Population : 551500, Radius : Browser.isDevice ? '120' : "118.7", text: 'Belgium'},
        { Country : " Dominican Republic",  Population : 312685 , Radius : "137.5", text: Browser.isDevice ? 'Dominican <br> Republic' :  'Dominican Republic'},
        { Country : " Cuba", Population : 350000 , Radius :  '124.6',  text: 'Cuba'},
        { Country : " Egypt", Population : 301000 , Radius : "150.8", text: 'Egypt' },
        { Country : " Kazakhstan", Population : 300000, Radius :  "155.5", text: 'Kazakhstan'},
        { Country : " Somalia",  Population : 357022, Radius :  "160.6", text: 'Somalia' }
     ],
     radius: 'Radius',
     legendSettings: { visible: true, reverse: true },
     dataLabel: { visible: true, position: Browser.isDevice ? 'Inside' : 'Outside',
        name: 'text', enableRotation: true,
        connectorStyle: { length: '20px', type:'Curve' },
        font: {
            fontWeight: '600'
        },
    },
     tooltip: {
        enable: true,
        header: '',
        format: '<b>${point.x}</b><br>Area in square km: <b>${point.y}</b><br>Population density per square km: <b>${point.tooltip}</b>',
        name: 'Radius'
     },
     enableAnimation: true,
     enableSmartLabels: true,
     title: 'Pie with different Radius'
	};
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
   methods: {

   },
};
</script>
