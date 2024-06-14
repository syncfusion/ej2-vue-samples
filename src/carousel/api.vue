<template>
  <div class="api-carousel-section">
    <div class="col-lg-8 control-section">
      <div class="e-sample-resize-container carousel-sample">
        <ejs-carousel ref="carObj" cssClass="api-carousel" :interval="interval">
          <e-carousel-items>
            <e-carousel-item :template="itemTemplate1"></e-carousel-item>
            <e-carousel-item :template="itemTemplate2"></e-carousel-item>
            <e-carousel-item :template="itemTemplate3"></e-carousel-item>
            <e-carousel-item :template="itemTemplate4"></e-carousel-item>
            <e-carousel-item :template="itemTemplate5"></e-carousel-item>
          </e-carousel-items>
        </ejs-carousel>
      </div>
      <div id="action-description">
        <p>
          This sample demonstrates the properties available in the
          <a aria-label="Vue carousel" href="https://www.syncfusion.com/vue-ui-components/vue-carousel" target="_blank">Vue Carousel</a> component.
        </p>
      </div>
      <div id="description">
        <p>
          In this demo, you can manually change the properties of the
          <code>Vue Carousel</code> component like <code>autoPlay</code>,
          <code>buttonsVisibility</code>, <code>showIndicators</code>,
          <code>interval</code>, <code>showPlayButton</code>,
          <code>loop</code> using the property panel.
        </p>
        <p>
          More information about the properties available in the Carousel
          component can be found in this
          <a aria-label="Vue carousel"
            target="_blank"
            href="https://ej2.syncfusion.com/vue/documentation/api/carousel/"
            >documentation section</a
          >.
        </p>
      </div>
    </div>
    <div class="col-lg-3 property-section">
      <div id="property" class="property-panel-table" title="Properties">
        <table id="property" title="Properties" style="width: 100%">
          <tbody>
            <tr>
              <td>Enable Autoplay</td>
              <td>
                <div>
                  <ejs-switch
                    id="enableAutoplay"
                    :checked="true"
                    :change="enableAutoplayStateChange"
                  ></ejs-switch>
                </div>
              </td>
            </tr>
            <tr>
              <td>Infinite Looping</td>
              <td>
                <div>
                  <ejs-switch
                    id="infiniteLooping"
                    :checked="true"
                    :change="infiniteLoopingStateChange"
                  ></ejs-switch>
                </div>
              </td>
            </tr>
            <tr>
              <td>Show Indicators</td>
              <td>
                <div>
                  <ejs-switch
                    id="showIndicators"
                    :checked="true"
                    :change="showIndicatorsStateChange"
                  ></ejs-switch>
                </div>
              </td>
            </tr>
            <tr>
              <td>Show Play Button</td>
              <td>
                <div>
                  <ejs-switch
                    id="showPlayButton"
                    :checked="false"
                    :change="showPlayButtonStateChange"
                  ></ejs-switch>
                </div>
              </td>
            </tr>
            <tr>
              <td>Buttons Visibility</td>
              <td>
                <div>
                  <ejs-dropdownlist
                    id="buttonsVisibility"
                    :dataSource="buttonsVisibilityData"
                    :fields="buttonsVisibilityField"
                    :value="showArrowValue"
                    :change="buttonsVisibilityStateChange"
                  >
                  </ejs-dropdownlist>
                </div>
              </td>
            </tr>
            <tr>
              <td>Slide Interval</td>
              <td>
                <div>
                  <ejs-dropdownlist
                    id="slideInterval"
                    :dataSource="slideIntervalData"
                    :fields="slideIntervalField"
                    :value="slideIntervalValue"
                    :change="slideIntervalStateChange"
                  >
                  </ejs-dropdownlist>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.api-carousel-section .carousel-sample {
  margin: 4em auto;
  max-width: 500px;
  height: 300px;
}

.api-carousel-section .property-panel-table td {
  margin: 0;
  padding-top: 0;
}

.api-carousel .e-carousel-items .e-carousel-item .img-container {
  height: 100%;
}

