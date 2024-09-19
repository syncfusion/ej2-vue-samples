<template>
    <div class="control-section default-carousel-section">
        <div class="col-lg-12">
            <div class="carousel-sample">
                <ejs-carousel cssClass="default-carousel">
                    <e-carousel-items>
                        <e-carousel-item :template="itemTemplate1"></e-carousel-item>
                        <e-carousel-item :template="itemTemplate2"></e-carousel-item>
                        <e-carousel-item :template="itemTemplate3"></e-carousel-item>
                        <e-carousel-item :template="itemTemplate4"></e-carousel-item>
                        <e-carousel-item :template="itemTemplate5"></e-carousel-item>
                    </e-carousel-items>
                </ejs-carousel>
            </div>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the basic rendering of the <a aria-label="Vue carousel" href="https://www.syncfusion.com/vue-ui-components/vue-carousel" target="_blank">Vue Carousel</a> component with
            <code>items</code>.
        </p>
    </div>
    <div id="description">
        <p>
            The <code>Vue Carousel</code> component is commonly used as a slideshow of images and contents. In this
            demo, simple slideshow of natural images has been showcased with the help of <code>items</code> property.
        </p>
        <p>
            By default, the slide will be changed automatically with the interval of <b>5 seconds.</b> You can also manually
            change the slide items using previous and next icons.
        </p>
        <p>
            More information about Carousel component can be found in this <a target='_blank'
            href="https://ej2.syncfusion.com/vue/documentation/carousel/getting-started/">documentation section</a>.
        </p>
    </div>
</template>

<style>
    .default-carousel-section .carousel-sample {
        margin: 0 auto 2em;
        max-width: 500px;
        height: 300px;
    }

    .default-carousel .e-carousel-items .e-carousel-item .img-container {
        height: 100%;
    }

    .default-carousel .e-carousel-items .e-carousel-item .img-caption {
        bottom: 5em;
        color: #fff;
        font-size: 12pt;
        height: 2em;
        position: relative;
        padding: 0.3em 1em;
        text-align: center;
        width: 100%;
    }
</style>

<script>
import { createApp } from 'vue';
import { CarouselComponent, CarouselItemsDirective, CarouselItemDirective } from "@syncfusion/ej2-vue-navigations";

var app = createApp();

var itemTemplate1Vue = app.component("itemTemplate1", {
    template: '<figure class="img-container">' +
        '<img src="src/carousel/images/bridge.jpg" alt="bridge" style="height:100%;width:100%;" />' +
        '<figcaption class="img-caption">Golden Gate Bridge, San Francisco</figcaption>' +
        '</figure>',
    data() {
        return {
            data: {}
        };
    }
});

var itemTemplate2Vue = app.component("itemTemplate2", {
    template: '<figure class="img-container">' +
        '<img src="src/carousel/images/trees.jpg" alt="spring_trees" style="height:100%;width:100%;" />' +
        '<figcaption class="img-caption">Spring Flower Trees</figcaption>' +
        '</figure>',
    data() {
        return {
            data: {}
        };
    }
});

var itemTemplate3Vue = app.component("itemTemplate3", {
    template: '<figure class="img-container">' +
        '<img src="src/carousel/images/waterfall.jpg" alt="waterfall" style="height:100%;width:100%;" />' +
        '<figcaption class="img-caption">Oddadalen Waterfalls, Norway</figcaption>' +
        '</figure>',
    data() {
        return {
            data: {}
        };
    }
});

var itemTemplate4Vue = app.component("itemTemplate4", {
    template: '<figure class="img-container">' +
        '<img src="src/carousel/images/sea.jpg" alt="sea" style="height:100%;width:100%;" />' +
        '<figcaption class="img-caption">Anse Source d\'Argent, Seychelles</figcaption>' +
        '</figure>',
    data() {
        return {
            data: {}
        };
    }
});

var itemTemplate5Vue = app.component("itemTemplate5", {
    template: '<figure class="img-container">' +
        '<img src="src/carousel/images/rocks.jpeg" alt="rocks" style="height:100%;width:100%;" />' +
        '<figcaption class="img-caption">Stonehenge, England</figcaption>' +
        '</figure>',
    data() {
        return {
            data: {}
        };
    }
});

export default {
    components: {
        'ejs-carousel': CarouselComponent,
        'e-carousel-items': CarouselItemsDirective,
        'e-carousel-item': CarouselItemDirective
    },
    data: function () {
        return {
            itemTemplate1: function (e) {
                return {
                    template: itemTemplate1Vue
                };
            },
            itemTemplate2: function (e) {
                return {
                    template: itemTemplate2Vue
                };
            },
            itemTemplate3: function (e) {
                return {
                    template: itemTemplate3Vue
                };
            },
            itemTemplate4: function (e) {
                return {
                    template: itemTemplate4Vue
                };
            },
            itemTemplate5: function (e) {
                return {
                    template: itemTemplate5Vue
                };
            }
        }
    },
    methods: {}
};
</script>
