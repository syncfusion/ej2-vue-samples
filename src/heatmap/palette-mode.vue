<template>
<div>
    <div class="control-section col-lg-9">
        <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' ref='heatmap' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :load='load'></ejs-heatmap>
        </div>
        </div>
    </div>
    <div class="col-lg-3 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 60%">
                        <div>Palette Type:</div>
                    </td>
                    <td style="width: 40%;">
                        <div class="row">
                            <ejs-radiobutton id='fixed' ref='fixedType' label="Fixed" name="paletteType" value="Fixed" checked="true" :change='paletteChange'></ejs-radiobutton>
                        </div>
                        <div class="row">
                            <ejs-radiobutton id='gradient' ref='graidentType' label="Gradient" name="paletteType" value="Gradient" :change='paletteChange'></ejs-radiobutton>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 60%">
                        <div style="margin-top: 22px">Enable Smart Legend:</div>
                    </td>
                    <td style="width: 40%;">
                        <div>
                            <div class="row">
                                <ejs-checkbox id='smartLegend' ref='isSmartLegend' :checked="true" :disabled="false" :change='valueChange'></ejs-checkbox>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
    <p>
        This sample visualizes the energy consumption in trillion British thermal units (btu) by the various public sectors in US government over the years. The data label is disabled in this sample, the tooltip displays the data point values.  In property panel, the options are available to change palette type in Heatmap by means of radio button.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to change the palette type between <code>Fixed </code> and <code>Gradient </code> types in Heatmap. The palette type can be defined using the <code>type </code> property in <code>paletteSettings </code>. Legend is enabled in this example, changing the palette mode the legend type will be automatically switched between gradient legend and list type legend.
    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
       Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip </code> module using the <code>Heatmap.Inject(Tooltip) </code> method, and use a legend by injecting the <code>Legend </code> module using the <code>Heatmap.Inject(Legend) </code> method.
    </p>
</div>
</div>
</template>
<script>
import Vue from 'vue';
import { HeatMapPlugin, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { RadioButtonPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { palatteSampleData } from './heatmap-data/palatte-sample-data.json';
Vue.use(HeatMapPlugin);
Vue.use(RadioButtonPlugin, CheckBoxPlugin);
export default Vue.extend({
data:function(){
return{
        titleSettings: {
           text: 'U.S. Government Energy Consumption by Agency (Trillion Btu)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal'
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
        dataSource: palatteSampleData,
        cellSettings: { border: { width: 0 }, showLabel: false },
        legendSettings: {
            position: 'Bottom',
            width: '400px',
            enableSmartLegend: true
        },
        paletteSettings: {
            palette: [{ value: 4.3, color: '#FFFFDA' },
            { value: 7, color: '#EDF8B6' },
            { value: 9, color: '#CAE8B4' },
            { value: 15, color: '#78D1BD' },
            { value: 18, color: '#36BCC6' },
            { value: 25, color: '#208FC6' },
            { value: 30, color: '#2C2F9A' },
            { value: 34, color: '#071C58' },
            ],
            type: 'Fixed'
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
    paletteChange : function()
    {
        this.$refs.isSmartLegend.ej2Instances.disabled = !this.$refs.fixedType.ej2Instances.checked;
        this.$refs.heatmap.ej2Instances.paletteSettings.type = this.$refs.fixedType.ej2Instances.checked ? 'Fixed' : 'Gradient';
    },
    valueChange: function() {
        this.$refs.heatmap.ej2Instances.legendSettings.enableSmartLegend = this.$refs.isSmartLegend.ej2Instances.checked;
    }
  }
})
</script>