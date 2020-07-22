<template>
  <div class="control-section">
    <div class="row linear-parent">
      <div id="success" class="linear-progress">
        <ejs-progressbar
          id="success"
          ref="success"
          type="Linear"
          height="30"
          width="100%"
          trackColor='#F5F5F5'
          :progressThickness="progressThickness"
          :trackThickness="trackThickness"
          :value="value1"
          isStriped="true"
          role="Success"
          :animation="animation"
          :load="progressLoad"
        ></ejs-progressbar>
      </div>
      <div id="info" class="linear-progress">
        <ejs-progressbar
          id="info"
          ref="info"
          type="Linear"
          height="30"
          width="100%"
          trackColor='#F5F5F5'
          :progressThickness="progressThickness"
          :trackThickness="trackThickness"
          :value="value2"
          isStriped="true"
          role="Info"
          :animation="animation"
          :load="progressLoad"
        ></ejs-progressbar>
      </div>
      <div id="warning" class="linear-progress">
        <ejs-progressbar
          id="warning"
          ref="warning"
          type="Linear"
          height="30"
          width="100%"
          trackColor='#F5F5F5'
          :progressThickness="progressThickness"
          :trackThickness="trackThickness"
          :value="value3"
          isStriped="true"
          role="Warning"
          :animation="animation"
          :load="progressLoad"
        ></ejs-progressbar>
      </div>
      <div id="danger" class="linear-progress">
        <ejs-progressbar
          id="danger"
          ref="danger"
          type="Linear"
          height="30"
          width="100%"
          trackColor='#F5F5F5'
          :progressThickness="progressThickness"
          :trackThickness="trackThickness"
          :value="value4"
          isStriped="true"
          role="Danger"
          :animation="animation"
          :load="progressLoad"
        ></ejs-progressbar>
      </div>
    </div>
    <div class="row linear-button">
      <button
        id="reLoad"
        class="e-control e-btn e-lib e-outline e-primary"
        @click="onclick"
      >Stop Animation</button>
    </div>
    <div id="action-description">
      <p>This sample illustrates a striped linear progress bar with animation.</p>
    </div>
    <div id="description">
      <p>
        This demo for Essential JS2 Progress Bar control shows the linear striped progress bar with help of
        <code>isStriped</code> property.
      </p>
    </div>
  </div>
</template>
<style scoped>
#control-container {
  padding: 0px !important;
}
.linear-parent {
  text-align: center;
  margin-top: 8%;
}
.linear-button {
  text-align: center;
}
.linear-progress {
  width: 80%;
  margin: auto;
  margin-bottom: 3%;
}
#reLoad {
  border-radius: 4px;
  text-transform: capitalize;
}
</style>
<script>
import Vue from "vue";
import { Browser } from "@syncfusion/ej2-base";
import {
  ProgressBarPlugin,
  ProgressAnnotation
} from "@syncfusion/ej2-vue-progressbar";

Vue.use(ProgressBarPlugin);

export default Vue.extend({
  data: function() {
    return {
      value1: 20,
      value2: 40,
      value3: 70,
      value4: 100,
      trackThickness: 20,
      progressThickness: 20,
      animation: {
        enable: true,
        duration: 2000,
        delay: 0
      }
    };
  },
  provide: {},
  methods: {
    progressLoad: function(args) {
      let selectedTheme = location.hash.split("/")[1];
      selectedTheme = selectedTheme ? selectedTheme : "Material";
      args.progressBar.theme = (
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
      )
        .replace(/-dark/i, "Dark")
        .replace(/contrast/i, "Contrast");
    },
    onclick: function() {
      let button = document.getElementById("reLoad");
      if (!this.$refs.danger.ej2Instances.animation.enable) {
        button.innerHTML = "Stop Animation";
        this.$refs.danger.ej2Instances.animation.enable = true;
        this.$refs.danger.ej2Instances.refresh();
      } else {
        button.innerHTML = "Start Animation";
        this.$refs.danger.ej2Instances.animation.enable = false;
        this.$refs.danger.ej2Instances.refresh();
      }
      if (!this.$refs.warning.ej2Instances.animation.enable) {
        this.$refs.warning.ej2Instances.animation.enable = true;
        this.$refs.warning.ej2Instances.refresh();
      } else {
        this.$refs.warning.ej2Instances.animation.enable = false;
        this.$refs.warning.ej2Instances.refresh();
      }
      if (!this.$refs.info.ej2Instances.animation.enable) {
        this.$refs.info.ej2Instances.animation.enable = true;
        this.$refs.info.ej2Instances.refresh();
      } else {
        this.$refs.info.ej2Instances.animation.enable = false;
        this.$refs.info.ej2Instances.refresh();
      }
      if (!this.$refs.success.ej2Instances.animation.enable) {
        this.$refs.success.ej2Instances.animation.enable = true;
        this.$refs.success.ej2Instances.refresh();
      } else {
        this.$refs.success.ej2Instances.animation.enable = false;
        this.$refs.success.ej2Instances.refresh();
      }
    }
  }
});
</script>
