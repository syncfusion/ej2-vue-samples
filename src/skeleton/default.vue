<template>
    <div class="control-section">
        <div class="row skeleton-default">
            <div class="col-sm-6">
                <p class="displayText">Circle</p>
                <ejs-skeleton class="skeleton" id="skeletonCircleSmall" shape="Circle" width="3rem"></ejs-skeleton>
                <ejs-skeleton class="skeleton" id="skeletonCircleMedium" shape="Circle" width="48px"></ejs-skeleton>
                <ejs-skeleton class="skeleton" id="skeletonCircleLarge" shape="Circle" width="64px"></ejs-skeleton>
                <ejs-skeleton class="skeleton" id="skeletonCircleLarger" shape="Circle" width="80px"></ejs-skeleton>
            </div>
            <div class="col-sm-6">
                <p class="displayText">Square</p>
                <ejs-skeleton class="skeleton" id="skeletonSquareSmall" shape="Square" width="3rem"></ejs-skeleton>
                <ejs-skeleton class="skeleton" id="skeletonSquareMedium" shape="Square" width="48px"></ejs-skeleton>
                <ejs-skeleton class="skeleton" id="skeletonSquareLarge" shape="Square" width="64px"></ejs-skeleton>
                <ejs-skeleton class="skeleton" id="skeletonSquareLarger" shape="Square" width="80px"></ejs-skeleton>
            </div>
        </div>
        <div class="row skeleton-default">
            <div class="col-sm-6">
                <p class="displayText">Text</p>
                <ejs-skeleton id="skeletonText" width="100%" height="15px"></ejs-skeleton>
                <ejs-skeleton id="skeletonTextMedium" width="30%" height="15px"></ejs-skeleton>
                <br />
                <ejs-skeleton id="skeletonTextSmall" width="15%" height="15px"></ejs-skeleton>
                <br />
                <ejs-skeleton id="skeletonTextMedium1" width="60%" height="15px"></ejs-skeleton>
                <br />
                <ejs-skeleton id="skeletonTextSmall1" width="15%" height="15px"></ejs-skeleton>
            </div>
            <div class="col-sm-6">
                <p class="displayText">Rectangle</p>
                <ejs-skeleton id="skeletonRectangle" shape="Rectangle" width='100%' height='100px'></ejs-skeleton>
                <ejs-skeleton id="skeletonRectangleMedium" shape="Rectangle" width='20%' height='35px'></ejs-skeleton>
                <ejs-skeleton id="skeletonRectangleMediumRight" shape="Rectangle" width='20%' height='35px'>
                </ejs-skeleton>
            </div>
        </div>


        <div id="action-description">
            <p>
                This sample demonstrates the different shapes supported by the skeleton component. The skeleton is an animating placeholder which shows the expected layout before the actual content is loaded.
            </p>
        </div>
        <div id="description">
            <p>
                The shape of skeleton can be changed using the <code>shape</code> property. It supports <b>Circle</b>, <b>Square</b>, <b>Text</b> and <b>Rectangle</b>. By default, the wave animation effect is applied.
            </p>
        </div>
    </div>
</template>
  
<style>
    .skeleton-default .col-sm-6 {
        padding: 20px;
        min-height: 150px;
        position: relative;
    }
    .skeleton-default #skeletonRectangleMediumRight{
        float: right;
    }
    .skeleton {
        margin-left: 2px;
    }
    p.displayText {
        margin: 10px 0px;
        font-weight: 500;
    }
</style>
  
<script>
import { SkeletonComponent } from "@syncfusion/ej2-vue-notifications";

export default {
    data: function () {
        return {};
    },
    components: { 'ejs-skeleton': SkeletonComponent }
};
</script>
  