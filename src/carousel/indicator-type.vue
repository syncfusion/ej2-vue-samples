<template>
<div class="control-section indicator-type-section">
    <div class="col-lg-12">
        <div class="row">
            <div class="col-lg-6 carousel-sample">
            <h4>Default Indicator</h4>
            <ejs-carousel cssClass="indicator-type" indicatorsType="Default" :autoPlay="false">
                <e-carousel-items>
                    <e-carousel-item :template="itemTemplate1"></e-carousel-item>
                    <e-carousel-item :template="itemTemplate2"></e-carousel-item>
                    <e-carousel-item :template="itemTemplate3"></e-carousel-item>
                    <e-carousel-item :template="itemTemplate4"></e-carousel-item>
                    <e-carousel-item :template="itemTemplate5"></e-carousel-item>
                </e-carousel-items>
            </ejs-carousel>
        </div>
        <div class="col-lg-6 carousel-sample">
            <h4>Dynamic Indicator</h4>
            <ejs-carousel cssClass="indicator-type" indicatorsType="Dynamic" :autoPlay="false">
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
        <div class="row">
            <div class="col-lg-6 carousel-sample">
            <h4>Fraction Indicator</h4>
            <ejs-carousel cssClass="indicator-type" indicatorsType="Fraction" :autoPlay="false">
                <e-carousel-items>
                    <e-carousel-item :template="itemTemplate1"></e-carousel-item>
                    <e-carousel-item :template="itemTemplate2"></e-carousel-item>
                    <e-carousel-item :template="itemTemplate3"></e-carousel-item>
                    <e-carousel-item :template="itemTemplate4"></e-carousel-item>
                    <e-carousel-item :template="itemTemplate5"></e-carousel-item>
                </e-carousel-items>
            </ejs-carousel>
        </div> 

        <div class="col-lg-6 carousel-sample">
            <h4>Progress Indicator</h4>
            <ejs-carousel cssClass="indicator-type" indicatorsType="Progress" :autoPlay="false">
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
        <div id="action-description">
            <p>This sample demonstrates the types of indicators in the <a href="https://www.syncfusion.com/javascript-ui-controls/js-carousel" target="_blank">React Carousel</a> component.</p>
        </div>
        <div id="description">
            <p>In this demo, the available types of indicators of JavaScript Carousel are showcased. They are <code>default</code>, <code>dynamic</code>, <code>progress</code> and <code>fraction</code>, and can be set using the <strong>indicatorsType</strong> property. </p>
            <p><code>Default</code> - The Carousel displays indicators with a bullet design.</p>
            <p><code>Dynamic</code> - The Carousel applies dynamic animation to the indicators.</p>
            <p><code>Fraction</code> - The Carousel displays slides numerically as indicators.</p>
            <p><code>Progress</code> - The Carousel displays indicators like a progress bar.</p>
        </div>
    </div>
</div>
</template>

<style>
    .indicator-type-section .carousel-sample {
        margin: -0.5em 0 5.6em 0;
        height: 200px;
    }

    .indicator-type .e-carousel-items .e-carousel-item .img-container {
        height: 100%;
    }

    .indicator-type.e-carousel .e-progress {
        background: none;
    }

    .indicator-type.e-carousel .e-next-icon::before,
    .indicator-type.e-carousel .e-previous-icon::before {
        color: black;
    }

    .indicator-type {
        border: 1px solid #d7d7d7;
    }

    .indicator-type .e-slide {
        height: 100%;
        width: 100%;
        margin-top: 4em;
        font-size: 21px;
        text-align: center;
        color: black;
    }

    .indicator-type.e-carousel .e-carousel-indicators.e-dynamic .e-indicator-bars .e-indicator-bar:not(.e-active),
    .indicator-type.e-carousel .e-carousel-indicators.e-default .e-indicator-bars .e-indicator-bar:not(.e-active) div {
        background-color: gray;
    }

    .indicator-type.e-carousel .e-carousel-indicators.e-fraction .e-indicator-bars {
        color: black;
    }

    .indicator-type.e-carousel .e-carousel-items .e-carousel-item {
        background-color: #f9f8f8;
    }

    @media screen and (max-width: 768px) {
        .indicator-type-section .carousel-sample {
            margin: 5em 0;
        }

        .indicator-type-section .row {
            margin-top: -5em;
        }
    }
</style>

<script>
import Vue from "vue";
import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(CarouselPlugin);

var itemTemplate1Vue = Vue.component("itemTemplate1", {
    template: '<div class="e-slide">Slide 1</div>',
    data() {
        return {
            data: {}
        };
    }
});

var itemTemplate2Vue = Vue.component("itemTemplate2", {
    template: '<div class="e-slide">Slide 2</div>',
    data() {
        return {
            data: {}
        };
    }
});

var itemTemplate3Vue = Vue.component("itemTemplate3", {
    template: '<div class="e-slide">Slide 3</div>',
    data() {
        return {
            data: {}
        };
    }
});

var itemTemplate4Vue = Vue.component("itemTemplate4", {
    template: '<div class="e-slide">Slide 4</div>',
    data() {
        return {
            data: {}
        };
    }
});

var itemTemplate5Vue = Vue.component("itemTemplate5", {
    template: '<div class="e-slide">Slide 5</div>',
    data() {
        return {
            data: {}
        };
    }
});

export default Vue.extend({
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
});
</script>
