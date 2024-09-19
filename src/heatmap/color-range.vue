<template>
<main><div>
    <div class="control-section col-lg-9">
        <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' ref='heatmap' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' :load='load'></ejs-heatmap>
        </div>
        </div>
    </div>
    <div class="col-lg-3 property-section">
        <table role="none" id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 60%">
                        <div>Palette Type:</div>
                    </td>
                    <td style="width: 40%;">
                        <div class="row">
                            <ejs-radiobutton id='fixed' ref='fixedType' label="Fixed" name="paletteType" value="Fixed"  :change='paletteChange'></ejs-radiobutton>
                        </div>
                        <div class="row">
                            <ejs-radiobutton id='gradient' ref='graidentType' label="Gradient" name="paletteType" value="Gradient" checked="true" :change='paletteChange'></ejs-radiobutton>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<section id="action-description" aria-label="Description of HeatMap sample">
    <p>
        This sample visualizes the energy consumption in trillion British thermal units (btu) by the various public sectors in US government over the years. The data label is disabled in this sample, the tooltip displays the data point values.  In property panel, the options are available to change palette type in Heatmap by means of radio button.
    </p>
</section>
<section id="description" aria-label="Description of the HeatMap features demonstrated in this sample">
    <p>
        This example explains how to provide a specific color for specific range in heatmap. The <code> startValue </code> and <code> endValue </code> properties are used to define the range start and end values. The <code> minColor </code> and <code> maxColor </code> properties represent the colors of given range.    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
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
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { RadioButtonPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(HeatMapPlugin);
Vue.use(RadioButtonPlugin, CheckBoxPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
           text: 'U.S. Government Energy Consumption by Agency (Trillion Btu)',
            textStyle: {
                fontWeight: '500',
                fontStyle: 'Normal',
                size: '15px',
            }
        },
         xAxis: {
            labels: ['2005', '2006', '2007', '2008', '2009', '2010',
                '2011', '2012', '2013', '2014', '2015'],
            labelRotation: 45,
            labelIntersectAction: 'None'
        },
        yAxis: {
            labels: ['Agriculture', 'Energy', 'Administration', 'Health', 'Interior',
                'Justice', 'NASA', 'Transportation']
        },
        dataSource: [
            [17.2, 24.6, 18.4, 9.6, 8.6, 18.8, 10.3, 5.0],
            [15.8, 29.9, 15.2, 31.3, 18.1, 5.5, 10.2, 14.6],
            [17.8, 25.5, 19.1, 12.9, 7.5, 30.7, 12.6, 5.6],
            [7.3, 20.1, 18.8, 20.3, 6.1, 9.0, 29.8, 7.7],
            [7.8, 30.5, 19.6, 10.8, 7.9, 15.5, 5.2, 14.3],
            [5.8, 31.7, 17.8, 10.4, 17.3, 15.7, 9.1, 7.7],
            [11.3, 29.1, 19.5, 11.5, 6.3, 12.9, 10.1, 6.7],
            [13.7, 31.3, 15.3, 6.2, 7.7, 16.1, 18.9, 12.6],
            [9.3, 29.9, 16.4, 14.5, 5.2, 12.3, 18.7, 7.3],
            [16.3, 27.4, 27.0, 5.5, 16.2, 12.6, 8.3, 15.2],
            [7.2, 20.1, 16.9, 9.0, 7.6, 16.2, 8.4, 29.0]
        ],
        cellSettings: { border: { width: 0 }, showLabel: false },
        paletteSettings: {
            palette: [{ startValue: 5, endValue: 15, minColor: '#FFFFDA', maxColor: '#EDF8B6' },
            { startValue: 15, endValue: 20, minColor: '#CAE8B4', maxColor: '#78D1BD' },
            { startValue: 20, endValue: 31.7, minColor: '#36BCC6', maxColor: '#208FC6' },
            ],
            type: 'Gradient'
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
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, "Dark").replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
    },
    paletteChange : function()
    {
        this.$refs.heatmap.ej2Instances.paletteSettings.type = this.$refs.fixedType.ej2Instances.checked ? 'Fixed' : 'Gradient';
    },
  }
})
</script>