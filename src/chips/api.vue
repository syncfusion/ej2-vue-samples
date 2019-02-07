<template>
<div>
    <div class="col-lg-8 control-section">
        <div id="chip-api-wrapper">
            <!-- initialize chip component -->
            <ejs-chiplist id="chip" ref="chip" text="Janet Leverling"></ejs-chiplist>
        </div>
    </div>
    <div class="col-lg-4 property-section" id="chips-api-property">
        <table id="property" title="Properties">
            <tbody>
            <tr>
                <td style="width: 50%">
                <div class="userselect">Color</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                <div>
                    <!-- initialize dropdownlist component -->
                    <ejs-dropdownlist id="chip-color" :dataSource="ddlData" placeholder="Select a color" :change="colorChange">

                    </ejs-dropdownlist>
                </div>
                </td>
            </tr>
            <tr>
                <td style="width: 50%">
                <div class="userselect">Leading icon</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                <div style="padding-left: 0;padding-top: 0">
                    <!-- initialize checkbox component -->
                    <ejs-checkbox id="chip-leadingicon" :change="iconHandler"></ejs-checkbox>
                </div>
                </td>
            </tr>
            <tr>
                <td style="width: 50%">
                <div class="userselect">Avatar</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                <div>
                    <!-- initialize dropdownlist component -->
                    <ejs-dropdownlist id="chip-avatar" :dataSource="avatarData" placeholder="Select an avatar" :change="avatarHandler">

                    </ejs-dropdownlist>
                </div>
                </td>
            </tr>
            <tr>
                <td style="width: 50%">
                <div class="userselect">Trailing icon</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                <div style="padding-left: 0;padding-top: 0">
                    <!-- initialize checkbox component -->
                    <ejs-checkbox id="chip-trailingicon" :change="deleteIconHandler"></ejs-checkbox>
                </div>
                </td>
            </tr>
            <tr>
                <td style="width: 50%">
                <div class="userselect">Outline</div>
                </td>
                <td style="width: 50%;padding-right: 10px">
                <div style="padding-left: 0;padding-top: 0">
                    <!-- initialize checkbox component -->
                    <ejs-checkbox id="chip-outline" :change="variantHandler"></ejs-checkbox>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

    <div id="action-description">
       <p>This sample demonstrates most commonly used API functionalities of chip control from the property pane. Select
        any combination of properties from the property pane to customize the appearance of chip.</p>
    </div>
    <div id="description">
         <p>
            In this sample, default chip is rendered with minimal configuration.
        </p>
        <p>
            This sample can be customized further with the combination of Chip properties from the property pane. For
            example,
        </p>
        <ul>
            <li>Color variant can be changed by selecting the color dropdownlist from property pane.</li>
            <li>Leading and Trailing icons can be enabled by selecting Leading or Trailing Icon checkbox from property
                pane.</li>
            <li>Leading icon can be customized with avatar initials, icons and images from property pane</li>
            <li>Outline chip type can be enabled by checking outline checkbox from property pane.</li>
        </ul>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import { ChipListPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import * as data from "./data.json";
Vue.use(ChipListPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(DropDownListPlugin);

export default Vue.extend({
  data: function() {
    return {
      ddlData: data.ddlData,
      avatarData: data.avatarData,
      outlineCss: "",
      colorCss: ""
    };
  },
  methods: {
    // checkbox change handler for chip leading icon
    iconHandler: function(e) {
      this.$refs.chip.leadingIconCss = e.checked ? "janet" : "";
    },
    // drop-down list change handler for chip color
    colorChange: function(e) {
      this.$refs.chip.cssClass = `e-${e.value.toLowerCase()} ${this.outlineCss.trim()}`;
      this.colorCss = `e-${e.value.toLowerCase()}`;
    },
    // checkbox change handler for chip outline
    variantHandler: function(e) {
      this.outlineCss = e.checked ? "e-outline" : "";
      this.$refs.chip.cssClass = `${this.colorCss} ${this.outlineCss}`;
    },
    // drop-down list change handler for chip avatar
    avatarHandler: function(e) {
      this.$refs.chip.avatarIconCss =
        e.value.toLowerCase() === "icon"
          ? "e-icon"
          : e.value.toLowerCase() === "image"
            ? "janet"
            : "";
      this.$refs.chip.avatarText =
        e.value.toLowerCase() === "letter" ? "JL" : "";
    },
    // checkbox change handler for chip trailing icon
    deleteIconHandler: function(e) {
      this.$refs.chip.trailingIconCss = e.checked ? "e-dlt-btn" : "";
    }
  }
});
</script>

<style>
#chip-api-wrapper .janet {
  background-image: url("./images/janet.png");
}

#chip-api-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

/* chips samples icons */

#chip .e-chip-avatar.e-icon {
  font-family: "e-user-icon";
}

