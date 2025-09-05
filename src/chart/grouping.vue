<template>
  <div>
    <div class="col-md-8 control-section sb-property-border">
        <ejs-accumulationchart id="containerPie" ref="pie" style='display:block; width: 92%' :legendSettings="legendSettings" :tooltip="tooltip" :title="title" :subTitle="subTitle" :theme='theme' :enableBorderOnMouseMove='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series name='RIO' :animation='animation' :explode='true' :dataSource='data' xName='x' yName='y' :startAngle="startAngle" :endAngle="endAngle" :radius="radius" innerRadius="0%"
                 groupMode='Point' :dataLabel="dataLabel" :groupTo='clubvalue' :border="border" borderRadius="3">
                </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
    <div class="col-md-4 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
                     <tr>
                 <td style="width: 50%">
                       <div>GroupModes:
                       </div>
                </td>
                <td style="width: 50%;">
                    <div>
                        <ejs-dropdownlist id='groupMode' :change='changeMode'  index=0 :dataSource='groupModeData' width='120'></ejs-dropdownlist>
                    </div>
                  </td>
                  </tr>

                    <tr >
                        <td style="width: 30%">
                            <div id="groupValue">Group To                                
                            </div>
                        </td>
                        <td style="width: 40%;">
                            <div data-role="rangeslider">
                                <input type="range" name="clubvalue" value="9" min="0" max="27" @touchmove='onClubvalue' @pointermove='onClubvalue' @change='onClubvalue' autocomplete="off" id="clubvalue" style="width:90%" aria-labelledby="Slider">
                            </div>
                        </td>
                        <td style="width: 30%">
                            <p id="clubtext" style="font-weight: normal; padding-top: 15px;">9</p>
                        </td>
                    </tr>
                </table>
    </div>


    <div id="action-description">
    <p>
        This sample shows the gold medal count scored by each country at the summer olympic 2024 games, along with the pie series grouping functionality.
    </p>
</div>
<div id="description">
    <p>In this example, you can see how to group points based on count and values. 
        The slice can be grouped based on the number of points by specifying the <code>GroupMode</code> to <code>Point</code>. 
        For example, if the <code>GroupTo</code> property is set to 10, the chart will display the first 10 points and the remaining entries from the collection will be grouped as a single point. 
        The slice can also be grouped based on values by specifying the <code>GroupMode</code> to <code>Value</code>. 
        For example, if the GroupTo is set to 10, the first 10 points with a lower value will be grouped together and shown as a single point while the others as a slice.</p>
        <p>
            <code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.
        </p>
    <p>
        More information about the grouping in accumulation chart can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/accumulation-chart/grouping/" aria-label="Navigate to the documentation for Grouping in Vue Accumulation Chart component">documentation section</a>.
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
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection } from "@syncfusion/ej2-vue-charts";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Browser } from '@syncfusion/ej2-base';

import { loadAccumulationChartTheme  } from "./theme-color";
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
        groupModeData: ["Point", "Value"],
        theme: theme,
        animation: {
            enable: true
        },
        data: [
            { x: 'China', y: 40, text: 'China: 40' },
            { x: 'Japan', y: 20, text: Browser.isDevice ? 'Japan:<br> 20' : 'Japan: 20' },
            { x: 'Australia', y: 18, text: Browser.isDevice ? 'Australia:<br> 18' : 'Australia: 18' },
            { x: 'France', y: 16, text: 'France: 16' },
            { x: 'Netherlands', y: 15, text: 'Netherlands: 15' },
            { x: 'Great Britain', y: 14, text: 'Great Britain: 14' },
            { x: 'South Korea', y: 13, text: 'South Korea: 13' },
            { x: 'Germany', y: 12, text: Browser.isDevice ? 'Germany:<br> 12' : 'Germany: 12' },
            { x: 'Italy', y: 12, text: Browser.isDevice ? 'Italy:<br> 12' : 'Italy: 12' },
            { x: 'Canada', y: 9, text: Browser.isDevice ? 'CA: 9' : 'Canada: 9' },
            { x: 'Hungary', y: 6, text: Browser.isDevice ? 'HU: 6' : 'Hungary: 6' },
            { x: 'Spain', y: 5, text: 'Spain: 5' },
            { x: 'Kenya', y: 4, text: 'Kenya: 4' },
            { x: 'Brazil', y: 3, text: 'Brazil: 3' }
    ],
    //Initializing Legend
    legendSettings: {
        visible: false,
    },
    //Initializing DataLabel
    dataLabel: {
        visible: true,
        position: 'Outside', name: 'text',
        connectorStyle: { type: 'Curve', length: Browser.isDevice ? '10px' : '20px' },
        font: {
            size: Browser.isDevice ? '8px' : '13px', 
            fontWeight: '600',  
        }
    },
    clubvalue: '9',
    startAngle: -20,
    radius: Browser.isDevice ? '40%' : '55%',
    endAngle: 340,
    border: { width: 1, color: '#ffffff' },
    tooltip: { enable: true, header:'', format:'<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>', enableHighlight: true },
    title: 'Summer Olympic 2024 - Gold Medals',
    subTitle: 'Source: wikipedia.org'
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection]
  },
  methods: {
      changeMode: function(e){
          let accumulationChart = document.getElementById('containerPie').ej2_instances[0];
          let currentValue = e.value  === 'Point' ? 9 : 8;
          document.getElementById('clubtext').innerHTML = currentValue;
          document.getElementById('clubvalue').value = currentValue;
          accumulationChart.series[0].groupMode = e.value;
          accumulationChart.series[0].groupTo = currentValue.toString();
          accumulationChart.series[0].animation.enable = false;
          accumulationChart.removeSvg();
          accumulationChart.refreshSeries();
          accumulationChart.refreshChart();
      },
    onClubvalue: function (e) {
        let clubvalue = document.getElementById('clubvalue').value;
        this.clubvalue = clubvalue;
        document.getElementById('clubtext').innerHTML = clubvalue;
    },
  },
    updated: function() {
      this.$nextTick(function() {
        this.$refs.pie.ej2Instances.refresh();
        this.$refs.pie.ej2Instances.removeSvg();
        this.$refs.pie.ej2Instances.refreshSeries();
        this.$refs.pie.ej2Instances.refreshChart();
      });
    }
};
</script>