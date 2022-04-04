<template>
  <div class="control-section overview-carousel-section">
    <div class="col-lg-12">
      <div class="carousel-sample">
        <div style="height:calc(100% - 4rem);">
          <div class="carousel-content">
            <div class="carousel-navigations">
              <ejs-button id="previousBtn" title="Previous" class="carousel-navigation" cssClass="e-flat e-round"
                iconCss="e-icons e-arrow-left" v-on:click.native="onNavigationClick('prev')"></ejs-button>
            </div>
            <ejs-carousel ref="carouselObj" cssClass="overview-carousel" width="calc(100% - 10rem)" buttonsVisibility="Hidden"
              :showIndicators="false" :itemTemplate="itemTemplate" :dataSource="carouselData" :slideChanging="onSlideChange">
            </ejs-carousel>
            <div class="carousel-navigations">
              <ejs-button id="nextBtn" title="Next" class="carousel-navigation" cssClass="e-flat e-round"
                iconCss="e-icons e-arrow-right" v-on:click.native="onNavigationClick('next')"></ejs-button>
            </div>
            <div id="action-description">
              <p>
                  This sample demonstrates the overview of the <strong>Vue Carousel</strong> component and customizing it with
                  external navigators.
              </p>
            </div>
            <div id="description">
              <p>
                The <code>Vue Carousel</code> component is commonly used as a slideshow of images and contents. In this demo,
                the external navigators and indicators are rendered outside the carousel by hiding the default navigators and
                indicators using <code>buttonsVisibility</code> and <code>showIndicators</code> properties.The slide items are rendered using
                <code>dataSource</code> and customized using <code>itemTemplate</code>.
              </p>
              <p>
                The external navigation of slide items is handled using public methods <code>prev</code> and <code>next</code> and
                changing <code>selectedIndex</code> property.
              </p>
              <p>
                More information about Vue Carousel component can be found in this <a target='_blank'
                href="https://ej2.syncfusion.com/documentation/vue/carousel/getting-started/">documentation section</a>.
              </p>
            </div>
          </div>
        </div>
        <div style="height:4rem;">
          <div class="carousel-footer">
            <div class="indicator-container">
              <ejs-button class="indicator active-indicator" cssClass="e-flat e-round" v-on:click.native="onIndicatorClick(0)"></ejs-button>
              <ejs-button class="indicator" cssClass="e-flat e-round" v-on:click.native="onIndicatorClick(1)"></ejs-button>
              <ejs-button class="indicator" cssClass="e-flat e-round" v-on:click.native="onIndicatorClick(2)"></ejs-button>
              <ejs-button class="indicator" cssClass="e-flat e-round" v-on:click.native="onIndicatorClick(3)"></ejs-button>
              <ejs-button class="indicator" cssClass="e-flat e-round" v-on:click.native="onIndicatorClick(4)"></ejs-button>
            </div>
            <div class="button-container">
              <ejs-button ref="playPause" id="playPauseBtn" cssClass="e-flat e-round play-button" iconCss="e-icons e-pause"
                isToggle=true v-on:click.native="onPlayPauseClick"></ejs-button>
            </div>
          </div>
        </div>
      </div>
      <div id='source_link'>Source: &nbsp;
        <table>
          <tr>
            <td>
              <a href="https://store.google.com/?hl=en-GB" target='_blank'>https://store.google.com</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.apple.com/in/iphone-13-pro/" target='_blank'>https://www.apple.com</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.nokia.com/phones/en_in/nokia-xr-20?sku=VMA750B9FI1CN0"
                target='_blank'>https://www.nokia.com</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.oneplus.in/oneplus-9rt" target='_blank'>https://www.oneplus.in</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.samsung.com/in/smartphones/galaxy-s21-5g/" target='_blank'>https://www.samsung.com</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.overview-carousel-section .carousel-sample {
  border-radius: 1rem;
  color: #6c757d;
  height: 400px;
  margin: 0 auto 2em;
  width: 600px;
}

.overview-carousel .e-carousel-items .e-carousel-item .card {
  height: 100%;
}

.overview-carousel .e-carousel-items .e-carousel-item .card-body {
  height: 100%;
  padding: 1rem;
}

.overview-carousel .e-carousel-items .e-carousel-item .card-body .card-header {
  align-items: center;
  display: flex;
  font-weight: 500;
  height: 3rem;
  justify-content: center;
}

.overview-carousel
  .e-carousel-items
  .e-carousel-item
  .card-body
  .card-header
  .card-title {
  font-size: 1.5rem;
  text-transform: uppercase;
}

.overview-carousel .e-carousel-items .e-carousel-item .card-body .card-content {
  display: flex;
  height: calc(100% - 3rem);
}

.overview-carousel
  .e-carousel-items
  .e-carousel-item
  .card-body
  .card-content
  .card-left-content,
.overview-carousel
  .e-carousel-items
  .e-carousel-item
  .card-body
  .card-content
  .card-right-content {
  padding: 2rem;
  width: 50%;
}

