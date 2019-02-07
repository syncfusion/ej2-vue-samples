<template>
  <div class="control-section">
    <div class="col-md-8 control-section">
        <ejs-chart ref="chart" :theme='theme' style='display:block' align='center' id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
         :width='width' :tooltip='tooltip' :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='Weather' :marker='marker' :fill='fill' > </e-series>
                                
            </e-series-collection>
        </ejs-chart>
        </div>
    <div>
    <div class="col-md-4 property-section">
        <table id="property" title="Properties" style="width: 100%">
            <br/><br/>
            <tr style="height: 50px">
                <td>
                    <div>StripLine Types</div>
                </td>
                <td>
                    <div>
                          <ejs-dropdownlist id='selmode' :change='stripChange' :dataSource='stripdata' index=0 :width='stripwidth' ></ejs-dropdownlist>                      
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
<div id="action-description">
    <p>
        This sample highlights certain range in an axis by using stripline feature.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure the stripline charts. You can use stripline by enable the
        <code>visible</code> property. Striplines are rendered in the specified
        <code>start</code> and
        <code>end</code> range and you can add more than one stripline for an axis.

    </p>
    <p>
        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.
    </p>
    <br>
    <p style="font-weight: 500">Injecting Module</p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use strip line, we need to inject
        <code>StripLine</code> module using
        <code>Chart.Inject(StripLine)</code> method.
    </p>
    <p>
        More information on the strip line can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype">documentation section</a>.
    </p>
</div>
<svg style="height: 0">
    <defs>
        <linearGradient id="winter" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
        </linearGradient>
        <linearGradient id="summer" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
        </linearGradient>
        <linearGradient id="spring" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
        </linearGradient>
        <linearGradient id="autumn" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" />
            <stop offset="1" />
        </linearGradient>
    </defs>
</svg>
</div>

</template>
<style>
#control-container {
  padding: 0px !important;
}

#winter stop {
  stop-color: #4ca1af;
}

#winter stop[offset="0"] {
  stop-color: #c4e0e5;
}

#winter stop[offset="1"] {
  stop-color: #4ca1af;
}

#summer stop {
  stop-color: #ffa751;
}

#summer stop[offset="0"] {
  stop-color: #ffe259;
}

#summer stop[offset="1"] {
  stop-color: #ffa751;
}

#spring stop {
  stop-color: #1d976c;
}

#spring stop[offset="0"] {
  stop-color: #93f9b9;
}

#spring stop[offset="1"] {
  stop-color: #1d976c;
}

#autumn stop {
  stop-color: #603813;
}

#autumn stop[offset="0"] {
  stop-color: #b29f94;
}

#autumn stop[offset="1"] {
  stop-color: #603813;
}
</style>
<script>
import Vue from "vue";
import { Browser, extend } from "@syncfusion/ej2-base";
import { DropDownList } from "@syncfusion/ej2-vue-dropdowns";
import {
  StripLineSettingsModel,
  ChartPlugin,
  LineSeries,
  Tooltip,
  Legend,
  Category,
  StripLine
} from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
let fontSize = Browser.isDevice ? "14px" : "18px";
let xAxisStripLine = [
  {
    start: -1,
    end: 1.5,
    text: "Winter",
    color: "url(#winter)",
    textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
    border: { width: 0 },
    rotation: -90,
    visible: true
  },
  {
    start: 1.5,
    end: 3.5,
    text: "Summer",
    color: "url(#summer)",
    textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
    border: { width: 0 },
    rotation: -90,
    visible: true
  },
  {
    start: 3.5,
    end: 4.5,
    text: "Spring",
    color: "url(#spring)",
    textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
    border: { width: 0 },
    rotation: -90,
    visible: true
  },
  {
    start: 4.5,
    end: 5.5,
    text: "Autumn",
    color: "url(#autumn)",
    textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
    border: { width: 0 },
    rotation: -90,
    visible: true
  },
  {
    start: 5.5,
    end: 7,
    text: "Winter",
    color: "url(#winter)",
    textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
    border: { width: 0 },
    rotation: -90,
    visible: true
  },
  {
    startFromAxis: true,
    size: 2,
    isSegmented: true,
    segmentStart: 22.5,
    text: "Average Temperature",
    segmentEnd: 27.5,
    visible: false,
    color: "#fc902a",
    textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
    border: { width: 0 },
    rotation: 0
  },
  {
    start: 3.5,
    size: 3,
    isSegmented: true,
    segmentStart: 22.5,
    text: "Average Temperature",
    segmentEnd: 27.5,
    visible: false,
    color: "#fc902a",
    textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
    border: { width: 0 },
    rotation: 0
  },
  {
    start: 1.5,
    size: 2,
    isSegmented: true,
    segmentStart: 32.5,
    text: "High Temperature",
    segmentEnd: 37.5,
    visible: false,
    color: "#ff512f",
    textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
    border: { width: 0 },
    rotation: 0
  }
];

