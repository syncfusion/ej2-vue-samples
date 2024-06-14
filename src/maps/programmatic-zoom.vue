<template>
  <main><div>
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
      <table role="none" id="property" title="Properties" style="width: 100%">
        <tbody>
          <tr style="height: 50px">
            <td style="width: 70%">
              <div class="property-text" style="padding: 0px;">
                Zoom to fit all the makers in maps
              </div>
            </td>
            <td style="width: 20%">
              <div style="padding-top:0px;">
                <ejs-checkbox id="color" :change="changezoom"></ejs-checkbox>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
    <section id="action-description" aria-label="Description of Maps sample">
      <p>
        This sample visualizes the capitals of all the countries in the South
        America continent by displaying the markers in their locations.
      </p>
    </section>
    <section id="description" aria-label="Description of the Maps features demonstrated in this sample">
      <p>
        In this example, you can see how to zoom the maps dynamically based on
        the location of the markers in the map. The map is scaled and the center
        position is changed based on the markers location. This is achieved by
        setting true to the <code>shouldZoomInitially</code> property in
        <code>zoomSettings</code>.
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
    </section>
    </main>
</template>
<script>
import Vue from "vue";
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Marker,
  MapsTooltip,
  Zoom
} from "@syncfusion/ej2-vue-maps";
import { southAmericaCountryCapitals } from "../maps/map-data/marker-location";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";
import { worldMap } from '../maps/map-data/world-map';

export default {
  components: {
    'ejs-maps': MapsComponent,
    'e-layers': LayersDirective,
    'e-layer': LayerDirective,
    'ejs-checkbox': CheckBoxComponent
  },
  data: function() {
    return {
      useGroupingSeparator: true,
      zoomSettings: {
        enable: true,
        mouseWheelZoom: false,
        pinchZooming: false
      },
      titleSettings: {
        text: "Capitals of South American countries",
        textStyle: {
          size: "16px",
          fontFamily: 'Segoe UI'
        }
      },
      shapeData: worldMap,
      dataSource: southAmericaCountryCapitals,
      shapeSettings: {
        fill: "#C3E6ED",
        border: {
          width: 0.3,
          color: "black"
        }
      },
      markerSettings: [
        {
          dataSource: southAmericaCountryCapitals,
          visible: true,
          animationDuration: 0,
          height: 20,
          width: 20,
          shape: "Image",
          imageUrl: "src/maps/images/ballon.png",
          tooltipSettings: {
            format: "<b>Capital</b> : ${name}<br><b>Country</b> : ${Country}",
            visible: true,
            valuePath: "name",
            textStyle: {
                fontFamily: 'Segoe UI'
            }
          }
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
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    },
    changezoom: function(args) {
      let maps = this.$refs.maps.ej2Instances;
      maps.zoomSettings.shouldZoomInitially = args.checked;
    }
  }
  /* custom code end */
};
</script>
