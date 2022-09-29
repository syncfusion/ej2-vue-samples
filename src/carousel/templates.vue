<template>
  <div class="control-section template-carousel-section">
    <div class="col-lg-12">
      <div class="carousel-sample">
        <ejs-carousel
          ref="carObj"
          cssClass="templateCarousel"
          :previousButtonTemplate="previousTemplate"
          :nextButtonTemplate="nextTemplate"
          :indicatorsTemplate="indicatorsTemplate"
          :animationEffect="animation"
          :buttonsVisibility="buttonsVisibility"
        >
          <e-carousel-items>
            <e-carousel-item :template="itemTemplate1"></e-carousel-item>
            <e-carousel-item :template="itemTemplate2"></e-carousel-item>
            <e-carousel-item :template="itemTemplate3"></e-carousel-item>
            <e-carousel-item :template="itemTemplate4"></e-carousel-item>
            <e-carousel-item :template="itemTemplate5"></e-carousel-item>
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
import Vue from "vue";
import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ButtonPlugin);
Vue.use(CarouselPlugin);

var itemTemplate1Vue = Vue.component("itemTemplate1", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/cardinal.png" alt="cardinal" style="height:100%;width:100%;" />' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  },
  computed: {},
  methods: {},
});

var itemTemplate2Vue = Vue.component("itemTemplate2", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/hunei.png" alt="hunei" style="height:100%;width:100%;" />' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  },
  computed: {},
  methods: {},
});

var itemTemplate3Vue = Vue.component("itemTemplate3", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/costa-rica.png" alt="costa-rica" style="height:100%;width:100%;" />' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  },
  computed: {},
  methods: {},
});

var itemTemplate4Vue = Vue.component("itemTemplate4", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/kaohsiung.png" alt="kaohsiung" style="height:100%;width:100%;" />' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  },
  computed: {},
  methods: {},
});

var itemTemplate5Vue = Vue.component("itemTemplate5", {
  template:
    '<figure class="img-container">' +
    '<img src="src/carousel/images/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" />' +
    "</figure>",
  data() {
    return {
      data: {},
    };
  },
  computed: {},
  methods: {},
});

var previousVue = Vue.component("previousButton", {
  template: `<ejs-button cssClass="e-flat e-outline nav-btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
      <path d="m13.5 7.01 13 13m-13 13 13-13"></path>
    </svg>
  </ejs-button>`,
  data() {
    return {
      data: {},
    };
  },
  computed: {},
  methods: {},
});

var nextVue = Vue.component("nextButton", {
  template: `<ejs-button cssClass="e-flat e-outline nav-btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
      <path d="m13.5 7.01 13 13m-13 13 13-13"></path>
    </svg>
  </ejs-button>`,
  data() {
    return {
      data: {},
    };
  },
  computed: {},
  methods: {},
});

var indicatorsVue = Vue.component("indicators", {
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

export default Vue.extend({
  data: function () {
    return {
      animation: "Fade",
      buttonsVisibility: "Visible",
      itemTemplate1: function () {
        return {
          template: itemTemplate1Vue,
        };
      },
      itemTemplate2: function () {
        return {
          template: itemTemplate2Vue,
        };
      },
      itemTemplate3: function () {
        return {
          template: itemTemplate3Vue,
        };
      },
      itemTemplate4: function () {
        return {
          template: itemTemplate4Vue,
        };
      },
      itemTemplate5: function () {
        return {
          template: itemTemplate5Vue,
        };
      },
      previousTemplate: function () {
        return {
          template: previousVue,
        };
      },
      nextTemplate: function () {
        return {
          template: nextVue,
        };
      },
      indicatorsTemplate: function () {
        return {
          template: indicatorsVue,
        };
      },
    };
  },
  methods: {},
});
</script>