export default Vue.extend({
  data: function() {
    return {
      theme: theme,
      seriesData: [
        { x: "Sun", y: 25 },
        { x: "Mon", y: 27 },
        { x: "Tue", y: 33 },
        { x: "Wed", y: 36 },
        { x: "Thu", y: 26 },
        { x: "Fri", y: 27.5 },
        { x: "Sat", y: 23 }
      ],
      fill:'#ffffff',
      stripdata: ["Vertical", "Horizontal", "Segment"],
      stripwidth: 120,

      //Initializing Primary X Axis
      primaryXAxis: {
        valueType: "Category",
        majorGridLines: { width: 0 },
        //Initializing Striplines
        stripLines: xAxisStripLine
      },

      //Initializing Primary Y Axis
      primaryYAxis: {
        minimum: 10,
        maximum: 40,
        interval: 5,
        lineStyle: { color: "#808080" },
        labelFormat: "{value} °C",
        rangePadding: "None",
        //Initializing Striplines
        stripLines: [
          {
            start: 30,
            end: 40,
            text: "High Temperature",
            color: "#ff512f",
            visible: false,
            textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
            border: { width: 0 }
          },
          {
            start: 20,
            end: 30,
            text: "Average Temperature",
            color: "#fc902a",
            visible: false,
            textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
            border: { width: 0 }
          },
          {
            start: 10,
            end: 20,
            text: "Low Temperature",
            visible: false,
            textStyle: { size: fontSize, color: "#ffffff", fontWeight: "600" },
            border: { width: 0 },
            color: "#f9d423"
          }
        ]
      },

      legendSettings: { visible: false },

      tooltip: { enable: true },

      marker: {
        visible: true,
        width: 10,
        height: 10,
        border: { width: 2, color: "#ffffff" },
        fill: "#666666"
      },
      width: "100%",
      title: "Weather Report"
    };
  },
  provide: {
    chart: [LineSeries, Category, Legend, Tooltip, StripLine]
  },
  updated: function() {
    this.$nextTick(function() {
      this.$refs.chart.ej2Instances.refresh();
    });
  },
  methods: {
    stripChange: function(args) {
      let mode = document.getElementById("selmode").value;
      let primaryYAxis = extend({}, this.primaryYAxis);
      let primaryXAxis = extend({}, this.primaryXAxis);
      let marker = extend({}, this.marker);
      let fill = extend({}, this.fill);
      fill = "white";
      marker.fill = 'black';
      marker.border.color ='white';
      for (let i = 0; i < 3; i++) {
        primaryYAxis.stripLines[i].visible = false;
      }
      if (mode === "Vertical") {
        for (let i = 0; i <= 4; i++) {
          primaryXAxis.stripLines[i].visible = true;
        }
        for (let i = 5; i <= 7; i++) {
          primaryXAxis.stripLines[i].visible = false;
        }
      } else if (mode === 'Horizontal') {
        for (let i = 0; i < 3; i++) {
          primaryYAxis.stripLines[i].visible = true;
        }
        for (let i = 0; i <= 7; i++) {
          primaryXAxis.stripLines[i].visible = false;
        }
      } else {
        for (let i = 0; i <= 7; i++) {
          primaryXAxis.stripLines[i].visible = false;
        }
        for (let i = 5; i <= 7; i++) {
          primaryXAxis.stripLines[i].visible = true;
        }
        marker.fill = 'white';
        marker.border.color ='black';
        fill = 'black';
      }
      this.marker = marker;
      this.fill = fill;
      this.primaryYAxis = primaryYAxis;
      this.primaryXAxis = primaryXAxis;
    }
  }
});
</script>