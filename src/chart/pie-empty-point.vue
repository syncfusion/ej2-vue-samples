<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
        <ejs-accumulationchart ref="pie" :theme='theme' style='display:block' align='center'  :enableBorderOnMouseMove='false' id='chartcontainer' :title='title'
             :legendSettings='legendSettings' :tooltip='tooltip'  :textRender="onTextRender" :load="load">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :mode='emptydata' xName='x' yName='y' :dataLabel='dataLabel' name='Profit' type='Pie' :emptyPointSettings='emptyPointSettings'> </e-accumulation-series>
             
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
        This sample illustrates the annual product-wise profit analysis of an organization with empty point functionality in the pie series.
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

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

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
            { x: 'Rice', y: 80 }, { x: 'Wheat', y: null }, { x: 'Oil', y: 70 },
            { x: 'Corn', y: 60 }, { x: 'Gram', y: null },
            { x: 'Milk', y: 70 }, { x: 'Peas', y: 80 },
            { x: 'Fruit', y: 60 }, { x: 'Butter', y: null }
      ],
        
        dataLabel: {
                    visible: true, position: 'Inside',enableRotation: true, font: {
                        fontWeight: '600',
                    }
                },
                emptyPointSettings: {
                    fill: '#e6e6e6',
                },
        emptydata: "Drop",
        legendSettings: {
            visible: false,
        },
       
         tooltip: { enable: true, format: ' <b>${point.x}</b><br> Profit: <b>$${point.y}K</b>', header: '' },

         modedata: ["Drop", "Average", "Zero" ],

      modewidth: 120,
       
      title: "Annual Product-Wise Profit Analysis"
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
    load: function (args) {
            if (selectedTheme === 'bootstrap5-dark') {
                args.chart.series[0].emptyPointSettings.fill = '#FF7F7F';
            }
    },
     modeChange: function(args) {
      let empty = document.getElementById('emptypointmode').value;
        let emptyPointSettings = extend({}, this.emptyPointSettings);
            emptyPointSettings.mode = empty;
            this.emptyPointSettings = emptyPointSettings; 
            
      },
      onTextRender: function (args) {
        args.text = args.point.x + ": $" + args.point.y + "K";
    },
  },

};
</script>