<template>
  <div>
    <div class="col-lg-9 control-section">
      <div class="content-wrapper">
        <div align="center">
          <ejs-maps
            id="container"
            ref="maps"
            :load="load"
            :titleSettings="titleSettings"
            :zoomSettings="zoomSettings"
            :useGroupingSeparator="useGroupingSeparator"
            format="n"
          >
            <e-layers>
              <e-layer
                :shapeData="shapeData"
                :dataSource="dataSource"
                :shapeSettings="shapeSettings"
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
      </div>
    </div>

    <div class="col-lg-3 property-section">
      <table id="property" title="Properties" style="width: 100%">
        <tbody>
          <tr style="height: 50px">
            <td style="width: 70%">
              <div class="property-text" style="padding: 0px;">
                Bind markers shape from data source
              </div>
            </td>
            <td style="width: 20%">
              <div style="padding-top:0px;">
                <ejs-checkbox id="shape" :change="changeshape"></ejs-checkbox>
              </div>
            </td>
          </tr>
          <tr style="height: 50px">
            <td style="width: 70%">
              <div class="property-text" style="padding: 0px;">
                Bind markers color from data source
              </div>
            </td>
            <td style="width: 20%">
              <div style="padding-top:0px;">
                <ejs-checkbox id="color" :change="changecolor"></ejs-checkbox>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>
        This sample visualizes the top 25 populated cities in the world by
        displaying the markers in their locations.
      </p>
    </div>
    <div id="description">
      <p>
        In this example, you can see how to render the markers in a map. Markers
        are used to indicate or mark a particular location on the map with
        desired symbols. Also, options have been provided to bind the shapes and
        colors to the markers based on the continent from the data source. This
        is achieved using the <code>shapeValuePath</code> and
        <code>colorValuePath</code> properties of the marker.
      </p>
      <p>
        Tooltip is enabled in this example. To see the tooltip in action, hover
        the mouse over a marker or tap a marker in touch enabled devices.
      </p>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        Maps component features are segregated into individual feature-wise
        modules. To use a marker, inject the <code>Marker</code> module using
        the <code>Maps.Inject(Marker)</code> method.
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
  MapAjax
} from "@syncfusion/ej2-vue-maps";
import { topPopulation } from "./map-data/marker-location";
import Template from "./marker-temp.vue";
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(CheckBoxPlugin);
Vue.use(MapsPlugin);
export default Vue.extend({
  data: function() {
    return {
      useGroupingSeparator: true,
      zoomSettings: {
        enable: false
      },
      titleSettings: {
        text: "Top 25 populated cities in the world",
        textStyle: {
          size: "16px"
        }
      },
      shapeData: new MapAjax("./src/maps/map-data/world-map.json"),
      dataSource: topPopulation,
      shapeSettings: {
        fill: "#C3E6ED"
      },
      markerSettings: [
        {
          dataSource: topPopulation,
          visible: true,
          animationDuration: 0,
          shape: "Circle",
          fill: "white",
          width: 10,
          border: { width: 2, color: "#285255" },
          tooltipSettings: {
            template: function() {
              return { template: Template };
            },
            visible: true,
            valuePath: "population"
          }
        }
      ]
    };
  },
  provide: {
    maps: [Marker, MapsTooltip]
  },
  /* custom code start */
  methods: {
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.maps.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
    },
    changeshape: function(args) {
      let maps = this.$refs.maps.ej2Instances;
      if (args.checked) {
        maps.layers[0].markerSettings[0].shapeValuePath = "shape";
      } else {
        maps.layers[0].markerSettings[0].shapeValuePath = null;
      }
      maps.refresh();
    },
    changecolor: function(args) {
      let maps = this.$refs.maps.ej2Instances;
      if (args.checked) {
        maps.layers[0].markerSettings[0].colorValuePath = "color";
      } else {
        maps.layers[0].markerSettings[0].colorValuePath = null;
      }
    }
  }
  /* custom code end */
});
</script>
