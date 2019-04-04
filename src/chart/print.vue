<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" style='display:block' :theme='theme' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :legendSettings='legendSettings' :pointRender='pointRender' :chartArea='chartArea'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='Profit' width=2 > </e-series>
              
            </e-series-collection>
        </ejs-chart>
    </div>
    <div>
   
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <br/><br/>
            <tr>
                <td>
                    <div>
                        <ejs-button id='togglebtn' @click.native='print' iconCss="e-icons e-play-icon" cssClass="e-flat" isPrimary="true">Print</ejs-button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
<div id="action-description">
    <p>
        This sample illustrates the print feature in chart. By clicking <code>Print</code>, you can print the chart directly from the browser.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the print. The rendered chart can be printed directly from the browser
        by calling the public method print.
    </p>
    <p>
        More information on the print can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>
.e-play-icon::before {
        content: '\e34b';
    }
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { Button } from '@syncfusion/ej2-vue-buttons';
import { fabricColors, materialColors, bootstrapColors, highContrastColors } from './theme-color';
import { EmitType } from '@syncfusion/ej2-base';
import {
  ChartPlugin,
  ColumnSeries,
  Category,
  Legend
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
        { x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
        { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }
      ],

      //Initializing Primary X Axis
     primaryXAxis: {
            title: 'Manager',
            valueType: 'Category',
            majorGridLines: { width: 0 }

        },
        chartArea: {
            border: {
                width: 0
            }
        },

      //Initializing Primary Y Axis
      primaryYAxis:
        {
            title: 'Sales',
            minimum: 0,
            maximum: 20000,
            majorGridLines: { width: 0 }
        },

      tooltip: {
        enable: true  
      },
      legendSettings: { visible: false },

      title: "Sales Comparision"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend]
  },
  methods: {
    print: function(args) {
        this.$refs.chart.print();
    },
    pointRender: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
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
    
  },
});
</script>