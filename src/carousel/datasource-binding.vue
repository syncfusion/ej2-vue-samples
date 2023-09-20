<template>
  <div class="control-section db-carousel-section">
    <div class="col-lg-12">
      <div class="carousel-sample">
        <ejs-carousel cssClass="db-carousel" :dataSource="productDetails" buttonsVisibility="Hidden" 
          :itemTemplate="productTemplate" :animationEffect="animation"></ejs-carousel>
        <div id="action-description">
          <p>
            This sample demonstrates the basic rendering of the
            <a href="https://www.syncfusion.com/vue-ui-components/vue-carousel" target="_blank">Vue Carousel</a> component by binding
            <code>dataSource</code> property.
          </p>
        </div>
        <div id="description">
          <p>
            In this demo, products and its details available in our Syncfusion
            has been shown as slide show. The data to the Vue Carousel component
            is bound using <code>dataSource</code> property. Also,
            <code>itemTemplate</code> is used to customize the slides of the
            carousel.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.db-carousel-section .carousel-sample {
  border: 1px solid #e5e5e5;
  border-radius: 0.5em;
  margin: 0 auto 2em;
  max-width: 420px;
  height: 420px;
}

.db-carousel {
  background-color: inherit;
  border-radius: 0.5em;
}

.db-carousel .e-carousel-items .e-carousel-item .card-title,
.db-carousel .e-carousel-items .e-carousel-item .card-text {
  opacity: 0;
  text-align: justify;
  transform: translateY(20px);
}

.db-carousel .e-carousel-items .e-carousel-item.e-active .card-title,
.db-carousel .e-carousel-items .e-carousel-item.e-active .card-text {
  opacity: 1;
  transform: translateY(0px);
}

.db-carousel .e-carousel-items .e-carousel-item .card-title {
  font-size: 20px;
  transition: transform 0.4s ease 0.2s;
}

.db-carousel .e-carousel-items .e-carousel-item .card-text {
  font-size: 14px;
  transition: transform 0.4s ease 0.2s;
}

.db-carousel .e-carousel-indicators {
  height: 3em;
}

.db-carousel .e-carousel-indicators.e-default .e-indicator-bar .e-indicator div {
  background-color: #e7e7e7;
}

@media screen and (max-width: 480px) {
  .db-carousel-section .carousel-sample {
    width: 100%;
    height: 440px;
  }
}
</style>

<script>
import { createApp } from 'vue';
import { CarouselComponent } from "@syncfusion/ej2-vue-navigations";

var app = createApp();
var productVue = app.component("product", {
  template:
    '<div class="card">' +
    '<img class="card-img-top" :src="getImage" :alt="getAlt" style="height:210px;width:100%;" />' +
    '<div class="card-body" style="padding:1rem;">' +
    "<h5>{{data.Title}}</h5>" +
    '<p class="card-text">{{data.Content}}</p>' +
    "</div>" +
    "</div>",
  data() {
    return {
      data: {},
    };
  },
  computed: {
    getAlt: function (args) {
      return args.$data.data.Title;
    },
    getImage: function (args) {
      return args.$data.data.ImgPath;
    },
  },
  methods: {},
});

export default {
  components: {
    'ejs-carousel': CarouselComponent
    },
  data: function () {
    return {
      animation: "Fade",
      productDetails: [
        {
          ID: 1,
          Title: "San Francisco",
          Content: "San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California. Located in Northern California, San Francisco is the 17th most populous city proper in the United States, and the fourth most populous in California.",
          ImgPath: "src/carousel/images/san-francisco.jpg",
          URL: "https://en.wikipedia.org/wiki/San_Francisco"
        }, {
          ID: 2,
          Title: "London",
          Content: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.",
          ImgPath: "src/carousel/images/london.jpg",
          URL: "https://en.wikipedia.org/wiki/London"
        }, {
          ID: 3,
          Title: "Tokyo",
          Content: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens.",
          ImgPath: "src/carousel/images/tokyo.jpg",
          URL: "https://en.wikipedia.org/wiki/Tokyo"
        }, {
          ID: 4,
          Title: "Moscow",
          Content: "Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury. Outside its walls is Red Square, Russia`s symbolic center.",
          ImgPath: "src/carousel/images/moscow.jpg",
          URL: "https://en.wikipedia.org/wiki/Moscow"
        },
      ],
      productTemplate: function (e) {
        return {
          template: productVue,
        };
      },
    };
  },
};
</script>
