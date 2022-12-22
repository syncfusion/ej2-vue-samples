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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
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
                font-size: 14px;
                float: right;
                padding: 2px;
                line-height: 20px;
                text-align: center;
                padding-right: 6px;
              "
            >
              <span>{{ data.point.y }} </span>
            </div>
          </div>
        </template>
        <e-series-collection>
          <e-series
            :dataSource="seriesData"
            xName="sports"
            yName="boys"
            name="Boys"
            width="2"
            type="Column"
            columnSpacing=0.5
            columnWidth=0.75
            :marker="marker"
          ></e-series>
          <e-series
            :dataSource="seriesData1"
            xName="sports"
            yName="girls"
            name="Girls"
            width="2"
            type="Column"
            columnSpacing=0.5
            columnWidth=0.75
            :marker="marker1"
          ></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    <div id="action-description">
      <p>
        This sample illustrates data label template support in charts. Each data label for each point is rendered using the template.
      </p>
    </div>
    <div id="description">
      <p>
        The Vue Charts data label template feature allows you to change the appearance and behavior of the data label for each data point using the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/chart/data-labels/#data-label-template"></a><code>Template</code> property in <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/chart/data-labels/"></a> <code>ChartDataLabel</code>.
      </p>
      <br />
      <p style="font-weight: 500"><b>Injecting Module</b></p>
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
  Category,
  Legend,
  DataLabel,
  ColumnSeries,
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
        { sports: "Tennis", boys: 50, girls: 38 },
        { sports: "Badminton", boys: 30, girls: 40 },
        { sports: "Cycling", boys: 37, girls: 20 },
        { sports: "Football", boys: 60, girls: 21 },
        { sports: "Hockey", boys: 15, girls: 8 },
      ],

      seriesData1: [
        { sports: "Tennis", boys: 50, girls: 38 },
        { sports: "Badminton", boys: 30, girls: 40 },
        { sports: "Cycling", boys: 37, girls: 20 },
        { sports: "Football", boys: 60, girls: 21 },
        { sports: "Hockey", boys: 15, girls: 8 },
      ],

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: 'Category',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        majorTickLines: {width: 0},
        minorTickLines: {width : 0  },
        labelIntersectAction : "Rotate45"
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 0,
        maximum: 70,
        lineStyle: { width: 0 },
        majorGridLines: { color: '#eaeaea', width: 1 }
      },

      width: Browser.isDevice ? '100%' : "75%",
      chartArea: { border: { width: 0 } },
      title: "Athletes in Popular School",

      marker1: {
        visible: false,
        shape: "Circle",
        dataLabel: {
          visible: true,
          position: "Outer",
          margin: { top: 70 },
          template: "materialWomen",
        }, width: 2
      },

      marker: {
        visible: false,
        shape: "Rectangle",
        dataLabel: {
          visible: true,
          position: "Outer",
          margin: { top: 70 },
          template: "materialMan",
        }, width: 2
      },
    };
  },
  provide: {
    chart: [ColumnSeries, Legend, Category, DataLabel],
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
          args.series.name === "Boys" ? "materialMan" : "materialWomen";
      } else if (theme === "Fabric") {
        args.template = args.series.name === "Boys" ? "fabricMan" : "fabricWomen";
      } else if (theme === "HighContrast") {
        args.template =
          args.series.name === "Boys" ? "highcontrastMan" : "highcontrastWomen";
      } else if (theme === "Tailwind") {
        args.template =
          args.series.name === "Boys" ? "tailwindMan" : "tailwindWomen";
      } else if (theme === "Bootstrap") {
        args.template =
          args.series.name === "Boys" ? "bootstrapMan" : "bootstrapWomen";
      } else if (theme === "Bootstrap5") {
        args.template =
          args.series.name === "Boys" ? "bootstrap5Man" : "bootstrap5Women";
      } else if (theme === "TailwindDark") {
        args.template =
          args.series.name === "Boys" ? "tailwinddarkMan" : "tailwinddarkWomen";
      } else if (theme === "MaterialDark") {
        args.template =
          args.series.name === "Boys" ? "materialdarkMan" : "materialdarkWomen";
      } else if (theme === "FabricDark") {
        args.template =
          args.series.name === "Boys" ? "fabricdarkMan" : "fabricdarkWomen";
      } else if (theme === "Bootstrap5Dark") {
        args.template =
          args.series.name === "Boys" ? "bootstrap5darkMan" : "bootstrap5darkWomen";
      } else if (theme === "Fluent") {
        args.template =
          args.series.name === "Boys" ? "fluentMan" : "fluentWomen";
      } else if (theme === "FluentDark") {
        args.template =
          args.series.name === "Boys" ? "fluentdarkMan" : "fluentdarkWomen";
      } else {
        args.template =
          args.series.name === "Boys" ? "bootstrapdarkMan" : "bootstrapdarkWomen";
      }
    },
  },
});
</script>