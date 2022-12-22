<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-accumulationchart ref="pie" :theme='theme' style='display:block' align='center'  :enableBorderOnMouseMove='false' id='chartcontainer' :title='title'
             :legendSettings='legendSettings' :tooltip='tooltip'  :textRender="onTextRender">
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
    <br>
    <p>
        More information about the empty points in accumulation chart can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/empty-points/">documentation section</a>.
    </p>
</div>
</div>

</template>
<style scoped>

</style>
<script>
import Vue from "vue";
import { extend } from '@syncfusion/ej2-base';
import { Browser } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { AccumulationChartPlugin, AccumulationTooltip, PieSeries, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');

export default Vue.extend({
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
         tooltip: { enable: true, format: '${point.x} : <b>${point.y}</b>' },

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

});
</script>