<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-accumulationchart  ref='pie' :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title'
             :legendSettings='legendSettings' :tooltip='tooltip' enableSmartLables='true' :enableAnimation='enableAnimation' :center='center'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :startAngle='startAngle' :endAngle='endAngle' :explodeOffset='explodeOffset' :explodeIndex='explodeIndex' :radius='radius'  xName='x' yName='y' :dataLabel='dataLabel' name='Browser' innerRadius='0%'  explode='true'> </e-accumulation-series>

            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
   <div>
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <br/><br/>
            <tbody><tr style="height: 50px">
                <td>
                    <div>Pie Angle

                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                        <input type="range" name="range-min" id="pieangle" value="0" min="0" max="360" style="width:90%"  @touchmove='pieangle' @pointermove='pieangle' @change='pieangle' autocomplete="off">
                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                     <p id="anglevalue" style="font-weight: normal;padding-top:10px">0</p>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Outer Radius

                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                        <input type="range" name="range-min" id="pieradius" value="70" min="0" max="80" style="width:90%"  @touchmove='pieradius' @pointermove='pieradius' @change='pieradius' autocomplete="off">
                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                     <p id="radiusid" style="font-weight: normal;padding-top:10px">0.70</p>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Explode Radius

                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                        <input type="range" name="range-min" id="pieexploderadius" value="10" min="0" max="40" style="width:90%"  @touchmove='pieexploderadius' @pointermove='pieexploderadius' @change='pieexploderadius' autocomplete="off">
                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                     <p id="exploderadius" style="font-weight: normal;padding-top:10px">0.1</p>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Explode Index

                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                        <input type="range" name="range-min" id="pieexplodeindex" value="0" min="0" max="6" style="width:90%"  @touchmove='pieexplodeindex' @pointermove='pieexplodeindex' @change='pieexplodeindex' autocomplete="off">
                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                      <p id="explodeindex" style="font-weight: normal;">0</p>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Center X

                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                        <input type="range" name="range-min" id="x" value="50" min="0" max="100" style="width:90%"  @touchmove='piecenterx' @pointermove='piecenterx' @change='piecenterx' autocomplete="off">
                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                      <p id="xvalue" style="font-weight: normal;">50%</p>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
                <td>
                    <div>Center Y

                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                        <input type="range" name="range-min" id="y" value="50" min="0" max="100" style="width:90%"  @touchmove='piecentery' @pointermove='piecentery' @change='piecentery' autocomplete="off">
                    </div>
                </td>
                <td>
                    <div data-role="rangeslider">
                      <p id="yvalue" style="font-weight: normal;">50%</p>
                    </div>
                </td>
            </tr>
        </tbody></table>
    </div>
    </div>
    <div id="action-description">
    <p>
      This sample demonstrates pie chart for mobile browser usage statistics. <code>Datalabel</code> shows the Information about the points.
      While hovering on the slice, border will be highlighted.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the pie chart. You can use <code>border</code>, <code>fill,</code> properties to customize the pie point. <code>dataLabel</code> is used to represent individual data and its value.
    </p>
    <p>
        <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
</div>
</div>

</template>
<style>

</style>
<script>
import Vue from "vue";
import { Browser } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-vue-dropdowns';
import { AccumulationChartPlugin, AccumulationTooltip, PieSeries, AccumulationDataLabel, AccumulationLegend } from "@syncfusion/ej2-vue-charts";
Vue.use(AccumulationChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
         theme: theme,
      seriesData: [
                { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
                    { 'x': 'iPhone', y: 19, text: '19%' },
                    { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
                    { 'x': 'Android', y: 12, text: '12%' }
      ],


          dataLabel: {
                    visible: true,
                    position: 'Inside', name: 'text',
                    font: {
                        fontWeight: '600'
                    }
                },
                 enableSmartLabels: true,
				 enableAnimation: false,
        legendSettings: {
            visible: false,
        },
           tooltip: { enable: true, format: '${point.x} : <b>${point.y}%</b>' },

      startAngle: '0',
      endAngle: '360',
      radius: '70%',
      explodeOffset: '10%',
      explodeIndex : 0,
      center: {x: '50%', y: '50%'},
      title: "Mobile Browser Statistics"
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  updated: function() {
    this.$nextTick(function() {
        this.$refs.pie.ej2Instances.refresh();
        this.$refs.pie.ej2Instances.removeSvg();
        this.$refs.pie.ej2Instances.refreshSeries();
        this.$refs.pie.ej2Instances.refreshChart();
      });
    },
  methods: {
    pieangle : function(e) {
           let angle = document.getElementById('pieangle').value;
            this.endAngle=+angle;
            this.startAngle=+angle;
            document.getElementById('anglevalue').innerHTML = angle;

    },
    pieradius : function(e) {
           let rad = document.getElementById('pieradius').value;
            this.radius = rad + '%';
            document.getElementById('radiusid').innerHTML =(rad / 100).toFixed(2);

    },
     pieexploderadius : function(e) {
           let rad = document.getElementById('pieexploderadius').value;
            this.explodeOffset = rad + '%';
            document.getElementById('exploderadius').innerHTML =(rad / 100).toFixed(2);

    },
     pieexplodeindex : function(e) {
           let index = document.getElementById('pieexplodeindex').value;
            this.explodeIndex =+index;
            document.getElementById('explodeindex').innerHTML = index;

    },
    piecenterx : function(e) {
           let x = document.getElementById("x").value;
            this.$refs.pie.ej2Instances.center.x = x + "%";
            document.getElementById("xvalue").innerHTML = x + "%";
            this.$refs.pie.ej2Instances.refresh();
            this.$refs.pie.ej2Instances.removeSvg();
            this.$refs.pie.ej2Instances.refreshSeries();
            this.$refs.pie.ej2Instances.refreshChart();
    },
    piecentery : function(e) {
           let y = document.getElementById("y").value;
            this.$refs.pie.ej2Instances.center.y = y + "%";
            document.getElementById("yvalue").innerHTML = y + "%";
            this.$refs.pie.ej2Instances.refresh();
            this.$refs.pie.ej2Instances.removeSvg();
            this.$refs.pie.ej2Instances.refreshSeries();
            this.$refs.pie.ej2Instances.refreshChart();

    },
  }

});
</script>