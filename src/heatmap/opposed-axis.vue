<template>
<div>
<div class="control-section col-lg-9">
    <div>
        <div class="content-wrapper" style='width:99%'>
            <ejs-heatmap id='container' ref='heatmap' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :legendSettings='legendSettings' :load='load'></ejs-heatmap>
        </div>
    </div>
</div>
<div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 40%;">
                    <ejs-checkbox id='xOpposed' ref='xAxisOpposed' label='Change X-Axis Position' checked="true" :change="valueXChange"></ejs-checkbox>
                    </td>
                </tr>
                 <tr style="height: 50px">
                    <td style="width: 40%;">
                    <ejs-checkbox id='yOpposed' ref='yAxisOpposed' label='Change Y-Axis Position' checked="true" :change="valueYChange"></ejs-checkbox>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample illustrates the monthly flight arrivals at JFK international airport, New York. The data label is disabled in this sample, the tooltip displays the data point values.  In property panel, the options are available to change the position of the axes by means of checkbox for each axis.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to change the display position of the axis. You can change the display position of axes by enabling the <code>opposedPosition </code> property for each axis.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip </code> module using the <code>Heatmap.Inject(Tooltip) </code> method.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { opposedAxisData } from './heatmap-data/opposed-axis-data.json';
Vue.use(HeatMapPlugin);
Vue.use(CheckBoxPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Monthly Flight Traffic at JFK Airport',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal'
            }
        },
         xAxis: {
            labels: ['2007', '2008', '2009', '2010', '2011',
                '2012', '2013', '2014', '2015', '2016', '2017'],
            opposedPosition: true,
            labelRotation: 45,
            labelIntersectAction: 'None'
        },
        yAxis: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            opposedPosition: true
        },
        dataSource: opposedAxisData,
        cellSettings: {
           showLabel: false,
            border: {
                width: 0
            },
            format: '{value} flights'
        },
        legendSettings: {
            visible: false
        }
}
},
provide:{
    heatmap:[Tooltip, Legend]
},
methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    valueXChange: function(args)
    {
        this.$refs.heatmap.ej2Instances.xAxis.opposedPosition = this.$refs.xAxisOpposed.ej2Instances.checked;
    },
    valueYChange: function(args)
    {
        this.$refs.heatmap.ej2Instances.yAxis.opposedPosition = this.$refs.yAxisOpposed.ej2Instances.checked;
    }
  }
})
</script>