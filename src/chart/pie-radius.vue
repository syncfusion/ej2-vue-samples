    <template>
  <div class="control-section">
    <div class="control-section">
        <ejs-accumulationchart id="container" ref="pie" style='display:block;' :title='title' :subTitle='subTitle' :theme='theme' :legendSettings="legendSettings" :tooltip="tooltip" :enableAnimation='enableAnimation' :enableSmartLabels='enableSmartLabels' :enableBorderOnMouseMove='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series  :dataSource='data' xName='Country' yName='Population' borderRadius="3" :border='border' :radius='radius' innerRadius="20%" :dataLabel="dataLabel" tooltipMappingName='Radius'> </e-accumulation-series>
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
        In this example, you can see how to render donut chart with different radius. You can use <code>Radius</code> mapping property to achieve this feature. <code>DataLabel</code> is used to represent individual data and its value.
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
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut" aria-label="Navigate to the documentation for Various Radius Pie Chart in Vue Accumulation Chart component">documentation section</a>.
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

import { loadAccumulationChartTheme } from "./theme-color";
let theme = loadAccumulationChartTheme();

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
        { Country: "Cuba", Population: 103800, Radius: "106", text: "CUB" },
        { Country: "Syria", Population: 185178, Radius: "133", text: "SYR" },
        { Country: "Benin", Population: 112760, Radius: "128", text: "BEN" },
        { Country: "Portugal", Population: 91606, Radius: "114", text: "POR" },
        { Country: "Austria", Population: 82520, Radius: "111", text: "AUS" },
        { Country: "Honduras", Population: 111890, Radius: "97", text: "HON" },
        { Country: "Azerbaijan", Population: 82650, Radius: "125", text: "AZE" }
     ],
     radius: 'Radius',
     border: { color: '#ffffff', width: 1},
     legendSettings: { visible: false },
     dataLabel: { visible: true, position: Browser.isDevice ? 'Inside' : 'Outside',
        enableRotation: false,
        name: Browser.isDevice ? 'text' : 'Country',
        connectorStyle: { length: Browser.isDevice ? '10px' : '20px', type:'Curve' },
        textWrap: Browser.isDevice ? 'Wrap' : 'Normal',
        font: {
            fontWeight: '600', size: Browser.isDevice ? '7px' : '12px', 
        },
    },
     tooltip: {
        enable: true,
        header: '',
        format: '<b>${point.x}</b><br>Area in square km: <b>${point.y}</b><br>Population density per square km: <b>${point.tooltip}</b>',
        name: 'Radius',
        enableHighlight: true,
     },
     enableAnimation: true,
     enableSmartLabels: true,
     title: 'Global Distribution of Population and Land Area by Country - 2025',
     subTitle: 'Source: wikipedia.org'
	};
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
   methods: {

   },
};
</script>
