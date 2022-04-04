<template>
  <div id="LG-export-sample">
    <div class="col-lg-8 control-section">
      <div class="control-section">
        <div align="center">
          <ejs-lineargauge
            ref="gauge"
            :load="load"
            style="display:block"
            align="center"
            id="defaultContainer"
            :orientation="orientation" :allowPdfExport='allowPdfExport' :allowPrint='allowPrint' :allowImageExport='allowImageExport'
          >
            <e-axes>
              <e-axis
                :majorTicks="majorTicks"
                :minorTicks="minorTicks"
                :labelStyle="labelStyle"
                :ranges="ranges"
                :minimum="minimum"
                :maximum="maximum"
              >
                <e-pointers>
                  <e-pointer
                    :value="value"
                    :height="height"
                    :width="width"
                    :offset="offset"
                    :markerType="markerType"
                    :border="border"
                  ></e-pointer>
                </e-pointers>
              </e-axis>
            </e-axes>
          </ejs-lineargauge>
        </div>
      </div>
    </div>
    <div class="col-lg-4 property-section">
      <table id="property" title="Properties" style="width: 100%; margin-left: -10px;">
      <colgroup>
            <col span="1" style="width: 50%;">
            <col span="1" style="width: 50%;">
         </colgroup>
         <tbody>
        <tr style="height: 50px">
          <td>
            <div>Export Type</div>
          </td>
          <td>
            <div>
              <ejs-dropdownlist ref="mode" id="mode" :dataSource="modedata" index="0" :width="exportWidth"></ejs-dropdownlist>
            </div>
          </td>
        </tr>
        <tr style="height: 50px">
          <td>
            <div>File Name</div>
          </td>
          <td>
            <div class="e-float-input" style="margin-top: 0px;">
              <input type="text" value="Gauge" id="fileName" style="width: 100%;" />
            </div>
          </td>
        </tr>
        <tr id="button-control" style="height: 70px" align="center">
          <td style="text-align: center">
            <div>
              <ejs-button
                id="export"
                :isPrimary="isPrimary"
                :content="content"
                v-on:click.native="clickExport"
              ></ejs-button>
            </div>
          </td>
          <td style="text-align: center">
            <div>
              <ejs-button
                id="print"
                :isPrimary="isPrimary"
                :content="content1"
                v-on:click.native="clickPrint"
              ></ejs-button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="action-description">
      <p>This sample demonstrates the print and export functionality of linear gauge.</p>
    </div>
    <div id="description">
      <p>
          In this example, you can see how to export and print the rendered linear gauge. The Linear Gauge can be
          exported to JPEG, PNG, SVG, and PDF formats. Print functionality is done by <code>print</code>
          method when <code>allowPrint</code> is set as true. Export functionality is done by 
          <code>export</code> method when <code>allowImageExport</code> and 
          <code>allowPdfExport</code> is set as true.</p>
          <br>
          <p style="font-weight: 500"> <b>Injecting Module</b></p>
          <p>
         To make use of the print and export support, we need to inject the <code>Print</code>, <code>ImageExport</code> and <code>PdfExport</code> modules using the <code>provide</code> section.
      </p>
      <br />
      <p>
        More information about print and export can be found in this
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/documentation/linear-gauge/linear-gauge-print-and-export/"
        >documentation section</a>.
      </p>
    </div>
  </div>
</template>
<style>
#LG-export-sample #button-control {
  width: 100%;
  text-align: center;
}

#LG-export-sample #control-container {
  padding: 0px !important;
}

#LG-export-sample .e-play-icon::before {
  content: "\e728";
}

#LG-export-sample .e-play-icon1::before {
  content: "\e34b";
}

#LG-export-sample #export {
    width: 90px;
}

#LG-export-sample #print {
    width: 90px;
}

.e-view.fluent #LG-export-sample .e-play-icon::before, .e-view.fluent-dark #LG-export-sample .e-play-icon::before {
    content: "\e72e";
}

.e-view.fluent #LG-export-sample .e-play-icon1::before, .e-view.fluent-dark #LG-export-sample .e-play-icon1::before {
    content: "\e75d";
}

.e-view.fabric #LG-export-sample .e-play-icon1::before, .e-view.fabric-dark #LG-export-sample .e-play-icon1::before {
    content: "\e7df";
}

.e-view.fabric #LG-export-sample .e-play-icon::before, .e-view.fabric-dark #LG-export-sample .e-play-icon::before {
    content: "\e710";
}

.e-view.bootstrap #LG-export-sample .e-play-icon1::before {
    content: "\ebd2";
}

.e-view.bootstrap4 #LG-export-sample .e-play-icon::before {
    content: "\e780";
}

.e-view.bootstrap4 #LG-export-sample .e-play-icon1::before {
    content: "\e743";
}

.e-view.tailwind #LG-export-sample .e-play-icon1::before, .e-view.tailwind-dark #LG-export-sample .e-play-icon1::before {
    content: "\e76c";
}

.e-view.tailwind #LG-export-sample .e-play-icon::before, .e-view.tailwind-dark #LG-export-sample .e-play-icon::before {
    content: "\e7bf";
}

.e-view.highcontrast #LG-export-sample .e-play-icon1::before {
    content: "\ebf9";
}

.e-view.highcontrast #LG-export-sample .e-play-icon::before {
    content: "\e710";
}

.e-view.bootstrap5 #LG-export-sample .e-play-icon::before, .e-view.bootstrap5-dark #LG-export-sample .e-play-icon::before {
    content: "\e72e";
}

.e-view.bootstrap5 #LG-export-sample .e-play-icon1::before, .e-view.bootstrap5-dark #LG-export-sample .e-play-icon1::before {
    content: "\e75d";
}
</style>
<script>
import Vue from "vue";
import {
  LinearGaugePlugin, Print, ImageExport, PdfExport
} from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default Vue.extend({
  data: function() {
    return {
      allowImageExport: true,
      allowPdfExport: true,
      allowPrint: true,
      orientation: "Horizontal",
      minimum: 0,
      maximum: 120,
      value: 80,
      height: 23,
      width: 35,
      offset: -55,
      markerType: "Triangle",
      border: {
        width: 2,
        color: "white"
      },
      majorTicks: {
        height: 0,
        width: 0,
        interval: 20
      },
      minorTicks: {
        height: 7,
        width: 0,
        interval: 4
      },
      labelStyle: {
        position: "Outside",
        font: {
          color: "red",
          fontFamily: 'Segoe UI'
        },
        offset: 4
      },
      ranges: [
        {
          start: 0,
          end: 20,
          startWidth: 15,
          endWidth: 25,
          color: "#82b944"
        },
        {
          start: 20,
          end: 40,
          startWidth: 25,
          endWidth: 35,
          color: "#a1cb43"
        },
        {
          start: 40,
          end: 60,
          startWidth: 35,
          endWidth: 45,
          color: "#ddec12"
        },
        {
          start: 60,
          end: 80,
          startWidth: 45,
          endWidth: 55,
          color: "#ffbc00"
        },
        {
          start: 80,
          end: 100,
          startWidth: 55,
          endWidth: 65,
          color: "#ff6000"
        },
        {
          start: 100,
          end: 120,
          startWidth: 65,
          endWidth: 75,
          color: "red"
        }
      ],
      isPrimary: true,
      content1: "Print",
      content: "Export",
      modedata: ["JPEG", "PNG", "SVG", "PDF"],
      exportWidth: '100%'
    };
  },
  provide: {
    lineargauge: [Print, ImageExport, PdfExport]
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

