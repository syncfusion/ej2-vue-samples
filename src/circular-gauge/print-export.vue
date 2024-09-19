<template>
<main><div id="CG-export-sample">
  <div class="col-md-8 control-section">
    <div class="control-section">
        <ejs-circulargauge ref="gauge" :background='background' :load="load" style="display:block" align="center" id="gauge" :allowPdfExport='allowPdfExport' :allowPrint='allowPrint' :allowImageExport='allowImageExport'>
          <e-axes>
            <e-axis :radius="gaugeRadius" :startAngle="startAngle" :endAngle="endAngle" :majorTicks="majorTicks" :lineStyle="lineStyle" :minorTicks="minorTicks" :labelStyle="labelStyle" :ranges="ranges" :direction="direction">
              <e-pointers>
                <e-pointer radius='0%' :pointerWidth='pointerWidth' :cap='cap'></e-pointer>
              </e-pointers>
            </e-axis>
          </e-axes>
        </ejs-circulargauge>
    </div>
</div>
<br>
    <div class="col-md-4 property-section">
      <table role="none" id="property" title="Properties" style="width: 100%; margin-left: -20px;">
       <colgroup>
            <col span="1" style="width: 50%;">
            <col span="1" style="width: 50%;">
         </colgroup>
         <tbody>
        <tr style="height: 50px">
          <td>
            <div style="font-size: 14px">Export Type</div>
          </td>
          <td>
            <div>
              <ejs-dropdownlist ref="mode" id="mode" :dataSource="modedata" index="0" :width='width'></ejs-dropdownlist>
            </div>
          </td>
        </tr>
        <tr style="height: 50px">
          <td>
            <div style="font-size: 14px">File Name</div>
          </td>
          <td>
            <div style="margin-top: 0px;">
              <ejs-textbox type="text" value="Circular Gauge" id="fileName" style="width:100%"></ejs-textbox>
            </div>
          </td>
        </tr>
        <tr id="button-control" style="height: 50px" align="center">
          <td align="right" style="padding-left:5%">
            <div style="text-align: center">
              <ejs-button id="export" :isPrimary="isPrimary" :content="content" v-on:click.native="clickExport"></ejs-button>
            </div>
          </td>
          <td align="left" style="padding-right:5%">
            <div style="text-align: center">
              <ejs-button id="print" :isPrimary="isPrimary" :content="content1" v-on:click.native="clickPrint"></ejs-button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <section id="action-description" aria-label="Description of Circular Gauge sample">
      <p>
          This sample demonstrates the print and export functionalities of the circular gauge.
      </p>
  </section>
<section id="description" aria-label="Description of the Circular Gauge features demonstrated in this sample">
    <p>
        In this example, you can see how to print and export the rendered circular gauge. You can add print
        functionality by using the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#print">print</a> method when <a
            target="_blank" href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#allowprint">
            allowPrint</a> is set as <b>true</b>. Also, you can add export functionality by using the <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#export">export</a> method when <a
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#allowimageexport">
            allowImageExport</a> and <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/#allowpdfexport">allowPdfExport</a>
        are set as <b>true</b>. The circular gauge can be exported to JPEG, PNG, SVG, and PDF formats.
    </p>
    <p>
        More information about print and export can be found in this <a target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-print-and-export/">documentation
            section</a>.
    </p>
</section>
</main>
</template>
<style>
#CG-export-sample #button-control {
  width: 100%;
  text-align: center;
}
#CG-export-sample #export {
    
    border-radius: 5px;
}

#CG-export-sample #print {
   
    border-radius: 5px;
}
.property-panel-content td {
    padding-top: 0px;
}

.e-view.fluent #CG-export-sample .e-play-icon::before, .e-view.fluent-dark #CG-export-sample .e-play-icon::before {
    content: "\e72e";
}

.e-view.fluent #CG-export-sample .e-play-icon1::before, .e-view.fluent-dark #CG-export-sample .e-play-icon1::before {
    content: "\e75d";
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
import { CircularGaugeComponent, Print, ImageExport, PdfExport, Gradient, AxesDirective, AxisDirective, PointersDirective, PointerDirective} from "@syncfusion/ej2-vue-circulargauge";
import { ButtonComponent  } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';

export default {
  components: {
        'ejs-circulargauge': CircularGaugeComponent,
        'e-axis': AxisDirective,
        'e-axes': AxesDirective,
        'e-pointer': PointerDirective,
        'e-pointers': PointersDirective   ,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-button': ButtonComponent,
        'ejs-textbox': TextBoxComponent
  },
  data: function() {
    return {
      allowImageExport: true,
      allowPdfExport: true,
      background:'transparent',
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
          fontFamily: "inherit",
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
      width: '100%'
    };
  },
  provide:{
    circulargauge:[Print, ImageExport, PdfExport, Gradient]
  },
  methods: {
    load: function(args) {
    /* custom code start */
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.gauge.theme =
        (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/-high/i, 'High').replace(/contrast/i, 'Contrast').replace(/5.3/i, '5');
    /* custom code end */
    },
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
};
</script>  