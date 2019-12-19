<template>
<div>
<div class="control-section col-lg-9">
    <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' ref='heatmap' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :load='load'></ejs-heatmap>
    </div>
    </div>
    <div style="float: right; margin-right: 10px;">Source:
      <a href="https://en.wikipedia.org/wiki/List_of_countries_by_oil_production" target="_blank">https://en.wikipedia.org/</a>
</div>
</div>
<div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 40%;">
                    <ejs-checkbox id='xInversed' ref='xAxisInverse' label='Reverse X-Axis Origin' checked="true" :change="valueXChange"></ejs-checkbox>
                    </td>
                </tr>
                 <tr style="height: 50px">
                    <td style="width: 40%;">
                    <ejs-checkbox id='yInversed' ref='yAxisInverse' label='Reverse Y-Axis Origin' checked="true" :change="valueYChange"></ejs-checkbox>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample illustrates the population growth rate of the most populous countries over the years. The data label is disabled in this sample, the tooltip displays the data point values.  In property panel, the options are available to reverse the origin of the axes by means of checkbox for each axis.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to reverse the axis origin for both axes, once the axis origin has been reversed the axis data will be displayed inverted. You can reverse the axis origin by enabling the <code>isInversed </code> property for each axis. 
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
import { inveredAxisData } from './heatmap-data/invered-axis-data.json';
Vue.use(HeatMapPlugin);
Vue.use(CheckBoxPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
            text: 'Population Growth Rate of the most Populous Countries',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal'
            }
        },
         xAxis: {
            labels: ['China', 'India', 'USA', 'Indonesia', 'Brazil', 'Pakistan',
                'Nigeria', 'Bangladesh', 'Russia', 'Mexico'],
            labelRotation: 45,
            labelIntersectAction: 'None',
            isInversed: true
        },
        yAxis: {
            labels: ['1965-1970', '1970-1975', '1975-1980', '1980-1985', '1985-1990',
                '1990-1995', '1995-2000', '2000-2005', '2005-2010', '2010-2015'],
            isInversed: true
        },
        dataSource: inveredAxisData,
        cellSettings: {
            border: {
                width: 0
            },
            showLabel: false,
            format: '{value} %'
        },
        paletteSettings: {
            palette: [{ value: 0, color: '#4b7287' },
            { value: 0.5, color: '#b5b29f' },
            { value: 1, color: '#F0D6AD' },
            { value: 1.5, color: '#9da49a' },
            { value: 2, color: '#466f86' },
            { value: 2.5, color: '#d7c7a7' },
            { value: 3, color: '#6e888f' },
            ]
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
        this.$refs.heatmap.ej2Instances.xAxis.isInversed = this.$refs.xAxisInverse.ej2Instances.checked;
    },
    valueYChange: function(args)
    {
        this.$refs.heatmap.ej2Instances.yAxis.isInversed = this.$refs.yAxisInverse.ej2Instances.checked;
    }
  }
})
</script>
