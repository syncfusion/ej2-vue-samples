<template>
  <div class="control-section">
    <div align='center'>
      <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title'
        :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :chartArea='chartArea' :width='width'
        :pointRender='pointRender' :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource='seriesData' type='Bar' xName='Country'
            yName='Users' name='Users' width=2 :marker='marker'> </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample shows a category axis in a chart with details about internet users across different countries.
      </p>
    </div>
    <div id="description">
      <p>
        You can use the category axis to represent string values instead of numbers in the chart. 
        To use the category axis, set <code>ValueType</code> in axis to <b>Category</b>.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use Category axis, we need to
        inject
        <code>Category</code> module using <code>provide: { chart: [ Category] },</code> method.
      </p>
      <p>
        More information on the Category axis can be found in this
        <a target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/chart/category-axis/" aria-label="Navigate to the documentation for Category Axis in Vue Chart component">documentation
          section</a>.
      </p>
    </div>
  </div>

</template>
<style scoped>

</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, BarSeries, DataLabel, Category } from "@syncfusion/ej2-vue-charts";
import { pointMaterialColors, pointMaterialDarkColors, pointFabricColors, pointBootstrapColors, pointHighContrastColors, pointBootstrap5Colors, pointBootstrap5DarkColors, pointFluentColors, pointFluentDarkColors, pointTailwindColors, pointTailwindDarkColors, pointFluent2Colors, pointFluent2HighContrastColors, pointTailwind3Colors, pointTailwind3DarkColors } from './theme-color';

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { Country: "Germany", Users: 72 },
        { Country: "Russia", Users: 103.1 },
        { Country: "Brazil", Users: 139.1 },
        { Country: "India", Users: 462.1 },
        { Country: "China", Users: 721.4 },
        { Country: "United States<br>Of America", Users: 286.9 },
        { Country: "Great Britain", Users: 115.1 },
        { Country: "Nigeria", Users: 97.2 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        majorGridLines: { width: 0 },
        enableTrim: false,
        majorTickLines: { width: 0 },
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 800,
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
          format : "{value}M",
          position: "Top",
          font: {
            fontWeight: "600",
            color: '#ffffff',
          }
        }
      },

      legendSettings: {
        visible: false
      },

      pointRender: function (args) {
        let selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
        if (selectedTheme === 'material-dark') {
          args.fill = pointMaterialDarkColors[args.point.index % 10];
        }
        else if (selectedTheme === 'material') {
          args.fill = pointMaterialColors[args.point.index % 10];
        }
        else if (selectedTheme === 'fabric-dark' || selectedTheme === 'fabric') {
          args.fill = pointFabricColors[args.point.index % 10];
        }
        else if (selectedTheme === 'bootstrap5-dark') {
          args.fill = pointBootstrap5DarkColors[args.point.index % 10];
        }
        else if (selectedTheme === 'bootstrap5') {
          args.fill = pointBootstrap5Colors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent-dark') {
          args.fill = pointFluentDarkColors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent') {
          args.fill = pointFluentColors[args.point.index % 10];
        }
        else if (selectedTheme === 'bootstrap4' || selectedTheme === 'bootstrap') {
          args.fill = pointBootstrapColors[args.point.index % 10];
        }
        else if (selectedTheme === 'tailwind-dark') {
          args.fill = pointTailwindDarkColors[args.point.index % 10];
        }
        else if (selectedTheme === 'tailwind') {
          args.fill = pointTailwindColors[args.point.index % 10];
        }
        else if (selectedTheme === 'highcontrast') {
          args.fill = pointHighContrastColors[args.point.index % 10];
        }
        else if (selectedTheme === 'fluent2') {
          args.fill = pointFluent2Colors[args.point.index % 10];
        } 
        else if (selectedTheme === 'fluent2-highcontrast' || selectedTheme === 'fluent2-dark') {
          args.fill = pointFluent2HighContrastColors[args.point.index % 10];
        }
        else if (selectedTheme === 'tailwind3') {
          args.fill = pointTailwind3Colors[args.point.index % 10];
        } 
        else if (selectedTheme === 'tailwind3-dark') {
          args.fill = pointTailwind3DarkColors[args.point.index % 10];
        }
        else {
          args.fill = pointBootstrapColors[args.point.index % 10];
        }
      },
      width: Browser.isDevice ? '100%' : '75%',
      title: "Internet Users – 2016"
    };
  },
  provide: {
    chart: [BarSeries, Category, DataLabel]
  },
  methods: {
  }
};
</script>