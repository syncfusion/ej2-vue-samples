<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
        <ejs-accumulationchart ref="pie" :theme='theme' style='display:block' align='center'  :enableBorderOnMouseMove='false' id='chartcontainer' :title='title'
             :legendSettings='legendSettings' :tooltip='tooltip'  :textRender="onTextRender">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :mode='emptydata' xName='x' yName='y' :dataLabel='dataLabel' name='Profit' type='Pie' :emptyPointSettings='emptyPointSettings' :border='border' borderRadius="3" radius="80%"> </e-accumulation-series>
             
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div>
    
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
              <br/><br/>
             <tr style="height: 50px">
                <td>
                    <div>Empty Point Mode
                    </div>
                </td>
                <td>
                    <div>
                          <ejs-dropdownlist id='emptypointmode' :change='modeChange' :dataSource='modedata' index=0 :width='modewidth' ></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
<div id="action-description">
    <p>
        This sample illustrates the movie genre revenue share with empty point functionality in the pie series. The Mode of empty point can be changed by using <code>Empty Point Mode</code> in property panel.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the pie series with empty points. The empty point in the chart can be handled using the <code>EmptyPointSettings</code> property.
    </p>
    <p>
        <code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
    </p>
    <p>
        More information about the empty points in accumulation chart can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/empty-points/" aria-label="Navigate to the documentation for Empty Points in Vue Accumulation Chart component">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import { extend } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, PieSeries, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

import { loadAccumulationChartTheme } from "./theme-color";
let theme = loadAccumulationChartTheme();

export default {
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective,
    'ejs-dropdownlist': DropDownListComponent
  },
  data: function() {
    return {
         theme: theme,
      seriesData: [
            { x: 'Action', y: 35,}, { x: 'Drama', y: 25 }, { x: 'Comedy', y: null },
            { x: 'Romance', y: 20 }, { x: 'Horror', y: 10 }, { x: 'Sci-Fi', y: null }
      ],
        
        dataLabel: {
                    visible: true, position: 'Inside',enableRotation: true, font: {
                        fontWeight: '600', size: Browser.isDevice ? '8px' : '12px'
                    }
                },
                emptyPointSettings: {
                    fill: '#e6e6e6',
                },
        emptydata: "Drop",
        legendSettings: {
            visible: false,
        },
       
         tooltip: { enable: true, format: ' <b>${point.x}</b><br> Profit: <b>$${point.y}K</b>', header: '', enableHighlight: true },

         modedata: ["Drop", "Average", "Zero" ],

      modewidth: 120,
       border: { width: 1, color: '#ffffff' },
      title: "Movie Genre Revenue Share"
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
  },
   updated: function () {
    this.$nextTick(function() {
      this.$refs.pie.ej2Instances.dataBind();
      this.$refs.pie.ej2Instances.refresh();
    });
   },
  methods: {
     modeChange: function(args) {
      let empty = document.getElementById('emptypointmode').value;
        let emptyPointSettings = extend({}, this.emptyPointSettings);
            emptyPointSettings.mode = empty;
            this.emptyPointSettings = emptyPointSettings; 
            if (theme === 'Bootstrap5Dark') {
                this.emptyPointSettings.fill = '#FF7F7F';
            }  
      },
      onTextRender: function (args) {
        args.text = args.point.x + ": $" + args.point.y + "K";
    },
  },

};
</script>