.overview-carousel
  .e-carousel-items
  .e-carousel-item
  .card-body
  .card-content
  .card-left-content
  .img-container {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
}

.overview-carousel
  .e-carousel-items
  .e-carousel-item
  .card-body
  .card-content
  .card-right-content
  table {
  table-layout: fixed;
  width: 100%;
}

.overview-carousel
  .e-carousel-items
  .e-carousel-item
  .card-body
  .card-content
  .card-right-content
  table
  td.card-text {
  font-size: 1.4rem;
}

.overview-carousel
  .e-carousel-items
  .e-carousel-item
  .card-body
  .card-content
  .card-right-content
  table
  td {
  padding-bottom: 1rem;
}

.overview-carousel
  .e-carousel-items
  .e-carousel-item
  .card-body
  .card-content
  .card-right-content
  table
  tr
  td:first-child {
  font-weight: 500;
}

.carousel-content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

.carousel-content .carousel-navigations {
  align-items: center;
  display: flex;
  height: 5rem;
  justify-content: center;
  width: 5rem;
}

.carousel-footer {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

.carousel-footer .indicator-container,
.carousel-footer .button-container {
  align-items: center;
  display: flex;
  height: 2rem;
  justify-content: center;
  gap: 0.5rem;
}

.carousel-footer .indicator-container .indicator {
  border-color: inherit;
  border-radius: 50%;
  cursor: pointer;
  height: 1.4rem;
  margin: 0.5rem;
  transition: all 0.5s ease-in-out;
  width: 1.4rem;
  padding: 4px;
}

.bootstrap5.e-bigger .carousel-footer .button-container .play-button span,
.bootstrap5-dark.e-bigger .carousel-footer .button-container .play-button span,
.fluent.e-bigger .carousel-footer .button-container .play-button span,
.fluent-dark.e-bigger .carousel-footer .button-container .play-button span,
.tailwind.e-bigger .carousel-footer .button-container .play-button span,
.tailwind-dark.e-bigger .carousel-footer .button-container .play-button span {
  line-height: normal;
}

.carousel-footer .indicator-container .indicator.active-indicator {
  background-color: #6c757d;
}

.carousel-footer .button-container {
  padding-left: 2.4rem;
}

.carousel-footer .button-container .e-btn.e-active {
  background-color: transparent;
  border-color: transparent;
  color: #000;
}

.carousel-footer .button-container .e-btn.e-active:focus {
  background-color: rgba(0, 0, 0, 0.2);
}

#source_link {
  float: right;
  margin-right: 10px;
}

.bootstrap-dark .overview-carousel-section .carousel-sample,
.bootstrap5-dark .overview-carousel-section .carousel-sample,
.material-dark .overview-carousel-section .carousel-sample,
.fabric-dark .overview-carousel-section .carousel-sample,
.highcontrast .overview-carousel-section .carousel-sample,
.tailwind-dark .overview-carousel-section .carousel-sample {
  background-color: inherit;
  color: inherit;
}

.bootstrap4 .carousel-footer .indicator-container .indicator:not(.active-indicator) {
  background-color: transparent;
  border-color: #6c757d;
}

.bootstrap-dark .carousel-footer .button-container .e-btn.e-active,
.bootstrap5-dark .carousel-footer .button-container .e-btn.e-active,
.material-dark .carousel-footer .button-container .e-btn.e-active,
.fabric-dark .carousel-footer .button-container .e-btn.e-active,
.highcontrast .carousel-footer .button-container .e-btn.e-active,
.tailwind-dark .carousel-footer .button-container .e-btn.e-active {
  color: #fff;
}

@media screen and (max-width: 480px) {
  .overview-carousel-section .carousel-sample {
    width: 100%;
  }
  .overview-carousel
    .e-carousel-items
    .e-carousel-item
    .card-body
    .card-content
    .card-left-content {
    padding: 2rem;
    width: 100%;
  }
  .overview-carousel
    .e-carousel-items
    .e-carousel-item
    .card-body
    .card-content
    .card-right-content {
    display: none;
  }
  #source_link {
    margin-top: -10px;
    margin-right: 0px;
  }
}

.bootstrap5 .overview-carousel-section .carousel-sample .carousel-navigations button span,
.bootstrap5-dark .overview-carousel-section .carousel-sample .carousel-navigations button span,
.fluent .overview-carousel-section .carousel-sample .carousel-navigations button span,
.fluent-dark .overview-carousel-section .carousel-sample .carousel-navigations button span,
.tailwind .overview-carousel-section .carousel-sample .carousel-navigations button span,
.tailwind-dark .overview-carousel-section .carousel-sample .carousel-navigations button span {
  font-size: 20px !important;
  line-height: normal;
}

.tailwind .overview-carousel-section .carousel-sample .carousel-footer .button-container span,
.tailwind-dark .overview-carousel-section .carousel-sample .carousel-footer .button-container span {
  font-size: 20px;
}

