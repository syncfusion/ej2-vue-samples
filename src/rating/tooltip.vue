<template>
    <div class="col-lg-12 control-section">
        <div id="tooltip-rating-control">
            <div class="rating-content" >
                <label>Default</label><br/>
                <ejs-rating id='rating1' value="3.0"/>
            </div>
            <div class="rating-content">
                <label>Template</label><br/>
                <ejs-rating id='rating2' tooltipTemplate="<span>${value} Star</span>" value="3.0"/>
            </div>
        </div>
        <div id="action-description">
            <p>
                The following sample demonstrates the tooltip and its customization using templates in the Vue Rating component.
            </p>
        </div>
        <div id="description">
            <p>
                The <code>tooltipTemplate</code> property customizes the tooltip template in the Vue Rating component.
            </p>
        </div>
    </div>
</template>
<style scoped>
    #tooltip-rating-control .rating-content {
        width: 240px;
        margin: 15px 0;
        min-height: 75px;
        padding:0;
        text-align: center;
    }
    .e-bigger #tooltip-rating-control .rating-content {
        width: 330px;
        margin: 15px 0;
        min-height: 75px;
        padding:0;
        text-align: center;
    }
    #tooltip-rating-control {
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
    components: { 'ejs-rating': RatingComponent },
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