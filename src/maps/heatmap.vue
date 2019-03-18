<template>
<div>
<div class="control-section">
<ejs-maps id='container'  align="center" :load='load' format='n' :useGroupingSeparator='useGroupingSeparator' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :tooltipSettings='tooltipSettings' :shapeSettings='shapeSettings'></e-layer>
    </e-layers>
</ejs-maps>
 
    <div style="float: right; margin-right: 10px;">Source:
       <a href="https://en.wikipedia.org/wiki/List_of_states_and_union_territories_of_India_by_population" target="_blank">en.wikipedia.org</a>
    </div>
</div>
<div id="action-description">
        <p>
           This sample visualizes the state wise population of India in the year 2011. Color for each state will be applied based on its value.
       </p>
    </div>
    <div id="description">
        <p>
           In this example, you can see how to apply the desired colors for the shapes, if its value is within the specified range using the ColorMapping property. Also, the interactive legend has been placed at the bottom of the map.
    
        </p>
        <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a shape or tap a shape in touch enabled devices.
         </p>       
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import { MapsPlugin,Legend, Marker, MapsTooltip, MapAjax } from '@syncfusion/ej2-vue-maps';
Vue.use(MapsPlugin);
export default Vue.extend({
  data:function(){
      return{
        useGroupingSeparator: true,
        titleSettings: {
            text: "State wise India's population - 2011",
            textStyle: {
                size: '16px'
            }
        },
        legendSettings: {
            visible: true,
            mode: 'Interactive',
            position: 'Bottom',
            height: '10',
            width: '350',
            labelDisplayMode: 'Trim',
            alignment: 'Center'
        },
        zoomSettings: {
            enable: false
        },
        shapeData: new MapAjax('./src/maps/map-data/india.json'),
        shapePropertyPath: 'NAME_1',
        shapeDataPath: 'Name',
        dataSource: new MapAjax('./src/maps/map-data/heatmap-datasource.json'),
        tooltipSettings: {
                    visible: true,
                    valuePath: 'population',
                    format: 'State: ${Name} <br> Population: ${population}'
        },
        shapeSettings: {
                    border: {
                        width: 0.2,
                        color: 'white'
                    },
                    colorValuePath: 'population',
                    colorMapping: [{
                        from: 60000, to: 400000, color: '#9fdfdf', label: '<0.4M'
                    },
                    {
                        from: 400000, to: 10000000, color: '#79d2d2', label: '0.4-10M'
                    },
                    {
                        from: 10000000, to: 20000000, color: '#53C6C6', label: '10-20M'
                    },
                    {
                        from: 20000000, to: 70000000, color: '#39acac', label: '20-70M'
                    },
                    {
                        from: 70000000, to: 100000000, color: '#339999', label: '70-100M'
                    },
                    {
                        from: 100000000, to: 200000000, color: '#2d8686', label: '>100M'
                    }
                    ]
            }
      }
  },
provide: {
    maps: [Legend, Marker, MapsTooltip]
},
/* custom code start */
methods:{
   load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    }  
}
/* custom code end */
})
</script>
