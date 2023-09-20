<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width' :tooltip='tooltip'  :legendSettings='legendSettings'
            :highlightMode="highlightMode"
            :highlightPattern="highlightPattern" >
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='USA' :animation='animation' :cornerRadius='cornerRadius' :marker='marker' > </e-series>
            </e-series-collection>
            <e-rangecolorsettings>
                <e-rangecolorsetting label="1°C to 10°C" start="1" end="10" :colors="colors1"></e-rangecolorsetting>
                <e-rangecolorsetting label="11°C to 20°C" start="11" end="20" :colors="colors2"></e-rangecolorsetting>
                <e-rangecolorsetting label="21°C to 30°C" start="21" end="30" :colors="colors3"></e-rangecolorsetting>
            </e-rangecolorsettings>
        </ejs-chart>
    </div>
    <div id="action-description">
    <p>
        This sample illustrates the USA climate with the month-wise data. Columns are differentiated using color codes based on
        the temperature ranges for better visualization. By toggling the legend items you can control the visibility of the
        columns within the ranges.
    </p>
</div>
<div id="description">
    <p>
        In this example, column segment color is applied based on their <code>y</code> value ranges by using <code>e-rangecolorsettings</code>.
        You can use below properties in the <code>e-rangecolorsettings</code> to customize the data under range.
        The <code>e-rangecolorsettings</code> properties are,
    </p>
    <ul>
       <li>
          <p><code>label</code> - Specify the name for the range mapping which will be displayed in the legend item.</p>
       </li> 
       <li>
           <p><code>start</code> - Specify the start value of the color mapping range.</p>
       </li>
        <li>
           <p><code>end</code> - Specify the end value of the color mapping range.</p>
        </li>
        <li>
          <p><code>colors</code> - Specify the fill colors of point those lies on the given range. If multiple colors are mentioned, then gradient will be applied.</p>
        </li>
    </ul>
</div>

</div>

</template>
<style scoped>

</style>
<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, RangeColorSettingsDirective, RangeColorSettingDirective, ColumnSeries, Category, Tooltip, Legend, DataLabel, Highlight} from "@syncfusion/ej2-vue-charts";

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective,
    'e-rangecolorsettings': RangeColorSettingsDirective,
    'e-rangecolorsetting': RangeColorSettingDirective
  },
  data: function() {
    return {
         theme: theme,
      seriesData: [
               { x: "Jan", y: 6 },
                { x: "Feb", y: 8.9 },
                { x: "Mar", y: 12 },
                { x: "Apr", y: 17.5 },
                { x: "May", y: 22.1 },
                { x: "June", y: 25 },
                { x: "July", y: 29.4 },
                { x: "Aug", y: 29.6 },
                { x: "Sep", y: 25.8 },
                { x: "Oct", y: 21.1 },
                { x: "Nov", y: 15.5 },
                { x: "Dec", y: 9.9 }
                
              ],

      //Initializing Primary X Axis
       primaryXAxis: {
            valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: {width : 0},
            minorTickLines: {width: 0}
        },

         
      //Initializing Primary Y Axis
          primaryYAxis: {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}°C',
        },
        chartArea: {
            border: {
                width: 0
            }
        },
       width : Browser.isDevice ? '100%' : '75%',
        tooltip: { 
            enable: false
         },
      title: "USA CLIMATE - WEATHER BY MONTH",
      legendSettings: {
        mode: 'Range',
        visible: true,
        toggleVisibility: false, 
    },
    marker: {
         dataLabel: {
            visible: true,
             position: 'Outer',
            }
        },

    highlightMode: 'Point',
    highlightPattern: 'DiagonalForward',           
    animation: {
        enable: false
    },
    cornerRadius: {
        topLeft: 10, topRight: 10
    },
    colors1: ["#F9D422"],
    colors2: ["#F28F3F"],
    colors3: ["#E94F53"]
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, Category, Tooltip, DataLabel, Highlight]
  },
  methods: {
    load: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);

    }
  },
 
};
</script>