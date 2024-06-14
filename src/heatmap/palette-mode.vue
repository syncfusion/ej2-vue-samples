<template>
<main><div>
    <div class="control-section col-lg-9">
        <div>
        <div class="content-wrapper" style='width:99%'>
        <ejs-heatmap id='container' ref='heatmap' :tooltipSettings='tooltipSettings' :titleSettings='titleSettings' :xAxis='xAxis' :yAxis='yAxis' :dataSource='dataSource' :cellSettings='cellSettings' :paletteSettings='paletteSettings' :legendSettings='legendSettings' :load='load'></ejs-heatmap>
        </div>
        </div>
    </div>
    <div class="col-lg-3 property-section">
        <table role="none" id="property" title="Properties" style="width: 100%;margin-left:-10px;">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 60%">
                        <div style="padding-left: 0px">Palette Type:</div>
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
                        <div style="padding-left: 0px">Enable Smart Legend:</div>
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
</div>
<section id="action-description" aria-label="Description of HeatMap sample">
    <p>
        This sample visualizes the energy consumption in trillion British thermal units (btu) by the various public sectors in US government over the years. The data label is disabled in this sample, the tooltip displays the data point values.  In property panel, the options are available to change palette type in Heatmap by means of radio button.
    </p>
</section>
<section id="description" aria-label="Description of the HeatMap features demonstrated in this sample">
    <p>
        In this example, you can see how to change the palette type between
        <a href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/palette#fixed" target="_blank">Fixed</a> and
        <a href="https://ej2.syncfusion.com/vue/documentation/heatmap-chart/palette#gradient" target="_blank">Gradient</a> types in Heatmap. The palette type can be defined using the
        <a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/paletteSettingsModel/#type" target="_blank">type</a> property in
        <a href="https://ej2.syncfusion.com/vue/documentation/api/heatmap/paletteSettingsModel/" target="_blank">paletteSettings</a>. Legend is enabled in this example, changing the palette mode the legend type will be automatically switched between
        gradient legend and fixed type legend.
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
<script>
import { HeatMapComponent, Tooltip, Legend } from "@syncfusion/ej2-vue-heatmap";
import { RadioButtonComponent, CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
components: {
    'ejs-heatmap': HeatMapComponent,
    'ejs-radiobutton': RadioButtonComponent,
    'ejs-checkbox': CheckBoxComponent
},
data:function(){
return{
        titleSettings: {
           text: 'U.S. Government Energy Consumption by Agency (Trillion Btu)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily:'inherit'
            }
        },
         xAxis: {
            labels: ['2005', '2006', '2007', '2008', '2009', '2010',
                '2011', '2012', '2013', '2014', '2015'],
            labelRotation: 45,
            labelIntersectAction: 'None',
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        yAxis: {
            labels: ['Agriculture', 'Energy', 'Administration', 'Health', 'Interior',
                'Justice', 'NASA', 'Transportation'],
            textStyle: {
                fontFamily: 'inherit'
            }
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
        cellSettings: {
            textStyle: {
                fontFamily: 'inherit'
            },
            border: { width: 0 },
            showLabel: false
        },
        tooltipSettings:{
            textStyle: {
                fontFamily: 'inherit'
            }
        },
        legendSettings: {
            position: 'Bottom',
            width: '400px',
            enableSmartLegend: true,
            textStyle: {
                fontFamily: 'inherit'
            }
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
     /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.heatmap.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, "Dark");
     /* custom code end */
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
}
</script>