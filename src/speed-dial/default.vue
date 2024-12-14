<template>
    <div class="control-section">
        <div id="speed-dial-wrapper">
            <div id="target" class="speeddial-default-target custom-index">
                <ejs-speeddial openIconCss='e-icons e-justify'
                    closeIconCss='e-icons e-close' :items='items' target='#target'
                    position='BottomCenter' title="Menu"></ejs-speeddial>
            </div>
        </div>
        <div id="action-description">
            <p>
                This sample demonstrates the default functionalities of the Speed Dial component. Speed dial is a <b>transition type</b> of FAB which displays a list of action buttons when clicked.
                </p>
        </div>
        <div id="description">
            <p>
                The Speed Dial component is used to display multiple action items for the floating action button. It is useful when there are more than one primary action on the page. The Speed dial displays action items in linear and radial directions. 
            </p>
        </div>
    </div>
</template>
   
<script>
import { SpeedDialComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: { 'ejs-speeddial': SpeedDialComponent },
    data: function () {
        return {
            items: [
                {
                    title:'Home',
                    iconCss:'e-icons e-home'
                },
                {
                    title:'People',
                    iconCss:'e-icons e-people'
                },
                {
                    title:'Search',
                    iconCss:'e-icons e-search'
                },
                {
                    title:'Message',
                    iconCss:'e-icons e-comment-show'
                }
            ]
        };
    }
}
</script> 
<style>
    .speeddial-default-target {
        min-height: 300px;
        position: relative;
        margin-bottom: 35px;
    }
    .custom-index {
        z-index:500 !important;
    }
</style>