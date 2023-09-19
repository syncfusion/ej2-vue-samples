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
</style>
<script>
import { RatingComponent } from "@syncfusion/ej2-vue-inputs";

export default {
    components: { 'ejs-rating': RatingComponent }
};
</script>
