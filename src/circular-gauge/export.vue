<template>
  <div id="CG-export-sample">
    <div class="col-lg-9 control-section">
      <div class="control-section">
        <ejs-circulargauge ref="gauge" :load="load" style="display:block" align="center" id="gauge" :allowPdfExport='allowPdfExport' :allowPrint='allowPrint' :allowImageExport='allowImageExport'>
          <e-axes>
            <e-axis
              :radius="gaugeRadius"
              :startAngle="startAngle"
              :endAngle="endAngle"
              :majorTicks="majorTicks"
              :lineStyle="lineStyle"
              :minorTicks="minorTicks"
              :labelStyle="labelStyle"
              :ranges="ranges"
              :direction="direction"
            >
              <e-pointers>
                <e-pointer :pointerWidth='pointerWidth' :cap='cap'></e-pointer>
              </e-pointers>
            </e-axis>
          </e-axes>
        </ejs-circulargauge>
      </div>
    </div>
    <div class="col-lg-3 property-section">
      <table id="property" title="Properties" style="width: 100%; margin-left:-30px">
        <tr style="height: 50px">
          <td style="width: 40%">
            <div>Export Type</div>
          </td>
          <td style="width: 60%;">
            <div style="margin-left: -10px">
              <ejs-dropdownlist ref="mode" id="mode" :dataSource="modedata" index="0" :width="90"></ejs-dropdownlist>
            </div>
          </td>
        </tr>
        <tr style="height: 50px">
          <td style="width: 40%">
            <div>File Name</div>
          </td>
          <td style="width: 40%;">
            <div class="e-float-input" style="margin-top: 0px;">
              <input type="text" value="Gauge" id="fileName" style="margin-left: -10px; width:90px" />
            </div>
          </td>
        </tr>
        <tr id="button-control" style="height: 50px" align="center">
          <td>
            <div style="width: 100px">
              <ejs-button
                id="export"
                :cssClass="cssClass"
                :iconCss="iconCss"
                :isPrimary="isPrimary"
                :content="content"
                isToggle="true"
                v-on:click.native="clickExport"
              ></ejs-button>
            </div>
          </td>
          <td>
            <div style="width: 100px">
              <ejs-button
                id="print"
                :cssClass="cssClass"
                :iconCss="iconCss1"
                :isPrimary="isPrimary"
                :content="content1"
                isToggle="true"
                v-on:click.native="clickPrint"
              ></ejs-button>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the print and export functionality of circular gauge.</p>
    </div>
    <div id="description">
      <p>In this example, you can see how to export and print the rendered circular gauge. The Circular Gauge can be exported to JPEG, PNG, SVG, and PDF formats. Print functionality is done by <code>print</code> method when <code>allowPrint</code> is set as true. Export functionality is done by <code>export</code> method when <code>allowImageExport</code> and <code>allowPdfExport</code> is set as true.</p>
    <br>
    <p style="font-weight: 500"> <b>Injecting Module</b></p>
  
    <p> To make use of the print and export support, we need to inject the <code>Print</code>, <code>ImageExport</code> and <code>PdfExport</code> modules using the <code>provide</code> section.
      <p>
        More information on the print and export can be found in this
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/documentation/circular-gauge/gauge-print-and-export/"
        >documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style>
#CG-export-sample #button-control {
  width: 100%;
  text-align: center;
}

#CG-export-sample #control-container {
  padding: 0px !important;
}

#CG-export-sample .e-play-icon::before {
  content: "\e728";
}

#CG-export-sample .e-play-icon1::before {
  content: "\e34b";
}

#CG-export-sample #export {
    width: 90px;
}

#CG-export-sample #print {
    width: 90px;
}

.e-view.fabric #CG-export-sample .e-play-icon1::before, .e-view.fabric-dark #CG-export-sample .e-play-icon1::before {
    content: "\e7df";
}

.e-view.fabric #CG-export-sample .e-play-icon::before, .e-view.fabric-dark #CG-export-sample .e-play-icon::before {
    content: "\e710";
}

.e-view.bootstrap #CG-export-sample .e-play-icon1::before {
    content: "\ebd2";
}

.e-view.bootstrap4 #CG-export-sample .e-play-icon::before {
    content: "\e780";
}

.e-view.bootstrap4 #CG-export-sample .e-play-icon1::before {
    content: "\e743";
}

.e-view.tailwind #CG-export-sample .e-play-icon1::before, .e-view.tailwind-dark #CG-export-sample .e-play-icon1::before {
    content: "\e76c";
}

.e-view.tailwind #CG-export-sample .e-play-icon::before, .e-view.tailwind-dark #CG-export-sample .e-play-icon::before {
    content: "\e7bf";
}

.e-view.highcontrast #CG-export-sample .e-play-icon1::before {
    content: "\ebf9";
}

.e-view.highcontrast #CG-export-sample .e-play-icon::before {
    content: "\e710";
}

.e-view.bootstrap5 #CG-export-sample .e-play-icon::before, .e-view.bootstrap5-dark #CG-export-sample .e-play-icon::before {
    content: "\e72e";
}

.e-view.bootstrap5 #CG-export-sample .e-play-icon1::before, .e-view.bootstrap5-dark #CG-export-sample .e-play-icon1::before {
    content: "\e75d";
}
</style>
<script>
import Vue from "vue";
import { CircularGaugePlugin, Print, ImageExport, PdfExport } from "@syncfusion/ej2-vue-circulargauge";
Vue.use(CircularGaugePlugin);
export default Vue.extend({
  data: function() {
    return {
      allowImageExport: true,
      allowPdfExport: true,
      allowPrint: true,
      gaugeRadius: "80%",
      startAngle: 0,
      endAngle: 0,
      pointerWidth: 0,
      cap: { radius: 0},
      direction: "AntiClockWise",
      majorTicks: {
        position: "Outside",
        width: 1,
        height: 25,
        interval: 10,
        useRangeColor: true
      },
      lineStyle: { width: 0 },
      minorTicks: {
        position: "Outside",
        width: 1,
        height: 8,
        interval: 2,
        useRangeColor: true
      },
      labelStyle: {
        font: {
          color: "#424242",
          fontFamily: "Roboto",
          size: "12px",
          fontWeight: "Regular"
        },
        offset: 2,
        hiddenLabel: 'Last',
        position: "Outside",
        useRangeColor: true
      },
      ranges: [
        {
          start: 0,
          end: 32,
          radius: "90%",
          startWidth: 10,
          endWidth: 35,
          color: "#F8A197"
        },
        {
          start: 32,
          end: 70,
          radius: "90%",
          startWidth: 10,
          endWidth: 35,
          color: "#C45072"
        },
        {
          start: 70,
          end: 100,
          radius: "90%",
          startWidth: 10,
          endWidth: 35,
          color: "#1B679F"
        }
      ],

      isPrimary: true,
      content1: "Print",
      content: "Export",
      modedata: ["JPEG", "PNG", "SVG", "PDF"],
      cssClass: "e-flat",
      iconCss: "e-icons e-play-icon",
      iconCss1: "e-icons e-play-icon1"
    };
  },
  provide:{
    circulargauge:[Print, ImageExport, PdfExport]
  },


  methods: {
    /* custom code start */
    load: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
    },
    /* custom code end */
    clickExport: function(args) {
      let fileName = document.getElementById("fileName").value;
      this.$refs.gauge.ej2Instances.export(
        this.$refs.mode.ej2Instances.value,
        fileName
      );
    },
    clickPrint: function(args) {
      this.$refs.gauge.ej2Instances.print();
    }
  }
});
</script>

