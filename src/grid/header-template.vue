<template>
<div class="col-lg-12 control-section">
    <div id="action-description">
      <p>This sample demonstrates the Grid header template feature. In this sample, custom icons are shown in the column headers.</p>
    </div>

    <div>
      <ejs-grid id="gridheadersample" :dataSource="data" height=400>
              <e-columns>
                <e-column headerText='Image' width='180' textAlign='Center' :template="'cTemplate'" :headerTemplate="'employeetemplate'"></e-column>
                <e-column field='EmployeeID' headerText='ID' width='160'></e-column>
                <e-column field='Name' headerText='Name' width='120'></e-column>
                <e-column field='MailID' headerText='Email ID' width='150' :template="'mailIDTemplate'" :headerTemplate="'mailIDHeaderTemplate'"></e-column>
                <e-column field='AssetKit' headerText='Asset Kit' width='180' :template="'assetTemplate'" :headerTemplate="'assetHeaderTemplate'"></e-column>
                <e-column field='AssetKitDistribution' headerText='Assigned Date' width='170' format='yMd' :headerTemplate="'datetemplate'" textAlign='Right'></e-column>
                <e-column field='Location' headerText='Location' width='150' :headerTemplate="'locationHeaderTemplate'" :template="'locationTemplate'"></e-column>
                <e-column field='PhoneNumber' headerText='Contact No' width='150' textAlign='Right' :headerTemplate="'phoneHeaderTemplate'"></e-column>
              </e-columns>
              <template v-slot:employeetemplate="{data}">
                <span class="e-icon-userlogin e-icons employee"></span>Image
              </template>
              <template v-slot:datetemplate="{data}">
                <span class="e-icon-calender e-icons headericon"></span>Assigned Date
              </template>
              <template v-slot:locationHeaderTemplate="{data}">
                <span class="e-location e-icons"></span>Location
              </template>
              <template v-slot:assetHeaderTemplate="{data}">
                <span class="e-description e-icons"></span>Asset Kit
              </template>
              <template v-slot:mailIDHeaderTemplate="{data}">
                <span class="e-mail e-icons"></span>Email ID
              </template>
              <template v-slot:phoneHeaderTemplate="{data}">
                <span class="e-phone e-icons"></span>Contact No
              </template>
              <template v-slot:cTemplate="{data}">
                <div class="image">
                  <img :src="'src/grid/images/' + data.EmployeeID.replace('Emp100', '') + '.png'" :alt="data.EmployeeID"/>
                </div>
              </template>
              <template v-slot:mailIDTemplate="{data}">
                <a :href="'mailto:' + data.MailID">{{ data.MailID }}</a>
              </template>
              <template v-slot:locationTemplate="{data}">
                <div>
                  <span class="e-location e-icons"></span>{{data.Location}}
                </div>
              </template>
              <template v-slot:assetTemplate="{data}">
                <div><ejs-chiplist id="chip" :chips='splitAssetKit(data.AssetKit)'></ejs-chiplist></div>
              </template>
          </ejs-grid>
    </div>

      <div id="description">
      <p>
        The <code><a target="_blank" class="code" href="https://ej2.syncfusion.com/vue/documentation/api/grid/column/#headertemplate">header template
        </a></code> feature enhances your column headers by incorporating custom icons or text alongside the header text. 
        This allows for a more visually appealing and informative presentation of your data. In this demonstration, you will see how custom icons are integrated
        into the column headers, which include <strong>Employee Image</strong>, <strong>MailID</strong>, <strong>Phone Number</strong>, <strong>Location</strong>, <strong>Asset Kit</strong>, and <strong>Assigned Date</strong>. These header icons represent the column's content, 
        making it easy to identify and understand at a glance.
    </p>
    <p>
        More information on the header template can be found in this
        <a target="_blank" 
        href="https://ej2.syncfusion.com/vue/documentation/grid/columns/column-headers#header-template">
        documentation section</a>.
    </p>
    </div>

</div>
</template>
<style scoped>
@import "../../styles/Grid/header-template.css";
</style>
<script lang="ts">
import { GridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-grids";
import { ChipListComponent } from '@syncfusion/ej2-vue-buttons';
import { employeeDetail } from "./data-source";

export default {
  components: {
    'ejs-grid': GridComponent,
    'ejs-chiplist': ChipListComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data: () => {
    return {
      data: employeeDetail,
    };
  },
  methods: {
    splitAssetKit(assetKit: any) {
      return assetKit.split(',');
    }
  },
  provide: {}
}
</script>
