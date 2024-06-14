<template>
<main><div id="opposed">
<div class="control-section col-lg-9">
    <div>
        <div class="content-wrapper" style='width:99%'>
            <ejs-heatmap id='container' :tooltipSettings='tooltipSettings' ref='heatmap' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :legendSettings='legendSettings' :load='load'></ejs-heatmap>
        </div>
    </div>
</div>
<div class="col-lg-3 property-section">
        <table role="none" id="property" title="Properties" style="width: 100%;margin-left: -10px;">
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
</div>
<section id="action-description" aria-label="Description of HeatMap sample">
    <p>
        This sample illustrates the monthly flight arrivals at JFK international airport, New York. The data label is disabled in this sample, the tooltip displays the data point values.  In property panel, the options are available to change the position of the axes by means of checkbox for each axis.
    </p>
</section>
<section id="description" aria-label="Description of the HeatMap features demonstrated in this sample">
    <p>
        In this example, you can see how to change the display position of the axis. You can change the display position of axes by enabling the
        <a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/axisModel/#opposedposition" target="_blank">opposedPosition</a> property for each axis.
    </p>
    <p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p>
    <br>
    <p><b>Injecting Module</b></p>
    <p>
      Heatmap component features are separated into discrete feature-based modules. To use a tooltip and the legend, inject the <a target="_blank"
      href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip">Tooltip</a> and <a target="_blank"
      href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/legend">Legend</a> modules using the <code>provide:{ heatmap:[Tooltip, Legend] }</code> method.
    </p>
</section>
</main>
</template>
<style scoped>

    .e-view.fluent2 #opposed #property, .e-view.fluent2-dark #opposed #property {
        margin-left: -20px !important; 
    }
</style>
<script>
import { HeatMapComponent, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import data from './opposed-axis-data.json';

export default {
components: {
    'ejs-heatmap': HeatMapComponent,
    'ejs-checkbox': CheckBoxComponent
},
data:function(){
return{
        titleSettings: {
            text: 'Monthly Flight Traffic at JFK Airport',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
         xAxis: {
            labels: ['2007', '2008', '2009', '2010', '2011',
                '2012', '2013', '2014', '2015', '2016', '2017'],
            opposedPosition: true,
            labelRotation: 45,
            labelIntersectAction: 'None',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            opposedPosition: true,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource: data.opposedAxisData,
        cellSettings: {
           showLabel: false,
            border: {
                width: 0
            },
            format: '{value} flights',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        legendSettings: {
            visible: false
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
}
},
provide:{
    heatmap:[Tooltip, Legend]
},
methods: {
    load: function(args) {
     /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, "Dark");
     /* custom code end */
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
}
</script>