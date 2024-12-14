<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display:block"
        :theme="theme"
        ref="chart"
        align="center"
        id="chartcontainerR"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :chartArea="chartArea"
        :width="width"
        :tooltip="tooltip"
        :legendSettings="legendSettings"
        :pointRender="pointRender"
        :enableSideBySidePlacement="false" 
        :highlightColor="highlightColor"      
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            type="Column"
            xName="Country"
            yName="Rate"
            width="2"
            :enableTooltip="false"
            opacity='0.5'
            columnWidth='0.8'
            :cornerRadius="cornerRadius"
          ></e-series>
          <e-series
            :dataSource="seriesData"
            type="Column"
            xName="Country"
            yName="Literacy_Rate"
            width="2"
            :marker="marker"
            tooltipMappingName='Text'
            columnWidth=0.8
            :cornerRadius="cornerRadius"
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>This sample shows the literacy rate by country in 2015 with the default column series in the chart.</p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render and configure the column chart. The column chart is used to compare the frequency, count, total, or average of data in different categories. You can use the <code>ChartCornerRadius</code> option to customize the vertical rectangle, resulting in a rounded column.
      </p>
      <p style="font-weight: 500"><b>Injecting Module</b></p>
      <p>
        Chart component features are segregated into individual feature-wise modules. To use column series, we need to inject
        <code>ColumnSeries</code> module using
        <code>provide: { chart: [ ColumnSeries ] },</code> method.
      </p>
      <p>
        More information about the column type series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/column" aria-label="Navigate to the documentation for Column Chart in Vue Chart component">documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import { Browser } from "@syncfusion/ej2-base";
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, DataLabel, Tooltip, Legend } from "@syncfusion/ej2-vue-charts";
import { fabricColors, materialColors, bootstrapColors, highContrastColors } from "./theme-color";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

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
        { Country : "Niger", Rate : 100, Literacy_Rate : 19.1, Text : "19.1%" },
        { Country : "Sierra Leone", Rate : 100, Literacy_Rate : 48.1, Text : "48.1%" },
        { Country : "South Sudan", Rate : 100, Literacy_Rate : 26.8, Text : "26.8%" },
        { Country : "Nepal", Rate : 100, Literacy_Rate : 64.7, Text : "64.7%" },
        { Country : "Gambia", Rate : 100, Literacy_Rate : 55.5, Text : "55.5%" },
        { Country : "Gyana", Rate : 100, Literacy_Rate : 88.5, Text : "88.5%" },
        { Country : "Kenya", Rate : 100, Literacy_Rate : 78.0, Text : "78.0%" },
        { Country : "Singapore", Rate : 100, Literacy_Rate : 96.8, Text : "96.8%" }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        majorTickLines: {width : 0}, minorTickLines: {width: 0},valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }, labelRotation: Browser.isDevice ? -45 : 0, labelIntersectAction: Browser.isDevice ? 'None' : 'Rotate45'
      },
      chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: '{value}%',
        title: 'Literacy Rate In Percentage',
        minimum: 0, maximum: 100, interval: 25, majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }, lineStyle: { width: 0 }
      },

      width: Browser.isDevice ? "100%" : "75%",

      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          font: { fontWeight: "600", color: "#ffffff", size: Browser.isDevice ? '8px' : '11px'}
          
        }
      },

      legendSettings: { visible: false },
      highlightColor: 'transparent',
      tooltip: {
         enable: true,
        header: '<b>${point.x}</b>',
        format : 'Rate : <b>${point.tooltip}</b>'
      },

      cornerRadius: {
        bottomLeft:  Browser.isDevice ? 12 : 35, bottomRight:  Browser.isDevice ? 12 : 35, topLeft:  Browser.isDevice ? 12 : 35, topRight:  Browser.isDevice ? 12 : 35
      },
      title: "Literacy rate by Country in 2015"
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, DataLabel, Category, Tooltip]
  },
  methods: {
    
    pointRender: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
      if (location.hash.indexOf("material") > -1)
        {
            if (location.hash.indexOf("dark") > -1)
            {
                if (args.series.yName == "Rate")
                    args.fill = "#f9fafb";                
            }
            else
            {
                if (args.series.yName == "Rate")
                    args.fill = "grey";               
            }
        }
        else if (location.hash.indexOf("fabric") > -1)
        {
            if (location.hash.indexOf("dark") > -1)
            {
                if (args.series.yName == "Rate")
                    args.fill = "#f9fafb";
            }
            else
            {
                if (args.series.yName == "Rate")
                    args.fill = "grey";
            }
        }
        else if (location.hash.indexOf("bootstrap5") > -1)
        {
            if (location.hash.indexOf("dark") > -1)
            {
                if (args.series.yName == "Rate")
                    args.fill = "#f9fafb";
            }
            else
            {
                if (args.series.yName == "Rate")
                    args.fill = "grey";
            }
        }
        else if (location.hash.indexOf("fluent") > -1)
        {
            if (location.hash.indexOf("dark") > -1)
            {
                if (args.series.yName == "Rate")
                    args.fill = "#f9fafb";
            }
            else
            {
                if (args.series.yName == "Rate")
                    args.fill = "grey";
            }
        }
        else if (location.hash.indexOf("bootstrap4") > -1)
        {
            if (args.series.yName == "Rate")
                args.fill = "grey";
        }
        else if (location.hash.indexOf("bootstrap") > -1)
        {
            if (location.hash.indexOf("dark") > -1)
            {
                if (args.series.yName == "Rate")
                    args.fill = "#f9fafb";
            }
            else
            {
                if (args.series.yName == "Rate")
                    args.fill = "grey";
            }
        }
        else if (location.hash.indexOf("tailwind") > -1)
        {
            if (location.hash.indexOf("dark") > -1)
            {
                if (args.series.yName == "Rate")
                    args.fill = "#f9fafb";
            }
            else
            {
                if (args.series.yName == "Rate")
                    args.fill = "grey";
            }
        }
        else if (location.hash.indexOf("tailwind3") > -1)
        {
            if (location.hash.indexOf("dark") > -1)
            {
                if (args.series.yName == "Rate")
                    args.fill = "#f9fafb";
            }
            else
            {
                if (args.series.yName == "Rate")
                    args.fill = "grey";
            }
        }
        else if (location.hash.indexOf("highcontrast") > -1)
        {
            if (args.series.yName == "Rate")
                args.fill = "#f9fafb";
        }
        else if (location.hash.indexOf("fluent2-highcontrast") || selectedTheme === 'fluent2-dark') 
        {
            if (args.series.yName == "Rate")
                args.fill = "#f9fafb";
        } 
        else if (location.hash.indexOf("fluent2")) {
            if (args.series.yName == "Rate")
                args.fill = "grey";
        }
        else
        {
            if (args.series.yName == "Rate")
                args.fill = "grey";
        }
    },
  }
};
</script>