.bootstrap .overview-carousel-section .e-icons.e-arrow-right:before,
.bootstrap-dark .overview-carousel-section .e-icons.e-arrow-right:before {
  content: "\e84d";
}

.bootstrap .overview-carousel-section .carousel-navigations button span,
.bootstrap .overview-carousel-section .carousel-footer .button-container button span {
  color: #6c757d !important;
}
</style>

<script>
import Vue from "vue";
import { removeClass, addClass } from '@syncfusion/ej2-base';
import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(CarouselPlugin);
Vue.use(ButtonPlugin);

var itemTemplateVue = Vue.component("itemTemplate", {
  template: `<div class="card">
              <div class="card-body">
                <div class="card-header">
                  <div class="card-title">{{data.title}}</div>
                </div>
                <div class="card-content">
                  <div class="card-left-content">
                    <div class="img-container">
                      <img style="width:100%; height:100%" :src="getImage(data)" :alt="data.title" />
                    </div>
                  </div>
                  <div class="card-right-content">
                    <table>
                      <thead>
                        <tr>
                          <td class="card-text" colSpan="2">Product Details</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Model</td>
                          <td>{{data.model}}</td>
                        </tr>
                        <tr>
                          <td>Brand</td>
                          <td>{{data.brand}}</td>
                        </tr>
                        <tr>
                          <td>RAM</td>
                          <td>{{data.ram}}</td>
                        </tr>
                        <tr>
                          <td>ROM</td>
                          <td>{{data.rom}}</td>
                        </tr>
                        <tr>
                          <td>Platform</td>
                          <td>{{data.platform}}</td>
                        </tr>
                        <tr>
                          <td>Version</td>
                          <td>{{data.version}}</td>
                        </tr>
                        <tr>
                          <td>Launched on</td>
                          <td>{{data.releaseDate}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>`,
    data() {
      return {
        data: {}
      };
    },
    computed: {},
    methods: {
      getImage: function (data) {
        return data.imageUrl;
      }
    }
});

export default Vue.extend({
  data: function () {
    return {
      carouselData: [
        { imageUrl: 'src/carousel/images/google-pixel-6-pro.png', title: 'Google Pixel', model: 'Pixel 6 Pro', brand: 'Google', releaseDate: 'Oct 28, 2021', ram: '12GB', rom: '128GB', platform: 'Android', version: 12 },
        { imageUrl: 'src/carousel/images/iphone-13-pro.png', title: 'iPhone', model: 'iPhone 13 Pro', brand: 'Apple', releaseDate: 'Sept 14, 2021', ram: '4GB', rom: '128GB', platform: 'iOS', version: 15 },
        { imageUrl: 'src/carousel/images/nokia-xr-20.png', title: 'Nokia', model: 'XR-20', brand: 'Nokia', releaseDate: 'Oct 30, 2021', ram: '6GB', rom: '128GB', platform: 'Android', version: 11 },
        { imageUrl: 'src/carousel/images/one-plus-9-pro.png', title: 'OnePlus', model: 'OP9 Pro', brand: 'OnePlus', releaseDate: 'March 23, 2021', ram: '8GB', rom: '128GB', platform: 'OxygenOS based on Android', version: 11 },
        { imageUrl: 'src/carousel/images/samsung-s21-fe.png', title: 'Samsung', model: 'S21 FE', brand: 'Samsung', releaseDate: 'Jan 27, 2021', ram: '8GB', rom: '128GB', platform: 'Samsung One UI 4.0 based on Android', version: 12 }
      ],
      itemTemplate: function (e) {
        return {
          template: itemTemplateVue
        };
      }
    }
  },
  methods: {
    onNavigationClick: function (direction) {
      if (direction === 'next') {
        this.$refs.carouselObj.ej2Instances.next();
      } else {
        this.$refs.carouselObj.ej2Instances.prev();
      }
    },
    onIndicatorClick: function (index) {
      this.$refs.carouselObj.ej2Instances.selectedIndex = index;
      this.$refs.carouselObj.ej2Instances.dataBind();
    },
    onPlayPauseClick: function () {
      setTimeout(() => {
        this.$refs.carouselObj.ej2Instances.autoPlay = !this.$refs.playPause.ej2Instances.element.classList.contains('e-active');
        this.$refs.carouselObj.ej2Instances.dataBind();
        this.$refs.playPause.ej2Instances.iconCss = this.$refs.playPause.ej2Instances.element.classList.contains('e-active') ? 'e-icons e-play' : 'e-icons e-pause';
        this.$refs.playPause.ej2Instances.dataBind();
      });
    },
    onSlideChange: function (args) {
      var indicators = [].slice.call(document.querySelectorAll('.indicator'));
      removeClass(indicators, 'active-indicator');
      addClass([indicators[args.nextIndex]], 'active-indicator');
    }
  }
});
</script>
