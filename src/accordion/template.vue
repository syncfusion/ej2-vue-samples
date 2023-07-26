<template>
  <div class="control-section template-accordion">
    <div class="control_wrapper accordion-control-section">
      <div class="product_title">iPhone X Product Specification</div>
      <ejs-accordion ref="Accordion_Nested" expandMode="Single">
        <e-accordionitems>
          <e-accordionitem header="Network & Connectivity" :content="'networkFeaturesTemplate'" expanded="true"></e-accordionitem>
          <template v-slot:networkFeaturesTemplate>
            <table>
              <tr>
                <th rowspan="2">CELLULAR</th>
                <td class="e-bold">Technology</td>
                <td>GSM / CDMA / HSPA / EV-DO / LTE</td>
              </tr>
              <tr>
                <td class="e-bold">Edge</td>
                <td>Yes</td>
              </tr>

              <tr>
                <th rowspan="3">WIRELESS</th>
                <td class="e-bold">Wi-Fi</td>
                <td>Yes ( 802.11 a/b/g/n/ac )</td>
              </tr>
              <tr>
                <td class="e-bold">Bluetooth</td>
                <td>Yes ( v 5.0 )</td>
              </tr>
              <tr>
                <td class="e-bold">NFC</td>
                <td>Yes</td>
              </tr>
            </table>
          </template>
          <e-accordionitem header="Feature" :content="'featureTemplate'"></e-accordionitem>
          <template v-slot:featureTemplate>
            <ejs-accordion>
              <e-accordionitems>
                <e-accordionitem header="Sensor" :content="'SensorTemplate'" expanded="true"></e-accordionitem>
                <template v-slot:SensorTemplate>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td class="e-bold">Proximity sensor</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td class="e-bold">Face ID</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td class="e-bold">Accelerometer</td>
                          <td>Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </template>
                <e-accordionitem header="Camera" :content="'CameraTemplate'"></e-accordionitem>
                <template v-slot:CameraTemplate>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <th class="e-bold" rowspan="3">Camera</th>
                          <td class="e-bold">12MP wide-angle</td>
                        </tr>
                        <tr>
                          <td class="e-bold">Live Photos with stabilization</td>
                        </tr>
                        <tr>
                          <td class="e-bold">Body and face detection</td>
                        </tr>
                        <tr>
                          <th class="e-bold" rowspan="4">TrueDepth Camera</th>
                          <td class="e-bold">7MP camera</td>
                        </tr>
                        <tr>
                          <td class="e-bold">Animoji</td>
                        </tr>
                        <tr>
                          <td class="e-bold">Face detection</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </template>
                <e-accordionitem
                  header="VideoRecording"
                  :content="'VideoRecordingTemplate'"
                ></e-accordionitem>
                <template v-slot:VideoRecordingTemplate>
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <th class="e-bold" rowspan="6">Video Recording</th>
                          <td class="e-bold">4K video recording</td>
                        </tr>
                        <tr>
                          <td class="e-bold">
                            1080p & 720p HD video recording
                          </td>
                        </tr>
                        <tr>
                          <td class="e-bold">Optical zoom, 6x digital zoom</td>
                        </tr>
                        <tr>
                          <td class="e-bold">Slow motion video support</td>
                        </tr>
                        <tr>
                          <td class="e-bold">
                            Take 8MP still photos while recording 4K video
                          </td>
                        </tr>
                        <tr>
                          <td class="e-bold">Noise reduction</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </template>
              </e-accordionitems>
            </ejs-accordion>
          </template>
          <e-accordionitem
            header="Hardware & Software"
            :content="'HardSoftTemplate'"
          ></e-accordionitem>
          <template v-slot:HardSoftTemplate>
            <div id="Hard_Soft_features">
              <table>
                <tbody>
                  <tr>
                    <th rowspan="3">Hardware</th>
                    <td class="e-bold" rowspan="2 ">Chip</td>
                    <td>Apple A11 Bionic chip with 64-bit architecture</td>
                  </tr>
                  <tr>
                    <td>Embedded M11 motion coprocessor</td>
                  </tr>
                  <tr>
                    <td class="e-bold">Capacity</td>
                    <td>64GB/256GB</td>
                  </tr>
                  <tr>
                    <th>Software</th>
                    <td class="e-bold" rowspan="2 ">Operating System</td>
                    <td>iOS 11</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </e-accordionitems>
      </ejs-accordion>
    </div>
    <div id="source_link">
      Source: &nbsp;
      <a href="https://www.apple.com/iphone-x/specs/" target="_blank"
        >www.apple.com/iphone-x/specs/</a
      >
    </div>
    <div id="action-description">
      <p> This sample demonstrates rendering <code>Accordion</code> content loaded using <code>template(v-slot)</code>. The content of panel “Network & Connectivity” is loaded from using the vue template(v-slot).
      </p>
    </div>

    <div id="description">
      <p>This sample illustrates the accordion content loaded using the vue template(v-slot).</p>
      <p>More information about Accordion can be found in this <a href="https://ej2.syncfusion.com/vue/documentation/accordion/getting-started/" target="_blank">documentation</a> section.</p>
    </div>
  </div>
</template>
<style>
@-moz-document url-prefix() {
  .template-accordion .e-accordion .e-content table {
      border-collapse: initial;
  }
}

.template-accordion .e-accordion table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
}

.template-accordion .e-accordion table th,
.template-accordion .e-accordion table td {
    font-weight: normal;
    padding: 5px;
    text-align: left;
    border: 1px solid #ddd;
}

.template-accordion .product_title {
    text-align: center;
    margin: 20px 0;
    padding: 10px 0;
    text-overflow: ellipsis;
    font-weight: bold;
   font-size: 16px;
}

.template-accordion .accordion-control-section {
   margin: 0 10% 0 10%;
   padding-bottom: 25px;
}

/* custom code start */
.template-accordion #source_link {
   float: right;
   margin-right: 10px;
}
@media screen and (max-width: 768px) {
  .template-accordion .accordion-control-section {
     margin: 0;
     margin-bottom: 20px;
  }
  .template-accordion #source_link {
     margin-top: -25px;
     margin-right: 0px;
  }
}
/* custom code end */
</style>
<script>
import Vue from "vue";
import { AccordionPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(AccordionPlugin);
export default Vue.extend({
  data: function () {
    return {};
  },
});
</script>