<template>
<div>
<div class="control-section">
<ejs-maps id='container' align="center" :load='load' :bubbleRendering='bubbleRendering' format='n' :useGroupingSeparator='useGroupingSeparator' :titleSettings='titleSettings' :zoomSettings='zoomSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :bubbleSettings='bubbleSettings' :shapeSettings='shapeSettings'></e-layer>
    </e-layers>
</ejs-maps>
   
    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://en.wikipedia.org/wiki/List_of_countries_by_number_of_Internet_users" target="_blank">en.wikipedia.org</a>
    </div>
</div>
<div id="action-description">
        <p>
            This sample illustrates the top 30 countries which has highest Internet users in bubbles of the year 2016. 
       </p>
    </div>
    <div id="description">
        <p>
          In this example, you can see how to render the bubbles for each shape in a map. Values of the shapes can be determined from the size and color of the bubbles. You can bind the desired colors from the data source to the bubbles.
    
        </p>
        <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a bubble or tap a bubble in touch enabled devices.
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
          Maps component features are segregated into individual feature-wise modules. To use the bubbles, inject the <code>Bubble</code> module using the <code>Maps.Inject(Bubble)</code> method.
        </p>
       
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import { MapsPlugin, Bubble, MapsTooltip, Zoom, MapAjax } from '@syncfusion/ej2-vue-maps';
import { internetUsers } from './map-data/population-data';
import Template from './bubble-temp.vue';
Vue.use(MapsPlugin);
export default Vue.extend({
data:function(){
    return{
        useGroupingSeparator: true,
        zoomSettings: {
            enable: true,
            horizontalAlignment: 'Near',
            toolBarOrientation: 'Vertical',
            pinchZooming: true
        },
        titleSettings: {
            text: 'Top 30 countries with highest Internet users',
            textStyle: {
                size: '16px'
            }
        },
        shapeDataPath: 'name',
        shapePropertyPath: 'name',
        shapeData: new MapAjax('./src/maps/map-data/world-map.json'),
        shapeSettings: {
                    fill: '#E5E5E5'
        },
        bubbleSettings: [
            {
                        visible: true,
                        valuePath: 'value',
                        colorValuePath: 'color',
                        minRadius: 3,
                        maxRadius: 70,
                        opacity: 0.8,
                        dataSource: internetUsers,
                        tooltipSettings: {
                            visible: true,
                            valuePath: 'population',
                            template: function () { return {template: Template}; }
                        },
                    }
        ]
    }
},
 provide: {
    maps: [Bubble, MapsTooltip, Zoom]
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
bubbleRendering:function(args){
    args.radius = (args.data).value;
}
}
})
</script>
