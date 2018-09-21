<template>
<div>
<div class="control-section">
<ejs-maps id='container' align="center" :load='load' :tooltipRender='tooltipRender' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings'></e-layer>
    </e-layers>
</ejs-maps>    
    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://simple.wikipedia.org/wiki/List_of_countries_by_population_density" target="_blank">simple.wikipedia.org</a>
    </div>
</div>
<div id="action-description">
        <p>
           This sample visualizes grouping of countries in the legend based on its population density. The legend will be displayed at the top of the map.
       </p>
    </div>
    <div id="description">
        <p>
          In this example, you can see how to render a legend in the maps. A legend item denotes the value of a shape. Any number of legend items can be added to the legend. You can bind the desired colors to the shapes, if its values are within the specified range using the <code>ColorMapping</code> property.
    
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
Vue.use(MapsPlugin);
export default Vue.extend({
  data:function(){
      return{
        zoomSettings: {
            enable: false
        },
        titleSettings: {
            text: 'Population density (per square kilometers) - 2015',
            textStyle: {
                size: '16px'
            }
        },
        legendSettings: {
            visible: true,
            position: 'Top'
        },
        shapeData: new MapAjax(location.origin + location.pathname + 'src/maps/map-data/world-map.json'),
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        dataSource: new MapAjax(location.origin + location.pathname + 'src/maps/map-data/legend-datasource.json'),
        tooltipSettings: {
                    visible: true,
                    valuePath: 'name',
                    format: '${name} : ${density} per square kms'
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
                        }
                    ]
        }
      }
  },
provide: {
    maps: [Legend , MapsTooltip]
},
methods:{
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    tooltipRender:function(args){
          if (!args.options.data) {
                args.cancel = true;
            }
    }
}
})
</script>

