<template>
  <div class="col-lg-12 control-section">
    <div id="default-rating-control">
        <div class="rating-content" >
            <label>Basic</label><br/>
            <ejs-rating id='rating1'></ejs-rating>
        </div>
        <div class="rating-content">
            <label>Reset</label><br/>
            <ejs-rating id='rating2' :allowReset="true" value="3.0"></ejs-rating>
        </div>
        <div class="rating-content">
            <label>Single selection</label><br/>
            <ejs-rating id='rating3' :enableSingleSelection="true" value="3.0"></ejs-rating>
        </div>
        <div class="rating-content">
            <label>ReadOnly</label><br/>
            <ejs-rating id='rating4' :readOnly="true" value="3.0"></ejs-rating>
        </div>
        <div class="rating-content">
            <label>Disabled</label><br/>
            <ejs-rating id='rating5' :disabled="true" value="3.0"></ejs-rating>
        </div>
        <div class="rating-content">
            <label>Item count</label><br/>
            <ejs-rating id='rating6' itemsCount="8" value="3.0"></ejs-rating>
        </div>
    </div>
    <div id="action-description">
        <p>
            This sample demonstrates the default functionalities of the Rating component. The component lets a user provide a star rating or view other people's ratings on a numeric scale for any service provided, such as for movies, applications, or products. 
        </p>
    </div>
    <div id="description">
        <p>
            This example showcases the usage of the <code>allowReset</code>, <code>readOnly</code>, <code>enableSingleSelection</code>, <code>itemsCount</code>, and <code>disabled</code> properties in the Vue Rating component.
        </p>
    </div>
  </div>
</template>

<style scoped>
    #default-rating-control .rating-content {
        width: 240px;
        margin: 15px 0;
        min-height: 75px;
        padding:0;
        text-align: center;
    }
    .e-bigger #default-rating-control .rating-content {
        width: 330px;
        margin: 15px 0;
        min-height: 75px;
        padding:0;
        text-align: center;
    }
    #default-rating-control {
        margin: 6% auto;
        max-width: 800px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .fluent2-dark #default-rating-control {
        background-color: #1f1f1f;
        color: #fff
    }
    .fluent2-highcontrast #default-rating-control {
        background-color: #1C1B1F;
        color: #fff
    }
</style>

<script>
import { RatingComponent } from "@syncfusion/ej2-vue-inputs";
import { Browser } from "@syncfusion/ej2-base";

export default {
    components: {
    'ejs-rating': RatingComponent,
    },
    methods: {
        isMobileMode() {
            return Browser.isDevice;
        },
        hideTooltipOnScroll() {
            var tooltipElement = document.querySelector('.e-rating-tooltip');
            if (tooltipElement && this.isMobileMode()) {
                tooltipElement.style.display = 'none';
            }
        }
    },
    mounted() {
        if (document.getElementById('right-pane')) {
            document.getElementById('right-pane').addEventListener('scroll', this.hideTooltipOnScroll);
    }
        window.addEventListener('scroll', this.hideTooltipOnScroll);
    },
    beforeUnmount() {
        if (document.getElementById('right-pane')) {
            document.getElementById('right-pane').removeEventListener('scroll', this.hideTooltipOnScroll);
        }
        window.removeEventListener('scroll', this.hideTooltipOnScroll);
    }
};
</script>