.api-carousel .e-carousel-items .e-carousel-item .img-container .img-caption {
  color: rgba(255, 255, 255);
  font-style: oblique;
  font-size: 1.5rem;
  margin: 0;
  left: 1.5rem;
  position: absolute;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  top: 1.5rem;
}
</style>

<script>
import { createApp } from 'vue';
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-vue-navigations";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";

var app = createApp();
var itemTemplate1Vue = app.component("itemTemplate1", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/bridge.jpg" alt="bridge" style="height:100%;width:100%;" />' +
    '<figcaption class="img-caption">Showing 1 of 5</figcaption>' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  }
});

var itemTemplate2Vue = app.component("itemTemplate2", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/trees.jpg" alt="spring_trees" style="height:100%;width:100%;" />' +
    '<figcaption class="img-caption">Showing 2 of 5</figcaption>' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  }
});

var itemTemplate3Vue = app.component("itemTemplate3", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/waterfall.jpg" alt="waterfall" style="height:100%;width:100%;" />' +
    '<figcaption class="img-caption">Showing 3 of 5</figcaption>' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  }
});

var itemTemplate4Vue = app.component("itemTemplate4", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/sea.jpg" alt="sea" style="height:100%;width:100%;" />' +
    '<figcaption class="img-caption">Showing 4 of 5</figcaption>' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  }
});

var itemTemplate5Vue = app.component("itemTemplate5", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/rocks.jpeg" alt="rocks" style="height:100%;width:100%;" />' +
    '<figcaption class="img-caption">Showing 5 of 5</figcaption>' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  }
});

export default {
  components: {
    "ejs-carousel": CarouselComponent,
    "e-carousel-items": CarouselItemsDirective,
    "e-carousel-item": CarouselItemDirective,
    "ejs-switch": SwitchComponent,
    "ejs-dropdownlist": DropDownListComponent
  },
  data: function () {
    return {
      interval: 3000,
      itemTemplate1: function (e) {
        return {
          template: itemTemplate1Vue,
        };
      },
      itemTemplate2: function (e) {
        return {
          template: itemTemplate2Vue,
        };
      },
      itemTemplate3: function (e) {
        return {
          template: itemTemplate3Vue,
        };
      },
      itemTemplate4: function (e) {
        return {
          template: itemTemplate4Vue,
        };
      },
      itemTemplate5: function (e) {
        return {
          template: itemTemplate5Vue,
        };
      },
      buttonsVisibilityData: [
        { text: "Hidden", value: "Hidden" },
        { text: "Visible", value: "Visible" },
        { text: "On Hover", value: "VisibleOnHover" },
      ],
      buttonsVisibilityField: { text: "text", value: "value" },
      showArrowValue: "Visible",
      slideIntervalData: [
        { text: "3 Seconds", value: "3000" },
        { text: "5 Seconds", value: "5000" },
        { text: "7 Seconds", value: "7000" },
      ],
      slideIntervalField: { text: "text", value: "value" },
      slideIntervalValue: "3000",
    };
  },
  methods: {
    buttonsVisibilityStateChange: function (args) {
      this.$refs.carObj.ej2Instances.buttonsVisibility = args.value;
      this.$refs.carObj.ej2Instances.dataBind();
    },
    showIndicatorsStateChange: function (args) {
      this.$refs.carObj.ej2Instances.showIndicators = args.checked;
      this.$refs.carObj.ej2Instances.dataBind();
    },
    showPlayButtonStateChange: function (args) {
      this.$refs.carObj.ej2Instances.showPlayButton = args.checked;
      this.$refs.carObj.ej2Instances.dataBind();
    },
    slideIntervalStateChange: function (args) {
      this.$refs.carObj.ej2Instances.interval = args.value;
      this.$refs.carObj.ej2Instances.dataBind();
    },
    enableAutoplayStateChange: function (args) {
      this.$refs.carObj.ej2Instances.autoPlay = args.checked;
      this.$refs.carObj.ej2Instances.dataBind();
    },
    infiniteLoopingStateChange: function (args) {
      this.$refs.carObj.ej2Instances.loop = args.checked;
      this.$refs.carObj.ej2Instances.dataBind();
    },
  },
};
</script>
