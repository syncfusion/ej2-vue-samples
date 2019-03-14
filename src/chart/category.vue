<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :pointRender='pointRender' :legendSettings='legendSettings' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Bar' tooltipMappingName='country' xName='x' yName='y' name='Users' width=2 :marker='marker' > </e-series>
               
            </e-series-collection>
        </ejs-chart>
    </div>
     <div style="float: right; margin-right: 10px;">Source:
       <a href="http://www.internetworldstats.com/top20.htm" target="_blank">www.internetworldstats.com</a>
    </div>
    <div id="action-description">
    <p>
        This sample demonstrates the rendering of category axis in the chart with internet users of different countries.
    </p>
</div>
<div id="description">
  <p>
  Category axis is used to represent the categories in data. To render category axis, set <code>valueType</code> in axis to <code>Category</code>.
  Category label can placed between the ticks or on the ticks, based on <code>labelPlacement</code> property. 
  </p>
  <p>
  Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
  </p>
      <br>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            Chart component features are segregated into individual feature-wise modules. To use Category axis, we need to inject
            <code>Category</code> module using <code>provide: { chart: [ Category] },</code> method.
        </p>
        <p>
            More information on the Category axis can be found in this
            <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype">documentation section</a>.
        </p> 
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { EmitType } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  BarSeries,
  Tooltip,
  DataLabel,
  Category
} from "@syncfusion/ej2-vue-charts";
import {
  fabricColors,
  materialColors,
  bootstrapColors,
  highContrastColors
} from "./theme-color";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
       theme: theme,
      seriesData: [
        { x: 'Germany', y: 72, country: 'GER: 72'},
        { x: 'Russia', y: 103.1, country: 'RUS: 103.1'},
        { x: 'Brazil', y: 139.1, country: 'BRZ: 139.1'},
        { x: 'India', y: 462.1, country: 'IND: 462.1'},
        { x: 'China', y: 721.4, country: 'CHN: 721.4'},
        { x: 'United States<br>Of America', y: 286.9, country: 'USA: 286.9'},
        { x: 'Great Britain', y: 115.1, country: 'GBR: 115.1'},
        { x: 'Nigeria', y: 97.2, country: 'NGR: 97.2'},
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        title: "Country",
        valueType: "Category",
        majorGridLines: { width: 0 },
        enableTrim: false,
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 800,
        labelFormat: Browser.isDevice ? "{value}" : "{value}M",
        edgeLabelPlacement: "Shift",
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: {
          color: "transparent"
        }
      },
      chartArea: {
        border: {
          width: 0
        }
      },

      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#ffffff"
          }
        }
      },

      tooltip: { enable: true, format: '${point.tooltip}'},

      legendSettings: {
        visible: false
      },

      pointRender: function(args) {
        let selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Material";
        if (selectedTheme && selectedTheme.indexOf("fabric") > -1) {
          args.fill = fabricColors[args.point.index % 10];
        } else if (selectedTheme === "material") {
          args.fill = materialColors[args.point.index % 10];
        } else if (selectedTheme === "highcontrast") {
          args.fill = highContrastColors[args.point.index % 10];
        } else {
          args.fill = bootstrapColors[args.point.index % 10];
        }
      },
      width: Browser.isDevice ? '100%' : '60%',
      title: "Internet Users – 2016"
    };
  },
  provide: {
    chart: [BarSeries, Category, Tooltip, DataLabel]
  },
  methods: {
  }
});
</script>