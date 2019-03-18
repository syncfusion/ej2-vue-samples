<template>
<div>
<div class="control-section">
<ejs-maps id='container' align="center" :load='load' :tooltipRender='tooltipRender' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings'></e-layer>
    </e-layers>
</ejs-maps>
  
    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://en.wikipedia.org/wiki/List_of_Cricket_World_Cup_finals" target="_blank">en.wikipedia.org</a>
    </div>
</div>
<div id="action-description">
    <p>
       This sample depicts the countries that were appeared in the finals of Cricket World Cup and their counts. By hovering the mouse over the shapes, county name, finalist count, and winning count will be displayed in the tooltip template.
   </p>
</div>
<div id="description">
    <p>
       In this example, you can see how to render the custom HTML element as tooltip. To see the tooltip in action, hover the mouse over a shape or tap a shape in touch enabled devices. Also, the interactive legend has been placed at the left of the map. 
    </p>
<br/>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
     Maps component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>MapsTooltip</code> module using the <code>Maps.Inject(MapsTooltip)</code> method.
    </p>
</div>
</div>
</template>
<style>
   #control-container {
       padding: 0px !important;
   }
</style>
<script>
import Vue from 'vue'
import { MapsPlugin, Legend, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
import Template from './tooltip-temp.vue';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        titleSettings: {
            text: 'Finalist in Cricket World Cup',
            textStyle: {
                size: '16px'
            }
        },
        zoomSettings: {
            enable: false
        },
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            position: 'Left',
            orientation: 'Vertical',
            height: '70%',
            width: '10'
        },
        shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
        shapePropertyPath: 'name',
        shapeDataPath: 'name',
        dataSource: new MapAjax('./src/maps/map-data/tooltip-datasource.json'),
        tooltipSettings: {
            visible: true,
            valuePath: 'name',
            template: function () { return {template: Template}; },
        },
        shapeSettings: {
            fill: '#E5E5E5',
            colorMapping: [
                        {
                            value: '1',
                            color: '#b3daff'
                        },
                        {
                            color: '#80c1ff',
                            value: '2'
                        },
                        {
                            color: '#1a90ff',
                            value: '3'
                        },
                        {
                            color: '#005cb3',
                            value: '7'
                        }
                    ],
            colorValuePath: 'value1'
        }
    }
},
provide: {
    maps: [MapsTooltip, Legend]
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
    tooltipRender:function(args){
         if (!args.options.data) {
                args.cancel = true;
        }
    }
}
})
</script>

  