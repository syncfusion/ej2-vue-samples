<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display:block"
        :theme="theme"
        align="center"
        id="chartcontainer"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :subTitle="subTitle"
        :chartArea="chartArea"
        :width="width"
        :textRender="textRender"
        :subTitleStyle="subTitleStyle"
      >
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            xName="x"
            yName="y"
            name="Male"
            width="2"
            :marker="marker"
          ></e-series>
          <e-series
            :dataSource="seriesData1"
            xName="x"
            yName="y"
            name="Female"
            width="2"
            :marker="marker1"
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>This sample illustrates datalabel template support in the chart. In this sample, images are placed as datalabel by means of templates.</p>
    </div>
    <div id="description">
      <p>
        Label content can be formatted by using the template option in dataLabel. Inside the template, you can add the placeholder
        text ${point.y}M to display corresponding data points value.
      </p>
      <br>
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        To use dataLabel, we need to inject
        <code>dataLabel</code> module using
        <code>provide: { chart: [ DataLabel] },</code> method.
      </p>
      <p>
        More information on the Crosshair can be found in this &nbsp;
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/documentation/chart/api-dataLabelSettingsModel.html"
        >documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style>
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  LineSeries,
  Category,
  Legend,
  DataLabel
} from "@syncfusion/ej2-vue-charts";
import Template1 from "./datalabel-temp1.vue";
import Template2 from "./datalabel-temp2.vue";
import Template3 from "./datalabel-temp3.vue";
import Template4 from "./datalabel-temp4.vue";
import Template5 from "./datalabel-temp5.vue";
import Template6 from "./datalabel-temp6.vue";
import Template7 from "./datalabel-temp7.vue";
import Template8 from "./datalabel-temp8.vue";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

let materialMan = function() {
  return { template: Template1 };
};
let materialWomen = function() {
  return { template: Template2 };
};
let fabricMan = function() {
  return { template: Template3 };
};
let fabricWomen = function() {
  return { template: Template4 };
};
let bootstrapMan = function() {
  return { template: Template5 };
};
let bootstrapWomen = function() {
  return { template: Template6 };
};
let highcontrastMan = function() {
  return { template: Template7 };
};
let highcontrastWomen = function() {
  return { template: Template8 };
};

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      seriesData: [
        { x: 2010, y: 1014 },
        { x: 2011, y: 1040 },
        { x: 2012, y: 1065 },
        { x: 2013, y: 1110 },
        { x: 2014, y: 1130 },
        { x: 2015, y: 1153 },
        { x: 2016, y: 1175 }
      ],

      seriesData1: [
        { x: 2010, y: 990 },
        { x: 2011, y: 1010 },
        { x: 2012, y: 1030 },
        { x: 2013, y: 1070 },
        { x: 2014, y: 1105 },
        { x: 2015, y: 1138 },
        { x: 2016, y: 1155 }
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        minimum: 2010,
        maximum: 2016,
        interval: Browser.isDevice ? 2 : 1,
        edgeLabelPlacement: "Shift",
        labelStyle: {
          fontFamily: "Roboto",
          fontStyle: "medium",
          size: "14px"
        },
        majorGridLines: { width: 0 },
        lineStyle: { color: "#eaeaea", width: 1 }
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "{value}M",
        labelStyle: {
          fontFamily: "Roboto",
          fontStyle: "medium",
          size: "14px"
        },
        minimum: 900,
        maximum: 1300,
        majorGridLines: {
          color: "#eaeaea",
          width: 1
        },
        lineStyle: {
          color: "#eaeaea",
          width: 1
        }
      },

      width: "80%",
      subTitleStyle: {
        textAlignment: "Far"
      },
      titleStyle: {
        fontFamily: "Roboto",
        fontStyle: "medium",
        size: "14px"
      },
      chartArea: { border: { width: 0 } },
      title: "Population of India Statistics",
      subTitle: "(2010 - 2016)",

      marker1: {
        visible: true,
        shape: "Rectangle",
        dataLabel: {
          visible: true,
          position: "Bottom",
          margin: { right: 15 },
          template: materialWomen
        }
      },

      marker: {
        visible: true,
        shape: "Circle",
        dataLabel: {
          visible: true,
          position: "Top",
          margin: { right: 30 },
          template: materialMan
        }
      }
    };
  },
  provide: {
    chart: [LineSeries, Legend, Category, DataLabel]
  },
  methods: {
    textRender: function(args) {
      if (theme === "Material") {
        args.template =
          args.series.name === "Male" ? materialMan : materialWomen;
      } else if (theme === "Fabric") {
        args.template = args.series.name === "Male" ? fabricMan : fabricWomen;
      } else {
        args.template =
          args.series.name === "Male" ? bootstrapMan : bootstrapWomen;
      }
    }
  }
});
</script>