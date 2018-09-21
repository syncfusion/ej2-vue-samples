<template>
  <div class="control-section">
    <div class="split-button-section">
        <div id="split-button-control">
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
                        <ejs-button iconCss="e-icons e-add-icon" cssClass="e-small e-round" :isPrimary="true"></ejs-button>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-button  iconCss="e-icons e-play-icon" cssClass="e-flat" :isPrimary="true" :isToggle="true" v-on:click.native="btnClick">Play</ejs-button>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-button iconCss="e-icons e-open-icon" cssClass="e-flat" :isPrimary="true" iconPosition="Right">Open</ejs-button>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                        <ejs-button cssClass="e-small">Small</ejs-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="action-description">
       This sample demonstrates the default functionalities of the Button with different types and predefined styles.
    </div>
    <div id="description">
         <p>
        Button is a graphical user interface element that triggers an event on click action. It contains the text, an image, or both.
    </p>
    <p>
        In this sample, Play button is a toggle button and it can be enabled by using the <code><a target="_blank" class="code"
        href="http://ej2.syncfusion.com/angular/documentation/button/api-buttonComponent.html#istoggle-boolean">isToggle
        </a></code> property. To change the text and icon you should handle click event.
    </p>
    <p>
        More information about Button can be found in this
        <a target="_blank" href="http://ej2.syncfusion.com/angular/documentation/button/getting-started.html">
        documentation section</a>.
    </p>
    </div>
</div>
</template>

<style>
#split-button-control {
  width: 100%;
  margin: 8% 0;
  text-align: center;
}

@media only screen and (max-width: 500px) {
  #split-button-control {
    margin-left: -3%;
  }
}

.split-button-section {
  width: 80%;
  margin: auto;
}

#split-button-control .col-xs-12 {
  margin: 15px 0;
}

.e-play-icon::before {
  content: "\e798";
}

.e-pause-icon::before {
  content: "\e753";
}

.e-open-icon::before {
  content: "\e782";
}

.e-add-icon::before {
  content: "\e823";
}
</style>

<script>
import Vue from "vue";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ButtonPlugin);

export default Vue.extend({
  methods: {
    btnClick: function(event) {
      var toggleBtn = event.target.ej2_instances[0];
      if (toggleBtn.element.classList.contains("e-active")) {
        toggleBtn.content = "Play";
        toggleBtn.iconCss = "e-icons e-play-icon";
      } else {
        toggleBtn.content = "Pause";
        toggleBtn.iconCss = "e-icons e-pause-icon";
      }
    }
  }
});
</script>