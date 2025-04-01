<template>
    <div class="col-lg-12 control-section">
        <div id="nav-rating-control">
            <ejs-rating id='rating1' value="3.0" :allowReset="true"/> 
        </div>
        <div id="action-description">
            <p>
                This demo showcases the keyboard shortcuts applicable in the Rating component.
            </p>
        </div>
        <div id="description">
            <i>The below key combinations can be used in Rating to perform various actions. </i>
            <ul>
                <li>
                    <span class="key-class"><kbd>Tab</kbd></span>
                    <span> - Focus.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Left Arrow</kbd></span>
                    <span> - Increase in RTL and decrease in LTR.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Right Arrow</kbd></span>
                    <span> - Decrease in RTL and increase in LTR.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Down arrow</kbd></span>
                    <span> - Decreases the value.</span>
                </li>
                <li>
                    <span class="key-class"><kbd>Up arrow</kbd></span>
                    <span> - Increases the value.</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    #nav-rating-control {
        text-align: center;
        margin: 6% auto;
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