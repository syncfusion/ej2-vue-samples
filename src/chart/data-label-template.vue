<template>
  <div class="control-section">
    <div align="center">
      <ejs-chart
        style="display: block"
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
        :load="load"
        :subTitleStyle="subTitleStyle"
      >
        <template v-slot:materialMan="{ data }">
          <div style="background-color: #00bdae; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:materialWomen="{ data }">
          <div style="background-color: #404041; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />'
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:fabricMan="{ data }">
          <div style="background-color: #4472c4; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:fabricWomen="{ data }">
          <div style="background-color: #ed7d31; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrapMan="{ data }">
          <div style="background-color: #a16ee5; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrapWomen="{ data }">
          <div style="background-color: #f7ce69; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:highcontrastMan="{ data }">
          <div style="background-color: #79ece4; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:highcontrastWomen="{ data }">
          <div style="background-color: #e98272; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:materialdarkMan="{ data }">
          <div style="background-color: #9ecb08; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:materialdarkWomen="{ data }">
          <div style="background-color: #56aeff; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />'
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:fabricdarkMan="{ data }">
          <div style="background-color: #4472c4; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:fabricdarkWomen="{ data }">
          <div style="background-color: #ed7d31; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrapdarkMan="{ data }">
          <div style="background-color: #a16ee5; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrapdarkWomen="{ data }">
          <div style="background-color: #f7ce69; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrap5Man="{ data }">
          <div style="background-color: #262e0b; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrap5Women="{ data }">
          <div style="background-color: #668e1f; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrap5darkMan="{ data }">
          <div style="background-color: #5ecb9b; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:bootstrap5darkWomen="{ data }">
          <div style="background-color: #a860f1; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />'
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwindMan="{ data }">
          <div style="background-color: #5a61f6; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwindWomen="{ data }">
          <div style="background-color: #65a30d; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwinddarkMan="{ data }">
          <div style="background-color: #8b5cf6; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:tailwinddarkWomen="{ data }">
          <div style="background-color: #22d3ee; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
         <template v-slot:fluentMan="{ data }">
          <div style="background-color: #614570; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
         <template v-slot:fluentWomen="{ data }">
          <div style="background-color: #4C6FB1; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
        <template v-slot:fluentdarkMan="{ data }">
          <div style="background-color: #8AB113; border-radius: 3px">
            <img
              src="source/chart/images/male.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
          <template v-slot:fluentdarkWomen="{ data }">
          <div style="background-color: #2A72D5; border-radius: 3px">
            <img
              src="source/chart/images/female.png"
              style="width: 24px; height: 24px; padding: 2px"
            />
            <div
              style="
                color: white;
                font-family: Roboto;
                font-style: medium;
                fontp-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }}M </span>
            </div>
          </div>
        </template>
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
      <p>
        This sample illustrates datalabel template support in the chart. In this sample, images are placed as datalabel by means of templates.
      </p>
    </div>
    <div id="description">
      <p>
        Label content can be formatted by using the template option in dataLabel. Inside the template, you can add the placeholder text
        ${point.y}M to display corresponding data points value.
      </p>
      <br />
      <p style="font-weight: 500">Injecting Module</p>
      <p>
        To use dataLabel, we need to inject <code>dataLabel</code> module using <code>provide: { chart: [ DataLabel] },</code> method.
      </p>
      <p>
        More information on the Crosshair can be found in this &nbsp;
        <a
          target="_blank"
          href="http://ej2.syncfusion.com/documentation/chart/api-dataLabelSettingsModel.html">documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  ChartPlugin,
  LineSeries,
  Category,
  Legend,
  DataLabel,
} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (
  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
).replace(/-dark/i, "Dark");

export default Vue.extend({
  data: function () {
    return {
      theme: theme,
      seriesData: [
        { x: 2010, y: 1014 },
        { x: 2011, y: 1040 },
        { x: 2012, y: 1065 },
        { x: 2013, y: 1110 },
        { x: 2014, y: 1130 },
        { x: 2015, y: 1153 },
        { x: 2016, y: 1175 },
      ],

      seriesData1: [
        { x: 2010, y: 990 },
        { x: 2011, y: 1010 },
        { x: 2012, y: 1030 },
        { x: 2013, y: 1070 },
        { x: 2014, y: 1105 },
        { x: 2015, y: 1138 },
        { x: 2016, y: 1155 },
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
          size: "14px",
        },
        majorGridLines: { width: 0 },
        lineStyle: { color: "#eaeaea", width: 1 },
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        labelFormat: "{value}M",
        labelStyle: {
          fontFamily: "Roboto",
          fontStyle: "medium",
          size: "14px",
        },
        minimum: 900,
        maximum: 1300,
        majorGridLines: {
          color: "#eaeaea",
          width: 1,
        },
        lineStyle: {
          color: "#eaeaea",
          width: 1,
        },
      },

      width: "80%",
      subTitleStyle: {
        textAlignment: "Far",
      },
      titleStyle: {
        fontFamily: "Roboto",
        fontStyle: "medium",
        size: "14px",
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
          template: "materialWomen",
        },
      },

      marker: {
        visible: true,
        shape: "Circle",
        dataLabel: {
          visible: true,
          position: "Top",
          margin: { right: 30 },
          template: "materialMan",
        },
      },
    };
  },
  provide: {
    chart: [LineSeries, Legend, Category, DataLabel],
  },
  methods: {
    load: function (args) {
      var selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      theme = args.chart.theme = (
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
      )
        .replace(/-dark/i, "Dark")
        .replace(/contrast/i, "Contrast");
      args.chart.theme = theme;
    },
    textRender: function (args) {
      if (theme === "Material") {
        args.template =
          args.series.name === "Male" ? "materialMan" : "materialWomen";
      } else if (theme === "Fabric") {
        args.template = args.series.name === "Male" ? "fabricMan" : "fabricWomen";
      } else if (theme === "HighContrast") {
        args.template =
          args.series.name === "Male" ? "highcontrastMan" : "highcontrastWomen";
      } else if (theme === "Tailwind") {
        args.template =
          args.series.name === "Male" ? "tailwindMan" : "tailwindWomen";
      } else if (theme === "Bootstrap") {
        args.template =
          args.series.name === "Male" ? "bootstrapMan" : "bootstrapWomen";
      } else if (theme === "Bootstrap5") {
        args.template =
          args.series.name === "Male" ? "bootstrap5Man" : "bootstrap5Women";
      } else if (theme === "TailwindDark") {
        args.template =
          args.series.name === "Male" ? "tailwinddarkMan" : "tailwinddarkWomen";
      } else if (theme === "MaterialDark") {
        args.template =
          args.series.name === "Male" ? "materialdarkMan" : "materialdarkWomen";
      } else if (theme === "FabricDark") {
        args.template =
          args.series.name === "Male" ? "fabricdarkMan" : "fabricdarkWomen";
      } else if (theme === "Bootstrap5Dark") {
        args.template =
          args.series.name === "Male" ? "bootstrap5darkMan" : "bootstrap5darkWomen";
      } else if (theme === "Fluent") {
        args.template =
          args.series.name === "Male" ? "fluentMan" : "fluentWomen";
      } else if (theme === "FluentDark") {
        args.template =
          args.series.name === "Male" ? "fluentdarkMan" : "fluentdarkWomen";
      } else {
        args.template =
          args.series.name === "Male" ? "bootstrapdarkMan" : "bootstrapdarkWomen";
      }
    },
  },
});
</script>