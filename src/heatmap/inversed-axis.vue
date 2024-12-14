<template>
<main><div id="inversed">
<div class="control-section col-lg-9">
    <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' :tooltipSettings='tooltipSettings' ref='heatmap' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :load='load'></ejs-heatmap>
    </div>
    </div>
    <div style="float: right; margin-right: 10px;">Source:
      <a href="https://en.wikipedia.org/wiki/List_of_countries_by_oil_production" target="_blank">https://en.wikipedia.org/</a>
</div>
</div>
<div class="col-lg-3 property-section">
        <table role="none" id="property" title="Properties" style="width: 100%;margin-left: -10px;">
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
</div>
<section id="action-description" aria-label="Description of HeatMap sample">
    <p>
        This sample illustrates the population growth rate of the most populous countries over the years. The data label is disabled in this sample, the tooltip displays the data point values.  In property panel, the options are available to reverse the origin of the axes by means of checkbox for each axis.
    </p>
</section>
<section id="description" aria-label="Description of the HeatMap features demonstrated in this sample">
    <p>
        In this example, you can see how to reverse the axis origin for both axes, once the axis origin has been reversed the axis data will be displayed inverted. You can reverse the axis origin by enabling the <a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/axisModel/#isinversed" target="_blank">isInversed </a> property for each axis. 
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

    .e-view.fluent2 #inversed #property, .e-view.fluent2-dark #inversed #property, .e-view.fluent2-highcontrast #inversed #property {
        margin-left: -20px !important;
    }

</style>
<script>
import { HeatMapComponent, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
components: {
    'ejs-heatmap': HeatMapComponent,
    'ejs-checkbox': CheckBoxComponent
},
data:function(){
return{
        titleSettings: {
            text: 'Population Growth Rate of the most Populous Countries',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            }
        },
         xAxis: {
            labels: ['China', 'India', 'USA', 'Indonesia', 'Brazil', 'Pakistan',
                'Nigeria', 'Bangladesh', 'Russia', 'Mexico'],
            labelRotation: 45,
            labelIntersectAction: 'None',
            isInversed: true,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['1965-1970', '1970-1975', '1975-1980', '1980-1985', '1985-1990',
                '1990-1995', '1995-2000', '2000-2005', '2005-2010', '2010-2015'],
            isInversed: true,
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        dataSource: [
            [2.65, 2.21, 1.52, 1.49, 1.81, 1.12, 0.69, 0.59, 0.57, 0.54],
            [2.13, 2.31, 2.29, 2.30, 2.14, 1.98, 1.84, 1.66, 1.46, 1.23],
            [0.96, 0.90, 0.94, 0.94, 0.95, 1.01, 1.19, 0.91, 0.90, 0.72],
            [2.71, 2.59, 2.41, 2.25, 1.90, 1.64, 1.43, 1.39, 1.35, 1.25],
            [2.65, 2.42, 2.37, 2.26, 1.92, 1.66, 1.54, 1.29, 1.03, 0.91],
            [2.66, 2.79, 3.12, 3.33, 3.10, 2.63, 2.41, 2.11, 2.05, 2.09],
            [2.21, 2.48, 2.95, 2.59, 2.61, 2.51, 2.49, 2.54, 2.64, 2.67],
            [3.06, 1.84, 2.67, 2.69, 2.61, 2.23, 2.06, 1.73, 1.18, 1.16],
            [0.57, 0.56, 0.63, 0.70, 0.63, 0.10, -0.26, -0.38, -0.07, 0.10],
            [3.07, 3.14, 2.61, 2.18, 1.97, 1.94, 1.57, 1.29, 1.57, 1.41]
        ],
        cellSettings: {
            border: {
                width: 0
            },
            showLabel: false,
            format: '{value} %',
            textStyle: {
                fontFamily: 'inherit'
            }
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
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        }
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
        (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
     /* custom code end */
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
}
</script>
