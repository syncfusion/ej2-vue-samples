<template>
<div>
    <div class="col-lg-8 control-section">
        <ejs-tooltip ref='tooltip' target='#default' opensOn='Click' :content='tContent' :created='created'>
            <!-- Tooltip element -->
            <ejs-button ref='button' id="default">Show Tooltip</ejs-button>
        </ejs-tooltip>
    </div>
    <div class="col-lg-4 property-section">
        <table id="property" title="Properties">
            <tbody>
                <tr>
                    <td style="width: 50%">
                        <div class="userselect">Content</div>
                    </td>
                    <td style="width: 50%;padding-right: 10px">
                        <div>
                            <input v-on:keyup="keymonitor" id="value" ref="textbox"  type="text" placeholder="Tooltip content">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">
                        <div class="userselect">Height</div>
                    </td>
                    <td style="width: 50%;padding-right: 10px">
                        <div>
                            <ejs-numerictextbox id="height" cssClass="e-input" value="45" :change='hChange'></ejs-numerictextbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">
                        <div class="userselect">Width</div>
                    </td>
                    <td style="width: 50%;padding-right: 10px">
                        <div>
                            <ejs-numerictextbox id="width" cssClass="e-input" value="100" :change='wChange'></ejs-numerictextbox>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">
                        <div class="userselect">Open Mode</div>
                    </td>
                    <td style="width: 50%;padding-right: 10px">
                        <div>
                             <ejs-dropdownlist id='ddlelement' :change='ddlChange' :dataSource='dataDDL' :placeholder='waterMark'></ejs-dropdownlist>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%">
                        <div class="userselect">Sticky Mode</div>
                    </td>
                    <td style="width: 50%;padding-right: 10px">
                        <div>
                            <ejs-checkbox :change='cChange' id="sticky"></ejs-checkbox>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div id="action-description">
        <p>This sample demonstrates how to customize the tooltip component by using its properties from
            the property pane. Select any combination of properties from the property pane to customize
            tooltips.</p>
    </div>
    <div id="description">
        <p>In this demo, the default tooltip is rendered with minimal configuration. This sample can be
            customized further with the combination of tooltip properties from the property pane. For
            example,</p>
        <ul>
            <li>Any change made to a textbox in the property pane will be reflected in the tooltip <a href="https://ej2.syncfusion.com/documentation/tooltip/api-tooltip.html#content">content</a></li>
            <li><a href="https://ej2.syncfusion.com/documentation/tooltip/api-tooltip.html?lang=typescript#issticky">StickyMode</a>can
                be enabled by checking the sticky mode option in the property pane.</li>
            <li><a href="https://ej2.syncfusion.com/documentation/tooltip/api-tooltip.html?lang=typescript#height">Height</a>                and
                <a href="https://ej2.syncfusion.com/documentation/tooltip/api-tooltip.html?lang=typescript#width">width</a>                can be changed from the property pane.</li>
            <li><a href="https://ej2.syncfusion.com/documentation/tooltip/api-tooltip.html?lang=typescript#openson">OpenMode</a>                can be changed from the property pane.</li>
        </ul>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { ButtonPlugin, CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(ButtonPlugin);
Vue.use(TooltipPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(DropDownListPlugin);
Vue.use(NumericTextBoxPlugin);

export default Vue.extend({
  data: function() {
    return {
      waterMark: "Open Mode",
      dataDDL: ["Hover", "Click", "Auto"],
      tContent: "Tooltip Content"
    };
  },
  methods: {
    created: function() {
      if (document.getElementById("right-pane")) {
        document
          .getElementById("right-pane")
          .addEventListener("click", this.onClick);
        document
          .getElementById("right-pane")
          .addEventListener("scroll", this.onScroll);
      }
    },
    onClick: function(args) {
      if (args && !args.target.classList.contains("e-btn")) {
        if (
          this.$refs.tooltip &&
          document.getElementsByClassName("e-tooltip-wrap").length > 0
        ) {
          this.$refs.tooltip.close();
        }
      }
    },
    onScroll: function() {
      if (
        this.$refs.tooltip &&
        document.getElementsByClassName("e-tooltip-wrap").length > 0
      ) {
        this.$refs.tooltip.close();
      }
    },
    wChange: function(args) {
      this.$refs.tooltip.width = args.value;
    },
    hChange: function(args) {
      this.$refs.tooltip.height = args.value;
    },
    textboxValue: function() {
      this.$refs.tooltip.content = this.$ref.textbox.value;
      this.$refs.tooltip.refresh(this.$refs.tooltip.$el);
    },
    ddlChange: function(args) {
      this.$refs.tooltip.opensOn = args.value;
      this.$refs.tooltip.refresh(this.$refs.button);
    },
    cChange: function(args) {
      this.$refs.tooltip.isSticky = args.checked;
    },
    keymonitor: function(args) {
      this.$refs.tooltip.close();
      this.$refs.tooltip.content = args.currentTarget.value;
      this.$refs.tooltip.refresh(this.$refs.button);
    }
  }
});
</script>
<style>
.userselect {
  -webkit-user-select: none;
  /* Safari 3.1+ */
  -moz-user-select: none;
  /* Firefox 2+ */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Standard syntax */
}

#property {
  padding-top: 200px;
}

#default {
  position: absolute;
  left: calc(50% - 60px);
  top: 35%;
}

#value {
  height: 34px;
  width: 136px;
  padding-left: 10px;
}

.highcontrast #value {
  border: 1px solid;
  border-width: 1px;
  color: #fff;
  background: #000;
}
</style>