#chip .e-chip-avatar.e-icon:before {
  content: "\e700";
}

@font-face {
  font-family: "e-user-icon";
  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj0gSRgAAAEoAAAAVmNtYXDnEOdaAAABjAAAADhnbHlmiAnWagAAAcwAAADwaGVhZBD04psAAADQAAAANmhoZWEHiwNuAAAArAAAACRobXR4C9AAAAAAAYAAAAAMbG9jYQAwAHgAAAHEAAAACG1heHABDwA1AAABCAAAACBuYW1lby+ImAAAArwAAAIxcG9zdGUbI4AAAATwAAAAOwABAAADUv9qAFoEAAAAAAAD3QABAAAAAAAAAAAAAAAAAAAAAwABAAAAAQAAWW9ja18PPPUACwPoAAAAANb8zuYAAAAA1vzO5gAAAAAD3QPqAAAACAACAAAAAAAAAAEAAAADACkAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQPwAZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAQNS/2oAWgPqAJYAAAABAAAAAAAABAAAAAPoAAAD6AAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAAkAAAABAAEAAEAAOcB//8AAOcA//8AAAABAAQAAAABAAIAAAAAADAAeAACAAAAAAO+A+oADQAZAAA3FBYXIT4BNS4BJyEOARMeARc+ATcuAScOAS4YFwMzFxgDq4H+zYGr4QOCY2KCAwOCYmGCnCtOISFOK3qiAwOiAe1igwICg2JjggICggAAAAACAAAAAAPdA+oAFAAoAAABDgEHIicjDgEHLgEnLgEnPgE3HgEFFBYfARYfATcXFhc2JDcmJCcGBAOkBfK3KioXEFcpBBEMRUsBBfK3tvL8cVRLDggBBsQKLDDPARMFBf7tz87+7QI+ndEEBwI/Izh2DS+RVZ3RBATRnWCmN3BIETecAgcBBPK1tfIEBPIAAAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAgAAQABAAAAAAACAAcACQABAAAAAAADAAgAEAABAAAAAAAEAAgAGAABAAAAAAAFAAsAIAABAAAAAAAGAAgAKwABAAAAAAAKACwAMwABAAAAAAALABIAXwADAAEECQAAAAIAcQADAAEECQABABAAcwADAAEECQACAA4AgwADAAEECQADABAAkQADAAEECQAEABAAoQADAAEECQAFABYAsQADAAEECQAGABAAxwADAAEECQAKAFgA1wADAAEECQALACQBLyBDb250YWN0c1JlZ3VsYXJDb250YWN0c0NvbnRhY3RzVmVyc2lvbiAxLjBDb250YWN0c0ZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAQwBvAG4AdABhAGMAdABzAFIAZQBnAHUAbABhAHIAQwBvAG4AdABhAGMAdABzAEMAbwBuAHQAYQBjAHQAcwBWAGUAcgBzAGkAbwBuACAAMQAuADAAQwBvAG4AdABhAGMAdABzAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAgEDAQQABHVzZXIKY2hhdC0wMS13ZgAAAA==)
    format("truetype");
  font-weight: normal;
  font-style: normal;
}
</style>
