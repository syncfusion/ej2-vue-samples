<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :tooltip='tooltip' :pointRender='pointRender' :chartArea='chartArea'>
            <e-series-collection>
                <e-series :dataSource='seriesData' :type='seriesType' xName='x' yName='y' > </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div>
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
               <br/><br/>
            <tr style="height: 50px">
                <td>
                    <div>Export Type
                    </div>
                </td>
                <td>
                    <div>
                        <ejs-dropdownlist ref="dropdown" id='mode' :change='modeChange' :dataSource='exportdata' index=0 :width='exportwidth' ></ejs-dropdownlist>  
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>File Name</div>
                </td>
                <td>
                    <div>
                        <input type="text" requires="" value='Chart' id="fileName"/>
                    </div>
                </td>
            </tr>
            <tr align='center'>
                <td>
                    <div>
                         <ejs-button  id='togglebtn' @click.native='exportIcon' iconCss="e-icons e-play-icon" cssClass="e-flat" isPrimary="true">Export</ejs-button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
<div id="action-description">
    <p>
        This sample illustrates the export feature in chart. By clicking <code>Export</code>, you can export the chart in PNG or JPEG format.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the export. The rendered chart can be exported as either JPEG,
        PNG and SVG format. It can be achieved using Blob and it's supported only in modern browsers.
    </p>
    <p>
        More information on the export can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
</div>

</template>
<style>
.e-play-icon::before {
        content: '\e720';
    }
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import { Button } from '@syncfusion/ej2-vue-buttons';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { fabricColors, materialColors, bootstrapColors, highContrastColors } from './theme-color';
import { EmitType } from '@syncfusion/ej2-base';
import { ChartPlugin, ColumnSeries, Category, Legend, Export } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
            { x: 'DEU', y: 35.5 }, { x: 'CHN', y: 18.3 }, { x: 'ITA', y: 17.6 }, { x: 'JPN', y: 13.6 },
            { x: 'US', y: 12 }, { x: 'ESP', y: 5.6 }, { x: 'FRA', y: 4.6 }, { x: 'AUS', y: 3.3 },
            { x: 'BEL', y: 3 }, { x: 'UK', y: 2.9 }

      ],
    exporttype:'JPEG',
      //Initializing Primary X Axis
    primaryXAxis: {
            title: 'Countries',
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
            title: 'Measurements',
            labelFormat: '{value}GW',
            minimum: 0,
            maximum: 40,
            interval: 10,
            majorGridLines: { width: 0 }
        },

      seriesType: "Column",

      tooltip: {
        enable: true  
      },
        exportdata : [ 'JPEG', 'PNG', 'SVG', 'PDF' ],

      exportwidth:120,

      title: "Top 10 Countries Using Solar Power"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, Export]
  },
  updated: function () {
    this.$nextTick(function() {
      this.$refs.chart.ej2Instances.dataBind();
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
    modeChange: function(args){
        this.exporttype = mode.value;  
    },
    exportIcon: function(args){
        let fileName = ((document.getElementById('fileName'))).value;
    this.$refs.chart.ej2Instances.exportModule.export(this.exporttype,fileName);
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