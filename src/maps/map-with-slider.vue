<template>
<div>
<div class="control-section">
    <div>
    <ejs-maps ref="maps" id='mapslider' :load='load' :loaded='loaded' :titleSettings='titleSettings' :zoomSettings='zoomSettings' :legendSettings='legendSettings' :annotations='annotations'>
    <e-layers>
        <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings'></e-layer>
    </e-layers>
</ejs-maps>
    </div>
    <div id="mapslider-annotation" style="display: none;">
        <div id="mapannotation" style="width:300px"></div>
    </div>
    <br><br>
  
    <div style="float: right; margin-right: 10px;">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_North_American_countries_by_population" target="_blank">Population growth in North America</a>
     </div>
</div>
<div id="action-description">
        <p>
            This sample visualizes the average annual population growth of the countries in the North America continent.
       </p>
    </div>
    <div id="description">
        <p>
            In this example, the range color mapping is applied to the shapes based on the population growth of the countries in percentage. The EJ2 Slider control is placed at the bottom of the maps to control the minimum and maximum color ranges.
        </p>
        <p>
            The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over a marker or tap a marker in touch enabled devices.
        </p>
    <br/>
        <p style="font-weight: 500">Injecting Module</p>
        <p>
            The maps component features are segregated into individual modules by feature. To use a marker, inject the <code>Marker</code> module using the <code>Maps.Inject(Marker)</code> method, and to use a legend, inject the <code>Legend</code> module.
        </p>
    </div>
</div>
</template>
<style>
    #mapannotation.e-control.e-slider .e-handle {
            background-color: #4B4B4B ;
        }
    #mapslider_Annotation_0 .e-control-wrapper.e-slider-container.e-horizontal .e-slider-track {
        background: -webkit-linear-gradient(left, #7E9CDC 0, #DCD57E 17%, #7EDCA2 34%, #6EB5D0 51%, #A6DC7E 68%, #DCA87E 85%, #d075c6 100%);
        background: linear-gradient(left, #7E9CDC 0, #DCD57E 17%, #7EDCA2 34%, #6EB5D0 51%, #A6DC7E 68%, #DCA87E 85%, #d075c6 100%);
        background: -moz-linear-gradient(left, #7E9CDC 0, #DCD57E 17%, #7EDCA2 34%, #6EB5D0 51%, #A6DC7E 68%, #DCA87E 85%, #d075c6 100%);
    }
    .e-limit-bar.e-limits {
        background-color: transparent !important;
    }
    .e-control-wrapper.e-slider-container.e-horizontal .e-range {
        height: 0px !important;
    }
    #mapannotation.e-control.e-slider .e-slider-track {
        height: 8px;
        top: calc(50% - 4px);
        border-radius: 5px;
    }
</style>
<script>
import Vue from 'vue';
import { MapsPlugin,Legend, MapsTooltip, MapAjax, Annotations } from '@syncfusion/ej2-vue-maps';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { SliderPlugin, Slider } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);
Vue.use(MapsPlugin);
let colorCodes = ['#7E9CDC', '#DCD57E', '#7EDCA2', '#6EB5D0', '#A6DC7E', '#DCA87E', '#d075c6'];
let sliderVal = [-2 , 4];
export default Vue.extend({
data:function(){
    return{
        margin: {
            bottom: 20
        },
        titleSettings: {
            text: 'Average annual population growth in North American countries',
            textStyle: {
                size: '16px'
            }
        },
        zoomSettings: {
            enable: false
        },
        tooltipSettings: {
                    visible: true,
                    format: '${name} : ${population}%'
        },
        annotations: [
            {
                content: '#mapslider-annotation',
                horizontalAlignment: 'Center',
                y: '93%'
            }
        ],
        shapeData: new MapAjax('./src/maps/map-data/north-america.json'),
        shapePropertyPath: 'name',
        shapeDataPath: 'name',
        dataSource: new MapAjax('./src/maps/map-data/population-growth.json'),
        shapeSettings: {
                    colorValuePath: 'population',
                    colorMapping: [
                        {
                            from: -1.5, to: -0.75, color: '#7E9CDC'
                        },
                        {
                            from: -0.75, to: 0, color: '#DCD57E'
                        },
                        {
                            from: 0.1, to: 0.75, color: '#7EDCA2'
                        },
                        {
                            from: 0.76, to: 1.5, color: '#6EB5D0'
                        },
                        {
                            from: 1.5, to: 2.25, color: '#A6DC7E'
                        },
                        {
                            from: 2.25, to: 3, color: '#DCA87E'
                        },
                        {
                            from: 3, to: 3.75, color: '#d075c6'
                        }
                    ],
        },
		tooltipSettings: {
                    visible: true,
                    format: '${name} : ${population}%'
                }
    }
},
provide: {
    maps: [Legend, Annotations, MapsTooltip]
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
    loaded: function(args) {
            if (!isNullOrUndefined(document.getElementById('mapslider_Annotation_0'))) {
                this.annotationRender(sliderVal);
            }
    },
    annotationRender: function(val) {
        let maps = this.$refs.maps.ej2Instances;
        let slider = new Slider({
            min: -1.5, max: 3.75,
            value: val,
            type: 'Range',
            ticks: { placement: 'After', largeStep: 0.75 },
            changed: function(args) {
                if (!isNaN(args.value[0]) && !isNaN(args.value[1])) {
                    for (let i = 0; i < maps.layers[0].shapeSettings.colorMapping.length; i++) {
                        if (maps.layers[0].shapeSettings.colorMapping[i].from < args.value[0] ||
                            maps.layers[0].shapeSettings.colorMapping[i].to > args.value[1]) {
                                maps.layers[0].shapeSettings.colorMapping[i].color = '#E5E5E5';
                        } else {
                            maps.layers[0].shapeSettings.colorMapping[i].color = colorCodes[i];
                        }
                    }
                    sliderVal = args.value;
                    maps.refresh();
                }
            }
        });
        slider.appendTo('#mapannotation');
    }

}
})
</script>