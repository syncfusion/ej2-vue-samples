<template>
  <div class="control-section template-carousel-section">
    <div class="col-lg-12">
      <div class="carousel-sample">
        <ejs-carousel
          ref="carObj"
          cssClass="templateCarousel"
          :previousButtonTemplate="'previousTemplate'"
          :nextButtonTemplate="'nextTemplate'"
          :indicatorsTemplate="indicatorsTemplate"
          :animationEffect="animation"
          :buttonsVisibility="buttonsVisibility"
        >
        <template v-slot:previousTemplate>
          <ejs-button cssClass="e-flat e-outline nav-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
              <path d="m13.5 7.01 13 13m-13 13 13-13"></path>
            </svg>
          </ejs-button>
        </template>
          <template v-slot:nextTemplate>
            <ejs-button cssClass="e-flat e-outline nav-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                <path d="m13.5 7.01 13 13m-13 13 13-13"></path>
              </svg>
            </ejs-button>
          </template>     
          <e-carousel-items>
            <e-carousel-item template="itemTemplate1"></e-carousel-item>
              <template v-slot:itemTemplate1>
                <figure class="img-container">
                  <img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="Cardinal"
                      style="height: 100%; width: 100%" />
                </figure>
              </template>
              <e-carousel-item template="itemTemplate2"></e-carousel-item>
              <template v-slot:itemTemplate2>
                <figure class="img-container">
                  <img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="hunei"
                    style="height: 100%; width: 100%" />
                </figure>
              </template>
              <e-carousel-item template="itemTemplate3"></e-carousel-item>
              <template v-slot:itemTemplate3>
                <figure class="img-container">
                  <img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="costa-rica"
                    style="height: 100%; width: 100%" />
                </figure>
              </template>
              <e-carousel-item template="itemTemplate4"></e-carousel-item>
              <template v-slot:itemTemplate4>
                <figure class="img-container">
                  <img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="kaohsiung"
                    style="height: 100%; width: 100%" />
                  </figure>
              </template>
              <e-carousel-item template="itemTemplate5"></e-carousel-item>
              <template v-slot:itemTemplate5>
                <figure class="img-container">
                  <img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater"
                    style="height: 100%; width: 100%" />
                </figure>
              </template>
            </e-carousel-items>
        </ejs-carousel>
        <div id="action-description">
          <p>
            This sample demonstrates the customization of the
            <a href="https://www.syncfusion.com/vue-ui-components/vue-carousel" target="_blank">Vue Carousel</a> component using various templates.
          </p>
        </div>
        <div id="description">
          <p>
            In this demo, the <code>Vue Carousel</code> component is customized
            by using the templates. The navigators are customized using
            <code>previousButtonTemplate</code> and
            <code>nextButtonTemplate</code>. The indicators are customized using
            <code>indicatorsTemplate</code>. The carousel item is customized
            using <code>template</code> option.
          </p>
          <p>
            More information about customizing Vue Carousel component can be
            found in this
            <a
              target="_blank"
              href="https://ej2.syncfusion.com/vue/documentation/carousel/getting-started"
              >documentation section</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.template-carousel-section .carousel-sample {
  margin: 0 auto 2em;
  max-width: 500px;
  height: 350px;
}

.templateCarousel .e-carousel-items,
.templateCarousel .e-carousel-navigators {
  height: calc(100% - 3rem);
}

.templateCarousel .e-carousel-navigators .e-previous,
.templateCarousel .e-carousel-navigators .e-next,
.templateCarousel .e-carousel-navigators .nav-btn {
  padding: 0;
}

.templateCarousel .e-carousel-navigators .nav-btn:active,
.templateCarousel .e-carousel-navigators .nav-btn:focus,
.templateCarousel .e-carousel-navigators .nav-btn:hover {
  background-color: transparent !important;
  color: inherit;
}

.templateCarousel .e-carousel-navigators svg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-width: 8px;
  height: 2rem;
  vertical-align: middle;
  width: 2rem;
}

.templateCarousel .e-carousel-navigators .e-previous svg {
  transform: rotate(180deg);
}

.templateCarousel
  .e-carousel-indicators
  .e-indicator-bars
  .e-indicator-bar
  .indicator {
  background-color: #ececec;
  border-radius: 0.25rem;
  cursor: pointer;
  height: 3.5rem;
  margin: 0.5rem;
  width: 5rem;
}

.templateCarousel
  .e-carousel-indicators
  .e-indicator-bars
  .e-indicator-bar.e-active
  .indicator {
  background-color: #3c78ef;
}

@media screen and (max-width: 480px) {
  .template-carousel-section .carousel-sample {
    width: 100%;
    height: 250px;
  }
  
  .templateCarousel .img-container {
      margin: 12px;
    }
}
</style>

<script>
import { createApp } from 'vue';
import { CarouselComponent, CarouselItemDirective, CarouselItemsDirective } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

var app = createApp();

var indicatorsVue = app.component("indicators", {
  template: `<div class="indicator">
      <img :src="getThumpImage(data.index)" alt="image" style="height:100%;width:100%;" />
    </div>`,
  data() {
    return {};
  },
  computed: {},
  methods: {
    getThumpImage: function (index) {
      var birds = ["cardinal", "hunei", "costa-rica", "kaohsiung", "bee-eater"];
      return "src/carousel/images/" + birds[index] + ".png";
    },
  },
});

export default {
  components: {
    'ejs-carousel': CarouselComponent,
    'e-carousel-items': CarouselItemsDirective,
    'e-carousel-item': CarouselItemDirective,
    'ejs-button': ButtonComponent,
    },
  data: function () {
    return {
      animation: "Fade",
      buttonsVisibility: "Visible",
      indicatorsTemplate: function () {
        return {
          template: indicatorsVue,
        };
      },
    };
  },
  methods: {},
};
</script>
