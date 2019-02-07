<template>
  <div class="control-section">
    <div class="col-md-9 control-section">
        <ejs-accumulationchart ref="funnel" :theme='theme' id="container" style='display:block;  width: 92%'  :tooltip="tooltip" :title="title"
         :resized='onChartResized' :enableAnimation='false'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='data' xName='x' yName='y' :neckWidth="neckWidth" :neckHeight="neckHeight" :gapRatio="gapRatio"
                :emptyPointSettings="emptyPointSettings" height = '80%' width='60%' :explode="explode" :dataLabel="dataLabel" type='Funnel'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
    <div class="col-md-3 property-section">
        <table id="property" class="property-panel-table" title="Properties" style="width: 100%">
                    <tr style="height: 50px">
                        <td style="width: 30%">
                            <div>Neck Width</div>
                        </td>
                        <td style="width: 70%;">
                            <div data-role="rangeslider">
                                <input type="range" name="range-min" value="15" min="0" max="45" @touchmove='funnelNeckWidth' @pointermove='funnelNeckWidth' @change='funnelNeckWidth' autocomplete="off" id="funnelNeckWidth" style="width:90%">
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div data-role="rangeslider">
                              <p id="neckWidth" style="font-weight: normal;padding-top:10px">15%</p>  
                            </div>
                        </td>
                    </tr>
                    <tr style="height: 50px">
                        <td style="width: 30%">
                            <div>Neck Height</div>
                        </td>
                        <td style="width: 70%;">
                            <div data-role="rangeslider">
                                <input type="range" name="range-min" id="funnelNeckHeight" value="18" min="0" max="50" @touchmove='funnelNeckHeight' @pointermove='funnelNeckHeight' @change='funnelNeckHeight' autocomplete="off" style="width:90%">
                            </div>
                        </td>
                        <td style="width: 70%;">
                            <div data-role="rangeslider">
                              <p id="neckHeight" style="font-weight: normal;padding-top:10px">18%</p>  
                            </div>
                        </td>
                    </tr>
                </table>
   </div>

    <div id="action-description">
    <p>
        This sample visualizes the data about website visitors by using default funnel series. Datalabel shows the Information about the points.
    </p>
</div>
<div id="description">
    <p> In this example, you can see how to render and configure the funnel chart.<code>dataLabel</code> is used to represent individual data and its value.</p>
    <p> <code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.</p>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use Funnel feature, we need to inject
        <code>FunnelSeries</code> into the <code>provide</code> option.
    </p>
</div>

</div>
</template>
<style>
.control-section {
    min-height: 450px;
}
</style>
<script>
import Vue from "vue";
import { AccumulationChartPlugin, AccumulationLegend, FunnelSeries, AccumulationTooltip, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);


let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function() {
    return {
        theme: theme,
        enableAnimation : false,
    data: [{ x: 'Renewed', y: 18.20, text: '18.20%' },
    { x: 'Subscribed', y: 27.3, text: '27.3%' },
    { x: 'Support', y: 55.9, text: '55.9%' },
    { x: 'Downloaded', y: 76.8, text: '76.8%' },
    { x: 'Visited', y: 100, text: '100%' }],
    //Initializing Legend
    legendSettings: {
        toggleVisibility: false,
    },
    //Initializing DataLabel
    dataLabel: {
        name: 'text', visible: true, position: 'Inside', font: {
            fontWeight: '600'
        }
    },
    neckWidth: '15%',
    neckHeight: '18%',
    gapRatio: 0.03,
    emptyPointSettings: {
        fill: 'red', mode: 'Drop'
    },
    explode: true,
    tooltip: { enable: true, format: '${point.x} : <b>${point.y}%</b>' },
    height: "80%",
    title: 'Website Visitors'
    };
  },
  provide: {
    accumulationchart: [AccumulationLegend, FunnelSeries, AccumulationTooltip, AccumulationDataLabel]
  },
  methods: {
    funnelNeckWidth: function (e) {
        let value = document.getElementById('funnelNeckWidth').value;
        this.neckWidth = value + '%';
        document.getElementById('neckWidth').innerHTML = value + '%';
    },
    funnelNeckHeight: function (e) {
        let value = document.getElementById('funnelNeckHeight').value;
        this.neckHeight = value + '%';
        document.getElementById('neckHeight').innerHTML = value + '%';
    },
    onChartResized: function (args) {
        let bounds = document.getElementById('container').getBoundingClientRect();
        if (bounds.width < bounds.height) {
            this.width = '80%';
            this.height = '70%';
        } else {
            this.width = '60%';
            this.height = '80%';
        }
    }
  },
    updated: function() {
      this.$nextTick(function() {
        this.$refs.funnel.ej2Instances.refresh();
        this.$refs.funnel.ej2Instances.removeSvg();
        this.$refs.funnel.ej2Instances.refreshSeries();
        this.$refs.funnel.ej2Instances.refreshChart();
      });
    }
});
</script>