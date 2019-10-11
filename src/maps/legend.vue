<template>
<div>
<div class="col-lg-8 control-section">
    <div class="content-wrapper">
    <div align="center">
<ejs-maps ref="maps" id='container' align="center" :load='load' :tooltipRender='tooltipRender' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings'></e-layer>
    </e-layers>
</ejs-maps>
   
    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://simple.wikipedia.org/wiki/List_of_countries_by_population_density" target="_blank">simple.wikipedia.org</a>
    </div>
</div>
</div>
</div>

<div class="col-lg-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <tbody>
                <tr style="height: 50px">
                    <td style="width: 10%">
                        <div class="property-text" style="padding: 0px;">Legend mode </div>
                    </td>
                    <td style="width: 30%;">
                    <ejs-dropdownlist id='legendMode' style="width:100;" :dataSource='legendModeData' index=0 :width='labelswidth' :change='changeLegendMode'></ejs-dropdownlist>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 10%">
                        <div class="property-text" style="padding: 0px;">Legend position </div>
                    </td>
                    <td style="width: 30%">
                    <ejs-dropdownlist id='legendPosition' style="width:100%;" :dataSource='positionData' index=0 :width='labelswidth' :change='changeLegendPosition'></ejs-dropdownlist>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 70%">
                        <div class="property-text" style="padding: 0px;">Show legend for remaining data source items</div>
                    </td>
                    <td style="width: 20%">
                        <div style="padding-top:0px;">
                            <ejs-checkbox id="opacity" :change="changeOpcity"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
                <tr style="height: 50px">
                    <td style="width: 70%">
                        <div class="property-text" style="padding: 0px;">Show population density while the legend item is toggled</div>
                    </td>
                    <td style="width: 20%">
                        <div style="padding-top:0px;">
                            <ejs-checkbox id="toggleLegend" :change="changetoggle"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<div id="action-description">
        <p>
           This sample visualizes grouping of countries in the legend based on its population density. The legend will be displayed at the top of the map.
       </p>
    </div>
    <div id="description">
        <p>
          In this example, you can see how to render a legend in the maps. A legend item denotes the value of a shape. Any number of legend items can be added to the legend. You can bind the desired colors to the shapes, if its values are within the specified range using the <code>ColorMapping</code> property. You can also show or hide color mapping related to population density while toggling the legend item
    
        </p>
        <p>
    Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a shape or tap a shape in touch enabled devices.
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
           Maps component features are segregated into individual feature-wise modules. To use a legend, inject the <code>Legend</code> module using the <code>Maps.Inject(Legend)</code> method.
        </p>
       
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import { MapsPlugin, Legend, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);
Vue.use(MapsPlugin);
Vue.use(DropDownListPlugin);
export default Vue.extend({
  data:function(){
      return{
        zoomSettings: {
            enable: false
        },
        titleSettings: {
            text: 'Population density (per square kilometer) - 2015',
            textStyle: {
                size: '16px'
            }
        },
        legendSettings: {
            visible: true,
            position: 'Top'
        },
        legendModeData: ["Default", "Interactive"],
        positionData: ["Top", "Bottom", "Left", "Right"],
        labelswidth: 120,
        shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        dataSource: new MapAjax('./src/maps/map-data/legend-datasource.json'),
        tooltipSettings: {
                    visible: true,
                    valuePath: 'name',
                    format: '${name} : ${density}'
                },
                shapeSettings: {
                    colorValuePath: 'density',
                    fill: '#E5E5E5',
                    colorMapping: [
                        {
                            from: 0.00001, to: 100, color: 'rgb(153,174,214)', label: '<100'
                        },
                        {
                            from: 100, to: 200, color: 'rgb(115,143,199)', label: '100 - 200'
                        },
                        {
                            from: 200, to: 300, color: 'rgb(77,112,184)', label: '200 - 300'
                        },
                        {
                            from: 300, to: 500, color: 'rgb(38,82,168)', label: '300 - 500'
                        },
                        {
                            from: 500, to: 19000, color: 'rgb(0,51,153)', label: '>500'
                        },
                        {
                            color: null, label: null
                        }
                    ]
                }
      }
  },
provide: {
    maps: [Legend , MapsTooltip]
},
methods:{
/* custom code start */
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    /* custom code end */
    // Code for Property Panel
    tooltipRender:function(args){
          if (!args.options.data) {
                args.cancel = true;
            }
    },
    changeLegendMode: function(args) {
            let maps= this.$refs.maps.ej2Instances; 
            maps.legendSettings.mode = args.value;
            if (args.value === 'Interactive') {
                if (maps.legendSettings.orientation === 'Horizontal' || maps.legendSettings.orientation === 'None') {
                    maps.legendSettings.height = '10';
                    maps.legendSettings.width = '';
                } else {
                    maps.legendSettings.height = '70%';
                    maps.legendSettings.width = '10';
                }
            } else {
                maps.legendSettings.height = '';
                maps.legendSettings.width = '';
            }
            maps.refresh();

    },
    changeLegendPosition: function(args) {
            let maps= this.$refs.maps.ej2Instances;
            maps.legendSettings.position = args.value;
            if (args.value === 'Left' || args.value === 'Right') {
                maps.legendSettings.orientation = 'Vertical';
                if (maps.legendSettings.mode === 'Interactive') {
                    maps.legendSettings.height = '70%';
                    maps.legendSettings.width = '10';
                } else {
                    maps.legendSettings.height = '';
                    maps.legendSettings.width = '';
                }
            } else {
                maps.legendSettings.orientation = 'Horizontal';
                if (maps.legendSettings.mode === 'Interactive') {
                    maps.legendSettings.height = '10';
                    maps.legendSettings.width = '';
                }
            }
            maps.refresh();
    },
    changeOpcity: function(args) {
        let maps= this.$refs.maps.ej2Instances;
        if (args.checked) {
            maps.layers[0].shapeSettings.colorMapping[5].color = 'lightgrey';
            maps.layers[0].shapeSettings.colorMapping[5].label = 'No Data';
        } else {
            maps.layers[0].shapeSettings.colorMapping[5].color = null;
            maps.layers[0].shapeSettings.colorMapping[5].label = null;
        }
        maps.refresh();
    },
    changetoggle: function(args) {
        let maps= this.$refs.maps.ej2Instances;
        maps.legendSettings.toggleLegendSettings.enable = args.checked;
        maps.refresh();
    }
}
})
</script>

