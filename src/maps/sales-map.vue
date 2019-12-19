<template>
  <div>
     <div class="control-section">
          <ejs-maps
            id="container"
            :load="load"
            :titleSettings="titleSettings"
            :zoomSettings="zoomSettings"
            :useGroupingSeparator="useGroupingSeparator"
            :tooltipDisplayMode='tooltipDisplayMode'
            format="n"
          >
            <e-layers>
              <e-layer
                :shapeData="shapeData"
                :dataSource="dataSource"
                :shapeSettings="shapeSettings"
                :markerClusterSettings="markerClusterSettings"
                :markerSettings="markerSettings"
              ></e-layer>
            </e-layers>
          </ejs-maps>
          <div style="float: right; margin-right: 10px;">
            Source:
            <a
              href="http://www.citymayors.com/statistics/largest-cities-population-125.html"
              target="_blank"
              >www.citymayors.com</a
            >
          </div>
        </div>
    <div id="action-description">
      <p>
        This sample illustrates the sales details of the products and users location by rendering the markers. Marker clustering is also enabled in this sample.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render cluster for more number of markers if it is at the exact latitude and longitude values. On clicking the cluster, it will gets expanded. 
      </p>
      <p>
      Tooltip is enabled in this example. To see the tooltip in action, click the mouse over the marker or tap a marker in touch-enabled devices.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
     Maps component features are segregated into individual feature-wise modules. To use a marker and cluster, inject the <code>Marker</code> module using the <code>Maps.Inject(Marker)</code> method.
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import {
  MapsPlugin,
  Marker,
  MapsTooltip,
  MapAjax,
  Zoom
} from "@syncfusion/ej2-vue-maps";
import { salesmapdata } from "./map-data/marker-location";
Vue.use(MapsPlugin);
export default Vue.extend({
  data: function() {
    return {
      useGroupingSeparator: true,
      zoomSettings: {
        enable: true,
                  mouseWheelZoom: false,
            pinchZooming: false
      },
      titleSettings: {
        text: 'Sales details of products in various countries',
        textStyle: {
          size: "16px"
        }
      },
      shapeData: new MapAjax("./src/maps/map-data/world-map.json"),
      dataSource: salesmapdata,
      shapeSettings: {
        fill: "#C3E6ED",
      },
      tooltipDisplayMode: 'Click',
       markerClusterSettings: {
            allowClustering: true,
            allowClusterExpand: true,
            shape: 'Image',
            height: 40,
            width: 40,
            labelStyle : { color: 'white'},
            imageUrl: 'src/maps/images/cluster.svg'
        },
      markerSettings: [
        {
           visible: true,
            dataSource: salesmapdata,
            shape: 'Image',
            imageUrl: 'src/maps/images/ballon.png',
            tooltipSettings: {
                format:  '<b>Name</b> : ${name}<br><b>Product</b> : ${product}<br><b>Total value</b> : ${worth}',
                visible: true,
                valuePath: 'area',
            },
            height: 15,
            width: 15,
            animationDuration: 0
        }
      ]
    };
  },
  provide: {
    maps: [Marker, MapsTooltip, Zoom]
  },
  /* custom code start */
  methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    }
  }
  /* custom code end */
});
</script>
