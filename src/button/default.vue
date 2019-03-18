<template>
  <div class="control-section">
    <div class="button-section">
      <div id="button-control">
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button :isPrimary="true">Primary</ejs-button>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button>Normal</ejs-button>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button cssClass="e-outline" :isPrimary="true">Outline</ejs-button>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button cssClass="e-flat" :isPrimary="true">Flat</ejs-button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button cssClass="e-success">Success</ejs-button>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button cssClass="e-warning">Warning</ejs-button>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button cssClass="e-danger">Danger</ejs-button>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button cssClass="e-info">Info</ejs-button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button
                iconCss="e-btn-sb-icons e-add-icon"
                cssClass="e-small e-round"
                :isPrimary="true"
              ></ejs-button>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button
                ref="toggleBtn"
                iconCss="e-btn-sb-icons e-play-icon"
                cssClass="e-flat"
                :isPrimary="true"
                :isToggle="true"
                v-on:click.native="btnClick"
              >Play</ejs-button>
            </div>
          </div>
          <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button
                iconCss="e-btn-sb-icons e-open-icon"
                cssClass="e-flat"
                :isPrimary="true"
                iconPosition="Right"
              >Open</ejs-button>
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
              <ejs-button cssClass="e-small">Small</ejs-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="action-description"
    >This sample demonstrates the default functionalities of the Button with different types and predefined styles.</div>
    <div id="description">
      <p>Button is a graphical user interface element that triggers an event on click action. It contains the text, an image, or both.</p>
      <p>
        In this sample, Play button is a toggle button and it can be enabled by using the
        <code>
          <a
            target="_blank"
            class="code"
            href="https://ej2.syncfusion.com/vue/documentation/api/button/#istoggle"
          >isToggle</a>
        </code> property. To change the text and icon you should handle click event.
      </p>
      <p>
        More information about Button can be found in this
        <a
          target="_blank"
          href="https://ej2.syncfusion.com/vue/documentation/button/getting-started"
        >documentation section</a>.
      </p>
    </div>
  </div>
</template>

<style>
/* Button sample icons */
@font-face {
  font-family: "button-icons";
  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

#button-control .e-btn-sb-icons {
  font-family: "button-icons";
  line-height: 1;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#button-control .e-play-icon::before {
  content: "\e701";
}

#button-control .e-pause-icon::before {
  content: "\e705";
}

#button-control .e-open-icon::before {
  content: "\e70d";
}

#button-control .e-add-icon::before {
  content: "\e70a";
}
/* custom code start */
#button-control {
  width: 100%;
  margin: 8% 0;
  text-align: center;
}

@media only screen and (max-width: 500px) {
  #button-control {
    margin-left: -3%;
  }
}

.button-section {
  width: 80%;
  margin: auto;
}

#button-control .col-xs-12 {
  margin: 15px 0;
}
/* custom code end */
</style>

<script>
import Vue from "vue";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ButtonPlugin);

export default Vue.extend({
  methods: {
    btnClick: function(event) {
      if (this.$refs.toggleBtn.$el.classList.contains("e-active")) {
        this.$refs.toggleBtn.content = "Play";
        this.$refs.toggleBtn.iconCss = "e-btn-sb-icons e-play-icon";
      } else {
        this.$refs.toggleBtn.content = "Pause";
        this.$refs.toggleBtn.iconCss = "e-btn-sb-icons e-pause-icon";
      }
    }
  }
});
</script>